import { useParams, useNavigate } from "react-router-dom";
import Footer from "../Home/footer";
import website from "../images/website.jpg";
import wordpress from "../images/wordpress.jpg";
import ecommer from "../images/ecommer.jpg";
import shopify from "../images/shopify.jpg";
import log from "../images/logo.jpg";
import grap from "../images/grap.jpg";
import mob from "../images/mob.jpg";
import seo from "../images/seo.jpg";
import calender from "../images/calender.png";

export default function ServiceDetail() {
  const { serviceId } = useParams();
  const navigate = useNavigate();

  // Service details data
  const serviceDetails = {
    "website-development": {
      title: "Website Development",
      image: {website},
      overview: "I specialize in creating custom, responsive, and high-performance websites that perfectly align with your business goals. From concept to deployment, I handle every aspect of web development to deliver exceptional results.",
      expertise: [
        "Custom website design and development",
        "Responsive design for all devices",
        "E-commerce website development",
        "Content Management Systems (CMS)",
        "Website optimization and performance",
        "SEO-friendly code structure",
        "Cross-browser compatibility",
        "Mobile-first development approach"
      ],
      process: [
        "Initial consultation and requirements gathering",
        "Design mockups and wireframes",
        "Development and coding",
        "Testing and quality assurance",
        "Deployment and launch",
        "Post-launch support and maintenance"
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "React", "Node.js", "PHP", "MySQL", "WordPress"]
    },
    "wordpress-development": {
      title: "WordPress Development",
      image: "../images/wordpress.jpg",
      overview: "I create professional WordPress themes, plugins, and customizations that transform your online presence. With extensive experience in WordPress development, I build powerful, scalable solutions that drive results.",
      expertise: [
        "Custom WordPress theme development",
        "WordPress plugin development",
        "E-commerce with WooCommerce",
        "WordPress customization and optimization",
        "Multilingual website development",
        "WordPress security and maintenance",
        "Performance optimization",
        "SEO optimization for WordPress"
      ],
      process: [
        "WordPress installation and setup",
        "Theme selection or custom development",
        "Plugin integration and customization",
        "Content migration and setup",
        "Testing and optimization",
        "Training and documentation"
      ],
      technologies: ["WordPress", "PHP", "MySQL", "HTML/CSS", "JavaScript", "WooCommerce", "Elementor"]
    },
    "ecommerce-solution": {
      title: "E-commerce Solution",
      image: "../images/ecommer.jpg",
      overview: "I build complete e-commerce solutions that help you sell products online effectively. From simple online stores to complex multi-vendor platforms, I create solutions that drive sales and enhance customer experience.",
      expertise: [
        "Custom e-commerce website development",
        "Shopping cart integration",
        "Payment gateway integration",
        "Inventory management systems",
        "Order processing and management",
        "Customer account management",
        "Multi-currency support",
        "Mobile commerce optimization"
      ],
      process: [
        "E-commerce strategy planning",
        "Platform selection and setup",
        "Design and development",
        "Payment and shipping integration",
        "Testing and quality assurance",
        "Launch and optimization"
      ],
      technologies: ["WooCommerce", "Shopify", "Magento", "OpenCart", "PHP", "MySQL", "JavaScript"]
    },
    "shopify-store-development": {
      title: "Shopify Store Development",
      image: "../images/shopify.jpg",
      overview: "I specialize in creating custom Shopify stores that attract customers and boost sales. With deep knowledge of Shopify's platform, I build beautiful, functional stores that convert visitors into customers.",
      expertise: [
        "Custom Shopify theme development",
        "Shopify app integration",
        "E-commerce optimization",
        "Payment gateway setup",
        "Shipping and tax configuration",
        "Inventory management",
        "Customer experience optimization",
        "Mobile commerce optimization"
      ],
      process: [
        "Shopify store setup and configuration",
        "Custom theme development",
        "App integration and customization",
        "Payment and shipping setup",
        "Testing and optimization",
        "Launch and post-launch support"
      ],
      technologies: ["Shopify", "Liquid", "HTML/CSS", "JavaScript", "Shopify APIs", "Shopify Apps"]
    },
    "logo-designing": {
      title: "Logo Designing",
      image: "../images/logo.jpg",
      overview: "I create unique, creative, and professional logos that define your brand identity. Each logo is carefully crafted to represent your brand values and make a lasting impression on your audience.",
      expertise: [
        "Brand identity design",
        "Logo concept development",
        "Vector logo creation",
        "Logo variations and formats",
        "Brand style guide creation",
        "Logo animation",
        "Print and digital optimization",
        "Logo trademark considerations"
      ],
      process: [
        "Brand research and analysis",
        "Concept development and sketching",
        "Digital design and refinement",
        "Client feedback and revisions",
        "Final logo delivery",
        "Brand guidelines creation"
      ],
      technologies: ["Adobe Illustrator", "Adobe Photoshop", "Figma", "Sketch", "Vector Graphics"]
    },
    "graphic-designing": {
      title: "Graphic Designing",
      image: "../images/grap.jpg",
      overview: "I create eye-catching graphic designs for web, print, and social media campaigns. From business cards to social media posts, I design visuals that communicate your message effectively and enhance your brand presence.",
      expertise: [
        "Print design (business cards, brochures, flyers)",
        "Digital design (social media, web graphics)",
        "Brand identity design",
        "Marketing collateral design",
        "Infographic design",
        "Photo editing and manipulation",
        "Typography and layout design",
        "Color theory and psychology"
      ],
      process: [
        "Project brief and requirements",
        "Concept development",
        "Design creation",
        "Client feedback and revisions",
        "Final design delivery",
        "File preparation for various formats"
      ],
      technologies: ["Adobe Creative Suite", "Photoshop", "Illustrator", "InDesign", "Figma", "Canva"]
    },
    "mobile-app-development": {
      title: "Android / iOS Application",
      image: "../images/mob.jpg",
      overview: "I develop mobile apps that deliver seamless experiences for Android and iOS users. From concept to app store deployment, I create intuitive, high-performance mobile applications that engage users and drive business growth.",
      expertise: [
        "Native Android app development",
        "Native iOS app development",
        "Cross-platform app development",
        "UI/UX design for mobile",
        "App store optimization",
        "Push notification integration",
        "Offline functionality",
        "Performance optimization"
      ],
      process: [
        "App concept and planning",
        "UI/UX design",
        "Development and coding",
        "Testing and quality assurance",
        "App store submission",
        "Post-launch support and updates"
      ],
      technologies: ["React Native", "Flutter", "Android Studio", "Xcode", "Kotlin", "Swift", "Firebase"]
    },
    "seo-digital-marketing": {
      title: "SEO / Digital Marketing",
      image: "../images/seo.jpg",
      overview: "I boost your online visibility and attract more customers with comprehensive SEO strategies and digital marketing solutions. From keyword optimization to content marketing, I help you dominate search results and grow your online presence.",
      expertise: [
        "Search Engine Optimization (SEO)",
        "Keyword research and analysis",
        "On-page and off-page SEO",
        "Content marketing strategy",
        "Social media marketing",
        "Google Ads management",
        "Local SEO optimization",
        "Analytics and reporting"
      ],
      process: [
        "Website SEO audit",
        "Keyword research and strategy",
        "On-page optimization",
        "Content creation and optimization",
        "Link building and outreach",
        "Performance monitoring and reporting"
      ],
      technologies: ["Google Analytics", "Google Search Console", "SEMrush", "Ahrefs", "Moz", "Google Ads"]
    },
    "website-maintenance": {
      title: "Monthly Maintenance of Websites",
      image: "../images/calender.png",
      overview: "I keep your website secure, updated, and running smoothly every month. Regular maintenance ensures your website performs optimally, stays secure, and provides the best user experience for your visitors.",
      expertise: [
        "Website security monitoring",
        "Regular backups and updates",
        "Performance optimization",
        "Security vulnerability fixes",
        "Content updates and management",
        "Plugin and theme updates",
        "Database optimization",
        "Uptime monitoring"
      ],
      process: [
        "Monthly security scans",
        "Performance optimization",
        "Backup creation and testing",
        "Plugin and theme updates",
        "Content updates as needed",
        "Monthly performance report"
      ],
      technologies: ["WordPress", "cPanel", "FTP", "Database Management", "Security Tools", "Performance Tools"]
    }
  };

  const service = serviceDetails[serviceId];

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Service Not Found</h1>
          <button
            onClick={() => navigate("/services")}
            className="px-6 py-3 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors"
          >
            Back to Services
          </button>
        </div>
      </div>
    );
  }

  const handleGetInTouch = () => {
    navigate("/");
    // You can add logic here to set the active tab to Contact when the main page loads
  };

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Back Button */}
            <div className="mb-8">
              <button
                onClick={() => navigate("/")}
                className="flex items-center text-teal-600 hover:text-teal-700 font-medium transition-colors duration-200"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Services
              </button>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  {service.title}
                </h1>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {service.overview}
                </p>
                <button
                  onClick={handleGetInTouch}
                  className="px-8 py-4 bg-teal-500 text-white text-lg font-semibold rounded-lg hover:bg-teal-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Get In Touch
                </button>
              </div>
              <div className="flex justify-center lg:justify-end">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full max-w-md h-80 object-cover rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Expertise Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">My Expertise</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              I bring extensive experience and specialized skills to deliver exceptional results in {service.title.toLowerCase()}.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.expertise.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-teal-500">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="ml-4 text-gray-700">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">How I Work</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                I follow a proven process to ensure your project is completed efficiently and exceeds your expectations.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {service.process.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-xl font-bold">{index + 1}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{step}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Technologies Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Technologies I Use</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              I work with the latest technologies and tools to deliver cutting-edge solutions.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {service.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-teal-100 text-teal-800 rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-teal-500 py-16">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-teal-100 mb-8">
              Let's discuss your project and how I can help bring your vision to life.
            </p>
            <button
              onClick={handleGetInTouch}
              className="px-8 py-4 bg-white text-teal-500 text-lg font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get In Touch Now
            </button>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <Footer />
    </>
  );
} 