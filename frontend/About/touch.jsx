import Me from "../images/me.jpg"
import { useNavigate } from "react-router-dom";

export default function Touch() {
  const navigate = useNavigate();

  const handleGetInTouch = () => {
    navigate("/");
    // You can add logic here to set the active tab to Contact when the main page loads
  };

  return (
    <>
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl w-11/12 mx-auto mt-5 mb-5 text-center leading-tight">
        About{" "}
        <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#41A5B0] underline decoration-1">
          Adil Ameer
        </span>
      </h1>
      <div className="px-4 md:px-8 lg:px-0">
        <div className="w-full mx-auto flex flex-col lg:flex-row border-1-dotted border-b mb-3">
        <div className="w-full lg:w-1/2 p-3 flex justify-center lg:justify-start">
          <img className="h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] w-[200px] sm:w-[250px] md:w-[300px] lg:w-[350px] object-cover rounded-lg" src={Me} alt="Adil Ameer" />
        </div>
        <div className="w-full lg:w-1/2 p-3 lg:p-0">
          <p className="text-base sm:text-lg md:text-xl leading-relaxed">
            My name is <span className="font-bold">Adil Ameer</span>, a creative and detail-oriented web designer
            and developer with a background in Software Engineering. I'm
            passionate about building clean, functional, and visually appealing
            websites that deliver real value to clients. I focus on creating
            user-friendly, marketing-driven websites that help brands stand out
            online. <br /> <br /> From the very first conversation, I work to understand your
            goals and suggest the best technical approach to bring your vision
            to life. I also enjoy exploring website structure and design
            strategies to ensure every project is built for both performance and
            impact.
          </p>
          <button 
            onClick={handleGetInTouch}
            className="mt-4 rounded-3xl p-3 md:p-4 border-2 mb-2 border-[#41A5B0] text-[#41A5B0] capitalize text-lg md:text-xl hover:bg-[#41A5B0] hover:text-white transform duration-500 transition w-full sm:w-auto"
          >
            Get in Touch
          </button>
        </div>
        </div>
      </div>
      
    </>
  );
}
