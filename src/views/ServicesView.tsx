import React, { useState, useEffect } from 'react';
import { Language, ServiceCategoryKey, ServiceItem } from '../types';
import { translations } from '../data/translations';
import { ActionPrimaryButton } from '../components/ui/AnimatedButtons';
import { 
  ShieldCheck, 
  Clock, 
  Check, 
  ArrowRight,
  Headphones,
  Wrench,
  Network,
  Server,
  PhoneCall,
  Sparkles,
  Award,
  ChevronRight,
  ChevronLeft,
  Home,
  FileText,
  Shield,
  RefreshCw
} from 'lucide-react';
import { companyData } from '../data/company';

// Real service imagery from assets
import managedItImg from '../assets/images/managed_it_engineer_1787655469398.jpg';
import networkImg from '../assets/images/cisco_ubiquiti_stack_1787659471362.jpg';
import serverImg from '../assets/images/dell_servers_stack_1787659449428.jpg';
import cyberImg from '../assets/images/fortinet_sophos_stack_1787659488619.jpg';
import labImg from '../assets/images/it_hardware_cluster_exact_1787648918013.jpg';
import enterpriseSolutionsImg from '../assets/images/enterprise_hardware_cluster_banner_1787658404274.jpg';

interface ServiceHeroSlide {
  id: string;
  categoryKey: ServiceCategoryKey;
  image: string;
  tag: { en: string; pt: string };
  title: { en: string; pt: string };
  highlight: { en: string; pt: string };
  description: { en: string; pt: string };
  badge: { en: string; pt: string };
}

const heroSlides: ServiceHeroSlide[] = [
  {
    id: 'it-support',
    categoryKey: 'it-support',
    image: managedItImg,
    tag: {
      en: '01 / DESKTOPS, LAPTOPS & HELPDESK',
      pt: '01 / SUPORTE, PORTÁTEIS & HELPDESK'
    },
    title: {
      en: 'We Provide Certified Quality',
      pt: 'Fornecemos Serviços de Suporte e'
    },
    highlight: {
      en: 'IT Support & Fast Diagnostics',
      pt: 'Assistência Técnica de Alta Confiança'
    },
    description: {
      en: 'From on-site engineer dispatch in Greater Porto to instant remote troubleshooting and component-level repairs with verified genuine parts.',
      pt: 'Desde assistência no local no Grande Porto a suporte remoto imediato e reparação de componentes com peças originais e garantia.'
    },
    badge: { en: 'Same-Day SLA Response', pt: 'Resposta SLA no Mesmo Dia' }
  },
  {
    id: 'networking-infrastructure',
    categoryKey: 'networking-infrastructure',
    image: networkImg,
    tag: {
      en: '02 / STRUCTURED CABLING & WI-FI 6',
      pt: '02 / CABLAGEM ESTRUTURADA & WI-FI 6'
    },
    title: {
      en: 'High-Performance Structured',
      pt: 'Instalação e Certificação de'
    },
    highlight: {
      en: '10GbE Network Infrastructure',
      pt: 'Redes & Cablagem Estruturada 10GbE'
    },
    description: {
      en: 'Design, installation, and deployment of Cat6A/Cat7 copper and fiber cabling, Cisco/Ubiquiti switches, and seamless enterprise Wi-Fi mesh.',
      pt: 'Projeto, instalação e certificação de cablagem Cat6A/Cat7 e fibra ótica, switches Cisco/Ubiquiti e redes Wi-Fi empresariais.'
    },
    badge: { en: 'Fluke Tested & Certified', pt: 'Certificação com Analisador Fluke' }
  },
  {
    id: 'servers-storage',
    categoryKey: 'servers-storage',
    image: serverImg,
    tag: {
      en: '03 / DELL & HPE POWEREDGE SERVERS',
      pt: '03 / SERVIDORES DELL, HPE & STORAGE'
    },
    title: {
      en: 'Robust Infrastructure with',
      pt: 'Infraestrutura Robusta com'
    },
    highlight: {
      en: 'Dedicated Servers & NAS Storage',
      pt: 'Servidores Dedicados & Backups'
    },
    description: {
      en: 'Rack server deployment, RAID disk array configurations, Synology/QNAP NAS storage, and automated immutable off-site backup workflows.',
      pt: 'Instalação de servidores rack, configuração de matrizes RAID, storage NAS Synology/QNAP e rotinas automáticas de backup seguro.'
    },
    badge: { en: 'RAID & Virtualization Ready', pt: 'Pronto para RAID & Virtualização' }
  },
  {
    id: 'cybersecurity',
    categoryKey: 'cybersecurity',
    image: cyberImg,
    tag: {
      en: '04 / FIREWALL & THREAT DEFENSE',
      pt: '04 / FIREWALL & DEFESA DE AMEAÇAS'
    },
    title: {
      en: 'Comprehensive Enterprise',
      pt: 'Proteção Integral com'
    },
    highlight: {
      en: 'Cybersecurity & UTM Firewalls',
      pt: 'Cibersegurança & Firewalls UTM'
    },
    description: {
      en: 'Fortinet FortiGate & Sophos XGS deployment, VPN tunnels, endpoint EDR defense, and ISO 27001 vulnerability assessments.',
      pt: 'Implementação de Fortinet FortiGate, Sophos XGS, túneis VPN seguros, proteção EDR de postos e auditorias de vulnerabilidades.'
    },
    badge: { en: 'Active Threat Guard', pt: 'Proteção Ativa contra Ameaças' }
  },
  {
    id: 'asset-recovery',
    categoryKey: 'asset-recovery',
    image: labImg,
    tag: {
      en: '05 / LAB TESTING & SANITIZATION',
      pt: '05 / LABORATÓRIO & DESTRUIÇÃO NIST'
    },
    title: {
      en: 'Advanced Testing Facility &',
      pt: 'Laboratório Técnico Avançado &'
    },
    highlight: {
      en: 'NIST 800-88 Data Sanitization',
      pt: 'Destruição Certificada NIST 800-88'
    },
    description: {
      en: 'Certified erasure with tamper-proof certificates, board-level micro-soldering, thermal stress testing, and IT equipment lifecycle management.',
      pt: 'Eliminação segura de dados com certificados oficiais, microssoldadura, testes de stress térmico e gestão do ciclo de vida TI.'
    },
    badge: { en: 'NIST & GDPR Compliant', pt: 'Conformidade NIST & RGPD' }
  }
];

// 6 Offer Categories for "What We Offer" section
interface OfferCategory {
  id: ServiceCategoryKey;
  slug: string;
  index: string;
  title: { en: string; pt: string };
  badge: { en: string; pt: string };
  shortDescription: { en: string; pt: string };
  image: string;
  icon: React.ComponentType<{ className?: string }>;
}

const offerCategoriesData: OfferCategory[] = [
  {
    id: 'it-support',
    slug: 'hardware-diagnostics-repair',
    index: '01',
    title: {
      en: 'IT Support & Technical Services',
      pt: 'Suporte Informático & Assistência'
    },
    badge: { en: 'Desktops, Laptops & Helpdesk', pt: 'Desktops, Portáteis & Suporte' },
    shortDescription: {
      en: 'Hardware diagnostics, motherboard repairs, and fast on-site or remote assistance.',
      pt: 'Diagnósticos rigorosos, reparação de componentes e suporte técnico no local ou remoto.'
    },
    image: managedItImg,
    icon: Wrench
  },
  {
    id: 'networking-infrastructure',
    slug: 'network-installation',
    index: '02',
    title: {
      en: 'Network & Infrastructure Services',
      pt: 'Serviços de Rede & Infraestrutura'
    },
    badge: { en: 'Wi-Fi, Switching & Routing', pt: 'Wi-Fi, Switches & Routers' },
    shortDescription: {
      en: '10GbE Cat6A/fiber structured cabling, Wi-Fi 6 mesh, and switch configuration.',
      pt: 'Cablagem estruturada Cat6A/fibra 10GbE, Wi-Fi 6 e configuração de switches e VLANs.'
    },
    image: networkImg,
    icon: Network
  },
  {
    id: 'cybersecurity',
    slug: 'network-security',
    index: '03',
    title: {
      en: 'Cybersecurity & Firewalls',
      pt: 'Cibersegurança & Firewalls'
    },
    badge: { en: 'Threat Defense & Audits', pt: 'Proteção & Auditorias' },
    shortDescription: {
      en: 'Fortinet and Sophos firewalls, site-to-site VPNs, and RGPD compliance audits.',
      pt: 'Firewalls Fortinet e Sophos, túneis VPN seguros e auditorias de conformidade.'
    },
    image: cyberImg,
    icon: ShieldCheck
  },
  {
    id: 'servers-storage',
    slug: 'server-installation',
    index: '04',
    title: {
      en: 'Server & Storage Solutions',
      pt: 'Servidores & Armazenamento'
    },
    badge: { en: 'Rack, NAS & Virtualization', pt: 'Rack, NAS & Virtualização' },
    shortDescription: {
      en: 'Dell PowerEdge and HPE servers, Synology NAS, and automated backup routines.',
      pt: 'Servidores Dell e HPE, storage NAS Synology e rotinas automáticas de backup.'
    },
    image: serverImg,
    icon: Server
  },
  {
    id: 'asset-recovery',
    slug: 'secure-data-wiping',
    index: '05',
    title: {
      en: 'Data Sanitization & NIST Erasure',
      pt: 'Destruição Certificada NIST'
    },
    badge: { en: 'NIST SP 800-88 & GDPR', pt: 'Conformidade NIST & RGPD' },
    shortDescription: {
      en: 'Certified cryptographic data erasure for NVMe, SSD, and HDDs with audit reports.',
      pt: 'Eliminação criptográfica certificada para SSDs, NVMes e discos com certificados oficiais.'
    },
    image: labImg,
    icon: Shield
  },
  {
    id: 'asset-recovery',
    slug: 'it-equipment-buyback',
    index: '06',
    title: {
      en: 'IT Asset Recovery & Buyback',
      pt: 'Retoma de Equipamento & ITAD'
    },
    badge: { en: 'Corporate Fleet Buyback', pt: 'Retoma & Valorização de Frotas' },
    shortDescription: {
      en: 'Corporate IT equipment buyback, transparent valuation, and sustainable ITAD disposition.',
      pt: 'Compra de frotas informáticas usadas, avaliação rápida e valorização de ativos TI.'
    },
    image: enterpriseSolutionsImg,
    icon: RefreshCw
  }
];

interface ServicesViewProps {
  lang: Language;
  onNavigateServiceDetail: (slug: string) => void;
  onRequestQuote: (service?: ServiceItem) => void;
}

export const ServicesView: React.FC<ServicesViewProps> = ({
  lang,
  onNavigateServiceDetail,
  onRequestQuote
}) => {
  const isPt = lang === 'pt';
  const t = translations[lang];

  // Background Carousel State
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);

  // Auto-play timer for background carousel with smooth continuous rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentSlide = heroSlides[currentSlideIndex];

  return (
    <div className="w-full bg-[#F8FAFC] min-h-screen text-[#042F2C]">
      
      {/* 🧭 Breadcrumbs */}
      <div className="bg-white border-b border-slate-200/80 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-slate-500" aria-label="Breadcrumb">
            <span className="flex items-center gap-1 text-slate-700 font-medium">
              <Home className="w-3.5 h-3.5 text-slate-400" />
              <span>{isPt ? 'Início' : 'Home'}</span>
            </span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
            <span className="font-semibold text-[#0D7E73]">{isPt ? 'Serviços de TI' : 'IT Services'}</span>
          </nav>
        </div>
      </div>

      {/* 1. SERVICES HERO SECTION WITH LIGHT CLEAN PREMIUM BACKGROUND & AUTOMATIC CAROUSEL */}
      <section 
        className="relative bg-gradient-to-b from-[#F0FDFA]/90 via-white to-[#F8FAFC] text-[#042F2C] overflow-hidden py-12 sm:py-16 lg:py-20 border-b border-slate-200/80"
      >
        {/* Background Image Carousel with Crisp Visibility */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {heroSlides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentSlideIndex ? 'opacity-85' : 'opacity-0 pointer-events-none'
              }`}
            >
              <img
                src={slide.image}
                alt={isPt ? slide.highlight.pt : slide.highlight.en}
                className="w-full h-full object-cover object-right sm:object-center transform scale-105 transition-transform duration-10000 ease-linear"
              />
            </div>
          ))}

          {/* Left-to-right soft fade gradient: keeps left text 100% crisp & readable while revealing full vivid image on the right */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#F8FAFC] via-[#F8FAFC]/85 sm:via-[#F8FAFC]/65 to-transparent z-10" />
          
          {/* Subtle brand grid pattern overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(#0D7E73_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none z-10" />
        </div>

        {/* Hero Content Container */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl lg:max-w-3xl">
            
            {/* Live Category Tag & Badge */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0D7E73] text-white text-xs font-mono font-bold tracking-wider uppercase shadow-2xs">
                <Sparkles className="w-3.5 h-3.5" />
                {isPt ? currentSlide.tag.pt : currentSlide.tag.en}
              </span>
              <span className="px-3 py-1 rounded-full bg-white border border-[#CCFBF1] text-[#0D7E73] text-xs font-semibold shadow-2xs">
                {isPt ? currentSlide.badge.pt : currentSlide.badge.en}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-black text-[#042F2C] tracking-tight leading-[1.15] mb-4">
              {isPt ? currentSlide.title.pt : currentSlide.title.en}{' '}
              <span className="text-[#0D7E73] block sm:inline">
                {isPt ? currentSlide.highlight.pt : currentSlide.highlight.en}
              </span>
            </h1>

            {/* Subheading Description */}
            <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed mb-8 max-w-2xl font-normal">
              {isPt ? currentSlide.description.pt : currentSlide.description.en}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <ActionPrimaryButton
                type="button"
                onClick={() => onRequestQuote()}
                size="md"
              >
                <span>{isPt ? 'Solicitar Orçamento' : 'Request B2B Quote'}</span>
              </ActionPrimaryButton>

              <a
                href={`tel:${companyData.phone.replace(/\s+/g, '')}`}
                className="px-6 py-2.5 sm:py-3 rounded-full bg-white hover:bg-slate-50 text-[#0D7E73] font-bold text-sm border border-[#CCFBF1] shadow-2xs transition-all duration-200 flex items-center gap-2 cursor-pointer"
              >
                <PhoneCall className="w-4 h-4 text-[#0D7E73]" />
                <span>{companyData.phone}</span>
              </a>
            </div>

            {/* Slide Progress Dot Indicators */}
            <div className="flex items-center gap-2 pt-8 sm:pt-10">
              {heroSlides.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setCurrentSlideIndex(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    idx === currentSlideIndex 
                      ? 'w-8 bg-[#0D7E73]' 
                      : 'w-2 bg-slate-300 hover:bg-slate-400'
                  }`}
                />
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 2. VALUE PROPOSITION / TRUST CARDS (4 Columns) */}
      <section className="relative z-20 -mt-6 sm:-mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          
          <div className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow flex items-start gap-4">
            <div className="w-11 h-11 rounded-xl bg-[#F0FDFA] border border-[#CCFBF1] text-[#0D7E73] flex items-center justify-center shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-sm font-bold text-[#042F2C]">
                {isPt ? 'Qualidade & Certificação' : 'Quality & Certified Service'}
              </h2>
              <p className="text-xs text-[#64748B] mt-1 leading-relaxed">
                {isPt ? 'Técnicos certificados multimarca e componentes originais.' : 'Certified multi-vendor engineers with genuine OEM replacement parts.'}
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow flex items-start gap-4">
            <div className="w-11 h-11 rounded-xl bg-[#F0FDFA] border border-[#CCFBF1] text-[#0D7E73] flex items-center justify-center shrink-0">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-sm font-bold text-[#042F2C]">
                {isPt ? 'Rapidez & Agendamento' : 'Fast Response & Booking'}
              </h2>
              <p className="text-xs text-[#64748B] mt-1 leading-relaxed">
                {isPt ? 'Resposta técnica no próprio dia e SLAs para empresas.' : 'Same-day on-site response and strict SLA contracts for businesses.'}
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow flex items-start gap-4">
            <div className="w-11 h-11 rounded-xl bg-[#F0FDFA] border border-[#CCFBF1] text-[#0D7E73] flex items-center justify-center shrink-0">
              <Wrench className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-sm font-bold text-[#042F2C]">
                {isPt ? 'Laboratório Avançado' : 'Advanced Technical Lab'}
              </h2>
              <p className="text-xs text-[#64748B] mt-1 leading-relaxed">
                {isPt ? 'Diagnóstico elétrico, microssoldadura e bancadas de teste.' : 'Clean lab testing, micro-soldering, and thermal diagnostic suites.'}
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow flex items-start gap-4">
            <div className="w-11 h-11 rounded-xl bg-[#F0FDFA] border border-[#CCFBF1] text-[#0D7E73] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-sm font-bold text-[#042F2C]">
                {isPt ? 'Preços Claros & Fatura B2B' : 'Transparent B2B Pricing'}
              </h2>
              <p className="text-xs text-[#64748B] mt-1 leading-relaxed">
                {isPt ? 'Orçamentos transparentes sem surpresas com garantia.' : 'Itemized upfront quotations with written service warranties.'}
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 3. WHAT WE OFFER SECTION (6 Category Cards with Cyan / Teal Badges and "Read More" button) */}
      <section className="py-14 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-10">
          
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-mono font-bold text-[#0D7E73] uppercase tracking-widest block mb-1">
              {isPt ? 'O QUE OFERECEMOS' : 'WHAT WE OFFER'}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#042F2C] tracking-tight">
              {isPt ? (
                <>
                  Soluções de TI Especializadas para <span className="text-[#0D7E73]">Empresas</span>
                </>
              ) : (
                <>
                  Specialized IT Solutions for <span className="text-[#0D7E73]">Businesses</span>
                </>
              )}
            </h2>
            <div className="w-16 h-1 bg-[#0D7E73] mx-auto mt-2.5 rounded-full" />
            <p className="text-xs sm:text-sm text-[#64748B] mt-3">
              {isPt 
                ? 'Conheça as nossas 6 principais divisões técnicas com profissionais qualificados e cobertura em todo o território nacional.' 
                : 'Explore our 6 core technical divisions delivered by certified engineers with nationwide on-site and remote coverage.'}
            </p>
          </div>

          {/* 6 Category Cards Grid (3 Columns x 2 Rows) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {offerCategoriesData.map((cat) => {
              const Icon = cat.icon;
              return (
                <div
                  key={cat.index}
                  className="group bg-white rounded-3xl border border-slate-200/90 hover:border-[#0D7E73] shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between"
                >
                  {/* Card Image Banner */}
                  <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-100">
                    <img 
                      src={cat.image} 
                      alt={isPt ? cat.title.pt : cat.title.en} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent pointer-events-none" />
                    
                    {/* Sleek Floating Cyan / Teal Rounded Icon Badge - Fitted cleanly inside bottom right */}
                    <div className="absolute bottom-3 right-3 sm:bottom-3.5 sm:right-3.5 w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-[#06B6D4] to-[#0D7E73] text-white flex items-center justify-center shadow-md border-2 border-white transform group-hover:scale-105 transition-transform duration-300">
                      <Icon className="w-5 h-5 sm:w-5.5 sm:h-5.5 stroke-[2]" />
                    </div>
                  </div>

                  {/* Card Content Body */}
                  <div className="p-6 sm:p-7 pt-7 flex flex-col justify-between flex-1">
                    <div>
                      <div className="text-[11px] font-mono font-bold text-[#06B6D4] uppercase tracking-wider mb-1">
                        {cat.index} / {isPt ? cat.badge.pt : cat.badge.en}
                      </div>
                      <h3 className="text-base sm:text-lg font-extrabold text-[#042F2C] mb-2 leading-snug group-hover:text-[#0D7E73] transition-colors min-h-[48px] sm:min-h-[52px]">
                        {isPt ? cat.title.pt : cat.title.en}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-5 min-h-[40px] line-clamp-2">
                        {isPt ? cat.shortDescription.pt : cat.shortDescription.en}
                      </p>
                    </div>

                    {/* Action Button: Directly opens the matching service detail */}
                    <div>
                      <ActionPrimaryButton
                        type="button"
                        onClick={() => onNavigateServiceDetail(cat.slug)}
                        size="sm"
                      >
                        {isPt ? 'Ver Detalhes' : 'Read More'}
                      </ActionPrimaryButton>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. ABOUT OUR IT SERVICES SECTION (Light theme with crisp framed photo & badge) */}
      <section className="py-14 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Layered Image & Experience Badge */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Decorative Geometric Background Offsets */}
              <div className="absolute -top-4 -left-4 w-full h-full rounded-3xl bg-[#F0FDFA] border border-[#CCFBF1] -z-10 transform -rotate-1 shadow-2xs" />
              <div className="absolute -bottom-4 -right-4 w-full h-full rounded-3xl bg-slate-100/80 -z-20 transform rotate-1" />

              {/* Main Photo Frame */}
              <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-slate-100 aspect-4/3 sm:aspect-16/11">
                <img
                  src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80"
                  alt="Certified IT Specialists"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Overlapping Floating Experience Badge (Light theme) */}
              <div className="absolute -bottom-6 -left-4 sm:left-6 bg-white text-[#042F2C] p-4 sm:p-5 rounded-2xl shadow-xl border-2 border-[#CCFBF1] flex items-center gap-3.5 max-w-[260px] sm:max-w-[290px]">
                <div className="w-12 h-12 rounded-xl bg-[#F0FDFA] border border-[#CCFBF1] flex items-center justify-center shrink-0 text-[#0D7E73]">
                  <Award className="w-7 h-7" />
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-black text-[#0D7E73] leading-none mb-0.5">
                    10+ {isPt ? 'Anos' : 'Years'}
                  </div>
                  <div className="text-xs font-bold text-slate-800 leading-tight">
                    {isPt ? 'Excelência Técnica & Suporte TI' : 'Quality IT Support & Lab Testing'}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Text Content & Checkpoints */}
          <div className="lg:col-span-6 space-y-6 pt-4 lg:pt-0">
            <div>
              <span className="text-xs font-mono font-bold text-[#0D7E73] uppercase tracking-widest block mb-2">
                {isPt ? 'SOBRE OS NOSSOS SERVIÇOS' : 'ABOUT OUR IT SERVICES'}
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#042F2C] tracking-tight leading-tight">
                {isPt ? (
                  <>
                    Suporte Técnico de Qualidade e <span className="text-[#0D7E73]">Manutenção Empresarial</span>
                  </>
                ) : (
                  <>
                    Quality IT Support & <span className="text-[#0D7E73]">Enterprise Maintenance</span>
                  </>
                )}
              </h2>
            </div>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {isPt 
                ? 'Na Algoritmica MANIA, combinamos mais de uma década de experiência prática com infraestruturas empresariais para manter os sistemas da sua empresa rápidos, seguros e estáveis. Atendemos desde pequenas empresas a multinacionais com técnicos qualificados nas principais marcas do mercado.'
                : 'At Algoritmica MANIA, we combine over a decade of hands-on enterprise infrastructure expertise to keep your business systems fast, reliable, and secure. We service small businesses to corporate enterprises across Portugal and Europe with certified multi-vendor technicians.'}
            </p>

            {/* Checkpoint Bullets */}
            <div className="space-y-3.5 pt-2">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#F0FDFA] border border-[#CCFBF1] flex items-center justify-center text-[#0D7E73] shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-[#042F2C]">
                  {isPt ? 'Diagnóstico preciso e reparação de hardware com peças originais e garantia' : 'Precise hardware diagnostics and component replacements with verified genuine parts'}
                </span>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#F0FDFA] border border-[#CCFBF1] flex items-center justify-center text-[#0D7E73] shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-[#042F2C]">
                  {isPt ? 'Cablagem estruturada de rede, Wi-Fi empresarial e configuração de switches Cisco/Ubiquiti' : 'Structured 10GbE network cabling, enterprise Wi-Fi 6, and switch configuration'}
                </span>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#F0FDFA] border border-[#CCFBF1] flex items-center justify-center text-[#0D7E73] shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-[#042F2C]">
                  {isPt ? 'Eliminação segura de dados certificada NIST 800-88 e conformidade com o RGPD' : 'Certified NIST 800-88 secure data destruction and GDPR sanitization reports'}
                </span>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#F0FDFA] border border-[#CCFBF1] flex items-center justify-center text-[#0D7E73] shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-[#042F2C]">
                  {isPt ? 'Apoio técnico no local (Grande Porto) e assistência remota imediata' : 'On-site technical support across Greater Porto and instant remote troubleshooting'}
                </span>
              </div>
            </div>

            {/* Discovery CTA Button */}
            <div className="pt-2">
              <ActionPrimaryButton
                type="button"
                onClick={() => onRequestQuote()}
                size="md"
              >
                <span>{isPt ? 'Solicitar Consulta Técnica' : 'Request Consultation'}</span>
              </ActionPrimaryButton>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
