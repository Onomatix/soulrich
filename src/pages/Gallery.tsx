
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { GallerySection } from "@/components/sections/GallerySection";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";

const Gallery = () => {
  return (
    <ThemeProvider defaultTheme="dark">
      <div className="min-h-screen">
        <Navbar />
        <main className="pt-20">
          {/* <div className="section-container">
            <SectionHeader
              title="Photo Gallery"
              subtitle="Explore visual moments from performances and behind the scenes"
            />
          </div> */}
          <GallerySection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Gallery;
