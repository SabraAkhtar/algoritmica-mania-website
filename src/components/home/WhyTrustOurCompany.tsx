import React from 'react';
import { Language } from '../../types';
import { motion } from 'motion/react';
import { 
  Award,
  ShieldCheck,
  Headphones,
  Truck,
  MoreVertical,
  TrendingUp,
  Users,
  CheckCircle2
} from 'lucide-react';
import { AnimatedArrowRight } from '../ui/AnimatedArrow';
import { ActionPrimaryButton } from '../ui/AnimatedButtons';

interface WhyTrustOurCompanyProps {
  lang: Language;
  onExploreMore?: () => void;
  onRequestQuote?: () => void;
}

export const WhyTrustOurCompany: React.FC<WhyTrustOurCompanyProps> = ({
  lang,
  onRequestQuote
}) => {
  const isPt = lang === 'pt';

  return (
    <section className="py-10 sm:py-14 lg:py-18 bg-white text-[#042F2C] relative border-b border-slate-100">
      
      {/* Background Soft Glows & Ambient Gradient (Strict Brand Mint/Teal Palette) */}
      <div className="absolute top-1/4 right-10 w-[420px] h-[420px] bg-[#CCFBF1]/35 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-5 left-10 w-[360px] h-[360px] bg-[#99F6E4]/25 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start relative">
          
          {/* =========================================================================
              LEFT COLUMN: COMPACT CONDENSED STACKED TYPOGRAPHY (STICKY HERO CONTENT)
             ========================================================================= */}
          <div className="lg:col-span-5 flex flex-col justify-start lg:sticky lg:top-28 self-start">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {/* STACKED HERO WORDS */}
              <div className="space-y-0 select-none">
                <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-black tracking-tight text-[#0D7E73] leading-[0.92] uppercase drop-shadow-2xs">
                  {isPt ? 'QUALIDADE.' : 'TESTED.'}
                </h1>
                <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-black tracking-tight text-[#042F2C] leading-[0.92] uppercase">
                  {isPt ? 'SUPORTE.' : 'SUPPORT.'}
                </h1>
                <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-black tracking-tight text-[#0D7E73] leading-[0.92] uppercase drop-shadow-2xs">
                  {isPt ? 'CONFIANÇA.' : 'TRUST.'}
                </h1>
              </div>

              {/* Horizontal Gradient Accent Line */}
              <div className="w-14 h-1 bg-gradient-to-r from-[#0D7E73] to-[#5EEAD4] rounded-full my-3 sm:my-4" />

              {/* Headline & Description */}
              <div className="space-y-1.5">
                <h2 className="text-xl sm:text-2xl font-black text-[#042F2C] tracking-tight leading-snug">
                  {isPt ? (
                    <>
                      Porquê Confiar na <span className="text-[#0D7E73]">Nossa Empresa</span>?
                    </>
                  ) : (
                    <>
                      Why Trust <span className="text-[#0D7E73]">Our Company</span>?
                    </>
                  )}
                </h2>
                
                <p className="text-xs sm:text-sm text-[#64748B] font-medium leading-relaxed max-w-sm">
                  {isPt 
                    ? 'Tecnologia fiável. Experiência comprovada. Apoio direto e dedicado.'
                    : 'Reliable technology. Proven experience. Direct technical support.'}
                </p>
                
                <p className="text-xs sm:text-[13px] font-bold text-[#0D7E73]">
                  {isPt 
                    ? 'Tornamos a tecnologia simples, segura e fiável para o seu negócio.' 
                    : 'We make technology simple, secure, and dependable for your business.'}
                </p>
              </div>

              {/* Bottom Row: Micro Dot Matrix + CTA */}
              <div className="flex items-center gap-3.5 pt-4 sm:pt-5">
                {/* Dot Matrix in brand Teal */}
                <div className="grid grid-cols-4 gap-1 opacity-40">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0D7E73]" />
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0D7E73]" />
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0D7E73]" />
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0D7E73]" />
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0D7E73]" />
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0D7E73]" />
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0D7E73]" />
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0D7E73]" />
                </div>

                {/* Slider Pills */}
                <div className="flex items-center gap-1">
                  <div className="w-4 h-1.5 rounded-full bg-[#0D7E73]" />
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                </div>

                {/* CTA Button with Video Animation */}
                {onRequestQuote && (
                  <ActionPrimaryButton
                    type="button"
                    onClick={onRequestQuote}
                    size="sm"
                    className="ml-auto"
                  >
                    <span>{isPt ? 'Pedir Proposta' : 'Request Proposal'}</span>
                  </ActionPrimaryButton>
                )}
              </div>
            </motion.div>
          </div>

          {/* =========================================================================
              RIGHT COLUMN: 4 CLEAN STRAIGHT VERTICALLY ALIGNED CARDS (NORMAL SCROLLING)
             ========================================================================= */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-end justify-start relative">
            
            <div className="w-full max-w-md space-y-4 relative">

              {/* 🌟 CARD 1: PROVEN EXPERIENCE (Brand Teal Palette) */}
              <motion.div 
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.015, y: -2 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl p-4 border border-slate-200/90 shadow-[0_4px_16px_-3px_rgba(4,47,44,0.06)] relative overflow-hidden transition-all duration-200 cursor-default group"
              >
                {/* Accent Notch Top-Left in Brand Teal */}
                <div className="absolute top-0 left-0 w-2.5 h-9 bg-[#0D7E73] rounded-br-xl" />

                {/* Card Top Row: 3D Glossy Icon Button + 3-Dots */}
                <div className="flex items-center justify-between mb-1.5 pl-2">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#F0FDFA] to-[#CCFBF1] text-[#0D7E73] border border-[#99F6E4]/60 flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform">
                    <Award className="w-4 h-4 stroke-[2]" />
                  </div>
                  <div className="text-slate-400 hover:text-slate-600 p-0.5">
                    <MoreVertical className="w-4 h-4" />
                  </div>
                </div>

                {/* Card Content & Title */}
                <div className="pl-2 pr-14 relative">
                  <h3 className="text-sm sm:text-base font-black text-[#0D7E73] tracking-tight uppercase mb-0.5">
                    {isPt ? 'EXPERIÊNCIA COMPROVADA' : 'PROVEN EXPERIENCE'}
                  </h3>
                  <div className="w-6 h-0.5 bg-slate-200 mb-1" />
                  <p className="text-[11.5px] sm:text-xs text-[#64748B] leading-relaxed font-medium">
                    {isPt 
                      ? 'Anos de experiência a fornecer computadores de qualidade e apoio técnico fiável.'
                      : 'Years of experience delivering reliable business computers and friendly IT support.'}
                  </p>

                  {/* Miniature Trend Widget in Bottom Right */}
                  <div className="absolute bottom-0 right-0 w-10 h-8 rounded-xl bg-[#F0FDFA] border border-[#CCFBF1] flex items-center justify-center shadow-2xs group-hover:bg-[#0D7E73] group-hover:text-white transition-colors text-[#0D7E73]">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>

              {/* 🌟 CARD 2: ENTERPRISE-GRADE RELIABILITY (Deep Dark Pine Palette) */}
              <motion.div 
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.015, y: -2 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.05 }}
                className="bg-white rounded-2xl p-4 border border-slate-200/90 shadow-[0_4px_16px_-3px_rgba(4,47,44,0.06)] relative overflow-hidden transition-all duration-200 cursor-default group"
              >
                {/* Accent Notch Top-Left in Deep Dark Pine */}
                <div className="absolute top-0 left-0 w-2.5 h-9 bg-[#042F2C] rounded-br-xl" />

                {/* Card Top Row: 3D Glossy Icon Button + 3-Dots */}
                <div className="flex items-center justify-between mb-1.5 pl-2">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#042F2C] to-[#0D7E73] text-[#5EEAD4] border border-[#0D7E73] flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform">
                    <ShieldCheck className="w-4 h-4 stroke-[2]" />
                  </div>
                  <div className="text-slate-400 hover:text-slate-600 p-0.5">
                    <MoreVertical className="w-4 h-4" />
                  </div>
                </div>

                {/* Card Content & Title */}
                <div className="pl-2 pr-14 relative">
                  <h3 className="text-sm sm:text-base font-black text-[#042F2C] tracking-tight uppercase mb-0.5">
                    {isPt ? 'QUALIDADE DE CONFIANÇA' : 'QUALITY YOU CAN TRUST'}
                  </h3>
                  <div className="w-6 h-0.5 bg-slate-200 mb-1" />
                  <p className="text-[11.5px] sm:text-xs text-[#64748B] leading-relaxed font-medium">
                    {isPt 
                      ? 'Portáteis, computadores e servidores testados a 100% para o trabalho diário.'
                      : 'Laptops, desktops, and servers 100% tested and built for everyday work.'}
                  </p>
                </div>
              </motion.div>

              {/* 🌟 CARD 3: DEDICATED TECHNICAL SUPPORT (Brand Teal Palette) */}
              <motion.div 
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.015, y: -2 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="bg-white rounded-2xl p-4 border border-slate-200/90 shadow-[0_4px_16px_-3px_rgba(4,47,44,0.06)] relative overflow-hidden transition-all duration-200 cursor-default group"
              >
                {/* Accent Notch Top-Left in Brand Mint/Teal */}
                <div className="absolute top-0 left-0 w-2.5 h-9 bg-[#5EEAD4] rounded-br-xl" />

                {/* Card Top Row: 3D Glossy Icon Button + 3-Dots in Brand Teal */}
                <div className="flex items-center justify-between mb-1.5 pl-2">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#F0FDFA] to-[#CCFBF1] text-[#0D7E73] border border-[#99F6E4]/60 flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform">
                    <Headphones className="w-4 h-4 stroke-[2]" />
                  </div>
                  <div className="text-slate-400 hover:text-slate-600 p-0.5">
                    <MoreVertical className="w-4 h-4" />
                  </div>
                </div>

                {/* Card Content & Title */}
                <div className="pl-2 pr-14 relative">
                  <h3 className="text-sm sm:text-base font-black text-[#0D7E73] tracking-tight uppercase mb-0.5">
                    {isPt ? 'APOIO TÉCNICO DIRETO' : 'DIRECT IT SUPPORT'}
                  </h3>
                  <div className="w-6 h-0.5 bg-slate-200 mb-1" />
                  <p className="text-[11.5px] sm:text-xs text-[#64748B] leading-relaxed font-medium">
                    {isPt 
                      ? 'Ajuda amigável e direta de técnicos experientes sempre que tiver dúvidas.'
                      : 'Friendly, direct help from experienced technicians whenever you have a question.'}
                  </p>

                  {/* Miniature Metric Widget in Bottom Right */}
                  <div className="absolute bottom-0 right-0 w-10 h-8 rounded-xl bg-[#F0FDFA] border border-[#CCFBF1] flex items-center justify-center gap-0.5 shadow-2xs group-hover:bg-[#0D7E73] group-hover:text-white transition-colors text-[#0D7E73]">
                    <div className="w-0.5 h-2 bg-current rounded-full" />
                    <div className="w-0.5 h-3 bg-current rounded-full" />
                    <div className="w-0.5 h-4.5 bg-current rounded-full" />
                  </div>
                </div>
              </motion.div>

              {/* 🌟 CARD 4: FAST & RELIABLE DELIVERY (Deep Pine & Teal Palette) */}
              <motion.div 
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.015, y: -2 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.15 }}
                className="bg-white rounded-2xl p-4 border border-slate-200/90 shadow-[0_4px_16px_-3px_rgba(4,47,44,0.06)] relative overflow-hidden transition-all duration-200 cursor-default group"
              >
                {/* Accent Notch Top-Left in Deep Dark Pine */}
                <div className="absolute top-0 left-0 w-2.5 h-9 bg-[#042F2C] rounded-br-xl" />

                {/* Card Top Row: 3D Glossy Icon Button + 3-Dots */}
                <div className="flex items-center justify-between mb-1.5 pl-2">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#F0FDFA] to-[#CCFBF1] text-[#042F2C] border border-[#99F6E4]/60 flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform">
                    <Truck className="w-4 h-4 stroke-[2]" />
                  </div>
                  <div className="text-slate-400 hover:text-slate-600 p-0.5">
                    <MoreVertical className="w-4 h-4" />
                  </div>
                </div>

                {/* Card Content & Title */}
                <div className="pl-2 pr-14 relative">
                  <h3 className="text-sm sm:text-base font-black text-[#042F2C] tracking-tight uppercase mb-0.5">
                    {isPt ? 'ENTREGA RÁPIDA & GARANTIA' : 'FAST DELIVERY & WARRANTY'}
                  </h3>
                  <div className="w-6 h-0.5 bg-slate-200 mb-1" />
                  <p className="text-[11.5px] sm:text-xs text-[#64748B] leading-relaxed font-medium">
                    {isPt 
                      ? 'Envio rápido e garantia total até 36 meses com assistência local.'
                      : 'Quick order dispatch and up to 36 months warranty with local support.'}
                  </p>

                  {/* Miniature Check Widget in Bottom Right */}
                  <div className="absolute bottom-0 right-0 w-10 h-8 rounded-xl bg-[#F0FDFA] border border-[#CCFBF1] flex items-center justify-center shadow-2xs group-hover:bg-[#042F2C] group-hover:text-white transition-colors text-[#042F2C]">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default WhyTrustOurCompany;
