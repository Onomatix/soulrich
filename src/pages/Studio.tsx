
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { StudioSection } from "@/components/sections/StudioSection";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";

const Studio = () => {
  return (
    <ThemeProvider defaultTheme="dark">
      <div className="min-h-screen">
        <Navbar />
        <main className="pt-20">
         {/*  <div className="section-container">
            <SectionHeader
              title="Studio Services"
              subtitle="Professional music production, mixing, and mastering"
            />
          </div> */}
          <StudioSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Studio;
