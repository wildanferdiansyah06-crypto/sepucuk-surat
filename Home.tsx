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
  Phone
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

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [readingProgress, setReadingProgress] = useState({});
  const [selectedBook, setSelectedBook] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [catatanIndex, setCatatanIndex] = useState(0);
  const [visibleSections, setVisibleSections] = useState({});
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  // Touch handling
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const minSwipeDistance = 50;
  
  // Hover state for books
  const [hoveredBook, setHoveredBook] = useState(null);
  
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

  // Touch handlers
  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCatatanIndex((prev) => (prev + 1) % CATATAN_HARIAN.length);
        setIsTransitioning(false);
      }, 500);
    }
    if (isRightSwipe) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCatatanIndex((prev) => (prev - 1 + CATATAN_HARIAN.length) % CATATAN_HARIAN.length);
        setIsTransitioning(false);
      }, 500);
    }
  };

  // Dot clickable handler
  const goToCatatan = (index) => {
    if (index === catatanIndex) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCatatanIndex(index);
      setIsTransitioning(false);
    }, 500);
  };

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
    setKataPembaca([...kataPembaca, newComment]);
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

  // Dynamic classes
  const bgClass = isDarkMode ? "bg-[#1a1816]" : "bg-[#faf8f5]";
  const textClass = isDarkMode ? "text-[#e8e0d5]" : "text-[#2b2b2b]";
  const borderColor = isDarkMode ? "border-[#e8e0d5]/10" : "border-[#8b7355]/10";

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
              {['tentang', 'koleksi', 'cuplikan', 'penulis'].map((item) => (
                <button key={item} onClick={() => scrollToSection(item)} 
                        className="py-2 text-sm tracking-[0.2em] uppercase opacity-60 hover:opacity-100 transition-opacity">
                  {item}
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
            <span className="block opacity-90">Sepucuk Surat</span>
            <span className="block italic text-[#8b7355] text-4xl md:text-6xl mt-2">untuk Malam</span>
          </h1>
          
          <p className="font-serif italic text-lg md:text-xl max-w-md mx-auto mb-12 leading-relaxed animate-fade-in-slowest"
             style={{ color: isDarkMode ? '#e8e0d5' : '#2b2b2b', opacity: 0.6, textShadow: isDarkMode ? '0 2px 10px rgba(0,0,0,0.5)' : 'none' }}>
            "Kita semua pernah lelah.<br/>Tapi kita masih di sini."
          </p>
          
          <button onClick={() => scrollToSection('koleksi')} 
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

      {/* Catatan Kecil dengan Swipe + Dot Clickable */}
      <section className={`py-24 px-6 ${isDarkMode ? 'bg-[#2a2826]/20' : 'bg-[#f5f0e8]/30'} transition-all duration-1000`}>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[10px] tracking-[0.4em] uppercase opacity-40 mb-12">Catatan Kecil</p>
          
          <div 
            className="relative overflow-hidden cursor-grab active:cursor-grabbing min-h-[120px] flex items-center justify-center"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <p className={`text-lg md:text-2xl font-serif italic leading-relaxed transition-all duration-500 ${isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-60 translate-y-0'}`}>
              "{CATATAN_HARIAN[catatanIndex]}"
            </p>
          </div>

          {/* Dot indicators */}
          <div className="flex gap-2 mt-8 justify-center">
            {CATATAN_HARIAN.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToCatatan(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${idx === catatanIndex ? 'bg-[#8b7355] w-6' : 'bg-[#8b7355]/30 w-2 hover:bg-[#8b7355]/50'}`}
                aria-label={`Go to note ${idx + 1}`}
              />
            ))}
          </div>

          <p className="text-[10px] opacity-30 mt-4 tracking-wider">← Geser untuk navigasi →</p>
        </div>
      </section>

      {/* Rak Buku dengan Hover Effect + Icon Mata */}
      <section id="koleksi" className={`py-32 px-6 ${isDarkMode ? 'bg-[#2a2826]/30' : 'bg-[#f5f0e8]/20'} transition-all duration-1000 ${visibleSections['koleksi'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-[10px] tracking-[0.4em] uppercase opacity-40 mb-4">Perpustakaan Mini</p>
            <h3 className="font-serif text-3xl md:text-4xl opacity-90">Rak Buku</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            {BUKU_LIST.map((buku) => (
              <div 
                key={buku.id} 
                className="group cursor-pointer"
                onClick={() => openBookModal(buku)}
                onMouseEnter={() => setHoveredBook(buku.id)}
                onMouseLeave={() => setHoveredBook(null)}
              >
                <div className="relative aspect-[4/3] mb-6 overflow-hidden rounded-sm transition-all duration-500 ease-out transform group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)]">
                  <img 
                    src={buku.ilustrasi} 
                    alt={buku.judul} 
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-[1.05] transition-all duration-700" 
                  />
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                  
                  {/* Icon mata yang muncul */}
                  <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${hoveredBook === buku.id ? 'opacity-100' : 'opacity-0'}`}>
                    <div className={`w-14 h-14 rounded-full flex items-center justify-center backdrop-blur-sm transition-transform duration-500 ${hoveredBook === buku.id ? 'scale-100' : 'scale-50'}`}
                         style={{ backgroundColor: isDarkMode ? 'rgba(232,224,213,0.15)' : 'rgba(255,255,255,0.25)' }}>
                      <Eye size={24} className={isDarkMode ? 'text-[#e8e0d5]' : 'text-white'} />
                    </div>
                  </div>
                  
                  {/* Border accent */}
                  <div className="absolute inset-0 border-2 border-[#8b7355]/0 group-hover:border-[#8b7355]/30 rounded-sm transition-colors duration-500"></div>
                </div>

                <div className="space-y-3 transform group-hover:translate-y-1 transition-transform duration-500">
                  <div className="flex items-center gap-3 text-[10px] tracking-[0.2em] uppercase opacity-40 group-hover:opacity-60 transition-opacity">
                    <span>{buku.tema}</span>
                    <span className="w-1 h-1 rounded-full bg-current"></span>
                    <span>{buku.halaman} halaman</span>
                  </div>
                  
                  <h4 className="font-serif text-xl md:text-2xl opacity-80 group-hover:opacity-100 group-hover:text-[#8b7355] transition-all duration-300">
                    {buku.judul}
                  </h4>
                  
                  <p className="text-sm leading-relaxed opacity-50 line-clamp-2 font-light group-hover:opacity-70 transition-opacity">
                    {buku.deskripsi}
                  </p>
                  
                  {/* Text hint */}
                  <p className="text-[10px] tracking-wider opacity-0 group-hover:opacity-40 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0 flex items-center gap-1">
                    Klik untuk membaca <ArrowUpRight size={10} />
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

      {/* Cuplikan */}
      <section id="cuplikan" className={`py-32 px-6 transition-all duration-1000 ${visibleSections['cuplikan'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-[10px] tracking-[0.4em] uppercase opacity-40 mb-4">Cuplikan</p>
            <h3 className="font-serif text-3xl opacity-90">Yang Mereka Katakan</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {kataPembaca.map((kata, idx) => (
              <div key={kata.id} className={`${isDarkMode ? 'bg-[#2a2826]/30' : 'bg-[#f5f0e8]/30'} p-6 rounded-sm transition-all duration-500 hover:scale-[1.02]`}>
                <p className="font-serif italic text-sm leading-relaxed mb-4 opacity-80">"{kata.text}"</p>
                <p className="text-[10px] tracking-wider opacity-40">— {kata.nama}</p>
              </div>
            ))}
          </div>

          {/* Form Kata Pembaca */}
          <div className="mt-16 pt-12 border-t border-[#8b7355]/10">
            <p className="text-center text-[10px] tracking-[0.4em] uppercase opacity-40 mb-8">Tinggalkan Jejak</p>
            
            <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
              <input
                type="text"
                placeholder="Namamu (opsional)"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                className={`w-full px-4 py-3 text-sm bg-transparent border ${borderColor} rounded-sm focus:outline-none focus:border-[#8b7355]/50 transition-colors placeholder:opacity-30`}
              />
              <textarea
                placeholder="Tuliskan sesuatu..."
                value={catatan}
                onChange={(e) => setCatatan(e.target.value)}
                rows={3}
                className={`w-full px-4 py-3 text-sm bg-transparent border ${borderColor} rounded-sm focus:outline-none focus:border-[#8b7355]/50 transition-colors resize-none placeholder:opacity-30`}
              />
              <button
                type="submit"
                disabled={!catatan.trim()}
                className={`w-full py-3 text-xs tracking-[0.2em] uppercase transition-all duration-300 flex items-center justify-center gap-2 ${catatan.trim() ? (isDarkMode ? 'bg-[#e8e0d5] text-[#1a1816]' : 'bg-[#2b2b2b] text-[#faf8f5]') : 'opacity-30 cursor-not-allowed'}`}
              >
                <Send size={14} />
                Kirim
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Penulis */}
      <section id="penulis" className={`py-32 px-6 ${isDarkMode ? 'bg-[#2a2826]/30' : 'bg-[#f5f0e8]/20'} transition-all duration-1000 ${visibleSections['penulis'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-20 h-20 mx-auto mb-8 rounded-full overflow-hidden opacity-80">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop" alt="Penulis" className="w-full h-full object-cover grayscale" />
          </div>
          
          <p className="text-[10px] tracking-[0.4em] uppercase opacity-40 mb-4">Penulis</p>
          <h3 className="font-serif text-2xl mb-6 opacity-90">Seorang yang Masih Belajar</h3>
          
          <p className="text-sm leading-relaxed opacity-70 font-light mb-8">
            Menulis bukan untuk dikenal, tapi untuk mengingat. Bahwa kita pernah di sini. Bahwa kita pernah merasa.
          </p>

          <div className="flex justify-center gap-4">
            <button onClick={() => handleShare('instagram')} className="p-3 rounded-full hover:bg-[#8b7355]/10 transition-colors opacity-60 hover:opacity-100">
              <Instagram size={18} />
            </button>
            <button onClick={() => handleShare('twitter')} className="p-3 rounded-full hover:bg-[#8b7355]/10 transition-colors opacity-60 hover:opacity-100">
              <Twitter size={18} />
            </button>
            <button onClick={() => handleShare('facebook')} className="p-3 rounded-full hover:bg-[#8b7355]/10 transition-colors opacity-60 hover:opacity-100">
              <Facebook size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-12 px-6 border-t ${borderColor}`}>
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="font-serif text-sm opacity-60">Sepucuk Surat</p>
          
          <div className="flex items-center gap-6 text-[10px] tracking-wider opacity-40">
            <span>© 2024</span>
            <span>•</span>
            <span>Dibuat dengan <Heart size={10} className="inline" /> di sudut kopi</span>
          </div>
        </div>
      </footer>

    </main>
  );
}
