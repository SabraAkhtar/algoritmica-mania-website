import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ProductCategory, Language } from '../../types';
import { translations } from '../../data/translations';
import { ActionPrimaryButton } from '../ui/AnimatedButtons';
import { AnimatedLogo } from '../AnimatedLogo';
import { 
  X, 
  ChevronDown, 
  ChevronRight, 
  Laptop, 
  Apple, 
  Server, 
  Network, 
  ShieldCheck, 
  Wrench, 
  FileCheck, 
  Cpu, 
  Phone, 
  MessageSquare, 
  MapPin, 
  Globe,
  Briefcase,
  Layers,
  Info,
  Search
} from 'lucide-react';
import { companyData } from '../../data/company';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  rfqCount?: number;
  onLanguageChange: (lang: Language) => void;
  onNavigateHome: () => void;
  onNavigateProducts: (cat?: ProductCategory) => void;
  onNavigateServices: (slug?: string) => void;
  onNavigateSolutions: () => void;
  onNavigateSellEquipment: () => void;
  onNavigateAbout: () => void;
  onNavigateWhyChooseUs: () => void;
  onNavigateOurApproach: () => void;
  onNavigateContact: () => void;
  onRequestQuote: () => void;
  onOpenCartDrawer?: () => void;
  onOpenSearch?: () => void;
}

export const MobileDrawer: React.FC<MobileDrawerProps> = ({
  isOpen,
  onClose,
  lang,
  rfqCount = 0,
  onLanguageChange,
  onNavigateHome,
  onNavigateProducts,
  onNavigateServices,
  onNavigateSolutions,
  onNavigateSellEquipment,
  onNavigateAbout,
  onNavigateWhyChooseUs,
  onNavigateOurApproach,
  onNavigateContact,
  onRequestQuote,
  onOpenCartDrawer,
  onOpenSearch
}) => {

  const [openSection, setOpenSection] = useState<'products' | 'services' | 'solutions' | 'company' | null>(null);
  const location = useLocation();

  const isSellToUsActive = location.pathname === '/sell-equipment' || location.pathname.startsWith('/sell');
  const isAboutActive = location.pathname === '/about' || location.pathname === '/why-choose-us' || location.pathname === '/our-approach';
  const isContactActive = location.pathname === '/contact';
  const isProductsActive = location.pathname.startsWith('/product');
  const isServicesActive = location.pathname.startsWith('/service') || location.pathname.startsWith('/solution');
  const isHomeActive = location.pathname === '/';

  if (!isOpen) return null;

  const toggleSection = (section: 'products' | 'services' | 'solutions' | 'company') => {
    setOpenSection(prev => prev === section ? null : section);
  };

  const t = translations[lang];

  return (
    <div className="fixed inset-0 z-50 lg:hidden flex">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-[#042F2C]/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Drawer Panel */}
      <div className="relative w-full max-w-sm bg-white h-full shadow-2xl flex flex-col justify-between overflow-y-auto z-10">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-[#CCFBF1]">
            <AnimatedLogo
              variant="drawer"
              trigger="click"
              onClick={() => {
                onNavigateHome();
                onClose();
              }}
            />
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-[#042F2C]/70 hover:bg-[#F0FDFA] hover:text-[#042F2C]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Search Bar in Mobile Drawer */}
          {onOpenSearch && (
            <div className="p-4 pb-0">
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onOpenSearch();
                }}
                className="w-full flex items-center justify-between p-2.5 rounded-xl bg-[#F0FDFA] border border-[#CCFBF1] text-left hover:border-[#0D7E73] transition-colors"
              >
                <div className="flex items-center gap-2 text-xs text-[#64748B]">
                  <Search className="w-4 h-4 text-[#0D7E73]" />
                  <span>{lang === 'pt' ? 'Pesquisar hardware, marcas...' : 'Search hardware, servers...'}</span>
                </div>
                <span className="text-[10px] font-bold text-[#0D7E73] bg-white px-1.5 py-0.5 rounded border border-[#CCFBF1]">
                  Search
                </span>
              </button>
            </div>
          )}

          {/* Navigation Accordion */}
          <div className="p-4 space-y-1.5">
            {/* Home */}
            <button
              onClick={() => {
                onNavigateHome();
                onClose();
              }}
              className={`w-full flex items-center justify-between p-3 rounded-xl text-sm font-semibold transition-all ${
                isHomeActive 
                  ? 'bg-[#F0FDFA] text-[#0D7E73] font-bold border border-[#CCFBF1] shadow-2xs' 
                  : 'text-[#042F2C] hover:bg-[#F0FDFA]'
              }`}
            >
              <div className="flex items-center gap-2">
                {isHomeActive && <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />}
                <span>{t.nav.home}</span>
              </div>
            </button>

            {/* Products Accordion */}
            <div>
              <button
                onClick={() => toggleSection('products')}
                className={`w-full flex items-center justify-between p-3 rounded-xl text-sm font-semibold transition-all ${
                  isProductsActive
                    ? 'bg-[#F0FDFA] text-[#0D7E73] font-bold border border-[#CCFBF1] shadow-2xs'
                    : 'text-[#042F2C] hover:bg-[#F0FDFA]'
                }`}
              >
                <div className="flex items-center gap-2">
                  {isProductsActive && <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />}
                  <span>{t.nav.products}</span>
                </div>
                <ChevronDown className={`w-4 h-4 text-[#042F2C]/70 transition-transform ${openSection === 'products' ? 'rotate-180' : ''}`} />
              </button>

              {openSection === 'products' && (
                <div className="pl-4 pr-2 py-2 space-y-1 bg-[#F0FDFA] rounded-lg mb-2">
                  <button
                    onClick={() => { onNavigateProducts(); onClose(); }}
                    className="w-full text-left py-2 px-3 text-xs font-bold text-[#042F2C] hover:text-[#0D7E73] flex items-center justify-between border-b border-[#CCFBF1]/60"
                  >
                    <span>{t.nav.viewAllProducts}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => { onNavigateProducts('used-refurbished'); onClose(); }}
                    className="w-full text-left py-2 px-3 text-xs text-[#042F2C] hover:text-[#0D7E73] flex items-center gap-2"
                  >
                    <Laptop className="w-4 h-4 text-[#0D7E73]" />
                    <span>{t.categories.usedRefurbished}</span>
                  </button>
                  <button
                    onClick={() => { onNavigateProducts('apple'); onClose(); }}
                    className="w-full text-left py-2 px-3 text-xs text-[#042F2C] hover:text-[#0D7E73] flex items-center gap-2"
                  >
                    <Apple className="w-4 h-4 text-[#0D7E73]" />
                    <span>{t.categories.apple}</span>
                  </button>
                  <button
                    onClick={() => { onNavigateProducts('servers-storage'); onClose(); }}
                    className="w-full text-left py-2 px-3 text-xs text-[#042F2C] hover:text-[#0D7E73] flex items-center gap-2"
                  >
                    <Server className="w-4 h-4 text-[#0D7E73]" />
                    <span>{t.categories.serversStorage}</span>
                  </button>
                  <button
                    onClick={() => { onNavigateProducts('networking'); onClose(); }}
                    className="w-full text-left py-2 px-3 text-xs text-[#042F2C] hover:text-[#0D7E73] flex items-center gap-2"
                  >
                    <Network className="w-4 h-4 text-[#0D7E73]" />
                    <span>{t.categories.networking}</span>
                  </button>
                  <button
                    onClick={() => { onNavigateProducts('cybersecurity'); onClose(); }}
                    className="w-full text-left py-2 px-3 text-xs text-[#042F2C] hover:text-[#0D7E73] flex items-center gap-2"
                  >
                    <ShieldCheck className="w-4 h-4 text-[#0D7E73]" />
                    <span>{t.categories.cybersecurity}</span>
                  </button>
                </div>
              )}
            </div>

            {/* Services & Solutions Accordion */}
            <div>
              <button
                onClick={() => toggleSection('services')}
                className={`w-full flex items-center justify-between p-3 rounded-xl text-sm font-semibold transition-all ${
                  isServicesActive
                    ? 'bg-[#F0FDFA] text-[#0D7E73] font-bold border border-[#CCFBF1] shadow-2xs'
                    : 'text-[#042F2C] hover:bg-[#F0FDFA]'
                }`}
              >
                <div className="flex items-center gap-2">
                  {isServicesActive && <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />}
                  <span>{t.nav.services}</span>
                </div>
                <ChevronDown className={`w-4 h-4 text-[#042F2C]/70 transition-transform ${openSection === 'services' ? 'rotate-180' : ''}`} />
              </button>

              {openSection === 'services' && (
                <div className="pl-4 pr-2 py-2 space-y-1 bg-[#F0FDFA] rounded-lg mb-2">
                  <button
                    onClick={() => { onNavigateServices(); onClose(); }}
                    className="w-full text-left py-2 px-3 text-xs font-bold text-[#042F2C] hover:text-[#0D7E73] flex items-center justify-between border-b border-[#CCFBF1]/60"
                  >
                    <span>{t.nav.viewAllServices}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => { onNavigateServices('it-support'); onClose(); }}
                    className="w-full text-left py-2 px-3 text-xs text-[#042F2C] hover:text-[#0D7E73] flex items-center gap-2"
                  >
                    <Wrench className="w-4 h-4 text-[#0D7E73]" />
                    <span>{lang === 'pt' ? 'Suporte Técnico & Diagnóstico' : 'IT Support & Diagnostics'}</span>
                  </button>
                  <button
                    onClick={() => { onNavigateServices('networking-and-configuration'); onClose(); }}
                    className="w-full text-left py-2 px-3 text-xs text-[#042F2C] hover:text-[#0D7E73] flex items-center gap-2"
                  >
                    <Network className="w-4 h-4 text-[#0D7E73]" />
                    <span>{lang === 'pt' ? 'Redes & Configuração' : 'Networking & Config'}</span>
                  </button>
                  <button
                    onClick={() => { onNavigateServices('cybersecurity'); onClose(); }}
                    className="w-full text-left py-2 px-3 text-xs text-[#042F2C] hover:text-[#0D7E73] flex items-center gap-2"
                  >
                    <ShieldCheck className="w-4 h-4 text-[#0D7E73]" />
                    <span>{lang === 'pt' ? 'Cibersegurança Empresarial' : 'Enterprise Cybersecurity'}</span>
                  </button>
                  <button
                    onClick={() => { onNavigateServices('secure-data-removal'); onClose(); }}
                    className="w-full text-left py-2 px-3 text-xs text-[#042F2C] hover:text-[#0D7E73] flex items-center gap-2"
                  >
                    <FileCheck className="w-4 h-4 text-[#0D7E73]" />
                    <span>{lang === 'pt' ? 'Eliminação de Dados NIST' : 'Secure Data Removal (NIST)'}</span>
                  </button>
                  <button
                    onClick={() => { onNavigateSolutions(); onClose(); }}
                    className="w-full text-left py-2 px-3 text-xs text-[#0D7E73] font-bold hover:text-[#0B6A61] flex items-center gap-2"
                  >
                    <Layers className="w-4 h-4 text-[#0D7E73]" />
                    <span>{lang === 'pt' ? 'Soluções IT 360° para Empresas' : '360° Enterprise IT Solutions'}</span>
                  </button>
                  <button
                    onClick={() => { onNavigateServices('refurbishment-process'); onClose(); }}
                    className="w-full text-left py-2 px-3 text-xs text-[#042F2C] hover:text-[#0D7E73] flex items-center gap-2"
                  >
                    <Cpu className="w-4 h-4 text-[#0D7E73]" />
                    <span>{lang === 'pt' ? 'Processo de Recondicionamento' : 'Refurbishment Protocol'}</span>
                  </button>
                </div>
              )}
            </div>

            {/* Sell to Us (Direct Link) */}
            <button
              onClick={() => {
                onNavigateSellEquipment();
                onClose();
              }}
              className={`w-full flex items-center justify-between p-3 rounded-xl text-sm font-semibold transition-all ${
                isSellToUsActive
                  ? 'bg-[#F0FDFA] text-[#0D7E73] font-bold border border-[#CCFBF1] shadow-2xs'
                  : 'text-[#042F2C] hover:bg-[#F0FDFA]'
              }`}
            >
              <div className="flex items-center gap-2">
                {isSellToUsActive ? (
                  <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                ) : (
                  <Briefcase className="w-4 h-4 text-[#0D7E73]" />
                )}
                <span>{t.nav.sellToUs}</span>
              </div>
              <span className={`text-[10px] font-extrabold uppercase px-1.5 py-0.5 rounded-md border transition-colors ${
                isSellToUsActive
                  ? 'bg-[#0D7E73] text-white border-[#0D7E73]'
                  : 'bg-[#CCFBF1] text-[#0D7E73] border-[#99F6E4]'
              }`}>
                ITAD Buyback
              </span>
            </button>

            {/* About Us (Single Direct Page Link) */}
            <button
              onClick={() => {
                onNavigateAbout();
                onClose();
              }}
              className={`w-full flex items-center justify-between p-3 rounded-xl text-sm font-semibold transition-all ${
                isAboutActive
                  ? 'bg-[#F0FDFA] text-[#0D7E73] font-bold border border-[#CCFBF1] shadow-2xs'
                  : 'text-[#042F2C] hover:bg-[#F0FDFA]'
              }`}
            >
              <div className="flex items-center gap-2">
                {isAboutActive ? (
                  <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                ) : (
                  <Info className="w-4 h-4 text-[#0D7E73]" />
                )}
                <span>{t.nav.about}</span>
              </div>
            </button>

            {/* Contact */}
            <button
              onClick={() => {
                onNavigateContact();
                onClose();
              }}
              className={`w-full flex items-center justify-between p-3 rounded-xl text-sm font-semibold transition-all ${
                isContactActive
                  ? 'bg-[#F0FDFA] text-[#0D7E73] font-bold border border-[#CCFBF1] shadow-2xs'
                  : 'text-[#042F2C] hover:bg-[#F0FDFA]'
              }`}
            >
              <div className="flex items-center gap-2">
                {isContactActive && <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />}
                <span>{t.nav.contact}</span>
              </div>
            </button>
          </div>
        </div>

        {/* Bottom Drawer Actions */}
        <div className="p-4 border-t border-[#CCFBF1] space-y-3 bg-[#F0FDFA]">
          {/* Language Toggle */}
          <div className="flex items-center justify-between p-2 rounded-lg bg-white border border-[#CCFBF1] text-xs">
            <div className="flex items-center gap-2 text-[#042F2C]/70">
              <Globe className="w-4 h-4" />
              <span>Language / Idioma:</span>
            </div>
            <div className="flex gap-1">
              <button
                onClick={() => onLanguageChange('en')}
                className={`px-2 py-1 rounded font-bold text-xs ${lang === 'en' ? 'bg-[#0D7E73] text-white' : 'text-[#042F2C]/70 hover:bg-[#CCFBF1]/40'}`}
              >
                EN
              </button>
              <button
                onClick={() => onLanguageChange('pt')}
                className={`px-2 py-1 rounded font-bold text-xs ${lang === 'pt' ? 'bg-[#0D7E73] text-white' : 'text-[#042F2C]/70 hover:bg-[#CCFBF1]/40'}`}
              >
                PT
              </button>
            </div>
          </div>

          {/* View Quote Cart Button if items exist */}
          {onOpenCartDrawer && (
            <button
              onClick={() => {
                onClose();
                onOpenCartDrawer();
              }}
              className="w-full py-2.5 px-4 rounded-xl bg-white text-[#0D7E73] hover:bg-[#F0FDFA] font-bold text-xs text-center transition-colors border border-[#CCFBF1] shadow-2xs flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>{lang === 'pt' ? 'Ver Cesto de Cotação' : 'View Quote Cart'}</span>
              {rfqCount > 0 && (
                <span className="w-5 h-5 rounded-full bg-[#0D7E73] text-white text-[10px] font-black flex items-center justify-center">
                  {rfqCount}
                </span>
              )}
            </button>
          )}

          {/* Quick Quote Action with dynamic badge */}
          <ActionPrimaryButton
            onClick={() => {
              onRequestQuote();
              onClose();
            }}
            size="md"
            className="w-full justify-center"
          >
            <span>{t.nav.requestQuote}</span>
          </ActionPrimaryButton>

          {/* Quick WhatsApp Link */}
          <a
            href={`https://wa.me/${companyData.whatsappNumber}?text=${encodeURIComponent('Hello Algoritmica Mania team, I would like to inquire about IT hardware and services.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-white text-[#0D7E73] font-bold text-xs hover:bg-[#0D7E73] hover:text-white transition-colors border border-[#CCFBF1]"
          >
            <MessageSquare className="w-4 h-4" />
            <span>{t.nav.whatsappChat}</span>
          </a>

          {/* Location info */}
          <div className="text-[11px] text-[#042F2C]/70 text-center pt-1">
            <span>{companyData.fullAddress}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
