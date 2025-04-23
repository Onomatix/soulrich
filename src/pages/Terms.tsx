
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const Terms = () => {
  return (
    <ThemeProvider defaultTheme="dark">
      <div className="min-h-screen">
        <Navbar />
        <main className="pt-24 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
            
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-lg mb-6">Last updated: April 11, 2025</p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">1. Agreement to Terms</h2>
              <p>
                By accessing this website, you are agreeing to be bound by these Terms of Service, 
                all applicable laws and regulations, and agree that you are responsible for compliance 
                with any applicable local laws.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">2. Use License</h2>
              <p>
                Permission is granted to temporarily download one copy of the materials on Praveen Soulrich's 
                website for personal, non-commercial transitory viewing only. This is the grant of a license, not 
                a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose</li>
                <li>Attempt to decompile or reverse engineer any software contained on the website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
              </ul>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">3. Disclaimer</h2>
              <p>
                The materials on Praveen Soulrich's website are provided on an 'as is' basis. 
                Praveen Soulrich makes no warranties, expressed or implied, and hereby disclaims and 
                negates all other warranties including, without limitation, implied warranties or 
                conditions of merchantability, fitness for a particular purpose, or non-infringement 
                of intellectual property or other violation of rights.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">4. Contact Us</h2>
              <p>
                If you have any questions about these Terms, please contact us at:
                <br />
                <a href="mailto:legal@soulrichrecords.com" className="text-primary hover:underline">
                  legal@soulrichrecords.com
                </a>
              </p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Terms;
