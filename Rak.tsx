import { RAK_BUKU } from "./rak-data";

export default function Rak() {
return (
<div className="min-h-screen px-6 py-12 max-w-5xl mx-auto">

  <h1 className="text-2xl font-serif mb-8">
    Rak Buku Komunitas
  </h1>

  {/* GRID BUKU */}
  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

    {RAK_BUKU.map((buku) => (
      <a
        key={buku.id}
        href={buku.link}
        target="_blank"
        className="group"
      >
        <div className="aspect-[3/4] overflow-hidden rounded-xl mb-3">
          <img
            src={buku.cover}
            className="w-full h-full object-cover group-hover:scale-105 transition"
          />
        </div>

        <h3 className="text-sm font-semibold">
          {buku.judul}
        </h3>

        <p className="text-xs opacity-60">
          {buku.penulis}
        </p>
      </a>
    ))}

  </div>

  {/* TAMBAH BUKU */}
  <div className="mt-16 text-center text-sm opacity-70">
    <p>
      Ingin menambahkan buku ke rak ini?
    </p>

    <p className="mt-2">
      Hubungi pengelola Kelas Pekerja.
    </p>
  </div>

</div>

);
}
