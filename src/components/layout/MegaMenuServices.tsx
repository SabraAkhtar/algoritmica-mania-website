import React from 'react';
import { Language } from '../../types';
import { 
  Wrench, 
  Sparkles, 
  Headphones, 
  HardDrive, 
  Network,
  Shield,
  ChevronRight, 
  ArrowRight
} from 'lucide-react';

interface MegaMenuServicesProps {
  lang: Language;
  onSelectService: (serviceSlug: string) => void;
  onViewAllServices: () => void;
  onNavigateSolutions?: () => void;
  onNavigateSellEquipment?: () => void;
  onClose: () => void;
}

export const MegaMenuServices: React.FC<MegaMenuServicesProps> = ({
  lang,
  onSelectService,
  onViewAllServices,
  onClose
}) => {
  const isPt = lang === 'pt';

  const services = [
    {
      slug: 'hardware-diagnostics-repair',
      titlePt: 'Diagnóstico & Reparação de Bancada',
      titleEn: 'Hardware Diagnostics & Repair',
      icon: Wrench
    },
    {
      slug: 'networking-infrastructure',
      titlePt: 'Cablagem & Redes 10GbE / Wi-Fi',
      titleEn: 'Structured Cabling & 10GbE Wi-Fi',
      icon: Network
    },
    {
      slug: 'cybersecurity',
      titlePt: 'Cibersegurança & Firewalls UTM',
      titleEn: 'Cybersecurity & UTM Firewalls',
      icon: Shield
    },
    {
      slug: 'preventive-maintenance-thermal',
      titlePt: 'Manutenção Preventiva & Térmica',
      titleEn: 'Preventive & Thermal Maintenance',
      icon: Sparkles
    },
    {
      slug: 'remote-helpdesk-troubleshooting',
      titlePt: 'Suporte Remoto & Helpdesk B2B',
      titleEn: 'Remote Support & Helpdesk B2B',
      icon: Headphones
    },
    {
      slug: 'data-recovery-drives',
      titlePt: 'Recuperação de Dados & Laboratório',
      titleEn: 'Data Recovery Lab Forensics',
      icon: HardDrive
    }
  ];

  const handleServiceClick = (slug: string) => {
    onSelectService(slug);
    onClose();
  };

  return (
    <div 
      className="absolute top-full mt-2 left-1/2 -translate-x-1/2 w-80 sm:w-96 bg-white rounded-2xl border border-[#CCFBF1] shadow-[0_12px_36px_-6px_rgba(4,47,44,0.14)] z-50 p-2 sm:p-2.5 transition-all animate-fadeIn"
      onMouseLeave={onClose}
    >
      <ul className="flex flex-col space-y-1 list-none p-0 m-0">
        {services.map((item) => {
          const Icon = item.icon;
          return (
            <li key={item.slug}>
              <button
                type="button"
                onClick={() => handleServiceClick(item.slug)}
                className="w-full flex items-center justify-between px-3 py-2 rounded-xl hover:bg-[#F0FDFA] text-[#042F2C] hover:text-[#0D7E73] transition-all group cursor-pointer text-left border border-transparent hover:border-[#CCFBF1]"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#F0FDFA] group-hover:bg-[#0D7E73] text-[#0D7E73] group-hover:text-white flex items-center justify-center transition-colors shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="font-bold text-xs sm:text-[13px]">
                    {isPt ? item.titlePt : item.titleEn}
                  </span>
                </div>
                <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#0D7E73] group-hover:translate-x-0.5 transition-all" />
              </button>
            </li>
          );
        })}

        <li className="pt-1.5 mt-1 border-t border-slate-100">
          <button
            type="button"
            onClick={() => {
              onViewAllServices();
              onClose();
            }}
            className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-[#0D7E73] hover:bg-[#F0FDFA] font-bold text-xs transition-all cursor-pointer"
          >
            <span>{isPt ? 'Ver Todos os Serviços' : 'View All Services'}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </li>
      </ul>
    </div>
  );
};
