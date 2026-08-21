import { FC } from "react";
import { ExternalLink, Github } from "lucide-react";

export interface ProjectCardProps {
  title: string;
  description: string;
  tags: readonly string[];
  githubUrl: string;
  projectType: string;
  liveUrl?: string;
}

export const ProjectCard: FC<ProjectCardProps> = ({
  title,
  description,
  tags,
  githubUrl,
  projectType,
  liveUrl,
}) => {
  // Determine card accent color based on project type
  const typeColors: Record<string, { bg: string; text: string; border: string; icon: string }> = {
    ai: { bg: "bg-purple-50", text: "text-purple-700", border: "border-purple-200", icon: "🤖" },
    fullstack: { bg: "bg-emerald-50", text: "text-emerald-700", border: "border-emerald-200", icon: "⚡" },
    frontend: { bg: "bg-sky-50", text: "text-sky-700", border: "border-sky-200", icon: "🎨" },
    backend: { bg: "bg-amber-50", text: "text-amber-700", border: "border-amber-200", icon: "⚙️" },
  };

  const colors = typeColors[projectType] || typeColors.frontend;

  return (
    <article className={`group relative border rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl ${colors.border} bg-white`}>
      {/* Top accent bar */}
      <div className={`h-1 ${colors.bg.replace("50", "500")}`} />

      <div className="p-5 sm:p-6">
        {/* Project type badge */}
        <div className="flex items-center gap-2 mb-3">
          <span className={`px-2.5 py-1 text-xs font-semibold rounded-full ${colors.bg} ${colors.text}`}>
            {colors.icon} {projectType.charAt(0).toUpperCase() + projectType.slice(1)}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-teal-600 transition-colors duration-200 mb-3 leading-tight">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm sm:text-base text-slate-600 line-clamp-3 mb-4 leading-relaxed">
          {description}
        </p>

        {/* Tech stack tags */}
        <div className="flex flex-wrap gap-2 mb-4" role="list" aria-label="Technologies used">
          {tags.slice(0, 6).map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 text-xs font-medium bg-slate-50 text-slate-600 rounded-lg border border-slate-200 hover:bg-teal-50 hover:text-teal-700 hover:border-teal-200 transition-all duration-200"
              role="listitem"
            >
              {tag}
            </span>
          ))}
          {tags.length > 6 && (
            <span className="px-2.5 py-1 text-xs font-medium bg-slate-100 text-slate-500 rounded-lg border border-slate-200">
              +{tags.length - 6} more
            </span>
          )}
        </div>

        {/* Action links */}
        <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-100">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-white bg-teal-600 rounded-lg hover:bg-teal-700 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
              aria-label={`View live demo of ${title}`}
            >
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
              Live Demo
            </a>
          )}
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 hover:border-teal-400 hover:text-teal-600 hover:shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
            aria-label={`View source code of ${title}`}
          >
            <Github className="h-4 w-4" aria-hidden="true" />
            Code
          </a>
        </div>
      </div>

      {/* Subtle hover glow effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-teal-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl" />
    </article>
  );
};