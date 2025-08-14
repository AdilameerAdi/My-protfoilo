import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faFolderOpen,
  faBriefcase,
  faCode,
} from "@fortawesome/free-solid-svg-icons";

function Numbers() {
  const [customers, setCustomers] = useState(0);
  const [projects, setProjects] = useState(0);
  const [years, setYears] = useState(0);
  const [languages, setLanguages] = useState(0);

  useEffect(() => {
    animateValue(setCustomers, 100, 1500); // 1.5 sec
    animateValue(setProjects, 200, 1500);
    animateValue(setYears, 2, 1500);
    animateValue(setLanguages, 20, 1500);
  }, []);

  const animateValue = (setter, end, duration) => {
    let start = 0;
    let increment = end / (duration / 20); // 20ms per frame
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setter(end);
        clearInterval(timer);
      } else {
        setter(Math.floor(start));
      }
    }, 20);
  };

  return (
    <div className="bg-[#F5F5F5] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 p-4 gap-10">
      {/* Customers */}
      <div className="flex flex-row">
        <div className="m-5">
          <FontAwesomeIcon icon={faUsers} className="text-[#41A5B0]" size="3x" />
        </div>
        <div className="m-5 ml-0">
          <p className="capitalize text-lg">
            <span className="text-2xl">{customers}+</span>
            <br />
            happy customers
          </p>
        </div>
      </div>

      {/* Projects */}
      <div className="flex flex-row">
        <div className="m-5">
          <FontAwesomeIcon icon={faFolderOpen} className="text-[#41A5B0]" size="3x" />
        </div>
        <div className="m-5 ml-0">
          <p className="capitalize text-lg">
            <span className="text-2xl">{projects}+</span>
            <br />
            Websites and apps
          </p>
        </div>
      </div>

      {/* Years */}
      <div className="flex flex-row">
        <div className="m-5">
          <FontAwesomeIcon icon={faBriefcase} className="text-[#41A5B0]" size="3x" />
        </div>
        <div className="m-5 ml-0">
          <p className="capitalize text-lg">
            <span className="text-2xl">{years} years</span>
            <br />
            Experience
          </p>
        </div>
      </div>

      {/* Languages */}
      <div className="flex flex-row">
        <div className="m-5">
          <FontAwesomeIcon icon={faCode} className="text-[#41A5B0]" size="3x" />
        </div>
        <div className="m-5 ml-0">
          <p className="capitalize text-lg">
            <span className="text-2xl">{languages}+</span>
            <br />
            Languages, Software & Technologies
          </p>
        </div>
      </div>
    </div>
  );
}

export default Numbers;
