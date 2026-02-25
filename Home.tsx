import { Book, Coffee, Moon } from "lucide-react";

const HERO_IMG =
  "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200&auto=format&fit=crop";

export default function HomePage() {
  return (
    <main className="bg-[#f6f1e7] min-h-screen font-sans text-[#2b2b2b]">
      {/* ===== WRAPPER ===== */}
      <div className="max-w-4xl mx-auto px-6 py-14">

        {/* ===== HERO ===== */}
        <section className="space-y-6 animate-fade-in-up">
          <p className="font-serif text-lg opacity-70">Sepucuk Surat</p>

          <h1 className="font-serif text-4xl leading-snug">
            Catatan kecil dari seseorang yang masih belajar hadir.
          </h1>

          <img
            src={HERO_IMG}
            className="w-full rounded-3xl shadow-xl mt-6"
          />

          <p className="font-serif mt-6 text-lg">Wildan Ferdiansyah</p>

          <p className="mt-2 leading-relaxed">
            Bukan penulis profesional. Bukan motivator. Hanya seseorang yang
            mencoba memahami hidupnya melalui kata-kata.
          </p>

          <p className="italic mt-2 opacity-80">
            “Kita semua pernah lelah. Tapi kita masih di sini.”
          </p>
        </section>

        {/* ===== SPACER ===== */}
        <div className="h-20"></div>

        {/* ===== SECTION HUJAN ===== */}
        <section className="max-w-3xl space-y-4 animate-fade-in-up-delay-1">
          <Book className="mb-3" />

          <h2 className="font-serif text-2xl">Tentang Hujan</h2>

          <p className="leading-relaxed">
            Hujan selalu datang tanpa izin. Seperti rindu yang tiba-tiba muncul
            saat kita sedang sibuk melupakan. Kadang bukan hujannya yang membuat
            dingin, tapi kenangan yang ikut turun bersamanya.
          </p>

          <p className="leading-relaxed">
            Kita belajar bahwa tidak semua hal harus dijelaskan. Ada rasa yang
            cukup dipahami tanpa banyak kata. Ada jeda yang tidak perlu diisi
            suara.
          </p>
        </section>

        {/* ===== SPACER ===== */}
        <div className="h-24"></div>

        {/* ===== SECTION KOPI ===== */}
        <section className="max-w-3xl space-y-4 animate-fade-in-up-delay-2">
          <Coffee className="mb-3" />

          <h2 className="font-serif text-2xl">
            Tentang Kopi yang Dingin
          </h2>

          <p className="leading-relaxed">
            Kopi yang dingin bukan berarti gagal. Mungkin kita hanya terlalu
            lama menikmati percakapan yang hangat.
          </p>

          <p className="leading-relaxed">
            Di antara jeda-jeda kecil, kita menemukan bahwa waktu tidak pernah
            benar-benar hilang — ia hanya berubah bentuk menjadi cerita.
          </p>

          <p className="leading-relaxed">
            Seperti espresso yang perlahan kehilangan uapnya, ada momen yang
            tidak perlu dikejar. Cukup dirasakan.
          </p>
        </section>

        {/* ===== SPACER ===== */}
        <div className="h-24"></div>

        {/* ===== SECTION SUNYI ===== */}
        <section className="max-w-3xl space-y-4 animate-fade-in-up-delay-3">
          <Moon className="mb-3" />

          <h2 className="font-serif text-2xl">Ruang Sunyi</h2>

          <p className="leading-relaxed">
            Kadang kita tidak butuh jawaban. Cukup tempat untuk duduk dan
            bernapas pelan. Sunyi bukan musuh, ia hanya ruang kosong tempat
            pikiran kita beristirahat.
          </p>

          <p className="leading-relaxed">
            Mungkin hidup tidak harus selalu keras. Mungkin cukup berjalan
            pelan, sambil membawa secangkir kopi dan beberapa kalimat yang belum
            selesai.
          </p>
        </section>

        {/* ===== EXTRA SPACE BIAR PANJANG ===== */}
        <div className="h-32"></div>
      </div>
    </main>
  );
}
