import React from 'react';
import { Language } from '../../types';
import {
  ShieldCheck,
  Network,
  Wrench,
  Server,
  ChevronRight,
  ArrowRight,
  Lock,
  Headphones,
  HardDrive,
  Wifi,
  MonitorCheck,
  DatabaseBackup,
  ScanSearch,
  Cpu,
  PlugZap
} from 'lucide-react';

interface MegaMenuServicesProps {
  lang: Language;
  onSelectService: (serviceSlug: string) => void;
  onViewAllServices: () => void;
  onNavigateSolutions?: () => void;
  onNavigateSellEquipment?: () => void;
  onClose: () => void;
}

interface ServiceItem {
  id: string;
  slug: string;
  titleEn: string;
  titlePt: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface ServiceColumn {
  id: string;
  headingEn: string;
  headingPt: string;
  icon: React.ComponentType<{ className?: string }>;
  items: ServiceItem[];
}

export const MegaMenuServices: React.FC<MegaMenuServicesProps> = ({
  lang,
  onSelectService,
  onViewAllServices,
  onClose
}) => {
  const isPt = lang === 'pt';

  const columns: ServiceColumn[] = [
    {
      id: 'cybersecurity',
      headingEn: 'CYBER SECURITY',
      headingPt: 'CIBERSEGURANÇA',
      icon: ShieldCheck,
      items: [
        { id: 'cs-1', slug: 'cybersecurity', titleEn: 'Network & Firewall Defense',      titlePt: 'Defesa de Rede & Firewalls',       icon: ShieldCheck },
        { id: 'cs-2', slug: 'cybersecurity', titleEn: 'Encrypted VPN & Remote Access',   titlePt: 'VPN & Acesso Remoto Seguro',       icon: Lock },
        { id: 'cs-3', slug: 'cybersecurity', titleEn: 'Endpoint EDR & Anti-Ransomware',  titlePt: 'Proteção EDR & Anti-Ransomware',   icon: Cpu },
        { id: 'cs-4', slug: 'cybersecurity', titleEn: 'Vulnerability Assessment & Audit',titlePt: 'Auditorias de Vulnerabilidade',     icon: ScanSearch }
      ]
    },
    {
      id: 'networking',
      headingEn: 'NETWORKING',
      headingPt: 'REDES & INFRAESTRUTURA',
      icon: Network,
      items: [
        { id: 'net-1', slug: 'networking-infrastructure', titleEn: 'Network Design & Installation',      titlePt: 'Projeto & Instalação de Rede',     icon: Network },
        { id: 'net-2', slug: 'networking-infrastructure', titleEn: 'Enterprise Wi-Fi 6 & Mesh Setup',   titlePt: 'Wi-Fi Empresarial & Mesh',         icon: Wifi },
        { id: 'net-3', slug: 'networking-infrastructure', titleEn: 'Structured Cabling & Fiber 10GbE',  titlePt: 'Cablagem Cat6A/Cat7 & Fibra',      icon: PlugZap },
        { id: 'net-4', slug: 'networking-infrastructure', titleEn: 'Switch & Router Optimization',      titlePt: 'Switches & Routers Otimizados',    icon: HardDrive }
      ]
    },
    {
      id: 'it-support',
      headingEn: 'IT SUPPORT',
      headingPt: 'SUPORTE INFORMÁTICO',
      icon: Wrench,
      items: [
        { id: 'sup-1', slug: 'hardware-diagnostics-repair',       titleEn: 'Hardware Diagnostics & Repair',   titlePt: 'Diagnóstico & Reparação',          icon: MonitorCheck },
        { id: 'sup-2', slug: 'remote-helpdesk-troubleshooting',   titleEn: 'Remote Helpdesk B2B',             titlePt: 'Helpdesk Remoto B2B',              icon: Headphones },
        { id: 'sup-3', slug: 'preventive-maintenance-thermal',    titleEn: 'Thermal Cleaning & Maintenance',  titlePt: 'Manutenção Térmica Preventiva',    icon: Wrench },
        { id: 'sup-4', slug: 'servers-storage',                   titleEn: 'Server Deploy & Data Recovery',   titlePt: 'Servidores & Recuperação de Dados', icon: DatabaseBackup }
      ]
    }
  ];

  const handleClick = (slug: string) => {
    onSelectService(slug);
    onClose();
  };

  return (
    <div
      className="absolute top-full pt-1.5 left-1/2 -translate-x-1/2 w-[760px] max-w-[95vw] z-50 transition-all animate-fadeIn before:content-[''] before:absolute before:-top-3 before:left-0 before:right-0 before:h-4"
    >
      <div className="bg-white rounded-2xl border border-[#CCFBF1] shadow-[0_12px_36px_-6px_rgba(4,47,44,0.14)] p-4 sm:p-5">

        {/* 3 Clear Main Columns — same as Products menu */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pb-3">
          {columns.map((col) => {
            const ColIcon = col.icon;
            return (
              <div key={col.id} className="flex flex-col">
                {/* Column header — same style as Products */}
                <div className="flex items-center gap-2 pb-2.5 mb-2 border-b border-slate-100">
                  <div className="w-6 h-6 rounded-md bg-[#E6FAF7] flex items-center justify-center text-[#0D7E73]">
                    <ColIcon className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs font-mono font-bold tracking-wider text-[#0D7E73] uppercase">
                    {isPt ? col.headingPt : col.headingEn}
                  </span>
                </div>

                {/* Flat list rows — identical pattern to Products */}
                <ul className="flex flex-col space-y-0.5 list-none p-0 m-0">
                  {col.items.map((item) => {
                    const ItemIcon = item.icon;
                    return (
                      <li key={item.id}>
                        <button
                          type="button"
                          onClick={() => handleClick(item.slug)}
                          className="w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg hover:bg-[#F0FDFA] text-[#042F2C] hover:text-[#0D7E73] transition-all group cursor-pointer text-left"
                        >
                          <div className="flex items-center gap-2.5">
                            <ItemIcon className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#0D7E73] transition-colors shrink-0" />
                            <span className="font-semibold text-xs text-slate-700 group-hover:text-[#0D7E73]">
                              {isPt ? item.titlePt : item.titleEn}
                            </span>
                          </div>
                          <ChevronRight className="w-3 h-3 text-slate-300 group-hover:text-[#0D7E73] group-hover:translate-x-0.5 transition-all shrink-0" />
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Footer — same as Products menu */}
        <div className="pt-2.5 mt-1 border-t border-slate-100 flex items-center justify-between">
          <button
            type="button"
            onClick={() => {
              onViewAllServices();
              onClose();
            }}
            className="flex items-center gap-2 text-[#0D7E73] hover:text-[#042F2C] font-bold text-xs transition-all cursor-pointer py-1 px-2 rounded-lg hover:bg-[#F0FDFA]"
          >
            <span>{isPt ? 'Ver Todos os Serviços Especializados' : 'View All Technical Services'}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
};
