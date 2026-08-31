import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Language, ProductCategory } from '../../types';
import { 
  ShieldCheck, 
  ChevronLeft, 
  ChevronRight, 
  ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// High Quality Realistic Images for the 6 Enterprise Services
import dellServerImg from '../../assets/images/dell_poweredge_server_1787655346659.jpg';
import ciscoSwitchImg from '../../assets/images/cisco_switch_hardware_1787655369164.jpg';
import fortinetFirewallImg from '../../assets/images/fortinet_firewall_device_1787655389959.jpg';
import synologyNasImg from '../../assets/images/synology_nas_storage_1787655421039.jpg';
import cloudInfrastructureImg from '../../assets/images/cloud_infrastructure_1787655443022.jpg';
import managedItEngineerImg from '../../assets/images/managed_it_engineer_1787655469398.jpg';

interface WhatWeDoSectionProps {
  lang: Language;
  onNavigateProducts: (cat?: ProductCategory) => void;
  onNavigateServices: (slug?: string) => void;
  onNavigateSolutions: () => void;
  onNavigateSellEquipment: () => void;
}

interface ServiceCardData {
  id: string;
  titleEn: string;
  titlePt: string;
  descEn: string;
  descPt: string;
  image: string;
  imageAlt: string;
  onClick: () => void;
}

export const WhatWeDoSection: React.FC<WhatWeDoSectionProps> = ({
  lang,
  onNavigateProducts,
  onNavigateServices,
  onNavigateSolutions
}) => {
  const isPt = lang === 'pt';
  const [currentIndex, setCurrentIndex] = useState(1); // Default center on Networking / Cyber Security (index 1 or 2)
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // 6 Specified Enterprise IT Services
  const services: ServiceCardData[] = [
    {
      id: 'enterprise-servers',
      titleEn: 'Enterprise Servers',
      titlePt: 'Servidores Empresariais',
      descEn: 'High-performance enterprise servers for demanding workloads.',
      descPt: 'Servidores empresariais de alto desempenho para cargas exigentes.',
      image: dellServerImg,
      imageAlt: 'Dell PowerEdge Rack Server',
      onClick: () => onNavigateProducts('servers-storage')
    },
    {
      id: 'networking-solutions',
      titleEn: 'Networking Solutions',
      titlePt: 'Soluções de Redes',
      descEn: 'Reliable switching, routing and wireless infrastructure.',
      descPt: 'Comutação fiável, encaminhamento e infraestrutura de rede robusta.',
      image: ciscoSwitchImg,
      imageAlt: 'Cisco Enterprise Switch',
      onClick: () => onNavigateProducts('networking')
    },
    {
      id: 'cyber-security',
      titleEn: 'Cyber Security',
      titlePt: 'Cibersegurança',
      descEn: 'Firewall, VPN and advanced endpoint protection.',
      descPt: 'Firewall empresarial, VPN e proteção avançada de endpoints.',
      image: fortinetFirewallImg,
      imageAlt: 'Fortinet Firewall Appliance',
      onClick: () => onNavigateServices('cybersecurity')
    },
    {
      id: 'storage-backup',
      titleEn: 'Storage & Backup',
      titlePt: 'Armazenamento & Backup',
      descEn: 'Reliable storage, backup and disaster recovery.',
      descPt: 'Armazenamento fiável, cópias de segurança e recuperação de dados.',
      image: synologyNasImg,
      imageAlt: 'Synology NAS Storage Server',
      onClick: () => onNavigateProducts('servers-storage')
    },
    {
      id: 'cloud-solutions',
      titleEn: 'Cloud Solutions',
      titlePt: 'Soluções Cloud',
      descEn: 'Secure cloud deployment and migration solutions.',
      descPt: 'Implementação, transição e gestão segura em infraestruturas cloud.',
      image: cloudInfrastructureImg,
      imageAlt: 'Modern Enterprise Cloud Infrastructure',
      onClick: () => onNavigateSolutions()
    },
    {
      id: 'managed-it-services',
      titleEn: 'Managed IT Services',
      titlePt: 'Serviços de TI Geridos',
      descEn: '24/7 monitoring, maintenance and enterprise support.',
      descPt: 'Monitorização 24/7, manutenção preventiva e assistência contínua.',
      image: managedItEngineerImg,
      imageAlt: 'Professional IT Engineer working inside a modern data center',
      onClick: () => onNavigateServices('maintenance-repair')
    }
  ];

  const totalCards = services.length;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalCards);
  }, [totalCards]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalCards) % totalCards);
  }, [totalCards]);

  // Auto Scroll with 4.5s Interval (pauses on hover or during drag)
  useEffect(() => {
    if (isHovered || isDragging) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 4500);
    return () => clearInterval(interval);
  }, [isHovered, isDragging, nextSlide]);

  // Mouse & Touch Drag Gestures
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setDragStartX(e.touches[0].clientX);
    setDragOffset(0);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const currentX = e.touches[0].clientX;
    setDragOffset(currentX - dragStartX);
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    if (dragOffset < -45) {
      nextSlide();
    } else if (dragOffset > 45) {
      prevSlide();
    }
    setIsDragging(false);
    setDragOffset(0);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStartX(e.clientX);
    setDragOffset(0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setDragOffset(e.clientX - dragStartX);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    if (dragOffset < -50) {
      nextSlide();
    } else if (dragOffset > 50) {
      prevSlide();
    }
    setIsDragging(false);
    setDragOffset(0);
  };

  // Helper to calculate circular relative offset (-2, -1, 0, 1, 2)
  const getCardOffset = (index: number) => {
    let diff = (index - currentIndex) % totalCards;
    if (diff > totalCards / 2) diff -= totalCards;
    if (diff < -totalCards / 2) diff += totalCards;
    return diff;
  };

  return (
    <section 
      id="enterprise-it-solutions-section"
      className="py-10 sm:py-12 lg:py-14 bg-[#F8FBFC] relative overflow-hidden select-none border-b border-slate-200/60"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setIsDragging(false);
      }}
    >
      {/* Background Soft Glow Accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-b from-[#0F8F83]/5 via-[#0F8F83]/2 to-transparent rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute -top-10 left-10 w-60 h-60 bg-[#0F8F83]/3 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute -bottom-10 right-10 w-60 h-60 bg-[#0F8F83]/4 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ========================================================
            1. SECTION HEADER (COMPACT)
           ======================================================== */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
          
          {/* Badge: 🛡 Enterprise IT Solutions */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white border border-[#0F8F83]/25 text-[#0F8F83] shadow-xs mb-2.5">
            <ShieldCheck className="w-3.5 h-3.5 text-[#0F8F83]" />
            <span>{isPt ? 'Soluções TI Empresariais' : 'Enterprise IT Solutions'}</span>
          </div>

          {/* Main Heading: Everything Your Business Needs */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-black tracking-tight leading-tight mb-2.5 text-[#0B1E2D]">
            {isPt ? (
              <>
                Tudo o Que o Seu Negócio <span className="text-[#0D7E73]">Precisa</span>
              </>
            ) : (
              <>
                Everything Your Business <span className="text-[#0D7E73]">Needs</span>
              </>
            )}
          </h2>

          {/* Description */}
          <p className="text-xs sm:text-sm md:text-base text-[#6B7280] leading-relaxed max-w-2xl mx-auto">
            {isPt
              ? 'Desde hardware empresarial a cibersegurança, redes, infraestrutura cloud e serviços de TI geridos concebidos para empresas modernas.'
              : 'From enterprise hardware to cybersecurity, networking, cloud infrastructure and managed IT services designed for modern businesses.'}
          </p>
        </div>

        {/* ========================================================
            2. CAROUSEL STAGE CONTAINER (COMPACT HEIGHT)
           ======================================================== */}
        <div 
          ref={containerRef}
          className="relative w-full h-[420px] sm:h-[440px] flex items-center justify-center cursor-grab active:cursor-grabbing px-2 py-4"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
        >
          {/* Cards Loop Render */}
          <div className="relative w-full h-full flex items-center justify-center">
            {services.map((service, index) => {
              const offset = getCardOffset(index);
              const isCenter = offset === 0;
              const isLeft = offset === -1;
              const isRight = offset === 1;

              // Compute smooth continuous horizontal translation values
              let translateX = offset * 340;
              let scale = 0.88;
              let opacity = 0.65;
              let zIndex = 10;
              let blurAmount = 'blur(0.8px)';
              let translateY = 4;

              if (isCenter) {
                scale = 1.08;
                opacity = 1;
                zIndex = 30;
                blurAmount = 'blur(0px)';
                translateY = -8; // Slightly elevated hero card
              } else if (isLeft || isRight) {
                scale = 0.88;
                opacity = 0.72;
                zIndex = 20;
                blurAmount = 'blur(0.5px)';
                translateY = 4;
              } else {
                // Outer cards hidden outside viewport
                opacity = 0;
                zIndex = 1;
                translateX = offset > 0 ? 800 : -800;
                scale = 0.7;
              }

              return (
                <div
                  key={service.id}
                  onClick={() => {
                    if (isCenter) {
                      service.onClick();
                    } else if (isLeft) {
                      prevSlide();
                    } else if (isRight) {
                      nextSlide();
                    }
                  }}
                  style={{
                    transform: `translate3d(${translateX}px, ${translateY}px, 0px) scale(${scale})`,
                    opacity: opacity,
                    zIndex: zIndex,
                    filter: blurAmount,
                    transition: isDragging ? 'none' : 'transform 600ms cubic-bezier(0.4, 0, 0.2, 1), opacity 600ms ease-in-out, filter 600ms ease-in-out'
                  }}
                  className={`absolute top-1/2 -translate-y-1/2 w-[290px] sm:w-[320px] h-[360px] sm:h-[380px] bg-white rounded-2xl transition-all duration-300 overflow-hidden flex flex-col justify-between ${
                    isCenter 
                      ? 'shadow-[0_10px_25px_-5px_rgba(13,126,115,0.12),0_4px_10px_-2px_rgba(4,47,44,0.05)] border border-[#0D7E73]/40 ring-2 ring-[#0D7E73]/10 cursor-pointer' 
                      : 'shadow-[0_4px_14px_-3px_rgba(4,47,44,0.05)] border border-slate-200/80 cursor-pointer hover:opacity-90'
                  }`}
                >
                  {/* Top (55%): Realistic Hardware / Enterprise Photography */}
                  <div className="relative w-full h-[54%] bg-gradient-to-b from-[#F8FBFC] to-white p-3.5 flex items-center justify-center overflow-hidden border-b border-slate-100">
                    <img
                      src={service.image}
                      alt={service.imageAlt}
                      className="w-full h-full object-contain drop-shadow-md select-none transform group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Subtle Top-Right Accent Tag for Center Card */}
                    {isCenter && (
                      <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-[#0F8F83] text-white text-[9px] font-bold tracking-wider uppercase shadow-xs">
                        Featured
                      </div>
                    )}
                  </div>

                  {/* Content Container (Middle, Bottom, Footer) */}
                  <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between text-left">
                    
                    {/* Middle: Service Title */}
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-[#0B1E2D] mb-1 tracking-tight group-hover:text-[#0F8F83] transition-colors">
                        {isPt ? service.titlePt : service.titleEn}
                      </h3>

                      {/* Bottom: Short Description (max 2 lines) */}
                      <p className="text-xs sm:text-[13px] text-[#6B7280] leading-snug line-clamp-2">
                        {isPt ? service.descPt : service.descEn}
                      </p>
                    </div>

                    {/* Footer: Learn More → */}
                    <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between">
                      <span className="inline-flex items-center gap-1 text-xs sm:text-sm font-bold text-[#0F8F83] group-hover:translate-x-1 transition-transform">
                        <span>{isPt ? 'Saber Mais' : 'Learn More'}</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#0F8F83]" />
                      </span>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

          {/* Left Arrow Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevSlide();
            }}
            aria-label="Previous Slide"
            className="absolute left-1 sm:left-4 lg:left-8 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/95 hover:bg-white border border-slate-200/90 text-[#0B1E2D] hover:text-[#0F8F83] flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-200 z-40 hover:scale-110 cursor-pointer active:scale-95"
          >
            <ChevronLeft className="w-5 h-5 stroke-[2.2]" />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextSlide();
            }}
            aria-label="Next Slide"
            className="absolute right-1 sm:right-4 lg:right-8 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/95 hover:bg-white border border-slate-200/90 text-[#0B1E2D] hover:text-[#0F8F83] flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-200 z-40 hover:scale-110 cursor-pointer active:scale-95"
          >
            <ChevronRight className="w-5 h-5 stroke-[2.2]" />
          </button>

        </div>

      </div>
    </section>
  );
};

