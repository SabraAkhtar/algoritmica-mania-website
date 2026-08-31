import React from 'react';
import { Language, Product } from '../../types';
import { 
  ShieldCheck, 
  Sparkles,
  ArrowUpRight,
  CheckCircle2,
  Activity,
  Layers,
  Laptop,
  Server,
  Wrench,
  Lock,
  Network,
  Cpu,
  Database
} from 'lucide-react';
import { motion } from 'motion/react';

interface TechBentoDashboardProps {
  lang: Language;
  onNavigateProducts: (cat?: any) => void;
  onNavigateProductDetail?: (productId: string) => void;
  onRequestQuote: (product?: Product) => void;
}

export const TechBentoDashboard: React.FC<TechBentoDashboardProps> = ({
  lang,
  onNavigateProducts,
  onNavigateProductDetail,
  onRequestQuote
}) => {
  const isPt = lang === 'pt';

  return (
    <div className="relative w-full max-w-xl mx-auto select-none">
      
      {/* Floating Mini Decorative Accents */}
      <div className="absolute -top-5 -left-5 flex flex-col gap-1 opacity-70 pointer-events-none hidden sm:flex">
        <div className="flex gap-1">
          <div className="w-2.5 h-2.5 rounded-xs bg-[#0D7E73]" />
          <div className="w-2.5 h-2.5 rounded-xs bg-[#CCFBF1]" />
        </div>
        <div className="flex gap-1">
          <div className="w-2.5 h-2.5 rounded-xs bg-[#14B8A6]" />
          <div className="w-2.5 h-2.5 rounded-xs bg-[#042F2C]" />
        </div>
      </div>

      {/* Top Right Dot Grid */}
      <div className="absolute -top-3 -right-3 grid grid-cols-3 gap-2 opacity-40 pointer-events-none hidden sm:grid">
        {[...Array(9)].map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#0D7E73]" />
        ))}
      </div>

      {/* Main Enterprise IT Visual Dashboard Card Structure */}
      <div className="relative pt-2 pb-2">
        
        {/* 🌟 1. TOP MAIN CARD: Enterprise Server & Datacenter Infrastructure Visual */}
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          onClick={() => onNavigateProducts('servers-storage')}
          className="relative bg-white rounded-3xl p-4 sm:p-5 text-[#042F2C] shadow-[0_12px_36px_-6px_rgba(4,47,44,0.08)] border border-[#CCFBF1] overflow-hidden mb-4 hover:border-[#0D7E73]/40 hover:shadow-[0_16px_40px_-6px_rgba(13,126,115,0.12)] transition-all cursor-pointer group"
        >
          {/* Ambient light gradient glow */}
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#CCFBF1]/40 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
            
            {/* Left: Enterprise Server & Hardware Infrastructure Image */}
            <div className="sm:col-span-7 relative h-48 sm:h-52 rounded-2xl overflow-hidden bg-[#F0FDFA] border border-[#CCFBF1] shadow-2xs">
              <img 
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80" 
                alt="Enterprise Hardware & Server Infrastructure"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#042F2C]/70 via-transparent to-transparent pointer-events-none" />
              
              {/* Badge on Image */}
              <div className="absolute top-2.5 left-2.5 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-lg text-[10px] font-bold text-[#042F2C] border border-[#CCFBF1] shadow-xs flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0D7E73] animate-pulse" />
                <span>{isPt ? 'Servidores & Redes Enterprise' : 'Enterprise Servers & Networks'}</span>
              </div>

              <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between text-white text-[11px] font-semibold">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#5EEAD4]" />
                  <span>ISO 9001 Certified</span>
                </span>
                <span className="bg-[#0D7E73]/90 px-2 py-0.5 rounded text-[10px] font-bold">Grade A+</span>
              </div>
            </div>

            {/* Right: Modern IT Infrastructure Metrics & Status */}
            <div className="sm:col-span-5 flex flex-col justify-between h-full py-1 space-y-3">
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#0D7E73]">
                  <Database className="w-3.5 h-3.5 text-[#0D7E73]" />
                  <span>{isPt ? 'Infraestrutura TI' : 'IT Infrastructure'}</span>
                </div>
                <h4 className="text-base font-extrabold text-[#042F2C] leading-snug">
                  {isPt ? 'Hardware Corporativo Certificado' : 'Certified Corporate Hardware'}
                </h4>
              </div>

              {/* Status Pills */}
              <div className="space-y-2">
                <div className="flex items-center justify-between p-2 rounded-xl bg-[#F0FDFA] border border-[#CCFBF1]">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#0D7E73]" />
                    <span className="text-xs font-semibold text-[#042F2C]">
                      {isPt ? 'Disponibilidade' : 'Uptime Guarantee'}
                    </span>
                  </div>
                  <span className="text-xs font-black text-[#0D7E73]">99.9%</span>
                </div>

                <div className="flex items-center justify-between p-2 rounded-xl bg-[#F0FDFA] border border-[#CCFBF1]">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#14B8A6]" />
                    <span className="text-xs font-semibold text-[#042F2C]">
                      {isPt ? 'Garantia B2B' : 'B2B Warranty'}
                    </span>
                  </div>
                  <span className="text-xs font-black text-[#0D7E73]">36M</span>
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#0D7E73] group-hover:translate-x-1 transition-transform">
                <span>{isPt ? 'Explorar catálogo' : 'Explore hardware'}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </div>

          </div>
        </motion.div>

        {/* 🌟 2. BOTTOM ROW: TWO COMPACT ENTERPRISE CARDS (Networking & Cybersecurity + Workstations) */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-3.5">
          
          {/* BOTTOM LEFT: Networking & Cybersecurity Card */}
          <motion.div 
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            onClick={() => onNavigateProducts('networking')}
            className="sm:col-span-6 bg-white rounded-2xl p-3.5 text-[#042F2C] border border-[#CCFBF1] shadow-xs flex flex-col justify-between hover:border-[#0D7E73]/40 hover:shadow-md transition-all cursor-pointer group"
          >
            <div className="relative h-28 rounded-xl overflow-hidden bg-[#F0FDFA] mb-2.5 border border-[#CCFBF1]/80">
              <img 
                src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=500&q=80" 
                alt="Networking & Cybersecurity"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#042F2C]/65 via-transparent to-transparent pointer-events-none" />
              <div className="absolute top-2 left-2 px-2 py-0.5 rounded-md bg-white/90 backdrop-blur-xs text-[9px] font-extrabold text-[#0D7E73] flex items-center gap-1 shadow-2xs">
                <Network className="w-3 h-3 text-[#0D7E73]" />
                <span>{isPt ? 'Redes & Segurança' : 'Network & Security'}</span>
              </div>
              <span className="absolute bottom-1.5 left-2 text-[10px] font-bold text-white">
                Switches, Routers & Firewalls
              </span>
            </div>

            <div className="flex items-center justify-between pt-1">
              <span className="text-xs font-bold text-[#042F2C]">Cisco, HP, Dell</span>
              <span className="text-[11px] font-extrabold text-[#0D7E73] flex items-center gap-0.5">
                <span>{isPt ? 'Ver' : 'View'}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </motion.div>

          {/* BOTTOM RIGHT: Enterprise Workstations & Laptops */}
          <motion.div 
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            onClick={() => onNavigateProducts('used-refurbished')}
            className="sm:col-span-6 bg-white rounded-2xl p-3.5 text-[#042F2C] border border-[#CCFBF1] shadow-xs flex flex-col justify-between hover:border-[#0D7E73]/40 hover:shadow-md transition-all cursor-pointer group"
          >
            <div className="relative h-28 rounded-xl overflow-hidden bg-[#F0FDFA] mb-2.5 border border-[#CCFBF1]/80">
              <img 
                src="https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=500&q=80" 
                alt="Business Workstations & Laptops"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#042F2C]/65 via-transparent to-transparent pointer-events-none" />
              <div className="absolute top-2 left-2 px-2 py-0.5 rounded-md bg-white/90 backdrop-blur-xs text-[9px] font-extrabold text-[#0D7E73] flex items-center gap-1 shadow-2xs">
                <Laptop className="w-3 h-3 text-[#0D7E73]" />
                <span>{isPt ? 'Workstations & PCs' : 'Workstations & PCs'}</span>
              </div>
              <span className="absolute bottom-1.5 left-2 text-[10px] font-bold text-white">
                ThinkPad, Latitude, Mac
              </span>
            </div>

            <div className="flex items-center justify-between pt-1">
              <span className="text-xs font-bold text-[#042F2C]">Lenovo, Dell, Apple</span>
              <span className="text-[11px] font-extrabold text-[#0D7E73] flex items-center gap-0.5">
                <span>{isPt ? 'Ver' : 'View'}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </motion.div>

        </div>

      </div>

    </div>
  );
};
