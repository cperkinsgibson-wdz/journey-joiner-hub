import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Plane, 
  DollarSign, 
  Users, 
  Clock, 
  Star, 
  CheckCircle, 
  ArrowRight,
  Calendar,
  Award,
  TrendingUp
} from "lucide-react";
import SEOHead from "@/components/seo/SEOHead";

const Home = () => {
  const benefits = [
    {
      icon: Plane,
      title: "Travel the World",
      description: "Earn while exploring amazing destinations with exclusive travel perks"
    },
    {
      icon: DollarSign,
      title: "Multiple Income Streams",
      description: "Commission-based earnings plus residual income opportunities"
    },
    {
      icon: Users,
      title: "Platinum Network Team",
      description: "Join our elite team with proven success strategies and mentorship"
    },
    {
      icon: Clock,
      title: "Flexible Schedule",
      description: "Work from anywhere, anytime - perfect for your lifestyle"
    }
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      location: "Denver, CO",
      text: "I've earned over $15K in my first 6 months while traveling to 8 countries!",
      rating: 5
    },
    {
      name: "Mike T.",
      location: "Austin, TX", 
      text: "The Platinum Network Team support is incredible. I'm booked solid with clients.",
      rating: 5
    },
    {
      name: "Jessica L.",
      location: "Miami, FL",
      text: "Finally found a business that combines my passion for travel with real income.",
      rating: 5
    }
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ExploreEarnRepeat",
    "url": "https://exploreearnrepeat.com",
    "logo": "https://exploreearnrepeat.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-xxx-xxx-xxxx",
      "contactType": "customer service",
      "email": "info@exploreearnrepeat.com"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Baltimore",
      "addressRegion": "MD",
      "addressCountry": "US"
    },
    "sameAs": [
      "https://facebook.com/exploreearnrepeat",
      "https://instagram.com/exploreearnrepeat"
    ]
  };

  return (
    <>
      <SEOHead
        title="Start Your Home-Based Travel Agency | ExploreEarnRepeat"
        description="Join the Platinum Network Team and build a profitable home-based travel agency. Earn commissions while exploring the world. Free 3-day workshop with code WELLNESSZONE."
        keywords="home-based travel agency, travel business opportunity, platinum network team, travel agent training, work from home travel"
        schemaData={schemaData}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-primary-foreground py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <Badge className="mb-6 bg-secondary text-secondary-foreground">
            <Award className="w-4 h-4 mr-2" />
            Platinum Network Team
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Transform Your Love for Travel into a 
            <span className="text-secondary block">Profitable Business</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto">
            Join thousands of entrepreneurs building successful home-based travel agencies. 
            Earn while you explore with our proven system and elite team support.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary-light" asChild>
              <Link to="/enroll">
                <Calendar className="w-5 h-5 mr-2" />
                Book Your Free Clarity Call
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <Link to="/qa">
                Start Q&A Guide
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary">$2.5K+</div>
              <div className="text-sm text-primary-foreground/80">Average Monthly Earnings</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary">15+</div>
              <div className="text-sm text-primary-foreground/80">Travel Destinations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary">500+</div>
              <div className="text-sm text-primary-foreground/80">Successful Agents</div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our Travel Business Model?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Unlike traditional travel agencies, our model combines flexibility, technology, and proven support systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-medium transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{benefit.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories from Our Community</h2>
            <p className="text-xl text-muted-foreground">
              Real results from real people who transformed their lives with our travel business opportunity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-medium transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                    ))}
                  </div>
                  <CardDescription className="text-base italic">
                    "{testimonial.text}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-ocean text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Travel Business Journey?</h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Take our quick Q&A assessment to see if you're a perfect fit for our proven system. 
            Then book your free clarity call with our team.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary-light" asChild>
              <Link to="/qa">
                <CheckCircle className="w-5 h-5 mr-2" />
                Take Q&A Assessment
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <Link to="/workshop">
                Save Seat - Use Code WELLNESSZONE
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;