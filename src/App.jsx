import Home from "../frontend/Home/Home";
import logo from "../frontend/images/log.jpg";
 import { useState } from "react";
import First from "../frontend/About/first";
import ContactHeader from "../frontend/Home/contactHeader";
 import Index from "../frontend/Contact";
 import Main from "../frontend/support/Main";
import ServiceDetail from "../frontend/support/ServiceDetail";
import SupportPage from "../frontend/services/SupportPage";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";


function App() {
  let [active, setactive] = useState("Home");
  let [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  function LegacyNavbar() {
    const location = useLocation();
    const navigate = useNavigate();

    // Don't show navbar on service detail pages
    if (location.pathname.startsWith("/service/")) {
      return null;
    }

    const handleServiceClick = (serviceId) => {
      navigate(`/service/${serviceId}`);
    };

    return (
      <>
      
        <div className="flex w-full z-10 bg-white sticky top-0 shadow-md">
          {/* Logo Section - 90% width on mobile for maximum visibility */}
          <div className="w-[90%] sm:w-2/3 md:w-1/2 lg:w-1/3 px-2 sm:px-4 py-1">
            <img
              className="w-full max-w-[120px] sm:max-w-[140px] md:max-w-[160px] h-14 sm:h-16 md:h-20 object-contain"
              src={logo}
              alt="logo"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex flex-1 justify-center">
            <ul className="flex gap-8 xl:gap-20 [&>li]:uppercase [&>li]:hover:border-b-2 [&>li]:hover:border-b-teal-500 [&>li]:hover:cursor-pointer [&>li]:mt-8 [&>li]:pb-4 [&>li]:text-sm xl:text-base">
              <li onClick={() => setactive("Home")}>Home</li>
              <li onClick={() => setactive("About")}>About</li>
<li
  onClick={() => navigate("/Services")}
  className="group relative"
>
                Services
                <ul className="hidden absolute group-hover:flex bg-white top-full flex-col z-10 shadow-xl rounded-lg border border-gray-200 w-80 py-2">
                  <li
                    className="px-4 py-3 hover:bg-teal-50 hover:text-teal-700 hover:border-l-4 hover:border-l-teal-500 cursor-pointer transition-all duration-300 transform hover:translate-x-1 hover:shadow-md rounded-r-lg"
                    onClick={() => handleServiceClick("website-development")}
                  >
                    Website Development
                  </li>
                  <li
                    className="px-4 py-3 hover:bg-teal-50 hover:text-teal-700 hover:border-l-4 hover:border-l-teal-500 cursor-pointer transition-all duration-300 transform hover:translate-x-1 hover:shadow-md rounded-r-lg"
                    onClick={() => handleServiceClick("wordpress-development")}
                  >
                    WordPress Development
                  </li>
                  <li
                    className="px-4 py-3 hover:bg-teal-50 hover:text-teal-700 hover:border-l-4 hover:border-l-teal-500 cursor-pointer transition-all duration-300 transform hover:translate-x-1 hover:shadow-md rounded-r-lg"
                    onClick={() => handleServiceClick("ecommerce-solution")}
                  >
                    E-commerce Solution
                  </li>
                  <li
                    className="px-4 py-3 hover:bg-teal-50 hover:text-teal-700 hover:border-l-4 hover:border-l-teal-500 cursor-pointer transition-all duration-300 transform hover:translate-x-1 hover:shadow-md rounded-r-lg"
                    onClick={() =>
                      handleServiceClick("shopify-store-development")
                    }
                  >
                    Shopify Store Development
                  </li>
                  <li
                    className="px-4 py-3 hover:bg-teal-50 hover:text-teal-700 hover:border-l-4 hover:border-l-teal-500 cursor-pointer transition-all duration-300 transform hover:translate-x-1 hover:shadow-md rounded-r-lg"
                    onClick={() => handleServiceClick("logo-designing")}
                  >
                    Logo Designing
                  </li>
                  <li
                    className="px-4 py-3 hover:bg-teal-50 hover:text-teal-700 hover:border-l-4 hover:border-l-teal-500 cursor-pointer transition-all duration-300 transform hover:translate-x-1 hover:shadow-md rounded-r-lg"
                    onClick={() => handleServiceClick("graphic-designing")}
                  >
                    Graphic Designing
                  </li>
                  <li
                    className="px-4 py-3 hover:bg-teal-50 hover:text-teal-700 hover:border-l-4 hover:border-l-teal-500 cursor-pointer transition-all duration-300 transform hover:translate-x-1 hover:shadow-md rounded-r-lg"
                    onClick={() => handleServiceClick("mobile-app-development")}
                  >
                    Mobile App Development
                  </li>
                  <li
                    className="px-4 py-3 hover:bg-teal-50 hover:text-teal-700 hover:border-l-4 hover:border-l-teal-500 cursor-pointer transition-all duration-300 transform hover:translate-x-1 hover:shadow-md rounded-r-lg"
                    onClick={() => handleServiceClick("seo-digital-marketing")}
                  >
                    SEO & Digital Marketing
                  </li>
                  <li
                    className="px-4 py-3 hover:bg-teal-50 hover:text-teal-700 hover:border-l-4 hover:border-l-teal-500 cursor-pointer transition-all duration-300 transform hover:translate-x-1 hover:shadow-md rounded-r-lg"
                    onClick={() => handleServiceClick("website-maintenance")}
                  >
                    Website Maintenance
                  </li>
                </ul>
              </li>
              <li onClick={() => setactive("Portfolio")}>Portfolio</li>
              <li className="group relative">
                <div
                  onClick={() => navigate("/services")}
                  className="cursor-pointer"
                >
                  Support
                </div>
                <ul className="hidden absolute group-hover:flex bg-white top-full flex-col z-10 shadow-xl rounded-lg border border-gray-200 w-80 py-2">
                  <li
                    className="px-4 py-3 hover:bg-teal-50 hover:text-teal-700 hover:border-l-4 hover:border-l-teal-500 cursor-pointer transition-all duration-300 transform hover:translate-x-1 hover:shadow-md rounded-r-lg"
                    onClick={() => navigate("/support?section=faq")}
                  >
                    Frequently Asked Questions
                  </li>
                  <li
                    className="px-4 py-3 hover:bg-teal-50 hover:text-teal-700 hover:border-l-4 hover:border-l-teal-500 cursor-pointer transition-all duration-300 transform hover:translate-x-1 hover:shadow-md rounded-r-lg"
                    onClick={() => navigate("/support?section=pricing")}
                  >
                    Website Pricing
                  </li>
                  <li
                    className="px-4 py-3 hover:bg-teal-50 hover:text-teal-700 hover:border-l-4 hover:border-l-teal-500 cursor-pointer transition-all duration-300 transform hover:translate-x-1 hover:shadow-md rounded-r-lg"
                    onClick={() => navigate("/support?section=testimonials")}
                  >
                    Client Testimonials
                  </li>
                  <li
                    className="px-4 py-3 hover:bg-teal-50 hover:text-teal-700 hover:border-l-4 hover:border-l-teal-500 cursor-pointer transition-all duration-300 transform hover:translate-x-1 hover:shadow-md rounded-r-lg"
                    onClick={() => navigate("/support?section=quote")}
                  >
                    Get a Custom Quote
                  </li>
                </ul>
              </li>
              <li onClick={() => setactive("Contact")}>Contact</li>
            </ul>
          </div>

          {/* Mobile Menu Button - 10% width on mobile */}
          <div className="w-[10%] sm:w-1/3 md:w-1/2 lg:hidden flex items-center justify-center px-1 sm:px-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-teal-500 focus:outline-none focus:text-teal-500 p-2 rounded-md hover:bg-gray-100 transition-colors duration-200"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu - Fixed positioning to show at current scroll position */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed top-0 right-0 w-80 h-full bg-white border border-gray-200 shadow-xl z-50">
            <div className="flex justify-between items-center p-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800">Menu</h3>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-500 hover:text-gray-700 p-2 rounded-md hover:bg-gray-100"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="px-4 py-4 space-y-2">
              <div
                className="px-4 py-3 text-base font-medium text-gray-700 hover:text-teal-500 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors duration-200"
                onClick={() => {
                  setactive("Home");
                  setMobileMenuOpen(false);
                }}
              >
                Home
              </div>
              <div
                className="px-4 py-3 text-base font-medium text-gray-700 hover:text-teal-500 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors duration-200"
                onClick={() => {
                  setactive("About");
                  setMobileMenuOpen(false);
                }}
              >
                About
              </div>
              <div
                className="px-4 py-3 text-base font-medium text-gray-700 hover:text-teal-500 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors duration-200"
                onClick={() => {
                   navigate("/Services");
  setMobileMenuOpen(false);
                }}
              >
                Services
              </div>
              <div
                className="px-4 py-3 text-base font-medium text-gray-700 hover:text-teal-500 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors duration-200"
                onClick={() => {
                  setactive("Portfolio");
                  setMobileMenuOpen(false);
                }}
              >
                Portfolio
              </div>
              <div
                className="px-4 py-3 text-base font-medium text-gray-700 hover:text-teal-500 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors duration-200"
                onClick={() => {
                  navigate("/support");
                  setMobileMenuOpen(false);
                }}
              >
                Support
              </div>
              <div
                className="px-4 py-3 text-base font-medium text-gray-700 hover:text-teal-500 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors duration-200"
                onClick={() => {
                  setactive("Contact");
                  setMobileMenuOpen(false);
                }}
              >
                Contact
              </div>
            </div>
          </div>
        )}
      </>
    );
  }

  function AppContent() {
    return (
      <>
        <ContactHeader></ContactHeader>
        <Navbar
          active={active}
          setActive={setactive}
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
        />
        <div className="min-h-screen">
          {active === "Home" && <Home />}
          {active === "About" && <First />}
          {active === "Contact" && <Index />}

          {active === "Support" && <SupportPage />}
           <Routes>
          <Route path="/Services" element={<Main />} />
        </Routes>
        </div>
      </>
    );
  }
 
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppContent />} />
        <Route path="/Services" element={<Main />} />

        <Route path="/service/:serviceId" element={<ServiceDetail />} />
        <Route path="/support" element={<SupportPage />} />
      </Routes>
    </Router>
  );
}
export default App;
