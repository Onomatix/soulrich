
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const Privacy = () => {
  return (
    <ThemeProvider defaultTheme="dark">
      <div className="min-h-screen">
        <Navbar />
        <main className="pt-24 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
            
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-lg mb-6">Last updated: April 11, 2025</p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
              <p>
                Welcome to Praveen Soulrich's official website. This Privacy Policy explains how we collect, use, disclose, 
                and safeguard your information when you visit our website. Please read this privacy policy carefully. 
                By continuing to use this site, you consent to the terms of our privacy policy.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">2. Information We Collect</h2>
              <p>
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>Fill out forms on our website</li>
                <li>Sign up for our newsletter</li>
                <li>Request information or assistance</li>
                <li>Purchase products or services</li>
                <li>Participate in online surveys</li>
                <li>Contact us directly</li>
              </ul>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">3. How We Use Your Information</h2>
              <p>
                We may use the information we collect for various purposes, including:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>Providing, operating, and maintaining our website</li>
                <li>Improving, personalizing, and expanding our website</li>
                <li>Understanding and analyzing how you use our website</li>
                <li>Developing new products, services, features, and functionality</li>
                <li>Communicating with you about events, offers, promotions, and news</li>
                <li>Processing transactions and sending related information</li>
                <li>Finding and preventing fraud</li>
              </ul>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">4. Contact Us</h2>
              <p>
                If you have questions or concerns about this Privacy Policy, please contact us at:
                <br />
                <a href="mailto:privacy@soulrichrecords.com" className="text-primary hover:underline">
                  privacy@soulrichrecords.com
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

export default Privacy;
