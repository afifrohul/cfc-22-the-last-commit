import type { ReactElement } from "react"
import MasonryContentItem from "@/components/masonry-content-item"

type Data = {
  name: string
  content: string
}

interface MasonryContentListInterface {
  headline: ReactElement
  data: Data[]
}

export default function MasonryContentList({
  headline,
  data,
}: MasonryContentListInterface) {
  return (
    <div className="mt-4">
      {headline}
      <div className="mt-8 columns-1 gap-4 md:columns-2 lg:columns-3">
        {data.map((item, index) => (
          <MasonryContentItem
            name={item.name}
            content={item.content}
            key={index}
          />
        ))}
      </div>
    </div>
  )
}
