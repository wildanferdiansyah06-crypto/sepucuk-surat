import React, { useState, useEffect, useRef } from "react";
import { 
  ExternalLink, 
  MessageCircle, 
  Coffee, 
  Moon, 
  Heart,
  ArrowUpRight,
  Send,
  Sparkles,
  Clock,
  Music,
  Feather,
  ChevronDown,
  Sun,
  BookOpen,
  Menu,
  X,
  Quote
} from "lucide-react";

// --- Assets & Data ---

const HERO_BG = "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2000&auto=format&fit=crop";

const BUKU_LIST = [
  {
    id: 1,
    judul: "Seni Menyeduh Kehidupan",
    link: "https://drive.google.com/file/d/17Zd1FKFK4X_vmKhITFU5lXihOmMEkezI/view?usp=drivesdk",
    deskripsi: "Catatan tentang bagaimana kita menyikapi hidup dengan cara yang lebih gentle dan penuh makna, seperti menyeduh kopi yang sempurna.",
    halaman: "45",
    readTime: "25 menit",
    cover: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=600&auto=format&fit=crop",
    tema: "Kehidupan & Kesadaran"
  },
  {
    id: 2,
    judul: "Di Balik Bar",
    link: "https://drive.google.com/file/d/1N1zwGLqkbVQOzFV_fpRXJxQdawbgZGAl/view?usp=drivesdk",
    deskripsi: "Cerita-cerita dari balik meja bar, tempat di mana setiap cangkir memiliki kisahnya sendiri dan setiap penumpang membawa dunia mereka.",
    halaman: "38",
    readTime: "20 menit",
    cover: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=600&auto=format&fit=crop",
    tema: "Cerita & Interaksi"
  },
  {
    id: 3,
    judul: "Di Atas Cangkir Yang Sama",
    link: "https://drive.google.com/file/d/1cqRI8rfb7_0MIUXLekZJtV0xTFKXr-CD/view?usp=drivesdk",
    deskripsi: "Renungan tentang konsistensi, kehadiran, dan menemukan keindahan dalam pengulangan yang tampak monoton.",
    halaman: "52",
    readTime: "30 menit",
    cover: "https://images.unsplash.com/photo-1498804103079-a6351b050096?q=80&w=600&auto=format&fit=crop",
    tema: "Konsistensi & Kehadiran"
  },
  {
    id: 4,
    judul: "Kami Menulis Pelan",
    link: "https://drive.google.com/file/d/1Mc6pOQ5z2xSn8Wmhf65kdgTrv5T5EzPm/view?usp=drivesdk",
    deskripsi: "Kumpulan tulisan yang lahir dari kesabaran, untuk mereka yang percaya pada proses dan kekuatan kata-kata yang diucapkan dengan lirih.",
    halaman: "41",
    readTime: "22 menit",
    cover: "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=600&auto=format&fit=crop",
    tema: "Proses & Kesabaran"
  }
];

const UNTUK_ITEMS = [
  {
    icon: <BookOpen size={20} />,
    text: "Untuk kamu yang membaca dengan pelan, bukan karena lambat—tapi karena ingin merasakan.",
    title: "Membaca Perlahan"
  },
  {
    icon: <Coffee size={20} />,
    text: "Untuk kamu yang bekerja seharian dan baru bisa merenung saat dunia sudah tidur.",
    title: "Malam yang Panjang"
  },
  {
    icon: <Moon size={20} />,
    text: "Untuk kamu yang duduk sendiri dengan kopi dan kesunyian, dan merasa itu cukup.",
    title: "Kesendirian yang Nyaman"
  },
  {
    icon: <Heart size={20} />,
    text: "Untuk kamu yang sering merasa tak terlihat, tapi tetap hadir—setiap hari.",
    title: "Kehadiran yang Diam"
  }
];

const CUPLIKAN_ITEMS = [
  {
    quote: "Ada hari-hari di mana aku hanya ingin menjadi secangkir kopi di tangan seseorang—hangat, hadir, dan cukup untuk menemani diam.",
    page: "hal. 23",
    book: "Seni Menyeduh Kehidupan"
  },
  {
    quote: "Kita tidak butuh selalu kuat. Kadang, kita hanya butuh tahu bahwa ada yang mengerti—bahwa lelah kita bukan aib, bahwa diam kita bukan kelemahan.",
    page: "hal. 47",
    book: "Di Balik Bar"
  },
  {
    quote: "Menulis adalah caraku untuk tetap di sini. Bukan untuk menjelaskan, tapi untuk mengingatkan diri sendiri—bahwa aku masih merasakan.",
    page: "hal. 78",
    book: "Kami Menulis Pelan"
  }
];

// --- Components ---

export default function SepucukSurat() {
  const [readingMode, setReadingMode] = useState(false); // false = light, true = dark/sepia
  const [activeSection, setActiveSection] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Scroll Spy
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['tentang', 'buku-ini-untuk', 'rak-buku', 'cuplikan', 'penulis'];
      const scrollPosition = window.scrollY + 200;

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

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({ top: element.offsetTop - 80, behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  // Dynamic Styles based on Reading Mode
  const theme = readingMode ? {
    bg: "bg-[#1c1917]", // stone-900
    text: "text-[#e7e5e4]", // stone-200
    subtext: "text-[#a8a29e]", // stone-400
    accent: "text-[#d6d3d1]", // stone-300
    card: "bg-[#292524] border-[#44403c]", // stone-800
    nav: "bg-[#1c1917]/90 border-[#44403c]",
    grain: "opacity-5"
  } : {
    bg: "bg-[#faf8f5]", // warm white
    text: "text-[#2b2b2b]", // dark charcoal
    subtext: "text-[#78716c]", // stone-500
    accent: "text-[#8b7355]", // mocha
    card: "bg-white border-[#e8e0d5]",
    nav: "bg-[#faf8f5]/90 border-[#e8e0d5]/50",
    grain: "opacity-[0.03]"
  };

  return (
    <div className={`${theme.bg} ${theme.text} font-sans transition-colors duration-700 ease-in-out selection:bg-[#8b7355] selection:text-white overflow-x-hidden`}>
      
      {/* Global Grain Texture */}
      <div className={`fixed inset-0 pointer-events-none z-[100] mix-blend-overlay ${theme.grain}`} 
           style={{backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`}}>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 backdrop-blur-md border-b transition-colors duration-500 ${theme.nav}`}>
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-2 group">
            <Coffee size={18} className={`${theme.accent} group-hover:rotate-12 transition-transform`} />
            <span className="font-serif text-lg tracking-wide">Sepucuk Surat</span>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            {['tentang', 'buku-ini-untuk', 'rak-buku', 'cuplikan', 'penulis'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item)}
                className={`capitalize hover:${theme.accent} transition-colors relative py-1 ${activeSection === item ? theme.accent : theme.subtext}`}
              >
                {item.replace(/-/g, ' ')}
                {activeSection === item && (
                  <span className={`absolute bottom-0 left-0 w-full h-[1px] bg-current opacity-50`}></span>
                )}
              </button>
            ))}
            
            <button 
              onClick={() => setReadingMode(!readingMode)}
              className={`ml-4 p-2 rounded-full border ${readingMode ? 'border-[#44403c] bg-[#292524]' : 'border-[#e8e0d5] bg-white'} hover:scale-110 transition-all`}
              title="Toggle Reading Mode"
            >
              {readingMode ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center gap-4">
             <button 
              onClick={() => setReadingMode(!readingMode)}
              className={`p-2 rounded-full border ${readingMode ? 'border-[#44403c]' : 'border-[#e8e0d5]'}`}
            >
              {readingMode ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className={`md:hidden absolute top-16 left-0 w-full ${theme.bg} border-b ${theme.nav} py-4 px-6 flex flex-col gap-4 shadow-xl`}>
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

      {/* Hero Section */}
      <header className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={HERO_BG} alt="Hero" className="w-full h-full object-cover opacity-90" />
          <div className={`absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[${readingMode ? '#1c1917' : '#faf8f5'}]`}></div>
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto mt-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6 animate-fade-in">
            <Sparkles size={12} className="text-white/80" />
            <span className="text-[10px] tracking-[0.3em] text-white/80 uppercase">Sebuah Buku Oleh</span>
          </div>
          
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-[0.9] drop-shadow-lg">
            Sepucuk Surat<br />
            <span className="italic text-white/80 font-light">untuk Malam</span>
          </h1>
          
          <p className="font-serif italic text-lg md:text-xl text-white/90 mb-8 font-light">
            "Kita semua pernah lelah. Tapi kita masih di sini."
          </p>
          
          <button 
            onClick={() => scrollToSection('tentang')}
            className="group bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-3 rounded-full text-sm tracking-widest hover:bg-white hover:text-black transition-all duration-500"
          >
            MULAI MEMBACA
          </button>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
          <ChevronDown size={24} />
        </div>
      </header>

      {/* Tentang Section */}
      <section id="tentang" className="py-24 px-6 relative">
        <div className="max-w-2xl mx-auto text-center">
          <div className={`w-12 h-[1px] ${readingMode ? 'bg-stone-600' : 'bg-[#8b7355]'} mx-auto mb-8`}></div>
          <h2 className="font-serif text-3xl md:text-5xl mb-8 leading-tight">
            Ini bukan buku motivasi.<br />
            <span className={`italic ${theme.accent} opacity-80`}>Ini bukan panduan hidup.</span>
          </h2>
          <div className={`space-y-6 ${theme.subtext} leading-loose text-lg font-light`}>
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
          
          <div className={`mt-16 p-8 border ${readingMode ? 'border-stone-700 bg-stone-800/30' : 'border-[#e8e0d5] bg-white/40'} rounded-sm backdrop-blur-sm`}>
            <p className="font-serif italic text-xl leading-relaxed opacity-90">
              "Buku ini ditulis perlahan.<br />
              Dibuat untuk dibaca perlahan juga."
            </p>
          </div>
        </div>
      </section>

      {/* Buku Ini Untuk Section */}
      <section id="buku-ini-untuk" className={`py-24 ${readingMode ? 'bg-stone-900/50' : 'bg-[#f5f0e8]/30'}`}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className={`text-xs tracking-[0.2em] uppercase ${theme.subtext}`}>Untuk Siapa</span>
            <h3 className="font-serif text-3xl mt-2">Buku Ini Untuk...</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#8b7355]/20 border border-[#8b7355]/20">
            {UNTUK_ITEMS.map((item, idx) => (
              <div key={idx} className={`p-8 md:p-12 ${theme.bg} hover:opacity-80 transition-opacity duration-500 group`}>
                <div className={`mb-6 ${theme.accent} opacity-70 group-hover:opacity-100 transition-opacity`}>
                  {item.icon}
                </div>
                <h4 className="font-serif text-xl mb-4">{item.title}</h4>
                <p className={`${theme.subtext} leading-relaxed font-light`}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rak Buku (The Bookshelf) */}
      <section id="rak-buku" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <span className={`text-xs tracking-[0.2em] uppercase ${theme.subtext}`}>Koleksi</span>
            <h3 className="font-serif text-4xl mt-2">Rak Buku</h3>
            <div className={`w-16 h-[1px] ${readingMode ? 'bg-stone-700' : 'bg-[#e8e0d5]'} mx-auto mt-6`}></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
            {BUKU_LIST.map((buku) => (
              <div key={buku.id} className="group flex flex-col items-center text-center">
                {/* Book Cover Visual */}
                <div className="relative w-48 h-72 mb-8 perspective-1000">
                  <div className={`absolute inset-0 rounded-r-md shadow-2xl transition-transform duration-700 group-hover:scale-[1.02] group-hover:-translate-y-2 overflow-hidden border-l-4 ${readingMode ? 'border-stone-600' : 'border-white'}`}>
                    <img src={buku.cover} alt={buku.judul} className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent pointer-events-none"></div>
                  </div>
                  {/* Spine effect */}
                  <div className={`absolute left-0 top-0 bottom-0 w-2 ${readingMode ? 'bg-stone-700' : 'bg-[#e8e0d5]'} rounded-l-sm`}></div>
                </div>

                {/* Book Info */}
                <div className="max-w-sm">
                  <div className={`text-[10px] tracking-widest uppercase mb-3 ${theme.subtext}`}>{buku.tema}</div>
                  <h4 className="font-serif text-2xl mb-3 group-hover:text-[#8b7355] transition-colors">{buku.judul}</h4>
                  <p className={`${theme.subtext} text-sm leading-relaxed mb-6 font-light line-clamp-3`}>
                    {buku.deskripsi}
                  </p>
                  
                  <div className="flex items-center justify-center gap-6 text-xs tracking-wider opacity-60 mb-6">
                    <span>{buku.halaman} Halaman</span>
                    <span>•</span>
                    <span>{buku.readTime} Baca</span>
                  </div>

                  <a 
                    href={buku.link} 
                    target="_blank" 
                    rel="noreferrer"
                    className={`inline-flex items-center gap-2 px-6 py-2 rounded-full border ${readingMode ? 'border-stone-700 hover:bg-stone-800' : 'border-[#2b2b2b] hover:bg-[#2b2b2b] hover:text-white'} transition-all text-sm`}
                  >
                    Baca Buku <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cuplikan (Literary Quotes) */}
      <section id="cuplikan" className={`py-24 ${readingMode ? 'bg-[#141211]' : 'bg-[#f0ebe3]'}`}>
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <Quote size={32} className={`mx-auto mb-4 opacity-30 ${theme.accent}`} />
            <h3 className="font-serif text-3xl">Cuplikan</h3>
          </div>

          <div className="space-y-16">
            {CUPLIKAN_ITEMS.map((item, idx) => (
              <div key={idx} className="text-center max-w-2xl mx-auto">
                <p className="font-serif text-2xl md:text-3xl leading-relaxed mb-6 italic opacity-90">
                  "{item.quote}"
                </p>
                <div className={`text-xs tracking-widest uppercase ${theme.subtext}`}>
                  {item.book}, <span className="opacity-70">{item.page}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Penulis (Cinematic) */}
      <section id="penulis" className="relative min-h-screen flex items-center justify-center py-24 overflow-hidden">
        {/* Background Image with Blur */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=2000&auto=format&fit=crop" 
            alt="Background" 
            className="w-full h-full object-cover opacity-40 grayscale"
          />
          <div className={`absolute inset-0 ${readingMode ? 'bg-stone-900/80' : 'bg-[#faf8f5]/80'}`}></div>
        </div>

        <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
          <div className={`p-8 md:p-12 border ${readingMode ? 'border-stone-700 bg-stone-900/60' : 'border-[#e8e0d5] bg-white/60'} backdrop-blur-xl shadow-2xl`}>
            <div className="mb-8">
               <span className={`text-xs tracking-[0.3em] uppercase ${theme.subtext}`}>Tentang Penulis</span>
            </div>
            
            <h3 className="font-serif text-3xl md:text-4xl mb-8">Wildan Ferdiansyah</h3>
            
            <div className={`space-y-6 ${theme.subtext} leading-loose font-light text-justify md:text-center`}>
              <p>
                Saya bukan siapa-siapa yang istimewa. Hanya seorang barista yang kebetulan suka menulis, 
                dan seorang penulis yang kebetulan terlalu sering memikirkan kopi.
              </p>
              <p>
                "Sepucuk Surat" lahir bukan dari kepastian, tapi dari keraguan. 
                Dari malam-malam yang panjang dan percakapan-percakapan yang tidak pernah terjadi.
              </p>
              <p className="italic opacity-80">
                "Saya menulis bukan untuk mengajari, tapi untuk mengingatkan diri sendiri 
                bahwa perasaan ini pernah ada, dan mungkin juga ada di tempatmu."
              </p>
            </div>

            <div className={`mt-10 pt-8 border-t ${readingMode ? 'border-stone-700' : 'border-[#e8e0d5]'} flex justify-center gap-6`}>
              <a href="#" className={`${theme.subtext} hover:text-[#8b7355] transition-colors`}><MessageCircle size={20} /></a>
              <a href="#" className={`${theme.subtext} hover:text-[#8b7355] transition-colors`}><Coffee size={20} /></a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Ruang Sunyi */}
      <footer className={`py-12 border-t ${readingMode ? 'border-stone-800' : 'border-[#e8e0d5]'} text-center`}>
        <div className="max-w-md mx-auto px-6 opacity-60">
          <Coffee size={24} className="mx-auto mb-4 opacity-50" />
          <p className="font-serif text-sm mb-2">Sepucuk Surat</p>
          <p className={`text-xs ${theme.subtext} font-light`}>
            © {new Date().getFullYear()} Wildan Ferdiansyah. <br/>
            Dibuat dengan pelan di malam hari.
          </p>
        </div>
      </footer>
    </div>
  );
}
