import React, { useState } from 'react';
import { Product, Language, ProductCategory } from '../types';
import { useApp } from '../context/AppContext';
import { translations } from '../data/translations';
import { ProductCard } from '../components/ui/ProductCard';
import { ActionPrimaryButton, ActionSecondaryButton } from '../components/ui/AnimatedButtons';
import { 
  ArrowLeft, 
  ShieldCheck, 
  CheckCircle2, 
  FileText, 
  Zap, 
  Package, 
  Clock, 
  Check, 
  ArrowRight,
  MessageSquare,
  ChevronRight,
  Home,
  Truck,
  RotateCcw,
  Award,
  Layers,
  Sparkles,
  Share2,
  Copy
} from 'lucide-react';
import { companyData } from '../data/company';
import { motion } from 'motion/react';

interface ProductDetailViewProps {
  productId: string;
  lang: Language;
  onBack: () => void;
  onNavigateHome?: () => void;
  onNavigateProducts?: (cat?: ProductCategory) => void;
  onNavigateProductDetail: (productId: string) => void;
  onRequestQuote: (product?: Product) => void;
  onAddToRfq?: (product: Product, quantity?: number) => void;
  rfqProductIds?: string[];
}

export const ProductDetailView: React.FC<ProductDetailViewProps> = ({
  productId,
  lang,
  onBack,
  onNavigateHome,
  onNavigateProducts,
  onNavigateProductDetail,
  onRequestQuote,
  onAddToRfq,
  rfqProductIds = []
}) => {
  const { products } = useApp();
  const product = products.find(p => p.id === productId) || products[0] || {
    id: 'placeholder',
    name: 'Hardware Item',
    category: 'computers-laptops',
    condition: 'Refurbished - Grade A',
    brand: 'Enterprise',
    keySpecs: 'Certified Equipment',
    description: '',
    images: ['https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80'],
    availability: 'In Stock',
    stock: 5
  };
  const [selectedImage, setSelectedImage] = useState(0);
  const [copiedLink, setCopiedLink] = useState(false);
  const [activeTab, setActiveTab] = useState<'specs' | 'testing' | 'delivery'>('specs');
  const [quantity, setQuantity] = useState(1);
  const [justAdded, setJustAdded] = useState(false);

  const t = translations[lang];
  const isPt = lang === 'pt';

  // Related products from same category or brand (excluding hidden ones)
  const relatedProducts = products
    .filter(p => !p.isHidden && (p.category === product.category || p.brand === product.brand) && p.id !== product.id)
    .slice(0, 4);

  const getConditionColor = (condition: string) => {
    if (condition.includes('Grade A+')) return 'bg-emerald-50 text-emerald-700 border-emerald-200';
    if (condition.includes('Grade A')) return 'bg-[#CCFBF1] text-[#0D7E73] border-[#14B8A6]/30';
    return 'bg-[#F0FDFA] text-[#042F2C] border-[#CCFBF1]';
  };

  const whatsappInquiryUrl = `https://wa.me/${companyData.whatsappNumber}?text=${encodeURIComponent(
    `Hello Algoritmica Mania, I am interested in purchasing/quoting the ${product.name} (Ref: ${product.id}). Is this unit currently in stock?`
  )}`;

  const handleCopyLink = () => {
    navigator.clipboard?.writeText?.(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const getCategoryName = (cat: ProductCategory) => {
    switch (cat) {
      case 'used-refurbished':
        return isPt ? 'Laptops & Desktops' : 'Laptops & Desktops';
      case 'apple':
        return isPt ? 'Linha Apple & Mac' : 'Apple & Mac Line';
      case 'networking':
        return isPt ? 'Redes Cisco & Meraki' : 'Cisco & Meraki Networking';
      case 'cybersecurity':
        return isPt ? 'Firewalls & Segurança' : 'Firewalls & Security';
      case 'servers-storage':
        return isPt ? 'Servidores & Armazenamento' : 'Servers & Storage';
      default:
        return isPt ? 'Equipamento TI' : 'IT Equipment';
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="w-full bg-[#F8FAFC] min-h-screen py-6 sm:py-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Multi-page Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 sm:gap-2 text-xs text-slate-500 mb-6 flex-wrap">
          <button
            onClick={onNavigateHome || onBack}
            className="inline-flex items-center gap-1 font-semibold text-slate-600 hover:text-[#0D7E73] transition-colors cursor-pointer"
          >
            <Home className="w-3.5 h-3.5" />
            <span>{isPt ? 'Início' : 'Home'}</span>
          </button>
          
          <ChevronRight className="w-3.5 h-3.5 text-slate-300 shrink-0" />
          
          <button
            onClick={() => onNavigateProducts ? onNavigateProducts() : onBack()}
            className="font-semibold text-slate-600 hover:text-[#0D7E73] transition-colors cursor-pointer"
          >
            {isPt ? 'Catálogo de Produtos' : 'Products Catalog'}
          </button>
          
          <ChevronRight className="w-3.5 h-3.5 text-slate-300 shrink-0" />
          
          <button
            onClick={() => onNavigateProducts ? onNavigateProducts(product.category) : onBack()}
            className="font-semibold text-slate-600 hover:text-[#0D7E73] transition-colors cursor-pointer"
          >
            {getCategoryName(product.category)}
          </button>
          
          <ChevronRight className="w-3.5 h-3.5 text-slate-300 shrink-0" />
          
          <span className="font-bold text-[#042F2C] truncate max-w-xs sm:max-w-sm">
            {product.name}
          </span>
        </nav>

        {/* Back Button & Action Bar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-200">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-bold text-slate-700 hover:text-[#0D7E73] bg-white border border-slate-200 hover:border-[#0D7E73] transition-all cursor-pointer shadow-2xs"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{isPt ? 'Voltar ao Catálogo' : 'Back to Catalog'}</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyLink}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-600 hover:text-[#042F2C] bg-white border border-slate-200 hover:border-slate-300 transition-colors cursor-pointer"
              title="Copy product link"
            >
              {copiedLink ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-600 font-bold">{isPt ? 'Copiado!' : 'Copied!'}</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5" />
                  <span>{isPt ? 'Partilhar' : 'Share'}</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Dedicated Product Page Card */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-10 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Left Column: Media Gallery */}
            <div className="lg:col-span-6 flex flex-col gap-4">
              {/* Main Active Image Display */}
              <div className="relative rounded-2xl border border-slate-200 overflow-hidden bg-slate-50 aspect-4/3 flex items-center justify-center p-6 group">
                <img
                  src={product.images[selectedImage] || product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-contain max-h-[380px] group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Condition Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className={`text-xs font-bold px-3 py-1 rounded-full border shadow-2xs ${getConditionColor(product.condition)}`}>
                    {product.condition}
                  </span>
                </div>

                {/* Stock Indicator */}
                <div className="absolute top-4 right-4 z-10">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 shadow-2xs">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    {product.availability === 'In Stock' ? (isPt ? 'Em Stock Disponível' : 'In Stock') : product.availability}
                  </span>
                </div>
              </div>

              {/* Thumbnails row */}
              {product.images.length > 1 && (
                <div className="flex gap-3 overflow-x-auto pb-1">
                  {product.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImage(idx)}
                      className={`w-20 h-20 rounded-xl border p-1 bg-white overflow-hidden transition-all shrink-0 cursor-pointer ${
                        selectedImage === idx 
                          ? 'border-[#0D7E73] ring-2 ring-[#0D7E73]/20 shadow-xs' 
                          : 'border-slate-200 hover:border-slate-400 opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover rounded-lg" />
                    </button>
                  ))}
                </div>
              )}

              {/* Value Assurance Trust Badges */}
              <div className="grid grid-cols-2 gap-3 mt-2">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-2.5">
                  <ShieldCheck className="w-5 h-5 text-[#0D7E73] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-[#042F2C]">
                      {isPt ? 'Garantia de 12 Meses' : '12-Month Warranty'}
                    </div>
                    <div className="text-[11px] text-slate-500 mt-0.5">
                      {isPt ? 'Cobertura direta de hardware na Trofa' : 'Direct hardware replacement & parts'}
                    </div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-2.5">
                  <Truck className="w-5 h-5 text-[#0D7E73] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-[#042F2C]">
                      {isPt ? 'Envio Expresso 24/48h' : '24/48h Fast Shipping'}
                    </div>
                    <div className="text-[11px] text-slate-500 mt-0.5">
                      {isPt ? 'Portugal Continental & Espanha' : 'Safe insured courier delivery'}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Product Overview & Actions */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                {/* Brand & Subcategory */}
                <div className="flex items-center gap-2.5 mb-2">
                  <span className="text-xs font-black uppercase tracking-wider text-[#0D7E73] bg-[#F0FDFA] border border-[#CCFBF1] px-2.5 py-1 rounded-md">
                    {product.brand}
                  </span>
                  <span className="text-slate-300">•</span>
                  <span className="text-xs font-medium text-slate-500">
                    {product.subCategory}
                  </span>
                  <span className="text-slate-300">•</span>
                  <span className="text-xs font-mono text-slate-400">
                    Ref: {product.id}
                  </span>
                </div>

                {/* Title */}
                <h1 className="text-2xl sm:text-3xl font-extrabold text-[#042F2C] tracking-tight mb-4 leading-snug">
                  {product.name}
                </h1>

                {/* Price & Commercial Breakdown Box */}
                <div className="mb-6 p-5 rounded-2xl bg-gradient-to-br from-slate-50 to-[#F0FDFA]/50 border border-[#CCFBF1] flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <div className="text-xs text-slate-500 font-medium mb-1">
                      {isPt ? 'Preço do Equipamento Certificado' : 'Hardware Certified Price'}
                    </div>
                    {product.price ? (
                      <div className="flex items-baseline gap-2">
                        <span className="text-3xl sm:text-4xl font-black text-[#042F2C] tracking-tight">
                          €{product.price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </span>
                        <span className="text-xs font-bold text-slate-500">(+IVA / Excl. VAT)</span>
                      </div>
                    ) : (
                      <div className="text-2xl font-bold text-[#042F2C]">
                        {isPt ? 'Cotação Sob Consulta' : 'Quote Upon Request'}
                      </div>
                    )}
                  </div>

                  <div className="text-right">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#042F2C] bg-white border border-[#CCFBF1] px-3.5 py-1.5 rounded-full shadow-2xs">
                      <Award className="w-3.5 h-3.5 text-[#0D7E73]" />
                      <span>{product.warrantyMonths || 12} {isPt ? 'Meses de Garantia' : 'Months Warranty'}</span>
                    </span>
                  </div>
                </div>

                {/* Key Configuration Summary */}
                <div className="mb-6 p-4 rounded-xl bg-white border border-slate-200">
                  <div className="text-xs font-bold text-[#042F2C] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-[#0D7E73]" />
                    <span>{isPt ? 'Configuração & Hardware Principal:' : 'Key Specs & Configuration:'}</span>
                  </div>
                  <div className="text-xs sm:text-sm font-mono font-medium text-slate-800 leading-relaxed bg-slate-50 p-3 rounded-lg border border-slate-100">
                    {product.keySpecs}
                  </div>
                </div>

                {/* Description */}
                <div className="mb-6">
                  <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                    {isPt ? 'Descrição Detalhada do Produto' : 'Product Technical Overview'}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {product.description}
                  </p>
                </div>
              </div>

              {/* B2B Procurement Actions */}
              <div className="space-y-4 pt-6 border-t border-slate-200">
                {/* Quantity & B2B Volume Selector */}
                <div className="flex items-center justify-between p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                  <div>
                    <span className="text-xs font-bold text-[#042F2C] block">
                      {isPt ? 'Quantidade Desejada:' : 'Required Quantity:'}
                    </span>
                    <span className="text-[10px] text-slate-500">
                      {isPt ? 'Preços especiais para lotes e frotas B2B' : 'Volume pricing available for B2B fleets'}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 bg-white p-1 rounded-lg border border-slate-200 shadow-2xs">
                    <button
                      type="button"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-7 h-7 rounded flex items-center justify-center bg-slate-50 hover:bg-slate-200 text-[#042F2C] text-xs font-bold transition-colors cursor-pointer"
                    >
                      -
                    </button>
                    <span className="w-8 text-center font-mono font-bold text-sm text-[#042F2C]">
                      {quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-7 h-7 rounded flex items-center justify-center bg-slate-50 hover:bg-slate-200 text-[#042F2C] text-xs font-bold transition-colors cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Primary Action 1: Add to RFQ Basket & Action 2: Direct Proposal */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 items-center">
                  <ActionPrimaryButton
                    type="button"
                    id="btn-product-add-to-rfq"
                    onClick={() => {
                      if (onAddToRfq) {
                        onAddToRfq(product, quantity);
                      }
                      setJustAdded(true);
                      setTimeout(() => setJustAdded(false), 2000);
                    }}
                    size="md"
                    className="w-full"
                    icon={justAdded || rfqProductIds.includes(product.id) ? <CheckCircle2 className="w-4 h-4 stroke-[2.5]" /> : <FileText className="w-4 h-4" />}
                  >
                    {justAdded || rfqProductIds.includes(product.id)
                      ? (isPt ? 'Adicionado ao Cesto RFQ ✓' : 'In RFQ Basket ✓')
                      : (isPt ? `+ Adicionar ${quantity}x à Cotação` : `+ Add ${quantity}x to RFQ`)}
                  </ActionPrimaryButton>

                  {/* Primary Action 2: Direct Quote Form Trigger */}
                  <ActionSecondaryButton
                    type="button"
                    id="btn-product-request-quote"
                    onClick={() => onRequestQuote(product)}
                    size="md"
                    className="w-full bg-[#F0FDFA] hover:bg-[#CCFBF1] border border-[#CCFBF1]"
                  >
                    {isPt ? 'Pedir Proposta Imediata' : 'Instant Proposal'}
                  </ActionSecondaryButton>
                </div>

                {/* WhatsApp Technical Assistance */}
                <a
                  href={whatsappInquiryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-[#0D7E73] hover:text-[#0B6A61] hover:bg-[#F0FDFA] transition-all cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>{isPt ? 'Falar com engenheiro responsável na Trofa via WhatsApp' : 'Chat with assigned hardware engineer via WhatsApp'}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Technical Specification Tabs */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-8 mb-16">
          {/* Tab Navigation */}
          <div className="flex items-center gap-2 sm:gap-4 border-b border-slate-200 pb-4 mb-6 overflow-x-auto">
            <button
              onClick={() => setActiveTab('specs')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap cursor-pointer ${
                activeTab === 'specs'
                  ? 'bg-[#042F2C] text-white shadow-xs'
                  : 'text-slate-600 hover:text-[#042F2C] hover:bg-slate-100'
              }`}
            >
              {isPt ? 'Especificações Técnicas' : 'Full Specifications'}
            </button>

            <button
              onClick={() => setActiveTab('testing')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap cursor-pointer ${
                activeTab === 'testing'
                  ? 'bg-[#042F2C] text-white shadow-xs'
                  : 'text-slate-600 hover:text-[#042F2C] hover:bg-slate-100'
              }`}
            >
              {isPt ? 'Certificação & Laboratório Trofa' : 'Testing & Quality Standard'}
            </button>

            <button
              onClick={() => setActiveTab('delivery')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap cursor-pointer ${
                activeTab === 'delivery'
                  ? 'bg-[#042F2C] text-white shadow-xs'
                  : 'text-slate-600 hover:text-[#042F2C] hover:bg-slate-100'
              }`}
            >
              {isPt ? 'Envio, Garantia & Conteúdo' : 'Shipping, Warranty & Box'}
            </button>
          </div>

          {/* Tab 1: Full Specs */}
          {activeTab === 'specs' && (
            <div>
              <div className="divide-y divide-slate-100 text-xs sm:text-sm">
                {product.fullSpecs.map((spec, sIdx) => (
                  <div key={sIdx} className="py-3.5 grid grid-cols-1 sm:grid-cols-3 gap-2">
                    <div className="font-semibold text-slate-500">
                      {spec.label}
                    </div>
                    <div className="sm:col-span-2 text-slate-800 font-mono font-medium text-xs sm:text-sm">
                      {spec.value}
                    </div>
                  </div>
                ))}
              </div>

              {/* Ports & Connectivity */}
              {product.portsAndConnectivity && product.portsAndConnectivity.length > 0 && (
                <div className="mt-8 pt-6 border-t border-slate-200">
                  <h3 className="text-sm font-bold text-[#042F2C] mb-3">
                    {isPt ? 'Portas & Conectividade Física' : 'Ports & Physical Interfaces'}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {product.portsAndConnectivity.map((port, pIdx) => (
                      <span
                        key={pIdx}
                        className="px-3 py-1.5 rounded-lg bg-[#F0FDFA] border border-[#CCFBF1] text-xs text-[#042F2C] font-mono font-medium"
                      >
                        {port}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Tab 2: Testing */}
          {activeTab === 'testing' && (
            <div className="space-y-6">
              <div className="p-5 rounded-2xl bg-[#F0FDFA] border border-[#CCFBF1]">
                <h3 className="text-base font-bold text-[#042F2C] mb-2 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-[#0D7E73]" />
                  <span>{isPt ? 'Protocolo de Teste de 28 Pontos na Trofa' : '28-Point Diagnostic Protocol in Trofa'}</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-4">
                  {isPt 
                    ? 'Cada equipamento passa por stress-tests térmicos, verificação de ciclos de bateria, integridade SMART dos discos SSD, verificação de portas I/O e calibração de ecrã antes de ser embalado.'
                    : 'Each hardware unit undergoes thermal stress-testing, battery cycle validation, SSD SMART health verification, port integrity testing, and display calibration before packing.'}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="bg-white p-3 rounded-xl border border-[#CCFBF1] text-xs font-semibold text-[#042F2C] flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0D7E73]" />
                    <span>{isPt ? 'Bateria > 85% Capacidade' : 'Battery > 85% Health'}</span>
                  </div>
                  <div className="bg-white p-3 rounded-xl border border-[#CCFBF1] text-xs font-semibold text-[#042F2C] flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0D7E73]" />
                    <span>{isPt ? 'Limpeza Ultrassónica' : 'Ultrasonic Cleaning'}</span>
                  </div>
                  <div className="bg-white p-3 rounded-xl border border-[#CCFBF1] text-xs font-semibold text-[#042F2C] flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0D7E73]" />
                    <span>{isPt ? 'Pasta Térmica Renovada' : 'New Thermal Compound'}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tab 3: Delivery & Box */}
          {activeTab === 'delivery' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Box Contents */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                <h3 className="text-sm font-bold text-[#042F2C] mb-4 flex items-center gap-2">
                  <Package className="w-4 h-4 text-[#0D7E73]" />
                  <span>{isPt ? 'O Que Vem Incluído na Embalagem' : 'Included in Package'}</span>
                </h3>
                <ul className="space-y-3 text-xs text-slate-700">
                  {product.features.map((item, iIdx) => (
                    <li key={iIdx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#0D7E73] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#0D7E73] shrink-0 mt-0.5" />
                    <span>{isPt ? 'Carregador / Cabo de alimentação original ou compatível certificado' : 'Original or certified OEM power supply / charger'}</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#0D7E73] shrink-0 mt-0.5" />
                    <span>{isPt ? 'Certificado de Garantia de 12 Meses Algoritmica Mania' : '12-Month Algoritmica Mania Warranty Certificate'}</span>
                  </li>
                </ul>
              </div>

              {/* Delivery & Logistics */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                <h3 className="text-sm font-bold text-[#042F2C] mb-4 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#0D7E73]" />
                  <span>{isPt ? 'Prazos de Envio & Levantamento' : 'Shipping & Pickup Details'}</span>
                </h3>
                <ul className="space-y-3 text-xs text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="text-[#0D7E73] font-bold">•</span>
                    <span>{isPt ? 'Expedição rápida em 24h a 48h com número de rastreio e seguro de transporte.' : 'Prompt 24-48h dispatch with full insured tracking across Portugal & Spain.'}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0D7E73] font-bold">•</span>
                    <span>{isPt ? 'Opção de levantamento em mão nas nossas instalações na Trofa (Porto).' : 'In-person pickup option available at our Trofa facility (Porto district).'}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0D7E73] font-bold">•</span>
                    <span>{isPt ? 'Suporte técnico pós-venda direto e fatura comercial com IVA discriminado.' : 'Direct technician post-sale support and valid commercial invoice.'}</span>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="pt-4 border-t border-slate-200">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-bold text-[#042F2C]">
                  {isPt ? (
                    <>
                      Outros Equipamentos <span className="text-[#0D7E73]">Recomendados</span>
                    </>
                  ) : (
                    <>
                      Similar Certified <span className="text-[#0D7E73]">Hardware</span>
                    </>
                  )}
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  {isPt ? 'Mais opções com especificações semelhantes e garantia' : 'Explore more certified hardware in this class'}
                </p>
              </div>
              <button
                onClick={() => onNavigateProducts ? onNavigateProducts(product.category) : onBack()}
                className="text-xs font-bold text-[#0D7E73] hover:text-[#042F2C] transition-colors cursor-pointer inline-flex items-center gap-1"
              >
                <span>{isPt ? 'Ver Todos' : 'View All'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((p) => (
                <ProductCard
                  key={p.id}
                  product={p}
                  lang={lang}
                  onViewDetails={onNavigateProductDetail}
                  onRequestQuote={onRequestQuote}
                  onAddToRfq={onAddToRfq}
                  isInRfq={rfqProductIds.includes(p.id)}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};
