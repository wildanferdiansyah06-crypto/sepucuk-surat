import { useEffect, useRef, useState } from "react";
import { Book, Coffee, Moon, Heart, ExternalLink, Menu, X } from "lucide-react"; // sesuaikan path kalau beda

const BARISTA_BG =
  "https://019c8974-d4c3-798e-8258-950186b05cb3.mochausercontent.com/barista-hero.png";

export default function HomePage() {
  return (
    <main className="relative bg-[#f6f1ea] text-[#3a3126] overflow-hidden">

      {/* === GLOBAL DECOR === */}
      <CoffeeBeansDecor className="absolute top-24 left-4 w-16 opacity-20 pointer-events-none" />
      <SteamDecor className="absolute top-40 right-6 w-14 opacity-20 pointer-events-none" />

      {/* === WRAPPER CONTAINER (INI YANG BIKIN PRO) === */}
      <div className="max-w-4xl mx-auto px-6 md:px-8">

        {/* ================= HERO ================= */}
        <section className="pt-14 pb-16 text-center relative">
          <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">
            Sepucuk Surat
          </p>

          <h1 className="font-serif text-3xl md:text-4xl leading-snug mb-6">
            Catatan-catatan dari seseorang yang masih belajar hadir.
          </h1>

          <p className="font-serif italic text-foreground/70 max-w-xl mx-auto mb-10">
            Ditulis perlahan, untuk dibaca perlahan.
          </p>

          <img
            src={BARISTA_BG}
            className="w-full max-h-[520px] object-cover rounded-2xl shadow-lg"
          />
        </section>

        {/* ================= TENTANG PENULIS ================= */}
        <section className="py-16">
          <div className="flex flex-col md:flex-row gap-10 items-start">
            <OpenBookPenIllust className="w-28 opacity-40" />

            <div>
              <h2 className="font-serif text-xl mb-4">
                Tentang Penulis
              </h2>

              <p className="font-serif leading-relaxed text-foreground/80">
                Bukan penulis profesional. Bukan motivator. Hanya seseorang yang
                mencoba memahami hidupnya melalui kata-kata.
              </p>
            </div>
          </div>
        </section>

        {/* ================= RAK BUKU ================= */}
        <RakBukuSunyiSection />

        {/* ================= ILUSTRASI BUKU ================= */}
        <section className="py-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <V60DripperIllust className="opacity-40" />
          <EspressoMachineIllust className="opacity-40" />
          <TwoCupsIllust className="opacity-40" />
          <CoffeeCupDecor className="opacity-40" />
        </section>

        {/* ================= TESTIMONIAL ================= */}
        <section className="py-16">
          <h2 className="font-serif text-xl mb-8 text-center">
            Catatan Pembaca
          </h2>

          <DynamicTestimonials />
        </section>

        {/* ================= FORM KOMENTAR ================= */}
        <ReaderCommentsForm />

        {/* ================= FOOTER ================= */}
        <footer className="py-16 text-center text-sm text-muted-foreground">
          <p className="font-serif italic">
            “Aku menulis untuk hadir, bukan untuk memukau.”
          </p>
          <p className="mt-4 text-xs">
            © {new Date().getFullYear()} Wildan Ferdiansyah
          </p>
        </footer>

      </div>
    </main>
  );
}
