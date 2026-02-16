import { useParams, Link, Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, ArrowRight } from "lucide-react";
import SEOHead from "@/components/seo/SEOHead";

interface BlogPostData {
  title: string;
  slug: string;
  stage: "Basics" | "Implementation" | "Optimization";
  metaTitle: string;
  metaDescription: string;
  primaryKeyword: string;
  sections: { heading: string; content: string }[];
  ctaText: string;
  ctaLink: string;
  secondaryCta?: { text: string; link: string };
  faqSchema: { question: string; answer: string }[];
}

const posts: Record<string, BlogPostData> = {
  "plannet-vs-inteletravel": {
    title: "What Is the Difference Between PlanNet Marketing and InteleTravel?",
    slug: "plannet-vs-inteletravel",
    stage: "Basics",
    metaTitle: "PlanNet Marketing vs InteleTravel — What's the Difference?",
    metaDescription: "Understand the difference between PlanNet Marketing and InteleTravel. Two separate companies, one partnership. Learn how the host agency and marketing models work together.",
    primaryKeyword: "PlanNet Marketing vs InteleTravel",
    sections: [
      {
        heading: "Two Separate Companies, One Partnership",
        content: "One of the most common questions we receive is whether PlanNet Marketing and InteleTravel are the same company. They are not.\n\nInteleTravel is a host travel agency — one of the originators of the home-based travel business model, with over 30 years in the travel industry. They provide the platform, supplier relationships, and support for Independent Travel Advisors.\n\nPlanNet Marketing, established in 2015, is a marketing company. It introduces individuals to the opportunity to become Independent Travel Advisors through InteleTravel, and also offers a separate path for those who choose to build a team."
      },
      {
        heading: "What InteleTravel Provides",
        content: "InteleTravel operates as the host agency. When you become an Independent Travel Advisor through InteleTravel, you gain access to:\n\n• Booking platforms and technology\n• Supplier relationships across the travel industry\n• Training and certification opportunities\n• Ongoing support to operate your travel business\n\nInteleTravel has been in the travel industry for over three decades, making them one of the most established players in the home-based travel model."
      },
      {
        heading: "What PlanNet Marketing Provides",
        content: "PlanNet Marketing is the marketing and business opportunity side. Through PlanNet Marketing, independent representatives can earn compensation by promoting travel services and, if they choose, building a team.\n\nCompensation is based on activity and performance. Results vary and income is not guaranteed. PlanNet Marketing provides its own training, support structure, and community."
      },
      {
        heading: "Do You Join One or Both?",
        content: "Individuals who want to operate as Independent Travel Advisors affiliate through InteleTravel. Those who also want to participate in the marketing and team-building side may choose to become representatives with PlanNet Marketing.\n\nEach operates under its own structure and guidelines. The right path depends on your personal goals."
      },
    ],
    ctaText: "Read the Full FAQ",
    ctaLink: "/faq",
    secondaryCta: { text: "Schedule an Informational Session", link: "/enroll" },
    faqSchema: [
      { question: "What is the difference between PlanNet Marketing and InteleTravel?", answer: "They are two separate companies. InteleTravel is a host travel agency with 30+ years in the industry. PlanNet Marketing is a marketing company established in 2015 that partners with InteleTravel to introduce individuals to the travel advisor opportunity." },
      { question: "Are PlanNet Marketing and InteleTravel the same company?", answer: "No. InteleTravel is a host agency in the travel industry. PlanNet Marketing is a marketing company that partners with InteleTravel." },
    ],
  },

  "how-travel-advisor-works": {
    title: "How Does a Home-Based Travel Advisor Business Actually Work?",
    slug: "how-travel-advisor-works",
    stage: "Basics",
    metaTitle: "How a Home-Based Travel Advisor Business Works",
    metaDescription: "Learn how the home-based travel advisor model works — host agency structure, supplier relationships, remote flexibility, and what Independent Travel Advisors actually do.",
    primaryKeyword: "home-based travel advisor business",
    sections: [
      {
        heading: "The Host Agency Model",
        content: "A home-based travel advisor operates under a host agency — in this case, InteleTravel. The host agency provides the infrastructure: booking platforms, supplier contracts, compliance, and support.\n\nAs an Independent Travel Advisor, you don't need to build relationships with every hotel chain or cruise line from scratch. The host agency has already established those connections over decades."
      },
      {
        heading: "What Independent Travel Advisors Do",
        content: "Independent Travel Advisors help clients plan and book travel experiences. This can include cruises, resort stays, flights, group travel, and more.\n\nYou work remotely — from home, a coffee shop, or anywhere with an internet connection. You set your own hours and work at your own pace. There is no territory restriction and no cap on the number of clients you can serve."
      },
      {
        heading: "Supplier Relationships and Booking Tools",
        content: "Through InteleTravel, you gain access to professional booking platforms and supplier relationships that would be difficult to establish on your own. These tools allow you to search availability, compare options, and book travel for your clients.\n\nTraining is provided on how to use these tools effectively."
      },
      {
        heading: "Remote Flexibility",
        content: "One of the key advantages of this model is flexibility. You choose when and how much you work. Many advisors build this around existing jobs, family responsibilities, or other commitments.\n\nLike any business, progress depends on focused and consistent activity. Results vary based on individual effort."
      },
    ],
    ctaText: "Schedule a Session for Structure Overview",
    ctaLink: "/enroll",
    secondaryCta: { text: "Browse the 100+ Q&A Hub", link: "/qa" },
    faqSchema: [
      { question: "How does a home-based travel advisor business work?", answer: "You operate under a host agency (InteleTravel) that provides booking platforms, supplier relationships, and support. You help clients plan and book travel, working remotely on your own schedule." },
    ],
  },

  "part-time-no-experience": {
    title: "Can You Build a Travel Business Part-Time Without Sales Experience?",
    slug: "part-time-no-experience",
    stage: "Basics",
    metaTitle: "Build a Travel Business Part-Time Without Experience",
    metaDescription: "Can you build a travel business part-time with no sales experience? A calm, honest look at skill-building, time commitment, and realistic expectations.",
    primaryKeyword: "travel business part-time no experience",
    sections: [
      {
        heading: "You Don't Need a Background in Sales",
        content: "Many successful travel advisors started with zero sales experience. The skills that matter most — communication, follow-through, and genuine care for people — are things you develop over time.\n\nTraining is provided through both InteleTravel and the Platinum Network Team. You're not expected to know everything on Day 1."
      },
      {
        heading: "What Part-Time Actually Looks Like",
        content: "Part-time means intentional, not effortless. Most part-time advisors dedicate a few focused hours per week — having conversations, following up, and learning.\n\nYou choose when those hours happen. Early mornings, lunch breaks, evenings. The flexibility is real, but so is the responsibility to stay consistent."
      },
      {
        heading: "Skill-Building Over Hype",
        content: "We don't promise overnight success because it doesn't exist. What we emphasize is skill-building:\n\n• Learning how to have genuine conversations about travel\n• Understanding the booking platforms and tools\n• Building follow-up habits\n• Developing confidence through repetition\n\nThese skills compound over time. The more you practice, the more natural it becomes."
      },
      {
        heading: "Results Vary — And That's Honest",
        content: "Every person's experience is different. Income depends on individual effort, consistency, skills developed, and market conditions. No one can guarantee a specific outcome.\n\nWhat we can guarantee is that training and support are available. What you do with them is up to you."
      },
    ],
    ctaText: "Learn How It Works in a 15-Minute Session",
    ctaLink: "/enroll",
    secondaryCta: { text: "Browse the 100+ Q&A Hub", link: "/qa" },
    faqSchema: [
      { question: "Can you build a travel business with no sales experience?", answer: "Yes. Training is provided and the core skills — communication, follow-through, consistency — are developed over time. No prior sales experience is required." },
      { question: "Can you build a travel business part-time?", answer: "Yes. Many individuals build part-time around existing responsibilities. Progress depends on focused and consistent activity. Results vary." },
    ],
  },

  "advisor-vs-team-builder": {
    title: "Should You Become Just a Travel Advisor — or Also Build with PlanNet Marketing?",
    slug: "advisor-vs-team-builder",
    stage: "Implementation",
    metaTitle: "Travel Advisor Only vs. Building with PlanNet Marketing",
    metaDescription: "Should you focus on being a travel advisor, or also build a team through PlanNet Marketing? Explore both paths — no pressure, just clarity on what fits your goals.",
    primaryKeyword: "travel advisor or PlanNet Marketing team builder",
    sections: [
      {
        heading: "The Travel-Only Path",
        content: "Some individuals prefer to focus exclusively on being an Independent Travel Advisor through InteleTravel. This means helping clients plan and book travel, earning commissions on those bookings, and building your client base over time.\n\nThis path is straightforward: you learn the tools, serve your clients, and grow your travel knowledge. No team-building required."
      },
      {
        heading: "The Marketing + Team-Building Path",
        content: "Others choose to also participate in the PlanNet Marketing opportunity. This adds a second dimension: in addition to booking travel, you can introduce others to the opportunity and earn additional compensation based on team activity.\n\nThis path involves leadership, mentoring, and helping others get started. It's more involved, but it offers additional earning potential for those who enjoy building and coaching."
      },
      {
        heading: "There's No Pressure Either Way",
        content: "Neither path is better than the other — it depends entirely on your personal goals, available time, and what energizes you.\n\nSome people start as travel advisors and later explore the team-building side. Others know from the start that they want both. Either way, you have the freedom to choose."
      },
      {
        heading: "How to Decide",
        content: "Ask yourself:\n\n• Do I want to focus on serving travel clients?\n• Am I interested in leadership and mentoring?\n• How much time can I realistically commit?\n• What are my short-term and long-term goals?\n\nA 15-minute informational session can help you explore which path aligns with where you are right now."
      },
    ],
    ctaText: "Schedule a Strategy Conversation",
    ctaLink: "/enroll",
    secondaryCta: { text: "Read the Full FAQ", link: "/faq" },
    faqSchema: [
      { question: "Do I have to build a team with PlanNet Marketing?", answer: "No. Building a team is optional. Some individuals focus solely on being travel advisors through InteleTravel. Others choose to also build with PlanNet Marketing." },
    ],
  },

  "first-90-days": {
    title: "What to Expect in Your First 90 Days as a Home-Based Travel Advisor",
    slug: "first-90-days",
    stage: "Implementation",
    metaTitle: "First 90 Days as a Home-Based Travel Advisor",
    metaDescription: "What to expect in your first 90 days as a home-based travel advisor. Training rhythm, skill development, consistency habits, and realistic expectations.",
    primaryKeyword: "first 90 days travel advisor",
    sections: [
      {
        heading: "Days 1–30: Foundation and Orientation",
        content: "Your first month is about getting oriented. You'll learn the booking platforms, understand how the host agency operates, and begin connecting with your training team.\n\nDon't put pressure on yourself to have everything figured out. The goal is to understand the basics and start developing your daily rhythm."
      },
      {
        heading: "Days 31–60: Practice and Conversations",
        content: "In your second month, the focus shifts to practice. Start having conversations about travel — with friends, family, and new contacts. Share what you're learning and gauge interest.\n\nThis is also when you'll start getting more comfortable with the booking tools and building follow-up habits. Repetition builds confidence."
      },
      {
        heading: "Days 61–90: Refinement and Consistency",
        content: "By month three, you should have a basic rhythm established. You know your tools, you've had real conversations, and you're starting to see what works for your style.\n\nUse this time to refine your approach. What conversations lead to bookings? What follow-up methods feel natural? What can you simplify?"
      },
      {
        heading: "A Clear Disclaimer",
        content: "Results vary. Some people make progress quickly; others take longer. Income is not guaranteed and depends on individual effort, consistency, and skills developed.\n\nThe first 90 days are about building habits and systems — not about hitting specific numbers. Give yourself grace and focus on the process."
      },
    ],
    ctaText: "Book an Informational Session",
    ctaLink: "/enroll",
    secondaryCta: { text: "Browse the 100+ Q&A Hub", link: "/qa" },
    faqSchema: [
      { question: "What should I expect in my first 90 days as a travel advisor?", answer: "The first 30 days focus on orientation, days 31–60 on practice and conversations, and days 61–90 on refinement and consistency. Results vary based on individual effort." },
    ],
  },

  "overview-session": {
    title: "What Happens on a PlanNet Marketing & InteleTravel Overview Session?",
    slug: "overview-session",
    stage: "Optimization",
    metaTitle: "PlanNet Marketing & InteleTravel Overview Session — What to Expect",
    metaDescription: "What happens on a PlanNet Marketing and InteleTravel overview session? Learn the exact agenda — how both companies work, which role fits you, and what to expect. No pressure.",
    primaryKeyword: "PlanNet Marketing overview session",
    sections: [
      {
        heading: "What the Session Covers",
        content: "The overview session is a relaxed, informational conversation. It covers:\n\n• **How InteleTravel operates** — the host agency model, booking platforms, and travel advisor structure\n• **How PlanNet Marketing operates** — the marketing opportunity, team-building option, and compensation overview\n• **Which role fits you** — travel advisor only, team builder, or both\n• **Expectations and compliance** — what's realistic, what's not, and how to stay compliant"
      },
      {
        heading: "What You Can Ask",
        content: "This is your time to ask questions. Nothing is off-limits:\n\n• How much time is required?\n• What does the structure look like?\n• What training and support are available?\n• What are the expectations?\n\nWe'll give you honest answers. If we don't know something, we'll tell you."
      },
      {
        heading: "What You Won't Experience",
        content: "We won't pressure you into a decision. We won't make income promises. We won't rush you or use urgency tactics.\n\nA good opportunity can handle questions, skepticism, and time. If you need to think about it, take all the time you need."
      },
      {
        heading: "A Calm Posture",
        content: "Our approach is simple: provide clarity and let you decide. Whether you move forward or not, you'll leave the session with a clear understanding of how both companies operate and what the opportunity involves.\n\nThere is no obligation to move forward. Just clarity."
      },
    ],
    ctaText: "Schedule a 15-Minute Informational Session",
    ctaLink: "/enroll",
    secondaryCta: { text: "Read the 100+ Q&A First", link: "/qa" },
    faqSchema: [
      { question: "What happens on a PlanNet Marketing overview session?", answer: "A relaxed informational session covering how InteleTravel and PlanNet Marketing operate, which role fits you, expectations, and compliance. No pressure, no income promises." },
    ],
  },
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? posts[slug] : null;

  if (!post) return <Navigate to="/learn/blog" replace />;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "author": { "@type": "Person", "name": "Catina Perkins" },
    "publisher": { "@type": "Organization", "name": "Pathway Travel Advisors" },
    "mainEntityOfPage": `https://www.exploreearnrepeat.com/learn/blog/${post.slug}`,
  };

  return (
    <>
      <SEOHead
        title={post.metaTitle}
        description={post.metaDescription}
        keywords={post.primaryKeyword}
        canonical={`https://www.exploreearnrepeat.com/learn/blog/${post.slug}`}
        ogType="article"
        schemaData={articleSchema}
        faqSchema={post.faqSchema}
        breadcrumbs={[
          { name: "Home", url: "https://www.exploreearnrepeat.com/" },
          { name: "Blog", url: "https://www.exploreearnrepeat.com/learn/blog" },
          { name: post.title, url: `https://www.exploreearnrepeat.com/learn/blog/${post.slug}` },
        ]}
      />

      <div className="min-h-screen bg-gradient-subtle">
        <div className="container mx-auto px-4 py-16 max-w-3xl">
          {/* Back link */}
          <Button variant="ghost" size="sm" asChild className="mb-8">
            <Link to="/learn/blog">
              <ArrowLeft className="w-4 h-4 mr-2" /> All Articles
            </Link>
          </Button>

          {/* Header */}
          <div className="mb-10">
            <Badge variant="outline" className="mb-4">{post.stage}</Badge>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">{post.title}</h1>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="w-4 h-4" />
              <span>By Catina Perkins — Independent Representative</span>
            </div>
          </div>

          {/* Content */}
          <article className="prose prose-lg max-w-none">
            {post.sections.map((section, i) => (
              <section key={i} className="mb-10">
                <h2 className="text-2xl font-bold mb-4">{section.heading}</h2>
                {section.content.split("\n\n").map((para, j) => (
                  <p key={j} className="text-muted-foreground leading-relaxed mb-4 whitespace-pre-line">
                    {para}
                  </p>
                ))}
              </section>
            ))}
          </article>

          {/* Internal Links Box */}
          <div className="mt-12 p-8 rounded-xl bg-card border shadow-soft text-center space-y-4">
            <h3 className="text-xl font-bold">Ready for the Next Step?</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <Link to={post.ctaLink}>
                  {post.ctaText} <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              {post.secondaryCta && (
                <Button variant="outline" asChild>
                  <Link to={post.secondaryCta.link}>{post.secondaryCta.text}</Link>
                </Button>
              )}
            </div>
            <p className="text-sm text-muted-foreground">
              Every post links to the <Link to="/qa" className="underline text-primary">100+ Q&A Hub</Link> and our{" "}
              <Link to="/enroll" className="underline text-primary">informational session</Link>.
            </p>
          </div>

          {/* Compliance */}
          <p className="text-xs text-muted-foreground text-center mt-10">
            Results vary. Earnings depend on individual effort, skill, and consistency. This content is for educational purposes only and does not guarantee income. Catina Perkins is an Independent Representative.
          </p>
        </div>
      </div>
    </>
  );
};

export default BlogPost;
