import React from 'react';
import { Language } from '../../types';
import { 
  CheckCircle2, 
  ShieldCheck, 
  Tag, 
  ClipboardCheck
} from 'lucide-react';
import { AnimatedArrowRight } from '../ui/AnimatedArrow';
import { ActionPrimaryButton } from '../ui/AnimatedButtons';
import { motion } from 'motion/react';
import refurbHardwareImg from '../../assets/images/refurb_laptop_datacenter_1787648514586.jpg';

interface WhyRefurbishedShowcaseProps {
  lang: Language;
  onExploreMore?: () => void;
}

export const WhyRefurbishedShowcase: React.FC<WhyRefurbishedShowcaseProps> = ({
  lang,
  onExploreMore
}) => {
  const isPt = lang === 'pt';

  return (
    <section className="py-14 sm:py-18 lg:py-22 bg-white text-[#042F2C] border-b border-slate-100 overflow-hidden relative">
      {/* Subtle Ambient Mint Glows */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#CCFBF1]/30 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#99F6E4]/20 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* ========================================================
              LEFT COLUMN: REFURBISHED HARDWARE VISUAL WITH INTEGRATED KEY VALUE STATS
             ======================================================== */}
          <motion.div 
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col gap-4"
          >
            {/* Main Visual Image Card */}
            <div className="relative w-full rounded-2xl overflow-hidden bg-[#F0FDFA] border border-[#CCFBF1] shadow-[0_12px_30px_-8px_rgba(4,47,44,0.08)]">
              <img
                src={refurbHardwareImg}
                alt="Why Choose Refurbished Technology - Laptops & Datacenter"
                className="w-full h-64 sm:h-72 object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#042F2C]/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white">
                <span className="text-xs font-bold flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#5EEAD4]" />
                  <span>{isPt ? 'Equipamento Grade A+ Certificado' : 'Grade A+ Certified Equipment'}</span>
                </span>
                <span className="text-[11px] font-extrabold px-2 py-0.5 rounded bg-[#0D7E73] text-white">
                  ISO 9001
                </span>
              </div>
            </div>

            {/* 3 Integrated Feature Stat Cards (Clean Grid instead of Floating Stickers) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {/* Stat 1 */}
              <div className="p-3 rounded-xl bg-[#F0FDFA]/70 border border-[#CCFBF1] flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#0D7E73] text-white flex items-center justify-center shrink-0 shadow-2xs">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-black text-[#042F2C]">
                    {isPt ? 'Garantia 12-36M' : '12-36M Warranty'}
                  </div>
                  <div className="text-[10px] text-[#64748B] font-medium">
                    {isPt ? 'Substituição direta' : 'Direct SLA swap'}
                  </div>
                </div>
              </div>

              {/* Stat 2 */}
              <div className="p-3 rounded-xl bg-[#F0FDFA]/70 border border-[#CCFBF1] flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#0D7E73] text-white flex items-center justify-center shrink-0 shadow-2xs">
                  <Tag className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-black text-[#042F2C]">
                    {isPt ? 'Até 70% Menos' : 'Up to 70% Off'}
                  </div>
                  <div className="text-[10px] text-[#64748B] font-medium">
                    {isPt ? 'Face ao novo' : 'vs. new MSRP'}
                  </div>
                </div>
              </div>

              {/* Stat 3 */}
              <div className="p-3 rounded-xl bg-[#F0FDFA]/70 border border-[#CCFBF1] flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#0D7E73] text-white flex items-center justify-center shrink-0 shadow-2xs">
                  <ClipboardCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-black text-[#042F2C]">
                    {isPt ? '100% Testado' : '100% Tested'}
                  </div>
                  <div className="text-[10px] text-[#64748B] font-medium">
                    {isPt ? 'Em laboratório' : 'Stress-tested in lab'}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ========================================================
              RIGHT COLUMN: EDITORIAL TEXT & BULLETS
             ======================================================== */}
          <motion.div 
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-6 flex flex-col items-start text-left"
          >
            {/* Eyebrow */}
            <div className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#0D7E73] mb-3">
              {isPt ? 'UM POUCO SOBRE NÓS' : 'A BIT ABOUT US'}
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#042F2C] mb-5 leading-tight uppercase">
              {isPt ? (
                <>
                  Porquê Escolher Tecnologia <span className="text-[#0D7E73]">Recondicionada</span>?
                </>
              ) : (
                <>
                  Why Choose <span className="text-[#0D7E73]">Refurbished</span> Technology?
                </>
              )}
            </h2>

            {/* Paragraph Description */}
            <p className="text-sm sm:text-base text-[#64748B] leading-relaxed mb-6 max-w-xl">
              {isPt
                ? 'Workstations de topo empresarial, ecossistema Apple e hardware para centros de dados rigorosamente testados sob condições laboratoriais na Trofa. Máxima performance com poupança até 70%, garantia dedicada de 12 a 36 meses e sustentabilidade circular comprovada.'
                : 'Enterprise-grade workstations, Apple ecosystem, and datacenter hardware thoroughly stress-tested in clean laboratory conditions. Premium performance with up to 70% direct budget savings, dedicated 12 to 36-month SLA warranty, and verified circular sustainability.'}
            </p>

            {/* 3 Checklist Items with Teal Outline Icons */}
            <div className="space-y-3.5 mb-8 w-full max-w-lg">
              
              {/* Item 1 */}
              <div className="flex items-center gap-3 text-xs sm:text-sm font-medium text-[#042F2C]">
                <div className="w-5 h-5 rounded-full text-[#0D7E73] flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-[#0D7E73]" />
                </div>
                <span>
                  {isPt 
                    ? 'Até 70% de poupança direta face ao valor de equipamento novo (MSRP)' 
                    : 'Up to 70% direct savings compared to new MSRP'}
                </span>
              </div>

              {/* Item 2 */}
              <div className="flex items-center gap-3 text-xs sm:text-sm font-medium text-[#042F2C]">
                <div className="w-5 h-5 rounded-full text-[#0D7E73] flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-[#0D7E73]" />
                </div>
                <span>
                  {isPt 
                    ? '12 a 36 meses de garantia empresarial com substituição direta SLA' 
                    : '12 to 36-month enterprise warranty with SLA swap'}
                </span>
              </div>

              {/* Item 3 */}
              <div className="flex items-center gap-3 text-xs sm:text-sm font-medium text-[#042F2C]">
                <div className="w-5 h-5 rounded-full text-[#0D7E73] flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-[#0D7E73]" />
                </div>
                <span>
                  {isPt 
                    ? '80% de redução da pegada carbónica e total conformidade ESG' 
                    : '80% carbon footprint reduction and ESG compliance'}
                </span>
              </div>

            </div>

            {/* CTA Button with Video Animation */}
            {onExploreMore && (
              <ActionPrimaryButton
                type="button"
                onClick={onExploreMore}
                size="md"
              >
                <span>{isPt ? 'EXPLORAR MAIS' : 'EXPLORE MORE'}</span>
              </ActionPrimaryButton>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WhyRefurbishedShowcase;
