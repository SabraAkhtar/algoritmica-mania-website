import React, { useRef, useState, useEffect } from 'react';
import { 
  Laptop, 
  Monitor, 
  Server, 
  Network, 
  Cpu, 
  Layers, 
  ShieldCheck, 
  Headphones, 
  ChevronLeft, 
  ChevronRight,
  Smartphone,
  Router,
  HardDrive,
  PackageCheck
} from 'lucide-react';
import { Language, ProductCategory } from '../../types';

interface ShopByCategoryProps {
  lang: Language;
  onSelectCategory: (category: ProductCategory) => void;
}

interface CircleCategoryItem {
  id: string;
  categoryTarget: ProductCategory;
  title: { en: string; pt: string };
  icon: React.ComponentType<{ className?: string }>;
  accentColor?: string;
}

export const circularCategories: CircleCategoryItem[] = [
  {
    id: 'apple-iphones',
    categoryTarget: 'apple',
    title: {
      en: 'Apple & iPhones',
      pt: 'Apple & iPhones'
    },
    icon: () => (
      <div className="flex items-end justify-center gap-1 text-[#0D7E73]">
        {/* Stylized Tablet + Phone */}
        <div className="w-5 h-8 rounded-[4px] border-2 border-[#0D7E73] bg-[#0D7E73] flex items-center justify-center">
          <div className="w-2.5 h-4 bg-[#E6FAF7] rounded-[2px]" />
        </div>
        <div className="w-4 h-6 rounded-[3px] border-2 border-[#0D7E73] bg-white flex items-center justify-center">
          <div className="w-2 h-3 bg-[#0D7E73]/20 rounded-[1px]" />
        </div>
      </div>
    )
  },
  {
    id: 'monitors-desktops',
    categoryTarget: 'monitors',
    title: {
      en: 'Monitors & Desktops',
      pt: 'Monitores & Desktops'
    },
    icon: () => (
      <div className="flex flex-col items-center justify-center text-[#0D7E73]">
        <div className="w-10 h-7 rounded-[4px] border-2 border-[#0D7E73] bg-white flex items-center justify-center">
          <div className="w-7 h-4 bg-[#E6FAF7] rounded-[2px]" />
        </div>
        <div className="w-1.5 h-2 bg-[#0D7E73]" />
        <div className="w-5 h-1 bg-[#0D7E73] rounded-full" />
      </div>
    )
  },
  {
    id: 'servers-storage',
    categoryTarget: 'servers-storage',
    title: {
      en: 'Servers & Storage',
      pt: 'Servidores & Storage'
    },
    icon: () => (
      <div className="flex flex-col items-center justify-center gap-1 text-[#0D7E73]">
        <div className="w-9 h-3.5 rounded-[3px] bg-[#0D7E73] flex items-center justify-between px-1.5">
          <div className="flex gap-0.5">
            <div className="w-1 h-1 rounded-full bg-[#E6FAF7]" />
            <div className="w-1 h-1 rounded-full bg-[#E6FAF7]" />
          </div>
          <div className="w-2.5 h-1 bg-[#E6FAF7] rounded-xs" />
        </div>
        <div className="w-9 h-3.5 rounded-[3px] bg-[#0D7E73] flex items-center justify-between px-1.5">
          <div className="flex gap-0.5">
            <div className="w-1 h-1 rounded-full bg-[#E6FAF7]" />
            <div className="w-1 h-1 rounded-full bg-[#E6FAF7]" />
          </div>
          <div className="w-2.5 h-1 bg-[#E6FAF7] rounded-xs" />
        </div>
        <div className="w-9 h-3.5 rounded-[3px] bg-[#0D7E73] flex items-center justify-between px-1.5">
          <div className="flex gap-0.5">
            <div className="w-1 h-1 rounded-full bg-[#E6FAF7]" />
            <div className="w-1 h-1 rounded-full bg-[#E6FAF7]" />
          </div>
          <div className="w-2.5 h-1 bg-[#E6FAF7] rounded-xs" />
        </div>
      </div>
    )
  },
  {
    id: 'switches-routers',
    categoryTarget: 'networking',
    title: {
      en: 'Switches & Routers',
      pt: 'Switches & Routers'
    },
    icon: () => (
      <div className="flex flex-col items-center justify-center text-[#0D7E73]">
        <div className="flex items-center justify-center gap-3 mb-0.5">
          <div className="w-1 h-3 bg-[#0D7E73] rounded-full" />
          <div className="w-2 h-2 text-[#0D7E73] flex items-center justify-center">
            <div className="w-2.5 h-1 border-t-2 border-r-2 border-l-2 border-[#0D7E73] rounded-t-full" />
          </div>
          <div className="w-1 h-3 bg-[#0D7E73] rounded-full" />
        </div>
        <div className="w-10 h-4 rounded-[4px] bg-[#0D7E73] flex items-center justify-between px-1.5">
          <div className="flex gap-0.5">
            <div className="w-1 h-1 rounded-full bg-[#E6FAF7]" />
            <div className="w-1 h-1 rounded-full bg-[#E6FAF7]" />
            <div className="w-1 h-1 rounded-full bg-[#E6FAF7]" />
          </div>
          <div className="w-2 h-1 bg-[#E6FAF7] rounded-xs" />
        </div>
      </div>
    )
  },
  {
    id: 'chips-hardware',
    categoryTarget: 'computers-laptops',
    title: {
      en: 'Chips & Hardware',
      pt: 'Chips & Componentes'
    },
    icon: () => (
      <div className="flex items-center justify-center relative text-[#0D7E73]">
        <div className="w-8 h-8 rounded-[4px] border-2 border-[#0D7E73] bg-[#0D7E73] flex items-center justify-center">
          <div className="w-4 h-4 bg-[#E6FAF7] rounded-[2px] flex items-center justify-center">
            <div className="w-2 h-2 bg-[#0D7E73] rounded-xs" />
          </div>
        </div>
        {/* PCB pins */}
        <div className="absolute -top-1 left-2 w-0.5 h-1 bg-[#0D7E73]" />
        <div className="absolute -top-1 right-2 w-0.5 h-1 bg-[#0D7E73]" />
        <div className="absolute -bottom-1 left-2 w-0.5 h-1 bg-[#0D7E73]" />
        <div className="absolute -bottom-1 right-2 w-0.5 h-1 bg-[#0D7E73]" />
        <div className="absolute -left-1 top-2 w-1 h-0.5 bg-[#0D7E73]" />
        <div className="absolute -left-1 bottom-2 w-1 h-0.5 bg-[#0D7E73]" />
        <div className="absolute -right-1 top-2 w-1 h-0.5 bg-[#0D7E73]" />
        <div className="absolute -right-1 bottom-2 w-1 h-0.5 bg-[#0D7E73]" />
      </div>
    )
  },
  {
    id: 'b2b-deals-batches',
    categoryTarget: 'computers-laptops',
    title: {
      en: 'B2B Deals & Batches',
      pt: 'Lotes B2B & Equipamentos'
    },
    icon: () => (
      <div className="flex items-center justify-center text-[#0D7E73]">
        <div className="relative w-8 h-8 flex items-center justify-center">
          {/* Stylized batch icon with boxes/pallet */}
          <div className="w-7 h-7 border-2 border-[#0D7E73] rounded-md rotate-45 flex items-center justify-center bg-white">
            <div className="w-3 h-3 bg-[#0D7E73] rounded-xs" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-[#E6FAF7]" />
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'cybersecurity-firewalls',
    categoryTarget: 'cybersecurity',
    title: {
      en: 'Cybersecurity & Firewalls',
      pt: 'Cibersegurança & Firewalls'
    },
    icon: () => (
      <div className="flex items-center justify-center text-[#0D7E73]">
        <div className="w-8 h-9 border-2 border-[#0D7E73] rounded-b-xl rounded-t-xs bg-[#0D7E73] flex items-center justify-center">
          <div className="w-3.5 h-4 bg-[#E6FAF7] rounded-b-md rounded-t-xs flex items-center justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-[#0D7E73]" />
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'it-accessories-docks',
    categoryTarget: 'it-accessories',
    title: {
      en: 'IT Accessories & Docks',
      pt: 'Acessórios & Dockings'
    },
    icon: () => (
      <div className="flex items-center justify-center text-[#0D7E73]">
        <div className="w-9 h-5 border-2 border-[#0D7E73] rounded-md bg-[#0D7E73] flex items-center justify-around px-1">
          <div className="w-1.5 h-2 bg-[#E6FAF7] rounded-xs" />
          <div className="w-1.5 h-2 bg-[#E6FAF7] rounded-xs" />
          <div className="w-2.5 h-2 bg-white rounded-xs" />
        </div>
      </div>
    )
  }
];

export const ShopByCategory: React.FC<ShopByCategoryProps> = ({
  lang,
  onSelectCategory
}) => {
  const isPt = lang === 'pt';
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Triple duplicate array for seamless infinite looping without any reset jumps
  const repeatedCategories = [...circularCategories, ...circularCategories, ...circularCategories];

  // Seamless continuous auto scroll effect smoothly from left to right
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let animationId: number;
    const speed = 0.85; // smooth scrolling speed

    const tick = () => {
      if (container) {
        if (!isPaused) {
          container.scrollLeft += speed;
          // When we have scrolled one full set of items, seamless wrap
          const singleSetWidth = container.scrollWidth / 3;
          if (container.scrollLeft >= singleSetWidth * 2) {
            container.scrollLeft -= singleSetWidth;
          }
        }
      }
      animationId = requestAnimationFrame(tick);
    };

    animationId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animationId);
  }, [isPaused]);

  return (
    <section id="shop-by-category-section" className="py-12 sm:py-16 bg-white overflow-hidden border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Centered Decorative Title Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          
          {/* Header with teal line and dots accent: --•-- Shop By Category --•-- */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 mb-2">
            {/* Left Accent Line & Dot */}
            <div className="flex items-center gap-1.5">
              <div className="w-8 sm:w-12 h-0.5 bg-[#14B8A6]/60 rounded-full" />
              <div className="w-2 h-2 rounded-full bg-[#0D7E73]" />
              <div className="w-1 h-1 rounded-full bg-[#14B8A6]/60" />
            </div>

            {/* Main Bold Title */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#042F2C] tracking-tight">
              {isPt ? (
                <>
                  Comprar por <span className="text-[#0D7E73]">Categoria</span>
                </>
              ) : (
                <>
                  Shop by <span className="text-[#0D7E73]">Category</span>
                </>
              )}
            </h2>

            {/* Right Accent Line & Dot */}
            <div className="flex items-center gap-1.5">
              <div className="w-1 h-1 rounded-full bg-[#14B8A6]/60" />
              <div className="w-2 h-2 rounded-full bg-[#0D7E73]" />
              <div className="w-8 sm:w-12 h-0.5 bg-[#14B8A6]/60 rounded-full" />
            </div>
          </div>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm text-slate-500 font-normal">
            {isPt 
              ? 'Explore hardware empresarial certificado e equipamentos de alto rendimento' 
              : 'Browse certified enterprise hardware & equipment'}
          </p>
        </div>

        {/* Circular Slider Carousel Container with Soft Blurred Gradient Edges */}
        <div 
          className="relative max-w-6xl mx-auto overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Soft Blur / Gradient Fade Mask on Left Edge */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />

          {/* Soft Blur / Gradient Fade Mask on Right Edge */}
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />

          {/* Horizontal Circular Carousel List (Infinite Ticker) */}
          <div
            ref={scrollRef}
            className="flex items-center gap-6 sm:gap-8 md:gap-10 overflow-x-auto no-scrollbar py-4 px-4 select-none"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {repeatedCategories.map((item, idx) => {
              const IconComponent = item.icon;

              return (
                <div
                  key={`${item.id}-${idx}`}
                  onClick={() => onSelectCategory(item.categoryTarget)}
                  className="shrink-0 flex flex-col items-center text-center group cursor-pointer w-28 sm:w-32 transition-transform duration-300 hover:-translate-y-1.5"
                >
                  {/* Circular Icon Container with Soft Blurred Border & Shadow */}
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#E6FAF7]/80 hover:bg-[#CCFBF1] group-hover:bg-[#CCFBF1] border border-[#CCFBF1]/70 group-hover:border-[#0D7E73]/50 flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-300 mb-3 group-hover:scale-105">
                    <IconComponent />
                  </div>

                  {/* Category Title Text */}
                  <span className="text-xs sm:text-sm font-bold text-[#042F2C] group-hover:text-[#0D7E73] transition-colors leading-tight line-clamp-2">
                    {item.title[lang]}
                  </span>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
