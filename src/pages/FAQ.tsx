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
  Users,
  Clock,
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
      question: "What is the difference between PlanNet Marketing and InteleTravel?",
      answer: "PlanNet Marketing and InteleTravel are two separate companies that work in partnership. InteleTravel is a host travel agency and one of the originators of the home-based travel business model, with over 30 years in the travel industry. PlanNet Marketing, established in 2015, is a marketing company that introduces individuals to the opportunity to become Independent Travel Advisors through InteleTravel and also offers a separate business opportunity for those who choose to build a team.",
      category: "Company Structure"
    },
    {
      question: "What does InteleTravel provide?",
      answer: "InteleTravel operates as a host travel agency. Independent Travel Advisors (ITAs) affiliated through InteleTravel can access booking platforms, supplier relationships, training, and support to operate a home-based travel business.",
      category: "Company Structure"
    },
    {
      question: "What does PlanNet Marketing provide?",
      answer: "PlanNet Marketing provides a business opportunity where independent representatives can earn compensation by promoting travel services and, if they choose, building a team. Compensation is based on activity and performance. Results vary and income is not guaranteed.",
      category: "Company Structure"
    },
    {
      question: "Are PlanNet Marketing and InteleTravel the same company?",
      answer: "No. They are separate companies. InteleTravel is a host agency in the travel industry. PlanNet Marketing is a marketing company that partners with InteleTravel to introduce individuals to the home-based travel advisor opportunity.",
      category: "Company Structure"
    },
    {
      question: "Do I join one company or both?",
      answer: "Individuals who want to operate as Independent Travel Advisors affiliate through InteleTravel. Those who want to participate in the marketing and team-building side may also choose to become representatives with PlanNet Marketing. Each operates under its own structure and guidelines.",
      category: "Getting Started"
    },
    {
      question: "What is a home-based travel business model?",
      answer: "A home-based travel business model allows Independent Travel Advisors to operate remotely, helping clients book travel experiences while working under a host agency structure. InteleTravel has been a pioneer in this model for over three decades.",
      category: "Business Model"
    },
    {
      question: "Is income guaranteed with either company?",
      answer: "No. Income is not guaranteed. Earnings depend on individual effort, consistency, skills developed, and market conditions. Results vary.",
      category: "Earnings"
    },
    {
      question: "Can I build this business part-time?",
      answer: "Yes. Many individuals choose to build part-time around their existing responsibilities. Like any business, progress depends on focused and consistent activity.",
      category: "Time Commitment"
    },
    {
      question: "Do I have to build a team?",
      answer: "No. Building a team is optional. Some individuals focus solely on operating as travel advisors. Others choose to participate in the marketing and leadership side through PlanNet Marketing.",
      category: "Business Model"
    },
    {
      question: "What is the next step if I want more details?",
      answer: "The next step is a relaxed informational session where you can ask questions and understand how both companies operate. There is no obligation to move forward.",
      category: "Getting Started"
    }
  ];

  const categories = Array.from(new Set(faqData.map(item => item.category)));

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "inLanguage": "en-US",
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
        title="Frequently Asked Questions — PlanNet Marketing & InteleTravel"
        description="Get answers to common questions about PlanNet Marketing, InteleTravel, and starting a home-based travel advisor business. No hype — just clarity."
        keywords="PlanNet Marketing FAQ, InteleTravel FAQ, home-based travel advisor questions, travel business FAQ"
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
              Understand the Opportunity
              <span className="text-primary block">Before You Decide</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Clear, compliant answers about PlanNet Marketing, InteleTravel, and the home-based travel advisor model. 
              For full details, schedule a relaxed informational session.
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
                    Want the Full Picture?
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                    For full details on structure, expectations, and how the partnership between PlanNet Marketing and InteleTravel works, schedule a relaxed informational session. No pressure. Just clarity.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" asChild>
                      <Link to="/enroll">
                        <Calendar className="w-5 h-5 mr-2" />
                        Schedule an Informational Session
                      </Link>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                      <Link to="/qa">
                        Browse the 100+ Q&A Hub
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Quick Stats */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="space-y-2">
                <Users className="w-8 h-8 text-primary mx-auto" />
                <div className="text-2xl font-bold text-primary">1,500+</div>
                <div className="text-sm text-muted-foreground">Successful Mentors</div>
              </div>
              <div className="space-y-2">
                <Shield className="w-8 h-8 text-accent mx-auto" />
                <div className="text-2xl font-bold text-accent">30+</div>
                <div className="text-sm text-muted-foreground">Years (InteleTravel)</div>
              </div>
              <div className="space-y-2">
                <Clock className="w-8 h-8 text-secondary mx-auto" />
                <div className="text-2xl font-bold text-secondary">50+</div>
                <div className="text-sm text-muted-foreground">Training Resources</div>
              </div>
              <div className="space-y-2">
                <Shield className="w-8 h-8 text-primary mx-auto" />
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Compliant</div>
              </div>
            </div>

            {/* Compliance Footer */}
            <p className="text-xs text-muted-foreground text-center mt-12">
              Results vary. Earnings depend on individual effort, skill, and consistency. This content is for educational purposes only and does not guarantee income. Catina Perkins is an Independent Representative.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
