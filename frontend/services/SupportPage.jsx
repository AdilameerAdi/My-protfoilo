import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "../../src/components/Navbar";
import ContactHeader from "../Home/contactHeader";
import Footer from "../Home/footer";

export default function SupportPage() {
  const [activeLocal, setActiveLocal] = useState("Home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("faq");
  const [searchParams] = useSearchParams();

  const supportSections = {
    faq: {
      title: "Frequently Asked Questions",
      icon: "❓",
      content: (
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-teal-500">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">What services do you offer?</h3>
            <p className="text-gray-600 leading-relaxed">
              I offer comprehensive web development services including custom website development, WordPress development,
              e-commerce solutions, Shopify stores, logo design, graphic design, mobile app development, SEO, and website maintenance.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-teal-500">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">How long does a typical project take?</h3>
            <p className="text-gray-600 leading-relaxed">
              Timelines vary by complexity. Simple websites take 1-2 weeks. Complex sites may take 4-6 weeks. A clear timeline is shared upfront.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-teal-500">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Do you provide ongoing support?</h3>
            <p className="text-gray-600 leading-relaxed">
              Yes, monthly maintenance packages are available including updates, security, backups, and technical support.
            </p>
          </div>
        </div>
      )
    },
    pricing: {
      title: "Website Pricing",
      icon: "💰",
      content: (
        <div className="space-y-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Custom Website Development</h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Pricing depends on pages and features. Here is a general guide.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md border-2 border-gray-200 hover:border-teal-500 transition-colors duration-300">
              <h3 className="text-xl font-bold text-teal-600 mb-2">1-6 Pages</h3>
              <p className="text-3xl font-bold text-gray-900 mb-4">$199 - $399</p>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Responsive Design</li>
                <li>• Contact Form</li>
                <li>• Basic SEO</li>
                <li>• Social Media Integration</li>
                <li>• 1 Month Support</li>
                <li>• 3 Revisions</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-2 border-teal-500 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-teal-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                Popular
              </div>
              <h3 className="text-xl font-bold text-teal-600 mb-2">7-15 Pages</h3>
              <p className="text-3xl font-bold text-gray-900 mb-4">$499 - $899</p>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Custom Design</li>
                <li>• Blog Integration</li>
                <li>• Advanced SEO</li>
                <li>• Analytics Setup</li>
                <li>• 3 Months Support</li>
                <li>• 5 Revisions</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-2 border-gray-200 hover:border-teal-500 transition-colors duration-300">
              <h3 className="text-xl font-bold text-teal-600 mb-2">16+ Pages</h3>
              <p className="text-3xl font-bold text-gray-900 mb-4">$999+</p>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Enterprise Features</li>
                <li>• Custom Functionality</li>
                <li>• Multi-language Support</li>
                <li>• Advanced Integrations</li>
                <li>• 6 Months Support</li>
                <li>• Unlimited Revisions</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-teal-500">
            <h3 className="text-xl font-bold text-teal-600 mb-4">Additional Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">E-commerce Features</h4>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• Shopping Cart: $199</li>
                  <li>• Payment Gateway: $299</li>
                  <li>• Product Management: $399</li>
                  <li>• Inventory System: $199</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Advanced Features</h4>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• User Authentication: $199</li>
                  <li>• Admin Panel: $299</li>
                  <li>• API Integration: $399</li>
                  <li>• Mobile App: $999+</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    },
    testimonials: {
      title: "Client Testimonials",
      icon: "⭐",
      content: (
        <div className="space-y-6">
          <p className="text-center text-gray-500 max-w-2xl mx-auto mb-8">
            Here's what clients say about working with me. Every project is delivered with care, precision, and a focus on real results.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Sarah M.", country: "United Kingdom", role: "Small Business Owner", review: "Adil delivered an exceptional e-commerce site on time and beyond expectations. Communication was seamless throughout. Highly recommend!", stars: 5 },
              { name: "Ahmed K.", country: "Saudi Arabia", role: "Startup Founder", review: "I needed a professional website fast. Adil built it clean, responsive, and exactly as I envisioned. Will definitely hire again.", stars: 5 },
              { name: "Maria T.", country: "USA", role: "Marketing Manager", review: "Our SEO traffic tripled in 3 months after Adil's work. He clearly knows what he's doing. Worth every cent.", stars: 5 },
              { name: "Daniel R.", country: "Australia", role: "Agency Owner", review: "We use Adil as our white-label developer. His code quality is excellent and he always meets deadlines. A true professional.", stars: 5 },
              { name: "Fatima Z.", country: "UAE", role: "E-commerce Seller", review: "My Shopify store looks amazing and sales went up immediately. Adil understood my brand perfectly.", stars: 5 },
              { name: "James P.", country: "Canada", role: "Tech Entrepreneur", review: "Clean code, great design, fast delivery. Adil is exactly the kind of developer you want for your project.", stars: 5 },
            ].map(({ name, country, role, review, stars }) => (
              <div key={name} className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition-shadow duration-300 flex flex-col">
                <div className="text-yellow-400 text-lg mb-4">
                  {"★".repeat(stars)}
                </div>
                <p className="text-gray-600 italic leading-relaxed flex-1">"{review}"</p>
                <div className="mt-5 pt-4 border-t border-gray-100">
                  <p className="font-bold text-gray-900">{name}</p>
                  <p className="text-sm text-[#41A5B0]">{role}</p>
                  <p className="text-xs text-gray-400 mt-1">{country}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    },
    hosting: {
      title: "Domain & Web Hosting",
      icon: "🌐",
      content: (
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-teal-500">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Domain Registration</h3>
            <p className="text-gray-600 leading-relaxed">
              I can help you register and manage domain names for your business. Get professional domain names that reflect your brand identity.
            </p>
            <div className="mt-4 space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Domain Registration (1 year)</span>
                <span className="font-semibold text-teal-600">$12.99</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Domain Transfer</span>
                <span className="font-semibold text-teal-600">$9.99</span>
              </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-teal-500">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Web Hosting Solutions</h3>
            <p className="text-gray-600 leading-relaxed">
              Reliable hosting solutions to keep your website fast and secure. Choose from shared hosting, VPS, or dedicated hosting based on your needs.
            </p>
            <div className="mt-4 space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Shared Hosting (monthly)</span>
                <span className="font-semibold text-teal-600">$3.99</span>
                </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">VPS Hosting (monthly)</span>
                <span className="font-semibold text-teal-600">$19.99</span>
                </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Dedicated Hosting (monthly)</span>
                <span className="font-semibold text-teal-600">$79.99</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-teal-500">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">SSL Certificates</h3>
            <p className="text-gray-600 leading-relaxed">
              Secure your website with SSL certificates. Protect your visitors' data and improve your search engine rankings.
            </p>
            <div className="mt-4 space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Basic SSL Certificate</span>
                <span className="font-semibold text-teal-600">$29.99/year</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Wildcard SSL Certificate</span>
                <span className="font-semibold text-teal-600">$99.99/year</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    quote: {
      title: "Get a Custom Quote",
      icon: "📋",
      content: (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-teal-600 mb-4">Request Your Custom Quote</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input className="px-4 py-2 border border-gray-300 rounded-lg" placeholder="Full Name" />
              <input className="px-4 py-2 border border-gray-300 rounded-lg" placeholder="Email Address" />
                </div>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg">
              <option>Project Type</option>
              <option>Website Development</option>
              <option>WordPress Development</option>
              <option>E-commerce</option>
                </select>
            <textarea rows="4" className="w-full px-4 py-2 border border-gray-300 rounded-lg" placeholder="Project Description"></textarea>
            <button className="w-full bg-teal-500 text-white py-3 rounded-lg font-semibold hover:bg-teal-600">Get Custom Quote</button>
            </form>
        </div>
      )
    }
  };

  // Set active section based on URL parameter
  useEffect(() => {
    const section = searchParams.get('section');
    if (section && supportSections[section]) {
      setActiveSection(section);
    }
  }, [searchParams, supportSections]);

  return (
    <>
      <ContactHeader />
      <Navbar active={activeLocal} setActive={setActiveLocal} mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />

      <div className="min-h-screen bg-gray-50">
        <div className="bg-gradient-to-r from-teal-500 to-teal-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Support & Resources</h1>
            <p className="text-xl text-teal-100 max-w-3xl mx-auto">All important info in one place.</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
          <div className="bg-white rounded-lg shadow-lg p-2">
            <div className="flex flex-wrap justify-center gap-2">
              {Object.entries(supportSections).map(([key, section]) => (
                <button
                  key={key}
                  onClick={() => setActiveSection(key)}
                  className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeSection === key
                      ? "bg-teal-500 text-white shadow-lg scale-105"
                      : "bg-gray-100 text-gray-700 hover:bg-teal-100 hover:text-teal-700"
                  }`}
                >
                  <span className="text-lg mr-2">{section.icon}</span>
                  {section.title}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{supportSections[activeSection].title}</h2>
            <div className="w-24 h-1 bg-teal-500 mx-auto rounded-full"></div>
          </div>
          
          <div>
            {supportSections[activeSection].content}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
} 