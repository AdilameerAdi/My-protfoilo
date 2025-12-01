import log from "../images/log.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();

  const handleQuickLink = (link) => {
    switch (link) {
      case "Home":
        navigate("/");
        break;
      case "About me":
        navigate("/");
        // You can add logic to set active tab to About
        break;
      case "Portfolio":
        navigate("/");
        // You can add logic to set active tab to Portfolio
        break;
      case "Pricing":
        navigate("/support?section=pricing");
        break;
      case "Domain & Web Hosting":
        navigate("/support?section=hosting");
        break;
      case "FAQs":
        navigate("/support?section=faq");
        break;
      case "Testimonials":
        navigate("/support?section=testimonials");
        break;
      case "Request a Quote":
        navigate("/support?section=quote");
        break;
      case "Contact me":
        navigate("/");
        // You can add logic to set active tab to Contact
        break;
      default:
        break;
    }
  };

  const handleServiceLink = (service) => {
    switch (service) {
      case "Website Development":
        navigate("/service/website-development");
        break;
      case "E-commerce Solutions":
        navigate("/service/ecommerce-solution");
        break;
      case "WordPress Development":
        navigate("/service/wordpress-development");
        break;
      case "Shopify Development":
        navigate("/service/shopify-store-development");
        break;
      case "Logo Designing":
        navigate("/service/logo-designing");
        break;
      case "Graphic Designing":
        navigate("/service/graphic-designing");
        break;
      case "Mobile App Development":
        navigate("/service/mobile-app-development");
        break;
      case "SEO & Digital Marketing":
        navigate("/service/seo-digital-marketing");
        break;
      case "Website Maintenance":
        navigate("/service/website-maintenance");
        break;
      default:
        break;
    }
  };

  return (
    <>
      <div className="bg-[#242328] w-full flex flex-col lg:flex-row">
        {/* Logo and Description Section */}
        <div className="w-full lg:w-1/4 mx-2 md:mx-5 my-5 px-4 lg:px-0">
          <div>
            <img
              className="h-[80px] md:h-[100px] p-4 md:p-7 pb-0 object-contain"
              src={log}
              alt="Adil Ameer Logo"
            />
          </div>
          <div>
            <p className="text-gray-500 mt-0 p-4 md:p-7 text-justify text-sm md:text-base leading-relaxed">
              I'm a freelance web designer and developer that operates in
              Pakistan. I can also work remotely, servicing the entire country.
              I specialize in creating marketing websites for great individuals
              and small-medium sized businesses, helping them to market their
              products or services successfully on the web. If you have an
              upcoming project you'd like to discuss then please get in touch.
            </p>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="w-full lg:w-[200px] mx-2 md:mx-5 my-5 px-4 lg:px-0">
          <h1 className="text-white capitalize p-1 pt-6 lg:pt-10 text-base md:text-lg font-semibold">
            Quick Links
          </h1>
          <ul className="[&>li]:text-gray-500 [&>li]:leading-loose pt-6 lg:pt-10 [&>li]:hover:text-[#41A5B0] [&>li]:cursor-pointer [&>li]:text-sm md:text-base">
            <li onClick={() => handleQuickLink("Home")}>Home</li>
            <li onClick={() => handleQuickLink("About me")}>About Me</li>
            <li onClick={() => handleQuickLink("Portfolio")}>Portfolio</li>
            <li onClick={() => handleQuickLink("Pricing")}>Pricing</li>
            <li onClick={() => handleQuickLink("Domain & Web Hosting")}>Domain & Web Hosting</li>
            <li onClick={() => handleQuickLink("FAQs")}>FAQs</li>
            <li onClick={() => handleQuickLink("Testimonials")}>Testimonials</li>
            <li onClick={() => handleQuickLink("Request a Quote")}>Request a Quote</li>
            <li onClick={() => handleQuickLink("Contact me")}>Contact Me</li>
          </ul>
        </div>

        {/* Services Section */}
        <div className="w-full lg:w-[200px] mx-2 md:mx-5 my-5 px-4 lg:px-0">
          <h1 className="text-white capitalize p-1 pt-6 lg:pt-10 text-base md:text-lg font-semibold">
            My Services
          </h1>
          <ul className="[&>li]:text-gray-500 [&>li]:leading-loose pt-6 lg:pt-10 [&>li]:hover:text-[#41A5B0] [&>li]:cursor-pointer [&>li]:text-sm md:text-base">
            <li onClick={() => handleServiceLink("Website Development")}>Website Development</li>
            <li onClick={() => handleServiceLink("E-commerce Solutions")}>E-commerce Solutions</li>
            <li onClick={() => handleServiceLink("WordPress Development")}>WordPress Development</li>
            <li onClick={() => handleServiceLink("Shopify Development")}>Shopify Development</li>
            <li onClick={() => handleServiceLink("Logo Designing")}>Logo Designing</li>
            <li onClick={() => handleServiceLink("Graphic Designing")}>Graphic Designing</li>
            <li onClick={() => handleServiceLink("Android App Development")}>Mobile App Development</li>
            <li onClick={() => handleServiceLink("SEO / Digital Marketing")}>SEO & Digital Marketing</li>
            <li onClick={() => handleServiceLink("Website Maintenance")}>Website Maintenance</li>
          </ul>
        </div>

        {/* Contact Form Section */}
        <div className="w-full lg:w-auto mx-2 md:mx-5 my-5 px-4 lg:px-0">
          <h1 className="text-white capitalize p-1 pt-6 lg:pt-10 text-base md:text-lg font-semibold">
            Tell Me About Your Project
          </h1>
          <form
            onSubmit={(e) => {
              e.preventDefault();

              const name = e.target.name.value.trim();
              const project = e.target.project.value.trim();

              if (!name || !project) {
                alert("Please fill in all fields.");
                return;
              }

              // Your WhatsApp number in international format
              const phoneNumber = "923007029003"; // Pakistan: 92 + number without 0
              const message = `Name: ${name}%0AProject: ${project}`;
              const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;

              window.open(whatsappURL, "_blank");
            }}
          >
            <div className="flex flex-col sm:flex-row gap-2">
              <h1 className="text-white capitalize pt-6 lg:pt-10 text-sm md:text-base">Your name:</h1>
              <input
                name="name"
                className="bg-white mt-6 lg:mt-11 sm:ml-4 h-8 md:h-10 px-2 rounded text-sm md:text-base"
                type="text"
                placeholder="Enter your name here"
                required
              />
            </div>

            <h1 className="text-white capitalize mt-4 text-sm md:text-base">
              Tell me about your project:
            </h1>
            <textarea
              name="project"
              placeholder="Enter project details..."
              className="bg-white border-0 mt-2 h-8 md:h-10 w-full lg:w-[300px] block px-2 py-1 rounded text-sm md:text-base"
              required
            ></textarea>

            <button
              className="capitalize border-[#41A5B0] border-2 mt-3 p-2 md:p-4 text-[#41A5B0] hover:bg-[#41A5B0] hover:text-white rounded-xl text-sm md:text-base transition-colors duration-300"
              type="submit"
            >
              Send Message
            </button>
          </form>
          
          <h1 className="text-white mt-2 text-center text-sm md:text-base">Reach Out Anytime</h1>
          <div className="flex flex-col md:flex-row items-start md:items-center text-white mt-3 space-y-2 md:space-y-0 md:space-x-6 text-sm md:text-base">
          
            {/* Email */}
            <a
              href="mailto:adilammeradi@gmail.com"
              className="flex items-center space-x-2 hover:text-[#41A5B0] transition-colors duration-300"
            >
              <FontAwesomeIcon icon={faEnvelope} />
              <span className="break-all">adilammeradi@gmail.com</span>
            </a>

            {/* Phone */}
            <a
              href="tel:+923007029003"
              className="flex items-center space-x-2 hover:text-[#41A5B0] transition-colors duration-300"
            >
              <FontAwesomeIcon icon={faPhone} />
              <span>+92 3007029003</span>
            </a>
          </div>
          
          <div className="flex flex-row mt-4 justify-center md:justify-start gap-4">
            {/* Facebook */}
            <a
              href="https://facebook.com/YourUsername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#41A5B0] transition-colors duration-300"
            >
              <FontAwesomeIcon icon={faFacebook} size="2xl" />
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/YourUsername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#41A5B0] transition-colors duration-300"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2xl"  />
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/923007029003"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#41A5B0] transition-colors duration-300"
            >
              <FontAwesomeIcon icon={faWhatsapp} size="2xl"  />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
