import React from 'react';
import { Language } from '../../types';
import { 
  Building2, 
  Award, 
  Layers, 
  MapPin,
  ChevronRight,
  ArrowRight
} from 'lucide-react';

interface MegaMenuCompanyProps {
  lang: Language;
  onNavigateAbout: () => void;
  onNavigateWhyChooseUs: () => void;
  onNavigateOurApproach: () => void;
  onNavigateContact?: () => void;
  onRequestQuote?: () => void;
  onClose: () => void;
}

export const MegaMenuCompany: React.FC<MegaMenuCompanyProps> = ({
  lang,
  onNavigateAbout,
  onNavigateWhyChooseUs,
  onNavigateOurApproach,
  onNavigateContact,
  onRequestQuote,
  onClose
}) => {
  const isPt = lang === 'pt';

  const companyItems = [
    {
      id: 'about',
      titlePt: 'Sobre a Empresa & Laboratório',
      titleEn: 'About Company & Trofa Lab',
      icon: Building2,
      onClick: onNavigateAbout
    },
    {
      id: 'why-us',
      titlePt: 'Porquê Escolher-nos',
      titleEn: 'Why Choose Us',
      icon: Award,
      onClick: onNavigateWhyChooseUs
    },
    {
      id: 'approach',
      titlePt: 'A Nossa Abordagem Técnica',
      titleEn: 'Our Technical Approach',
      icon: Layers,
      onClick: onNavigateOurApproach
    },
    {
      id: 'contact',
      titlePt: 'Hub Técnico & Contacto',
      titleEn: 'Technical Hub & Contact',
      icon: MapPin,
      onClick: onNavigateContact || onNavigateAbout
    }
  ];

  return (
    <div 
      className="absolute top-full mt-2 left-1/2 -translate-x-1/2 w-80 sm:w-88 bg-white rounded-2xl border border-[#CCFBF1] shadow-[0_12px_36px_-6px_rgba(4,47,44,0.14)] z-50 p-2 sm:p-2.5 transition-all animate-fadeIn"
      onMouseLeave={onClose}
    >
      <ul className="flex flex-col space-y-1 list-none p-0 m-0">
        {companyItems.map((item) => {
          const Icon = item.icon;
          return (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => {
                  item.onClick();
                  onClose();
                }}
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

        {onRequestQuote && (
          <li className="pt-1.5 mt-1 border-t border-slate-100">
            <button
              type="button"
              onClick={() => {
                onRequestQuote();
                onClose();
              }}
              className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-[#0D7E73] hover:bg-[#F0FDFA] font-bold text-xs transition-all cursor-pointer"
            >
              <span>{isPt ? 'Pedir Cotação Rápida' : 'Request Rapid Quote'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </li>
        )}
      </ul>
    </div>
  );
};
