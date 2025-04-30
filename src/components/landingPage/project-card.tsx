import { FC } from "react";

export interface ProjectCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  tags: readonly string[];
  liveUrl: string;
  githubUrl: string;
  projectType: string;
}

export const ProjectCard: FC<ProjectCardProps> = ({
  title,
  description,
  imageSrc,
  imageAlt,
  tags,
  liveUrl,
  githubUrl,
  projectType,
}) => {
  return (
    <div className="border rounded-lg overflow-hidden">
      <img src={imageSrc} alt={imageAlt} className="w-full h-32 object-cover" />
      <div className="p-3">
        <h3 className="text-base font-bold">{title}</h3>
        <p className="text-xs text-gray-500 line-clamp-2">{description}</p>
        <div className="flex flex-wrap gap-1 mt-1">
          {tags.map((tag) => (
            <span key={tag} className="px-1 py-0.5 text-xs bg-teal-100 text-teal-700 rounded">
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-2 flex gap-2 text-xs">
          <a href={liveUrl} className="text-teal-500 hover:underline">
            Live
          </a>
          <a href={githubUrl} className="text-teal-500 hover:underline">
            GitHub
          </a>
        </div>
        <span className="text-xs text-gray-400">{projectType}</span>
      </div>
    </div>
  );
};