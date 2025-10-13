import { useParams, Link, Navigate } from "react-router-dom";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import SEOHead from "@/components/seo/SEOHead";
import Breadcrumbs from "@/components/qa/Breadcrumbs";
import { getFunnelStageColor, QAItem } from "@/utils/qa-utils";

const QACluster = () => {
  const { clusterNumber } = useParams();
  const cluster = parseInt(clusterNumber || "0");
  const queryClient = useQueryClient();

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
    enabled: !!cluster,
  });

  // Fetch cluster items
  const { data: clusterItems = [], isLoading } = useQuery({
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
    enabled: !!cluster,
  });

  // Subscribe to realtime updates
  useEffect(() => {
    const channel = supabase
      .channel('qa-items-cluster-changes')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'qa_items' }, () => {
        queryClient.invalidateQueries({ queryKey: ['qa-items', cluster] });
      })
      .on('postgres_changes', { event: '*', schema: 'public', table: 'qa_clusters' }, () => {
        queryClient.invalidateQueries({ queryKey: ['qa-cluster', cluster] });
      })
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [cluster, queryClient]);
  
  if (!cluster || !clusterInfo) {
    return <Navigate to="/qa" replace />;
  }

  const clusterTheme = clusterInfo?.theme || `Cluster ${cluster}`;
  const prevCluster = cluster > 1 ? cluster - 1 : null;
  const nextCluster = cluster < 20 ? cluster + 1 : null;

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": `Cluster ${cluster}: ${clusterTheme}`,
    "url": `https://www.exploreearnrepeat.com/qa/cluster/${cluster}`,
    "description": `Explore ${clusterItems.length} expert Q&As about ${clusterTheme.toLowerCase()} for home-based travel agencies`,
    "inLanguage": "en",
    "mainEntity": {
      "@type": "ItemList",
      "name": `${clusterTheme} Questions`,
      "numberOfItems": clusterItems.length,
      "itemListElement": clusterItems.map((item, index) => ({
        "@type": "Question",
        "position": index + 1,
        "name": item.question,
        "url": `https://www.exploreearnrepeat.com/qa/cluster/${cluster}/${item.slug}`
      }))
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
        }
      ]
    }
  };

  if (isLoading) {
    return <div className="min-h-screen bg-gradient-subtle flex items-center justify-center">Loading...</div>;
  }

  return (
    <>
      <SEOHead
        title={`${clusterTheme} - Travel Business Q&A Cluster ${cluster}`}
        description={`Get expert answers to ${clusterItems.length} questions about ${clusterTheme.toLowerCase()} for home-based travel agencies. TOFU to BOFU guidance included.`}
        keywords={`${clusterTheme.toLowerCase()}, travel agent questions, home-based travel business, PlanNet Marketing`}
        canonical={`https://www.exploreearnrepeat.com/qa/cluster/${cluster}`}
        schemaData={schemaData}
      />

      <div className="min-h-screen bg-gradient-subtle">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <Breadcrumbs cluster={cluster} clusterTheme={clusterTheme} />
          
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Cluster {cluster}: {clusterTheme}
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              {clusterItems.length} expert answers arranged in TOFU → BOFU → MOFU order
            </p>
            
            {/* CTA Block */}
            <div className="bg-card border rounded-lg p-6 mb-8">
              <h2 className="text-xl font-semibold mb-3">Prefer a Walkthrough?</h2>
              <p className="text-muted-foreground mb-4">
                Get personalized guidance on these topics during your clarity call.
              </p>
              <Button size="lg" asChild>
                <a href="https://calendly.com/catina-perkins" target="_blank" rel="noopener noreferrer">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book 15-Minute Clarity Call
                </a>
              </Button>
            </div>
          </div>

          {/* Questions List */}
          <div className="grid gap-6">
            {clusterItems.map((item, index) => (
              <Card key={item.order_in_cluster} className="hover:shadow-medium transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <Badge 
                      variant="outline" 
                      className={getFunnelStageColor(item.funnel_stage)}
                    >
                      {item.funnel_stage}
                    </Badge>
                    <Badge variant="secondary">
                      {index + 1} of {clusterItems.length}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">
                    <Link 
                      to={`/qa/cluster/${cluster}/${item.slug}`}
                      className="hover:text-primary transition-colors"
                    >
                      {item.question}
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground line-clamp-3 mb-4">
                    {item.answer}
                  </p>
                  <Button variant="outline" asChild>
                    <Link to={`/qa/cluster/${cluster}/${item.slug}`}>
                      Read Full Answer
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-12 pt-8 border-t">
            <div>
              {prevCluster && (
                <Button variant="outline" asChild>
                  <Link to={`/qa/cluster/${prevCluster}`}>
                    <ChevronLeft className="w-4 h-4 mr-2" />
                    Cluster {prevCluster}
                  </Link>
                </Button>
              )}
            </div>
            
            <Button variant="ghost" asChild>
              <Link to="/qa">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Q&A Hub
              </Link>
            </Button>
            
            <div>
              {nextCluster && (
                <Button variant="outline" asChild>
                  <Link to={`/qa/cluster/${nextCluster}`}>
                    Cluster {nextCluster}
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QACluster;
