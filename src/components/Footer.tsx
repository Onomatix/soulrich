import { ArrowUp, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { SpotifyIcon } from "./icons/SpotifyIcon";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-muted/50 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 flex flex-col items-center md:items-start">
            <div className="flex items-center gap-4">
              <img 
                src="/lovable-uploads/3b29cfff-b54a-47d5-b803-40592a750268.png" 
                alt="Soulrich Records Logo" 
                className="h-40 w-40 object-contain"
              />
              <div>
                <h2 className="text-2xl font-bold font-montserrat">Praveen Soulrich</h2>
                <p className="text-muted-foreground mt-1">Singer | DJ | Producer | Creator</p>
                <div className="flex space-x-4 mt-3">
                  <a 
                    href="https://open.spotify.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-[#1DB954] transition-colors"
                  >
                    <SpotifyIcon className="h-5 w-5" />
                  </a>
                  <a 
                    href="https://youtube.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-[#FF0000] transition-colors"
                  >
                    <Youtube className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <ThemeToggle />
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full"
              onClick={scrollToTop}
            >
              <ArrowUp className="h-5 w-5" />
            </Button>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center">
          <div className="text-sm text-muted-foreground mb-4 sm:mb-0">
            © {new Date().getFullYear()} Soulrich Records. All rights reserved.
          </div>
          
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <span className="text-sm text-muted-foreground">POWERED BY</span>
              <img src="/images/qc.png" alt="QC Logo" className="h-14" />
            </div>
            <a href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
