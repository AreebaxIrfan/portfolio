"use client";

import { useCallback, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Download } from "lucide-react";
import { RESUME_DATA } from "@/data/resume-data";
import { ThemeToggle } from "@/components/ThemeToggle";

const NAV_LINKS = [
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Education", "#education"],
  ["Projects", "#projects"],
  ["Contact", "#contact"],
] as const;

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const close = useCallback(() => setIsOpen(false), []);
  const toggle = useCallback(() => setIsOpen((open) => !open), []);

  // Close on Escape and as soon as we cross into the desktop layout, so the
  // menu can never get "stuck" open behind the desktop nav.
  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    const desktop = window.matchMedia("(min-width: 768px)");
    const onBreakpoint = (event: MediaQueryListEvent | MediaQueryList) => {
      if (event.matches) setIsOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    desktop.addEventListener("change", onBreakpoint);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      desktop.removeEventListener("change", onBreakpoint);
    };
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/85 backdrop-blur-md">
      {/* Dimmed backdrop for the mobile menu. Absolutely positioned so opening
          the menu never pushes page content around. */}
      <div
        aria-hidden="true"
        onClick={close}
        className={`absolute inset-x-0 top-full h-screen bg-slate-950/25 transition-opacity duration-300 ease-out md:hidden ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <div className="relative mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:h-20 sm:px-6 lg:px-8">
        <Link
          href="/"
          onClick={close}
          className="flex items-center gap-3 rounded-full transition-colors duration-200"
          aria-label="Go to homepage"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-teal-600 to-cyan-600 text-sm font-bold text-white shadow-lg shadow-teal-600/20">
            {RESUME_DATA.initials}
          </div>
          <span className="text-sm font-semibold uppercase tracking-[0.12em] text-slate-800">
            {RESUME_DATA.name}
          </span>
        </Link>

        <nav
          className="hidden items-center gap-1 rounded-full border border-slate-200 bg-slate-50/90 p-1 shadow-sm md:flex"
          aria-label="Main navigation"
        >
          {NAV_LINKS.map(([label, href]) => (
            <Link
              key={label}
              href={href}
              className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition-colors duration-200 hover:bg-white hover:text-teal-700"
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <div className="hidden md:flex">
            <ThemeToggle />
          </div>

          <Button
            asChild
            variant="outline"
            size="sm"
            className="hidden gap-2 border-slate-200 bg-white/90 text-slate-700 shadow-sm hover:border-teal-300 hover:bg-teal-50 hover:text-teal-700 md:inline-flex"
          >
            <Link href="#contact" onClick={close}>
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
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            className="h-10 w-10 rounded-full border border-slate-200 bg-white/90 p-0 text-slate-700 shadow-sm hover:bg-slate-100 md:hidden"
            onClick={toggle}
          >
            <span className="relative block h-5 w-5" aria-hidden="true">
              <span
                className={`absolute left-0 top-0 block h-0.5 w-5 rounded-full bg-current transition-transform duration-300 ease-out ${
                  isOpen ? "translate-y-[9px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[9px] block h-0.5 w-5 rounded-full bg-current transition-opacity duration-200 ease-out ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 top-[18px] block h-0.5 w-5 rounded-full bg-current transition-transform duration-300 ease-out ${
                  isOpen ? "-translate-y-[9px] -rotate-45" : ""
                }`}
              />
            </span>
          </Button>
        </div>
      </div>

      {/* Mobile menu — grid-template-rows animates an unknown height smoothly
          without measuring anything in JS, and it overlays the page instead of
          resizing the header. */}
      <div
        id="mobile-menu"
        className={`absolute inset-x-0 top-full origin-top overflow-hidden transition-[grid-template-rows,opacity] duration-300 ease-out md:hidden ${
          isOpen ? "grid grid-rows-[1fr] opacity-100" : "grid grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="min-h-0 overflow-hidden">
          <nav
            className="mx-auto max-w-6xl px-4 pb-4 pt-3 sm:px-6"
            aria-label="Mobile navigation"
          >
            <ul className="space-y-1 rounded-2xl border border-slate-200 bg-white/95 p-2 shadow-xl shadow-slate-900/5 backdrop-blur-lg">
              {NAV_LINKS.map(([label, href]) => (
                <li key={label}>
                  <Link
                    href={href}
                    onClick={close}
                    tabIndex={isOpen ? undefined : -1}
                    className="block rounded-xl px-4 py-3 text-base font-medium text-slate-700 transition-colors duration-150 hover:bg-teal-50 hover:text-teal-700"
                  >
                    {label}
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="h-11 w-full justify-center gap-2 border-slate-200 bg-slate-50 text-slate-700 hover:border-teal-300 hover:bg-teal-50 hover:text-teal-700"
                >
                  <Link href="#contact" onClick={close} tabIndex={isOpen ? undefined : -1}>
                    <Download className="h-4 w-4" />
                    Resume
                  </Link>
                </Button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
