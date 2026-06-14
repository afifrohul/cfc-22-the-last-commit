import TypingHeadline from "@/components/typing-headline"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import TabsContentItem from "@/components/tabs-content-item"
import { timeCapsule } from "@/lib/data/time-capsule-data"

const message = timeCapsule.map((item) => {
  return { name: item.name, content: item.message }
})
const hope = timeCapsule.map((item) => {
  return { name: item.name, content: item.hope }
})
const promise = timeCapsule.map((item) => {
  return { name: item.name, content: item.promise }
})

export default function TimeCapsule() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center">
      <div className="px-4 pb-4 md:p-10">
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
        <div className="mt-8">
          <Tabs defaultValue="message" className="w-full">
            <TabsList>
              <TabsTrigger value="message">Pesan</TabsTrigger>
              <TabsTrigger value="hope">Harapan</TabsTrigger>
              <TabsTrigger value="promise">Janji</TabsTrigger>
            </TabsList>
            <TabsContent value="message">
              <TabsContentItem
                headline={
                  <p className="font-serif text-lg font-medium italic">
                    Tulis <span className="text-rose-500 underline">pesan</span>{" "}
                    untuk dirimu sendiri yang akan membaca ini 5 tahun dari
                    sekarang.
                  </p>
                }
                data={message}
              />
            </TabsContent>
            <TabsContent value="hope">
              <TabsContentItem
                headline={
                  <p className="font-serif text-lg font-medium italic">
                    Dalam 5 tahun ke depan, kamu{" "}
                    <span className="text-rose-500 underline">berharap</span>{" "}
                    sedang berada di posisi seperti apa?
                  </p>
                }
                data={hope}
              />
            </TabsContent>
            <TabsContent value="promise">
              <TabsContentItem
                headline={
                  <p className="font-serif text-lg font-medium italic">
                    Satu <span className="text-rose-500 underline">janji</span>{" "}
                    yang ingin kamu buat untuk dirimu sendiri setelah Coding
                    Camp berakhir.
                  </p>
                }
                data={promise}
              />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
