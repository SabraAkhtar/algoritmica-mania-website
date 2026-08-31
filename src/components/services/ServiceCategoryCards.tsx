import React, { useRef, useEffect, useState } from 'react';
import { Language, ServiceCategoryKey } from '../../types';
import { serviceCategoriesList } from '../../data/services';
import { ChevronLeft, ChevronRight, ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

interface ServiceCategoryCardsProps {
  lang: Language;
  activeCategory: ServiceCategoryKey;
  onSelectCategory: (category: ServiceCategoryKey) => void;
  serviceCounts: Record<ServiceCategoryKey, number>;
}

// --- HIGH-QUALITY TECHNICAL SVG ILLUSTRATIONS FOR SERVICE CATEGORIES ---

// 1. IT Support & Technical Diagnostics
const ITSupportSvg: React.FC<{ className?: string }> = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Computer monitor with diagnostics */}
    <rect x="12" y="14" width="76" height="52" rx="6" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="4" />
    <rect x="20" y="22" width="60" height="36" rx="3" fill="currentColor" fillOpacity="0.85" />
    {/* Diagnostics waveform / code lines */}
    <path d="M26 40H36L42 30L48 48L54 36L60 42H74" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
    {/* Monitor Stand */}
    <path d="M42 66H58L62 78H38L42 66Z" fill="currentColor" />
    <rect x="30" y="78" width="40" height="5" rx="2.5" fill="currentColor" />
    {/* Precision Wrench Tool Overlay */}
    <circle cx="78" cy="74" r="15" fill="#0D7E73" stroke="white" strokeWidth="3" />
    <path d="M73 79L83 69M72 70C73 68 76 68 78 70L75 73M82 77L85 80C87 82 87 85 85 86" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

// 2. Networking & Infrastructure
const NetworkingSvg: React.FC<{ className?: string }> = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Switch / Router Chassis */}
    <rect x="10" y="22" width="80" height="30" rx="6" fill="currentColor" fillOpacity="0.85" />
    {/* RJ45 Ethernet Port Array */}
    <rect x="18" y="32" width="8" height="10" rx="1.5" fill="white" fillOpacity="0.9" />
    <rect x="30" y="32" width="8" height="10" rx="1.5" fill="white" fillOpacity="0.9" />
    <rect x="42" y="32" width="8" height="10" rx="1.5" fill="white" fillOpacity="0.9" />
    <rect x="54" y="32" width="8" height="10" rx="1.5" fill="white" fillOpacity="0.9" />
    {/* Blinking Activity LEDs */}
    <circle cx="72" cy="34" r="2.5" fill="#10B981" />
    <circle cx="80" cy="34" r="2.5" fill="#5EEAD4" />
    <circle cx="72" cy="42" r="2.5" fill="#F59E0B" />
    <circle cx="80" cy="42" r="2.5" fill="#10B981" />
    {/* Topology Network Nodes & Interconnects */}
    <path d="M22 52V70M58 52V70M50 70H14M50 70H86" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
    <circle cx="14" cy="70" r="5" fill="#0D7E73" stroke="white" strokeWidth="2" />
    <circle cx="50" cy="70" r="5" fill="#0D7E73" stroke="white" strokeWidth="2" />
    <circle cx="86" cy="70" r="5" fill="#0D7E73" stroke="white" strokeWidth="2" />
    <path d="M14 75V84M50 75V84M86 75V84" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

// 3. Cybersecurity & Data Protection
const CybersecuritySvg: React.FC<{ className?: string }> = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Shield Outer Barrier */}
    <path d="M50 10L82 22V50C82 70 50 88 50 88C50 88 18 70 18 50V22L50 10Z" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="4" strokeLinejoin="round" />
    {/* Solid Shield Core */}
    <path d="M50 18L74 27V48C74 64 50 78 50 78C50 78 26 64 26 48V27L50 18Z" fill="currentColor" fillOpacity="0.85" />
    {/* Cryptographic Keyhole / Security Padlock */}
    <rect x="40" y="44" width="20" height="16" rx="3" fill="white" />
    <path d="M44 44V38C44 34.6863 46.6863 32 50 32C53.3137 32 56 34.6863 56 38V44" stroke="white" strokeWidth="3.5" strokeLinecap="round" />
    <circle cx="50" cy="51" r="2.5" fill="#0D7E73" />
    <path d="M50 53.5V57" stroke="#0D7E73" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

// 4. Server & Storage Solutions
const ServerStorageSvg: React.FC<{ className?: string }> = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Unit 1 */}
    <rect x="14" y="14" width="72" height="20" rx="4" fill="currentColor" fillOpacity="0.85" stroke="currentColor" strokeWidth="2.5" />
    <circle cx="24" cy="24" r="3" fill="#10B981" />
    <circle cx="34" cy="24" r="3" fill="#5EEAD4" />
    <line x1="56" y1="20" x2="56" y2="28" stroke="white" strokeWidth="3" strokeLinecap="round" />
    <line x1="64" y1="20" x2="64" y2="28" stroke="white" strokeWidth="3" strokeLinecap="round" />
    <line x1="72" y1="20" x2="72" y2="28" stroke="white" strokeWidth="3" strokeLinecap="round" />

    {/* Unit 2 */}
    <rect x="14" y="38" width="72" height="20" rx="4" fill="currentColor" fillOpacity="0.85" stroke="currentColor" strokeWidth="2.5" />
    <circle cx="24" cy="48" r="3" fill="#10B981" />
    <circle cx="34" cy="48" r="3" fill="#F59E0B" />
    <line x1="56" y1="44" x2="56" y2="52" stroke="white" strokeWidth="3" strokeLinecap="round" />
    <line x1="64" y1="44" x2="64" y2="52" stroke="white" strokeWidth="3" strokeLinecap="round" />
    <line x1="72" y1="44" x2="72" y2="52" stroke="white" strokeWidth="3" strokeLinecap="round" />

    {/* Unit 3 (Storage Bay) */}
    <rect x="14" y="62" width="72" height="24" rx="4" fill="currentColor" stroke="currentColor" strokeWidth="2.5" />
    <rect x="22" y="69" width="10" height="10" rx="2" fill="white" fillOpacity="0.9" />
    <rect x="36" y="69" width="10" height="10" rx="2" fill="white" fillOpacity="0.9" />
    <rect x="50" y="69" width="10" height="10" rx="2" fill="white" fillOpacity="0.9" />
    <circle cx="74" cy="74" r="3.5" fill="#10B981" />
  </svg>
);

// 5. IT Asset Recovery & Certified Refurbishment
const AssetRecoverySvg: React.FC<{ className?: string }> = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Microchip Center */}
    <rect x="32" y="32" width="36" height="36" rx="8" fill="currentColor" fillOpacity="0.85" />
    <circle cx="50" cy="50" r="8" fill="white" />
    <path d="M50 44V56M44 50H56" stroke="#0D7E73" strokeWidth="2.5" strokeLinecap="round" />
    {/* Circular Renewal Cycle Arrows */}
    <path d="M50 14C68 14 82 28 84 46" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" />
    <path d="M88 38L84 46L76 42" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
    
    <path d="M50 86C32 86 18 72 16 54" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" />
    <path d="M12 62L16 54L24 58" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const ServiceCategoryCards: React.FC<ServiceCategoryCardsProps> = ({
  lang,
  activeCategory,
  onSelectCategory,
  serviceCounts
}) => {
  const isPt = lang === 'pt';
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  const getCategorySvg = (id: string) => {
    switch (id) {
      case 'it-support': return ITSupportSvg;
      case 'networking': return NetworkingSvg;
      case 'cybersecurity': return CybersecuritySvg;
      case 'servers-storage': return ServerStorageSvg;
      case 'asset-recovery': return AssetRecoverySvg;
      default: return ITSupportSvg;
    }
  };

  // Repeated categories for seamless horizontal scrolling carousel
  const duplicatedCategories = [
    ...serviceCategoriesList,
    ...serviceCategoriesList,
    ...serviceCategoriesList
  ];

  // Smooth continuous auto-scroll loop
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let animationFrameId: number;
    const scrollSpeed = 0.8; // px per frame

    const step = () => {
      if (!isPaused && container) {
        container.scrollLeft += scrollSpeed;
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
    const distance = 300;
    scrollContainerRef.current.scrollBy({
      left: direction === 'left' ? -distance : distance,
      behavior: 'smooth'
    });
  };

  return (
    <div className="w-full py-4 sm:py-6 bg-transparent relative">
      {/* Header with Title and Reset */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-4 sm:mb-6 gap-2">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold text-[#0D7E73] bg-[#F0FDFA] border border-[#CCFBF1] mb-1.5">
            <Sparkles className="w-3 h-3 text-[#0D7E73]" />
            <span>{isPt ? 'DIVISÕES TÉCNICAS DE TI' : 'TECHNICAL DIVISIONS'}</span>
          </div>
          <h2 className="text-lg sm:text-xl md:text-2xl font-extrabold tracking-tight text-[#042F2C]">
            {isPt ? 'Principais Áreas de Serviço' : 'Core Service Categories'}
          </h2>
          <p className="text-xs sm:text-sm text-[#64748B] mt-0.5">
            {isPt ? 'Selecione uma divisão técnica para filtrar os serviços especializados' : 'Select a technical division to view all specialized services'}
          </p>
        </div>

        {activeCategory !== 'all' && (
          <button
            type="button"
            onClick={() => onSelectCategory('all')}
            className="text-xs font-bold text-[#0D7E73] hover:text-[#0B6A61] hover:underline cursor-pointer self-start sm:self-auto shrink-0"
          >
            {isPt ? '← Ver Todas as Áreas' : '← View All Categories'}
          </button>
        )}
      </div>

      {/* Carousel Container with Controls & Smooth Fade Edges */}
      <div 
        className="relative group/slider overflow-hidden rounded-2xl"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        {/* Left Blur Fade */}
        <div className="absolute left-0 top-0 bottom-0 w-10 sm:w-16 bg-gradient-to-r from-[#F8FAFC] via-[#F8FAFC]/80 to-transparent pointer-events-none z-10" />
        {/* Right Blur Fade */}
        <div className="absolute right-0 top-0 bottom-0 w-10 sm:w-16 bg-gradient-to-l from-[#F8FAFC] via-[#F8FAFC]/80 to-transparent pointer-events-none z-10" />

        {/* Left Arrow Button */}
        <button
          type="button"
          onClick={() => handleManualScroll('left')}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/95 backdrop-blur-xs border border-[#CCFBF1] text-[#042F2C] hover:bg-[#F0FDFA] hover:text-[#0D7E73] flex items-center justify-center shadow-md transition-all cursor-pointer opacity-90 group-hover/slider:opacity-100 hover:scale-105"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        {/* Right Arrow Button */}
        <button
          type="button"
          onClick={() => handleManualScroll('right')}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/95 backdrop-blur-xs border border-[#CCFBF1] text-[#042F2C] hover:bg-[#F0FDFA] hover:text-[#0D7E73] flex items-center justify-center shadow-md transition-all cursor-pointer opacity-90 group-hover/slider:opacity-100 hover:scale-105"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        {/* Horizontal Scrolling Track */}
        <div
          ref={scrollContainerRef}
          className="flex items-stretch gap-4 sm:gap-5 overflow-x-auto no-scrollbar py-2 px-1 scroll-smooth"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
        >
          {duplicatedCategories.map((cat, idx) => {
            const SvgIcon = getCategorySvg(cat.id);
            const isSelected = activeCategory === cat.id;
            const count = serviceCounts[cat.id] || 0;
            const title = isPt ? cat.title.pt : cat.title.en;
            const shortDesc = isPt ? cat.shortDescription.pt : cat.shortDescription.en;

            return (
              <motion.div
                key={`${cat.id}-${idx}`}
                id={`service-cat-card-${cat.id}-${idx}`}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                onClick={() => onSelectCategory(isSelected ? 'all' : cat.id)}
                className={`group relative flex flex-col justify-between p-4 sm:p-5 rounded-2xl border transition-all duration-300 cursor-pointer shrink-0 w-64 sm:w-72 select-none h-full ${
                  isSelected
                    ? 'bg-gradient-to-b from-[#F0FDFA] to-white border-[#0D7E73] shadow-md ring-2 ring-[#0D7E73]/50'
                    : 'bg-white border-slate-200/90 hover:border-[#0D7E73] shadow-2xs hover:shadow-lg'
                }`}
              >
                <div>
                  {/* Top Row: Index Badge & Count + SVG Circle Avatar */}
                  <div className="flex items-start justify-between mb-3.5">
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-1.5">
                        <span className={`px-2 py-0.5 rounded-md text-[11px] font-mono font-bold transition-colors ${
                          isSelected ? 'bg-[#0D7E73] text-white' : 'bg-slate-100 text-slate-700 group-hover:bg-[#CCFBF1] group-hover:text-[#042F2C]'
                        }`}>
                          {cat.index}
                        </span>
                        <span className="text-[11px] font-medium text-slate-500">
                          ({count} {isPt ? 'serviços' : 'services'})
                        </span>
                      </div>
                    </div>

                    {/* SVG Vector Icon Avatar Container */}
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center p-2.5 transition-all duration-300 ${
                      isSelected 
                        ? 'bg-[#0D7E73] text-white shadow-sm scale-105' 
                        : 'bg-[#F0FDFA] text-[#0D7E73] group-hover:bg-[#0D7E73] group-hover:text-white group-hover:scale-105'
                    }`}>
                      <SvgIcon className="w-full h-full" />
                    </div>
                  </div>

                  {/* Category Title */}
                  <h3 className={`text-sm sm:text-base font-bold leading-snug mb-1.5 transition-colors ${
                    isSelected ? 'text-[#0D7E73]' : 'text-[#042F2C] group-hover:text-[#0D7E73]'
                  }`}>
                    {title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-xs text-[#64748B] line-clamp-2 leading-relaxed mb-4">
                    {shortDesc}
                  </p>
                </div>

                {/* Bottom CTA Row */}
                <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs font-bold mt-auto">
                  <span className={isSelected ? 'text-[#0D7E73]' : 'text-slate-600 group-hover:text-[#0D7E73]'}>
                    {isSelected ? (isPt ? '✓ Filtrado' : '✓ Active Filter') : (isPt ? 'Explorar' : 'Explore')}
                  </span>
                  <ArrowRight className={`w-3.5 h-3.5 transition-transform ${
                    isSelected ? 'translate-x-1 text-[#0D7E73]' : 'group-hover:translate-x-1 text-slate-400 group-hover:text-[#0D7E73]'
                  }`} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
