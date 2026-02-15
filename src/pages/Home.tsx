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
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative container mx-auto px-4 text-center max-w-3xl">
          <h1 className="tofu-content text-4xl md:text-6xl font-bold mb-6 leading-tight tracking-tight">
            Build a Travel Business
            <span className="block text-secondary">That Fits Your Life.</span>
          </h1>

          <p className="tofu-content text-lg md:text-xl mb-10 text-primary-foreground/90 leading-relaxed">
            If you want more freedom, more options, and a real skill you can grow—start here.
            Join the FREE 3-Day Travel Business Workshop and learn the basics step-by-step.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
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
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary h-14"
              asChild
            >
              <a href="sms:2028048709&body=WIN">
                <Phone className="w-5 h-5 mr-2" />
                Call/Text WIN: 202-804-8709
              </a>
            </Button>
          </div>

          <p className="text-xs text-primary-foreground/60">
            No income guarantees. Results vary based on effort, consistency, and follow-through.
          </p>
        </div>
      </section>

      {/* ====== TOFU #1 — "What If You're Closer Than You Think?" ====== */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="tofu-content text-3xl md:text-4xl font-bold mb-8 leading-tight">
            What if the life you want isn't far away…
            <span className="block text-primary">just unfamiliar?</span>
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

      {/* ====== TOFU #2 — "Why Travel?" ====== */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-10">
            <Badge className="mb-4 bg-accent text-accent-foreground">
              <Globe className="w-4 h-4 mr-2" />
              WHY TRAVEL
            </Badge>
            <h2 className="tofu-content text-3xl md:text-4xl font-bold">Why the travel industry?</h2>
          </div>

          <div className="space-y-5 mb-8">
            {[
              { icon: TrendingUp, text: "Travel is one of the largest industries in the world." },
              { icon: Compass, text: "People travel in good times and uncertain times." },
              { icon: BookOpen, text: "Skills learned are transferable and practical." },
              { icon: Users, text: "You can serve clients while building something of your own." },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gradient-hero rounded-full flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <p className="text-lg pt-1.5">{item.text}</p>
              </div>
            ))}
          </div>

          <p className="text-sm text-muted-foreground text-center">
            Earnings vary and depend on effort, skill, and consistency.
          </p>
        </div>
      </section>

      {/* ====== TOFU #3 — "You're Not Late" ====== */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="tofu-content text-3xl md:text-4xl font-bold mb-8 leading-tight">
            You're not too late.
            <span className="block text-primary">You're just early to your next chapter.</span>
          </h2>

          <div className="text-lg text-muted-foreground space-y-4 mb-10 max-w-2xl mx-auto">
            <p>The online world moves fast.<br />But fundamentals still win.</p>
            <p>This isn't about trends.<br />
            It's about learning a real business model inside a structured system.</p>
            <p className="font-semibold text-foreground">And deciding if it fits your life.</p>
          </div>

          <Button
            size="lg"
            className="bg-secondary text-secondary-foreground hover:bg-secondary-light text-lg px-8 h-14 font-bold shadow-float"
            onClick={() => setModalOpen(true)}
          >
            Show Me the Workshop
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>

      {/* ====== WHAT YOU'LL LEARN (3 Cards) ====== */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-accent text-accent-foreground">WHAT YOU'LL LEARN</Badge>
            <h2 className="mofu-content text-3xl md:text-4xl font-bold">3 Days. Real Knowledge. No Fluff.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Lightbulb,
                day: "Day 1",
                title: "How the travel business works",
                desc: "Simple + clear overview of the industry, the model, and how advisors earn.",
              },
              {
                icon: BookOpen,
                day: "Day 2",
                title: "What travel advisors do",
                desc: "How clients are served, what your day looks like, and how support works.",
              },
              {
                icon: Rocket,
                day: "Day 3",
                title: "How to start with a plan",
                desc: "A clear first step, support system, and consistency blueprint.",
              },
            ].map((card, i) => (
              <Card key={i} className="text-center hover:shadow-medium transition-shadow border-t-4 border-t-primary">
                <CardHeader>
                  <div className="w-14 h-14 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-3">
                    <card.icon className="w-7 h-7 text-primary-foreground" />
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
              <a href="http://travelbizworkshop.com/" target="_blank" rel="noopener noreferrer" className="text-primary underline">
                travelbizworkshop.com
              </a>{" "}
              — Sponsor ID: <strong className="text-secondary">WELLNESSZONE</strong>
            </p>
          </div>
        </div>
      </section>

      {/* ====== MOFU #1 — "How This Actually Works" ====== */}
      <section id="how-it-works" className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary text-primary-foreground">HOW IT WORKS</Badge>
            <h2 className="mofu-content text-3xl md:text-4xl font-bold">Let's make this simple.</h2>
          </div>

          <div className="space-y-8 mb-10">
            {[
              { step: 1, title: "Enter your email and get workshop access.", desc: "" },
              { step: 2, title: "Finish registration using Sponsor ID: WELLNESSZONE.", desc: "" },
              { step: 3, title: "Attend the 3-day training and decide if it makes sense for you.", desc: "" },
            ].map((item) => (
              <div key={item.step} className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-full bg-gradient-hero flex items-center justify-center text-primary-foreground font-bold text-lg flex-shrink-0">
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

      {/* ====== MOFU #2 — "Support Matters" ====== */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-10">
            <Badge className="mb-4 bg-accent text-accent-foreground">
              <HeartHandshake className="w-4 h-4 mr-2" />
              SUPPORT
            </Badge>
            <h2 className="mofu-content text-3xl md:text-4xl font-bold">
              Starting alone is hard.
              <span className="block text-primary">Starting supported is different.</span>
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
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
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
      <section id="about" className="py-20 bg-background">
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
                <a href="sms:2028048709&body=WIN" className="text-primary font-semibold underline">
                  call or text WIN to 202-804-8709
                </a>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ====== FAQ ====== */}
      <section id="faq" className="py-20 bg-muted">
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

      {/* ====== BOFU — "Make the Move" ====== */}
      <section id="contact" className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="bofu-content text-3xl md:text-5xl font-bold mb-8 leading-tight">
            At some point, thinking has to turn into movement.
          </h2>

          <div className="text-lg text-primary-foreground/80 mb-10 space-y-2">
            <p>You can:</p>
            <p>Keep scrolling.</p>
            <p className="font-bold text-primary-foreground text-xl">Or</p>
            <p>Take one small step and get informed.</p>
            <p className="font-semibold text-secondary">That's it.</p>
          </div>

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
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary h-14"
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

          <p className="text-xs text-primary-foreground/50 mt-4">
            Independent Representative. No income guarantees. Results vary. This site is for education and workshop access.
          </p>
        </div>
      </section>

      <WorkshopModal open={modalOpen} onOpenChange={setModalOpen} />
    </>
  );
};

export default Home;
