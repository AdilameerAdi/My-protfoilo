import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRocket,
  faBuilding,
  faHandshake,
} from "@fortawesome/free-solid-svg-icons";

export default function Collab() {
  return (
    <div className="p-8 bg-gray-50">
      <h1 className="text-3xl font-bold text-center mb-6">
        Partners & Clients <span className="text-[#2dbccb] text-4xl">I Empower</span>
      </h1>
      <p className="text-center max-w-2xl mx-auto mb-10 text-lg text-gray-600">
        I have partnered with numerous design agencies in both lead and senior
        developer roles, approaching every project with meticulous attention to
        detail and a drive to exceed expectations. Alongside working directly
        with clients and their businesses, I also take on contract projects
        across various countries, becoming an extension of your agency or
        in-house team.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition group">
          <FontAwesomeIcon
            icon={faRocket}
            size="2x"
            className=" group-hover:text-blue-500 mb-4"
          />
          <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-500">Startups</h3>
          <p className="text-gray-600">
            I collaborate with startups ready to make their mark in the digital
            space. My focus is on building strong, long-term relationships that
            help new businesses grow, thrive, and stand out online.
          </p>
        </div>

        <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition group">
          <FontAwesomeIcon
            icon={faBuilding}
            size="2x"
            className="group-hover:text-green-500 mb-4"
          />
          <h3 className="text-xl font-semibold mb-2 group-hover:text-green-500">Companies</h3>
          <p className="text-gray-600">
            If you already have a website but believe it could achieve more, I
            can help transform it into a more effective, engaging, and
            results-driven platform. I work with companies of all sizes to
            deliver creative digital solutions that match their goals.
          </p>
        </div>

        <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition group">
          <FontAwesomeIcon
            icon={faHandshake}
            size="2x"
            className="group-hover:text-yellow-500 mb-4"
          />
          <h3 className="text-xl font-semibold mb-2 group-hover:text-yellow-500 ">Agencies</h3>
          <p className="text-gray-600">
            I provide white-label design and development services for agencies,
            seamlessly integrating into your workflow. Whether you need an extra
            pair of expert hands or want to expand your service offerings, I’m
            here to help.
          </p>
        </div>
      </div>
    </div>
  );
}
