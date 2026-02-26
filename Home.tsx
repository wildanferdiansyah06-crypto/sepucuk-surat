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
  ArrowUpRight,
  Send,
  Palette
} from "lucide-react";
import { useState, useEffect, useRef } from "react";

// Ganti dengan ilustrasi Anda yang sebenarnya jika ada
const HERO_BG =
  "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1400&auto=format&fit=crop";

export default function HomePage() {
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  
  // State untuk form catatan
  const [nama, setNama] = useState("");
  const [catatan, setCatatan] = useState("");
  
  // State untuk kata pembaca
  const [kataPembaca, setKataPembaca] = useState([
    {
      id: 1,
      text: "Aku biasanya susah selesain buku, tapi yang ini beda. Bukan karena cepat, tapi karena aku nggak pengen buru-buru.",
      nama: "Rizky"
    },
    {
      id: 2,
      text: "Simple. Nggak ribet. Kayak ngobrol sama diri sendiri yang lebih jujur.",
      nama: "Anisa"
    },
    {
      id: 3,
      text: "Baca ini sambil ngopi sore, rasanya kayak ada yang ngerti tanpa perlu jelasin apa-apa.",
      nama: "Dian"
    },
    {
      id: 4,
      text: "Tidak mencoba menggurui, hanya berbagi. Itu yang bikin nyaman.",
      nama: "Bagas"
    },
    {
      id: 5,
      text: "Setiap halaman kayak pelukan hangat yang nggak bikin sesak. Cocok buat hari-hari berat.",
      nama: "Sinta"
    },
    {
      id: 6,
      text: "Baru pertama kali ngerasa gak sendirian dalam kesendirian. Makasih sudah nulis.",
      nama: "Reza"
    }
  ]);

  // Auto scroll effect
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer || isDragging) return;

    let animationId;
    let currentScroll = scrollContainer.scrollLeft;
    
    const scroll = () => {
      if (!isPaused && !isDragging) {
        currentScroll += 0.3; // Kecepatan lebih lambat agar aesthetic
        if (currentScroll >= scrollContainer.scrollWidth / 2) {
          currentScroll = 0;
        }
        scrollContainer.scrollLeft = currentScroll;
      }
      animationId = requestAnimationFrame(scroll);
    };
    
    animationId = requestAnimationFrame(scroll);
    
    return () => cancelAnimationFrame(animationId);
  }, [isPaused, isDragging]);

  // Handle mouse events untuk drag scroll
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  // Handle touch events untuk mobile
  const handleTouchStart = () => {
    setIsPaused(true);
  };

  const handleTouchEnd = () => {
    setIsPaused(false);
  };

  // Handle submit catatan
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!catatan.trim()) return;
    
    const newComment = {
      id: Date.now(),
      text: catatan,
      nama: nama.trim() || "Anonim"
    };
    
    setKataPembaca([...kataPembaca, newComment]);
    setNama("");
    setCatatan("");
  };

  // Fungsi share
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

  const untukItems = [
    {
      icon: <BookOpen size={20} />,
      text: "Untuk kamu yang membaca dengan pelan, bukan karena lambat—tapi karena ingin merasakan.",
      bg: "bg-gradient-to-br from-[#f5f0e8] via-[#faf8f5] to-[#e8e0d5]"
    },
    {
      icon: <Coffee size={20} />,
      text: "Untuk kamu yang bekerja seharian dan baru bisa merenung saat dunia sudah tidur.",
      bg: "bg-gradient-to-br from-[#e8e0d5] via-[#f5f0e8] to-[#d4c8b8]"
    },
    {
      icon: <Moon size={20} />,
      text: "Untuk kamu yang duduk sendiri dengan kopi dan kesunyian, dan merasa itu cukup.",
      bg: "bg-gradient-to-br from-[#d4c8b8]/30 via-[#e8e0d5]/50 to-[#f5f0e8]"
    },
    {
      icon: <Heart size={20} />,
      text: "Untuk kamu yang sering merasa tak terlihat, tapi tetap hadir—setiap hari.",
      bg: "bg-gradient-to-br from-[#f5f0e8] via-[#e8e0d5]/60 to-[#d4c8b8]/40"
    }
  ];

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

  // Duplicate array untuk infinite scroll effect
  const duplicatedComments = [...kataPembaca, ...kataPembaca];

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
      <section className="relative h-[90vh] w-full overflow-hidden pt-20">
        <div className="absolute inset-0 bg-[#d4c8b8]/20" />
        <img
          src={HERO_BG}
          className="absolute inset-0 w-full h-full object-cover opacity-90"
          alt="Coffee illustration"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#faf8f5]/30 via-transparent to-[#faf8f5]" />
        
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
          <p className="text-xs tracking-[0.4em] text-[#5a5a5a] uppercase mb-6">Sebuah Buku Oleh</p>
          <h1 className="font-serif text-5xl md:text-7xl leading-tight mb-4">
            Sepucuk Surat<br />
            <span className="italic text-[#8b7355]">untuk Malam</span>
          </h1>
          <p className="font-serif italic text-lg text-[#5a5a5a] max-w-md mb-2">
            "Kita semua pernah lelah. Tapi kita masih di sini."
          </p>
          <p className="text-sm tracking-widest text-[#8b7355] uppercase mb-10">Wildan Ferdiansyah</p>
          
          <div className="flex gap-4">
            <a 
              href="https://drive.google.com" 
              target="_blank"
              className="bg-[#2b2b2b] text-[#faf8f5] px-8 py-3 rounded-full text-sm hover:bg-[#1a1a1a] transition"
            >
              Unduh Buku
            </a>
            <a 
              href="#cuplikan"
              className="border border-[#2b2b2b] text-[#2b2b2b] px-8 py-3 rounded-full text-sm hover:bg-[#2b2b2b] hover:text-[#faf8f5] transition"
            >
              Baca Cuplikan
            </a>
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

      {/* ================= BUKU INI UNTUK (Dengan Background Aesthetic) ================= */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <p className="text-xs tracking-[0.3em] text-[#8b7355] uppercase text-center mb-12">Buku Ini Untuk</p>
        
        <div className="space-y-4">
          {untukItems.map((item, index) => (
            <div 
              key={index}
              className={`group relative overflow-hidden rounded-2xl p-6 border border-[#e8e0d5] hover:shadow-xl transition-all duration-500 cursor-pointer ${item.bg}`}
            >
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl group-hover:scale-150 transition-transform duration-700" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#8b7355]/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-xl group-hover:scale-150 transition-transform duration-700" />
              
              <div className="relative z-10 flex items-start gap-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-[#8b7355] shadow-sm group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <p className="text-[#4a4a4a] leading-relaxed pt-2 group-hover:text-[#2b2b2b] transition-colors">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= TENTANG PENULIS (UPDATE POSISI & KONTEN) ================= */}
      <section id="penulis" className="max-w-3xl mx-auto px-6 py-16">
        <div className="bg-white border border-[#e8e0d5] rounded-3xl overflow-hidden">
          {/* Foto dengan gradient overlay */}
          <div className="relative h-[400px] overflow-hidden">
            <img
              src="/wildan.png"
              alt="Wildan Ferdiansyah"
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
          </div>
          
          {/* Content */}
          <div className="px-8 pb-12 -mt-20 relative z-10 text-center">
            <h2 className="font-serif text-3xl mb-2">Wildan Ferdiansyah</h2>
            <p className="text-xs tracking-[0.3em] text-[#8b7355] uppercase mb-8">Penulis</p>
            
            <div className="space-y-4 text-[#5a5a5a] leading-relaxed max-w-xl mx-auto">
              <p>
                Bukan penulis profesional. Bukan motivator. Hanya seseorang yang 
                mencoba memahami hidupnya melalui kata-kata.
              </p>
              <p>
                Pernah menjadi barista. Pernah menjadi pelukis mural selama bertahun-tahun. 
                Sekarang menulis di sela-sela waktu—bukan untuk menjadi terkenal, tapi untuk tetap waras.
              </p>
            </div>
            
            <p className="font-serif italic text-[#8b7355] mt-6 mb-10">
              "Aku menulis untuk hadir, bukan untuk memukau."
            </p>
            
            {/* Timeline */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute left-0 top-0 bottom-0 w-px bg-[#e8e0d5]" />
                <div className="space-y-6">
                  <div className="flex items-center gap-6 pl-6 relative">
                    <div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-[#c4b8a8] -translate-x-[3px]" />
                    <span className="text-sm text-[#5a5a5a]">Pernah menjadi barista</span>
                  </div>
                  <div className="flex items-center gap-6 pl-6 relative">
                    <div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-[#c4b8a8] -translate-x-[3px]" />
                    <span className="text-sm text-[#5a5a5a]">Mural artist selama bertahun-tahun</span>
                  </div>
                  <div className="flex items-center gap-6 pl-6 relative">
                    <div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-[#c4b8a8] -translate-x-[3px]" />
                    <span className="text-sm text-[#5a5a5a]">Mulai menulis diam-diam</span>
                  </div>
                  <div className="flex items-center gap-6 pl-6 relative">
                    <div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-[#c4b8a8] -translate-x-[3px]" />
                    <span className="text-sm text-[#5a5a5a]">Buku pertama terbit</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CUPLIKAN (Dengan Background Aesthetic) ================= */}
      <section id="cuplikan" className="max-w-3xl mx-auto px-6 py-16">
        <p className="text-xs tracking-[0.3em] text-[#8b7355] uppercase text-center mb-12">Cuplikan</p>
        
        <div className="space-y-8">
          {cuplikanItems.map((item, index) => (
            <div 
              key={index}
              className="group relative rounded-3xl p-8 md:p-12 text-center overflow-hidden border border-[#e8e0d5]"
            >
              {/* Background layers */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#f5f0e8] via-[#faf8f5] to-[#e8e0d5]" />
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] opacity-30" />
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#d4c8b8]/20 via-transparent to-[#8b7355]/10" />
              
              {/* Decorative coffee stain */}
              <div className="absolute top-10 right-10 w-20 h-20 rounded-full border-2 border-[#d4c8b8]/30 opacity-50 group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute bottom-10 left-10 w-16 h-16 rounded-full border border-[#8b7355]/20 opacity-40 group-hover:scale-110 transition-transform duration-700 delay-100" />
              
              {/* Content */}
              <div className="relative z-10">
                <div className="text-[#d4c8b8] font-serif text-6xl leading-none mb-4 opacity-60">"</div>
                
                <blockquote className="font-serif text-xl md:text-2xl leading-relaxed text-[#3a3a3a] italic mb-6 group-hover:text-[#2b2b2b] transition-colors">
                  {item.quote}
                </blockquote>
                
                <p className="text-sm text-[#8b7355] tracking-wide">— {item.page}</p>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#8b7355]/5 via-transparent to-[#d4c8b8]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </section>

      {/* ================= KATA PEMBACA (HORIZONTAL AUTO SCROLL + DRAG) ================= */}
      <section className="py-16 overflow-hidden">
        <p className="text-xs tracking-[0.3em] text-[#8b7355] uppercase text-center mb-12">Kata Pembaca</p>
        
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto px-6 cursor-grab active:cursor-grabbing scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => {
            setIsPaused(false);
            setIsDragging(false);
          }}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {duplicatedComments.map((item, index) => (
            <div 
              key={`${item.id}-${index}`}
              className="flex-shrink-0 w-[320px] md:w-[380px] bg-white border border-[#e8e0d5] rounded-2xl p-8 relative hover:shadow-xl transition-all duration-300 select-none"
              style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #faf8f5 100%)'
              }}
            >
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#f5f0e8] flex items-center justify-center">
                <span className="text-[#8b7355] font-serif text-lg">"</span>
              </div>
              <p className="text-[#5a5a5a] leading-relaxed mb-4 italic text-sm pt-4">
                {item.text}
              </p>
              <p className="text-sm text-[#8b7355] font-medium">— {item.nama}</p>
            </div>
          ))}
        </div>
        
        <p className="text-center text-xs text-[#8b7355]/60 mt-6 italic">
          Sentuh dan geser untuk melihat lebih banyak
        </p>
      </section>

      {/* ================= CATATAN PEMBACA FORM ================= */}
      <section className="max-w-2xl mx-auto px-6 py-16">
        <p className="text-xs tracking-[0.3em] text-[#8b7355] uppercase text-center mb-4">Catatan Pembaca</p>
        <p className="text-center text-[#8b7355] italic mb-10 font-serif">
          Kalau tulisan ini menemani harimu, kamu boleh meninggalkan jejak kecil di sini.
        </p>
        
        <form onSubmit={handleSubmit} className="bg-white border border-[#e8e0d5] rounded-3xl p-8 space-y-4">
          <input
            type="text"
            placeholder="Nama (opsional)"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            className="w-full px-5 py-4 rounded-xl border border-[#e8e0d5] bg-[#faf8f5] focus:outline-none focus:border-[#8b7355] transition placeholder:text-[#b0a090]"
          />
          <textarea
            placeholder="Tulis catatanmu..."
            rows={4}
            value={catatan}
            onChange={(e) => setCatatan(e.target.value)}
            className="w-full px-5 py-4 rounded-xl border border-[#e8e0d5] bg-[#faf8f5] focus:outline-none focus:border-[#8b7355] transition resize-none placeholder:text-[#b0a090]"
          />
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-[#c4b8a8] text-white px-8 py-3 rounded-full text-sm hover:bg-[#b0a090] transition flex items-center gap-2"
            >
              <Send size={16} />
              Kirim Catatan
            </button>
          </div>
        </form>
      </section>

      {/* ================= RUANG SUNYI (Ditambah 1 Card) ================= */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <p className="text-xs tracking-[0.3em] text-[#8b7355] uppercase text-center mb-12">Ruang Sunyi</p>
        
        <div className="space-y-6">
          <div className="group relative bg-white border border-[#e8e0d5] rounded-2xl p-8 hover:shadow-xl transition-all duration-500 overflow-hidden cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-br from-[#f5f0e8]/50 via-transparent to-[#e8e0d5]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-[#d4c8b8]/20 blur-2xl group-hover:scale-150 transition-transform duration-700" />
            
            <div className="relative z-10">
              <h3 className="font-serif text-xl mb-3 text-[#2b2b2b] group-hover:text-[#8b7355] transition-colors">Tentang Hujan</h3>
              <p className="text-[#5a5a5a] text-sm leading-relaxed">
                Hujan selalu datang tanpa izin. Seperti rindu yang tiba-tiba muncul saat kita sedang sibuk melupakan.
              </p>
            </div>
          </div>
          
          <div className="group relative bg-white border border-[#e8e0d5] rounded-2xl p-8 hover:shadow-xl transition-all duration-500 overflow-hidden cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-br from-[#e8e0d5]/40 via-transparent to-[#d4c8b8]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute -left-10 -bottom-10 w-40 h-40 rounded-full bg-[#8b7355]/10 blur-2xl group-hover:scale-150 transition-transform duration-700" />
            
            <div className="relative z-10">
              <h3 className="font-serif text-xl mb-3 text-[#2b2b2b] group-hover:text-[#8b7355] transition-colors">Tentang Menunggu</h3>
              <p className="text-[#5a5a5a] text-sm leading-relaxed">
                Ada keindahan dalam menunggu—bukan pada akhirnya, tapi pada kesabaran yang kita pelajari di sepanjang jalan.
              </p>
            </div>
          </div>

          {/* Card Baru */}
          <div className="group relative bg-white border border-[#e8e0d5] rounded-2xl p-8 hover:shadow-xl transition-all duration-500 overflow-hidden cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-br from-[#d4c8b8]/30 via-[#f5f0e8]/50 to-[#e8e0d5]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute right-10 top-10 w-24 h-24 rounded-full border-2 border-[#c4b8a8]/20 opacity-40 group-hover:scale-150 transition-transform duration-700" />
            <div className="absolute left-10 bottom-10 w-16 h-16 rounded-full bg-[#8b7355]/10 blur-xl group-hover:scale-150 transition-transform duration-700 delay-100" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-3">
                <Coffee size={18} className="text-[#8b7355]" />
                <h3 className="font-serif text-xl text-[#2b2b2b] group-hover:text-[#8b7355] transition-colors">Tentang Kopi yang Dingin</h3>
              </div>
              <p className="text-[#5a5a5a] text-sm leading-relaxed italic">
                Kopi yang dingin bukan berarti gagal. Mungkin kita hanya terlalu sibuk menikmati percakapan yang lebih hangat.
              </p>
            </div>
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
          >
            <MessageCircle size={20} />
          </button>
          
          <button
            onClick={() => handleShare('facebook')}
            className="w-12 h-12 rounded-full border border-[#d4c8b8] flex items-center justify-center text-[#8b7355] hover:bg-[#1877F2] hover:border-[#1877F2] hover:text-white transition-all duration-300"
          >
            <Facebook size={20} />
          </button>
          
          <button
            onClick={() => handleShare('instagram')}
            className="w-12 h-12 rounded-full border border-[#d4c8b8] flex items-center justify-center text-[#8b7355] hover:bg-gradient-to-br hover:from-[#833AB4] hover:via-[#FD1D1D] hover:to-[#F77737] hover:border-transparent hover:text-white transition-all duration-300"
          >
            <Instagram size={20} />
          </button>
          
          <button
            onClick={() => handleShare('twitter')}
            className="w-12 h-12 rounded-full border border-[#d4c8b8] flex items-center justify-center text-[#8b7355] hover:bg-[#000000] hover:border-[#000000] hover:text-white transition-all duration-300"
          >
            <Twitter size={20} />
          </button>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-[#e8e0d5] mt-20">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            
            <div>
              <p className="font-serif text-xl mb-1">Sepucuk Surat untuk Malam</p>
              <p className="text-sm text-[#8b7355]">© 2026 Wildan Ferdiansyah</p>
            </div>

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
