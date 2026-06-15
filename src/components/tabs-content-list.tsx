import TabsContentItem from "@/components/tabs-content-item"
import type { ReactElement } from "react"

type Data = {
  name: string
  content: string
}

interface TabsContentListInterface {
  headline: ReactElement
  data: Data[]
}

export default function TabsContentList({
  headline,
  data,
}: TabsContentListInterface) {
  return (
    <div className="mt-4">
      {headline}
      <div className="mt-8 flex flex-col gap-6">
        {data.map((item, index) => (
          <TabsContentItem
            name={item.name}
            content={item.content}
            key={index}
          />
        ))}
      </div>
    </div>
  )
}
