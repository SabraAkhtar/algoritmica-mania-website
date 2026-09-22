import React, { useState } from 'react';
import { Language, ServiceItem } from '../../types';
import { 
  Network, 
  Server, 
  Wifi, 
  ShieldCheck, 
  Activity, 
  Layers, 
  ArrowRight, 
  CheckCircle2, 
  MessageSquare, 
  FileText, 
  Cpu, 
  Radio, 
  Zap,
  Globe,
  Sliders,
  Check,
  Building,
  HardDrive
} from 'lucide-react';
import { companyData } from '../../data/company';

interface NetworkingShowcaseProps {
  service: ServiceItem;
  lang: Language;
  onRequestQuote: () => void;
}

export const NetworkingShowcase: React.FC<NetworkingShowcaseProps> = ({
  service,
  lang,
  onRequestQuote
}) => {
  const isPt = lang === 'pt';
  const [selectedVlan, setSelectedVlan] = useState<number>(10);
  const [speedTestActive, setSpeedTestActive] = useState<boolean>(false);
  const [testProgress, setTestProgress] = useState<number>(100);

  const whatsappInquiryUrl = `https://wa.me/${companyData.whatsappNumber}?text=${encodeURIComponent(
    isPt 
      ? `Olá Algoritmica Mania, gostaria de agendar um Site Survey e consultoria para infraestrutura de Redes e Bastidores.`
      : `Hello Algoritmica Mania, I would like to schedule a Network Site Survey & Rack infrastructure consultation.`
  )}`;

  const vlanTiers = [
    {
      id: 10,
      name: isPt ? 'VLAN 10: Gestão & Servidores' : 'VLAN 10: Server & Core Ops',
      subnet: '10.10.10.0/24',
      qos: 'Priority 1 (Latency < 1ms)',
      isolation: isPt ? 'Acesso Restrito c/ 2FA & Firewall ACL' : 'Restricted Access w/ 2FA & ACL',
      devices: isPt ? 'Dell PowerEdge, TrueNAS Storage, Hyper-V Hosts' : 'Dell PowerEdge, TrueNAS Storage, Hyper-V Hosts',
      status: 'Protected',
      bandwidth: '10 Gbps SFP+ Fiber Backbone'
    },
    {
      id: 20,
      name: isPt ? 'VLAN 20: Postos Corporativos' : 'VLAN 20: Corporate Workstations',
      subnet: '10.10.20.0/24',
      qos: 'Priority 2 (High Speed)',
      isolation: isPt ? 'Isolamento de Broadcast & Filtro DNS' : 'Broadcast Isolation & DNS Security',
      devices: isPt ? 'Lenovo ThinkPads, Desktops de Engenharia, Docks' : 'Lenovo ThinkPads, Engineering Workstations, Docks',
      status: 'Active',
      bandwidth: '1 Gbps Full-Duplex PoE+'
    },
    {
      id: 30,
      name: isPt ? 'VLAN 30: Wi-Fi Convidados & IoT' : 'VLAN 30: Guest Wi-Fi & IoT',
      subnet: '10.10.30.0/24',
      qos: 'Priority 3 (Bandwidth Capped)',
      isolation: isPt ? 'Zero Acesso à Rede Interna (Total Sandbox)' : 'Zero Internal Network Access (Sandboxed)',
      devices: isPt ? 'Smartphones Pessoais, Câmaras IP CCTV, Sensores' : 'Guest Smartphones, CCTV IP Cameras, Smart Sensors',
      status: 'Sandboxed',
      bandwidth: '100 Mbps Shaped with Client Isolation'
    }
  ];

  const currentVlan = vlanTiers.find(v => v.id === selectedVlan) || vlanTiers[0];

  const handleSimulateFailover = () => {
    setSpeedTestActive(true);
    setTestProgress(0);
    const interval = setInterval(() => {
      setTestProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setSpeedTestActive(false);
          return 100;
        }
        return prev + 20;
      });
    }, 150);
  };

  return (
    <div className="w-full relative pb-12">
      
      {/* 🌟 HERO INTERACTIVE NETWORK TOPOLOGY & RACK BLUEPRINT */}
      <div className="relative rounded-[36px] sm:rounded-[48px] bg-gradient-to-b from-[#F0FDFA] via-[#F8FAFC] to-[#F0FDFA] border border-teal-100/90 p-6 sm:p-10 lg:p-12 overflow-hidden shadow-xl shadow-teal-950/5 mb-10">
        
        {/* Soft Ambient Radiances */}
        <div className="absolute -top-24 right-1/4 w-[450px] h-[350px] bg-[#99F6E4]/40 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 left-10 w-[380px] h-[320px] bg-[#5EEAD4]/25 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* 👈 LEFT COLUMN: OVERVIEW & HARDWARE PROTOCOLS */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            {/* Live Infrastructure Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 border border-[#CCFBF1] shadow-2xs w-fit mb-4">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[11px] font-mono font-bold tracking-wider text-[#0D7E73] uppercase">
                {isPt ? 'Laboratório de Redes & Cablagem Estruturada' : 'L2/L3 Switching & Structured Cabling Lab'}
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#042F2C] tracking-tight leading-[1.15] mb-4">
              {isPt ? (
                <>Redes de Alto Débito <br /><span className="text-[#0D7E73]">Zero Latência e VLANs Isoladas</span></>
              ) : (
                <>High-Throughput Networks <br /><span className="text-[#0D7E73]">Zero Latency & 802.1Q Isolation</span></>
              )}
            </h1>

            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-6">
              {isPt 
                ? 'Engenharia completa para bastidores de telecomunicações, switching gerível L2/L3 com uplinks óticos 10Gbps SFP+, Wi-Fi 6 de alta densidade e segmentação estrita de tráfego com failover redundante.'
                : 'Full-cycle enterprise network engineering: managed L2/L3 rack switching, 10Gbps SFP+ fiber backbones, high-density Wi-Fi 6 heatmaps, and automated multi-WAN dual failover.'}
            </p>

            {/* Micro-metrics Pills */}
            <div className="grid grid-cols-3 gap-2.5 mb-6">
              <div className="p-3 bg-white rounded-2xl border border-[#CCFBF1] shadow-2xs text-center">
                <span className="block text-base sm:text-lg font-black text-[#042F2C]">10 Gbps</span>
                <span className="text-[10px] text-[#64748B] font-semibold">{isPt ? 'Backbone Ótico' : 'Fiber Uplink'}</span>
              </div>
              <div className="p-3 bg-white rounded-2xl border border-[#CCFBF1] shadow-2xs text-center">
                <span className="block text-base sm:text-lg font-black text-[#0D7E73]">0.4 ms</span>
                <span className="text-[10px] text-[#64748B] font-semibold">{isPt ? 'Latência Local' : 'Local Latency'}</span>
              </div>
              <div className="p-3 bg-white rounded-2xl border border-[#CCFBF1] shadow-2xs text-center">
                <span className="block text-base sm:text-lg font-black text-emerald-600">99.99%</span>
                <span className="text-[10px] text-[#64748B] font-semibold">{isPt ? 'Dual WAN SLA' : 'Uptime SLA'}</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={onRequestQuote}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl text-xs sm:text-sm font-bold text-white bg-[#0D7E73] hover:bg-[#0B6A61] transition-all shadow-md hover:shadow-lg active:scale-95 cursor-pointer"
              >
                <FileText className="w-4 h-4" />
                <span>{isPt ? 'Solicitar Projeto de Rede & Bastidor' : 'Request Network & Rack Proposal'}</span>
              </button>

              <a
                href={whatsappInquiryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-2xl text-xs sm:text-sm font-bold text-[#0D7E73] bg-white hover:bg-[#F0FDFA] border border-[#CCFBF1] transition-colors cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>{isPt ? 'Falar com Engenheiro de Redes' : 'Chat with Network Lead'}</span>
              </a>
            </div>

          </div>

          {/* 👉 RIGHT COLUMN: INTERACTIVE RACK & VLAN CONTROLLER CONSOLE */}
          <div className="lg:col-span-6">
            <div className="bg-[#042F2C] text-white rounded-3xl p-5 sm:p-7 border border-[#0D7E73]/40 shadow-2xl relative overflow-hidden">
              
              {/* Top Console Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-teal-900/60 mb-5">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-teal-900/60 border border-teal-500/30 flex items-center justify-center text-teal-300">
                    <Server className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs font-mono font-bold tracking-wider text-teal-200">
                      RACK-CORE-TROFA-01
                    </h3>
                    <p className="text-[10px] text-teal-400/80">Cisco / UniFi Enterprise 48-PoE+ Stack</p>
                  </div>
                </div>

                <button
                  onClick={handleSimulateFailover}
                  disabled={speedTestActive}
                  className="px-3 py-1.5 rounded-lg bg-teal-800/80 hover:bg-teal-700 text-[10px] font-mono font-bold text-teal-100 border border-teal-600/40 transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <Activity className={`w-3 h-3 ${speedTestActive ? 'animate-spin' : ''}`} />
                  <span>{speedTestActive ? (isPt ? 'A Testar Failover...' : 'Testing...') : (isPt ? 'Testar Failover Dual-WAN' : 'Simulate Dual-WAN Failover')}</span>
                </button>
              </div>

              {/* Interactive VLAN Selector Tabs */}
              <div className="mb-4">
                <span className="text-[10px] font-mono text-teal-400 uppercase tracking-wider block mb-2">
                  {isPt ? 'Segmentação Lógica (Clique para inspecionar isolamento):' : 'Logical Segmentation (Click to inspect isolation):'}
                </span>
                <div className="grid grid-cols-3 gap-2">
                  {vlanTiers.map((v) => (
                    <button
                      key={v.id}
                      onClick={() => setSelectedVlan(v.id)}
                      className={`p-2 rounded-xl text-left transition-all border cursor-pointer ${
                        selectedVlan === v.id
                          ? 'bg-teal-800 border-teal-400 text-white shadow-xs'
                          : 'bg-teal-950/60 border-teal-900 text-teal-300/70 hover:bg-teal-900/40'
                      }`}
                    >
                      <span className="text-[10px] font-mono font-bold block truncate">VLAN {v.id}</span>
                      <span className="text-[9px] text-teal-200/60 block truncate">{v.status}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Selected VLAN Telemetry Card */}
              <div className="bg-[#021F1D] rounded-2xl p-4 border border-teal-800/60 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-teal-100">{currentVlan.name}</span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-teal-900 text-teal-300 border border-teal-700">
                    {currentVlan.subnet}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-[11px]">
                  <div className="p-2 rounded-lg bg-teal-950/80 border border-teal-900/40">
                    <span className="text-[9px] text-teal-400/80 block">{isPt ? 'QoS & Prioridade:' : 'QoS Priority:'}</span>
                    <span className="font-semibold text-teal-200">{currentVlan.qos}</span>
                  </div>
                  <div className="p-2 rounded-lg bg-teal-950/80 border border-teal-900/40">
                    <span className="text-[9px] text-teal-400/80 block">{isPt ? 'Débito / Largura:' : 'Bandwidth:'}</span>
                    <span className="font-semibold text-teal-200 truncate block">{currentVlan.bandwidth}</span>
                  </div>
                </div>

                <div className="p-2.5 rounded-lg bg-teal-950/90 border border-teal-800/40 text-[10px] text-teal-300 space-y-1">
                  <div className="flex items-center gap-1.5 text-emerald-400 font-bold">
                    <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                    <span>{currentVlan.isolation}</span>
                  </div>
                  <p className="text-teal-200/70 text-[10px] pl-5">{currentVlan.devices}</p>
                </div>
              </div>

              {/* Simulated Dual-WAN Health Bar */}
              <div className="mt-4 pt-3 border-t border-teal-900/60 flex items-center justify-between text-[11px] font-mono">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  <span className="text-teal-300">WAN 1 (Fiber 1000/1000): Primary</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-teal-400"></span>
                  <span className="text-teal-300">WAN 2 (5G Backup): Standby</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* 🌟 SECTION 2: 4-STAGE NETWORK LAB IMPLEMENTATION METHODOLOGY */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-10">
        {service.processSteps.map((step, idx) => (
          <div 
            key={idx}
            className="bg-white rounded-3xl p-6 border border-slate-200 shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-extrabold text-[#0D7E73] bg-[#F0FDFA] px-2.5 py-1 rounded-lg border border-[#CCFBF1]">
                  FASE 0{idx + 1}
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              </div>
              <h3 className="text-sm font-bold text-[#042F2C] mb-2 leading-snug">
                {step.title}
              </h3>
              <p className="text-xs text-[#64748B] leading-relaxed">
                {step.description}
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-1.5 text-[10px] font-bold text-[#0D7E73]">
              <Check className="w-3.5 h-3.5" />
              <span>{isPt ? 'Protocolo Validado em Laboratório' : 'Lab Validated Protocol'}</span>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
