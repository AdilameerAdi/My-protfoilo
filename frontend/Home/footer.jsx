import log from "../images/log.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Footer() {
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);

  const quickLinks = [
    { label: "Home",               action: () => navigate("/") },
    { label: "About Me",           action: () => navigate("/") },
    { label: "Portfolio",          action: () => { navigate("/"); setTimeout(() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" }), 350); } },
    { label: "Pricing",            action: () => navigate("/support?section=pricing") },
    { label: "Domain & Hosting",   action: () => navigate("/support?section=hosting") },
    { label: "FAQs",               action: () => navigate("/support?section=faq") },
    { label: "Testimonials",       action: () => navigate("/support?section=testimonials") },
    { label: "Request a Quote",    action: () => navigate("/support?section=quote") },
    { label: "Contact Me",         action: () => navigate("/") },
  ];

  const serviceLinks = [
    { label: "Website Development",    id: "website-development" },
    { label: "E-commerce Solutions",   id: "ecommerce-solution" },
    { label: "WordPress Development",  id: "wordpress-development" },
    { label: "Shopify Development",    id: "shopify-store-development" },
    { label: "Logo Designing",         id: "logo-designing" },
    { label: "Graphic Designing",      id: "graphic-designing" },
    { label: "Mobile App Development", id: "mobile-app-development" },
    { label: "SEO & Digital Marketing",id: "seo-digital-marketing" },
    { label: "Website Maintenance",    id: "website-maintenance" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value.trim();
    const project = e.target.project.value.trim();
    if (!name || !project) { alert("Please fill in all fields."); return; }
    const msg = `Name: ${name}%0AProject: ${project}`;
    window.open(`https://wa.me/923007029003?text=${msg}`, "_blank");
    e.target.reset();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <>
      {/* Main Footer */}
      <footer className="bg-[#1e1e22] w-full">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <img className="h-[70px] object-contain mb-4" src={log} alt="Adil Ameer Logo" />
            <p className="text-gray-400 text-sm leading-relaxed text-justify">
              I'm a freelance web designer and developer based in Pakistan, available for remote projects worldwide.
              I specialize in creating marketing websites for individuals and small-medium businesses,
              helping them succeed online. Let's build something great together.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="https://www.facebook.com/adilameer" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-gray-700 hover:bg-[#41A5B0] flex items-center justify-center transition-all duration-300 hover:scale-110">
                <FontAwesomeIcon icon={faFacebook} className="text-white text-sm" />
              </a>
              <a href="https://www.linkedin.com/in/adilameer" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-gray-700 hover:bg-[#41A5B0] flex items-center justify-center transition-all duration-300 hover:scale-110">
                <FontAwesomeIcon icon={faLinkedin} className="text-white text-sm" />
              </a>
              <a href="https://wa.me/923007029003" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-gray-700 hover:bg-[#41A5B0] flex items-center justify-center transition-all duration-300 hover:scale-110">
                <FontAwesomeIcon icon={faWhatsapp} className="text-white text-sm" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-base mb-5 relative after:content-[''] after:block after:w-8 after:h-0.5 after:bg-[#41A5B0] after:mt-2">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map(({ label, action }) => (
                <li key={label}
                  onClick={action}
                  className="text-gray-400 text-sm cursor-pointer hover:text-[#41A5B0] hover:translate-x-1 transition-all duration-200 flex items-center gap-1.5">
                  <span className="text-[#41A5B0] text-xs">›</span> {label}
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-base mb-5 relative after:content-[''] after:block after:w-8 after:h-0.5 after:bg-[#41A5B0] after:mt-2">
              My Services
            </h3>
            <ul className="space-y-2.5">
              {serviceLinks.map(({ label, id }) => (
                <li key={id}
                  onClick={() => navigate(`/service/${id}`)}
                  className="text-gray-400 text-sm cursor-pointer hover:text-[#41A5B0] hover:translate-x-1 transition-all duration-200 flex items-center gap-1.5">
                  <span className="text-[#41A5B0] text-xs">›</span> {label}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Quick Form */}
          <div>
            <h3 className="text-white font-semibold text-base mb-5 relative after:content-[''] after:block after:w-8 after:h-0.5 after:bg-[#41A5B0] after:mt-2">
              Get In Touch
            </h3>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <a href="mailto:adilameeradi@gmail.com"
                className="flex items-center gap-3 text-gray-400 text-sm hover:text-[#41A5B0] transition-colors duration-200">
                <FontAwesomeIcon icon={faEnvelope} className="text-[#41A5B0] flex-shrink-0" />
                <span className="break-all">adilameeradi@gmail.com</span>
              </a>
              <a href="tel:+923007029003"
                className="flex items-center gap-3 text-gray-400 text-sm hover:text-[#41A5B0] transition-colors duration-200">
                <FontAwesomeIcon icon={faPhone} className="text-[#41A5B0] flex-shrink-0" />
                <span>+92 300 7029003</span>
              </a>
            </div>

            {/* Quick Project Form */}
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label className="text-gray-400 text-xs uppercase tracking-wide mb-1 block">Your Name</label>
                <input
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  required
                  className="w-full bg-gray-700 border border-gray-600 focus:border-[#41A5B0] text-white text-sm px-3 py-2.5 rounded-lg outline-none transition-colors duration-200 placeholder-gray-500"
                />
              </div>
              <div>
                <label className="text-gray-400 text-xs uppercase tracking-wide mb-1 block">Project Details</label>
                <textarea
                  name="project"
                  placeholder="Tell me about your project..."
                  required
                  rows={3}
                  className="w-full bg-gray-700 border border-gray-600 focus:border-[#41A5B0] text-white text-sm px-3 py-2.5 rounded-lg outline-none transition-colors duration-200 placeholder-gray-500 resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#41A5B0] hover:bg-[#2dbccb] text-white font-semibold text-sm py-2.5 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#41A5B0]/30"
              >
                {submitted ? "Message Sent!" : "Send via WhatsApp"}
              </button>
            </form>
          </div>
        </div>
      </footer>

      {/* Copyright Bar */}
      <div className="bg-[#141417] py-4 px-4 relative">
        <p className="text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} <span className="text-[#41A5B0] font-medium">Adil Ameer</span>. All rights reserved.
          &nbsp;|&nbsp; Designed & Developed by Adil Ameer
        </p>
        {/* Back to top */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="absolute right-5 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-[#41A5B0] hover:bg-[#2dbccb] flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
          aria-label="Back to top"
        >
          <FontAwesomeIcon icon={faArrowUp} className="text-white text-sm" />
        </button>
      </div>
    </>
  );
}
