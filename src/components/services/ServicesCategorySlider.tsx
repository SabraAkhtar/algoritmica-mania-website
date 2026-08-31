import React, { useRef, useEffect, useState } from 'react';
import { Language } from '../../types';
import { 
  Wrench, 
  Sparkles, 
  Headphones, 
  HardDrive, 
  Cpu, 
  ShieldCheck, 
  Network, 
  Server, 
  Zap, 
  Activity, 
  Laptop, 
  Layers 
} from 'lucide-react';

export interface ServiceSliderItem {
  slug: string;
  name: string;
  namePt: string;
  categoryName: string;
  categoryNamePt: string;
  iconName: string;
  iconComponent: React.ComponentType<{ className?: string }>;
}

export const allMegaMenuServicesSliderList: ServiceSliderItem[] = [
  {
    slug: 'hardware-diagnostics-repair',
    name: 'Diagnostics & Repair',
    namePt: 'Diagnóstico & Reparação',
    categoryName: 'Hardware Diagnostics',
    categoryNamePt: 'Diagnóstico de Hardware',
    iconName: 'Wrench',
    iconComponent: () => (
      <div className="flex items-center justify-center text-[#0D7E73]">
        <div className="w-8 h-8 rounded-full border-2 border-[#0D7E73] bg-[#0D7E73] flex items-center justify-center">
          <Wrench className="w-4 h-4 text-[#E6FAF7]" />
        </div>
      </div>
    )
  },
  {
    slug: 'preventive-maintenance-thermal',
    name: 'Thermal & Cleaning',
    namePt: 'Manutenção Térmica',
    categoryName: 'Thermal Maintenance',
    categoryNamePt: 'Manutenção Térmica',
    iconName: 'Sparkles',
    iconComponent: () => (
      <div className="flex items-center justify-center text-[#0D7E73]">
        <div className="w-8 h-8 rounded-full border-2 border-[#0D7E73] bg-[#0D7E73] flex items-center justify-center">
          <Sparkles className="w-4 h-4 text-[#E6FAF7]" />
        </div>
      </div>
    )
  },
  {
    slug: 'remote-helpdesk-troubleshooting',
    name: 'Remote Helpdesk',
    namePt: 'Helpdesk Remoto',
    categoryName: 'Remote Helpdesk',
    categoryNamePt: 'Helpdesk Remoto',
    iconName: 'Headphones',
    iconComponent: () => (
      <div className="flex items-center justify-center text-[#0D7E73]">
        <div className="w-8 h-8 rounded-full border-2 border-[#0D7E73] bg-[#0D7E73] flex items-center justify-center">
          <Headphones className="w-4 h-4 text-[#E6FAF7]" />
        </div>
      </div>
    )
  },
  {
    slug: 'data-recovery-drives',
    name: 'Data Recovery Lab',
    namePt: 'Recuperação de Dados',
    categoryName: 'Data Recovery Lab',
    categoryNamePt: 'Recuperação de Dados',
    iconName: 'HardDrive',
    iconComponent: () => (
      <div className="flex items-center justify-center text-[#0D7E73]">
        <div className="w-8 h-8 rounded-full border-2 border-[#0D7E73] bg-[#0D7E73] flex items-center justify-center">
          <HardDrive className="w-4 h-4 text-[#E6FAF7]" />
        </div>
      </div>
    )
  },
  {
    slug: 'os-setup-driver-optimization',
    name: 'OS Setup & Drivers',
    namePt: 'Sistemas & Drivers',
    categoryName: 'OS & Performance',
    categoryNamePt: 'Sistemas & Drivers',
    iconName: 'Cpu',
    iconComponent: () => (
      <div className="flex items-center justify-center text-[#0D7E73]">
        <div className="w-8 h-8 rounded-full border-2 border-[#0D7E73] bg-[#0D7E73] flex items-center justify-center">
          <Cpu className="w-4 h-4 text-[#E6FAF7]" />
        </div>
      </div>
    )
  },
  {
    slug: 'hardware-upgrades',
    name: 'RAM & SSD Upgrades',
    namePt: 'Upgrades de SSD & RAM',
    categoryName: 'Hardware Upgrades',
    categoryNamePt: 'Upgrades de Hardware',
    iconName: 'Zap',
    iconComponent: () => (
      <div className="flex items-center justify-center text-[#0D7E73]">
        <div className="w-8 h-8 rounded-full border-2 border-[#0D7E73] bg-[#0D7E73] flex items-center justify-center">
          <Zap className="w-4 h-4 text-[#E6FAF7]" />
        </div>
      </div>
    )
  },
  {
    slug: 'onsite-it-support',
    name: 'On-Site IT Support',
    namePt: 'Assistência Presencial',
    categoryName: 'On-Site IT',
    categoryNamePt: 'Suporte no Local',
    iconName: 'Laptop',
    iconComponent: () => (
      <div className="flex items-center justify-center text-[#0D7E73]">
        <div className="w-8 h-8 rounded-full border-2 border-[#0D7E73] bg-[#0D7E73] flex items-center justify-center">
          <Laptop className="w-4 h-4 text-[#E6FAF7]" />
        </div>
      </div>
    )
  },
  {
    slug: 'network-installation',
    name: 'Network Infrastructure',
    namePt: 'Infraestrutura de Redes',
    categoryName: 'Network Cabling',
    categoryNamePt: 'Redes Estruturadas',
    iconName: 'Network',
    iconComponent: () => (
      <div className="flex items-center justify-center text-[#0D7E73]">
        <div className="w-8 h-8 rounded-full border-2 border-[#0D7E73] bg-[#0D7E73] flex items-center justify-center">
          <Network className="w-4 h-4 text-[#E6FAF7]" />
        </div>
      </div>
    )
  }
];

export const getServiceIcon = (iconName: string) => {
  switch (iconName) {
    case 'Wrench': return Wrench;
    case 'Sparkles': return Sparkles;
    case 'Headphones': return Headphones;
    case 'HardDrive': return HardDrive;
    case 'Cpu': return Cpu;
    case 'Zap': return Zap;
    case 'Activity': return Activity;
    case 'Laptop': return Laptop;
    case 'Network': return Network;
    case 'Server': return Server;
    case 'Layers': return Layers;
    case 'ShieldCheck':
    default: return ShieldCheck;
  }
};

interface ServicesCategorySliderProps {
  lang: Language;
  currentActiveSlug?: string;
  onSelectService: (slug: string) => void;
  title?: string;
}

export const ServicesCategorySlider: React.FC<ServicesCategorySliderProps> = ({
  lang,
  currentActiveSlug,
  onSelectService,
  title
}) => {
  const isPt = lang === 'pt';
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Triple duplicate array for seamless infinite looping without any reset jumps
  const repeatedServices = [
    ...allMegaMenuServicesSliderList, 
    ...allMegaMenuServicesSliderList, 
    ...allMegaMenuServicesSliderList
  ];

  // Auto scroll effect smoothly from left to right
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let animationFrameId: number;
    const speed = 0.85; // smooth scrolling speed

    const step = () => {
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
      animationFrameId = requestAnimationFrame(step);
    };

    animationFrameId = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isPaused]);

  return (
    <div 
      className="bg-white rounded-3xl border border-slate-200/70 p-6 sm:p-8 shadow-xs relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Centered Decorative Title matching Product Category styling */}
      <div className="text-center max-w-2xl mx-auto mb-8">
        
        {/* Accent lines with teal dot: --•-- Services --•-- */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 mb-1.5">
          <div className="flex items-center gap-1.5">
            <div className="w-8 sm:w-12 h-0.5 bg-[#14B8A6]/60 rounded-full" />
            <div className="w-2 h-2 rounded-full bg-[#0D7E73]" />
            <div className="w-1 h-1 rounded-full bg-[#14B8A6]/60" />
          </div>

          <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-[#042F2C] tracking-tight">
            {title || (isPt ? 'Serviços Técnicos Especializados' : 'Explore Technical Services')}
          </h3>

          <div className="flex items-center gap-1.5">
            <div className="w-1 h-1 rounded-full bg-[#14B8A6]/60" />
            <div className="w-2 h-2 rounded-full bg-[#0D7E73]" />
            <div className="w-8 sm:w-12 h-0.5 bg-[#14B8A6]/60 rounded-full" />
          </div>
        </div>

        <p className="text-xs sm:text-sm text-slate-500 font-normal">
          {isPt ? 'Selecione uma especialidade técnica para aceder ao diagnóstico e intervenções' : 'Select a technical specialty to view specialized diagnostics & repair solutions'}
        </p>
      </div>

      {/* Slider Carousel Container with Soft Blurred Gradient Edges */}
      <div className="relative max-w-6xl mx-auto overflow-hidden">
        
        {/* Soft Blur / Gradient Fade Mask on Left Edge */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />

        {/* Soft Blur / Gradient Fade Mask on Right Edge */}
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />

        {/* Seamless Infinite Auto-scrolling horizontal list */}
        <div 
          ref={scrollContainerRef}
          className="flex items-center gap-6 sm:gap-8 md:gap-10 overflow-x-auto no-scrollbar py-4 px-4 select-none"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {repeatedServices.map((item, idx) => {
            const IconComponent = item.iconComponent;
            const isActive = currentActiveSlug === item.slug;

            return (
              <div
                key={`${item.slug}-${idx}`}
                onClick={() => onSelectService(item.slug)}
                className="shrink-0 flex flex-col items-center text-center group cursor-pointer w-28 sm:w-32 transition-transform duration-300 hover:-translate-y-1.5"
              >
                {/* Circular Icon Container matching Product Category style with soft blurred border */}
                <div className={`w-24 h-24 sm:w-28 sm:h-28 rounded-full flex items-center justify-center transition-all duration-300 mb-3 group-hover:scale-105 ${
                  isActive 
                    ? 'bg-[#CCFBF1] border-2 border-[#0D7E73] shadow-md ring-4 ring-[#0D7E73]/20' 
                    : 'bg-[#E6FAF7]/80 hover:bg-[#CCFBF1] group-hover:bg-[#CCFBF1] border border-[#CCFBF1]/70 group-hover:border-[#0D7E73]/50 shadow-sm group-hover:shadow-md'
                }`}>
                  <IconComponent />
                </div>

                {/* Service Title */}
                <span className={`text-xs sm:text-sm font-bold transition-colors leading-tight line-clamp-2 ${
                  isActive ? 'text-[#0D7E73]' : 'text-[#042F2C] group-hover:text-[#0D7E73]'
                }`}>
                  {isPt ? item.namePt : item.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
