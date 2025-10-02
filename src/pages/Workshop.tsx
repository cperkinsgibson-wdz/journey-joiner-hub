import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  ExternalLink, 
  Gift, 
  Clock, 
  Users, 
  Star, 
  CheckCircle,
  Calendar,
  ArrowRight
} from "lucide-react";
import SEOHead from "@/components/seo/SEOHead";
import workshopPromo from "@/assets/travel-workshop-promo.jpg";

const Workshop = () => {
  const workshopBenefits = [
    "Discover the #1 home-based travel business model",
    "Learn how to earn $2,000-$10,000+ monthly from home",
    "Get insider access to wholesale travel rates",
    "Understand the complete training and support system",
    "Meet successful agents sharing their real results",
    "Receive bonus materials worth $297 absolutely free"
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "3-Day Online Travel Business Workshop",
    "description": "Learn how to start and grow a profitable home-based travel agency with expert training and proven systems",
    "organizer": {
      "@type": "Organization",
      "name": "ExploreEarnRepeat - Platinum Network Team"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "validFrom": new Date().toISOString()
    },
    "eventAttendanceMode": "https://schema.org/OnlineEventAttendanceMode",
    "eventStatus": "https://schema.org/EventScheduled"
  };

  return (
    <>
      <SEOHead
        title="Free 3-Day Travel Business Workshop - Use Code WELLNESSZONE"
        description="Join our exclusive 3-day online workshop to learn how to build a profitable home-based travel agency. Free access with promo code WELLNESSZONE."
        keywords="travel business workshop, free travel agent training, home-based travel business, wellnesszone promo code"
        schemaData={schemaData}
      />

      <div className="min-h-screen bg-gradient-subtle py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <Badge className="mb-6 bg-gradient-success text-secondary-foreground text-lg px-6 py-2">
                <Gift className="w-5 h-5 mr-2" />
                LIMITED TIME - FREE ACCESS
              </Badge>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                3-Day Online Travel Business 
                <span className="text-primary block">Workshop</span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Discover how to build a 6-figure home-based travel agency, even with zero experience. 
                Join thousands who've transformed their passion for travel into profitable businesses.
              </p>

              {/* Promotional Image */}
              <div className="mb-8 max-w-2xl mx-auto">
                <img 
                  src={workshopPromo}
                  alt="Travel Business Workshop - Use Code WELLNESSZONE at travelbizworkshop.com"
                  className="w-full rounded-lg shadow-strong"
                  loading="lazy"
                />
              </div>

              <div className="flex items-center justify-center space-x-4 mb-8">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                  ))}
                </div>
                <span className="text-muted-foreground">4.9/5 rating from 2,847 attendees</span>
              </div>
            </div>

            {/* Redirect Notice */}
            <Card className="shadow-strong border-l-4 border-l-secondary mb-12">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <ExternalLink className="w-6 h-6 text-secondary" />
                  <CardTitle className="text-2xl">Workshop Redirect Notice</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-lg">
                  This workshop is hosted by our partner platform <strong>travelbizworkshop.com</strong>. 
                  When you click to save your seat, you'll be redirected to their secure registration page.
                </p>
                
                <div className="bg-gradient-success p-4 rounded-lg text-secondary-foreground">
                  <p className="font-semibold text-center">
                    🎉 Don't forget to use promo code: <span className="text-2xl font-bold">WELLNESSZONE</span>
                  </p>
                </div>

                <p className="text-sm text-muted-foreground">
                  You'll receive the same high-quality training and support from the Platinum Network Team, 
                  just on our partner's optimized workshop platform. Your information is secure and will 
                  only be used to provide you with the best possible workshop experience.
                </p>
              </CardContent>
            </Card>

            {/* Workshop Benefits */}
            <Card className="shadow-medium mb-12">
              <CardHeader>
                <CardTitle className="text-2xl text-center">What You'll Learn in 3 Days</CardTitle>
                <CardDescription className="text-center text-lg">
                  Everything you need to start earning $2,000-$10,000+ monthly from home
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {workshopBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Workshop Details */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <Card className="text-center">
                <CardHeader>
                  <Clock className="w-12 h-12 text-accent mx-auto mb-2" />
                  <CardTitle>3 Days</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Comprehensive training delivered over 3 power-packed days</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <Users className="w-12 h-12 text-primary mx-auto mb-2" />
                  <CardTitle>Live Training</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Interactive sessions with Q&A and real-time support</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <Gift className="w-12 h-12 text-secondary mx-auto mb-2" />
                  <CardTitle>Bonus Materials</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">$297 worth of bonus materials and resources included</p>
                </CardContent>
              </Card>
            </div>

            {/* CTA Section */}
            <Card className="bg-gradient-hero text-primary-foreground shadow-strong">
              <CardContent className="py-12 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Ready to Transform Your Future?
                </h2>
                <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
                  Join thousands of successful entrepreneurs who started their journey with this workshop. 
                  Spaces are limited and filling fast!
                </p>
                
                <div className="space-y-4">
                  <Button 
                    size="lg" 
                    className="bg-secondary text-secondary-foreground hover:bg-secondary-light text-xl px-8 py-4 h-auto"
                    onClick={() => window.open('https://travelbizworkshop.com?utm_source=exploreearnrepeat&utm_medium=website&utm_campaign=workshop', '_blank', 'noopener,noreferrer')}
                  >
                    <Calendar className="w-6 h-6 mr-3" />
                    Save Your Seat - Use Code WELLNESSZONE
                    <ArrowRight className="w-6 h-6 ml-3" />
                  </Button>
                  
                  <p className="text-sm text-primary-foreground/80">
                    Redirects to travelbizworkshop.com - Use promo code WELLNESSZONE for free access
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Alternative Actions */}
            <div className="mt-12 text-center">
              <p className="text-lg text-muted-foreground mb-6">
                Want to speak with someone first before joining the workshop?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline" size="lg" asChild>
                  <Link to="/enroll">
                    <Calendar className="w-5 h-5 mr-2" />
                    Book Free Clarity Call
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/qa">
                    Take Quick Assessment
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Workshop;