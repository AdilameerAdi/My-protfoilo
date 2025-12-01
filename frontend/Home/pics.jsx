import { useState, useEffect } from "react";
import ecom from "../images/eco.png";
import res from "../images/respo.png";
import mob from "../images/mobileapp.png";

export default function ImageSlider() {
  const slides = [
    { image: ecom, text: "E-commerce Solutions – Boost Your Online Sales" },
    { image: mob, text: "Mobile App Development – Apps that Engage" },
    { image: res, text: "Responsive Design – Perfect on Any Device" },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.text}
            className="w-full h-full sm:object-contain object-cover object-top"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h2 className="text-white text-3xl md:text-5xl font-bold text-center">
              {slide.text}
            </h2>
          </div>
        </div>
      ))}
    </div>
  );
}
