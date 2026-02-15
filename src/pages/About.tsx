import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Award, Users, TrendingUp, Shield, CheckCircle, Calendar, Star, MapPin } from "lucide-react";
import SEOHead from "@/components/seo/SEOHead";
import catinaImg from "@/assets/catina-perkins.jpg";

const About = () => {
  const achievements = [
    { icon: Users, stat: "500+", label: "Community Members" },
    { icon: TrendingUp, stat: "3-Day", label: "Free Workshop" },
    { icon: MapPin, stat: "50+", label: "Countries Served" },
    { icon: Award, stat: "100%", label: "Training Provided" },
  ];

  const teamValues = [
    { icon: Shield, title: "Compliance & Ethics", description: "We operate with full transparency and adhere to all travel industry regulations and compliance standards." },
    { icon: Award, title: "Proven Support System", description: "Our team has developed and refined training methods that help advisors succeed step-by-step." },
    { icon: Users, title: "Community Support", description: "Join a network of ambitious entrepreneurs who support each other's growth and celebrate collective success." },
  ];

  const testimonialVideos = [
    { url: "https://vimeo.com/1106575112?fl=pl&fe=sh", title: "Success Story 1" },
    { url: "https://vimeo.com/1106554369?fl=pl&fe=sh", title: "Success Story 2" },
    { url: "https://vimeo.com/1106537270?fl=pl&fe=sh", title: "Success Story 3" },
    { url: "https://vimeo.com/1106544755?fl=pl&fe=sh", title: "Success Story 4" },
    { url: "https://vimeo.com/1106141843?fl=pl&fe=sh", title: "Success Story 5" },
    { url: "https://vimeo.com/1106131184?fl=pl&fe=sh", title: "Success Story 6" },
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    mainEntity: {
      "@type": "Organization",
      name: "Pathway Travel Advisors",
      description: "Travel business mentorship team helping entrepreneurs build successful home-based travel advisory businesses.",
      founder: { "@type": "Person", name: "Catina Perkins", jobTitle: "Team Leader" },
    },
  };

  return (
    <>
      <SEOHead
        title="About Us — Pathway Travel Advisors"
        description="Meet the Pathway Travel Advisors team. Led by Catina Perkins, we help entrepreneurs build successful home-based travel businesses with proven training and community support."
        keywords="pathway travel advisors, catina perkins, travel business mentors, travel advisor team"
        schemaData={schemaData}
      />

      {/* Hero */}
      <section className="bg-gradient-hero text-primary-foreground py-20">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <Badge className="mb-6 bg-card/10 text-primary-foreground border border-primary-foreground/20 backdrop-blur-sm">
            <Award className="w-4 h-4 mr-2" />
            Pathway Travel Advisors
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Meet Your Travel Business Mentors</h1>
          <p className="text-xl md:text-2xl text-primary-foreground/85 max-w-3xl mx-auto">
            Led by Catina Perkins and our team, we've helped hundreds of entrepreneurs discover the travel business path and build with confidence.
          </p>
        </div>
      </section>

      {/* Leadership — Catina */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-accent text-accent-foreground">
              <Star className="w-4 h-4 mr-2" />
              Leadership
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Catina Perkins</h2>
            <p className="text-xl text-muted-foreground">Travel Advisor & Team Leader</p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-10 max-w-4xl mx-auto">
            <img
              src={catinaImg}
              alt="Catina Perkins — Pathway Travel Advisors Team Leader"
              className="w-48 h-48 rounded-full object-cover shadow-strong flex-shrink-0"
              loading="lazy"
            />
            <div>
              <p className="text-lg mb-4 leading-relaxed">
                I help people cross into the life they were meant to live by sharing an opportunity to build more wealth, freedom, and choices—through the travel business and the power of community.
              </p>
              <p className="text-muted-foreground mb-4">
                As a team leader within PlanNet Marketing, Catina provides hands-on mentorship, structured training, and a supportive community to help new advisors get started with confidence.
              </p>
              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <span>📍 Baltimore, MD</span>
                <span>⭐ Gold Builder Status</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {achievements.map((a, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-accent/10 border-2 border-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <a.icon className="w-8 h-8 text-accent" />
                </div>
                <div className="text-3xl font-bold text-accent mb-2">{a.stat}</div>
                <div className="text-sm text-muted-foreground">{a.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-secondary text-secondary-foreground">
              <Star className="w-4 h-4 mr-2" />
              Real Stories
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Hear From Our Community</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real stories from advisors who took the first step. Results vary based on effort and consistency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {testimonialVideos.map((video, i) => (
              <Card key={i} className="overflow-hidden hover:shadow-medium transition-shadow">
                <CardContent className="p-0">
                  <div className="aspect-video w-full">
                    <iframe
                      src={`https://player.vimeo.com/video/${video.url.split("/")[3].split("?")[0]}`}
                      className="w-full h-full"
                      frameBorder="0"
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowFullScreen
                      title={video.title}
                    />
                  </div>
                </CardContent>
                <CardHeader>
                  <CardTitle className="text-lg">{video.title}</CardTitle>
                  <CardDescription>Community Member Story</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Sets Us Apart</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our commitment to ethics, training, and your success defines everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {teamValues.map((v, i) => (
              <Card key={i} className="text-center hover:shadow-medium transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-accent/10 border-2 border-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <v.icon className="w-8 h-8 text-accent" />
                  </div>
                  <CardTitle className="text-xl">{v.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{v.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="border-l-4 border-l-accent">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Shield className="w-6 h-6 text-accent" />
                <CardTitle className="text-xl">Compliance & Legal Notice</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                <strong>Pathway Travel Advisors</strong> operates within PlanNet Marketing, a legitimate network marketing company specializing in travel services. All business opportunities are conducted in full compliance with applicable regulations.
              </p>
              <ul className="space-y-2">
                {[
                  "Federal Trade Commission (FTC) guidelines and regulations",
                  "State-specific business opportunity and consumer protection laws",
                  "Travel industry regulations and ethical standards",
                ].map((item, i) => (
                  <li key={i} className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-muted-foreground">
                <strong>Income Disclaimer:</strong> Results vary based on individual effort, market conditions, and other factors. Past performance does not guarantee future results. This is a business opportunity that requires work, dedication, and ongoing effort.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Travel Business Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-primary-foreground/85">
            Sign up for the free workshop or schedule a clarity call with Catina to walk you through the process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary-light" asChild>
              <Link to="/enroll">
                <Calendar className="w-5 h-5 mr-2" />
                Get Started Today
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
              <Link to="/qa">Explore Q&A Guide</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
