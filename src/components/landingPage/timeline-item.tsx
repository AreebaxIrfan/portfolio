import { Badge } from "@/components/ui/badge"

interface TimelineItemProps {
  date: string
  title: string
  institution: string
  description: string
}

export function TimelineItem({ date, title, institution, description }: TimelineItemProps) {
  return (
    <div className="relative rounded-2xl border border-slate-200 bg-white/80 p-5 pl-6 shadow-sm shadow-slate-100">
      <div className="absolute left-0 top-6 flex -translate-x-1/2 items-center justify-center rounded-full bg-white p-1 shadow-sm">
        <div className="h-3 w-3 rounded-full bg-teal-500"></div>
      </div>

      <div className="space-y-2 pl-4">
        <Badge variant="outline" className="text-xs text-slate-600">
          {date}
        </Badge>
        <h3 className="text-lg font-bold text-slate-900">{title}</h3>
        <p className="text-sm text-slate-600">{institution}</p>
        {description ? <p className="text-sm leading-6 text-slate-500">{description}</p> : null}
      </div>
    </div>
  )
}
