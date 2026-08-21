import { SectionHeader } from "@/components/landingPage/section-header";
import { TimelineItem } from "@/components/landingPage/timeline-item";
import { RESUME_DATA } from "@/data/resume-data";

export function EducationSection() {
  return (
    <section id="education" className="py-8 sm:py-12 lg:py-16" aria-labelledby="education-heading">
      <SectionHeader
        badge="Education"
        title="Academic Background"
        subtitle="Formal education and specialized training that shaped my technical foundation."
        align="center"
      />
      <div className="relative max-w-3xl mx-auto mt-10">
        {/* Vertical timeline line */}
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-slate-200 to-transparent" aria-hidden="true" />

        <div className="space-y-6">
          {RESUME_DATA.education.map((edu, index) => (
            <TimelineItem
              key={`${edu.degree}-${index}`}
              date={`${edu.start} - ${edu.end}`}
              title={edu.degree}
              institution={edu.school}
              description={edu.description || ""}
              type="education"
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}