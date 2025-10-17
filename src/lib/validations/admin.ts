import { z } from 'zod';

// FAQ validation schema
export const faqSchema = z.object({
  question: z.string()
    .trim()
    .min(10, 'Question must be at least 10 characters')
    .max(500, 'Question must be less than 500 characters'),
  slug: z.string()
    .trim()
    .min(1, 'Slug is required')
    .max(100, 'Slug must be less than 100 characters')
    .regex(/^[a-z0-9-]+$/, 'Slug must contain only lowercase letters, numbers, and hyphens'),
  answer_markdown: z.string()
    .trim()
    .min(20, 'Answer must be at least 20 characters')
    .max(10000, 'Answer must be less than 10,000 characters'),
  category_id: z.string()
    .trim()
    .uuid('Invalid category'),
  tags: z.string()
    .max(200, 'Tags must be less than 200 characters'),
  status: z.enum(['draft', 'published', 'archived']),
  is_featured: z.boolean(),
});

// Category validation schema
export const categorySchema = z.object({
  name: z.string()
    .trim()
    .min(1, 'Name is required')
    .max(100, 'Name must be less than 100 characters'),
  slug: z.string()
    .trim()
    .min(1, 'Slug is required')
    .max(100, 'Slug must be less than 100 characters')
    .regex(/^[a-z0-9-]+$/, 'Slug must contain only lowercase letters, numbers, and hyphens'),
  sort_order: z.number()
    .int('Sort order must be an integer')
    .min(0, 'Sort order must be 0 or greater'),
});

// QA Cluster validation schema
export const qaClusterSchema = z.object({
  cluster_number: z.number()
    .int('Cluster number must be an integer')
    .min(1, 'Cluster number must be at least 1')
    .max(9999, 'Cluster number must be less than 10,000'),
  theme: z.string()
    .trim()
    .min(5, 'Theme must be at least 5 characters')
    .max(200, 'Theme must be less than 200 characters'),
  sort_order: z.number()
    .int('Sort order must be an integer')
    .min(0, 'Sort order must be 0 or greater'),
});

// QA Item validation schema
export const qaItemSchema = z.object({
  cluster_id: z.string()
    .trim()
    .uuid('Invalid cluster'),
  cluster_number: z.number()
    .int('Cluster number must be an integer')
    .min(1, 'Cluster number must be at least 1'),
  funnel_stage: z.enum(['TOFU', 'MOFU', 'BOFU']),
  order_in_cluster: z.number()
    .int('Order must be an integer')
    .min(1, 'Order must be at least 1')
    .max(999, 'Order must be less than 1,000'),
  question: z.string()
    .trim()
    .min(10, 'Question must be at least 10 characters')
    .max(500, 'Question must be less than 500 characters'),
  answer: z.string()
    .trim()
    .min(20, 'Answer must be at least 20 characters')
    .max(5000, 'Answer must be less than 5,000 characters'),
  slug: z.string()
    .trim()
    .min(1, 'Slug is required')
    .max(100, 'Slug must be less than 100 characters')
    .regex(/^[a-z0-9-]+$/, 'Slug must contain only lowercase letters, numbers, and hyphens'),
  cta_label: z.string()
    .trim()
    .min(3, 'CTA label must be at least 3 characters')
    .max(100, 'CTA label must be less than 100 characters'),
  cta_url: z.string()
    .trim()
    .url('CTA URL must be a valid URL')
    .max(500, 'CTA URL must be less than 500 characters'),
});

// Login validation schema
export const loginSchema = z.object({
  email: z.string()
    .trim()
    .email('Invalid email address')
    .max(255, 'Email must be less than 255 characters'),
  password: z.string()
    .min(6, 'Password must be at least 6 characters')
    .max(128, 'Password must be less than 128 characters'),
});
