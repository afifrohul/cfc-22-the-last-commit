import { Card, CardContent } from "@/components/ui/card"
import { faker } from "@faker-js/faker"

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
          <p className="text-xs">
            {content !== ""
              ? content
              : faker.lorem.sentence({ min: 3, max: 5 })}
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
