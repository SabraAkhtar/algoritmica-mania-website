import React, { useState } from 'react';
import { Language } from '../../types';
import { 
  Wrench, 
  Headphones, 
  Cpu, 
  HardDrive, 
  ClipboardCheck, 
  Sparkles, 
  Activity, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Clock, 
  Zap, 
  MessageSquare,
  FileText,
  TrendingUp,
  Award,
  Terminal,
  ThermometerSnowflake,
  Shield,
  Search,
  Check,
  Laptop,
  Smartphone,
  Gauge,
  CheckCircle,
  BarChart3,
  Server
} from 'lucide-react';
import { companyData } from '../../data/company';

interface ITSupportDiagnosticsProps {
  lang: Language;
  onRequestQuote: () => void;
}

export const ITSupportDiagnosticsInteractive: React.FC<ITSupportDiagnosticsProps> = ({
  lang,
  onRequestQuote
}) => {
  const [activeNodeId, setActiveNodeId] = useState<number>(0);
  const [activeTelemetryTab, setActiveTelemetryTab] = useState<'thermal' | 'performance' | 'security'>('thermal');

  // 6 Orbital Service Pillars
  const orbitalPillars = [
    {
      id: 0,
      badge: lang === 'pt' ? 'TRIAGEM' : 'TRIAGE',
      title: lang === 'pt' ? 'Diagnóstico Eletrónico' : 'Board-Level Diagnostics',
      subtitle: lang === 'pt' ? 'Motherboard & VRM' : 'Motherboard & Circuits',
      desc: lang === 'pt' 
        ? 'Inspeção microscópica de linhas de tensão (3.3V/5V/12V), integridade de condensadores e medição de ripple elétrico.' 
        : 'Microscopic inspection of power delivery rails, capacitor ESR degradation, and VRM thermal telemetry.',
      icon: Search,
      turnaround: lang === 'pt' ? '2 a 4 Horas' : '2 to 4 Hours',
      stat: lang === 'pt' ? '40+ Pontos' : '40+ Checks',
      tag: 'Nível Componente'
    },
    {
      id: 1,
      badge: lang === 'pt' ? 'TÉRMICA' : 'THERMAL',
      title: lang === 'pt' ? 'Otimização Térmica' : 'Thermal Overhaul',
      subtitle: lang === 'pt' ? 'Condutividade Máxima' : 'Peak Dissipation',
      desc: lang === 'pt' 
        ? 'Desmontagem, limpeza ultrassónica de alhetas e aplicação de pasta térmica industrial de alta condutividade (14.2 W/mK).' 
        : 'Subsystem teardown, ultrasonic heatsink wash, and high-performance industrial thermal compound application.',
      icon: ThermometerSnowflake,
      turnaround: lang === 'pt' ? '1 a 3 Horas' : '1 to 3 Hours',
      stat: lang === 'pt' ? '-15°C a -25°C' : '-15°C to -25°C',
      tag: 'Zero Throttling'
    },
    {
      id: 2,
      badge: lang === 'pt' ? 'UPGRADES' : 'UPGRADES',
      title: lang === 'pt' ? 'NVMe & Expansão RAM' : 'NVMe & RAM Boost',
      subtitle: lang === 'pt' ? 'Até +300% I/O' : 'Up to +300% Speed',
      desc: lang === 'pt' 
        ? 'Aumento de fluidez com memórias ECC/DDR4/DDR5 validadas e SSDs NVMe PCIe 4.0 empresariais com garantia total.' 
        : 'Installation of high-end dual-channel ECC/DDR memory and enterprise NVMe PCIe 4.0 SSDs with 3-year warranty.',
      icon: Cpu,
      turnaround: lang === 'pt' ? 'Mesmo Dia' : 'Same Day',
      stat: '3500+ MB/s',
      tag: 'Alta Velocidade'
    },
    {
      id: 3,
      badge: lang === 'pt' ? 'SEGURANÇA' : 'SECURITY',
      title: lang === 'pt' ? 'Clonagem & Dados' : 'Forensic Data Migration',
      subtitle: lang === 'pt' ? 'Zero Perda' : 'Zero Loss',
      desc: lang === 'pt' 
        ? 'Migração integral de discos bit-a-bit, preservando softwares, certificados, licenças e definições da empresa.' 
        : 'Bit-for-bit disk migration preserving installed software, security certs, ERP credentials, and configurations.',
      icon: HardDrive,
      turnaround: lang === 'pt' ? '2 a 4 Horas' : '2 to 4 Hours',
      stat: 'NIST 800-88',
      tag: 'Sanitização Segura'
    },
    {
      id: 4,
      badge: lang === 'pt' ? 'ESTABILIDADE' : 'STABILITY',
      title: lang === 'pt' ? 'Stress Test 24h' : '24h Stress Testing',
      subtitle: lang === 'pt' ? 'MemTest & Burn-In' : 'Burn-In Audit',
      desc: lang === 'pt' 
        ? 'Bateria de testes sob 100% de carga sintética contínua para certificar total imunidade a ecrãs azuis (BSOD).' 
        : 'Automated 100% full synthetic load testing under MemTest86+ and FurMark to ensure rock-solid stability.',
      icon: Activity,
      turnaround: lang === 'pt' ? '12 a 24 Horas' : '12 to 24 Hours',
      stat: '100% Validado',
      tag: 'Relatório Emitido'
    },
    {
      id: 5,
      badge: lang === 'pt' ? 'HELPDESK' : 'HELPDESK',
      title: lang === 'pt' ? 'Suporte B2B Contínuo' : 'Priority B2B SLA',
      subtitle: lang === 'pt' ? 'Resposta <4h' : '<4h Fast Response',
      desc: lang === 'pt' 
        ? 'Assistência remota e presencial direta para frotas corporativas, sem burocracia e com engenheiros dedicados.' 
        : 'Direct hardware engineering helpdesk for enterprise client fleets with prioritized on-site dispatch.',
      icon: Headphones,
      turnaround: lang === 'pt' ? '< 4 Horas' : '< 4 Hours',
      stat: 'SLA Prioritário',
      tag: 'Empresarial'
    }
  ];

  const activePillar = orbitalPillars.find(p => Number(p.id) === activeNodeId) || orbitalPillars[0];

  const whatsappInquiryUrl = `https://wa.me/${companyData.whatsappNumber}?text=${encodeURIComponent(
    `Olá Algoritmica Mania, gostaria de agendar um diagnóstico / suporte técnico para a nossa empresa.`
  )}`;

  return (
    <div className="w-full space-y-16">
      
      {/* 💡 TOP HERO: "6 Diagnostic Pillars • 1 Integrated Solution" */}
      <div className="relative overflow-hidden rounded-3xl bg-white border border-[#CCFBF1] p-6 sm:p-10 lg:p-12 shadow-xs">
        
        {/* Soft Ambient Light Teal Gradients in Canvas */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#F0FDFA] rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#E6FAF7]/60 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-10 relative z-10">
          <div className="inline-flex items-center gap-3 px-6 py-2 rounded-2xl bg-white border-2 border-[#CCFBF1] shadow-xs mb-4">
            <span className="text-2xl sm:text-3xl font-black text-[#0D7E73] tracking-tight">6</span>
            <div className="h-6 w-px bg-[#CCFBF1]" />
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#042F2C]">
              {lang === 'pt' ? 'Pilares de Diagnóstico' : 'Diagnostic Pillars'}
            </span>
          </div>

          <div className="text-sm sm:text-base font-bold text-[#0D7E73] uppercase tracking-wider mb-2">
            {lang === 'pt' ? '1 SOLUÇÃO INTEGRADA DE HARDWARE' : '1 INTEGRATED HARDWARE SOLUTION'}
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#042F2C] tracking-tight">
            {lang === 'pt' ? 'Engenharia de Diagnóstico & Suporte B2B' : 'Precision Hardware Diagnostics & Support'}
          </h1>
          
          <p className="text-xs sm:text-sm text-[#64748B] mt-2 max-w-xl mx-auto">
            {lang === 'pt'
              ? 'Clique em qualquer nó orbital para inspecionar os nossos protocolos laboratoriais, tempos de resposta e garantias.'
              : 'Interact with any orbital pillar below to view our certified lab methodology, turnaround times, and metrics.'}
          </p>
        </div>

        {/* Center Interactive Radial Hub Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          
          {/* Left: The 6 Orbital Spheres */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 sm:gap-4">
              {orbitalPillars.map((pillar) => {
                const IconComponent = pillar.icon;

                return (
                  <button
                    key={pillar.id}
                    onClick={() => setActiveNodeId(Number(pillar.id))}
                    className="relative p-4 sm:p-5 rounded-2xl text-left border-2 border-[#CCFBF1] hover:border-[#0D7E73] bg-white hover:bg-[#F0FDFA]/60 transition-all duration-300 cursor-pointer group flex flex-col justify-between min-h-[140px] sm:min-h-[160px] shadow-2xs hover:shadow-md hover:scale-[1.02]"
                  >
                    <div className="flex items-center justify-between w-full mb-3">
                      <div className="w-11 h-11 rounded-2xl flex items-center justify-center transition-transform duration-300 bg-[#F0FDFA] text-[#0D7E73] border border-[#CCFBF1] group-hover:scale-105 group-hover:bg-[#0D7E73] group-hover:text-white group-hover:shadow-sm">
                        <IconComponent className="w-5 h-5" />
                      </div>

                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full uppercase tracking-wider bg-[#F0FDFA] text-[#0D7E73] border border-[#CCFBF1] group-hover:bg-[#0D7E73] group-hover:text-white transition-colors">
                        {pillar.badge}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-xs sm:text-sm font-extrabold tracking-tight leading-snug text-[#1E293B] group-hover:text-[#042F2C]">
                        {pillar.title}
                      </h3>
                      <p className="text-[11px] text-[#64748B] mt-0.5 font-medium truncate">
                        {pillar.subtitle}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-3 bg-[#F0FDFA] border border-[#CCFBF1] rounded-2xl p-3.5 px-5">
              <div className="flex items-center gap-2.5 text-xs text-[#042F2C] font-semibold">
                <ShieldCheck className="w-4 h-4 text-[#0D7E73] shrink-0" />
                <span>{lang === 'pt' ? 'Laboratório Certificado em Trofa' : 'Certified In-House Hardware Lab'}</span>
              </div>
              <div className="text-xs font-bold text-[#0D7E73] flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{lang === 'pt' ? 'Garantia de 12 a 36 Meses' : '12–36 Month Warranty Included'}</span>
              </div>
            </div>
          </div>

          {/* Right: Dynamic Live Inspector */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl border-2 border-[#CCFBF1] hover:border-[#042F2C] transition-colors duration-300 p-6 sm:p-8 shadow-md shadow-[#0D7E73]/5 relative">
              
              <div className="flex items-start justify-between gap-4 mb-4 pb-4 border-b border-[#E6FAF7]">
                <div>
                  <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-[#F0FDFA] text-[#0D7E73] border border-[#CCFBF1] mb-1.5 uppercase">
                    <span>{activePillar.tag}</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-[#042F2C] tracking-tight">
                    {activePillar.title}
                  </h2>
                </div>

                <div className="w-12 h-12 rounded-2xl bg-[#0D7E73] text-white flex items-center justify-center shadow-sm shadow-[#0D7E73]/20 shrink-0">
                  {React.createElement(activePillar.icon, { className: 'w-6 h-6' })}
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#334155] leading-relaxed mb-6">
                {activePillar.desc}
              </p>

              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="bg-[#F0FDFA] border border-[#CCFBF1] rounded-2xl p-3.5">
                  <div className="flex items-center gap-1.5 text-[10px] font-bold text-[#0D7E73] uppercase mb-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{lang === 'pt' ? 'Prazo de Resolução' : 'Turnaround'}</span>
                  </div>
                  <div className="text-xs sm:text-sm font-extrabold text-[#042F2C]">
                    {activePillar.turnaround}
                  </div>
                </div>

                <div className="bg-[#F0FDFA] border border-[#CCFBF1] rounded-2xl p-3.5">
                  <div className="flex items-center gap-1.5 text-[10px] font-bold text-[#0D7E73] uppercase mb-1">
                    <Award className="w-3.5 h-3.5" />
                    <span>{lang === 'pt' ? 'Métrica de Qualidade' : 'Performance Target'}</span>
                  </div>
                  <div className="text-xs sm:text-sm font-extrabold text-[#042F2C]">
                    {activePillar.stat}
                  </div>
                </div>
              </div>

              <div className="space-y-2 mb-6">
                <div className="text-[11px] font-bold text-[#042F2C] uppercase tracking-wider">
                  {lang === 'pt' ? 'Garantias do Procedimento:' : 'Standard Lab Procedures:'}
                </div>
                <div className="flex items-center gap-2.5 text-xs text-[#334155]">
                  <Check className="w-4 h-4 text-[#0D7E73] shrink-0" />
                  <span>{lang === 'pt' ? 'Bancadas anti-estáticas com proteção ESD' : 'ESD-protected certified workstations'}</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-[#334155]">
                  <Check className="w-4 h-4 text-[#0D7E73] shrink-0" />
                  <span>{lang === 'pt' ? 'Relatório técnico com curvas de voltagem e térmicas' : 'Telemetry sheet with thermal and voltage logs'}</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-[#334155]">
                  <Check className="w-4 h-4 text-[#0D7E73] shrink-0" />
                  <span>{lang === 'pt' ? 'Componentes OEM homologados (Crucial, Samsung, Kingston)' : 'Certified OEM grade replacement parts'}</span>
                </div>
              </div>

              <div className="space-y-2.5">
                <button
                  onClick={onRequestQuote}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#0D7E73] hover:bg-[#0B6A61] transition-all duration-200 cursor-pointer shadow-xs hover:shadow-md active:scale-95"
                >
                  <FileText className="w-4 h-4" />
                  <span>{lang === 'pt' ? 'Solicitar Diagnóstico / Cotação' : 'Book Diagnostic / Request Quote'}</span>
                </button>

                <a
                  href={whatsappInquiryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-[#042F2C] bg-[#F0FDFA] hover:bg-[#E6FAF7] border border-[#CCFBF1] hover:border-[#0D7E73] transition-colors"
                >
                  <MessageSquare className="w-4 h-4 text-[#0D7E73]" />
                  <span>{lang === 'pt' ? 'Falar com Engenheiro via WhatsApp' : 'Inquire via WhatsApp'}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 🚀 IMAGE 2 INSPIRED SHOWCASE: "YOUR WORKSTATION ISN'T JUST HARDWARE..." */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-[#F8FAFC] via-[#F0FDFA]/50 to-[#FFFFFF] border-2 border-[#CCFBF1] p-6 sm:p-12 lg:p-16 shadow-lg shadow-[#0D7E73]/5">
        
        {/* Ambient Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#0D7E73_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="absolute -top-24 right-1/4 w-96 h-96 bg-[#CCFBF1]/50 rounded-full blur-3xl pointer-events-none" />

        {/* 🌟 Big Impact Typography (Inspired by Reference Image 2) */}
        <div className="text-center max-w-4xl mx-auto mb-12 relative z-10">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#042F2C] leading-none mb-4">
            {lang === 'pt' ? 'O SEU HARDWARE' : 'YOUR HARDWARE'}{' '}
            <span className="text-[#0D7E73]">{lang === 'pt' ? 'NÃO É APENAS' : "ISN'T JUST"}</span>{' '}
            {lang === 'pt' ? 'UMA MÁQUINA' : 'A MACHINE'}
          </h2>

          {/* Eye-catching Highlight Pill like Reference Image 2 */}
          <div className="inline-flex items-center justify-center px-6 py-2.5 rounded-2xl bg-[#0D7E73] text-white shadow-md shadow-[#0D7E73]/25 transform -rotate-1 hover:rotate-0 transition-transform">
            <span className="text-sm sm:text-base lg:text-lg font-black tracking-wide uppercase">
              {lang === 'pt' ? 'É o motor mais produtivo da sua empresa!' : "It's Your Most Productive Business Engine!"}
            </span>
          </div>

          <p className="text-xs sm:text-sm text-[#64748B] font-medium mt-4 max-w-xl mx-auto">
            {lang === 'pt'
              ? 'Otimizamos a performance de cada posto de trabalho para eliminar lentidões, falhas e perdas de tempo na sua equipa.'
              : 'We fine-tune every corporate workstation to eliminate sluggishness, BSOD crashes, and productivity loss.'}
          </p>
        </div>

        {/* 💻📱 Central 3D Device Showcase (Laptop + Mobile Companion with Live Telemetry) */}
        <div className="relative max-w-5xl mx-auto my-8 z-10">
          
          {/* Floating Callout Pill with Organic Annotation Arrow (Exact style from Reference 2) */}
          <div className="absolute -top-6 right-4 sm:right-12 z-30 flex flex-col items-center pointer-events-none animate-bounce duration-1000">
            <div className="px-5 py-2.5 rounded-2xl bg-[#38BDF8] text-white font-extrabold text-xs sm:text-sm shadow-lg shadow-[#38BDF8]/30 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-white" />
              <span>{lang === 'pt' ? 'Otimize a sua frota hoje!' : 'Diagnose your fleet today!'}</span>
            </div>
            
            {/* Hand-drawn style decorative SVG arrow */}
            <svg className="w-8 h-8 text-[#38BDF8] -mt-1 -mr-6 transform rotate-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* 3D Realistic Laptop Workstation Mockup */}
            <div className="lg:col-span-8 relative">
              
              {/* Laptop Outer Bezel with metallic silver finish */}
              <div className="relative rounded-3xl bg-[#0F172A] p-3 sm:p-4 shadow-2xl border-4 border-[#334155] shadow-[#042F2C]/30 transform -rotate-1 hover:rotate-0 transition-transform duration-500">
                
                {/* Top Notch / Camera */}
                <div className="w-3 h-3 bg-black rounded-full mx-auto mb-2 border border-white/20" />

                {/* Laptop Glass Screen */}
                <div className="rounded-2xl bg-gradient-to-br from-[#042F2C] via-[#0D7E73] to-[#115E59] text-white p-4 sm:p-6 overflow-hidden border border-white/10 relative">
                  
                  {/* Glass Top Specular Glare */}
                  <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-white/15 to-transparent pointer-events-none rounded-t-2xl" />

                  {/* Diagnostic Screen Header */}
                  <div className="flex items-center justify-between border-b border-white/20 pb-3 mb-4 relative z-10">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
                        <Terminal className="w-4 h-4 text-[#99F6E4]" />
                      </div>
                      <div>
                        <div className="text-xs font-black tracking-wider text-white uppercase">
                          ALGORITMICA LAB TELEMETRY v4.2
                        </div>
                        <div className="text-[10px] text-[#CCFBF1] flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-[#34D399] animate-pulse" />
                          <span>{lang === 'pt' ? 'Laboratório Certificado Ativo' : 'Live Hardware Audit Station'}</span>
                        </div>
                      </div>
                    </div>

                    {/* Interactive Telemetry Tabs */}
                    <div className="flex items-center gap-1.5 bg-black/30 p-1 rounded-xl border border-white/15 text-[11px]">
                      <button
                        onClick={() => setActiveTelemetryTab('thermal')}
                        className={`px-2.5 py-1 rounded-lg font-bold transition-colors cursor-pointer ${
                          activeTelemetryTab === 'thermal' ? 'bg-[#2DD4BF] text-[#042F2C]' : 'text-white/80 hover:text-white'
                        }`}
                      >
                        {lang === 'pt' ? 'Térmica' : 'Thermal'}
                      </button>
                      <button
                        onClick={() => setActiveTelemetryTab('performance')}
                        className={`px-2.5 py-1 rounded-lg font-bold transition-colors cursor-pointer ${
                          activeTelemetryTab === 'performance' ? 'bg-[#2DD4BF] text-[#042F2C]' : 'text-white/80 hover:text-white'
                        }`}
                      >
                        {lang === 'pt' ? 'Desempenho' : 'Performance'}
                      </button>
                      <button
                        onClick={() => setActiveTelemetryTab('security')}
                        className={`px-2.5 py-1 rounded-lg font-bold transition-colors cursor-pointer ${
                          activeTelemetryTab === 'security' ? 'bg-[#2DD4BF] text-[#042F2C]' : 'text-white/80 hover:text-white'
                        }`}
                      >
                        {lang === 'pt' ? 'Segurança' : 'Security'}
                      </button>
                    </div>
                  </div>

                  {/* Telemetry Dashboard Data */}
                  <div className="grid grid-cols-3 gap-3 mb-4 relative z-10">
                    <div className="bg-black/30 backdrop-blur-md rounded-xl p-3 border border-white/15">
                      <div className="text-[10px] text-[#CCFBF1] font-semibold uppercase">{lang === 'pt' ? 'Temperatura CPU' : 'CPU Core Temp'}</div>
                      <div className="text-xl sm:text-2xl font-black text-white mt-0.5">
                        {activeTelemetryTab === 'thermal' ? '38.4 °C' : activeTelemetryTab === 'performance' ? '4.85 GHz' : '99.9%'}
                      </div>
                      <div className="text-[10px] text-[#34D399] font-bold flex items-center gap-1 mt-1">
                        <TrendingUp className="w-3 h-3" />
                        <span>-22°C Delta Nominal</span>
                      </div>
                    </div>

                    <div className="bg-black/30 backdrop-blur-md rounded-xl p-3 border border-white/15">
                      <div className="text-[10px] text-[#CCFBF1] font-semibold uppercase">{lang === 'pt' ? 'Velocidade NVMe' : 'NVMe Read/Write'}</div>
                      <div className="text-xl sm:text-2xl font-black text-white mt-0.5">
                        {activeTelemetryTab === 'thermal' ? '0 Throttling' : activeTelemetryTab === 'performance' ? '3,840 MB/s' : 'AES-256'}
                      </div>
                      <div className="text-[10px] text-[#34D399] font-bold flex items-center gap-1 mt-1">
                        <CheckCircle2 className="w-3 h-3" />
                        <span>Gen4 x4 Validado</span>
                      </div>
                    </div>

                    <div className="bg-black/30 backdrop-blur-md rounded-xl p-3 border border-white/15">
                      <div className="text-[10px] text-[#CCFBF1] font-semibold uppercase">{lang === 'pt' ? 'Estabilidade VRM' : 'VRM Ripple Score'}</div>
                      <div className="text-xl sm:text-2xl font-black text-white mt-0.5">
                        100% OK
                      </div>
                      <div className="text-[10px] text-[#34D399] font-bold flex items-center gap-1 mt-1">
                        <ShieldCheck className="w-3 h-3" />
                        <span>Zero BSOD Kernel</span>
                      </div>
                    </div>
                  </div>

                  {/* Visual Diagnostic Waveform Graphic */}
                  <div className="bg-black/40 rounded-xl p-3 border border-white/15 flex items-center justify-between relative z-10">
                    <div className="flex items-center gap-3">
                      <Activity className="w-5 h-5 text-[#2DD4BF] animate-pulse" />
                      <div className="text-xs font-semibold text-white">
                        {lang === 'pt' ? 'Bateria de 40+ Testes Eletrónicos Concluída com Sucesso' : '40+ Precision Component Stress Tests Fully Passed'}
                      </div>
                    </div>
                    <span className="text-[11px] font-black px-2.5 py-0.5 rounded-full bg-[#2DD4BF] text-[#042F2C]">
                      CERTIFIED LAB
                    </span>
                  </div>

                </div>

                {/* Laptop Keyboard & Trackpad Base Simulation */}
                <div className="mt-3 bg-[#1E293B] rounded-b-2xl p-2 border-t border-white/10 flex justify-center">
                  <div className="w-24 h-1.5 bg-[#475569] rounded-full" />
                </div>
              </div>

            </div>

            {/* 📱 Paired Smartphone Device Mockup (Direct from Reference Image 2) */}
            <div className="lg:col-span-4 relative flex justify-center">
              
              {/* Smartphone Frame */}
              <div className="w-64 sm:w-72 rounded-[38px] bg-[#0F172A] p-3 border-4 border-[#334155] shadow-2xl shadow-[#042F2C]/30 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                
                {/* Dynamic Island / Speaker */}
                <div className="w-20 h-4 bg-black rounded-full mx-auto mb-2 border border-white/20 flex items-center justify-end px-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500/40" />
                </div>

                {/* Smartphone Screen Content */}
                <div className="rounded-[28px] bg-white text-[#042F2C] p-4 overflow-hidden border border-slate-200 space-y-3">
                  
                  <div className="flex items-center justify-between border-b pb-2">
                    <div className="text-xs font-extrabold text-[#0D7E73]">
                      PORTAL B2B
                    </div>
                    <div className="text-[10px] font-mono bg-[#CCFBF1] text-[#042F2C] px-2 py-0.5 rounded-full font-bold">
                      SLA &lt;4h
                    </div>
                  </div>

                  <div className="bg-[#F0FDFA] rounded-xl p-3 border border-[#CCFBF1]">
                    <div className="text-[10px] text-[#64748B] font-semibold">{lang === 'pt' ? 'Equipamento em Manutenção' : 'Asset Under Triage'}</div>
                    <div className="text-xs font-black text-[#042F2C]">Dell Precision 5570 / Mac</div>
                    <div className="text-[10px] text-[#0D7E73] font-bold mt-1">✓ {lang === 'pt' ? 'Relatório Pronto para Download' : 'Lab Audit Ready'}</div>
                  </div>

                  <div className="space-y-1.5 text-xs text-[#334155]">
                    <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50">
                      <span>{lang === 'pt' ? 'Troca Pasta Térmica' : 'Thermal Repaste'}</span>
                      <span className="font-bold text-[#0D7E73]">Concluído</span>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50">
                      <span>{lang === 'pt' ? 'Upgrade NVMe 1TB' : 'NVMe 1TB Boost'}</span>
                      <span className="font-bold text-[#0D7E73]">Concluído</span>
                    </div>
                  </div>

                  <button
                    onClick={onRequestQuote}
                    className="w-full py-2.5 px-3 rounded-xl bg-[#0D7E73] text-white text-xs font-bold shadow-xs hover:bg-[#0B6A61] transition-colors cursor-pointer"
                  >
                    {lang === 'pt' ? 'Agendar Suporte Presencial' : 'Book On-Site Dispatch'}
                  </button>

                </div>

              </div>
            </div>

          </div>

        </div>

        {/* 🌟 Bottom Action Strip (Quote, WhatsApp, Address) */}
        <div className="mt-12 pt-8 border-t-2 border-[#CCFBF1] flex flex-col sm:flex-row items-center justify-between gap-6 relative z-10">
          
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#F0FDFA] border-2 border-[#CCFBF1] flex items-center justify-center text-[#0D7E73] shrink-0 shadow-2xs">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#0D7E73]">
                {lang === 'pt' ? 'LABORATÓRIO PRÓPRIO' : 'IN-HOUSE CERTIFIED LAB'}
              </div>
              <div className="text-sm font-extrabold text-[#042F2C]">
                {companyData.fullAddress}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={onRequestQuote}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl text-xs sm:text-sm font-bold text-white bg-[#0D7E73] hover:bg-[#0B6A61] transition-all duration-200 cursor-pointer shadow-md hover:shadow-lg active:scale-95"
            >
              <FileText className="w-4 h-4" />
              <span>{lang === 'pt' ? 'Pedir Cotação de Diagnóstico' : 'Request Hardware Diagnostics'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={whatsappInquiryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold text-[#042F2C] bg-white hover:bg-[#F0FDFA] border-2 border-[#CCFBF1] hover:border-[#0D7E73] transition-colors shadow-2xs"
            >
              <MessageSquare className="w-4 h-4 text-[#0D7E73]" />
              <span>{lang === 'pt' ? 'Falar no WhatsApp' : 'WhatsApp Chat'}</span>
            </a>
          </div>

        </div>

      </div>

    </div>
  );
};
