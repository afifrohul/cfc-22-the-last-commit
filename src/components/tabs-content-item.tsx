export default function TabsContentItem({
  name,
  content,
}: {
  name: string
  content: string
}) {
  return (
    <div className="grid md:grid-cols-3">
      <div>
        <p className="text-base font-medium text-highlight">{name}</p>
      </div>
      <div className="md:col-span-2">
        <p className="text-sm">{content}</p>
      </div>
    </div>
  )
}
