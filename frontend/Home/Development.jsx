import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import website from "../images/website.jpg";
import wordpress from "../images/wordpress.jpg";
import ecommer from "../images/ecommer.jpg";
import shopify from "../images/shopify.jpg";
import log from "../images/logo.jpg";
import grap from "../images/grap.jpg";
import mob from "../images/mob.jpg";
import seo from "../images/seo.jpg";
import calender from "../images/calender.png";

export default function Development() {
  const navigate = useNavigate();

  const allServices = [
    { id: "website-development", title: "Website Development", img: website, desc: "Custom, responsive, and high-performance websites tailored to your business needs." },
    { id: "wordpress-development", title: "WordPress Development", img: wordpress, desc: "Professional WordPress themes, plugins, and customization for your online presence." },
    { id: "ecommerce-solution", title: "E-commerce Solution", img: ecommer, desc: "Complete e-commerce solutions to sell your products online with ease." },
    { id: "shopify-store-development", title: "Shopify Store Development", img: shopify, desc: "Custom Shopify stores designed to attract customers and boost sales." },
    { id: "logo-designing", title: "Logo Designing", img: log, desc: "Unique, creative, and professional logos that define your brand identity." },
    { id: "graphic-designing", title: "Graphic Designing", img: grap, desc: "Eye-catching graphic designs for web, print, and social media campaigns." },
    { id: "mobile-app-development", title: "Android / iOS Application", img: mob, desc: "Mobile apps that deliver seamless experiences for Android and iOS users." },
    { id: "seo-digital-marketing", title: "SEO / Digital Marketing", img: seo, desc: "Boost your online visibility and attract more customers with SEO strategies." },
    { id: "website-maintenance", title: "Monthly Maintenance of Websites", img: calender, desc: "Keep your website secure, updated, and running smoothly every month." },
  ];

  const [services, setServices] = useState(allServices);
  const [visibleCount, setVisibleCount] = useState(4);

  // Adjust number of cards based on screen width
  useEffect(() => {
    const updateCount = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(2); // mobile
      } else if (window.innerWidth < 1024) {
        setVisibleCount(3); // tablet
      } else {
        setVisibleCount(4); // laptop/desktop
      }
    };
    updateCount();
    window.addEventListener("resize", updateCount);
    return () => window.removeEventListener("resize", updateCount);
  }, []);

  // Auto-rotate every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setServices((prev) => {
        const updated = [...prev];
        const first = updated.shift();
        updated.push(first);
        return updated;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleServiceClick = (id) => {
    navigate(`/service/${id}`);
  };

  return (
    <>
      <div className="mt-8 md:mt-12 lg:mt-15 px-4 md:px-8 lg:px-0">
        <div className="text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            My Development <span className="text-[#2dbccb] font-bold"> Services</span>
          </h1>
          <p className="mx-4 md:mx-20 lg:mx-40 mt-4 text-base sm:text-lg md:text-xl leading-relaxed">
            With experience serving diverse clients, I specialize in delivering
            impactful web solutions that not only enhance your online presence but
            also drive measurable results. My focus is on creating cost-effective,
            high-quality websites that help your business grow and stand out in the
            digital space.
          </p>
        </div>
      </div>

      {/* Carousel */}
      <div className="mt-8">
        <div className="flex gap-4 justify-center transition-all duration-500">
          {services.slice(0, visibleCount).map((service) => (
            <div
              key={service.id}
              onClick={() => handleServiceClick(service.id)}
              className="relative w-40 sm:w-48 md:w-56 bg-white rounded-lg overflow-hidden shadow-lg cursor-pointer group transition-transform duration-300 hover:scale-105"
            >
              <img src={service.img} alt={service.title} className="w-full h-32 sm:h-36 md:h-40 object-cover" />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center text-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h2 className="text-white font-semibold text-sm sm:text-base mb-2">{service.title}</h2>
                <p className="text-gray-200 text-xs sm:text-sm mb-3">{service.desc}</p>
                <button className="bg-teal-500 hover:bg-teal-600 text-white px-2 py-1 rounded text-xs sm:text-sm">
                  Read More
                </button>
              </div>

              {/* Title below image */}
              <div className="p-2 bg-white">
                <h2 className="text-center text-sm sm:text-base font-semibold">{service.title}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
