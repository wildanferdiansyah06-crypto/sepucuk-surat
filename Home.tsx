import { Book, Coffee, Moon } from "lucide-react";

const BARISTA_BG =
  "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1400&auto=format&fit=crop";

export default function HomePage() {
  return (
    <main className="bg-[#f6f1e7] min-h-screen font-sans text-[#2b2b2b] relative before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_top,rgba(0,0,0,0.03),transparent_60%)] before:pointer-events-none">

      {/* HERO */}
      <section className="max-w-4xl mx-auto px-6 pt-16 animate-fade-in-up">
        <p className="font-serif text-lg opacity-70">Sepucuk Surat</p>

        <h1 className="font-serif text-4xl mt-3 leading-snug">
          Catatan kecil dari seseorang
          <br />
          yang masih belajar hadir.
        </h1>

        <img
          src={BARISTA_BG}
          className="w-full rounded-2xl mt-8 shadow-xl hover:scale-[1.01] transition duration-700"
        />

        <p className="font-serif mt-8 text-lg">Wildan Ferdiansyah</p>

        <p className="mt-3 text-base leading-relaxed max-w-2xl">
          Bukan penulis profesional. Bukan motivator. Hanya seseorang yang mencoba
          memahami hidupnya melalui kata-kata.
        </p>

        <p className="italic mt-4 opacity-80">
          “Kita semua pernah lelah. Tapi kita masih di sini.”
        </p>
      </section>

      {/* SECTION 1 */}
      <section className="max-w-4xl mx-auto px-6 mt-20 animate-fade-in-up">
        <Book className="mb-3 opacity-70" />

        <h2 className="font-serif text-2xl">Tentang Hujan</h2>

        <p className="mt-3 leading-relaxed max-w-2xl">
          Hujan selalu datang tanpa izin. Seperti rindu yang tiba-tiba muncul
          saat kita sedang sibuk melupakan. Kadang bukan hujannya yang membuat
          dingin, tapi kenangan yang ikut turun bersamanya.
        </p>

        <p className="mt-4 leading-relaxed max-w-2xl opacity-90">
          Kita belajar bahwa tidak semua hal harus dijelaskan. Ada rasa yang
          cukup dipahami tanpa banyak kata.
        </p>
      </section>

      {/* SECTION 2 */}
      <section className="max-w-4xl mx-auto px-6 mt-20 animate-fade-in-up">
        <Coffee className="mb-3 opacity-70" />

        <h2 className="font-serif text-2xl">Tentang Kopi yang Dingin</h2>

        <p className="mt-3 leading-relaxed max-w-2xl">
          Kopi yang dingin bukan berarti gagal. Mungkin kita hanya terlalu lama
          menikmati percakapan yang hangat.
        </p>

        <p className="mt-4 leading-relaxed max-w-2xl opacity-90">
          Di antara jeda-jeda kecil, kita menemukan bahwa waktu tidak pernah
          benar-benar hilang — ia hanya berubah bentuk menjadi cerita.
        </p>
      </section>

      {/* SECTION 3 */}
      <section className="max-w-4xl mx-auto px-6 mt-20 pb-24 animate-fade-in-up">
        <Moon className="mb-3 opacity-70" />

        <h2 className="font-serif text-2xl">Ruang Sunyi</h2>

        <p className="mt-3 leading-relaxed max-w-2xl">
          Kadang kita tidak butuh jawaban. Cukup tempat untuk duduk dan bernapas
          pelan. Sunyi bukan musuh, ia hanya ruang kosong tempat pikiran kita
          beristirahat.
        </p>

        <p className="mt-4 leading-relaxed max-w-2xl opacity-90">
          Mungkin hidup tidak harus selalu keras. Mungkin cukup berjalan pelan,
          sambil membawa secangkir kopi dan beberapa kalimat yang belum selesai.
        </p>
      </section>

    </main>
  );
}
