import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  MessageCircle, 
  Calendar, 
  CheckCircle, 
  Clock, 
  User, 
  Mail, 
  Phone,
  Send,
  Bot,
  Rocket,
  ArrowRight
} from "lucide-react";
import SEOHead from "@/components/seo/SEOHead";
import catinaPhoto from "@/assets/catina-perkins.jpg";

const Enroll = () => {
  const benefits = [
    "✅ Discover if the travel business is right for you",
    "✅ Learn about our proven Platinum Network system", 
    "✅ Get answers to all your questions",
    "✅ No pressure - just honest conversation"
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Free Clarity Call - Travel Business Consultation",
    "description": "15-minute consultation to explore home-based travel agency opportunities with the Platinum Network Team",
    "provider": {
      "@type": "Organization",
      "name": "ExploreEarnRepeat"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  };

  return (
    <>
      <SEOHead
        title="Get Started - Enroll in Your Travel Business Today"
        description="Ready to start your travel business journey? Sign up directly with PlanNet Marketing or schedule a free clarity call with Catina Perkins to guide you through enrollment."
        keywords="enroll travel business, sign up travel agency, get started PlanNet Marketing, travel business enrollment"
        schemaData={schemaData}
      />

      <div className="min-h-screen bg-gradient-subtle py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-gradient-success text-secondary-foreground">
                <Rocket className="w-4 h-4 mr-2" />
                Get Started Today
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Start Your
                <span className="text-primary block">Travel Business Journey?</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Choose your path: Sign up directly or schedule a clarity call with Catina to walk you through the process.
              </p>
            </div>

            {/* Two Path Options */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card className="shadow-strong hover:shadow-xl transition-shadow border-2 border-primary/20">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                    <Rocket className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-2xl mb-2">Direct Sign Up</CardTitle>
                  <CardDescription className="text-base">
                    Ready to dive in? Start immediately with our streamlined enrollment process.
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>✅ Instant access to training materials</p>
                    <p>✅ Begin building your business today</p>
                    <p>✅ Join the Platinum Network Team</p>
                  </div>
                  <Button 
                    size="lg" 
                    className="w-full gap-2"
                    onClick={() => window.open('https://www.plannetmarketing.com/mapp/plannet-pt?leadshareid=1130466', '_blank', 'noopener,noreferrer')}
                  >
                    Sign Up Now
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                  <p className="text-xs text-muted-foreground">
                    You'll be redirected to PlanNet Marketing's enrollment page
                  </p>
                  <p className="text-xs mt-2">
                    <a href="https://www.plannetmarketing.com/mapp/plannet-pt?leadshareid=1130466" target="_blank" rel="noopener noreferrer" className="underline text-primary">
                      Having trouble? Open the signup page directly
                    </a>
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-strong hover:shadow-xl transition-shadow border-2 border-secondary/20">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-secondary to-secondary-light rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calendar className="w-8 h-8 text-secondary-foreground" />
                  </div>
                  <CardTitle className="text-2xl mb-2">Clarity Call</CardTitle>
                  <CardDescription className="text-base">
                    Have questions? Let Catina personally guide you through the enrollment process.
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>✅ 15-minute personalized consultation</p>
                    <p>✅ Get all your questions answered</p>
                    <p>✅ Guided enrollment assistance</p>
                  </div>
                  <Button size="lg" variant="secondary" className="w-full gap-2" asChild>
                    <a 
                      href="https://calendly.com/catina-perkins" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Schedule Your Call
                      <Calendar className="w-5 h-5" />
                    </a>
                  </Button>
                  <p className="text-xs text-muted-foreground">
                    Choose a time that works best for you
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
              {/* Booking Chat Bot */}
                <Card className="shadow-strong">
                <CardHeader>
                  <CardTitle className="text-xl">Why Choose Us?</CardTitle>
                  <CardDescription>What makes the Platinum Network Team different</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Proven Track Record</h3>
                        <p className="text-sm text-muted-foreground">
                          Over 500 successful travel agents trained with a 98% satisfaction rate
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <User className="w-6 h-6 text-secondary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Personal Mentorship</h3>
                        <p className="text-sm text-muted-foreground">
                          Direct access to Catina Perkins and the Platinum Network Team for ongoing support
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Rocket className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Comprehensive Training</h3>
                        <p className="text-sm text-muted-foreground">
                          3-day intensive workshop plus ongoing education and resources
                        </p>
                      </div>
                    </div>

                    <div className="border-t pt-6">
                      <h3 className="font-semibold mb-3 text-center">Ready to Get Started?</h3>
                      <div className="space-y-3">
                        <Button 
                          size="lg" 
                          className="w-full gap-2"
                          onClick={() => window.open('https://www.plannetmarketing.com/mapp/plannet-pt?leadshareid=1130466', '_blank', 'noopener,noreferrer')}
                        >
                          Sign Up Directly
                          <ArrowRight className="w-5 h-5" />
                        </Button>
                        <p className="text-xs">
                          <a href="https://www.plannetmarketing.com/mapp/plannet-pt?leadshareid=1130466" target="_blank" rel="noopener noreferrer" className="underline text-primary">
                            Having trouble? Open the signup page directly
                          </a>
                        </p>
                        <Button size="lg" variant="outline" className="w-full gap-2" asChild>
                          <a 
                            href="https://calendly.com/catina-perkins" 
                            target="_blank" 
                            rel="noopener noreferrer"
                          >
                            <Calendar className="w-5 h-5" />
                            Schedule a Call
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Call Details */}
              <div className="space-y-6">
                <Card className="shadow-medium">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Clock className="w-6 h-6 text-primary" />
                      <span>What to Expect</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {benefits.map((benefit, index) => (
                      <p key={index} className="flex items-start space-x-2">
                        <span>{benefit}</span>
                      </p>
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
                        alt="Catina Perkins - Platinum Network Team Leader"
                        className="w-16 h-16 rounded-full object-cover flex-shrink-0"
                      />
                      <div>
                        <p className="mb-3">
                          Team Leader of the Platinum Network Team with over 500 successful agents trained. 
                          Catina has helped entrepreneurs from all backgrounds build thriving travel businesses.
                        </p>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <span>📍 Baltimore, MD</span>
                          <span>⭐ 98% Success Rate</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-medium border-l-4 border-l-secondary">
                  <CardHeader>
                    <CardTitle className="text-secondary">Questions?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">
                      Not sure which path is right for you? Schedule a free 15-minute clarity call 
                      and Catina will walk you through the enrollment process and answer all your questions.
                    </p>
                    <Button variant="secondary" className="w-full gap-2" asChild>
                      <a 
                        href="https://calendly.com/catina-perkins" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <Calendar className="w-4 h-4" />
                        Talk to Catina
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Enroll;