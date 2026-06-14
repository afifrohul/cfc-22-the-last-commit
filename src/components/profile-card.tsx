import { FaGithubSquare, FaGlobe, FaLinkedin } from "react-icons/fa"
import { LuSquareArrowOutUpRight } from "react-icons/lu"

type Data = {
  id: string
  name: string
  github: string
  linkedin: string
  portfolio: string
  image: string
  motto: string
}

interface Datadata {
  data: Data
}

export default function ProfileCard({ data }: Datadata) {
  function truncateString(str: string, maxLength: number) {
    return str.length > maxLength ? str.slice(0, maxLength) + "..." : str
  }

  return (
    <div className="w-full rounded p-2 transition-all duration-200 hover:cursor-pointer hover:bg-accent">
      <img
        src={
          data.image !== ""
            ? `/images/normal/${data.image}`
            : `https://ui-avatars.com/api/?name=${data.name}&background=random`
        }
        alt="image"
        className="aspect-square w-full rounded"
      />
      <div className="mt-4">
        <p className="text-xs text-muted-foreground">{data.id}</p>
        <p className="text-sm font-medium">{data.name}</p>
        <blockquote className="mt-2 border-l-2 pl-3 text-xs italic">
          "{truncateString(data.motto, 100)}"
        </blockquote>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <div className="flex gap-2">
          <a
            href={data.github}
            target="_blank"
            className="text-muted-foreground transition-all duration-200 hover:text-primary"
          >
            <FaGithubSquare className="h-6 w-6 lg:h-4 lg:w-4" />
          </a>
          <a
            href={data.linkedin}
            target="_blank"
            className="text-muted-foreground transition-all duration-200 hover:text-primary"
          >
            <FaLinkedin className="h-6 w-6 lg:h-4 lg:w-4" />
          </a>
          {data.portfolio && (
            <a
              href={data.portfolio}
              target="_blank"
              className="text-muted-foreground transition-all duration-200 hover:text-primary"
            >
              <FaGlobe className="h-6 w-6 lg:h-4 lg:w-4" />
            </a>
          )}
        </div>
        <div className="flex gap-2">
          <a
            href={`/contributors/${data.id}`}
            target="_blank"
            className="text-muted-foreground transition-all duration-200 hover:text-primary"
          >
            <LuSquareArrowOutUpRight className="h-6 w-6 lg:h-4 lg:w-4" />
          </a>
        </div>
      </div>
    </div>
  )
}
