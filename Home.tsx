import { Book, Coffee, Moon } from "lucide-react";

const BARISTA_BG =
  "https://019c8974-d4c3-798e-8258-950186b05cb3.mochausercontent.com/barista-hero.png";

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
          src={BARISTA_BG}
          className="w-full rounded-xl mt-6"
        />

        <p className="font-serif mt-6 text-lg">Wildan Ferdiansyah</p>

        <p className="mt-2 text-base leading-relaxed">
          Bukan penulis profesional. Bukan motivator. Hanya seseorang yang mencoba memahami hidupnya melalui kata-kata.
        </p>

        <p className="italic mt-2">
          "Kita semua pernah lelah. Tapi kita masih di sini."
        </p>
      </section>

      {/* SECTION 1 */}
      <section className="max-w-4xl mx-auto px-6 mt-14">
        <Book className="mb-3" />
        <h2 className="font-serif text-xl">Tentang Hujan</h2>
        <p className="mt-2 leading-relaxed">
          Hujan selalu datang tanpa izin. Seperti rindu yang tiba-tiba muncul saat kita sedang sibuk melupakan.
        </p>
      </section>

      {/* SECTION 2 */}
      <section className="max-w-4xl mx-auto px-6 mt-14">
        <Coffee className="mb-3" />
        <h2 className="font-serif text-xl">Tentang Kopi yang Dingin</h2>
        <p className="mt-2 leading-relaxed">
          Kopi yang dingin bukan berarti gagal. Mungkin kita hanya terlalu lama menikmati percakapan yang hangat.
        </p>
      </section>

      {/* SECTION 3 */}
      <section className="max-w-4xl mx-auto px-6 mt-14 pb-24">
        <Moon className="mb-3" />
        <h2 className="font-serif text-xl">Ruang Sunyi</h2>
        <p className="mt-2 leading-relaxed">
          Kadang kita tidak butuh jawaban. Cukup tempat untuk duduk dan bernapas pelan.
        </p>
      </section>
    </main>
  );
}
