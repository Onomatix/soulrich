
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { VideosSection } from "@/components/sections/VideosSection";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";

const Videos = () => {
  return (
    <ThemeProvider defaultTheme="dark">
      <div className="min-h-screen">
        <Navbar />
        <main className="pt-20">
          {/* <div className="section-container">
            <SectionHeader
              title="Video Collection"
              subtitle="Watch performances, music videos and behind-the-scenes footage"
            />
          </div> */}
          <VideosSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Videos;
