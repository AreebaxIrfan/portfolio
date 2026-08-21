import { SectionHeader } from "@/components/landingPage/section-header";
import { Mail, MapPin, Clock, Send } from "lucide-react";
import { RESUME_DATA } from "@/data/resume-data";
import { motion } from "framer-motion";

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
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
        {contactItems.map((item, index) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative bg-white border border-slate-200 rounded-2xl p-6 text-center hover:shadow-xl hover:border-teal-200 transition-all duration-300"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-t-2xl" aria-hidden="true" />

            <div className="relative space-y-4">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-teal-50 group-hover:bg-teal-100 group-hover:text-teal-600 transition-all duration-300">
                <item.icon className="h-6 w-6 text-teal-500 group-hover:text-teal-600 transition-colors" aria-hidden="true" />
              </div>

              <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>

              {item.href ? (
                <a
                  href={item.href}
                  target={item.target}
                  rel={item.target ? "noopener noreferrer" : undefined}
                  className="text-teal-600 hover:text-teal-700 font-medium transition-colors group inline-flex items-center gap-1.5"
                >
                  {item.value}
                  <Send className="h-4 w-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </a>
              ) : (
                <p className="text-slate-700 font-medium">{item.value}</p>
              )}

              <p className="text-sm text-slate-500">{item.description}</p>
            </div>

            <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl" />
          </motion.article>
        ))}
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-14 text-center"
      >
        <div className="inline-flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-teal-600 to-cyan-500 rounded-2xl text-white shadow-lg shadow-teal-500/25 hover:shadow-xl hover:shadow-teal-500/30 transition-all duration-300">
          <Mail className="h-5 w-5" aria-hidden="true" />
          <span className="font-medium text-base">Ready to start a project? Let's talk!</span>
        </div>
        <p className="mt-3 text-sm text-slate-500">I typically respond within 24 hours</p>
      </motion.div>
    </section>
  );
}