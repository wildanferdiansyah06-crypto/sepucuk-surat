import { ExternalLink } from "lucide-react";

const HERO_BG =
  "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1400&auto=format&fit=crop";

export default function HomePage() {
  return (
    <main className="bg-[#f6f1e7] text-[#2b2b2b] font-sans">

      {/* ================= HERO ================= */}
      <section className="relative h-[80vh] w-full overflow-hidden">
        <img
          src={HERO_BG}
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-[#f6f1e7]" />

        <div className="relative z-10 h-full flex items-end px-6 pb-16 max-w-4xl mx-auto">
          <div>
            <p className="font-serif text-sm text-white/80">Sepucuk Surat</p>
            <h1 className="font-serif text-3xl leading-snug text-white mt-2">
              Catatan sunyi dari seorang barista yang menulis pelan.
            </h1>
          </div>
        </div>
      </section>

{/* ================= INTRO ================= */}
<section className="max-w-3xl mx-auto px-6 py-16 text-center">
  <p className="font-serif text-lg">TENTANG BUKU</p>

  <p className="mt-4 text-sm leading-relaxed">
    Ini adalah catatan-catatan dari seseorang yang masih belajar hadir—untuk dirinya sendiri, untuk orang-orang yang ia cintai, untuk hari-hari yang kadang terlalu berat untuk dilalui sendirian.

Ditulis dalam keheningan malam, di sudut kedai kopi yang hampir tutup, di antara lagu-lagu yang terlalu jujur untuk didengar sendirian
  </p>

  <div className="font-serif italic mt-10 space-y-4 text-sm text-[#555]">
    <p>“Tidak semua kata ingin dibaca keras.”</p>
    <p>“Kopi bisa dingin, tapi cerita tetap hangat.”</p>
    <p>“Ada halaman yang hanya bisa dipahami ketika kamu berhenti terburu-buru.”</p>
    <p>“Beberapa cerita tidak selesai di sini — mereka hanya dimulai.”</p>
    <p>“Ini bukan rak buku. Ini hanya meja kecil sebelum perjalanan panjang.”</p>
  </div>
</section>

      {/* ================= TENTANG PENULIS ================= */}
      <section className="max-w-4xl mx-auto px-6 pb-20">
        <div className="bg-[#f2ede4] rounded-3xl shadow-sm p-6 md:p-10 flex flex-col md:flex-row gap-8 items-center">

          {/* FOTO LO */}
          <img
            src="/wildan.png"
            className="w-40 h-40 object-cover rounded-2xl"
          />

          {/* TEXT */}
          <div>
            <p className="font-serif text-xl">Tentang Penulis</p>

            <p className="mt-3 text-sm leading-relaxed">
              Seorang barista yang lebih sering mendengar daripada berbicara.
              Menulis bukan untuk menjadi suara paling keras, tapi untuk
              memahami hal-hal kecil yang sering terlewat di antara jeda kopi.
            </p>

            <p className="mt-3 text-sm leading-relaxed">
              Website ini bukan rumah utama tulisan. Ia hanya halaman pembuka —
              tempat beberapa fragmen cerita ditinggalkan sebelum kamu membuka
              buku yang sebenarnya.
            </p>
          </div>
        </div>
      </section>

      {/* ================= RAK BUKU ================= */}
      <section className="max-w-4xl mx-auto px-6 pb-20">
        <h2 className="font-serif text-center text-2xl mb-10">
          Rak Buku Sunyi
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <a
            href="https://drive.google.com"
            target="_blank"
            className="bg-[#f2ede4] rounded-2xl p-6 hover:shadow-md transition"
          >
            <p className="font-serif">Seni Menyeduh Kehidupan</p>
            <p className="text-sm mt-2 flex items-center gap-2">
              Lanjutkan Membaca <ExternalLink size={14} />
            </p>
          </a>

          <a
            href="https://drive.google.com"
            target="_blank"
            className="bg-[#f2ede4] rounded-2xl p-6 hover:shadow-md transition"
          >
            <p className="font-serif">Di Balik Bar</p>
            <p className="text-sm mt-2 flex items-center gap-2">
              Lanjutkan Membaca <ExternalLink size={14} />
            </p>
          </a>

          <a
            href="https://drive.google.com"
            target="_blank"
            className="bg-[#f2ede4] rounded-2xl p-6 hover:shadow-md transition"
          >
            <p className="font-serif">Di Atas Cangkir yang Sama</p>
            <p className="text-sm mt-2 flex items-center gap-2">
              Lanjutkan Membaca <ExternalLink size={14} />
            </p>
          </a>

          <a
            href="https://drive.google.com"
            target="_blank"
            className="bg-[#f2ede4] rounded-2xl p-6 hover:shadow-md transition"
          >
            <p className="font-serif">Kami Menulis Pelan</p>
            <p className="text-sm mt-2 flex items-center gap-2">
              Lanjutkan Membaca <ExternalLink size={14} />
            </p>
          </a>

        </div>

        <p className="text-center text-xs mt-14 text-[#777]">
          Sepucuk Surat — bukan tempat tinggal, hanya ruang singgah.
        </p>
      </section>

    </main>
  );
}
