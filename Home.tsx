import { Book, Coffee, Moon } from "lucide-react";

const HERO_BG =
  "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1200&auto=format&fit=crop";

export default function HomePage() {
  return (
    <main className="bg-[#f6f1e7] min-h-screen font-sans text-[#2b2b2b]">

      {/* HERO */}
      <section className="max-w-4xl mx-auto px-6 pt-10">
        <p className="font-serif text-lg">Sepucuk Surat</p>

        <h1 className="font-serif text-3xl mt-2 leading-snug">
          Catatan kecil dari seseorang yang masih belajar hadir.
        </h1>

        <img
          src={HERO_BG}
          className="w-full rounded-xl mt-6 shadow-sm"
        />

        <p className="font-serif mt-6 text-lg">Wildan Ferdiansyah</p>

        <p className="mt-2 leading-relaxed">
          Bukan penulis profesional. Bukan motivator. Hanya seseorang yang mencoba memahami hidupnya melalui kata-kata.
        </p>

        <p className="italic mt-2">
          "Kita semua pernah lelah. Tapi kita masih di sini."
        </p>
      </section>

      {/* TENTANG HUJAN */}
      <section className="max-w-4xl mx-auto px-6 mt-16">
        <Book className="mb-3" />
        <h2 className="font-serif text-2xl">Tentang Hujan</h2>

        <p className="mt-3 leading-relaxed">
          Hujan selalu datang tanpa izin. Seperti rindu yang tiba-tiba muncul saat kita sedang sibuk melupakan.
        </p>

        <p className="mt-3 leading-relaxed">
          Kita belajar bahwa tidak semua hal harus dijelaskan. Ada rasa yang cukup dipahami tanpa banyak kata.
        </p>
      </section>

      {/* TENTANG KOPI */}
      <section className="max-w-4xl mx-auto px-6 mt-16">
        <Coffee className="mb-3" />
        <h2 className="font-serif text-2xl">Tentang Kopi yang Dingin</h2>

        <p className="mt-3 leading-relaxed">
          Kopi yang dingin bukan berarti gagal. Mungkin kita hanya terlalu lama menikmati percakapan yang hangat.
        </p>

        <p className="mt-3 leading-relaxed">
          Di antara jeda-jeda kecil, kita menemukan bahwa waktu tidak pernah benar-benar hilang — ia hanya berubah bentuk menjadi cerita.
        </p>
      </section>

      {/* RUANG SUNYI */}
      <section className="max-w-4xl mx-auto px-6 mt-16">
        <Moon className="mb-3" />
        <h2 className="font-serif text-2xl">Ruang Sunyi</h2>

        <p className="mt-3 leading-relaxed">
          Kadang kita tidak butuh jawaban. Cukup tempat untuk duduk dan bernapas pelan.
        </p>

        <p className="mt-3 leading-relaxed">
          Sunyi bukan musuh, ia hanya ruang kosong tempat pikiran kita beristirahat.
        </p>

        <p className="mt-3 leading-relaxed">
          Mungkin hidup tidak harus selalu keras. Mungkin cukup berjalan pelan.
        </p>
      </section>

      {/* CATATAN BELUM SELESAI */}
      <section className="max-w-4xl mx-auto px-6 py-24 text-center">
        <h2 className="font-serif text-3xl">Catatan yang Belum Selesai</h2>

        <p className="mt-6 leading-relaxed">
          Website ini bukan akhir dari perjalanan. Ia hanya halaman pertama dari buku yang masih ditulis pelan.
        </p>

        <p className="mt-3 leading-relaxed">
          Setiap scroll adalah lembar baru. Setiap kata adalah langkah kecil menuju versi diri yang lebih tenang.
        </p>
      </section>

      {/* SEPOTONG SURAT */}
      <section className="max-w-4xl mx-auto px-6">
        <h2 className="font-serif text-3xl">Sepotong Surat</h2>

        <p className="mt-4 leading-relaxed">
          Kadang kita menulis bukan untuk dibaca orang lain, tapi agar hati kita sendiri tidak terlalu penuh.
        </p>

        <p className="mt-3 leading-relaxed">
          Ada hal-hal yang tidak bisa diucapkan keras, hanya bisa ditaruh pelan di antara paragraf.
        </p>

        <p className="mt-3 leading-relaxed">
          Jika suatu hari kamu membaca ini, mungkin kita tidak saling kenal.
        </p>

        <p className="mt-3 leading-relaxed">
          Dan mungkin itu sudah cukup.
        </p>

        <p className="mt-12 text-center font-serif text-sm opacity-70">
          Sepucuk Surat — ditulis pelan oleh Wildan Ferdiansyah
        </p>
      </section>

      {/* RAK CATATAN */}
      <section className="max-w-4xl mx-auto px-6 py-24 space-y-14">
        <h2 className="font-serif text-3xl">
          Rak Catatan yang Tersisa
        </h2>

        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="space-y-3">
            <h3 className="font-serif text-xl">
              Halaman {i + 1}
            </h3>

            <p className="leading-relaxed">
              Tidak semua tulisan lahir dari keberanian. Beberapa muncul karena kita terlalu lama diam.
            </p>

            <p className="leading-relaxed">
              Ada kalimat yang ditulis sambil menunggu kopi dingin, ada juga yang lahir di antara suara hujan malam.
            </p>
          </div>
        ))}
      </section>

      {/* SECTION 6 */}
      <section className="max-w-4xl mx-auto px-6 mt-20">
        <h2 className="font-serif text-3xl">Jejak yang Tidak Terlihat</h2>

        <p className="mt-4 leading-relaxed">
          Ada langkah-langkah kecil yang tidak pernah tercatat. Bukan karena tidak penting, tapi karena ia terjadi diam-diam di dalam diri.
        </p>

        <p className="mt-4 leading-relaxed">
          Kita tumbuh bukan hanya dari keputusan besar, tetapi dari keberanian kecil yang sering bahkan kita sendiri lupa pernah memilikinya.
        </p>

        <p className="mt-4 leading-relaxed">
          Mungkin perubahan terbesar bukan saat dunia melihat kita berbeda, tetapi saat kita akhirnya bisa berdamai dengan versi lama diri sendiri.
        </p>
      </section>

      {/* SECTION 7 */}
      <section className="max-w-4xl mx-auto px-6 mt-20">
        <h2 className="font-serif text-3xl">Halaman yang Masih Kosong</h2>

        <p className="mt-4 leading-relaxed">
          Tidak semua halaman harus langsung diisi. Ada bagian hidup yang memang membutuhkan jeda agar kata-kata menemukan bentuknya sendiri.
        </p>

        <p className="mt-4 leading-relaxed">
          Kita mungkin belum tahu cerita apa yang akan datang setelah ini, tapi mungkin itu justru yang membuat perjalanan terasa hidup.
        </p>

        <p className="mt-4 leading-relaxed">
          Selama masih ada ruang kosong, berarti kita masih punya kesempatan untuk menulis sesuatu yang baru.
        </p>
      </section>

      {/* FOOTER */}
      <footer className="max-w-4xl mx-auto px-6 mt-28 pb-20 text-center text-sm opacity-70 font-serif">
        Sepucuk Surat — halaman yang terus berubah perlahan.
      </footer>

    </main>
  );
}
