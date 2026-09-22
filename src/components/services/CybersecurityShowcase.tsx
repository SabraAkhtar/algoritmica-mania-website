import React, { useRef, useEffect, useState } from 'react';
import { Language, ServiceItem } from '../../types';
import { 
  ShieldCheck, 
  Lock, 
  ArrowRight, 
  MessageSquare, 
  FileText, 
  ShieldAlert, 
  Key, 
  HardDrive, 
  Fingerprint,
  ChevronLeft,
  ChevronRight,
  Shield,
  Layers
} from 'lucide-react';
import { companyData } from '../../data/company';

interface CybersecurityShowcaseProps {
  service: ServiceItem;
  lang: Language;
  onRequestQuote: () => void;
}

export const CybersecurityShowcase: React.FC<CybersecurityShowcaseProps> = ({
  service,
  lang,
  onRequestQuote
}) => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  const isPt = lang === 'pt';

  const whatsappInquiryUrl = `https://wa.me/${companyData.whatsappNumber}?text=${encodeURIComponent(
    isPt 
      ? `Olá Algoritmica Mania, gostaria de obter uma proposta e auditoria de Cibersegurança para a minha empresa.`
      : `Hello Algoritmica Mania, I would like to request a Cybersecurity audit & proposal for my business.`
  )}`;

  // Essential Paired Cards (Exact match to reference image with real company content)
  const basePairedCards = [
    {
      id: 'ransomware',
      topic: isPt ? 'Proteção Anti-Ransomware & Perímetro' : 'Anti-Ransomware & Perimeter Defense',
      badge: isPt ? 'Blindagem 24/7' : '24/7 Shield',
      icon: ShieldAlert,
      youNeed: {
        pill: 'You Need',
        text: isPt 
          ? 'Uma barreira impenetrável contra ransomware, sequestro de dados e tentativas de invasão externa.'
          : 'A team and infrastructure that knows enterprise perimeter defense and zero-trust ransomware prevention inside out.'
      },
      we: {
        pill: 'We',
        text: isPt
          ? 'Implementamos firewalls de hardware dedicadas (Fortinet / Sophos) com inspeção SSL contínua e bloqueio automático de ameaças.'
          : 'Deploy dedicated next-generation hardware firewalls (Fortinet & Sophos) with continuous packet inspection and automated threat isolation.'
      }
    },
    {
      id: 'vpn',
      topic: isPt ? 'Acesso Remoto Seguro & VPN' : 'Encrypted Remote Work & VPN',
      badge: isPt ? 'Trabalho Remoto' : 'Remote Access',
      icon: Key,
      youNeed: {
        pill: 'You Need',
        text: isPt
          ? 'Acesso remoto aos servidores e ficheiros internos para a sua equipa sem expor portas vulneráveis à internet.'
          : 'A secure way for remote teams and branch offices to access internal servers without opening vulnerable ports.'
      },
      we: {
        pill: 'We',
        text: isPt
          ? 'Configuramos túneis VPN encriptados de nível bancário (WireGuard / IPsec) com autenticação de dois fatores (2FA).'
          : 'Configure bank-grade encrypted VPN tunnels (WireGuard / IPsec) with mandatory multi-factor authentication and session security.'
      }
    },
    {
      id: 'backups',
      topic: isPt ? 'Backups Imutáveis & Continuidade' : 'Immutable Backups & Continuity',
      badge: isPt ? 'Recuperação Zero Perda' : 'Zero-Loss Recovery',
      icon: HardDrive,
      youNeed: {
        pill: 'You Need',
        text: isPt
          ? 'Garantia total de que os dados de faturação e ficheiros vitais nunca serão corrompidos ou perdidos em caso de falha.'
          : 'Absolute guarantee that financial records, databases, and critical company assets can never be wiped or held hostage.'
      },
      we: {
        pill: 'We',
        text: isPt
          ? 'Criamos repositórios de backup isolados (Air-Gapped e Imutáveis) com recuperação instantânea de desastres em minutos.'
          : 'Build air-gapped immutable backup repositories that prohibit unauthorized tampering, achieving instant disaster recovery.'
      }
    },
    {
      id: 'edr',
      topic: isPt ? 'Proteção de Postos (EDR) & RGPD' : 'Endpoint Protection (EDR) & GDPR',
      badge: isPt ? 'Conformidade RGPD' : 'GDPR Compliance',
      icon: Fingerprint,
      youNeed: {
        pill: 'You Need',
        text: isPt
          ? 'Monitorização ativa de todos os computadores contra ficheiros infetados, phishing por email e total conformidade RGPD.'
          : 'Continuous workstation telemetry preventing malware, email phishing fraud, and ensuring strict regulatory GDPR compliance.'
      },
      we: {
        pill: 'We',
        text: isPt
          ? 'Monitorizamos os seus endpoints em tempo real com EDR gerido, formação preventiva e suporte técnico de resposta rápida.'
          : 'Deliver real-time managed EDR endpoint protection with active telemetry and priority incident response under 2 hours.'
      }
    },
    {
      id: 'dmz-network',
      topic: isPt ? 'Segregação de Rede DMZ & VLANs' : 'DMZ Network Segregation & VLANs',
      badge: isPt ? 'Isolamento de Tráfego' : 'Traffic Isolation',
      icon: Layers,
      youNeed: {
        pill: 'You Need',
        text: isPt
          ? 'Isolar a rede Wi-Fi de convidados e dispositivos IoT para que nunca alcancem a base de dados central.'
          : 'Strict isolation of guest Wi-Fi and smart IoT hardware so they can never traverse into the central corporate database.'
      },
      we: {
        pill: 'We',
        text: isPt
          ? 'Estruturamos VLANs segregadas com regras de firewall L3/L4 restritas e controlo de acessos por endereço MAC.'
          : 'Architect segregated VLANs with strict Layer 3/4 firewall inspection and authenticated network access controls.'
      }
    }
  ];

  // Repeat for seamless continuous infinite scroll (3 sets)
  const duplicatedCards = [...basePairedCards, ...basePairedCards, ...basePairedCards];

  // 🔄 Continuous auto-scroll loop (matching CategoryCircleShowcase animation)
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let animationFrameId: number;
    const scrollSpeed = 0.75; // Smooth continuous glide speed (pixels per frame)

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
    const distance = 420;
    scrollContainerRef.current.scrollBy({
      left: direction === 'left' ? -distance : distance,
      behavior: 'smooth'
    });
  };

  return (
    <div className="w-full relative pb-12">
      
      {/* 🌿 BRAND AMBIENT CANVAS (Soft Teal, Mint & Emerald brand palette) */}
      <div className="relative rounded-[36px] sm:rounded-[48px] bg-gradient-to-b from-[#F0FDFA] via-[#F8FAFC] to-[#F0FDFA] border border-teal-100/90 py-8 sm:py-12 overflow-hidden shadow-xl shadow-teal-950/5 mb-10">
        
        {/* Soft brand atmospheric background glow bubbles */}
        <div className="absolute -top-24 left-1/4 w-[450px] h-[350px] bg-[#99F6E4]/40 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 right-10 w-[400px] h-[350px] bg-[#5EEAD4]/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 left-10 w-[350px] h-[300px] bg-[#CCFBF1]/40 rounded-full blur-3xl pointer-events-none" />

        {/* Header Title Section */}
        <div className="relative z-10 text-center max-w-2xl mx-auto mb-8 sm:mb-12 px-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-teal-200/70 text-xs font-bold uppercase tracking-wider mb-4 text-[#0D7E73] shadow-xs">
            <Lock className="w-3.5 h-3.5 text-[#0D7E73]" />
            <span>{isPt ? 'Cibersegurança Empresarial' : 'Enterprise Cybersecurity'}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0F172A] mb-3">
            {service.title}
          </h1>

          <p className="text-sm sm:text-base text-[#475569] max-w-xl mx-auto leading-relaxed">
            {isPt 
              ? 'Proteção perimétrica, túneis VPN e backups à prova de ransomware desenhados à medida do seu negócio.'
              : 'Enterprise defense, VPN encryption, and immutable backups tailored specifically to protect your business.'}
          </p>
        </div>

        {/* 🌟 CONTINUOUS HORIZONTAL SCROLLING TRACK (EXACTLY LIKE CATEGORY SCROLL) */}
        <div 
          className="relative group/cyber-slider overflow-hidden my-4"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          {/* Left Edge Soft Gradient Fade / Blur Mask */}
          <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 md:w-32 bg-gradient-to-r from-[#F0FDFA] via-[#F0FDFA]/80 to-transparent pointer-events-none z-20" />

          {/* Right Edge Soft Gradient Fade / Blur Mask */}
          <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 md:w-32 bg-gradient-to-l from-[#F0FDFA] via-[#F0FDFA]/80 to-transparent pointer-events-none z-20" />

          {/* Left Arrow Button */}
          <button
            onClick={() => handleManualScroll('left')}
            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-white/95 backdrop-blur-md border border-[#CCFBF1] text-[#042F2C] hover:bg-[#F0FDFA] hover:text-[#0D7E73] flex items-center justify-center shadow-lg transition-all cursor-pointer opacity-90 group-hover/cyber-slider:opacity-100 hover:scale-105"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={() => handleManualScroll('right')}
            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-white/95 backdrop-blur-md border border-[#CCFBF1] text-[#042F2C] hover:bg-[#F0FDFA] hover:text-[#0D7E73] flex items-center justify-center shadow-lg transition-all cursor-pointer opacity-90 group-hover/cyber-slider:opacity-100 hover:scale-105"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Continuous Sliding Scroll Container */}
          <div 
            ref={scrollContainerRef}
            className="flex items-stretch gap-6 sm:gap-8 overflow-x-auto no-scrollbar py-6 px-8 sm:px-16 select-none cursor-grab active:cursor-grabbing"
            style={{ scrollBehavior: 'auto' }}
          >
            {duplicatedCards.map((item, index) => (
              <div 
                key={`${item.id}-${index}`}
                className="w-[340px] sm:w-[410px] shrink-0 relative flex flex-col justify-center"
              >
                
                {/* 🔗 THE PAIRED NOTEBOOK CARDS (REFERENCE IMAGE 100% FAITHFUL REPLICA) */}
                <div className="relative py-4 px-2">
                  
                  {/* Top Card: "You Need" */}
                  <div className="relative z-10 transform -rotate-1 transition-transform duration-300 hover:rotate-0">
                    
                    {/* Pill Tag ("You Need") in Website's Signature Teal/Emerald Gradient */}
                    <div className="absolute left-6 sm:left-7 -top-3.5 z-20">
                      <div className="px-4 sm:px-5 py-1.5 rounded-2xl bg-gradient-to-r from-[#0D7E73] via-[#0F766E] to-[#14B8A6] text-white text-xs sm:text-sm font-extrabold shadow-md shadow-teal-900/20 tracking-wide">
                        {item.youNeed.pill}
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="relative bg-white rounded-[24px] sm:rounded-[32px] p-5 sm:p-7 pt-7 sm:pt-9 border border-teal-100/80 shadow-[0_15px_35px_rgba(13,126,115,0.06)] min-h-[120px] flex items-center">
                      <p className="text-xs sm:text-sm font-semibold text-[#334155] leading-relaxed">
                        {item.youNeed.text}
                      </p>

                      {/* Bottom-left Punch Hole */}
                      <div className="absolute left-6 sm:left-7 -bottom-3 w-5 h-5 rounded-full bg-[#CCFBF1] border-2 border-white shadow-inner flex items-center justify-center z-10">
                        <div className="w-2 h-2 rounded-full bg-[#0D7E73]/60" />
                      </div>
                    </div>

                  </div>

                  {/* 🌿 PHYSICAL KEYCHAIN / SPIRAL RING WIRE CONNECTOR IN BRAND COLORS */}
                  <div className="absolute left-7 sm:left-8 top-[44%] z-30 pointer-events-none">
                    <svg width="28" height="56" viewBox="0 0 34 68" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-md">
                      {/* Spiral Loop Wire (Brand Teal) */}
                      <path 
                        d="M17 4 C30 10, 32 30, 16 38 C4 46, 6 60, 17 64" 
                        stroke="#0D7E73" 
                        strokeWidth="5" 
                        strokeLinecap="round" 
                      />
                      {/* Metallic highlight (Brand Mint) */}
                      <path 
                        d="M17 4 C28 10, 30 28, 16 38" 
                        stroke="#5EEAD4" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                      />
                    </svg>
                  </div>

                  {/* Bottom Card: "We" */}
                  <div className="relative z-10 mt-5 sm:mt-6 ml-4 sm:ml-8 transform rotate-1 transition-transform duration-300 hover:rotate-0">
                    
                    {/* Pill Tag ("We") in Website's Signature Teal/Emerald Gradient */}
                    <div className="absolute right-5 sm:right-7 -top-3.5 z-20">
                      <div className="px-5 sm:px-6 py-1.5 rounded-2xl bg-gradient-to-r from-[#0D7E73] via-[#0F766E] to-[#14B8A6] text-white text-xs sm:text-sm font-extrabold shadow-md shadow-teal-900/20 tracking-wide">
                        {item.we.pill}
                      </div>
                    </div>

                    {/* Top-left Punch Hole */}
                    <div className="absolute left-2.5 sm:left-3 -top-2.5 w-5 h-5 rounded-full bg-[#CCFBF1] border-2 border-white shadow-inner flex items-center justify-center z-10">
                      <div className="w-2 h-2 rounded-full bg-[#0D7E73]/60" />
                    </div>

                    {/* Card Body */}
                    <div className="bg-white rounded-[24px] sm:rounded-[32px] p-5 sm:p-7 pt-7 sm:pt-9 border border-teal-100/80 shadow-[0_15px_35px_rgba(13,126,115,0.06)] min-h-[120px] flex items-center">
                      <p className="text-xs sm:text-sm font-semibold text-[#1E293B] leading-relaxed">
                        {item.we.text}
                      </p>
                    </div>

                  </div>

                </div>

              </div>
            ))}
          </div>

        </div>

      </div>

      {/* 🏛️ BOTTOM ACTION STRIP (CLEAN & INTEGRATED) */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-[#F0FDFA] border border-[#CCFBF1] text-[#0D7E73] flex items-center justify-center shrink-0 shadow-xs">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-sm sm:text-base font-extrabold text-[#0F172A]">
              {isPt ? 'Auditoria de Cibersegurança & Implementação' : 'Cybersecurity Audit & Deployment'}
            </h3>
            <p className="text-xs text-[#64748B] mt-0.5">
              {companyData.fullAddress} • SLA &lt; 2h
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={onRequestQuote}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl text-xs sm:text-sm font-bold text-white bg-[#0D7E73] hover:bg-[#0F766E] transition-all shrink-0 cursor-pointer shadow-md hover:shadow-lg active:scale-95"
          >
            <FileText className="w-4 h-4" />
            <span>{isPt ? 'Pedir Proposta' : 'Request Quote'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href={whatsappInquiryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3.5 rounded-2xl text-xs sm:text-sm font-bold text-[#0D7E73] bg-[#F0FDFA] hover:bg-[#CCFBF1] border border-[#CCFBF1] transition-colors"
          >
            <MessageSquare className="w-4 h-4" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>

    </div>
  );
};
