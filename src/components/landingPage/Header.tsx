"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Download } from "lucide-react";
import { RESUME_DATA } from "@/data/resume-data";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((open) => !open);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200/80 bg-white/85 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-teal-500 to-cyan-500 text-sm font-semibold text-white shadow-sm">
            {RESUME_DATA.initials}
          </div>
          <span className="text-sm font-semibold tracking-wide text-slate-800">{RESUME_DATA.name}</span>
        </div>

        <nav className="hidden items-center gap-6 md:flex">
          {[
            ["About", "#about"],
            ["Skills", "#skills"],
            ["Education", "#education"],
            ["Projects", "#projects"],
            ["Contact", "#contact"],
          ].map(([label, href]) => (
            <Link
              key={label}
              href={href}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-teal-600"
            >
              {label}
            </Link>
          ))}
        </nav>

        <Button asChild variant="outline" size="sm" className="hidden gap-2 md:inline-flex">
          <Link href="#contact">
            <Download className="h-4 w-4" />
            Resume
          </Link>
        </Button>

        <Button
          variant="ghost"
          size="sm"
          id="mobile-menu-button"
          aria-label="Open mobile menu"
          className="md:hidden"
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
            className="h-6 w-6"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </Button>
      </div>

      {isMobileMenuOpen && (
        <div id="mobile-menu" className="border-t border-slate-200 bg-white md:hidden">
          <div className="container mx-auto max-w-6xl space-y-2 px-4 py-3 sm:px-6">
            {[
              ["About", "#about"],
              ["Skills", "#skills"],
              ["Education", "#education"],
              ["Projects", "#projects"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <Link
                key={label}
                href={href}
                className="block rounded-md px-2 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:text-teal-600"
              >
                {label}
              </Link>
            ))}
            <Button asChild variant="outline" size="sm" className="mt-2 w-full justify-center gap-2">
              <Link href="#contact">
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