import { Coffee, Moon, Book } from "lucide-react";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#f6f1ea] text-[#3b342d] font-serif">

      {/* HERO */}
      <section className="px-6 pt-20 pb-10 text-center max-w-xl mx-auto">
        <h1 className="text-2xl tracking-wide mb-2">
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
          className="rounded-xl w-full mb-6 shadow-md"
        />

        <h2 className="text-lg mb-2">
          Wildan Ferdiansyah
        </h2>

        <p className="text-sm opacity-80 leading-relaxed mb-10">
          Bukan penulis profesional. Bukan motivator. Hanya seseorang yang
          mencoba memahami hidupnya melalui kata-kata.
        </p>

        <p className="italic text-sm text-center mb-16 opacity-80">
          “Kita semua pernah lelah. Tapi kita masih di sini.”
        </p>
      </section>

      {/* SECTION LIST */}
      <section className="px-6 pb-24 max-w-xl mx-auto space-y-10 text-sm leading-relaxed">

        <div className="flex gap-3 items-start">
          <Book className="w-5 h-5 mt-1 opacity-60"/>
          <div>
            <p className="text-base mb-1">Tentang Hujan</p>
            <p className="opacity-80">
              Hujan selalu datang tanpa izin. Seperti rindu yang tiba-tiba muncul
              saat kita sedang sibuk melupakan.
            </p>
          </div>
        </div>

        <div className="flex gap-3 items-start">
          <Coffee className="w-5 h-5 mt-1 opacity-60"/>
          <div>
            <p className="text-base mb-1">Tentang Kopi yang Dingin</p>
            <p className="opacity-80">
              Kopi yang dingin bukan berarti gagal. Mungkin kita hanya terlalu
              lama menikmati percakapan yang hangat.
            </p>
          </div>
        </div>

        <div className="flex gap-3 items-start">
          <Moon className="w-5 h-5 mt-1 opacity-60"/>
          <div>
            <p className="text-base mb-1">Ruang Sunyi</p>
            <p className="opacity-80">
              Kadang kita tidak butuh jawaban. Cukup tempat untuk duduk dan
              bernapas pelan.
            </p>
          </div>
        </div>

      </section>

    </main>
  );
}
