import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

interface TimelineItemProps {
  date: string;
  title: string;
  institution: string;
  description: string;
  type?: "education" | "experience";
  index?: number;
}

const typeStyles = {
  education: {
    dotColor: "bg-teal-500",
    dotRing: "ring-teal-500/20",
    accentColor: "bg-gradient-to-r from-teal-500 to-cyan-500",
    badgeBg: "bg-teal-50",
    badgeText: "text-teal-700",
    badgeBorder: "border-teal-100",
  },
  experience: {
    dotColor: "bg-emerald-500",
    dotRing: "ring-emerald-500/20",
    accentColor: "bg-gradient-to-r from-emerald-500 to-teal-500",
    badgeBg: "bg-emerald-50",
    badgeText: "text-emerald-700",
    badgeBorder: "border-emerald-100",
  },
};

export function TimelineItem({ date, title, institution, description, type = "education", index = 0 }: TimelineItemProps) {
  const styles = typeStyles[type];

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative group"
    >
      {/* Timeline line */}
      <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-slate-200" aria-hidden="true" />
      <div className="absolute left-6 top-0 bottom-1/2 w-0.5 bg-gradient-to-b from-teal-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />

      {/* Timeline dot */}
      <div className="absolute left-0 top-6 flex items-center justify-center">
        <div className={`relative z-10 h-4 w-4 rounded-full ${styles.dotColor} ring-4 ring-white ${styles.dotRing} shadow-lg transition-all duration-300 group-hover:scale-125`} aria-hidden="true" />
      </div>

      {/* Card content */}
      <div className="ml-14 relative bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 hover:shadow-xl hover:border-teal-200 transition-all duration-300">
        {/* Accent bar */}
        <div className={`absolute top-0 left-0 right-0 h-1 rounded-t-2xl ${styles.accentColor}`} aria-hidden="true" />

        <div className="space-y-3">
          {/* Date badge */}
          <Badge variant="outline" className={`${styles.badgeBg} ${styles.badgeText} ${styles.badgeBorder} text-xs font-medium px-3 py-1`}>
            {date}
          </Badge>

          {/* Title */}
          <h3 className="text-lg sm:text-xl font-bold text-slate-900">{title}</h3>

          {/* Institution */}
          <p className="text-sm text-slate-600 flex items-center gap-1.5">
            <svg className="h-4 w-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            {institution}
          </p>

          {/* Description */}
          {description && (
            <p className="text-sm text-slate-500 leading-relaxed pt-1 border-t border-slate-100">{description}</p>
          )}
        </div>
      </div>
    </motion.div>
  );
}