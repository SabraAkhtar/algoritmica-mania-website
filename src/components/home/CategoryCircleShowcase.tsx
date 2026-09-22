import React, { useRef, useEffect, useState } from 'react';
import { ProductCategory, Language } from '../../types';
import { 
  ChevronLeft, 
  ChevronRight
} from 'lucide-react';
import { motion } from 'motion/react';

// --- CUSTOM HIGH-QUALITY SVGS MATCHING EXACT USER-UPLOADED ASSETS ---

// 1. Laptop / Notebook (User Image 6)
const LaptopSvg: React.FC<{ className?: string }> = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect x="14" y="16" width="72" height="50" rx="6" fill="currentColor" />
    <rect x="20" y="22" width="60" height="38" rx="2" fill="white" fillOpacity="0.95" />
    <path d="M4 74H96L88 88H12L4 74Z" fill="currentColor" />
    <rect x="42" y="77" width="16" height="6" rx="2" fill="white" fillOpacity="0.95" />
  </svg>
);

// 2. Apple & iPhones Lineup (User Image 7: Back triple-camera, Dynamic Island front, Home button front)
const AppleIphonesSvg: React.FC<{ className?: string }> = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 110 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Left iPhone (Back with Triple Camera) */}
    <rect x="4" y="10" width="34" height="78" rx="8" fill="currentColor" />
    <rect x="7" y="13" width="17" height="17" rx="4" fill="white" fillOpacity="0.25" />
    <circle cx="12" cy="18" r="3.2" fill="white" />
    <circle cx="19" cy="24" r="3.2" fill="white" />
    <circle cx="12" cy="25" r="3.2" fill="white" />

    {/* Center iPhone (Front with Dynamic Island) */}
    <rect x="36" y="4" width="38" height="88" rx="9" fill="currentColor" stroke="white" strokeWidth="2" />
    <rect x="39" y="7" width="32" height="82" rx="7" fill="white" fillOpacity="0.95" />
    <rect x="49" y="10" width="12" height="3.5" rx="1.75" fill="currentColor" />
    <circle cx="58" cy="11.75" r="0.9" fill="#0D7E73" />

    {/* Right iPhone (Classic Front with Home Button) */}
    <rect x="74" y="15" width="32" height="72" rx="7" fill="currentColor" />
    <rect x="77" y="23" width="26" height="50" rx="2" fill="white" fillOpacity="0.95" />
    <rect x="85" y="18" width="10" height="2" rx="1" fill="white" />
    <circle cx="90" cy="79" r="3" fill="none" stroke="white" strokeWidth="1.8" />
  </svg>
);

// 3. Desktop Monitor / Display (User Image 5)
const MonitorSvg: React.FC<{ className?: string }> = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect x="8" y="16" width="84" height="58" rx="6" fill="currentColor" />
    <rect x="14" y="22" width="72" height="44" rx="2" fill="white" fillOpacity="0.9" />
    <path d="M40 74H60L64 87H36L40 74Z" fill="currentColor" />
    <rect x="28" y="86" width="44" height="5" rx="2.5" fill="currentColor" />
  </svg>
);

// 4. Server Rack / Storage (User Image 1)
const ServerRackSvg: React.FC<{ className?: string }> = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 100 115" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Base Foot */}
    <rect x="10" y="100" width="80" height="8" rx="2" fill="currentColor" />
    {/* Frame Pillar */}
    <rect x="20" y="12" width="60" height="90" fill="currentColor" fillOpacity="0.25" rx="2" />
    
    {/* Tray 1 */}
    <rect x="10" y="8" width="80" height="26" rx="5" fill="currentColor" stroke="currentColor" strokeWidth="3" />
    <circle cx="25" cy="21" r="4.5" fill="#10B981" />
    <circle cx="37" cy="21" r="4.5" fill="#F59E0B" />
    <line x1="66" y1="16" x2="66" y2="26" stroke="white" strokeWidth="3.5" strokeLinecap="round" />
    <line x1="74" y1="16" x2="74" y2="26" stroke="white" strokeWidth="3.5" strokeLinecap="round" />
    <line x1="82" y1="16" x2="82" y2="26" stroke="white" strokeWidth="3.5" strokeLinecap="round" />

    {/* Tray 2 */}
    <rect x="10" y="39" width="80" height="26" rx="5" fill="currentColor" stroke="currentColor" strokeWidth="3" />
    <circle cx="25" cy="52" r="4.5" fill="#10B981" />
    <circle cx="37" cy="52" r="4.5" fill="#F59E0B" />
    <line x1="66" y1="47" x2="66" y2="57" stroke="white" strokeWidth="3.5" strokeLinecap="round" />
    <line x1="74" y1="47" x2="74" y2="57" stroke="white" strokeWidth="3.5" strokeLinecap="round" />
    <line x1="82" y1="47" x2="82" y2="57" stroke="white" strokeWidth="3.5" strokeLinecap="round" />

    {/* Tray 3 */}
    <rect x="10" y="70" width="80" height="26" rx="5" fill="currentColor" stroke="currentColor" strokeWidth="3" />
    <circle cx="25" cy="83" r="4.5" fill="#10B981" />
    <circle cx="37" cy="83" r="4.5" fill="#F59E0B" />
    <line x1="66" y1="78" x2="66" y2="88" stroke="white" strokeWidth="3.5" strokeLinecap="round" />
    <line x1="74" y1="78" x2="74" y2="88" stroke="white" strokeWidth="3.5" strokeLinecap="round" />
    <line x1="82" y1="78" x2="82" y2="88" stroke="white" strokeWidth="3.5" strokeLinecap="round" />
  </svg>
);

// 5. Wi-Fi Router / Networking (User Image 3)
const WifiRouterSvg: React.FC<{ className?: string }> = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* 2 Antennas */}
    <rect x="22" y="14" width="5" height="42" rx="2.5" fill="currentColor" />
    <rect x="73" y="14" width="5" height="42" rx="2.5" fill="currentColor" />
    {/* Wi-Fi Radiation Waves */}
    <path d="M36 34C40.5 30 46 28 50 28C54 28 59.5 30 64 34" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    <path d="M41 40C43.8 37.5 46.8 36 50 36C53.2 36 56.2 37.5 59 40" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
    <path d="M45.5 46C47 44.5 48.5 44 50 44C51.5 44 53 44.5 54.5 46" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    <circle cx="50" cy="51" r="2.5" fill="currentColor" />
    {/* Router Case */}
    <rect x="10" y="56" width="80" height="30" rx="10" fill="currentColor" />
    <path d="M12 75C24 77 76 77 88 75" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

// 6. CPU Chip / Microprocessor (User Image 2)
const CpuChipSvg: React.FC<{ className?: string }> = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* External Pins */}
    <path d="M28 4V16 M42 4V16 M58 4V16 M72 4V16 M28 84V96 M42 84V96 M58 84V96 M72 84V96" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" />
    <path d="M4 28H16 M4 42H16 M4 58H16 M4 72H16 M84 28H96 M84 42H96 M84 58H96 M84 72H96" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" />
    {/* Main Silicon Chip Body */}
    <rect x="16" y="16" width="68" height="68" rx="14" fill="currentColor" />
    {/* Circuit Board Traces & Nodes */}
    <path d="M16 34H36L50 24H56" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="58" cy="24" r="4.5" fill="white" />
    
    <path d="M16 48H32L44 48H46" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="48" cy="48" r="4.5" fill="white" />
    
    <path d="M24 76V58H38L56 70H60" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="62" cy="70" r="4.5" fill="white" />
    
    <path d="M84 42H70L60 42" stroke="white" strokeWidth="4" strokeLinecap="round" />
    <path d="M84 58H68L58 64" stroke="white" strokeWidth="4" strokeLinecap="round" />
  </svg>
);

// 7. B2B Handshake / Deals & Batches (User Image 4)
const HandshakeSvg: React.FC<{ className?: string }> = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <g transform="translate(50,50) rotate(-45) translate(-50,-50)">
      {/* Left Sleeve */}
      <rect x="10" y="32" width="22" height="36" rx="5" fill="none" stroke="currentColor" strokeWidth="7" strokeLinecap="round" />
      {/* Right Sleeve */}
      <rect x="68" y="32" width="22" height="36" rx="5" fill="none" stroke="currentColor" strokeWidth="7" strokeLinecap="round" />
      {/* Hand Interlocking Lines */}
      <path
        d="M28 41H43C48 41 53 45 53 50C53 55 48 58 43 58H36"
        fill="none"
        stroke="currentColor"
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M72 59H57C52 59 47 55 47 50C47 45 52 42 57 42H64"
        fill="none"
        stroke="currentColor"
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M43 41L54 52"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <path
        d="M36 49L47 60"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
      />
    </g>
  </svg>
);

export interface CategoryItem {
  id: ProductCategory | 'deals';
  title: {
    pt: string;
    en: string;
  };
  subtitle?: {
    pt: string;
    en: string;
  };
  iconComponent: React.FC<{ className?: string }>;
}

interface CategoryCircleShowcaseProps {
  lang: Language;
  activeCategory: string | null;
  onSelectCategory: (category: ProductCategory | 'deals' | 'all') => void;
}

export const CategoryCircleShowcase: React.FC<CategoryCircleShowcaseProps> = ({
  lang,
  activeCategory,
  onSelectCategory
}) => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  // Exact 7 categories corresponding to user-provided SVGs
  const baseCategories: CategoryItem[] = [
    {
      id: 'used-refurbished',
      title: {
        pt: 'Portáteis & Laptops',
        en: 'Laptops & Notebooks'
      },
      subtitle: {
        pt: 'ThinkPad, Dell & HP',
        en: 'ThinkPad, Dell & HP'
      },
      iconComponent: LaptopSvg
    },
    {
      id: 'apple',
      title: {
        pt: 'Apple & iPhones',
        en: 'Apple & iPhones'
      },
      subtitle: {
        pt: 'iPhones, MacBooks & iPads',
        en: 'iPhones, MacBooks & iPads'
      },
      iconComponent: AppleIphonesSvg
    },
    {
      id: 'used-refurbished',
      title: {
        pt: 'Desktops & Monitores',
        en: 'Monitors & Desktops'
      },
      subtitle: {
        pt: 'Torres & Displays',
        en: 'Towers & Displays'
      },
      iconComponent: MonitorSvg
    },
    {
      id: 'servers-storage',
      title: {
        pt: 'Servidores & Storage',
        en: 'Servers & Storage'
      },
      subtitle: {
        pt: 'Dell PowerEdge & HPE',
        en: 'Dell PowerEdge & HPE'
      },
      iconComponent: ServerRackSvg
    },
    {
      id: 'networking',
      title: {
        pt: 'Switches & Routers',
        en: 'Switches & Routers'
      },
      subtitle: {
        pt: 'Cisco, UniFi & Aruba',
        en: 'Cisco, UniFi & Aruba'
      },
      iconComponent: WifiRouterSvg
    },
    {
      id: 'cybersecurity',
      title: {
        pt: 'Chips & Hardware',
        en: 'Chips & Hardware'
      },
      subtitle: {
        pt: 'Processadores & Firewalls',
        en: 'Processors & Firewalls'
      },
      iconComponent: CpuChipSvg
    },
    {
      id: 'deals',
      title: {
        pt: 'Lotes & Parcerias',
        en: 'B2B Deals & Batches'
      },
      subtitle: {
        pt: 'Descontos em Volume B2B',
        en: 'B2B Batch Savings'
      },
      iconComponent: HandshakeSvg
    }
  ];

  // Repeat items for seamless infinite continuous scrolling (3 sets)
  const duplicatedCategories = [...baseCategories, ...baseCategories, ...baseCategories];

  // Continuous auto-scroll loop (Right to Left scroll direction)
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let animationFrameId: number;
    const scrollSpeed = 1.0; // pixels per frame

    const step = () => {
      if (!isPaused && container) {
        container.scrollLeft += scrollSpeed;
        
        // When scrolled past one full set of items, loop back seamlessly
        const maxScroll = container.scrollWidth / 3;
        if (container.scrollLeft >= maxScroll * 2) {
          container.scrollLeft -= maxScroll;
        }
      }
      animationFrameId = requestAnimationFrame(step);
    };

    animationFrameId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused]);

  const handleManualScroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    const distance = 240;
    scrollContainerRef.current.scrollBy({
      left: direction === 'left' ? -distance : distance,
      behavior: 'smooth'
    });
  };

  return (
    <div className="w-full py-8 sm:py-12 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with animated decorative dots and centered title */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center justify-between mb-8"
        >
          <div className="flex-1 hidden sm:flex items-center justify-end pr-4 text-[#0D7E73] opacity-60">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0D7E73]"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#0D7E73] mx-1"></span>
            <span className="w-8 h-0.5 bg-[#0D7E73]"></span>
          </div>

          <div className="text-center px-4">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-[#042F2C]">
              {lang === 'pt' ? (
                <>
                  Comprar por <span className="text-[#0D7E73]">Categoria</span>
                </>
              ) : (
                <>
                  Shop By <span className="text-[#0D7E73]">Category</span>
                </>
              )}
            </h2>
            <p className="text-xs text-[#64748B] mt-1 font-medium">
              {lang === 'pt' ? 'Explore equipamentos e hardware TI certificados' : 'Browse certified enterprise hardware & equipment'}
            </p>
          </div>

          <div className="flex-1 hidden sm:flex items-center justify-start pl-4 text-[#0D7E73] opacity-60">
            <span className="w-8 h-0.5 bg-[#0D7E73]"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#0D7E73] mx-1"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#0D7E73]"></span>
          </div>
        </motion.div>

        {/* Carousel Container with Left/Right Navigation Buttons & Soft Blur Fades */}
        <div 
          className="relative group/slider overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          {/* Left Edge Soft Gradient Fade / Blur Mask */}
          <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 md:w-28 bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none z-10" />

          {/* Right Edge Soft Gradient Fade / Blur Mask */}
          <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 md:w-28 bg-gradient-to-l from-white via-white/80 to-transparent pointer-events-none z-10" />

          {/* Left Arrow Button */}
          <button
            onClick={() => handleManualScroll('left')}
            className="absolute left-1 sm:left-2 top-1/3 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white/95 backdrop-blur-xs border border-[#CCFBF1] text-[#042F2C] hover:bg-[#F0FDFA] hover:text-[#0D7E73] flex items-center justify-center shadow-md transition-all cursor-pointer opacity-90 group-hover/slider:opacity-100 hover:scale-105"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={() => handleManualScroll('right')}
            className="absolute right-1 sm:right-2 top-1/3 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white/95 backdrop-blur-xs border border-[#CCFBF1] text-[#042F2C] hover:bg-[#F0FDFA] hover:text-[#0D7E73] flex items-center justify-center shadow-md transition-all cursor-pointer opacity-90 group-hover/slider:opacity-100 hover:scale-105"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Continuous Automatic Horizontal Scrolling Track */}
          <div
            ref={scrollContainerRef}
            className="flex items-center gap-6 sm:gap-8 overflow-x-auto no-scrollbar py-4 px-2 scroll-smooth"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            {duplicatedCategories.map((cat, index) => {
              const SvgIcon = cat.iconComponent;
              return (
                <div
                  key={`${cat.id}-${index}`}
                  onClick={() => onSelectCategory(cat.id)}
                  className="flex flex-col items-center text-center cursor-pointer transition-all duration-300 shrink-0 w-32 sm:w-36 md:w-40 select-none group"
                >
                  {/* Circular Avatar Container with Exact Vector SVG */}
                  <div className="relative mb-3">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full border-2 border-[#CCFBF1] bg-gradient-to-br from-[#F0FDFA] to-[#E6FFFA] shadow-xs group-hover:shadow-md group-hover:border-[#0D7E73] group-hover:bg-[#CCFBF1]/40 group-hover:scale-105 transition-all duration-300 flex items-center justify-center p-3 sm:p-4">
                      <SvgIcon className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-[#0D7E73] group-hover:text-[#042F2C] transition-colors duration-300" />
                    </div>
                  </div>

                  {/* Product Category Title */}
                  <h3 className="text-xs sm:text-sm font-bold text-[#042F2C] group-hover:text-[#0D7E73] transition-colors leading-tight">
                    {cat.title[lang]}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
