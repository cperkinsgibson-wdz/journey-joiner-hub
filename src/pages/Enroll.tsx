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
  Bot
} from "lucide-react";
import SEOHead from "@/components/seo/SEOHead";

const Enroll = () => {
  const [chatMessages, setChatMessages] = useState([
    {
      type: "bot",
      message: "Hi! I'm here to help you book your free 15-minute Clarity Call with Catina Perkins. I'll ask a few quick questions to ensure we make the best use of your time. What's your first name?",
      timestamp: new Date()
    }
  ]);
  const [currentInput, setCurrentInput] = useState("");
  const [currentStep, setCurrentStep] = useState(0);
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    timezone: "",
    experience: "",
    goals: "",
    urgency: ""
  });

  const botQuestions = [
    {
      field: "firstName",
      question: "Great! What's your first name?",
      followUp: "Nice to meet you, {firstName}! What's your last name?"
    },
    {
      field: "lastName", 
      question: "Perfect! What's your email address?",
      followUp: "Thanks! What's the best phone number to reach you?"
    },
    {
      field: "email",
      question: "What's the best phone number to reach you?",
      followUp: "What timezone are you in? (e.g., EST, PST, etc.)"
    },
    {
      field: "phone",
      question: "What timezone are you in? (e.g., EST, PST, etc.)",
      followUp: "Do you have any previous experience with travel or sales? (It's totally fine if you don't!)"
    },
    {
      field: "timezone",
      question: "Do you have any previous experience with travel or sales? (It's totally fine if you don't!)",
      followUp: "What's your main goal with a travel business opportunity?"
    },
    {
      field: "experience",
      question: "What's your main goal with a travel business opportunity?",
      followUp: "How soon are you looking to get started if this is the right fit?"
    },
    {
      field: "goals",
      question: "How soon are you looking to get started if this is the right fit?",
      followUp: "Perfect! I have everything I need. Let me connect you with Catina's calendar to book your Clarity Call."
    }
  ];

  const handleSendMessage = () => {
    if (!currentInput.trim()) return;

    // Add user message
    const newMessages = [...chatMessages, {
      type: "user",
      message: currentInput,
      timestamp: new Date()
    }];

    // Update user info
    const currentQuestion = botQuestions[currentStep];
    const updatedUserInfo = {
      ...userInfo,
      [currentQuestion.field]: currentInput
    };
    setUserInfo(updatedUserInfo);

    // Add bot response
    setTimeout(() => {
      const botResponse = currentQuestion.followUp.replace('{firstName}', updatedUserInfo.firstName);
      setChatMessages([...newMessages, {
        type: "bot",
        message: botResponse,
        timestamp: new Date()
      }]);
    }, 1000);

    setCurrentInput("");
    setCurrentStep(currentStep + 1);
  };

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
        title="Book Your Free Clarity Call - Start Your Travel Business Journey"
        description="Schedule a free 15-minute Clarity Call with Catina Perkins to explore home-based travel agency opportunities. No pressure, just honest guidance."
        keywords="free consultation, travel business call, clarity call, catina perkins"
        schemaData={schemaData}
      />

      <div className="min-h-screen bg-gradient-subtle py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-gradient-success text-secondary-foreground">
                <Calendar className="w-4 h-4 mr-2" />
                Free Clarity Call
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Book Your Free 15-Minute 
                <span className="text-primary block">Clarity Call</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Let's explore if our travel business opportunity is the perfect fit for your goals. 
                No pressure, just honest conversation with Catina Perkins.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Booking Chat Bot */}
              <Card className="shadow-strong">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-hero rounded-full flex items-center justify-center">
                      <Bot className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">Booking Assistant</CardTitle>
                      <CardDescription>I'll help you schedule your call in just 2 minutes</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {/* Chat Messages */}
                    <div className="h-80 overflow-y-auto bg-muted rounded-lg p-4 space-y-4">
                      {chatMessages.map((message, index) => (
                        <div
                          key={index}
                          className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                          <div
                            className={`max-w-[80%] p-3 rounded-lg ${
                              message.type === 'user'
                                ? 'bg-primary text-primary-foreground'
                                : 'bg-background text-foreground shadow-sm'
                            }`}
                          >
                            <p className="text-sm">{message.message}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Input Area */}
                    {currentStep < botQuestions.length && (
                      <div className="flex space-x-2">
                        <Input
                          value={currentInput}
                          onChange={(e) => setCurrentInput(e.target.value)}
                          placeholder="Type your answer..."
                          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                          className="flex-1"
                        />
                        <Button onClick={handleSendMessage} disabled={!currentInput.trim()}>
                          <Send className="w-4 h-4" />
                        </Button>
                      </div>
                    )}

                    {/* Calendly Embed Area */}
                    {currentStep >= botQuestions.length && (
                      <div className="text-center space-y-4">
                        <div className="bg-gradient-success p-4 rounded-lg text-secondary-foreground">
                          <CheckCircle className="w-8 h-8 mx-auto mb-2" />
                          <p className="font-semibold">Ready to book your call!</p>
                        </div>
                        <Button size="lg" className="w-full" asChild>
                          <a 
                            href="https://calendly.com/catina-perkins" 
                            target="_blank" 
                            rel="noopener noreferrer"
                          >
                            <Calendar className="w-5 h-5 mr-2" />
                            Book Your Clarity Call Now
                          </a>
                        </Button>
                        <p className="text-sm text-muted-foreground">
                          You'll be redirected to Catina's calendar to choose your preferred time.
                        </p>
                      </div>
                    )}
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
                      <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-primary-foreground font-bold text-2xl">CP</span>
                      </div>
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
                    <CardTitle className="text-secondary">Special Bonus</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">
                      During your call, mention code <strong>WELLNESSZONE</strong> to secure your spot 
                      in our exclusive 3-Day Travel Business Workshop (normally $97).
                    </p>
                    <Badge className="bg-secondary text-secondary-foreground">
                      $97 Value - FREE with your call
                    </Badge>
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