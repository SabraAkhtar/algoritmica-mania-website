import React, { useState } from 'react';
import { Language, ServiceItem } from '../../types';
import { 
  ShieldCheck, 
  Shield, 
  Target, 
  Zap, 
  ArrowRight, 
  MessageSquare, 
  FileText, 
  FileCheck, 
  HardDrive, 
  Check, 
  Sparkles, 
  Activity, 
  Cpu, 
  Lock, 
  FileSpreadsheet, 
  CheckCircle2, 
  RefreshCw,
  QrCode
} from 'lucide-react';
import { companyData } from '../../data/company';

interface SecureDataRemovalShowcaseProps {
  service: ServiceItem;
  lang: Language;
  onRequestQuote: () => void;
}

export const SecureDataRemovalShowcase: React.FC<SecureDataRemovalShowcaseProps> = ({
  service,
  lang,
  onRequestQuote
}) => {
  const [activeTab, setActiveTab] = useState<'purge' | 'crypto' | 'verify' | 'cert'>('purge');
  const isPt = lang === 'pt';

  const whatsappInquiryUrl = `https://wa.me/${companyData.whatsappNumber}?text=${encodeURIComponent(
    isPt 
      ? `Olá Algoritmica Mania, gostaria de obter informações e cotação para o serviço de Destruição e Eliminação Segura de Dados (NIST 800-88).`
      : `Hello Algoritmica Mania, I would like to request a quote for Certified Secure Data Erasure (NIST 800-88).`
  )}`;

  // The 4 Step Protocol Cards (Matching S, O, A, P circular badge style from reference image)
  const sanitizationSteps = [
    {
      id: 'purge',
      letter: 'N',
      title: isPt ? 'NIST 800-88 Purge Overwrite' : 'NIST 800-88 Purge Overwrite',
      desc: isPt 
        ? 'Sobregravação criptográfica multi-pass em SSDs NVMe e discos SATA. Impossibilita qualquer recuperação em laboratório forense.'
        : 'Multi-pass cryptographic overwrite across NVMe SSDs & SATA disks. Prevents forensic lab data reconstruction.',
      badge: isPt ? 'Executado' : 'Purged'
    },
    {
      id: 'crypto',
      letter: 'C',
      title: isPt ? 'Cryptographic ATA Sanitization' : 'Cryptographic ATA Sanitization',
      desc: isPt 
        ? 'Destruição instantânea da chave de encriptação interna em discos SED (Self-Encrypting Drives) com verificação de hardware.'
        : 'Instant destruction of internal AES keys on Self-Encrypting Drives (SED) with hardware-level verification.',
      badge: isPt ? 'Encriptado' : 'Encrypted'
    },
    {
      id: 'verify',
      letter: 'V',
      title: isPt ? 'Verificação de Leitura a 100%' : '100% Read-Back Verification',
      desc: isPt 
        ? 'Varredura integral de todos os setores e blocos LBA para certificar que nenhum fragmento ou ficheiro residual persiste.'
        : 'Full surface telemetry scan across all LBA blocks verifying zero residual forensic bit traces remain.',
      badge: isPt ? 'Auditado' : 'Verified'
    },
    {
      id: 'cert',
      letter: 'C',
      title: isPt ? 'Certificado de Destruição / RGPD' : 'Tamper-Proof Audit Certificate',
      desc: isPt 
        ? 'Emissão de relatório oficial com número de série de cada disco para auditorias de conformidade com o RGPD Art. 17.'
        : 'Issuance of official tamper-proof PDF certificates with individual disk serials for GDPR Article 17 audits.',
      badge: isPt ? 'Certificado' : 'Certified'
    }
  ];

  return (
    <div className="w-full relative pb-12">
      
      {/* 🌟 HERO WRAPPER CARD WITH SOFT ETHEREAL GRADIENT & AMBIENT RADIANCES */}
      <div className="relative rounded-[36px] sm:rounded-[48px] bg-gradient-to-b from-[#F0FDFA] via-[#F8FAFC] to-[#F0FDFA] border border-teal-100/90 p-6 sm:p-10 lg:p-12 overflow-hidden shadow-xl shadow-teal-950/5 mb-10">
        
        {/* Soft Ambient Radiance Elements (Top Right & Left) */}
        <div className="absolute -top-24 right-1/4 w-[450px] h-[350px] bg-[#99F6E4]/40 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 left-10 w-[380px] h-[320px] bg-[#5EEAD4]/25 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 right-10 w-[350px] h-[300px] bg-[#CCFBF1]/40 rounded-full blur-3xl pointer-events-none" />

        {/* 🌟 2-COLUMN HERO DISPLAY (EXACT COMPOSITION OF REFERENCE IMAGE) */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* 👈 LEFT COLUMN: TYPOGRAPHY, 3 MICRO-METRICS & SOUNDWAVE/TELEMETRY */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-teal-200/70 text-xs font-bold uppercase tracking-wider mb-4 text-[#0D7E73] shadow-xs w-fit">
              <FileCheck className="w-3.5 h-3.5 text-[#0D7E73]" />
              <span>{isPt ? 'Norma NIST SP 800-88 Rev. 1 & DoD' : 'NIST SP 800-88 & DoD Standards'}</span>
            </div>

            {/* Main Headline (Exact Big Display Typography from Reference Image) */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0F172A] leading-tight mb-3">
              {isPt ? 'Destruição Segura de Dados.' : 'Certified Data Sanitization.'}
            </h1>

            {/* Tagline in Two-Tone Color (matching "AI listens. AI writes.") */}
            <div className="text-xl sm:text-2xl font-bold mb-6 tracking-tight flex items-center gap-2 flex-wrap">
              <span className="text-[#0D7E73]">
                {isPt ? 'NIST 800-88 Purga.' : 'NIST 800-88 Purges.'}
              </span>
              <span className="text-[#0F172A]">
                {isPt ? 'Zero vestígios.' : 'Zero forensic traces.'}
              </span>
            </div>

            {/* Micro Summary Text */}
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-8 max-w-lg font-medium">
              {isPt 
                ? 'Eliminação de dados a nível de hardware com certificado por número de série. Processo estruturado para apoiar os requisitos do RGPD e reduzir riscos de fuga de dados.'
                : 'Hardware-level storage sanitization with serialized certificates designed to support GDPR audit requirements and protect confidential business data.'}
            </p>

            {/* 🎯 3 MICRO-METRIC CARDS (Exact Replica of Left 3 Badges in Reference Image) */}
            <div className="flex items-center gap-3 sm:gap-4 mb-8 flex-wrap">
              
              {/* Badge 1: NIST / HIPAA Secure */}
              <div className="flex items-center gap-3 p-3 sm:p-3.5 rounded-2xl bg-white/95 border border-teal-100/90 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-[#F0FDFA] border border-[#CCFBF1] text-[#0D7E73] flex items-center justify-center shrink-0">
                  <Lock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-black text-[#0F172A]">NIST 800-88</div>
                  <div className="text-[11px] font-bold text-[#0D7E73]">
                    {isPt ? 'Rev. 2 Alinhado' : 'Rev. 2 Aligned'}
                  </div>
                </div>
              </div>

              {/* Badge 2: Complete Purge */}
              <div className="flex items-center gap-3 p-3 sm:p-3.5 rounded-2xl bg-white/95 border border-teal-100/90 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-[#F0FDFA] border border-[#CCFBF1] text-[#0D7E73] flex items-center justify-center shrink-0">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-black text-[#0F172A]">Multi-Pass</div>
                  <div className="text-[11px] font-bold text-[#0D7E73]">
                    {isPt ? 'Purga Criptográfica' : 'Cryptographic Wipe'}
                  </div>
                </div>
              </div>

              {/* Badge 3: Audit Certificate */}
              <div className="flex items-center gap-3 p-3 sm:p-3.5 rounded-2xl bg-white/95 border border-teal-100/90 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-[#F0FDFA] border border-[#CCFBF1] text-[#0D7E73] flex items-center justify-center shrink-0">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-black text-[#0F172A]">
                    {isPt ? 'Suporte RGPD' : 'GDPR Ready'}
                  </div>
                  <div className="text-[11px] font-bold text-[#0D7E73]">
                    {isPt ? 'Certificado PDF' : 'Serial Cert.'}
                  </div>
                </div>
              </div>

            </div>

            {/* 🌊 TELEMETRY SOUNDWAVE BARS (Connecting element matching the reference image) */}
            <div className="flex items-center gap-1.5 mb-8 py-2">
              <span className="text-[11px] font-mono font-bold text-[#0D7E73] uppercase tracking-wider mr-2">
                {isPt ? 'Telemetria LBA:' : 'LBA Stream:'}
              </span>
              {[18, 34, 12, 48, 28, 62, 38, 52, 22, 68, 44, 30, 58, 26, 40, 16, 50, 32].map((height, i) => (
                <span 
                  key={i} 
                  className="w-1 rounded-full bg-gradient-to-t from-[#0D7E73] to-[#5EEAD4] transition-all duration-300 animate-pulse"
                  style={{ 
                    height: `${height}px`,
                    animationDelay: `${i * 90}ms`
                  }} 
                />
              ))}
            </div>

            {/* Action Primary Button */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={onRequestQuote}
                className="inline-flex items-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl text-xs sm:text-sm font-extrabold text-white bg-[#0D7E73] hover:bg-[#0F766E] transition-all cursor-pointer shadow-lg shadow-teal-900/15 hover:shadow-xl active:scale-95"
              >
                <span>{isPt ? 'Pedir Proposta de Eliminação' : 'Request Certified Erasure'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={whatsappInquiryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-2xl text-xs sm:text-sm font-bold text-[#0D7E73] bg-white hover:bg-[#F0FDFA] border border-[#CCFBF1] transition-colors shadow-xs"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>

          </div>

          {/* 👉 RIGHT COLUMN: FLOATING TABLET / SOFTWARE INTERFACE (100% FAITHFUL REPLICA) */}
          <div className="lg:col-span-6 relative">
            
            {/* Ambient Background Glow Behind Tablet */}
            <div className="absolute -inset-2 bg-gradient-to-r from-[#5EEAD4]/30 to-[#14B8A6]/20 rounded-[40px] blur-xl" />

            {/* Main Floating Tablet Console Container */}
            <div className="relative bg-white rounded-[32px] sm:rounded-[38px] border border-slate-200/90 shadow-[0_25px_60px_rgba(13,126,115,0.08)] overflow-hidden">
              
              {/* Tablet Top App Bar */}
              <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-[#F8FAFC]/90 backdrop-blur-md">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-[#E6FFFA] text-[#0D7E73] flex items-center justify-center border border-[#99F6E4]">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <span className="font-extrabold text-xs sm:text-sm text-[#0F172A] tracking-tight">
                    {isPt ? 'Laboratório de Sanitização' : 'Sanitization Scribe'}
                  </span>
                </div>

                {/* Verified / Saved Green Badge (matching reference) */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E6FFFA] text-[#0D7E73] text-[11px] font-black border border-[#99F6E4] shadow-xs">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                  <span>{isPt ? 'Certificado' : 'Verified'}</span>
                </div>
              </div>

              {/* Tablet Content Body (Side Rail + Sanitization Log Cards) */}
              <div className="flex">
                
                {/* Left Mini Icon Vertical Sidebar (matching reference design) */}
                <div className="w-14 sm:w-16 border-r border-slate-100 py-6 flex flex-col items-center gap-5 bg-[#FAFAFA]/70">
                  <button 
                    onClick={() => setActiveTab('purge')}
                    className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all cursor-pointer ${
                      activeTab === 'purge' 
                        ? 'bg-[#E6FFFA] text-[#0D7E73] border border-[#99F6E4] shadow-xs' 
                        : 'text-slate-400 hover:text-[#0D7E73]'
                    }`}
                    title="Audio/Telemetry"
                  >
                    <Activity className="w-4 h-4" />
                  </button>

                  <button 
                    onClick={() => setActiveTab('cert')}
                    className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all cursor-pointer ${
                      activeTab === 'cert' 
                        ? 'bg-[#E6FFFA] text-[#0D7E73] border border-[#99F6E4] shadow-xs' 
                        : 'text-slate-400 hover:text-[#0D7E73]'
                    }`}
                    title="Certificate Report"
                  >
                    <FileSpreadsheet className="w-4 h-4" />
                  </button>

                  <button 
                    onClick={() => setActiveTab('verify')}
                    className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all cursor-pointer ${
                      activeTab === 'verify' 
                        ? 'bg-[#E6FFFA] text-[#0D7E73] border border-[#99F6E4] shadow-xs' 
                        : 'text-slate-400 hover:text-[#0D7E73]'
                    }`}
                    title="Auditor Info"
                  >
                    <ShieldCheck className="w-4 h-4" />
                  </button>
                </div>

                {/* Right Items Column: S, O, A, P Circular Badge Cards (Matching Reference) */}
                <div className="flex-1 p-4 sm:p-6 space-y-3 sm:space-y-3.5 bg-white">
                  {sanitizationSteps.map((step, idx) => (
                    <div 
                      key={step.id}
                      className="p-3.5 sm:p-4 rounded-2xl bg-[#F8FAFC] border border-slate-100 hover:border-teal-200 hover:bg-[#F0FDFA]/60 transition-all flex items-start gap-3.5 group cursor-default"
                    >
                      {/* Round Colored Letter Badge (S, O, A, P style) */}
                      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#E6FFFA] text-[#0D7E73] border-2 border-[#99F6E4] font-black text-xs sm:text-sm flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                        {step.letter}
                      </div>

                      {/* Content of Step */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2 mb-0.5">
                          <h3 className="font-extrabold text-xs sm:text-sm text-[#0F172A] truncate">
                            {step.title}
                          </h3>
                          <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-md bg-white border border-slate-200 text-[#0D7E73] shrink-0">
                            {step.badge}
                          </span>
                        </div>
                        <p className="text-[11px] sm:text-xs text-[#475569] leading-relaxed font-medium">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

              </div>

              {/* Tablet Bottom Bar with Hardware Serial Status */}
              <div className="px-6 py-3 bg-[#F0FDFA] border-t border-teal-100/80 flex items-center justify-between text-[11px] font-mono text-[#0D7E73]">
                <span className="flex items-center gap-1.5 font-bold">
                  <span className="w-2 h-2 rounded-full bg-[#0D7E73] animate-pulse" />
                  NVMe / SAS / SATA Sanitize Active
                </span>
                <span className="font-bold">Algoritmica Mania Lab</span>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* 🏛️ BOTTOM COMPLIANCE & PROTOCOLS STRIP */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-[#F0FDFA] border border-[#CCFBF1] text-[#0D7E73] flex items-center justify-center shrink-0 shadow-xs">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-sm sm:text-base font-extrabold text-[#0F172A]">
              {isPt ? 'Conformidade com o RGPD (Artigo 17 - Direito ao Apagamento)' : 'Full GDPR Compliance & Tamper-Proof Trail'}
            </h3>
            <p className="text-xs text-[#64748B] mt-0.5">
              {companyData.fullAddress} • {companyData.hoursWeekday}
            </p>
          </div>
        </div>

        <button
          onClick={onRequestQuote}
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl text-xs sm:text-sm font-bold text-white bg-[#0D7E73] hover:bg-[#0F766E] transition-all shrink-0 cursor-pointer shadow-md hover:shadow-lg active:scale-95"
        >
          <FileText className="w-4 h-4" />
          <span>{isPt ? 'Pedir Cotação de Sanitização' : 'Request Sanitization Quote'}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
};
