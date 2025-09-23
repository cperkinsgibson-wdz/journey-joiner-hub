import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  placeholder?: string;
  onLoad?: () => void;
  onError?: () => void;
  priority?: boolean;
  sizes?: string;
  srcSet?: string;
}

const LazyImage = ({
  src,
  alt,
  className,
  width,
  height,
  placeholder = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='central' text-anchor='middle' fill='%23d1d5db'%3ELoading...%3C/text%3E%3C/svg%3E",
  onLoad,
  onError,
  priority = false,
  sizes,
  srcSet
}: LazyImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (priority) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    onError?.();
  };

  const imageProps = {
    ref: imgRef,
    alt,
    className: cn(
      "transition-opacity duration-300",
      isLoaded ? "opacity-100" : "opacity-0",
      className
    ),
    width,
    height,
    sizes,
    srcSet,
    onLoad: handleLoad,
    onError: handleError,
    loading: priority ? "eager" as const : "lazy" as const,
    decoding: "async" as const
  };

  return (
    <div className="relative overflow-hidden">
      {/* Placeholder */}
      {!isLoaded && !hasError && (
        <img
          src={placeholder}
          alt=""
          className={cn("absolute inset-0 w-full h-full object-cover", className)}
          aria-hidden="true"
        />
      )}
      
      {/* Actual Image */}
      {(isInView || priority) && !hasError && (
        <img {...imageProps} src={src} />
      )}
      
      {/* Error State */}
      {hasError && (
        <div 
          className={cn(
            "flex items-center justify-center bg-muted text-muted-foreground",
            className
          )}
          style={{ width, height }}
        >
          <span className="text-sm">Failed to load image</span>
        </div>
      )}
    </div>
  );
};

export default LazyImage;