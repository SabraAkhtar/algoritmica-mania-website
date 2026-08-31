import React, { useState } from 'react';
import { ProductCategory, Language } from '../../types';
import { translations } from '../../data/translations';
import { companyData } from '../../data/company';
import { AnimatedLogo } from '../AnimatedLogo';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Globe,
  ChevronDown
} from 'lucide-react';

// Official High-Fidelity WhatsApp SVG Icon
export const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.457h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

interface FooterProps {
  lang: Language;
  onNavigateHome: () => void;
  onNavigateProducts?: (cat?: ProductCategory) => void;
  onNavigateServices?: (slug?: string) => void;
  onNavigateSolutions: () => void;
  onNavigateSellEquipment: () => void;
  onNavigateAbout: () => void;
  onNavigateWhyChooseUs: () => void;
  onNavigateOurApproach: () => void;
  onNavigateContact: () => void;
  onNavigateLegal: (section: 'privacy' | 'cookies' | 'terms') => void;
  onRequestQuote: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  lang,
  onNavigateHome,
  onNavigateProducts,
  onNavigateSolutions,
  onNavigateSellEquipment,
  onNavigateAbout,
  onNavigateContact,
  onNavigateLegal,
  onRequestQuote
}) => {
  const isPt = lang === 'pt';
  const t = translations[lang].footer;

  // Mobile accordion state (only 1 section open at a time; closed by default)
  const [activeAccordion, setActiveAccordion] = useState<'explore' | 'company' | 'support' | null>(null);

  const toggleAccordion = (section: 'explore' | 'company' | 'support') => {
    setActiveAccordion(prev => prev === section ? null : section);
  };

  return (
    <footer id="main-footer" className="w-full bg-[#F8FAFC] py-6 sm:py-10 lg:py-12 px-3 sm:px-6 lg:px-8">
      {/* MAIN CONTAINER CARD */}
      <div className="max-w-7xl mx-auto bg-[#042F2C] text-white rounded-2xl sm:rounded-3xl lg:rounded-[32px] border border-[#0D7E73]/30 shadow-xl overflow-hidden p-5 sm:p-8 lg:p-12 relative">
        
        {/* Subtle Ambient Radial Lighting */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#0D7E73]/15 rounded-full blur-[100px] pointer-events-none" />

        {/* ========================================================
            1. MOBILE LAYOUT (< 768px) — PURPOSE-BUILT ACCORDION
           ======================================================== */}
        <div className="block md:hidden relative z-10 space-y-5">
          
          {/* SECTION 1 — BRAND */}
          <div className="flex flex-col items-start pt-1">
            <div className="mb-2.5">
              <AnimatedLogo
                variant="footer"
                trigger="hover"
                onClick={onNavigateHome}
                isDark={true}
              />
            </div>

            {/* Short 2-3 line description */}
            <p className="text-[12.5px] text-slate-300 leading-relaxed max-w-sm mb-3.5">
              {isPt 
                ? 'Equipamentos de TI empresariais recondicionados com garantia, diagnóstico especializado e soluções de ciclo de vida na Trofa.' 
                : 'Certified enterprise IT hardware, technical diagnostics and IT lifecycle solutions in Trofa, Portugal.'}
            </p>

            {/* SECTION 2 — CONTACT / SOCIAL ICONS (Horizontal Row, Max 5 Icons) */}
            <div className="flex items-center gap-2.5 mb-2">
              {/* 1. WhatsApp */}
              <a
                href={`https://wa.me/${companyData.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                title="WhatsApp"
                aria-label="WhatsApp"
                className="w-8.5 h-8.5 rounded-full bg-white/10 hover:bg-[#0D7E73] active:bg-[#0D7E73] text-white flex items-center justify-center transition-transform active:scale-95 border border-white/5"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#5EEAD4]" />
              </a>

              {/* 2. Phone */}
              <a
                href={`tel:${companyData.phone.replace(/\s+/g, '')}`} 
                title="Telefone"
                aria-label="Telefone"
                className="w-8.5 h-8.5 rounded-full bg-white/10 hover:bg-[#0D7E73] active:bg-[#0D7E73] text-white flex items-center justify-center transition-transform active:scale-95 border border-white/5"
              >
                <Phone className="w-3.5 h-3.5 text-slate-200" />
              </a>

              {/* 3. Email */}
              <a
                href={`mailto:${companyData.email}`} 
                title="Email"
                aria-label="Email"
                className="w-8.5 h-8.5 rounded-full bg-white/10 hover:bg-[#0D7E73] active:bg-[#0D7E73] text-white flex items-center justify-center transition-transform active:scale-95 border border-white/5"
              >
                <Mail className="w-3.5 h-3.5 text-slate-200" />
              </a>

              {/* 4. Location */}
              <button
                onClick={onNavigateContact}
                title="Localização"
                aria-label="Localização"
                className="w-8.5 h-8.5 rounded-full bg-white/10 hover:bg-[#0D7E73] active:bg-[#0D7E73] text-white flex items-center justify-center transition-transform active:scale-95 border border-white/5 cursor-pointer"
              >
                <MapPin className="w-3.5 h-3.5 text-slate-200" />
              </button>

              {/* 5. Website */}
              <button
                onClick={onNavigateHome}
                title="Website"
                aria-label="Website"
                className="w-8.5 h-8.5 rounded-full bg-white/10 hover:bg-[#0D7E73] active:bg-[#0D7E73] text-white flex items-center justify-center transition-transform active:scale-95 border border-white/5 cursor-pointer"
              >
                <Globe className="w-3.5 h-3.5 text-slate-200" />
              </button>
            </div>
          </div>

          {/* SECTION 3 — ACCORDION NAVIGATION */}
          <div className="border-t border-white/10 divide-y divide-white/10">
            
            {/* Accordion Item 1: EXPLORE */}
            <div className="w-full">
              <button
                onClick={() => toggleAccordion('explore')}
                className="w-full min-h-[50px] py-3.5 flex items-center justify-between text-left cursor-pointer group select-none"
                aria-expanded={activeAccordion === 'explore'}
              >
                <span className="text-[12.5px] font-bold tracking-wider uppercase text-white group-hover:text-[#5EEAD4] transition-colors">
                  {isPt ? 'EXPLORAR' : 'EXPLORE'}
                </span>
                <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center text-[#5EEAD4] transition-transform duration-200">
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeAccordion === 'explore' ? 'rotate-180 text-white' : ''}`} />
                </div>
              </button>

              {activeAccordion === 'explore' && (
                <div className="pb-4 pt-1 pl-1 space-y-2.5 text-[13px] text-slate-300">
                  <div>
                    <button 
                      onClick={() => onNavigateProducts ? onNavigateProducts() : onNavigateHome()}
                      className="hover:text-[#5EEAD4] active:text-[#5EEAD4] text-left block w-full py-1 cursor-pointer"
                    >
                      {isPt ? 'Todos os Produtos' : 'All Products'}
                    </button>
                  </div>
                  <div>
                    <button 
                      onClick={() => onNavigateProducts ? onNavigateProducts('laptops-pcs') : onNavigateHome()}
                      className="hover:text-[#5EEAD4] active:text-[#5EEAD4] text-left block w-full py-1 cursor-pointer"
                    >
                      {isPt ? 'Laptops & Workstations' : 'Laptops & Workstations'}
                    </button>
                  </div>
                  <div>
                    <button 
                      onClick={() => onNavigateProducts ? onNavigateProducts('servers-storage') : onNavigateHome()}
                      className="hover:text-[#5EEAD4] active:text-[#5EEAD4] text-left block w-full py-1 cursor-pointer"
                    >
                      {isPt ? 'Servidores & Storage' : 'Servers & Storage'}
                    </button>
                  </div>
                  <div>
                    <button 
                      onClick={onNavigateSellEquipment}
                      className="hover:text-[#5EEAD4] active:text-[#5EEAD4] text-left block w-full py-1 cursor-pointer"
                    >
                      {isPt ? 'Vender Equipamento (ITAD)' : 'Sell Equipment (ITAD)'}
                    </button>
                  </div>
                  <div>
                    <button 
                      onClick={onNavigateSolutions}
                      className="hover:text-[#5EEAD4] active:text-[#5EEAD4] text-left block w-full py-1 cursor-pointer font-medium text-teal-200"
                    >
                      {isPt ? 'Soluções Empresariais' : 'Enterprise Solutions'}
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Accordion Item 2: COMPANY */}
            <div className="w-full">
              <button
                onClick={() => toggleAccordion('company')}
                className="w-full min-h-[50px] py-3.5 flex items-center justify-between text-left cursor-pointer group select-none"
                aria-expanded={activeAccordion === 'company'}
              >
                <span className="text-[12.5px] font-bold tracking-wider uppercase text-white group-hover:text-[#5EEAD4] transition-colors">
                  {isPt ? 'EMPRESA' : 'COMPANY'}
                </span>
                <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center text-[#5EEAD4] transition-transform duration-200">
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeAccordion === 'company' ? 'rotate-180 text-white' : ''}`} />
                </div>
              </button>

              {activeAccordion === 'company' && (
                <div className="pb-4 pt-1 pl-1 space-y-2.5 text-[13px] text-slate-300">
                  <div>
                    <button 
                      onClick={onNavigateAbout}
                      className="hover:text-[#5EEAD4] active:text-[#5EEAD4] text-left block w-full py-1 cursor-pointer font-medium"
                    >
                      {isPt ? 'Sobre Nós' : 'About Us'}
                    </button>
                  </div>
                  <div>
                    <button 
                      onClick={onNavigateSolutions}
                      className="hover:text-[#5EEAD4] active:text-[#5EEAD4] text-left block w-full py-1 cursor-pointer"
                    >
                      {isPt ? 'Soluções Empresariais' : 'Enterprise Solutions'}
                    </button>
                  </div>
                  <div>
                    <button 
                      onClick={onNavigateContact}
                      className="hover:text-[#5EEAD4] active:text-[#5EEAD4] text-left block w-full py-1 cursor-pointer"
                    >
                      {isPt ? 'Hub Técnico na Trofa' : 'Trofa Technical Hub'}
                    </button>
                  </div>
                  <div>
                    <button 
                      onClick={onRequestQuote}
                      className="hover:text-[#5EEAD4] active:text-[#5EEAD4] text-left block w-full py-1 cursor-pointer font-semibold text-teal-300"
                    >
                      {isPt ? 'Pedir Cotação Rápida' : 'Request a Fast Quote'}
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Accordion Item 3: SUPPORT */}
            <div className="w-full">
              <button
                onClick={() => toggleAccordion('support')}
                className="w-full min-h-[50px] py-3.5 flex items-center justify-between text-left cursor-pointer group select-none"
                aria-expanded={activeAccordion === 'support'}
              >
                <span className="text-[12.5px] font-bold tracking-wider uppercase text-white group-hover:text-[#5EEAD4] transition-colors">
                  {isPt ? 'SUPORTE' : 'SUPPORT'}
                </span>
                <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center text-[#5EEAD4] transition-transform duration-200">
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeAccordion === 'support' ? 'rotate-180 text-white' : ''}`} />
                </div>
              </button>

              {activeAccordion === 'support' && (
                <div className="pb-4 pt-1 pl-1 space-y-2.5 text-[13px] text-slate-300">
                  <div>
                    <button 
                      onClick={onRequestQuote}
                      className="hover:text-[#5EEAD4] active:text-[#5EEAD4] text-left block w-full py-1 cursor-pointer font-semibold text-teal-300"
                    >
                      {isPt ? 'Pedir Cotação Rápida' : 'Request a Quote'}
                    </button>
                  </div>
                  <div>
                    <button 
                      onClick={onNavigateContact}
                      className="hover:text-[#5EEAD4] active:text-[#5EEAD4] text-left block w-full py-1 cursor-pointer"
                    >
                      {isPt ? 'Contacto Direto' : 'Contact Us'}
                    </button>
                  </div>
                  <div>
                    <a 
                      href={`tel:${companyData.phone.replace(/\s+/g, '')}`} 
                      className="hover:text-[#5EEAD4] active:text-[#5EEAD4] text-left block w-full py-1"
                    >
                      {isPt ? 'Apoio Telefónico' : 'Phone Support'}
                    </a>
                  </div>
                  <div>
                    <button 
                      onClick={onNavigateAbout}
                      className="hover:text-[#5EEAD4] active:text-[#5EEAD4] text-left block w-full py-1 cursor-pointer"
                    >
                      {isPt ? 'Garantia e Diagnóstico' : 'Warranty & Diagnostics'}
                    </button>
                  </div>
                </div>
              )}
            </div>

          </div>

          {/* SECTION 4 & 5 — COPYRIGHT & LEGAL LINKS */}
          <div className="pt-4 border-t border-white/10 text-center space-y-3">
            
            {/* Copyright */}
            <div className="text-[11.5px] text-slate-400 leading-snug">
              © 2026 <strong className="text-white font-bold">{companyData.name}</strong>. {t.rights}
            </div>

            {/* Legal Links Row */}
            <div className="flex flex-wrap items-center justify-center gap-x-3.5 gap-y-1.5 text-[11.5px] text-slate-300">
              <button
                onClick={() => onNavigateLegal('privacy')}
                className="hover:text-[#5EEAD4] active:text-[#5EEAD4] transition-colors py-1 cursor-pointer"
              >
                {t.privacy}
              </button>
              <span className="text-slate-600 select-none">•</span>
              <button
                onClick={() => onNavigateLegal('terms')}
                className="hover:text-[#5EEAD4] active:text-[#5EEAD4] transition-colors py-1 cursor-pointer"
              >
                {t.terms}
              </button>
              <span className="text-slate-600 select-none">•</span>
              <button
                onClick={() => onNavigateLegal('cookies')}
                className="hover:text-[#5EEAD4] active:text-[#5EEAD4] transition-colors py-1 cursor-pointer"
              >
                {t.cookies}
              </button>
            </div>

            {/* SECTION 6 — ADMIN PORTAL (Subtle secondary text link) */}
            <div className="pt-1.5 pb-1">
              <a
                href="/admin/dashboard"
                className="inline-flex items-center gap-1.5 text-[11px] text-slate-400 hover:text-[#5EEAD4] transition-colors py-1 px-2.5 rounded-md hover:bg-white/5"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                <span>Admin Portal →</span>
              </a>
            </div>

          </div>

        </div>

        {/* ========================================================
            2. TABLET (768px – 1199px) & DESKTOP (≥ 1200px) LAYOUT
           ======================================================== */}
        <div className="hidden md:block">
          
          {/* Top Grid: Brand on Left, Navigation Columns on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pb-8 lg:pb-10 border-b border-white/10 relative z-10">
            
            {/* LEFT COLUMN: BRAND, DESCRIPTION & SOCIAL MEDIA */}
            <div className="lg:col-span-4 flex flex-col items-start">
              <div className="mb-4">
                <AnimatedLogo
                  variant="footer"
                  trigger="hover"
                  onClick={onNavigateHome}
                  isDark={true}
                />
              </div>

              {/* Short Company Description */}
              <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed mb-6 max-w-sm">
                {isPt 
                  ? 'Equipamentos de TI empresariais recondicionados com garantia, assistência técnica especializada e soluções globais na Trofa, Portugal.' 
                  : 'Certified refurbished enterprise IT hardware, dependable technical diagnostics, and IT lifecycle solutions in Trofa, Portugal.'}
              </p>

              {/* Social / Contact Media Icons Row (5 Icons) */}
              <div className="flex items-center gap-2.5">
                <a
                  href={`https://wa.me/${companyData.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="WhatsApp"
                  aria-label="WhatsApp"
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#0D7E73] text-white flex items-center justify-center transition-all duration-200 hover:scale-110"
                >
                  <WhatsAppIcon className="w-4 h-4 text-[#5EEAD4]" />
                </a>

                <a
                  href={`tel:${companyData.phone.replace(/\s+/g, '')}`} 
                  title="Telefone"
                  aria-label="Telefone"
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#0D7E73] text-white flex items-center justify-center transition-all duration-200 hover:scale-110"
                >
                  <Phone className="w-3.5 h-3.5" />
                </a>

                <a
                  href={`mailto:${companyData.email}`} 
                  title="Email"
                  aria-label="Email"
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#0D7E73] text-white flex items-center justify-center transition-all duration-200 hover:scale-110"
                >
                  <Mail className="w-3.5 h-3.5" />
                </a>

                <button
                  onClick={onNavigateContact}
                  title="Localização"
                  aria-label="Localização"
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#0D7E73] text-white flex items-center justify-center transition-all duration-200 hover:scale-110 cursor-pointer"
                >
                  <MapPin className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={onNavigateHome}
                  title="Website"
                  aria-label="Website"
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#0D7E73] text-white flex items-center justify-center transition-all duration-200 hover:scale-110 cursor-pointer"
                >
                  <Globe className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* RIGHT NAVIGATION COLUMNS (3 Columns) */}
            <div className="lg:col-span-8 grid grid-cols-3 gap-6 lg:gap-8">
              
              {/* Column 1: Explore */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#5EEAD4] mb-4">
                  {isPt ? 'EXPLORAR' : 'EXPLORE'}
                </h4>
                <ul className="space-y-2.5 text-xs sm:text-[13px] text-slate-300">
                  <li>
                    <button 
                      onClick={() => onNavigateProducts ? onNavigateProducts() : onNavigateHome()}
                      className="hover:text-[#5EEAD4] hover:translate-x-0.5 transition-all text-left cursor-pointer"
                    >
                      {isPt ? 'Todos os Produtos' : 'All Products'}
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => onNavigateProducts ? onNavigateProducts('laptops-pcs') : onNavigateHome()}
                      className="hover:text-[#5EEAD4] hover:translate-x-0.5 transition-all text-left cursor-pointer"
                    >
                      {isPt ? 'Laptops & Workstations' : 'Laptops & Workstations'}
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => onNavigateProducts ? onNavigateProducts('servers-storage') : onNavigateHome()}
                      className="hover:text-[#5EEAD4] hover:translate-x-0.5 transition-all text-left cursor-pointer"
                    >
                      {isPt ? 'Servidores & Storage' : 'Servers & Storage'}
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={onNavigateSellEquipment}
                      className="hover:text-[#5EEAD4] hover:translate-x-0.5 transition-all text-left cursor-pointer"
                    >
                      {isPt ? 'Vender Equipamento (ITAD)' : 'Sell Equipment (ITAD)'}
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={onNavigateSolutions}
                      className="hover:text-[#5EEAD4] hover:translate-x-0.5 transition-all text-left cursor-pointer"
                    >
                      {isPt ? 'Soluções Empresariais' : 'Enterprise Solutions'}
                    </button>
                  </li>
                </ul>
              </div>

              {/* Column 2: Company */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#5EEAD4] mb-4">
                  {isPt ? 'EMPRESA' : 'COMPANY'}
                </h4>
                <ul className="space-y-2.5 text-xs sm:text-[13px] text-slate-300">
                  <li>
                    <button 
                      onClick={onNavigateAbout}
                      className="hover:text-[#5EEAD4] hover:translate-x-0.5 transition-all text-left cursor-pointer font-medium"
                    >
                      {isPt ? 'Sobre Nós' : 'About Us'}
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={onNavigateSolutions}
                      className="hover:text-[#5EEAD4] hover:translate-x-0.5 transition-all text-left cursor-pointer"
                    >
                      {isPt ? 'Soluções Empresariais' : 'Enterprise Solutions'}
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={onNavigateContact}
                      className="hover:text-[#5EEAD4] hover:translate-x-0.5 transition-all text-left cursor-pointer"
                    >
                      {isPt ? 'Hub Técnico na Trofa' : 'Trofa Technical Hub'}
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={onRequestQuote}
                      className="hover:text-[#5EEAD4] hover:translate-x-0.5 transition-all text-left cursor-pointer"
                    >
                      {isPt ? 'Pedir Cotação Rápida' : 'Request a Fast Quote'}
                    </button>
                  </li>
                </ul>
              </div>

              {/* Column 3: Support */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#5EEAD4] mb-4">
                  {isPt ? 'SUPORTE' : 'SUPPORT'}
                </h4>
                <ul className="space-y-2.5 text-xs sm:text-[13px] text-slate-300">
                  <li>
                    <button 
                      onClick={onRequestQuote}
                      className="hover:text-[#5EEAD4] hover:translate-x-0.5 transition-all text-left cursor-pointer font-semibold text-teal-300"
                    >
                      {isPt ? 'Pedir Cotação Rápida' : 'Request a Quote'}
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={onNavigateContact}
                      className="hover:text-[#5EEAD4] hover:translate-x-0.5 transition-all text-left cursor-pointer"
                    >
                      {isPt ? 'Contacto Direto' : 'Contact Us'}
                    </button>
                  </li>
                  <li>
                    <a 
                      href={`tel:${companyData.phone.replace(/\s+/g, '')}`} 
                      className="hover:text-[#5EEAD4] hover:translate-x-0.5 transition-all text-left block"
                    >
                      {isPt ? 'Apoio Telefónico' : 'Phone Support'}
                    </a>
                  </li>
                  <li>
                    <button 
                      onClick={onNavigateAbout}
                      className="hover:text-[#5EEAD4] hover:translate-x-0.5 transition-all text-left cursor-pointer"
                    >
                      {isPt ? 'Garantia e Diagnóstico' : 'Warranty & Diagnostics'}
                    </button>
                  </li>
                </ul>
              </div>

            </div>

          </div>

          {/* BOTTOM ROW: COPYRIGHT, LEGAL LINKS & ADMIN PORTAL */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 relative z-10">
            {/* Copyright text */}
            <div className="text-center sm:text-left text-[11px] sm:text-xs">
              © 2026 <strong className="text-white font-bold">{companyData.name}</strong>. {t.rights}
            </div>

            {/* Legal Links & Admin Portal */}
            <div className="flex flex-wrap items-center justify-center gap-4 text-[11px] sm:text-xs">
              <button
                onClick={() => onNavigateLegal('privacy')}
                className="hover:text-[#5EEAD4] transition-colors cursor-pointer"
              >
                {t.privacy}
              </button>
              <span className="text-slate-600">•</span>
              <button
                onClick={() => onNavigateLegal('terms')}
                className="hover:text-[#5EEAD4] transition-colors cursor-pointer"
              >
                {t.terms}
              </button>
              <span className="text-slate-600">•</span>
              <button
                onClick={() => onNavigateLegal('cookies')}
                className="hover:text-[#5EEAD4] transition-colors cursor-pointer"
              >
                {t.cookies}
              </button>
              <span className="text-slate-600">•</span>
              <a
                href="/admin/dashboard"
                className="hover:text-[#5EEAD4] text-slate-400 transition-colors inline-flex items-center gap-1.5"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                <span>Admin Portal</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
};
