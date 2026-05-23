import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRocket,
  faBuilding,
  faHandshake,
} from "@fortawesome/free-solid-svg-icons";

const cards = [
  {
    icon: faRocket,
    label: "Startups",
    defaultColor: "text-blue-400",
    hoverColor: "group-hover:text-blue-500",
    borderHover: "hover:border-blue-400",
    desc: "I collaborate with startups ready to make their mark in the digital space. My focus is on building strong, long-term relationships that help new businesses grow, thrive, and stand out online.",
    bg: "group-hover:bg-blue-50",
  },
  {
    icon: faBuilding,
    label: "Companies",
    defaultColor: "text-green-400",
    hoverColor: "group-hover:text-green-500",
    borderHover: "hover:border-green-400",
    desc: "Already have a website but believe it could achieve more? I transform it into a more effective, engaging, and results-driven platform for companies of all sizes.",
    bg: "group-hover:bg-green-50",
  },
  {
    icon: faHandshake,
    label: "Agencies",
    defaultColor: "text-yellow-400",
    hoverColor: "group-hover:text-yellow-500",
    borderHover: "hover:border-yellow-400",
    desc: "I provide white-label design and development services for agencies, seamlessly integrating into your workflow — an expert extension of your team.",
    bg: "group-hover:bg-yellow-50",
  },
];

export default function Collab() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[#41A5B0] text-sm font-semibold uppercase tracking-widest mb-2 stagger-item">
            Who I Work With
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 section-title-underline stagger-item">
            Partners & Clients{" "}
            <span className="text-[#2dbccb]">I Empower</span>
          </h2>
          <p className="text-center max-w-2xl mx-auto text-gray-500 text-base sm:text-lg stagger-item">
            I have partnered with numerous design agencies in both lead and senior developer roles,
            approaching every project with meticulous attention to detail and a drive to exceed
            expectations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map(({ icon, label, defaultColor, hoverColor, borderHover, desc, bg }, idx) => (
            <div
              key={label}
              className={`p-8 bg-white rounded-2xl shadow-md border-2 border-transparent ${borderHover} hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group ${bg} stagger-item`}
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className={`mb-5 transition-all duration-300 ${defaultColor} ${hoverColor}`}>
                <FontAwesomeIcon icon={icon} size="3x" />
              </div>
              <h3 className={`text-xl font-bold mb-3 text-gray-800 ${hoverColor} transition-colors duration-300`}>
                {label}
              </h3>
              <p className="text-gray-500 leading-relaxed text-sm sm:text-base">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
