import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

interface FloatingCTAProps {
  label?: string;
  onClick?: () => void;
  hideOnRoutes?: string[];
}

const FloatingCTA = ({ 
  label = "Book a Demo Now", 
  onClick,
  hideOnRoutes = ["/admin", "/enroll", "/workshop"]
}: FloatingCTAProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Show after scrolling 300px
    const handleScroll = () => {
      if (window.scrollY > 300 && !isDismissed) {
        setIsVisible(true);
      } else if (window.scrollY <= 300) {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDismissed]);

  // Check if current route should hide the CTA
  const shouldHide = hideOnRoutes.some(route => window.location.pathname.startsWith(route));

  if (shouldHide || isDismissed) return null;

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      window.location.href = "/enroll";
    }
  };

  return (
    <div
      className={cn(
        "fixed bottom-6 right-6 z-50 transition-all duration-500 ease-smooth",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0 pointer-events-none"
      )}
    >
      <div className="relative group">
        <Button
          size="lg"
          className="bg-gradient-cta text-white shadow-float hover:shadow-glow transition-all duration-300 hover:scale-105 pr-12 rounded-full font-semibold"
          onClick={handleClick}
        >
          <Calendar className="w-5 h-5 mr-2" />
          {label}
        </Button>
        <button
          onClick={() => setIsDismissed(true)}
          className="absolute -top-2 -right-2 w-6 h-6 bg-destructive text-destructive-foreground rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:scale-110"
          aria-label="Dismiss"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default FloatingCTA;
