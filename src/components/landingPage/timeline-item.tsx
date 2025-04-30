import { Badge } from "@/components/ui/badge"

interface TimelineItemProps {
  date: string
  title: string
  institution: string
  description: string
}

export function TimelineItem({ date, title, institution, description }: TimelineItemProps) {
  return (
    <div className="relative border-l border-gray-200 pl-4 pb-4">
      <div className="absolute left-0 top-0 flex items-center justify-center -translate-x-1/2 bg-white">
        <div className="h-3 w-3 rounded-full bg-teal-400"></div>
      </div>
      <div className="space-y-1">
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="text-xs">
            {date}
          </Badge>
        </div>
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-gray-500 text-sm">{institution}</p>
        <p className="text-xs text-gray-500">{description}</p>
      </div>
    </div>
  )
}
