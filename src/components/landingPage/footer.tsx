"use client";

import type { CSSProperties } from "react";
import { RESUME_DATA } from "@/data/resume-data";
import { Mail, Github, Clock, Linkedin, Twitter, Instagram, Facebook } from "lucide-react";

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
    <footer
      id="contact"
      className="mt-auto border-t border-slate-200 bg-slate-50"
      role="contentinfo"
    >
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-12">
          {/* Brand Section */}
          <div data-reveal className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="flex items-center justify-center h-12 w-12 rounded-2xl bg-gradient-to-br from-teal-600 to-cyan-600 shadow-lg shadow-teal-600/25">
                <span className="text-xl font-bold text-white">{RESUME_DATA.initials}</span>
              </div>
              <span className="text-xl font-bold text-slate-900">{RESUME_DATA.name}</span>
            </div>
            <p className="text-base leading-relaxed text-slate-600 max-w-xs">
              {RESUME_DATA.about}
            </p>
            <div className="flex flex-wrap gap-2 mt-6" role="list" aria-label="Social links">
              {RESUME_DATA.contact.social.map((social) => {
                const Icon = socialIcons[social.name] || Mail;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-white border border-slate-200 text-slate-600 transition-all duration-200 group hover:border-teal-300 hover:bg-teal-50 hover:text-teal-700"
                    aria-label={social.name}
                    role="listitem"
                  >
                    <Icon className="w-5 h-5 transition-transform duration-200 group-hover:scale-110" aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div
            data-reveal
            style={{ "--reveal-delay": "70ms" } as CSSProperties}
            className="lg:col-span-1"
          >
            <h3 className="mb-5 text-lg font-semibold text-slate-900">Quick Links</h3>
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
                      className="inline-flex items-center gap-2 text-sm text-slate-600 transition-colors duration-200 group hover:text-teal-700"
                    >
                      <span>{link.label}</span>
                      <svg
                        className="w-4 h-4 transition-all duration-200 opacity-0 group-hover:opacity-100 group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact Info */}
          <div
            data-reveal
            style={{ "--reveal-delay": "140ms" } as CSSProperties}
            className="lg:col-span-1"
          >
            <h3 className="mb-5 text-lg font-semibold text-slate-900">Contact Info</h3>
            <address className="space-y-4 not-italic">
              <a
                href={`mailto:${RESUME_DATA.contact.email}`}
                className="flex items-center gap-3 text-slate-600 transition-colors duration-200 group hover:text-teal-700"
              >
                <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 rounded-xl bg-teal-50 transition-colors duration-200 group-hover:bg-teal-100">
                  <Mail className="w-5 h-5 text-teal-600" aria-hidden="true" />
                </div>
                <span className="text-sm">{RESUME_DATA.contact.email}</span>
              </a>
              <a
                href={RESUME_DATA.locationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-600 transition-colors duration-200 group hover:text-teal-700"
              >
                <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 rounded-xl bg-teal-50 transition-colors duration-200 group-hover:bg-teal-100">
                  <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="text-sm">Karachi, Pakistan</span>
              </a>
              <div className="flex items-center gap-3 text-slate-600">
                <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 rounded-xl bg-teal-50">
                  <Clock className="w-5 h-5 text-teal-600" aria-hidden="true" />
                </div>
                <span className="text-sm">Open to opportunities worldwide</span>
              </div>
            </address>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 border-t border-slate-200" />

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-center text-slate-500 md:text-left">
            © {new Date().getFullYear()} {RESUME_DATA.name}. All rights reserved.
          </p>

          <div className="flex items-center gap-4 text-sm text-slate-500">
            <span className="hidden sm:block">Built with Next.js & Tailwind CSS</span>
            <a
              href={RESUME_DATA.personalWebsiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 transition-colors duration-200 group hover:text-teal-700"
            >
              <Github className="w-4 h-4" aria-hidden="true" />
              <span className="group-hover:underline">View Source</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
