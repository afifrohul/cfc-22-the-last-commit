import { FaGithubSquare, FaGlobe, FaLinkedin } from "react-icons/fa"
import { useNavigate } from "react-router-dom"

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
  const navigate = useNavigate()
  return (
    <div onClick={() => navigate(`/contributors/${data.id}`)}>
      <div className="w-full rounded p-2 transition-all duration-200 hover:bg-accent hover:cursor-pointer">
        <img
          src={
            data.image !== ""
              ? data.image
              : `https://ui-avatars.com/api/?name=${data.name}&background=random`
          }
          alt="image"
          className="aspect-square w-full rounded"
        />
        <div className="mt-4">
          <p className="text-xs text-muted-foreground">{data.id}</p>
          <p className="text-sm font-medium">{data.name}</p>
          <blockquote className="mt-2 border-l-2 pl-3 text-xs italic">
            {data.motto}
          </blockquote>
        </div>
        <div className="datas-center mt-4 flex gap-2">
          <a
            href={data.github}
            target="_blank"
            className="text-muted-foreground transition-all duration-200 hover:text-primary"
          >
            <FaGithubSquare />
          </a>
          <a
            href={data.linkedin}
            target="_blank"
            className="text-muted-foreground transition-all duration-200 hover:text-primary"
          >
            <FaLinkedin />
          </a>
          {data.portfolio && (
            <a
              href={data.portfolio}
              target="_blank"
              className="text-muted-foreground transition-all duration-200 hover:text-primary"
            >
              <FaGlobe />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
