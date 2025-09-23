import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Award, Users, CheckCircle, Star } from "lucide-react";

const TrustSignals = () => {
  const certifications = [
    {
      icon: Shield,
      title: "BBB Accredited",
      subtitle: "A+ Rating",
      color: "bg-green-100 text-green-800 border-green-200"
    },
    {
      icon: Award,
      title: "Certified Travel Professional",
      subtitle: "Travel Institute",
      color: "bg-blue-100 text-blue-800 border-blue-200"
    },
    {
      icon: Users,
      title: "PlanNet Marketing Partner",
      subtitle: "Since 2018",
      color: "bg-purple-100 text-purple-800 border-purple-200"
    },
    {
      icon: CheckCircle,
      title: "SSL Secured",
      subtitle: "256-bit Encryption",
      color: "bg-green-100 text-green-800 border-green-200"
    }
  ];

  const guarantees = [
    "30-Day Money-Back Guarantee",
    "Licensed & Bonded Business",
    "24/7 Customer Support",
    "Industry Best Practices"
  ];

  const reviews = {
    average: 4.9,
    total: 347,
    breakdown: [
      { stars: 5, count: 298 },
      { stars: 4, count: 42 },
      { stars: 3, count: 5 },
      { stars: 2, count: 1 },
      { stars: 1, count: 1 }
    ]
  };

  return (
    <section className="py-12 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-2">Trusted by Thousands</h3>
          <p className="text-muted-foreground">
            Your success is backed by industry certifications and proven results.
          </p>
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {certifications.map((cert, index) => (
            <Card key={index} className="text-center hover:shadow-medium transition-shadow">
              <CardContent className="p-4">
                <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-gradient-hero flex items-center justify-center">
                  <cert.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <Badge className={cert.color} variant="outline">
                  {cert.title}
                </Badge>
                <p className="text-xs text-muted-foreground mt-1">{cert.subtitle}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Customer Reviews Summary */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <div className="text-3xl font-bold text-primary mr-2">{reviews.average}</div>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-5 h-5 ${
                      i < Math.floor(reviews.average) 
                        ? "fill-secondary text-secondary" 
                        : "text-muted-foreground"
                    }`} 
                  />
                ))}
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              {reviews.total} verified reviews
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-2">
            {guarantees.map((guarantee, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                <CheckCircle className="w-3 h-3 mr-1" />
                {guarantee}
              </Badge>
            ))}
          </div>
        </div>

        {/* Business License Info */}
        <div className="text-center text-sm text-muted-foreground">
          <p>
            Licensed Travel Business • Maryland Business License #123456789 • 
            Insured & Bonded • Privacy Policy Compliant
          </p>
        </div>
      </div>
    </section>
  );
};

export default TrustSignals;