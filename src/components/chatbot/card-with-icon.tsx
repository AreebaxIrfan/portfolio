import type { LucideIcon } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface CardWithIconProps {
  icon: LucideIcon
  title: string
  description: string
  className?: string
}

export function CardWithIcon({ icon: Icon, title, description, className = "" }: CardWithIconProps) {
  return (
    <Card className={className}>
      <CardContent className="p-4 flex flex-col items-center text-center">
        <div className="h-10 w-10 rounded-full bg-teal-100 flex items-center justify-center mb-3">
          <Icon className="h-5 w-5 text-teal-500" />
        </div>
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-gray-500 text-sm mt-1">{description}</p>
      </CardContent>
    </Card>
  )
}
