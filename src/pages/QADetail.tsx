import { useParams, Link, Navigate } from "react-router-dom";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowLeft, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import SEOHead from "@/components/seo/SEOHead";
import Breadcrumbs from "@/components/qa/Breadcrumbs";
import { getFunnelStageColor, QAItem } from "@/utils/qa-utils";

const QADetail = () => {
  const { clusterNumber, slug } = useParams();
  const cluster = parseInt(clusterNumber || "0");
  const queryClient = useQueryClient();
  
  if (!cluster || !slug) {
    return <Navigate to="/qa" replace />;
  }

  // Fetch the QA item
  const { data: qaItem, isLoading } = useQuery({
    queryKey: ['qa-item', cluster, slug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('qa_items')
        .select('*')
        .eq('cluster_number', cluster)
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
      } as QAItem;
    },
  });

  // Fetch cluster info
  const { data: clusterInfo } = useQuery({
    queryKey: ['qa-cluster', cluster],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('qa_clusters')
        .select('*')
        .eq('cluster_number', cluster)
        .single();
      if (error) throw error;
      return data;
    },
  });

  // Fetch all items in cluster for prev/next
  const { data: clusterItems = [] } = useQuery({
    queryKey: ['qa-items', cluster],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('qa_items')
        .select('*')
        .eq('cluster_number', cluster)
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
      })) as QAItem[];
    },
  });

  // Subscribe to realtime updates
  useEffect(() => {
    const channel = supabase
      .channel('qa-item-changes')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'qa_items' }, () => {
        queryClient.invalidateQueries({ queryKey: ['qa-item', cluster, slug] });
        queryClient.invalidateQueries({ queryKey: ['qa-items', cluster] });
      })
      .on('postgres_changes', { event: '*', schema: 'public', table: 'qa_clusters' }, () => {
        queryClient.invalidateQueries({ queryKey: ['qa-cluster', cluster] });
      })
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [cluster, slug, queryClient]);
  
  if (isLoading) {
    return <div className="min-h-screen bg-gradient-subtle flex items-center justify-center">Loading...</div>;
  }

  if (!qaItem) {
    return <Navigate to="/qa" replace />;
  }

  // Find prev/next items
  const currentIndex = clusterItems.findIndex(item => item.slug === slug);
  const prev = currentIndex > 0 ? clusterItems[currentIndex - 1] : null;
  const next = currentIndex < clusterItems.length - 1 ? clusterItems[currentIndex + 1] : null;
  
  const clusterTheme = clusterInfo?.theme || `Cluster ${cluster}`;

  const getFunnelStageContext = (stage: string) => {
    switch (stage) {
      case 'TOFU':
        return "This is a foundational question perfect for those just learning about home-based travel agencies.";
      case 'MOFU':
        return "This optimization question helps you maximize your travel business potential and results.";
      case 'BOFU':
        return "This implementation question provides specific guidance for taking action in your travel business.";
      default:
        return "";
    }
  };

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": qaItem.question,
    "url": `https://www.exploreearnrepeat.com/qa/cluster/${cluster}/${slug}`,
    "inLanguage": "en",
    "mainEntity": {
      "@type": "Question",
      "name": qaItem.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": qaItem.answer
      }
    },
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": ["h1", "h2"]
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.exploreearnrepeat.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Q&A Hub",
          "item": "https://www.exploreearnrepeat.com/qa"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": `Cluster ${cluster}: ${clusterTheme}`,
          "item": `https://www.exploreearnrepeat.com/qa/cluster/${cluster}`
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": qaItem.question,
          "item": `https://www.exploreearnrepeat.com/qa/cluster/${cluster}/${slug}`
        }
      ]
    }
  };

  return (
    <>
      <SEOHead
        title={`${qaItem.question} - Expert Travel Business Answer`}
        description={`${qaItem.answer.substring(0, 155)}...`}
        keywords={`${qaItem.question.split(' ').slice(0, 5).join(' ')}, travel agent, home-based travel business, PlanNet Marketing`}
        canonical={`https://www.exploreearnrepeat.com/qa/cluster/${cluster}/${slug}`}
        schemaData={schemaData}
      />

      <div className="min-h-screen bg-gradient-subtle">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <Breadcrumbs cluster={cluster} clusterTheme={clusterTheme} questionTitle={qaItem.question} />
          
          {/* Main Content */}
          <article className="mb-12">
            <Card className="shadow-strong">
              <CardHeader className="pb-6">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <Badge 
                    variant="outline" 
                    className={`${getFunnelStageColor(qaItem.funnel_stage)} text-sm`}
                  >
                    {qaItem.funnel_stage} Question
                  </Badge>
                  <Badge variant="secondary">
                    Cluster {cluster} • {clusterTheme}
                  </Badge>
                </div>
                <h1 className="text-2xl md:text-3xl font-bold leading-tight">
                  {qaItem.question}
                </h1>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold mb-4">Quick Answer</h2>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-foreground leading-relaxed">
                      {qaItem.answer}
                    </p>
                  </div>
                </div>

                <div className="bg-muted/50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2 text-primary">
                    💡 Context & Stage
                  </h3>
                  <p className="text-muted-foreground">
                    {getFunnelStageContext(qaItem.funnel_stage)}
                  </p>
                </div>

                {/* CTA */}
                <div className="bg-gradient-subtle border rounded-lg p-6 text-center">
                  <h3 className="text-xl font-semibold mb-3">
                    Ready to Take the Next Step?
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Get personalized guidance and discover how this applies to your specific situation.
                  </p>
                  <Button size="lg" asChild className="w-full sm:w-auto">
                    <a 
                      href={qaItem.cta_url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      data-gtm="qa-cta-click"
                    >
                      <Calendar className="w-5 h-5 mr-2" />
                      {qaItem.cta_label}
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </article>

          {/* Navigation */}
          <div className="space-y-6">
            {/* Prev/Next in Cluster */}
            <div className="flex justify-between items-center">
              <div className="flex-1">
                {prev && (
                  <Button variant="outline" asChild className="w-full sm:w-auto">
                    <Link to={`/qa/cluster/${cluster}/${prev.slug}`}>
                      <ChevronLeft className="w-4 h-4 mr-2" />
                      <span className="truncate">Previous: {prev.question.substring(0, 40)}...</span>
                    </Link>
                  </Button>
                )}
              </div>
              
              <div className="px-4">
                <Button variant="ghost" asChild>
                  <Link to={`/qa/cluster/${cluster}`}>
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Cluster {cluster}
                  </Link>
                </Button>
              </div>
              
              <div className="flex-1 text-right">
                {next && (
                  <Button variant="outline" asChild className="w-full sm:w-auto">
                    <Link to={`/qa/cluster/${cluster}/${next.slug}`}>
                      <span className="truncate">Next: {next.question.substring(0, 40)}...</span>
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                )}
              </div>
            </div>

            {/* Back to Hub */}
            <div className="text-center pt-6 border-t">
              <Button variant="outline" asChild>
                <Link to="/qa">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Q&A Hub
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QADetail;
