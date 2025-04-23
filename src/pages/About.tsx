
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { AboutSection } from "@/components/sections/AboutSection";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";

const About = () => {
  return (
    <ThemeProvider defaultTheme="dark">
      <div className="min-h-screen">
        <Navbar />
        <main className="pt-20">
          {/* <div className="section-container">
            <SectionHeader
              title="About Praveen Soulrich"
              subtitle="My journey in music and production"
            />
          </div> */}
          <AboutSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default About;
