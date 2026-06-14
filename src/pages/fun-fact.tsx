import TypingHeadline from "@/components/typing-headline"

export default function FunFact() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center">
      <div className="px-4 pb-4 md:px-10 md:pb-10">
        <TypingHeadline
          segments={[
            { text: "The Little Things " },
            { text: "We'll Remember", className: "text-rose-500" },
          ]}
        />
        <div className="mt-8 space-y-4">
          <p>
            Tidak semua kenangan datang dari tugas dan proyek. Ada kebiasaan
            unik, cerita lucu, kebingungan saat debugging, hingga hal-hal kecil
            yang membuat perjalanan ini terasa lebih berwarna.
          </p>
        </div>
      </div>
    </div>
  )
}
