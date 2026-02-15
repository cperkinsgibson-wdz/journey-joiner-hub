import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Phone,
  CheckCircle,
  Lightbulb,
  BookOpen,
  Rocket,
  ChevronDown,
  ChevronUp,
  Globe,
  TrendingUp,
  Users,
  Compass,
  HeartHandshake,
  Plane,
  DollarSign,
  Clock,
  Shield,
  Star,
} from "lucide-react";
import SEOHead from "@/components/seo/SEOHead";
import WorkshopModal from "@/components/workshop/WorkshopModal";
import catinaImg from "@/assets/catina-perkins.jpg";

const Home = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqItems = [
    {
      question: "Is this a job?",
      answer:
        "No. This is an independent business path. You'll be building your own travel advisor business with training, mentorship, and support—but the effort and results are yours.",
    },
    {
      question: "Do I need experience?",
      answer:
        "No prior experience is needed. Full training is provided through the free 3-day workshop and ongoing mentorship from Catina and the team.",
    },
    {
      question: "Do you guarantee income?",
      answer:
        "No. Results vary based on individual effort, consistency, and follow-through. This is an independent business opportunity, not a guaranteed paycheck.",
    },
    {
      question: "What do I need to do on the signup page?",
      answer:
        "After entering your email here, you'll be directed to travelbizworkshop.com. On that page, enter WELLNESSZONE as your Sponsor ID to get connected to the right team and training.",
    },
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Pathway Travel Advisors",
    url: "https://www.pathwaytraveladvisors.com",
    founder: {
      "@type": "Person",
      name: "Catina Perkins",
      jobTitle: "Travel Advisor & Team Leader",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-202-804-8709",
      contactType: "customer service",
      areaServed: "US",
      availableLanguage: "English",
    },
    serviceType: "Travel Advisory & Training",
    areaServed: { "@type": "Country", name: "United States" },
  };

  const heroStats = [
    { value: "3-Day", label: "Free Workshop" },
    { value: "100%", label: "Training Provided" },
    { value: "500+", label: "Community Members" },
  ];

  const features = [
    { icon: Plane, title: "Travel the World", desc: "Build a business around your love for travel with exclusive industry access." },
    { icon: DollarSign, title: "Multiple Income Paths", desc: "Commission-based earnings plus ongoing residual income opportunities." },
    { icon: Users, title: "Team Support", desc: "Join a community of ambitious advisors with proven mentorship and training." },
    { icon: Clock, title: "Flexible Schedule", desc: "Work from anywhere, anytime — build around your lifestyle, not the other way." },
  ];

  return (
    <>
      <SEOHead
        title="Start a Travel Business | FREE 3-Day Workshop | Pathway Travel Advisors"
        description="Learn how to start a home-based travel business with support and training. Join our FREE 3-Day Travel Business Workshop and discover if this opportunity fits your lifestyle. No income guarantees. Results vary."
        keywords="start travel business, travel business workshop, become a travel advisor, home travel business, pathway travel advisors, free workshop, WELLNESSZONE"
        canonical="https://www.pathwaytraveladvisors.com/"
        schemaData={schemaData}
        faqSchema={faqItems}
        speakableSelectors={["h1", "h2", ".tofu-content", ".mofu-content", ".bofu-content"]}
      />

      {/* ====== HERO ====== */}
      <section id="hero" className="relative bg-gradient-hero text-primary-foreground py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(180_80%_25%/0.3),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(43_85%_45%/0.1),transparent_60%)]" />
        <div className="relative container mx-auto px-4 text-center max-w-4xl">
          <Badge className="mb-6 bg-card/10 text-primary-foreground border border-primary-foreground/20 backdrop-blur-sm">
            <Shield className="w-4 h-4 mr-2" />
            Pathway Travel Advisors
          </Badge>

          <h1 className="tofu-content text-4xl md:text-6xl font-bold mb-6 leading-tight tracking-tight">
            Build a Travel Business
            <span className="block text-secondary">That Fits Your Life.</span>
          </h1>

          <p className="tofu-content text-lg md:text-xl mb-10 text-primary-foreground/85 leading-relaxed max-w-2xl mx-auto">
            If you want more freedom, more options, and a real skill you can grow—start here.
            Join the FREE 3-Day Travel Business Workshop and learn the basics step-by-step.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button
              size="lg"
              className="bg-secondary text-secondary-foreground hover:bg-secondary-light text-lg px-8 h-14 font-bold shadow-float"
              onClick={() => setModalOpen(true)}
            >
              Get Started Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 h-14"
              asChild
            >
              <a href="sms:2028048709&body=WIN">
                <Phone className="w-5 h-5 mr-2" />
                Call/Text WIN: 202-804-8709
              </a>
            </Button>
          </div>

          <p className="text-xs text-primary-foreground/50 mb-12">
            No income guarantees. Results vary based on effort, consistency, and follow-through.
          </p>

          {/* Stats Row */}
          <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto">
            {heroStats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-secondary">{stat.value}</div>
                <div className="text-xs md:text-sm text-primary-foreground/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== WHY TRAVEL — 4 Feature Cards ====== */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="tofu-content text-3xl md:text-4xl font-bold mb-4">Why Choose the Travel Business?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Unlike traditional paths, this model combines flexibility, technology, and proven support systems.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {features.map((f, i) => (
              <Card key={i} className="text-center hover:shadow-medium transition-shadow">
                <CardHeader>
                  <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3 border-2 border-accent">
                    <f.icon className="w-7 h-7 text-accent" />
                  </div>
                  <CardTitle className="text-lg">{f.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{f.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <p className="text-sm text-muted-foreground text-center mt-8">
            Earnings vary and depend on effort, skill, and consistency.
          </p>
        </div>
      </section>

      {/* ====== TOFU — "What If You're Closer Than You Think?" ====== */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="tofu-content text-3xl md:text-4xl font-bold mb-8 leading-tight">
            What if the life you want isn't far away…
            <span className="block text-accent">just unfamiliar?</span>
          </h2>

          <div className="text-lg text-muted-foreground space-y-4 mb-10 max-w-2xl mx-auto text-left md:text-center">
            <p>Most people don't lack ambition.<br />They lack direction.</p>
            <p>You don't need to quit your job tomorrow.<br />
            You don't need a huge audience.<br />
            You don't need experience in travel.</p>
            <p className="font-semibold text-foreground">You need a starting point.</p>
            <p>This workshop shows you one.</p>
          </div>

          <Button
            size="lg"
            className="bg-secondary text-secondary-foreground hover:bg-secondary-light text-lg px-8 h-14 font-bold shadow-float"
            onClick={() => setModalOpen(true)}
          >
            Get the FREE 3-Day Workshop
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>

      {/* ====== WHAT YOU'LL LEARN (3 Cards) ====== */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-accent text-accent-foreground">WHAT YOU'LL LEARN</Badge>
            <h2 className="mofu-content text-3xl md:text-4xl font-bold">3 Days. Real Knowledge. No Fluff.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { icon: Lightbulb, day: "Day 1", title: "How the travel business works", desc: "Simple + clear overview of the industry, the model, and how advisors earn." },
              { icon: BookOpen, day: "Day 2", title: "What travel advisors do", desc: "How clients are served, what your day looks like, and how support works." },
              { icon: Rocket, day: "Day 3", title: "How to start with a plan", desc: "A clear first step, support system, and consistency blueprint." },
            ].map((card, i) => (
              <Card key={i} className="text-center hover:shadow-medium transition-shadow border-t-4 border-t-accent">
                <CardHeader>
                  <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3 border-2 border-accent">
                    <card.icon className="w-7 h-7 text-accent" />
                  </div>
                  <Badge variant="outline" className="mx-auto mb-2">{card.day}</Badge>
                  <CardTitle className="text-xl">{card.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{card.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-10 text-center bg-card border border-border rounded-lg p-4 max-w-3xl mx-auto">
            <p className="text-sm text-muted-foreground">
              <strong>Next step:</strong> After you enter your email here, you'll finish registration at{" "}
              <a href="http://travelbizworkshop.com/" target="_blank" rel="noopener noreferrer" className="text-accent underline">
                travelbizworkshop.com
              </a>{" "}
              — Sponsor ID: <strong className="text-secondary">WELLNESSZONE</strong>
            </p>
          </div>
        </div>
      </section>

      {/* ====== HOW IT WORKS ====== */}
      <section id="how-it-works" className="py-20 bg-muted">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary text-primary-foreground">HOW IT WORKS</Badge>
            <h2 className="mofu-content text-3xl md:text-4xl font-bold">Let's make this simple.</h2>
          </div>

          <div className="space-y-8 mb-10">
            {[
              { step: 1, title: "Enter your email and get workshop access." },
              { step: 2, title: "Finish registration using Sponsor ID: WELLNESSZONE." },
              { step: 3, title: "Attend the 3-day training and decide if it makes sense for you." },
            ].map((item) => (
              <div key={item.step} className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-bold text-lg flex-shrink-0">
                  {item.step}
                </div>
                <div className="pt-2.5">
                  <p className="text-lg font-semibold">{item.title}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center text-muted-foreground space-y-1">
            <p>No pressure.</p>
            <p>No obligation.</p>
            <p className="font-semibold text-foreground">Just information and clarity.</p>
          </div>
        </div>
      </section>

      {/* ====== SUPPORT MATTERS ====== */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-10">
            <Badge className="mb-4 bg-accent text-accent-foreground">
              <HeartHandshake className="w-4 h-4 mr-2" />
              SUPPORT
            </Badge>
            <h2 className="mofu-content text-3xl md:text-4xl font-bold">
              Starting alone is hard.
              <span className="block text-accent">Starting supported is different.</span>
            </h2>
          </div>

          <p className="text-lg text-muted-foreground text-center mb-8">
            You're not being thrown into something.
          </p>

          <div className="text-center mb-4">
            <p className="text-lg font-semibold mb-4">You'll have:</p>
          </div>

          <div className="space-y-4 max-w-xl mx-auto mb-10">
            {[
              "A sponsor who answers questions.",
              "A structured onboarding path.",
              "Access to community and mentorship.",
              "Training that explains things step-by-step.",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                <p className="text-lg">{item}</p>
              </div>
            ))}
          </div>

          <p className="text-sm text-muted-foreground text-center">
            This is an independent business opportunity. Results vary based on your effort and action.
          </p>
        </div>
      </section>

      {/* ====== ABOUT CATINA ====== */}
      <section id="about" className="py-20 bg-muted">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-10">
            <Badge className="mb-4 bg-accent text-accent-foreground">MEET YOUR HOST</Badge>
            <h2 className="text-3xl md:text-4xl font-bold">Meet Catina</h2>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-10">
            <img
              src={catinaImg}
              alt="Catina Perkins — Travel Advisor and Workshop Host"
              className="w-48 h-48 rounded-full object-cover shadow-strong flex-shrink-0"
              loading="lazy"
            />
            <div>
              <p className="text-lg mb-6 leading-relaxed">
                I help people cross into the life they were meant to live by sharing an opportunity
                to build more wealth, freedom, and choices—through the travel business and the
                power of community.
              </p>
              <p className="text-muted-foreground">
                If you'd rather talk first,{" "}
                <a href="sms:2028048709&body=WIN" className="text-accent font-semibold underline">
                  call or text WIN to 202-804-8709
                </a>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ====== FAQ ====== */}
      <section id="faq" className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary text-primary-foreground">FAQ</Badge>
            <h2 className="text-3xl md:text-4xl font-bold">Common Questions</h2>
          </div>

          <div className="space-y-4">
            {faqItems.map((faq, i) => (
              <Card
                key={i}
                className="cursor-pointer hover:shadow-medium transition-shadow"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <CardHeader className="pb-0">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg text-left">{faq.question}</CardTitle>
                    {openFaq === i ? (
                      <ChevronUp className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                    )}
                  </div>
                </CardHeader>
                {openFaq === i && (
                  <CardContent className="pt-3">
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ====== TRUST BADGES ====== */}
      <section className="py-12 bg-muted border-y border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h3 className="text-lg font-semibold text-muted-foreground">Trusted by Thousands</h3>
            <p className="text-sm text-muted-foreground">Your success is backed by industry certifications and proven support.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
            {[
              { icon: Shield, label: "PlanNet Marketing Partner", sub: "Since 2018" },
              { icon: Star, label: "Community Rated", sub: "4.9 / 5 Stars" },
              { icon: CheckCircle, label: "Compliance-First", sub: "FTC Compliant" },
              { icon: Users, label: "24/7 Team Support", sub: "Always Available" },
            ].map((badge, i) => (
              <div key={i} className="flex items-center gap-3 bg-card rounded-lg px-5 py-3 shadow-soft border border-border">
                <badge.icon className="w-8 h-8 text-accent" />
                <div>
                  <p className="text-sm font-semibold">{badge.label}</p>
                  <p className="text-xs text-muted-foreground">{badge.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== BOFU — Final CTA ====== */}
      <section id="contact" className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="bofu-content text-3xl md:text-5xl font-bold mb-8 leading-tight">
            Ready to Start Your Travel Business Journey?
          </h2>

          <p className="text-lg text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
            Sign up for the free 3-day workshop or schedule a clarity call with Catina who will personally walk you through the process.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button
              size="lg"
              className="bg-secondary text-secondary-foreground hover:bg-secondary-light text-lg px-8 h-14 font-bold shadow-float"
              onClick={() => setModalOpen(true)}
            >
              Get the FREE 3-Day Workshop
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 h-14"
              asChild
            >
              <a href="sms:2028048709&body=WIN">
                <Phone className="w-5 h-5 mr-2" />
                Call/Text WIN: 202-804-8709
              </a>
            </Button>
          </div>

          <p className="text-sm text-primary-foreground/60">
            After entering your email, you'll complete registration at travelbizworkshop.com and enter Sponsor ID: <strong>WELLNESSZONE</strong>.
          </p>

          <p className="text-xs text-primary-foreground/40 mt-4">
            Independent Representative. No income guarantees. Results vary. This site is for education and workshop access.
          </p>
        </div>
      </section>

      <WorkshopModal open={modalOpen} onOpenChange={setModalOpen} />
    </>
  );
};

export default Home;
