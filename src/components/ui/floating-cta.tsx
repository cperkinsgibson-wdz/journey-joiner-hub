import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import WorkshopModal from "@/components/workshop/WorkshopModal";

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400 && !isDismissed) {
        setIsVisible(true);
      } else if (window.scrollY <= 400) {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDismissed]);

  if (isDismissed) return null;

  return (
    <>
      <div
        className={cn(
          "hidden md:block fixed bottom-6 right-6 z-50 transition-all duration-500",
          isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0 pointer-events-none"
        )}
      >
        <div className="relative group">
          <Button
            size="lg"
            className="bg-secondary text-secondary-foreground shadow-float hover:shadow-glow transition-all duration-300 hover:scale-105 pr-12 rounded-full font-bold"
            onClick={() => setModalOpen(true)}
          >
            <ArrowRight className="w-5 h-5 mr-2" />
            Save Your Seat
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
      <WorkshopModal open={modalOpen} onOpenChange={setModalOpen} />
    </>
  );
};

export default FloatingCTA;
