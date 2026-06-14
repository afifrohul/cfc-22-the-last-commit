import ContentItem from "@/components/content-item"
import type { ReactElement } from "react"

type Data = {
  name: string
  content: string
}

interface TabsContentItemInterface {
  headline: ReactElement
  data: Data[]
}

export default function TabsContentItem({
  headline,
  data,
}: TabsContentItemInterface) {
  return (
    <div className="mt-4">
      {headline}
      <div className="mt-8 flex flex-col gap-6">
        {data.map((item, index) => (
          <ContentItem name={item.name} content={item.content} key={index} />
        ))}
      </div>
    </div>
  )
}
