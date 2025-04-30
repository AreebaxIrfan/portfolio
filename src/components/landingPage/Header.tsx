"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Download } from "lucide-react";
import { RESUME_DATA } from "@/data/resume-data";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white/95 backdrop-blur">
      <div className="container mx-auto px-4 flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
            <span className="font-medium text-sm">{RESUME_DATA.initials}</span>
          </div>
          <span className="font-medium">{RESUME_DATA.name}</span>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#about" className="text-sm font-medium hover:text-teal-500 transition-colors">
            About
          </Link>
          <Link href="#skills" className="text-sm font-medium hover:text-teal-500 transition-colors">
            Skills
          </Link>
          <Link href="#education" className="text-sm font-medium hover:text-teal-500 transition-colors">
            Education
          </Link>
          <Link href="#projects" className="text-sm font-medium hover:text-teal-500 transition-colors">
            Projects
          </Link>
          <Link href="#contact" className="text-sm font-medium hover:text-teal-500 transition-colors">
            Contact
          </Link>
        </nav>
        <Button variant="outline" size="sm" className="hidden md:flex gap-2">
          <Download className="h-4 w-4" />
          Resume
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

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div id="mobile-menu" className="md:hidden bg-white border-b">
          <div className="container mx-auto px-4 py-3 space-y-3">
            <Link href="#about" className="block text-sm font-medium hover:text-teal-500 transition-colors py-2">
              About
            </Link>
            <Link href="#skills" className="block text-sm font-medium hover:text-teal-500 transition-colors py-2">
              Skills
            </Link>
            <Link href="#education" className="block text-sm font-medium hover:text-teal-500 transition-colors py-2">
              Education
            </Link>
            <Link href="#projects" className="block text-sm font-medium hover:text-teal-500 transition-colors py-2">
              Projects
            </Link>
            <Link href="#contact" className="block text-sm font-medium hover:text-teal-500 transition-colors py-2">
              Contact
            </Link>
            <Button variant="outline" size="sm" className="w-full justify-center gap-2 mt-2">
              <Download className="h-4 w-4" />
              Resume
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}