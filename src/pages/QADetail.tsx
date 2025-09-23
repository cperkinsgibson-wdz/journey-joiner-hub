import { useParams, Link, Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowLeft, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import SEOHead from "@/components/seo/SEOHead";
import Breadcrumbs from "@/components/qa/Breadcrumbs";
import { getQABySlug, getFunnelStageColor, getPrevNextInCluster, getClusterTheme } from "@/utils/qa-utils";

const QADetail = () => {
  const { clusterNumber, slug } = useParams();
  const cluster = parseInt(clusterNumber || "0");
  
  if (!cluster || !slug) {
    return <Navigate to="/qa" replace />;
  }

  const qaItem = getQABySlug(cluster, slug);
  
  if (!qaItem) {
    return <Navigate to="/qa" replace />;
  }

  const { prev, next } = getPrevNextInCluster(cluster, slug);
  const clusterTheme = getClusterTheme(cluster);

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
          <Breadcrumbs cluster={cluster} questionTitle={qaItem.question} />
          
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
                    Cluster {cluster} • {getClusterTheme(cluster)}
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