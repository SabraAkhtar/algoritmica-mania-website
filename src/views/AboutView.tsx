import React from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { companyData } from '../data/company';
import { ActionPrimaryButton } from '../components/ui/AnimatedButtons';
import { WhyTrustOurCompany } from '../components/home/WhyTrustOurCompany';
import { 
  Building2, 
  MapPin, 
  ShieldCheck, 
  Cpu, 
  Sparkles, 
  ArrowRight,
  Headphones,
  CheckCircle2,
  Search,
  Wrench,
  Coins
} from 'lucide-react';
import { motion } from 'motion/react';
import teamCollageColorImg from '../assets/images/it_team_color_natural_1787650390936.jpg';

interface AboutViewProps {
  lang: Language;
  onRequestQuote: () => void;
  onNavigateContact: () => void;
  onNavigateServices?: (slug?: string) => void;
  onNavigateSolutions?: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({
  lang,
  onRequestQuote,
  onNavigateContact,
  onNavigateServices,
  onNavigateSolutions
}) => {
  const isPt = lang === 'pt';
  const t = translations[lang]?.aboutPage || {
    title: isPt ? 'Sobre a Algorítmica Mania' : 'About Algorítmica Mania',
    sub: isPt
      ? 'Laboratório técnico especializado em recondicionamento informático e engenharia de hardware na Trofa. Equipamentos certificados, cibersegurança e suporte direto.'
      : 'Dedicated IT refurbishment laboratory and engineering facility in Trofa, Portugal. Providing certified enterprise hardware, cybersecurity, and direct technical support.',
    story1: isPt
      ? 'A Algorítmica Mania nasceu na Trofa com a missão de disponibilizar às empresas portuguesas tecnologia empresarial de topo com custos controlados e garantia total de fiabilidade. Operamos um laboratório especializado focado em diagnósticos rigorosos de bancada, recondicionamento de componentes e gestão de ciclo de vida ITAD.'
      : 'Algorítmica Mania was founded in Trofa to bridge the gap between high enterprise IT costs and guaranteed hardware reliability. We operate a specialized technical laboratory dedicated to rigorous multi-point hardware diagnostics, component-level refurbishment, and ITAD lifecycle solutions.',
    story2: isPt
      ? 'Todos os portáteis, servidores, workstations e switches que saem das nossas bancadas beneficiam de garantia até 36 meses, testes de stress exaustivos e destruição segura de dados NIST SP 800-88.'
      : 'Every laptop, server, workstation, and switch leaving our facility is backed by up to 36 months warranty, genuine component testing, and certified NIST SP 800-88 data sanitization.',
    pillar1Title: isPt ? 'Engenharia de Bancada' : 'Bench-Level Engineering',
    pillar1Desc: isPt
      ? 'Diagnóstico e reparação direta por técnicos que conhecem e testam o hardware ao nível do componente.'
      : 'Direct diagnosis and hardware testing by technicians who understand board-level circuitry and thermals.',
    pillar2Title: isPt ? 'Qualidade Sem Concessões' : 'Zero Compromise on Quality',
    pillar2Desc: isPt
      ? 'Apenas equipamentos de gama profissional Grade A/A+ com 100% de integridade funcional são aprovados.'
      : 'Only Grade A/A+ commercial-grade hardware with 100% functional health pass our quality gates.',
    pillar3Title: isPt ? 'Economia Circular & ITAD' : 'Circular Economy & ITAD',
    pillar3Desc: isPt
      ? 'Prolongamento sustentável do ciclo de vida dos equipamentos, reduzindo a pegada ecológica das empresas.'
      : 'Sustainable IT lifecycle extension reducing corporate carbon footprint and electronics waste across Portugal.'
  };

  // The 4 Process Stages
  const approachCards = [
    {
      icon: Search,
      title: isPt ? 'Entender & Auditar' : 'Audit & Analysis',
      subtitle: isPt ? 'Avaliação rápida do parque informático, rede e cargas de trabalho.' : 'Fast fleet, network, and workload assessment for your business.'
    },
    {
      icon: Cpu,
      title: isPt ? 'Recomendar & Dimensionar' : 'Dimension & Specs',
      subtitle: isPt ? 'Hardware sob medida sem custos supérfluos ou licenças inflacionadas.' : 'Tailored hardware specs with zero bloated fees or unnecessary licensing.'
    },
    {
      icon: Wrench,
      title: isPt ? 'Configuração & Burn-in' : 'Lab Setup & Testing',
      subtitle: isPt ? 'Bancada técnica na Trofa e 72h de testes contínuos de stress.' : 'Bench staging in Trofa lab with 72h continuous stress burn-in.'
    },
    {
      icon: ShieldCheck,
      title: isPt ? 'Proteger & Garantir' : 'Protect & Warranty',
      subtitle: isPt ? 'Backups 3-2-1, regras de firewall e garantia direta até 36 meses.' : '3-2-1 immutable backups, security rules, and up to 36m direct warranty.'
    }
  ];

  // Core Commitments / Benefits
  const whyChooseUsPillars = [
    {
      icon: Cpu,
      title: isPt ? 'Hardware Rigoroso' : 'Certified Hardware',
      desc: isPt ? 'Equipamentos empresariais Grade A+ com 72h de testes contínuos em bancada.' : 'Grade A+ enterprise equipment with 72h continuous lab stress testing.'
    },
    {
      icon: ShieldCheck,
      title: isPt ? 'Garantia Direta' : 'Direct Warranty',
      desc: isPt ? 'Até 36 meses de cobertura com substituição rápida de componentes.' : 'Up to 36 months direct hardware replacement coverage with zero delays.'
    },
    {
      icon: Coins,
      title: isPt ? 'Poupança Transparente' : 'Clear Cost Savings',
      desc: isPt ? 'Redução de até 40% em custos de TI com dimensionamento preciso sem desperdício.' : 'Save up to 40% on IT budget through precise, unbloated hardware sizing.'
    },
    {
      icon: Headphones,
      title: isPt ? 'Apoio Local na Trofa' : 'Dedicated Local Support',
      desc: isPt ? 'Comunicação direta com técnicos de hardware em Portugal, sem intermediários.' : 'Direct communication with dedicated hardware technicians in Portugal.'
    }
  ];

  return (
    <div className="w-full bg-[#FAFCFC] min-h-screen text-[#042F2C] relative">
      
      {/* =========================================================================
          ACT 1: ABOUT OUR COMPANY (WHO WE ARE & WHAT WE DO)
         ========================================================================= */}
      <section className="py-12 sm:py-16 bg-[#F0FDFA]/30 border-b border-[#CCFBF1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Title & Trofa Badge */}
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 mb-3 rounded-full text-xs font-bold bg-[#F0FDFA] text-[#042F2C] border border-[#CCFBF1] shadow-2xs">
              <Building2 className="w-3.5 h-3.5 text-[#0D7E73]" />
              <span>{lang === 'pt' ? 'Centro de Engenharia & Laboratório na Trofa' : 'Engineering Hub & Trofa Technical Facility'}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#042F2C] mb-4">
              {isPt ? (
                <>
                  Sobre a <span className="text-[#0D7E73]">Algorítmica Mania</span>
                </>
              ) : (
                <>
                  About <span className="text-[#0D7E73]">Algorítmica Mania</span>
                </>
              )}
            </h1>
            <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">
              {t.sub}
            </p>
          </div>

          {/* Hero Bento Showcase */}
          <div className="mb-14">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* LEFT: Clean Dual Tech Team Images without text or heavy white background */}
              <div className="lg:col-span-6 relative flex items-center justify-center min-h-[340px] sm:min-h-[400px]">
                {/* Background Subtle Teal Arc */}
                <div className="absolute -top-6 right-10 w-52 h-52 sm:w-60 sm:h-60 rounded-full border-[18px] border-[#0D7E73]/20 -z-0 pointer-events-none" />
                <div className="absolute top-8 right-24 w-36 h-36 rounded-full border-4 border-dashed border-[#14B8A6]/30 -z-0 pointer-events-none" />

                {/* Primary Main Tech Team Image (Clean photo without text or dark overlay) */}
                <div className="relative z-10 w-64 sm:w-72 h-72 sm:h-84 rounded-3xl overflow-hidden shadow-xl border border-[#CCFBF1] -translate-x-4 sm:-translate-x-8">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=700&q=80"
                    alt="Equipa técnica Algorítmica Mania"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Secondary Overlapping Specialist Image (Clean photo without text or white frame) */}
                <div className="absolute z-20 right-2 sm:right-4 bottom-0 w-48 sm:w-56 h-56 sm:h-64 rounded-3xl overflow-hidden shadow-2xl border border-[#CCFBF1]/80">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80"
                    alt="Especialista de Hardware e Cibersegurança"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* RIGHT: Brand Content, Twin Feature Cards, Action Button & Founder Card */}
              <div className="lg:col-span-6 flex flex-col justify-between space-y-5 bg-white rounded-3xl border border-[#CCFBF1] p-6 sm:p-8 shadow-sm">
                <div>
                  <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#0D7E73] bg-[#F0FDFA] px-3 py-1 rounded-xl border border-[#CCFBF1] mb-2.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#0D7E73]" />
                    <span>{isPt ? 'SOBRE A NOSSA EMPRESA' : 'ABOUT OUR COMPANY'}</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-black text-[#042F2C] tracking-tight leading-tight mb-3">
                    {isPt ? (
                      <>
                        Soluções Tecnológicas com <span className="text-[#0D7E73]">Rigor de Engenharia</span>
                      </>
                    ) : (
                      <>
                        Intelligent Business Solutions with <span className="text-[#0D7E73]">Engineering Rigor</span>
                      </>
                    )}
                  </h2>

                  <p className="text-sm text-[#475569] leading-relaxed mb-3">
                    {t.story1}
                  </p>
                  <p className="text-sm text-[#64748B] leading-relaxed">
                    {t.story2}
                  </p>
                </div>

                {/* Parallel Twin Feature Micro-Boxes */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                  <div className="p-3.5 rounded-2xl bg-[#F0FDFA] border border-[#CCFBF1] flex items-start gap-3 shadow-2xs">
                    <div className="w-10 h-10 rounded-xl bg-white border border-[#CCFBF1] text-[#0D7E73] flex items-center justify-center shrink-0 shadow-2xs">
                      <Cpu className="w-5 h-5 text-[#0D7E73]" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-[#042F2C]">
                        {isPt ? 'Engenharia de Bancada' : 'Bench Engineering'}
                      </h4>
                      <p className="text-[11px] text-[#64748B] leading-tight mt-0.5">
                        {isPt ? 'Diagnóstico minucioso ao componente e testes de stress.' : 'Component-level diagnostic benches & 72h stress validation.'}
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-[#F0FDFA] border border-[#CCFBF1] flex items-start gap-3 shadow-2xs">
                    <div className="w-10 h-10 rounded-xl bg-white border border-[#CCFBF1] text-[#0D7E73] flex items-center justify-center shrink-0 shadow-2xs">
                      <Headphones className="w-5 h-5 text-[#0D7E73]" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-[#042F2C]">
                        {isPt ? 'Suporte Técnico Direto' : 'Direct Support'}
                      </h4>
                      <p className="text-[11px] text-[#64748B] leading-tight mt-0.5">
                        {isPt ? 'Apoio sem intermediários por engenheiros sediados na Trofa.' : 'Direct certified engineer hotline and fast SLA resolution.'}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom Action Row: Button + Founder Profile & Signature */}
                <div className="pt-3 flex flex-wrap items-center justify-between gap-4 border-t border-[#CCFBF1]">
                  <ActionPrimaryButton
                    onClick={onRequestQuote}
                    size="md"
                  >
                    <span>{isPt ? 'Solicitar Cotação Corporativa' : 'Get a Quote'}</span>
                  </ActionPrimaryButton>

                  {/* Founder / Engineering Director Signature Card */}
                  <div className="flex items-center gap-3 bg-[#F0FDFA] px-4 py-2 rounded-2xl border border-[#CCFBF1]">
                    <div className="relative">
                      <img
                        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80"
                        alt="Diretor de Engenharia"
                        className="w-9 h-9 rounded-full object-cover border border-[#0D7E73]"
                      />
                      <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 rounded-full border-2 border-white" />
                    </div>

                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs sm:text-sm font-black text-[#042F2C]">David Oliveira</span>
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0D7E73]" />
                      </div>
                      <div className="text-[10px] text-[#64748B] font-medium leading-none">
                        {isPt ? 'Direção Técnica • Laboratório Trofa' : 'Tech Director • Trofa Lab'}
                      </div>
                    </div>

                    <div className="hidden sm:block pl-2.5 border-l border-[#CCFBF1]">
                      <span className="font-serif italic text-sm font-bold text-[#0D7E73]/80 tracking-tighter">
                        D. Oliveira
                      </span>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>

          {/* 3 Core Ethos Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl border border-[#CCFBF1] p-6 sm:p-7 shadow-xs hover:border-[#0D7E73]/50 transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#F0FDFA] text-[#0D7E73] flex items-center justify-center mb-4 border border-[#CCFBF1]">
                <Cpu className="w-6 h-6 text-[#0D7E73]" />
              </div>
              <h3 className="text-base font-bold text-[#042F2C] mb-2">
                {t.pillar1Title}
              </h3>
              <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                {t.pillar1Desc}
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-[#CCFBF1] p-6 sm:p-7 shadow-xs hover:border-[#0D7E73]/50 transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#F0FDFA] text-[#0D7E73] flex items-center justify-center mb-4 border border-[#CCFBF1]">
                <ShieldCheck className="w-6 h-6 text-[#0D7E73]" />
              </div>
              <h3 className="text-base font-bold text-[#042F2C] mb-2">
                {t.pillar2Title}
              </h3>
              <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                {t.pillar2Desc}
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-[#CCFBF1] p-6 sm:p-7 shadow-xs hover:border-[#0D7E73]/50 transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#F0FDFA] text-[#0D7E73] flex items-center justify-center mb-4 border border-[#CCFBF1]">
                <Sparkles className="w-6 h-6 text-[#0D7E73]" />
              </div>
              <h3 className="text-base font-bold text-[#042F2C] mb-2">
                {t.pillar3Title}
              </h3>
              <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                {t.pillar3Desc}
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          ACT 2: OUR APPROACH (HOW WE WORK & HOW WE SERVE CUSTOMERS)
         ========================================================================= */}
      <section id="our-approach-section" className="py-16 sm:py-24 bg-white border-b border-slate-200/80 relative overflow-hidden">
        
        {/* Soft Background Accents */}
        <div className="absolute top-10 left-1/3 w-96 h-96 bg-[#F0FDFA]/80 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-6 right-10 w-48 h-48 bg-[radial-gradient(#0D7E73_1.5px,transparent_1.5px)] [background-size:14px_14px] opacity-25 pointer-events-none hidden sm:block" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16">
            
            {/* LEFT: Eyebrow Pill + Main Heading + Subtext + Actions */}
            <motion.div 
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-6 flex flex-col items-start text-left"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100/90 border border-slate-200/80 text-xs sm:text-sm font-bold text-[#042F2C] mb-6 shadow-2xs">
                <div className="flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#042F2C]" />
                </div>
                <span className="tracking-wide">
                  {isPt ? 'A Nossa Abordagem Técnica' : 'Our Engineering Approach'}
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-black tracking-tight text-[#042F2C] leading-[1.12] mb-6">
                {isPt ? (
                  <>
                    Como Ajudamos a Sua Empresa com <span className="text-[#0D7E73]">Soluções de TI</span>
                  </>
                ) : (
                  <>
                    How We Help Your Business with <span className="text-[#0D7E73]">Dedicated IT Solutions</span>
                  </>
                )}
              </h2>

              <p className="text-sm sm:text-base text-[#64748B] leading-relaxed max-w-xl mb-8 font-medium">
                {isPt
                  ? 'Uma metodologia técnica estruturada em 4 fases rigorosas que assegura que todo o hardware empresarial, servidores e redes são auditados, dimensionados, configurados em bancada e protegidos com suporte direto na Trofa.'
                  : 'A structured 4-phase technical roadmap that ensures every IT deployment is properly audited, dimensioned, bench-configured, and secured with direct warranty from our Trofa facility.'}
              </p>

              <div className="flex flex-wrap items-center gap-5 sm:gap-7">
                <ActionPrimaryButton
                  type="button"
                  onClick={onRequestQuote}
                  size="md"
                >
                  <span>{isPt ? 'Pedir Orçamento' : 'Request a Proposal'}</span>
                </ActionPrimaryButton>

                {onNavigateServices && (
                  <button
                    type="button"
                    onClick={() => onNavigateServices()}
                    className="text-xs sm:text-sm font-bold text-[#042F2C] hover:text-[#0D7E73] underline underline-offset-4 decoration-2 decoration-slate-300 hover:decoration-[#0D7E73] transition-all cursor-pointer"
                  >
                    {isPt ? 'Ver Todos os Serviços' : 'View All Services'}
                  </button>
                )}
              </div>
            </motion.div>

            {/* RIGHT: Real IT Team Collage with 100% Tested Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6 relative flex items-center justify-center"
            >
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-[radial-gradient(#0D7E73_1.5px,transparent_1.5px)] [background-size:12px_12px] opacity-20 pointer-events-none" />

              <div className="relative w-full max-w-md sm:max-w-lg rounded-3xl overflow-hidden shadow-2xl border border-slate-200/90 bg-white">
                <img
                  src={teamCollageColorImg}
                  alt="Algorítmica Mania - Real IT Technical Team and Hardware Laboratory"
                  className="w-full h-auto object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Starburst Stamp / Circular Badge */}
              <div className="absolute -bottom-6 -left-4 sm:left-2 z-20 flex items-center justify-center">
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#042F2C] text-white border-4 border-white shadow-xl flex items-center justify-center p-2 group hover:scale-105 transition-transform">
                  <div className="absolute inset-1 rounded-full border border-dashed border-[#5EEAD4]/60 animate-[spin_20s_linear_infinite]" />
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#10B981] text-[#042F2C] flex items-center justify-center shadow-inner">
                    <ArrowRight className="w-5 h-5 stroke-[2.5]" />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <span className="text-[8px] sm:text-[9px] font-black uppercase tracking-widest text-[#CCFBF1] text-center px-1">
                      100% TESTED
                    </span>
                  </div>
                </div>
              </div>

              {/* Sparkle SVG Accent */}
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

          {/* The 4 Stages Grid */}
          <div>
            <div className="flex items-center justify-center gap-4 mb-10 sm:mb-12">
              <div className="h-[1.5px] w-12 sm:w-20 bg-[#99F6E4]" />
              <span className="text-xs sm:text-sm font-bold tracking-[0.25em] text-[#0D7E73] uppercase">
                {isPt ? '— AS 4 ETAPAS DO NOSSO MÉTODO —' : '— THE 4 STAGES OF OUR METHOD —'}
              </span>
              <div className="h-[1.5px] w-12 sm:w-20 bg-[#99F6E4]" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
              {approachCards.map((card, idx) => {
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
                    <div className="w-16 h-16 rounded-full bg-[#F0FDFA] border border-[#CCFBF1] text-[#0D7E73] group-hover:bg-[#0D7E73] group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-2xs mb-5 group-hover:scale-105">
                      <Icon className="w-7 h-7 stroke-[1.8]" />
                    </div>

                    <h3 className="text-lg font-black text-[#042F2C] group-hover:text-[#0D7E73] transition-colors mb-2.5">
                      {card.title}
                    </h3>

                    <div className="w-7 h-[2px] bg-[#0D7E73] rounded-full group-hover:w-12 transition-all duration-300 mb-3.5" />

                    <p className="text-xs sm:text-[13px] text-[#64748B] leading-relaxed mb-7 font-medium flex-1">
                      {card.subtitle}
                    </p>

                    <div className="w-10 h-10 rounded-full bg-[#0D7E73] text-white flex items-center justify-center group-hover:bg-[#0B6A61] group-hover:scale-110 transition-all duration-300 shadow-sm mt-auto">
                      <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform stroke-[2.2]" />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          ACT 4 (SECOND TO LAST): WHY TRUST OUR COMPANY (IMAGE 3)
         ========================================================================= */}
      <WhyTrustOurCompany
        lang={lang}
        onRequestQuote={onRequestQuote}
      />

      {/* =========================================================================
          ACT 5 (LAST SECTION): OUR CORE COMMITMENTS (IMAGE 4)
         ========================================================================= */}
      <section id="our-core-commitments-section" className="py-16 sm:py-24 bg-[#FAFCFC] relative overflow-hidden border-t border-slate-200/80">
        
        {/* Soft Background Accents */}
        <div className="absolute top-10 left-1/3 w-96 h-96 bg-[#F0FDFA]/70 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-6 right-10 w-48 h-48 bg-[radial-gradient(#0D7E73_1.5px,transparent_1.5px)] [background-size:14px_14px] opacity-25 pointer-events-none hidden sm:block" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="flex items-center justify-center gap-4 mb-10 sm:mb-14">
            <div className="h-[1.5px] w-12 sm:w-20 bg-[#99F6E4]" />
            <span className="text-xs sm:text-sm font-bold tracking-[0.25em] text-[#0D7E73] uppercase">
              {isPt ? '— OS NOSSOS COMPROMISSOS FUNDAMENTAIS —' : '— OUR CORE COMMITMENTS —'}
            </span>
            <div className="h-[1.5px] w-12 sm:w-20 bg-[#99F6E4]" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
            {whyChooseUsPillars.map((pillar, pIdx) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pIdx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: pIdx * 0.08 }}
                  onClick={onRequestQuote}
                  className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/80 shadow-[0_8px_30px_-8px_rgba(4,47,44,0.06)] hover:shadow-[0_20px_45px_-10px_rgba(4,47,44,0.12)] transition-all duration-300 flex flex-col items-center text-center group cursor-pointer border-b-[4px] border-b-[#0D7E73] hover:-translate-y-1.5"
                >
                  <div className="w-16 h-16 rounded-full bg-[#F0FDFA] border border-[#CCFBF1] text-[#0D7E73] group-hover:bg-[#0D7E73] group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-2xs mb-5 group-hover:scale-105">
                    <Icon className="w-7 h-7 stroke-[1.8]" />
                  </div>
                  <h3 className="text-lg font-black text-[#042F2C] group-hover:text-[#0D7E73] transition-colors mb-2.5">
                    {pillar.title}
                  </h3>
                  <div className="w-7 h-[2px] bg-[#0D7E73] rounded-full group-hover:w-12 transition-all duration-300 mb-3.5" />
                  <p className="text-xs sm:text-[13px] text-[#64748B] leading-relaxed mb-7 font-medium flex-1">
                    {pillar.desc}
                  </p>
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

export default AboutView;
