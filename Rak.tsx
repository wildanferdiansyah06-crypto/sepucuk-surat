import { Link } from "react-router-dom";
import { ArrowLeft, Plus } from "lucide-react";

const BUKU = [
{
id: 1,
judul: "Seni Menyeduh Kehidupan",
penulis: "Wildan Ferdiansyah",
cover: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=800"
},
{
id: 2,
judul: "Di Balik Bar",
penulis: "Wildan Ferdiansyah",
cover: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=800"
},
{
id: 3,
judul: "Di Atas Cangkir Yang Sama",
penulis: "Wildan Ferdiansyah",
cover: "https://images.unsplash.com/photo-1498804103079-a6351b050096?q=80&w=800"
},
{
id: 4,
judul: "Kami Menulis Pelan",
penulis: "Wildan Ferdiansyah",
cover: "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=800"
}
];

export default function Rak() {

return (
<div className="min-h-screen bg-[#f6f4ef] dark:bg-[#1c1c1c] text-black dark:text-white">

  <div className="max-w-5xl mx-auto px-6 py-10">

    {/* HEADER */}
    <div className="flex items-center justify-between mb-8">

      <Link
        to="/"
        className="flex items-center gap-2 px-4 py-2 rounded-full bg-black text-white dark:bg-white dark:text-black text-sm hover:opacity-80 transition"
      >
        <ArrowLeft size={16} />
        Kembali ke Beranda
      </Link>

      <a
        href="mailto:kelaspekerja.site@gmail.com"
        className="flex items-center gap-2 px-4 py-2 rounded-full border border-current text-sm hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition"
      >
        <Plus size={16} />
        Tambahkan Bukumu
      </a>

    </div>

    {/* TITLE */}
    <div className="mb-10">

      <h1 className="text-4xl font-serif">
        Rak Buku
      </h1>

      <p className="opacity-60 mt-2 max-w-md text-sm">
        Tempat buku-buku kecil yang lahir dari malam panjang, kopi hangat,
        dan mereka yang tetap menulis meski lelah bekerja.
      </p>

    </div>

    {/* GRID */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

      {BUKU.map((buku) => (

        <Link
          key={buku.id}
          to={`/buku/${buku.id}`}
          className="group"
        >

          <div className="bg-white dark:bg-[#2a2a2a] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition flex flex-col h-full">

            {/* COVER */}
            <div className="aspect-[3/4] overflow-hidden">

              <img
                src={buku.cover}
                className="w-full h-full object-cover group-hover:scale-105 transition"
              />

            </div>

            {/* INFO */}
            <div className="p-4 flex flex-col justify-between flex-1">

              <div>

                <h3 className="text-sm font-medium leading-snug line-clamp-2">
                  {buku.judul}
                </h3>

                <p className="text-xs opacity-60 mt-1">
                  {buku.penulis}
                </p>

              </div>

            </div>

          </div>

        </Link>

      ))}

    </div>

    {/* FOOTER */}
    <div className="text-center mt-16 text-xs opacity-40">
      Kelas Pekerja — Arsip Sunyi Orang-Orang yang Tetap Bekerja
    </div>

  </div>

</div>

);
}
