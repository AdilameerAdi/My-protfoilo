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

const allServices = [
  { id: "website-development",       title: "Website Development",           img: website,  desc: "Custom, responsive, and high-performance websites tailored to your business needs." },
  { id: "wordpress-development",     title: "WordPress Development",         img: wordpress, desc: "Professional WordPress themes, plugins, and customization for your online presence." },
  { id: "ecommerce-solution",        title: "E-commerce Solution",           img: ecommer,  desc: "Complete e-commerce solutions to sell your products online with ease." },
  { id: "shopify-store-development", title: "Shopify Store Development",     img: shopify,  desc: "Custom Shopify stores designed to attract customers and boost sales." },
  { id: "logo-designing",            title: "Logo Designing",                img: log,      desc: "Unique, creative, and professional logos that define your brand identity." },
  { id: "graphic-designing",         title: "Graphic Designing",             img: grap,     desc: "Eye-catching graphic designs for web, print, and social media campaigns." },
  { id: "mobile-app-development",    title: "Android / iOS Application",     img: mob,      desc: "Mobile apps that deliver seamless experiences for Android and iOS users." },
  { id: "seo-digital-marketing",     title: "SEO / Digital Marketing",       img: seo,      desc: "Boost your online visibility and attract more customers with SEO strategies." },
  { id: "website-maintenance",       title: "Monthly Website Maintenance",   img: calender, desc: "Keep your website secure, updated, and running smoothly every month." },
];

export default function Development() {
  const navigate = useNavigate();
  const [services, setServices] = useState(allServices);
  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    const updateCount = () => {
      if (window.innerWidth < 640) setVisibleCount(2);
      else if (window.innerWidth < 1024) setVisibleCount(3);
      else setVisibleCount(4);
    };
    updateCount();
    window.addEventListener("resize", updateCount);
    return () => window.removeEventListener("resize", updateCount);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setServices((prev) => {
        const updated = [...prev];
        updated.push(updated.shift());
        return updated;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 md:py-16">
      {/* Section Header */}
      <div className="text-center px-4 mb-10">
        <p className="text-[#41A5B0] text-sm font-semibold uppercase tracking-widest mb-2 stagger-item">What I Offer</p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight section-title-underline stagger-item">
          My Development <span className="text-[#2dbccb]">Services</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-gray-500 text-base sm:text-lg leading-relaxed px-2 stagger-item">
          With experience serving diverse clients, I specialize in delivering impactful web solutions
          that enhance your online presence and drive measurable results.
        </p>
      </div>

      {/* Carousel */}
      <div className="px-4 sm:px-6 md:px-8">
        <div className="flex gap-4 sm:gap-5 max-w-6xl mx-auto">
          {services.slice(0, visibleCount).map((service, index) => (
            <div
              key={service.id}
              onClick={() => navigate(`/service/${service.id}`)}
              className="relative flex-1 min-w-0 bg-white rounded-2xl overflow-hidden shadow-md cursor-pointer group transition-all duration-300 hover:scale-[1.03] hover:shadow-xl border border-gray-100 service-card-glow stagger-item"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={service.img}
                alt={service.title}
                loading="lazy"
                className="w-full h-36 sm:h-40 md:h-48 object-cover"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex flex-col justify-end p-3 sm:p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white font-bold text-sm sm:text-base mb-1 leading-snug">{service.title}</h3>
                <p className="text-gray-200 text-xs sm:text-sm mb-3 leading-relaxed line-clamp-2">{service.desc}</p>
                <span className="inline-block bg-[#2dbccb] text-white text-xs font-semibold px-3 py-1 rounded-full w-fit">
                  Learn More →
                </span>
              </div>

              {/* Card Footer */}
              <div className="p-2.5 sm:p-3 bg-white">
                <h3 className="text-center text-xs sm:text-sm font-semibold text-gray-800 leading-tight line-clamp-2">
                  {service.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center gap-1.5 mt-6">
          {allServices.map((s, i) => {
            const activeIndex = allServices.indexOf(services[0]);
            const isActive = i >= activeIndex && i < activeIndex + visibleCount;
            return (
              <div
                key={s.id}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  isActive ? "w-6 bg-[#2dbccb]" : "w-1.5 bg-gray-300"
                }`}
              />
            );
          })}
        </div>
      </div>

      {/* View All CTA */}
      <div className="text-center mt-8 px-4">
        <button
          onClick={() => navigate("/Services")}
          className="inline-flex items-center gap-2 border-2 border-[#41A5B0] text-[#41A5B0] hover:bg-[#41A5B0] hover:text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300"
        >
          View All Services
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>
    </section>
  );
}
