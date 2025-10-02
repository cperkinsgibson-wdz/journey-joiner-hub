import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube, MessageCircle, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" },
    { icon: MessageCircle, href: "#", label: "TikTok" },
  ];

  const quickLinks = [
    { name: "About", href: "/about" },
    { name: "Q&A Guide", href: "/qa" },
    { name: "FAQ", href: "/faq" },
    { name: "Workshop", href: "/workshop" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Income Disclosure", href: "/income-disclosure" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center">
                <span className="text-secondary-foreground font-bold text-lg">E</span>
              </div>
              <span className="font-bold text-xl">ExploreEarnRepeat</span>
            </div>
            <p className="text-sm text-primary-foreground/80">
              Empowering entrepreneurs to build successful home-based travel agencies with the Platinum Network Team.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-primary-light rounded-full flex items-center justify-center hover:bg-secondary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-secondary" />
                <span className="text-sm text-primary-foreground/80">info@pathwaytraveladvisors.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-secondary" />
                <span className="text-sm text-primary-foreground/80">+1 833-992-3276</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-secondary" />
                <span className="text-sm text-primary-foreground/80">Baltimore, MD</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Stay Updated</h3>
            <p className="text-sm text-primary-foreground/80 mb-4">
              Get the latest travel business insights and opportunities.
            </p>
            <div className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 rounded-md bg-primary-light/20 border border-primary-light/30 text-primary-foreground placeholder:text-primary-foreground/60 focus:outline-none focus:ring-2 focus:ring-secondary"
              />
              <button className="w-full bg-secondary text-secondary-foreground py-2 rounded-md hover:bg-secondary-light transition-colors font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-light/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-primary-foreground/80 mb-4 md:mb-0">
            © {currentYear} ExploreEarnRepeat. All rights reserved. | Platinum Network Team
          </div>
          <div className="flex space-x-6">
            {legalLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;