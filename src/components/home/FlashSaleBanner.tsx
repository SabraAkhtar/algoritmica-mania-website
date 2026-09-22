import React, { useState, useEffect } from 'react';
import { Language } from '../../types';
import { Sparkles, ShieldCheck, Check, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ActionPrimaryButton } from '../ui/AnimatedButtons';

interface FlashSaleBannerProps {
  lang: Language;
  onNavigateProducts: () => void;
}

interface TimeUnitProps {
  value: number;
  label: string;
  isSecs?: boolean;
}

const TimerBox: React.FC<TimeUnitProps> = ({ value, label, isSecs }) => {
  const formatted = value.toString().padStart(2, '0');

  return (
    <div className="flex flex-col items-center">
      <div 
        className={`relative flex items-center justify-center w-11 h-12 sm:w-13 sm:h-14 md:w-14 md:h-15 rounded-xl bg-white border transition-all duration-300 shadow-2xs overflow-hidden ${
          isSecs 
            ? 'border-[#0D7E73] shadow-xs ring-1 ring-[#0D7E73]/20' 
            : 'border-[#CCFBF1]'
        }`}
      >
        {/* Subtle Horizontal Groove */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[1px] bg-[#CCFBF1] z-20 pointer-events-none" />

        <div className="relative h-7 sm:h-8 flex items-center justify-center overflow-hidden z-10">
          <AnimatePresence mode="popLayout">
            <motion.span
              key={formatted}
              initial={{ y: -16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 16, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className={`text-base sm:text-lg md:text-xl font-mono font-black tracking-tight ${
                isSecs ? 'text-[#0D7E73]' : 'text-[#042F2C]'
              }`}
            >
              {formatted}
            </motion.span>
          </AnimatePresence>
        </div>

        {isSecs && (
          <span className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-[#0D7E73] animate-ping" />
        )}
      </div>

      <span className="text-[9px] sm:text-[10px] text-[#64748B] font-bold uppercase tracking-wider mt-1.5">
        {label}
      </span>
    </div>
  );
};

export const FlashSaleBanner: React.FC<FlashSaleBannerProps> = ({
  lang,
  onNavigateProducts
}) => {
  // Live dynamic countdown timer
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 14,
    mins: 59,
    secs: 35
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.secs > 0) {
          return { ...prev, secs: prev.secs - 1 };
        } else if (prev.mins > 0) {
          return { ...prev, mins: 59, secs: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, mins: 59, secs: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, mins: 59, secs: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const discountTiers = [
    {
      discount: '5% OFF',
      threshold: lang === 'pt' ? 'Encomendas > 300€' : 'Orders above €300',
      active: false
    },
    {
      discount: '7% OFF',
      threshold: lang === 'pt' ? 'Encomendas > 500€' : 'Orders above €500',
      active: false
    },
    {
      discount: '10% OFF',
      threshold: lang === 'pt' ? 'Encomendas > 1.000€' : 'Orders above €1,000',
      active: false
    },
    {
      discount: '15% OFF',
      threshold: lang === 'pt' ? 'Encomendas > 2.000€' : 'Orders above €2,000',
      active: true,
      highlight: true
    }
  ];

  return (
    <div className="w-full my-10 sm:my-14">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full rounded-3xl bg-gradient-to-br from-white via-[#F8FFFD] to-[#F0FDFA] border border-[#CCFBF1] shadow-xs hover:shadow-md transition-shadow duration-300 p-6 sm:p-8 lg:p-10 overflow-hidden"
      >
        {/* Subtle geometric corner accent */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#CCFBF1]/40 via-[#F0FDFA]/20 to-transparent rounded-bl-full pointer-events-none -z-0" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          
          {/* LEFT COLUMN: Offer Badge, Heading, Supporting text, CTA & Trust badge */}
          <div className="lg:col-span-4 text-center lg:text-left flex flex-col justify-between items-center lg:items-start h-full">
            <div>
              {/* Offer Badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-[#F0FDFA] text-[#0D7E73] border border-[#CCFBF1] mb-3 shadow-2xs">
                <Sparkles className="w-3.5 h-3.5 text-[#0D7E73]" />
                <span>{lang === 'pt' ? 'OFERTA POR TEMPO LIMITADO' : 'LIMITED TIME OFFER'}</span>
              </div>

              {/* Main Heading */}
              <h2 className="text-2xl sm:text-3xl lg:text-3xl font-extrabold tracking-tight text-[#042F2C] leading-tight mb-2.5">
                {lang === 'pt' ? (
                  <>
                    Compre Mais. <span className="text-[#0D7E73]">Poupe Mais</span>.
                  </>
                ) : (
                  <>
                    Spend More. <span className="text-[#0D7E73]">Save More</span>.
                  </>
                )}
              </h2>

              {/* Supporting Text */}
              <p className="text-xs sm:text-sm text-[#64748B] mb-5 leading-relaxed max-w-sm">
                {lang === 'pt'
                  ? 'Obtenha descontos exclusivos ao encomendar equipamentos de TI e hardware empresarial elegíveis.'
                  : 'Get exclusive discounts when you spend more on qualifying IT equipment and enterprise hardware.'}
              </p>
            </div>

            <div>
              {/* Primary CTA */}
              <ActionPrimaryButton
                onClick={onNavigateProducts}
                size="md"
              >
                <span>{lang === 'pt' ? 'Comprar Agora' : 'Shop Now'}</span>
              </ActionPrimaryButton>

              {/* Subtle Enterprise Trust Note */}
              <div className="hidden sm:flex items-center gap-1.5 text-[11px] text-[#0D7E73] font-semibold mt-3.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#0D7E73]" />
                <span>{lang === 'pt' ? 'Aplicado automaticamente no carrinho' : 'Applied automatically at checkout'}</span>
              </div>
            </div>
          </div>

          {/* CENTER COLUMN: Live Countdown Timer & Discount Tiers */}
          <div className="lg:col-span-4 flex flex-col justify-between gap-3.5 h-full">
            
            {/* Countdown Header with Live Timer Boxes */}
            <div className="w-full bg-[#F0FDFA]/70 border border-[#CCFBF1] rounded-2xl p-3 sm:p-3.5 flex flex-col sm:flex-row items-center justify-between gap-2.5 shadow-2xs">
              <div className="flex items-center gap-2 text-[#0D7E73]">
                <Clock className="w-4 h-4 text-[#0D7E73] animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-wider">
                  {lang === 'pt' ? 'Termina Em' : 'Offer Ends In'}:
                </span>
              </div>

              {/* 4 Timer Units */}
              <div className="flex items-center gap-1.5 sm:gap-2">
                <TimerBox value={timeLeft.days} label={lang === 'pt' ? 'Dias' : 'Days'} />
                <span className="text-[#0D7E73] font-black text-sm -mt-4">:</span>
                <TimerBox value={timeLeft.hours} label={lang === 'pt' ? 'Horas' : 'Hours'} />
                <span className="text-[#0D7E73] font-black text-sm -mt-4">:</span>
                <TimerBox value={timeLeft.mins} label={lang === 'pt' ? 'Mins' : 'Mins'} />
                <span className="text-[#0D7E73] font-black text-sm -mt-4">:</span>
                <TimerBox value={timeLeft.secs} label={lang === 'pt' ? 'Segs' : 'Secs'} isSecs={true} />
              </div>
            </div>

            {/* 4 Discount Tiers Grid */}
            <div className="w-full grid grid-cols-2 gap-2 sm:gap-2.5">
              {discountTiers.map((tier, idx) => (
                <div
                  key={idx}
                  className={`relative p-2.5 sm:p-3 rounded-xl border transition-all duration-200 flex flex-col justify-between ${
                    tier.highlight
                      ? 'bg-gradient-to-br from-[#0D7E73] to-[#095E56] border-[#0D7E73] text-white shadow-xs'
                      : 'bg-white/90 border-[#CCFBF1] text-[#042F2C] hover:border-[#0D7E73]/50 hover:bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between gap-1 mb-1">
                    <span className={`text-sm sm:text-base font-black tracking-tight ${
                      tier.highlight ? 'text-white' : 'text-[#0D7E73]'
                    }`}>
                      {tier.discount}
                    </span>
                    {tier.highlight ? (
                      <span className="text-[8px] font-black uppercase tracking-wider px-1.5 py-0.5 rounded-full bg-[#5EEAD4] text-[#042F2C]">
                        MAX
                      </span>
                    ) : (
                      <Check className="w-3 h-3 text-[#0D7E73]" />
                    )}
                  </div>

                  <p className={`text-[10px] sm:text-[11px] font-semibold leading-tight line-clamp-1 ${
                    tier.highlight ? 'text-[#CCFBF1]' : 'text-[#64748B]'
                  }`}>
                    {tier.threshold}
                  </p>
                </div>
              ))}
            </div>

          </div>

          {/* RIGHT COLUMN: Full-Height Premium IT Hardware Product with Floating Discount Badge */}
          <div className="lg:col-span-4 flex items-center justify-center h-full">
            <div className="relative w-full h-full min-h-[220px] sm:min-h-[250px] lg:min-h-full flex items-center justify-center group">
              {/* Product Visual Frame matching left and middle section heights */}
              <div className="relative w-full h-full min-h-[220px] sm:min-h-[250px] lg:min-h-[250px] rounded-2xl overflow-hidden bg-white border border-[#CCFBF1] shadow-xs p-2 sm:p-2.5 flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=85"
                  alt="Enterprise IT Hardware"
                  className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#042F2C]/30 via-transparent to-transparent pointer-events-none rounded-xl" />
              </div>

              {/* Floating Circular Badge Over Product Image */}
              <div className="absolute -top-3 -right-3 sm:-top-3.5 sm:-right-3.5 z-20 w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-[#0D7E73] border-2 border-white text-white flex flex-col items-center justify-center text-center shadow-lg transform -rotate-3 group-hover:rotate-0 group-hover:scale-105 transition-all duration-300 pointer-events-none">
                <span className="text-[9px] uppercase font-bold tracking-wider leading-none text-[#CCFBF1]">
                  UP TO
                </span>
                <span className="text-sm sm:text-base font-black leading-tight text-white my-0.5">
                  15%
                </span>
                <span className="text-[9px] uppercase font-bold leading-none text-[#CCFBF1]">
                  OFF
                </span>
              </div>
            </div>
          </div>

        </div>
      </motion.div>
    </div>
  );
};

