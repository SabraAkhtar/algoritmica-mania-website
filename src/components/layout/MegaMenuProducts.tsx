import React from 'react';
import { ProductCategory, Language } from '../../types';
import { 
  Laptop, 
  Monitor, 
  Apple, 
  HardDrive, 
  Server,
  Network,
  ChevronRight, 
  ArrowRight
} from 'lucide-react';

interface MegaMenuProductsProps {
  lang: Language;
  onSelectCategory: (category: ProductCategory) => void;
  onSelectProductQuery?: (category: ProductCategory, query: string) => void;
  onViewAllProducts: () => void;
  onClose: () => void;
}

export const MegaMenuProducts: React.FC<MegaMenuProductsProps> = ({
  lang,
  onSelectCategory,
  onViewAllProducts,
  onClose
}) => {
  const isPt = lang === 'pt';

  const productCategories = [
    {
      category: 'used-refurbished' as ProductCategory,
      titlePt: 'Portáteis & Desktops',
      titleEn: 'Laptops & Workstations',
      icon: Laptop
    },
    {
      category: 'apple' as ProductCategory,
      titlePt: 'Equipamento Apple & Mac',
      titleEn: 'Apple Mac & Refurbished',
      icon: Apple
    },
    {
      category: 'servers-storage' as ProductCategory,
      titlePt: 'Servidores & Datacenter Storage',
      titleEn: 'Servers & Datacenter Storage',
      icon: Server
    },
    {
      category: 'networking' as ProductCategory,
      titlePt: 'Switches, Routers & Wi-Fi',
      titleEn: 'Networking & Enterprise Wi-Fi',
      icon: Network
    },
    {
      category: 'monitors' as ProductCategory,
      titlePt: 'Monitores & Displays',
      titleEn: 'Monitors & Displays',
      icon: Monitor
    },
    {
      category: 'it-accessories' as ProductCategory,
      titlePt: 'Componentes & Upgrades',
      titleEn: 'Components & Upgrades',
      icon: HardDrive
    }
  ];

  const handleCategoryClick = (cat: ProductCategory) => {
    onSelectCategory(cat);
    onClose();
  };

  return (
    <div 
      className="absolute top-full mt-2 left-1/2 -translate-x-1/2 w-80 sm:w-96 bg-white rounded-2xl border border-[#CCFBF1] shadow-[0_12px_36px_-6px_rgba(4,47,44,0.14)] z-50 p-2 sm:p-2.5 transition-all animate-fadeIn"
      onMouseLeave={onClose}
    >
      <ul className="flex flex-col space-y-1 list-none p-0 m-0">
        {productCategories.map((item) => {
          const Icon = item.icon;
          return (
            <li key={item.category}>
              <button
                type="button"
                onClick={() => handleCategoryClick(item.category)}
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
              onViewAllProducts();
              onClose();
            }}
            className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-[#0D7E73] hover:bg-[#F0FDFA] font-bold text-xs transition-all cursor-pointer"
          >
            <span>{isPt ? 'Ver Catálogo Completo' : 'View Full Catalog'}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </li>
      </ul>
    </div>
  );
};
