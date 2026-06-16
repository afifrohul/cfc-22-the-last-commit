import TypingHeadline from "@/components/typing-headline"
import { usePageTitle } from "@/hooks/use-page-title"

export default function FinalMessage() {
  usePageTitle("Final Message")
  return (
    <div className="flex flex-1 flex-col items-center justify-center">
      <div className="px-4 pb-4 md:p-10">
        <TypingHeadline
          cacheKey="FinalMessage"
          segments={[
            { text: "Before  " },
            { text: "We Go", className: "text-highlight" },
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
          <p>Halo Cohort CFC-22 👋</p>
          <p>Semoga kalian selalu dalam keadaan sehat dan baik-baik saja.</p>
          <p>
            Tidak terasa perjalanan kita di Coding Camp sudah hampir sampai di
            penghujung. Sebelum benar-benar berpisah dan melanjutkan perjalanan
            masing-masing, ada beberapa hal yang ingin aku sampaikan untuk
            terakhir kalinya.
          </p>
          <p>
            Pertama, setelah program ini berakhir, jangan berhenti belajar.
            Teruslah mencari ilmu, teruslah berkembang, dan teruslah berjuang
            mengejar impian yang ingin kalian wujudkan. Selama beberapa bulan
            terakhir, kalian sudah membuktikan bahwa kalian mampu bertahan,
            beradaptasi, dan berkembang. Pertahankan hal itu.
          </p>
          <p>
            Seperti yang pernah aku sampaikan sebelumnya, hal baik sekecil apa
            pun yang kalian dapatkan hari ini bisa menjadi bekal yang sangat
            berharga di masa depan. Karena itu, aku selalu menyarankan untuk
            mulai membangun kebiasaan dari hal-hal kecil. Temukan bentuk
            konsistensi kalian sendiri. Konsistensi tidak selalu berarti
            melakukan sesuatu setiap hari. Konsistensi adalah tentang menemukan
            ritme yang sesuai dengan kemampuan dan kondisi kalian, lalu
            menjaganya dalam jangka panjang.
          </p>
          <p>
            Sejujurnya, aku juga sangat bersyukur bisa menjadi fasilitator
            kalian selama program ini berlangsung. Ada banyak hal yang aku
            pelajari dan dapatkan dari pengalaman ini. Salah satunya adalah
            kesempatan untuk terus mengasah kemampuan berkomunikasi melalui
            interaksi dengan kalian. Dari sisi teknis, aku juga kembali
            mempelajari berbagai materi fundamental yang membuat pondasi
            pengetahuanku semakin kuat. Jika suatu saat nanti kalian mendapatkan
            kesempatan untuk menjadi fasilitator di program serupa, aku sangat
            menyarankan untuk mencobanya. Pengalaman dan manfaat yang didapatkan
            jauh lebih besar daripada yang mungkin kalian bayangkan.
          </p>
          <p>Dan sekarang, izinkan aku menyampaikan satu pengingat terakhir.</p>
          <p>
            Setelah sekian banyak reminder yang mungkin pernah aku kirimkan
            selama program ini—mulai dari deadline, agenda, tugas, hingga
            berbagai kegiatan lainnya—anggaplah ini sebagai reminder terakhir
            dari seorang fasilitator yang pernah menemani perjalanan kalian.
          </p>
          <p>
            Aku tahu kalian telah berkembang dalam banyak aspek selama program
            ini berlangsung. Aku juga selalu berusaha membantu semampuku,
            menciptakan lingkungan yang nyaman untuk belajar, mengingatkan
            berbagai agenda, dan mendampingi kalian selama proses ini berjalan.
            Namun ada satu hal yang menurutku penting untuk kalian sadari.
          </p>
          <p>
            Lingkungan yang nyaman memang membantu proses belajar. Tetapi jika
            tidak dikelola dengan baik, kenyamanan juga bisa membuat seseorang
            terlena.
          </p>
          <p>
            Aku menyadari bahwa selama menjadi fasilitator, aku sering berusaha
            membantu mengingatkan berbagai hal yang mungkin kalian lewatkan. Dan
            memang, itu adalah bagian dari peran seorang fasilitator:
            mendampingi cohort selama proses belajar. Namun setelah program ini
            berakhir, tidak semua perjalanan yang akan kalian hadapi akan
            senyaman Coding Camp. Tidak selalu akan ada seseorang yang
            mengingatkan deadline kalian. Tidak selalu akan ada seseorang yang
            memastikan kalian berada di jalur yang benar. Tidak selalu akan ada
            fasilitator yang siap membantu ketika kalian mengalami kesulitan.
          </p>
          <p className="font-bold text-highlight">
            Karena itu, pesan terakhirku adalah: belajarlah untuk bergantung
            kepada diri kalian sendiri terlebih dahulu.
          </p>
          <p>
            Mulailah lebih peka terhadap lingkungan sekitar. Biasakan diri untuk
            memperhatikan jadwal, tanggung jawab, dan komitmen yang kalian
            miliki. Bangun kesadaran untuk mengatur dan mengingatkan diri
            sendiri sebelum bergantung kepada orang lain. Dengan begitu, ke mana
            pun perjalanan kalian setelah ini membawa kalian, setidaknya kalian
            memiliki kemampuan untuk berdiri di atas kaki sendiri dan tetap
            melangkah ketika tidak ada siapa pun yang menuntun.
          </p>
          <p>
            Terima kasih atas seluruh cerita, kerja keras, diskusi, tawa, dan
            perjalanan yang telah kita lalui bersama.
          </p>
          <p>
            Semoga apa yang kalian pelajari di Coding Camp tidak berhenti
            sebagai sebuah program, tetapi menjadi bagian dari perjalanan
            panjang yang akan membawa kalian menuju versi terbaik dari diri
            kalian sendiri.
          </p>
          <p>Sampai jumpa di perjalanan berikutnya 🙌</p>
          <p>— Fasilitator CFC-22 | Afif Rohul Abrori</p>
        </div>
      </div>
    </div>
  )
}
