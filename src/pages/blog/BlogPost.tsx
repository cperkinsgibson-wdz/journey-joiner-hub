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
  "part-time-travel-business": {
    title: "Can You Start a Travel Business Part-Time? A Family-First Reality Check",
    slug: "part-time-travel-business",
    stage: "Basics",
    metaTitle: "Start a Travel Business Part-Time | Family-First Reality Check",
    metaDescription: "Discover what starting a part-time travel business actually looks like for parents and caregivers. Honest breakdown of time, skills, and expectations.",
    primaryKeyword: "start a travel business part-time",
    sections: [
      {
        heading: "What 'Part-Time Business' Actually Looks Like",
        content: "Part-time doesn't mean effortless. It means intentional. Most people who build a travel business around their family commit 5–10 focused hours per week — not random scrolling, but purposeful conversations, follow-ups, and learning.\n\nThe key difference? You choose when those hours happen. Early mornings, lunch breaks, evenings after the kids are in bed. There's no boss setting your schedule — but there's also no one holding you accountable except yourself."
      },
      {
        heading: "Time Blocks That Work for Parents and Caregivers",
        content: "Successful part-time builders typically use a few proven approaches:\n\n• **Morning Power Hour** — 30–60 minutes before the household wakes up for outreach and follow-up.\n• **Naptime Sprint** — Use quiet windows for learning, planning, or short calls.\n• **Evening Wind-Down** — 30 minutes of social media engagement or messaging after dinner.\n\nThe goal isn't perfection. It's consistency. Even 30 minutes of focused activity daily can compound over weeks and months."
      },
      {
        heading: "Skills You'll Build Along the Way",
        content: "You don't need a business degree. The core skills — follow-up, clear communication, and consistency — are things you practice and improve. Many people find these skills transfer to other areas of life too.\n\nWhat matters more than talent is coachability: the willingness to learn, adjust, and keep going."
      },
      {
        heading: "What to Avoid",
        content: "Steer clear of hype-based messaging, overpromising results, and comparing your Day 1 to someone else's Year 3. Burnout comes from trying to do everything at once. A calm, steady approach beats frantic bursts of activity every time.\n\nThis is a real business model — treat it like one, and give yourself the grace to grow at your own pace."
      },
    ],
    ctaText: "Read the 100+ Q&A Hub",
    ctaLink: "/qa",
    faqSchema: [
      { question: "Can you start a travel business part-time?", answer: "Yes. Many people start part-time and build around work and family responsibilities. The key is consistent, focused activity over time. Results vary based on individual effort." },
      { question: "How many hours per week do you need for a part-time travel business?", answer: "Most part-time builders commit 5–10 focused hours per week. Consistency matters more than volume." },
    ],
  },

  "is-plannet-marketing-legit": {
    title: "Is PlanNet Marketing Legit? How to Evaluate Any Travel Business Opportunity",
    slug: "is-plannet-marketing-legit",
    stage: "Basics",
    metaTitle: "Is PlanNet Marketing Legit? How to Evaluate a Travel Business",
    metaDescription: "Learn how to evaluate any travel business opportunity including PlanNet Marketing. What legitimacy looks like, questions to ask, and how to stay informed.",
    primaryKeyword: "is PlanNet Marketing legit",
    sections: [
      {
        heading: "What Legitimacy Looks Like",
        content: "A legitimate business opportunity has clear products or services with real value, published compensation disclosures, structured training and support, and no requirement to make exaggerated claims.\n\nPlanNet Marketing is an established direct-selling company connected to the travel industry. They publish income disclosures and provide training resources. But don't take anyone's word for it — do your own research."
      },
      {
        heading: "Questions to Ask Before Joining Anything",
        content: "Before joining any business opportunity, ask yourself:\n\n• Is there a real product or service that people actually want?\n• Are income disclosures publicly available?\n• Is the training structured and ongoing?\n• Can I succeed by serving customers, even without building a team?\n• Does the company have a track record?\n\nThese questions apply to any opportunity, not just PlanNet Marketing."
      },
      {
        heading: "Understanding Direct Selling vs. Misconceptions",
        content: "Direct selling is a legitimate business model used by companies worldwide. The key distinction: legitimate direct selling focuses on product and service value, not just recruitment.\n\nMisconceptions come from bad actors who use hype and pressure. A responsible representative will never guarantee income, rush you into a decision, or dismiss your concerns."
      },
      {
        heading: "How to Stay Safe and Informed",
        content: "Review official company materials, read the income disclosure statement, talk to multiple people (not just one enthusiastic recruiter), and give yourself time to decide.\n\nA good opportunity will still be there tomorrow. Anyone pressuring you to decide immediately is not acting in your best interest."
      },
    ],
    ctaText: "See Compliance-Friendly Answers in the 100+ Q&A",
    ctaLink: "/qa",
    faqSchema: [
      { question: "Is PlanNet Marketing legit?", answer: "PlanNet Marketing is an established direct-selling model. Evaluate legitimacy by reviewing official materials, compensation disclosures, product value, and training support before making a decision." },
      { question: "How do I know if a travel business opportunity is legitimate?", answer: "Look for real products/services, published income disclosures, structured training, and no pressure to make immediate decisions." },
    ],
  },

  "family-first-income-growth": {
    title: "What Does 'Family-First Income Growth' Mean Without the Hype?",
    slug: "family-first-income-growth",
    stage: "Basics",
    metaTitle: "Family-First Income Growth | What It Actually Means",
    metaDescription: "Family-first income growth is a strategy, not a slogan. Learn about boundaries, sustainable pace, and what you actually control when building a travel business.",
    primaryKeyword: "family-first income",
    sections: [
      {
        heading: "Why 'Family-First' Is a Strategy, Not a Slogan",
        content: "Family-first doesn't mean your business comes last. It means your business serves your family's goals — not the other way around.\n\nIt's a decision to build at a pace that doesn't require sacrificing the things that matter most: dinners together, school events, rest, and presence."
      },
      {
        heading: "Boundaries, Schedule, and Sustainable Growth",
        content: "Setting boundaries is the first business skill you'll need. That means:\n\n• Defining your work hours (and sticking to them)\n• Saying no to activities that don't move the needle\n• Communicating your schedule to family so they can support you\n• Taking breaks without guilt\n\nSustainable growth is slow at first. But slow and steady builds something that lasts."
      },
      {
        heading: "Why Results Vary — and What You Control",
        content: "Every person's results are different. Income depends on effort, consistency, skill development, and market conditions. No one can guarantee a specific outcome.\n\nWhat you can control: how many conversations you have, how consistently you show up, how coachable you are, and how you treat people along the way.\n\nThat's where your focus should be."
      },
    ],
    ctaText: "Explore the Foundations in the 100+ Q&A",
    ctaLink: "/qa",
    faqSchema: [
      { question: "What does family-first income growth mean?", answer: "It means building a business at a pace that serves your family's goals — setting boundaries, choosing consistent time blocks, and growing sustainably without sacrificing what matters most." },
    ],
  },

  "first-30-days-travel-business": {
    title: "Your First 30 Days: A Calm Starter Plan for a Travel Business",
    slug: "first-30-days-travel-business",
    stage: "Implementation",
    metaTitle: "First 30 Days in a Travel Business | Calm Starter Plan",
    metaDescription: "A week-by-week starter plan for your first 30 days in a travel business. No pressure, just progress. Setup, conversations, presentations, and review.",
    primaryKeyword: "first 30 days travel business",
    sections: [
      {
        heading: "Week 1: Setup + Clarity + Simple Script",
        content: "Your first week is about getting organized. Set up your tools, understand the basics of what you're offering, and write a simple introduction script.\n\nDon't overcomplicate this. Your script can be as simple as: 'I recently started learning about the travel industry as a business. Would you be open to hearing about it?'\n\nThat's it. Week 1 is about clarity, not perfection."
      },
      {
        heading: "Week 2: Conversations + Follow-Up Rhythm",
        content: "Start having real conversations. Reach out to 2–3 people per day. Not pitching — asking questions, sharing what you're learning, and gauging interest.\n\nFollow-up is where most people drop off. Set a simple system: if someone says 'not right now,' check back in 7–14 days. Most business happens in the follow-up, not the first conversation."
      },
      {
        heading: "Week 3: Presentations + Tracking",
        content: "By week 3, you should be comfortable sharing a presentation or overview with interested people. Use the tools and resources provided — don't reinvent the wheel.\n\nStart tracking your numbers: conversations had, presentations shared, follow-ups completed. What gets measured gets improved."
      },
      {
        heading: "Week 4: Review + Simplify + Repeat",
        content: "Review your first month. What worked? What felt forced? What can you simplify?\n\nThe goal isn't to have massive results in 30 days. The goal is to build habits and systems that you can repeat. Consistency compounds. Your second month will be better because of the reps you put in during month one."
      },
      {
        heading: "Compliance Reminders",
        content: "Throughout your first 30 days, remember: never make income claims or guarantees, never imply that your results are typical, and always refer people to official company materials for compensation details.\n\nBuilding with integrity from Day 1 protects you and the people you serve."
      },
    ],
    ctaText: "Use the Q&A as Your Playbook",
    ctaLink: "/qa",
    secondaryCta: { text: "Book a 15-Minute Conversation", link: "/enroll" },
    faqSchema: [
      { question: "What should I do in my first 30 days of a travel business?", answer: "Focus on setup and clarity (Week 1), starting conversations (Week 2), sharing presentations (Week 3), and reviewing what works (Week 4). Consistency matters more than perfection." },
    ],
  },

  "ethical-team-building": {
    title: "Do You Have to Recruit? Ethical Team Building vs. Pushy Selling",
    slug: "ethical-team-building",
    stage: "Implementation",
    metaTitle: "Ethical Team Building in Network Marketing | No Pressure",
    metaDescription: "Do you have to recruit in network marketing? Learn the difference between ethical team building and pushy selling. Invite without pressure, respect every answer.",
    primaryKeyword: "do you have to recruit in network marketing",
    sections: [
      {
        heading: "What Team-Building Is (and Isn't)",
        content: "Team-building is not about convincing unwilling people. It's about finding others who are looking for what you have and helping them get started.\n\nYou're not recruiting — you're informing. You share the opportunity, answer questions honestly, and let people make their own decision. That's it."
      },
      {
        heading: "Ethical Language Examples",
        content: "Instead of hype, use honest language:\n\n• ❌ 'This will change your life!' → ✅ 'This is something I've been exploring. Would you be open to learning about it?'\n• ❌ 'You're going to make so much money!' → ✅ 'Results vary, but I can share how it works if you're curious.'\n• ❌ 'You'd be perfect for this!' → ✅ 'I thought of you because of your interest in travel. No pressure at all.'\n\nThe difference is subtle but important. Ethical language respects the other person's autonomy."
      },
      {
        heading: "How to Invite Without Pressure",
        content: "A good invitation has three parts:\n\n1. **Context** — Why you're reaching out (briefly)\n2. **Ask** — Would they be open to learning more?\n3. **Exit** — Make it easy to say no ('Totally fine if it's not for you')\n\nWhen someone says no, thank them and move on. Pressuring people damages relationships and your reputation."
      },
      {
        heading: "How to Respect 'No' and Keep Relationships Intact",
        content: "Not everyone will be interested, and that's completely fine. A 'no' is not a rejection of you — it's just not the right fit or the right time for them.\n\nThe best thing you can do is accept it gracefully, keep the relationship strong, and let your actions speak over time. Some of the best team members come back months later because they watched you build with integrity."
      },
    ],
    ctaText: "Read Q&As on Team Building in the 100+ Hub",
    ctaLink: "/qa",
    faqSchema: [
      { question: "Do you have to recruit in network marketing?", answer: "Team-building is optional in many structures. You can focus on customer-focused activity, or choose to build a team ethically if it aligns with your goals." },
      { question: "How do you invite people without being pushy?", answer: "Use honest language, give context, ask if they're open, and make it easy to say no. Respect every answer and keep the relationship intact." },
    ],
  },

  "15-minute-info-call": {
    title: "What Happens on a 15-Minute Info Call? Here's the Exact Agenda",
    slug: "15-minute-info-call",
    stage: "Optimization",
    metaTitle: "PlanNet Marketing Info Call | Exact Agenda Explained",
    metaDescription: "Wondering what happens on a 15-minute info call about the travel business? Here's the exact agenda — no pressure, no income promises, just clarity.",
    primaryKeyword: "PlanNet Marketing info call",
    sections: [
      {
        heading: "Who the Call Is For (and Not For)",
        content: "This call is for people who are curious, have done some reading, and want to ask questions in a real conversation. It's not a sales pitch — it's a two-way dialogue.\n\nThe call is NOT for people who are looking for get-rich-quick promises or guaranteed income. If that's what you're looking for, this isn't the right fit."
      },
      {
        heading: "The Exact Agenda",
        content: "Here's what we'll cover in 15 minutes:\n\n1. **Your Background** (2 min) — What brought you here? What are you looking for?\n2. **Quick Overview** (5 min) — How the business model works, what's involved, and what support looks like.\n3. **Your Questions** (5 min) — Ask anything. Costs, time, expectations, training — nothing is off-limits.\n4. **Next Steps** (3 min) — If it makes sense, we'll discuss what getting started looks like. If not, no hard feelings."
      },
      {
        heading: "What You'll Cover: Time, Costs, Expectations, Training",
        content: "We'll be upfront about everything:\n\n• **Time**: What realistic time commitment looks like for your situation\n• **Costs**: The actual startup costs and ongoing investment\n• **Expectations**: Why results vary and what factors influence success\n• **Training**: What support and mentorship are available\n\nNo surprises. No hidden fees. Just honest information."
      },
      {
        heading: "What You Won't Experience",
        content: "We won't pressure you into a decision. We won't make income promises. We won't rush you or use urgency tactics.\n\nA good business opportunity can handle questions, skepticism, and time. If you need to think about it, take all the time you need."
      },
    ],
    ctaText: "Schedule a 15-Minute Conversation",
    ctaLink: "/enroll",
    secondaryCta: { text: "Read the 100+ Q&A First", link: "/qa" },
    faqSchema: [
      { question: "What happens on a PlanNet Marketing info call?", answer: "A 15-minute call covers your background, a quick business overview, your questions about time/costs/expectations, and optional next steps. No pressure, no income promises." },
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
              <Link to="/enroll" className="underline text-primary">15-minute conversation</Link>.
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
