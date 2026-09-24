import { useState, useMemo } from "react";
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
  if (href.includes("vercel.app") || href.includes("streamlit.app") || href.includes(".vercel.app")) {
    return href;
  }
  if (href.startsWith("https://") && !href.includes("github.com")) {
    return href;
  }
  return undefined;
};

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const featuredProjects = useMemo(
    () => RESUME_DATA.projects.filter((project) => !project.title.includes("Coding")),
    []
  );

  const filteredProjects = useMemo(
    () =>
      activeFilter === "all"
        ? featuredProjects
        : featuredProjects.filter((project) => getProjectType(project.techStack) === activeFilter),
    [activeFilter, featuredProjects]
  );

  const filterOptions = [
    { value: "all", label: "All Projects", count: featuredProjects.length },
    { value: "ai", label: "AI & ML", count: featuredProjects.filter((p) => getProjectType(p.techStack) === "ai").length },
    { value: "fullstack", label: "Full Stack", count: featuredProjects.filter((p) => getProjectType(p.techStack) === "fullstack").length },
    { value: "frontend", label: "Frontend", count: featuredProjects.filter((p) => getProjectType(p.techStack) === "frontend").length },
    { value: "backend", label: "Backend", count: featuredProjects.filter((p) => getProjectType(p.techStack) === "backend").length },
  ];

  const codingChallenges = useMemo(
    () => RESUME_DATA.projects.filter((project) => project.title.includes("Coding")),
    []
  );

  return (
    <section id="projects" className="py-8 sm:py-12 lg:py-16" aria-labelledby="projects-heading">
      <SectionHeader
        badge="Projects"
        title="Featured Work"
        subtitle="A curated selection of projects showcasing full-stack development, AI integration, and creative problem-solving."
        id="projects-heading"
      />

      {/* Filter tabs */}
      <nav
        className="mb-8 mt-4 flex flex-wrap justify-center gap-2"
        aria-label="Project filters"
        role="tablist"
      >
        {filterOptions.map((filter) => (
          <button
            key={filter.value}
            type="button"
            role="tab"
            aria-selected={activeFilter === filter.value}
            aria-controls={`panel-${filter.value}`}
            id={`tab-${filter.value}`}
            onClick={() => setActiveFilter(filter.value)}
            className={`rounded-full px-4 py-2.5 text-sm font-medium transition-colors duration-200 ${
              activeFilter === filter.value
                ? "bg-teal-700 text-white shadow-md shadow-teal-700/25"
                : "border border-slate-200 bg-white text-slate-600 hover:border-teal-300 hover:bg-teal-50 hover:text-teal-700"
            }`}
          >
            {filter.label}
            <span
              className={`ml-2 rounded-full px-2 py-0.5 text-xs font-semibold ${
                activeFilter === filter.value ? "bg-white/20 text-white" : "bg-slate-100 text-slate-600"
              }`}
            >
              {filter.count}
            </span>
          </button>
        ))}
      </nav>

      {/* Projects Grid — keyed so the CSS entrance animation replays on filter
          change instead of waiting on JS-driven exit/enter choreography. */}
      <div
        key={activeFilter}
        className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3"
        role="tabpanel"
        id={`panel-${activeFilter}`}
        aria-labelledby={`tab-${activeFilter}`}
      >
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project, index) => {
            const liveUrl = getLiveUrl(project);
            return (
              <div
                key={project.title}
                className="rise"
                style={{ animationDelay: `${Math.min(index * 35, 210)}ms` }}
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  tags={project.techStack}
                  githubUrl={project.link.href}
                  projectType={getProjectType(project.techStack)}
                  liveUrl={liveUrl}
                />
              </div>
            );
          })
        ) : (
          <div className="col-span-full py-12 text-center">
            <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-slate-100">
              <svg
                className="h-8 w-8 text-slate-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="mb-2 text-lg font-semibold text-slate-700">No projects found</h3>
            <p className="text-slate-500">Try selecting a different filter to see more projects.</p>
          </div>
        )}
      </div>

      {/* Coding Challenges Section */}
      <div className="mt-14 space-y-5" data-reveal aria-labelledby="coding-challenges-heading">
        <div className="flex items-center justify-between">
          <h3 id="coding-challenges-heading" className="text-xl font-bold text-slate-900 sm:text-2xl">
            Coding Challenges
          </h3>
          <span className="rounded-full bg-teal-50 px-3 py-1 text-xs font-medium text-teal-700">
            {codingChallenges.length} Challenges
          </span>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {codingChallenges.map((project) => (
            <article
              key={project.title}
              className="group relative rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-teal-300 hover:shadow-lg"
            >
              {/* Accent bar */}
              <div
                className="absolute top-0 right-0 left-0 h-1 rounded-t-2xl bg-gradient-to-r from-teal-500 to-cyan-500"
                aria-hidden="true"
              />

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-teal-500 to-cyan-500">
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
                <div className="min-w-0 flex-1">
                  <h4 className="mb-1 text-base font-semibold text-slate-900 transition-colors duration-200 group-hover:text-teal-700">
                    {project.title}
                  </h4>
                  <p className="line-clamp-2 text-sm leading-relaxed text-slate-600">
                    {project.description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {project.techStack.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="rounded border border-teal-100 bg-teal-50 px-2 py-0.5 text-xs font-medium text-teal-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-teal-700 transition-colors duration-200 hover:text-teal-800 hover:underline"
                  >
                    View on GitHub
                    <svg
                      className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
