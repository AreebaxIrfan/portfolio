import { SectionHeader } from "@/components/landingPage/section-header";
import { SkillCard } from "@/components/landingPage/skill-card";
import { Code, FileText, Palette } from "lucide-react";
import { RESUME_DATA } from "@/data/resume-data";

export function SkillsSection() {
  return (
    <section id="skills" className="space-y-6">
      <SectionHeader badge="Skills" title="My Expertise" />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <SkillCard
          icon={Code}
          title="Frontend Development"
          description="Creating responsive, accessible, and polished interfaces with modern frameworks."
          skills={["HTML/CSS", "JavaScript", "TypeScript", "React", "Next.js", "TailwindCSS"]}
        />
        <SkillCard
          icon={FileText}
          title="Backend Development"
          description="Building robust, scalable, and secure server-side applications and APIs."
          skills={["Python", "FastAPI", "API Development", "Full-stack Development"]}
        />
        <SkillCard
          icon={Palette}
          title="Content Creation"
          description="Turning technical ideas into helpful, clear, and engaging experiences."
          skills={["Tech Teaching", "Content Creation", "Technical Writing"]}
        />
      </div>
    </section>
  );
}