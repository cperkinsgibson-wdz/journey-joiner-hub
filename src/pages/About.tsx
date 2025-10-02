import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Award, 
  Users, 
  TrendingUp, 
  Shield, 
  CheckCircle, 
  Calendar,
  Star,
  MapPin
} from "lucide-react";
import SEOHead from "@/components/seo/SEOHead";

const About = () => {
  const achievements = [
    { icon: Users, stat: "500+", label: "Successful Agents" },
    { icon: TrendingUp, stat: "$2.5M+", label: "Total Commissions Paid" },
    { icon: MapPin, stat: "50+", label: "Countries Visited" },
    { icon: Award, stat: "98%", label: "Client Satisfaction" }
  ];

  const teamValues = [
    {
      icon: Shield,
      title: "Compliance & Ethics",
      description: "We operate with full transparency and adhere to all travel industry regulations and PlanNet Marketing compliance standards."
    },
    {
      icon: Award,
      title: "Proven Success System",
      description: "Our Platinum Network Team has developed and refined training methods that consistently produce top-performing agents."
    },
    {
      icon: Users,
      title: "Community Support",
      description: "Join a network of ambitious entrepreneurs who support each other's growth and celebrate collective success."
    }
  ];

  const testimonialVideos = [
    { url: "https://vimeo.com/1106575112?fl=pl&fe=sh", title: "Success Story 1" },
    { url: "https://vimeo.com/1106554369?fl=pl&fe=sh", title: "Success Story 2" },
    { url: "https://vimeo.com/1106537270?fl=pl&fe=sh", title: "Success Story 3" },
    { url: "https://vimeo.com/1106544755?fl=pl&fe=sh", title: "Success Story 4" },
    { url: "https://vimeo.com/1106141843?fl=pl&fe=sh", title: "Success Story 5" }
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "ExploreEarnRepeat - Platinum Network Team",
      "description": "Elite travel business opportunity team helping entrepreneurs build successful home-based travel agencies",
      "founder": {
        "@type": "Person",
        "name": "Catina Perkins",
        "jobTitle": "Team Leader"
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Baltimore",
        "addressRegion": "MD",
        "addressCountry": "US"
      }
    }
  };

  return (
    <>
      <SEOHead
        title="About Us - Platinum Network Team | ExploreEarnRepeat"
        description="Meet the Platinum Network Team - elite travel business mentors helping entrepreneurs build successful home-based travel agencies with proven systems and ongoing support."
        keywords="platinum network team, catina perkins, travel business mentors, plannet marketing team"
        schemaData={schemaData}
      />

      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-secondary text-secondary-foreground">
              <Award className="w-4 h-4 mr-2" />
              Platinum Network Team
            </Badge>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Meet Your Elite Travel Business Mentors
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90">
              Led by Preston Scott (Head of Platinum Network), Catina Perkins, and our elite team, we've helped hundreds of entrepreneurs 
              transform their passion for travel into profitable, sustainable businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Section - Preston Scott */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-accent text-accent-foreground">
                <Star className="w-4 h-4 mr-2" />
                Leadership
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Preston Scott</h2>
              <p className="text-xl text-muted-foreground">Head of the Platinum Network</p>
            </div>
            
            <Card className="shadow-elegant overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video w-full">
                  <iframe
                    src="https://player.vimeo.com/video/1106137217"
                    className="w-full h-full"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    title="Preston Scott - Head of Platinum Network"
                  ></iframe>
                </div>
              </CardContent>
              <CardHeader>
                <CardTitle>Leading with Excellence</CardTitle>
                <CardDescription className="text-base">
                  Preston Scott leads the Platinum Network Team with proven strategies and dedication to helping entrepreneurs build successful travel businesses.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                  <achievement.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{achievement.stat}</div>
                <div className="text-sm text-muted-foreground">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
                <div className="space-y-4 text-lg">
                  <p>
                    What started as a personal passion for travel has evolved into one of the most successful 
                    teams within PlanNet Marketing's network. The Platinum Network Team represents excellence, 
                    integrity, and proven results in the travel business industry.
                  </p>
                  <p>
                    Under the leadership of Catina Perkins, our team has developed comprehensive training systems, 
                    mentorship programs, and support structures that consistently produce top-performing travel agents.
                  </p>
                  <p>
                    We believe that everyone deserves the freedom to work from anywhere while earning substantial 
                    income doing what they love. That's why we've made it our mission to provide the tools, 
                    training, and ongoing support needed for long-term success.
                  </p>
                </div>
              </div>
              
              <Card className="shadow-medium">
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center">
                      <span className="text-primary-foreground font-bold text-2xl">CP</span>
                    </div>
                    <div>
                      <CardTitle className="text-xl">Catina Perkins</CardTitle>
                      <CardDescription>Team Leader & Mentor</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    "My journey in the travel industry began with a simple desire to explore the world. 
                    Today, I'm proud to lead a team that has collectively earned millions in commissions 
                    while helping others achieve their travel and financial dreams."
                  </p>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                    ))}
                    <span className="ml-2 text-sm text-muted-foreground">Team Success Rating</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories - Video Testimonials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-secondary text-secondary-foreground">
              <Star className="w-4 h-4 mr-2" />
              Real Results
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Hear From Our Successful Agents</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Watch real success stories from agents who have transformed their lives with the Platinum Network Team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {testimonialVideos.map((video, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-medium transition-shadow">
                <CardContent className="p-0">
                  <div className="aspect-video w-full">
                    <iframe
                      src={`https://player.vimeo.com/video/${video.url.split('/')[3].split('?')[0]}`}
                      className="w-full h-full"
                      frameBorder="0"
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowFullScreen
                      title={video.title}
                    ></iframe>
                  </div>
                </CardContent>
                <CardHeader>
                  <CardTitle className="text-lg">{video.title}</CardTitle>
                  <CardDescription>Agent Success Story</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Sets Us Apart</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our commitment to excellence, ethics, and your success defines everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {teamValues.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-medium transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-ocean rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Notice */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-l-4 border-l-accent">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Shield className="w-6 h-6 text-accent" />
                  <CardTitle className="text-xl">Compliance & Legal Notice</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  <strong>ExploreEarnRepeat</strong> operates as part of the Platinum Network Team within 
                  PlanNet Marketing, a legitimate network marketing company specializing in travel services. 
                  All business opportunities are conducted in full compliance with:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>Federal Trade Commission (FTC) guidelines and regulations</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>State-specific business opportunity and anti-pyramid scheme laws</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>Travel industry regulations and consumer protection standards</span>
                  </li>
                </ul>
                <p className="text-sm text-muted-foreground">
                  <strong>Income Disclaimer:</strong> Results vary based on individual effort, market conditions, 
                  and other factors. Past performance does not guarantee future results. This is a business 
                  opportunity that requires work, dedication, and ongoing effort to achieve success.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-success text-secondary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join Our Winning Team?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Experience the difference of working with proven mentors who are committed to your success. 
            Let's explore if the Platinum Network Team is the right fit for your goals.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary-dark" asChild>
              <Link to="/enroll">
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Your Clarity Call
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground" asChild>
              <Link to="/qa">
                Take Assessment First
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;