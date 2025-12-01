import website from "../images/website.jpg";
import wordpress from "../images/wordpress.jpg";
import ecommer from "../images/ecommer.jpg";
import shopify from "../images/shopify.jpg";
import log from "../images/logo.jpg";
import grap from "../images/grap.jpg";
import mob from "../images/mob.jpg";
import seo from "../images/seo.jpg";
import calender from "../images/calender.png";
import { useNavigate } from "react-router-dom";

export default function Boxes() {
  const navigate = useNavigate();

  const services = [
    {
      id: "website-development",
      title: "Website Development",
      img: website,
      desc: "Custom, responsive, and high-performance websites tailored to your business needs. ...",
    },
    {
      id: "wordpress-development",
      title: "WordPress Development",
      img: wordpress,
      desc: "Professional WordPress themes, plugins, and customization for your online presence. .....",
    },
    {
      id: "ecommerce-solution",
      title: "E-commerce Solution",
      img: ecommer,
      desc: "Complete e-commerce solutions to sell your products online with ease. .....",
    },
    {
      id: "shopify-store-development",
      title: "Shopify Store Development",
      img: shopify,
      desc: "Custom Shopify stores designed to attract customers and boost sales. ......",
    },
    {
      id: "logo-designing",
      title: "Logo Designing",
      img: log,
      desc: "Unique, creative, and professional logos that define your brand identity. ....",
    },
    {
      id: "graphic-designing",
      title: "Graphic Designing",
      img: grap,
      desc: "Eye-catching graphic designs for web, print, and social media campaigns.  .....",
    },
    {
      id: "mobile-app-development",
      title: "Android / iOS Application",
      img: mob,
      desc: "Mobile apps that deliver seamless experiences for Android and iOS users.....",
    },
    {
      id: "seo-digital-marketing",
      title: "SEO / Digital Marketing",
      img: seo,
      desc: "Boost your online visibility and attract more customers with SEO strategies. ....",
    },
    {
      id: "website-maintenance",
      title: "Monthly Maintenance of Websites",
      img: calender,
      desc: "Keep your website secure, updated, and running smoothly every month.",
    },
  ];

  const handleServiceClick = (serviceId) => {
    navigate(`/service/${serviceId}`);
  };

  return (
    <>
      <div className="w-11/12 mx-auto py-8 md:py-12 px-4 md:px-0">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 md:mb-8 leading-tight">My Services</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              onClick={() => handleServiceClick(service.id)}
              className="bg-white border-4 border-transparent shadow-[0_0_5px_rgba(59,130,246,0.0)]
hover:border-blue-500 hover:shadow-[0_0_12px_2px_rgba(59,130,246,0.7)]
rounded-lg overflow-hidden transition-all duration-300 will-change-transform will-change-shadow cursor-pointer transform hover:scale-105"
            >
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-32 sm:h-36 md:h-40 object-cover"
              />
              <div className="p-3 md:p-4">
                <h2 className="text-lg md:text-xl font-semibold mb-2 leading-tight">{service.title}</h2>
                <p className="text-gray-600 text-xs sm:text-sm mb-3 md:mb-4 leading-relaxed">{service.desc}</p>
                <div className="inline-block px-3 md:px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-600 transition text-sm md:text-base">
                  Read More
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
