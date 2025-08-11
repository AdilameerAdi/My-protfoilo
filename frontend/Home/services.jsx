import back from "../images/back.jpg";

export default function Services() {
  return (
    <div
      style={{ backgroundImage: `url(${back})` }}
      className="w-full min-h-[400px] md:h-[500px] lg:h-[600px] bg-no-repeat bg-cover bg-center rounded-2xl border-2 border-red-200 mx-4 md:mx-8 lg:mx-0"
    >
      <style>
        {`
          div {
            background-size: cover;
          }
        `}
      </style>
      <div className="w-full md:w-3/4 lg:w-1/2 mt-8 md:mt-16 lg:mt-20 px-4 md:px-8 lg:px-0">
        <h1 className="text-center text-[#41A5B0] text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
          Welcome to My Online Desk!
        </h1>
        <h2 className="text-center text-lg sm:text-xl md:text-2xl text-amber-700 p-3 leading-relaxed">
          Explore my range of professional web development services designed to
          bring your ideas to life.
        </h2>
        <p className="text-base sm:text-lg md:text-xl pl-2 md:pl-5 text-center leading-relaxed">
          I'm <span className="text-xl sm:text-2xl font-medium">Adil Ameer</span>, a
          freelance web developer from Pakistan with 2 years of hands-on
          experience in creating modern, responsive, and user-friendly websites.
          Over this time, I've worked with clients from different parts of the
          world, delivering solutions that combine creativity, functionality,
          and clean design. From business websites to personal portfolios, I've
          built a reputation for delivering professional, reliable, and visually
          appealing work that helps brands stand out online.
        </p>
        <button className="rounded-2xl p-3 md:p-4 bg-[#41A5B0] mx-auto block hover:bg-yellow-50 hover:font-bold hover:text-lg md:hover:text-xl transition hover:underline decoration-amber-600 transform duration-700 hover:cursor-pointer mt-4 text-sm md:text-base">
          More Services
        </button>
      </div>
    </div>
  );
}
