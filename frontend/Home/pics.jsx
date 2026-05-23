import { useState, useEffect } from "react";
import ecom from "../images/eco.png";
import res from "../images/respo.png";
import mob from "../images/mobileapp.png";

export default function ImageSlider() {
  const slides = [
    {
      image: ecom,
      heading: "E-commerce Solutions",
      sub: "Boost Your Online Sales & Revenue",
      cta: "Get a Free Quote",
    },
    {
      image: mob,
      heading: "Mobile App Development",
      sub: "Apps that Engage & Convert",
      cta: "Start Your App",
    },
    {
      image: res,
      heading: "Responsive Web Design",
      sub: "Perfect on Every Device, Every Time",
      cta: "See My Work",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const scrollToContact = () => {
    const el = document.getElementById("contact-section");
    if (el) el.scrollIntoView({ behavior: "smooth" });
    else window.dispatchEvent(new CustomEvent("nav:contact"));
  };

  return (
    <div className="relative w-full h-[480px] sm:h-[520px] md:h-[580px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.heading}
            loading="lazy"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/20 flex flex-col items-start justify-center px-8 sm:px-16 md:px-24">
            <p className="text-[#2dbccb] text-sm sm:text-base font-semibold uppercase tracking-widest mb-3 hero-subtext">
              Professional Freelancer
            </p>
            <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight max-w-2xl mb-3 hero-heading">
              {slide.heading}
            </h2>
            <p className="text-gray-200 text-base sm:text-lg md:text-xl mb-8 max-w-xl hero-subtext">
              {slide.sub}
            </p>
            <div className="flex gap-4 flex-wrap hero-buttons">
              <button
                onClick={scrollToContact}
                className="bg-[#41A5B0] hover:bg-[#2dbccb] text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-[#41A5B0]/50 hover:scale-105 btn-glow"
              >
                {slide.cta}
              </button>
              <button
                onClick={() => window.dispatchEvent(new CustomEvent("nav:portfolio"))}
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold px-6 py-3 rounded-lg transition-all duration-300"
              >
                View Portfolio
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Dot indicators */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === current ? "bg-[#2dbccb] w-8" : "bg-white/60 hover:bg-white"
            }`}
          />
        ))}
      </div>

      {/* Arrow controls */}
      <button
        onClick={() => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)}
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white rounded-full w-11 h-11 flex items-center justify-center transition-all duration-200 hover:scale-110 group"
      >
        <svg className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white rounded-full w-11 h-11 flex items-center justify-center transition-all duration-200 hover:scale-110 group"
      >
        <svg className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}
