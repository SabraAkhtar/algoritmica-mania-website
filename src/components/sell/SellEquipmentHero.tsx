import React from 'react';
import { Language } from '../../types';
import { 
  Clock, 
  Truck, 
  ShieldCheck, 
  CreditCard,
  Sparkles,
  FileCheck2
} from 'lucide-react';
import { motion } from 'motion/react';
import heroDevicesImg from '../../assets/images/sell_equipment_hero_devices_1787998030730.jpg';

interface SellEquipmentHeroProps {
  lang: Language;
}

export const SellEquipmentHero: React.FC<SellEquipmentHeroProps> = ({ lang }) => {
  const isPt = lang === 'pt';

  const valueBadges = [
    {
      icon: Clock,
      title: isPt ? 'Avaliação Rápida' : 'Fast Valuation',
      subtitle: isPt ? 'Resposta em 24–48h' : '24–48 hrs response',
    },
    {
      icon: Truck,
      title: isPt ? 'Recolha Segura' : 'Secure Pickup',
      subtitle: isPt ? 'Em todo o país' : 'Across the country',
    },
    {
      icon: ShieldCheck,
      title: 'NIST 800-88',
      subtitle: isPt ? 'Sanitização certificada' : 'Certified data erasure',
    },
    {
      icon: CreditCard,
      title: isPt ? 'Pagamento Rápido' : 'Fast Payment',
      subtitle: isPt ? 'Transferência bancária' : 'Direct bank transfer',
    },
  ];

  return (
    <section className="relative overflow-hidden pt-8 pb-12 sm:pt-12 sm:pb-16 bg-gradient-to-b from-white via-[#F8FAFC] to-white border-b border-slate-100">
      {/* Ambient background glow and subtle dot grid */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#CCFBF1]/40 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute -bottom-10 left-10 w-72 h-72 bg-[#0D7E73]/5 rounded-full blur-2xl pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* LEFT: Typography & 4 Value Badges */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            {/* Main Headline matching the exact screenshot */}
            <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-black tracking-tight text-[#042F2C] leading-[1.12] mb-4">
              {isPt ? 'Venda o Seu Equipamento,' : 'Sell Your Equipment,'}{' '}
              <span className="text-[#0D7E73] block sm:inline">
                {isPt ? 'Obtenha a Melhor Valorização' : 'Get the Best Value'}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed max-w-xl mb-8 font-normal">
              {isPt
                ? 'Tornamos simples e seguro vender o seu hardware e parques informáticos usados. Receba uma avaliação rápida, recolha gratuita e pagamento seguro.'
                : 'We make it easy to sell your used IT equipment. Get a quick valuation, free pickup and secure payment.'}
            </p>

            {/* 4 Value Badges in exact layout */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-3.5 pt-2">
              {valueBadges.map((badge, idx) => {
                const Icon = badge.icon;
                return (
                  <div 
                    key={idx}
                    className="flex flex-col items-start p-3 sm:p-3.5 rounded-2xl bg-white/80 backdrop-blur-xs border border-slate-200/90 shadow-2xs hover:border-[#0D7E73]/40 hover:shadow-xs transition-all"
                  >
                    <div className="w-8 h-8 rounded-xl bg-[#F0FDFA] border border-[#CCFBF1] text-[#0D7E73] flex items-center justify-center mb-2.5 shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-black text-[#042F2C] leading-tight block">
                      {badge.title}
                    </span>
                    <span className="text-[11px] text-[#64748B] font-medium leading-tight mt-0.5">
                      {badge.subtitle}
                    </span>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* RIGHT: Studio Hardware Devices Composition */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-6 relative flex items-center justify-center"
          >
            {/* Soft Ambient Radial Backlight */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0D7E73]/15 via-[#14B8A6]/10 to-transparent rounded-3xl blur-2xl -z-0" />
            
            {/* Tech Matrix Dot Overlay */}
            <div className="absolute -top-4 -right-4 w-40 h-40 bg-[radial-gradient(#0D7E73_1.5px,transparent_1.5px)] [background-size:12px_12px] opacity-25 pointer-events-none" />

            {/* Image Container with Luxury Frame */}
            <div className="relative z-10 w-full max-w-[540px] rounded-3xl overflow-hidden shadow-2xl shadow-teal-950/10 border border-slate-200/80 bg-white group">
              <img
                src={heroDevicesImg}
                alt="Enterprise IT Hardware Buyback - Laptops, Servers, Network Switches, Smartphones"
                className="w-full h-auto object-cover transform group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
              
              {/* Subtle Bottom Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
              
              {/* Corner Verified Floating Badge */}
              <div className="absolute bottom-3 left-3 bg-[#042F2C]/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-teal-500/30 text-white flex items-center gap-2 shadow-lg">
                <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                <span className="text-[11px] font-bold tracking-wide">
                  {isPt ? 'Bancada Própria de Diagnóstico' : 'Hardware Staging & Testing Bench'}
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
