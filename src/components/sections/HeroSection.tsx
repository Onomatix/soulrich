
import { useState, useEffect } from "react";
import { ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth"
    });
  };

  return (
    <section className="hero-section">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/70 z-10"></div>
        <img
          src="/lovable-uploads/e1606f3f-398b-437c-be50-628ecca3f8c2.png"
          alt="Praveen Soulrich"
          className="h-full w-full object-cover object-center md:object-[center_25%]"
        />
      </div>
      
      <div className="absolute bottom-24 left-0 right-0 z-10 text-center px-4">
        <p 
          className={cn(
            "text-sm sm:text-base text-gray-400 mb-8 opacity-0",
            isLoaded && "animate-fade-in"
          )}
          style={{ animationDelay: "0.6s" }}
        >
          Singer | DJ | Producer | Creator
        </p>
        
        <div 
          className={cn(
            "opacity-0",
            isLoaded && "animate-fade-in"
          )}
          style={{ animationDelay: "0.9s" }}
        >
          <button
            onClick={scrollToContent}
            className="inline-flex items-center justify-center rounded-full w-12 h-12 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors duration-300 animate-pulse-slow"
            aria-label="Scroll down"
          >
            <ArrowDown className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>
    </section>
  );
}
