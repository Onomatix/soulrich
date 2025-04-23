import { Mail, Phone, MapPin, Instagram, Facebook, Youtube, Twitter } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-16 px-6 md:px-20 bg-[#0A0A0A] text-white">
      <div className="max-w-6xl mx-auto">
        {/* Centered heading and subtitle */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">Get in Touch</h2>
          <p className="mt-4 text-lg text-gray-300">
            Connect with me on social media or send a message
          </p>
        </div>

        {/* Contact Info */}
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 mt-1" />
                contact@praveensoulrich.com
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 mt-1" />
                +1 (234) 567-890
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1" />
                <div>
                  Based in Lisbon, Portugal <br />
                  Available for worldwide bookings
                </div>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Me</h3>
            <div className="flex gap-6 text-white mt-2">
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <Instagram className="w-6 h-6 hover:text-purple-400 transition" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <Facebook className="w-6 h-6 hover:text-purple-400 transition" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer">
                <Youtube className="w-6 h-6 hover:text-purple-400 transition" />
              </a>
              {/* <a href="https://twitter.com" target="_blank" rel="noreferrer">
                <Twitter className="w-6 h-6 hover:text-purple-400 transition" />
              </a> */}
            </div>
          </div>

          {/* Management Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Management & Booking</h3>
            <p className="text-gray-300 mb-2">
              For professional inquiries, please contact my management team:
            </p>
            <p className="font-semibold text-white">Global Talent Management</p>
            <p className="text-gray-300">soulrichai@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  );
}
