import { ExternalLink, Share2, MessageCircle, Facebook, Instagram, Twitter } from "lucide-react";

const HERO_BG =
  "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1400&auto=format&fit=crop";

export default function HomePage() {
  // Fungsi untuk share ke media sosial
  const handleShare = (platform) => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent("Sepucuk Surat — Catatan sunyi dari seorang barista");
    
    const shareUrls = {
      whatsapp: `https://wa.me/?text=${text}%20${url}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      twitter: `https://twitter.com/intent/tweet?text=${text}&url=${url}`,
    };

    if (platform === 'instagram') {
      // Instagram tidak mendukung share URL langsung, copy ke clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Link telah disalin! Silakan paste di Instagram Anda.');
      return;
    }

    window.open(shareUrls[platform], '_blank', 'width=600,height=400');
  };

  return (
    <main className="bg-[#f6f1e7] text-[#2b2b2b] font-sans">

      {/* ================= HERO ================= */}
      <section className="relative h-[80vh] w-full overflow-hidden">
        <img
          src={HERO_BG}
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-[#f6f1e7]" />

        <div className="relative z-10 h-full flex items-end px-6 pb-16 max-w-4xl mx-auto">
          <div>
            <p className="font-serif text-sm text-white/80">Sepucuk Surat</p>
            <h1 className="font-serif text-3xl leading-snug text-white mt-2">
              Catatan sunyi dari seorang barista yang menulis pelan.
            </h1>
          </div>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="max-w-3xl mx-auto px-6 py-16 text-center">
        <p className="font-serif text-lg">TENTANG BUKU</p>

        <p className="mt-4 text-sm leading-relaxed">
          Ini adalah catatan-catatan dari seseorang yang masih belajar hadir—untuk dirinya sendiri, untuk orang-orang yang ia cintai, untuk hari-hari yang kadang terlalu berat untuk dilalui sendirian.

          Ditulis dalam keheningan malam, di sudut kedai kopi yang hampir tutup, di antara lagu-lagu yang terlalu jujur untuk didengar sendirian
        </p>

        <div className="font-serif italic mt-10 space-y-4 text-sm text-[#555]">
          <p>“Tidak semua kata ingin dibaca keras.”</p>
          <p>“Kopi bisa dingin, tapi cerita tetap hangat.”</p>
          <p>“Ada halaman yang hanya bisa dipahami ketika kamu berhenti terburu-buru.”</p>
          <p>“Beberapa cerita tidak selesai di sini — mereka hanya dimulai.”</p>
          <p>“Ini bukan rak buku. Ini hanya meja kecil sebelum perjalanan panjang.”</p>
        </div>
      </section>

      {/* ================= TENTANG PENULIS ================= */}
      <section className="max-w-4xl mx-auto px-6 pb-20">
        <div className="bg-[#f2ede4] rounded-3xl shadow-sm p-6 md:p-10 flex flex-col md:flex-row gap-8 items-center">

          {/* FOTO LO */}
          <img
            src="/wildan.png"
            className="w-40 h-40 object-cover rounded-2xl"
          />

          {/* TEXT */}
          <div>
            <p className="font-serif text-xl">Tentang Penulis</p>

            <p className="mt-3 text-sm leading-relaxed">
              Seorang barista yang lebih sering mendengar daripada berbicara.
              Menulis bukan untuk menjadi suara paling keras, tapi untuk
              memahami hal-hal kecil yang sering terlewat di antara jeda kopi.
            </p>

            <p className="mt-3 text-sm leading-relaxed">
              Website ini bukan rumah utama tulisan. Ia hanya halaman pembuka —
              tempat beberapa fragmen cerita ditinggalkan sebelum kamu membuka
              buku yang sebenarnya.
            </p>
          </div>
        </div>
      </section>

      {/* ================= RAK BUKU ================= */}
      <section className="max-w-4xl mx-auto px-6 pb-20">
        <h2 className="font-serif text-center text-2xl mb-10">
          Rak Buku Sunyi
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <a
            href="https://drive.google.com"
            target="_blank"
            className="bg-[#f2ede4] rounded-2xl p-6 hover:shadow-md transition"
          >
            <p className="font-serif">Seni Menyeduh Kehidupan</p>
            <p className="text-sm mt-2 flex items-center gap-2">
              Lanjutkan Membaca <ExternalLink size={14} />
            </p>
          </a>

          <a
            href="https://drive.google.com"
            target="_blank"
            className="bg-[#f2ede4] rounded-2xl p-6 hover:shadow-md transition"
          >
            <p className="font-serif">Di Balik Bar</p>
            <p className="text-sm mt-2 flex items-center gap-2">
              Lanjutkan Membaca <ExternalLink size={14} />
            </p>
          </a>

          <a
            href="https://drive.google.com"
            target="_blank"
            className="bg-[#f2ede4] rounded-2xl p-6 hover:shadow-md transition"
          >
            <p className="font-serif">Di Atas Cangkir yang Sama</p>
            <p className="text-sm mt-2 flex items-center gap-2">
              Lanjutkan Membaca <ExternalLink size={14} />
            </p>
          </a>

          <a
            href="https://drive.google.com"
            target="_blank"
            className="bg-[#f2ede4] rounded-2xl p-6 hover:shadow-md transition"
          >
            <p className="font-serif">Kami Menulis Pelan</p>
            <p className="text-sm mt-2 flex items-center gap-2">
              Lanjutkan Membaca <ExternalLink size={14} />
            </p>
          </a>

        </div>
      </section>

      {/* ================= SHARE SECTION ================= */}
      <section className="max-w-4xl mx-auto px-6 pb-16">
        <div className="bg-[#2b2b2b] rounded-3xl p-8 text-center text-[#f6f1e7]">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Share2 size={20} />
            <p className="font-serif text-lg">Bagikan Cerita Ini</p>
          </div>
          
          <div className="flex justify-center gap-4 flex-wrap">
            {/* WhatsApp */}
            <button
              onClick={() => handleShare('whatsapp')}
              className="flex items-center gap-2 bg-[#25D366] text-white px-5 py-3 rounded-full hover:scale-105 transition transform"
            >
              <MessageCircle size={18} />
              <span className="text-sm font-medium">WhatsApp</span>
            </button>

            {/* Facebook */}
            <button
              onClick={() => handleShare('facebook')}
              className="flex items-center gap-2 bg-[#1877F2] text-white px-5 py-3 rounded-full hover:scale-105 transition transform"
            >
              <Facebook size={18} />
              <span className="text-sm font-medium">Facebook</span>
            </button>

            {/* Instagram */}
            <button
              onClick={() => handleShare('instagram')}
              className="flex items-center gap-2 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white px-5 py-3 rounded-full hover:scale-105 transition transform"
            >
              <Instagram size={18} />
              <span className="text-sm font-medium">Instagram</span>
            </button>

            {/* X (Twitter) */}
            <button
              onClick={() => handleShare('twitter')}
              className="flex items-center gap-2 bg-[#000000] text-white px-5 py-3 rounded-full hover:scale-105 transition transform border border-gray-700"
            >
              <Twitter size={18} />
              <span className="text-sm font-medium">X (Twitter)</span>
            </button>
          </div>
        </div>
      </section>

      {/* ================= FOOTER / KONTAK ================= */}
      <footer className="bg-[#2b2b2b] text-[#f6f1e7] py-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          
          {/* Brand */}
          <p className="font-serif text-2xl mb-2">Sepucuk Surat</p>
          <p className="text-sm text-[#999] mb-8">bukan tempat tinggal, hanya ruang singgah.</p>

          {/* Kontak WhatsApp */}
          <div className="bg-[#f6f1e7]/10 rounded-2xl p-6 max-w-md mx-auto mb-8">
            <p className="text-sm text-[#999] mb-2">Hubungi Penulis</p>
            <a 
              href="https://wa.me/6289636357091" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-[#25D366] hover:text-[#128C7E] transition"
            >
              <div className="bg-[#25D366] text-white p-2 rounded-full">
                <MessageCircle size={24} />
              </div>
              <div className="text-left">
                <p className="text-xs text-[#999]">WhatsApp</p>
                <p className="font-medium">0896-3635-7091</p>
              </div>
            </a>
          </div>

          {/* Divider */}
          <div className="border-t border-[#f6f1e7]/20 pt-8">
            <p className="text-xs text-[#666]">
              © {new Date().getFullYear()} Sepucuk Surat. Ditulis dengan kopi dan sunyi.
            </p>
          </div>
        </div>
      </footer>

    </main>
  );
}
