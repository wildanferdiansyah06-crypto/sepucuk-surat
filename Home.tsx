import { Coffee, Moon, Book } from "lucide-react";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#f6f1ea] text-[#3b342d]">

      {/* HERO */}
      <section className="px-6 py-24 text-center max-w-xl mx-auto">
        <h1 className="text-3xl font-serif mb-4">
          Sepucuk Surat
        </h1>
        <p className="text-sm opacity-70">
          Catatan kecil dari seseorang yang masih belajar hadir.
        </p>
      </section>

      {/* IMAGE */}
      <section className="max-w-xl mx-auto px-6">
        <img
          src="https://019c8974-d4c3-798e-8258-950186b05cb3.mochausercontent.com/barista-hero.png"
          className="rounded-xl w-full mb-6 shadow-sm"
        />

        <h2 className="font-serif text-lg mb-2">
          Wildan Ferdiansyah
        </h2>

        <p className="text-sm opacity-70 leading-relaxed">
          Bukan penulis profesional. Bukan motivator.
          Hanya seseorang yang mencoba memahami hidupnya melalui kata-kata.
        </p>
      </section>

      {/* QUOTE */}
      <section className="px-6 py-20 text-center">
        <p className="italic text-sm opacity-80 max-w-md mx-auto">
          “Kita semua pernah lelah. Tapi kita masih di sini.”
        </p>
      </section>

      {/* BOOK SECTION */}
      <section className="px-6 pb-24 max-w-xl mx-auto space-y-6">
        <div className="flex items-center gap-3">
          <Book className="w-4 h-4 opacity-60"/>
          <p className="text-sm font-serif">Tentang Hujan</p>
        </div>

        <p className="text-sm opacity-70 leading-relaxed">
          Hujan selalu datang tanpa izin.
          Seperti rindu yang tiba-tiba muncul saat kita sedang sibuk melupakan.
        </p>

        <div className="flex items-center gap-3">
          <Coffee className="w-4 h-4 opacity-60"/>
          <p className="text-sm font-serif">Tentang Kopi yang Dingin</p>
        </div>

        <p className="text-sm opacity-70 leading-relaxed">
          Kopi yang dingin bukan berarti gagal.
          Mungkin kita hanya terlalu lama menikmati percakapan yang hangat.
        </p>

        <div className="flex items-center gap-3">
          <Moon className="w-4 h-4 opacity-60"/>
          <p className="text-sm font-serif">Ruang Sunyi</p>
        </div>

        <p className="text-sm opacity-70 leading-relaxed">
          Kadang kita tidak butuh jawaban.
          Cukup tempat untuk duduk dan bernapas pelan.
        </p>
      </section>

    </main>
  );
}
