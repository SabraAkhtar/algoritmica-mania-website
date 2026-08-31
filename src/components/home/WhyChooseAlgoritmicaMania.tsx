import React from 'react';
import { Language } from '../../types';
import { motion } from 'motion/react';
import { 
  Award,
  Users,
  Truck,
  ClipboardCheck,
  Lightbulb,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { AnimatedArrowRight } from '../ui/AnimatedArrow';
import { ActionSecondaryButton } from '../ui/AnimatedButtons';

interface WhyChooseAlgoritmicaManiaProps {
  lang: Language;
  onExploreMore?: () => void;
  onRequestQuote?: () => void;
}

export const WhyChooseAlgoritmicaMania: React.FC<WhyChooseAlgoritmicaManiaProps> = ({
  lang,
  onExploreMore,
  onRequestQuote
}) => {
  const isPt = lang === 'pt';

  const pillars = [
    {
      id: 'experience',
      icon: Award,
      title: {
        pt: 'Experiência Comprovada',
        en: 'Proven Experience'
      },
      desc: {
        pt: 'Anos de excelência no fornecimento de hardware empresarial e projetos com satisfação consistente.',
        en: 'Years of delivering quality work across diverse projects with consistent client satisfaction.'
      },
      badge: {
        pt: 'HISTÓRICO CORPORATIVO',
        en: 'ENTERPRISE TRACK RECORD'
      }
    },
    {
      id: 'team',
      icon: Users,
      title: {
        pt: 'Equipa Especializada',
        en: 'Dedicated Team'
      },
      desc: {
        pt: 'Engenheiros qualificados a trabalhar em conjunto para assegurar o melhor resultado em cada requisito.',
        en: 'Skilled professionals working together to provide the best results for every requirement.'
      },
      badge: {
        pt: 'ENGENHARIA NA TROFA',
        en: 'LABORATORY SPECIALISTS'
      }
    },
    {
      id: 'delivery',
      icon: Truck,
      title: {
        pt: 'Entregas Rápidas no Prazo',
        en: 'On-Time Delivery'
      },
      desc: {
        pt: 'Expedição célere em 24/48h e logística segura com acompanhamento pontual para a sua empresa.',
        en: 'Fast 24/48h dispatch and reliable logistics ensuring dependable, on-schedule hardware arrival.'
      },
      badge: {
        pt: 'LOGÍSTICA CÉLERE',
        en: 'RAPID DISPATCH'
      }
    },
    {
      id: 'quality',
      icon: ClipboardCheck,
      title: {
        pt: 'Foco na Qualidade',
        en: 'Quality Focus'
      },
      desc: {
        pt: 'Compromisso com auditoria rigorosa de bancada em 50 pontos, assegurando máxima fiabilidade.',
        en: 'Commitment to maintaining high standards in every service, ensuring dependable results.'
      },
      badge: {
        pt: 'AUDITORIA EM 50 PONTOS',
        en: '50-POINT AUDIT'
      }
    },
    {
      id: 'solutions',
      icon: Lightbulb,
      title: {
        pt: 'Soluções Acessíveis',
        en: 'Affordable Solutions'
      },
      desc: {
        pt: 'Opções rentáveis concebidas à medida do orçamento, mantendo padrões de excelência de hardware Tier-1.',
        en: 'Cost-effective options designed to fit budgets while maintaining excellent service standards.'
      },
      badge: {
        pt: 'POUPANÇA ATÉ 70%',
        en: 'UP TO 70% SAVINGS'
      }
    }
  ];

  return (
    <section className="py-10 sm:py-12 lg:py-14 bg-gradient-to-b from-white via-[#F8FAFC] to-white text-[#042F2C] relative overflow-hidden border-b border-slate-200/80">
      
      {/* Subtle Ambient Background - Clean & Light */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[750px] h-[280px] bg-[#E6FFFA]/50 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* 🌟 REFINED HEADER — COMPACT & EASY TO SCAN */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#F0FDFA] text-[#0D7E73] border border-[#CCFBF1] mb-2.5 shadow-2xs">
            <Sparkles className="w-3 h-3 text-[#0D7E73]" />
            <span>{isPt ? 'DIFERENCIAIS DE EXCELÊNCIA' : 'WHY TRUST OUR COMPANY'}</span>
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#042F2C] tracking-tight leading-tight mb-2.5">
            {isPt ? (
              <>
                Porquê Escolher a <span className="text-[#0D7E73]">Nossa Empresa</span>?
              </>
            ) : (
              <>
                Why Trust <span className="text-[#0D7E73]">Our Company</span>?
              </>
            )}
          </h2>

          {/* Short Subtitle */}
          <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed max-w-xl mx-auto">
            {isPt 
              ? 'Rigor de laboratório na Trofa, fiabilidade de hardware empresarial e suporte dedicado para a sua organização.'
              : 'Laboratory engineering rigor in Trofa, enterprise hardware reliability, and dedicated support for your organization.'}
          </p>
        </div>

        {/* 🌟 5 BALANCED, LIGHT ENTERPRISE CARDS (3 Top + 2 Bottom) */}
        <div className="space-y-4 sm:space-y-5">
          
          {/* Top Row: 3 Equal Balanced Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
            {pillars.slice(0, 3).map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: idx * 0.08 }}
                  whileHover={{ y: -3 }}
                  className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/90 hover:border-[#0D7E73]/60 shadow-[0_4px_16px_-2px_rgba(4,47,44,0.05)] hover:shadow-[0_10px_24px_-4px_rgba(13,126,115,0.12)] transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Header: Icon + Small Badge */}
                    <div className="flex items-center justify-between gap-2 mb-3.5">
                      <div className="w-11 h-11 rounded-xl bg-[#F0FDFA] border border-[#CCFBF1] text-[#0D7E73] flex items-center justify-center group-hover:bg-[#0D7E73] group-hover:text-white transition-all duration-300 shadow-2xs shrink-0">
                        <Icon className="w-5 h-5 stroke-[2] transition-transform duration-300 group-hover:scale-105" />
                      </div>
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#0D7E73] bg-[#F0FDFA] px-2 py-0.5 rounded-md border border-[#CCFBF1]/70">
                        {item.badge[lang]}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-base sm:text-lg font-bold text-[#042F2C] group-hover:text-[#0D7E73] transition-colors tracking-tight mb-1.5">
                      {item.title[lang]}
                    </h3>

                    {/* Short Description */}
                    <p className="text-xs sm:text-[13px] text-[#64748B] leading-relaxed line-clamp-2">
                      {item.desc[lang]}
                    </p>
                  </div>

                  {/* Bottom Verification Accent */}
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-semibold text-[#0D7E73]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#0D7E73] shrink-0" />
                    <span>{isPt ? 'Garantido com SLA B2B' : 'Guaranteed Enterprise SLA'}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom Row: 2 Equal Balanced Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
            {pillars.slice(3, 5).map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: 0.25 + idx * 0.08 }}
                  whileHover={{ y: -3 }}
                  className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/90 hover:border-[#0D7E73]/60 shadow-[0_4px_16px_-2px_rgba(4,47,44,0.05)] hover:shadow-[0_10px_24px_-4px_rgba(13,126,115,0.12)] transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Header: Icon + Small Badge */}
                    <div className="flex items-center justify-between gap-2 mb-3.5">
                      <div className="w-11 h-11 rounded-xl bg-[#F0FDFA] border border-[#CCFBF1] text-[#0D7E73] flex items-center justify-center group-hover:bg-[#0D7E73] group-hover:text-white transition-all duration-300 shadow-2xs shrink-0">
                        <Icon className="w-5 h-5 stroke-[2] transition-transform duration-300 group-hover:scale-105" />
                      </div>
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#0D7E73] bg-[#F0FDFA] px-2 py-0.5 rounded-md border border-[#CCFBF1]/70">
                        {item.badge[lang]}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-base sm:text-lg font-bold text-[#042F2C] group-hover:text-[#0D7E73] transition-colors tracking-tight mb-1.5">
                      {item.title[lang]}
                    </h3>

                    {/* Short Description */}
                    <p className="text-xs sm:text-[13px] text-[#64748B] leading-relaxed line-clamp-2">
                      {item.desc[lang]}
                    </p>
                  </div>

                  {/* Bottom Verification Accent */}
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-semibold text-[#0D7E73]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#0D7E73] shrink-0" />
                    <span>{isPt ? 'Conformidade & Suporte Direto' : 'Direct Support & Quality Assured'}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

        {/* 🌟 ACTION CTA FOOTER — COMPACT */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 text-center">
          {onRequestQuote && (
            <ActionSecondaryButton
              onClick={onRequestQuote}
              size="md"
              className="bg-[#F0FDFA] hover:bg-[#CCFBF1] border border-[#CCFBF1]"
            >
              {isPt ? 'Pedir Proposta Corporativa' : 'Request Corporate Proposal'}
            </ActionSecondaryButton>
          )}

          {onExploreMore && (
            <button
              onClick={onExploreMore}
              className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-[#042F2C] bg-white hover:bg-[#F0FDFA] border border-slate-200 hover:border-[#0D7E73] transition-all shadow-2xs cursor-pointer"
            >
              <span>{isPt ? 'Conhecer Metodologia de Laboratório' : 'Learn Laboratory Methodology'}</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#0D7E73]" />
            </button>
          )}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseAlgoritmicaMania;
