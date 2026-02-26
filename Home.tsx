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
  Palette,
  Sparkles,
  Clock,
  Music,
  Feather,
  Download,
  ChevronDown,
  Library,
  Sun,
  Volume2,
  Bookmark,
  Share2,
  Eye,
  X,
  Menu
} from "lucide-react";
import { useState, useEffect, useRef } from "react";

// Ganti dengan ilustrasi Anda yang sebenarnya jika ada
const HERO_BG =
  "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1400&auto=format&fit=crop";

// Ilustrasi untuk setiap buku - tema mocha aesthetic
const BUKU_ILUSTRASI = {
  seniMenyeduh: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=600&auto=format&fit=crop", // V60/coffee brewing
  diBalikBar: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=600&auto=format&fit=crop", // Coffee bar/counter
  diAtasCangkir: "https://images.unsplash.com/photo-1498804103079-a6351b050096?q=80&w=600&auto=format&fit=crop", // Coffee cup from above
  menulisPelan: "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=600&auto=format&fit=crop" // Writing/journal
};

// Background texture mocha
const MOCHA_BG = "https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=2000&auto=format&fit=crop";

// Data Buku
const BUKU_LIST = [
  {
    id: 1,
    judul: "Seni Menyeduh Kehidupan",
    link: "https://drive.google.com/file/d/17Zd1FKFK4X_vmKhITFU5lXihOmMEkezI/view?usp=drivesdk",
    deskripsi: "Catatan tentang bagaimana kita menyikapi hidup dengan cara yang lebih gentle dan penuh makna, seperti menyeduh kopi yang sempurna.",
    halaman: "45",
    readTime: "25 menit",
    ilustrasi: BUKU_ILUSTRASI.seniMenyeduh,
    tema: "Kehidupan & Kesadaran"
  },
  {
    id: 2,
    judul: "Di Balik Bar",
    link: "https://drive.google.com/file/d/1N1zwGLqkbVQOzFV_fpRXJxQdawbgZGAl/view?usp=drivesdk",
    deskripsi: "Cerita-cerita dari balik meja bar, tempat di mana setiap cangkir memiliki kisahnya sendiri dan setiap penumpang membawa dunia mereka.",
    halaman: "38",
    readTime: "20 menit",
    ilustrasi: BUKU_ILUSTRASI.diBalikBar,
    tema: "Cerita & Interaksi"
  },
  {
    id: 3,
    judul: "Di Atas Cangkir Yang Sama",
    link: "https://drive.google.com/file/d/1cqRI8rfb7_0MIUXLekZJtV0xTFKXr-CD/view?usp=drivesdk",
    deskripsi: "Renungan tentang konsistensi, kehadiran, dan menemukan keindahan dalam pengulangan yang tampak monoton.",
    halaman: "52",
    readTime: "30 menit",
    ilustrasi: BUKU_ILUSTRASI.diAtasCangkir,
    tema: "Konsistensi & Kehadiran"
  },
  {
    id: 4,
    judul: "Kami Menulis Pelan",
    link: "https://drive.google.com/file/d/1Mc6pOQ5z2xSn8Wmhf65kdgTrv5T5EzPm/view?usp=drivesdk",
    deskripsi: "Kumpulan tulisan yang lahir dari kesabaran, untuk mereka yang percaya pada proses dan kekuatan kata-kata yang diucapkan dengan lirih.",
    halaman: "41",
    readTime: "22 menit",
    ilustrasi: BUKU_ILUSTRASI.menulisPelan,
    tema: "Proses & Kesabaran"
  }
];

export default function HomePage() {
  const scrollRef = useRef(null);
  const rakBukuRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [activeSection, setActiveSection] = useState("");
  const [selectedBook, setSelectedBook] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [readingProgress, setReadingProgress] = useState({});
  const [readingMode, setReadingMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
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

  // Load reading progress from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('readingProgress');
    if (saved) {
      setReadingProgress(JSON.parse(saved));
    }
  }, []);

  // Scroll spy untuk navigasi aktif
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['tentang', 'buku-ini-untuk', 'rak-buku', 'cuplikan', 'penulis'];
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto scroll effect
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer || isDragging) return;

    let animationId;
    let currentScroll = scrollContainer.scrollLeft;
    
    const scroll = () => {
      if (!isPaused && !isDragging) {
        currentScroll += 0.3;
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

  // Handle scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
  };

  // Handle book selection
  const openBookModal = (book) => {
    setSelectedBook(book);
    setShowModal(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedBook(null);
    document.body.style.overflow = 'unset';
  };

  // Track download
  const handleDownload = (bookId) => {
    const newProgress = { ...readingProgress, [bookId]: { downloaded: true, date: new Date().toISOString() } };
    setReadingProgress(newProgress);
    localStorage.setItem('readingProgress', JSON.stringify(newProgress));
  };

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
      icon: <BookOpen size={24} />,
      text: "Untuk kamu yang membaca dengan pelan, bukan karena lambat—tapi karena ingin merasakan.",
      bg: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?q=80&w=400&auto=format&fit=crop",
      title: "Membaca Perlahan"
    },
    {
      icon: <Coffee size={24} />,
      text: "Untuk kamu yang bekerja seharian dan baru bisa merenung saat dunia sudah tidur.",
      bg: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=400&auto=format&fit=crop",
      title: "Malam yang Panjang"
    },
    {
      icon: <Moon size={24} />,
      text: "Untuk kamu yang duduk sendiri dengan kopi dan kesunyian, dan merasa itu cukup.",
      bg: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=400&auto=format&fit=crop",
      title: "Kesendirian yang Nyaman"
    },
    {
      icon: <Heart size={24} />,
      text: "Untuk kamu yang sering merasa tak terlihat, tapi tetap hadir—setiap hari.",
      bg: "https://images.unsplash.com/photo-1498804103079-a6351b050096?q=80&w=400&auto=format&fit=crop",
      title: "Kehadiran yang Diam"
    }
  ];

  const cuplikanItems = [
    {
      quote: "Ada hari-hari di mana aku hanya ingin menjadi secangkir kopi di tangan seseorang—hangat, hadir, dan cukup untuk menemani diam.",
      page: "halaman 23",
      book: "Seni Menyeduh Kehidupan"
    },
    {
      quote: "Kita tidak butuh selalu kuat. Kadang, kita hanya butuh tahu bahwa ada yang mengerti—bahwa lelah kita bukan aib, bahwa diam kita bukan kelemahan.",
      page: "halaman 47",
      book: "Di Balik Bar"
    },
    {
      quote: "Menulis adalah caraku untuk tetap di sini. Bukan untuk menjelaskan, tapi untuk mengingatkan diri sendiri—bahwa aku masih merasakan.",
      page: "halaman 78",
      book: "Kami Menulis Pelan"
    }
  ];

  const ruangSunyiItems = [
    {
      icon: <Sparkles size={20} />,
      text: "Kopi yang sudah dingin, tapi tetap diminum.",
      delay: "0"
    },
    {
      icon: <Clock size={20} />,
      text: "Lagu yang diputar berulang kali.",
      delay: "100"
    },
    {
      icon: <Music size={20} />,
      text: "Buku yang dibaca dengan napas pelan.",
      delay: "200"
    },
    {
      icon: <Feather size={20} />,
      text: "Catatan yang ditulis tanpa tujuan, hanya untuk mengingat.",
      delay: "300"
    }
  ];

  const duplicatedComments = [...kataPembaca, ...kataPembaca];

  // Theme classes
  const theme = readingMode ? {
    bg: "bg-[#1c1917]",
    text: "text-[#e7e5e4]",
    subtext: "text-[#a8a29e]",
    accent: "text-[#d6d3d1]",
    card: "bg-[#292524] border-[#44403c]",
    nav: "bg-[#1c1917]/90 border-[#44403c]",
    muted: "bg-[#141211]",
    grain: "opacity-5"
  } : {
    bg: "bg-[#faf8f5]",
    text: "text-[#2b2b2b]",
    subtext: "text-[#78716c]",
    accent: "text-[#8b7355]",
    card: "bg-white border-[#e8e0d5]",
    nav: "bg-[#faf8f5]/90 border-[#e8e0d5]/50",
    muted: "bg-[#f5f0e8]",
    grain: "opacity-[0.03]"
  };

  return (
    <main className={`${theme.bg} ${theme.text} font-sans selection:bg-[#8b7355] selection:text-white transition-colors duration-700 overflow-x-hidden`}>
      
      {/* Global Grain Texture */}
      <div className={`fixed inset-0 pointer-events-none z-[100] mix-blend-overlay ${theme.grain}`} 
           style={{backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`}}>
      </div>

      {/* Reading Progress Indicator */}
      <div className={`fixed top-0 left-0 h-1 ${readingMode ? 'bg-[#a8a29e]' : 'bg-[#8b7355]'} z-[60] transition-all duration-300`} 
           style={{ width: `${(Object.keys(readingProgress).length / BUKU_LIST.length) * 100}%` }}></div>

      {/* ================= NAVBAR ================= */}
      <nav className={`fixed top-0 left-0 right-0 z-50 ${theme.nav} backdrop-blur-md border-b transition-all duration-300`}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 hover:opacity-70 transition-opacity"
          >
            <Coffee size={20} className={theme.accent} />
            <p className={`font-serif text-lg tracking-wide ${theme.text}`}>Sepucuk Surat</p>
          </button>
          
          <div className="hidden md:flex items-center gap-8 text-sm">
            <button 
              onClick={() => scrollToSection('tentang')}
              className={`hover:text-[#8b7355] transition-colors relative group ${activeSection === 'tentang' ? theme.accent : ''}`}
            >
              Tentang
              <span className={`absolute -bottom-1 left-0 h-px bg-[#8b7355] transition-all ${activeSection === 'tentang' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </button>
            <button 
              onClick={() => scrollToSection('buku-ini-untuk')}
              className={`hover:text-[#8b7355] transition-colors relative group ${activeSection === 'buku-ini-untuk' ? theme.accent : ''}`}
            >
              Untuk
              <span className={`absolute -bottom-1 left-0 h-px bg-[#8b7355] transition-all ${activeSection === 'buku-ini-untuk' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </button>
            <button 
              onClick={() => scrollToSection('rak-buku')}
              className={`hover:text-[#8b7355] transition-colors relative group ${activeSection === 'rak-buku' ? theme.accent : ''}`}
            >
              Koleksi
              <span className={`absolute -bottom-1 left-0 h-px bg-[#8b7355] transition-all ${activeSection === 'rak-buku' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </button>
            <button 
              onClick={() => scrollToSection('cuplikan')}
              className={`hover:text-[#8b7355] transition-colors relative group ${activeSection === 'cuplikan' ? theme.accent : ''}`}
            >
              Cuplikan
              <span className={`absolute -bottom-1 left-0 h-px bg-[#8b7355] transition-all ${activeSection === 'cuplikan' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </button>
            <button 
              onClick={() => scrollToSection('penulis')}
              className={`hover:text-[#8b7355] transition-colors relative group ${activeSection === 'penulis' ? theme.accent : ''}`}
            >
              Penulis
              <span className={`absolute -bottom-1 left-0 h-px bg-[#8b7355] transition-all ${activeSection === 'penulis' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </button>
          </div>

          <div className="flex items-center gap-3">
            <button 
              onClick={() => setReadingMode(!readingMode)}
              className={`p-2 rounded-full border ${readingMode ? 'border-[#44403c] hover:bg-[#292524]' : 'border-[#e8e0d5] hover:bg-white'} transition-all`}
              title="Toggle Reading Mode"
            >
              {readingMode ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            
            <button 
              onClick={() => scrollToSection('rak-buku')}
              className={`hidden sm:flex ${readingMode ? 'bg-[#e7e5e4] text-[#1c1917]' : 'bg-[#2b2b2b] text-[#faf8f5]'} px-5 py-2.5 rounded-full text-sm hover:opacity-90 transition-all items-center gap-2 shadow-lg`}
            >
              Unduh Buku
              <ArrowUpRight size={14} />
            </button>
            
            <button 
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className={`md:hidden absolute top-full left-0 right-0 ${theme.bg} border-b ${theme.nav} py-4 px-6 flex flex-col gap-4 shadow-xl`}>
            {['tentang', 'buku-ini-untuk', 'rak-buku', 'cuplikan', 'penulis'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item)}
                className={`text-left capitalize text-lg py-2 border-b ${readingMode ? 'border-[#292524]' : 'border-[#f5f0e8]'}`}
              >
                {item.replace(/-/g, ' ')}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* ================= HERO ================= */}
      <section className="relative min-h-screen w-full overflow-hidden pt-20 flex items-center">
        <div className="absolute inset-0 bg-[#2b2b2b]/40 z-10" />
        <img
          src={HERO_BG}
          className="absolute inset-0 w-full h-full object-cover scale-105 animate-slow-zoom"
          alt="Coffee illustration"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#2b2b2b]/60 via-[#2b2b2b]/20 to-[#faf8f5] z-10" />
        
        <div className="relative z-20 w-full flex flex-col items-center justify-center px-6 text-center py-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8 animate-fade-in-up">
            <Sparkles size={14} className="text-[#faf8f5]" />
            <p className="text-xs tracking-[0.3em] text-[#faf8f5] uppercase">Sebuah Buku Oleh</p>
          </div>
          
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-tight mb-6 text-[#faf8f5] animate-fade-in-up delay-100 drop-shadow-2xl">
            Sepucuk Surat<br />
            <span className="italic text-[#e8e0d5]">untuk Malam</span>
          </h1>
          
          <p className="font-serif italic text-xl md:text-2xl text-[#faf8f5]/90 max-w-lg mb-4 animate-fade-in-up delay-200 drop-shadow-lg">
            "Kita semua pernah lelah. Tapi kita masih di sini."
          </p>
          
          <p className="text-sm tracking-[0.4em] text-[#e8e0d5] uppercase mb-12 animate-fade-in-up delay-300">
            Wildan Ferdiansyah
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-400">
            <button 
              onClick={() => scrollToSection('rak-buku')}
              className="bg-[#faf8f5] text-[#2b2b2b] px-8 py-4 rounded-full text-sm font-medium hover:bg-white transition-all hover:scale-105 shadow-xl flex items-center justify-center gap-2 group"
            >
              Jelajahi Koleksi
              <ChevronDown size={16} className="group-hover:translate-y-1 transition-transform" />
            </button>
            <button 
              onClick={() => scrollToSection('cuplikan')}
              className="border-2 border-[#faf8f5]/50 text-[#faf8f5] px-8 py-4 rounded-full text-sm hover:bg-[#faf8f5]/10 transition-all hover:scale-105 backdrop-blur-sm"
            >
              Baca Cuplikan
            </button>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce">
          <div className="w-6 h-10 border-2 border-[#faf8f5]/50 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-[#faf8f5] rounded-full animate-scroll-down"></div>
          </div>
        </div>
      </section>

      {/* ================= TENTANG BUKU ================= */}
      <section id="tentang" className="max-w-3xl mx-auto px-6 py-24 relative">
        <div className={`absolute top-10 left-0 w-24 h-24 rounded-full blur-3xl ${readingMode ? 'bg-[#44403c]/30' : 'bg-[#e8e0d5]/30'}`}></div>
        <div className={`absolute bottom-10 right-0 w-32 h-32 rounded-full blur-3xl ${readingMode ? 'bg-[#292524]/20' : 'bg-[#d4c8b8]/20'}`}></div>
        
        <div className="text-center relative z-10">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className={`h-px w-8 ${readingMode ? 'bg-[#78716c]' : 'bg-[#8b7355]'}`}></div>
            <p className={`text-xs tracking-[0.3em] uppercase ${theme.accent}`}>Tentang Buku</p>
            <div className={`h-px w-8 ${readingMode ? 'bg-[#78716c]' : 'bg-[#8b7355]'}`}></div>
          </div>
          
          <h2 className={`font-serif text-3xl md:text-5xl leading-tight mb-8 ${theme.text}`}>
            Ini bukan buku motivasi.<br />
            <span className={`italic ${theme.accent}`}>Ini bukan panduan hidup.</span>
          </h2>
          
          <div className={`space-y-6 ${theme.subtext} leading-relaxed text-lg`}>
            <p className="drop-cap-paragraph">
              Ini adalah catatan-catatan dari seseorang yang masih belajar hadir—
              untuk dirinya sendiri, untuk orang-orang yang ia cintai, untuk hari-hari
              yang kadang terlalu berat untuk dilalui sendirian.
            </p>
            <p>
              Ditulis dalam keheningan malam, di sudut kedai kopi yang hampir tutup,
              di antara lagu-lagu yang terlalu jujur untuk didengar sendirian.
            </p>
          </div>

          <div className={`mt-12 p-8 border rounded-2xl backdrop-blur-sm ${readingMode ? 'bg-[#292524]/50 border-[#44403c]' : 'bg-white/50 border-[#e8e0d5]'}`}>
            <p className={`font-serif italic text-xl leading-relaxed ${theme.accent}`}>
              "Buku ini ditulis perlahan.<br />
              Dibuat untuk dibaca perlahan juga."
            </p>
          </div>
        </div>
      </section>

      {/* ================= BUKU INI UNTUK ================= */}
      <section id="buku-ini-untuk" className={`py-20 ${theme.muted}/30`}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className={`text-xs tracking-[0.2em] uppercase ${theme.subtext}`}>Untuk Siapa</span>
            <h3 className={`font-serif text-3xl mt-2 ${theme.text}`}>Buku Ini Untuk...</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#8b7355]/20 border border-[#8b7355]/20">
            {untukItems.map((item, idx) => (
              <div key={idx} className={`p-8 md:p-12 ${theme.bg} hover:opacity-80 transition-opacity duration-500 group`}>
                <div className={`mb-6 ${theme.accent} opacity-70 group-hover:opacity-100 transition-opacity`}>
                  {item.icon}
                </div>
                <h4 className={`font-serif text-xl mb-4 ${theme.text}`}>{item.title}</h4>
                <p className={`${theme.subtext} leading-relaxed font-light`}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= RAK BUKU (ELEGAN) ================= */}
      <section id="rak-buku" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <span className={`text-xs tracking-[0.2em] uppercase ${theme.subtext}`}>Koleksi</span>
            <h3 className={`font-serif text-4xl mt-2 ${theme.text}`}>Rak Buku</h3>
            <div className={`w-16 h-px mx-auto mt-6 ${readingMode ? 'bg-[#44403c]' : 'bg-[#e8e0d5]'}`}></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
            {BUKU_LIST.map((buku) => (
              <div key={buku.id} className="group flex flex-col items-center text-center">
                {/* Book Cover Visual - Elegan */}
                <div className="relative w-48 h-72 mb-8 perspective-1000">
                  <div className={`absolute inset-0 rounded-r-md transition-all duration-700 ease-out group-hover:scale-[1.02] group-hover:-translate-y-1 overflow-hidden border-l-4 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] group-hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.4)] ${readingMode ? 'border-stone-600' : 'border-white'}`}>
                    <img src={buku.ilustrasi} alt={buku.judul} className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/30 to-transparent pointer-events-none"></div>
                  </div>
                  {/* Spine effect */}
                  <div className={`absolute left-0 top-0 bottom-0 w-2 rounded-l-sm ${readingMode ? 'bg-stone-700' : 'bg-[#e8e0d5]'}`}></div>
                </div>

                {/* Book Info */}
                <div className="max-w-sm">
                  <div className={`text-[10px] tracking-widest uppercase mb-3 ${theme.subtext}`}>{buku.tema}</div>
                  <h4 className={`font-serif text-2xl mb-3 group-hover:text-[#8b7355] transition-colors duration-500 ${theme.text}`}>{buku.judul}</h4>
                  <p className={`${theme.subtext} text-sm leading-relaxed mb-6 font-light line-clamp-3`}>
                    {buku.deskripsi}
                  </p>
                  
                  <div className={`flex items-center justify-center gap-6 text-xs tracking-wider mb-6 ${theme.subtext} opacity-60`}>
                    <span>{buku.halaman} Halaman</span>
                    <span>•</span>
                    <span>{buku.readTime} Baca</span>
                  </div>

                  <a 
                    href={buku.link} 
                    target="_blank" 
                    rel="noreferrer"
                    onClick={() => handleDownload(buku.id)}
                    className={`inline-flex items-center gap-2 px-6 py-2 rounded-full border transition-all duration-300 text-sm ${readingMode ? 'border-[#44403c] hover:bg-[#292524] hover:border-[#57534e]' : 'border-[#2b2b2b] hover:bg-[#2b2b2b] hover:text-white'}`}
                  >
                    Baca Buku <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CUPLIKAN (LITERER) ================= */}
      <section id="cuplikan" className={`py-24 ${readingMode ? 'bg-[#141211]' : 'bg-[#f0ebe3]'}`}>
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className={`w-12 h-px mx-auto mb-6 ${readingMode ? 'bg-[#44403c]' : 'bg-[#d4c8b8]'}`}></div>
            <h3 className={`font-serif text-3xl ${theme.text}`}>Cuplikan</h3>
          </div>

          <div className="space-y-20">
            {cuplikanItems.map((item, idx) => (
              <div key={idx} className="text-center max-w-3xl mx-auto px-4">
                <p className={`font-serif text-2xl md:text-4xl leading-relaxed mb-8 italic ${theme.text}`}>
                  "{item.quote}"
                </p>
                <div className={`text-xs tracking-widest uppercase ${theme.subtext}`}>
                  <span className={`${theme.accent} font-medium`}>{item.book}</span>
                  <span className="mx-2 opacity-50">|</span>
                  <span className="opacity-70">{item.page}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= KATA PEMBACA (MARQUEE) ================= */}
      <section className={`py-20 overflow-hidden ${theme.bg}`}>
        <div className="max-w-6xl mx-auto px-6 mb-12">
          <h3 className={`font-serif text-2xl text-center ${theme.text}`}>Kata Pembaca</h3>
        </div>
        
        <div 
          className="relative w-full overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div 
            ref={scrollRef}
            className="flex gap-6 cursor-grab active:cursor-grabbing"
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onMouseMove={handleMouseMove}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {duplicatedComments.map((item, index) => (
              <div 
                key={`${item.id}-${index}`}
                className={`flex-shrink-0 w-[350px] md:w-[400px] p-6 rounded-xl border backdrop-blur-sm transition-all hover:scale-[1.02] ${readingMode ? 'bg-[#292524]/50 border-[#44403c]' : 'bg-white/60 border-[#e8e0d5]'}`}
              >
                <p className={`${theme.subtext} leading-relaxed mb-4 text-sm italic`}>"{item.text}"</p>
                <p className={`text-xs tracking-wider uppercase ${theme.accent}`}>— {item.nama}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= RUANG SUNYI ================= */}
      <section className={`py-20 ${theme.muted}/20`}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className={`font-serif text-2xl mb-12 ${theme.text}`}>Ruang Sunyi</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {ruangSunyiItems.map((item, idx) => (
              <div 
                key={idx} 
                className={`p-6 rounded-lg border flex items-center gap-4 transition-all hover:opacity-80 ${readingMode ? 'bg-[#292524]/30 border-[#44403c]' : 'bg-white/40 border-[#e8e0d5]'}`}
                style={{ animationDelay: `${item.delay}ms` }}
              >
                <div className={theme.accent}>{item.icon}</div>
                <p className={`text-sm ${theme.subtext}`}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FORM CATATAN ================= */}
      <section className={`py-20 ${theme.bg}`}>
        <div className="max-w-xl mx-auto px-6">
          <div className={`p-8 rounded-2xl border ${readingMode ? 'bg-[#292524]/30 border-[#44403c]' : 'bg-white/50 border-[#e8e0d5]'}`}>
            <h3 className={`font-serif text-2xl mb-2 text-center ${theme.text}`}>Tinggalkan Jejak</h3>
            <p className={`text-center text-sm mb-8 ${theme.subtext}`}>Ada yang ingin disampaikan?</p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Nama (opsional)"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                className={`w-full px-4 py-3 rounded-lg border bg-transparent focus:outline-none focus:border-[#8b7355] transition-colors ${readingMode ? 'border-[#44403c] placeholder-[#57534e]' : 'border-[#e8e0d5] placeholder-[#a8a29e]'}`}
              />
              <textarea
                placeholder="Tulis catatanmu di sini..."
                value={catatan}
                onChange={(e) => setCatatan(e.target.value)}
                rows={4}
                className={`w-full px-4 py-3 rounded-lg border bg-transparent focus:outline-none focus:border-[#8b7355] transition-colors resize-none ${readingMode ? 'border-[#44403c] placeholder-[#57534e]' : 'border-[#e8e0d5] placeholder-[#a8a29e]'}`}
              />
              <button
                type="submit"
                className={`w-full py-3 rounded-lg flex items-center justify-center gap-2 transition-all ${readingMode ? 'bg-[#e7e5e4] text-[#1c1917] hover:bg-white' : 'bg-[#2b2b2b] text-white hover:bg-[#1a1a1a]'}`}
              >
                <Send size={16} />
                Kirim
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ================= PENULIS (CINEMATIC) ================= */}
      <section id="penulis" className="relative min-h-screen flex items-center justify-center py-24 overflow-hidden">
        {/* Background Image with Blur */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=2000&auto=format&fit=crop" 
            alt="Background" 
            className="w-full h-full object-cover opacity-30 grayscale"
          />
          <div className={`absolute inset-0 ${readingMode ? 'bg-[#1c1917]/85' : 'bg-[#faf8f5]/85'}`}></div>
        </div>

        <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
          <div className={`p-8 md:p-16 border backdrop-blur-xl shadow-2xl ${readingMode ? 'bg-[#292524]/40 border-[#44403c]' : 'bg-white/40 border-[#e8e0d5]'}`}>
            <div className="mb-10">
               <span className={`text-xs tracking-[0.3em] uppercase ${theme.subtext}`}>Tentang Penulis</span>
            </div>
            
            <h3 className={`font-serif text-3xl md:text-5xl mb-10 ${theme.text}`}>Wildan Ferdiansyah</h3>
            
            <div className={`space-y-6 ${theme.subtext} leading-loose font-light text-justify md:text-center`}>
              <p>
                Saya bukan siapa-siapa yang istimewa. Hanya seorang barista yang kebetulan suka menulis, 
                dan seorang penulis yang kebetulan terlalu sering memikirkan kopi.
              </p>
              <p>
                "Sepucuk Surat" lahir bukan dari kepastian, tapi dari keraguan. 
                Dari malam-malam yang panjang dan percakapan-percakapan yang tidak pernah terjadi.
              </p>
              <p className={`italic ${theme.accent} opacity-80`}>
                "Saya menulis bukan untuk mengajari, tapi untuk mengingatkan diri sendiri 
                bahwa perasaan ini pernah ada, dan mungkin juga ada di tempatmu."
              </p>
            </div>

            <div className={`mt-12 pt-8 border-t flex justify-center gap-8 ${readingMode ? 'border-[#44403c]' : 'border-[#e8e0d5]'}`}>
              <button onClick={() => handleShare('whatsapp')} className={`${theme.subtext} hover:text-[#8b7355] transition-colors`}>
                <MessageCircle size={20} />
              </button>
              <button onClick={() => handleShare('twitter')} className={`${theme.subtext} hover:text-[#8b7355] transition-colors`}>
                <ExternalLink size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className={`py-12 border-t ${readingMode ? 'border-[#292524] bg-[#141211]' : 'border-[#e8e0d5] bg-[#faf8f5]'}`}>
        <div className="max-w-md mx-auto px-6 text-center">
          <Coffee size={24} className={`mx-auto mb-4 opacity-40 ${theme.accent}`} />
          <p className={`font-serif text-sm mb-2 ${theme.text}`}>Sepucuk Surat</p>
          <p className={`text-xs font-light ${theme.subtext}`}>
            © {new Date().getFullYear()} Wildan Ferdiansyah. <br/>
            Dibuat dengan pelan di malam hari.
          </p>
        </div>
      </footer>

      {/* ================= MODAL ================= */}
      {showModal && selectedBook && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={closeModal}>
          <div 
            className={`relative max-w-lg w-full p-8 rounded-2xl border shadow-2xl ${readingMode ? 'bg-[#292524] border-[#44403c]' : 'bg-white border-[#e8e0d5]'}`}
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={closeModal}
              className={`absolute top-4 right-4 p-2 rounded-full hover:bg-black/5 ${theme.subtext}`}
            >
              <X size={20} />
            </button>
            
            <div className="flex gap-6">
              <img 
                src={selectedBook.ilustrasi} 
                alt={selectedBook.judul}
                className="w-32 h-48 object-cover rounded-lg shadow-lg"
              />
              <div>
                <h4 className={`font-serif text-2xl mb-2 ${theme.text}`}>{selectedBook.judul}</h4>
                <p className={`text-xs uppercase tracking-wider mb-4 ${theme.accent}`}>{selectedBook.tema}</p>
                <p className={`text-sm leading-relaxed mb-6 ${theme.subtext}`}>{selectedBook.deskripsi}</p>
                
                <a 
                  href={selectedBook.link}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => handleDownload(selectedBook.id)}
                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm transition-all ${readingMode ? 'bg-[#e7e5e4] text-[#1c1917] hover:bg-white' : 'bg-[#2b2b2b] text-white hover:bg-[#1a1a1a]'}`}
                >
                  <Download size={16} />
                  Unduh Sekarang
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        @keyframes slow-zoom {
          0% { transform: scale(1.05); }
          100% { transform: scale(1.15); }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scroll-down {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(8px); opacity: 0; }
        }
        .animate-slow-zoom {
          animation: slow-zoom 20s ease-out forwards;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        .animate-scroll-down {
          animation: scroll-down 1.5s ease-in-out infinite;
        }
        .delay-100 { animation-delay: 100ms; }
        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }
        .delay-400 { animation-delay: 400ms; }
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </main>
  );
}
