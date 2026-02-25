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

        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-[#f6f1e7]" />

        <div className="relative z-10 h-full flex items-end px-6 pb-16 max-w-4xl mx-auto">
          <div>
            <p className="font-serif text-sm text-white/80">Sepucuk Surat</p>
            <h1 className="font-serif text-3xl leading-snug text-white mt-2">
              Catatan sunyi dari seorang barista yang menulis pelan.
            </h1>
          </div>
        </div>
      </section>

{/* ================= TENTANG BUKU ================= */}
<section className="max-w-3xl mx-auto px-6 py-20 text-center">
  <p className="font-serif tracking-[0.2em] text-sm">TENTANG BUKU</p>

  <p className="mt-6 text-sm leading-relaxed">
    Ini adalah catatan-catatan dari seseorang yang masih belajar hadir—untuk dirinya sendiri,
    untuk orang-orang yang ia cintai, untuk hari-hari yang kadang terlalu berat untuk dilalui sendirian.
    Ditulis dalam keheningan malam, di sudut kedai kopi yang hampir tutup,
    di antara lagu-lagu yang terlalu jujur untuk didengar sendirian.
  </p>

  <div className="font-serif italic mt-10 space-y-4 text-sm text-[#555]">
    <p>“Tidak semua kata ingin dibaca keras.”</p>
    <p>“Kopi bisa dingin, tapi cerita tetap hangat.”</p>
    <p>“Ada halaman yang hanya bisa dipahami ketika kamu berhenti terburu-buru.”</p>
    <p>“Beberapa cerita tidak selesai di sini — mereka hanya dimulai.”</p>
    <p>“Ini bukan rak buku. Ini hanya meja kecil sebelum perjalanan panjang.”</p>
  </div>
</section>

{/* ================= BUKU INI UNTUK ================= */}
<section className="max-w-4xl mx-auto px-6 pb-24 space-y-6">
  <p className="text-center font-serif tracking-[0.2em] text-sm">BUKU INI UNTUK</p>

  {[
    "Untuk kamu yang membaca dengan pelan, bukan karena lambat—tapi karena ingin merasakan.",
    "Untuk kamu yang bekerja seharian dan baru bisa merenung saat dunia sudah tidur.",
    "Untuk kamu yang duduk sendiri dengan kopi dan kesunyian, dan merasa itu cukup.",
    "Untuk kamu yang sering merasa tak terlihat, tapi tetap hadir — setiap hari.",
  ].map((text, i) => (
    <div key={i} className="bg-[#f2ede4] rounded-2xl px-6 py-5 text-sm leading-relaxed shadow-sm">
      {text}
    </div>
  ))}
</section>

{/* ================= TENTANG PENULIS ================= */}
<section className="max-w-4xl mx-auto px-6 pb-24">
  <div className="relative overflow-hidden rounded-3xl bg-[#f2ede4] shadow-sm">

    {/* FOTO JADI BACKGROUND KIRI */}
    <img
      src="/wildan.png"
      className="absolute inset-y-0 left-0 h-full w-[45%] object-cover"
    />

    {/* GRADIENT FADE KE KANAN */}
    <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-[#f2ede4]/90 to-[#f2ede4]" />

    {/* CONTENT */}
    <div className="relative z-10 p-8 md:p-12 md:pl-[45%]">
      <p className="font-serif text-xl">Tentang Penulis</p>

      <div className="w-12 h-[1px] bg-[#d9d2c5] my-4"></div>

      <p className="text-sm leading-relaxed">
        Seorang barista yang lebih sering mendengar daripada berbicara.
        Menulis bukan untuk menjadi suara paling keras,
        tapi untuk memahami hal-hal kecil yang sering terlewat di antara jeda kopi.
      </p>

      <p className="mt-4 text-sm leading-relaxed">
        Website ini bukan rumah utama tulisan.
        Ia hanya halaman pembuka — tempat beberapa fragmen cerita ditinggalkan
        sebelum kamu membuka buku yang sebenarnya.
      </p>
    </div>

  </div>
</section>
      
{/* ================= CUPLIKAN ================= */}
<section className="max-w-4xl mx-auto px-6 pb-24 space-y-12">
  <p className="text-center font-serif tracking-[0.2em] text-sm">CUPLIKAN</p>

  {[
    "Ada hari-hari di mana aku hanya ingin menjadi secangkir kopi di tangan seseorang—hangat, hadir, dan cukup untuk menemani diam.",
    "Kita tidak butuh selalu kuat. Kadang, kita hanya butuh tahu bahwa ada yang mengerti—bahwa lelah kita bukan aib.",
    "Menulis adalah caraku untuk tetap di sini. Bukan untuk menjelaskan, tapi untuk mengingatkan diri sendiri bahwa aku masih merasakan."
  ].map((q, i) => (
    <div key={i} className="bg-[#f2ede4] rounded-2xl p-8 text-center font-serif italic shadow-sm">
      "{q}"
    </div>
  ))}
</section>

{/* ================= RAK BUKU ================= */}
<section className="max-w-4xl mx-auto px-6 pb-24">
  <h2 className="font-serif text-center text-2xl mb-12">Rak Buku Sunyi</h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {[
      "Seni Menyeduh Kehidupan",
      "Di Balik Bar",
      "Di Atas Cangkir yang Sama",
      "Kami Menulis Pelan"
    ].map((title, i) => (
      <a
        key={i}
        href="https://drive.google.com"
        target="_blank"
        className="bg-[#f2ede4] rounded-2xl p-8 transition hover:-translate-y-1 hover:shadow-md"
      >
        <p className="font-serif">{title}</p>
        <p className="text-sm mt-2 flex items-center gap-2">
          Lanjutkan Membaca <ExternalLink size={14} />
        </p>
      </a>
    ))}
  </div>

  <p className="text-center text-xs mt-16 text-[#777]">
    Sepucuk Surat — bukan tempat tinggal, hanya ruang singgah.
  </p>
</section>

{/* ================= RUANG SUNYI ================= */}
<section className="max-w-4xl mx-auto px-6 pb-32 space-y-6">
  <p className="text-center font-serif tracking-[0.2em] text-sm">RUANG SUNYI</p>

  {[
    ["Tentang Hujan","Hujan selalu datang tanpa izin. Seperti rindu yang tiba-tiba muncul saat kita sedang sibuk melupakan."],
    ["Tentang Menunggu","Ada keindahan dalam menunggu—bukan pada akhirnya, tapi pada kesabaran yang kita pelajari."],
    ["Tentang Kopi yang Dingin","Kopi yang dingin bukan berarti gagal. Mungkin kita hanya terlalu lama menikmati percakapan yang hangat."]
  ].map((item,i)=>(
    <div key={i} className="bg-[#f2ede4] rounded-2xl p-6 shadow-sm">
      <p className="font-serif">{item[0]}</p>
      <p className="text-sm mt-2">{item[1]}</p>
    </div>
  ))}
</section>

    </main>
  );
}
