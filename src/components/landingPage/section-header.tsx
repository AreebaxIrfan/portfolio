import { Badge } from "@/components/ui/badge";

interface SectionHeaderProps {
  badge: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export function SectionHeader({ badge, title, subtitle, align = "left" }: SectionHeaderProps) {
  const alignClasses = {
    left: "text-left",
    center: "text-center mx-auto max-w-3xl",
  };

  return (
    <div className={`space-y-3 ${alignClasses[align]}`}>
      <Badge className="bg-teal-50 text-teal-700 border-teal-100 hover:bg-teal-100 inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium">
        {badge}
      </Badge>
      <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}