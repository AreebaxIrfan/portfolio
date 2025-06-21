import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion"; // For animations
import { SectionHeader } from "@/components/landingPage/section-header";
import { ProjectCard } from "@/components/landingPage/project-card";
import { RESUME_DATA, Project } from "@/data/resume-data";

// Utility function to determine project type
const getProjectType = (techStack: string[]): string => {
  const techStackLower = techStack
    .filter((tag): tag is string => typeof tag === "string") // Type guard
    .map((tag) => tag.toLowerCase());

  if (techStackLower.some((tag) => ["google gemini ai", "openai sdk", "google gemini api"].includes(tag))) {
    return "ai";
  }
  if (
    techStackLower.some((tag) => ["next.js", "react", "html", "css", "javascript", "typescript"].includes(tag)) &&
    techStackLower.some((tag) => ["node.js", "mongodb", "sanity cms"].includes(tag))
  ) {
    return "fullstack";
  }
  if (
    techStackLower.some((tag) =>
      ["node.js", "mongodb", "python"].includes(tag) &&
      !["streamlit", "chainlit"].includes(tag) &&
      !tag.includes("ai")
    )
  ) {
    return "backend";
  }
  return "frontend";
};

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  // Memoize featured projects
  const featuredProjects = useMemo(
    () => RESUME_DATA.projects.filter((project) => !project.title.includes("Coding")),
    []
  );

  // Memoize filtered projects
  const filteredProjects = useMemo(
    () =>
      activeFilter === "all"
        ? featuredProjects
        : featuredProjects.filter((project) => getProjectType(project.techStack) === activeFilter),
    [activeFilter, featuredProjects]
  );

  // Handle filter button click with accessibility
  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
  };

  return (
    <section id="projects" className="py-8 sm:py-12" aria-labelledby="projects-heading">
      <SectionHeader badge="Projects" title="Featured Work" id="projects-heading" />
      <nav className="flex flex-wrap gap-2 mb-6 mt-4" aria-label="Project filters">
        {["all", "frontend", "backend", "ai", "fullstack"].map((filter) => (
          <button
            key={filter}
            className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 ${
              activeFilter === filter
                ? "bg-teal-500 text-white shadow-md"
                : "bg-gray-100 text-gray-700 hover:bg-teal-100 hover:text-teal-800"
            }`}
            onClick={() => handleFilterClick(filter)}
            aria-pressed={activeFilter === filter}
            aria-label={`Filter by ${filter} projects`}
          >
            {filter.charAt(0).toUpperCase() + filter.slice(1)} {filter === "all" ? "Projects" : ""}
          </button>
        ))}
      </nav>
      <AnimatePresence>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          role="region"
          aria-live="polite"
        >
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  tags={project.techStack}
                  githubUrl={project.link.href}
                  projectType={getProjectType(project.techStack)}
                />
              </motion.div>
            ))
          ) : (
            <motion.div
              className="col-span-full text-center text-gray-600 py-8 text-sm sm:text-base"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              No projects found for this filter.
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>

      <div className="mt-10 space-y-4" aria-labelledby="coding-challenges-heading">
        <h3
          id="coding-challenges-heading"
          className="text-xl sm:text-2xl font-bold text-center sm:text-left"
        >
          Coding Challenges
        </h3>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {RESUME_DATA.projects
            .filter((project) => project.title.includes("Coding"))
            .map((project) => (
              <motion.div
                key={project.title}
                className="bg-teal-50 border border-teal-200 rounded-lg p-4 hover:shadow-lg transition-shadow duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                tabIndex={0}
                role="article"
              >
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-teal-100 flex items-center justify-center">
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
                      className="h-4 w-4 text-teal-600"
                      aria-hidden="true"
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
                    <h4 className="text-sm sm:text-base font-semibold text-gray-800">{project.title}</h4>
                    <p className="text-xs sm:text-sm text-gray-600 line-clamp-2">{project.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
        </motion.div>
      </div>
    </section>
  );
}
