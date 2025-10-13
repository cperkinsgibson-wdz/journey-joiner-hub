import { supabase } from '@/integrations/supabase/client';

export interface QAItem {
  cluster: number;
  funnel_stage: "TOFU" | "MOFU" | "BOFU";
  order_in_cluster: number;
  question: string;
  answer: string;
  cta_label: string;
  cta_url: string;
  slug: string;
}

export interface QACluster {
  id: string;
  cluster_number: number;
  theme: string;
  sort_order: number;
}

export const createSlug = (question: string): string => {
  return question
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, '')
    .replace(/\s+/g, '-')
    .trim();
};

export const getAllQAItems = async (): Promise<QAItem[]> => {
  const { data, error } = await supabase
    .from('qa_items')
    .select('*')
    .order('cluster_number')
    .order('order_in_cluster');
  
  if (error) throw error;
  
  return (data || []).map(item => ({
    cluster: item.cluster_number,
    funnel_stage: item.funnel_stage as "TOFU" | "MOFU" | "BOFU",
    order_in_cluster: item.order_in_cluster,
    question: item.question,
    answer: item.answer,
    cta_label: item.cta_label,
    cta_url: item.cta_url,
    slug: item.slug,
  }));
};

export const getQAByCluster = async (clusterNumber: number): Promise<QAItem[]> => {
  const { data, error } = await supabase
    .from('qa_items')
    .select('*')
    .eq('cluster_number', clusterNumber)
    .order('order_in_cluster');
  
  if (error) throw error;
  
  return (data || []).map(item => ({
    cluster: item.cluster_number,
    funnel_stage: item.funnel_stage as "TOFU" | "MOFU" | "BOFU",
    order_in_cluster: item.order_in_cluster,
    question: item.question,
    answer: item.answer,
    cta_label: item.cta_label,
    cta_url: item.cta_url,
    slug: item.slug,
  }));
};

export const getQABySlug = async (clusterNumber: number, slug: string): Promise<QAItem | null> => {
  const { data, error } = await supabase
    .from('qa_items')
    .select('*')
    .eq('cluster_number', clusterNumber)
    .eq('slug', slug)
    .single();
  
  if (error || !data) return null;
  
  return {
    cluster: data.cluster_number,
    funnel_stage: data.funnel_stage as "TOFU" | "MOFU" | "BOFU",
    order_in_cluster: data.order_in_cluster,
    question: data.question,
    answer: data.answer,
    cta_label: data.cta_label,
    cta_url: data.cta_url,
    slug: data.slug,
  };
};

export const getAllClusters = async (): Promise<number[]> => {
  const { data, error } = await supabase
    .from('qa_clusters')
    .select('cluster_number')
    .order('cluster_number');
  
  if (error) throw error;
  
  return (data || []).map(c => c.cluster_number);
};

export const getFunnelStageColor = (stage: string): string => {
  switch (stage) {
    case 'TOFU': return 'bg-green-100 text-green-800 border-green-200';
    case 'MOFU': return 'bg-blue-100 text-blue-800 border-blue-200';
    case 'BOFU': return 'bg-purple-100 text-purple-800 border-purple-200';
    default: return 'bg-gray-100 text-gray-800 border-gray-200';
  }
};