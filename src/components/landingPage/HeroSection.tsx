import Image from "next/image";
import { ArrowRight, MapPin } from "lucide-react";
import { RESUME_DATA } from "@/data/resume-data";

const highlightGradients = [
  "from-emerald-500 to-teal-500",
  "from-violet-500 to-purple-500",
  "from-amber-500 to-orange-500",
  "from-rose-500 to-pink-500",
  "from-sky-500 to-blue-500",
  "from-teal-500 to-cyan-500",
];

const highlightBgs = [
  "from-emerald-50 to-teal-100",
  "from-violet-50 to-purple-100",
  "from-amber-50 to-orange-100",
  "from-rose-50 to-pink-100",
  "from-sky-50 to-blue-100",
  "from-teal-50 to-cyan-100",
];

export function HeroSection() {
  const highlights = RESUME_DATA.keyHighlights.map((highlight, index) => ({
    ...highlight,
    gradient: highlightGradients[index % highlightGradients.length],
    bg: highlightBgs[index % highlightBgs.length],
  }));

  return (
    <section
      id="about"
      className="relative overflow-hidden py-10 sm:py-14 lg:py-20"
      aria-labelledby="about-heading"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 -z-20" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-teal-500/10 blur-3xl" />
        <div className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-10 lg:flex-row lg:items-center lg:gap-14">
          {/* Content — the headline and summary are intentionally not animated:
              keeping them at full opacity from first paint protects LCP. */}
          <div className="max-w-2xl flex-1 text-center lg:text-left">
            {/* Badge */}
            <div className="rise mb-6 inline-flex items-center gap-2 rounded-full border border-teal-100 bg-teal-50 px-4 py-2 text-sm font-medium text-teal-700">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-600" />
              </span>
              Available for opportunities
            </div>

            {/* Name & Tagline */}
            <h1
              id="about-heading"
              className="text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl xl:text-6xl"
            >
              {RESUME_DATA.name}
              <br />
              <span className="bg-gradient-to-r from-teal-700 via-cyan-600 to-blue-600 bg-clip-text text-transparent">
                Building thoughtful digital experiences.
              </span>
            </h1>

            {/* Summary */}
            <p className="mt-6 max-w-xl text-base font-medium leading-relaxed text-slate-600 sm:text-lg">
              {RESUME_DATA.summary}
            </p>

            {/* CTA Buttons */}
            <div className="rise anim-delay-1 mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-lg hover:shadow-slate-900/25"
              >
                View Projects
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </a>
              <a
                href={`mailto:${RESUME_DATA.contact.email}`}
                className="inline-flex items-center gap-2 rounded-full border-2 border-slate-200 bg-white px-6 py-3 text-sm font-medium text-slate-700 transition-all duration-200 hover:border-teal-400 hover:bg-teal-50 hover:text-teal-700 hover:shadow-md"
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Email Me
              </a>
            </div>

            {/* Location */}
            <div className="rise anim-delay-2 mt-10 flex flex-col items-center gap-4 lg:items-start">
              <div className="flex items-center gap-2.5 text-sm text-slate-600">
                <MapPin className="h-4 w-4 flex-shrink-0 text-teal-600" aria-hidden="true" />
                <a
                  href={RESUME_DATA.locationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium transition-colors duration-200 hover:text-teal-700 hover:underline"
                >
                  {RESUME_DATA.location}
                </a>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="pop anim-delay-1 relative flex shrink-0 items-center justify-center">
            <div className="relative h-44 w-44 overflow-hidden rounded-full border-4 border-white/80 shadow-2xl shadow-teal-600/20 sm:h-52 sm:w-52 md:h-60 md:w-60 lg:h-64 lg:w-64">
              <Image
                src={RESUME_DATA.avatarUrl}
                alt={`${RESUME_DATA.name}'s Profile Picture`}
                width={192}
                height={192}
                priority
                sizes="(min-width: 1024px) 256px, (min-width: 768px) 240px, (min-width: 640px) 208px, 176px"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Stats Highlights */}
        <div
          className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6"
          role="list"
          aria-label="Key highlights"
        >
          {highlights.map((highlight, index) => (
            <article
              key={highlight.title}
              style={{ animationDelay: `${240 + index * 45}ms` }}
              className="rise group relative rounded-2xl border border-slate-200/70 bg-white/90 p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:border-teal-300 hover:shadow-xl sm:p-5"
              role="listitem"
            >
              <div
                className={`absolute top-0 right-0 left-0 h-1 rounded-t-2xl bg-gradient-to-r ${highlight.gradient}`}
                aria-hidden="true"
              />

              <div
                className={`relative mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${highlight.bg}`}
              >
                <span className="text-2xl" aria-hidden="true">
                  {highlight.icon}
                </span>
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-r opacity-0 transition-opacity duration-300 group-hover:opacity-20 ${highlight.gradient}`}
                  aria-hidden="true"
                />
              </div>

              <p className="mb-1 text-xs font-bold uppercase tracking-[0.1em] text-teal-700">
                {highlight.title}
              </p>
              <p className="text-sm font-semibold leading-tight text-slate-800">
                {highlight.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
