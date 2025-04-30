import { Badge } from "@/components/ui/badge"

interface SectionHeaderProps {
  badge: string
  title: string
}

export function SectionHeader({ badge, title }: SectionHeaderProps) {
  return (
    <div className="space-y-2">
      <Badge className="bg-teal-50 text-teal-700 hover:bg-teal-50">{badge}</Badge>
      <h2 className="text-3xl font-bold">{title}</h2>
    </div>
  )
}
