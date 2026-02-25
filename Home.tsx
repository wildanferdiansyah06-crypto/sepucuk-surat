import { ExternalLink } from "lucide-react";

const HERO_BG = "/barista.jpg"; // kalau belum ada, bisa ganti ke foto lain di public
const AUTHOR_PHOTO = "/wildan.jpg";

const books = [
  {
    title: "Seni Menyeduh Kehidupan",
    link: "https://drive.google.com/file/d/17Zd1FKFK4X_vmKhITFU5lXihOmMEkezI/view",
  },
  {
    title: "Di Balik Bar",
    link: "https://drive.google.com/file/d/1N1zwGLqkbVQOzFV_fpRXJxQdawbgZGAl/view",
  },
  {
    title: "Di Atas Cangkir yang Sama",
    link: "https://drive.google.com/file/d/1cqRI8rfb7_0MIUXLekZJtV0xTFKXr-CD/view",
  },
  {
    title: "Kami Menulis Pelan",
    link: "https://drive.google.com/file/d/1Mc6pOQ5z2xSn8Wmhf65kdgTrv5T5EzPm/view",
  },
];

export default function HomePage() {
  return (
    <main className="bg-[#f6f1e7] text-[#2b2b2b] font-sans overflow-hidden">

      {/* HERO CINEMATIC */}
      <section className="relative h-[72vh] flex items-end">
        <img
          src={HERO_BG}
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-[#f6f1e7]" />

        <div className="relative max-w-5xl mx-auto px-6 pb-16 text-white">
          <p className="font-serif text-lg opacity-80">
            Sepucuk Surat
          </p>

          <h1 className="font-serif text-4xl md:text-5xl leading-tight mt-3">
            Catatan sunyi dari seorang barista yang menulis pelan.
          </h1>
        </div>
      </section>

      {/* SECTION PENULIS */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-14 items-center">

          <div className="relative rounded-2xl overflow-hidden shadow-md">
            <img
              src={AUTHOR_PHOTO}
              className="w-full h-[440px] object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#f6f1e7]" />
          </div>

          <div>
            <p className="font-serif text-2xl">
              Wildan Ferdiansyah
            </p>

            <p className="mt-4 leading-loose text-[#3b3733]">
              Website ini bukan tempat membaca panjang.
              Ia hanya ruang singgah sebelum kamu membuka halaman
              yang sebenarnya.
            </p>

            <p className="mt-4 italic font-serif opacity-70">
              “Tulisan tidak selalu ingin dimengerti. Kadang hanya ingin ditemani.”
            </p>
          </div>
        </div>
      </section>

      {/* CUPLIKAN TEASER */}
      <section className="max-w-3xl mx-auto px-6 space-y-12 text-center">
        <p className="font-serif text-xl italic">
          “Tidak semua kata ingin dibaca keras.”
        </p>

        <p className="font-serif text-xl italic">
          “Kopi bisa dingin, tapi cerita tetap hangat.”
        </p>

        <p className="font-serif text-xl italic">
          “Ada halaman yang hanya bisa dipahami ketika kamu berhenti terburu-buru.”
        </p>
      </section>

      {/* RAK BUKU CINEMATIC */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <h2 className="font-serif text-3xl text-center mb-12">
          Rak Buku Sunyi
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {books.map((book, i) => (
            <a
              key={i}
              href={book.link}
              target="_blank"
              className="group rounded-2xl bg-[#f3eee5] p-10 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
            >
              <h3 className="font-serif text-2xl">
                {book.title}
              </h3>

              <p className="mt-6 flex items-center gap-2 text-sm opacity-70 group-hover:opacity-100">
                Baca Versi Lengkap
                <ExternalLink size={16} />
              </p>
            </a>
          ))}
        </div>
      </section>

      {/* FOOTER SUNYI */}
      <footer className="text-center pb-24 opacity-60 font-serif">
        Sepucuk Surat — bukan tempat tinggal, hanya ruang singgah.
      </footer>

    </main>
  );
}
