import React from 'react';
import { Language, ServiceItem } from '../../types';
import { 
  ShieldCheck, 
  Sparkles, 
  ArrowRight, 
  MessageSquare, 
  FileText, 
  Award, 
  Cpu, 
  RotateCcw, 
  Search, 
  Flame, 
  Lock, 
  Terminal, 
  CheckCircle,
  PackageCheck,
  Zap
} from 'lucide-react';
import { companyData } from '../../data/company';

interface RefurbishmentProcessShowcaseProps {
  service: ServiceItem;
  lang: Language;
  onRequestQuote: () => void;
}

export const RefurbishmentProcessShowcase: React.FC<RefurbishmentProcessShowcaseProps> = ({
  service,
  lang,
  onRequestQuote
}) => {
  const isPt = lang === 'pt';

  const whatsappInquiryUrl = `https://wa.me/${companyData.whatsappNumber}?text=${encodeURIComponent(
    isPt 
      ? `Olá Algoritmica Mania, gostaria de saber mais sobre os equipamentos recondicionados certificados e garantias.`
      : `Hello Algoritmica Mania, I would like to know more about your certified refurbished hardware and warranties.`
  )}`;

  // The 6 Refurbishment Milestones (Crisp, High-Impact, 0 Fluff)
  const steps = [
    {
      num: '01',
      title: isPt ? 'Inspeção Óptica & Chassis' : 'Visual & Structural Audit',
      subtitle: isPt ? 'Triagem Inicial' : 'Initial Triage',
      desc: isPt 
        ? 'Exame minucioso da carcaça, portas físicas (USB, HDMI, SFP), ecrã e integridade estrutural para classificação de grau estético rigoroso.'
        : 'Detailed physical examination of chassis, all I/O ports, display panel, and structural integrity for strict cosmetic grade classification.',
      metric: isPt ? 'Grau A+ Garantido' : 'Grade A+ Verified'
    },
    {
      num: '02',
      title: isPt ? 'Testes de Stress de Hardware' : 'Hardware Stress Testing',
      subtitle: isPt ? 'Diagnóstico Extensivo' : 'Load Diagnostics',
      desc: isPt 
        ? 'Bateria de testes sob carga máxima (MemTest86, FurMark e Prime95) para validar CPU, GPU, VRMs, memórias e saúde das baterias (>85%).'
        : 'Sustained load benchmarking (MemTest86, FurMark, Prime95) stress-testing CPU, GPU, memory modules, and battery health (>85%).',
      metric: isPt ? '100% Estável' : '100% Stress Passed'
    },
    {
      num: '03',
      title: isPt ? 'Limpeza Ultrassónica & Térmica' : 'Ultrasonic Clean & Thermal Renewal',
      subtitle: isPt ? 'Revisão Física' : 'Physical Overhaul',
      desc: isPt 
        ? 'Desmontagem completa, descontaminação antiestática interna, lubrificação de ventoinhas e aplicação de massa térmica de alta condutividade.'
        : 'Complete teardown, anti-static deep decontamination, fan lubrication, and fresh application of high-conductivity thermal paste.',
      metric: isPt ? 'Arrefecimento Otimizado' : 'Arctic Compound Applied'
    },
    {
      num: '04',
      title: isPt ? 'Sanitização NIST 800-88' : 'NIST 800-88 Storage Purge',
      subtitle: isPt ? 'Eliminação Criptográfica' : 'Forensic Wipe',
      desc: isPt 
        ? 'Sobregravação criptográfica de todos os discos SSD NVMe/SATA a nível de hardware com verificação integral sem qualquer dado residual.'
        : 'Cryptographic hardware erasure on all SSD NVMe/SATA storage volumes ensuring zero residual forensic data remains.',
      metric: isPt ? 'Zero Vestígios' : 'Zero Forensic Residue'
    },
    {
      num: '05',
      title: isPt ? 'Firmware UEFI & SO Limpo' : 'UEFI Microcode & Clean OS',
      subtitle: isPt ? 'Provisionamento' : 'Provisioning',
      desc: isPt 
        ? 'Atualização para o firmware BIOS/UEFI mais recente do fabricante, patches de segurança e instalação limpa de Windows 11 Pro ou Linux.'
        : 'Flashing latest vendor BIOS/UEFI microcode patches, alongside official clean installations of Windows 11 Pro or Linux Server.',
      metric: isPt ? 'Drivers Oficiais' : 'Clean Enterprise OS'
    },
    {
      num: '06',
      title: isPt ? 'Controlo de Qualidade & Embalagem' : 'Final QA Audit & Sealed Pack',
      subtitle: isPt ? 'Checklist de 28 Pontos' : '28-Point Sign-off',
      desc: isPt 
        ? 'Validação de 28 pontos por técnico sénior, registo de número de série, selo de garantia de 1 ano e acondicionamento antiestático.'
        : 'Senior engineering 28-point checklist sign-off, serial registration, 1-year warranty seal, and anti-static packaging.',
      metric: isPt ? 'Garantia de 1 Ano' : '1-Year Full Warranty'
    }
  ];

  return (
    <div className="w-full relative pb-12">
      
      {/* 🌿 BRAND AMBIENT CANVAS (Soft Teal, Mint & Emerald brand palette) */}
      <div className="relative rounded-[36px] sm:rounded-[48px] bg-gradient-to-b from-[#F0FDFA] via-[#F8FAFC] to-[#F0FDFA] border border-teal-100/90 py-10 sm:py-14 px-4 sm:px-8 lg:px-12 overflow-hidden shadow-xl shadow-teal-950/5 mb-10">
        
        {/* Ambient atmospheric background glow bubbles */}
        <div className="absolute -top-24 left-1/4 w-[450px] h-[350px] bg-[#99F6E4]/35 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 right-10 w-[420px] h-[350px] bg-[#5EEAD4]/25 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 left-10 w-[350px] h-[300px] bg-[#CCFBF1]/40 rounded-full blur-3xl pointer-events-none" />

        {/* 🌟 HEADER TITLE & VALUE BADGES */}
        <div className="relative z-10 text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-teal-200/70 text-xs font-bold uppercase tracking-wider mb-4 text-[#0D7E73] shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#0D7E73]" />
            <span>{isPt ? 'Padrão Industrial de 6 Etapas' : 'Industrial 6-Stage Standard'}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0F172A] mb-3">
            {isPt ? 'Processo de Recondicionamento' : 'Refurbishment Process'}
          </h1>

          <p className="text-sm sm:text-base text-[#475569] max-w-2xl mx-auto leading-relaxed mb-6 font-medium">
            {isPt 
              ? 'Cada computador passa por um ciclo laboratorial exaustivo de 6 etapas para garantir desempenho, fiabilidade e acabamento de fábrica com 1 ano de garantia.'
              : 'Every machine passes through an exhaustive 6-stage engineering lifecycle to deliver brand-new enterprise reliability backed by a 1-year warranty.'}
          </p>

          {/* 3 Value Highlight Pills */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 flex-wrap">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white border border-teal-100/90 text-xs font-bold text-[#0F172A] shadow-xs">
              <Award className="w-4 h-4 text-[#0D7E73]" />
              <span>{isPt ? 'Garantia de 1 Ano' : '1-Year Direct Warranty'}</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white border border-teal-100/90 text-xs font-bold text-[#0F172A] shadow-xs">
              <Zap className="w-4 h-4 text-[#0D7E73]" />
              <span>{isPt ? 'Poupança de 40% a 70%' : '40% - 70% Cost Savings'}</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white border border-teal-100/90 text-xs font-bold text-[#0F172A] shadow-xs">
              <PackageCheck className="w-4 h-4 text-[#0D7E73]" />
              <span>{isPt ? 'Checklist de 28 Pontos' : '28-Point QA Checklist'}</span>
            </div>
          </div>
        </div>

        {/* 🌟 6-CARD GRID (FAITHFUL REPLICA OF USER REFERENCE IMAGE) */}
        {/* Visual Composition: Prominent Number Pill Placed on Top-Left + Frosted Glass Card Body in Brand Colors */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8 sm:gap-x-10 max-w-6xl mx-auto pt-6 pb-4">
          {steps.map((item) => (
            <div key={item.num} className="relative group">
              
              {/* 🏷️ DARK TEAL NUMBERED PILL (OFFSET TO TOP-LEFT CORNER - NEVER TOUCHES TEXT) */}
              <div className="absolute -top-4 -left-2 sm:-left-3 z-20">
                <div className="w-14 h-13 sm:w-16 sm:h-14 rounded-[18px] bg-gradient-to-br from-[#0D7E73] via-[#0F766E] to-[#115E59] text-white flex items-center justify-center shadow-lg shadow-teal-950/25 group-hover:scale-105 transition-all duration-300 border-2 border-white">
                  <span className="text-lg sm:text-xl font-black tracking-tight font-mono">
                    {item.num}
                  </span>
                </div>
              </div>

              {/* 🪟 FRONT FROSTED GLASS CARD BODY (TRANSPARENT BACKDROP BLUR) */}
              <div className="relative z-10 bg-white/85 backdrop-blur-xl rounded-[28px] p-6 sm:p-7 pt-8 sm:pt-9 border border-white/90 shadow-[0_16px_36px_rgba(13,126,115,0.07)] hover:shadow-[0_22px_45px_rgba(13,126,115,0.14)] hover:-translate-y-1 transition-all duration-300 min-h-[235px] flex flex-col justify-between overflow-hidden">
                
                {/* Soft ambient inner glow in top-left of frosted glass */}
                <div className="absolute -top-4 -left-4 w-28 h-28 bg-[#5EEAD4]/20 rounded-full blur-xl pointer-events-none" />

                <div>
                  {/* Card Title (Offset with padding to ensure zero text touching) */}
                  <div className="text-center pl-8 sm:pl-10 pr-2 mb-3">
                    <h2 className="text-base sm:text-lg font-black text-[#0F172A] tracking-tight group-hover:text-[#0D7E73] transition-colors leading-snug">
                      {item.title}
                    </h2>
                    <span className="text-[11px] font-bold text-[#0D7E73] uppercase tracking-wider block mt-1">
                      {item.subtitle}
                    </span>
                  </div>

                  {/* Card Body Description (Clean & Concise) */}
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed text-center font-medium px-1">
                    {item.desc}
                  </p>
                </div>

                {/* Bottom Card Micro-Metric Tag */}
                <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-[#64748B]">
                    {isPt ? 'Resultado:' : 'Standard:'}
                  </span>
                  <span className="text-[11px] font-extrabold text-[#0D7E73] bg-[#F0FDFA] px-2.5 py-0.5 rounded-lg border border-[#CCFBF1]">
                    {item.metric}
                  </span>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>

      {/* 🏛️ BOTTOM ACTION STRIP */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-[#F0FDFA] border border-[#CCFBF1] text-[#0D7E73] flex items-center justify-center shrink-0 shadow-xs">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-sm sm:text-base font-extrabold text-[#0F172A]">
              {isPt ? 'Laboratório Certificado em Trofa' : 'Certified Engineering Facility in Trofa'}
            </h3>
            <p className="text-xs text-[#64748B] mt-0.5">
              {companyData.fullAddress} • {companyData.hoursWeekday}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={onRequestQuote}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl text-xs sm:text-sm font-bold text-white bg-[#0D7E73] hover:bg-[#0F766E] transition-all shrink-0 cursor-pointer shadow-md hover:shadow-lg active:scale-95"
          >
            <FileText className="w-4 h-4" />
            <span>{isPt ? 'Consultar Equipamentos Disponíveis' : 'Browse Available Hardware'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href={whatsappInquiryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3.5 rounded-2xl text-xs sm:text-sm font-bold text-[#0D7E73] bg-[#F0FDFA] hover:bg-[#CCFBF1] border border-[#CCFBF1] transition-colors"
          >
            <MessageSquare className="w-4 h-4" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>

    </div>
  );
};
