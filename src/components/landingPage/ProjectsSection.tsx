import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeader } from "@/components/landingPage/section-header";
import { ProjectCard } from "@/components/landingPage/project-card";
import { RESUME_DATA, Project } from "@/data/resume-data";

// Utility function to determine project type
const getProjectType = (techStack: string[]): string => {
  const techStackLower = techStack
    .filter((tag): tag is string => typeof tag === "string")
    .map((tag) => tag.toLowerCase());
  if (techStackLower.some((tag) => ["google gemini ai", "openai sdk", "google gemini api", "agentic ai", "openai agents sdk"].includes(tag))) {
    return "ai";
  }
  if (
    techStackLower.some((tag) => ["next.js", "react", "html", "css", "javascript", "typescript"].includes(tag)) &&
    techStackLower.some((tag) => ["node.js", "mongodb", "sanity cms", "full-stack", "fullstack"].includes(tag))
  ) {
    return "fullstack";
  }
  if (
    techStackLower.some((tag) =>
      ["node.js", "mongodb", "python", "fastapi"].includes(tag) &&
      !["streamlit", "chainlit"].includes(tag) &&
      !tag.includes("ai")
    )
  ) {
    return "backend";
  }
  return "frontend";
};

// Utility to find live URL for a project
const getLiveUrl = (project: Project): string | undefined => {
  const href = project.link.href;
  // Check if it's a vercel/app deployment URL
  if (href.includes("vercel.app") || href.includes("streamlit.app") || href.includes(".vercel.app")) {
    return href;
  }
  // Check for other known live deployment patterns
  if (href.startsWith("https://") && !href.includes("github.com")) {
    return href;
  }
  return undefined;
};

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  // Memoize featured projects (exclude coding challenges)
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

  const filterOptions = [
    { value: "all", label: "All Projects", count: featuredProjects.length },
    { value: "ai", label: "AI & ML", count: featuredProjects.filter(p => getProjectType(p.techStack) === "ai").length },
    { value: "fullstack", label: "Full Stack", count: featuredProjects.filter(p => getProjectType(p.techStack) === "fullstack").length },
    { value: "frontend", label: "Frontend", count: featuredProjects.filter(p => getProjectType(p.techStack) === "frontend").length },
    { value: "backend", label: "Backend", count: featuredProjects.filter(p => getProjectType(p.techStack) === "backend").length },
  ];

  return (
    <section id="projects" className="py-8 sm:py-12 lg:py-16" aria-labelledby="projects-heading">
      <SectionHeader badge="Projects" title="Featured Work" subtitle="A curated selection of projects showcasing full-stack development, AI integration, and creative problem-solving." />

      {/* Filter tabs */}
      <nav className="flex flex-wrap gap-2 mb-8 mt-4 justify-center" aria-label="Project filters" role="tablist">
        {filterOptions.map((filter) => (
          <button
            key={filter.value}
            role="tab"
            aria-selected={activeFilter === filter.value}
            aria-controls={`panel-${filter.value}`}
            id={`tab-${filter.value}`}
            onClick={() => handleFilterClick(filter.value)}
            className={`px-4 py-2.5 text-sm font-medium rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 ${
              activeFilter === filter.value
                ? "bg-teal-600 text-white shadow-lg"
                : "bg-white text-slate-600 border border-slate-200 hover:border-teal-300 hover:text-teal-600 hover:shadow-sm"
            }`}
          >
            {filter.label}
            <span className={`ml-2 px-2 py-0.5 text-xs font-semibold rounded-full ${
              activeFilter === filter.value
                ? "bg-teal-500/20 text-teal-300"
                : "bg-slate-100 text-slate-500"
            }`}>
              {filter.count}
            </span>
          </button>
        ))}
      </nav>

      {/* Projects Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeFilter}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          role="tabpanel"
          id={`panel-${activeFilter}`}
          aria-labelledby={`tab-${activeFilter}`}
        >
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => {
              const liveUrl = getLiveUrl(project);
              return (
                <motion.div
                  key={project.title}
                  custom={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <ProjectCard
                    title={project.title}
                    description={project.description}
                    tags={project.techStack}
                    githubUrl={project.link.href}
                    projectType={getProjectType(project.techStack)}
                    liveUrl={liveUrl}
                  />
                </motion.div>
              );
            })
          ) : (
            <motion.div
              className="col-span-full text-center py-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-100 mb-4">
                <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-700 mb-2">No projects found</h3>
              <p className="text-slate-500">Try selecting a different filter to see more projects.</p>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Coding Challenges Section */}
      <div className="mt-14 space-y-5" aria-labelledby="coding-challenges-heading">
        <div className="flex items-center justify-between">
          <h3
            id="coding-challenges-heading"
            className="text-xl sm:text-2xl font-bold text-slate-900"
          >
            Coding Challenges
          </h3>
          <span className="px-3 py-1 text-xs font-medium bg-teal-50 text-teal-700 rounded-full">
            {RESUME_DATA.projects.filter((p) => p.title.includes("Coding")).length} Challenges
          </span>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          {RESUME_DATA.projects
            .filter((project) => project.title.includes("Coding"))
            .map((project, index) => (
              <motion.article
                key={project.title}
                className="group relative bg-white border border-slate-200 rounded-2xl p-5 hover:shadow-lg hover:border-teal-200 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.08 }}
              >
                {/* Accent bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-t-2xl" />

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center">
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
                      className="text-white"
                      aria-hidden="true"
                    >
                      {project.title.includes("100 Days") ? (
                        <>
                          <path d="M12 2v20" />
                          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                        </>
                      ) : (
                        <>
                          <circle cx="12" cy="12" r="10" />
                          <path d="M12 6v6l4 2" />
                        </>
                      )}
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-base font-semibold text-slate-900 group-hover:text-teal-600 transition-colors mb-1">
                      {project.title}
                    </h4>
                    <p className="text-sm text-slate-600 line-clamp-2 leading-relaxed">{project.description}</p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {project.techStack.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 text-xs font-medium bg-teal-50 text-teal-700 rounded border border-teal-100"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 mt-3 text-sm font-medium text-teal-600 hover:text-teal-700 hover:underline transition-colors group"
                    >
                      View on GitHub
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
        </motion.div>
      </div>
    </section>
  );
}