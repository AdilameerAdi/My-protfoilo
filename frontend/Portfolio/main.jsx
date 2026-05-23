import Recent from "../Home/Recent";
import Footer from "../Home/footer";
import ContactHeader from "../Home/contactHeader";
import Navbar from "../../src/components/Navbar";
import { useState } from "react";

export default function Portfolio() {
  const [active, setActive] = useState("Portfolio");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <ContactHeader />
      <Navbar
        active={active}
        setActive={setActive}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      {/* Portfolio Header */}
      <div className="w-full h-[280px] sm:h-[340px] md:h-[400px] bg-gradient-to-br from-[#41A5B0] via-[#2dbccb] to-[#1e8a92] flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <p className="text-teal-100 text-sm font-semibold uppercase tracking-widest mb-3">Featured Work</p>
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 leading-tight">
            My Recent Projects
          </h1>
          <p className="text-teal-50 text-base sm:text-lg md:text-xl leading-relaxed max-w-xl mx-auto">
            Browse through my latest web development, design, and e-commerce projects delivered to satisfied clients worldwide.
          </p>
        </div>
      </div>

      {/* Portfolio Grid */}
      <Recent />

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-gray-50 to-white py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            If you like what you see and want to work together, let's discuss your project requirements.
          </p>
          <a
            href="https://wa.me/923007029003"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#41A5B0] hover:bg-[#2dbccb] text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Start Your Project Now
          </a>
        </div>
      </div>

      <Footer />
    </>
  );
}
