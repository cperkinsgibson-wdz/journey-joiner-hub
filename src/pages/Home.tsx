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

  // FAQ Schema for AEO
  const faqItems = [
    {
      question: "What is a home-based travel agency?",
      answer: "A home-based travel agency allows you to work as an independent travel agent from anywhere, booking travel for clients while earning commissions and enjoying travel perks. With ExploreEarnRepeat and the Platinum Network Team, you get training, support, and proven systems to build a profitable travel business."
    },
    {
      question: "How much can I earn as a travel agent?",
      answer: "Earnings vary based on your effort and sales. Our successful agents earn anywhere from $2,500 to over $10,000 per month. You earn commissions on every booking plus residual income from repeat customers. Top performers in our Platinum Network Team have earned six-figure annual incomes."
    },
    {
      question: "Do I need experience to start?",
      answer: "No prior travel industry experience is required. We provide comprehensive training through our 3-day workshop and ongoing mentorship. Catina Perkins and the Platinum Network Team will guide you step-by-step to build your successful travel business."
    },
    {
      question: "What are the startup costs?",
      answer: "Getting started requires a small investment for your PlanNet Marketing membership and InteleTravel host agency access. This gives you access to professional booking systems, commission structures, and business tools. We offer a free clarity call to discuss the investment and payment options."
    },
    {
      question: "How does the Platinum Network Team support me?",
      answer: "The Platinum Network Team provides weekly training sessions, 1-on-1 mentorship with Catina Perkins, exclusive marketing materials, proven sales strategies, and a supportive community of successful travel agents. You're never alone in building your business."
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
        keywords="home-based travel agency, travel business opportunity, platinum network team, travel agent training, work from home travel, catina perkins, baltimore travel business, AI search optimized, voice search travel business"
        canonical="https://www.exploreearnrepeat.com/"
        ogType="website"
        publishedTime="2024-01-15T10:00:00Z"
        modifiedTime={new Date().toISOString()}
        articleAuthor="Catina Perkins"
        breadcrumbs={[
          { name: "Home", url: "https://www.exploreearnrepeat.com/" }
        ]}
        schemaData={schemaData}
        faqSchema={faqItems}
        speakableSelectors={["h1", "h2", ".tofu-content", ".mofu-content", ".bofu-content"]}
      />

      {/* Hero Section - TOFU: Awareness */}
      <section className="relative bg-gradient-hero text-primary-foreground py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative container mx-auto px-4 text-center">
          <Badge className="mb-6 bg-secondary text-secondary-foreground shadow-glow">
            <Award className="w-4 h-4 mr-2" />
            Platinum Network Team • Since 2018
          </Badge>
          
          <h1 className="tofu-content text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Turn Your Passion for Travel into 
            <span className="text-secondary block">Unlimited Income Potential</span>
          </h1>
          
          <p className="tofu-content text-xl md:text-2xl mb-8 text-primary-foreground/95 max-w-3xl mx-auto leading-relaxed">
            Start your own home-based travel agency with zero experience required. 
            Learn proven systems, earn generous commissions, and explore the world—all on your schedule.
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

      {/* What We Do - TOFU: Education */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-accent text-accent-foreground">WHAT WE DO</Badge>
            <h2 className="tofu-content text-3xl md:text-4xl font-bold mb-4">Why Home-Based Travel Agencies Are Thriving</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The travel industry has evolved. Today's travelers want personalized service, and home-based agents 
              are perfectly positioned to deliver—with lower overhead and higher earning potential.
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

      {/* Social Proof Section - MOFU: Trust & Authority */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary text-primary-foreground">PROVEN RESULTS</Badge>
            <h2 className="mofu-content text-3xl md:text-4xl font-bold mb-4">Real People. Real Income. Real Freedom.</h2>
            <p className="mofu-content text-xl text-muted-foreground">
              Our Platinum Network Team members are earning consistent income while traveling the world. 
              Here's what they have to say about their journey.
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

      {/* How We Help - MOFU: Solutions */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-accent text-accent-foreground">HOW WE HELP</Badge>
            <h2 className="mofu-content text-3xl md:text-4xl font-bold mb-4">Your Complete Path to Travel Business Success</h2>
            <p className="text-xl text-muted-foreground">
              From zero to profitable in 90 days with our proven 5-step system
            </p>
          </div>
          
          <div className="space-y-8">
            {[
              {
                step: "Step 1",
                title: "Free Clarity Call",
                description: "Schedule a 15-minute call with Catina to assess if this opportunity is right for you. No pressure, just honest guidance."
              },
              {
                step: "Step 2",
                title: "3-Day Virtual Workshop",
                description: "Learn the fundamentals of the travel business, booking systems, and income strategies. Use code WELLNESSZONE for free access."
              },
              {
                step: "Step 3",
                title: "Business Setup & Training",
                description: "Get your PlanNet Marketing account activated and access our exclusive Platinum Network Team training portal with proven scripts and marketing materials."
              },
              {
                step: "Step 4",
                title: "1-on-1 Mentorship",
                description: "Work directly with Catina and experienced team leaders who will guide you to your first sales and beyond."
              },
              {
                step: "Step 5",
                title: "Scale & Earn",
                description: "Build your client base, earn residual income, and unlock travel perks. Our top agents work 10-20 hours per week earning 6-figures annually."
              }
            ].map((item, index) => (
              <Card key={index} className="border-l-4 border-l-primary hover:shadow-medium transition-shadow">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-hero flex items-center justify-center text-primary-foreground font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <Badge className="mb-2 bg-muted text-muted-foreground">{item.step}</Badge>
                      <CardTitle className="text-2xl mb-2">{item.title}</CardTitle>
                      <CardDescription className="text-base">{item.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - BOFU: Conversion */}
      <section className="py-20 bg-gradient-cta text-white">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-6 bg-white text-secondary shadow-glow">LIMITED TIME OFFER</Badge>
          <h2 className="bofu-content text-3xl md:text-5xl font-bold mb-6">Start Your Travel Business Today</h2>
          <p className="bofu-content text-xl mb-8 text-white/95 max-w-2xl mx-auto">
            Join now and get instant access to our 3-day workshop (use code <strong>WELLNESSZONE</strong> for free entry). 
            Plus, schedule a personal clarity call with Catina Perkins to create your custom success roadmap.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-white text-secondary hover:bg-white/90 shadow-float"
              onClick={() => window.open('https://www.plannetmarketing.com/mapp/plannet-pt?leadshareid=1130466', '_blank', 'noopener,noreferrer')}
            >
              <CheckCircle className="w-5 h-5 mr-2" />
              Enroll Now
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-secondary" asChild>
              <Link to="/enroll">
                <Calendar className="w-5 h-5 mr-2" />
                Book Free Clarity Call
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto text-sm">
            <div className="flex items-center justify-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>No Hidden Fees</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>30-Day Money Back Guarantee</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>Lifetime Support</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;