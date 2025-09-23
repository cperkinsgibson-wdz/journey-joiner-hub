import { useEffect } from "react";
import { useLocation } from "react-router-dom";

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

// Google Analytics Configuration
const GA_MEASUREMENT_ID = "G-XXXXXXXXXX"; // Replace with actual GA4 ID
const GTM_ID = "GTM-XXXXXXX"; // Replace with actual GTM ID

export const initializeGA = () => {
  // Google Tag Manager
  const gtmScript = document.createElement("script");
  gtmScript.async = true;
  gtmScript.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(gtmScript);

  // Initialize dataLayer
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag(...args: any[]) {
    window.dataLayer.push(args);
  };

  window.gtag("js", new Date());
  window.gtag("config", GA_MEASUREMENT_ID, {
    send_page_view: false, // We'll handle this manually
    custom_map: {
      custom_parameter_1: "funnel_stage",
      custom_parameter_2: "user_segment"
    }
  });
};

export const trackPageView = (path: string, title: string) => {
  if (typeof window.gtag === "function") {
    window.gtag("config", GA_MEASUREMENT_ID, {
      page_title: title,
      page_location: `https://www.exploreearnrepeat.com${path}`,
      page_path: path
    });
  }
};

export const trackEvent = (eventName: string, parameters: Record<string, any> = {}) => {
  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, {
      event_category: "engagement",
      event_label: parameters.label || "",
      value: parameters.value || 0,
      ...parameters
    });
  }
};

// Predefined tracking functions for common events
export const trackCTAClick = (ctaType: string, location: string) => {
  trackEvent("cta_click", {
    event_category: "conversion",
    cta_type: ctaType,
    cta_location: location,
    event_label: `${ctaType}_${location}`
  });
};

export const trackQAInteraction = (action: string, questionId?: string) => {
  trackEvent("qa_interaction", {
    event_category: "engagement",
    qa_action: action,
    question_id: questionId,
    event_label: `qa_${action}`
  });
};

export const trackWorkshopSignup = (source: string) => {
  trackEvent("workshop_signup", {
    event_category: "conversion",
    signup_source: source,
    event_label: `workshop_${source}`,
    value: 1
  });
};

// Component for automatic page tracking
const Analytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Initialize GA on first load
    if (typeof window !== "undefined" && !window.gtag) {
      initializeGA();
    }
  }, []);

  useEffect(() => {
    // Track page views on route changes
    const title = document.title;
    trackPageView(location.pathname, title);
  }, [location]);

  return null; // This component doesn't render anything
};

// Higher-order component to add click tracking to any element
export const withClickTracking = (
  Component: React.ComponentType<any>,
  eventName: string
) => {
  return (props: any) => {
    const handleClick = (e: React.MouseEvent) => {
      trackEvent(eventName, {
        element_id: props.id,
        element_text: props.children,
        page_path: window.location.pathname
      });
      
      // Call original onClick if it exists
      if (props.onClick) {
        props.onClick(e);
      }
    };

    return <Component {...props} onClick={handleClick} />;
  };
};

export default Analytics;