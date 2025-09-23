import qaData from '@/data/travel-qa.json';

export interface QAItem {
  cluster: number;
  funnel_stage: "TOFU" | "MOFU" | "BOFU";
  order_in_cluster: number;
  question: string;
  answer: string;
  cta_label: string;
  cta_url: string;
  slug?: string;
}

export const createSlug = (question: string): string => {
  return question
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, '')
    .replace(/\s+/g, '-')
    .trim();
};

export const getAllQAItems = (): QAItem[] => {
  return qaData.map(item => ({
    ...item,
    funnel_stage: item.funnel_stage as "TOFU" | "MOFU" | "BOFU",
    slug: createSlug(item.question)
  }));
};

export const getQAByCluster = (clusterNumber: number): QAItem[] => {
  return getAllQAItems()
    .filter(item => item.cluster === clusterNumber)
    .sort((a, b) => a.order_in_cluster - b.order_in_cluster);
};

export const getQABySlug = (clusterNumber: number, slug: string): QAItem | null => {
  const clusterItems = getQAByCluster(clusterNumber);
  return clusterItems.find(item => item.slug === slug) || null;
};

export const getAllClusters = (): number[] => {
  const clusters = new Set(qaData.map(item => item.cluster));
  return Array.from(clusters).sort((a, b) => a - b);
};

export const getClusterTheme = (clusterNumber: number): string => {
  const themes: Record<number, string> = {
    1: "Getting Started Basics",
    2: "Experience & Skills",
    3: "Work-Life Balance",
    4: "Industry & Competition",
    5: "Technology & Challenges",
    6: "Specialization & Benefits",
    7: "Market Trends & Growth",
    8: "Personal Fit & Support",
    9: "Modern Marketing & Tech",
    10: "Niches & Pricing",
    11: "Operations & Systems",
    12: "Motivation & Networking",
    13: "Client Relationships",
    14: "Expertise & Storytelling",
    15: "Advanced Operations",
    16: "Legal & Compliance",
    17: "Communication & Branding",
    18: "Growth & Development",
    19: "Long-term Success",
    20: "Future & Innovation"
  };
  return themes[clusterNumber] || `Cluster ${clusterNumber}`;
};

export const getFunnelStageColor = (stage: string): string => {
  switch (stage) {
    case 'TOFU': return 'bg-green-100 text-green-800 border-green-200';
    case 'MOFU': return 'bg-blue-100 text-blue-800 border-blue-200';
    case 'BOFU': return 'bg-purple-100 text-purple-800 border-purple-200';
    default: return 'bg-gray-100 text-gray-800 border-gray-200';
  }
};

export const getPrevNextInCluster = (clusterNumber: number, currentSlug: string) => {
  const clusterItems = getQAByCluster(clusterNumber);
  const currentIndex = clusterItems.findIndex(item => item.slug === currentSlug);
  
  if (currentIndex === -1) return { prev: null, next: null };
  
  return {
    prev: currentIndex > 0 ? clusterItems[currentIndex - 1] : null,
    next: currentIndex < clusterItems.length - 1 ? clusterItems[currentIndex + 1] : null
  };
};