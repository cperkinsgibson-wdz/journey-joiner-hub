import { useEffect } from "react";

const PerformanceOptimizer = () => {
  useEffect(() => {
    // Preload critical resources
    const preloadResources = [
      { href: "https://fonts.googleapis.com", rel: "preconnect" },
      { href: "https://fonts.gstatic.com", rel: "preconnect", crossOrigin: "anonymous" },
      { href: "https://www.google-analytics.com", rel: "preconnect" },
      { href: "https://calendly.com", rel: "dns-prefetch" }
    ];

    preloadResources.forEach(resource => {
      const link = document.createElement("link");
      link.rel = resource.rel;
      link.href = resource.href;
      if (resource.crossOrigin) {
        link.crossOrigin = resource.crossOrigin;
      }
      document.head.appendChild(link);
    });

    // Implement lazy loading for images below the fold
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.classList.remove('lazy');
              imageObserver.unobserve(img);
            }
          }
        });
      }, {
        rootMargin: '50px'
      });

      // Observe all images with data-src attribute
      document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
      });
    }

    // Prefetch next page resources on hover
    const prefetchOnHover = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;
      if (target.tagName === 'A' && target.href) {
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = target.href;
        document.head.appendChild(link);
      }
    };

    document.addEventListener('mouseover', prefetchOnHover, { passive: true });

    // Service Worker registration for offline support
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then(registration => {
          console.log('SW registered:', registration);
        })
        .catch(error => {
          console.log('SW registration failed:', error);
        });
    }

    // Cleanup
    return () => {
      document.removeEventListener('mouseover', prefetchOnHover);
    };
  }, []);

  return null;
};

export default PerformanceOptimizer;