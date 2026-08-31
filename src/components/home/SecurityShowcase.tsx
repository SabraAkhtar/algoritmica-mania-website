import React from 'react';
import { Language, ProductCategory } from '../../types';
import { motion } from 'motion/react';
import { 
  Monitor, 
  Server, 
  Network, 
  Headphones, 
  RotateCcw, 
  ShieldCheck, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { ActionPrimaryButton } from '../ui/AnimatedButtons';
import centerHardwareImg from '../../assets/images/enterprise_it_hardware_showcase_1787729449878.jpg';

export interface SecurityShowcaseProps {
  lang: Language;
  onNavigateProducts?: (cat?: ProductCategory) => void;
  onNavigateSolutions?: () => void;
  onNavigateServices?: (slug?: string) => void;
  onNavigateSellEquipment?: () => void;
  onRequestQuote?: () => void;
  onExploreSecurity?: () => void;
}

export const SecurityShowcase: React.FC<SecurityShowcaseProps> = ({
  lang,
  onNavigateProducts,
  onNavigateSolutions,
  onNavigateServices,
  onNavigateSellEquipment,
  onRequestQuote,
  onExploreSecurity
}) => {
  const isPt = lang === 'pt';

  // 4 Core Enterprise Pillars matching the visual reference
  const cards = {
    hardware: {
      number: '01',
      title: isPt ? 'HARDWARE DE TI' : 'IT HARDWARE',
      desc: isPt 
        ? 'Portáteis empresariais, desktops, workstations e equipamento profissional das melhores marcas.' 
        : 'Business laptops, desktops, workstations and enterprise equipment from trusted brands.',
      buttonText: isPt ? 'Explorar Equipamento' : 'Explore Equipment',
      icon: Monitor,
      action: () => onNavigateProducts ? onNavigateProducts() : undefined
    },
    servers: {
      number: '02',
      title: isPt ? 'SERVIDORES & STORAGE' : 'SERVERS & STORAGE',
      desc: isPt 
        ? 'Servidores empresariais, NAS, sistemas de storage e hardware de datacenter para a sua empresa.' 
        : 'Enterprise servers, NAS, storage systems and data-center hardware for your business.',
      buttonText: isPt ? 'Explorar Soluções' : 'Explore Solutions',
      icon: Server,
      action: () => onNavigateSolutions ? onNavigateSolutions() : (onNavigateProducts ? onNavigateProducts('servers-storage') : undefined)
    },
    networking: {
      number: '03',
      title: isPt ? 'REDES & CONECTIVIDADE' : 'NETWORKING',
      desc: isPt 
        ? 'Switches, routers, firewalls, access points e infraestrutura de rede para conectividade fiável.' 
        : 'Switches, routers, firewalls, access points and networking equipment for reliable connectivity.',
      buttonText: isPt ? 'Explorar Redes' : 'Explore Networking',
      icon: Network,
      action: () => onNavigateServices ? onNavigateServices('networking-and-configuration') : (onNavigateProducts ? onNavigateProducts('networking') : undefined)
    },
    services: {
      number: '04',
      title: isPt ? 'SERVIÇOS DE TI' : 'IT SERVICES',
      desc: isPt 
        ? 'Suporte técnico, diagnósticos em bancada, manutenção e serviços de infraestrutura para o seu negócio.' 
        : 'Technical support, diagnostics, maintenance and infrastructure services to keep businesses running smoothly.',
      buttonText: isPt ? 'Ver Serviços' : 'View Services',
      icon: Headphones,
      action: () => onNavigateServices ? onNavigateServices() : undefined
    }
  };

  return (
    <section id="section-one-partner-ecosystem" className="py-12 sm:py-16 lg:py-20 bg-white border-b border-[#CCFBF1] relative overflow-hidden">
      
      {/* Background Soft Glow Accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#CCFBF1]/25 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 1. SECTION HEADER */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-14"
        >
          {/* Main Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#042F2C] leading-[1.15]">
            {isPt ? (
              <>
                Tudo o que a sua empresa precisa, <span className="text-[#0D7E73]">num só lugar</span>.
              </>
            ) : (
              <>
                Everything your business needs, <span className="text-[#0D7E73]">all in one place</span>.
              </>
            )}
          </h2>

          {/* Supporting Subtitle */}
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal">
            {isPt 
              ? 'Desde hardware empresarial e redes a suporte técnico e retoma de equipamentos, ajudamos as empresas a manter a sua tecnologia a funcionar melhor.'
              : 'From enterprise hardware and networking to technical support and equipment recovery, we help businesses keep their technology working better.'
            }
          </p>
        </motion.div>

        {/* 2. ASYMMETRIC ECOSYSTEM LAYOUT (Desktop: Left Cards | Center Visual | Right Cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          
          {/* LEFT COLUMN: Card 01 & Card 02 (Mobile Order 3 & 4, Desktop Left) */}
          <div className="lg:col-span-3 flex flex-col gap-4 justify-between order-3 lg:order-1">
            
            {/* Card 01: IT HARDWARE */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group bg-white rounded-2xl border border-slate-200/90 hover:border-[#0D7E73]/50 p-4 sm:p-5 shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between h-full relative"
            >
              {/* Top Row: Number on Left, subtle line, Icon on Far Right */}
              <div>
                <div className="flex items-center justify-between gap-3 mb-3.5">
                  <span className="text-xs font-black text-[#0D7E73] bg-[#F0FDFA] border border-[#CCFBF1] px-2.5 py-1 rounded-lg shadow-2xs shrink-0">
                    {cards.hardware.number}
                  </span>
                  <div className="h-[1.5px] flex-1 bg-[#CCFBF1] rounded-full group-hover:bg-[#0D7E73]/40 transition-colors mx-2" />
                  <div className="w-8 h-8 rounded-lg bg-[#F0FDFA] text-[#0D7E73] border border-[#CCFBF1] flex items-center justify-center group-hover:bg-[#0D7E73] group-hover:text-white transition-colors duration-300 shrink-0 shadow-2xs">
                    <cards.hardware.icon className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-sm sm:text-base font-black text-[#042F2C] tracking-tight mb-1.5 group-hover:text-[#0D7E73] transition-colors">
                  {cards.hardware.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {cards.hardware.desc}
                </p>
              </div>

              <div className="pt-3 mt-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={cards.hardware.action}
                  className="inline-flex items-center justify-between w-full text-xs font-bold text-[#0D7E73] group-hover:text-[#0B6A61] cursor-pointer"
                >
                  <span>{cards.hardware.buttonText}</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </motion.div>

            {/* Card 02: SERVERS & STORAGE */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group bg-white rounded-2xl border border-slate-200/90 hover:border-[#0D7E73]/50 p-4 sm:p-5 shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between h-full relative"
            >
              {/* Top Row: Number on Left, subtle line, Icon on Far Right */}
              <div>
                <div className="flex items-center justify-between gap-3 mb-3.5">
                  <span className="text-xs font-black text-[#0D7E73] bg-[#F0FDFA] border border-[#CCFBF1] px-2.5 py-1 rounded-lg shadow-2xs shrink-0">
                    {cards.servers.number}
                  </span>
                  <div className="h-[1.5px] flex-1 bg-[#CCFBF1] rounded-full group-hover:bg-[#0D7E73]/40 transition-colors mx-2" />
                  <div className="w-8 h-8 rounded-lg bg-[#F0FDFA] text-[#0D7E73] border border-[#CCFBF1] flex items-center justify-center group-hover:bg-[#0D7E73] group-hover:text-white transition-colors duration-300 shrink-0 shadow-2xs">
                    <cards.servers.icon className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-sm sm:text-base font-black text-[#042F2C] tracking-tight mb-1.5 group-hover:text-[#0D7E73] transition-colors">
                  {cards.servers.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {cards.servers.desc}
                </p>
              </div>

              <div className="pt-3 mt-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={cards.servers.action}
                  className="inline-flex items-center justify-between w-full text-xs font-bold text-[#0D7E73] group-hover:text-[#0B6A61] cursor-pointer"
                >
                  <span>{cards.servers.buttonText}</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </motion.div>

          </div>

          {/* CENTER COLUMN: Large Hardware Visual Showcase (Mobile Order 2, Desktop Center) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 order-2 lg:order-2 flex flex-col justify-between bg-gradient-to-b from-[#F0FDFA]/60 via-white to-[#F0FDFA]/30 rounded-3xl border border-[#CCFBF1] p-5 sm:p-6 shadow-2xs relative overflow-hidden text-center group"
          >
            {/* Subtle Tech Circuit Grid & Light Lines */}
            <div className="absolute inset-0 bg-[radial-gradient(#0D7E73_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.04] pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#2DD4BF]/15 blur-3xl rounded-full pointer-events-none" />

            {/* Hardware Image Showcase */}
            <div className="relative z-10 flex-1 flex items-center justify-center my-2">
              <img
                src={centerHardwareImg}
                alt={isPt ? "Coleção de Equipamento de TI Empresarial" : "Enterprise IT Hardware Collection"}
                className="w-full max-h-[260px] sm:max-h-[300px] object-contain drop-shadow-[0_10px_20px_rgba(4,47,44,0.08)] transition-transform duration-500 group-hover:scale-[1.02] select-none"
                loading="lazy"
              />
            </div>

            {/* Bottom Headline Under Hardware */}
            <div className="relative z-10 pt-3">
              <div className="text-lg sm:text-xl font-extrabold text-[#042F2C] tracking-tight">
                {isPt ? 'Tecnologia Empresarial.' : 'Enterprise Technology.'}
              </div>
              <div className="text-lg sm:text-xl font-bold text-[#0D7E73] tracking-tight mt-0.5">
                {isPt ? 'Um Parceiro de Confiança.' : 'One Reliable Partner.'}
              </div>
              
              {/* Centered Accent Line */}
              <div className="w-10 h-0.5 bg-[#0D7E73] rounded-full mx-auto mt-2" />
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Card 03 & Card 04 (Mobile Order 5 & 6, Desktop Right) */}
          <div className="lg:col-span-3 flex flex-col gap-4 justify-between order-5 lg:order-3">
            
            {/* Card 03: NETWORKING */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group bg-white rounded-2xl border border-slate-200/90 hover:border-[#0D7E73]/50 p-4 sm:p-5 shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between h-full relative"
            >
              {/* Top Row: Number on Left, subtle line, Icon on Far Right */}
              <div>
                <div className="flex items-center justify-between gap-3 mb-3.5">
                  <span className="text-xs font-black text-[#0D7E73] bg-[#F0FDFA] border border-[#CCFBF1] px-2.5 py-1 rounded-lg shadow-2xs shrink-0">
                    {cards.networking.number}
                  </span>
                  <div className="h-[1.5px] flex-1 bg-[#CCFBF1] rounded-full group-hover:bg-[#0D7E73]/40 transition-colors mx-2" />
                  <div className="w-8 h-8 rounded-lg bg-[#F0FDFA] text-[#0D7E73] border border-[#CCFBF1] flex items-center justify-center group-hover:bg-[#0D7E73] group-hover:text-white transition-colors duration-300 shrink-0 shadow-2xs">
                    <cards.networking.icon className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-sm sm:text-base font-black text-[#042F2C] tracking-tight mb-1.5 group-hover:text-[#0D7E73] transition-colors">
                  {cards.networking.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {cards.networking.desc}
                </p>
              </div>

              <div className="pt-3 mt-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={cards.networking.action}
                  className="inline-flex items-center justify-between w-full text-xs font-bold text-[#0D7E73] group-hover:text-[#0B6A61] cursor-pointer"
                >
                  <span>{cards.networking.buttonText}</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </motion.div>

            {/* Card 04: IT SERVICES */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group bg-white rounded-2xl border border-slate-200/90 hover:border-[#0D7E73]/50 p-4 sm:p-5 shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between h-full relative"
            >
              {/* Top Row: Number on Left, subtle line, Icon on Far Right */}
              <div>
                <div className="flex items-center justify-between gap-3 mb-3.5">
                  <span className="text-xs font-black text-[#0D7E73] bg-[#F0FDFA] border border-[#CCFBF1] px-2.5 py-1 rounded-lg shadow-2xs shrink-0">
                    {cards.services.number}
                  </span>
                  <div className="h-[1.5px] flex-1 bg-[#CCFBF1] rounded-full group-hover:bg-[#0D7E73]/40 transition-colors mx-2" />
                  <div className="w-8 h-8 rounded-lg bg-[#F0FDFA] text-[#0D7E73] border border-[#CCFBF1] flex items-center justify-center group-hover:bg-[#0D7E73] group-hover:text-white transition-colors duration-300 shrink-0 shadow-2xs">
                    <cards.services.icon className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-sm sm:text-base font-black text-[#042F2C] tracking-tight mb-1.5 group-hover:text-[#0D7E73] transition-colors">
                  {cards.services.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {cards.services.desc}
                </p>
              </div>

              <div className="pt-3 mt-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={cards.services.action}
                  className="inline-flex items-center justify-between w-full text-xs font-bold text-[#0D7E73] group-hover:text-[#0B6A61] cursor-pointer"
                >
                  <span>{cards.services.buttonText}</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </motion.div>

          </div>

        </div>

        {/* 3. BOTTOM FULL-WIDTH CTA STRIP: SELL YOUR EQUIPMENT (Mobile Order 7) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 sm:mt-10 bg-white rounded-2xl sm:rounded-3xl border border-[#CCFBF1] p-5 sm:p-7 shadow-xs hover:shadow-md transition-shadow relative overflow-hidden"
        >
          {/* Subtle Corner Dots */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(#0D7E73_1px,transparent_1px)] [background-size:12px_12px] opacity-10 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-[radial-gradient(#0D7E73_1px,transparent_1px)] [background-size:12px_12px] opacity-10 pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            
            {/* Left: Icon & Text */}
            <div className="flex items-start sm:items-center gap-4 sm:gap-5">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#F0FDFA] text-[#0D7E73] border border-[#CCFBF1] flex items-center justify-center shrink-0 shadow-2xs">
                <RotateCcw className="w-6 h-6 stroke-[2.2]" />
              </div>

              <div>
                <h4 className="text-lg sm:text-xl font-black text-[#042F2C] tracking-tight">
                  {isPt ? 'Tem equipamento de TI em desuso?' : 'Have unused IT equipment?'}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl leading-relaxed">
                  {isPt 
                    ? 'Converta o seu hardware antigo em valor. Tornamos o processo de retoma simples, seguro e transparente.'
                    : 'Turn your old hardware into value. We make the sellback process easy, secure and straightforward.'}
                </p>
              </div>
            </div>

            {/* Right: Trust Points & CTA Button */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 w-full lg:w-auto shrink-0">
              
              {/* Trust Badges */}
              <div className="flex items-center gap-3 bg-[#F0FDFA] px-4 py-2 rounded-xl border border-[#CCFBF1]">
                <ShieldCheck className="w-6 h-6 text-[#0D7E73] shrink-0" />
                <div className="text-left">
                  <div className="text-xs font-black text-[#042F2C] leading-none">
                    {isPt ? 'Processo Seguro' : 'Secure Process'}
                  </div>
                  <div className="text-[11px] font-bold text-[#0D7E73] leading-none mt-1">
                    {isPt ? 'Melhor Valor de Mercado' : 'Best Market Value'}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              {onNavigateSellEquipment && (
                <ActionPrimaryButton
                  onClick={onNavigateSellEquipment}
                  size="md"
                  className="w-full sm:w-auto text-center justify-center"
                >
                  <span>{isPt ? 'Venda o Seu Equipamento' : 'Sell Your Equipment'}</span>
                </ActionPrimaryButton>
              )}
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};
export default SecurityShowcase;
