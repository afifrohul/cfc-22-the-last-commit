import TypingHeadline from "@/components/typing-headline"

export default function FinalMessage() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center">
      <div className="px-4 pb-4 md:p-10">
        <TypingHeadline
          segments={[
            { text: "Before  " },
            { text: "We Go", className: "text-rose-500" },
          ]}
        />
        <div className="mt-8 space-y-4">
          <p>
            Setiap perjalanan pasti memiliki akhir, tetapi pelajaran,
            pertemanan, dan pengalaman yang diperoleh akan terus dibawa ke
            langkah berikutnya. Halaman ini adalah penutup sekaligus pengingat
            bahwa ini bukan akhir dari perjalanan, melainkan awal dari cerita
            yang baru.
          </p>
        </div>
      </div>
    </div>
  )
}
