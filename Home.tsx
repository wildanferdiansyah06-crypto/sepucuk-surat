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
  Library
} from "lucide-react";
import { useState, useEffect, useRef } from "react";

// Ganti dengan ilustrasi Anda yang sebenarnya jika ada
const HERO_BG =
  "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1400&auto=format&fit=crop";

// Ilustrasi kopi untuk background cards
const COFFE_ILLUSTRATIONS = {
  v60: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?q=80&w=400&auto=format&fit=crop",
  cup: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=400&auto=format&fit=crop",
  night: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=400&auto=format&fit=crop",
  heart: "https://images.unsplash.com/photo-1498804103079-a6351b050096?q=80&w=400&auto=format&fit=crop"
};

// Data Buku
const BUKU_LIST = [
  {
    id: 1,
    judul: "Seni Menyeduh Kehidupan",
    link: "https://drive.google.com/file/d/17Zd1FKFK4X_vmKhITFU5lXihOmMEkezI/view?usp=drivesdk",
    deskripsi: "Catatan tentang bagaimana kita menyikapi hidup dengan cara yang lebih gentle dan penuh makna.",
    halaman: "45 halaman",
    warna: "from-amber-700 to-amber-900",
    icon: <Coffee size={24} />
  },
  {
    id: 2,
    judul: "Di Balik Bar",
    link: "https://drive.google.com/file/d/1N1zwGLqkbVQOzFV_fpRXJxQdawbgZGAl/view?usp=drivesdk",
    deskripsi: "Cerita-cerita dari balik meja bar, tempat di mana setiap cangkir memiliki kisahnya sendiri.",
    halaman: "38 halaman",
    warna: "from-stone-700 to-stone-900",
    icon: <BookOpen size={24} />
  },
  {
    id: 3,
    judul: "Di Atas Cangkir Yang Sama",
    link: "https://drive.google.com/file/d/1cqRI8rfb7_0MIUXLekZJtV0xTFKXr-CD/view?usp=drivesdk",
    deskripsi: "Renungan tentang konsistensi, kehadiran, dan menemukan keindahan dalam pengulangan.",
    halaman: "52 halaman",
    warna: "from-orange-700 to-orange-900",
    icon: <Moon size={24} />
  },
  {
    id: 4,
    judul: "Kami Menulis Pelan",
    link: "https://drive.google.com/file/d/1Mc6pOQ5z2xSn8Wmhf65kdgTrv5T5EzPm/view?usp=drivesdk",
    deskripsi: "Kumpulan tulisan yang lahir dari kesabaran, untuk mereka yang percaya pada proses.",
    halaman: "41 halaman",
    warna: "from-emerald-700 to-emerald-900",
    icon: <Feather size={24} />
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
      const offsetTop = element.offsetTop - 80; // Offset untuk navbar
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
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
      bg: COFFE_ILLUSTRATIONS.v60,
      title: "Membaca Perlahan"
    },
    {
      icon: <Coffee size={24} />,
      text: "Untuk kamu yang bekerja seharian dan baru bisa merenung saat dunia sudah tidur.",
      bg: COFFE_ILLUSTRATIONS.cup,
      title: "Malam yang Panjang"
    },
    {
      icon: <Moon size={24} />,
      text: "Untuk kamu yang duduk sendiri dengan kopi dan kesunyian, dan merasa itu cukup.",
      bg: COFFE_ILLUSTRATIONS.night,
      title: "Kesendirian yang Nyaman"
    },
    {
      icon: <Heart size={24} />,
      text: "Untuk kamu yang sering merasa tak terlihat, tapi tetap hadir—setiap hari.",
      bg: COFFE_ILLUSTRATIONS.heart,
      title: "Kehadiran yang Diam"
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

  // Ruang Sunyi items dengan icon yang sesuai
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

  // Duplicate array untuk infinite scroll effect
  const duplicatedComments = [...kataPembaca, ...kataPembaca];

  return (
    <main className="bg-[#faf8f5] text-[#2b2b2b] font-sans selection:bg-[#e8e0d5] overflow-x-hidden">

      {/* ================= NAVBAR ================= */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#faf8f5]/90 backdrop-blur-md border-b border-[#e8e0d5]/30 transition-all duration-300">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 hover:opacity-70 transition-opacity"
          >
            <Coffee size={20} className="text-[#8b7355]" />
            <p className="font-serif text-lg tracking-wide text-[#2b2b2b]">Sepucuk Surat</p>
          </button>
          
          <div className="hidden md:flex items-center gap-8 text-sm">
            <button 
              onClick={() => scrollToSection('tentang')}
              className={`hover:text-[#8b7355] transition-colors relative group ${activeSection === 'tentang' ? 'text-[#8b7355]' : ''}`}
            >
              Tentang
              <span className={`absolute -bottom-1 left-0 h-px bg-[#8b7355] transition-all ${activeSection === 'tentang' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </button>
            <button 
              onClick={() => scrollToSection('buku-ini-untuk')}
              className={`hover:text-[#8b7355] transition-colors relative group ${activeSection === 'buku-ini-untuk' ? 'text-[#8b7355]' : ''}`}
            >
              Untuk
              <span className={`absolute -bottom-1 left-0 h-px bg-[#8b7355] transition-all ${activeSection === 'buku-ini-untuk' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </button>
            <button 
              onClick={() => scrollToSection('rak-buku')}
              className={`hover:text-[#8b7355] transition-colors relative group ${activeSection === 'rak-buku' ? 'text-[#8b7355]' : ''}`}
            >
              Koleksi
              <span className={`absolute -bottom-1 left-0 h-px bg-[#8b7355] transition-all ${activeSection === 'rak-buku' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </button>
            <button 
              onClick={() => scrollToSection('cuplikan')}
              className={`hover:text-[#8b7355] transition-colors relative group ${activeSection === 'cuplikan' ? 'text-[#8b7355]' : ''}`}
            >
              Cuplikan
              <span className={`absolute -bottom-1 left-0 h-px bg-[#8b7355] transition-all ${activeSection === 'cuplikan' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </button>
            <button 
              onClick={() => scrollToSection('penulis')}
              className={`hover:text-[#8b7355] transition-colors relative group ${activeSection === 'penulis' ? 'text-[#8b7355]' : ''}`}
            >
              Penulis
              <span className={`absolute -bottom-1 left-0 h-px bg-[#8b7355] transition-all ${activeSection === 'penulis' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </button>
          </div>

          <button 
            onClick={() => scrollToSection('rak-buku')}
            className="bg-[#2b2b2b] text-[#faf8f5] px-5 py-2.5 rounded-full text-sm hover:bg-[#1a1a1a] transition-all hover:scale-105 flex items-center gap-2 shadow-lg shadow-[#2b2b2b]/10"
          >
            Unduh Buku
            <ArrowUpRight size={14} />
          </button>
        </div>
      </nav>

      {/* ================= HERO ================= */}
      <section className="relative min-h-screen w-full overflow-hidden pt-20 flex items-center">
        {/* Background dengan overlay gradient yang lebih kuat */}
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
              Lihat Koleksi Buku
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

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce">
          <div className="w-6 h-10 border-2 border-[#faf8f5]/50 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-[#faf8f5] rounded-full animate-scroll-down"></div>
          </div>
        </div>
      </section>

      {/* ================= TENTANG BUKU ================= */}
      <section id="tentang" className="max-w-3xl mx-auto px-6 py-24 relative">
        {/* Decorative elements */}
        <div className="absolute top-10 left-0 w-24 h-24 bg-[#e8e0d5]/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-0 w-32 h-32 bg-[#d4c8b8]/20 rounded-full blur-3xl"></div>
        
        <div className="text-center relative z-10">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="h-px w-8 bg-[#8b7355]"></div>
            <p className="text-xs tracking-[0.3em] text-[#8b7355] uppercase">Tentang Buku</p>
            <div className="h-px w-8 bg-[#8b7355]"></div>
          </div>
          
          <h2 className="font-serif text-3xl md:text-5xl leading-tight mb-8 text-[#2b2b2b]">
            Ini bukan buku motivasi.<br />
            <span className="italic text-[#8b7355]">Ini bukan panduan hidup.</span>
          </h2>
          
          <div className="space-y-6 text-[#5a5a5a] leading-relaxed text-lg">
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

          <div className="mt-12 p-8 bg-white/50 border border-[#e8e0d5] rounded-2xl backdrop-blur-sm">
            <p className="font-serif italic text-[#8b7355] text-xl leading-relaxed">
              "Buku ini ditulis perlahan.<br />
              Dibuat untuk dibaca perlahan juga."
            </p>
          </div>
        </div>
      </section>

      {/* ================= BUKU INI UNTUK (Dengan Background Ilustrasi Kopi) ================= */}
      <section id="buku-ini-untuk" className="py-20 bg-[#f5f0e8]/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] text-[#8b7355] uppercase mb-4">Buku Ini Untuk</p>
            <h3 className="font-serif text-3xl md:text-4xl text-[#2b2b2b]">Mereka yang...</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {untukItems.map((item, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-3xl min-h-[280px] cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                {/* Background Image dengan overlay */}
                <div className="absolute inset-0">
                  <img 
                    src={item.bg} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2b2b2b]/90 via-[#2b2b2b]/50 to-[#2b2b2b]/20 group-hover:from-[#2b2b2b]/95 transition-all duration-500"></div>
                </div>
                
                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-end p-8 text-[#faf8f5]">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4 group-hover:bg-[#8b7355] transition-colors duration-300">
                      {item.icon}
                    </div>
                    <h4 className="font-serif text-xl mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{item.title}</h4>
                    <p className="text-[#faf8f5]/90 leading-relaxed text-sm md:text-base">
                      {item.text}
                    </p>
                  </div>
                </div>

                {/* Hover border effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#8b7355]/50 rounded-3xl transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= RAK BUKU / KOLEKSI ================= */}
      <section id="rak-buku" className="py-24 bg-[#2b2b2b] relative overflow-hidden" ref={rakBukuRef}>
        {/* Background decorative */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')]"></div>
        </div>
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#8b7355]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#8b7355]/10 rounded-full blur-3xl"></div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#8b7355]/20 border border-[#8b7355]/30 mb-6">
              <Library size={16} className="text-[#8b7355]" />
              <p className="text-xs tracking-[0.3em] text-[#8b7355] uppercase">Perpustakaan Mini</p>
            </div>
            <h3 className="font-serif text-4xl md:text-5xl text-[#faf8f5] mb-4">Rak Buku Digital</h3>
            <p className="text-[#faf8f5]/70 max-w-2xl mx-auto text-lg">
              Kumpulan tulisan yang bisa kamu baca kapan saja, di mana saja. 
              Gratis untuk dibaca, dibagikan, dan dijadikan teman.
            </p>
          </div>

          {/* Grid Buku */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {BUKU_LIST.map((buku, index) => (
              <div 
                key={buku.id}
                className="group relative bg-[#1a1a1a] rounded-2xl overflow-hidden border border-[#8b7355]/20 hover:border-[#8b7355]/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#8b7355]/10"
              >
                {/* Book Cover Simulation */}
                <div className={`h-48 bg-gradient-to-br ${buku.warna} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-[#faf8f5] p-6 text-center">
                    <div className="mb-3 opacity-80">{buku.icon}</div>
                    <h4 className="font-serif text-lg leading-tight mb-2">{buku.judul}</h4>
                    <div className="w-12 h-0.5 bg-white/30"></div>
                  </div>
                  {/* Decorative spine effect */}
                  <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-r from-black/30 to-transparent"></div>
                </div>

                {/* Book Info */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3 text-xs text-[#8b7355]">
                    <BookOpen size={12} />
                    <span>{buku.halaman}</span>
                    <span className="mx-2">•</span>
                    <span>PDF</span>
                  </div>
                  
                  <p className="text-[#faf8f5]/70 text-sm leading-relaxed mb-6 line-clamp-3">
                    {buku.deskripsi}
                  </p>

                  <a 
                    href={buku.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full bg-[#8b7355] hover:bg-[#9c8565] text-[#faf8f5] py-3 rounded-xl transition-all duration-300 group-hover:shadow-lg"
                  >
                    <Download size={16} />
                    <span className="font-medium">Unduh Buku</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Info tambahan */}
          <div className="bg-[#1a1a1a]/50 border border-[#8b7355]/20 rounded-2xl p-8 text-center">
            <p className="text-[#faf8f5]/60 text-sm mb-4">
              Semua buku tersedia dalam format PDF dan bisa diunduh secara gratis.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-xs text-[#8b7355]">
              <span className="flex items-center gap-1"><BookOpen size={12} /> 4 Buku</span>
              <span className="flex items-center gap-1"><Download size={12} /> Gratis</span>
              <span className="flex items-center gap-1"><Heart size={12} /> Dari hati ke hati</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= RUANG SUNYI (Dengan Icon untuk semua card) ================= */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] text-[#8b7355] uppercase mb-4">Ruang Sunyi</p>
          <h3 className="font-serif text-3xl md:text-4xl text-[#2b2b2b] mb-4">Tempat Berlabuh</h3>
          <p className="text-[#5a5a5a] italic">Beberapa hal yang mungkin kamu temui di sini:</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {ruangSunyiItems.map((item, index) => (
            <div 
              key={index}
              className="group bg-white border border-[#e8e0d5] rounded-2xl p-6 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 flex items-start gap-4"
              style={{ animationDelay: `${item.delay}ms` }}
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#f5f0e8] flex items-center justify-center text-[#8b7355] group-hover:bg-[#8b7355] group-hover:text-white transition-all duration-300">
                {item.icon}
              </div>
              <div>
                <p className="text-[#2b2b2b] leading-relaxed group-hover:text-[#8b7355] transition-colors duration-300">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center p-8 bg-[#2b2b2b] rounded-3xl text-[#faf8f5] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#8b7355]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#8b7355]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="relative z-10">
            <p className="font-serif text-xl md:text-2xl italic mb-4">
              "Tidak semua buku harus mengubah hidupmu.
            </p>
            <p className="text-[#faf8f5]/80">
              Ada yang cukup menemanimu, sebentar saja."
            </p>
          </div>
        </div>
      </section>

      {/* ================= TENTANG PENULIS (FIXED: Tanpa tahun & perbaikan teks) ================= */}
      <section id="penulis" className="max-w-4xl mx-auto px-6 py-24">
        <div className="bg-white border border-[#e8e0d5] rounded-[2rem] overflow-hidden shadow-2xl shadow-[#2b2b2b]/5">
          {/* Foto dengan gradient overlay yang lebih kuat */}
          <div className="relative h-[500px] overflow-hidden">
            <img
              src="/wildan.png"
              alt="Wildan Ferdiansyah"
              className="w-full h-full object-cover object-center"
            />
            {/* Gradient overlay yang lebih kuat agar teks tidak menyatu */}
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/90" />
          </div>
          
          {/* Content - dipindahkan ke bawah dengan background solid */}
          <div className="px-8 pb-12 pt-8 relative z-10 text-center bg-white">
            <div className="w-20 h-1 bg-[#8b7355] mx-auto mb-6 rounded-full"></div>
            
            <h2 className="font-serif text-4xl mb-3 text-[#2b2b2b]">Wildan Ferdiansyah</h2>
            <p className="text-xs tracking-[0.3em] text-[#8b7355] uppercase mb-8">Penulis & Barista</p>
            
            <div className="space-y-4 text-[#5a5a5a] leading-relaxed max-w-xl mx-auto mb-8">
              <p className="text-lg">
                Bukan penulis profesional. Bukan motivator. Hanya seseorang yang 
                mencoba memahami hidupnya melalui kata-kata.
              </p>
              <p>
                Pernah menjadi barista. Pernah menjadi mural artist. 
                Sekarang menulis di sela-sela waktu—bukan untuk menjadi terkenal, tapi untuk tetap waras.
              </p>
            </div>
            
            <p className="font-serif italic text-[#8b7355] text-xl mb-12 border-l-4 border-[#8b7355] pl-6 pr-6 py-2 bg-[#faf8f5] inline-block rounded-r-lg">
              "Aku menulis untuk hadir, bukan untuk memukau."
            </p>
            
            {/* Timeline tanpa tahun */}
            <div className="max-w-md mx-auto">
              <div className="relative">
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[#e8e0d5]"></div>
                <div className="space-y-8">
                  {[
                    { text: "Pernah menjadi barista" },
                    { text: "Mural artist" },
                    { text: "Mulai menulis diam-diam" },
                    { text: "Buku pertama terbit" }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-6 relative">
                      <div className="w-16 flex-shrink-0"></div>
                      <div className="absolute left-8 w-3 h-3 rounded-full bg-[#8b7355] border-4 border-white shadow-md -translate-x-[5px]"></div>
                      <div className="flex-1 text-left pl-8 text-[#5a5a5a]">{item.text}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CUPLIKAN (Dengan Background Aesthetic yang lebih baik) ================= */}
      <section id="cuplikan" className="py-24 bg-[#2b2b2b] relative overflow-hidden">
        {/* Background patterns */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-64 h-64 rounded-full border border-white"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full border border-white"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] text-[#8b7355] uppercase mb-4">Cuplikan</p>
            <h3 className="font-serif text-3xl md:text-4xl text-[#faf8f5]">Sekilas Isi</h3>
          </div>
          
          <div className="space-y-8">
            {cuplikanItems.map((item, index) => (
              <div 
                key={index}
                className="group relative rounded-3xl p-8 md:p-12 overflow-hidden border border-[#8b7355]/30 bg-[#1a1a1a]/50 backdrop-blur-sm hover:border-[#8b7355]/60 transition-all duration-500"
              >
                {/* Decorative quote marks */}
                <div className="absolute top-6 left-6 text-[#8b7355]/20 font-serif text-8xl leading-none">"</div>
                <div className="absolute bottom-6 right-6 text-[#8b7355]/20 font-serif text-8xl leading-none rotate-180">"</div>
                
                {/* Content */}
                <div className="relative z-10 text-center">
                  <blockquote className="font-serif text-xl md:text-2xl leading-relaxed text-[#faf8f5] italic mb-6">
                    {item.quote}
                  </blockquote>
                  
                  <div className="flex items-center justify-center gap-2">
                    <div className="h-px w-8 bg-[#8b7355]/50"></div>
                    <p className="text-sm text-[#8b7355] tracking-wide font-medium">— {item.page}</p>
                    <div className="h-px w-8 bg-[#8b7355]/50"></div>
                  </div>
                </div>

                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#8b7355]/10 via-transparent to-[#8b7355]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= KATA PEMBACA (HORIZONTAL AUTO SCROLL + DRAG) ================= */}
      <section className="py-24 bg-[#faf8f5]">
        <div className="max-w-6xl mx-auto px-6 mb-12">
          <div className="text-center">
            <p className="text-xs tracking-[0.3em] text-[#8b7355] uppercase mb-4">Kata Pembaca</p>
            <h3 className="font-serif text-3xl md:text-4xl text-[#2b2b2b]">Yang Mereka Rasakan</h3>
          </div>
        </div>
        
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto px-6 cursor-grab active:cursor-grabbing scrollbar-hide pb-4"
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
              className="flex-shrink-0 w-[340px] md:w-[400px] bg-white border border-[#e8e0d5] rounded-2xl p-8 relative hover:shadow-2xl transition-all duration-500 select-none group hover:-translate-y-2"
              style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #faf8f5 100%)'
              }}
            >
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#f5f0e8] rounded-full -translate-y-1/2 translate-x-1/2 opacity-50 group-hover:scale-110 transition-transform duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Sparkles key={i} size={12} className="text-[#8b7355] fill-[#8b7355]" />
                  ))}
                </div>
                
                <p className="text-[#5a5a5a] leading-relaxed mb-6 italic text-lg">
                  "{item.text}"
                </p>
                
                <div className="flex items-center gap-3 pt-4 border-t border-[#e8e0d5]">
                  <div className="w-10 h-10 rounded-full bg-[#f5f0e8] flex items-center justify-center text-[#8b7355] font-serif font-bold">
                    {item.nama[0]}
                  </div>
                  <p className="text-sm text-[#2b2b2b] font-medium">— {item.nama}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <p className="text-center text-xs text-[#8b7355]/60 mt-8 italic">
          Sentuh dan geser untuk melihat lebih banyak ✨
        </p>
      </section>

      {/* ================= CATATAN PEMBACA FORM ================= */}
      <section className="max-w-2xl mx-auto px-6 py-24">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.3em] text-[#8b7355] uppercase mb-4">Catatan Pembaca</p>
          <p className="text-[#2b2b2b] italic text-xl font-serif">
            "Kalau tulisan ini menemani harimu,<br />
            kamu boleh meninggalkan jejak kecil di sini."
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="bg-white border border-[#e8e0d5] rounded-3xl p-8 md:p-10 shadow-xl shadow-[#2b2b2b]/5 space-y-6">
          <div className="relative">
            <input
              type="text"
              placeholder=" "
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              className="peer w-full px-5 py-4 rounded-xl border border-[#e8e0d5] bg-[#faf8f5] focus:outline-none focus:border-[#8b7355] focus:ring-2 focus:ring-[#8b7355]/20 transition-all placeholder-transparent"
              id="nama"
            />
            <label 
              htmlFor="nama"
              className="absolute left-5 top-4 text-[#b0a090] text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-[#b0a090] peer-placeholder-shown:top-4 peer-focus:top-[-10px] peer-focus:text-xs peer-focus:text-[#8b7355] peer-focus:bg-white peer-focus:px-2 bg-transparent pointer-events-none"
            >
              Nama (opsional)
            </label>
          </div>
          
          <div className="relative">
            <textarea
              placeholder=" "
              rows={4}
              value={catatan}
              onChange={(e) => setCatatan(e.target.value)}
              className="peer w-full px-5 py-4 rounded-xl border border-[#e8e0d5] bg-[#faf8f5] focus:outline-none focus:border-[#8b7355] focus:ring-2 focus:ring-[#8b7355]/20 transition-all placeholder-transparent resize-none"
              id="catatan"
            />
            <label 
              htmlFor="catatan"
              className="absolute left-5 top-4 text-[#b0a090] text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-[#b0a090] peer-placeholder-shown:top-4 peer-focus:top-[-10px] peer-focus:text-xs peer-focus:text-[#8b7355] peer-focus:bg-white peer-focus:px-2 bg-transparent pointer-events-none"
            >
              Tulis catatanmu...
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-[#2b2b2b] text-[#faf8f5] py-4 rounded-xl font-medium hover:bg-[#1a1a1a] transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 group"
          >
            <Send size={18} className="group-hover:translate-x-1 transition-transform" />
            Kirim Catatan
          </button>
        </form>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-[#2b2b2b] text-[#faf8f5] py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Brand */}
            <div>
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="flex items-center gap-2 mb-4 hover:opacity-70 transition-opacity"
              >
                <Coffee size={24} className="text-[#8b7355]" />
                <h4 className="font-serif text-2xl">Sepucuk Surat</h4>
              </button>
              <p className="text-[#faf8f5]/70 leading-relaxed">
                Catatan sunyi dari seorang barista yang mencoba memahami hidup melalui kata-kata.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h5 className="font-medium mb-4 text-[#8b7355]">Navigasi</h5>
              <ul className="space-y-2 text-[#faf8f5]/70">
                <li>
                  <button onClick={() => scrollToSection('tentang')} className="hover:text-[#8b7355] transition-colors text-left">
                    Tentang Buku
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('rak-buku')} className="hover:text-[#8b7355] transition-colors text-left">
                    Koleksi Buku
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('cuplikan')} className="hover:text-[#8b7355] transition-colors text-left">
                    Cuplikan
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('penulis')} className="hover:text-[#8b7355] transition-colors text-left">
                    Tentang Penulis
                  </button>
                </li>
              </ul>
            </div>

            {/* Share */}
            <div>
              <h5 className="font-medium mb-4 text-[#8b7355]">Bagikan</h5>
              <div className="flex gap-3">
                <button 
                  onClick={() => handleShare('whatsapp')}
                  className="w-10 h-10 rounded-full bg-[#faf8f5]/10 flex items-center justify-center hover:bg-[#8b7355] transition-all hover:scale-110"
                >
                  <MessageCircle size={18} />
                </button>
                <button 
                  onClick={() => handleShare('facebook')}
                  className="w-10 h-10 rounded-full bg-[#faf8f5]/10 flex items-center justify-center hover:bg-[#8b7355] transition-all hover:scale-110"
                >
                  <Facebook size={18} />
                </button>
                <button 
                  onClick={() => handleShare('twitter')}
                  className="w-10 h-10 rounded-full bg-[#faf8f5]/10 flex items-center justify-center hover:bg-[#8b7355] transition-all hover:scale-110"
                >
                  <Twitter size={18} />
                </button>
                <button 
                  onClick={() => handleShare('instagram')}
                  className="w-10 h-10 rounded-full bg-[#faf8f5]/10 flex items-center justify-center hover:bg-[#8b7355] transition-all hover:scale-110"
                >
                  <Instagram size={18} />
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-[#faf8f5]/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#faf8f5]/50">
            <p>&copy; 2024 Wildan Ferdiansyah. Seluruh hak cipta dilindungi.</p>
            <p className="flex items-center gap-1">
              Dibuat dengan <Heart size={14} className="text-[#8b7355] fill-[#8b7355]" /> dan secangkir kopi
            </p>
          </div>
        </div>
      </footer>

      {/* Custom Styles untuk animasi dan drop cap */}
      <style jsx>{`
        @keyframes slow-zoom {
          0% { transform: scale(1.05); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1.05); }
        }
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes scroll-down {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(12px); opacity: 0; }
        }
        .animate-slow-zoom {
          animation: slow-zoom 20s ease-in-out infinite;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
        .delay-100 { animation-delay: 100ms; }
        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }
        .delay-400 { animation-delay: 400ms; }
        .animate-scroll-down {
          animation: scroll-down 2s ease-in-out infinite;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        /* Drop Cap yang lebih rapi */
        .drop-cap-paragraph::first-letter {
          float: left;
          font-family: serif;
          font-size: 3.5rem;
          line-height: 0.8;
          padding-right: 0.75rem;
          padding-top: 0.25rem;
          color: #8b7355;
          font-weight: 400;
        }
        
        /* Line clamp untuk deskripsi buku */
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </main>
  );
}
