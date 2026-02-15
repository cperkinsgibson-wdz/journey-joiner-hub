import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

interface WorkshopModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const WorkshopModal = ({ open, onOpenChange }: WorkshopModalProps) => {
  const [showSuccess, setShowSuccess] = useState(false);

  // Reset success state when modal closes
  useEffect(() => {
    if (!open) {
      setTimeout(() => setShowSuccess(false), 300);
    }
  }, [open]);

  // Load GHL embed script when modal opens
  useEffect(() => {
    if (open && !showSuccess) {
      const existingScript = document.querySelector(
        'script[src="https://app.pathwaytraveladvisors.com/js/form_embed.js"]'
      );
      if (!existingScript) {
        const script = document.createElement("script");
        script.src = "https://app.pathwaytraveladvisors.com/js/form_embed.js";
        script.async = true;
        document.body.appendChild(script);
      }
    }
  }, [open, showSuccess]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[560px] w-full max-h-[90vh] overflow-y-auto p-0">
        {showSuccess ? (
          <div className="p-8 text-center space-y-6">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="w-8 h-8 text-primary-foreground" />
            </div>
            <DialogHeader className="space-y-2">
              <DialogTitle className="text-3xl font-bold">You're in!</DialogTitle>
              <DialogDescription className="text-lg text-foreground font-medium">
                IMPORTANT: On the next page, enter{" "}
                <span className="font-bold text-secondary">WELLNESSZONE</span> as
                your Sponsor ID.
              </DialogDescription>
            </DialogHeader>
            <Button
              size="lg"
              className="bg-secondary text-secondary-foreground hover:bg-secondary-light w-full text-lg h-14"
              onClick={() =>
                window.open("http://travelbizworkshop.com/", "_blank", "noopener,noreferrer")
              }
            >
              Continue to Workshop Signup
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        ) : (
          <div className="p-6 space-y-4">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-center">
                Get FREE Workshop Access
              </DialogTitle>
              <DialogDescription className="text-center text-base text-muted-foreground">
                Enter your best email and I'll send you access + next steps.
              </DialogDescription>
            </DialogHeader>

            <div className="w-full" style={{ maxWidth: 520, margin: "0 auto" }}>
              <iframe
                src="https://app.pathwaytraveladvisors.com/widget/form/lTEkzgY22krWfsU8NzSY"
                style={{ width: "100%", height: 796, border: "none", borderRadius: 3 }}
                id="inline-lTEkzgY22krWfsU8NzSY"
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="FREE 3-Day Workshop Lead Capture"
                data-height="796"
                data-layout-iframe-id="inline-lTEkzgY22krWfsU8NzSY"
                data-form-id="lTEkzgY22krWfsU8NzSY"
                title="FREE 3-Day Workshop Lead Capture"
              />
            </div>

            {/* Fallback continue button below form */}
            <div className="text-center pt-2 border-t border-border">
              <p className="text-sm text-muted-foreground mb-3">
                Already submitted? Click below to continue.
              </p>
              <Button
                variant="outline"
                onClick={() => setShowSuccess(true)}
                className="w-full"
              >
                I've submitted my email — Continue
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default WorkshopModal;
