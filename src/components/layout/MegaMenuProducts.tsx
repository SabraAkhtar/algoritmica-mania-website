import React from 'react';
import { ProductCategory, Language } from '../../types';
import { 
  Laptop, 
  Monitor, 
  Apple, 
  HardDrive, 
  Server,
  Network,
  Shield,
  Cpu,
  ChevronRight, 
  ArrowRight,
  Sparkles,
  RefreshCw
} from 'lucide-react';

interface MegaMenuProductsProps {
  lang: Language;
  onSelectCategory: (category: ProductCategory, subCategory?: string) => void;
  onSelectProductQuery?: (category: ProductCategory, query: string) => void;
  onViewAllProducts: () => void;
  onClose: () => void;
}

interface ProductSubItem {
  id: string;
  category: ProductCategory;
  subCategory?: string;
  titleEn: string;
  titlePt: string;
  icon: React.ComponentType<{ className?: string }>;
}

export const MegaMenuProducts: React.FC<MegaMenuProductsProps> = ({
  lang,
  onSelectCategory,
  onViewAllProducts,
  onClose
}) => {
  const isPt = lang === 'pt';

  const refurbishedItems: ProductSubItem[] = [
    {
      id: 'refurb-laptops',
      category: 'used-refurbished',
      subCategory: 'Laptops & Workstations',
      titleEn: 'Laptops & Workstations',
      titlePt: 'Portáteis & Workstations',
      icon: Laptop
    },
    {
      id: 'refurb-apple',
      category: 'apple',
      subCategory: 'Apple Mac & Refurbished',
      titleEn: 'Apple Mac & Refurbished',
      titlePt: 'Apple Mac & Recondicionados',
      icon: Apple
    },
    {
      id: 'refurb-servers',
      category: 'servers-storage',
      subCategory: 'Servers & Datacenter Storage',
      titleEn: 'Servers & Datacenter Storage',
      titlePt: 'Servidores & Datacenter',
      icon: Server
    },
    {
      id: 'refurb-networking',
      category: 'networking',
      subCategory: 'Networking & Enterprise Wi-Fi',
      titleEn: 'Networking & Enterprise Wi-Fi',
      titlePt: 'Redes & Wi-Fi Empresarial',
      icon: Network
    },
    {
      id: 'refurb-monitors',
      category: 'monitors',
      subCategory: 'Monitors & Displays',
      titleEn: 'Monitors & Displays',
      titlePt: 'Monitores & Displays',
      icon: Monitor
    },
    {
      id: 'refurb-components',
      category: 'it-accessories',
      subCategory: 'Components & Upgrades',
      titleEn: 'Components & Upgrades',
      titlePt: 'Componentes & Upgrades',
      icon: HardDrive
    }
  ];

  const usedItems: ProductSubItem[] = [
    {
      id: 'used-laptops',
      category: 'computers-laptops',
      subCategory: 'Laptops & Workstations',
      titleEn: 'Laptops & Workstations',
      titlePt: 'Portáteis & Workstations Usados',
      icon: Laptop
    },
    {
      id: 'used-apple',
      category: 'apple',
      subCategory: 'Apple Mac',
      titleEn: 'Apple Mac',
      titlePt: 'Equipamento Apple Mac',
      icon: Apple
    },
    {
      id: 'used-servers',
      category: 'servers-storage',
      subCategory: 'Servers & Storage',
      titleEn: 'Servers & Storage',
      titlePt: 'Servidores & Storage Usados',
      icon: Server
    },
    {
      id: 'used-networking',
      category: 'networking',
      subCategory: 'Networking Equipment',
      titleEn: 'Networking Equipment',
      titlePt: 'Equipamento de Rede Usado',
      icon: Network
    },
    {
      id: 'used-monitors',
      category: 'monitors',
      subCategory: 'Monitors & Displays',
      titleEn: 'Monitors & Displays',
      titlePt: 'Monitores & Ecrãs Usados',
      icon: Monitor
    },
    {
      id: 'used-components',
      category: 'it-accessories',
      subCategory: 'Components & Upgrades',
      titleEn: 'Components & Upgrades',
      titlePt: 'Componentes & Hardware',
      icon: Cpu
    }
  ];

  const cyberSecurityItems: ProductSubItem[] = [
    {
      id: 'cyber-router',
      category: 'cybersecurity',
      subCategory: 'Cyber Security Router',
      titleEn: 'Cyber Security Router',
      titlePt: 'Routers de Cibersegurança',
      icon: Network
    },
    {
      id: 'cyber-switch',
      category: 'cybersecurity',
      subCategory: 'Cyber Security Switch',
      titleEn: 'Cyber Security Switch',
      titlePt: 'Switches de Cibersegurança',
      icon: Cpu
    },
    {
      id: 'cyber-gateway',
      category: 'cybersecurity',
      subCategory: 'Cyber Security Gateway',
      titleEn: 'Cyber Security Gateway',
      titlePt: 'Gateways de Segurança',
      icon: Shield
    },
    {
      id: 'cyber-servers',
      category: 'cybersecurity',
      subCategory: 'Cyber Security Servers',
      titleEn: 'Cyber Security Servers',
      titlePt: 'Servidores de Cibersegurança',
      icon: Server
    }
  ];

  const handleItemClick = (cat: ProductCategory, subCat?: string) => {
    onSelectCategory(cat, subCat);
    onClose();
  };

  return (
    <div 
      className="absolute top-full pt-1.5 left-1/2 -translate-x-1/2 w-[760px] max-w-[95vw] z-50 transition-all animate-fadeIn before:content-[''] before:absolute before:-top-3 before:left-0 before:right-0 before:h-4"
    >
      <div className="bg-white rounded-2xl border border-[#CCFBF1] shadow-[0_12px_36px_-6px_rgba(4,47,44,0.14)] p-4 sm:p-5">
        
        {/* 3 Clear Main Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pb-3">
          
          {/* Column 1: IT REFURBISHED */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2 pb-2.5 mb-2 border-b border-slate-100">
              <div className="w-6 h-6 rounded-md bg-[#E6FAF7] flex items-center justify-center text-[#0D7E73]">
                <Sparkles className="w-3.5 h-3.5" />
              </div>
              <span className="text-xs font-mono font-bold tracking-wider text-[#0D7E73] uppercase">
                {isPt ? 'IT RECONDICIONADO' : 'IT REFURBISHED'}
              </span>
            </div>
            
            <ul className="flex flex-col space-y-0.5 list-none p-0 m-0">
              {refurbishedItems.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.id}>
                    <button
                      type="button"
                      onClick={() => handleItemClick(item.category, item.subCategory)}
                      className="w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg hover:bg-[#F0FDFA] text-[#042F2C] hover:text-[#0D7E73] transition-all group cursor-pointer text-left"
                    >
                      <div className="flex items-center gap-2.5">
                        <Icon className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#0D7E73] transition-colors shrink-0" />
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

          {/* Column 2: IT USED */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2 pb-2.5 mb-2 border-b border-slate-100">
              <div className="w-6 h-6 rounded-md bg-[#F0FDFA] flex items-center justify-center text-[#0D7E73]">
                <RefreshCw className="w-3.5 h-3.5" />
              </div>
              <span className="text-xs font-mono font-bold tracking-wider text-[#0D7E73] uppercase">
                {isPt ? 'IT USADO' : 'IT USED'}
              </span>
            </div>
            
            <ul className="flex flex-col space-y-0.5 list-none p-0 m-0">
              {usedItems.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.id}>
                    <button
                      type="button"
                      onClick={() => handleItemClick(item.category, item.subCategory)}
                      className="w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg hover:bg-[#F0FDFA] text-[#042F2C] hover:text-[#0D7E73] transition-all group cursor-pointer text-left"
                    >
                      <div className="flex items-center gap-2.5">
                        <Icon className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#0D7E73] transition-colors shrink-0" />
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

          {/* Column 3: CYBER SECURITY (Hardware Only) */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2 pb-2.5 mb-2 border-b border-slate-100">
              <div className="w-6 h-6 rounded-md bg-[#E6FAF7] flex items-center justify-center text-[#0D7E73]">
                <Shield className="w-3.5 h-3.5" />
              </div>
              <span className="text-xs font-mono font-bold tracking-wider text-[#0D7E73] uppercase">
                {isPt ? 'HARDWARE CIBERSEGURANÇA' : 'CYBER SECURITY'}
              </span>
            </div>
            
            <ul className="flex flex-col space-y-0.5 list-none p-0 m-0">
              {cyberSecurityItems.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.id}>
                    <button
                      type="button"
                      onClick={() => handleItemClick(item.category, item.subCategory)}
                      className="w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg hover:bg-[#F0FDFA] text-[#042F2C] hover:text-[#0D7E73] transition-all group cursor-pointer text-left"
                    >
                      <div className="flex items-center gap-2.5">
                        <Icon className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#0D7E73] transition-colors shrink-0" />
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

            <div className="mt-auto pt-3">
              <div className="p-2.5 rounded-xl bg-[#F0FDFA] border border-[#CCFBF1]/80 text-[11px] text-[#042F2C]/80">
                <span className="font-bold text-[#0D7E73] block mb-0.5">
                  {isPt ? 'Hardware Físico' : 'Physical Hardware'}
                </span>
                <span className="text-slate-500 leading-tight block">
                  {isPt ? 'Routers, switches e appliances de segurança' : 'Routers, switches & security appliances'}
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Action */}
        <div className="pt-2.5 mt-1 border-t border-slate-100 flex items-center justify-between">
          <button
            type="button"
            onClick={() => {
              onViewAllProducts();
              onClose();
            }}
            className="flex items-center gap-2 text-[#0D7E73] hover:text-[#042F2C] font-bold text-xs transition-all cursor-pointer py-1 px-2 rounded-lg hover:bg-[#F0FDFA]"
          >
            <span>{isPt ? 'Ver Catálogo Completo de Hardware' : 'View Full Products Catalog'}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
};
