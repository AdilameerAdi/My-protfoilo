import { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faFolderOpen,
  faBriefcase,
  faCode,
} from "@fortawesome/free-solid-svg-icons";

const stats = [
  { icon: faUsers,      end: 100, suffix: "+", label: "Happy Customers",              color: "from-teal-400 to-cyan-500" },
  { icon: faFolderOpen, end: 200, suffix: "+", label: "Websites & Apps Delivered",    color: "from-blue-400 to-indigo-500" },
  { icon: faBriefcase,  end: 5,   suffix: "+", label: "Years of Experience",           color: "from-purple-400 to-pink-500" },
  { icon: faCode,       end: 20,  suffix: "+", label: "Languages & Technologies",      color: "from-orange-400 to-amber-500" },
];

function useCountUp(end, duration = 1800, trigger) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    let start = 0;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) { setValue(end); clearInterval(timer); }
      else setValue(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [end, duration, trigger]);
  return value;
}

function StatCard({ icon, end, suffix, label, color }) {
  const [triggered, setTriggered] = useState(false);
  const ref = useRef(null);
  const count = useCountUp(end, 1800, triggered);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setTriggered(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="flex flex-col items-center justify-center text-center p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group stagger-item">
      <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 float-animation`}>
        <FontAwesomeIcon icon={icon} className="text-white" size="xl" />
      </div>
      <p className="text-4xl font-extrabold text-gray-900 mb-1">
        {count}{suffix}
      </p>
      <p className="text-gray-500 text-sm font-medium uppercase tracking-wide">{label}</p>
    </div>
  );
}

export default function Numbers() {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 py-14 px-4">
      <div className="max-w-5xl mx-auto">
        <p className="text-center text-[#41A5B0] text-sm font-semibold uppercase tracking-widest mb-2">By the Numbers</p>
        <h2 className="text-center text-3xl sm:text-4xl font-bold text-gray-900 mb-10">
          Results That Speak for Themselves
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <StatCard key={s.label} {...s} />
          ))}
        </div>
      </div>
    </div>
  );
}
