import { Book, Coffee, Moon } from "lucide-react";

const BARISTA_BG =
  "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1200&auto=format&fit=crop";

export default function HomePage() {
  return (
    <main className="bg-[#f6f1e7] min-h-screen font-sans text-[#2b2b2b]">

      {/* HERO */}
      <section className="max-w-4xl mx-auto px-6 py-10 space-y-6">
        <p className="font-serif text-lg">Sepucuk Surat</p>

        <h1 className="font-serif text-4xl leading-snug">
          Catatan kecil dari seseorang yang masih belajar hadir.
        </h1>

        <img
          src={BARISTA_BG}
          className="w-full rounded-2xl"
        />

        <p className="font-serif text-lg mt-4">Wildan Ferdiansyah</p>

        <p className="leading-relaxed">
          Bukan penulis profesional. Bukan motivator.
          Hanya seseorang yang mencoba memahami hidupnya melalui kata-kata.
        </p>

        <p className="italic">
          "Kita semua pernah lelah. Tapi kita masih di sini."
        </p>
      </section>

      {/* SECTION 1 */}
      <section className="max-w-3xl mx-auto px-6 py-14 space-y-4">
        <Book />
        <h2 className="font-serif text-2xl">Tentang Hujan</h2>

        <p>
          Hujan selalu datang tanpa izin. Seperti rindu yang tiba-tiba muncul
          saat kita sedang sibuk melupakan.
        </p>

        <p>
          Kadang bukan hujannya yang membuat dingin,
          tapi kenangan yang ikut turun bersamanya.
          Kita belajar bahwa tidak semua hal harus dijelaskan.
          Ada rasa yang cukup dipahami tanpa banyak kata.
        </p>

        <p>
          Di bawah langit abu-abu, kita menemukan jeda.
          Sebuah ruang kecil untuk mengingat bahwa hidup tidak selalu harus cepat.
        </p>
      </section>

      {/* SECTION 2 */}
      <section className="max-w-3xl mx-auto px-6 py-14 space-y-4">
        <Coffee />
        <h2 className="font-serif text-2xl">Tentang Kopi yang Dingin</h2>

        <p>
          Kopi yang dingin bukan berarti gagal.
          Mungkin kita hanya terlalu lama menikmati percakapan yang hangat.
        </p>

        <p>
          Di antara jeda-jeda kecil, kita menemukan bahwa waktu tidak pernah
          benar-benar hilang — ia hanya berubah bentuk menjadi cerita.
        </p>

        <p>
          Seperti espresso yang perlahan kehilangan uapnya,
          ada momen yang tidak bisa diulang, hanya bisa dikenang.
        </p>

        <p>
          Kita belajar bahwa diam pun bisa menjadi bahasa.
          Bahwa duduk berdua tanpa banyak bicara kadang lebih jujur
          daripada seribu kalimat.
        </p>
      </section>

      {/* SECTION 3 */}
      <section className="max-w-3xl mx-auto px-6 py-14 space-y-4">
        <Moon />
        <h2 className="font-serif text-2xl">Ruang Sunyi</h2>

        <p>
          Kadang kita tidak butuh jawaban.
          Cukup tempat untuk duduk dan bernapas pelan.
        </p>

        <p>
          Sunyi bukan musuh,
          ia hanya ruang kosong tempat pikiran kita beristirahat.
        </p>

        <p>
          Mungkin hidup tidak harus selalu keras.
          Mungkin cukup berjalan pelan,
          sambil membawa secangkir kopi dan beberapa kalimat yang belum selesai.
        </p>

        <p>
          Dan di antara langkah-langkah kecil itu,
          kita perlahan menemukan diri sendiri.
        </p>
      </section>

      {/* EXTRA SECTION BIAR PANJANG */}
      <section className="max-w-3xl mx-auto px-6 py-20 space-y-6">
        <h2 className="font-serif text-3xl text-center">
          Catatan yang Belum Selesai
        </h2>

        <p>
          Website ini bukan akhir dari perjalanan.
          Ia hanya halaman pertama dari buku yang masih ditulis pelan.
        </p>

        <p>
          Setiap scroll adalah lembar baru.
          Setiap kata adalah langkah kecil menuju versi diri yang lebih tenang.
        </p>

        <p>
          Mungkin suatu hari nanti halaman ini akan berubah.
          Tapi hari ini, kita cukup menikmati prosesnya.
        </p>
      </section>

    </main>
  );
}
