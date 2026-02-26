import { 
  ExternalLink, 
  MessageCircle, 
  Facebook, 
  Instagram, 
  Twitter, 
  BookOpen, 
  Coffee, 
  Moon, 
  Heart,
  Share2,
  ArrowUpRight
} from "lucide-react";

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
      navigator.clipboard.writeText(window.location.href);
      alert('Link telah disalin! Silakan paste di Instagram Anda.');
      return;
    }

    window.open(shareUrls[platform], '_blank', 'width=600,height=400');
  };

  // Data untuk section "Buku Ini Untuk"
  const untukItems = [
    {
      icon: <BookOpen size={20} />,
      text: "Untuk kamu yang membaca dengan pelan, bukan karena lambat—tapi karena ingin merasakan."
    },
    {
      icon: <Coffee size={20} />,
      text: "Untuk kamu yang bekerja seharian dan baru bisa merenung saat dunia sudah tidur."
    },
    {
      icon: <Moon size={20} />,
      text: "Untuk kamu yang duduk sendiri dengan kopi dan kesunyian, dan merasa itu cukup."
    },
    {
      icon: <Heart size={20} />,
      text: "Untuk kamu yang sering merasa tak terlihat, tapi tetap hadir—setiap hari."
    }
  ];

  // Data untuk cuplikan
  const cuplikanItems = [
    {
      quote: "Ada hari-hari di mana aku hanya ingin menjadi secangkir kopi di tangan seseorang—hangat, hadir, dan cukup untuk menemani diam.",
      page: "halaman 23"
    },
    {
      quote: "Kita tidak butuh selalu kuat. Kadang, kita hanya butuh tahu bahwa ada yang mengerti—bahwa lelah kita bukan aib, bahwa diam kita bukan kelemahan.",
      page: "halaman 47"
    },
    {
      quote: "Menulis adalah caraku untuk tetap di sini. Bukan untuk menjelaskan, tapi untuk mengingatkan diri sendiri—bahwa aku masih merasakan.",
      page: "halaman 78"
    }
  ];

  return (
    <main className="bg-[#faf8f5] text-[#2b2b2b] font-sans selection:bg-[#e8e0d5]">

      {/* ================= NAVBAR ================= */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#faf8f5]/90 backdrop-blur-sm border-b border-[#e8e0d5]/50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <p className="font-serif text-lg tracking-wide">Sepucuk Surat</p>
          
          <div className="hidden md:flex items-center gap-8 text-sm">
            <a href="#tentang" className="hover:text-[#8b7355] transition">Tentang</a>
            <a href="#cuplikan" className="hover:text-[#8b7355] transition">Cuplikan</a>
            <a href="#penulis" className="hover:text-[#8b7355] transition">Penulis</a>
          </div>

          <a 
            href="https://drive.google.com" 
            target="_blank"
            className="bg-[#2b2b2b] text-[#faf8f5] px-5 py-2 rounded-full text-sm hover:bg-[#1a1a1a] transition"
          >
            Unduh Buku
          </a>
        </div>
      </nav>

      {/* ================= HERO ================= */}
      <section className="relative h-[85vh] w-full overflow-hidden pt-20">
        <img
          src={HERO_BG}
          className="absolute inset-0 w-full h-full object-cover"
          alt="Coffee background"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-[#faf8f5]" />
        
        <div className="relative z-10 h-full flex items-end px-6 pb-20 max-w-4xl mx-auto">
          <div className="text-center w-full">
            <p className="font-serif text-sm text-white/80 tracking-[0.3em] uppercase mb-4">Sepucuk Surat</p>
            <h1 className="font-serif text-4xl md:text-5xl leading-tight text-white max-w-2xl mx-auto">
              Catatan sunyi dari seorang barista yang menulis pelan.
            </h1>
          </div>
        </div>
      </section>

      {/* ================= TENTANG BUKU ================= */}
      <section id="tentang" className="max-w-3xl mx-auto px-6 py-20">
        <div className="text-center">
          <p className="text-xs tracking-[0.3em] text-[#8b7355] uppercase mb-8">Tentang Buku</p>
          
          <h2 className="font-serif text-3xl md:text-4xl leading-snug mb-8">
            Ini bukan buku motivasi.<br />
            Ini bukan panduan hidup.
          </h2>
          
          <div className="space-y-4 text-[#5a5a5a] leading-relaxed">
            <p>
              Ini adalah catatan-catatan dari seseorang yang masih belajar hadir—
              untuk dirinya sendiri, untuk orang-orang yang ia cintai, untuk hari-hari
              yang kadang terlalu berat untuk dilalui sendirian.
            </p>
            <p>
              Ditulis dalam keheningan malam, di sudut kedai kopi yang hampir tutup,
              di antara lagu-lagu yang terlalu jujur untuk didengar sendirian.
            </p>
          </div>

          <div className="mt-8 font-serif italic text-[#8b7355]">
            <p>Buku ini ditulis perlahan.</p>
            <p>Dibuat untuk dibaca perlahan juga.</p>
          </div>
        </div>
      </section>

      {/* ================= BUKU INI UNTUK ================= */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <p className="text-xs tracking-[0.3em] text-[#8b7355] uppercase text-center mb-12">Buku Ini Untuk</p>
        
        <div className="space-y-4">
          {untukItems.map((item, index) => (
            <div 
              key={index}
              className="group flex items-start gap-5 bg-white/50 border border-[#e8e0d5] rounded-2xl p-6 hover:shadow-lg hover:shadow-[#e8e0d5]/50 transition-all duration-300 cursor-pointer"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#f5f0e8] flex items-center justify-center text-[#8b7355] group-hover:bg-[#8b7355] group-hover:text-white transition-colors duration-300">
                {item.icon}
              </div>
              <p className="text-[#4a4a4a] leading-relaxed pt-1.5 group-hover:text-[#2b2b2b] transition-colors">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CUPLIKAN ================= */}
      <section id="cuplikan" className="max-w-3xl mx-auto px-6 py-16">
        <p className="text-xs tracking-[0.3em] text-[#8b7355] uppercase text-center mb-12">Cuplikan</p>
        
        <div className="space-y-8">
          {cuplikanItems.map((item, index) => (
            <div 
              key={index}
              className="group relative bg-white border border-[#e8e0d5] rounded-3xl p-8 md:p-12 text-center hover:shadow-xl hover:shadow-[#e8e0d5]/30 transition-all duration-500 cursor-pointer overflow-hidden"
            >
              {/* Decorative quote mark */}
              <div className="absolute top-6 left-6 text-[#e8e0d5] font-serif text-6xl leading-none opacity-50">"</div>
              
              <blockquote className="relative z-10 font-serif text-xl md:text-2xl leading-relaxed text-[#3a3a3a] italic mb-6 group-hover:text-[#2b2b2b] transition-colors">
                "{item.quote}"
              </blockquote>
              
              <p className="text-sm text-[#8b7355] tracking-wide">— {item.page}</p>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#f5f0e8]/0 via-[#f5f0e8]/0 to-[#e8e0d5]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </section>

      {/* ================= KATA PEMBACA ================= */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <p className="text-xs tracking-[0.3em] text-[#8b7355] uppercase text-center mb-12">Kata Pembaca</p>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white border border-[#e8e0d5] rounded-2xl p-8 relative">
            <div className="text-[#e8e0d5] font-serif text-4xl mb-4">"</div>
            <p className="text-[#5a5a5a] leading-relaxed mb-4 italic">
              Aku biasanya susah selesain buku, tapi yang ini beda. Bukan karena cepat, tapi karena aku nggak pengen buru-buru.
            </p>
            <p className="text-sm text-[#8b7355]">— Rizky</p>
          </div>
          
          <div className="bg-white border border-[#e8e0d5] rounded-2xl p-8 relative">
            <div className="text-[#e8e0d5] font-serif text-4xl mb-4">"</div>
            <p className="text-[#5a5a5a] leading-relaxed mb-4 italic">
              Simple. Nggak ribet. Kayak ngobrol sama diri sendiri yang lebih jujur.
            </p>
            <p className="text-sm text-[#8b7355]">— Anisa</p>
          </div>
        </div>
      </section>

      {/* ================= QUOTE CTA ================= */}
      <section className="max-w-3xl mx-auto px-6 py-20 text-center">
        <blockquote className="font-serif text-2xl md:text-3xl leading-relaxed text-[#3a3a3a] italic mb-10">
          "Tidak semua buku harus mengubah hidupmu.<br />
          Ada yang cukup menemanimu, sebentar saja."
        </blockquote>
        
        <a 
          href="https://drive.google.com"
          target="_blank"
          className="inline-block bg-[#2b2b2b] text-[#faf8f5] px-10 py-4 rounded-full text-sm tracking-widest uppercase hover:bg-[#1a1a1a] transition transform hover:scale-105"
        >
          Unduh Buku
        </a>
      </section>

      {/* ================= BAGIKAN ================= */}
      <section className="max-w-3xl mx-auto px-6 py-16 text-center">
        <p className="text-xs tracking-[0.3em] text-[#8b7355] uppercase mb-8">Bagikan Halaman Ini</p>
        
        <div className="flex justify-center gap-6">
          <button
            onClick={() => handleShare('whatsapp')}
            className="w-12 h-12 rounded-full border border-[#d4c8b8] flex items-center justify-center text-[#8b7355] hover:bg-[#25D366] hover:border-[#25D366] hover:text-white transition-all duration-300"
            aria-label="Share to WhatsApp"
          >
            <MessageCircle size={20} />
          </button>
          
          <button
            onClick={() => handleShare('facebook')}
            className="w-12 h-12 rounded-full border border-[#d4c8b8] flex items-center justify-center text-[#8b7355] hover:bg-[#1877F2] hover:border-[#1877F2] hover:text-white transition-all duration-300"
            aria-label="Share to Facebook"
          >
            <Facebook size={20} />
          </button>
          
          <button
            onClick={() => handleShare('instagram')}
            className="w-12 h-12 rounded-full border border-[#d4c8b8] flex items-center justify-center text-[#8b7355] hover:bg-gradient-to-br hover:from-[#833AB4] hover:via-[#FD1D1D] hover:to-[#F77737] hover:border-transparent hover:text-white transition-all duration-300"
            aria-label="Share to Instagram"
          >
            <Instagram size={20} />
          </button>
          
          <button
            onClick={() => handleShare('twitter')}
            className="w-12 h-12 rounded-full border border-[#d4c8b8] flex items-center justify-center text-[#8b7355] hover:bg-[#000000] hover:border-[#000000] hover:text-white transition-all duration-300"
            aria-label="Share to X"
          >
            <Twitter size={20} />
          </button>
        </div>
      </section>

      {/* ================= CATATAN PEMBACA FORM ================= */}
      <section className="max-w-2xl mx-auto px-6 py-16">
        <p className="text-xs tracking-[0.3em] text-[#8b7355] uppercase text-center mb-4">Catatan Pembaca</p>
        <p className="text-center text-[#8b7355] italic mb-10 font-serif">
          Kalau tulisan ini menemani harimu, kamu boleh meninggalkan jejak kecil di sini.
        </p>
        
        <form className="bg-white border border-[#e8e0d5] rounded-3xl p-8 space-y-4">
          <input
            type="text"
            placeholder="Nama (opsional)"
            className="w-full px-5 py-4 rounded-xl border border-[#e8e0d5] bg-[#faf8f5] focus:outline-none focus:border-[#8b7355] transition placeholder:text-[#b0a090]"
          />
          <textarea
            placeholder="Tulis catatanmu..."
            rows={4}
            className="w-full px-5 py-4 rounded-xl border border-[#e8e0d5] bg-[#faf8f5] focus:outline-none focus:border-[#8b7355] transition resize-none placeholder:text-[#b0a090]"
          />
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-[#c4b8a8] text-white px-8 py-3 rounded-full text-sm hover:bg-[#b0a090] transition"
            >
              Kirim Catatan
            </button>
          </div>
        </form>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-[#e8e0d5] mt-20">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            
            {/* Left - Brand */}
            <div>
              <p className="font-serif text-xl mb-1">Sepucuk Surat untuk Malam</p>
              <p className="text-sm text-[#8b7355]">© 2026 Wildan Ferdiansyah</p>
            </div>

            {/* Middle - Kontak */}
            <div className="flex flex-col gap-2">
              <p className="text-xs tracking-[0.2em] text-[#8b7355] uppercase">Kontak</p>
              <a 
                href="https://wa.me/6289636357091"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#5a5a5a] hover:text-[#25D366] transition group"
              >
                <span>WhatsApp</span>
                <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>

            {/* Right - Tagline */}
            <div className="text-right">
              <p className="font-serif italic text-[#8b7355] text-sm">Ditulis perlahan.</p>
              <p className="font-serif italic text-[#8b7355] text-sm">Dibaca dengan cinta.</p>
            </div>
          </div>
        </div>
      </footer>

    </main>
  );
}
