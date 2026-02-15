import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Calendar, Shield } from "lucide-react";
import WorkshopModal from "@/components/workshop/WorkshopModal";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Q&A Guide", href: "/qa" },
    { name: "FAQ", href: "/faq" },
    { name: "Enroll", href: "/enroll" },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-gradient-announcement text-primary-foreground py-2 text-center text-sm font-medium">
        <span>🎉 Use code <strong>WELLNESSZONE</strong> for the 3-Day Workshop</span>
      </div>

      <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b shadow-soft">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-lg">P</span>
              </div>
              <span className="font-bold text-lg text-foreground">PathwayTravelAdvisors</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-medium transition-colors hover:text-accent ${
                    isActive(item.href)
                      ? "text-foreground border-b-2 border-accent pb-1"
                      : "text-muted-foreground"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center space-x-3">
              <Link to="/admin/login" className="flex items-center space-x-1 text-sm text-muted-foreground hover:text-foreground">
                <Shield className="w-4 h-4" />
                <span>Admin</span>
              </Link>
              <Button variant="outline" size="sm" asChild>
                <a href="sms:2028048709&body=WIN">
                  <Calendar className="w-4 h-4 mr-1" />
                  Book Call
                </a>
              </Button>
              <Button
                size="sm"
                className="bg-primary text-primary-foreground hover:bg-primary-light font-semibold"
                onClick={() => setModalOpen(true)}
              >
                Save Your Seat
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md hover:bg-muted"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t bg-card/95 backdrop-blur-sm">
            <div className="container mx-auto px-4 py-4 space-y-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block w-full text-left py-2 text-sm font-medium ${
                    isActive(item.href) ? "text-accent" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 pt-4 border-t border-border">
                <Button
                  size="sm"
                  className="bg-primary text-primary-foreground hover:bg-primary-light font-semibold"
                  onClick={() => { setIsMenuOpen(false); setModalOpen(true); }}
                >
                  Save Your Seat
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a href="sms:2028048709&body=WIN">
                    <Phone className="w-4 h-4 mr-2" />
                    Text WIN: 202-804-8709
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Mobile Sticky CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-primary p-3 shadow-float text-center">
        <Button
          className="w-full bg-secondary text-secondary-foreground hover:bg-secondary-light font-bold text-base h-12"
          onClick={() => setModalOpen(true)}
        >
          Start the FREE Workshop
        </Button>
        <p className="text-xs text-primary-foreground/80 mt-1">
          Use Sponsor ID: <strong>WELLNESSZONE</strong>
        </p>
      </div>

      <WorkshopModal open={modalOpen} onOpenChange={setModalOpen} />
    </>
  );
};

export default Header;
