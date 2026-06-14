export default function ContentItem({
  name,
  content,
}: {
  name: string
  content: string
}) {
  return (
    <div className="grid md:grid-cols-3">
      <div>
        <p className="text-base font-medium text-rose-500">{name}</p>
      </div>
      <div className="md:col-span-2">
        <p className="text-sm">
          {content !== ""
            ? content
            : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro ea assumenda voluptatum ullam omnis sequi blanditiis nemo non tempora, ipsum eos! Qui voluptatum cumque debitis eos illo asperiores sapiente. Distinctio nemo odit voluptates amet."}
        </p>
      </div>
    </div>
  )
}
