import React, { useState } from 'react';
import { ProductCategory, Product, Language } from '../types';
import { useApp } from '../context/AppContext';
import { translations } from '../data/translations';
import { SectionHeading } from '../components/ui/SectionHeading';
import { ProductCard } from '../components/ui/ProductCard';
import { RefurbishmentTimeline } from '../components/ui/RefurbishmentTimeline';
import { BusinessEcosystem } from '../components/ui/BusinessEcosystem';
import { QuoteForm } from '../components/ui/QuoteForm';
import { TechBentoDashboard } from '../components/home/TechBentoDashboard';
import { WhatWeDoSection } from '../components/home/WhatWeDoSection';
import { ShopByCategory } from '../components/home/ShopByCategory';
import { WhyRefurbishedShowcase } from '../components/home/WhyRefurbishedShowcase';
import { WhyTrustOurCompany } from '../components/home/WhyTrustOurCompany';
import { CustomerTestimonials } from '../components/home/CustomerTestimonials';
import { SecurityShowcase } from '../components/home/SecurityShowcase';
import { FeaturedEnterpriseSolutions } from '../components/home/FeaturedEnterpriseSolutions';
import { motion } from 'motion/react';
import { AnimatedArrowRight } from '../components/ui/AnimatedArrow';
import TextType from '../components/ui/TextType';
import { ActionPrimaryButton, ActionSecondaryButton } from '../components/ui/AnimatedButtons';
import heroInfrastructureImg from '../assets/images/hero_it_infrastructure_1787992882036.jpg';
import { GeometricMotif } from '../components/ui/GeometricMotif';
import { 
  ArrowRight, 
  ShieldCheck, 
  Cpu, 
  Network, 
  Server, 
  CheckCircle2, 
  Coins, 
  Sparkles, 
  MapPin,
  Laptop
} from 'lucide-react';

interface HomeViewProps {
  lang: Language;
  onNavigateProducts: (cat?: ProductCategory) => void;
  onNavigateProductDetail: (productId: string) => void;
  onNavigateServices: (slug?: string) => void;
  onNavigateSolutions: () => void;
  onNavigateSellEquipment: () => void;
  onNavigateWhyChooseUs: () => void;
  onNavigateOurApproach: () => void;
  onRequestQuote: (product?: Product) => void;
  onAddToRfq?: (product: Product) => void;
  rfqProductIds?: string[];
}

export const HomeView: React.FC<HomeViewProps> = ({
  lang,
  onNavigateProducts,
  onNavigateProductDetail,
  onNavigateServices,
  onNavigateSolutions,
  onNavigateSellEquipment,
  onNavigateWhyChooseUs,
  onNavigateOurApproach,
  onRequestQuote,
  onAddToRfq,
  rfqProductIds = []
}) => {
  const { visibleProducts } = useApp();
  const isPt = lang === 'pt';
  const t = translations[lang];
  const [activeCategory, setActiveCategory] = useState<string>('used-refurbished');

  const rotatingHeroTexts = isPt
    ? [
        'Soluções IT Inteligentes.',
        'Equipamento TI Certificado.',
        'Infraestrutura TI Segura.'
      ]
    : [
        'Smarter IT Solutions.',
        'Certified IT Equipment.',
        'Secure IT Infrastructure.'
      ];

  // Clean Featured Equipment (4-6 top business machines from visible stock)
  const featuredProducts = visibleProducts
    .filter(p => p.featured || p.id.includes('macbook') || p.id.includes('thinkpad') || p.id.includes('poweredge'))
    .slice(0, 4);

  const handleCategorySelect = (category: ProductCategory | 'deals' | 'all') => {
    setActiveCategory(category);
    if (category === 'all' || category === 'deals') {
      onNavigateProducts();
    } else {
      onNavigateProducts(category as ProductCategory);
    }
  };

  return (
    <div className="w-full">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#F0FDFA]/80 via-white to-[#F0FDFA]/40 py-10 sm:py-14 lg:py-16 border-b border-[#CCFBF1]">
        {/* Subtle Static Light Green Grid Background */}
        <div 
          className="absolute inset-0 w-full h-full pointer-events-none z-0 bg-[linear-gradient(to_right,#CCFBF1_1px,transparent_1px),linear-gradient(to_bottom,#CCFBF1_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_90%_80%_at_50%_20%,#000_75%,transparent_100%)] opacity-80" 
        />

        <div className="relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            {/* Left Hero Content */}
            <motion.div 
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-6 flex flex-col items-start"
            >
              {/* Badge */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white border border-[#CCFBF1] text-[#042F2C] shadow-2xs mb-6"
              >
                <span className="w-2 h-2 rounded-full bg-[#0D7E73] animate-pulse" />
                <span>{t.hero.badge}</span>
              </motion.div>

              {/* Main Headline with TextType Animation */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold tracking-tight text-[#042F2C] leading-[1.18] mb-6 flex flex-col items-start gap-1 sm:gap-2">
                <span>
                  {isPt ? 'Tecnologia Fiável.' : 'Reliable Technology.'}
                </span>
                <span className="inline-block text-[#0D7E73] min-h-[1.25em]">
                  <TextType
                    text={rotatingHeroTexts}
                    typingSpeed={60}
                    deletingSpeed={30}
                    pauseDuration={1800}
                    showCursor={true}
                    cursorCharacter="|"
                    cursorClassName="text-[#0D7E73] font-light animate-pulse"
                    className="text-[#0D7E73] font-extrabold"
                    loop={true}
                  />
                </span>
              </h1>

              {/* Supporting Subhead */}
              <motion.p 
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="text-base sm:text-lg text-[#64748B] leading-relaxed max-w-xl mb-8"
              >
                {t.hero.subheadline}
              </motion.p>

              {/* CTAs */}
              <motion.div 
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="flex flex-wrap items-center gap-3 sm:gap-4"
              >
                <ActionPrimaryButton
                  id="hero-btn-view-equipment"
                  onClick={() => onNavigateProducts()}
                  size="md"
                >
                  <span>{t.hero.viewEquipment}</span>
                </ActionPrimaryButton>

                <ActionSecondaryButton
                  id="hero-btn-request-quote"
                  onClick={() => onRequestQuote()}
                  isLightBg={true}
                  size="md"
                >
                  <span>{t.hero.requestQuote}</span>
                </ActionSecondaryButton>
              </motion.div>
            </motion.div>

            {/* Right Hero Visual: Exact Uploaded Enterprise IT Infrastructure Graphic */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-6 relative w-full flex items-center justify-center select-none"
            >
              <div className="relative w-full max-w-xl mx-auto flex items-center justify-center">
                {/* Subtle Geometric Accent */}
                <div className="absolute -top-3 -left-3 hidden sm:block pointer-events-none z-20">
                  <GeometricMotif variant="squares-and-dots" size="md" />
                </div>

                <img 
                  src={heroInfrastructureImg} 
                  alt={isPt ? "Infraestrutura de TI Empresarial" : "Enterprise IT Infrastructure"}
                  className="w-full h-auto object-contain max-h-[480px] sm:max-h-[520px] select-none mix-blend-multiply filter contrast-[1.02]"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. WHAT WE DO SECTION (4 Clear Cards: Equipment, Services, Asset Recovery, Business Solutions) */}
      <WhatWeDoSection
        lang={lang}
        onNavigateProducts={onNavigateProducts}
        onNavigateServices={onNavigateServices}
        onNavigateSolutions={onNavigateSolutions}
        onNavigateSellEquipment={onNavigateSellEquipment}
      />

      {/* 4. SHOP BY CATEGORY (7 Core Physical IT Hardware Categories - Products Only) */}
      <ShopByCategory
        lang={lang}
        onSelectCategory={handleCategorySelect}
      />

      {/* 5. FEATURED EQUIPMENT (Clean B2B Product Showcase) */}
      <section className="bg-[#F0FDFA]/30 py-10 sm:py-14 border-b border-[#CCFBF1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex items-center justify-between mb-6 sm:mb-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold text-[#0D7E73] bg-white border border-[#CCFBF1] mb-2">
                <Laptop className="w-3.5 h-3.5" />
                <span>{isPt ? 'HARDWARE TESTADO' : 'TESTED HARDWARE'}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#042F2C]">
                {isPt ? (
                  <>
                    Equipamento em <span className="text-[#0D7E73]">Destaque</span>
                  </>
                ) : (
                  <>
                    Featured <span className="text-[#0D7E73]">Equipment</span>
                  </>
                )}
              </h2>
            </div>
            
            <button
              onClick={() => onNavigateProducts()}
              className="group inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#0D7E73] hover:text-[#0B6A61] transition-colors cursor-pointer"
            >
              <span>{isPt ? 'Ver Todos os Produtos' : 'View All Equipment'}</span>
              <AnimatedArrowRight className="w-4 h-4 text-[#0D7E73]" animateLoop={true} />
            </button>
          </div>

          {/* 4-Column Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {featuredProducts.map((product) => (
              <ProductCard
                key={`featured-${product.id}`}
                product={product}
                lang={lang}
                onViewDetails={onNavigateProductDetail}
                onRequestQuote={onRequestQuote}
                onAddToRfq={onAddToRfq}
                isInRfq={rfqProductIds.includes(product.id)}
              />
            ))}
          </div>

        </div>
      </section>

      {/* 6. FEATURED ENTERPRISE SOLUTIONS (Core IT Categories & Infrastructure) */}
      <FeaturedEnterpriseSolutions
        lang={lang}
        onNavigateProducts={onNavigateProducts}
        onNavigateServices={onNavigateServices}
        onNavigateSolutions={onNavigateSolutions}
        onRequestQuote={onRequestQuote}
      />

      {/* 7. WHY CHOOSE REFURBISHED TECHNOLOGY */}
      <WhyRefurbishedShowcase
        lang={lang}
        onExploreMore={onNavigateWhyChooseUs}
      />

      {/* 7. REFURBISHMENT PROCESS (6-Step Testing & Quality Assurance) */}
      <section className="py-10 sm:py-14 bg-[#F0FDFA]/30 border-b border-[#CCFBF1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RefurbishmentTimeline
            lang={lang}
            onExploreProcess={() => onNavigateServices('refurbishment-process')}
          />
        </div>
      </section>

      {/* 8. BUSINESS IT SOLUTIONS (Turnkey Fleets, Cloud & Support) */}
      <section className="py-10 sm:py-14 bg-white border-b border-[#CCFBF1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BusinessEcosystem
            lang={lang}
            onExploreSolutions={onNavigateSolutions}
            onNavigateServices={onNavigateServices}
          />
        </div>
      </section>

      {/* 9. WHY BUSINESSES CHOOSE US (Consolidated Trust Component) */}
      <WhyTrustOurCompany
        lang={lang}
        onExploreMore={onNavigateWhyChooseUs}
        onRequestQuote={() => onRequestQuote()}
      />

      {/* 10. CUSTOMER TESTIMONIALS (Social Proof — Infinite Auto-Scroll Ticker) */}
      <CustomerTestimonials
        lang={lang}
        onRequestQuote={() => onRequestQuote()}
      />

      {/* 11. ONE PARTNER. EVERY IT NEED. (Enterprise IT Ecosystem Section) */}
      <SecurityShowcase
        lang={lang}
        onNavigateProducts={onNavigateProducts}
        onNavigateSolutions={onNavigateSolutions}
        onNavigateServices={onNavigateServices}
        onNavigateSellEquipment={onNavigateSellEquipment}
        onRequestQuote={() => onRequestQuote()}
        onExploreSecurity={() => onNavigateServices('cybersecurity')}
      />

      {/* 11. REQUEST A QUOTE / DIRECT CONSULTATION SECTION */}
      <section id="section-final-quote" className="py-14 sm:py-18 bg-[#F0FDFA]/50 border-t border-[#CCFBF1]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <QuoteForm
            lang={lang}
          />
        </div>
      </section>
    </div>
  );
};
