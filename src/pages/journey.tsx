import TypingHeadline from "@/components/typing-headline"

export default function Journey() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center">
      <div className="px-4 pb-4 md:px-10 md:pb-10">
        <TypingHeadline
          segments={[
            { text: "The Journey " },
            { text: "We Shared", className: "text-rose-500" },
          ]}
        />
        <div className="mt-8 space-y-4">
          <p>
            Perjalanan ini tidak selalu mudah. Ada tantangan, keraguan, rasa
            lelah, hingga momen-momen kecil yang akhirnya menjadi kenangan. Di
            sinilah cerita tentang bagaimana kami belajar, bertumbuh, dan
            melewati Coding Camp bersama-sama.
          </p>
        </div>
      </div>
    </div>
  )
}
