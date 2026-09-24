import type { CSSProperties } from "react";
import { Zap, Bot, Award, Users, BookOpen, Heart } from "lucide-react";

const highlights = [
  { Icon: Zap, title: "Experience", description: "Started 2023 · Professional Aug 2024", gradient: "from-emerald-500 to-teal-500", bgGradient: "from-emerald-500/10 to-teal-500/10", iconColor: "text-emerald-600" },
  { Icon: Bot, title: "AI Projects", description: "15+ AI-powered applications deployed", gradient: "from-violet-500 to-purple-500", bgGradient: "from-violet-500/10 to-purple-500/10", iconColor: "text-violet-600" },
  { Icon: Award, title: "Hackathons & Challenges", description: "Hackathon-I & II + e-commerce builds", gradient: "from-amber-500 to-orange-500", bgGradient: "from-amber-500/10 to-orange-500/10", iconColor: "text-amber-600" },
  { Icon: Users, title: "Mentoring", description: "Helped 50+ peers with coding fundamentals", gradient: "from-rose-500 to-pink-500", bgGradient: "from-rose-500/10 to-pink-500/10", iconColor: "text-rose-600" },
  { Icon: BookOpen, title: "Learning", description: "100+ days of continuous coding practice", gradient: "from-sky-500 to-blue-500", bgGradient: "from-sky-500/10 to-blue-500/10", iconColor: "text-sky-600" },
  { Icon: Heart, title: "Open Source", description: "Active contributor to community projects", gradient: "from-teal-500 to-cyan-500", bgGradient: "from-teal-500/10 to-cyan-500/10", iconColor: "text-teal-600" },
];

export function HighlightsSection() {
  return (
    <section
      id="highlights"
      className="py-8 sm:py-12 lg:py-16"
      aria-label="Key highlights"
    >
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
        {highlights.map((highlight, index) => (
          <article
            key={highlight.title}
            data-reveal
            style={{ "--reveal-delay": `${index * 60}ms` } as CSSProperties}
            className="group relative rounded-2xl border border-slate-200 bg-white p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-teal-300 hover:shadow-xl"
          >
            <div
              className={`absolute top-0 right-0 left-0 h-1 rounded-t-2xl bg-gradient-to-r ${highlight.gradient}`}
              aria-hidden="true"
            />

            <div className="relative space-y-3">
              <div
                className={`mx-auto inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br transition-transform duration-300 group-hover:scale-110 ${highlight.bgGradient}`}
              >
                <highlight.Icon className={`h-7 w-7 ${highlight.iconColor}`} aria-hidden="true" />
              </div>

              <h3 className="text-lg font-bold text-slate-900">{highlight.title}</h3>
              <p className="text-sm leading-relaxed text-slate-600">{highlight.description}</p>
            </div>

            <div
              className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-tr from-teal-500/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              aria-hidden="true"
            />
          </article>
        ))}
      </div>
    </section>
  );
}
