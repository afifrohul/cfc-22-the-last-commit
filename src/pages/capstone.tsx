import TypingHeadline from "@/components/typing-headline"

export default function Capstone() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center">
      <div className="px-4 pb-4 md:px-10 md:pb-10">
        <TypingHeadline
          segments={[
            { text: "The Stories Behind " },
            { text: "The Projects", className: "text-rose-500" },
          ]}
        />
        <div className="mt-8 space-y-4">
          <p>
            Capstone bukan hanya tentang membangun aplikasi. Di balik setiap
            fitur, revisi, dan deployment, ada proses belajar, kerja sama tim,
            komunikasi, dan problem solving yang membentuk pengalaman berharga
            bagi setiap peserta.
          </p>
        </div>
      </div>
    </div>
  )
}
