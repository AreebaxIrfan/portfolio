import { useState } from "react";
import { SectionHeader } from "@/components/landingPage/section-header";
import { ProjectCard } from "@/components/landingPage/project-card";
import { RESUME_DATA } from "@/data/resume-data";

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("all");

  const featuredProjects = RESUME_DATA.projects.filter(
    (project) => !project.title.includes("Coding")
  );

  // Filter projects based on activeFilter
  const filteredProjects =
    activeFilter === "all"
      ? featuredProjects
      : featuredProjects.filter((project) => {
          const techStackLower = project.techStack.map((tag) => tag.toLowerCase());
          if (activeFilter === "frontend") {
            return techStackLower.some((tag) =>
              ["next.js", "react", "html", "css", "javascript", "typescript"].includes(tag)
            );
          }
          if (activeFilter === "backend") {
            return techStackLower.some((tag) =>
              ["node.js", "mongodb", "python"].includes(tag) &&
              !tag.includes("streamlit") &&
              !tag.includes("chainlit") &&
              !tag.includes("ai")
            );
          }
          if (activeFilter === "ai") {
            return techStackLower.some((tag) =>
              ["google gemini ai", "openai sdk", "google gemini api"].includes(tag)
            );
          }
          if (activeFilter === "fullstack") {
            return (
              techStackLower.some((tag) =>
                ["next.js", "react", "html", "css", "javascript", "typescript"].includes(tag)
              ) &&
              techStackLower.some((tag) =>
                ["node.js", "mongodb", "sanity cms"].includes(tag)
              )
            );
          }
          return false;
        });

  return (
    <section id="projects" className="py-6 sm:py-8">
      <SectionHeader badge="Projects" title="Featured Work" />
      <div className="flex flex-wrap gap-2 mb-4 mt-4">
        {["all", "frontend", "backend", "ai", "fullstack"].map((filter) => (
          <button
            key={filter}
            className={`px-3 py-1 text-xs sm:text-sm border rounded-md transition-colors ${
              activeFilter === filter
                ? "bg-teal-100 text-teal-800"
                : "hover:bg-teal-50"
            }`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter.charAt(0).toUpperCase() + filter.slice(1)} {filter === "all" ? "Projects" : ""}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-2 ">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            tags={project.techStack}
            githubUrl={project.link.href}
            projectType={project.techStack.some((tag) => ["Google Gemini AI", "OpenAI SDK", "Google Gemini API"].includes(tag)
            )
              ? "ai"
              : project.techStack.some((tag) => ["Next.js", "React", "HTML", "CSS", "JavaScript", "TypeScript"].includes(tag)
              ) &&
                project.techStack.some((tag) => ["Node.js", "MongoDB", "Sanity CMS"].includes(tag))
                ? "fullstack"
                : project.techStack.some((tag) => ["Node.js", "MongoDB", "Python"].includes(tag) &&
                  !["Streamlit", "Chainlit"].includes(tag) &&
                  !tag.toLowerCase().includes("ai")
                )
                  ? "backend"
                  : "frontend"}          />
        ))}
      </div>
    
      <div className="mt-7 space-y-3">
        <h3 className="text-lg sm:text-xl font-bold text-center sm:text-left mb-2">
          Coding Challenges
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {RESUME_DATA.projects
            .filter((project) => project.title.includes("Coding"))
            .map((project) => (
              <div
                key={project.title}
                className="bg-teal-50 border border-teal-200 rounded-lg p-3 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-2">
                  <div className="h-6 w-6 rounded-full bg-teal-100 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-3 w-3"
                    >
                      {project.title.includes("100 Days") ? (
                        <>
                          <path d="M12 2v20" />
                          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                        </>
                      ) : (
                        <>
                          <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Z" />
                          <path d="M12 14a2 2 0 0 1 0-4" />
                          <path d="M12 14a2 2 0 0 0 0-4" />
                          <path d="M12 8v.5" />
                          <path d="M12 15v.5" />
                        </>
                      )}
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold">{project.title}</h4>
                    <p className="text-xs text-gray-500 line-clamp-2">{project.description}</p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
