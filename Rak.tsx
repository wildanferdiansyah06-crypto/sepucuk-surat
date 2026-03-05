import { useState } from "react";
import { RAK_BUKU } from "./rak-data";

export default function Rak() {

const [selectedBook, setSelectedBook] = useState<any>(null);

return (
<div className="min-h-screen px-6 py-12 max-w-5xl mx-auto">

  {/* Header */}
  <div className="mb-10">
    <h1 className="text-3xl font-serif mb-2">
      Rak Buku Komunitas
    </h1>

    <p className="text-sm opacity-60">
      Arsip tulisan dari mereka yang tetap bekerja, menulis, dan bertahan.
    </p>
  </div>

  {/* GRID BUKU */}
  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

    {RAK_BUKU.map((buku) => (

      <div
        key={buku.id}
        className="cursor-pointer group"
        onClick={() => setSelectedBook(buku)}
      >

        <div className="aspect-[3/4] overflow-hidden rounded-xl mb-3 bg-neutral-200">

          <img
            src={buku.cover}
            alt={buku.judul}
            className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
          />

        </div>

        <h3 className="text-sm font-semibold leading-tight">
          {buku.judul}
        </h3>

        <p className="text-xs opacity-60 mt-1">
          {buku.penulis}
        </p>

      </div>

    ))}

  </div>

  {/* MODAL PREVIEW */}
  {selectedBook && (

    <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-6 z-50">

      <div className="bg-white max-w-md w-full rounded-2xl p-6">

        <img
          src={selectedBook.cover}
          className="w-full rounded-lg mb-4"
        />

        <h2 className="text-xl font-semibold mb-2">
          {selectedBook.judul}
        </h2>

        <p className="text-sm opacity-70 mb-4">
          {selectedBook.deskripsi}
        </p>

        <div className="flex gap-3">

          <a
            href={selectedBook.link}
            target="_blank"
            className="px-4 py-2 bg-black text-white rounded-lg text-sm"
          >
            Baca Buku
          </a>

          <button
            onClick={() => setSelectedBook(null)}
            className="px-4 py-2 border rounded-lg text-sm"
          >
            Tutup
          </button>

        </div>

      </div>

    </div>

  )}

  {/* FOOTER */}
  <div className="mt-20 text-center text-sm opacity-70">

    <p>
      Ingin menambahkan buku ke rak ini?
    </p>

    <p className="mt-2">
      Hubungi pengelola Kelas Pekerja.
    </p>

  </div>

  <div className="mt-12 text-center">

    <a
      href="/"
      className="underline text-sm opacity-70 hover:opacity-100"
    >
      Kembali ke Beranda
    </a>

  </div>

</div>

);
}
