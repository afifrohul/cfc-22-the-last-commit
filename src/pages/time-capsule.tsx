import TypingHeadline from "@/components/typing-headline"

export default function TimeCapsule() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center">
      <div className="px-4 pb-4 md:px-10 md:pb-10">
        <TypingHeadline
          segments={[
            { text: "A Message For  " },
            { text: "The Future", className: "text-rose-500" },
          ]}
        />
        <div className="mt-8 space-y-4">
          <p>
            Setiap orang memiliki harapan, mimpi, dan tujuan yang ingin dicapai
            setelah program ini berakhir. Halaman ini menjadi kapsul waktu yang
            menyimpan pesan untuk diri sendiri di masa depan.
          </p>
        </div>
      </div>
    </div>
  )
}
