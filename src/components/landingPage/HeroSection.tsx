import { Badge } from "@/components/ui/badge";
import { ArrowRight, MapPin } from "lucide-react";
import { SocialLinks } from "@/components/SocialLinks";
import { RESUME_DATA } from "@/data/resume-data";

export function HeroSection() {
  const highlights = RESUME_DATA.keyHighlights.filter((highlight) =>
    ["Experience", "Projects", "Hackathons", "Languages", "Hobbies", "Helping Class Fellows In Coding"].includes(highlight.title)
  );

  return (
    <section id="about" className="py-8 sm:py-12 lg:py-16">
      <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-center lg:gap-12">
        <div className="flex-1 text-center md:text-left">


          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            {RESUME_DATA.name}
            <span className="mt-2 block bg-gradient-to-r from-teal-600 to-cyan-500 bg-clip-text text-transparent">
              Building thoughtful digital experiences.
            </span>
          </h1>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base lg:text-lg">
            {RESUME_DATA.summary}
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 md:justify-start">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white transition-transform hover:-translate-y-0.5 hover:bg-slate-800"
            >
              View projects
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={`mailto:${RESUME_DATA.contact.email}`}
              className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:border-teal-300 hover:text-teal-700"
            >
              Email me
            </a>
          </div>

          <div className="mt-8 flex flex-col items-center gap-4 md:items-start">
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <MapPin className="h-4 w-4 text-teal-500" />
              <a
                href={RESUME_DATA.locationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-teal-600 hover:underline"
              >
                {RESUME_DATA.location}
              </a>
            </div>

            <SocialLinks />
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-teal-100 via-cyan-100 to-blue-100 blur-2xl" />
          <div className="relative h-40 w-40 overflow-hidden rounded-full border-4 border-white bg-gradient-to-br from-teal-400 to-cyan-500 shadow-lg shadow-teal-100 sm:h-48 sm:w-48 md:h-56 md:w-56 lg:h-64 lg:w-64">
            <img
              src={RESUME_DATA.avatarUrl}
              alt={`${RESUME_DATA.name}'s Profile Picture`}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {highlights.map((highlight) => (
          <div
            key={highlight.title}
            className="rounded-2xl border border-slate-200 bg-white/80 p-4 text-center shadow-sm shadow-slate-100 transition-all duration-200 hover:-translate-y-0.5 hover:border-teal-200 hover:shadow-md"
          >
            <p className="text-xs font-medium uppercase tracking-[0.08em] text-slate-500">
              {highlight.title}
            </p>
            <p className="mt-2 text-base font-semibold text-slate-800 sm:text-lg">
              {highlight.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
