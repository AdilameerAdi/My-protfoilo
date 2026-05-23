import Me from "../images/me.jpg";

export default function Touch({ onContactClick }) {
  return (
    <>
      <div className="py-12 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-[#41A5B0] text-sm font-semibold uppercase tracking-widest mb-2 stagger-item">
              About Me
            </p>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 section-title-underline stagger-item">
              About{" "}
              <span className="text-[#41A5B0] underline decoration-2 underline-offset-4">
                Adil Ameer
              </span>
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row gap-10 items-center">
            {/* Photo */}
            <div className="w-full lg:w-2/5 flex justify-center">
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-br from-[#41A5B0] to-[#2dbccb] rounded-2xl opacity-20 blur-sm" />
                <img
                  className="relative h-[320px] sm:h-[380px] md:h-[420px] w-[260px] sm:w-[300px] md:w-[340px] object-cover rounded-2xl shadow-2xl"
                  src={Me}
                  alt="Adil Ameer"
                  loading="lazy"
                />
                <div className="absolute -bottom-4 -right-4 bg-[#41A5B0] text-white rounded-xl px-4 py-2 shadow-lg">
                  <p className="text-sm font-bold">5+ Years</p>
                  <p className="text-xs opacity-90">Experience</p>
                </div>
              </div>
            </div>

            {/* Bio */}
            <div className="w-full lg:w-3/5">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 stagger-item">
                Hi, I'm <span className="text-[#41A5B0]">Adil Ameer</span>
              </h3>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-4 stagger-item">
                A creative and detail-oriented web designer and developer with a background in
                Software Engineering. I'm passionate about building clean, functional, and
                visually appealing websites that deliver real value to clients.
              </p>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6 stagger-item">
                I focus on creating user-friendly, marketing-driven websites that help brands
                stand out online. From the very first conversation, I work to understand your
                goals and suggest the best technical approach to bring your vision to life.
              </p>

              {/* Skills tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {["React", "WordPress", "Shopify", "E-commerce", "SEO", "UI/UX", "Mobile Apps", "Graphic Design"].map((skill, idx) => (
                  <span
                    key={skill}
                    className="bg-teal-50 text-[#41A5B0] border border-teal-200 text-sm font-medium px-3 py-1 rounded-full stagger-item"
                    style={{ animationDelay: `${idx * 0.05}s` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 flex-wrap">
                <button
                  onClick={onContactClick}
                  className="rounded-xl px-6 py-3 bg-[#41A5B0] text-white font-semibold hover:bg-[#2dbccb] transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 btn-glow stagger-item"
                >
                  Get in Touch
                </button>
                <a
                  href="https://wa.me/923007029003"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl px-6 py-3 border-2 border-[#41A5B0] text-[#41A5B0] font-semibold hover:bg-[#41A5B0] hover:text-white transition-all duration-300 stagger-item"
                >
                  WhatsApp Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
