import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, ArrowRight, ArrowLeft, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/seo/SEOHead";

interface Question {
  id: string;
  question: string;
  options: string[];
  stage: "TOFU" | "MOFU" | "BOFU";
  category: string;
}

const QAFlow = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isComplete, setIsComplete] = useState(false);
  const [leadScore, setLeadScore] = useState(0);

  const questions: Question[] = [
    // TOFU Questions (3)
    {
      id: "travel_passion",
      question: "How would you describe your relationship with travel?",
      options: [
        "I'm passionate about travel and love exploring new destinations",
        "I travel occasionally for business or vacation",
        "I don't travel much but I'm interested in the travel industry",
        "Travel isn't really my thing"
      ],
      stage: "TOFU",
      category: "Interest"
    },
    {
      id: "business_interest",
      question: "What attracts you most to a home-based business opportunity?",
      options: [
        "Flexibility to work from anywhere and set my own schedule",
        "Potential to earn additional income streams",
        "Combining personal interests with business opportunities",
        "I'm just exploring options right now"
      ],
      stage: "TOFU",
      category: "Motivation"
    },
    {
      id: "income_goals",
      question: "What are your income expectations for a side business?",
      options: [
        "$2,000+ per month within 6-12 months",
        "$1,000-$2,000 per month to start",
        "$500-$1,000 per month as supplemental income",
        "I'm not sure about income expectations yet"
      ],
      stage: "TOFU",
      category: "Goals"
    },
    // MOFU Questions (2)
    {
      id: "business_experience",
      question: "What's your experience with running a business or sales?",
      options: [
        "I have significant business/sales experience",
        "Some experience with customer service or sales",
        "No formal experience but I'm eager to learn",
        "I prefer not to handle sales directly"
      ],
      stage: "MOFU",
      category: "Experience"
    },
    {
      id: "time_commitment",
      question: "How much time can you realistically dedicate to building this business?",
      options: [
        "15-20+ hours per week - I'm ready to go all-in",
        "10-15 hours per week consistently",
        "5-10 hours per week to start",
        "Less than 5 hours per week"
      ],
      stage: "MOFU",
      category: "Commitment"
    },
    // BOFU Question (1)
    {
      id: "ready_to_start",
      question: "If this opportunity is the right fit, when would you want to start?",
      options: [
        "I'm ready to start immediately with the right guidance",
        "Within the next 2-4 weeks after getting more information",
        "Within the next 1-3 months when I have more time",
        "I'm still in the research phase"
      ],
      stage: "BOFU",
      category: "Readiness"
    }
  ];

  const calculateLeadScore = (allAnswers: Record<string, string>) => {
    let score = 0;
    const responses = Object.values(allAnswers);
    
    responses.forEach((answer) => {
      if (answer.includes("passionate") || answer.includes("ready to start immediately") || answer.includes("15-20+ hours")) {
        score += 20;
      } else if (answer.includes("significant experience") || answer.includes("$2,000+") || answer.includes("all-in")) {
        score += 15;
      } else if (answer.includes("eager to learn") || answer.includes("consistently")) {
        score += 10;
      } else if (answer.includes("exploring") || answer.includes("research phase")) {
        score += 5;
      }
    });
    
    return Math.min(score, 100);
  };

  const handleAnswer = (answer: string) => {
    const newAnswers = { ...answers, [questions[currentQuestion].id]: answer };
    setAnswers(newAnswers);
    
    if (currentQuestion === questions.length - 1) {
      const finalScore = calculateLeadScore(newAnswers);
      setLeadScore(finalScore);
      setIsComplete(true);
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const getRecommendation = (score: number) => {
    if (score >= 80) {
      return {
        level: "HIGH",
        title: "Perfect Fit! 🎉",
        message: "Based on your answers, you're an ideal candidate for our travel business opportunity. Your passion, commitment, and goals align perfectly with our successful agent profile.",
        nextStep: "Book your priority Clarity Call now to fast-track your journey!",
        ctaText: "Book Priority Call",
        badgeColor: "bg-gradient-success"
      };
    } else if (score >= 60) {
      return {
        level: "MEDIUM",
        title: "Great Potential! ✨",
        message: "You show strong potential for success with our travel business model. With the right training and support, you could build a thriving travel agency.",
        nextStep: "Schedule a Clarity Call to explore how we can help you succeed.",
        ctaText: "Schedule Clarity Call",
        badgeColor: "bg-accent"
      };
    } else {
      return {
        level: "LOW",
        title: "Let's Explore Together 🤔",
        message: "While you may be in the early stages of considering this opportunity, everyone starts somewhere. Our workshop might be a great way to learn more.",
        nextStep: "Join our free workshop to discover if this path is right for you.",
        ctaText: "Join Free Workshop",
        badgeColor: "bg-muted"
      };
    }
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const currentStage = questions[currentQuestion]?.stage || "COMPLETE";

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "QAPage",
    "mainEntity": {
      "@type": "Question",
      "name": "Travel Business Opportunity Assessment",
      "text": "Interactive assessment to determine fit for home-based travel agency opportunity",
      "answerCount": questions.length,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Personalized recommendations based on travel passion, business goals, and commitment level"
      }
    }
  };

  if (isComplete) {
    const recommendation = getRecommendation(leadScore);
    
    return (
      <>
        <SEOHead
          title="Assessment Complete - Your Travel Business Recommendations"
          description="Get personalized recommendations for starting your home-based travel agency based on your assessment results."
          noindex={true}
        />
        
        <div className="min-h-screen bg-gradient-subtle py-12">
          <div className="container mx-auto px-4 max-w-2xl">
            <Card className="shadow-strong">
              <CardHeader className="text-center">
                <Badge className={`mb-4 ${recommendation.badgeColor} text-white w-fit mx-auto`}>
                  {recommendation.level} PRIORITY LEAD
                </Badge>
                <CardTitle className="text-2xl md:text-3xl">{recommendation.title}</CardTitle>
                <div className="text-4xl font-bold text-primary mt-4">
                  {leadScore}% Match
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-lg text-center">{recommendation.message}</p>
                
                <div className="bg-muted p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Your Next Step:</h3>
                  <p>{recommendation.nextStep}</p>
                </div>

                <div className="flex flex-col gap-4">
                  <Button size="lg" className="w-full" asChild>
                    <Link to="/enroll">
                      <Calendar className="w-5 h-5 mr-2" />
                      {recommendation.ctaText}
                    </Link>
                  </Button>
                  
                  <Button size="lg" variant="outline" className="w-full" asChild>
                    <Link to="/workshop">
                      Save Your Spot - Use Code WELLNESSZONE
                    </Link>
                  </Button>
                </div>

                <div className="text-center pt-4">
                  <p className="text-sm text-muted-foreground mb-4">
                    Questions about your results? We're here to help!
                  </p>
                  <div className="flex justify-center gap-4">
                    <Button variant="ghost" size="sm" asChild>
                      <Link to="/faq">View FAQ</Link>
                    </Button>
                    <Button variant="ghost" size="sm" asChild>
                      <Link to="/about">Learn More</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <SEOHead
        title="Travel Business Assessment - Find Your Perfect Opportunity"
        description="Take our quick 6-question assessment to discover if our home-based travel agency opportunity is right for you. Get personalized recommendations."
        keywords="travel business assessment, travel agent quiz, home-based business evaluation"
        schemaData={schemaData}
      />
      
      <div className="min-h-screen bg-gradient-subtle py-12">
        <div className="container mx-auto px-4 max-w-2xl">
          {/* Progress Header */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <Badge variant="outline">{currentStage} Question</Badge>
              <span className="text-sm text-muted-foreground">
                {currentQuestion + 1} of {questions.length}
              </span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          {/* Question Card */}
          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle className="text-xl md:text-2xl">
                {questions[currentQuestion].question}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {questions[currentQuestion].options.map((option, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="w-full text-left justify-start h-auto p-4 hover:bg-primary hover:text-primary-foreground transition-colors"
                  onClick={() => handleAnswer(option)}
                >
                  <div className="flex items-start">
                    <div className="w-6 h-6 rounded-full border-2 border-current mr-3 mt-0.5 flex-shrink-0"></div>
                    <span className="text-sm md:text-base">{option}</span>
                  </div>
                </Button>
              ))}
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-8">
            <Button
              variant="ghost"
              onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
              disabled={currentQuestion === 0}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Previous
            </Button>
            
            <div className="text-sm text-muted-foreground">
              Secure & Confidential Assessment
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QAFlow;