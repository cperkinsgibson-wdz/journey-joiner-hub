import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link, useSearchParams } from "react-router-dom";
import { 
  CheckCircle, 
  Calendar, 
  Mail, 
  Phone, 
  ExternalLink, 
  Gift,
  Clock,
  Users
} from "lucide-react";
import SEOHead from "@/components/seo/SEOHead";

const ThankYou = () => {
  const [searchParams] = useSearchParams();
  const leadId = searchParams.get('leadId');
  const source = searchParams.get('source') || 'unknown';

  useEffect(() => {
    // Track successful conversion
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'conversion', {
        send_to: 'GA_MEASUREMENT_ID/CONVERSION_ACTION',
        transaction_id: leadId || Date.now().toString()
      });
    }

    // Send webhook to n8n for lead processing
    const sendWebhook = async () => {
      try {
        const webhookData = {
          event: 'thank_you_page_visit',
          leadId: leadId,
          source: source,
          timestamp: new Date().toISOString(),
          page: window.location.href
        };

        // In a real implementation, you'd use the N8N_WEBHOOK_URL environment variable
        console.log('Sending webhook data:', webhookData);
        
        // Example webhook call (replace with actual N8N endpoint)
        // await fetch(process.env.N8N_WEBHOOK_URL, {
        //   method: 'POST',
        //   headers: { 'Content-Type': 'application/json' },
        //   body: JSON.stringify(webhookData)
        // });
      } catch (error) {
        console.error('Failed to send webhook:', error);
      }
    };

    sendWebhook();
  }, [leadId, source]);

  const nextSteps = [
    {
      icon: Mail,
      title: "Check Your Email",
      description: "You'll receive a confirmation email with your call details and preparation materials within 5 minutes.",
      urgent: true
    },
    {
      icon: Calendar,
      title: "Add to Calendar",
      description: "Don't forget to add your Clarity Call to your calendar and set a reminder 15 minutes before.",
      urgent: true
    },
    {
      icon: Phone,
      title: "Prepare Your Questions",
      description: "Think about your goals, timeline, and any specific questions you'd like to discuss during your call.",
      urgent: false
    },
    {
      icon: Gift,
      title: "Save Your Workshop Seat",
      description: "While you're here, secure your spot in our free 3-Day Travel Business Workshop with code WELLNESSZONE.",
      urgent: false
    }
  ];

  return (
    <>
      <SEOHead
        title="Thank You - Your Journey Begins Now!"
        description="Thank you for booking your Clarity Call. Your journey to travel business success starts here with the Platinum Network Team."
        noindex={true}
      />

      <div className="min-h-screen bg-gradient-subtle py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Success Header */}
            <div className="text-center mb-12">
              <div className="w-20 h-20 bg-gradient-success rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-12 h-12 text-secondary-foreground" />
              </div>
              
              <Badge className="mb-4 bg-primary text-primary-foreground">
                Booking Confirmed
              </Badge>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Congratulations! 
                <span className="text-primary block">Your Journey Begins Now</span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                You've taken the first step toward building your dream travel business. 
                Catina Perkins and the Platinum Network Team are excited to speak with you!
              </p>
            </div>

            {/* What Happens Next */}
            <Card className="shadow-strong mb-12">
              <CardHeader>
                <CardTitle className="text-2xl text-center">What Happens Next?</CardTitle>
                <CardDescription className="text-center text-lg">
                  Here's exactly what to expect in the next 24-48 hours
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {nextSteps.map((step, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                        step.urgent ? 'bg-gradient-hero text-primary-foreground' : 'bg-muted'
                      }`}>
                        <step.icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-2">
                          {step.title}
                          {step.urgent && <Badge className="ml-2 bg-secondary text-secondary-foreground">Action Required</Badge>}
                        </h3>
                        <p className="text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Special Offer */}
            <Card className="bg-gradient-success text-secondary-foreground shadow-strong mb-12">
              <CardContent className="py-12 text-center">
                <Gift className="w-16 h-16 mx-auto mb-6" />
                <h2 className="text-3xl font-bold mb-4">
                  Special Workshop Bonus
                </h2>
                <p className="text-xl mb-6 max-w-2xl mx-auto">
                  Since you've booked your Clarity Call, you're eligible for FREE access to our 
                  exclusive 3-Day Travel Business Workshop (normally $97).
                </p>
                
                <div className="bg-white/20 p-4 rounded-lg mb-6 inline-block">
                  <p className="font-bold text-lg">Use Promo Code: WELLNESSZONE</p>
                </div>
                
                <Button 
                  size="lg" 
                  className="bg-primary text-primary-foreground hover:bg-primary-dark"
                  asChild
                >
                  <Link to="/workshop">
                    <Calendar className="w-5 h-5 mr-2" />
                    Claim Your Free Workshop Seat
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card className="shadow-medium">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Phone className="w-6 h-6 text-accent" />
                    <span>Questions Before Your Call?</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <span>info@exploreearnrepeat.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <span>+1-xxx-xxx-xxxx</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Our team is here to help if you have any questions before your scheduled call.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-medium">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Users className="w-6 h-6 text-primary" />
                    <span>Join Our Community</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>Connect with other aspiring travel entrepreneurs:</p>
                  <div className="space-y-2">
                    <Button variant="outline" size="sm" className="w-full justify-start" asChild>
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Facebook Group
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" className="w-full justify-start" asChild>
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Instagram Community
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Final CTA */}
            <div className="text-center">
              <Card className="bg-gradient-subtle border-none shadow-medium">
                <CardContent className="py-8">
                  <h3 className="text-2xl font-bold mb-4">Ready to Learn More?</h3>
                  <p className="text-muted-foreground mb-6">
                    While you wait for your call, explore our resources and get familiar with the opportunity.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button variant="outline" asChild>
                      <Link to="/about">Learn About Our Team</Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link to="/faq">View FAQ</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThankYou;