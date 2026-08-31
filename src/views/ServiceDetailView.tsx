import React, { useMemo } from 'react';
import { Language, ServiceItem } from '../types';
import { allServicesData, serviceCategoriesList } from '../data/services';
import { companyData } from '../data/company';
import { megaMenuServicesPagesData } from '../data/megaMenuServicesContent';
import { ActionPrimaryButton } from '../components/ui/AnimatedButtons';
import { 
  ArrowLeft, 
  Check, 
  FileText, 
  MessageSquare, 
  ShieldCheck, 
  ArrowRight, 
  Clock, 
  ChevronRight, 
  Home, 
  Layers, 
  Wrench, 
  Cpu, 
  Sparkles, 
  Search, 
  Zap, 
  Laptop, 
  HardDrive, 
  Headphones, 
  Activity, 
  Network, 
  Server, 
  CheckCircle2 
} from 'lucide-react';
import { ServicesCategorySlider, getServiceIcon } from '../components/services/ServicesCategorySlider';

interface ServiceDetailViewProps {
  slug: string;
  lang: Language;
  onBack: () => void;
  onRequestQuote: (service?: ServiceItem) => void;
  onNavigateServiceDetail?: (slug: string) => void;
}

export const ServiceDetailView: React.FC<ServiceDetailViewProps> = ({
  slug,
  lang,
  onBack,
  onRequestQuote,
  onNavigateServiceDetail
}) => {
  const isPt = lang === 'pt';
  
  // Find current service item from legacy/main dataset or fallback
  const service = allServicesData.find(s => s.slug === slug) || allServicesData[0];
  
  // Get tailored rich mega menu content if available
  const megaMenuData = megaMenuServicesPagesData[slug] || megaMenuServicesPagesData['hardware-diagnostics-repair'];

  const title = isPt && service.titlePt ? service.titlePt : service.title;
  const description = isPt && service.fullDescriptionPt ? service.fullDescriptionPt : (service.fullDescription || service.shortDescription);
  const turnaround = service.turnaroundTime ? (isPt ? service.turnaroundTime.pt : service.turnaroundTime.en) : (isPt ? 'Sob Consulta' : 'Upon Request');
  const categoryLabel = service.categoryLabel ? (isPt ? service.categoryLabel.pt : service.categoryLabel.en) : service.category;

  const whatsappInquiryUrl = `https://wa.me/${companyData.whatsappNumber}?text=${encodeURIComponent(
    isPt 
      ? `Olá Algoritmica Mania, gostaria de obter mais informações sobre o serviço de ${title}.`
      : `Hello Algoritmica Mania, I would like to inquire about the service: ${title}.`
  )}`;

  const handleSliderSelect = (targetSlug: string) => {
    if (onNavigateServiceDetail) {
      onNavigateServiceDetail(targetSlug);
    }
  };

  const handleCardClick = (cardSlug: string) => {
    // If card has its own slug or triggers quote
    const targetService = allServicesData.find(s => s.slug === cardSlug) || service;
    onRequestQuote(targetService);
  };

  return (
    <div className="w-full bg-[#F8FAFC] min-h-screen py-6 sm:py-10 text-[#042F2C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* 🧭 1. Top Breadcrumbs & Back Navigation */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <nav className="flex items-center gap-2 text-xs text-slate-500" aria-label="Breadcrumb">
            <button 
              type="button"
              onClick={onBack}
              className="flex items-center gap-1 hover:text-[#0D7E73] transition-colors cursor-pointer"
            >
              <Home className="w-3.5 h-3.5 text-slate-400" />
              <span>{isPt ? 'Serviços' : 'Services'}</span>
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
            <span className="text-slate-500 font-medium">{categoryLabel}</span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
            <span className="font-semibold text-[#042F2C] truncate max-w-xs">{title}</span>
          </nav>

          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-bold text-[#042F2C] bg-white border border-slate-200 hover:border-[#0D7E73] hover:text-[#0D7E73] transition-all cursor-pointer shadow-2xs"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>{isPt ? 'Todos os Serviços' : 'All Services'}</span>
          </button>
        </div>

        {/* 🌟 2. AUTO-SCROLLING TECHNICAL SERVICES SLIDER (No arrows, smooth blur edges) */}
        <ServicesCategorySlider
          lang={lang}
          currentActiveSlug={slug}
          onSelectService={handleSliderSelect}
          title={isPt ? `Serviços Técnicos e Especialidades de TI` : `Technical IT Services & Specialties`}
        />

        {/* 🎯 3. CENTERED MID-HEADING SECTION (As requested by User) */}
        <div className="text-center max-w-3xl mx-auto pt-2">
          {/* Header with teal line and dots accent: --•-- Title --•-- */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 mb-3">
            <div className="flex items-center gap-1.5">
              <div className="w-8 sm:w-14 h-0.5 bg-[#14B8A6]/60 rounded-full" />
              <div className="w-2 h-2 rounded-full bg-[#0D7E73]" />
              <div className="w-1 h-1 rounded-full bg-[#14B8A6]/60" />
            </div>

            <span className="text-xs sm:text-sm font-mono font-extrabold text-[#0D7E73] tracking-widest uppercase">
              {isPt ? megaMenuData.categoryBadgePt : megaMenuData.categoryBadgeEn}
            </span>

            <div className="flex items-center gap-1.5">
              <div className="w-1 h-1 rounded-full bg-[#14B8A6]/60" />
              <div className="w-2 h-2 rounded-full bg-[#0D7E73]" />
              <div className="w-8 sm:w-14 h-0.5 bg-[#14B8A6]/60 rounded-full" />
            </div>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#042F2C] tracking-tight leading-tight mb-3">
            {isPt ? megaMenuData.headerTitlePt : megaMenuData.headerTitleEn}
          </h1>

          <p className="text-xs sm:text-sm md:text-base text-[#64748B] leading-relaxed max-w-2xl mx-auto">
            {isPt ? megaMenuData.headerDescPt : megaMenuData.headerDescEn}
          </p>
        </div>

        {/* 📦 4. 6 RELATED SERVICES CARDS (MATCHING IMAGE 2 EXACT DESIGN WITH RIGHT-SIDE PHOTO) */}
        <div className="space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-slate-200">
            <span className="text-xs font-bold text-[#0D7E73] uppercase tracking-wider">
              {isPt ? 'Serviços Especializados Disponíveis' : 'Available Specialized Services'}
            </span>
            <span className="text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
              {isPt ? megaMenuData.cardsCountTextPt : megaMenuData.cardsCountTextEn}
            </span>
          </div>

          {/* Cards Grid: 3-column on large screens, 2-column on tablets, 1 on mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {megaMenuData.cards.map((card) => {
              const CardIcon = getServiceIcon(card.iconName);
              const cardTitle = isPt ? card.titlePt : card.titleEn;
              const cardDesc = isPt ? card.descPt : card.descEn;
              const cardTurnaround = isPt ? card.turnaroundPt : card.turnaroundEn;

              return (
                <div
                  key={card.id}
                  onClick={() => handleCardClick(card.slug)}
                  className="bg-white rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-row items-stretch group cursor-pointer hover:border-[#0D7E73] hover:-translate-y-1"
                >
                  {/* Left Column: Icon + Title + Description + "Learn More" link */}
                  <div className="flex-1 p-5 sm:p-6 flex flex-col justify-between min-w-0">
                    <div>
                      {/* Circular Blue/Teal Icon (Matching Image 2) */}
                      <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#0D7E73] text-white flex items-center justify-center mb-3.5 shadow-xs group-hover:scale-110 group-hover:bg-[#0B4A42] transition-all duration-300 shrink-0">
                        <CardIcon className="w-5 h-5 sm:w-5.5 sm:h-5.5 stroke-[2.2]" />
                      </div>

                      {/* Service Title */}
                      <h3 className="text-sm sm:text-base font-bold text-[#042F2C] group-hover:text-[#0D7E73] transition-colors leading-snug mb-2">
                        {cardTitle}
                      </h3>

                      {/* Short Description */}
                      <p className="text-xs text-slate-500 leading-relaxed line-clamp-3 mb-4">
                        {cardDesc}
                      </p>
                    </div>

                    {/* Learn More Link (Matching Image 2) */}
                    <div className="pt-2 flex items-center justify-between">
                      <span className="text-xs font-bold text-[#0D7E73] group-hover:text-[#042F2C] flex items-center gap-1.5 transition-colors">
                        <span>{isPt ? 'Saber Mais' : 'Learn More'}</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </span>

                      {cardTurnaround && (
                        <span className="text-[10px] font-semibold text-slate-400">
                          {cardTurnaround}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Right Column: Image with Curved Inset Separator (Matching Image 2) */}
                  <div className="w-32 sm:w-36 md:w-32 lg:w-36 shrink-0 relative overflow-hidden bg-slate-100">
                    <img
                      src={card.image}
                      alt={cardTitle}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                    />
                    {/* Subtle curved inner shadow & blend */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-transparent pointer-events-none" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 🌟 5. DEDICATED 2-COLUMN SPOTLIGHT SECTION (As requested by User: Image + Heading + Paragraph + Button) */}
        <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-10 shadow-xs relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#CCFBF1]/20 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left Column (5 Cols): Large High-Quality Photo of this Service */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200/90 shadow-md aspect-4/3 sm:aspect-16/10 lg:aspect-4/3 group">
                <img
                  src={megaMenuData.spotlight.image}
                  alt={megaMenuData.spotlight.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent pointer-events-none" />
                
                {/* Floating Lab Badge */}
                {megaMenuData.spotlight.imageBadgePt && (
                  <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-sm px-3.5 py-2 rounded-xl border border-white/40 shadow-sm flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#0D7E73] shrink-0" />
                    <span className="text-[11px] font-bold text-[#042F2C] truncate">
                      {isPt ? megaMenuData.spotlight.imageBadgePt : megaMenuData.spotlight.imageBadgeEn}
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Right Column (7 Cols): Heading, 3-Line Paragraph, Bullet Points & CTA Button */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-5">
              <div>
                <span className="text-[11px] font-mono font-bold text-[#0D7E73] uppercase tracking-wider block mb-1.5">
                  {isPt ? megaMenuData.spotlight.badgePt : megaMenuData.spotlight.badgeEn}
                </span>

                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-[#042F2C] tracking-tight leading-snug mb-3">
                  {isPt ? megaMenuData.spotlight.titlePt : megaMenuData.spotlight.titleEn}
                </h2>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                  {isPt ? megaMenuData.spotlight.paragraphPt : megaMenuData.spotlight.paragraphEn}
                </p>

                {/* 4 Feature Checkpoints */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
                  {(isPt ? megaMenuData.spotlight.featuresPt : megaMenuData.spotlight.featuresEn).map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                      <div className="w-4 h-4 rounded-full bg-[#E6FAF7] text-[#0D7E73] flex items-center justify-center shrink-0 mt-0.5 border border-[#CCFBF1]">
                        <Check className="w-3 h-3 stroke-[2.5]" />
                      </div>
                      <span className="leading-tight">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons & SLA Indicator */}
              <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-3">
                  <ActionPrimaryButton
                    type="button"
                    onClick={() => onRequestQuote(service)}
                    size="md"
                  >
                    <span>{isPt ? megaMenuData.spotlight.ctaTextPt : megaMenuData.spotlight.ctaTextEn}</span>
                  </ActionPrimaryButton>

                  <a
                    href={whatsappInquiryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-bold text-[#0D7E73] bg-[#F0FDFA] hover:bg-[#CCFBF1] border border-[#CCFBF1] transition-colors cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>{isPt ? 'Tirar Dúvidas no WhatsApp' : 'Inquire via WhatsApp'}</span>
                  </a>
                </div>

                <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                  <Clock className="w-4 h-4 text-[#0D7E73]" />
                  <span>{isPt ? 'Prazo de Resposta:' : 'Turnaround SLA:'} <strong className="text-slate-800">{turnaround}</strong></span>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

