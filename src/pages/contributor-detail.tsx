import TypingHeadline from "@/components/typing-headline"
import { useParams } from "react-router-dom"
import { cohorts } from "@/lib/data/member-data"
import { journeys } from "@/lib/data/journey-data"
import { capstone } from "@/lib/data/capstone-data"
import { timeCapsule } from "@/lib/data/time-capsule-data"
import { funFact } from "@/lib/data/fun-fact-data"
import { mergeById } from "@/lib/merge-by-id"
import { Building2, GraduationCap } from "lucide-react"
import { FaGithubSquare, FaGlobe, FaLinkedin } from "react-icons/fa"
import { usePageTitle } from "@/hooks/use-page-title"

export default function ContributorDetail() {
  const { id } = useParams()

  const contributors = mergeById(
    cohorts,
    journeys,
    capstone,
    timeCapsule,
    funFact
  )

  const contributor = contributors.find((item) => item.id === id)

  usePageTitle(contributor?.name ?? "Cohort")

  if (!contributor) {
    return null
  }

  const words = contributor.name.trim().split(/\s+/)

  const firstSegment =
    words.length === 1 ? words[0] : words.slice(0, -1).join(" ")

  const secondSegment = words.length === 1 ? "" : (words.at(-1) ?? "")

  return (
    <div className="flex flex-1 flex-col justify-center p-4 md:p-10">
      <div className="">
        <p className="text-sm text-muted-foreground">{contributor.id}</p>
        <TypingHeadline
          cacheKey={`contributor-${id}`}
          segments={[
            { text: firstSegment },
            ...(secondSegment
              ? [
                  {
                    text: ` ${secondSegment}`,
                    className: "text-highlight",
                  },
                ]
              : []),
          ]}
        />
        <div className="flex flex-col gap-8">
          {/* PROFILE */}
          <div className="mt-4 flex flex-col gap-8 lg:flex-row lg:items-center">
            <img
              src={`/images/normal/${contributor.image}`}
              alt={contributor.name}
              className="h-48 w-48 rounded"
            />
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-sm">
                <Building2 className="text-highlight" />
                <p>{contributor.univ}</p>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <GraduationCap className="text-highlight" />
                <p>{contributor.major}</p>
              </div>
              <blockquote className="mt-2 border-l-2 pl-3 text-sm italic">
                "{contributor.motto}"
              </blockquote>
              <div className="mt-4 flex items-center justify-between">
                <div className="flex gap-3">
                  <a
                    href={contributor.github}
                    target="_blank"
                    className="text-muted-foreground transition-all duration-200 hover:text-primary"
                  >
                    <FaGithubSquare className="h-5 w-5" />
                  </a>
                  <a
                    href={contributor.linkedin}
                    target="_blank"
                    className="text-muted-foreground transition-all duration-200 hover:text-primary"
                  >
                    <FaLinkedin className="h-5 w-5" />
                  </a>
                  {contributor.portfolio && (
                    <a
                      href={contributor.portfolio}
                      target="_blank"
                      className="text-muted-foreground transition-all duration-200 hover:text-primary"
                    >
                      <FaGlobe className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
          {/* JOURNEY */}
          <div className="space-y-2">
            <div className="flex w-full items-center gap-4">
              <h1 className="w-fit text-2xl font-black text-nowrap italic">
                JOURNEY
              </h1>
              <div className="h-px w-full rounded border-b-2" />
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <p className="font-serif text-lg font-medium italic">
                  Sebelum bergabung Coding Camp, apa{" "}
                  <span className="text-highlight underline">
                    ekspektasi atau kesan pertamamu
                  </span>{" "}
                  terhadap program ini?
                </p>
                <p className="text-sm">{contributor.expectation}</p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="font-serif text-lg font-medium italic">
                  Apa{" "}
                  <span className="text-highlight underline">
                    tantangan terbesar
                  </span>{" "}
                  yang kamu hadapi selama mengikuti Coding Camp?
                </p>
                <p className="text-sm">{contributor.challenge}</p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="font-serif text-lg font-medium italic">
                  Hal apa yang paling kamu{" "}
                  <span className="text-highlight underline"> syukuri</span>{" "}
                  dari perjalanan ini?
                </p>
                <p className="text-sm">{contributor.grateful}</p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="font-serif text-lg font-medium italic">
                  Apa{" "}
                  <span className="text-highlight underline">
                    perubahan terbesar
                  </span>{" "}
                  pada dirimu setelah mengikuti program ini?
                </p>
                <p className="text-sm">{contributor.changes}</p>
              </div>
            </div>
          </div>
          {/* CAPSTONE */}
          <div className="space-y-2">
            <div className="flex w-full items-center gap-4">
              <h1 className="w-fit text-2xl font-black text-nowrap italic">
                CAPSTONE
              </h1>
              <div className="h-px w-full rounded border-b-2" />
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <p className="font-serif text-lg font-medium italic">
                  Bagaimana{" "}
                  <span className="text-highlight underline">pendapatmu</span>{" "}
                  mengenai capstone project pada program coding camp ini?
                </p>
                <p className="text-sm">{contributor.opinion}</p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="font-serif text-lg font-medium italic">
                  Apa{" "}
                  <span className="text-highlight underline">
                    pelajaran terbesar
                  </span>{" "}
                  yang kamu dapatkan selama mengerjakan capstone project?
                </p>
                <p className="text-sm">{contributor.learning}</p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="font-serif text-lg font-medium italic">
                  Hal apa yang paling{" "}
                  <span className="text-highlight underline">
                    membuatmu bangga
                  </span>{" "}
                  dari capstone project kalian?
                </p>
                <p className="text-sm">{contributor.proud}</p>
              </div>
            </div>
          </div>
          {/* TIME CAPSULE */}
          <div className="space-y-2">
            <div className="flex w-full items-center gap-4">
              <h1 className="w-fit text-2xl font-black text-nowrap italic">
                TIME CAPSULE
              </h1>
              <div className="h-px w-full rounded border-b-2" />
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <p className="font-serif text-lg font-medium italic">
                  Tulis <span className="text-highlight underline">pesan</span>{" "}
                  untuk dirimu sendiri yang akan membaca ini 5 tahun dari
                  sekarang.
                </p>
                <p className="text-sm">{contributor.message}</p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="font-serif text-lg font-medium italic">
                  Dalam 5 tahun ke depan, kamu{" "}
                  <span className="text-highlight underline">berharap</span>{" "}
                  sedang berada di posisi seperti apa?
                </p>
                <p className="text-sm">{contributor.hope}</p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="font-serif text-lg font-medium italic">
                  Satu <span className="text-highlight underline">janji</span>{" "}
                  yang ingin kamu buat untuk dirimu sendiri setelah Coding Camp
                  berakhir.
                </p>
                <p className="text-sm">{contributor.promise}</p>
              </div>
            </div>
          </div>
          {/* FUN FACT */}
          <div className="space-y-2">
            <div className="flex w-full items-center gap-4">
              <h1 className="w-fit text-2xl font-black text-nowrap italic">
                FUN FACT
              </h1>
              <div className="h-px w-full rounded border-b-2" />
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <p className="font-serif text-lg font-medium italic">
                  Berapa{" "}
                  <span className="text-highlight underline">
                    tab browser terbanyak
                  </span>{" "}
                  yang pernah terbuka saat mengerjakan capstone?
                </p>
                <p className="text-sm">{contributor.tab}</p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="font-serif text-lg font-medium italic">
                  <span className="text-highlight underline">Website</span> yang
                  paling sering kamu buka selama Coding Camp?
                </p>
                <p className="text-sm">{contributor.web}</p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="font-serif text-lg font-medium italic">
                  Apa yang selalu{" "}
                  <span className="text-highlight underline">menemanimu</span>{" "}
                  saat belajar atau mengerjakan capstone?
                </p>
                <p className="text-sm">{contributor.friend}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
