import { SectionHeader } from "@/components/landingPage/section-header";
import { ProjectCard } from "@/components/landingPage/project-card";
import { RESUME_DATA } from "@/data/resume-data";

export function ProjectsSection() {
  const featuredProjects = RESUME_DATA.projects.filter(
    (project) => !project.title.includes("Coding")
  ); // Removed .slice(0, 6) to show all non-coding projects

  return (
    <section id="projects" className="space-y-4">
      <SectionHeader badge="Projects" title="Featured Work" />
      <div className="flex flex-wrap gap-1 mb-2">
        {["all", "frontend", "backend", "ai", "fullstack"].map((filter) => (
          <button
            key={filter}
            className="px-2 py-0.5 text-xs border rounded-md hover:bg-teal-50 transition-colors"
            data-filter={filter}
          >
            {filter.charAt(0).toUpperCase() + filter.slice(1)} {filter === "all" ? "Projects" : ""}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {featuredProjects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc="/placeholder.svg?height=128&width=256"
            imageAlt={project.title}
            tags={project.techStack}
            liveUrl={project.link.href}
            githubUrl={project.link.href}
            projectType={
              project.techStack.some((tag) => tag.toLowerCase().includes("frontend"))
                ? "frontend"
                : project.techStack.some((tag) => tag.toLowerCase().includes("backend"))
                ? "backend"
                : project.techStack.some((tag) => tag.toLowerCase().includes("ai"))
                ? "ai"
                : "fullstack"
            }
          />
        ))}
      </div>
      {/* Optionally remove or modify the "View All" button since all projects are shown */}
      <div className="flex justify-center pt-2">
        <a
          href="#projects"
          className="inline-flex items-center gap-1 px-3 py-1 border rounded-md hover:bg-teal-50 transition-colors text-sm"
        >
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
            <rect width="18" height="18" x="3" y="3" rx="2" />
            <path d="M7 7h10" />
            <path d="M7 12h10" />
            <path d="M7 17h10" />
          </svg>
          View All {featuredProjects.length} Projects
        </a>
      </div>
      <div className="mt-6 space-y-3">
        <h3 className="text-xl font-bold">Coding Challenges</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {RESUME_DATA.projects
            .filter((project) => project.title.includes("Coding"))
            .map((project) => (
              <div key={project.title} className="p-3 border rounded-lg">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-teal-100 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
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
                    <h4 className="text-sm font-bold">{project.title}</h4>
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