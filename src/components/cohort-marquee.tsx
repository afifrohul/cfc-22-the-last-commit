import CohortItemMarquee from "@/components/cohort-item-marquee"
import { Marquee } from "@/components/ui/marquee.tsx"
import { cohorts } from "@/lib/data/member-data"

const firstRow = cohorts.slice(0, cohorts.length / 2)
const secondRow = cohorts.slice(cohorts.length / 2)

export default function CohortMarquee() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee className="[--duration:75s]">
        {firstRow.map((cohort) => (
          <CohortItemMarquee key={cohort.id} name={cohort.name} />
        ))}
      </Marquee>
      <Marquee reverse className="[--duration:75s]">
        {secondRow.map((cohort) => (
          <CohortItemMarquee key={cohort.id} name={cohort.name} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-linear-to-r from-background" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-linear-to-l from-background" />
    </div>
  )
}
