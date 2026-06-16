import TabsContentList from "@/components/tabs-content-list"
import TypingHeadline from "@/components/typing-headline"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { usePageTitle } from "@/hooks/use-page-title"
import { capstone } from "@/lib/data/capstone-data"

const opinion = capstone.map((item) => {
  return { name: item.name, content: item.opinion }
})
const learning = capstone.map((item) => {
  return { name: item.name, content: item.learning }
})
const proud = capstone.map((item) => {
  return { name: item.name, content: item.proud }
})

export default function Capstone() {
  usePageTitle("Capstone")
  return (
    <div className="flex flex-1 flex-col items-center justify-center">
      <div className="px-4 pb-4 md:p-10">
        <TypingHeadline
          cacheKey="capstone"
          segments={[
            { text: "The Stories Behind " },
            { text: "The Projects", className: "text-highlight" },
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
        <div className="mt-8">
          <Tabs defaultValue="opinion" className="w-full">
            <TabsList>
              <TabsTrigger value="opinion">Pendapat</TabsTrigger>
              <TabsTrigger value="learning">Pembelajaran</TabsTrigger>
              <TabsTrigger value="proud">Bangga</TabsTrigger>
            </TabsList>
            <TabsContent value="opinion">
              <TabsContentList
                headline={
                  <p className="font-serif text-lg font-medium italic">
                    Bagaimana{" "}
                    <span className="text-highlight underline">pendapatmu</span>{" "}
                    mengenai capstone project pada program coding camp ini?
                  </p>
                }
                data={opinion}
              />
            </TabsContent>
            <TabsContent value="learning">
              <TabsContentList
                headline={
                  <p className="font-serif text-lg font-medium italic">
                    Apa{" "}
                    <span className="text-highlight underline">
                      pelajaran terbesar
                    </span>{" "}
                    yang kamu dapatkan selama mengerjakan capstone project?
                  </p>
                }
                data={learning}
              />
            </TabsContent>
            <TabsContent value="proud">
              <TabsContentList
                headline={
                  <p className="font-serif text-lg font-medium italic">
                    Hal apa yang paling{" "}
                    <span className="text-highlight underline">
                      membuatmu bangga
                    </span>{" "}
                    dari capstone project kalian?
                  </p>
                }
                data={proud}
              />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
