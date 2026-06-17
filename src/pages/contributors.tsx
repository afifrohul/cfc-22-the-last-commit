import { facil, cohorts } from "@/lib/data/member-data"
import ProfileCard from "@/components/profile-card"
import TypingHeadline from "@/components/typing-headline"
import { usePageTitle } from "@/hooks/use-page-title"
import StatsInfoCard from "@/components/stats-info-card"
import { UserIcon } from "@/components/animate-icons/user"
import { UsersIcon } from "@/components/animate-icons/users"
import { GraduationCapIcon } from "@/components/animate-icons/graduation-cap"
import { MapPinCheckInsideIcon } from "@/components/animate-icons/map-pin-check-inside"

export default function Contributors() {
  usePageTitle("Contributors")

  const uniqueUniv = new Set(cohorts.map((cohort) => cohort.univ))
  const uniqueMajor = new Set(cohorts.map((cohort) => cohort.major))

  return (
    <div className="flex flex-1 flex-col items-center justify-center p-4 md:p-10">
      <div className="">
        <TypingHeadline
          cacheKey="contributors"
          segments={[
            { text: "The Contributors Behind " },
            { text: "The Repository", className: "text-highlight" },
          ]}
        />
        <div className="mt-4 space-y-4 lg:mt-8">
          <p>
            Di balik setiap commit, ada seseorang dengan kisahnya masing-masing.
            Ini adalah kumpulan kisah orang-orang yang menjalani perjalanan yang
            sama, menghadapi tantangan yang sama, dan tumbuh bersama selama
            Coding Camp 2026.
          </p>
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <StatsInfoCard
            icon={<UserIcon className="text-highlight" />}
            stats={facil.length}
            label="Fasilitator"
          />
          <StatsInfoCard
            icon={<UsersIcon className="text-highlight" />}
            stats={cohorts.length}
            label="Mahasiswa"
          />
          <StatsInfoCard
            icon={<MapPinCheckInsideIcon className="text-highlight" />}
            stats={uniqueUniv.size}
            label="Perguruan Tinggi"
          />
          <StatsInfoCard
            icon={<GraduationCapIcon className="text-highlight" />}
            stats={uniqueMajor.size}
            label="Program Studi"
          />
        </div>
      </div>
      <div className="mt-4 space-y-4">
        <div className="">
          <div className="flex w-full items-center gap-4">
            <p className="font-semibold text-highlight italic">Facilitator</p>
            <div className="h-px w-full rounded border-b" />
          </div>
          <div className="mt-2 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {facil.map((item, index) => (
              <ProfileCard key={index} data={item} />
            ))}
          </div>
        </div>
        <div className="">
          <div className="flex w-full items-center gap-4">
            <p className="font-semibold text-highlight italic">Cohorts</p>
            <div className="h-px w-full rounded border-b" />
          </div>
          <div className="mt-2 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {cohorts.map((item, index) => (
              <ProfileCard key={index} data={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
