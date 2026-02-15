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
  Mail,
  UserCircle,
  ChevronDown,
  ChevronUp,
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
        title="FREE 3-Day Travel Business Workshop | Pathway Travel Advisors"
        description="Build a travel business that fits your life. Join the FREE 3-Day Workshop to learn the basics step-by-step. No experience needed. Training provided."
        keywords="travel business workshop, become a travel advisor, home travel business, pathway travel advisors, free workshop, WELLNESSZONE"
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

      {/* ====== THIS IS FOR YOU IF ====== */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="tofu-content text-3xl md:text-4xl font-bold text-center mb-10">
            You don't need hype. You need a next step.
          </h2>

          <div className="space-y-5">
            {[
              "You want extra income—but also something you can actually learn.",
              "You want flexibility—with structure and support.",
              "You want to build something real, not chase trends.",
              "You want community, mentorship, and a simple plan.",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-lg">{item}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-muted-foreground mt-10 text-lg">
            This free workshop breaks it down in plain language and helps you decide if this path fits your life.
          </p>
        </div>
      </section>

      {/* ====== WHAT YOU'LL LEARN ====== */}
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

      {/* ====== HOW IT WORKS ====== */}
      <section id="how-it-works" className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary text-primary-foreground">HOW IT WORKS</Badge>
            <h2 className="mofu-content text-3xl md:text-4xl font-bold">3 Simple Steps</h2>
          </div>

          <div className="space-y-8">
            {[
              { step: 1, title: "Get access", desc: "Enter your email to receive workshop details and next steps." },
              { step: 2, title: "Finish signup", desc: "Complete registration at travelbizworkshop.com — use Sponsor ID WELLNESSZONE." },
              { step: 3, title: "Show up + learn", desc: "Attend the 3-day workshop and leave with clarity and a next step." },
            ].map((item) => (
              <div key={item.step} className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-full bg-gradient-hero flex items-center justify-center text-primary-foreground font-bold text-lg flex-shrink-0">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
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
                <a href="sms:2028048709&body=WIN" className="text-primary font-semibold underline">
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

      {/* ====== FINAL CTA ====== */}
      <section id="contact" className="py-20 bg-gradient-cta">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="bofu-content text-3xl md:text-5xl font-bold mb-6 text-secondary-foreground">
            Ready to take one small step today?
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary-dark text-lg px-8 h-14 font-bold shadow-float"
              onClick={() => setModalOpen(true)}
            >
              Get the FREE 3-Day Workshop
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary h-14"
              asChild
            >
              <a href="sms:2028048709&body=WIN">
                <Phone className="w-5 h-5 mr-2" />
                Call/Text WIN: 202-804-8709
              </a>
            </Button>
          </div>

          <p className="text-xs text-secondary-foreground/70">
            Independent Representative. No income guarantees. Results vary. This site is for education and workshop access.
          </p>
        </div>
      </section>

      <WorkshopModal open={modalOpen} onOpenChange={setModalOpen} />
    </>
  );
};

export default Home;
