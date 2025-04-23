
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { MusicSection } from "@/components/sections/MusicSection";
import { VideosSection } from "@/components/sections/VideosSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { EventsSection } from "@/components/sections/EventsSection";
import { BookingsSection } from "@/components/sections/BookingsSection";
import { StudioSection } from "@/components/sections/StudioSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <ThemeProvider defaultTheme="dark">
      <div className="min-h-screen">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <BookingsSection />
          
          <ContactSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
