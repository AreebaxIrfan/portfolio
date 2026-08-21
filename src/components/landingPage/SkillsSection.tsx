import { SectionHeader } from "@/components/landingPage/section-header";
import { SkillCard } from "@/components/landingPage/skill-card";
import { Code, FileText, Palette, Terminal, Brain, Globe } from "lucide-react";
import { RESUME_DATA } from "@/data/resume-data";

export function SkillsSection() {
  const skillCategories = [
    {
      icon: Code,
      title: "Frontend Development",
      description: "Creating responsive, accessible, and polished interfaces with modern frameworks.",
      skills: ["HTML/CSS", "JavaScript", "TypeScript", "React", "Next.js", "TailwindCSS"],
    },
    {
      icon: FileText,
      title: "Backend Development",
      description: "Building robust, scalable, and secure server-side applications and APIs.",
      skills: ["Python", "FastAPI", "API Development", "Full-stack Development"],
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Integrating AI models, building intelligent agents, and creating smart applications.",
      skills: ["OpenAI SDK", "Google Gemini AI", "Agents SDK", "Streamlit", "Chainlit", "Prompt Engineering"],
    },
    {
      icon: Terminal,
      title: "DevOps & Tools",
      description: "Automating deployments, managing infrastructure, and streamlining workflows.",
      skills: ["Git", "GitHub Actions", "Vercel", "Sanity CMS", "Docker", "CLI Development"],
    },
    {
      icon: Palette,
      title: "Content Creation",
      description: "Turning technical ideas into helpful, clear, and engaging experiences.",
      skills: ["Tech Teaching", "Content Creation", "Technical Writing"],
    },
    {
      icon: Globe,
      title: "Languages & Soft Skills",
      description: "Communication, collaboration, and continuous learning mindset.",
      skills: ["English", "Urdu", "Problem Solving", "Team Leadership", "Mentoring", "Agile"],
    },
  ];

  return (
    <section id="skills" className="py-8 sm:py-12 lg:py-16" aria-labelledby="skills-heading">
      <SectionHeader
        badge="Skills"
        title="My Expertise"
        subtitle="Technologies and tools I work with to build exceptional digital experiences."
        align="center"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mt-8">
        {skillCategories.map((category, index) => (
          <SkillCard
            key={category.title}
            icon={category.icon}
            title={category.title}
            description={category.description}
            skills={category.skills}
            index={index}
          />
        ))}
      </div>

      {/* Additional skills from resume data */}
      <div className="mt-10">
        <h3 className="text-lg font-semibold text-slate-700 text-center mb-5">All Technologies</h3>
        <div className="flex flex-wrap justify-center gap-2">
          {RESUME_DATA.skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1.5 text-sm font-medium bg-white text-slate-700 border border-slate-200 rounded-lg hover:bg-teal-50 hover:text-teal-700 hover:border-teal-300 transition-all duration-200 shadow-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}