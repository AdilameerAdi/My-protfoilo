import logo from "../../frontend/images/log.jpg";
import { useLocation, useNavigate } from "react-router-dom";

const SERVICES = [
  { id: "website-development", label: "Website Development" },
  { id: "wordpress-development", label: "WordPress Development" },
  { id: "ecommerce-solution", label: "E-commerce Solution" },
  { id: "shopify-store-development", label: "Shopify Store Development" },
  { id: "logo-designing", label: "Logo Designing" },
  { id: "graphic-designing", label: "Graphic Designing" },
  { id: "mobile-app-development", label: "Mobile App Development" },
  { id: "seo-digital-marketing", label: "SEO & Digital Marketing" },
  { id: "website-maintenance", label: "Website Maintenance" },
];

export default function Navbar({ active, setActive, mobileMenuOpen, setMobileMenuOpen }) {
  const location = useLocation();
  const navigate = useNavigate();

  if (location.pathname.startsWith("/service/")) return null;

  const closeMenu = () => setMobileMenuOpen && setMobileMenuOpen(false);

  const handleServiceClick = (serviceId) => {
    navigate(`/service/${serviceId}`);
    closeMenu();
  };

  const handleTab = (tab) => {
    if (location.pathname === "/") {
      if (setActive) setActive(tab);
    } else {
      if (setActive) setActive(tab);
      navigate("/");
    }
    closeMenu();
  };

  const handlePortfolioClick = () => {
    navigate("/portfolio");
    closeMenu();
  };

  const navLinkCls = (tab) =>
    `uppercase cursor-pointer pb-3 text-sm xl:text-[15px] font-medium tracking-wide transition-all duration-200 border-b-2 whitespace-nowrap ${
      active === tab
        ? "border-teal-500 text-teal-600"
        : "border-transparent text-gray-700 hover:border-teal-400 hover:text-teal-600"
    }`;

  const dropdownItemCls =
    "px-4 py-2.5 text-sm text-gray-700 normal-case font-normal hover:bg-teal-50 hover:text-teal-700 hover:pl-6 cursor-pointer transition-all duration-200 border-l-2 border-transparent hover:border-teal-400";

  return (
    <>
      {/* Main Navbar */}
      <div className="w-full z-30 bg-white sticky top-0 shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-3 sm:px-5 flex items-center h-16 sm:h-18">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              className="h-12 sm:h-14 max-w-[130px] sm:max-w-[150px] object-contain cursor-pointer"
              src={logo}
              alt="Adil Ameer"
              onClick={() => handleTab("Home")}
            />
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex flex-1 justify-center">
            <ul className="flex items-end gap-7 xl:gap-10 mt-5 pb-0 h-16 sm:h-18">
              <li className={navLinkCls("Home")} onClick={() => handleTab("Home")}>Home</li>
              <li className={navLinkCls("About")} onClick={() => handleTab("About")}>About</li>

              {/* Services dropdown */}
              <li className={`${navLinkCls("Services")} group relative`}>
                <span onClick={() => navigate("/Services")} className="select-none flex items-center gap-1">
                  Services
                  <svg className="w-3.5 h-3.5 mt-0.5 transition-transform duration-200 group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
                <ul className="hidden absolute group-hover:block bg-white top-full left-1/2 -translate-x-1/2 z-50 shadow-xl rounded-xl border border-gray-100 w-64 py-2 mt-1 animate-fade-in">
                  {SERVICES.map((s) => (
                    <li
                      key={s.id}
                      className={dropdownItemCls}
                      onClick={(e) => { e.stopPropagation(); handleServiceClick(s.id); }}
                    >
                      {s.label}
                    </li>
                  ))}
                </ul>
              </li>

              <li className={navLinkCls("Portfolio")} onClick={handlePortfolioClick}>Portfolio</li>

              {/* Support dropdown */}
              <li className={`${navLinkCls("Support")} group relative`}>
                <span onClick={() => navigate("/support")} className="select-none flex items-center gap-1">
                  Support
                  <svg className="w-3.5 h-3.5 mt-0.5 transition-transform duration-200 group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
                <ul className="hidden absolute group-hover:block bg-white top-full left-1/2 -translate-x-1/2 z-50 shadow-xl rounded-xl border border-gray-100 w-60 py-2 mt-1">
                  {[
                    { label: "Frequently Asked Questions", section: "faq" },
                    { label: "Website Pricing", section: "pricing" },
                    { label: "Client Testimonials", section: "testimonials" },
                    { label: "Get a Custom Quote", section: "quote" },
                  ].map(({ label, section }) => (
                    <li
                      key={section}
                      className={dropdownItemCls}
                      onClick={(e) => { e.stopPropagation(); navigate(`/support?section=${section}`); closeMenu(); }}
                    >
                      {label}
                    </li>
                  ))}
                </ul>
              </li>

              <li className={navLinkCls("Contact")} onClick={() => handleTab("Contact")}>Contact</li>
            </ul>
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center ml-4">
            <button
              onClick={() => handleTab("Contact")}
              className="bg-[#41A5B0] hover:bg-[#2dbccb] text-white font-semibold text-sm px-5 py-2.5 rounded-lg transition-all duration-300 shadow hover:shadow-md hover:scale-105 whitespace-nowrap"
            >
              Hire Me
            </button>
          </div>

          {/* Mobile Hamburger */}
          <div className="lg:hidden ml-auto">
            <button
              onClick={() => setMobileMenuOpen && setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-600 hover:text-teal-500 p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Backdrop */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-40 backdrop-blur-[2px]"
          onClick={closeMenu}
        />
      )}

      {/* Mobile Drawer */}
      <div
        className={`lg:hidden fixed top-0 right-0 h-full w-[290px] max-w-[85vw] bg-white shadow-2xl z-50 flex flex-col transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex justify-between items-center px-5 py-4 border-b border-gray-100">
          <img src={logo} alt="Logo" className="h-10 object-contain" />
          <button
            onClick={closeMenu}
            className="text-gray-500 hover:text-gray-800 p-1.5 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Close menu"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Drawer Links */}
        <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-1">
          {[
            { label: "Home", action: () => handleTab("Home"), isActive: active === "Home" },
            { label: "About", action: () => handleTab("About"), isActive: active === "About" },
            { label: "Portfolio", action: handlePortfolioClick, isActive: false },
            { label: "Contact", action: () => handleTab("Contact"), isActive: active === "Contact" },
          ].map(({ label, action, isActive }) => (
            <div
              key={label}
              onClick={action}
              className={`px-4 py-3 rounded-xl cursor-pointer font-medium text-[15px] transition-all duration-200 ${
                isActive
                  ? "bg-teal-50 text-teal-700 border-l-4 border-teal-500 pl-3"
                  : "text-gray-700 hover:bg-gray-50 hover:text-teal-600"
              }`}
            >
              {label}
            </div>
          ))}

          <div
            onClick={() => { navigate("/Services"); closeMenu(); }}
            className="px-4 py-3 rounded-xl cursor-pointer font-medium text-[15px] text-gray-700 hover:bg-gray-50 hover:text-teal-600 transition-all duration-200"
          >
            Services
          </div>

          <div
            onClick={() => { navigate("/support"); closeMenu(); }}
            className="px-4 py-3 rounded-xl cursor-pointer font-medium text-[15px] text-gray-700 hover:bg-gray-50 hover:text-teal-600 transition-all duration-200"
          >
            Support
          </div>
        </nav>

        {/* Drawer Footer CTA */}
        <div className="p-4 border-t border-gray-100">
          <button
            onClick={() => handleTab("Contact")}
            className="w-full bg-[#41A5B0] hover:bg-[#2dbccb] text-white font-semibold py-3 rounded-xl transition-all duration-300 shadow-md text-[15px]"
          >
            Hire Me
          </button>
        </div>
      </div>
    </>
  );
}
