import { Card, CardContent } from "@/components/ui/card"
import type { ReactElement } from "react"

export default function StatsInfoCard({
  icon,
  stats,
  label,
}: {
  icon: ReactElement
  stats: number
  label: string
}) {
  return (
    <Card size="sm">
      <CardContent>
        <div className="flex items-center gap-4">
          {icon}
          <div>
            <p className="text-base">{stats}</p>
            <p className="text-xs text-muted-foreground">{label}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
