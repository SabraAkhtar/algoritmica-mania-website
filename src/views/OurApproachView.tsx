import React from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { ActionPrimaryButton } from '../components/ui/AnimatedButtons';
import { 
  Search, 
  Cpu, 
  Wrench, 
  ShieldCheck, 
  ArrowRight
} from 'lucide-react';
import { motion } from 'motion/react';
import teamCollageColorImg from '../assets/images/it_team_color_natural_1787650390936.jpg';

interface OurApproachViewProps {
  lang: Language;
  onRequestQuote: () => void;
  onNavigateContact?: () => void;
  onNavigateServices?: () => void;
  onNavigateSolutions?: () => void;
}

export const OurApproachView: React.FC<OurApproachViewProps> = ({
  lang,
  onRequestQuote,
  onNavigateServices,
  onNavigateSolutions
}) => {
  const isPt = lang === 'pt';
  const t = translations[lang]?.approachPage || {
    title: isPt ? 'A Nossa Abordagem Técnica' : 'Our Engineering Approach',
    sub: isPt 
      ? 'Uma metodologia estruturada em 4 etapas que garante que cada projeto IT é auditado, dimensionado, configurado e protegido à medida pela equipa técnica da Algorítmica Mania na Trofa.'
      : 'A structured 4-phase technical roadmap that ensures every IT deployment is properly audited, dimensioned, configured, and secured by Algorítmica Mania.',
    step1Title: isPt ? '1. Entender & Auditar' : '1. Understand & Audit',
    step1Desc: isPt
      ? 'Avaliamos o parque informático atual, cargas de trabalho, pontos de estrangulamento de rede e metas orçamentais da sua empresa.'
      : 'We assess your current fleet workloads, network bottlenecks, and budget requirements to design a tailored infrastructure plan.',
    step2Title: isPt ? '2. Recomendar & Dimensionar' : '2. Recommend & Dimension',
    step2Desc: isPt
      ? 'Especificamos a configuração ideal (CPU, RAM, tiering NVMe, capacidade de switching) eliminando custos de licenciamento desnecessários.'
      : 'We specify the exact hardware specs (CPU, RAM, NVMe tiering, switch capacity) eliminating unnecessary licensing costs.',
    step3Title: isPt ? '3. Configurar em Laboratório & Burn-in' : '3. Lab Configure & Burn-in',
    step3Desc: isPt
      ? 'Cada equipamento é preparado na Trofa com imagem de SO limpa, drivers certificados e testes de stress contínuo de 72 horas.'
      : 'Every unit is staged in our Trofa lab with clean OS imaging, firmware updates, and 72-hour stress testing before dispatch.',
    step4Title: isPt ? '4. Proteger & Acompanhar' : '4. Protect & Support',
    step4Desc: isPt
      ? 'Implementamos regras de firewall, rotinas de backup imutável 3-2-1 e garantia de substituição direta de hardware até 36 meses.'
      : 'We deploy firewall rules, immutable backup systems, and provide up to 36 months direct hardware replacement warranty.'
  };

  // Concise, fast-to-convey 4 cards matching the clean reference card style
  const simpleCards = [
    {
      icon: Search,
      title: isPt ? 'Entender & Auditar' : 'Audit & Analysis',
      subtitle: isPt ? 'Avaliação rápida do parque e cargas de trabalho.' : 'Fast fleet & workload assessment.'
    },
    {
      icon: Cpu,
      title: isPt ? 'Recomendar & Dimensionar' : 'Dimension & Specs',
      subtitle: isPt ? 'Hardware sob medida sem custos supérfluos.' : 'Tailored specs with zero bloated fees.'
    },
    {
      icon: Wrench,
      title: isPt ? 'Configuração & Burn-in' : 'Lab Setup & Testing',
      subtitle: isPt ? 'Bancada técnica e 72h de testes de stress.' : 'Bench staging & 72h stress burn-in.'
    },
    {
      icon: ShieldCheck,
      title: isPt ? 'Proteger & Garantir' : 'Protect & Warranty',
      subtitle: isPt ? 'Backups 3-2-1 e garantia até 36 meses.' : '3-2-1 backups & up to 36m warranty.'
    }
  ];

  return (
    <div className="w-full bg-[#FAFCFC] min-h-screen text-[#042F2C] relative overflow-hidden">
      
      {/* ========================================================
          1. HERO SECTION (Vibrant Full Natural Color + Reference Layout)
         ======================================================== */}
      <section className="py-14 sm:py-20 lg:py-24 bg-white border-b border-slate-200/80 relative overflow-hidden">
        
        {/* Soft Background Accents */}
        <div className="absolute top-10 left-1/3 w-96 h-96 bg-[#F0FDFA]/80 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-6 right-10 w-48 h-48 bg-[radial-gradient(#0D7E73_1.5px,transparent_1.5px)] [background-size:14px_14px] opacity-25 pointer-events-none hidden sm:block" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* LEFT COLUMN: Eyebrow Pill + Main Heading + Subtext + CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, x: -25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-6 flex flex-col items-start text-left"
            >
              
              {/* Eyebrow Pill with Dual Dot/Pill Icon */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100/90 border border-slate-200/80 text-xs sm:text-sm font-bold text-[#042F2C] mb-6 shadow-2xs">
                <div className="flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#042F2C]" />
                </div>
                <span className="tracking-wide">
                  {isPt ? 'Eleve a Infraestrutura da sua Empresa' : 'Elevate Your IT Infrastructure With Us'}
                </span>
              </div>

              {/* Large Bold Editorial Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-black tracking-tight text-[#042F2C] leading-[1.12] mb-6">
                {isPt ? (
                  <>
                    Como Ajudamos a Sua Empresa com <span className="text-[#0D7E73]">Soluções de TI</span>
                  </>
                ) : (
                  <>
                    How We Help Your Business with <span className="text-[#0D7E73]">Dedicated IT Solutions</span>
                  </>
                )}
              </h1>

              {/* Body Text */}
              <p className="text-sm sm:text-base text-[#64748B] leading-relaxed max-w-xl mb-8 font-medium">
                {isPt
                  ? 'Uma metodologia técnica estruturada em 4 fases rigorosas que assegura que todo o hardware empresarial, servidores e redes são auditados, dimensionados, configurados em bancada e protegidos com suporte direto na Trofa.'
                  : 'A structured 4-phase technical roadmap that ensures every IT deployment is properly audited, dimensioned, bench-configured, and secured with direct warranty from our Trofa facility.'}
              </p>

              {/* Action Buttons Row */}
              <div className="flex flex-wrap items-center gap-5 sm:gap-7 pt-1">
                
                {/* Primary Pill Button */}
                <ActionPrimaryButton
                  type="button"
                  onClick={onRequestQuote}
                  size="md"
                >
                  <span>{isPt ? 'Pedir Cotação' : 'Explore More'}</span>
                </ActionPrimaryButton>

                {/* Secondary Underline Text Link */}
                {onNavigateServices ? (
                  <button
                    type="button"
                    onClick={onNavigateServices}
                    className="text-xs sm:text-sm font-bold text-[#042F2C] hover:text-[#0D7E73] underline underline-offset-4 decoration-2 decoration-slate-300 hover:decoration-[#0D7E73] transition-all cursor-pointer"
                  >
                    {isPt ? 'Ver Todos os Serviços' : 'View All Services'}
                  </button>
                ) : onNavigateSolutions ? (
                  <button
                    type="button"
                    onClick={onNavigateSolutions}
                    className="text-xs sm:text-sm font-bold text-[#042F2C] hover:text-[#0D7E73] underline underline-offset-4 decoration-2 decoration-slate-300 hover:decoration-[#0D7E73] transition-all cursor-pointer"
                  >
                    {isPt ? 'Ver Todas as Soluções' : 'View All Solutions'}
                  </button>
                ) : null}

              </div>

            </motion.div>

            {/* RIGHT COLUMN: Full Natural Color Team Collage + Stamp Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6 relative flex items-center justify-center"
            >
              
              {/* Halftone Dot Accent */}
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-[radial-gradient(#0D7E73_1.5px,transparent_1.5px)] [background-size:12px_12px] opacity-20 pointer-events-none" />

              {/* Main Collage Container (Crisp Full Natural Color) */}
              <div className="relative w-full max-w-md sm:max-w-lg rounded-3xl overflow-hidden shadow-2xl border border-slate-200/90 bg-white">
                <img
                  src={teamCollageColorImg}
                  alt="Algorítmica Mania - Real IT Technical Team and Hardware Laboratory"
                  className="w-full h-auto object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Starburst Stamp / Circular Badge (Pinned Bottom-Left) */}
              <div className="absolute -bottom-6 -left-4 sm:left-2 z-20 flex items-center justify-center">
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#042F2C] text-white border-4 border-white shadow-xl flex items-center justify-center p-2 group hover:scale-105 transition-transform">
                  
                  {/* Outer Dashed Rotating Ring */}
                  <div className="absolute inset-1 rounded-full border border-dashed border-[#5EEAD4]/60 animate-[spin_20s_linear_infinite]" />
                  
                  {/* Center Green Dot with Arrow */}
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#10B981] text-[#042F2C] flex items-center justify-center shadow-inner">
                    <ArrowRight className="w-5 h-5 stroke-[2.5]" />
                  </div>
                  
                  {/* Circular Text / Badge Label */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <span className="text-[8px] sm:text-[9px] font-black uppercase tracking-widest text-[#CCFBF1] text-center px-1">
                      100% TESTED
                    </span>
                  </div>

                </div>
              </div>

              {/* Starburst Sparkle Elements */}
              <div className="absolute -bottom-4 -right-4 z-20 pointer-events-none">
                <div className="relative">
                  <svg className="w-10 h-10 text-[#10B981] drop-shadow-md animate-pulse" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
                  </svg>
                  <svg className="w-5 h-5 text-[#5EEAD4] absolute -top-3 -left-3" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
                  </svg>
                </div>
              </div>

            </motion.div>

          </div>
        </div>
      </section>

      {/* ========================================================
          2. SIMPLE & CLEAN 4 CARDS ROW (EXACT REFERENCE CARDS MATCH)
          Minimal content for instant message delivery
         ======================================================== */}
      <section className="py-16 sm:py-20 bg-[#FAFCFC] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header */}
          <div className="flex items-center justify-center gap-4 mb-12 sm:mb-14">
            <div className="h-[1.5px] w-12 sm:w-20 bg-[#99F6E4]" />
            <span className="text-xs sm:text-sm font-bold tracking-[0.25em] text-[#0D7E73] uppercase">
              {isPt ? '— AS 4 ETAPAS DO NOSSO MÉTODO —' : '— THE 4 STAGES OF OUR METHOD —'}
            </span>
            <div className="h-[1.5px] w-12 sm:w-20 bg-[#99F6E4]" />
          </div>

          {/* 4 Clean Minimal Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
            {simpleCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: idx * 0.08 }}
                  onClick={onRequestQuote}
                  className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/80 shadow-[0_8px_30px_-8px_rgba(4,47,44,0.06)] hover:shadow-[0_20px_45px_-10px_rgba(4,47,44,0.12)] transition-all duration-300 flex flex-col items-center text-center group cursor-pointer border-b-[4px] border-b-[#0D7E73] hover:-translate-y-1.5"
                >
                  {/* Circular Icon Container with Soft Teal Bg */}
                  <div className="w-16 h-16 rounded-full bg-[#F0FDFA] border border-[#CCFBF1] text-[#0D7E73] group-hover:bg-[#0D7E73] group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-2xs mb-5 group-hover:scale-105">
                    <Icon className="w-7 h-7 stroke-[1.8]" />
                  </div>

                  {/* Card Title */}
                  <h3 className="text-lg font-black text-[#042F2C] group-hover:text-[#0D7E73] transition-colors mb-2.5">
                    {card.title}
                  </h3>

                  {/* Horizontal Teal Accent Dash */}
                  <div className="w-7 h-[2px] bg-[#0D7E73] rounded-full group-hover:w-12 transition-all duration-300 mb-3.5" />

                  {/* Short Minimal Subtitle (Fast message convey) */}
                  <p className="text-xs sm:text-[13px] text-[#64748B] leading-relaxed mb-7 font-medium flex-1">
                    {card.subtitle}
                  </p>

                  {/* Small Teal Arrow Button */}
                  <div className="w-10 h-10 rounded-full bg-[#0D7E73] text-white flex items-center justify-center group-hover:bg-[#0B6A61] group-hover:scale-110 transition-all duration-300 shadow-sm mt-auto">
                    <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform stroke-[2.2]" />
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

    </div>
  );
};

export default OurApproachView;
