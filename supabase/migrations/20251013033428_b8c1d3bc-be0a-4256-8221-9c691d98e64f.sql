-- =====================================================
-- FAQ MANAGER DATABASE SCHEMA
-- =====================================================

-- 1. Create enums
CREATE TYPE public.app_role AS ENUM ('admin', 'editor', 'viewer');
CREATE TYPE public.faq_status AS ENUM ('draft', 'published', 'archived');
CREATE TYPE public.audit_action AS ENUM (
  'CREATE_FAQ', 
  'UPDATE_FAQ', 
  'PUBLISH_FAQ', 
  'UNPUBLISH_FAQ', 
  'ARCHIVE_FAQ',
  'REVERT_VERSION', 
  'DELETE_FAQ', 
  'CREATE_CATEGORY',
  'UPDATE_CATEGORY', 
  'DELETE_CATEGORY',
  'REORDER_CATEGORY',
  'REORDER_FAQ'
);

-- 2. User roles table (separate from profiles for security)
CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  role app_role NOT NULL DEFAULT 'viewer',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE(user_id, role)
);

-- 3. FAQ categories
CREATE TABLE public.faq_categories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  sort_order INT NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- 4. FAQs main table
CREATE TABLE public.faqs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  category_id UUID NOT NULL REFERENCES public.faq_categories(id) ON DELETE CASCADE,
  question TEXT NOT NULL,
  answer_markdown TEXT NOT NULL,
  status faq_status NOT NULL DEFAULT 'draft',
  slug TEXT NOT NULL UNIQUE,
  tags TEXT[] DEFAULT '{}',
  is_featured BOOLEAN NOT NULL DEFAULT false,
  sort_order INT NOT NULL DEFAULT 0,
  published_at TIMESTAMPTZ,
  created_by UUID NOT NULL REFERENCES auth.users(id),
  updated_by UUID NOT NULL REFERENCES auth.users(id),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- 5. FAQ versions (history tracking)
CREATE TABLE public.faq_versions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  faq_id UUID NOT NULL REFERENCES public.faqs(id) ON DELETE CASCADE,
  version_number INT NOT NULL,
  question TEXT NOT NULL,
  answer_markdown TEXT NOT NULL,
  tags TEXT[] DEFAULT '{}',
  status faq_status NOT NULL,
  changed_by UUID NOT NULL REFERENCES auth.users(id),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE(faq_id, version_number)
);

-- 6. Audit logs
CREATE TABLE public.audit_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  actor_id UUID NOT NULL REFERENCES auth.users(id),
  action audit_action NOT NULL,
  entity_type TEXT NOT NULL,
  entity_id UUID NOT NULL,
  diff_json JSONB,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- =====================================================
-- INDEXES FOR PERFORMANCE
-- =====================================================

CREATE INDEX idx_user_roles_user_id ON public.user_roles(user_id);
CREATE INDEX idx_faqs_category_id ON public.faqs(category_id);
CREATE INDEX idx_faqs_status ON public.faqs(status);
CREATE INDEX idx_faqs_slug ON public.faqs(slug);
CREATE INDEX idx_faqs_created_by ON public.faqs(created_by);
CREATE INDEX idx_faq_versions_faq_id ON public.faq_versions(faq_id);
CREATE INDEX idx_audit_logs_actor_id ON public.audit_logs(actor_id);
CREATE INDEX idx_audit_logs_entity ON public.audit_logs(entity_type, entity_id);
CREATE INDEX idx_audit_logs_created_at ON public.audit_logs(created_at DESC);

-- =====================================================
-- SECURITY DEFINER FUNCTIONS (for RLS)
-- =====================================================

-- Check if user has a specific role
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role app_role)
RETURNS BOOLEAN
LANGUAGE SQL
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_id = _user_id AND role = _role
  )
$$;

-- Check if user is admin or editor
CREATE OR REPLACE FUNCTION public.is_admin_or_editor(_user_id UUID)
RETURNS BOOLEAN
LANGUAGE SQL
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_id = _user_id AND role IN ('admin', 'editor')
  )
$$;

-- =====================================================
-- ROW LEVEL SECURITY POLICIES
-- =====================================================

-- Enable RLS on all tables
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.faq_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.faqs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.faq_versions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.audit_logs ENABLE ROW LEVEL SECURITY;

-- user_roles policies
CREATE POLICY "Admins can view all roles"
  ON public.user_roles FOR SELECT
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can manage roles"
  ON public.user_roles FOR ALL
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

-- faq_categories policies (public read, admin/editor write)
CREATE POLICY "Anyone can view categories"
  ON public.faq_categories FOR SELECT
  TO authenticated, anon
  USING (true);

CREATE POLICY "Admin/editor can manage categories"
  ON public.faq_categories FOR ALL
  TO authenticated
  USING (public.is_admin_or_editor(auth.uid()));

-- faqs policies
CREATE POLICY "Anyone can view published FAQs"
  ON public.faqs FOR SELECT
  TO authenticated, anon
  USING (status = 'published');

CREATE POLICY "Admin/editor can view all FAQs"
  ON public.faqs FOR SELECT
  TO authenticated
  USING (public.is_admin_or_editor(auth.uid()));

CREATE POLICY "Admin/editor can create FAQs"
  ON public.faqs FOR INSERT
  TO authenticated
  WITH CHECK (public.is_admin_or_editor(auth.uid()));

CREATE POLICY "Admin/editor can update FAQs"
  ON public.faqs FOR UPDATE
  TO authenticated
  USING (public.is_admin_or_editor(auth.uid()));

CREATE POLICY "Admin can delete FAQs"
  ON public.faqs FOR DELETE
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

-- faq_versions policies
CREATE POLICY "Admin/editor can view versions"
  ON public.faq_versions FOR SELECT
  TO authenticated
  USING (public.is_admin_or_editor(auth.uid()));

CREATE POLICY "Admin/editor can create versions"
  ON public.faq_versions FOR INSERT
  TO authenticated
  WITH CHECK (public.is_admin_or_editor(auth.uid()));

-- audit_logs policies
CREATE POLICY "Admin/editor can view audit logs"
  ON public.audit_logs FOR SELECT
  TO authenticated
  USING (public.is_admin_or_editor(auth.uid()));

CREATE POLICY "Authenticated users can create audit logs"
  ON public.audit_logs FOR INSERT
  TO authenticated
  WITH CHECK (actor_id = auth.uid());

-- =====================================================
-- TRIGGERS FOR AUTOMATIC VERSION TRACKING
-- =====================================================

-- Function to create version snapshot on FAQ update
CREATE OR REPLACE FUNCTION public.create_faq_version()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  next_version INT;
BEGIN
  -- Get next version number
  SELECT COALESCE(MAX(version_number), 0) + 1
  INTO next_version
  FROM public.faq_versions
  WHERE faq_id = OLD.id;
  
  -- Insert version snapshot
  INSERT INTO public.faq_versions (
    faq_id, version_number, question, answer_markdown, 
    tags, status, changed_by
  ) VALUES (
    OLD.id, next_version, OLD.question, OLD.answer_markdown,
    OLD.tags, OLD.status, NEW.updated_by
  );
  
  RETURN NEW;
END;
$$;

CREATE TRIGGER create_version_on_update
  BEFORE UPDATE ON public.faqs
  FOR EACH ROW
  WHEN (
    OLD.question IS DISTINCT FROM NEW.question OR
    OLD.answer_markdown IS DISTINCT FROM NEW.answer_markdown OR
    OLD.status IS DISTINCT FROM NEW.status
  )
  EXECUTE FUNCTION public.create_faq_version();

-- Function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at()
RETURNS TRIGGER
LANGUAGE plpgsql
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

CREATE TRIGGER update_categories_updated_at
  BEFORE UPDATE ON public.faq_categories
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at();

CREATE TRIGGER update_faqs_updated_at
  BEFORE UPDATE ON public.faqs
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at();

-- =====================================================
-- SEED DATA
-- =====================================================

-- Insert categories
INSERT INTO public.faq_categories (name, slug, sort_order) VALUES
  ('Getting Started', 'getting-started', 1),
  ('Earnings & Compensation', 'earnings-compensation', 2),
  ('Training & Events', 'training-events', 3),
  ('Compliance & Policies', 'compliance-policies', 4),
  ('Tech & Tools', 'tech-tools', 5),
  ('Support', 'support', 6);
