import { useEffect, useRef, useState } from 'react';
import { Book, Coffee, Moon, Heart, ExternalLink, Menu, X } from 'lucide-react';

const BARISTA_BG = 'https://019c8974-d4c3-798e-8258-950186b05cb3.mochausercontent.com/barista-hero.png';

// Subtle decorative SVG components
const CoffeeCupDecor = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 35 C20 35, 22 25, 30 25 C38 25, 40 35, 40 35" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.3"/>
    <path d="M32 28 C32 28, 33 20, 38 22" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.2"/>
    <ellipse cx="30" cy="45" rx="18" ry="8" stroke="currentColor" strokeWidth="1.5" opacity="0.3"/>
    <path d="M12 45 L15 65 C15 68, 20 72, 30 72 C40 72, 45 68, 45 65 L48 45" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.3"/>
    <path d="M48 48 C55 48, 58 52, 58 56 C58 60, 55 64, 48 64" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.25"/>
  </svg>
);

const SteamDecor = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 40 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 50 C10 40, 20 45, 15 35 C10 25, 20 20, 15 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.2"/>
    <path d="M20 55 C20 45, 30 50, 25 40 C20 30, 30 25, 25 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.15"/>
    <path d="M30 52 C30 44, 38 48, 34 40 C30 32, 38 28, 34 20" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.12"/>
  </svg>
);

const CoffeeBeansDecor = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="18" cy="20" rx="10" ry="14" stroke="currentColor" strokeWidth="1.5" opacity="0.2" transform="rotate(-20 18 20)"/>
    <path d="M12 14 C18 18, 18 26, 12 30" stroke="currentColor" strokeWidth="1" opacity="0.15"/>
    <ellipse cx="42" cy="38" rx="8" ry="11" stroke="currentColor" strokeWidth="1.5" opacity="0.18" transform="rotate(15 42 38)"/>
    <path d="M37 32 C42 35, 42 42, 37 46" stroke="currentColor" strokeWidth="1" opacity="0.12"/>
    <ellipse cx="25" cy="48" rx="6" ry="8" stroke="currentColor" strokeWidth="1" opacity="0.12" transform="rotate(-10 25 48)"/>
  </svg>
);

const BookDecor = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15 55 L15 15 C15 12, 20 10, 35 10 C50 10, 55 12, 55 15 L55 55" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.2"/>
    <path d="M15 55 C15 52, 20 50, 35 50 C50 50, 55 52, 55 55 C55 58, 50 60, 35 60 C20 60, 15 58, 15 55" stroke="currentColor" strokeWidth="1.5" opacity="0.2"/>
    <path d="M35 10 L35 50" stroke="currentColor" strokeWidth="1" opacity="0.15"/>
    <path d="M22 20 L32 20 M22 26 L30 26 M22 32 L28 32" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.12"/>
  </svg>
);

// Book-specific illustration: V60 Dripper with steam (Seni Menyeduh Kehidupan)
const V60DripperIllust = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 120 140" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Steam rising */}
    <path d="M45 8 C45 18, 55 15, 50 28 C45 40, 55 45, 50 55" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
    <path d="M60 5 C60 12, 68 10, 65 22 C62 32, 70 38, 66 48" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.3"/>
    <path d="M75 10 C75 18, 82 16, 78 26 C74 36, 80 40, 78 50" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.25"/>
    {/* V60 cone */}
    <path d="M25 55 L60 120 L95 55" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.5"/>
    <ellipse cx="60" cy="55" rx="35" ry="8" stroke="currentColor" strokeWidth="1.8" opacity="0.45"/>
    {/* Dripper ridges */}
    <path d="M35 65 L55 105" stroke="currentColor" strokeWidth="1" opacity="0.2"/>
    <path d="M45 60 L58 100" stroke="currentColor" strokeWidth="1" opacity="0.2"/>
    <path d="M85 65 L65 105" stroke="currentColor" strokeWidth="1" opacity="0.2"/>
    <path d="M75 60 L62 100" stroke="currentColor" strokeWidth="1" opacity="0.2"/>
    {/* Coffee drops */}
    <circle cx="60" cy="128" r="3" fill="currentColor" opacity="0.25"/>
    <ellipse cx="60" cy="135" rx="8" ry="2" stroke="currentColor" strokeWidth="1" opacity="0.2"/>
  </svg>
);

// Book-specific illustration: Espresso Machine (Di Balik Bar)
const EspressoMachineIllust = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 120 140" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Machine body */}
    <rect x="20" y="20" width="80" height="70" rx="4" stroke="currentColor" strokeWidth="2" opacity="0.45"/>
    {/* Top panel */}
    <rect x="25" y="25" width="70" height="15" rx="2" stroke="currentColor" strokeWidth="1.2" opacity="0.35"/>
    {/* Pressure gauge */}
    <circle cx="60" cy="32" r="5" stroke="currentColor" strokeWidth="1" opacity="0.3"/>
    <path d="M60 29 L60 32 L62 34" stroke="currentColor" strokeWidth="0.8" opacity="0.25"/>
    {/* Group head */}
    <rect x="45" y="50" width="30" height="8" rx="1" stroke="currentColor" strokeWidth="1.5" opacity="0.4"/>
    {/* Portafilter */}
    <path d="M40 58 L50 58 L48 68 L72 68 L70 58 L80 58" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
    <path d="M52 68 L52 78 L68 78 L68 68" stroke="currentColor" strokeWidth="1.2" opacity="0.35"/>
    {/* Espresso drops */}
    <path d="M58 78 L58 85" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.3"/>
    <path d="M62 78 L62 83" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.25"/>
    {/* Small cup */}
    <ellipse cx="60" cy="120" rx="18" ry="5" stroke="currentColor" strokeWidth="1.2" opacity="0.35"/>
    <path d="M42 120 L45 100 L75 100 L78 120" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
    {/* Cup handle */}
    <path d="M78 105 C88 105, 88 118, 78 118" stroke="currentColor" strokeWidth="1.2" opacity="0.3"/>
    {/* Steam from cup */}
    <path d="M55 95 C53 88, 58 90, 56 82" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" opacity="0.2"/>
    <path d="M65 94 C67 88, 62 89, 64 83" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" opacity="0.2"/>
  </svg>
);

// Book-specific illustration: Two Cups Facing (Di Atas Cangkir yang Sama)
const TwoCupsIllust = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 120 140" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Left cup */}
    <ellipse cx="35" cy="75" rx="22" ry="7" stroke="currentColor" strokeWidth="1.5" opacity="0.4"/>
    <path d="M13 75 L18 110 C18 115, 28 120, 35 120 C42 120, 52 115, 52 110 L57 75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.45"/>
    <path d="M13 80 C3 82, 3 98, 13 100" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.3"/>
    {/* Left steam */}
    <path d="M28 70 C26 60, 32 62, 30 52 C28 42, 34 40, 32 32" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.25"/>
    <path d="M38 68 C40 58, 34 60, 36 50" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" opacity="0.2"/>
    {/* Right cup */}
    <ellipse cx="85" cy="75" rx="22" ry="7" stroke="currentColor" strokeWidth="1.5" opacity="0.4"/>
    <path d="M63 75 L68 110 C68 115, 78 120, 85 120 C92 120, 102 115, 102 110 L107 75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.45"/>
    <path d="M107 80 C117 82, 117 98, 107 100" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.3"/>
    {/* Right steam */}
    <path d="M92 70 C94 60, 88 62, 90 52 C92 42, 86 40, 88 32" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.25"/>
    <path d="M82 68 C80 58, 86 60, 84 50" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" opacity="0.2"/>
    {/* Conversation curves between cups */}
    <path d="M52 85 C60 82, 60 82, 68 85" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.3"/>
    <path d="M54 92 C60 88, 60 88, 66 92" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.25"/>
    <path d="M56 99 C60 96, 60 96, 64 99" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" opacity="0.2"/>
    {/* Table line */}
    <path d="M5 125 L115 125" stroke="currentColor" strokeWidth="1" opacity="0.15"/>
  </svg>
);

// Book-specific illustration: Open Book with Pen (Kami Menulis Pelan)
const OpenBookPenIllust = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 120 140" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Open book - left page */}
    <path d="M60 30 C40 28, 15 30, 10 35 L10 110 C15 108, 40 106, 60 110" stroke="currentColor" strokeWidth="1.5" opacity="0.45"/>
    {/* Open book - right page */}
    <path d="M60 30 C80 28, 105 30, 110 35 L110 110 C105 108, 80 106, 60 110" stroke="currentColor" strokeWidth="1.5" opacity="0.45"/>
    {/* Book spine */}
    <path d="M60 30 L60 110" stroke="currentColor" strokeWidth="1.8" opacity="0.35"/>
    {/* Left page lines */}
    <path d="M20 45 L50 43" stroke="currentColor" strokeWidth="0.8" opacity="0.2"/>
    <path d="M18 55 L52 52" stroke="currentColor" strokeWidth="0.8" opacity="0.2"/>
    <path d="M17 65 L52 62" stroke="currentColor" strokeWidth="0.8" opacity="0.2"/>
    <path d="M16 75 L53 72" stroke="currentColor" strokeWidth="0.8" opacity="0.18"/>
    <path d="M15 85 L54 82" stroke="currentColor" strokeWidth="0.8" opacity="0.15"/>
    {/* Right page lines */}
    <path d="M70 43 L100 45" stroke="currentColor" strokeWidth="0.8" opacity="0.2"/>
    <path d="M68 52 L102 55" stroke="currentColor" strokeWidth="0.8" opacity="0.2"/>
    <path d="M68 62 L103 65" stroke="currentColor" strokeWidth="0.8" opacity="0.2"/>
    <path d="M67 72 L104 75" stroke="currentColor" strokeWidth="0.8" opacity="0.18"/>
    {/* Pen */}
    <path d="M85 20 L105 95" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity="0.4"/>
    <path d="M105 95 L108 105 L102 100 Z" fill="currentColor" opacity="0.35"/>
    {/* Pen details */}
    <path d="M87 28 L89 35" stroke="currentColor" strokeWidth="1.5" opacity="0.25"/>
    {/* Paper texture dots */}
    <circle cx="25" cy="50" r="0.8" fill="currentColor" opacity="0.1"/>
    <circle cx="35" cy="70" r="0.8" fill="currentColor" opacity="0.1"/>
    <circle cx="45" cy="60" r="0.8" fill="currentColor" opacity="0.1"/>
    <circle cx="80" cy="55" r="0.8" fill="currentColor" opacity="0.1"/>
    <circle cx="90" cy="75" r="0.8" fill="currentColor" opacity="0.1"/>
    {/* Moon/night atmosphere */}
    <circle cx="20" cy="15" r="8" stroke="currentColor" strokeWidth="1" opacity="0.2"/>
    <circle cx="18" cy="13" r="5" fill="currentColor" opacity="0.08"/>
  </svg>
);

// Comment type
interface Comment {
  id: number;
  name: string | null;
  body: string;
  created_at: string;
}

// Quote icon component
const QuoteIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"/>
  </svg>
);

// Dynamic Testimonials Component - Fetches from database
function DynamicTestimonials() {
  const [testimonials, setTestimonials] = useState<Comment[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await fetch('/api/comments');
        if (res.ok) {
          const data = await res.json();
          // Take only the 6 most recent
          setTestimonials(data.slice(0, 6));
        }
      } catch (e) {
        console.error('Failed to fetch testimonials:', e);
      } finally {
        setIsLoading(false);
      }
    };
    fetchTestimonials();
  }, []);

  // Auto-scroll effect (horizontal)
  useEffect(() => {
    if (isLoading || testimonials.length === 0 || isPaused) return;

    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollStep = 1; // pixels per tick
    const scrollInterval = 30; // ms between ticks

    const interval = setInterval(() => {
      const maxScroll = container.scrollWidth - container.clientWidth;
      
      if (container.scrollLeft >= maxScroll) {
        // Reset to start when reaching end
        container.scrollLeft = 0;
      } else {
        container.scrollLeft += scrollStep;
      }
    }, scrollInterval);

    return () => clearInterval(interval);
  }, [isLoading, testimonials.length, isPaused]);

  const handleInteractionStart = () => setIsPaused(true);
  const handleInteractionEnd = () => setIsPaused(false);

  if (isLoading) {
    return (
      <div className="bg-[#f9f6f1] rounded-2xl border border-[#e8e0d5] h-[360px] flex items-center justify-center">
        <p className="font-serif text-muted-foreground/60 italic">Memuat...</p>
      </div>
    );
  }

  if (testimonials.length === 0) {
    return (
      <div className="bg-[#f9f6f1] rounded-2xl border border-[#e8e0d5] h-[360px] flex items-center justify-center">
        <p className="font-serif text-muted-foreground/60 italic">Belum ada catatan dari pembaca.</p>
      </div>
    );
  }

  return (
    <div 
      className="bg-[#f9f6f1] rounded-2xl border border-[#e8e0d5] overflow-hidden"
      onMouseEnter={handleInteractionStart}
      onMouseLeave={handleInteractionEnd}
      onTouchStart={handleInteractionStart}
      onTouchEnd={handleInteractionEnd}
    >
      <div 
        ref={scrollContainerRef}
        className="flex gap-5 overflow-x-auto px-6 py-6 scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="relative flex-shrink-0 w-[280px] md:w-[320px] bg-white/60 rounded-xl p-5 border border-[#e8e0d5]/50"
          >
            {/* Quote icon */}
            <QuoteIcon className="w-6 h-6 text-[#c4b5a0]/50 mb-3" />
            
            {/* Quote text */}
            <p className="font-serif text-sm md:text-base text-foreground/85 leading-relaxed italic mb-4">
              "{testimonial.body}"
            </p>
            
            {/* Name */}
            <p className="font-sans text-xs text-muted-foreground/70">
              — {testimonial.name || 'Anonim'}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

// Reader Comments Form Component (form only, no list)
function ReaderCommentsForm() {
  const [name, setName] = useState('');
  const [body, setBody] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!body.trim() || isSubmitting) return;

    setIsSubmitting(true);
    try {
      const res = await fetch('/api/comments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name.trim() || null, body: body.trim() }),
      });
      if (res.ok) {
        setName('');
        setBody('');
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
      }
    } catch (e) {
      console.error('Failed to submit comment:', e);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 px-6">
      <div className="max-w-2xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="font-sans text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3">
            Catatan Pembaca
          </p>
          <p className="font-serif text-lg text-foreground/80 italic leading-relaxed max-w-md mx-auto">
            Kalau tulisan ini menemani harimu, kamu boleh meninggalkan jejak kecil di sini.
          </p>
        </div>

        {/* Comment Form */}
        <form onSubmit={handleSubmit}>
          <div className="bg-[#f9f6f1] rounded-2xl p-6 md:p-8 border border-[#e8e0d5]">
            <div className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Nama (opsional)"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  maxLength={50}
                  className="w-full bg-white/60 border border-[#e0d8cc] rounded-lg px-4 py-3 font-sans text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-1 focus:ring-[#c4b5a0] transition-all"
                />
              </div>
              <div>
                <textarea
                  placeholder="Tulis catatanmu..."
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                  maxLength={1000}
                  rows={4}
                  className="w-full bg-white/60 border border-[#e0d8cc] rounded-lg px-4 py-3 font-sans text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-1 focus:ring-[#c4b5a0] transition-all resize-none"
                />
              </div>
              <div className="flex items-center justify-between">
                {submitted && (
                  <p className="font-sans text-sm text-[#8b7355] animate-fade-in">
                    Terima kasih! Catatanmu sudah terkirim.
                  </p>
                )}
                <div className={submitted ? '' : 'ml-auto'}>
                  <button
                    type="submit"
                    disabled={!body.trim() || isSubmitting}
                    className="font-sans text-sm px-6 py-2.5 rounded-full bg-[#8b7355] text-white hover:bg-[#7a6548] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                  >
                    {isSubmitting ? 'Mengirim...' : 'Kirim Catatan'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </section>
  );
}

// Rak Buku Sunyi Section with Parallax
function RakBukuSunyiSection() {
  const [parallaxY, setParallaxY] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Only calculate parallax when section is in view
      if (rect.top < windowHeight && rect.bottom > 0) {
        const progress = (windowHeight - rect.top) / (windowHeight + rect.height);
        setParallaxY(progress * 20); // Subtle 20px max movement
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const books = [
    { 
      title: "Seni Menyeduh Kehidupan", 
      link: "https://drive.google.com/file/d/17Zd1FKFK4X_vmKhITFU5lXihOmMEkezI/view?usp=drivesdk",
      Illustration: V60DripperIllust 
    },
    { 
      title: "Di Balik Bar", 
      link: "https://drive.google.com/file/d/1N1zwGLqkbVQOzFV_fpRXJxQdawbgZGAl/view?usp=drivesdk",
      Illustration: EspressoMachineIllust 
    },
    { 
      title: "Di Atas Cangkir yang Sama", 
      link: "https://drive.google.com/file/d/1cqRI8rfb7_0MIUXLekZJtV0xTFKXr-CD/view?usp=drivesdk",
      Illustration: TwoCupsIllust 
    },
    { 
      title: "Kami Menulis Pelan", 
      link: "https://drive.google.com/file/d/1Mc6pOQ5z2xSn8Wmhf65kdgTrv5T5EzPm/view?usp=drivesdk",
      Illustration: OpenBookPenIllust 
    },
  ];

  return (
    <section 
      ref={sectionRef}
      id="beli" 
      className="py-20 md:py-28 px-6 bg-[hsl(var(--paper))] relative overflow-hidden"
    >
      {/* Background texture with parallax - 3% opacity */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{ transform: `translateY(${parallaxY}px)` }}
      >
        <CoffeeCupDecor className="absolute top-16 left-8 w-32 h-32 text-[#8b7355]" />
        <BookDecor className="absolute top-24 right-12 w-28 h-28 text-[#8b7355] rotate-6" />
        <SteamDecor className="absolute bottom-20 left-1/4 w-20 h-28 text-[#8b7355]" />
        <CoffeeBeansDecor className="absolute bottom-16 right-8 w-24 h-24 text-[#8b7355]" />
      </div>
      
      <div className="max-w-[680px] mx-auto relative z-10">
        <p className="font-sans text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4 text-center fade-on-scroll opacity-0 translate-y-[14px] transition-all duration-[550ms] ease-out">
          Rak Buku Sunyi
        </p>
        <p className="font-serif text-base text-muted-foreground/80 text-center mb-12 italic fade-on-scroll opacity-0 translate-y-[14px] transition-all duration-[550ms] ease-out">
          Koleksi tulisan yang bisa kamu baca pelan
        </p>
        
        <div className="grid grid-cols-2 gap-5 md:gap-7">
          {books.map((book, index) => (
            <a
              key={index}
              href={book.link}
              target="_blank"
              rel="noopener noreferrer"
              className="fade-on-scroll opacity-0 translate-y-[14px] transition-all duration-[550ms] ease-out group book-cover-link"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="book-cover relative rounded-lg bg-[#f8f4ef] border border-[#e0d6c8] overflow-hidden aspect-[3/4]">
                {/* Book-specific illustration background - 8% opacity, increases on hover */}
                <div className="absolute inset-0 pointer-events-none flex items-end justify-center book-illustration opacity-[0.08] group-hover:opacity-[0.12] transition-opacity duration-300">
                  <book.Illustration className="w-[85%] h-[75%] text-[#7a6548]" />
                </div>
                
                {/* Cream gradient overlay - ensures text readability */}
                <div 
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: 'linear-gradient(to bottom, transparent 0%, transparent 40%, rgba(244,241,236,0.6) 70%, rgba(244,241,236,0.95) 100%)'
                  }}
                />
                
                {/* Micro light effect - top highlight */}
                <div 
                  className="absolute inset-x-0 top-0 h-20 pointer-events-none"
                  style={{
                    background: 'linear-gradient(to bottom, rgba(255,255,255,0.3), transparent)'
                  }}
                />
                
                {/* Inner depth gradient */}
                <div 
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: 'linear-gradient(to bottom, rgba(255,255,255,0.15), rgba(0,0,0,0.02))'
                  }}
                />
                
                {/* Content area */}
                <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 md:px-5 py-8">
                  {/* Collection label */}
                  <p className="font-sans text-[9px] md:text-[10px] tracking-[0.12em] uppercase text-muted-foreground/50 mb-3">
                    Koleksi Sunyi
                  </p>
                  
                  {/* Book title - bolder, tighter tracking */}
                  <h3 
                    className="font-serif text-base md:text-lg text-foreground leading-snug font-medium group-hover:text-[#7a6548] transition-colors duration-300 mb-3"
                    style={{ letterSpacing: '-0.3px' }}
                  >
                    {book.title}
                  </h3>
                  
                  {/* Divider line */}
                  <div className="w-10 h-px bg-[#c4b5a0]/50 mb-3" />
                  
                  {/* Subtitle */}
                  <p className="font-sans text-[10px] md:text-[11px] text-muted-foreground/60 tracking-[0.1em] uppercase">
                    Baca Gratis
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// Reading Progress Bar Component
function ReadingProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(Math.min(scrollPercent, 100));
    };

    window.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress();
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-[2px] z-[100] bg-transparent">
      <div 
        className="h-full bg-[#a08060] transition-[width] duration-100 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

export default function HomePage() {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = document.querySelectorAll('.fade-on-scroll');
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Reading Progress Bar */}
      <ReadingProgressBar />
      
      {/* Sticky Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-background/80 backdrop-blur-lg border-b border-border/50 py-4'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <button
            onClick={() => scrollToSection('hero')}
            className={`font-serif text-lg transition-colors ${
              isScrolled ? 'text-foreground' : 'text-white'
            }`}
          >
            Sepucuk Surat
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {[
              { label: 'Tentang', id: 'tentang' },
              { label: 'Cuplikan', id: 'cuplikan' },
              { label: 'Penulis', id: 'penulis' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-sans text-sm tracking-wider transition-colors ${
                  isScrolled
                    ? 'text-muted-foreground hover:text-foreground'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
            <a
              href="#beli"
              className={`font-sans text-sm tracking-wider px-5 py-2 rounded-sm transition-all ${
                isScrolled
                  ? 'bg-foreground text-background hover:bg-foreground/90'
                  : 'bg-white/20 backdrop-blur-sm text-white hover:bg-white/30'
              }`}
            >
              Unduh Buku
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2 transition-colors ${
              isScrolled ? 'text-foreground' : 'text-white'
            }`}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-border">
            <div className="px-6 py-6 space-y-4">
              {[
                { label: 'Tentang', id: 'tentang' },
                { label: 'Cuplikan', id: 'cuplikan' },
                { label: 'Penulis', id: 'penulis' },
                { label: 'Unduh Buku', id: 'beli' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left font-sans text-sm tracking-wider text-foreground py-2"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section with Barista Background */}
      <section
        id="hero"
        className="min-h-screen flex flex-col items-center justify-center px-6 py-20 relative overflow-hidden"
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${BARISTA_BG})` }}
        />
        
        {/* Gradient Overlay - Fades to background color at bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-background" />
        
        {/* Additional warm overlay for cohesion */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/20 via-transparent to-stone-900/30" />

        {/* Hero Content */}
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <p className="font-sans text-sm tracking-[0.3em] uppercase text-white/70 mb-8 animate-fade-in-up">
            Sebuah buku oleh
          </p>
          
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light text-white mb-6 animate-fade-in-up-delay-1 leading-[1.1] drop-shadow-lg">
            Sepucuk Surat<br />
            <span className="italic">untuk Malam</span>
          </h1>
          
          <p className="font-serif text-xl md:text-2xl text-white/80 italic mb-4 animate-fade-in-up-delay-2 drop-shadow-md">
            "Kita semua pernah lelah. Tapi kita masih di sini."
          </p>
          
          <p className="font-sans text-sm tracking-wider uppercase text-white/60 mb-12 animate-fade-in-up-delay-2">
            Wildan Ferdiansyah
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up-delay-3">
            <a
              href="#beli"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-stone-900 font-sans text-sm tracking-wider uppercase rounded-sm hover:bg-white/90 transition-all duration-300 shadow-lg"
            >
              Unduh Buku
            </a>
            <button
              onClick={() => scrollToSection('cuplikan')}
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-sans text-sm tracking-wider uppercase rounded-sm hover:bg-white/20 transition-all duration-300"
            >
              Baca Cuplikan
            </button>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10">
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-white/30 to-white/60"></div>
        </div>
      </section>

      {/* About the Book */}
      <section id="tentang" className="py-24 md:py-32 px-6">
        <div className="max-w-2xl mx-auto fade-on-scroll opacity-0 transition-all duration-700 translate-y-8">
          {/* Glassmorphism Card */}
          <div className="glass-card p-8 md:p-12 rounded-2xl relative overflow-hidden">
            {/* Decorative elements */}
            <CoffeeCupDecor className="absolute -bottom-4 -right-4 w-32 h-32 text-foreground opacity-40 pointer-events-none" />
            <SteamDecor className="absolute top-4 -left-2 w-16 h-24 text-foreground opacity-30 pointer-events-none" />
            
            <p className="font-sans text-xs tracking-[0.3em] uppercase text-muted-foreground mb-8 text-center relative z-10">
              Tentang Buku
            </p>
            
            <div className="space-y-6 text-center relative z-10">
              <p className="font-serif text-2xl md:text-3xl text-foreground leading-relaxed">
                Ini bukan buku motivasi.<br />
                Ini bukan panduan hidup.
              </p>
              
              <p className="font-serif text-lg md:text-xl text-muted-foreground leading-relaxed">
                Ini adalah catatan-catatan dari seseorang yang masih belajar hadir—untuk dirinya sendiri, untuk orang-orang yang ia cintai, untuk hari-hari yang kadang terlalu berat untuk dilalui sendirian.
              </p>
              
              <p className="font-serif text-lg md:text-xl text-muted-foreground leading-relaxed">
                Ditulis dalam keheningan malam, di sudut kedai kopi yang hampir tutup, di antara lagu-lagu yang terlalu jujur untuk didengar sendirian.
              </p>
              
              <p className="font-serif text-lg md:text-xl text-foreground leading-relaxed italic">
                Buku ini ditulis perlahan.<br />
                Dibuat untuk dibaca perlahan juga.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Book Is For */}
      <section className="py-24 md:py-32 px-6 bg-[hsl(var(--paper))]">
        <div className="max-w-3xl mx-auto">
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-muted-foreground mb-16 text-center fade-on-scroll opacity-0 transition-all duration-700 translate-y-8">
            Buku Ini Untuk
          </p>
          
          <div className="grid gap-6 md:gap-8">
            {[
              { icon: Book, text: "Untuk kamu yang membaca dengan pelan, bukan karena lambat—tapi karena ingin merasakan." },
              { icon: Coffee, text: "Untuk kamu yang bekerja seharian dan baru bisa merenung saat dunia sudah tidur." },
              { icon: Moon, text: "Untuk kamu yang duduk sendiri dengan kopi dan kesunyian, dan merasa itu cukup." },
              { icon: Heart, text: "Untuk kamu yang sering merasa tak terlihat, tapi tetap hadir—setiap hari." },
            ].map((item, index) => (
              <div
                key={index}
                className="glass-card p-6 md:p-8 rounded-xl flex items-start gap-5 fade-on-scroll opacity-0 transition-all duration-700 translate-y-8 relative overflow-hidden"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Subtle decorative accent */}
                {index === 0 && <BookDecor className="absolute -bottom-6 -right-6 w-24 h-24 text-foreground opacity-30 pointer-events-none" />}
                {index === 1 && <CoffeeCupDecor className="absolute -bottom-4 -right-4 w-20 h-20 text-foreground opacity-25 pointer-events-none" />}
                {index === 2 && <SteamDecor className="absolute -top-2 -right-2 w-14 h-20 text-foreground opacity-25 pointer-events-none rotate-12" />}
                {index === 3 && <CoffeeBeansDecor className="absolute -bottom-4 -right-4 w-20 h-20 text-foreground opacity-30 pointer-events-none" />}
                
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-foreground/5 flex items-center justify-center relative z-10">
                  <item.icon className="w-5 h-5 text-muted-foreground" />
                </div>
                <p className="font-serif text-lg md:text-xl text-foreground leading-relaxed pt-2 relative z-10">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Excerpts - Mobile Optimized */}
      <section id="cuplikan" className="py-16 md:py-32 px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-muted-foreground mb-12 md:mb-20 text-center fade-on-scroll opacity-0 transition-all duration-700 translate-y-8">
            Cuplikan
          </p>
          
          <div className="space-y-10 md:space-y-20">
            {[
              {
                text: "Ada hari-hari di mana aku hanya ingin menjadi secangkir kopi di tangan seseorang—hangat, hadir, dan cukup untuk menemani diam.",
                page: 23
              },
              {
                text: "Kita tidak butuh selalu kuat. Kadang, kita hanya butuh tahu bahwa ada yang mengerti—bahwa lelah kita bukan aib, bahwa diam kita bukan kelemahan.",
                page: 47
              },
              {
                text: "Menulis adalah caraku untuk tetap di sini. Bukan untuk menjelaskan, tapi untuk mengingatkan diri sendiri—bahwa aku masih merasakan.",
                page: 78
              }
            ].map((quote, index) => (
              <div key={index} className="mb-6 md:mb-0">
                <blockquote 
                  className="cuplikan-card glass-card p-6 md:p-12 rounded-xl md:rounded-2xl fade-on-scroll opacity-0 transition-all duration-[350ms] md:duration-700 ease-out translate-y-2 md:translate-y-8 relative overflow-hidden"
                  style={{ minHeight: 'auto' }}
                >
                  {/* Decorative steam accents - hidden on mobile for performance */}
                  <SteamDecor className="hidden md:block absolute -top-4 left-4 w-12 h-20 text-foreground opacity-20 pointer-events-none -rotate-12" />
                  <SteamDecor className="hidden md:block absolute -top-2 right-8 w-10 h-16 text-foreground opacity-15 pointer-events-none rotate-6" />
                  
                  {/* Quote text - mobile optimized */}
                  <div className="max-w-[280px] md:max-w-none mx-auto">
                    <p className="font-serif text-lg md:text-3xl lg:text-4xl text-foreground leading-[1.75] md:leading-relaxed text-center italic relative z-10">
                      "{quote.text}"
                    </p>
                  </div>
                  
                  {/* Footer with divider */}
                  <footer className="text-center mt-5 md:mt-8 relative z-10">
                    {/* Thin divider above page number - mobile only */}
                    <div className="w-6 h-px bg-border/40 mx-auto mb-3 md:hidden" />
                    <span className="font-sans text-xs md:text-sm text-muted-foreground/60 md:text-muted-foreground tracking-wider">
                      — halaman {quote.page}
                    </span>
                  </footer>
                </blockquote>
                {index < 2 && (
                  <div className="hidden md:block w-16 h-px bg-border mx-auto mt-20"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Author */}
      <section id="penulis" className="py-16 md:py-24 px-6 bg-[hsl(var(--paper))]">
        <div className="max-w-3xl mx-auto fade-on-scroll opacity-0 transition-all duration-700 translate-y-8">
          {/* Author Card - Mobile Optimized */}
          <div className="rounded-2xl overflow-hidden bg-[#f5f0eb] relative">
            {/* Decorative elements */}
            <CoffeeCupDecor className="absolute -bottom-6 -left-6 w-24 h-24 text-foreground opacity-10 pointer-events-none -rotate-12 z-10" />
            <CoffeeBeansDecor className="absolute bottom-32 -right-4 w-16 h-16 text-foreground opacity-10 pointer-events-none z-10" />
            
            {/* Portrait Header - Lightweight img element */}
            <div className="relative h-[340px] md:h-[380px] w-full">
              <img 
                src="https://019c8ab5-5961-7265-9d4f-11ebc8fc571c.mochausercontent.com/file_00000000b60871fd9598e98158462be1.png" 
                alt="Wildan Ferdiansyah"
                className="w-full h-full object-cover"
                style={{ objectPosition: 'center 40%' }}
                loading="lazy"
                decoding="async"
              />
              {/* Simple linear gradient overlay - no blur */}
              <div 
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(to bottom, rgba(245,240,235,0) 0%, rgba(245,240,235,0) 60%, rgba(245,240,235,0.4) 75%, rgba(245,240,235,0.9) 90%, rgb(245,240,235) 100%)'
                }}
              />
            </div>
            
            {/* Text Content */}
            <div className="px-6 md:px-12 pb-10 pt-2 text-center relative z-10 -mt-4">
              <h3 className="font-serif text-3xl md:text-4xl text-foreground mb-2">
                Wildan Ferdiansyah
              </h3>
              
              <p className="font-sans text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">
                Penulis
              </p>
              
              {/* Biography - Compact */}
              <div className="space-y-4 max-w-lg mx-auto">
                <p className="font-serif text-base md:text-lg text-muted-foreground leading-relaxed">
                  Bukan penulis profesional. Bukan motivator. Hanya seseorang yang mencoba memahami hidupnya melalui kata-kata.
                </p>
                
                <p className="font-serif text-base md:text-lg text-muted-foreground leading-relaxed">
                  Pernah menjadi barista. Pernah bekerja kantoran. Sekarang menulis di sela-sela waktu—bukan untuk menjadi terkenal, tapi untuk tetap waras.
                </p>
                
                <p className="font-serif text-lg md:text-xl text-foreground leading-relaxed italic mt-6">
                  "Aku menulis untuk hadir, bukan untuk memukau."
                </p>
              </div>
              
              {/* Author Timeline Mini */}
              <div className="mt-10 max-w-xs mx-auto">
                <div className="relative pl-6">
                  {/* Vertical line */}
                  <div className="absolute left-0 top-1 bottom-1 w-px bg-[#d4c8b8]" />
                  
                  <div className="space-y-4">
                    {[
                      "Pernah menjadi barista",
                      "Mulai menulis diam-diam",
                      "Buku pertama terbit"
                    ].map((item, index) => (
                      <div key={index} className="relative">
                        {/* Dot */}
                        <div className="absolute -left-6 top-1.5 w-2 h-2 rounded-full bg-[#b8a080]" />
                        <p className="font-sans text-xs text-muted-foreground tracking-wide">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ruang Sunyi - Personal Notes */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-2xl mx-auto">
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-muted-foreground mb-12 text-center fade-on-scroll opacity-0 transition-all duration-700 translate-y-8">
            Ruang Sunyi
          </p>
          
          <div className="space-y-6">
            {[
              {
                title: "Tentang Hujan",
                text: "Hujan selalu datang tanpa izin. Seperti rindu yang tiba-tiba muncul saat kita sedang sibuk melupakan."
              },
              {
                title: "Tentang Menunggu",
                text: "Ada keindahan dalam menunggu—bukan pada akhirnya, tapi pada kesabaran yang kita pelajari di sepanjang jalan."
              },
              {
                title: "Tentang Kopi yang Dingin",
                text: "Kopi yang dingin bukan berarti gagal. Mungkin kita hanya terlalu sibuk menikmati percakapan yang lebih hangat."
              }
            ].map((note, index) => (
              <div
                key={index}
                className="fade-on-scroll opacity-0 transition-all duration-700 translate-y-8 p-6 md:p-8 rounded-xl border border-[#e0d8cc] bg-white/30"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <h4 className="font-serif text-lg text-foreground mb-3 italic">
                  {note.title}
                </h4>
                <p className="font-serif text-base text-muted-foreground leading-relaxed">
                  {note.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Book Details */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-2xl mx-auto fade-on-scroll opacity-0 transition-all duration-700 translate-y-8">
          <div className="glass-card p-8 md:p-12 rounded-2xl relative overflow-hidden">
            {/* Decorative book accent */}
            <BookDecor className="absolute -bottom-8 -right-8 w-36 h-36 text-foreground opacity-20 pointer-events-none rotate-6" />
            <SteamDecor className="absolute top-6 -left-4 w-12 h-18 text-foreground opacity-15 pointer-events-none" />
            
            <p className="font-sans text-xs tracking-[0.3em] uppercase text-muted-foreground mb-12 text-center relative z-10">
              Detail Buku
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 relative z-10">
              {[
                { label: "Format", value: "PDF" },
                { label: "Bahasa", value: "Indonesia" },
                { label: "Halaman", value: "128" },
                { label: "Penerbit", value: "Wildan" },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <p className="font-sans text-xs tracking-wider uppercase text-muted-foreground mb-2">
                    {item.label}
                  </p>
                  <p className="font-serif text-lg text-foreground">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
            
            
          </div>
        </div>
      </section>

      {/* Rak Buku Sunyi - Cinematic Book Grid */}
      <RakBukuSunyiSection />



      {/* Social Proof - Dynamic Testimonials */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-2xl mx-auto fade-on-scroll opacity-0 transition-all duration-700 translate-y-8">
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-muted-foreground mb-10 text-center">
            Kata Pembaca
          </p>
          
          <DynamicTestimonials />
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-24 md:py-32 px-6 bg-[hsl(var(--paper))]">
        <div className="max-w-xl mx-auto text-center fade-on-scroll opacity-0 transition-all duration-700 translate-y-8">
          <p className="font-serif text-2xl md:text-3xl text-foreground leading-relaxed mb-10 italic">
            "Tidak semua buku harus mengubah hidupmu.<br />
            Ada yang cukup menemanimu, sebentar saja."
          </p>
          
          <a
            href="#beli"
            className="inline-flex items-center justify-center px-8 py-4 bg-foreground text-background font-sans text-sm tracking-wider uppercase rounded-sm hover:bg-foreground/90 transition-all duration-300"
          >
            Unduh Buku
          </a>
        </div>
      </section>

      {/* Page Share Section */}
      <section className="py-12 px-6">
        <div className="max-w-xl mx-auto text-center fade-on-scroll opacity-0 transition-all duration-700 translate-y-8">
          <p className="font-sans text-xs tracking-[0.2em] uppercase text-[#8b7355] mb-6">
            Bagikan halaman ini
          </p>
          
          <div className="flex items-center justify-center gap-8">
            {/* WhatsApp */}
            <a
              href={`https://wa.me/?text=${encodeURIComponent(window.location.href)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8b7355] opacity-70 hover:opacity-100 transition-all duration-300 hover:scale-110 active:scale-95"
              aria-label="Share via WhatsApp"
            >
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
              </svg>
            </a>
            
            {/* Facebook */}
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8b7355] opacity-70 hover:opacity-100 transition-all duration-300 hover:scale-110 active:scale-95"
              aria-label="Share via Facebook"
            >
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            
            {/* Instagram - Copy to clipboard */}
            <button
              onClick={() => {
                navigator.clipboard.writeText(window.location.href);
                const btn = document.getElementById('ig-share-btn');
                if (btn) {
                  btn.setAttribute('data-copied', 'true');
                  setTimeout(() => btn.removeAttribute('data-copied'), 2000);
                }
              }}
              id="ig-share-btn"
              className="text-[#8b7355] opacity-70 hover:opacity-100 transition-all duration-300 hover:scale-110 active:scale-95 relative group"
              aria-label="Copy link for Instagram"
            >
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-[#8b7355] opacity-0 group-hover:opacity-60 transition-opacity whitespace-nowrap font-sans">
                Salin link
              </span>
            </button>
            
            {/* X (Twitter) */}
            <a
              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8b7355] opacity-70 hover:opacity-100 transition-all duration-300 hover:scale-110 active:scale-95"
              aria-label="Share via X"
            >
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Reader Comments Form Section */}
      <ReaderCommentsForm />

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-border/50">
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-8 md:grid-cols-3 text-center md:text-left">
            <div>
              <p className="font-serif text-xl text-foreground mb-2">
                Sepucuk Surat untuk Malam
              </p>
              <p className="font-sans text-sm text-muted-foreground">
                © 2026 Wildan Ferdiansyah
              </p>
            </div>
            
            <div>
              <p className="font-sans text-xs tracking-wider uppercase text-muted-foreground mb-3">
                Kontak
              </p>
              <a
                href="https://wa.me/6289636357091"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-sm text-foreground hover:text-muted-foreground transition-colors inline-flex items-center gap-2"
              >
                WhatsApp
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            
            <div className="md:text-right">
              <p className="font-serif text-sm text-muted-foreground italic">
                Ditulis perlahan.<br />
                Dicetak dengan cinta.
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Styles */}
      <style>{`
        .fade-on-scroll {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }
        
        .fade-on-scroll.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .glass-card {
          background: linear-gradient(
            135deg,
            hsl(var(--background) / 0.8) 0%,
            hsl(var(--background) / 0.6) 100%
          );
          backdrop-filter: blur(10px);
          border: 1px solid hsl(var(--border) / 0.5);
          box-shadow: 
            0 4px 24px -4px hsl(var(--foreground) / 0.05),
            0 0 0 1px hsl(var(--background) / 0.5) inset;
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
        }

        .glass-card:hover {
          transform: translateY(-4px);
          box-shadow: 
            0 12px 40px -8px hsl(var(--foreground) / 0.1),
            0 0 0 1px hsl(var(--background) / 0.8) inset;
          border-color: hsl(var(--border) / 0.8);
        }

        .glass-card:active {
          transform: translateY(-2px) scale(0.99);
          box-shadow: 
            0 6px 24px -4px hsl(var(--foreground) / 0.08),
            0 0 0 1px hsl(var(--background) / 0.6) inset;
        }

        .glass-card-dark {
          background: linear-gradient(
            135deg,
            hsl(var(--card) / 0.9) 0%,
            hsl(var(--card) / 0.7) 100%
          );
          backdrop-filter: blur(12px);
          border: 1px solid hsl(var(--border) / 0.3);
          box-shadow: 
            0 8px 32px -8px hsl(var(--foreground) / 0.1),
            0 0 0 1px hsl(var(--background) / 0.3) inset;
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
        }

        .glass-card-dark:hover {
          transform: translateY(-4px);
          box-shadow: 
            0 16px 48px -12px hsl(var(--foreground) / 0.15),
            0 0 0 1px hsl(var(--background) / 0.5) inset;
          border-color: hsl(var(--border) / 0.5);
        }

        .glass-card-dark:active {
          transform: translateY(-2px) scale(0.99);
          box-shadow: 
            0 8px 32px -8px hsl(var(--foreground) / 0.12),
            0 0 0 1px hsl(var(--background) / 0.4) inset;
        }

        /* Cinematic book cover styles */
        .book-cover-link {
          transition: opacity 0.5s ease-out, transform 0.5s ease-out;
        }

        .book-cover {
          box-shadow: 
            0 2px 8px -2px rgba(139, 115, 85, 0.06),
            0 1px 2px rgba(139, 115, 85, 0.04);
          transition: 
            transform 0.35s ease,
            box-shadow 0.35s ease,
            border-color 0.35s ease;
        }

        .book-cover:hover {
          transform: scale(1.02) translateY(-3px);
          box-shadow: 
            0 14px 32px -8px rgba(139, 115, 85, 0.14),
            0 6px 12px rgba(139, 115, 85, 0.07);
          border-color: #c4b5a0;
        }

        .book-cover:active {
          transform: scale(1.015) translateY(-1px);
        }

        /* Cuplikan mobile optimization */
        @media (max-width: 768px) {
          .cuplikan-card {
            opacity: 0.98;
          }
          
          .cuplikan-card.in-view {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
