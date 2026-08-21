import { ArrowRight, MapPin } from "lucide-react";
import { RESUME_DATA } from "@/data/resume-data";
import { motion } from "framer-motion";

export function HeroSection() {
  const highlights = [
    { title: "Experience", description: "3+ years", icon: "💼", gradient: "from-emerald-500 to-teal-500" },
    { title: "Projects", description: "30+ built", icon: "🚀", gradient: "from-violet-500 to-purple-500" },
    { title: "Hackathons", description: "3+ attended", icon: "🏆", gradient: "from-amber-500 to-orange-500" },
    { title: "Mentoring", description: "50+ peers helped", icon: "🤝", gradient: "from-rose-500 to-pink-500" },
    { title: "Languages", description: "English, Urdu", icon: "🗣️", gradient: "from-sky-500 to-blue-500" },
    { title: "Passion", description: "Code, Write, Learn", icon: "🎓", gradient: "from-teal-500 to-cyan-500" },
  ];

  return (
    <section id="about" className="relative py-10 sm:py-14 lg:py-20 overflow-hidden" aria-labelledby="about-heading">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-20" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-teal-500/10 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="container mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="flex flex-col items-center justify-between gap-10 md:flex-row md:items-center lg:gap-14">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="flex-1 text-center md:text-left max-w-2xl"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50 border border-teal-100 text-teal-700 text-sm font-medium mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500" />
              </span>
              Available for opportunities
            </motion.div>

            {/* Name & Tagline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-tight"
            >
              {RESUME_DATA.name}
              <br />
              <span className="bg-gradient-to-r from-teal-600 via-cyan-500 to-blue-500 bg-clip-text text-transparent">
                Building thoughtful digital experiences.
              </span>
            </motion.h1>

            {/* Summary */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6 max-w-xl text-base sm:text-lg text-slate-600 leading-relaxed font-medium"
            >
              {RESUME_DATA.summary}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8 flex flex-wrap items-center justify-center gap-3 md:justify-start"
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-lg hover:shadow-slate-900/25 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
              >
                View Projects
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </a>
              <a
                href={`mailto:${RESUME_DATA.contact.email}`}
                className="inline-flex items-center gap-2 rounded-full border-2 border-slate-200 bg-white px-6 py-3 text-sm font-medium text-slate-700 transition-all duration-200 hover:border-teal-400 hover:text-teal-600 hover:bg-teal-50 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email Me
              </a>
            </motion.div>

            {/* Location & Social */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-10 flex flex-col items-center gap-4 md:items-start"
            >
              <div className="flex items-center gap-2.5 text-sm text-slate-600">
                <MapPin className="h-4 w-4 text-teal-500 flex-shrink-0" aria-hidden="true" />
                <a
                  href={RESUME_DATA.locationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-teal-600 hover:underline transition-colors font-medium"
                >
                  {RESUME_DATA.location}
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative flex items-center justify-center shrink-0"
          >
            {/* Image wrapper */}
            <div className="relative h-44 w-44 sm:h-52 sm:w-52 md:h-60 md:w-60 lg:h-64 lg:w-64 overflow-hidden rounded-full border-4 border-white/80 shadow-2xl shadow-teal-500/20">
              <img
                src={RESUME_DATA.avatarUrl}
                alt={`${RESUME_DATA.name}'s Profile Picture`}
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Stats Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6 max-w-4xl mx-auto"
          role="list"
          aria-label="Key highlights"
        >
          {highlights.map((highlight, index) => (
            <motion.article
              key={highlight.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.8 + index * 0.05 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="group relative rounded-2xl p-4 sm:p-5 text-center bg-white/70 backdrop-blur-sm border border-slate-200/50 hover:border-teal-200 hover:shadow-xl transition-all duration-300"
              role="listitem"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r rounded-t-2xl" style={{ background: `var(--tw-gradient-from, ${highlight.gradient})` }} aria-hidden="true" />

              <div className="relative mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl" style={{ background: `linear-gradient(135deg, ${highlight.gradient.replace("500", "50").replace("500", "100")})` }}>
                <span className="text-2xl" aria-hidden="true">{highlight.icon}</span>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r opacity-0 group-hover:opacity-20 transition-opacity" style={{ background: `var(--tw-gradient-from, ${highlight.gradient})` }} aria-hidden="true" />
              </div>

              <p className="text-xs font-bold uppercase tracking-[0.1em] text-teal-700 mb-1">{highlight.title}</p>
              <p className="text-sm font-semibold text-slate-800 leading-tight">{highlight.description}</p>
            </motion.article>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}