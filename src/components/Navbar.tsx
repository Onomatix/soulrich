import { useState, useEffect } from "react";
import { Menu, X, Music, Video, Camera, Calendar, Phone, Briefcase, User, Home, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SpotifyIcon } from "./icons/SpotifyIcon";

const navLinks = [
  { name: "Home", path: "/", icon: <Home className="h-4 w-4 mr-1" /> },
  { name: "Music", path: "/music", icon: <Music className="h-4 w-4 mr-1" /> },
  { name: "Videos", path: "/videos", icon: <Video className="h-4 w-4 mr-1" /> },
  { name: "Gallery", path: "/gallery", icon: <Camera className="h-4 w-4 mr-1" /> },
 /*  { name: "Events", path: "/events", icon: <Calendar className="h-4 w-4 mr-1" /> }, */
  { name: "Bookings", path: "/bookings", icon: <Phone className="h-4 w-4 mr-1" /> },
  { name: "Studio", path: "/studio", icon: <Briefcase className="h-4 w-4 mr-1" /> },
  /* { name: "About", path: "/about", icon: <User className="h-4 w-4 mr-1" /> } */
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activePath, setActivePath] = useState("/");

  const toggleMenu = () => setIsOpen(!isOpen);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    const handleLocationChange = () => {
      setActivePath(window.location.pathname);
    };
    
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("popstate", handleLocationChange);
    
    setActivePath(window.location.pathname);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("popstate", handleLocationChange);
    };
  }, []);

  return (
    <nav className={cn(
      "fixed w-full z-50 transition-all duration-300",
      isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link 
              to="/" 
              className="flex items-center text-foreground hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <div className="mt-8">
                <img 
                  src="/lovable-uploads/3b29cfff-b54a-47d5-b803-40592a750268.png" 
                  alt="Soulrich Logo" 
                  className="h-24 w-24 object-contain"
                />
              </div>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "nav-link font-space tracking-wider uppercase text-xs",
                  activePath === link.path && "text-gray-400"
                )}
              >
                <span className="hidden lg:flex items-center">
                  {link.icon} {link.name}
                </span>
                <span className="lg:hidden">{link.name}</span>
              </Link>
            ))}
            <div className="flex items-center space-x-4 ml-4">
              <a 
                href="https://open.spotify.com/artist/2XqVWn7k9hD1DGi4Z4NQ2i?si=moGixwlaS2yI9PSOtCu9-w" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground hover:text-[#1DB954] transition-colors"
              >
                <SpotifyIcon className="h-5 w-5" />
              </a>
              <a 
                href="https://www.youtube.com/@soulrichdglab" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground hover:text-[#FF0000] transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <div className="ml-4">
                <ThemeToggle />
              </div>
            </div>
          </div>
          
          <div className="flex md:hidden items-center">
            <ThemeToggle />
            <Button 
              variant="ghost" 
              className="ml-2" 
              size="icon"
              onClick={toggleMenu}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>
      
      <div 
        className={cn(
          "fixed inset-0 bg-background/95 backdrop-blur-sm z-40 md:hidden transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="pt-20 p-4">
          <div className="space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "flex items-center py-3 px-4 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors font-space tracking-wider",
                  activePath === link.path ? "bg-gray-200 dark:bg-gray-700 text-gray-400" : "text-foreground"
                )}
                onClick={() => setIsOpen(false)}
              >
                {link.icon}
                <span className="ml-2">{link.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
