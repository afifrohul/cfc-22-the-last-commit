import TabsContentList from "@/components/tabs-content-list"
import TypingHeadline from "@/components/typing-headline"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { usePageTitle } from "@/hooks/use-page-title"
import { journeys } from "@/lib/data/journey-data"

const expectation = journeys.map((item) => {
  return { name: item.name, content: item.expectation }
})
const challenge = journeys.map((item) => {
  return { name: item.name, content: item.challenge }
})
const grateful = journeys.map((item) => {
  return { name: item.name, content: item.grateful }
})
const changes = journeys.map((item) => {
  return { name: item.name, content: item.changes }
})

export default function Journey() {
  usePageTitle("Journey")
  return (
    <div className="flex flex-1 flex-col items-center justify-center">
      <div className="px-4 pb-4 md:p-10">
        <TypingHeadline
          cacheKey="journey"
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
        <div className="mt-8">
          <Tabs defaultValue="expectation" className="w-full">
            <TabsList>
              <TabsTrigger value="expectation">Ekspektasi</TabsTrigger>
              <TabsTrigger value="challenge">Tantangan</TabsTrigger>
              <TabsTrigger value="grateful">Bersyukur</TabsTrigger>
              <TabsTrigger value="changes">Perubahan</TabsTrigger>
            </TabsList>
            <TabsContent value="expectation">
              <TabsContentList
                headline={
                  <p className="font-serif text-lg font-medium italic">
                    Sebelum bergabung Coding Camp, apa{" "}
                    <span className="text-rose-500 underline">
                      ekspektasi atau kesan pertamamu
                    </span>{" "}
                    terhadap program ini?
                  </p>
                }
                data={expectation}
              />
            </TabsContent>
            <TabsContent value="challenge">
              <TabsContentList
                headline={
                  <p className="font-serif text-lg font-medium italic">
                    Apa{" "}
                    <span className="text-rose-500 underline">
                      tantangan terbesar
                    </span>{" "}
                    yang kamu hadapi selama mengikuti Coding Camp?
                  </p>
                }
                data={challenge}
              />
            </TabsContent>
            <TabsContent value="grateful">
              <TabsContentList
                headline={
                  <p className="font-serif text-lg font-medium italic">
                    Hal apa yang paling kamu{" "}
                    <span className="text-rose-500 underline"> syukuri</span>{" "}
                    dari perjalanan ini?
                  </p>
                }
                data={grateful}
              />
            </TabsContent>
            <TabsContent value="changes">
              <TabsContentList
                headline={
                  <p className="font-serif text-lg font-medium italic">
                    Apa{" "}
                    <span className="text-rose-500 underline">
                      perubahan terbesar
                    </span>{" "}
                    pada dirimu setelah mengikuti program ini?
                  </p>
                }
                data={changes}
              />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
