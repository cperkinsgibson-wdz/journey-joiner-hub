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
    title: "Can You Start a Travel Business Part-Time? A Family-First Reality Check",
    slug: "part-time-travel-business",
    excerpt: "What 'part-time business' actually looks like, time blocks that work for parents and caregivers, and skills you'll build along the way.",
    stage: "Basics",
    primaryKeyword: "start a travel business part-time",
  },
  {
    title: "Is PlanNet Marketing Legit? How to Evaluate Any Travel Business Opportunity",
    slug: "is-plannet-marketing-legit",
    excerpt: "What legitimacy looks like, questions to ask before joining anything, and how to stay safe and informed.",
    stage: "Basics",
    primaryKeyword: "is PlanNet Marketing legit",
  },
  {
    title: "What Does 'Family-First Income Growth' Mean Without the Hype?",
    slug: "family-first-income-growth",
    excerpt: "Why 'family-first' is a strategy, not a slogan. Boundaries, schedule, sustainable growth, and what you actually control.",
    stage: "Basics",
    primaryKeyword: "family-first income",
  },
  {
    title: "Your First 30 Days: A Calm Starter Plan for a Travel Business",
    slug: "first-30-days-travel-business",
    excerpt: "Week-by-week breakdown: setup, conversations, presentations, and review. No pressure, just progress.",
    stage: "Implementation",
    primaryKeyword: "first 30 days travel business",
  },
  {
    title: "Do You Have to Recruit? Ethical Team Building vs. Pushy Selling",
    slug: "ethical-team-building",
    excerpt: "What team-building is and isn't, ethical language examples, and how to invite without pressure.",
    stage: "Implementation",
    primaryKeyword: "do you have to recruit in network marketing",
  },
  {
    title: "What Happens on a 15-Minute Info Call? Here's the Exact Agenda",
    slug: "15-minute-info-call",
    excerpt: "Who the call is for, the exact agenda, what you'll cover, and what you won't do. No pressure, no income promises.",
    stage: "Optimization",
    primaryKeyword: "PlanNet Marketing info call",
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
        title="Travel Business Blog - Learn Before You Leap"
        description="Explore our blog for honest, compliance-friendly insights on starting a family-first travel business with PlanNet Marketing. No hype, just clarity."
        keywords="travel business blog, PlanNet Marketing articles, family-first business, home-based travel agency"
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
              Honest, compliance-friendly insights on building a family-first travel business. No hype — just clarity and next steps.
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
                <Link to="/enroll">Schedule a 15-Minute Conversation</Link>
              </Button>
            </div>
          </div>

          <p className="text-xs text-muted-foreground text-center mt-12">
            Results vary. Earnings depend on individual effort, skill, and consistency. This content is for educational purposes only and does not guarantee income.
          </p>
        </div>
      </div>
    </>
  );
};

export default BlogIndex;
