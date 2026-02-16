import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen } from "lucide-react";
import SEOHead from "@/components/seo/SEOHead";

interface BlogPost {
  title: string;
  slug: string;
  excerpt: string;
  stage: "Basics" | "Implementation" | "Optimization";
  primaryKeyword: string;
}

const blogPosts: BlogPost[] = [
  {
    title: "What Is the Difference Between PlanNet Marketing and InteleTravel?",
    slug: "plannet-vs-inteletravel",
    excerpt: "Clarify that they are separate companies — InteleTravel as a host agency, PlanNet Marketing as the marketing partner — and how they work together.",
    stage: "Basics",
    primaryKeyword: "PlanNet Marketing vs InteleTravel",
  },
  {
    title: "How Does a Home-Based Travel Advisor Business Actually Work?",
    slug: "how-travel-advisor-works",
    excerpt: "Understand the host agency model, independent travel advisor structure, supplier relationships, and the flexibility of working remotely.",
    stage: "Basics",
    primaryKeyword: "home-based travel advisor business",
  },
  {
    title: "Can You Build a Travel Business Part-Time Without Sales Experience?",
    slug: "part-time-no-experience",
    excerpt: "A calm, honest look at skill-building over hype. Results vary — and that's okay. Learn what part-time commitment actually looks like.",
    stage: "Basics",
    primaryKeyword: "travel business part-time no experience",
  },
  {
    title: "Should You Become Just a Travel Advisor — or Also Build with PlanNet Marketing?",
    slug: "advisor-vs-team-builder",
    excerpt: "Explore the travel-only path versus the marketing and team-building path. No pressure — it depends on your personal goals.",
    stage: "Implementation",
    primaryKeyword: "travel advisor or PlanNet Marketing team builder",
  },
  {
    title: "What to Expect in Your First 90 Days as a Home-Based Travel Advisor",
    slug: "first-90-days",
    excerpt: "Training rhythm, skill development, and consistency habits for new travel advisors. Clear disclaimer: results vary.",
    stage: "Implementation",
    primaryKeyword: "first 90 days travel advisor",
  },
  {
    title: "What Happens on a PlanNet Marketing & InteleTravel Overview Session?",
    slug: "overview-session",
    excerpt: "What the session covers: how InteleTravel operates, how PlanNet Marketing operates, which role fits you, and what to expect. No pressure.",
    stage: "Optimization",
    primaryKeyword: "PlanNet Marketing overview session",
  },
];

const stageColor = (stage: string) => {
  switch (stage) {
    case "Basics": return "bg-green-100 text-green-800 border-green-200";
    case "Implementation": return "bg-blue-100 text-blue-800 border-blue-200";
    case "Optimization": return "bg-purple-100 text-purple-800 border-purple-200";
    default: return "";
  }
};

const BlogIndex = () => {
  return (
    <>
      <SEOHead
        title="Travel Business Blog — PlanNet Marketing & InteleTravel Explained"
        description="Honest, compliance-friendly insights on starting a family-first travel business with PlanNet Marketing and InteleTravel. No hype — just clarity."
        keywords="PlanNet Marketing blog, InteleTravel articles, travel advisor business, home-based travel agency"
        canonical="https://www.exploreearnrepeat.com/learn/blog"
      />

      <div className="min-h-screen bg-gradient-subtle">
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-gradient-hero text-primary-foreground">
              <BookOpen className="w-4 h-4 mr-2" />
              Learn
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Travel Business Blog
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Honest, compliance-friendly insights on PlanNet Marketing, InteleTravel, and building a family-first travel business. No hype — just clarity and next steps.
            </p>
          </div>

          <div className="space-y-6">
            {blogPosts.map((post) => (
              <Card key={post.slug} className="shadow-soft hover:shadow-medium transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline" className={stageColor(post.stage)}>{post.stage}</Badge>
                  </div>
                  <CardTitle className="text-xl">
                    <Link to={`/learn/blog/${post.slug}`} className="hover:text-primary transition-colors">
                      {post.title}
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <Button variant="outline" size="sm" asChild>
                    <Link to={`/learn/blog/${post.slug}`}>
                      Read More <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Internal links */}
          <div className="mt-16 text-center space-y-4">
            <p className="text-muted-foreground">Want quick answers instead?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <Link to="/qa">Browse the 100+ Q&A Hub</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/enroll">Schedule an Informational Session</Link>
              </Button>
            </div>
          </div>

          <p className="text-xs text-muted-foreground text-center mt-12">
            Results vary. Earnings depend on individual effort, skill, and consistency. This content is for educational purposes only and does not guarantee income. Catina Perkins is an Independent Representative.
          </p>
        </div>
      </div>
    </>
  );
};

export default BlogIndex;
