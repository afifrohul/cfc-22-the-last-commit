import { Card, CardContent } from "@/components/ui/card"

type Cohort = {
  id: string
  name: string
  image: string
}

interface CohortItem {
  cohort: Cohort
}

export default function CohortItemMarquee({ cohort }: CohortItem) {
  return (
    <Card className="h-full w-fit cursor-pointer overflow-hidden border border-border bg-card p-4 shadow-none duration-300 hover:border-rose-500">
      <CardContent className="flex flex-col gap-2 p-0">
        <div className="flex flex-row items-center gap-3">
          <img
            className="rounded"
            width="36"
            height="36"
            alt="image"
            src={
              cohort.image !== ""
                ? cohort.image
                : `https://ui-avatars.com/api/?name=${cohort.name}&background=random`
            }
          />
          <div className="flex flex-col">
            <p className="text-xs font-light text-muted-foreground italic">
              {cohort.id}
            </p>
            <p className="text-xs font-medium text-foreground lg:text-sm">
              {cohort.name}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
