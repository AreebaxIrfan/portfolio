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
  tags,
  githubUrl,
  projectType,
}) => {
  return (
    <div className="border rounded-lg overflow-hidden">
      <div className="p-2 flex flex-col justify-evenly">
      <a href={githubUrl} className="hover:underline">
          
        <h3 className="text-base font-bold pb-2 ">{title}</h3>
          </a>
        <p className="text-xs text-gray-500 line-clamp-2 pb-3">{description}</p>
        <div className="flex flex-wrap gap-1 mt-3">
          {tags.map((tag) => (
            <span key={tag} className="px-1 py-0.5 text-xs bg-teal-100 text-teal-700 rounded">
              {tag}
            </span>
          ))}
        </div>
        <span className="text-xs text-gray-400 pt-2 capitalize">{projectType}</span>
      </div>
    </div>
  );
};
