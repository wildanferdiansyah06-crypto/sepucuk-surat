import { Book, Coffee, Moon } from "lucide-react";

const BARISTA_BG =
  "https://019c8974-d4c3-798e-8258-950186b05cb3.mochausercontent.com/barista-hero.png";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#f3ede4] text-[#2f2923] font-serif leading-relaxed">
      <div className="max-w-3xl mx-auto px-6 py-10">

        {/* ===== HEADER ===== */}
        <p className="text-sm mb-2 opacity-70">Sepucuk Surat</p>
        <h1 className="text-2xl mb-6">
          Catatan kecil dari seseorang yang masih belajar hadir.
        </h1>

        {/* ===== HERO IMAGE ===== */}
        <img
          src={BARISTA_BG}
          className="rounded-2xl w-full mb-10 shadow-xl border border-[#e7ded1]"
        />

        {/* ===== AUTHOR ===== */}
        <p className="opacity-70 mb-1">Wildan Ferdiansyah</p>
        <p className="mb-6">
          Bukan penulis profesional. Bukan motivator. Hanya seseorang yang mencoba
          memahami hidupnya melalui kata-kata.
          <br />
          “Kita semua pernah lelah. Tapi kita masih di sini.”
        </p>

        {/* ===== SECTION 1 ===== */}
        <div className="flex gap-4 items-start bg-[#faf6f0] p-4 rounded-xl border border-[#e9e1d6] mb-6">
          <Book className="mt-1 opacity-70" />
          <div>
            <p className="opacity-70 mb-1">Tentang Hujan</p>
            <p>
              Hujan selalu datang tanpa izin. Seperti rindu yang tiba-tiba muncul
              saat kita sedang sibuk melupakan.
            </p>
          </div>
        </div>

        {/* ===== SECTION 2 ===== */}
        <div className="flex gap-4 items-start bg-[#faf6f0] p-4 rounded-xl border border-[#e9e1d6] mb-6">
          <Coffee className="mt-1 opacity-70" />
          <div>
            <p className="opacity-70 mb-1">Tentang Kopi yang Dingin</p>
            <p>
              Kopi yang dingin bukan berarti gagal. Mungkin kita hanya terlalu lama
              menikmati percakapan yang hangat.
            </p>
          </div>
        </div>

        {/* ===== SECTION 3 ===== */}
        <div className="flex gap-4 items-start bg-[#faf6f0] p-4 rounded-xl border border-[#e9e1d6] mb-6">
          <Moon className="mt-1 opacity-70" />
          <div>
            <p className="opacity-70 mb-1">Ruang Sunyi</p>
            <p>
              Kadang kita tidak butuh jawaban. Cukup tempat untuk duduk dan
              bernapas pelan.
            </p>
          </div>
        </div>

      </div>
    </main>
  );
}
