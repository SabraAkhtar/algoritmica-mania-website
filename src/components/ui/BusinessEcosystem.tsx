import React from 'react';
import { Language } from '../../types';
import { 
  Laptop, 
  Network, 
  Server, 
  ShieldCheck, 
  RefreshCw, 
  Cloud, 
  HardDrive, 
  Cpu, 
  Sparkles,
  ArrowUpRight,
  Shield,
  CheckCircle2
} from 'lucide-react';
import { motion } from 'motion/react';
import { AnimatedHeadingText } from './AnimatedText';
import { AnimatedArrowRight } from './AnimatedArrow';
import { ActionSecondaryButton } from './AnimatedButtons';
import itSpecialistImg from '../../assets/images/it_specialist_woman_laptop_1787576223244.jpg';

interface BusinessEcosystemProps {
  lang: Language;
  onExploreSolutions?: () => void;
  onNavigateServices?: (slug?: string) => void;
}

interface FloatingService {
  id: string;
  slug: string;
  title: {
    pt: string;
    en: string;
  };
  icon: React.ComponentType<{ className?: string }>;
  desktopPosition: string;
  side: 'left' | 'right';
  floatDuration: number;
  floatDelay: number;
}

const FLOATING_SERVICES: FloatingService[] = [
  // LEFT COLUMN (4 Cards Symmetrically Distributed)
  {
    id: 'fleets',
    slug: 'it-support',
    title: {
      pt: 'Fleets & Laptops',
      en: 'Fleets & Laptops'
    },
    icon: Laptop,
    desktopPosition: 'top-[3%] left-0 xl:left-2',
    side: 'left',
    floatDuration: 4.6,
    floatDelay: 0
  },
  {
    id: 'servers',
    slug: 'it-support',
    title: {
      pt: 'Servers & SAN',
      en: 'Servers & SAN'
    },
    icon: Server,
    desktopPosition: 'top-[28%] -left-3 xl:-left-1',
    side: 'left',
    floatDuration: 5.0,
    floatDelay: 0.4
  },
  {
    id: 'cloud',
    slug: 'networking-and-configuration',
    title: {
      pt: 'Cloud & Microsoft 365',
      en: 'Cloud & Microsoft 365'
    },
    icon: Cloud,
    desktopPosition: 'top-[53%] -left-2 xl:left-0',
    side: 'left',
    floatDuration: 4.8,
    floatDelay: 0.8
  },
  {
    id: 'backups',
    slug: 'cybersecurity',
    title: {
      pt: 'Backup Solutions',
      en: 'Backup Solutions'
    },
    icon: HardDrive,
    desktopPosition: 'top-[78%] left-1 xl:left-3',
    side: 'left',
    floatDuration: 4.4,
    floatDelay: 0.2
  },

  // RIGHT COLUMN (4 Cards Symmetrically Distributed)
  {
    id: 'wifi',
    slug: 'networking-and-configuration',
    title: {
      pt: 'Switching & Wi-Fi',
      en: 'Switching & Wi-Fi'
    },
    icon: Network,
    desktopPosition: 'top-[3%] right-0 xl:right-2',
    side: 'right',
    floatDuration: 4.8,
    floatDelay: 0.3
  },
  {
    id: 'security',
    slug: 'cybersecurity',
    title: {
      pt: 'Firewall & Security',
      en: 'Firewall & Security'
    },
    icon: ShieldCheck,
    desktopPosition: 'top-[28%] -right-3 xl:-right-1',
    side: 'right',
    floatDuration: 4.5,
    floatDelay: 0.6
  },
  {
    id: 'zerotouch',
    slug: 'it-support',
    title: {
      pt: 'Zero-Touch Deployment',
      en: 'Zero-Touch Deployment'
    },
    icon: Cpu,
    desktopPosition: 'top-[53%] -right-2 xl:right-0',
    side: 'right',
    floatDuration: 5.2,
    floatDelay: 0.1
  },
  {
    id: 'itad',
    slug: 'secure-data-removal',
    title: {
      pt: 'ITAD & Buyback',
      en: 'ITAD & Buyback'
    },
    icon: RefreshCw,
    desktopPosition: 'top-[78%] right-1 xl:right-3',
    side: 'right',
    floatDuration: 4.9,
    floatDelay: 0.5
  }
];

export const BusinessEcosystem: React.FC<BusinessEcosystemProps> = ({
  lang,
  onExploreSolutions,
  onNavigateServices
}) => {
  const isPt = lang === 'pt';

  return (
    <div className="w-full flex flex-col items-center">
      
      {/* 1. COMPACT & BALANCED SECTION HEADER */}
      <div className="text-center max-w-2xl mb-6 sm:mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-[#0D7E73] bg-[#F0FDFA] border border-[#CCFBF1] mb-2.5 shadow-2xs">
          <Sparkles className="w-3.5 h-3.5 text-[#0D7E73]" />
          <span>{isPt ? 'SERVIÇOS & SOLUÇÕES DE TI' : 'OUR IT SERVICES'}</span>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-[#042F2C] leading-tight">
          <AnimatedHeadingText text="Complete" />{' '}
          <span className="text-[#0D7E73]">IT SOLUTIONS</span>
        </h2>

        <p className="text-xs sm:text-[13px] font-semibold uppercase tracking-wider text-[#64748B] mt-2">
          {isPt 
            ? 'SOLUÇÕES TECNOLÓGICAS QUE IMPULSIONAM O CRESCIMENTO DA SUA EMPRESA' 
            : 'SOLUTIONS THAT DRIVE YOUR BUSINESS FORWARD'}
        </p>
      </div>

      {/* 2. MAIN HERO STAGE: SYMMETRICAL COMPOSITION */}
      <div className="w-full max-w-7xl mb-6 sm:mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center">
          
          {/* LEFT: REFINED ILLUSTRATION STAGE WITH SYMMETRICAL FLOATING CARDS */}
          <div className="lg:col-span-7 relative flex flex-col items-center justify-center min-h-[300px] sm:min-h-[400px] lg:min-h-[480px] px-2 sm:px-4">
            
            {/* Stage Container */}
            <div className="relative w-full flex items-center justify-center py-4 sm:py-6">
              {/* Soft, Non-Dominant Background Aura */}
              <div className="absolute w-[240px] sm:w-[360px] md:w-[420px] h-[240px] sm:h-[360px] md:h-[420px] rounded-full bg-gradient-to-b from-[#E6FFFA]/90 via-[#F0FDFA]/70 to-transparent border border-[#CCFBF1]/80 shadow-[0_0_40px_rgba(204,251,241,0.5)] -z-0 pointer-events-none" />
              
              {/* Subtle Abstract Tech Rings */}
              <div className="absolute w-[280px] sm:w-[420px] md:w-[490px] h-[280px] sm:h-[420px] md:h-[490px] rounded-full border border-[#0D7E73]/10 border-dashed -z-0 pointer-events-none animate-[spin_60s_linear_infinite]" />
              <div className="absolute w-48 sm:w-72 md:w-80 h-48 sm:h-72 md:h-80 rounded-full bg-gradient-to-tr from-[#0D7E73]/8 to-[#2DD4BF]/15 blur-2xl -z-0 pointer-events-none" />

              {/* Micro Decorative Dots */}
              <div className="absolute top-6 left-12 w-2 h-2 rounded-full bg-[#14B8A6]/40 pointer-events-none hidden sm:block" />
              <div className="absolute top-10 right-14 w-2.5 h-2.5 rounded-full bg-[#5EEAD4]/50 pointer-events-none" />
              <div className="absolute bottom-10 left-14 w-2 h-2 rounded-full bg-[#0D7E73]/40 pointer-events-none hidden sm:block" />
              <div className="absolute bottom-12 right-16 w-2 h-2 rounded-full bg-amber-400/50 pointer-events-none hidden sm:block" />

              {/* Central IT Specialist Character Image (Clean & Scaled) */}
              <div className="relative z-10 w-44 sm:w-64 md:w-72 h-44 sm:h-64 md:h-72 flex items-center justify-center pointer-events-none select-none">
                <div className="relative w-40 sm:w-56 md:w-64 h-40 sm:h-56 md:h-64 rounded-full overflow-hidden border-4 border-white shadow-[0_16px_40px_-10px_rgba(13,126,115,0.25)] bg-gradient-to-b from-[#F0FDFA] to-[#CCFBF1]/40">
                  <img
                    src={itSpecialistImg}
                    alt="IT Specialist with Laptop"
                    className="w-full h-full object-cover object-top scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              {/* SYMMETRICALLY ARRANGED FLOATING SERVICE CARDS (DESKTOP ONLY) */}
              <div className="hidden lg:block">
                {FLOATING_SERVICES.map((service) => {
                  const Icon = service.icon;

                  return (
                    <motion.button
                      key={service.id}
                      type="button"
                      onClick={() => onNavigateServices?.(service.slug)}
                      animate={{
                        y: [0, -5, 0]
                      }}
                      transition={{
                        duration: service.floatDuration,
                        repeat: Infinity,
                        repeatType: 'reverse',
                        ease: 'easeInOut',
                        delay: service.floatDelay
                      }}
                      whileHover={{ 
                        scale: 1.04, 
                        y: -4,
                        transition: { duration: 0.2 }
                      }}
                      whileTap={{ scale: 0.97 }}
                      className={`absolute ${service.desktopPosition} z-20 bg-white/95 backdrop-blur-md hover:bg-white rounded-2xl py-2.5 px-3.5 xl:py-2.5 xl:px-4 shadow-[0_4px_16px_-2px_rgba(4,47,44,0.06)] hover:shadow-[0_10px_25px_-3px_rgba(13,126,115,0.15)] border border-slate-200/80 hover:border-[#0D7E73] transition-all duration-200 flex items-center gap-2.5 cursor-pointer group select-none`}
                    >
                      {/* Polished Line Icon Container */}
                      <div className="w-8 h-8 rounded-xl bg-[#F0FDFA] text-[#0D7E73] group-hover:bg-[#0D7E73] group-hover:text-white border border-[#CCFBF1] group-hover:border-[#0D7E73] flex items-center justify-center transition-colors duration-200 shrink-0">
                        <Icon className="w-4 h-4 stroke-[2.2]" />
                      </div>

                      {/* Service Title */}
                      <span className="text-xs sm:text-[13px] font-bold text-[#042F2C] group-hover:text-[#0D7E73] transition-colors whitespace-nowrap tracking-tight">
                        {service.title[lang]}
                      </span>

                      {/* Subtle Hover Animated Arrow */}
                      <ArrowUpRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-[#0D7E73] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                    </motion.button>
                  );
                })}
              </div>
            </div>

            {/* SERVICES GRID FOR TABLET & MOBILE SCREENS (Directly under the circle) */}
            <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2.5 lg:hidden mt-3 mb-2 z-10">
              {FLOATING_SERVICES.map((service) => {
                const Icon = service.icon;
                return (
                  <button
                    key={service.id}
                    type="button"
                    onClick={() => onNavigateServices?.(service.slug)}
                    className="p-2.5 sm:p-3 rounded-xl bg-white border border-slate-200 hover:border-[#0D7E73] shadow-xs active:bg-[#F0FDFA] flex items-center gap-2 text-left cursor-pointer transition-all duration-200 group"
                  >
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#F0FDFA] text-[#0D7E73] group-hover:bg-[#0D7E73] group-hover:text-white border border-[#CCFBF1] flex items-center justify-center shrink-0 transition-colors">
                      <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.2]" />
                    </div>
                    <span className="text-[11px] sm:text-xs font-bold text-[#042F2C] group-hover:text-[#0D7E73] truncate leading-tight">
                      {service.title[lang]}
                    </span>
                  </button>
                );
              })}
            </div>

          </div>

          {/* RIGHT: EDITORIAL HEADLINE & PROMINENT ENTERPRISE CTA */}
          <div className="lg:col-span-5 flex flex-col justify-center text-left">
            
            {/* Enterprise Partner Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold text-[#0D7E73] bg-[#F0FDFA] border border-[#CCFBF1] w-fit mb-3.5 shadow-2xs">
              <Shield className="w-3.5 h-3.5 text-[#0D7E73]" />
              <span>{isPt ? 'INFRAESTRUTURA DE TI PARA EMPRESAS' : 'ENTERPRISE IT PARTNER'}</span>
            </div>

            {/* Balanced Impact Headline */}
            <h3 className="text-2xl sm:text-3xl lg:text-[2.2rem] font-black text-[#042F2C] tracking-tight leading-[1.18] mb-3.5 max-w-xl">
              {isPt 
                ? 'Tudo o que a sua empresa precisa num único parceiro de confiança.' 
                : 'Everything your business needs from a single trusted partner.'}
            </h3>

            {/* Readable Paragraph */}
            <p className="text-sm text-slate-600 leading-relaxed mb-5 max-w-lg">
              {isPt
                ? 'Fornecemos frotas de equipamentos, segurança perimetral, redes de alta velocidade e suporte técnico direto com tempos de resposta ultrarrápidos.'
                : 'Providing certified fleets, perimeter cybersecurity, high-throughput networking, and dedicated engineering support with guaranteed SLAs.'}
            </p>

            {/* Quick 3 Value Checkmarks with Better Breathing Room */}
            <div className="space-y-2.5 mb-6">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-[#042F2C]">
                <div className="w-5 h-5 rounded-full bg-[#F0FDFA] border border-[#CCFBF1] flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0D7E73]" />
                </div>
                <span>{isPt ? 'Até 70% de poupança direta em frotas corporativas' : 'Up to 70% direct savings on corporate fleets'}</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-[#042F2C]">
                <div className="w-5 h-5 rounded-full bg-[#F0FDFA] border border-[#CCFBF1] flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0D7E73]" />
                </div>
                <span>{isPt ? 'Garantia de 12 a 36 meses com substituição em 24h' : '12 to 36 months warranty with 24h rapid swap'}</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-[#042F2C]">
                <div className="w-5 h-5 rounded-full bg-[#F0FDFA] border border-[#CCFBF1] flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0D7E73]" />
                </div>
                <span>{isPt ? 'Apoio técnico dedicado por engenheiros locais' : 'Dedicated support by local certified engineers'}</span>
              </div>
            </div>

            {/* High-Contrast Conversion CTA Button */}
            <div className="flex flex-wrap items-center gap-3">
              {onExploreSolutions && (
                <ActionSecondaryButton
                  type="button"
                  onClick={onExploreSolutions}
                  size="lg"
                  className="bg-[#F0FDFA] hover:bg-[#CCFBF1] border border-[#CCFBF1]"
                >
                  {isPt ? 'Pedir Proposta para a Empresa' : 'Request Corporate Proposal'}
                </ActionSecondaryButton>
              )}
            </div>

          </div>

        </div>
      </div>

    </div>
  );
};

