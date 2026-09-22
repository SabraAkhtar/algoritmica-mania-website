import React, { useState, useEffect, useRef } from 'react';
import { Language } from '../../types';
import { Star, Quote, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { ActionPrimaryButton } from '../ui/AnimatedButtons';

interface CustomerTestimonialsProps {
  lang: Language;
  onRequestQuote?: () => void;
}

interface Testimonial {
  id: string;
  name: string;
  role: { pt: string; en: string };
  company: string;
  avatar: string;
  rating: number;
  quote: { pt: string; en: string };
  savingsBadge: string;
}

export const CustomerTestimonials: React.FC<CustomerTestimonialsProps> = ({
  lang,
  onRequestQuote
}) => {
  const [isPaused, setIsPaused] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isPt = lang === 'pt';

  const testimonials: Testimonial[] = [
    {
      id: 't1',
      name: 'Miguel Vasconcelos',
      role: { pt: 'Diretor de TI', en: 'IT Director' },
      company: 'Logística Nortenha',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80',
      rating: 5,
      quote: {
        pt: 'Equipámos 2 filiais com 45 laptops Dell Grade A+. Poupança superior a 28.000€ com garantia fiável e apoio direto na Trofa.',
        en: 'Equipped 2 branch offices with 45 Dell Grade A+ laptops. Saved over €28,000 with rock-solid warranty and direct Trofa support.'
      },
      savingsBadge: '–62% cost'
    },
    {
      id: 't2',
      name: 'Sofia Henriques',
      role: { pt: 'Head of Operations', en: 'Head of Operations' },
      company: 'NexTech Studio',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&h=120&q=80',
      rating: 5,
      quote: {
        pt: 'Switches Cisco e firewalls Fortinet entregues com relatório de 28 testes, firmware limpo e expedição em menos de 24 horas.',
        en: 'Cisco switches and Fortinet firewalls delivered with full 28-point diagnostic reports, clean firmware, and 24-hour dispatch.'
      },
      savingsBadge: '–68% capex'
    },
    {
      id: 't3',
      name: 'Rui Pedro Moreira',
      role: { pt: 'Diretor Geral', en: 'Managing Director' },
      company: 'Moreira Consultoria',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&h=120&q=80',
      rating: 5,
      quote: {
        pt: 'Comprámos 15 ThinkPads em estado impecável. Excelente acompanhamento técnico e entrega pontual diretamente no nosso escritório.',
        en: 'Purchased 15 ThinkPads in pristine Grade A+ condition. Outstanding technical guidance and on-time office delivery.'
      },
      savingsBadge: '–55% budget'
    },
    {
      id: 't4',
      name: 'Bernardo Castro',
      role: { pt: 'Lead Architect', en: 'Lead Architect' },
      company: 'Fintech Hub',
      avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=120&h=120&q=80',
      rating: 5,
      quote: {
        pt: 'Servidores Dell PowerEdge com certificação completa e relatórios SMART que cumpriram todas as exigências da nossa auditoria de TI.',
        en: 'Dell PowerEdge servers with full hardware certification and SMART diagnostics that met all our rigorous IT security compliance.'
      },
      savingsBadge: '–70% enterprise'
    },
    {
      id: 't5',
      name: 'Catarina Mendes',
      role: { pt: 'CTO', en: 'CTO' },
      company: 'InnoVate Labs',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=120&h=120&q=80',
      rating: 5,
      quote: {
        pt: 'Renovação completa de 30 workstations para a nossa equipa de design. Suporte técnico pós-venda excecional e preços imbatíveis.',
        en: 'Complete workstation refresh for our 30-person design team. Exceptional post-sale support and unbeatable enterprise pricing.'
      },
      savingsBadge: '–58% spend'
    },
    {
      id: 't6',
      name: 'André Figueiredo',
      role: { pt: 'IT Manager', en: 'IT Manager' },
      company: 'GreenBuild SA',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=120&h=120&q=80',
      rating: 5,
      quote: {
        pt: 'Infraestrutura de rede completa — switches, APs e firewall — tudo instalado e operacional em menos de dois dias. Serviço 5 estrelas.',
        en: 'Complete network infrastructure — switches, APs, firewall — all installed and live in under two days. A genuine 5-star experience.'
      },
      savingsBadge: '–65% infra'
    }
  ];

  // Triple the array for a perfectly seamless infinite loop
  const loopItems = [...testimonials, ...testimonials, ...testimonials];

  // rAF-based smooth auto-scroll
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;
    let rafId: number;
    const speed = 0.6;

    const tick = () => {
      if (!isPaused && container) {
        const singleSetWidth = container.scrollWidth / 3;
        if (container.scrollLeft >= singleSetWidth * 2) {
          container.scrollLeft -= singleSetWidth;
        } else {
          container.scrollLeft += speed;
        }
      }
      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [isPaused]);

  return (
    <section
      id="section-customer-testimonials"
      className="relative overflow-hidden bg-white py-14 sm:py-18 border-y border-slate-100"
    >
      {/* Very subtle teal tint in background */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 100%, rgba(13,126,115,0.04) 0%, transparent 70%)' }}
      />

      {/* ── SECTION HEADER ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 sm:pb-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Verified badge with stars */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold mb-4 bg-[#CCFBF1] text-[#0D7E73]">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-[#0D7E73] text-[#0D7E73]" />
              ))}
            </div>
            <span>{isPt ? 'AVALIAÇÕES VERIFICADAS' : 'VERIFIED REVIEWS'}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-[#042F2C] mb-3">
            {isPt ? (
              <>O Que os Nossos <span className="text-[#0D7E73]">Clientes Dizem</span></>
            ) : (
              <>What Our <span className="text-[#0D7E73]">Clients Say</span></>
            )}
          </h2>
          <p className="text-sm sm:text-base leading-relaxed max-w-xl mx-auto text-slate-500">
            {isPt
              ? 'Empresas reais, poupanças reais. Veja porque mais de 500 organizações confiam na Algoritmica Mania.'
              : 'Real businesses, real savings. See why 500+ organisations trust Algoritmica Mania for their IT needs.'}
          </p>
        </motion.div>
      </div>

      {/* ── INFINITE TESTIMONIAL TICKER ── */}
      <div
        className="relative z-10"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Edge fade masks — light coloured */}
        <div
          className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28 z-10"
          style={{ background: 'linear-gradient(to right, #ffffff, transparent)' }}
        />
        <div
          className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 z-10"
          style={{ background: 'linear-gradient(to left, #ffffff, transparent)' }}
        />

        <div
          ref={scrollContainerRef}
          className="flex gap-5 overflow-x-auto py-4 px-6"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            cursor: isPaused ? 'default' : 'grab'
          }}
        >
          {loopItems.map((t, idx) => (
            <div
              key={`${t.id}-${idx}`}
              className="w-[340px] sm:w-[390px] shrink-0 relative rounded-2xl p-6 sm:p-7 flex flex-col justify-between bg-white border border-slate-200 hover:border-[#0D7E73] shadow-sm hover:shadow-md transition-all duration-300 group"
            >
              {/* Stars + savings badge */}
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-0.5">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#0D7E73] text-[#0D7E73]" />
                  ))}
                </div>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-[#F0FDFA] text-[#0D7E73] border border-[#CCFBF1]">
                  {t.savingsBadge}
                </span>
              </div>

              {/* Quote */}
              <div className="relative mb-6 flex-1">
                <Quote
                  className="w-7 h-7 absolute -top-1 -left-1 pointer-events-none text-[#CCFBF1]"
                  style={{ opacity: 0.8 }}
                />
                <p className="text-sm leading-relaxed pl-5 font-medium italic text-slate-600">
                  &ldquo;{isPt ? t.quote.pt : t.quote.en}&rdquo;
                </p>
              </div>

              {/* Profile footer */}
              <div className="pt-4 flex items-center gap-3.5 border-t border-slate-100">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover shrink-0 border-2 border-[#CCFBF1]"
                />
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm font-bold text-[#042F2C] truncate">{t.name}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#0D7E73] shrink-0" />
                  </div>
                  <div className="text-xs text-slate-400 truncate mt-0.5">
                    {isPt ? t.role.pt : t.role.en}
                    <span className="mx-1">·</span>
                    <span className="font-semibold text-slate-600">{t.company}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── BOTTOM CTA STRIP ── */}
      {onRequestQuote && (
        <div className="relative z-10 pt-8 sm:pt-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
            <p className="text-sm sm:text-base font-medium text-slate-500">
              {isPt
                ? 'Pronto para poupar no seu próximo investimento de TI?'
                : 'Ready to save on your next IT investment?'}
              {' '}
              <span className="font-bold text-[#0D7E73]">
                {isPt ? 'Fale connosco hoje.' : 'Talk to us today.'}
              </span>
            </p>
            <ActionPrimaryButton
              type="button"
              onClick={onRequestQuote}
              size="sm"
            >
              <span>{isPt ? 'Pedir Proposta' : 'Request a Quote'}</span>
            </ActionPrimaryButton>
          </div>
        </div>
      )}
    </section>
  );
};

export default CustomerTestimonials;
