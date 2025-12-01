import About from "../images/aboutme.png";
export default function Aboutme() {
  return (
    <>
      <div>
        <img className="h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] w-full object-cover" src={About} alt="" />
        <h1 className="text-center text-lg sm:text-xl md:text-2xl lg:text-3xl mx-4 sm:mx-8 md:mx-20 lg:mx-40 mt-2 leading-relaxed px-4">
          "I specialize in crafting distinctive, tailor-made websites that
          perfectly align with the vision and goals of clients and agencies
          alike."
        </h1>
      </div>
    </>
  );
}
