import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground pb-20 md:pb-0">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center">
                <span className="text-secondary-foreground font-bold text-lg">P</span>
              </div>
              <span className="font-bold text-xl">Pathway Travel Advisors</span>
            </div>
            <p className="text-sm text-primary-foreground/80">
              Helping people build travel businesses with training, community, and a clear path forward.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-secondary" />
                <a href="tel:2028048709" className="text-sm text-primary-foreground/80 hover:text-secondary">
                  202-804-8709
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-secondary" />
                <span className="text-sm text-primary-foreground/80">info@pathwaytraveladvisors.com</span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="text-sm text-primary-foreground/80 hover:text-secondary">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-sm text-primary-foreground/80 hover:text-secondary">Terms of Service</Link></li>
              <li><Link to="/income-disclosure" className="text-sm text-primary-foreground/80 hover:text-secondary">Income Disclosure</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/70">
          <p>© {currentYear} Pathway Travel Advisors. Independent Representative. No income guarantees. Results vary. This site is for education and workshop access.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
