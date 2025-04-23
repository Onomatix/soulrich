
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { EventsSection } from "@/components/sections/EventsSection";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";

const Events = () => {
  return (
    <ThemeProvider defaultTheme="dark">
      <div className="min-h-screen">
        <Navbar />
        <main className="pt-20">
          {/* <div className="section-container">
            <SectionHeader
              title="Upcoming Events"
              subtitle="Find out where I'll be performing next"
            />
          </div> */}
          <EventsSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Events;
