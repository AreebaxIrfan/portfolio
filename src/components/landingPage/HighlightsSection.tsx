import { motion } from "framer-motion";
import { Zap, Bot, Award, Users, BookOpen, Heart } from "lucide-react";

const highlights = [
  { Icon: Zap, title: "Experience", description: "3+ years building production applications", gradient: "from-emerald-500 to-teal-500", bgGradient: "from-emerald-500/10 to-teal-500/10" },
  { Icon: Bot, title: "AI Projects", description: "15+ AI-powered applications deployed", gradient: "from-violet-500 to-purple-500", bgGradient: "from-violet-500/10 to-purple-500/10" },
  { Icon: Award, title: "Hackathons", description: "3+ hackathons participated & awarded", gradient: "from-amber-500 to-orange-500", bgGradient: "from-amber-500/10 to-orange-500/10" },
  { Icon: Users, title: "Mentoring", description: "Helped 50+ peers with coding fundamentals", gradient: "from-rose-500 to-pink-500", bgGradient: "from-rose-500/10 to-pink-500/10" },
  { Icon: BookOpen, title: "Learning", description: "100+ days of continuous coding practice", gradient: "from-sky-500 to-blue-500", bgGradient: "from-sky-500/10 to-blue-500/10" },
  { Icon: Heart, title: "Open Source", description: "Active contributor to community projects", gradient: "from-teal-500 to-cyan-500", bgGradient: "from-teal-500/10 to-cyan-500/10" },
];

export function HighlightsSection() {
  return (
    <section id="highlights" className="py-8 sm:py-12 lg:py-16" aria-labelledby="highlights-heading">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 sm:gap-5 mt-8">
        {highlights.map((highlight, index) => (
          <motion.article
            key={highlight.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative bg-white border border-slate-200 rounded-2xl p-6 text-center hover:shadow-xl hover:border-teal-200 transition-all duration-300"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r rounded-t-2xl" style={{ background: `var(--tw-gradient-from, ${highlight.gradient})` }} aria-hidden="true" />

            <div className="relative space-y-3">
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${highlight.bgGradient} group-hover:scale-110 transition-transform duration-300 mx-auto`}>
                <highlight.Icon className="h-7 w-7" style={{ background: `linear-gradient(135deg, ${highlight.gradient})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }} aria-hidden="true" />
              </div>

              <h3 className="text-lg font-bold text-slate-900">{highlight.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{highlight.description}</p>
            </div>

            <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl" />
          </motion.article>
        ))}
      </div>
    </section>
  );
}