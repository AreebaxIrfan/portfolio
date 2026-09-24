import type { CSSProperties } from "react";
import { SectionHeader } from "@/components/landingPage/section-header";
import { Mail, MapPin, Clock, Send } from "lucide-react";
import { RESUME_DATA } from "@/data/resume-data";

export function ContactSection() {
  const contactItems = [
    {
      icon: Mail,
      title: "Email",
      value: RESUME_DATA.contact.email,
      href: `mailto:${RESUME_DATA.contact.email}`,
      description: "Best for project inquiries & collaborations",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Karachi, Pakistan",
      href: RESUME_DATA.locationLink,
      target: "_blank",
      description: "Available for remote work worldwide",
    },
    {
      icon: Clock,
      title: "Availability",
      value: "Open to opportunities",
      description: "Full-time, freelance, or consulting",
    },
  ];

  return (
    <section id="contact" className="py-8 sm:py-12 lg:py-16" aria-labelledby="contact-heading">
      <SectionHeader
        badge="Contact"
        title="Get In Touch"
        subtitle="Have a project in mind or just want to say hello? I'd love to hear from you."
        align="center"
        id="contact-heading"
      />

      <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
        {contactItems.map((item, index) => (
          <article
            key={item.title}
            data-reveal
            style={{ "--reveal-delay": `${index * 70}ms` } as CSSProperties}
            className="group relative rounded-2xl border border-slate-200 bg-white p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-teal-300 hover:shadow-xl"
          >
            <div
              className="absolute top-0 right-0 left-0 h-1 rounded-t-2xl bg-gradient-to-r from-teal-500 to-cyan-500"
              aria-hidden="true"
            />

            <div className="relative space-y-4">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 transition-colors duration-300 group-hover:bg-teal-100">
                <item.icon className="h-6 w-6 text-teal-600" aria-hidden="true" />
              </div>

              <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>

              {item.href ? (
                <a
                  href={item.href}
                  target={item.target}
                  rel={item.target ? "noopener noreferrer" : undefined}
                  className="group inline-flex items-center gap-1.5 font-medium text-teal-700 transition-colors duration-200 hover:text-teal-800"
                >
                  {item.value}
                  <Send
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </a>
              ) : (
                <p className="font-medium text-slate-700">{item.value}</p>
              )}

              <p className="text-sm text-slate-500">{item.description}</p>
            </div>

            <div
              className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-tr from-teal-500/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              aria-hidden="true"
            />
          </article>
        ))}
      </div>

      {/* CTA Section */}
      <div data-reveal className="mt-14 text-center">
        <div className="inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-teal-700 to-cyan-700 px-6 py-4 text-white shadow-lg shadow-teal-700/25 transition-shadow duration-300 hover:shadow-xl hover:shadow-teal-700/30">
          <Mail className="h-5 w-5" aria-hidden="true" />
          <span className="text-base font-medium">Ready to start a project? Let's talk!</span>
        </div>
        <p className="mt-3 text-sm text-slate-500">I typically respond within 24 hours</p>
      </div>
    </section>
  );
}
