import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, Calendar, ArrowRight } from "lucide-react";
import SEOHead from "@/components/seo/SEOHead";
import Breadcrumbs from "@/components/qa/Breadcrumbs";
import { getFunnelStageColor, QAItem } from "@/utils/qa-utils";

const QAIndex = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const queryClient = useQueryClient();

  // Fetch all QA items
  const { data: allItems = [], isLoading } = useQuery({
    queryKey: ['qa-items'],
    queryFn: async () => {
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
      })) as QAItem[];
    },
  });

  // Fetch all clusters
  const { data: clusters = [] } = useQuery({
    queryKey: ['qa-clusters-list'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('qa_clusters')
        .select('*')
        .order('cluster_number');
      
      if (error) throw error;
      return data || [];
    },
  });

  // Subscribe to realtime updates
  useEffect(() => {
    const itemsChannel = supabase
      .channel('qa-items-changes')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'qa_items' }, () => {
        // Refetch when items change
        queryClient.invalidateQueries({ queryKey: ['qa-items'] });
      })
      .subscribe();

    const clustersChannel = supabase
      .channel('qa-clusters-changes')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'qa_clusters' }, () => {
        // Refetch when clusters change
        queryClient.invalidateQueries({ queryKey: ['qa-clusters-list'] });
      })
      .subscribe();

    return () => {
      supabase.removeChannel(itemsChannel);
      supabase.removeChannel(clustersChannel);
    };
  }, []);

  const filteredItems = searchQuery
    ? allItems.filter(item =>
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : allItems;

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Home-Based Travel Agency Q&A Hub",
    "url": "https://www.exploreearnrepeat.com/qa",
    "description": "Comprehensive Q&A resource for starting and growing your home-based travel agency business",
    "inLanguage": "en",
    "mainEntity": {
      "@type": "ItemList",
      "name": "Travel Business Questions",
      "numberOfItems": allItems.length,
      "itemListElement": allItems.map((item, index) => ({
        "@type": "Question",
        "position": index + 1,
        "name": item.question,
        "url": `https://www.exploreearnrepeat.com/qa/cluster/${item.cluster}/${item.slug}`
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
        }
      ]
    },
    "organization": {
      "@type": "Organization",
      "name": "ExploreEarnRepeat",
      "url": "https://www.exploreearnrepeat.com",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-xxx-xxx-xxxx",
        "contactType": "Customer Service",
        "email": "info@exploreearnrepeat.com"
      }
    }
  };

  if (isLoading) {
    return <div className="min-h-screen bg-gradient-subtle flex items-center justify-center">Loading...</div>;
  }

  return (
    <>
      <SEOHead
        title="Travel Business Q&A Hub - 120 Expert Answers"
        description="Find expert answers to 120 common questions about starting and growing your home-based travel agency. From TOFU basics to BOFU implementation strategies."
        keywords="travel agent questions, home-based travel business FAQ, travel agency startup guide, PlanNet Marketing, travel business training"
        canonical="https://www.exploreearnrepeat.com/qa"
        schemaData={schemaData}
      />

      <div className="min-h-screen bg-gradient-subtle">
        <div className="container mx-auto px-4 py-8 max-w-6xl">
          <Breadcrumbs />
          
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Home-Based Travel Agency Q&A
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Get expert answers to {allItems.length} common questions about building your family-first, 
              income-growth travel business. From basics to implementation to optimization.
            </p>
            
            {/* Search */}
            <div className="relative max-w-md mx-auto mb-8">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                type="text"
                placeholder="Search questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* CTA */}
            <div className="bg-card border rounded-lg p-6 mb-12 max-w-2xl mx-auto">
              <h2 className="text-2xl font-semibold mb-4">Prefer a Personal Walkthrough?</h2>
              <p className="text-muted-foreground mb-4">
                Get personalized answers and discover if our travel business opportunity is right for you.
              </p>
              <Button size="lg" asChild className="w-full sm:w-auto">
                <a href="https://calendly.com/catina-perkins" target="_blank" rel="noopener noreferrer">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Your 15-Minute Clarity Call
                </a>
              </Button>
            </div>
          </div>

          {/* Results */}
          {searchQuery && (
            <div className="mb-8">
              <p className="text-muted-foreground">
                Found {filteredItems.length} questions matching "{searchQuery}"
              </p>
            </div>
          )}

          {/* Search Results or Cluster Listing */}
          {searchQuery ? (
            <div className="grid gap-4 md:gap-6">
              {filteredItems.map((item) => (
                <Card key={`${item.cluster}-${item.order_in_cluster}`} className="hover:shadow-medium transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <Badge variant="outline" className={getFunnelStageColor(item.funnel_stage)}>
                        {item.funnel_stage}
                      </Badge>
                      <Badge variant="secondary">
                        Cluster {item.cluster}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg">
                      <Link 
                        to={`/qa/cluster/${item.cluster}/${item.slug}`}
                        className="hover:text-primary transition-colors"
                      >
                        {item.question}
                      </Link>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground line-clamp-2 mb-4">
                      {item.answer}
                    </p>
                    <Button variant="outline" size="sm" asChild>
                      <Link to={`/qa/cluster/${item.cluster}/${item.slug}`}>
                        Read Full Answer
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="grid gap-8 md:gap-12">
              {clusters.map((cluster) => {
                const clusterItems = allItems.filter(item => item.cluster === cluster.cluster_number);
                return (
                  <Card key={cluster.id} className="shadow-medium">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-2xl">
                          <Link 
                            to={`/qa/cluster/${cluster.cluster_number}`}
                            className="hover:text-primary transition-colors"
                          >
                            Cluster {cluster.cluster_number}: {cluster.theme}
                          </Link>
                        </CardTitle>
                        <Button variant="outline" size="sm" asChild>
                          <Link to={`/qa/cluster/${cluster.cluster_number}`}>
                            View All
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Link>
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-4">
                        {clusterItems.map((item) => (
                          <div key={item.order_in_cluster} className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                            <Badge 
                              variant="outline" 
                              className={`${getFunnelStageColor(item.funnel_stage)} flex-shrink-0`}
                            >
                              {item.funnel_stage}
                            </Badge>
                            <div className="flex-grow min-w-0">
                              <Link 
                                to={`/qa/cluster/${item.cluster}/${item.slug}`}
                                className="text-sm font-medium hover:text-primary transition-colors line-clamp-2"
                              >
                                {item.question}
                              </Link>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          )}

          {/* Footer NAP */}
          <div className="mt-16 text-center bg-card border rounded-lg p-8">
            <h3 className="text-xl font-semibold mb-4">Ready to Start Your Travel Business Journey?</h3>
            <p className="text-muted-foreground mb-6">
              Based in Baltimore, MD • Serving entrepreneurs nationwide • Remote-friendly business model
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" asChild>
                <a href="https://calendly.com/catina-perkins" target="_blank" rel="noopener noreferrer">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Clarity Call
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/workshop">
                  Save Your Workshop Seat
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QAIndex;
