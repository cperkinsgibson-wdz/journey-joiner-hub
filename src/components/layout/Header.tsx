import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Calendar, Lock } from "lucide-react";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
      {/* Promo Bar */}
      <div className="bg-gradient-success text-center py-2 px-4">
        <p className="text-sm font-medium text-secondary-foreground">
          🎉 Use code <span className="font-bold">WELLNESSZONE</span> for the 3-Day Workshop
        </p>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b shadow-soft">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">E</span>
              </div>
              <span className="font-bold text-xl text-primary">ExploreEarnRepeat</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary",
                    isActive(item.href)
                      ? "text-primary border-b-2 border-primary"
                      : "text-muted-foreground"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Button variant="ghost" size="sm" asChild>
                <Link to="/admin/login">
                  <Lock className="w-4 h-4 mr-2" />
                  Admin
                </Link>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <Link to="/enroll">
                  <Calendar className="w-4 h-4 mr-2" />
                  Book Call
                </Link>
              </Button>
              <Button size="sm" asChild>
                <Link to="/workshop">Save Your Seat</Link>
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
            <div className="container mx-auto px-4 py-4 space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={cn(
                    "block py-2 text-sm font-medium transition-colors hover:text-primary",
                    isActive(item.href) ? "text-primary" : "text-muted-foreground"
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="ghost" size="sm" asChild>
                  <Link to="/admin/login" onClick={() => setIsMenuOpen(false)}>
                    <Lock className="w-4 h-4 mr-2" />
                    Admin
                  </Link>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <Link to="/enroll" onClick={() => setIsMenuOpen(false)}>
                    <Calendar className="w-4 h-4 mr-2" />
                    Book Clarity Call
                  </Link>
                </Button>
                <Button size="sm" asChild>
                  <Link to="/workshop" onClick={() => setIsMenuOpen(false)}>
                    Save Your Seat
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;