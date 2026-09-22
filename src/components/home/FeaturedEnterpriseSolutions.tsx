import React from 'react';
import { Language, ProductCategory } from '../../types';
import { 
  ShieldCheck, 
  ArrowRight, 
  Server, 
  Network, 
  Shield, 
  Database, 
  Cloud, 
  Cpu
} from 'lucide-react';
import { ActionPrimaryButton, ActionSecondaryButton } from '../ui/AnimatedButtons';

// Exact studio product photography matching the reference image
import bannerConsultantImg from '../../assets/images/enterprise_it_consultant_hero_1787671003707.jpg';
import dellServersImg from '../../assets/images/dell_servers_stack_1787659449428.jpg';
import ciscoUbiquitiImg from '../../assets/images/cisco_ubiquiti_stack_1787659471362.jpg';
import fortinetSophosImg from '../../assets/images/fortinet_sophos_stack_1787659488619.jpg';

interface FeaturedEnterpriseSolutionsProps {
  lang: Language;
  onNavigateProducts: (cat?: ProductCategory) => void;
  onNavigateServices: (slug?: string) => void;
  onNavigateSolutions: () => void;
  onRequestQuote: () => void;
}

export const FeaturedEnterpriseSolutions: React.FC<FeaturedEnterpriseSolutionsProps> = ({
  lang,
  onNavigateProducts,
  onNavigateServices,
  onNavigateSolutions,
  onRequestQuote
}) => {
  const isPt = lang === 'pt';

  const featurePills = [
    { labelEn: 'Servers', labelPt: 'Servidores', icon: Server },
    { labelEn: 'Networking', labelPt: 'Redes', icon: Network },
    { labelEn: 'Cyber Security', labelPt: 'Cibersegurança', icon: Shield },
    { labelEn: 'Storage', labelPt: 'Armazenamento', icon: Database },
    { labelEn: 'Cloud', labelPt: 'Cloud', icon: Cloud },
    { labelEn: 'Managed Services', labelPt: 'Serviços Geridos', icon: Cpu }
  ];

  return (
    <section 
      id="featured-enterprise-solutions-section"
      className="py-5 sm:py-7 bg-white border-b border-slate-200/80 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================
            PART 1: COMPACT HORIZONTAL BANNER (Light Corporate Theme)
           ======================================================== */}
        <div className="w-full bg-gradient-to-r from-[#F0FDFA] via-white to-[#F0FDFA] rounded-2xl sm:rounded-3xl overflow-hidden border border-[#CCFBF1] shadow-[0_10px_30px_-8px_rgba(4,47,44,0.06)] relative mb-5 sm:mb-6">
          <div className="absolute top-0 right-1/4 w-[400px] h-[250px] bg-[#CCFBF1]/50 rounded-full blur-[90px] pointer-events-none" />
          <div className="absolute -bottom-8 -left-8 w-[250px] h-[180px] bg-[#0D7E73]/5 rounded-full blur-[70px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center relative z-10">
            
            {/* Left Content Column (Compact & High Impact) */}
            <div className="col-span-1 lg:col-span-7 xl:col-span-8 p-5 sm:p-6 lg:py-6 lg:px-8 flex flex-col items-start justify-center">
              {/* Small Label */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider text-[#0D7E73] bg-[#CCFBF1]/70 border border-[#99F6E4] mb-2.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#0D7E73]" />
                <span>{isPt ? 'Soluções TI Empresariais' : 'Enterprise IT Solutions'}</span>
              </div>

              {/* Heading */}
              <h2 className="text-xl sm:text-2xl lg:text-[28px] font-extrabold text-[#042F2C] tracking-tight leading-tight mb-2">
                {isPt ? (
                  <>
                    Infraestrutura de TI <span className="text-[#0D7E73]">Fiável para a Sua Empresa</span>
                  </>
                ) : (
                  <>
                    Reliable IT Infrastructure <span className="text-[#0D7E73]">for Your Business</span>
                  </>
                )}
              </h2>

              {/* Description (Concise & Clear 1-liner) */}
              <p className="text-xs sm:text-[13px] text-[#64748B] leading-relaxed mb-3.5 max-w-xl">
                {isPt
                  ? 'Hardware corporativo certificado, cibersegurança, redes avançadas e suporte gerido para o seu negócio.'
                  : 'Enterprise hardware, cybersecurity, high-speed networking, and managed IT services.'}
              </p>

              {/* Feature Pills */}
              <div className="flex flex-wrap items-center gap-1.5 mb-4">
                {featurePills.map((pill, idx) => {
                  const Icon = pill.icon;
                  return (
                    <span 
                      key={idx}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-white text-[#042F2C] border border-[#CCFBF1] hover:border-[#0D7E73]/40 transition-colors shadow-2xs"
                    >
                      <Icon className="w-3 h-3 text-[#0D7E73]" />
                      <span>{isPt ? pill.labelPt : pill.labelEn}</span>
                    </span>
                  );
                })}
              </div>

              {/* Two CTA Buttons with Exact Animation */}
              <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
                <ActionPrimaryButton
                  id="featured-solutions-btn-quote"
                  onClick={onRequestQuote}
                  size="sm"
                  className="flex-1 sm:flex-initial"
                >
                  <span>{isPt ? 'Pedir Cotação' : 'Request a Quote'}</span>
                </ActionPrimaryButton>

                <ActionSecondaryButton
                  id="featured-solutions-btn-explore"
                  onClick={onNavigateSolutions}
                  isLightBg={true}
                  size="sm"
                  className="flex-1 sm:flex-initial"
                >
                  <span>{isPt ? 'Explorar Soluções' : 'Explore Solutions'}</span>
                </ActionSecondaryButton>
              </div>
            </div>

            {/* Right Image Column (Modern IT Professional & Infrastructure) */}
            <div className="hidden lg:flex lg:col-span-5 xl:col-span-4 relative items-center justify-end pr-6 py-4">
              <div className="relative w-full max-w-[280px] xl:max-w-[310px] aspect-[4/3.2] rounded-2xl overflow-hidden shadow-lg border border-[#CCFBF1] bg-white">
                <img
                  src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=600&q=80"
                  alt="Enterprise IT Specialist Consultant"
                  className="w-full h-full object-cover object-center select-none"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#042F2C]/40 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-2.5 left-3 right-3 px-2.5 py-1.5 rounded-lg bg-white/90 backdrop-blur-xs border border-[#CCFBF1] shadow-2xs flex items-center justify-between">
                  <span className="text-[11px] font-bold text-[#042F2C] flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0D7E73]" />
                    {isPt ? 'Suporte Dedicado B2B' : 'Dedicated B2B Support'}
                  </span>
                  <span className="text-[10px] font-extrabold text-[#0D7E73]">24/7 SLA</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ========================================================
            PART 2: EXACT 3 CARDS AS REQUESTED IN REFERENCE IMAGE (COMPACT & PERFECT ALIGNMENT)
           ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-5 items-stretch">
          
          {/* ---------------- CARD 1: ENTERPRISE SERVERS ---------------- */}
          <div 
            onClick={() => onNavigateProducts('servers-storage')}
            className="group relative bg-[#E8F6F4] rounded-2xl p-4 sm:p-5 flex flex-col justify-between overflow-hidden border border-[#D0EFEA] hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 cursor-pointer h-full min-h-[300px] sm:min-h-[320px]"
          >
            {/* Top Content + Right Image */}
            <div className="relative z-10">
              <div className="grid grid-cols-12 gap-2.5 items-center">
                
                {/* Left Text */}
                <div className="col-span-7 flex flex-col justify-start">
                  {/* Category Tag */}
                  <span className="text-[10px] sm:text-[11px] font-bold tracking-wider uppercase text-[#0D7E73] mb-1 block">
                    {isPt ? 'HARDWARE ENTERPRISE' : 'ENTERPRISE HARDWARE'}
                  </span>
                  
                  {/* Title (2 Lines guaranteed) */}
                  <h3 className="text-xl sm:text-[22px] font-black text-[#0B1E2D] tracking-tight leading-[1.12] mb-1.5 min-h-[46px] flex flex-col justify-center">
                    <span>{isPt ? 'Servidores' : 'Enterprise'}</span>
                    <span>{isPt ? 'Empresariais' : 'Servers'}</span>
                  </h3>

                  {/* Description (Uniform height) */}
                  <p className="text-xs text-[#475569] leading-snug mb-3 min-h-[34px]">
                    {isPt
                      ? 'Servidores Dell, HPE e Lenovo para alto desempenho.'
                      : 'Dell, HPE & Lenovo servers for high performance and uptime.'}
                  </p>

                  {/* Action Button */}
                  <div>
                    <ActionPrimaryButton
                      type="button"
                      size="sm"
                      glow={false}
                    >
                      <span className="truncate">{isPt ? 'Explorar Servidores' : 'Explore Servers'}</span>
                    </ActionPrimaryButton>
                  </div>
                </div>

                {/* Right Image */}
                <div className="col-span-5 relative flex items-center justify-end">
                  <div className="w-full aspect-[4/3.6] relative rounded-xl overflow-hidden shadow-xs border border-black/5 bg-white/60">
                    <img 
                      src={dellServersImg} 
                      alt="Dell PowerEdge Enterprise Servers Stack"
                      className="w-full h-full object-cover select-none group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>

              </div>
            </div>

            {/* Bottom White Brand Logos Bar */}
            <div className="mt-3.5 pt-0.5">
              <div className="bg-white rounded-xl h-11 px-3 shadow-xs border border-slate-100 flex items-center justify-between">
                {/* Dell Technologies */}
                <div className="flex-1 flex items-center justify-center">
                  <span className="text-xs font-black tracking-tight text-[#0076CE] whitespace-nowrap">
                    <span className="font-extrabold">DELL</span> <span className="font-medium text-slate-700 text-[10px]">Tech</span>
                  </span>
                </div>
                
                <div className="h-4 w-px bg-slate-200" />
                
                {/* Hewlett Packard Enterprise */}
                <div className="flex-1 flex items-center justify-center px-1">
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 border-[1.5px] border-[#01A982] shrink-0" />
                    <span className="text-[10px] font-bold text-[#0B1E2D] leading-tight whitespace-nowrap">
                      HPE
                    </span>
                  </div>
                </div>

                <div className="h-4 w-px bg-slate-200" />

                {/* Lenovo */}
                <div className="flex-1 flex items-center justify-center">
                  <span className="text-xs font-extrabold text-[#0B1E2D] tracking-tight whitespace-nowrap">
                    Lenovo
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ---------------- CARD 2: NETWORKING SOLUTIONS ---------------- */}
          <div 
            onClick={() => onNavigateProducts('networking')}
            className="group relative bg-[#EBF5FC] rounded-2xl p-4 sm:p-5 flex flex-col justify-between overflow-hidden border border-[#D5EBF9] hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 cursor-pointer h-full min-h-[300px] sm:min-h-[320px]"
          >
            {/* Top Content + Right Image */}
            <div className="relative z-10">
              <div className="grid grid-cols-12 gap-2.5 items-center">
                
                {/* Left Text */}
                <div className="col-span-7 flex flex-col justify-start">
                  {/* Category Tag */}
                  <span className="text-[10px] sm:text-[11px] font-bold tracking-wider uppercase text-[#0284C7] mb-1 block">
                    {isPt ? 'CONECTE A SUA EMPRESA' : 'CONNECT YOUR BUSINESS'}
                  </span>
                  
                  {/* Title (2 Lines guaranteed) */}
                  <h3 className="text-xl sm:text-[22px] font-black text-[#0B1E2D] tracking-tight leading-[1.12] mb-1.5 min-h-[46px] flex flex-col justify-center">
                    <span>{isPt ? 'Soluções de' : 'Networking'}</span>
                    <span>{isPt ? 'Redes' : 'Solutions'}</span>
                  </h3>

                  {/* Description (Uniform height) */}
                  <p className="text-xs text-[#475569] leading-snug mb-3 min-h-[34px]">
                    {isPt
                      ? 'Cisco, Ubiquiti e Ruijie para conectividade empresarial.'
                      : 'Cisco, Ubiquiti & Ruijie networking for reliable connectivity.'}
                  </p>

                  {/* Action Button */}
                  <div>
                    <ActionPrimaryButton
                      type="button"
                      size="sm"
                      glow={false}
                    >
                      <span className="truncate">{isPt ? 'Explorar Redes' : 'Explore Networking'}</span>
                    </ActionPrimaryButton>
                  </div>
                </div>

                {/* Right Image */}
                <div className="col-span-5 relative flex items-center justify-end">
                  <div className="w-full aspect-[4/3.6] relative rounded-xl overflow-hidden shadow-xs border border-black/5 bg-white/60">
                    <img 
                      src={ciscoUbiquitiImg} 
                      alt="Cisco Switches and Ubiquiti UniFi AP"
                      className="w-full h-full object-cover select-none group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>

              </div>
            </div>

            {/* Bottom White Brand Logos Bar */}
            <div className="mt-3.5 pt-0.5">
              <div className="bg-white rounded-xl h-11 px-3 shadow-xs border border-slate-100 flex items-center justify-between">
                {/* Cisco */}
                <div className="flex-1 flex items-center justify-center">
                  <span className="text-xs font-black tracking-widest text-[#049FD9] whitespace-nowrap">
                    CISCO
                  </span>
                </div>
                
                <div className="h-4 w-px bg-slate-200" />
                
                {/* Ubiquiti */}
                <div className="flex-1 flex items-center justify-center px-1">
                  <span className="text-[10px] font-bold text-slate-800 tracking-tight whitespace-nowrap">
                    <span className="text-[#0066FF] font-black mr-0.5">U</span> UBIQUITI
                  </span>
                </div>

                <div className="h-4 w-px bg-slate-200" />

                {/* Ruijie */}
                <div className="flex-1 flex items-center justify-center">
                  <span className="text-xs font-black italic text-[#E60012] tracking-tight whitespace-nowrap">
                    Ruijie
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ---------------- CARD 3: CYBER SECURITY ---------------- */}
          <div 
            onClick={() => onNavigateServices('cybersecurity')}
            className="group relative bg-[#F9F6EE] rounded-2xl p-4 sm:p-5 flex flex-col justify-between overflow-hidden border border-[#EFE8D6] hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 cursor-pointer h-full min-h-[300px] sm:min-h-[320px]"
          >
            {/* Top Content + Right Image */}
            <div className="relative z-10">
              <div className="grid grid-cols-12 gap-2.5 items-center">
                
                {/* Left Text */}
                <div className="col-span-7 flex flex-col justify-start">
                  {/* Category Tag */}
                  <span className="text-[10px] sm:text-[11px] font-bold tracking-wider uppercase text-[#0D7E73] mb-1 block">
                    {isPt ? 'PROTEJA O SEU NEGÓCIO' : 'PROTECT WHAT MATTERS'}
                  </span>
                  
                  {/* Title (2 Lines guaranteed: Cyber / Security) */}
                  <h3 className="text-xl sm:text-[22px] font-black text-[#0B1E2D] tracking-tight leading-[1.12] mb-1.5 min-h-[46px] flex flex-col justify-center">
                    <span>{isPt ? 'Ciber-' : 'Cyber'}</span>
                    <span>{isPt ? 'segurança' : 'Security'}</span>
                  </h3>

                  {/* Description (Uniform height) */}
                  <p className="text-xs text-[#475569] leading-snug mb-3 min-h-[34px]">
                    {isPt
                      ? 'Fortinet, Sophos e pfSense para máxima proteção.'
                      : 'Fortinet, Sophos & pfSense security to keep systems protected.'}
                  </p>

                  {/* Action Button */}
                  <div>
                    <ActionPrimaryButton
                      type="button"
                      size="sm"
                      glow={false}
                    >
                      <span className="truncate">{isPt ? 'Explorar Segurança' : 'Explore Security'}</span>
                    </ActionPrimaryButton>
                  </div>
                </div>

                {/* Right Image */}
                <div className="col-span-5 relative flex items-center justify-end">
                  <div className="w-full aspect-[4/3.6] relative rounded-xl overflow-hidden shadow-xs border border-black/5 bg-white/60">
                    <img 
                      src={fortinetSophosImg} 
                      alt="Fortinet and Sophos Cyber Security Hardware"
                      className="w-full h-full object-cover select-none group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>

              </div>
            </div>

            {/* Bottom White Brand Logos Bar */}
            <div className="mt-3.5 pt-0.5">
              <div className="bg-white rounded-xl h-11 px-3 shadow-xs border border-slate-100 flex items-center justify-between">
                {/* Fortinet */}
                <div className="flex-1 flex items-center justify-center">
                  <span className="text-xs font-extrabold tracking-tight text-[#EE3124] whitespace-nowrap">
                    F<span className="tracking-tighter">::</span>RTINET
                  </span>
                </div>
                
                <div className="h-4 w-px bg-slate-200" />
                
                {/* Sophos */}
                <div className="flex-1 flex items-center justify-center px-1">
                  <span className="text-xs font-black text-[#0066CC] tracking-wider whitespace-nowrap">
                    SOPHOS
                  </span>
                </div>

                <div className="h-4 w-px bg-slate-200" />

                {/* pfSense */}
                <div className="flex-1 flex items-center justify-center">
                  <span className="text-xs font-black text-[#1E395B] italic tracking-tight whitespace-nowrap">
                    pf<span className="text-[#0077CC]">sense</span>
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

