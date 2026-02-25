import { Book, Coffee, Moon } from "lucide-react";

const BARISTA_BG =
  "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1600&auto=format&fit=crop";

export default function HomePage() {
  return (
    <main className="bg-[#f6f1e7] min-h-screen font-sans text-[#2b2b2b]">
      
      {/* HERO */}
      <section className="max-w-4xl mx-auto px-6 pt-12">
        <p className="font-serif text-lg">Sepucuk Surat</p>

        <h1 className="font-serif text-4xl mt-2 leading-snug">
          Catatan kecil dari seseorang yang masih belajar hadir.
        </h1>

        <img
          src={BARISTA_BG}
          className="w-full rounded-2xl mt-8 shadow-lg"
        />

        <p className="font-serif mt-6 text-lg">Wildan Ferdiansyah</p>

        <p className="mt-2 text-base leading-relaxed">
          Bukan penulis profesional. Bukan motivator. Hanya seseorang yang
          mencoba memahami hidupnya melalui kata-kata.
        </p>

        <p className="italic mt-3">
          “Kita semua pernah lelah. Tapi kita masih di sini.”
        </p>
      </section>

      {/* SECTION 1 */}
      <section className="max-w-4xl mx-auto px-6 mt-16">
        <Book className="mb-3 opacity-70" />

        <h2 className="font-serif text-xl">Tentang Hujan</h2>

        <p className="mt-3 leading-relaxed">
          Hujan selalu datang tanpa izin. Seperti rindu yang tiba-tiba muncul
          saat kita sedang sibuk melupakan. Kadang bukan hujannya yang membuat
          dingin, tapi kenangan yang ikut turun bersamanya.
        </p>

        <p className="mt-4 leading-relaxed">
          Kita belajar bahwa tidak semua hal harus dijelaskan. Ada rasa yang
          cukup dipahami tanpa banyak kata.
        </p>
      </section>

      {/* SECTION 2 */}
      <section className="max-w-4xl mx-auto px-6 mt-16">
        <Coffee className="mb-3 opacity-70" />

        <h2 className="font-serif text-xl">Tentang Kopi yang Dingin</h2>

        <p className="mt-3 leading-relaxed">
          Kopi yang dingin bukan berarti gagal. Mungkin kita hanya terlalu lama
          menikmati percakapan yang hangat.
        </p>

        <p className="mt-4 leading-relaxed">
          Di antara jeda-jeda kecil, kita menemukan bahwa waktu tidak pernah
          benar-benar hilang — ia hanya berubah bentuk menjadi cerita.
        </p>
      </section>

      {/* SECTION 3 */}
      <section className="max-w-4xl mx-auto px-6 mt-16 pb-24">
        <Moon className="mb-3 opacity-70" />

        <h2 className="font-serif text-xl">Ruang Sunyi</h2>

        <p className="mt-3 leading-relaxed">
          Kadang kita tidak butuh jawaban. Cukup tempat untuk duduk dan bernapas
          pelan. Sunyi bukan musuh, ia hanya ruang kosong tempat pikiran kita
          beristirahat.
        </p>

        <p className="mt-4 leading-relaxed">
          Mungkin hidup tidak harus selalu keras. Mungkin cukup berjalan pelan,
          sambil membawa secangkir kopi dan beberapa kalimat yang belum selesai.
        </p>
      </section>

    </main>
  );
}
