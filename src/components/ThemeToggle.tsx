"use client";

import { Sun } from "lucide-react";

export function ThemeToggle() {
  return (
    <div className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white/80 p-2 text-slate-700 shadow-sm backdrop-blur-sm">
      <Sun className="h-5 w-5 text-teal-600" aria-hidden="true" />
    </div>
  );
}