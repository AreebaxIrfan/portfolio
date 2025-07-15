import { FC } from "react";

export interface ProjectCardProps {
  title: string;
  description: string;
  tags: readonly string[];
  githubUrl: string;
  projectType: string;
}

export const ProjectCard: FC<ProjectCardProps> = ({
  title,
  description,
  tags,
  githubUrl,
  projectType,
}) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-sm transition-shadow hover:shadow-md">
      <a
        href={githubUrl}
        className="block p-4 group focus:outline-none focus:ring-2 focus:ring-teal-500"
      >
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold text-gray-800 group-hover:text-teal-600 transition-colors">
            {title}
          </h3>
          <p className="text-sm text-gray-600 line-clamp-2 mt-2 mb-3">{description}</p>
          <div className="flex flex-wrap gap-2 mb-3">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs font-medium bg-teal-100 text-teal-800 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          <span className="text-xs text-gray-500 capitalize">{projectType}</span>
        </div>
      </a>
    </div>
  );
};