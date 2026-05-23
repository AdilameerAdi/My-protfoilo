import back from "../images/contact.jpg";

export default function Img() {
  return (
    <div
      className="w-full h-[220px] sm:h-[280px] md:h-[320px] bg-cover bg-center bg-no-repeat flex items-center justify-center relative"
      style={{ backgroundImage: `url(${back})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/50 to-black/30" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-2xl mx-auto">
        <p className="text-[#2dbccb] text-xs sm:text-sm font-semibold uppercase tracking-widest mb-2">
          Let's Work Together
        </p>
        <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-3">
          Contact Me for Development
        </h1>
        <p className="text-gray-200 text-sm sm:text-base md:text-lg leading-relaxed max-w-lg mx-auto">
          Have a project in mind? Feel free to reach out — I'd love to hear about your ideas and help bring them to life.
        </p>
        <div className="w-16 h-1 bg-[#41A5B0] rounded-full mx-auto mt-4" />
      </div>
    </div>
  );
}
