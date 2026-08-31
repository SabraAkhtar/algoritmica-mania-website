import React from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { ActionPrimaryButton } from '../components/ui/AnimatedButtons';
import { 
  ShieldCheck, 
  Cpu, 
  Coins, 
  Network, 
  Headphones, 
  Briefcase, 
  CheckCircle2, 
  ArrowRight, 
  Shield, 
  Activity, 
  Sparkles, 
  Server, 
  Zap, 
  Award, 
  Video, 
  ExternalLink, 
  Users, 
  Search 
} from 'lucide-react';
import { motion } from 'motion/react';
import itEngineerExpertImg from '../assets/images/it_engineer_expert_1787650412908.jpg';
import itConsultantCallImg from '../assets/images/it_tech_consultant_call_1787650432492.jpg';

interface WhyChooseUsViewProps {
  lang: Language;
  onRequestQuote: () => void;
  onNavigateApproach: () => void;
}

export const WhyChooseUsView: React.FC<WhyChooseUsViewProps> = ({
  lang,
  onRequestQuote,
  onNavigateApproach
}) => {
  const isPt = lang === 'pt';
  const t = translations[lang];

  // 12 IT Specialist Team Members for the Floating Cluster
  const teamNetwork = [
    { name: 'Rui Silva', role: 'Chief Hardware Engineer', color: 'bg-emerald-600', initial: 'RS' },
    { name: 'Dr. Tiago Santos', role: 'Enterprise Systems Architect', color: 'bg-teal-600', initial: 'TS' },
    { name: 'Ana Pereira', role: 'Network Security Lead', color: 'bg-cyan-600', initial: 'AP' },
    { name: 'Pedro Costa', role: 'Server Staging Lead', color: 'bg-emerald-700', initial: 'PC' },
    { name: 'Marta Ribeiro', role: 'B2B Procurement Director', color: 'bg-teal-700', initial: 'MR' },
    { name: 'Carlos Neves', role: 'SAN Storage Specialist', color: 'bg-cyan-700', initial: 'CN' },
    { name: 'Sofia Martins', role: 'SLA Support Manager', color: 'bg-emerald-500', initial: 'SM' },
    { name: 'Hugo Fernandes', role: 'VLAN & Cisco Certified', color: 'bg-teal-500', initial: 'HF' },
    { name: 'Inês Carvalho', role: 'Quality Assurance Lead', color: 'bg-cyan-500', initial: 'IC' },
    { name: 'Miguel Rocha', role: 'Burn-in Lab Technician', color: 'bg-emerald-800', initial: 'MR' },
    { name: 'Beatriz Lima', role: 'Logistics Coordinator', color: 'bg-teal-800', initial: 'BL' },
    { name: 'Gonçalo Dias', role: 'IT Asset Recovery Lead', color: 'bg-cyan-800', initial: 'GD' }
  ];

  return (
    <div className="w-full bg-[#FAFCFC] min-h-screen text-[#042F2C] relative overflow-hidden">
      
      {/* ========================================================
          TOP HERO SECTION (DASHBOARD WIDGET COMPOSITION - REFERENCE STYLE)
         ======================================================== */}
      <section className="py-14 sm:py-20 lg:py-24 bg-white border-b border-slate-200/80 relative overflow-hidden">
        
        {/* Decorative Geometric Shapes & Glowing Aura (Reference style dark quarter circle + teal curves) */}
        <div className="absolute -top-16 -right-16 w-64 h-64 bg-[#042F2C] rounded-full pointer-events-none hidden lg:block opacity-95" />
        <div className="absolute -top-10 -right-10 w-44 h-44 bg-[#0D7E73] rounded-full pointer-events-none hidden lg:block" />
        <div className="absolute top-28 left-10 w-80 h-80 bg-[#F0FDFA]/90 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Main Grid: Left Value Proposition & Right UI Widget Sandbox */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* LEFT COLUMN: Main Heading, Subtext, and Key Reasons */}
            <motion.div 
              initial={{ opacity: 0, x: -25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-6 flex flex-col items-start"
            >
              {/* Eyebrow Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100/90 border border-slate-200/80 text-xs sm:text-sm font-bold text-[#042F2C] mb-6 shadow-2xs">
                <div className="flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#042F2C]" />
                </div>
                <span className="tracking-wide">
                  {isPt ? 'Porque Escolher a Algorítmica Mania' : 'Why Choose Algorítmica Mania'}
                </span>
              </div>

              {/* Editorial Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-black tracking-tight text-[#042F2C] leading-[1.12] mb-6">
                {isPt ? (
                  <>
                    Tecnologia de Confiança, <span className="text-[#0D7E73]">Suporte Direto</span> e Rigor
                  </>
                ) : (
                  <>
                    Trusted Technology, <span className="text-[#0D7E73]">Direct Support</span> &amp; Quality
                  </>
                )}
              </h1>

              {/* Body Subtitle */}
              <p className="text-sm sm:text-base text-[#64748B] leading-relaxed max-w-xl mb-8 font-medium">
                {isPt
                  ? 'Combinamos bancada técnica própria na Trofa, stock real para entrega imediata em Portugal e garantia de substituição até 36 meses para assegurar a continuidade do seu negócio sem atrasos.'
                  : 'We combine dedicated staging labs in Trofa, direct ready-to-ship business hardware across Portugal, and up to 36-month replacement warranty so your business never stops.'}
              </p>

              {/* Fast Value Bullets */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full mb-8">
                <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-[#F0FDFA] border border-[#CCFBF1]">
                  <CheckCircle2 className="w-4 h-4 text-[#0D7E73] shrink-0" />
                  <span className="text-xs font-bold text-[#042F2C]">
                    {isPt ? 'Laboratório Próprio na Trofa' : 'Trofa Hardware Staging Lab'}
                  </span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-[#F0FDFA] border border-[#CCFBF1]">
                  <CheckCircle2 className="w-4 h-4 text-[#0D7E73] shrink-0" />
                  <span className="text-xs font-bold text-[#042F2C]">
                    {isPt ? 'Garantia Direta até 36 Meses' : 'Up to 36 Months Direct Warranty'}
                  </span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-[#F0FDFA] border border-[#CCFBF1]">
                  <CheckCircle2 className="w-4 h-4 text-[#0D7E73] shrink-0" />
                  <span className="text-xs font-bold text-[#042F2C]">
                    {isPt ? '72h de Testes de Stress' : '72h Continuous Stress Burn-in'}
                  </span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-[#F0FDFA] border border-[#CCFBF1]">
                  <CheckCircle2 className="w-4 h-4 text-[#0D7E73] shrink-0" />
                  <span className="text-xs font-bold text-[#042F2C]">
                    {isPt ? 'Sem Taxas Ocultas' : 'Zero Hidden Fees or Lock-in'}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                <ActionPrimaryButton
                  type="button"
                  onClick={onRequestQuote}
                  size="md"
                >
                  <span>{isPt ? 'Pedir Cotação Imediata' : 'Request a Fast Quote'}</span>
                </ActionPrimaryButton>

                <button
                  type="button"
                  onClick={onNavigateApproach}
                  className="text-xs sm:text-sm font-bold text-[#042F2C] hover:text-[#0D7E73] underline underline-offset-4 decoration-2 decoration-slate-300 hover:decoration-[#0D7E73] transition-all cursor-pointer"
                >
                  {isPt ? 'Ver o Nosso Processo' : 'Explore Our 4-Step Approach'}
                </button>
              </div>

            </motion.div>

            {/* RIGHT COLUMN: Interactive High-Tech Diagnostic Widget Cluster (Exact Reference Composition) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6 relative flex flex-col items-center"
            >
              
              {/* Playful Curving Blue/Teal Vector Arrows (Reference Match) */}
              <div className="absolute top-24 right-12 z-20 pointer-events-none hidden sm:block">
                <svg className="w-16 h-16 text-[#0D7E73] opacity-80" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round">
                  <path d="M 20 80 Q 50 10 80 40 T 70 80" />
                  <polyline points="60,75 70,80 75,70" />
                </svg>
              </div>

              <div className="absolute bottom-28 left-4 z-20 pointer-events-none hidden sm:block">
                <svg className="w-20 h-14 text-[#14B8A6] opacity-80" viewBox="0 0 100 70" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round">
                  <path d="M 10 40 Q 40 10 60 50 T 90 20" />
                  <polyline points="80,18 90,20 88,32" />
                </svg>
              </div>

              {/* TOP ROW: Engineer Appointment Card (Left) + Video Consultation Floating Card (Right) */}
              <div className="w-full flex flex-col sm:flex-row gap-5 items-start justify-center relative mb-5">
                
                {/* 1. Verified Engineer Lead Card (Top Left - Floating with Blue Accent Offset) */}
                <div className="relative w-full sm:w-[280px] shrink-0">
                  {/* Offset Blue/Teal Drop Shadow Panel */}
                  <div className="absolute -inset-1.5 sm:-inset-2 bg-gradient-to-br from-[#0D7E73] to-[#042F2C] rounded-3xl transform translate-x-2 translate-y-2 opacity-90 -z-10" />
                  
                  <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xl relative z-10">
                    <div className="flex items-center gap-3.5 mb-3.5">
                      <img 
                        src={itEngineerExpertImg} 
                        alt="Eng. Rui Silva" 
                        className="w-14 h-14 rounded-2xl object-cover border-2 border-[#CCFBF1] shadow-2xs shrink-0"
                        referrerPolicy="no-referrer"
                      />
                      <div>
                        <h4 className="text-sm font-black text-[#042F2C] leading-tight">
                          Eng. Rui Silva
                        </h4>
                        <div className="flex items-center gap-1.5 text-xs text-[#0D7E73] font-bold mt-0.5">
                          <Cpu className="w-3.5 h-3.5" />
                          <span>{isPt ? 'Bancada & Servidores' : 'Hardware Lead'}</span>
                        </div>
                        <span className="inline-block text-[10px] font-bold text-[#64748B] mt-0.5">
                          {isPt ? 'Disponível: Trofa Lab' : 'Staging Lead: Trofa Lab'}
                        </span>
                      </div>
                    </div>

                    {/* Diagnostic Audit Focus */}
                    <div className="bg-[#F8FAFC] rounded-xl p-3 border border-slate-100 mb-3.5">
                      <span className="text-[10px] font-bold text-[#0D7E73] uppercase tracking-wider block mb-1">
                        {isPt ? 'Foco Técnico Inicial:' : 'Primary Scope:'}
                      </span>
                      <p className="text-[11px] text-[#475569] leading-snug font-medium">
                        {isPt 
                          ? 'Auditoria de estrangulamento de IOPS em storage e sizing de memória RAM ECC.'
                          : 'Storage IOPS bottleneck audit and multi-node ECC RAM sizing.'}
                      </p>
                    </div>

                    {/* Direct Consultation Link Button (Matching Google Meet style from reference) */}
                    <button
                      type="button"
                      onClick={onRequestQuote}
                      className="w-full flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl border border-[#CCFBF1] bg-[#F0FDFA] hover:bg-[#CCFBF1] text-[#0D7E73] text-xs font-bold transition-all shadow-2xs cursor-pointer group"
                    >
                      <Video className="w-4 h-4 text-[#0D7E73]" />
                      <span>{isPt ? 'Agendar Diagnóstico Técnico' : 'Book Technical Consult'}</span>
                    </button>
                  </div>
                </div>

                {/* 2. Direct Support Video Feed Card (Top Right) */}
                <div className="w-full sm:w-56 rounded-2xl overflow-hidden shadow-lg border-2 border-white bg-white sm:mt-12 group hover:scale-105 transition-transform duration-300">
                  <div className="relative">
                    <img 
                      src={itConsultantCallImg} 
                      alt="IT Support Video Call" 
                      className="w-full h-36 object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute bottom-2 left-2 px-2 py-1 rounded-md bg-black/60 backdrop-blur-xs text-[10px] font-bold text-white flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#10B981] animate-ping" />
                      <span>{isPt ? 'Suporte Direto Ativo' : 'Live Support Active'}</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* BOTTOM ROW: System Health Metrics (Left) + 12 IT Specialist Node Cluster (Right) */}
              <div className="w-full grid grid-cols-1 sm:grid-cols-12 gap-4">
                
                {/* 3. Real-Time Hardware Health Metrics (4-Box Grid matching reference Daily Health Updates) */}
                <div className="sm:col-span-5 bg-white rounded-2xl p-4 border border-slate-200/90 shadow-md flex flex-col justify-between">
                  <div className="grid grid-cols-2 gap-2 mb-3">
                    
                    <div className="p-2.5 rounded-xl bg-[#F0FDFA] border border-[#CCFBF1]">
                      <div className="flex items-center gap-1.5 text-[10px] font-bold text-[#64748B] mb-1">
                        <Activity className="w-3 h-3 text-[#0D7E73]" />
                        <span>SLA Uptime</span>
                      </div>
                      <span className="text-sm font-black text-[#042F2C]">99.98%</span>
                    </div>

                    <div className="p-2.5 rounded-xl bg-[#F0FDFA] border border-[#CCFBF1]">
                      <div className="flex items-center gap-1.5 text-[10px] font-bold text-[#64748B] mb-1">
                        <Server className="w-3 h-3 text-[#0D7E73]" />
                        <span>{isPt ? 'Garantia' : 'Warranty'}</span>
                      </div>
                      <span className="text-sm font-black text-[#042F2C]">36 Meses</span>
                    </div>

                    <div className="p-2.5 rounded-xl bg-[#F0FDFA] border border-[#CCFBF1]">
                      <div className="flex items-center gap-1.5 text-[10px] font-bold text-[#64748B] mb-1">
                        <Zap className="w-3 h-3 text-[#0D7E73]" />
                        <span>Burn-in</span>
                      </div>
                      <span className="text-sm font-black text-[#042F2C]">72h Test</span>
                    </div>

                    <div className="p-2.5 rounded-xl bg-[#F0FDFA] border border-[#CCFBF1]">
                      <div className="flex items-center gap-1.5 text-[10px] font-bold text-[#64748B] mb-1">
                        <ShieldCheck className="w-3 h-3 text-[#0D7E73]" />
                        <span>Grade A+</span>
                      </div>
                      <span className="text-sm font-black text-[#042F2C]">100% OK</span>
                    </div>

                  </div>

                  <div className="text-center pt-2 border-t border-slate-100">
                    <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold text-[#0D7E73] bg-[#F0FDFA] border border-[#CCFBF1]">
                      {isPt ? 'Métricas de Engenharia em Tempo Real' : 'Real-Time Lab Quality Metrics'}
                    </span>
                  </div>
                </div>

                {/* 4. Specialized IT Team Node Map (Matching Reference Right Side Network Bubble Matrix) */}
                <div className="sm:col-span-7 bg-white rounded-2xl p-4 border border-slate-200/90 shadow-md relative overflow-hidden flex flex-col justify-between">
                  
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-[#0D7E73]" />
                      <span className="text-xs font-bold text-[#042F2C]">
                        {isPt ? 'Rede de Especialistas IT' : 'Specialized IT Engineers Network'}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono font-bold text-[#0D7E73] bg-[#F0FDFA] px-2 py-0.5 rounded-md border border-[#CCFBF1]">
                      12 PROS
                    </span>
                  </div>

                  {/* Network Avatar Bubble Matrix */}
                  <div className="grid grid-cols-6 gap-2 my-2 py-2">
                    {teamNetwork.map((member, mIdx) => (
                      <div 
                        key={mIdx} 
                        title={`${member.name} - ${member.role}`}
                        className="flex flex-col items-center group relative cursor-pointer"
                      >
                        <div className={`w-8 h-8 rounded-full ${member.color} text-white text-[10px] font-black flex items-center justify-center shadow-xs border-2 border-white group-hover:scale-125 transition-transform`}>
                          {mIdx === 6 ? (
                            <Search className="w-3.5 h-3.5 text-white" />
                          ) : (
                            member.initial
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Bottom Pill Badge */}
                  <div className="text-center pt-2 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] text-[#64748B] font-medium">
                      {isPt ? 'Especialistas certificados em bancada' : 'Certified staging specialists in Trofa'}
                    </span>
                    <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold text-[#042F2C] bg-slate-100 border border-slate-200">
                      {isPt ? 'Técnicos Trofa' : 'Trofa Engineers'}
                    </span>
                  </div>

                </div>

              </div>

            </motion.div>

          </div>
        </div>
      </section>

      {/* ========================================================
          BOTTOM 4 PILLARS (CLEAN MINIMAL DESIGN FOR INSTANT CONVEYANCE)
         ======================================================== */}
      <section className="py-16 sm:py-20 bg-[#FAFCFC] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="flex items-center justify-center gap-4 mb-12 sm:mb-14">
            <div className="h-[1.5px] w-12 sm:w-20 bg-[#99F6E4]" />
            <span className="text-xs sm:text-sm font-bold tracking-[0.25em] text-[#0D7E73] uppercase">
              {isPt ? '— OS NOSSOS COMPROMISSOS FUNDAMENTAIS —' : '— OUR CORE COMMITMENTS —'}
            </span>
            <div className="h-[1.5px] w-12 sm:w-20 bg-[#99F6E4]" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
            
            {/* Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0 }}
              onClick={onRequestQuote}
              className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/80 shadow-[0_8px_30px_-8px_rgba(4,47,44,0.06)] hover:shadow-[0_20px_45px_-10px_rgba(4,47,44,0.12)] transition-all duration-300 flex flex-col items-center text-center group cursor-pointer border-b-[4px] border-b-[#0D7E73] hover:-translate-y-1.5"
            >
              <div className="w-16 h-16 rounded-full bg-[#F0FDFA] border border-[#CCFBF1] text-[#0D7E73] group-hover:bg-[#0D7E73] group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-2xs mb-5 group-hover:scale-105">
                <Cpu className="w-7 h-7 stroke-[1.8]" />
              </div>
              <h3 className="text-lg font-black text-[#042F2C] group-hover:text-[#0D7E73] transition-colors mb-2.5">
                {isPt ? 'Hardware Rigoroso' : 'Certified Hardware'}
              </h3>
              <div className="w-7 h-[2px] bg-[#0D7E73] rounded-full group-hover:w-12 transition-all duration-300 mb-3.5" />
              <p className="text-xs sm:text-[13px] text-[#64748B] leading-relaxed mb-7 font-medium flex-1">
                {isPt ? 'Equipamentos empresariais Grade A+ com 72h de testes em bancada.' : 'Grade A+ enterprise equipment with 72h continuous lab stress testing.'}
              </p>
              <div className="w-10 h-10 rounded-full bg-[#0D7E73] text-white flex items-center justify-center group-hover:bg-[#0B6A61] group-hover:scale-110 transition-all duration-300 shadow-sm mt-auto">
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform stroke-[2.2]" />
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.08 }}
              onClick={onRequestQuote}
              className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/80 shadow-[0_8px_30px_-8px_rgba(4,47,44,0.06)] hover:shadow-[0_20px_45px_-10px_rgba(4,47,44,0.12)] transition-all duration-300 flex flex-col items-center text-center group cursor-pointer border-b-[4px] border-b-[#0D7E73] hover:-translate-y-1.5"
            >
              <div className="w-16 h-16 rounded-full bg-[#F0FDFA] border border-[#CCFBF1] text-[#0D7E73] group-hover:bg-[#0D7E73] group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-2xs mb-5 group-hover:scale-105">
                <ShieldCheck className="w-7 h-7 stroke-[1.8]" />
              </div>
              <h3 className="text-lg font-black text-[#042F2C] group-hover:text-[#0D7E73] transition-colors mb-2.5">
                {isPt ? 'Garantia Direta' : 'Direct Warranty'}
              </h3>
              <div className="w-7 h-[2px] bg-[#0D7E73] rounded-full group-hover:w-12 transition-all duration-300 mb-3.5" />
              <p className="text-xs sm:text-[13px] text-[#64748B] leading-relaxed mb-7 font-medium flex-1">
                {isPt ? 'Até 36 meses de cobertura com substituição rápida de componentes.' : 'Up to 36 months direct hardware replacement coverage with zero delays.'}
              </p>
              <div className="w-10 h-10 rounded-full bg-[#0D7E73] text-white flex items-center justify-center group-hover:bg-[#0B6A61] group-hover:scale-110 transition-all duration-300 shadow-sm mt-auto">
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform stroke-[2.2]" />
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.16 }}
              onClick={onRequestQuote}
              className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/80 shadow-[0_8px_30px_-8px_rgba(4,47,44,0.06)] hover:shadow-[0_20px_45px_-10px_rgba(4,47,44,0.12)] transition-all duration-300 flex flex-col items-center text-center group cursor-pointer border-b-[4px] border-b-[#0D7E73] hover:-translate-y-1.5"
            >
              <div className="w-16 h-16 rounded-full bg-[#F0FDFA] border border-[#CCFBF1] text-[#0D7E73] group-hover:bg-[#0D7E73] group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-2xs mb-5 group-hover:scale-105">
                <Coins className="w-7 h-7 stroke-[1.8]" />
              </div>
              <h3 className="text-lg font-black text-[#042F2C] group-hover:text-[#0D7E73] transition-colors mb-2.5">
                {isPt ? 'Poupança Transparente' : 'Clear Cost Savings'}
              </h3>
              <div className="w-7 h-[2px] bg-[#0D7E73] rounded-full group-hover:w-12 transition-all duration-300 mb-3.5" />
              <p className="text-xs sm:text-[13px] text-[#64748B] leading-relaxed mb-7 font-medium flex-1">
                {isPt ? 'Redução de até 40% em custos de TI com dimensionamento sem desperdício.' : 'Save up to 40% on IT budget through precise, unbloated hardware sizing.'}
              </p>
              <div className="w-10 h-10 rounded-full bg-[#0D7E73] text-white flex items-center justify-center group-hover:bg-[#0B6A61] group-hover:scale-110 transition-all duration-300 shadow-sm mt-auto">
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform stroke-[2.2]" />
              </div>
            </motion.div>

            {/* Card 4 */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.24 }}
              onClick={onRequestQuote}
              className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/80 shadow-[0_8px_30px_-8px_rgba(4,47,44,0.06)] hover:shadow-[0_20px_45px_-10px_rgba(4,47,44,0.12)] transition-all duration-300 flex flex-col items-center text-center group cursor-pointer border-b-[4px] border-b-[#0D7E73] hover:-translate-y-1.5"
            >
              <div className="w-16 h-16 rounded-full bg-[#F0FDFA] border border-[#CCFBF1] text-[#0D7E73] group-hover:bg-[#0D7E73] group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-2xs mb-5 group-hover:scale-105">
                <Headphones className="w-7 h-7 stroke-[1.8]" />
              </div>
              <h3 className="text-lg font-black text-[#042F2C] group-hover:text-[#0D7E73] transition-colors mb-2.5">
                {isPt ? 'Apoio Local na Trofa' : 'Dedicated Local Support'}
              </h3>
              <div className="w-7 h-[2px] bg-[#0D7E73] rounded-full group-hover:w-12 transition-all duration-300 mb-3.5" />
              <p className="text-xs sm:text-[13px] text-[#64748B] leading-relaxed mb-7 font-medium flex-1">
                {isPt ? 'Comunicação direta com técnicos de hardware em Portugal, sem robôs.' : 'Direct communication with dedicated hardware technicians in Portugal.'}
              </p>
              <div className="w-10 h-10 rounded-full bg-[#0D7E73] text-white flex items-center justify-center group-hover:bg-[#0B6A61] group-hover:scale-110 transition-all duration-300 shadow-sm mt-auto">
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform stroke-[2.2]" />
              </div>
            </motion.div>

          </div>

        </div>
      </section>

    </div>
  );
};

export default WhyChooseUsView;
