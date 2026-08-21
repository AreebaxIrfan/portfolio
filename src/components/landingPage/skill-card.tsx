import type { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

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

export function SkillCard({ icon: Icon, title, description, skills, index = 0 }: SkillCardProps) {
  const gradient = iconGradients[index % iconGradients.length];
  const bgGradient = iconBgGradients[index % iconBgGradients.length];

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-xl hover:border-teal-200 transition-all duration-300"
    >
      {/* Top accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r rounded-t-2xl" style={{ background: `var(--tw-gradient-from, ${gradient})` }} />

      <div className="relative space-y-4">
        {/* Icon wrapper */}
        <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${bgGradient} group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="h-6 w-6" style={{ background: `linear-gradient(135deg, ${gradient})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }} aria-hidden="true" />
        </div>

        {/* Content */}
        <div>
          <h3 className="text-xl font-bold text-slate-900">{title}</h3>
          <p className="text-sm text-slate-600 leading-relaxed mt-1">{description}</p>
        </div>

        {/* Skills tags */}
        <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100">
          {skills.map((skill, i) => (
            <span
              key={skill}
              className="px-3 py-1 text-xs font-medium bg-slate-50 text-slate-600 rounded-lg border border-slate-200 hover:bg-teal-50 hover:text-teal-700 hover:border-teal-200 transition-all duration-200 group"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Hover glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl" />
    </motion.article>
  );
}