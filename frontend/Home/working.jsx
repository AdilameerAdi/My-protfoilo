import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faJs,
  faHtml5,
  faCss3Alt,
  faNodeJs,
  faWordpress,
  faShopify,
  faAndroid,
  faPython,
  faPhp,
  faGitAlt,
  faFigma,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faMobile } from "@fortawesome/free-solid-svg-icons";

const techStack = [
  { icon: faReact,     label: "React",       color: "#61DAFB", bg: "#e8f9fd" },
  { icon: faJs,        label: "JavaScript",  color: "#F7DF1E", bg: "#fefde7" },
  { icon: faHtml5,     label: "HTML5",       color: "#E34F26", bg: "#fdf0ec" },
  { icon: faCss3Alt,   label: "CSS3",        color: "#1572B6", bg: "#ebf4fb" },
  { icon: faNodeJs,    label: "Node.js",     color: "#339933", bg: "#edf7ed" },
  { icon: faWordpress, label: "WordPress",   color: "#21759B", bg: "#eaf2f6" },
  { icon: faShopify,   label: "Shopify",     color: "#96BF48", bg: "#f2f6ea" },
  { icon: faAndroid,   label: "Android",     color: "#3DDC84", bg: "#e8faf2" },
  { icon: faPython,    label: "Python",      color: "#3776AB", bg: "#ebf2f9" },
  { icon: faPhp,       label: "PHP",         color: "#777BB4", bg: "#f2f1f9" },
  { icon: faDatabase,  label: "MySQL",       color: "#00618A", bg: "#e5f0f6" },
  { icon: faGitAlt,    label: "Git",         color: "#F05032", bg: "#fdf0ed" },
  { icon: faFigma,     label: "Figma",       color: "#F24E1E", bg: "#fdf0ec" },
  { icon: faMobile,    label: "React Native",color: "#61DAFB", bg: "#e8f9fd" },
];

export default function Working() {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[#41A5B0] text-sm font-semibold uppercase tracking-widest mb-2">
            Tech Stack
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            My Working{" "}
            <span className="text-[#2dbccb]">Technology</span>
          </h2>
          <p className="text-gray-500 text-base sm:text-lg max-w-2xl mx-auto">
            I work with a modern, battle-tested technology stack to deliver fast, scalable, and
            beautiful digital products.
          </p>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4">
          {techStack.map(({ icon, label, color, bg }, idx) => (
            <div
              key={label}
              className="flex flex-col items-center gap-2 p-4 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-default group float-animation stagger-item"
              style={{ backgroundColor: bg, animationDelay: `${idx * 0.05}s` }}
            >
              <FontAwesomeIcon
                icon={icon}
                style={{ color }}
                className="text-3xl sm:text-4xl group-hover:scale-110 transition-transform duration-300 icon-bounce"
              />
              <span className="text-xs font-semibold text-gray-600 text-center leading-tight">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
