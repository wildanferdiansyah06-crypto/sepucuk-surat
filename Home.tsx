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
  Bookmark
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCatatanIndex((prev) => (prev + 1) % CATATAN_HARIAN.length);
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

  // Dynamic classes based on dark mode
  const bgClass = isDarkMode ? "bg-[#1a1816]" : "bg-[#faf8f5]";
  const textClass = isDarkMode ? "text-[#e8e0d5]" : "text-[#2b2b2b]";
  const subtleText = isDarkMode ? "text-[#e8e0d5]/60" : "text-[#2b2b2b]/60";
  const cardBg = isDarkMode ? "bg-[#2a2826]" : "bg-[#faf8f5]";
  const borderColor = isDarkMode ? "border-[#e8e0d5]/10" : "border-[#8b7355]/10";
  const modalBg = isDarkMode ? "bg-[#2a2826]" : "bg-[#faf8f5]";
  const modalText = isDarkMode ? "text-[#e8e0d5]" : "text-[#2b2b2b]";
  const buttonBg = isDarkMode ? "bg-[#e8e0d5]" : "bg-[#2b2b2b]";
  const buttonText = isDarkMode ? "text-[#1a1816]" : "text-[#faf8f5]";
  const heroTextOverlay = isDarkMode ? "from-[#1a1816]/80 via-[#1a1816]/50 to-[#1a1816]" : "from-transparent via-[#faf8f5]/50 to-[#faf8f5]";

  return (
    <main className={`${bgClass} ${textClass} font-sans min-h-screen transition-colors duration-700`}>
      
      {/* Grain Texture Overlay */}
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

      {/* Hero - Fixed for dark mode */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_BG} className="w-full h-full object-cover opacity-40 scale-105 animate-breathe" alt="" />
          <div className={`absolute inset-0 bg-gradient-to-b ${heroTextOverlay}`}></div>
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto pt-20">
          {/* Fixed: Always dark text for hero section */}
          <p className="text-[10px] tracking-[0.5em] uppercase text-[#2b2b2b]/40 mb-8 animate-fade-in-slow">Sebuah Buku Oleh</p>
          
          <h1 className="font-serif text-5xl md:text-7xl leading-[0.9] mb-6 animate-fade-in-slower text-[#2b2b2b]/90">
            <span className="block">Sepucuk Surat</span>
            <span className="block italic text-[#8b7355] text-4xl md:text-6xl mt-2">untuk Malam</span>
          </h1>
          
          <p className="font-serif italic text-lg md:text-xl text-[#2b2b2b]/50 max-w-md mx-auto mb-12 leading-relaxed animate-fade-in-slowest">
            "Kita semua pernah lelah.<br/>Tapi kita masih di sini."
          </p>
          
          <button onClick={() => scrollToSection('koleksi')} 
                  className="group flex items-center gap-2 mx-auto text-xs tracking-[0.3em] uppercase text-[#2b2b2b]/50 hover:text-[#2b2b2b] transition-all duration-500">
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
                <div className="relative aspect-[4/3] mb-6 overflow-hidden rounded-sm shadow-[0_4px_20px_-10px_rgba(0,0,0,0.15)] group-hover:shadow-[0_8px_30px_-12px_rgba(0,0,0,0.2)] transition-all duration-700">
                  <img src={buku.ilustrasi} alt={buku.judul} 
                       className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-1000" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60"></div>
                  <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-[10px] tracking-[0.2em] uppercase opacity-40">
                    <span>{buku.tema}</span>
                    <span className="w-1 h-1 rounded-full bg-current"></span>
                    <span>{buku.halaman} halaman</span>
                  </div>
                  
                  <h4 className="font-serif text-xl md:text-2xl opacity-80 group-hover:opacity-100 transition-opacity">
                    {buku.judul}
                  </h4>
                  
                  <p className={`text-sm leading-relaxed opacity-50 line-clamp-2 font-light ${subtleText}`}>
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

      {/* Book Modal - Fixed for dark mode */}
      {showModal && selectedBook && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in" onClick={closeModal}>
          <div className={`${modalBg} ${modalText} max-w-lg w-full max-h-[85vh] overflow-y-auto shadow-2xl animate-scale-up`} onClick={e => e.stopPropagation()}>
            <div className="relative aspect-video">
              <img src={selectedBook.ilustrasi} alt={selectedBook.judul} className="w-full h-full object-cover opacity-90" />
              <button onClick={closeModal} className={`absolute top-4 right-4 w-8 h-8 ${isDarkMode ? 'bg-[#1a1816]/80 text-[#e8e0d5]' : 'bg-white/80 text-[#2b2b2b]'} rounded-full flex items-center justify-center text-xs hover:opacity-80 transition-colors`}>✕</button>
            </div>
            <div className="p-8">
              <div className={`flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase opacity-40 mb-3 ${modalText}`}>
                <span>{selectedBook.tema}</span>
                <span>•</span>
                <span>{selectedBook.halaman} halaman</span>
                <span>•</span>
                <span>{selectedBook.readTime}</span>
              </div>
              
              <h3 className={`font-serif text-2xl mb-4 ${modalText}`}>{selectedBook.judul}</h3>
              
              <p className={`text-sm leading-relaxed mb-6 opacity-70 font-light ${modalText}`}>
                {selectedBook.deskripsi}
              </p>

              <div className={`${isDarkMode ? 'bg-[#1a1816]/50' : 'bg-[#f5f0e8]/50'} rounded-lg p-4 mb-6`}>
                <p className={`text-sm italic opacity-60 ${modalText}`}>
                  "{selectedBook.preview}"
                </p>
              </div>
              
              <div className="flex gap-3">
                <button onClick={closeModal} 
                        className={`flex-1 border ${isDarkMode ? 'border-[#e8e0d5]/30 text-[#e8e0d5]' : 'border-[#2b2b2b]/20 text-[#2b2b2b]'} py-3 text-xs tracking-[0.2em] uppercase hover:opacity-70 transition-colors`}>
                  Tutup
                </button>
                <a href={selectedBook.link} target="_blank" rel="noopener noreferrer"
                   className={`flex-[2] ${buttonBg} ${buttonText} py-3 text-center text-xs tracking-[0.2em] uppercase hover:opacity-90 transition-colors flex items-center justify-center gap-2`}>
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
            <h3 className="font-serif text-3xl opacity-90">Sekilas Isi</h3>
          </div>

          <div className="space-y-16">
            {[
              { quote: "Ada hari-hari di mana aku hanya ingin menjadi secangkir kopi di tangan seseorang—hangat, hadir, dan cukup untuk menemani diam.", page: "halaman 23" },
              { quote: "Kita tidak butuh selalu kuat. Kadang, kita hanya butuh tahu bahwa ada yang mengerti—bahwa lelah kita bukan aib, bahwa diam kita bukan kelemahan.", page: "halaman 47" },
              { quote: "Menulis adalah caraku untuk tetap di sini. Bukan untuk menjelaskan, tapi untuk mengingatkan diri sendiri—bahwa aku masih merasakan.", page: "halaman 78" }
            ].map((item, index) => (
              <div key={index} className="relative pl-8 md:pl-12 border-l border-[#8b7355]/20">
                <div className="absolute -left-[5px] top-0 w-[9px] h-[9px] rounded-full bg-[#8b7355]/30"></div>
                <blockquote className="font-serif text-xl md:text-2xl leading-relaxed opacity-80 mb-4 italic">
                  "{item.quote}"
                </blockquote>
                <p className="text-[10px] tracking-[0.2em] uppercase opacity-40">— {item.page}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Penulis - Fixed for dark mode */}
      <section id="penulis" className={`relative py-32 overflow-hidden transition-all duration-1000 ${visibleSections['penulis'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        {/* Background - softer blur */}
        <div className="absolute inset-0">
          <img src="/wildan.png" alt="" className="w-full h-full object-cover opacity-5 blur-2xl scale-110" />
          <div className={`absolute inset-0 bg-gradient-to-b ${isDarkMode ? 'from-[#1a1816] via-[#1a1816]/90 to-[#1a1816]' : 'from-[#faf8f5] via-[#faf8f5]/80 to-[#faf8f5]'}`}></div>
        </div>

        <div className={`relative z-10 max-w-2xl mx-auto px-6 text-center ${textClass}`}>
          <div className="mb-12">
            {/* Larger photo, no grayscale filter */}
            <div className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-6 rounded-full overflow-hidden shadow-lg">
              <img src="/wildan.png" alt="Wildan" className="w-full h-full object-cover" />
            </div>
          </div>

          <p className="text-[10px] tracking-[0.4em] uppercase opacity-40 mb-8">Tentang Penulis</p>
          
          <div className="space-y-6 text-[15px] leading-[1.9] opacity-70 font-light max-w-lg mx-auto">
            <p>
              Bukan penulis profesional. Bukan motivator. Hanya seseorang yang mencoba memahami hidupnya melalui kata-kata.
            </p>
            <p>
              Pernah menjadi barista. Pernah menjadi mural artist. Sekarang menulis di sela-sela waktu—bukan untuk menjadi terkenal, tapi untuk tetap waras.
            </p>
          </div>

          <div className="mt-12 pt-8">
            <p className="font-serif italic text-lg opacity-50">
              "Aku menulis untuk hadir,<br/>bukan untuk memukau."
            </p>
          </div>

          <div className="mt-16 flex justify-center gap-8 text-[10px] tracking-[0.15em] uppercase opacity-40">
            <span>Barista</span>
            <span>•</span>
            <span>Mural Artist</span>
            <span>•</span>
            <span>Penulis</span>
          </div>
        </div>
      </section>

      {/* Catatan Harian */}
      <section className={`py-24 px-6 ${isDarkMode ? 'bg-[#2a2826]/30' : 'bg-[#f5f0e8]/30'} transition-all duration-1000`}>
        <div className="max-w-xl mx-auto text-center">
          <p className="text-[10px] tracking-[0.4em] uppercase opacity-30 mb-8">Catatan Kecil</p>
          <div className="relative h-24 flex items-center justify-center">
            {CATATAN_HARIAN.map((catatan, index) => (
              <p key={index} 
                 className={`absolute font-serif italic text-lg md:text-xl opacity-60 transition-all duration-1000 ${index === catatanIndex ? 'opacity-60 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                "{catatan}"
              </p>
            ))}
          </div>
          <div className="flex justify-center gap-1 mt-6">
            {CATATAN_HARIAN.map((_, index) => (
              <div key={index} className={`w-1 h-1 rounded-full transition-all duration-500 ${index === catatanIndex ? 'bg-[#8b7355]' : 'bg-[#8b7355]/20'}`}></div>
            ))}
          </div>
        </div>
      </section>

      {/* Ruang Sunyi */}
      <section className="py-32 px-6">
        <div className="max-w-xl mx-auto text-center">
          <div className="w-12 h-px bg-[#8b7355]/30 mx-auto mb-12"></div>
          
          <p className="font-serif text-2xl md:text-3xl leading-relaxed opacity-80 mb-8">
            "Tidak semua buku harus mengubah hidupmu."
          </p>
          <p className="text-sm opacity-50 font-light">
            Ada yang cukup menemanimu,<br/>sebentar saja.
          </p>

          <div className="mt-16 flex justify-center gap-6 opacity-40">
            <Coffee size={16} />
            <span className="text-xs">•</span>
            <BookOpen size={16} />
            <span className="text-xs">•</span>
            <Moon size={16} />
          </div>
        </div>
      </section>

      {/* Footer - With all share buttons */}
      <footer className={`py-12 px-6 border-t ${borderColor}`}>
        <div className="max-w-4xl mx-auto">
          {/* Share Buttons - All included */}
          <div className="flex justify-center gap-4 mb-8">
            <button onClick={() => handleShare('whatsapp')} 
                    className="w-10 h-10 rounded-full border border-[#8b7355]/20 flex items-center justify-center opacity-50 hover:opacity-100 hover:bg-[#8b7355]/10 transition-all">
              <MessageCircle size={18} />
            </button>
            <button onClick={() => handleShare('facebook')} 
                    className="w-10 h-10 rounded-full border border-[#8b7355]/20 flex items-center justify-center opacity-50 hover:opacity-100 hover:bg-[#8b7355]/10 transition-all">
              <Facebook size={18} />
            </button>
            <button onClick={() => handleShare('twitter')} 
                    className="w-10 h-10 rounded-full border border-[#8b7355]/20 flex items-center justify-center opacity-50 hover:opacity-100 hover:bg-[#8b7355]/10 transition-all">
              <Twitter size={18} />
            </button>
            <button onClick={() => handleShare('instagram')} 
                    className="w-10 h-10 rounded-full border border-[#8b7355]/20 flex items-center justify-center opacity-50 hover:opacity-100 hover:bg-[#8b7355]/10 transition-all">
              <Instagram size={18} />
            </button>
          </div>

          <div className="text-center">
            <p className="text-[10px] tracking-[0.15em] uppercase opacity-40 mb-2">Hubungi Penulis</p>
            <p className="text-sm opacity-60 mb-6">wildan.ferdiansyah@email.com</p>
            
            <div className={`flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] tracking-[0.15em] uppercase opacity-40 pt-6 border-t ${borderColor}`}>
              <p>&copy; 2026 Wildan Ferdiansyah</p>
              <p className="flex items-center gap-1">
                Dibuat dengan <Heart size={12} className="text-[#8b7355]" /> dan secangkir kopi
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Styles */}
      <style jsx>{`
        @keyframes breathe {
          0%, 100% { transform: scale(1.05); }
          50% { transform: scale(1.08); }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fade-in-slow {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 0.4; transform: translateY(0); }
        }
        @keyframes fade-in-slower {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 0.9; transform: translateY(0); }
        }
        @keyframes fade-in-slowest {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 0.5; transform: translateY(0); }
        }
        @keyframes scale-up {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-breathe {
          animation: breathe 20s ease-in-out infinite;
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }
        .animate-fade-in-slow {
          animation: fade-in-slow 1.5s ease-out forwards;
        }
        .animate-fade-in-slower {
          animation: fade-in-slower 2s ease-out forwards;
        }
        .animate-fade-in-slowest {
          animation: fade-in-slowest 2.5s ease-out forwards;
        }
        .animate-scale-up {
          animation: scale-up 0.4s ease-out forwards;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </main>
  );
}
