import React, { useState } from 'react';
import { ServiceItem, Language } from '../../types';
import { 
  Heart, 
  Eye, 
  FileText, 
  Check, 
  Clock, 
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Zap,
  Wrench,
  Network,
  Server,
  RefreshCw,
  Lock,
  Cpu,
  HardDrive,
  Laptop,
  Wifi,
  Radio,
  FileCode,
  Activity,
  Terminal,
  Layers,
  Flame,
  KeyRound,
  Database,
  Recycle,
  CheckCircle2
} from 'lucide-react';

interface ServiceCardProps {
  service: ServiceItem;
  lang: Language;
  onViewDetails: (slug: string) => void;
  onRequestQuote: (service: ServiceItem) => void;
  viewMode?: 'grid' | 'list';
}

// Technical Custom SVG Icon mapping for each service
const getServiceSvg = (service: ServiceItem) => {
  const slug = service.slug;
  const categoryKey = service.categoryKey || service.category;

  if (slug.includes('diagnostics') || slug.includes('testing')) return Activity;
  if (slug.includes('hardware') || slug.includes('installation') || slug.includes('upgrade')) return Cpu;
  if (slug.includes('os-') || slug.includes('configuration') || slug.includes('windows') || slug.includes('linux')) return Terminal;
  if (slug.includes('remote') || slug.includes('support') || slug.includes('emergency')) return Zap;
  if (slug.includes('cabling') || slug.includes('cable')) return Layers;
  if (slug.includes('switch') || slug.includes('router') || slug.includes('network')) return Network;
  if (slug.includes('wifi') || slug.includes('wireless')) return Wifi;
  if (slug.includes('vpn') || slug.includes('firewall') || slug.includes('cyber') || slug.includes('security')) return ShieldCheck;
  if (slug.includes('antivirus') || slug.includes('threat') || slug.includes('audit')) return Lock;
  if (slug.includes('server') || slug.includes('virtualization')) return Server;
  if (slug.includes('storage') || slug.includes('nas') || slug.includes('backup')) return Database;
  if (slug.includes('data-removal') || slug.includes('destruction') || slug.includes('secure')) return KeyRound;
  if (slug.includes('refurbish') || slug.includes('recycle') || slug.includes('buyback') || slug.includes('liquidation')) return Recycle;

  // Category fallback
  switch (categoryKey) {
    case 'it-support': return Wrench;
    case 'networking-infrastructure':
    case 'networking': return Network;
    case 'cybersecurity': return ShieldCheck;
    case 'servers-storage': return Server;
    case 'asset-recovery': return RefreshCw;
    default: return Cpu;
  }
};

export const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  lang,
  onViewDetails,
  onRequestQuote,
  viewMode = 'grid'
}) => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [justRequested, setJustRequested] = useState(false);
  const isPt = lang === 'pt';

  const title = isPt && service.titlePt ? service.titlePt : service.title;
  const description = isPt && service.shortDescriptionPt ? service.shortDescriptionPt : service.shortDescription;
  
  const categoryLabel = service.categoryLabel 
    ? (isPt ? service.categoryLabel.pt : service.categoryLabel.en)
    : (isPt ? 'Serviço de TI' : 'IT Service');

  const turnaround = service.turnaroundTime 
    ? (isPt ? service.turnaroundTime.pt : service.turnaroundTime.en)
    : (isPt ? 'Disponível Sob Consulta' : 'Available on Request');

  const deliveryModesText = service.deliveryModes && service.deliveryModes.length > 0
    ? service.deliveryModes.join(' • ')
    : (isPt ? 'Presencial & Remoto' : 'On-Site & Remote');

  const IconComponent = getServiceSvg(service);

  const handleCardClick = () => {
    onViewDetails(service.slug);
  };

  const handleQuoteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onRequestQuote(service);
    setJustRequested(true);
    setTimeout(() => setJustRequested(false), 1600);
  };

  const handleBookmarkClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsBookmarked(prev => !prev);
  };

  const handleQuickViewClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onViewDetails(service.slug);
  };

  // Horizontal List View Layout
  if (viewMode === 'list') {
    return (
      <div
        id={`service-row-${service.slug}`}
        onClick={handleCardClick}
        className="group relative flex flex-col md:flex-row bg-white rounded-2xl border border-slate-200/90 hover:border-[#0D7E73] shadow-2xs hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer p-4 sm:p-5 gap-4 sm:gap-6 items-start md:items-center"
      >
        {/* Left SVG Avatar Box */}
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-[#0D7E73] to-[#042F2C] flex items-center justify-center text-white shrink-0 shadow-md group-hover:scale-105 transition-transform">
          <IconComponent className="w-8 h-8 sm:w-10 sm:h-10 stroke-[1.75]" />
        </div>

        {/* Center Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[#F0FDFA] text-[#0D7E73] border border-[#CCFBF1]">
              {service.categoryIndex || '01'}
            </span>
            <span className="text-xs font-mono font-bold text-[#0D7E73] uppercase tracking-wider">
              {categoryLabel}
            </span>
          </div>

          <h3 className="text-base sm:text-lg font-bold text-[#042F2C] group-hover:text-[#0D7E73] transition-colors mb-1">
            {title}
          </h3>
          <p className="text-xs sm:text-sm text-[#64748B] line-clamp-2 leading-relaxed mb-3">
            {description}
          </p>

          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
            <span className="px-2 py-0.5 rounded-md bg-slate-100 font-medium text-slate-700">
              {deliveryModesText}
            </span>
            <span className="flex items-center gap-1 font-medium text-slate-600">
              <Clock className="w-3.5 h-3.5 text-[#0D7E73]" />
              <span>{turnaround}</span>
            </span>
          </div>
        </div>

        {/* Right CTA Area */}
        <div className="w-full md:w-56 shrink-0 flex flex-col justify-between items-stretch md:items-end pt-3 md:pt-0 border-t md:border-t-0 border-slate-100 gap-3">
          <div className="text-left md:text-right">
            <span className="text-sm sm:text-base font-black text-[#042F2C] block">
              {isPt ? 'Cotação Sob Medida' : 'Custom Estimate'}
            </span>
            <span className="text-[11px] text-slate-400 font-medium">(+IVA / B2B)</span>
          </div>

          <button
            type="button"
            onClick={handleQuoteClick}
            className={`w-full py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer shadow-xs ${
              justRequested
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'bg-gradient-to-r from-[#14B8A6] to-[#0D9488] hover:from-[#0B4A42] hover:to-[#0B4A42] text-white hover:shadow-md'
            }`}
          >
            {justRequested ? (
              <>
                <Check className="w-4 h-4" />
                <span>{isPt ? 'Pedido Registado ✓' : 'Requested ✓'}</span>
              </>
            ) : (
              <>
                <FileText className="w-4 h-4" />
                <span>{isPt ? 'Solicitar Cotação' : 'Request Quote'}</span>
              </>
            )}
          </button>
        </div>
      </div>
    );
  }

  // Standard Grid Card (Clean SVG Top Icon + Crisp Typography + Capability Tags)
  return (
    <div
      id={`service-card-${service.slug}`}
      onClick={handleCardClick}
      className="group relative flex flex-col bg-white rounded-2xl border border-slate-200/90 hover:border-[#0D7E73] shadow-2xs hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer h-full"
    >
      {/* 1. TOP HEADER WITH SVG BADGE & ACTIONS */}
      <div className="p-5 pb-3 border-b border-slate-100 flex items-start justify-between bg-gradient-to-br from-slate-50 via-white to-[#F0FDFA]">
        <div className="flex items-center gap-3">
          {/* Custom SVG Icon Container */}
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0D7E73] to-[#042F2C] flex items-center justify-center text-white shadow-sm group-hover:scale-105 group-hover:shadow-md transition-all duration-300">
            <IconComponent className="w-6 h-6 stroke-[1.8]" />
          </div>

          <div>
            <div className="flex items-center gap-1.5">
              <span className="px-1.5 py-0.5 rounded bg-white border border-[#CCFBF1] text-[#0D7E73] text-[10px] font-mono font-bold">
                {service.categoryIndex || '01'}
              </span>
              {service.featured && (
                <span className="px-1.5 py-0.5 rounded bg-amber-50 border border-amber-200 text-amber-700 text-[10px] font-bold flex items-center gap-0.5">
                  <Sparkles className="w-2.5 h-2.5 text-amber-500" />
                  <span>Popular</span>
                </span>
              )}
            </div>
            <span className="text-[11px] font-mono font-bold text-[#0D7E73] uppercase tracking-wider block mt-0.5">
              {categoryLabel}
            </span>
          </div>
        </div>

        {/* Quick Action Icons */}
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={handleBookmarkClick}
            className={`w-7 h-7 rounded-lg flex items-center justify-center border transition-all cursor-pointer ${
              isBookmarked 
                ? 'bg-rose-50 border-rose-200 text-rose-500' 
                : 'bg-white border-slate-200 text-slate-400 hover:text-rose-500 hover:border-rose-200'
            }`}
            title={isPt ? 'Guardar' : 'Save'}
          >
            <Heart className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-rose-500' : ''}`} />
          </button>

          <button
            type="button"
            onClick={handleQuickViewClick}
            className="w-7 h-7 rounded-lg flex items-center justify-center bg-white border border-slate-200 text-slate-400 hover:text-[#0D7E73] hover:border-[#CCFBF1] transition-all cursor-pointer"
            title={isPt ? 'Ver Detalhes' : 'View Details'}
          >
            <Eye className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* 2. BODY CONTENT */}
      <div className="flex-1 flex flex-col p-5 justify-between">
        <div>
          {/* Service Title */}
          <h3
            className="text-base font-bold text-[#042F2C] group-hover:text-[#0D7E73] transition-colors line-clamp-2 mb-2 leading-snug min-h-[2.75rem]"
            title={title}
          >
            {title}
          </h3>

          {/* Short Description */}
          <p className="text-xs text-[#64748B] line-clamp-3 leading-relaxed mb-4">
            {description}
          </p>

          {/* Key Capabilities / Deliverables Checklist */}
          {service.capabilities && service.capabilities.length > 0 && (
            <div className="space-y-1.5 mb-4 pt-2 border-t border-slate-100">
              {service.capabilities.slice(0, 3).map((cap, i) => (
                <div key={i} className="flex items-center gap-1.5 text-[11px] text-slate-600">
                  <CheckCircle2 className="w-3 h-3 text-[#0D7E73] shrink-0" />
                  <span className="truncate">{cap}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        <div>
          {/* Delivery & SLA Pill Bar */}
          <div className="flex items-center justify-between py-2 border-t border-slate-100 text-[11px] text-slate-500 mb-3">
            <span className="px-2 py-0.5 rounded bg-slate-100 font-medium text-slate-700 truncate max-w-[140px]">
              {deliveryModesText}
            </span>
            <div className="flex items-center gap-1 font-medium text-[#042F2C] shrink-0">
              <Clock className="w-3 h-3 text-[#0D7E73]" />
              <span>{turnaround}</span>
            </div>
          </div>

          {/* 3. PRIMARY ACTION BUTTON */}
          <button
            type="button"
            id={`btn-service-quote-${service.slug}`}
            onClick={handleQuoteClick}
            className={`w-full py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer shadow-xs ${
              justRequested
                ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm'
                : 'bg-gradient-to-r from-[#14B8A6] to-[#0D9488] hover:from-[#0B4A42] hover:to-[#0B4A42] text-white hover:shadow-md'
            }`}
          >
            {justRequested ? (
              <>
                <Check className="w-4 h-4" />
                <span>{isPt ? 'Pedido Registado ✓' : 'Quote Requested ✓'}</span>
              </>
            ) : (
              <>
                <FileText className="w-4 h-4" />
                <span>{isPt ? 'Solicitar Cotação' : 'Request a Quote'}</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
