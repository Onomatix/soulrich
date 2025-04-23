
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { MusicSection } from "@/components/sections/MusicSection";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";

const Music = () => {
  return (
    <ThemeProvider defaultTheme="dark">
      <div className="min-h-screen">
        <Navbar />
        <main className="pt-20">
          {/* <div className="section-container">
            <SectionHeader
              title="Music Portfolio"
              subtitle="Explore my releases, productions, and collaborations"
            />
          </div> */}
          <MusicSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Music;
