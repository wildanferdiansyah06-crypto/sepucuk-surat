import { 
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
  Sparkles,
  Clock,
  Music,
  Feather,
  Download,
  ChevronDown,
  Library,
  Sun,
  Eye,
  X,
  Menu,
  Share2,
  Bookmark,
  Mail,
  Phone,
  Copy,
  Check,
  Wallet
} from "lucide-react";
import { useState, useEffect, useRef } from "react";

// Assets
const HERO_BG = "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2000&auto=format&fit=crop";

const BUKU_ILUSTRASI = {
  seniMenyeduh: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=800&auto=format&fit=crop",
  diBalikBar: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=800&auto=format&fit=crop",
  diAtasCangkir: "https://images.unsplash.com/photo-1498804103079-a6351b050096?q=80&w=800&auto=format&fit=crop",
  menulisPelan: "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=800&auto=format&fit=crop"
};

const GRAIN_TEXTURE = "https://www.transparenttextures.com/patterns/cream-paper.png";

const BUKU_LIST = [
  {
    id: 1,
    judul: "Seni Menyeduh Kehidupan",
    link: "https://drive.google.com/file/d/17Zd1FKFK4X_vmKhITFU5lXihOmMEkezI/view?usp=drivesdk",
    deskripsi: "Catatan tentang bagaimana kita menyikapi hidup dengan cara yang lebih gentle dan penuh makna, seperti menyeduh kopi yang sempurna.",
    halaman: "45",
    readTime: "25 menit",
    ilustrasi: BUKU_ILUSTRASI.seniMenyeduh,
    tema: "Kehidupan",
    preview: "Di dalamnya kamu akan menemukan catatan-catatan personal yang jujur tentang bagaimana kita bisa menyikapi hari-hari berat dengan lebih lembut. Bukan panduan, hanya berbagi."
  },
  {
    id: 2,
    judul: "Di Balik Bar",
    link: "https://drive.google.com/file/d/1N1zwGLqkbVQOzFV_fpRXJxQdawbgZGAl/view?usp=drivesdk",
    deskripsi: "Cerita-cerita dari balik meja bar, tempat di mana setiap cangkir memiliki kisahnya sendiri dan setiap penumpang membawa dunia mereka.",
    halaman: "38",
    readTime: "20 menit",
    ilustrasi: BUKU_ILUSTRASI.diBalikBar,
    tema: "Cerita",
    preview: "Kumpulan cerita pendek dari sudut pandang seorang barista. Tentang orang-orang yang datang dan pergi, tentang percakapan yang tertinggal di uap kopi."
  },
  {
    id: 3,
    judul: "Di Atas Cangkir Yang Sama",
    link: "https://drive.google.com/file/d/1cqRI8rfb7_0MIUXLekZJtV0xTFKXr-CD/view?usp=drivesdk",
    deskripsi: "Renungan tentang konsistensi, kehadiran, dan menemukan keindahan dalam pengulangan yang tampak monoton.",
    halaman: "52",
    readTime: "30 menit",
    ilustrasi: BUKU_ILUSTRASI.diAtasCangkir,
    tema: "Renungan",
    preview: "Tentang menemukan makna dalam hal-hal yang kita ulang setiap hari. Tentang cangkir yang sama, rasa yang familiar, dan ketenangan yang ditemukan dalam rutinitas."
  },
  {
    id: 4,
    judul: "Kami Menulis Pelan",
    link: "https://drive.google.com/file/d/1Mc6pOQ5z2xSn8Wmhf65kdgTrv5T5EzPm/view?usp=drivesdk",
    deskripsi: "Kumpulan tulisan yang lahir dari kesabaran, untuk mereka yang percaya pada proses dan kekuatan kata-kata yang diucapkan dengan lirih.",
    halaman: "41",
    readTime: "22 menit",
    ilustrasi: BUKU_ILUSTRASI.menulisPelan,
    tema: "Proses",
    preview: "Tulisan-tulisan yang tidak buru-buru. Yang mengalir seperti air, yang hadir seperti napas. Untuk mereka yang percaya bahwa yang pelan juga bisa sampai."
  }
];

const CATATAN_HARIAN = [
  "Hari ini kopi lebih pahit dari biasanya. Mungkin bukan kopinya.",
  "Ada yang bilang diam itu emas. Aku bilang diam itu napas.",
  "Menulis bukan untuk diingat. Menulis untuk tidak melupakan.",
  "Kadang kita hanya butuh seseorang yang mengangguk, bukan yang memberi solusi.",
  "Buku ini tidak akan mengubah hidupmu. Tapi mungkin menemani harimu.",
  "Di antara semua yang berisik, sunyi adalah kemewahan.",
  "Kopi dingin tetap kopi. Lelah tetap hidup."
];

const SEKILAS_ISI = [
  {
    id: 1,
    quote: "Ada hari-hari di mana aku hanya ingin menjadi secangkir kopi di tangan seseorang —hangat, hadir, dan cukup untuk menemani diam.",
    halaman: "23"
  },
  {
    id: 2,
    quote: "Kita tidak butuh selalu kuat. Kadang, kita hanya butuh tahu bahwa ada yang mengerti —bahwa lelah kita bukan aib, bahwa diam kita bukan kelemahan.",
    halaman: "47"
  },
  {
    id: 3,
    quote: "Menulis adalah caraku untuk tetap di sini. Bukan untuk menjelaskan, tapi untuk mengingatkan diri sendiri —bahwa aku masih merasakan.",
    halaman: "78"
  }
];

const REKENING = [
  {
    bank: "BRI",
    nomor: "356701025106533",
    atasNama: "WILDAN FERDIANSYAH MUCHTAR"
  },
  {
    bank: "Mandiri",
    nomor: "1430034741809",
    atasNama: "WILDAN FERDIANSYAH M"
  },
  {
    bank: "DANA",
    nomor: "089636357091",
    atasNama: "Wildan Ferdiansyah"
  }
];

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [readingProgress, setReadingProgress] = useState({});
  const [selectedBook, setSelectedBook] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [catatanIndex, setCatatanIndex] = useState(0);
  const [visibleSections, setVisibleSections] = useState({});
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [copiedBank, setCopiedBank] = useState(null);
  
  const [nama, setNama] = useState("");
  const [catatan, setCatatan] = useState("");
  const [kataPembaca, setKataPembaca] = useState([
    { id: 1, text: "Aku biasanya susah selesain buku, tapi yang ini beda. Bukan karena cepat—tapi karena aku nggak pengen buru-buru.", nama: "Rizky" },
    { id: 2, text: "Simple. Nggak ribet. Kayak ngobrol sama diri sendiri yang lebih jujur.", nama: "Anisa" },
    { id: 3, text: "Baca ini sambil ngopi sore, rasanya kayak ada yang ngerti tanpa perlu jelasin apa-apa.", nama: "Dian" },
    { id: 4, text: "Tidak mencoba menggurui, hanya berbagi. Itu yang bikin nyaman.", nama: "Bagas" },
    { id: 5, text: "Setiap halaman kayak pelukan hangat yang nggak bikin sesak.", nama: "Sinta" },
    { id: 6, text: "Baru pertama kali ngerasa gak sendirian dalam kesendirian.", nama: "Reza" }
  ]);

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  // Catatan harian auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCatatanIndex((prev) => (prev + 1) % CATATAN_HARIAN.length);
        setIsTransitioning(false);
      }, 500);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 60;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const openBookModal = (book) => {
    setSelectedBook(book);
    setShowModal(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedBook(null);
    document.body.style.overflow = "unset";
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!catatan.trim()) return;
    
    const newComment = {
      id: Date.now(),
      text: catatan,
      nama: nama.trim() || "Anonim"
    };
    
    setKataPembaca(prev => [newComment, ...prev]);
    setNama("");
    setCatatan("");
  };

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
      alert('Link telah disalin.');
      return;
    }
    window.open(shareUrls[platform], '_blank', 'width=600,height=400');
  };

  const copyToClipboard = (text, bank) => {
    navigator.clipboard.writeText(text);
    setCopiedBank(bank);
    setTimeout(() => setCopiedBank(null), 2000);
  };

  // Dynamic classes
  const bgClass = isDarkMode ? "bg-[#1a1816]" : "bg-[#faf8f5]";
  const textClass = isDarkMode ? "text-[#e8e0d5]" : "text-[#2b2b2b]";
  const borderColor = isDarkMode ? "border-[#e8e0d5]/20" : "border-[#8b7355]/20";
  const inputBg = isDarkMode ? "bg-[#2a2826]/50" : "bg-[#f5f0e8]/50";

  return (
    <main className={`${bgClass} ${textClass} font-sans min-h-screen transition-colors duration-700`}>
      
      {/* Grain Texture */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03]" 
           style={{ backgroundImage: `url(${GRAIN_TEXTURE})` }}></div>

      {/* Progress Bar */}
      <div className="fixed top-0 left-0 h-[2px] bg-[#8b7355] z-[60] transition-all duration-500" 
           style={{ width: `${(Object.keys(readingProgress).length / BUKU_LIST.length) * 100}%` }}></div>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 ${isDarkMode ? 'bg-[#1a1816]/90' : 'bg-[#faf8f5]/90'} backdrop-blur-sm border-b ${borderColor} transition-all duration-500`}>
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
                  className="font-serif text-lg tracking-wider opacity-80 hover:opacity-100 transition-opacity">
            Sepucuk Surat
          </button>
          
          <div className="flex items-center gap-4">
            <button onClick={toggleDarkMode} 
                    className="p-2 rounded-full hover:bg-[#8b7355]/10 transition-colors opacity-60 hover:opacity-100">
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} 
                    className="p-2 rounded-full hover:bg-[#8b7355]/10 transition-colors">
              <Menu size={20} />
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className={`absolute top-full left-0 right-0 ${isDarkMode ? 'bg-[#1a1816]/95' : 'bg-[#faf8f5]/95'} backdrop-blur-md border-b ${borderColor} py-6 px-6 animate-fade-in`}>
            <div className="max-w-4xl mx-auto flex flex-col gap-4 text-center">
              {['tentang', 'sekilas-isi', 'koleksi', 'catatan-kecil', 'tentang-penulis', 'testimonial'].map((item) => (
                <button key={item} onClick={() => scrollToSection(item)} 
                        className="py-2 text-sm tracking-[0.2em] uppercase opacity-60 hover:opacity-100 transition-opacity">
                  {item.replace(/-/g, ' ')}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_BG} className="w-full h-full object-cover opacity-40 scale-105 animate-breathe" alt="" />
          <div className={`absolute inset-0 ${isDarkMode ? 'bg-gradient-to-b from-[#1a1816]/70 via-[#1a1816]/50 to-[#1a1816]' : 'bg-gradient-to-b from-[#faf8f5]/30 via-[#faf8f5]/60 to-[#faf8f5]'}`}></div>
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto pt-20">
          <p className="text-[10px] tracking-[0.5em] uppercase mb-8 animate-fade-in-slow"
             style={{ color: isDarkMode ? '#e8e0d5' : '#2b2b2b', opacity: 0.6, textShadow: isDarkMode ? '0 2px 10px rgba(0,0,0,0.5)' : 'none' }}>
            Sebuah Buku Oleh
          </p>
          
          <h1 className="font-serif text-5xl md:text-7xl leading-[0.9] mb-6 animate-fade-in-slower"
              style={{ color: isDarkMode ? '#e8e0d5' : '#2b2b2b', textShadow: isDarkMode ? '0 2px 20px rgba(0,0,0,0.8)' : '0 1px 2px rgba(255,255,255,0.5)' }}>
            <span className="block opacity-90">Kelas Pekerja</span>
            <span className="block italic text-[#8b7355] text-4xl md:text-6xl mt-2">dan Surat-Surat untuk Malam</span>
          </h1>
          
          <p className="font-serif italic text-lg md:text-xl max-w-md mx-auto mb-12 leading-relaxed animate-fade-in-slowest"
             style={{ color: isDarkMode ? '#e8e0d5' : '#2b2b2b', opacity: 0.6, textShadow: isDarkMode ? '0 2px 10px rgba(0,0,0,0.5)' : 'none' }}>
            "Kita semua pernah lelah.<br/>Tapi kita masih di sini."
          </p>
          
          <button onClick={() => scrollToSection('tentang')} 
                  className="group flex items-center gap-2 mx-auto text-xs tracking-[0.3em] uppercase transition-all duration-500"
                  style={{ color: isDarkMode ? '#e8e0d5' : '#2b2b2b', opacity: 0.5 }}>
            <span>Mulai Membaca</span>
            <ChevronDown size={14} className="group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* Tentang */}
      <section id="tentang" className={`py-32 px-6 transition-all duration-1000 ${visibleSections['tentang'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-12 h-px bg-[#8b7355]/30 mx-auto mb-12"></div>
          
          <p className="text-[10px] tracking-[0.4em] uppercase opacity-40 mb-8">Tentang</p>
          
          <h2 className="font-serif text-3xl md:text-4xl leading-snug mb-8 opacity-90">
            Ini bukan buku motivasi.<br/>
            <span className="italic text-[#8b7355] opacity-70">Ini bukan panduan hidup.</span>
          </h2>
          
          <div className="space-y-6 text-[15px] leading-[1.8] opacity-70 font-light">
            <p className="first-letter:text-5xl first-letter:font-serif first-letter:float-left first-letter:mr-3 first-letter:mt-[-4px] first-letter:text-[#8b7355] first-letter:opacity-60">
              Ini adalah catatan-catatan dari seseorang yang masih belajar hadir—untuk dirinya sendiri, untuk orang-orang yang ia cintai, untuk hari-hari yang kadang terlalu berat untuk dilalui sendirian.
            </p>
            <p>
              Ditulis dalam keheningan malam, di sudut kedai kopi yang hampir tutup, di antara lagu-lagu yang terlalu jujur untuk didengar sendirian.
            </p>
          </div>

          <div className="mt-16 pt-8 border-t border-[#8b7355]/10">
            <p className="font-serif italic text-[#8b7355] text-lg opacity-60">
              "Buku ini ditulis perlahan.<br/>Dibuat untuk dibaca perlahan juga."
            </p>
          </div>
        </div>
      </section>

      {/* Sekilas Isi */}
      <section id="sekilas-isi" className={`py-32 px-6 ${isDarkMode ? 'bg-[#2a2826]/20' : 'bg-[#f5f0e8]/30'} transition-all duration-1000 ${visibleSections['sekilas-isi'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-[10px] tracking-[0.4em] uppercase opacity-40 mb-4">Cuplikan</p>
            <h3 className="font-serif text-3xl md:text-4xl opacity-90">Sekilas Isi</h3>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-[#8b7355]/20"></div>
            
            {SEKILAS_ISI.map((item, index) => (
              <div key={item.id} className="relative pl-8 md:pl-20 pb-16 last:pb-0">
                {/* Dot */}
                <div className="absolute left-[-4px] md:left-6 top-2 w-2 h-2 rounded-full bg-[#8b7355]/40"></div>
                
                <div className="space-y-4">
                  <p className="font-serif italic text-lg md:text-xl leading-relaxed opacity-80">
                    "{item.quote}"
                  </p>
                  <p className="text-[10px] tracking-[0.2em] uppercase opacity-40">
                    — Halaman {item.halaman}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rak Buku */}
      <section id="koleksi" className={`py-32 px-6 ${isDarkMode ? 'bg-[#2a2826]/30' : 'bg-[#f5f0e8]/20'} transition-all duration-1000 ${visibleSections['koleksi'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-[10px] tracking-[0.4em] uppercase opacity-40 mb-4">Perpustakaan Mini</p>
            <h3 className="font-serif text-3xl md:text-4xl opacity-90">Rak Buku</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            {BUKU_LIST.map((buku) => (
              <div key={buku.id} 
                   className="group cursor-pointer"
                   onClick={() => openBookModal(buku)}>
                
                <div className="relative aspect-[4/3] mb-6 overflow-hidden rounded-sm 
                                shadow-[0_4px_20px_-10px_rgba(0,0,0,0.15)] 
                                group-hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] 
                                group-hover:-translate-y-2
                                transition-all duration-500 ease-out">
                  
                  <img src={buku.ilustrasi} alt={buku.judul} 
                       className="w-full h-full object-cover opacity-90 
                                  group-hover:opacity-100 group-hover:scale-[1.05] 
                                  transition-all duration-700" />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70"></div>
                  <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
                  
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full 
                                  bg-white/10 backdrop-blur-sm 
                                  flex items-center justify-center
                                  animate-pulse">
                    <Eye size={18} className="text-white/80" />
                  </div>
                  
                  <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2">
                    <span className="w-6 h-px bg-white/40"></span>
                    <p className="text-white/70 text-xs tracking-wider flex items-center gap-1">
                      Klik untuk membaca
                      <ArrowUpRight size={12} className="opacity-60" />
                    </p>
                  </div>
                </div>

                <div className="space-y-3 group-hover:translate-y-1 transition-transform duration-300">
                  <div className="flex items-center gap-3 text-[10px] tracking-[0.2em] uppercase opacity-40">
                    <span>{buku.tema}</span>
                    <span className="w-1 h-1 rounded-full bg-current"></span>
                    <span>{buku.halaman} halaman</span>
                  </div>
                  
                  <h4 className="font-serif text-xl md:text-2xl opacity-80 group-hover:opacity-100 transition-opacity">
                    {buku.judul}
                  </h4>
                  
                  <p className="text-sm leading-relaxed opacity-50 line-clamp-2 font-light">
                    {buku.deskripsi}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-24 pt-12 border-t border-[#8b7355]/10 text-center">
            <p className="text-xs opacity-40 tracking-wider">
              Empat buku • Gratis untuk dibaca • Dari hati ke hati
            </p>
          </div>
        </div>
      </section>

      {/* Catatan Kecil */}
      <section id="catatan-kecil" className={`py-24 px-6 ${isDarkMode ? 'bg-[#2a2826]/30' : 'bg-[#f5f0e8]/30'} transition-all duration-1000`}>
        <div className="max-w-xl mx-auto text-center">
          <p className="text-[10px] tracking-[0.4em] uppercase opacity-30 mb-8">Catatan Kecil</p>
          
          <div 
            className="relative h-32 flex items-center justify-center overflow-hidden cursor-grab active:cursor-grabbing touch-pan-x"
            onTouchStart={(e) => {
              const touch = e.touches[0];
              e.currentTarget.dataset.startX = touch.clientX;
            }}
            onTouchEnd={(e) => {
              const touch = e.changedTouches[0];
              const startX = parseFloat(e.currentTarget.dataset.startX || '0');
              const diff = startX - touch.clientX;
              
              if (Math.abs(diff) > 50) {
                if (diff > 0) {
                  setIsTransitioning(true);
                  setTimeout(() => {
                    setCatatanIndex((prev) => (prev + 1) % CATATAN_HARIAN.length);
                    setIsTransitioning(false);
                  }, 300);
                } else {
                  setIsTransitioning(true);
                  setTimeout(() => {
                    setCatatanIndex((prev) => (prev - 1 + CATATAN_HARIAN.length) % CATATAN_HARIAN.length);
                    setIsTransitioning(false);
                  }, 300);
                }
              }
            }}
          >
            {CATATAN_HARIAN.map((catatan, index) => (
              <p key={index} 
                 className={`absolute font-serif italic text-lg md:text-xl px-6 transition-all duration-300 ease-out w-full
                   ${index === catatanIndex && !isTransitioning ? 'opacity-60 translate-x-0' : ''}
                   ${index === catatanIndex && isTransitioning ? 'opacity-0 translate-x-[-20px]' : ''}
                   ${index !== catatanIndex ? 'opacity-0 translate-x-[20px]' : ''}`}>
                "{catatan}"
              </p>
            ))}
            
            <p className="absolute bottom-0 text-[10px] opacity-20 tracking-wider">← geser →</p>
          </div>
          
          <div className="flex justify-center gap-2 mt-6">
            {CATATAN_HARIAN.map((_, index) => (
              <button 
                key={index}
                onClick={() => {
                  if (index !== catatanIndex) {
                    setIsTransitioning(true);
                    setTimeout(() => {
                      setCatatanIndex(index);
                      setIsTransitioning(false);
                    }, 300);
                  }
                }}
                className={`h-1.5 rounded-full transition-all duration-300 
                  ${index === catatanIndex ? 'bg-[#8b7355] w-6' : 'bg-[#8b7355]/20 w-1.5 hover:bg-[#8b7355]/40'}`}
                aria-label={`Catatan ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Tentang Penulis */}
      <section id="tentang-penulis" className={`py-32 px-6 ${isDarkMode ? 'bg-[#2a2826]/30' : 'bg-[#f5f0e8]/20'} transition-all duration-1000 ${visibleSections['tentang-penulis'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden shadow-lg">
            <img src="/wildan.png" alt="Wildan Ferdiansyah" className="w-full h-full object-cover" />
          </div>
          
          <p className="text-[10px] tracking-[0.4em] uppercase opacity-40 mb-4">Tentang Penulis</p>
          
          <div className="space-y-6 text-[15px] leading-[1.8] opacity-70 font-light mb-8">
            <p>
              Bukan penulis profesional. Bukan motivator. Hanya seseorang yang mencoba memahami hidupnya melalui kata-kata.
            </p>
            <p>
              Pernah menjadi barista. Pernah menjadi mural artist. Sekarang menulis di sela-sela waktu—bukan untuk menjadi terkenal, tapi untuk tetap waras.
            </p>
          </div>

          <p className="font-serif italic text-[#8b7355] text-lg opacity-60 mb-8">
            "Aku menulis untuk hadir,<br/>bukan untuk memukau."
          </p>

          <div className="flex items-center justify-center gap-4 text-[10px] tracking-[0.2em] uppercase opacity-40">
            <span>Barista</span>
            <span className="w-1 h-1 rounded-full bg-current"></span>
            <span>Mural Artist</span>
            <span className="w-1 h-1 rounded-full bg-current"></span>
            <span>Penulis</span>
          </div>
        </div>
      </section>

      {/* Testimonial Horizontal Scroll - FIXED */}
      <section id="testimonial" className={`py-32 px-6 transition-all duration-1000 ${visibleSections['testimonial'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[10px] tracking-[0.4em] uppercase opacity-40 mb-4">Cuplikan</p>
            <h3 className="font-serif text-3xl opacity-90">Yang Mereka Katakan</h3>
          </div>

          {/* Horizontal Scroll Container - Manual scroll only, no auto-scroll */}
          <div 
            className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-[#8b7355]/20 scrollbar-track-transparent"
            style={{ scrollbarWidth: 'thin', msOverflowStyle: 'auto' }}
          >
            {kataPembaca.map((kata, idx) => (
              <div 
                key={kata.id} 
                className={`flex-shrink-0 w-[calc(50%-12px)] min-w-[280px] snap-start ${isDarkMode ? 'bg-[#2a2826]/40' : 'bg-[#f5f0e8]/40'} p-6 rounded-sm border ${borderColor} hover:border-[#8b7355]/30 transition-all duration-300`}
              >
                <p className="font-serif italic text-sm leading-relaxed mb-4 opacity-90">"{kata.text}"</p>
                <p className="text-[10px] tracking-wider opacity-50">— {kata.nama}</p>
              </div>
            ))}
          </div>

          {/* Form Input Komentar - ENHANCED VISIBILITY */}
          <div className="mt-16 pt-12 border-t border-[#8b7355]/20">
            <p className="text-center text-[11px] tracking-[0.3em] uppercase opacity-60 mb-8 font-medium">Tinggalkan Jejak</p>
            
            <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
              <input
                type="text"
                placeholder="Namamu (opsional)"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                className={`w-full px-4 py-3.5 text-sm ${inputBg} border ${borderColor} rounded-sm focus:outline-none focus:border-[#8b7355]/60 focus:ring-1 focus:ring-[#8b7355]/20 transition-all placeholder:opacity-50 text-current`}
              />
              <textarea
                placeholder="Tuliskan sesuatu..."
                value={catatan}
                onChange={(e) => setCatatan(e.target.value)}
                rows={4}
                className={`w-full px-4 py-3.5 text-sm ${inputBg} border ${borderColor} rounded-sm focus:outline-none focus:border-[#8b7355]/60 focus:ring-1 focus:ring-[#8b7355]/20 transition-all resize-none placeholder:opacity-50 text-current`}
              />
              <button
                type="submit"
                disabled={!catatan.trim()}
                className={`w-full py-3.5 text-xs tracking-[0.2em] uppercase transition-all duration-300 flex items-center justify-center gap-2 rounded-sm font-medium ${catatan.trim() ? (isDarkMode ? 'bg-[#e8e0d5] text-[#1a1816] hover:bg-[#d4ccc0]' : 'bg-[#2b2b2b] text-[#faf8f5] hover:bg-[#1a1a1a]') : 'opacity-40 cursor-not-allowed bg-[#8b7355]/20'}`}
              >
                <Send size={14} />
                Kirim
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer dengan Donasi */}
      <footer className={`py-20 px-6 border-t ${borderColor}`}>
        <div className="max-w-3xl mx-auto text-center">
          {/* Quote */}
          <p className="font-serif text-2xl md:text-3xl leading-relaxed mb-4 opacity-90">
            "Tidak semua buku harus mengubah hidupmu."
          </p>
          <p className="text-sm opacity-50 mb-12">
            Ada yang cukup menemanimu,<br/>sebentar saja.
          </p>

          {/* Icons */}
          <div className="flex items-center justify-center gap-8 mb-12">
            <Coffee size={20} className="opacity-40" />
            <span className="w-1 h-1 rounded-full bg-current opacity-40"></span>
            <BookOpen size={20} className="opacity-40" />
            <span className="w-1 h-1 rounded-full bg-current opacity-40"></span>
            <Moon size={20} className="opacity-40" />
          </div>

          {/* Social Media */}
          <div className="flex items-center justify-center gap-6 mb-16">
            <button onClick={() => handleShare('whatsapp')} className="w-10 h-10 rounded-full border border-current/20 flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity">
              <MessageCircle size={18} />
            </button>
            <button onClick={() => handleShare('facebook')} className="w-10 h-10 rounded-full border border-current/20 flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity">
              <Facebook size={18} />
            </button>
            <button onClick={() => handleShare('twitter')} className="w-10 h-10 rounded-full border border-current/20 flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity">
              <Twitter size={18} />
            </button>
            <button onClick={() => handleShare('instagram')} className="w-10 h-10 rounded-full border border-current/20 flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity">
              <Instagram size={18} />
            </button>
          </div>

          {/* Section Donasi */}
          <div className={`${isDarkMode ? 'bg-[#2a2826]/50' : 'bg-[#f5f0e8]/50'} rounded-lg p-8 mb-12`}>
            <div className="flex items-center justify-center gap-2 mb-6">
              <Coffee size={20} className="text-[#8b7355]" />
              <p className="text-[10px] tracking-[0.3em] uppercase opacity-60">Sawer Kopi</p>
            </div>
            
            <p className="font-serif italic text-sm opacity-70 mb-6">
              "Dukung aku untuk terus menulis dengan secangkir kopi hangat."
            </p>

            {/* QRIS DANA */}
            <div className="mb-8">
              <p className="text-[10px] tracking-wider uppercase opacity-40 mb-4">Scan QRIS DANA</p>
              <div className="w-48 h-48 mx-auto bg-white rounded-lg p-4">
                <img src="/qris-dana.png" alt="QRIS DANA" className="w-full h-full object-contain" />
              </div>
            </div>

            {/* Rekening Bank */}
            <div className="space-y-4 max-w-md mx-auto">
              <p className="text-[10px] tracking-wider uppercase opacity-40 mb-4">atau Transfer ke</p>
              
              {REKENING.map((rek) => (
                <div key={rek.bank} className={`flex items-center justify-between p-4 rounded ${isDarkMode ? 'bg-[#1a1816]/50' : 'bg-white/50'}`}>
                  <div className="text-left">
                    <p className="text-xs font-medium opacity-80">{rek.bank}</p>
                    <p className="text-[10px] opacity-50">{rek.atasNama}</p>
                    <p className="text-sm tracking-wider opacity-90">{rek.nomor}</p>
                  </div>
                  <button 
                    onClick={() => copyToClipboard(rek.nomor, rek.bank)}
                    className="p-2 rounded-full hover:bg-[#8b7355]/10 transition-colors opacity-60 hover:opacity-100"
                  >
                    {copiedBank === rek.bank ? <Check size={16} className="text-green-600" /> : <Copy size={16} />}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Hubungi Penulis */}
          <p className="text-[10px] tracking-[0.3em] uppercase opacity-40 mb-6">Hubungi Penulis</p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-sm opacity-60 mb-12">
            <a href="tel:089636357091" className="flex items-center gap-2 hover:opacity-100 transition-opacity">
              <Phone size={14} />
              0896-3635-7091
            </a>
            <span className="hidden md:block w-1 h-1 rounded-full bg-current opacity-40"></span>
            <a href="mailto:wildanferdiansyah06@gmail.com" className="flex items-center gap-2 hover:opacity-100 transition-opacity">
              <Mail size={14} />
              wildanferdiansyah06@gmail.com
            </a>
            <span className="hidden md:block w-1 h-1 rounded-full bg-current opacity-40"></span>
            <a href="https://instagram.com/_iamwildan_" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:opacity-100 transition-opacity">
              <Instagram size={14} />
              @_iamwildan_
            </a>
          </div>

          {/* Copyright */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-current/10 text-[10px] tracking-wider opacity-40">
            <span>© 2026 WILDAN FERDIANSYAH</span>
            <span className="flex items-center gap-1">
              DIBUAT DENGAN <Heart size={10} className="inline" /> DAN SECANGKIR KOPI
            </span>
          </div>
        </div>
      </footer>

      {/* Modal */}
      {showModal && selectedBook && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in" onClick={closeModal}>
          <div className={`${isDarkMode ? 'bg-[#2a2826] text-[#e8e0d5]' : 'bg-[#faf8f5] text-[#2b2b2b]'} max-w-lg w-full max-h-[85vh] overflow-y-auto shadow-2xl animate-scale-up`} onClick={e => e.stopPropagation()}>
            <div className="relative aspect-video">
              <img src={selectedBook.ilustrasi} alt={selectedBook.judul} className="w-full h-full object-cover opacity-90" />
              <button onClick={closeModal} 
                      className={`absolute top-4 right-4 w-8 h-8 ${isDarkMode ? 'bg-[#1a1816]/80 text-[#e8e0d5]' : 'bg-white/80 text-[#2b2b2b]'} rounded-full flex items-center justify-center text-xs hover:opacity-80 transition-colors`}>
                ✕
              </button>
            </div>
            <div className="p-8">
              <div className="flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase opacity-40 mb-3">
                <span>{selectedBook.tema}</span>
                <span>•</span>
                <span>{selectedBook.halaman} halaman</span>
                <span>•</span>
                <span>{selectedBook.readTime}</span>
              </div>
              
              <h3 className="font-serif text-2xl mb-4">{selectedBook.judul}</h3>
              
              <p className="text-sm leading-relaxed mb-6 opacity-70 font-light">
                {selectedBook.deskripsi}
              </p>

              <div className={`${isDarkMode ? 'bg-[#1a1816]/50' : 'bg-[#f5f0e8]/50'} rounded-lg p-4 mb-6`}>
                <p className="text-sm italic opacity-60">
                  "{selectedBook.preview}"
                </p>
              </div>
              
              <div className="flex gap-3">
                <button onClick={closeModal} 
                        className={`flex-1 border ${isDarkMode ? 'border-[#e8e0d5]/30 text-[#e8e0d5]' : 'border-[#2b2b2b]/20 text-[#2b2b2b]'} py-3 text-xs tracking-[0.2em] uppercase hover:opacity-70 transition-colors`}>
                  Tutup
                </button>
                <a href={selectedBook.link} target="_blank" rel="noopener noreferrer"
                   className={`flex-[2] ${isDarkMode ? 'bg-[#e8e0d5] text-[#1a1816]' : 'bg-[#2b2b2b] text-[#faf8f5]'} py-3 text-center text-xs tracking-[0.2em] uppercase hover:opacity-90 transition-colors flex items-center justify-center gap-2`}>
                  <Download size={14} />
                  Unduh & Baca
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

    </main>
  );
}
