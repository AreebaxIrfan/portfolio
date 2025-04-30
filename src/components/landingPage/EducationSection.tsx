import { SectionHeader } from "@/components/landingPage/section-header";
import { TimelineItem } from "@/components/landingPage/timeline-item";
import { RESUME_DATA } from "@/data/resume-data";

export function EducationSection() {
  return (
    <section id="education" className="space-y-6">
      <SectionHeader badge="Education" title="Academic Background" />
      <div className="space-y-4">
        {RESUME_DATA.education.map((edu) => (
          <TimelineItem
            key={edu.degree}
            date={`${edu.start} - ${edu.end}`}
            title={edu.degree}
            institution={edu.school} description={""}            // description={edu.description || ""}
          />
        ))}
      </div>
    </section>
  );
}