import { facil, cohorts } from "@/lib/data/member-data"
import ProfileCard from "@/components/profile-card"
import TypingHeadline from "@/components/typing-headline"

export default function Contributors() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center p-4 md:p-10">
      <div className="">
        <TypingHeadline
          segments={[
            { text: "The Contributors Behind " },
            { text: "The Repository", className: "text-rose-500" },
          ]}
        />
        <div className="mt-4 lg:mt-8 space-y-4">
          <p>
            Behind every commit, there is a person with their own story. This is
            a collection of the people who shared the same journey, faced the
            same challenges, and grew together throughout Coding Camp 2026.
          </p>
        </div>
      </div>
      <div className="mt-4 space-y-4">
        <div className="">
          <div className="flex w-full items-center gap-4">
            <p className="font-semibold text-rose-500 italic">Facilitator</p>
            <div className="h-px w-full rounded border-b" />
          </div>
          <div className="mt-2 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
          <div className="mt-2 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cohorts.map((item, index) => (
              <ProfileCard key={index} data={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
