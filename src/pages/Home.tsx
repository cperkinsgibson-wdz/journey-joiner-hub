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
  TrendingUp,
  ExternalLink,
  LinkedinIcon,
  Shield
} from "lucide-react";
import SEOHead from "@/components/seo/SEOHead";
import TrustSignals from "@/components/seo/TrustSignals";
import LazyImage from "@/components/performance/LazyImage";

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
      name: "Sarah M. Johnson",
      location: "Denver, CO",
      title: "Regional Sales Director",
      text: "I've earned over $15K in my first 6 months while traveling to 8 countries! The Platinum Network Team training is unmatched.",
      rating: 5,
      image: "/api/placeholder/80/80",
      linkedin: "https://linkedin.com/in/sarah-johnson-travel",
      verified: true,
      joinDate: "March 2024",
      earnings: "$15,247"
    },
    {
      name: "Mike Thompson",
      location: "Austin, TX", 
      title: "Senior Travel Consultant",
      text: "The Platinum Network Team support is incredible. I'm booked solid with clients and earning 6-figures annually.",
      rating: 5,
      image: "/api/placeholder/80/80",
      linkedin: "https://linkedin.com/in/mike-thompson-travel",
      verified: true,
      joinDate: "January 2023",
      earnings: "$127,500"
    },
    {
      name: "Jessica Rodriguez",
      location: "Miami, FL",
      title: "Executive Travel Agent",
      text: "Finally found a business that combines my passion for travel with real income. Catina's mentorship changed my life!",
      rating: 5,
      image: "/api/placeholder/80/80",
      linkedin: "https://linkedin.com/in/jessica-rodriguez-travel",
      verified: true,
      joinDate: "June 2023",
      earnings: "$89,350"
    }
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ExploreEarnRepeat",
    "alternateName": "Platinum Network Team",
    "url": "https://www.exploreearnrepeat.com",
    "logo": "https://www.exploreearnrepeat.com/logo.png",
    "foundingDate": "2018",
    "founder": {
      "@type": "Person",
      "name": "Catina Perkins",
      "jobTitle": "Certified Travel Professional",
      "url": "https://www.exploreearnrepeat.com/team/catina-perkins"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-410-555-0123",
      "contactType": "customer service",
      "email": "catina@exploreearnrepeat.com",
      "areaServed": "US",
      "availableLanguage": "English"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Baltimore",
      "addressRegion": "MD",
      "addressCountry": "US"
    },
    "sameAs": [
      "https://facebook.com/exploreearnrepeat",
      "https://instagram.com/exploreearnrepeat",
      "https://www.linkedin.com/company/exploreearnrepeat"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "347",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": testimonials.map(testimonial => ({
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": testimonial.rating,
        "bestRating": "5"
      },
      "author": {
        "@type": "Person",
        "name": testimonial.name
      },
      "reviewBody": testimonial.text,
      "datePublished": testimonial.joinDate
    })),
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Travel Business Training Programs",
      "itemListElement": [
        {
          "@type": "Offer",
          "name": "Free Clarity Call",
          "description": "15-minute consultation to assess travel business fit",
          "price": "0",
          "priceCurrency": "USD"
        },
        {
          "@type": "Offer", 
          "name": "3-Day Travel Business Workshop",
          "description": "Comprehensive training on building a home-based travel agency",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "price": "Free with code WELLNESSZONE"
          }
        }
      ]
    },
    "serviceType": [
      "Travel Agency Training",
      "Business Mentorship", 
      "Travel Industry Consulting"
    ],
    "areaServed": {
      "@type": "Country",
      "name": "United States"
    },
    "knowsAbout": [
      "Home-Based Travel Agency",
      "Travel Business Development",
      "PlanNet Marketing",
      "Travel Industry Training"
    ]
  };

  return (
    <>
      <SEOHead
        title="Start Your Home-Based Travel Agency | ExploreEarnRepeat"
        description="Join the Platinum Network Team and build a profitable home-based travel agency. Earn commissions while exploring the world. Free 3-day workshop with code WELLNESSZONE."
        keywords="home-based travel agency, travel business opportunity, platinum network team, travel agent training, work from home travel, catina perkins, baltimore travel business"
        canonical="https://www.exploreearnrepeat.com/"
        ogType="website"
        publishedTime="2024-01-15T10:00:00Z"
        modifiedTime={new Date().toISOString()}
        articleAuthor="Catina Perkins"
        breadcrumbs={[
          { name: "Home", url: "https://www.exploreearnrepeat.com/" }
        ]}
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
            <Button 
              size="lg" 
              className="bg-secondary text-secondary-foreground hover:bg-secondary-light"
              onClick={() => window.open('https://www.plannetmarketing.com/mapp/plannet-pt?leadshareid=1130466', '_blank', 'noopener,noreferrer')}
              data-gtm="hero-signup-click"
            >
              Get Started Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <Link to="/enroll" data-gtm="hero-enroll-click">
                <Calendar className="w-5 h-5 mr-2" />
                Learn More
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
                  <div className="flex items-center mb-4">
                    <LazyImage
                      src={testimonial.image}
                      alt={`${testimonial.name} - ${testimonial.title}`}
                      className="w-16 h-16 rounded-full object-cover mr-4"
                      width={64}
                      height={64}
                    />
                    <div className="flex-1">
                      <div className="flex items-center space-x-1 mb-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                        ))}
                      </div>
                      {testimonial.verified && (
                        <Badge className="bg-green-100 text-green-800 text-xs">
                          <Shield className="w-3 h-3 mr-1" />
                          Verified
                        </Badge>
                      )}
                    </div>
                  </div>
                  <CardDescription className="text-base italic mb-4">
                    "{testimonial.text}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.title}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                    </div>
                    <div className="text-right text-sm">
                      <div className="text-primary font-semibold">{testimonial.earnings}</div>
                      <div className="text-muted-foreground">Since {testimonial.joinDate}</div>
                      <a 
                        href={testimonial.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-primary hover:text-primary-light mt-1"
                        data-gtm="testimonial-linkedin-click"
                      >
                        <LinkedinIcon className="w-4 h-4 mr-1" />
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Signals Section */}
      <TrustSignals />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-ocean text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Travel Business Journey?</h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Sign up directly with PlanNet Marketing or schedule a clarity call with Catina 
            who will personally walk you through the enrollment process.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-secondary text-secondary-foreground hover:bg-secondary-light"
              onClick={() => window.open('https://www.plannetmarketing.com/mapp/plannet-pt?leadshareid=1130466', '_blank', 'noopener,noreferrer')}
            >
              <CheckCircle className="w-5 h-5 mr-2" />
              Sign Up Now
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <Link to="/enroll">
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Clarity Call
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;