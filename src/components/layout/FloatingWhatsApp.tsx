import React, { useState } from 'react';
import { Language } from '../../types';
import { companyData } from '../../data/company';
import { X } from 'lucide-react';
import { WhatsAppIcon } from './Footer';

interface FloatingWhatsAppProps {
  lang: Language;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ lang }) => {
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);

  const defaultMsg = lang === 'pt'
    ? 'Olá equipa da Algoritmica Mania, gostaria de esclarecer dúvidas sobre equipamento IT e soluções.'
    : 'Hello Algoritmica Mania team, I would like to inquire about hardware availability and IT solutions.';

  const whatsappUrl = `https://wa.me/${companyData.whatsappNumber}?text=${encodeURIComponent(defaultMsg)}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-end gap-3 select-none">
      {/* Tooltip on hover */}
      {isTooltipOpen && (
        <div className="hidden sm:flex flex-col bg-white border border-[#CCFBF1] rounded-xl shadow-lg p-3 max-w-xs text-xs animate-fadeIn mb-2">
          <div className="flex items-center justify-between gap-2 mb-1">
            <span className="font-bold text-[#042F2C]">
              {lang === 'pt' ? 'Suporte Técnico Direto' : 'Direct Technical Desk'}
            </span>
            <button 
              onClick={() => setIsTooltipOpen(false)}
              className="text-[#042F2C]/70 hover:text-[#042F2C] cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
          <p className="text-[#042F2C]/70 text-[11px] leading-tight">
            {lang === 'pt'
              ? 'Fale diretamente com os nossos engenheiros na Trofa para cotações e stock.'
              : 'Chat directly with our hardware technicians in Trofa for stock & quotes.'}
          </p>
        </div>
      )}

      {/* Floating Button with Official WhatsApp Icon */}
      <a
        id="floating-whatsapp-btn"
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsTooltipOpen(true)}
        aria-label="WhatsApp Support"
        className="w-13 h-13 rounded-full bg-[#0D7E73] hover:bg-[#0B6A61] text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
      >
        <WhatsAppIcon className="w-6 h-6" />
        <span className="sr-only">WhatsApp Technical Desk</span>
      </a>
    </div>
  );
};
