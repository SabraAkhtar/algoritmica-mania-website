import React from 'react';
import { Language } from '../../types';
import { motion } from 'motion/react';
import { 
  Sparkles, 
  Linkedin, 
  Mail, 
  ShieldCheck, 
  Award, 
  Cpu, 
  ArrowRight,
  CheckCircle2,
  Building2,
  ExternalLink
} from 'lucide-react';
import { AnimatedArrowRight } from '../ui/AnimatedArrow';

interface MeetOurTeamSectionProps {
  lang: Language;
  onExploreMore?: () => void;
  onRequestQuote?: () => void;
}

export const MeetOurTeamSection: React.FC<MeetOurTeamSectionProps> = ({
  lang,
  onExploreMore,
  onRequestQuote
}) => {
  const isPt = lang === 'pt';

  const teamMembers = [
    {
      id: 'engineer',
      name: 'Eng. Rui Fernandes',
      role: {
        pt: 'Diretor de Engenharia de Hardware',
        en: 'Head of Hardware Engineering'
      },
      tagline: {
        pt: 'Laboratório & Diagnóstico de Bancada',
        en: 'Trofa Laboratory & Bench Diagnostics'
      },
      company: 'ALGoritmica MANIA',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=700&q=85',
      badge: {
        pt: '14+ Anos Exp. Hardware',
        en: '14+ Years Hardware Exp.'
      },
      cert: {
        pt: 'Especialista em Testes 72h & Bancada',
        en: '72h Stress & Diagnostic Bench Specialist'
      },
      isOwner: false,
      position: 'left'
    },
    {
      id: 'owner',
      name: 'Alexandre Moreira',
      role: {
        pt: 'Fundador & Diretor Executivo (CEO)',
        en: 'Founder & Managing Director'
      },
      tagline: {
        pt: 'Estratégia Empresarial & Garantia de Qualidade',
        en: 'Enterprise Strategy & Quality Assurance'
      },
      company: 'ALGoritmica MANIA',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=85',
      badge: {
        pt: 'Fundador & Liderança',
        en: 'Founder & Leadership'
      },
      cert: {
        pt: 'Visão de Infraestrutura & Confiança B2B',
        en: 'B2B Infrastructure Vision & Trust'
      },
      isOwner: true,
      position: 'center'
    },
    {
      id: 'solutions',
      name: 'Dra. Sofia Carvalho',
      role: {
        pt: 'Diretora de Soluções B2B & ITAD',
        en: 'Head of B2B Solutions & ITAD'
      },
      tagline: {
        pt: 'Economia Circular & Gestão de Ativos',
        en: 'Circular Economy & NIST Asset Decom'
      },
      company: 'ALGoritmica MANIA',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=700&q=85',
      badge: {
        pt: 'Conformidade NIST & ESG',
        en: 'NIST & ESG Compliance'
      },
      cert: {
        pt: 'Destruição Certificada & Projetos B2B',
        en: 'Certified Data Destruction & B2B Audits'
      },
      isOwner: false,
      position: 'right'
    }
  ];

  return (
    <section className="py-14 sm:py-18 lg:py-22 bg-gradient-to-b from-white via-[#F8FAFC] to-white text-[#042F2C] relative overflow-hidden border-b border-[#CCFBF1]">
      
      {/* Subtle Background Grid Lines Pattern (From Reference Photo) */}
      <div 
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#0D7E73 1px, transparent 1px), linear-gradient(90deg, #0D7E73 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Ambient Soft Mint Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#CCFBF1]/35 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-20 right-10 w-96 h-96 bg-[#99F6E4]/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* 🌟 DISPLAY TITLE MATCHING REFERENCE IMAGE 2 ("welcome To Our Team") */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#F0FDFA] text-[#0D7E73] border border-[#CCFBF1] mb-3 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#0D7E73]" />
            <span>{isPt ? 'LIDERANÇA & ENGENHARIA NA TROFA' : 'LEADERSHIP & TROFA LAB TEAM'}</span>
          </div>

          {/* Heading Styled Exactly like Reference Graphic */}
          <h2 className="tracking-tight leading-none">
            <span className="block text-2xl sm:text-3xl md:text-4xl font-medium text-[#042F2C] mb-1">
              {isPt ? 'bem-vindo à' : 'welcome'}
            </span>
            <span className="block text-4xl sm:text-5xl md:text-6xl font-black text-[#0D7E73] tracking-tight">
              {isPt ? 'Nossa Equipa' : 'To Our Team'}
            </span>
          </h2>

          {/* Subtitle */}
          <p className="mt-4 text-xs sm:text-sm md:text-base text-[#64748B] leading-relaxed max-w-xl mx-auto">
            {isPt 
              ? 'Conheça os especialistas e a liderança responsáveis pelo rigor de bancada, fiabilidade de hardware e compromisso com o sucesso da sua empresa.'
              : 'Meet the leadership and laboratory engineering team ensuring hardware reliability, diagnostic rigor, and direct client support.'}
          </p>
        </div>

        {/* 🌟 3 TEAM MEMBERS PODIUM LAYOUT (CENTER OWNER IS PROMINENT & LARGER) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-center max-w-5xl mx-auto">
          
          {/* ========================================================
              MEMBER 1 (LEFT — HEAD OF HARDWARE ENGINEERING)
             ======================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -4 }}
            className="md:col-span-4 bg-white rounded-3xl p-6 border border-slate-200/90 hover:border-[#0D7E73]/60 shadow-[0_8px_24px_-4px_rgba(4,47,44,0.06)] hover:shadow-[0_16px_36px_-6px_rgba(13,126,115,0.14)] transition-all duration-300 flex flex-col items-center text-center relative group"
          >
            {/* Top Badge */}
            <div className="mb-4">
              <span className="inline-flex items-center gap-1 text-[10.5px] font-extrabold uppercase tracking-wider text-[#0D7E73] bg-[#F0FDFA] px-2.5 py-1 rounded-full border border-[#CCFBF1]">
                <Cpu className="w-3 h-3 text-[#0D7E73]" />
                {teamMembers[0].badge[lang]}
              </span>
            </div>

            {/* Circular Image Container with Brand Emblem Background */}
            <div className="relative mb-5 flex items-center justify-center">
              {/* Circular Emblem Ring Behind Headshot (Reference Image Style) */}
              <div className="absolute w-44 h-44 rounded-full bg-[#E6FFFA]/80 border-4 border-[#CCFBF1] -z-0 group-hover:scale-105 transition-transform duration-300 flex items-center justify-center">
                <div className="w-36 h-36 rounded-full border border-dashed border-[#0D7E73]/30" />
              </div>

              {/* Headshot Portrait */}
              <div className="relative z-10 w-36 h-36 rounded-full overflow-hidden border-4 border-white shadow-md bg-slate-100">
                <img 
                  src={teamMembers[0].image} 
                  alt={teamMembers[0].name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Member Details */}
            <h3 className="text-xl font-black text-[#042F2C] tracking-tight mb-1 group-hover:text-[#0D7E73] transition-colors">
              {teamMembers[0].name}
            </h3>

            <p className="text-xs sm:text-[13px] font-bold text-[#0D7E73] mb-1">
              {teamMembers[0].role[lang]}
            </p>

            <p className="text-[11px] text-[#64748B] font-medium mb-3.5">
              {teamMembers[0].company}
            </p>

            {/* Specialty Checkpoint Tag */}
            <div className="w-full pt-3 border-t border-slate-100 flex items-center justify-center gap-1.5 text-[11px] text-slate-600 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#0D7E73] shrink-0" />
              <span>{teamMembers[0].cert[lang]}</span>
            </div>
          </motion.div>

          {/* ========================================================
              MEMBER 2 (CENTER — OWNER & FOUNDER: PROMINENT & LARGER!)
             ======================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -6 }}
            className="md:col-span-4 bg-gradient-to-b from-white via-[#F0FDFA]/40 to-white rounded-[32px] p-7 sm:p-8 border-2 border-[#0D7E73]/40 hover:border-[#0D7E73] shadow-[0_16px_40px_-6px_rgba(13,126,115,0.18)] hover:shadow-[0_24px_50px_-8px_rgba(13,126,115,0.25)] transition-all duration-300 flex flex-col items-center text-center relative group z-20 md:-translate-y-2"
          >
            {/* Top Founder Golden/Teal Badge */}
            <div className="mb-4">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-black uppercase tracking-widest text-[#0D7E73] bg-[#CCFBF1] px-3.5 py-1.5 rounded-full border border-[#0D7E73]/30 shadow-2xs">
                <Award className="w-3.5 h-3.5 text-[#0D7E73]" />
                {teamMembers[1].badge[lang]}
              </span>
            </div>

            {/* Circular Image Container with Prominent Brand Graphic Rings */}
            <div className="relative mb-6 flex items-center justify-center">
              {/* Outer Radiant Glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-[#14B8A6]/20 to-[#0D7E73]/20 rounded-full blur-md group-hover:scale-110 transition-transform duration-300" />
              
              {/* Circular Emblem Backdrop (Matching Reference Image 2) */}
              <div className="relative w-52 h-52 sm:w-56 sm:h-56 rounded-full bg-gradient-to-b from-[#CCFBF1]/80 to-[#E6FFFA] border-4 border-[#0D7E73]/30 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform duration-300">
                
                {/* Geometric Trofa Lab Emblem Pattern */}
                <div className="absolute inset-3 rounded-full border-2 border-dashed border-[#0D7E73]/40" />
                
                {/* Center Owner Portrait (Larger Scale) */}
                <div className="relative z-10 w-44 h-44 sm:w-48 sm:h-48 rounded-full overflow-hidden border-4 border-white shadow-xl bg-slate-100">
                  <img 
                    src={teamMembers[1].image} 
                    alt={teamMembers[1].name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Owner Name (Large & Bold Typography) */}
            <h3 className="text-2xl sm:text-3xl font-black text-[#042F2C] tracking-tight mb-1 group-hover:text-[#0D7E73] transition-colors">
              {teamMembers[1].name}
            </h3>

            {/* Owner Role with Subtitle */}
            <p className="text-sm font-black text-[#0D7E73] mb-1">
              {teamMembers[1].role[lang]}
            </p>

            <p className="text-xs text-[#64748B] font-semibold mb-4">
              {teamMembers[1].company}
            </p>

            {/* Executive Badge Checkpoint */}
            <div className="w-full pt-3.5 border-t border-[#CCFBF1] flex items-center justify-center gap-1.5 text-xs text-[#042F2C] font-bold">
              <ShieldCheck className="w-4 h-4 text-[#0D7E73] shrink-0" />
              <span>{teamMembers[1].cert[lang]}</span>
            </div>
          </motion.div>

          {/* ========================================================
              MEMBER 3 (RIGHT — HEAD OF B2B SOLUTIONS & ITAD)
             ======================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ y: -4 }}
            className="md:col-span-4 bg-white rounded-3xl p-6 border border-slate-200/90 hover:border-[#0D7E73]/60 shadow-[0_8px_24px_-4px_rgba(4,47,44,0.06)] hover:shadow-[0_16px_36px_-6px_rgba(13,126,115,0.14)] transition-all duration-300 flex flex-col items-center text-center relative group"
          >
            {/* Top Badge */}
            <div className="mb-4">
              <span className="inline-flex items-center gap-1 text-[10.5px] font-extrabold uppercase tracking-wider text-[#0D7E73] bg-[#F0FDFA] px-2.5 py-1 rounded-full border border-[#CCFBF1]">
                <ShieldCheck className="w-3 h-3 text-[#0D7E73]" />
                {teamMembers[2].badge[lang]}
              </span>
            </div>

            {/* Circular Image Container with Brand Emblem Background */}
            <div className="relative mb-5 flex items-center justify-center">
              {/* Circular Emblem Ring Behind Headshot */}
              <div className="absolute w-44 h-44 rounded-full bg-[#E6FFFA]/80 border-4 border-[#CCFBF1] -z-0 group-hover:scale-105 transition-transform duration-300 flex items-center justify-center">
                <div className="w-36 h-36 rounded-full border border-dashed border-[#0D7E73]/30" />
              </div>

              {/* Headshot Portrait */}
              <div className="relative z-10 w-36 h-36 rounded-full overflow-hidden border-4 border-white shadow-md bg-slate-100">
                <img 
                  src={teamMembers[2].image} 
                  alt={teamMembers[2].name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Member Details */}
            <h3 className="text-xl font-black text-[#042F2C] tracking-tight mb-1 group-hover:text-[#0D7E73] transition-colors">
              {teamMembers[2].name}
            </h3>

            <p className="text-xs sm:text-[13px] font-bold text-[#0D7E73] mb-1">
              {teamMembers[2].role[lang]}
            </p>

            <p className="text-[11px] text-[#64748B] font-medium mb-3.5">
              {teamMembers[2].company}
            </p>

            {/* Specialty Checkpoint Tag */}
            <div className="w-full pt-3 border-t border-slate-100 flex items-center justify-center gap-1.5 text-[11px] text-slate-600 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#0D7E73] shrink-0" />
              <span>{teamMembers[2].cert[lang]}</span>
            </div>
          </motion.div>

        </div>

        {/* 🌟 ACTION CTA FOOTER */}
        <div className="mt-12 sm:mt-14 flex flex-col sm:flex-row items-center justify-center gap-3 text-center">
          {onRequestQuote && (
            <button
              onClick={onRequestQuote}
              className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#0D7E73] hover:bg-[#0B6A61] transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 cursor-pointer uppercase tracking-wider group"
            >
              <span>{isPt ? 'Falar com a Nossa Equipa' : 'Speak with Our Leadership'}</span>
              <AnimatedArrowRight className="w-3.5 h-3.5 text-white group-hover:translate-x-1 transition-transform" />
            </button>
          )}

          {onExploreMore && (
            <button
              onClick={onExploreMore}
              className="inline-flex items-center justify-center gap-1.5 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-[#042F2C] bg-white hover:bg-[#F0FDFA] border border-slate-200 hover:border-[#0D7E73] transition-all shadow-2xs cursor-pointer"
            >
              <span>{isPt ? 'Conhecer o Nosso Laboratório na Trofa' : 'Explore Our Trofa Laboratory'}</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#0D7E73]" />
            </button>
          )}
        </div>

      </div>
    </section>
  );
};

export default MeetOurTeamSection;
