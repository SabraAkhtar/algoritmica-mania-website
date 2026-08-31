import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { ProductCategory, Language } from '../../types';
import { translations } from '../../data/translations';
import { MegaMenuProducts } from './MegaMenuProducts';
import { MegaMenuServices } from './MegaMenuServices';
import { AnimatedLogo } from '../AnimatedLogo';
import { 
  Menu, 
  ChevronDown, 
  Search, 
  Globe, 
  ArrowRight,
  ShieldCheck,
  PhoneCall,
  Briefcase,
  Layers,
  Info,
  ShoppingBag
} from 'lucide-react';
import { companyData } from '../../data/company';
import { ActionPrimaryButton } from '../ui/AnimatedButtons';

interface NavbarProps {
  lang: Language;
  rfqCount?: number;
  onLanguageChange: (lang: Language) => void;
  onNavigateHome: () => void;
  onNavigateProducts: (cat?: ProductCategory, query?: string) => void;
  onNavigateServices: (slug?: string) => void;
  onNavigateSolutions: () => void;
  onNavigateSellEquipment: () => void;
  onNavigateAbout: () => void;
  onNavigateWhyChooseUs: () => void;
  onNavigateOurApproach: () => void;
  onNavigateContact: () => void;
  onRequestQuote: () => void;
  onOpenCartDrawer?: () => void;
  onOpenSearch: () => void;
  onOpenMobileMenu: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
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
  onOpenSearch,
  onOpenMobileMenu
}) => {

  const [activeMenu, setActiveMenu] = useState<'products' | 'services' | 'solutions' | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const isSellToUsActive = location.pathname === '/sell-equipment' || location.pathname.startsWith('/sell');
  const isAboutActive = location.pathname === '/about';
  const isContactActive = location.pathname === '/contact';
  const isProductsActive = location.pathname.startsWith('/product');
  const isServicesActive = location.pathname.startsWith('/service');
  const isHomeActive = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const t = translations[lang];

  return (
    <>
      {/* Top Utility Bar (Mini Header - Non-sticky, scrolls away with page) */}
      <div className="hidden lg:block w-full bg-[#F0FDFA] border-b border-[#CCFBF1] py-1 px-4 sm:px-6 lg:px-8 text-[11px] text-[#475569]">
        <div className=" mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 font-medium text-[#042F2C]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0D7E73]"></span>
              <span>{companyData.positioning}</span>
            </span>
            <span className="text-[#CCFBF1]">|</span>
            <span>Trofa, Portugal</span>
          </div>

          <div className="flex items-center gap-5">
            <a 
              href={`tel:${companyData.phone.replace(/\s+/g, '')}`}
              className="flex items-center gap-1 hover:text-[#0D7E73] transition-colors"
            >
              <PhoneCall className="w-3 h-3 text-[#0D7E73]" />
              <span className="font-semibold text-[#042F2C]">{companyData.phone}</span>
            </a>
            <span className="text-[#CCFBF1]">|</span>
            <span>{companyData.hoursWeekday}</span>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header 
        id="main-header"
        className={`sticky top-0 z-40 w-full transition-all duration-200 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-[#DDE5EA]' 
            : 'bg-white border-b border-[#DDE5EA]'
        }`}
      >
        {/* Main Header Container */}
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 sm:h-20">
          {/* Logo */}
          <AnimatedLogo
            variant="header"
            trigger="hover"
            onClick={onNavigateHome}
          />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-2 font-medium text-sm text-[#1F2933]">
            {/* Home */}
            <button
              onClick={() => {
                setActiveMenu(null);
                onNavigateHome();
              }}
              onMouseEnter={() => setActiveMenu(null)}
              className="relative px-3 py-2 transition-colors duration-150 cursor-pointer flex items-center gap-1 group select-none"
            >
              <span className={`transition-colors duration-150 ${isHomeActive ? 'text-[#0D7E73] font-bold' : 'text-[#334155] group-hover:text-[#0D7E73]'}`}>
                {t.nav.home}
              </span>
              {isHomeActive ? (
                <motion.div
                  layoutId="navActiveIndicator"
                  className="absolute bottom-0 left-3 right-3 h-[2.5px] bg-[#0D7E73] rounded-full"
                />
              ) : (
                <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#0D7E73] rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
              )}
            </button>

            {/* Products Dropdown / Mega Menu Trigger */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveMenu('products')}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button
                onClick={() => {
                  onNavigateProducts();
                  setActiveMenu(activeMenu === 'products' ? null : 'products');
                }}
                className="relative flex items-center gap-1.5 px-3 py-2 transition-colors duration-150 cursor-pointer group select-none"
              >
                <span className={`transition-colors duration-150 ${
                  isProductsActive || activeMenu === 'products' ? 'text-[#0D7E73] font-bold' : 'text-[#334155] group-hover:text-[#0D7E73]'
                }`}>
                  {t.nav.products}
                </span>
                <ChevronDown className={`w-3.5 h-3.5 transition-all duration-200 ${
                  activeMenu === 'products'
                    ? 'rotate-180 text-[#0D7E73]'
                    : isProductsActive
                    ? 'text-[#0D7E73]'
                    : 'text-[#64748B] group-hover:text-[#0D7E73]'
                }`} />
                {isProductsActive ? (
                  <motion.div
                    layoutId="navActiveIndicator"
                    className="absolute bottom-0 left-3 right-3 h-[2.5px] bg-[#0D7E73] rounded-full"
                  />
                ) : (
                  <span className={`absolute bottom-0 left-3 right-3 h-[2px] bg-[#0D7E73] rounded-full transition-transform duration-200 origin-left ${
                    activeMenu === 'products' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`} />
                )}
              </button>

              {activeMenu === 'products' && (
                <MegaMenuProducts
                  lang={lang}
                  onSelectCategory={(cat) => {
                    onNavigateProducts(cat);
                    setActiveMenu(null);
                  }}
                  onSelectProductQuery={(cat, query) => {
                    onNavigateProducts(cat, query);
                    setActiveMenu(null);
                  }}
                  onViewAllProducts={() => {
                    onNavigateProducts();
                    setActiveMenu(null);
                  }}
                  onClose={() => setActiveMenu(null)}
                />
              )}
            </div>

            {/* Services & Solutions Dropdown / Mega Menu Trigger */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveMenu('services')}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button
                onClick={() => {
                  onNavigateServices();
                  setActiveMenu(activeMenu === 'services' ? null : 'services');
                }}
                className="relative flex items-center gap-1.5 px-3 py-2 transition-colors duration-150 cursor-pointer group select-none"
              >
                <span className={`transition-colors duration-150 ${
                  isServicesActive || activeMenu === 'services' ? 'text-[#0D7E73] font-bold' : 'text-[#334155] group-hover:text-[#0D7E73]'
                }`}>
                  {t.nav.services}
                </span>
                <ChevronDown className={`w-3.5 h-3.5 transition-all duration-200 ${
                  activeMenu === 'services'
                    ? 'rotate-180 text-[#0D7E73]'
                    : isServicesActive
                    ? 'text-[#0D7E73]'
                    : 'text-[#64748B] group-hover:text-[#0D7E73]'
                }`} />
                {isServicesActive ? (
                  <motion.div
                    layoutId="navActiveIndicator"
                    className="absolute bottom-0 left-3 right-3 h-[2.5px] bg-[#0D7E73] rounded-full"
                  />
                ) : (
                  <span className={`absolute bottom-0 left-3 right-3 h-[2px] bg-[#0D7E73] rounded-full transition-transform duration-200 origin-left ${
                    activeMenu === 'services' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`} />
                )}
              </button>

              {activeMenu === 'services' && (
                <MegaMenuServices
                  lang={lang}
                  onSelectService={(slug) => {
                    onNavigateServices(slug);
                    setActiveMenu(null);
                  }}
                  onViewAllServices={() => {
                    onNavigateServices();
                    setActiveMenu(null);
                  }}
                  onNavigateSolutions={() => {
                    onNavigateSolutions();
                    setActiveMenu(null);
                  }}
                  onNavigateSellEquipment={() => {
                    onNavigateSellEquipment();
                    setActiveMenu(null);
                  }}
                  onClose={() => setActiveMenu(null)}
                />
              )}
            </div>

            {/* Sell to Us (Direct High-Converting Link) */}
            <button
              onClick={() => {
                setActiveMenu(null);
                onNavigateSellEquipment();
              }}
              onMouseEnter={() => setActiveMenu(null)}
              className="relative px-3 py-2 transition-colors duration-150 cursor-pointer flex items-center gap-1.5 group select-none"
            >
              <span className={`transition-colors duration-150 ${isSellToUsActive ? 'text-[#0D7E73] font-bold' : 'text-[#334155] group-hover:text-[#0D7E73]'}`}>
                {t.nav.sellToUs}
              </span>
              <span className={`text-[9px] font-extrabold uppercase px-1.5 py-0.5 rounded-full border transition-colors ${
                isSellToUsActive 
                  ? 'bg-[#0D7E73] text-white border-[#0D7E73]' 
                  : 'bg-[#CCFBF1] text-[#0D7E73] border-[#99F6E4] group-hover:bg-[#0D7E73] group-hover:text-white group-hover:border-[#0D7E73]'
              }`}>
                ITAD
              </span>
              {isSellToUsActive ? (
                <motion.div
                  layoutId="navActiveIndicator"
                  className="absolute bottom-0 left-3 right-3 h-[2.5px] bg-[#0D7E73] rounded-full"
                />
              ) : (
                <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#0D7E73] rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
              )}
            </button>

            {/* About Us (Single Direct Page Link) */}
            <button
              type="button"
              onClick={() => {
                setActiveMenu(null);
                onNavigateAbout();
              }}
              onMouseEnter={() => setActiveMenu(null)}
              className="relative px-3 py-2 transition-colors duration-150 cursor-pointer flex items-center gap-1 group select-none"
            >
              <span className={`transition-colors duration-150 ${isAboutActive ? 'text-[#0D7E73] font-bold' : 'text-[#334155] group-hover:text-[#0D7E73]'}`}>
                {t.nav.about}
              </span>
              {isAboutActive ? (
                <motion.div
                  layoutId="navActiveIndicator"
                  className="absolute bottom-0 left-3 right-3 h-[2.5px] bg-[#0D7E73] rounded-full"
                />
              ) : (
                <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#0D7E73] rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
              )}
            </button>

            {/* Contact */}
            <button
              onClick={() => {
                setActiveMenu(null);
                onNavigateContact();
              }}
              onMouseEnter={() => setActiveMenu(null)}
              className="relative px-3 py-2 transition-colors duration-150 cursor-pointer flex items-center gap-1 group select-none"
            >
              <span className={`transition-colors duration-150 ${isContactActive ? 'text-[#0D7E73] font-bold' : 'text-[#334155] group-hover:text-[#0D7E73]'}`}>
                {t.nav.contact}
              </span>
              {isContactActive ? (
                <motion.div
                  layoutId="navActiveIndicator"
                  className="absolute bottom-0 left-3 right-3 h-[2.5px] bg-[#0D7E73] rounded-full"
                />
              ) : (
                <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#0D7E73] rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
              )}
            </button>
          </nav>

          {/* Right Header Actions */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 md:gap-3 shrink-0">
            {/* Global Search Expandable Trigger Bar */}
            <button
              type="button"
              id="header-search-bar"
              onClick={onOpenSearch}
              aria-label="Open search dialog (Ctrl+K or Cmd+K)"
              className="relative flex items-center justify-between rounded-xl border border-[#CCFBF1] bg-[#F0FDFA] hover:bg-white hover:border-[#0D7E73] focus:bg-white focus:border-[#0D7E73] transition-all duration-300 ease-out px-2.5 h-9 sm:h-10 cursor-pointer shadow-2xs group w-9 sm:w-10 hover:w-56 md:hover:w-64 lg:hover:w-72 focus:w-56 md:focus:w-64 lg:focus:w-72 overflow-hidden text-left shrink-0"
            >
              <div className="flex items-center gap-2 min-w-0 flex-1">
                <Search className="w-4 h-4 text-[#0D7E73] group-hover:scale-110 transition-transform shrink-0" />
                <span className="text-xs text-[#64748B] group-hover:text-[#042F2C] transition-opacity duration-200 opacity-0 group-hover:opacity-100 group-focus:opacity-100 truncate whitespace-nowrap">
                  {lang === 'pt' ? 'Pesquisar hardware...' : 'Search hardware, servers...'}
                </span>
              </div>

              <kbd className="hidden group-hover:inline-flex group-focus:inline-flex items-center gap-0.5 px-1.5 py-0.5 text-[10px] font-bold text-[#0D7E73] bg-white border border-[#CCFBF1] rounded shadow-2xs group-hover:border-[#0D7E73] transition-all shrink-0 select-none opacity-0 group-hover:opacity-100 group-focus:opacity-100">
                <span className="text-[11px] leading-none">⌘</span>K
              </kbd>
            </button>

            {/* Language Switcher (Tablet & Desktop only: md+) */}
            <div className="hidden md:flex items-center bg-[#F0FDFA] rounded-xl p-0.5 border border-[#CCFBF1] shrink-0">
              <button
                onClick={() => onLanguageChange('en')}
                className={`px-2 py-1 rounded-lg text-xs font-bold transition-colors ${
                  lang === 'en' ? 'bg-[#0D7E73] text-white shadow-xs' : 'text-[#64748B] hover:text-[#0D7E73]'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => onLanguageChange('pt')}
                className={`px-2 py-1 rounded-lg text-xs font-bold transition-colors ${
                  lang === 'pt' ? 'bg-[#0D7E73] text-white shadow-xs' : 'text-[#64748B] hover:text-[#0D7E73]'
                }`}
              >
                PT
              </button>
            </div>

            {/* Unified Cart / RFQ Basket Drawer Button */}
            {onOpenCartDrawer && (
              <button
                type="button"
                id="btn-header-cart-drawer"
                onClick={onOpenCartDrawer}
                aria-label={lang === 'pt' ? 'Abrir cesto de cotação' : 'Open quote cart'}
                title={lang === 'pt' ? 'Ver cesto de cotação' : 'View quote cart'}
                className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl text-[#0D7E73] bg-[#F0FDFA] hover:bg-[#CCFBF1] border border-[#CCFBF1] transition-all duration-200 cursor-pointer flex items-center justify-center shadow-2xs group shrink-0"
              >
                <ShoppingBag className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#0D7E73] group-hover:scale-110 transition-transform" />
                {rfqCount > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 min-w-4.5 h-4.5 px-1 rounded-full bg-[#0D7E73] text-white text-[10px] font-black flex items-center justify-center shadow-xs animate-scale-in">
                    {rfqCount}
                  </span>
                )}
              </button>
            )}

            {/* Request a Quote Button (Desktop lg+ only to guarantee perfect fit on all screens) */}
            <ActionPrimaryButton
              id="btn-header-quote"
              onClick={onRequestQuote}
              aria-label="Request a formal business quote"
              size="sm"
              className="hidden lg:inline-flex shrink-0"
            >
              <span>{t.nav.requestQuote}</span>
            </ActionPrimaryButton>

            {/* Mobile Menu Hamburger Button (< lg) */}
            <button
              id="btn-mobile-menu"
              onClick={onOpenMobileMenu}
              aria-label="Open mobile menu"
              className="lg:hidden w-9 h-9 sm:w-10 sm:h-10 rounded-xl text-[#0D7E73] bg-[#F0FDFA] hover:bg-[#CCFBF1] border border-[#CCFBF1] flex items-center justify-center transition-colors cursor-pointer shrink-0"
            >
              <Menu className="w-5 h-5 sm:w-5.5 sm:h-5.5" />
            </button>
          </div>
        </div>
      </div>
    </header>
    </>
  );
};
