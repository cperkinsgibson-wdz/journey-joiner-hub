import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  ChevronDown, 
  ChevronUp, 
  HelpCircle, 
  Calendar, 
  DollarSign,
  Clock,
  Users,
  Shield
} from "lucide-react";
import SEOHead from "@/components/seo/SEOHead";

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqData: FAQItem[] = [
    {
      question: "What exactly is a home-based travel agency?",
      answer: "A home-based travel agency allows you to operate as an independent travel agent from your home. You'll be affiliated with PlanNet Marketing and have access to the same booking platforms and commission structures as traditional travel agencies, but with the flexibility to work from anywhere.",
      category: "Business Model"
    },
    {
      question: "Do I need experience in travel or sales to get started?",
      answer: "No prior experience is required! Our Platinum Network Team provides comprehensive training covering everything from travel industry basics to advanced sales techniques. Many of our most successful agents started with zero experience.",
      category: "Getting Started"
    },
    {
      question: "How much can I realistically earn?",
      answer: "Earnings vary based on effort and commitment. Our agents typically earn $500-$5,000+ per month, with top performers earning six figures annually. Income comes from travel commissions, override commissions from your team, and various bonuses and incentives.",
      category: "Earnings"
    },
    {
      question: "What are the startup costs and ongoing fees?",
      answer: "The initial investment is $199.95 to join PlanNet Marketing, plus monthly fees of $99.95 for your back-office system and website. This includes access to booking platforms, training materials, and ongoing support. There are no hidden fees or additional charges.",
      category: "Costs"
    },
    {
      question: "How much time do I need to dedicate to be successful?",
      answer: "Success depends on your goals and effort level. Part-time agents (10-15 hours/week) can earn meaningful supplemental income, while those treating it as a full-time business (25+ hours/week) typically see the highest returns. The beauty is you set your own schedule.",
      category: "Time Commitment"
    },
    {
      question: "What kind of training and support do you provide?",
      answer: "The Platinum Network Team offers comprehensive training including: weekly team calls, one-on-one mentoring, industry certification programs, marketing materials, and access to our private Facebook group with 500+ successful agents sharing strategies and support.",
      category: "Support"
    },
    {
      question: "Is this a multi-level marketing (MLM) opportunity?",
      answer: "Yes, PlanNet Marketing operates as a network marketing company. However, you can be successful selling travel alone. The team-building aspect provides additional income opportunities through override commissions, but it's not required for success.",
      category: "Business Model"
    },
    {
      question: "Can I book my own travel and earn commissions?",
      answer: "Absolutely! One of the great benefits is earning commissions on your own travel. You'll have access to wholesale rates and can earn commissions on personal bookings, making your own vacations more affordable while building your business.",
      category: "Benefits"
    },
    {
      question: "What makes the Platinum Network Team different from other teams?",
      answer: "Our team has a proven track record with over 500 successful agents and $2.5M+ in commissions paid. We focus on personalized mentoring, compliance with all regulations, and building sustainable businesses rather than just quick wins.",
      category: "Team"
    },
    {
      question: "Are there any legal or compliance issues I should know about?",
      answer: "We operate in full compliance with FTC guidelines and all state regulations. As part of PlanNet Marketing, you'll be a legitimate travel agent with proper licensing and insurance. We provide ongoing compliance training to ensure all activities meet legal requirements.",
      category: "Legal"
    },
    {
      question: "What happens if I decide this isn't for me?",
      answer: "There's no long-term contract. While we're confident in our system and support, you can choose to discontinue at any time. We recommend giving it a fair try for at least 90 days to see real results, but the choice is always yours.",
      category: "Commitment"
    },
    {
      question: "How do I get started after my Clarity Call?",
      answer: "After your call, if we both agree it's a good fit, you'll complete your enrollment with PlanNet Marketing, join our private team training group, and begin our comprehensive onboarding process. Results vary based on individual effort and commitment.",
      category: "Getting Started"
    }
  ];

  const categories = Array.from(new Set(faqData.map(item => item.category)));

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <>
      <SEOHead
        title="Frequently Asked Questions - Home-Based Travel Agency"
        description="Get answers to common questions about starting a home-based travel agency with the Platinum Network Team. Learn about costs, earnings, training, and more."
        keywords="travel agency FAQ, home-based travel business questions, platinum network team FAQ"
        schemaData={schemaData}
      />

      <div className="py-16 bg-background">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gradient-hero text-primary-foreground">
              <HelpCircle className="w-4 h-4 mr-2" />
              Frequently Asked Questions
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get Answers to Your
              <span className="text-primary block">Travel Business Questions</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We've compiled the most common questions about starting a home-based travel agency. 
              Can't find what you're looking for? Book a clarity call for personalized answers.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2 mb-8 justify-center">
              {categories.map((category, index) => (
                <Badge key={index} variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                  {category}
                </Badge>
              ))}
            </div>

            {/* FAQ Items */}
            <div className="space-y-4">
              {faqData.map((item, index) => (
                <Card key={index} className="shadow-soft hover:shadow-medium transition-shadow">
                  <CardHeader 
                    className="cursor-pointer"
                    onClick={() => toggleItem(index)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <Badge variant="outline" className="text-xs">
                            {item.category}
                          </Badge>
                        </div>
                        <CardTitle className="text-left text-lg">{item.question}</CardTitle>
                      </div>
                      <div className="ml-4">
                        {openItems.includes(index) ? (
                          <ChevronUp className="w-5 h-5 text-muted-foreground" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-muted-foreground" />
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  
                  {openItems.includes(index) && (
                    <CardContent className="pt-0">
                      <CardDescription className="text-base leading-relaxed">
                        {item.answer}
                      </CardDescription>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>

            {/* CTA Section */}
            <div className="mt-16 text-center">
              <Card className="bg-gradient-subtle border-none shadow-medium">
                <CardContent className="py-12">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    Still Have Questions?
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                    Every situation is unique. Book a free clarity call to get personalized answers 
                    and see if our travel business opportunity is right for you.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" asChild>
                      <Link to="/enroll">
                        <Calendar className="w-5 h-5 mr-2" />
                        Book Free Clarity Call
                      </Link>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                      <Link to="/qa">
                        Take Quick Assessment
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Quick Stats */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="space-y-2">
                <DollarSign className="w-8 h-8 text-primary mx-auto" />
                <div className="text-2xl font-bold text-primary">$2.5M+</div>
                <div className="text-sm text-muted-foreground">Total Commissions</div>
              </div>
              <div className="space-y-2">
                <Users className="w-8 h-8 text-accent mx-auto" />
                <div className="text-2xl font-bold text-accent">500+</div>
                <div className="text-sm text-muted-foreground">Successful Agents</div>
              </div>
              <div className="space-y-2">
                <Clock className="w-8 h-8 text-secondary mx-auto" />
                <div className="text-2xl font-bold text-secondary">24/7</div>
                <div className="text-sm text-muted-foreground">Team Support</div>
              </div>
              <div className="space-y-2">
                <Shield className="w-8 h-8 text-primary mx-auto" />
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Compliant</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;