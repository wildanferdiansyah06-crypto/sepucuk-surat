import { useEffect, useRef, useState } from "react";
import { Coffee } from "lucide-react";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#f6f1ea] text-[#3b342d]">

      {/* HERO */}
      <section className="px-6 py-20 text-center">
        <h1 className="text-3xl font-serif mb-4">
          Sepucuk Surat
        </h1>
        <p className="max-w-md mx-auto text-sm opacity-70">
          Catatan kecil dari seseorang yang masih belajar hadir.
        </p>
      </section>

      {/* FOTO PENULIS */}
      <section className="max-w-xl mx-auto px-6">
        <img
          src="https://019c8974-d4c3-798e-8258-950186b05cb3.mochausercontent.com/barista-hero.png"
          className="rounded-xl w-full mb-6"
        />

        <h2 className="font-serif text-lg mb-2">
          Wildan Ferdiansyah
        </h2>

        <p className="text-sm opacity-70 leading-relaxed">
          Bukan penulis profesional. Bukan motivator. Hanya seseorang yang mencoba
          memahami hidupnya melalui kata-kata.
        </p>
      </section>

      {/* QUOTE */}
      <section className="px-6 py-20 text-center">
        <p className="italic text-sm opacity-80">
          “Kita semua pernah lelah. Tapi kita masih di sini.”
        </p>
      </section>

    </main>
  );
}
