import CohortMarquee from "@/components/cohort-marquee"
import TypingHeadline from "@/components/typing-headline"

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center">
      <div className="p-10">
        <TypingHeadline
          segments={[
            { text: "TheLastCommit — " },
            { text: "Before We Go", className: "text-rose-500" },
          ]}
        />
        <div className="mt-8 space-y-4">
          <p>
            Tidak terasa perjalanan Coding Camp 2026 sudah hampir sampai di
            garis akhir.
          </p>
          <p>
            Website ini adalah sebuah kenang-kenangan kecil yang dibuat untuk
            mengabadikan cerita, pengalaman, tantangan, pembelajaran, dan mimpi
            dari para peserta yang telah melewati perjalanan panjang bersama.
          </p>
          <p>
            Di balik setiap tugas yang selesai, setiap bug yang berhasil
            diperbaiki, setiap presentasi, dan setiap capstone project, terdapat
            cerita yang mungkin akan terlupakan seiring berjalannya waktu.
          </p>
          <p>
            Melalui The Last Commit, kami ingin menyimpan cerita-cerita tersebut
            dalam satu tempat. Sebuah kapsul waktu yang dapat dibuka kembali di
            masa depan untuk mengingat sejauh apa kami pernah berjuang, belajar,
            dan bertumbuh bersama.
          </p>
          <p>Selamat datang, dan selamat menjelajahi perjalanan kami.</p>
        </div>
      </div>
      <CohortMarquee />
    </div>
  )
}
