import { useState } from "react";
import { useNavigate } from "react-router-dom";
import website from "../images/website.jpg";
import wordpress from "../images/wordpress.jpg";
import ecommer from "../images/ecommer.jpg";
import shopify from "../images/shopify.jpg";
import grap from "../images/grap.jpg";
import mob from "../images/mob.jpg";
import seo from "../images/seo.jpg";
import logo from "../images/logo.jpg";

const categories = ["All", "Web Design", "E-commerce", "Mobile Apps", "Logo Design", "Graphics Design"];

const projects = [
  {
    id: "website-development",
    title: "Business Website",
    category: "Web Design",
    tag: "Custom Website",
    img: website,
    desc: "Modern responsive business website with smooth animations and contact integration.",
  },
  {
    id: "wordpress-development",
    title: "WordPress Blog Platform",
    category: "Web Design",
    tag: "WordPress",
    img: wordpress,
    desc: "Full-featured WordPress site with custom theme, blog, and SEO optimization.",
  },
  {
    id: "ecommerce-solution",
    title: "E-commerce Store",
    category: "E-commerce",
    tag: "E-commerce",
    img: ecommer,
    desc: "Complete online store with payment gateway, product catalog, and admin panel.",
  },
  {
    id: "shopify-store-development",
    title: "Shopify Dropshipping Store",
    category: "E-commerce",
    tag: "Shopify",
    img: shopify,
    desc: "Custom Shopify storefront designed to maximize conversions and sales.",
  },
  {
    id: "logo-designing",
    title: "Brand Identity Package",
    category: "Logo Design",
    tag: "Logo Design",
    img: logo,
    desc: "Complete brand identity including logo, color palette, and typography guide.",
  },
  {
    id: "graphic-designing",
    title: "Social Media Graphics Pack",
    category: "Graphics Design",
    tag: "Graphic Design",
    img: grap,
    desc: "Consistent social media visuals for brand awareness across all platforms.",
  },
  {
    id: "mobile-app-development",
    title: "Android / iOS App",
    category: "Mobile Apps",
    tag: "Mobile App",
    img: mob,
    desc: "Cross-platform mobile app with smooth UI, push notifications, and API integration.",
  },
  {
    id: "seo-digital-marketing",
    title: "SEO Growth Campaign",
    category: "Web Design",
    tag: "SEO",
    img: seo,
    desc: "Drove 3x organic traffic growth through on-page SEO, content strategy, and link building.",
  },
];

export default function Recent() {
  const [activeFilter, setActiveFilter] = useState("All");
  const navigate = useNavigate();

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="portfolio" className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <p className="text-[#41A5B0] text-sm font-semibold uppercase tracking-widest mb-2 stagger-item">
            Portfolio
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 section-title-underline stagger-item">
            My Recent{" "}
            <span className="text-[#2dbccb]">Work</span>
          </h2>
          <p className="text-gray-500 text-base sm:text-lg max-w-2xl mx-auto stagger-item">
            As a Freelance Web Developer in Pakistan, I have successfully delivered numerous
            professional projects worldwide. Here are some highlights.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {categories.map((cat, idx) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2 rounded-full border-2 font-medium text-sm transition-all duration-300 stagger-item ${
                activeFilter === cat
                  ? "bg-[#2dbccb] border-[#2dbccb] text-white shadow-md"
                  : "border-[#2dbccb] text-[#2dbccb] hover:bg-[#2dbccb] hover:text-white"
              }`}
              style={{ animationDelay: `${idx * 0.05}s` }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((project, idx) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 cursor-pointer border border-gray-100 stagger-item"
              onClick={() => navigate(`/service/${project.id}`)}
              style={{ animationDelay: `${idx * 0.08}s` }}
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.img}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <p className="text-white text-sm leading-snug">{project.desc}</p>
                  <span className="mt-2 inline-block bg-[#2dbccb] text-white text-xs font-semibold px-3 py-1 rounded-full w-fit">
                    View Details →
                  </span>
                </div>
              </div>
              <div className="p-4">
                <span className="text-xs font-semibold text-[#41A5B0] uppercase tracking-wide">
                  {project.tag}
                </span>
                <h3 className="text-gray-900 font-bold text-base mt-1 group-hover:text-[#41A5B0] transition-colors duration-200">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-500 mb-4">Have a project in mind? Let's work together.</p>
          <a
            href="https://wa.me/923007029003"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#41A5B0] hover:bg-[#2dbccb] text-white font-semibold px-8 py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-[#41A5B0]/40 hover:scale-105"
          >
            Start Your Project
          </a>
        </div>
      </div>
    </section>
  );
}
