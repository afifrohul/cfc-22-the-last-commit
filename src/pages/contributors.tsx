import { facil, cohorts } from "@/lib/data/member-data"
import ProfileCard from "@/components/profile-card"
import TypingHeadline from "@/components/typing-headline"
import { usePageTitle } from "@/hooks/use-page-title"
import { Card, CardContent } from "@/components/ui/card"
import { Building2, GraduationCap, Users, UserStar } from "lucide-react"

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
            { text: "The Repository", className: "text-rose-500" },
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
          <Card size="sm">
            <CardContent>
              <div className="flex items-center gap-4">
                <UserStar className="text-rose-500" />
                <div>
                  <p className="text-base">{facil.length}</p>
                  <p className="text-xs text-muted-foreground">Fasilitator</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card size="sm">
            <CardContent>
              <div className="flex items-center gap-4">
                <Users className="text-rose-500" />
                <div>
                  <p className="text-base">{cohorts.length}</p>
                  <p className="text-xs text-muted-foreground">Mahasiswa</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card size="sm">
            <CardContent>
              <div className="flex items-center gap-4">
                <Building2 className="text-rose-500" />
                <div>
                  <p className="text-base">{uniqueUniv.size}</p>
                  <p className="text-xs text-muted-foreground">
                    Perguruan Tinggi
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card size="sm">
            <CardContent>
              <div className="flex items-center gap-4">
                <GraduationCap className="text-rose-500" />
                <div>
                  <p className="text-base">{uniqueMajor.size}</p>
                  <p className="text-xs text-muted-foreground">Program Studi</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="mt-4 space-y-4">
        <div className="">
          <div className="flex w-full items-center gap-4">
            <p className="font-semibold text-rose-500 italic">Facilitator</p>
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
            <p className="font-semibold text-rose-500 italic">Cohorts</p>
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
