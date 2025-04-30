import { SectionHeader } from "@/components/landingPage/section-header";
import { SkillCard } from "@/components/landingPage/skill-card";
import { Code, FileText, Palette } from "lucide-react";
import { RESUME_DATA } from "@/data/resume-data";

export function SkillsSection() {
  return (
    <section id="skills" className="space-y-6">
      <SectionHeader badge="Skills" title="My Expertise" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <SkillCard
          icon={Code}
          title="Frontend Development"
          description="Creating responsive, accessible, and performant user interfaces with modern frameworks."
          skills={RESUME_DATA.skills.filter((skill) =>
            ["HTML/CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"].includes(skill)
          )}
        />
        <SkillCard
          icon={FileText}
          title="Backend Development"
          description="Building robust, scalable, and secure server-side applications and APIs."
          skills={RESUME_DATA.skills.filter((skill) =>
            ["Python", "FastAPI", "API Development", "Full Stack Development"].includes(skill)
          )}
        />
        <SkillCard
          icon={Palette}
          title="Content Creation"
          description="Creating engaging technical content and teaching complex concepts in accessible ways."
          skills={RESUME_DATA.skills.filter((skill) =>
            ["Tech Teaching", "Content Creation", "Technical Writing"].includes(skill)
          )}
        />
      </div>
    </section>
  );
}