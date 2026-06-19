import { Card, CardContent } from "@/components/ui/card"

export default function MasonryContentItem({
  name,
  content,
}: {
  name: string
  content: string
}) {
  return (
    <div className="mb-4 break-inside-avoid">
      <Card size="sm">
        <CardContent>
          <p className="text-xs text-muted-foreground">{name}</p>
          <p className="text-xs">{content}</p>
        </CardContent>
      </Card>
    </div>
  )
}
