-- Create qa_clusters table
CREATE TABLE public.qa_clusters (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  cluster_number integer NOT NULL UNIQUE,
  theme text NOT NULL,
  sort_order integer NOT NULL DEFAULT 0,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now()
);

-- Create qa_items table
CREATE TABLE public.qa_items (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  cluster_id uuid NOT NULL REFERENCES public.qa_clusters(id) ON DELETE CASCADE,
  cluster_number integer NOT NULL,
  funnel_stage text NOT NULL CHECK (funnel_stage IN ('TOFU', 'MOFU', 'BOFU')),
  order_in_cluster integer NOT NULL,
  question text NOT NULL,
  answer text NOT NULL,
  slug text NOT NULL,
  cta_label text NOT NULL,
  cta_url text NOT NULL,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now(),
  UNIQUE(cluster_number, slug)
);

-- Enable RLS
ALTER TABLE public.qa_clusters ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.qa_items ENABLE ROW LEVEL SECURITY;

-- RLS policies for qa_clusters
CREATE POLICY "Anyone can view clusters"
  ON public.qa_clusters
  FOR SELECT
  USING (true);

CREATE POLICY "Admin/editor can manage clusters"
  ON public.qa_clusters
  FOR ALL
  USING (is_admin_or_editor(auth.uid()));

-- RLS policies for qa_items
CREATE POLICY "Anyone can view QA items"
  ON public.qa_items
  FOR SELECT
  USING (true);

CREATE POLICY "Admin/editor can manage QA items"
  ON public.qa_items
  FOR ALL
  USING (is_admin_or_editor(auth.uid()));

-- Triggers for updated_at
CREATE TRIGGER update_qa_clusters_updated_at
  BEFORE UPDATE ON public.qa_clusters
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at();

CREATE TRIGGER update_qa_items_updated_at
  BEFORE UPDATE ON public.qa_items
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at();

-- Enable realtime
ALTER PUBLICATION supabase_realtime ADD TABLE public.qa_clusters;
ALTER PUBLICATION supabase_realtime ADD TABLE public.qa_items;