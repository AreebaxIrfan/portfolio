import type { LucideIcon } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface SkillCardProps {
  icon: LucideIcon
  title: string
  description: string
  skills: string[]
}

export function SkillCard({ icon: Icon, title, description, skills }: SkillCardProps) {
  return (
    <Card>
      <CardContent className="p-4 space-y-3">
        <div className="h-10 w-10 rounded-lg bg-teal-100 flex items-center justify-center">
          <Icon className="h-5 w-5 text-teal-500" />
        </div>
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-gray-500 text-sm">{description}</p>
        <div className="flex flex-wrap gap-1">
          {skills.map((skill) => (
            <Badge key={skill} variant="outline" className="text-xs">
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
