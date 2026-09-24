import { Badge } from "@/components/ui/badge";

interface SectionHeaderProps {
  badge: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  id?: string;
}

export function SectionHeader({ badge, title, subtitle, align = "left", id }: SectionHeaderProps) {
  const alignClasses = {
    left: "text-left",
    center: "text-center mx-auto max-w-3xl",
  };

  return (
    <div className={`space-y-3 ${alignClasses[align]}`} data-reveal>
      <Badge className="inline-flex items-center gap-1.5 border-teal-100 bg-teal-50 px-3 py-1.5 text-sm font-medium text-teal-700 hover:bg-teal-100">
        {badge}
      </Badge>
      <h2
        id={id}
        className="text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl"
      >
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}
