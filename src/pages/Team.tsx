import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  LinkedinIcon, 
  Award, 
  Users, 
  TrendingUp,
  Calendar,
  CheckCircle,
  Star,
  MapPin,
  Phone,
  Mail,
  Globe
} from "lucide-react";
import SEOHead from "@/components/seo/SEOHead";

const Team = () => {
  const catinaCredentials = [
    "Certified Travel Professional (CTP) - Travel Institute",
    "PlanNet Marketing Independent Representative since 2018", 
    "Baltimore Business Journal Top 40 Under 40",
    "6+ Years Building Successful Travel Teams",
    "Generated $2.5M+ in Team Sales Volume",
    "Speaker at National Travel Industry Conferences",
    "Featured in Travel Weekly & Travel Agent Magazine"
  ];

  const achievements = [
    { metric: "500+", label: "Team Members Trained" },
    { metric: "$2.5M+", label: "Team Sales Volume" },
    { metric: "15+", label: "Industry Awards" },
    { metric: "95%", label: "Client Satisfaction Rate" }
  ];

  const mediaFeatures = [
    { outlet: "Travel Weekly", title: "Rising Stars in Home-Based Travel", date: "2023" },
    { outlet: "Travel Agent Magazine", title: "Building Successful Remote Teams", date: "2024" },
    { outlet: "Baltimore Business Journal", title: "Top 40 Under 40", date: "2022" },
    { outlet: "Host Travel Podcast", title: "Scaling Your Travel Business", date: "2024" }
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Catina Perkins",
    "jobTitle": "Platinum Network Team Leader & Certified Travel Professional",
    "worksFor": {
      "@type": "Organization",
      "name": "ExploreEarnRepeat",
      "url": "https://www.exploreearnrepeat.com"
    },
    "url": "https://www.exploreearnrepeat.com/team/catina-perkins",
    "sameAs": [
      "https://www.linkedin.com/in/catina-perkins",
      "https://www.facebook.com/catina.perkins.travel"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Baltimore",
      "addressRegion": "MD",
      "addressCountry": "US"
    },
    "alumniOf": "Travel Institute",
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "name": "Certified Travel Professional (CTP)",
        "credentialCategory": "certification"
      }
    ],
    "knowsAbout": [
      "Travel Industry",
      "Home-Based Travel Agency",
      "Team Leadership",
      "Travel Business Development",
      "Customer Service Excellence"
    ]
  };

  return (
    <>
      <SEOHead
        title="Meet Catina Perkins - Platinum Network Team Leader | ExploreEarnRepeat"
        description="Learn about Catina Perkins, Certified Travel Professional and leader of the Platinum Network Team. 6+ years building successful home-based travel agencies with $2.5M+ in team sales."
        keywords="Catina Perkins, travel industry expert, platinum network team, certified travel professional, home-based travel agency leader"
        canonical="https://www.exploreearnrepeat.com/team/catina-perkins"
        schemaData={schemaData}
      />

      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-secondary text-secondary-foreground">
                <Award className="w-4 h-4 mr-2" />
                Certified Travel Professional
              </Badge>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Meet Catina Perkins
                <span className="text-secondary block text-2xl md:text-3xl mt-2">
                  Your Travel Business Success Partner
                </span>
              </h1>
              
              <p className="text-xl mb-8 text-primary-foreground/90">
                With 6+ years in the travel industry and $2.5M+ in team sales volume, 
                Catina has built the premier platform for aspiring travel entrepreneurs 
                to build profitable, family-friendly businesses.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary-light" asChild>
                  <Link to="/enroll">
                    <Calendar className="w-5 h-5 mr-2" />
                    Book Strategy Call
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                  <a href="https://www.linkedin.com/in/catina-perkins" target="_blank" rel="noopener noreferrer">
                    <LinkedinIcon className="w-5 h-5 mr-2" />
                    LinkedIn Profile
                  </a>
                </Button>
              </div>
            </div>
            
            <div className="text-center">
              <div className="relative inline-block">
                <div className="w-80 h-80 mx-auto rounded-full bg-gradient-success p-2">
                  <img 
                    src="/api/placeholder/300/300" 
                    alt="Catina Perkins - Certified Travel Professional and Platinum Network Team Leader"
                    className="w-full h-full rounded-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-secondary text-secondary-foreground p-4 rounded-full shadow-strong">
                  <Star className="w-8 h-8" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Proven Track Record</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Numbers don't lie. Here's the impact Catina has made in the travel industry.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {achievement.metric}
                </div>
                <div className="text-muted-foreground">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Credentials & Recognition</h2>
              <p className="text-xl text-muted-foreground">
                Industry-certified expertise you can trust for your business success.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="hover:shadow-medium transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Award className="w-6 h-6 mr-2 text-primary" />
                    Professional Certifications
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {catinaCredentials.slice(0, 4).map((credential, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                        <span>{credential}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-medium transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <TrendingUp className="w-6 h-6 mr-2 text-primary" />
                    Industry Recognition
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {catinaCredentials.slice(4).map((credential, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                        <span>{credential}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Media Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured In Industry Media</h2>
            <p className="text-xl text-muted-foreground">
              Recognized expertise across leading travel industry publications and platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {mediaFeatures.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-medium transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-lg">{feature.outlet}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-2">"{feature.title}"</p>
                  <Badge variant="outline">{feature.date}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-ocean text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Get personalized guidance from Catina and discover if the travel business 
              opportunity is the right fit for your goals and lifestyle.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="flex items-center justify-center">
                <MapPin className="w-6 h-6 mr-3" />
                <div>
                  <div className="font-semibold">Location</div>
                  <div className="text-primary-foreground/80">Baltimore, MD (Remote Nationwide)</div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Phone className="w-6 h-6 mr-3" />
                <div>
                  <div className="font-semibold">Phone</div>
                  <div className="text-primary-foreground/80">Available via Calendly</div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Mail className="w-6 h-6 mr-3" />
                <div>
                  <div className="font-semibold">Email</div>
                  <div className="text-primary-foreground/80">catina@exploreearnrepeat.com</div>
                </div>
              </div>
            </div>
            
            <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary-light" asChild>
              <Link to="/enroll">
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Your Free Clarity Call
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;