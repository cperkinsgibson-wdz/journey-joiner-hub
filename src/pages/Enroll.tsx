import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, CheckCircle, Clock, User, Rocket, ArrowRight } from "lucide-react";
import SEOHead from "@/components/seo/SEOHead";
import WorkshopModal from "@/components/workshop/WorkshopModal";
import catinaPhoto from "@/assets/catina-perkins.jpg";

const Enroll = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const benefits = [
    "Discover if the travel business is right for you",
    "Learn about our proven training system",
    "Get answers to all your questions",
    "No pressure — just honest conversation",
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Free 3-Day Travel Business Workshop",
    description: "Free workshop to explore home-based travel advisory business opportunities with Pathway Travel Advisors.",
    provider: { "@type": "Organization", name: "Pathway Travel Advisors" },
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  };

  return (
    <>
      <SEOHead
        title="Get Started — Enroll | Pathway Travel Advisors"
        description="Ready to start your travel business journey? Sign up for the free 3-day workshop or schedule a clarity call with Catina Perkins."
        keywords="enroll travel business, sign up travel advisor, get started pathway travel advisors"
        schemaData={schemaData}
      />

      {/* Hero */}
      <section className="bg-gradient-hero text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-card/10 text-primary-foreground border border-primary-foreground/20 backdrop-blur-sm">
            <Rocket className="w-4 h-4 mr-2" />
            Get Started Today
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your
            <span className="text-secondary block">Travel Business Journey?</span>
          </h1>
          <p className="text-xl text-primary-foreground/85 max-w-3xl mx-auto">
            Choose your path: Sign up for the free workshop or schedule a clarity call with Catina to walk you through the process.
          </p>
        </div>
      </section>

      <div className="bg-background py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Two Paths */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="shadow-strong hover:shadow-medium transition-shadow border-2 border-accent/20">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-accent/10 border-2 border-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Rocket className="w-8 h-8 text-accent" />
                </div>
                <CardTitle className="text-2xl mb-2">Direct Sign Up</CardTitle>
                <CardDescription className="text-base">
                  Ready to dive in? Start immediately with our free 3-day workshop.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>✅ Instant access to training materials</p>
                  <p>✅ Begin building your business today</p>
                  <p>✅ Join the Pathway Travel Advisors team</p>
                </div>
                <Button
                  size="lg"
                  className="w-full gap-2 bg-secondary text-secondary-foreground hover:bg-secondary-light"
                  onClick={() => setModalOpen(true)}
                >
                  Sign Up Now
                  <ArrowRight className="w-5 h-5" />
                </Button>
                <p className="text-xs text-muted-foreground">
                  You'll complete registration at travelbizworkshop.com with Sponsor ID: <strong>WELLNESSZONE</strong>
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-strong hover:shadow-medium transition-shadow border-2 border-secondary/20">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-secondary/10 border-2 border-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-secondary" />
                </div>
                <CardTitle className="text-2xl mb-2">Clarity Call</CardTitle>
                <CardDescription className="text-base">
                  Have questions? Let Catina personally guide you through the process.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>✅ 15-minute personalized consultation</p>
                  <p>✅ Get all your questions answered</p>
                  <p>✅ Guided enrollment assistance</p>
                </div>
                <Button size="lg" variant="outline" className="w-full gap-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground" asChild>
                  <a href="sms:2028048709&body=WIN">
                    Schedule Your Call
                    <Calendar className="w-5 h-5" />
                  </a>
                </Button>
                <p className="text-xs text-muted-foreground">
                  Call or text WIN to 202-804-8709
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Why Choose Us */}
            <Card className="shadow-strong">
              <CardHeader>
                <CardTitle className="text-xl">Why Choose Us?</CardTitle>
                <CardDescription>What makes Pathway Travel Advisors different</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {[
                    { icon: CheckCircle, color: "text-accent", bg: "bg-accent/10", title: "Proven Track Record", desc: "Gold Builder with proven success and exceptional training results." },
                    { icon: User, color: "text-secondary", bg: "bg-secondary/10", title: "Personal Mentorship", desc: "Direct access to Catina Perkins for ongoing support and guidance." },
                    { icon: Rocket, color: "text-accent", bg: "bg-accent/10", title: "Comprehensive Training", desc: "3-day intensive workshop plus ongoing education and resources." },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className={`w-12 h-12 ${item.bg} rounded-lg flex items-center justify-center flex-shrink-0`}>
                        <item.icon className={`w-6 h-6 ${item.color}`} />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Side Info */}
            <div className="space-y-6">
              <Card className="shadow-medium">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Clock className="w-6 h-6 text-accent" />
                    <span>What to Expect</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {benefits.map((b, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="shadow-medium">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <User className="w-6 h-6 text-accent" />
                    <span>Meet Catina Perkins</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-start space-x-4">
                    <img
                      src={catinaPhoto}
                      alt="Catina Perkins — Pathway Travel Advisors Team Leader"
                      className="w-16 h-16 rounded-full object-cover flex-shrink-0"
                    />
                    <div>
                      <p className="mb-3 text-sm">
                        Gold Builder within PlanNet Marketing's Platinum Network Team. Catina helps entrepreneurs from all backgrounds build travel businesses with proven systems and personalized support.
                      </p>
                      <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                        <span>📍 Baltimore, MD</span>
                        <span>⭐ Gold Builder Status</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <WorkshopModal open={modalOpen} onOpenChange={setModalOpen} />
    </>
  );
};

export default Enroll;
