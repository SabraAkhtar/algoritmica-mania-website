import React, { useState } from 'react';
import { Language } from '../../types';
import { 
  Coins, 
  ShieldCheck, 
  Sparkles, 
  Leaf, 
  CheckCircle2, 
  ArrowRight
} from 'lucide-react';
import { AnimatedArrowRight } from '../ui/AnimatedArrow';

interface CircularInfographicShowcaseProps {
  lang: Language;
  onExploreMore?: () => void;
  onRequestQuote?: () => void;
}

export const CircularInfographicShowcase: React.FC<CircularInfographicShowcaseProps> = ({
  lang,
  onExploreMore,
  onRequestQuote
}) => {
  const isPt = lang === 'pt';
  const [activePillar, setActivePillar] = useState<number>(0);

  const pillars = [
    {
      id: 0,
      icon: Coins,
      tag: { pt: 'EFICIÊNCIA DE CUSTOS', en: 'COST EFFICIENCY' },
      title: { pt: 'Até 70% de Poupança Financeira', en: 'Up to 70% Financial Savings' },
      desc: {
        pt: 'Redução direta de custos de capital comparativamente ao preço de retalho novo (MSRP), sem intermediários.',
        en: 'Direct capital expenditure savings compared to brand-new retail MSRP, without broker markups.'
      },
      check: {
        pt: 'Preços B2B transparentes e escaláveis',
        en: 'Transparent & scalable B2B pricing'
      }
    },
    {
      id: 1,
      icon: ShieldCheck,
      tag: { pt: 'SLA GARANTIDO', en: 'GUARANTEED SLA' },
      title: { pt: 'Garantia Direta de 12 a 36 Meses', en: '12 to 36-Month Direct Warranty' },
      desc: {
        pt: 'Substituição rápida de hardware com resposta em 24/48h e apoio técnico direto a partir da Trofa.',
        en: 'Rapid hardware swap with 24/48h business turnaround and direct engineering support in Trofa.'
      },
      check: {
        pt: 'Apoio de engenharia próprio sem intermediários',
        en: 'Direct engineering support without 3rd parties'
      }
    },
    {
      id: 2,
      icon: Sparkles,
      tag: { pt: 'PADRÃO GRADE A+', en: 'GRADE A+ STANDARD' },
      title: { pt: 'Auditoria de Laboratório em 50 Pontos', en: '50-Point Laboratory Audit' },
      desc: {
        pt: 'Higienização ultrassónica, renovação de massa térmica OEM e teste contínuo de esforço sob carga de 72 horas.',
        en: 'Ultrasonic sanitation, OEM thermal paste renewal, and 72-hour continuous burn-in hardware stress test.'
      },
      check: {
        pt: 'Relatório individual de testes de bancada de cada componente',
        en: 'Individual component test benchmark report'
      }
    },
    {
      id: 3,
      icon: Leaf,
      tag: { pt: 'CIRCULARIDADE ESG', en: 'ESG CIRCULARITY' },
      title: { pt: 'Economia Circular & Destruição Segura de Dados', en: 'Circular Economy & Safe Data Purge' },
      desc: {
        pt: 'Sanitização de dados alinhada com a norma NIST SP 800-88 Rev. 2 com emissão de certificado para suporte ao RGPD.',
        en: 'Data sanitization aligned with NIST SP 800-88 Rev. 2 guidelines with certificates supporting GDPR compliance.'
      },
      check: {
        pt: 'Certificado Oficial de Destruição e Apagamento de Dados',
        en: 'Official Certificate of Data Destruction'
      }
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white text-[#042F2C] relative overflow-hidden border-b border-[#CCFBF1]">
      
      {/* Background Soft Glows */}
      <div className="absolute top-10 left-10 w-96 h-96 rounded-full bg-[#CCFBF1]/30 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-[#99F6E4]/20 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#F0FDFA] text-[#0D7E73] border border-[#CCFBF1] mb-3 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#0D7E73]" />
            <span>{isPt ? 'RIGOR TÉCNICO & CERTIFICAÇÃO' : 'TECHNICAL RIGOR & CERTIFICATION'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#042F2C] tracking-tight leading-tight mb-3">
            {isPt ? (
              <>
                Porquê Escolher a <span className="text-[#0D7E73]">Nossa Equipa</span>?
              </>
            ) : (
              <>
                Why Choose <span className="text-[#0D7E73]">Our Team</span>?
              </>
            )}
          </h2>

          <p className="text-sm sm:text-base text-[#64748B] leading-relaxed max-w-2xl mx-auto">
            {isPt 
              ? 'Rigor de engenharia em laboratório na Trofa, fiabilidade de hardware empresarial e soluções de TI circulares à medida.'
              : 'Laboratory engineering rigor in Trofa, enterprise hardware reliability, and tailored circular IT solutions.'}
          </p>
        </div>

        {/* 🌟 MAIN CONTAINER WITH ROUNDED BORDER FRAME */}
        <div className="w-full bg-[#F8FAFC]/70 rounded-3xl p-6 sm:p-8 lg:p-12 border border-[#CCFBF1] shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* ========================================================
                LEFT: CIRCULAR INFOGRAPHIC HUB
               ======================================================== */}
            <div className="lg:col-span-5 relative flex items-center justify-center min-h-[340px] sm:min-h-[440px] overflow-hidden sm:overflow-visible py-4">
              
              {/* Outer Mint Ring & Background Circle */}
              <div className="relative w-[280px] sm:w-[380px] md:w-[410px] h-[280px] sm:h-[380px] md:h-[410px] rounded-full bg-[#E6FFFA]/70 border-2 border-[#CCFBF1] flex items-center justify-center p-4 sm:p-6 shadow-inner shrink-0">
                
                {/* Floating Inner Content Box with Text */}
                <div className="text-left pl-20 sm:pl-32 pr-2 py-3 sm:py-4">
                  <p className="text-[11px] sm:text-[13px] font-bold text-[#042F2C] leading-snug mb-1.5 sm:mb-2 max-w-[150px] sm:max-w-[190px]">
                    {isPt 
                      ? 'Combinamos engenharia certificada, testes rigorosos de bancada e suporte direto.'
                      : 'We combine certified engineering, rigorous bench tests, and direct support.'}
                  </p>
                  <p className="text-[10px] sm:text-xs text-slate-600 leading-relaxed max-w-[140px] sm:max-w-[180px] mb-2 sm:mb-3">
                    {isPt 
                      ? 'O parceiro tecnológico ideal para empresas que procuram poupança sem cedências.'
                      : 'The ideal technology partner for businesses seeking cost savings with zero compromise.'}
                  </p>
                  <div className="inline-flex items-center gap-1.5 text-[9px] sm:text-[11px] font-bold uppercase tracking-wider text-[#0D7E73]">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#0D7E73] animate-ping" />
                    <span>Trofa • Portugal</span>
                  </div>
                </div>

                {/* Left Floating Central Dark Teal Circle */}
                <div className="absolute -left-2 sm:-left-6 top-1/2 -translate-y-1/2 w-28 sm:w-44 h-28 sm:h-44 rounded-full bg-gradient-to-br from-[#0D7E73] to-[#042F2C] text-white flex flex-col items-center justify-center text-center p-2 sm:p-3 shadow-xl border-2 sm:border-4 border-white z-20">
                  <span className="text-[8px] sm:text-[11px] font-bold uppercase tracking-widest text-[#5EEAD4]">
                    {isPt ? 'PORQUÊ' : 'WHY'}
                  </span>
                  <span className="text-xs sm:text-xl font-black tracking-tight leading-none text-white my-0.5 sm:my-1">
                    {isPt ? 'ESCOLHER' : 'CHOOSE'}
                  </span>
                  <span className="text-[8px] sm:text-[10px] font-semibold uppercase tracking-wider text-slate-200">
                    {isPt ? 'A NOSSA EQUIPA' : 'OUR TEAM'}
                  </span>
                  <div className="w-6 sm:w-8 h-0.5 bg-[#5EEAD4] mt-1 sm:mt-2 rounded-full" />
                </div>

                {/* 4 Interactive Orbiting Nodes on the Right Arc */}
                <div className="absolute -right-3 sm:-right-6 top-0 bottom-0 flex flex-col justify-between py-4 sm:py-8 z-20">
                  {pillars.map((item, idx) => {
                    const Icon = item.icon;
                    const isActive = activePillar === idx;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setActivePillar(idx)}
                        onMouseEnter={() => setActivePillar(idx)}
                        className={`w-9 h-9 sm:w-13 sm:h-13 rounded-full flex items-center justify-center transition-all duration-300 shadow-md cursor-pointer border-2 ${
                          isActive 
                            ? 'bg-[#0D7E73] text-white border-white scale-110 shadow-lg ring-2 sm:ring-4 ring-[#CCFBF1]' 
                            : 'bg-white text-[#0D7E73] border-[#CCFBF1] hover:bg-[#F0FDFA] hover:scale-105'
                        }`}
                        title={item.title[lang]}
                      >
                        <Icon className="w-4 h-4 sm:w-5.5 sm:h-5.5 stroke-[2.2]" />
                      </button>
                    );
                  })}
                </div>

              </div>

            </div>

            {/* ========================================================
                RIGHT: 4 CONNECTED CARDS WITH DASHED LINES
               ======================================================== */}
            <div className="lg:col-span-7 flex flex-col gap-4">
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                const isActive = activePillar === idx;

                return (
                  <div key={pillar.id} className="relative flex items-center">
                    
                    {/* Dashed Connecting Line from node to card (Desktop only) */}
                    <div className="hidden lg:block w-8 border-t-2 border-dashed border-[#99F6E4] shrink-0" />

                    {/* Main Interactive Card */}
                    <div
                      onMouseEnter={() => setActivePillar(idx)}
                      onClick={() => setActivePillar(idx)}
                      className={`w-full rounded-2xl p-5 sm:p-6 transition-all duration-300 cursor-pointer border ${
                        isActive
                          ? 'bg-white border-[#0D7E73] shadow-[0_8px_24px_-4px_rgba(13,126,115,0.15)] ring-1 ring-[#0D7E73]'
                          : 'bg-white/90 hover:bg-white border-slate-200/80 hover:border-[#0D7E73]/50 shadow-xs'
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        
                        {/* Icon */}
                        <div className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                          isActive
                            ? 'bg-[#0D7E73] text-white'
                            : 'bg-[#F0FDFA] text-[#0D7E73] border border-[#CCFBF1]'
                        }`}>
                          <Icon className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.2]" />
                        </div>

                        {/* Text Details */}
                        <div className="flex-1">
                          
                          {/* Top Row: Title + Tag */}
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1.5">
                            <h3 className="text-base sm:text-lg font-bold text-[#042F2C] tracking-tight">
                              {pillar.title[lang]}
                            </h3>
                            <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#0D7E73] bg-[#F0FDFA] border border-[#CCFBF1] px-2.5 py-0.5 rounded-md w-fit">
                              {pillar.tag[lang]}
                            </span>
                          </div>

                          {/* Description */}
                          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
                            {pillar.desc[lang]}
                          </p>

                          {/* Checkpoint */}
                          <div className="flex items-center gap-2 text-xs font-semibold text-[#042F2C]">
                            <CheckCircle2 className="w-4 h-4 text-[#0D7E73] shrink-0" />
                            <span>{pillar.check[lang]}</span>
                          </div>

                        </div>

                      </div>
                    </div>

                  </div>
                );
              })}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default CircularInfographicShowcase;
