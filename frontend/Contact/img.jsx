import back from "../images/contact.jpg";

export default function Img() {
  return (
    <div
      className="w-full h-[150px] sm:h-[180px] md:h-[200px] mt-3 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${back})`,
      }}
    >
      <div className="p-4 md:p-8">
        <h1 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold capitalize text-white leading-tight">
          Contact me for Development
        </h1>
        <h2 className="text-center w-full md:w-3/4 lg:w-1/2 mx-auto capitalize text-sm sm:text-lg md:text-xl border-b-2 border-amber-200 border-dashed text-white leading-relaxed mt-2">
          If you have any query, Please feel free to contact me any time for my
          services.
        </h2>
      </div>
    </div>
  );
}
