import { Card, CardContent } from "@/components/ui/card"

export default function CohortItemMarquee({ name }: { name: string }) {
  return (
    <Card className="h-full w-fit cursor-pointer overflow-hidden border border-border bg-card p-4 shadow-none duration-300 hover:border-rose-500">
      <CardContent className="flex flex-col gap-2 p-0">
        <div className="flex flex-row items-center gap-3">
          <img
            className="rounded"
            width="32"
            height="32"
            alt="image"
            src={`https://ui-avatars.com/api/?name=${name}&background=random`}
          />
          <div className="flex flex-col">
            <p className="text-xs font-medium text-foreground md:text-sm">
              {name}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
