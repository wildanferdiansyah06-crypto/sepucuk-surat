import { Book, Coffee, Moon } from "lucide-react";
import { useEffect, useRef } from "react";

const BARISTA_BG =
  "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1200&auto=format&fit=crop";

export default function HomePage() {
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  // ✨ FADE IN SCROLL EFFECT
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
          }
        });
      },
      { threshold: 0.2 }
    );

    sectionsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="bg-[#f6f1e7] min-h-screen font-sans text-[#2b2b2b]">
      <section className="max-w-3xl mx-auto px-6 py-12">

        {/* HERO */}
        <p className="font-serif text-lg opacity-70">Sepucuk Surat</p>

        <h1 className="font-serif text-4xl mt-3 leading-snug">
          Catatan kecil dari seseorang yang masih belajar hadir.
        </h1>

        <img
          src={BARISTA_BG}
          className="w-full rounded-2xl mt-8 shadow-md"
        />

        <p className="font-serif mt-6 text-lg">Wildan Ferdiansyah</p>

        <p className="mt-2 leading-relaxed">
          Bukan penulis profesional. Bukan motivator. Hanya seseorang yang
          mencoba memahami hidupnya melalui kata-kata.
        </p>

        <p className="italic mt-3 opacity-80">
          “Kita semua pernah lelah. Tapi kita masih di sini.”
        </p>
      </section>

      {/* SECTION HUJAN */}
      <section
        ref={(el) => (sectionsRef.current[0] = el)}
        className="max-w-3xl mx-auto px-6 py-16 opacity-0"
      >
        <Book className="mb-3 opacity-70" />
        <h2 className="font-serif text-2xl">Tentang Hujan</h2>

        <p className="mt-3 leading-relaxed">
          Hujan selalu datang tanpa izin. Seperti rindu yang tiba-tiba muncul
          saat kita sedang sibuk melupakan. Kadang bukan hujannya yang membuat
          dingin, tapi kenangan yang ikut turun bersamanya.
        </p>

        <p className="mt-4 leading-relaxed">
          Kita belajar bahwa tidak semua hal harus dijelaskan. Ada rasa yang
          cukup dipahami tanpa banyak kata.
        </p>
      </section>

      {/* SECTION KOPI */}
      <section
        ref={(el) => (sectionsRef.current[1] = el)}
        className="max-w-3xl mx-auto px-6 py-16 opacity-0"
      >
        <Coffee className="mb-3 opacity-70" />
        <h2 className="font-serif text-2xl">Tentang Kopi yang Dingin</h2>

        <p className="mt-3 leading-relaxed">
          Kopi yang dingin bukan berarti gagal. Mungkin kita hanya terlalu lama
          menikmati percakapan yang hangat.
        </p>

        <p className="mt-4 leading-relaxed">
          Di antara jeda-jeda kecil, kita menemukan bahwa waktu tidak pernah
          benar-benar hilang — ia hanya berubah bentuk menjadi cerita.
        </p>
      </section>

      {/* SECTION RUANG SUNYI */}
      <section
        ref={(el) => (sectionsRef.current[2] = el)}
        className="max-w-3xl mx-auto px-6 py-16 opacity-0"
      >
        <Moon className="mb-3 opacity-70" />
        <h2 className="font-serif text-2xl">Ruang Sunyi</h2>

        <p className="mt-3 leading-relaxed">
          Kadang kita tidak butuh jawaban. Cukup tempat untuk duduk dan bernapas
          pelan. Sunyi bukan musuh, ia hanya ruang kosong tempat pikiran kita
          beristirahat.
        </p>

        <p className="mt-4 leading-relaxed">
          Mungkin hidup tidak harus selalu keras. Mungkin cukup berjalan pelan,
          sambil membawa secangkir kopi dan beberapa kalimat yang belum selesai.
        </p>

        <p className="mt-4 leading-relaxed">
          Dan di antara langkah-langkah kecil itu, kita perlahan menemukan diri
          sendiri.
        </p>
      </section>

      {/* CATATAN BELUM SELESAI */}
      <section className="max-w-3xl mx-auto px-6 py-20 text-center">
        <h2 className="font-serif text-3xl">Catatan yang Belum Selesai</h2>

        <p className="mt-6 leading-relaxed">
          Website ini bukan akhir dari perjalanan. Ia hanya halaman pertama dari
          buku yang masih ditulis pelan.
        </p>

        <p className="mt-4 leading-relaxed">
          Setiap scroll adalah lembar baru. Setiap kata adalah langkah kecil
          menuju versi diri yang lebih tenang.
        </p>

        <p className="mt-4 leading-relaxed">
          Mungkin suatu hari nanti halaman ini akan berubah. Tapi hari ini, kita
          cukup menikmati prosesnya.
        </p>
      </section>

      {/* SEPOTONG SURAT */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <h2 className="font-serif text-3xl">Sepotong Surat</h2>

        <p className="mt-6 leading-relaxed">
          Kadang kita menulis bukan untuk dibaca orang lain, tapi agar hati kita
          sendiri tidak terlalu penuh.
        </p>

        <p className="mt-4 leading-relaxed">
          Ada hal-hal yang tidak bisa diucapkan keras, hanya bisa ditaruh pelan
          di antara paragraf.
        </p>

        <p className="mt-4 leading-relaxed">
          Jika suatu hari kamu membaca ini, mungkin kita tidak saling kenal.
          Tapi setidaknya kita pernah berada di halaman yang sama.
        </p>

        <p className="mt-4 leading-relaxed">
          Dan mungkin itu sudah cukup.
        </p>
      </section>

      {/* RAK CATATAN */}
      <section className="max-w-3xl mx-auto px-6 pb-28">
        <h2 className="font-serif text-3xl">Rak Catatan yang Tersisa</h2>

        <p className="mt-6 leading-relaxed">
          Tidak semua tulisan lahir dari keberanian. Beberapa muncul karena kita
          terlalu lama diam.
        </p>

        <p className="mt-4 leading-relaxed">
          Ada kalimat yang ditulis sambil menunggu kopi dingin, ada juga yang
          lahir di antara suara hujan malam.
        </p>

        <p className="mt-4 leading-relaxed">
          Kita mungkin tidak sedang mencari jawaban, hanya ingin duduk lebih
          lama di halaman yang terasa tenang.
        </p>

        <p className="mt-4 leading-relaxed">
          Jika suatu hari tulisan ini berubah, mungkin itu karena kita juga
          berubah perlahan.
        </p>

        <p className="mt-4 leading-relaxed">
          Tapi selama masih ada kata yang belum selesai, halaman ini akan tetap
          terbuka.
        </p>
      </section>
    </main>
  );
}
