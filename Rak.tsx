import { Link } from "react-router-dom";

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

  <div className="max-w-5xl mx-auto px-6 py-12">

    <Link
      to="/"
      className="text-sm opacity-60 hover:opacity-100"
    >
      ← Kembali
    </Link>

    <h1 className="text-3xl font-serif mt-6 mb-10">
      Rak Buku
    </h1>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

      {BUKU.map((buku) => (

        <Link
          key={buku.id}
          to={`/buku/${buku.id}`}
          className="group"
        >

          <div className="rounded-xl overflow-hidden shadow-md bg-white dark:bg-[#2a2a2a]">

            <img
              src={buku.cover}
              className="w-full h-40 object-cover group-hover:scale-105 transition"
            />

            <div className="p-3">

              <h3 className="text-sm font-medium">
                {buku.judul}
              </h3>

              <p className="text-xs opacity-60 mt-1">
                {buku.penulis}
              </p>

            </div>

          </div>

        </Link>

      ))}

    </div>

  </div>

</div>

);
}
