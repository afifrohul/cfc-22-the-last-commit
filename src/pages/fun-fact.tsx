import TypingHeadline from "@/components/typing-headline"
import { funFact } from "@/lib/data/fun-fact-data"
import MasonryContentList from "@/components/masonry-content-list"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { usePageTitle } from "@/hooks/use-page-title"

const tab = funFact.map((item) => {
  return { name: item.name, content: item.tab }
})
const web = funFact.map((item) => {
  return { name: item.name, content: item.web }
})
const friend = funFact.map((item) => {
  return { name: item.name, content: item.friend }
})

export default function FunFact() {
  usePageTitle("Fun Fact")
  return (
    <div className="flex flex-1 flex-col items-center justify-center">
      <div className="px-4 pb-4 md:p-10">
        <TypingHeadline
          cacheKey="funFact"
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
        <div className="mt-8">
          <Tabs defaultValue="tab" className="w-full">
            <TabsList>
              <TabsTrigger value="tab">Tab Browser</TabsTrigger>
              <TabsTrigger value="website">Website Favorit</TabsTrigger>
              <TabsTrigger value="friend">Teman Belajar</TabsTrigger>
            </TabsList>
            <TabsContent value="tab">
              <MasonryContentList
                headline={
                  <p className="font-serif text-lg font-medium italic">
                    Berapa{" "}
                    <span className="text-rose-500 underline">
                      tab browser terbanyak
                    </span>{" "}
                    yang pernah terbuka saat mengerjakan capstone?
                  </p>
                }
                data={tab}
              />
            </TabsContent>
            <TabsContent value="website">
              <MasonryContentList
                headline={
                  <p className="font-serif text-lg font-medium italic">
                    <span className="text-rose-500 underline">Website</span>{" "}
                    yang paling sering kamu buka selama Coding Camp?
                  </p>
                }
                data={web}
              />
            </TabsContent>
            <TabsContent value="friend">
              <MasonryContentList
                headline={
                  <p className="font-serif text-lg font-medium italic">
                    Apa yang selalu{" "}
                    <span className="text-rose-500 underline">menemanimu</span>{" "}
                    saat belajar atau mengerjakan capstone?
                  </p>
                }
                data={friend}
              />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
