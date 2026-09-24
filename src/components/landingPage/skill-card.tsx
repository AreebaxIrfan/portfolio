import type { CSSProperties } from "react";
import type { LucideIcon } from "lucide-react";

interface SkillCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  skills: string[];
  index?: number;
}

const iconGradients = [
  "from-teal-500 to-cyan-500",
  "from-emerald-500 to-teal-500",
  "from-violet-500 to-purple-500",
  "from-amber-500 to-orange-500",
  "from-rose-500 to-pink-500",
  "from-sky-500 to-blue-500",
];

const iconBgGradients = [
  "from-teal-500/10 to-cyan-500/10",
  "from-emerald-500/10 to-teal-500/10",
  "from-violet-500/10 to-purple-500/10",
  "from-amber-500/10 to-orange-500/10",
  "from-rose-500/10 to-pink-500/10",
  "from-sky-500/10 to-blue-500/10",
];

const iconColors = [
  "text-teal-600",
  "text-emerald-600",
  "text-violet-600",
  "text-amber-600",
  "text-rose-600",
  "text-sky-600",
];

export function SkillCard({ icon: Icon, title, description, skills, index = 0 }: SkillCardProps) {
  const gradient = iconGradients[index % iconGradients.length];
  const bgGradient = iconBgGradients[index % iconBgGradients.length];
  const iconColor = iconColors[index % iconColors.length];

  return (
    <article
      data-reveal
      style={{ "--reveal-delay": `${index * 60}ms` } as CSSProperties}
      className="group relative rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-teal-300 hover:shadow-xl"
    >
      {/* Top accent */}
      <div
        className={`absolute top-0 right-0 left-0 h-1 rounded-t-2xl bg-gradient-to-r ${gradient}`}
        aria-hidden="true"
      />

      <div className="relative space-y-4">
        {/* Icon wrapper */}
        <div
          className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br transition-transform duration-300 group-hover:scale-110 ${bgGradient}`}
        >
          <Icon className={`h-6 w-6 ${iconColor}`} aria-hidden="true" />
        </div>

        {/* Content */}
        <div>
          <h3 className="text-xl font-bold text-slate-900">{title}</h3>
          <p className="mt-1 text-sm leading-relaxed text-slate-600">{description}</p>
        </div>

        {/* Skills tags */}
        <div className="flex flex-wrap gap-2 border-t border-slate-100 pt-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600 transition-colors duration-200 hover:border-teal-200 hover:bg-teal-50 hover:text-teal-700"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Hover glow */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-tr from-teal-500/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden="true"
      />
    </article>
  );
}
