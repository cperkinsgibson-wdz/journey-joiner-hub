import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import WorkshopModal from "@/components/workshop/WorkshopModal";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Workshop", href: "#hero" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "About", href: "#about" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollTo = (hash: string) => {
    setIsMenuOpen(false);
    if (location.pathname !== "/") {
      window.location.href = "/" + hash;
      return;
    }
    const el = document.querySelector(hash);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b shadow-soft">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">P</span>
              </div>
              <span className="font-bold text-lg text-primary">Pathway Travel Advisors</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollTo(item.href)}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                >
                  {item.name}
                </button>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center space-x-3">
              <Button
                size="sm"
                className="bg-secondary text-secondary-foreground hover:bg-secondary-light font-semibold"
                onClick={() => setModalOpen(true)}
              >
                Get FREE Workshop
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
          <div className="md:hidden border-t bg-background/95 backdrop-blur-sm">
            <div className="container mx-auto px-4 py-4 space-y-3">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollTo(item.href)}
                  className="block w-full text-left py-2 text-sm font-medium text-muted-foreground hover:text-primary"
                >
                  {item.name}
                </button>
              ))}
              <div className="flex flex-col space-y-2 pt-4 border-t border-border">
                <Button
                  size="sm"
                  className="bg-secondary text-secondary-foreground hover:bg-secondary-light font-semibold"
                  onClick={() => { setIsMenuOpen(false); setModalOpen(true); }}
                >
                  Get FREE Workshop
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
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-secondary p-3 shadow-float text-center">
        <Button
          className="w-full bg-primary text-primary-foreground hover:bg-primary-dark font-bold text-base h-12"
          onClick={() => setModalOpen(true)}
        >
          Start the FREE Workshop
        </Button>
        <p className="text-xs text-secondary-foreground/80 mt-1">
          Use Sponsor ID: <strong>WELLNESSZONE</strong>
        </p>
      </div>

      <WorkshopModal open={modalOpen} onOpenChange={setModalOpen} />
    </>
  );
};

export default Header;
