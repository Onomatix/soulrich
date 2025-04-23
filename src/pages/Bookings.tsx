
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { BookingsSection } from "@/components/sections/BookingsSection";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";

const Bookings = () => {
  return (
    <ThemeProvider defaultTheme="dark">
      <div className="min-h-screen">
        <Navbar />
        <main className="pt-20">
          {/* <div className="section-container">
            <SectionHeader
              title="Book Praveen Soulrich"
              subtitle="For performances, collaborations, and studio work"
            />
          </div> */}
          <BookingsSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Bookings;
