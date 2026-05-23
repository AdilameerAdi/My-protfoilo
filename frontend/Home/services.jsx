import back from "../images/back.jpg";

export default function Services() {
  return (
    <div
      style={{ backgroundImage: `url(${back})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}
      className="w-full min-h-[420px] md:min-h-[520px] lg:min-h-[600px] flex items-center"
    >
      <div className="w-full md:w-3/4 lg:w-1/2 px-6 sm:px-10 md:px-14 py-14">
        <p className="text-[#2dbccb] text-sm font-semibold uppercase tracking-widest mb-2">
          Welcome
        </p>
        <h1 className="text-[#41A5B0] text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-4">
          Welcome to My Online Desk!
        </h1>
        <h2 className="text-lg sm:text-xl md:text-2xl text-amber-600 mb-4 leading-relaxed font-medium">
          Explore professional web development services designed to bring your ideas to life.
        </h2>
        <p className="text-gray-800 text-base sm:text-lg leading-relaxed mb-6 bg-white/70 rounded-xl p-4">
          I'm <span className="text-xl font-bold text-gray-900">Adil Ameer</span>, a freelance
          web developer from Pakistan with 5+ years of hands-on experience building modern,
          responsive, and user-friendly websites. I've worked with clients worldwide — delivering
          solutions that blend creativity, functionality, and clean design. From business websites
          to personal portfolios, I'm trusted for professional, reliable, and visually impactful work.
        </p>
        <div className="flex gap-4 flex-wrap">
          <a
            href="#services"
            className="rounded-xl px-6 py-3 bg-[#41A5B0] text-white font-semibold hover:bg-[#2dbccb] transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105"
          >
            Explore Services
          </a>
          <a
            href="https://wa.me/923007029003"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl px-6 py-3 border-2 border-[#41A5B0] text-[#41A5B0] font-semibold hover:bg-[#41A5B0] hover:text-white transition-all duration-300"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
