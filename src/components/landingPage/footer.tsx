"use client";

import { SocialLinks } from "@/components/SocialLinks";
import { RESUME_DATA } from "@/data/resume-data";
import { Mail, Github, Clock, Linkedin, Twitter, Instagram, Facebook } from "lucide-react";
import { motion } from "framer-motion";

const socialIcons: Record<string, typeof Mail> = {
  LinkedIn: Linkedin,
  GitHub: Github,
  X: Twitter,
  Instagram: Instagram,
  Facebook: Facebook,
  Medium: Mail,
};

const Footer = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 mt-auto" role="contentinfo">
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-teal-500/25">
                <span className="font-bold text-xl text-white">{RESUME_DATA.initials}</span>
              </div>
              <span className="text-xl font-bold text-slate-900">{RESUME_DATA.name}</span>
            </div>
            <p className="text-base text-slate-600 leading-relaxed max-w-xs">
              {RESUME_DATA.about}
            </p>
            <div className="mt-6 flex flex-wrap gap-2" role="list" aria-label="Social links">
              {RESUME_DATA.contact.social.map((social) => {
                const Icon = socialIcons[social.name] || Mail;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-white border border-slate-200 text-slate-500 hover:bg-teal-50 hover:border-teal-300 hover:text-teal-600 transition-all duration-200 group"
                    aria-label={social.name}
                    role="listitem"
                  >
                    <Icon className="h-5 w-5 group-hover:scale-110 transition-transform" aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-1"
          >
            <h3 className="text-lg font-semibold text-slate-900 mb-5">Quick Links</h3>
            <nav aria-label="Footer navigation">
              <ul className="space-y-3">
                {[
                  { href: "#about", label: "About Me" },
                  { href: "#projects", label: "Projects" },
                  { href: "#skills", label: "Skills" },
                  { href: "#education", label: "Education" },
                  { href: "#contact", label: "Contact" },
                ].map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-600 hover:text-teal-600 transition-colors group inline-flex items-center gap-2"
                    >
                      <span>{link.label}</span>
                      <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <h3 className="text-lg font-semibold text-slate-900 mb-5">Contact Info</h3>
            <address className="space-y-4 not-italic">
              <a
                href={`mailto:${RESUME_DATA.contact.email}`}
                className="flex items-center gap-3 text-slate-600 hover:text-teal-600 transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center flex-shrink-0 group-hover:bg-teal-100 transition-colors">
                  <Mail className="h-5 w-5 text-teal-500" aria-hidden="true" />
                </div>
                <span className="text-sm">{RESUME_DATA.contact.email}</span>
              </a>
              <a
                href={RESUME_DATA.locationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-600 hover:text-teal-600 transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center flex-shrink-0 group-hover:bg-teal-100 transition-colors">
                  <svg className="h-5 w-5 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="text-sm">Karachi, Pakistan</span>
              </a>
              <div className="flex items-center gap-3 text-slate-600">
                <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center flex-shrink-0">
                  <Clock className="h-5 w-5 text-teal-500" aria-hidden="true" />
                </div>
                <span className="text-sm">Open to opportunities worldwide</span>
              </div>
            </address>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="my-10 border-t border-slate-200"
        />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500 text-center md:text-left">
            © {new Date().getFullYear()} {RESUME_DATA.name}. All rights reserved.
          </p>

          <div className="flex items-center gap-4 text-sm text-slate-500">
            <span className="hidden sm:block">Built with Next.js & Tailwind CSS</span>
            <a
              href={RESUME_DATA.personalWebsiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-600 transition-colors group inline-flex items-center gap-1"
            >
              <Github className="h-4 w-4" aria-hidden="true" />
              <span className="group-hover:underline">View Source</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;