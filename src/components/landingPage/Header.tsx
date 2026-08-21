"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Download } from "lucide-react";
import { RESUME_DATA } from "@/data/resume-data";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((open) => !open);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    ["About", "#about"],
    ["Skills", "#skills"],
    ["Education", "#education"],
    ["Projects", "#projects"],
    ["Contact", "#contact"],
  ] as const;

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200/80 bg-white/75 backdrop-blur-xl dark:border-slate-700/80 dark:bg-slate-900/75">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-3 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
          aria-label="Go to homepage"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-teal-500 to-cyan-500 text-sm font-bold text-white shadow-lg shadow-teal-500/20">
            {RESUME_DATA.initials}
          </div>
          <span className="text-sm font-semibold tracking-[0.12em] text-slate-800 uppercase dark:text-slate-100">
            {RESUME_DATA.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-1 rounded-full border border-slate-200/80 bg-slate-50/80 p-1 shadow-sm dark:border-slate-700/80 dark:bg-slate-800/80 md:flex" aria-label="Main navigation">
          {navLinks.map(([label, href]) => (
            <Link
              key={label}
              href={href}
              onClick={closeMobileMenu}
              className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition-all duration-200 hover:bg-white hover:text-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 dark:text-slate-300 dark:hover:bg-slate-700 dark:hover:text-teal-400"
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden md:flex">
            <ThemeToggle />
          </div>

          <Button
            asChild
            variant="outline"
            size="sm"
            className="hidden gap-2 border-slate-200 bg-white/80 text-slate-700 shadow-sm hover:border-teal-300 hover:text-teal-600 md:inline-flex dark:border-slate-700 dark:bg-slate-800/80 dark:text-slate-200"
          >
            <Link href="#contact" onClick={closeMobileMenu}>
              <Download className="h-4 w-4" />
              Resume
            </Link>
          </Button>

          <div className="md:hidden">
            <ThemeToggle />
          </div>

          <Button
            variant="ghost"
            size="sm"
            id="mobile-menu-button"
            aria-label={isMobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            className="h-10 w-10 rounded-full border border-slate-200 bg-white/80 p-0 text-slate-700 shadow-sm hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800/80 dark:text-slate-200 md:hidden"
            onClick={toggleMobileMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              {isMobileMenuOpen ? (
                <>
                  <line x1="18" x2="6" y1="6" y2="18" />
                  <line x1="6" x2="18" y1="6" y2="18" />
                </>
              ) : (
                <>
                  <line x1="4" x2="20" y1="12" y2="12" />
                  <line x1="4" x2="20" y1="6" y2="6" />
                  <line x1="4" x2="20" y1="18" y2="18" />
                </>
              )}
            </svg>
          </Button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div
          id="mobile-menu"
          className="border-t border-slate-200 bg-white/95 shadow-lg backdrop-blur-lg dark:border-slate-700 dark:bg-slate-900/95 md:hidden"
        >
          <div className="mx-auto max-w-6xl space-y-2 px-4 py-4 sm:px-6">
            {navLinks.map(([label, href]) => (
              <Link
                key={label}
                href={href}
                onClick={closeMobileMenu}
                className="block rounded-xl px-3 py-2.5 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-teal-600 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-teal-400"
              >
                {label}
              </Link>
            ))}
            <Button asChild variant="outline" size="sm" className="mt-2 w-full justify-center gap-2 border-slate-200 bg-slate-50 text-slate-700 hover:border-teal-300 hover:text-teal-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200">
              <Link href="#contact" onClick={closeMobileMenu}>
                <Download className="h-4 w-4" />
                Resume
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}