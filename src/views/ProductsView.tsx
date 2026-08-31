import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ProductCategory, Product, Language } from '../types';
import { useApp } from '../context/AppContext';
import { translations } from '../data/translations';
import { ProductCard } from '../components/ui/ProductCard';
import { ActionPrimaryButton } from '../components/ui/AnimatedButtons';
import { 
  Search, 
  Filter, 
  RotateCcw,
  Check,
  ChevronDown,
  ChevronUp,
  Trash2,
  X,
  LayoutGrid,
  List,
  ShieldCheck,
  Truck,
  RefreshCw,
  Headphones,
  Laptop,
  Apple,
  Server,
  Network,
  Lock,
  Clock,
  Star,
  Calendar,
  ChevronRight
} from 'lucide-react';

interface ProductsViewProps {
  lang: Language;
  initialCategory?: ProductCategory;
  initialQuery?: string;
  onNavigateProductDetail: (productId: string) => void;
  onRequestQuote: (product?: Product) => void;
  onAddToRfq?: (product: Product) => void;
  rfqProductIds?: string[];
}

export const ProductsView: React.FC<ProductsViewProps> = ({
  lang,
  initialCategory,
  initialQuery,
  onNavigateProductDetail,
  onRequestQuote,
  onAddToRfq,
  rfqProductIds = []
}) => {
  const { visibleProducts } = useApp();
  const isPt = lang === 'pt';
  const t = translations[lang];

  // Filtering states
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | 'all'>(initialCategory || 'all');
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedConditions, setSelectedConditions] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>(initialQuery || '');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'name'>('featured');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Price slider state (Range: 50€ to 3500€)
  const MIN_PRICE_BOUND = 50;
  const MAX_PRICE_BOUND = 3500;
  const [minPriceInput, setMinPriceInput] = useState<number>(MIN_PRICE_BOUND);
  const [maxPriceInput, setMaxPriceInput] = useState<number>(MAX_PRICE_BOUND);
  const [appliedPriceRange, setAppliedPriceRange] = useState<[number, number]>([MIN_PRICE_BOUND, MAX_PRICE_BOUND]);

  // Sidebar search & expand states
  const [brandSearchQuery, setBrandSearchQuery] = useState<string>('');
  const [showAllBrands, setShowAllBrands] = useState<boolean>(false);
  const [showAllCategories, setShowAllCategories] = useState<boolean>(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState<boolean>(false);
  const [isBrandOpen, setIsBrandOpen] = useState<boolean>(false);
  const [isConditionOpen, setIsConditionOpen] = useState<boolean>(false);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState<boolean>(false);

  // Live Countdown Timer State for "Deal of the Day"
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 14,
    minutes: 38,
    seconds: 45
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: 59, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Compute all available brands and their product counts
  const allBrandsWithCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    visibleProducts.forEach(p => {
      if (p.brand) {
        counts[p.brand] = (counts[p.brand] || 0) + 1;
      }
    });
    // Sort brands by count descending, then alphabetically
    return Object.entries(counts)
      .map(([brand, count]) => ({ brand, count }))
      .sort((a, b) => b.count - a.count || a.brand.localeCompare(b.brand));
  }, [visibleProducts]);

  // Filtered brands for sidebar search
  const displayedBrands = useMemo(() => {
    let list = allBrandsWithCounts;
    if (brandSearchQuery.trim()) {
      const q = brandSearchQuery.toLowerCase();
      list = list.filter(b => b.brand.toLowerCase().includes(q));
    }
    if (!showAllBrands && !brandSearchQuery.trim()) {
      return list.slice(0, 7);
    }
    return list;
  }, [allBrandsWithCounts, brandSearchQuery, showAllBrands]);

  // Categories definitions with counts
  const categoriesList = useMemo(() => [
    {
      id: 'all' as const,
      label: isPt ? 'Todos os Produtos' : 'All Products',
      count: visibleProducts.length
    },
    {
      id: 'computers-laptops' as ProductCategory,
      label: isPt ? 'Computadores & Portáteis' : 'Computers & Laptops',
      count: visibleProducts.filter(p => p.category === 'computers-laptops' || p.category === 'used-refurbished').length
    },
    {
      id: 'apple' as ProductCategory,
      label: isPt ? 'Produtos Apple' : 'Apple Products',
      count: visibleProducts.filter(p => p.category === 'apple').length
    },
    {
      id: 'servers-storage' as ProductCategory,
      label: isPt ? 'Servidores & Storage' : 'Servers & Storage',
      count: visibleProducts.filter(p => p.category === 'servers-storage').length
    },
    {
      id: 'networking' as ProductCategory,
      label: isPt ? 'Equipamento de Rede' : 'Networking Equipment',
      count: visibleProducts.filter(p => p.category === 'networking').length
    },
    {
      id: 'cybersecurity' as ProductCategory,
      label: isPt ? 'Hardware de Cibersegurança' : 'Cybersecurity Hardware',
      count: visibleProducts.filter(p => p.category === 'cybersecurity').length
    },
    {
      id: 'monitors' as ProductCategory,
      label: isPt ? 'Monitores' : 'Monitors',
      count: visibleProducts.filter(p => p.category === 'monitors').length
    },
    {
      id: 'it-accessories' as ProductCategory,
      label: isPt ? 'Acessórios de TI' : 'IT Accessories',
      count: visibleProducts.filter(p => p.category === 'it-accessories').length
    }
  ], [isPt, visibleProducts]);

  // Conditions definitions with counts
  const conditionsList = useMemo(() => [
    {
      id: 'Grade A+',
      label: 'Grade A+',
      count: visibleProducts.filter(p => p.condition?.includes('Grade A+') || p.condition?.includes('A+')).length
    },
    {
      id: 'Grade A',
      label: 'Grade A',
      count: visibleProducts.filter(p => p.condition?.includes('Grade A') && !p.condition?.includes('A+')).length
    },
    {
      id: 'Open Box',
      label: 'Open Box',
      count: visibleProducts.filter(p => p.condition?.includes('Open Box') || p.condition?.includes('Like New')).length
    }
  ], [visibleProducts]);

  // Filter & sort logic
  const filteredProducts = useMemo(() => {
    return visibleProducts.filter(product => {
      // Category filter
      if (selectedCategory !== 'all') {
        if (selectedCategory === 'computers-laptops' || selectedCategory === 'used-refurbished') {
          if (product.category !== 'computers-laptops' && product.category !== 'used-refurbished') {
            return false;
          }
        } else if (product.category !== selectedCategory) {
          return false;
        }
      }
      // Brand filter (multi-select supported)
      if (selectedBrands.length > 0 && !selectedBrands.includes(product.brand)) {
        return false;
      }
      // Condition filter (multi-select supported)
      if (selectedConditions.length > 0) {
        const matchesCondition = selectedConditions.some(cond => {
          if (cond === 'Grade A+') return product.condition?.includes('Grade A+') || product.condition?.includes('A+');
          if (cond === 'Grade A') return product.condition?.includes('Grade A') && !product.condition?.includes('A+');
          if (cond === 'Open Box') return product.condition?.includes('Open Box') || product.condition?.includes('Like New');
          return false;
        });
        if (!matchesCondition) return false;
      }
      // Price range
      if (product.price !== undefined) {
        if (product.price < appliedPriceRange[0] || product.price > appliedPriceRange[1]) {
          return false;
        }
      }
      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchName = product.name.toLowerCase().includes(q);
        const matchBrand = product.brand.toLowerCase().includes(q);
        const matchSpecs = product.keySpecs.toLowerCase().includes(q);
        const matchCategory = product.category.toLowerCase().includes(q);
        if (!matchName && !matchBrand && !matchSpecs && !matchCategory) {
          return false;
        }
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') {
        return (a.price || 99999) - (b.price || 99999);
      }
      if (sortBy === 'price-desc') {
        return (b.price || 0) - (a.price || 0);
      }
      if (sortBy === 'name') {
        return a.name.localeCompare(b.name);
      }
      // featured
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    });
  }, [selectedCategory, selectedBrands, selectedConditions, searchQuery, sortBy, appliedPriceRange]);

  // Brand toggle handler
  const toggleBrand = (brand: string) => {
    setSelectedBrands(prev => 
      prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
    );
  };

  // Condition toggle handler
  const toggleCondition = (condition: string) => {
    setSelectedConditions(prev => 
      prev.includes(condition) ? prev.filter(c => c !== condition) : [...prev, condition]
    );
  };

  // Apply price filter
  const handleApplyPriceFilter = () => {
    setAppliedPriceRange([minPriceInput, maxPriceInput]);
  };

  // Reset all filters
  const resetFilters = () => {
    setSelectedCategory('all');
    setSelectedBrands([]);
    setSelectedConditions([]);
    setSearchQuery('');
    setBrandSearchQuery('');
    setMinPriceInput(MIN_PRICE_BOUND);
    setMaxPriceInput(MAX_PRICE_BOUND);
    setAppliedPriceRange([MIN_PRICE_BOUND, MAX_PRICE_BOUND]);
    setSortBy('featured');
  };

  const hasActiveFilters = 
    selectedCategory !== 'all' || 
    selectedBrands.length > 0 || 
    selectedConditions.length > 0 || 
    appliedPriceRange[0] > MIN_PRICE_BOUND || 
    appliedPriceRange[1] < MAX_PRICE_BOUND ||
    Boolean(searchQuery.trim());

  // Additional sections data
  const quickCategoryStrip = [
    {
      id: 'used-refurbished' as ProductCategory,
      name: isPt ? 'Portáteis & PCs' : 'Laptops & PCs',
      image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 'apple' as ProductCategory,
      name: isPt ? 'Apple Macs' : 'Apple Macs',
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 'servers-storage' as ProductCategory,
      name: isPt ? 'Servidores Rack' : 'Rack Servers',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 'networking' as ProductCategory,
      name: isPt ? 'Switches & Redes' : 'Switches & Routers',
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 'cybersecurity' as ProductCategory,
      name: isPt ? 'Firewalls & UTM' : 'Firewalls & UTM',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 'servers-storage' as ProductCategory,
      name: isPt ? 'Armazenamento NAS' : 'Storage & NAS',
      image: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=400&q=80'
    }
  ];

  const dealOfTheDay1 = visibleProducts.find(p => p.id === 'prod-dell-r640-server') || visibleProducts[2] || visibleProducts[0];
  const dealOfTheDay2 = visibleProducts.find(p => p.id === 'prod-macbook-pro-14-m1') || visibleProducts[1] || visibleProducts[0];

  const blogArticles = [
    {
      id: 'blog-1',
      date: isPt ? '20 Ago 2026' : 'Aug 20, 2026',
      title: isPt ? 'Como Escolher um Servidor Rack Recondicionado para PMEs' : 'How to Choose a Refurbished Rack Server for SMEs',
      excerpt: isPt ? 'Critérios essenciais de processadores Xeon vs EPYC, redundância de fontes e calhas para datacenters.' : 'Essential criteria on Xeon vs EPYC processors, PSU redundancy and rail kits for server rooms.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'blog-2',
      date: isPt ? '15 Ago 2026' : 'Aug 15, 2026',
      title: isPt ? 'Norma NIST SP 800-88: Eliminação Certificada de Dados' : 'NIST SP 800-88: Certified Cryptographic Data Wipe',
      excerpt: isPt ? 'Compreenda a importância jurídica e de RGPD no desmantelamento de frotas informáticas usadas.' : 'Understand the legal GDPR liability protection when decommissioning corporate IT hardware.',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'blog-3',
      date: isPt ? '10 Ago 2026' : 'Aug 10, 2026',
      title: isPt ? 'Economia Circular IT: Redução de Custos e Pegada Ecológica' : 'Circular IT: Cost Reduction and Carbon Offsetting',
      excerpt: isPt ? 'Como frotas corporativas recondicionadas poupam até 60% do orçamento com 12 meses de garantia.' : 'How corporate grade refurbished hardware saves up to 60% budget with 12 months full warranty.',
      image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=600&q=80'
    }
  ];

  // Helper component for the sidebar content to reuse in both desktop and mobile drawer
  const renderSidebarContent = () => (
    <div className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-2xs space-y-6">
      
      {/* 1. SIDEBAR HEADER */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-100">
        <h2 className="text-xs sm:text-sm font-black uppercase tracking-wider text-[#042F2C]">
          {isPt ? 'FILTRAR PRODUTOS' : 'FILTER PRODUCTS'}
        </h2>
        <Filter className="w-4 h-4 text-slate-400" />
      </div>

      {/* 2. CATEGORY SECTION (same style as Brand) */}
      <div className="pb-4 border-b border-slate-100">
        <button
          type="button"
          onClick={() => setIsCategoryOpen(prev => !prev)}
          className="w-full flex items-center justify-between text-left cursor-pointer group select-none py-1"
          aria-expanded={isCategoryOpen}
        >
          <div className="flex items-center gap-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800 group-hover:text-[#0D7E73] transition-colors">
              {isPt ? 'CATEGORIA' : 'CATEGORY'}
            </h3>
            {selectedCategory !== 'all' && (
              <span className="px-1.5 py-0.5 rounded-full bg-[#0D7E73] text-white text-[10px] font-bold leading-none">
                1
              </span>
            )}
          </div>
          <ChevronDown
            className={`w-4 h-4 text-slate-400 group-hover:text-[#0D7E73] transition-transform duration-200 ${
              isCategoryOpen ? 'rotate-180 text-[#0D7E73]' : ''
            }`}
          />
        </button>

        <AnimatePresence initial={false}>
          {isCategoryOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.22, ease: 'easeInOut' }}
              className="overflow-hidden pt-3"
            >
              <div className="space-y-2.5 max-h-56 overflow-y-auto pr-1">
                {categoriesList.map(cat => {
                  const isSelected = selectedCategory === cat.id;
                  return (
                    <label
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className="flex items-center justify-between group cursor-pointer select-none"
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        {/* Radio dot — matches the circular style shown in the screenshot */}
                        <div className={`w-4 h-4 rounded-full flex items-center justify-center transition-all border ${
                          isSelected
                            ? 'bg-[#0D7E73] border-[#0D7E73]'
                            : 'border-slate-300 bg-white group-hover:border-slate-400'
                        }`}>
                          {isSelected && <div className="w-2 h-2 rounded-full bg-white" />}
                        </div>
                        <span className={`text-xs sm:text-[13px] truncate transition-colors ${
                          isSelected
                            ? 'font-bold text-slate-900'
                            : 'text-slate-600 group-hover:text-slate-900 font-normal'
                        }`}>
                          {cat.label}
                        </span>
                      </div>
                      <span className="text-xs text-slate-400 tabular-nums ml-2 font-normal">
                        ({cat.count})
                      </span>
                    </label>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>


      {/* 3. PRICE RANGE SECTION */}
      <div className="pb-5 border-b border-slate-100">
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
          {isPt ? 'PREÇO' : 'PRICE'}
        </h3>
        
        {/* Price value indicator */}
        <div className="text-xs sm:text-[13px] font-bold text-slate-900 mb-3">
          €{minPriceInput} - €{maxPriceInput}
        </div>

        {/* Dual Handle Range Slider Track */}
        <div className="relative pt-2 pb-2 mb-2">
          {/* Background Track */}
          <div className="relative h-1.5 bg-slate-200 rounded-full">
            {/* Active Colored Span */}
            <div
              className="absolute h-1.5 bg-[#0284C7] sm:bg-[#0D7E73] rounded-full"
              style={{
                left: `${((minPriceInput - MIN_PRICE_BOUND) / (MAX_PRICE_BOUND - MIN_PRICE_BOUND)) * 100}%`,
                right: `${100 - ((maxPriceInput - MIN_PRICE_BOUND) / (MAX_PRICE_BOUND - MIN_PRICE_BOUND)) * 100}%`
              }}
            />
          </div>

          {/* Min Handle Range Input */}
          <input
            type="range"
            min={MIN_PRICE_BOUND}
            max={MAX_PRICE_BOUND}
            step="25"
            value={minPriceInput}
            onChange={(e) => {
              const val = Math.min(Number(e.target.value), maxPriceInput - 50);
              setMinPriceInput(val);
            }}
            className="absolute top-1.5 left-0 w-full h-2 opacity-0 cursor-pointer pointer-events-auto"
          />

          {/* Max Handle Range Input */}
          <input
            type="range"
            min={MIN_PRICE_BOUND}
            max={MAX_PRICE_BOUND}
            step="25"
            value={maxPriceInput}
            onChange={(e) => {
              const val = Math.max(Number(e.target.value), minPriceInput + 50);
              setMaxPriceInput(val);
            }}
            className="absolute top-1.5 left-0 w-full h-2 opacity-0 cursor-pointer pointer-events-auto"
          />

          {/* Min Visual Handle Circle */}
          <div 
            className="absolute top-0.5 w-4 h-4 bg-white border-2 border-[#0284C7] sm:border-[#0D7E73] rounded-full shadow-xs -translate-x-1/2 pointer-events-none transition-transform group-hover:scale-110"
            style={{ left: `${((minPriceInput - MIN_PRICE_BOUND) / (MAX_PRICE_BOUND - MIN_PRICE_BOUND)) * 100}%` }}
          />

          {/* Max Visual Handle Circle */}
          <div 
            className="absolute top-0.5 w-4 h-4 bg-white border-2 border-[#0284C7] sm:border-[#0D7E73] rounded-full shadow-xs -translate-x-1/2 pointer-events-none transition-transform group-hover:scale-110"
            style={{ left: `${((maxPriceInput - MIN_PRICE_BOUND) / (MAX_PRICE_BOUND - MIN_PRICE_BOUND)) * 100}%` }}
          />
        </div>

        {/* Min & Max Labels Underneath */}
        <div className="flex items-center justify-between text-xs text-slate-500 font-medium mb-4">
          <span>€{minPriceInput}</span>
          <span>€{maxPriceInput}</span>
        </div>

        {/* APPLY FILTER Button */}
        <button
          type="button"
          onClick={handleApplyPriceFilter}
          className="w-full py-2.5 rounded-lg bg-[#042F2C] hover:bg-[#0A4A44] text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-2xs cursor-pointer text-center"
        >
          {isPt ? 'APLICAR FILTRO' : 'APPLY FILTER'}
        </button>
      </div>

      {/* 4. BRAND SECTION */}
      <div className="pb-4 border-b border-slate-100">
        <button
          type="button"
          onClick={() => setIsBrandOpen(prev => !prev)}
          className="w-full flex items-center justify-between text-left cursor-pointer group select-none py-1"
          aria-expanded={isBrandOpen}
        >
          <div className="flex items-center gap-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800 group-hover:text-[#0D7E73] transition-colors">
              {isPt ? 'MARCA' : 'BRAND'}
            </h3>
            {selectedBrands.length > 0 && (
              <span className="px-1.5 py-0.5 rounded-full bg-[#0D7E73] text-white text-[10px] font-bold leading-none">
                {selectedBrands.length}
              </span>
            )}
          </div>
          <ChevronDown 
            className={`w-4 h-4 text-slate-400 group-hover:text-[#0D7E73] transition-transform duration-200 ${
              isBrandOpen ? 'rotate-180 text-[#0D7E73]' : ''
            }`} 
          />
        </button>

        <AnimatePresence initial={false}>
          {isBrandOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.22, ease: 'easeInOut' }}
              className="overflow-hidden pt-3"
            >
              {/* Search Brand Input */}
              <div className="relative mb-3.5">
                <input
                  type="text"
                  value={brandSearchQuery}
                  onChange={(e) => setBrandSearchQuery(e.target.value)}
                  placeholder={isPt ? 'Pesquisar Marca...' : 'Search Brand...'}
                  className="w-full pl-3 pr-8 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-800 placeholder:text-slate-400 focus:outline-hidden focus:border-[#0D7E73] focus:bg-white transition-all"
                />
                <Search className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>

              {/* Brand Checkboxes */}
              <div className="space-y-2.5 max-h-56 overflow-y-auto pr-1">
                {displayedBrands.length === 0 ? (
                  <div className="text-xs text-slate-400 italic py-1">
                    {isPt ? 'Nenhuma marca encontrada' : 'No brands found'}
                  </div>
                ) : (
                  displayedBrands.map(({ brand, count }) => {
                    const isChecked = selectedBrands.includes(brand);
                    return (
                      <label
                        key={brand}
                        onClick={() => toggleBrand(brand)}
                        className="flex items-center justify-between group cursor-pointer select-none"
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          <div className={`w-4 h-4 rounded flex items-center justify-center transition-all ${
                            isChecked 
                              ? 'bg-[#0284C7] sm:bg-[#0D7E73] text-white border border-[#0284C7] sm:border-[#0D7E73]' 
                              : 'border border-slate-300 bg-white group-hover:border-slate-400'
                          }`}>
                            {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                          </div>
                          <span className={`text-xs sm:text-[13px] truncate transition-colors ${
                            isChecked 
                              ? 'font-bold text-slate-900' 
                              : 'text-slate-600 group-hover:text-slate-900 font-normal'
                          }`}>
                            {brand}
                          </span>
                        </div>
                        <span className="text-xs text-slate-400 tabular-nums ml-2 font-normal">
                          ({count})
                        </span>
                      </label>
                    );
                  })
                )}
              </div>

              {!brandSearchQuery.trim() && allBrandsWithCounts.length > 7 && (
                <button
                  type="button"
                  onClick={() => setShowAllBrands(prev => !prev)}
                  className="mt-3 flex items-center gap-1 text-xs font-semibold text-[#0284C7] sm:text-[#0D7E73] hover:underline cursor-pointer"
                >
                  <span>{showAllBrands ? (isPt ? 'Ver Menos' : 'View Less') : (isPt ? 'Ver Mais' : 'View More')}</span>
                  {showAllBrands ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                </button>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* 5. CONDITION SECTION */}
      <div className="pb-4 border-b border-slate-100">
        <button
          type="button"
          onClick={() => setIsConditionOpen(prev => !prev)}
          className="w-full flex items-center justify-between text-left cursor-pointer group select-none py-1"
          aria-expanded={isConditionOpen}
        >
          <div className="flex items-center gap-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800 group-hover:text-[#0D7E73] transition-colors">
              {isPt ? 'ESTADO / CONDIÇÃO' : 'CONDITION'}
            </h3>
            {selectedConditions.length > 0 && (
              <span className="px-1.5 py-0.5 rounded-full bg-[#0D7E73] text-white text-[10px] font-bold leading-none">
                {selectedConditions.length}
              </span>
            )}
          </div>
          <ChevronDown 
            className={`w-4 h-4 text-slate-400 group-hover:text-[#0D7E73] transition-transform duration-200 ${
              isConditionOpen ? 'rotate-180 text-[#0D7E73]' : ''
            }`} 
          />
        </button>

        <AnimatePresence initial={false}>
          {isConditionOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.22, ease: 'easeInOut' }}
              className="overflow-hidden pt-3"
            >
              <div className="space-y-2.5">
                {conditionsList.map(cond => {
                  const isChecked = selectedConditions.includes(cond.id);
                  return (
                    <label
                      key={cond.id}
                      onClick={() => toggleCondition(cond.id)}
                      className="flex items-center justify-between group cursor-pointer select-none"
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <div className={`w-4 h-4 rounded flex items-center justify-center transition-all ${
                          isChecked 
                            ? 'bg-[#0284C7] sm:bg-[#0D7E73] text-white border border-[#0284C7] sm:border-[#0D7E73]' 
                            : 'border border-slate-300 bg-white group-hover:border-slate-400'
                        }`}>
                          {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                        <span className={`text-xs sm:text-[13px] truncate transition-colors ${
                          isChecked 
                            ? 'font-bold text-slate-900' 
                            : 'text-slate-600 group-hover:text-slate-900 font-normal'
                        }`}>
                          {cond.label}
                        </span>
                      </div>
                      <span className="text-xs text-slate-400 tabular-nums ml-2 font-normal">
                        ({cond.count})
                      </span>
                    </label>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* 6. CLEAR ALL FILTERS BUTTON */}
      <div>
        <button
          type="button"
          onClick={resetFilters}
          className="w-full py-2.5 px-4 rounded-lg border border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700 hover:text-slate-900 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-2xs"
        >
          <Trash2 className="w-3.5 h-3.5 text-slate-400" />
          <span>{isPt ? 'LIMPAR TODOS OS FILTROS' : 'CLEAR ALL FILTERS'}</span>
        </button>
      </div>

    </div>
  );

  return (
    <div className="w-full bg-[#F8FAFC] min-h-screen py-6 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* 📐 MASTER 2-COLUMN LAYOUT: (Left Sidebar + Right Main Content) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* 👈 LEFT SIDEBAR (lg:col-span-3 or desktop view) */}
          <aside className="hidden lg:block lg:col-span-3 sticky top-24">
            {renderSidebarContent()}
          </aside>

          {/* 📱 MOBILE FILTER DRAWER OVERLAY */}
          {isMobileFilterOpen && (
            <div className="fixed inset-0 z-50 lg:hidden flex">
              {/* Backdrop */}
              <div 
                onClick={() => setIsMobileFilterOpen(false)}
                className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity"
              />
              
              {/* Drawer Container */}
              <div className="relative ml-auto w-full max-w-xs sm:max-w-sm bg-white h-full shadow-2xl flex flex-col z-10 overflow-y-auto">
                <div className="flex items-center justify-between p-4 border-b border-slate-100 sticky top-0 bg-white z-20">
                  <div className="flex items-center gap-2">
                    <Filter className="w-4 h-4 text-[#0D7E73]" />
                    <span className="text-sm font-black uppercase tracking-wider text-[#042F2C]">
                      {isPt ? 'Filtros' : 'Filters'}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setIsMobileFilterOpen(false)}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="p-4 flex-1">
                  {renderSidebarContent()}
                </div>

                <div className="p-4 border-t border-slate-100 sticky bottom-0 bg-white z-20 flex gap-2">
                  <button
                    type="button"
                    onClick={resetFilters}
                    className="flex-1 py-2.5 rounded-lg border border-slate-200 text-xs font-bold text-slate-700 uppercase"
                  >
                    {isPt ? 'Limpar' : 'Reset'}
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsMobileFilterOpen(false)}
                    className="flex-1 py-2.5 rounded-lg bg-[#042F2C] text-white text-xs font-bold uppercase"
                  >
                    {isPt ? 'Ver Resultados' : 'Apply'}
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* 👉 RIGHT MAIN COLUMN (lg:col-span-9) */}
          <main className="lg:col-span-9 space-y-6">

            {/* 🏷️ Top Header: Shop Title + Subtitle + View Switcher */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  {isPt ? (
                    <>
                      Catálogo de <span className="text-[#0D7E73]">Equipamentos</span>
                    </>
                  ) : (
                    <>
                      <span className="text-[#0D7E73]">Equipment</span> Catalog
                    </>
                  )}
                </h1>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                  {isPt ? `A apresentar 1–${Math.min(12, filteredProducts.length)} de ${visibleProducts.length} resultados` : `Showing 1–${Math.min(12, filteredProducts.length)} of ${visibleProducts.length} results`}
                </p>
              </div>

              {/* View switchers & Mobile Filter Trigger */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setIsMobileFilterOpen(true)}
                  className="lg:hidden inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white border border-slate-200 text-xs font-bold text-slate-700 shadow-2xs hover:bg-slate-50"
                >
                  <Filter className="w-3.5 h-3.5 text-[#0D7E73]" />
                  <span>{isPt ? 'Filtros' : 'Filters'}</span>
                  {hasActiveFilters && (
                    <span className="w-2 h-2 rounded-full bg-[#0D7E73]" />
                  )}
                </button>

                <div className="hidden sm:flex items-center bg-white border border-slate-200 rounded-lg p-1 shadow-2xs">
                  <button
                    type="button"
                    onClick={() => setViewMode('grid')}
                    className={`p-1.5 rounded-md transition-colors ${
                      viewMode === 'grid' 
                        ? 'bg-[#042F2C] text-white' 
                        : 'text-slate-400 hover:text-slate-700'
                    }`}
                    title={isPt ? 'Grelha' : 'Grid View'}
                  >
                    <LayoutGrid className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setViewMode('list')}
                    className={`p-1.5 rounded-md transition-colors ${
                      viewMode === 'list' 
                        ? 'bg-[#042F2C] text-white' 
                        : 'text-slate-400 hover:text-slate-700'
                    }`}
                    title={isPt ? 'Lista' : 'List View'}
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* 🔍 Top Search & Sort Controls Bar */}
            <div className="bg-white rounded-xl border border-slate-200/90 p-3.5 shadow-2xs space-y-3">
              <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
                
                {/* Search Field */}
                <div className="relative flex-1 w-full">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={isPt ? 'Pesquisar produtos...' : 'Search products...'}
                    className="w-full pl-3.5 pr-10 py-2 text-xs sm:text-sm rounded-lg border border-slate-200 focus:outline-hidden focus:border-[#0D7E73] text-slate-800 placeholder:text-slate-400 bg-white"
                  />
                  <Search className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>

                {/* Sort Selector */}
                <div className="flex items-center gap-2 w-full sm:w-auto shrink-0">
                  <span className="text-xs font-semibold text-slate-500 whitespace-nowrap hidden sm:inline">
                    {isPt ? 'Ordenar por:' : 'Sort by:'}
                  </span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as any)}
                    className="w-full sm:w-44 px-3 py-2 text-xs sm:text-sm rounded-lg border border-slate-200 bg-white text-slate-800 font-semibold focus:outline-hidden focus:border-[#0D7E73]"
                  >
                    <option value="featured">{isPt ? 'Destaques' : 'Featured'}</option>
                    <option value="price-asc">{isPt ? 'Preço: Menor' : 'Price: Low to High'}</option>
                    <option value="price-desc">{isPt ? 'Preço: Maior' : 'Price: High to Low'}</option>
                    <option value="name">{isPt ? 'Nome: A-Z' : 'Name: A-Z'}</option>
                  </select>
                </div>

              </div>

              {/* 🏷️ ACTIVE FILTERS TAGS (Exact Match to Screenshot) */}
              {hasActiveFilters && (
                <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-slate-100 text-xs">
                  <span className="text-slate-500 font-semibold">{isPt ? 'Filtros ativos:' : 'Active filters:'}</span>
                  
                  {/* Category Pill */}
                  {selectedCategory !== 'all' && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-100 text-slate-800 font-medium">
                      <span>{categoriesList.find(c => c.id === selectedCategory)?.label}</span>
                      <button 
                        type="button" 
                        onClick={() => setSelectedCategory('all')} 
                        className="text-slate-400 hover:text-slate-700 cursor-pointer"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  )}

                  {/* Brand Pills */}
                  {selectedBrands.map(brand => (
                    <span key={brand} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-100 text-slate-800 font-medium">
                      <span>{brand}</span>
                      <button 
                        type="button" 
                        onClick={() => toggleBrand(brand)} 
                        className="text-slate-400 hover:text-slate-700 cursor-pointer"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  ))}

                  {/* Condition Pills */}
                  {selectedConditions.map(cond => (
                    <span key={cond} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-100 text-slate-800 font-medium">
                      <span>{cond}</span>
                      <button 
                        type="button" 
                        onClick={() => toggleCondition(cond)} 
                        className="text-slate-400 hover:text-slate-700 cursor-pointer"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  ))}

                  {/* Price Range Pill */}
                  {(appliedPriceRange[0] > MIN_PRICE_BOUND || appliedPriceRange[1] < MAX_PRICE_BOUND) && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-100 text-slate-800 font-medium">
                      <span>€{appliedPriceRange[0]} - €{appliedPriceRange[1]}</span>
                      <button 
                        type="button" 
                        onClick={() => {
                          setMinPriceInput(MIN_PRICE_BOUND);
                          setMaxPriceInput(MAX_PRICE_BOUND);
                          setAppliedPriceRange([MIN_PRICE_BOUND, MAX_PRICE_BOUND]);
                        }} 
                        className="text-slate-400 hover:text-slate-700 cursor-pointer"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  )}

                  {/* Search Query Pill */}
                  {searchQuery.trim() && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-100 text-slate-800 font-medium">
                      <span>"{searchQuery}"</span>
                      <button 
                        type="button" 
                        onClick={() => setSearchQuery('')} 
                        className="text-slate-400 hover:text-slate-700 cursor-pointer"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  )}

                  {/* Clear All Link on the right */}
                  <button
                    type="button"
                    onClick={resetFilters}
                    className="text-[#0284C7] sm:text-[#0D7E73] hover:underline font-semibold ml-auto cursor-pointer"
                  >
                    {isPt ? 'Limpar Tudo' : 'Clear All'}
                  </button>
                </div>
              )}
            </div>

            {/* 📦 3-COLUMN MAIN PRODUCT GRID */}
            <div>
              {filteredProducts.length === 0 ? (
                <div className="bg-white rounded-2xl border border-slate-200/90 p-12 text-center shadow-2xs">
                  <Search className="w-8 h-8 text-slate-400 mx-auto mb-3" />
                  <h4 className="text-base font-bold text-slate-900 mb-1">
                    {isPt ? 'Nenhum equipamento encontrado' : 'No products found'}
                  </h4>
                  <p className="text-xs text-slate-500 mb-4">
                    {isPt ? 'Tente ajustar os filtros ou pesquisar outro termo.' : 'Try adjusting your search query or reset filters.'}
                  </p>
                  <button
                    type="button"
                    onClick={resetFilters}
                    className="px-5 py-2.5 rounded-xl bg-[#042F2C] hover:bg-[#0A4A44] transition-colors text-white text-xs font-bold cursor-pointer shadow-xs"
                  >
                    {isPt ? 'Ver Todos os Produtos' : 'Show All Products'}
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                  {filteredProducts.map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      lang={lang}
                      onViewDetails={onNavigateProductDetail}
                      onRequestQuote={onRequestQuote}
                      onAddToRfq={onAddToRfq}
                      isInRfq={rfqProductIds.includes(product.id)}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* 🛡️ BOTTOM 4-PILLAR TRUST BAR (Exact match to screenshot bottom) */}
            <div className="bg-[#F1F5F9]/80 border border-slate-200/80 rounded-2xl p-6 shadow-2xs">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-y md:divide-y-0 md:divide-x divide-slate-200/80">
                
                {/* 1. Warranty */}
                <div className="flex items-center gap-3.5 pt-3 md:pt-0">
                  <div className="w-11 h-11 rounded-xl bg-blue-50 sm:bg-teal-50 text-[#0284C7] sm:text-[#0D7E73] flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-6 h-6 stroke-[2.2]" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                      {isPt ? 'Garantia até 36 Meses' : '1 Year Warranty'}
                    </h4>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      {isPt ? 'Certificado Trofa Lab' : 'Warranty Included'}
                    </p>
                  </div>
                </div>

                {/* 2. Fast Delivery */}
                <div className="flex items-center gap-3.5 pt-3 md:pt-0 md:pl-6">
                  <div className="w-11 h-11 rounded-xl bg-blue-50 sm:bg-teal-50 text-[#0284C7] sm:text-[#0D7E73] flex items-center justify-center shrink-0">
                    <Truck className="w-6 h-6 stroke-[2.2]" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                      {isPt ? 'Envio Expresso 24/48h' : 'Fast & Secure'}
                    </h4>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      {isPt ? 'Expedição Nacional' : 'Shipping'}
                    </p>
                  </div>
                </div>

                {/* 3. Returns */}
                <div className="flex items-center gap-3.5 pt-3 md:pt-0 md:pl-6">
                  <div className="w-11 h-11 rounded-xl bg-blue-50 sm:bg-teal-50 text-[#0284C7] sm:text-[#0D7E73] flex items-center justify-center shrink-0">
                    <RefreshCw className="w-6 h-6 stroke-[2.2]" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                      {isPt ? '14 Dias Devolução' : '14 Days'}
                    </h4>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      {isPt ? 'Sem Complicações' : 'Return Policy'}
                    </p>
                  </div>
                </div>

                {/* 4. Support */}
                <div className="flex items-center gap-3.5 pt-3 md:pt-0 md:pl-6">
                  <div className="w-11 h-11 rounded-xl bg-blue-50 sm:bg-teal-50 text-[#0284C7] sm:text-[#0D7E73] flex items-center justify-center shrink-0">
                    <Headphones className="w-6 h-6 stroke-[2.2]" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                      {isPt ? 'Suporte Técnico 24/7' : '24/7'}
                    </h4>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      {isPt ? 'Engenheiros Dedicados' : 'Support'}
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* 🔘 QUICK CATEGORY HORIZONTAL STRIP (6 Square Cards) */}
            <div className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-2xs">
              <h3 className="text-xs font-black uppercase tracking-wider text-[#042F2C] mb-4">
                {isPt ? 'Explorar Por Categoria' : 'Shop By Category'}
              </h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
                {quickCategoryStrip.map((item, idx) => (
                  <div
                    key={idx}
                    onClick={() => setSelectedCategory(item.id)}
                    className="group flex flex-col items-center text-center p-3 rounded-xl border border-slate-100 hover:border-[#0D7E73] bg-slate-50/50 hover:bg-[#F0FDFA] transition-all cursor-pointer"
                  >
                    <div className="w-16 h-16 rounded-lg bg-white p-1 mb-2 flex items-center justify-center overflow-hidden border border-slate-100 shadow-2xs group-hover:scale-105 transition-transform">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover rounded-md"
                      />
                    </div>
                    <span className="text-xs font-bold text-[#042F2C] group-hover:text-[#0D7E73] leading-tight">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* ⏰ "DEAL OF THE DAYS" SPOTLIGHT SECTION */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-[#0D7E73]" />
                  <h3 className="text-base font-black text-[#042F2C]">
                    {isPt ? 'Ofertas Exclusivas do Dia' : 'Deal Of The Days'}
                  </h3>
                </div>
                <span className="text-xs font-bold text-[#0D7E73] bg-[#F0FDFA] px-2.5 py-1 rounded-full border border-[#CCFBF1]">
                  {isPt ? 'Stock Limitado' : 'Limited Time Offer'}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                
                {/* Deal 1 */}
                {dealOfTheDay1 && (
                  <div className="bg-white rounded-2xl border border-slate-200/90 p-4 shadow-2xs flex flex-col sm:flex-row gap-4 hover:shadow-md transition-shadow">
                    <div 
                      onClick={() => onNavigateProductDetail(dealOfTheDay1.id)}
                      className="w-full sm:w-40 h-40 bg-slate-50 rounded-xl flex items-center justify-center shrink-0 cursor-pointer overflow-hidden"
                    >
                      <img
                        src={dealOfTheDay1.images[0]}
                        alt={dealOfTheDay1.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform"
                      />
                    </div>

                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <h4 
                          onClick={() => onNavigateProductDetail(dealOfTheDay1.id)}
                          className="text-xs sm:text-sm font-bold text-[#042F2C] line-clamp-2 hover:text-[#0D7E73] cursor-pointer mb-1"
                        >
                          {dealOfTheDay1.name}
                        </h4>
                        
                        <div className="flex items-center gap-1 text-amber-400 mb-1.5">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                          ))}
                        </div>

                        <div className="flex items-baseline gap-2 mb-3">
                          <span className="text-base font-black text-[#0D7E73]">
                            €{dealOfTheDay1.price?.toFixed(2)}
                          </span>
                        </div>
                      </div>

                      {/* Countdown Timer Boxes */}
                      <div className="grid grid-cols-4 gap-1.5 text-center font-mono">
                        <div className="bg-[#042F2C] border border-[#0D7E73]/40 text-white rounded-lg p-1">
                          <div className="text-xs font-black text-[#5EEAD4]">{String(timeLeft.days).padStart(2, '0')}</div>
                          <div className="text-[8px] uppercase text-teal-200/80">{isPt ? 'Dias' : 'Days'}</div>
                        </div>
                        <div className="bg-[#042F2C] border border-[#0D7E73]/40 text-white rounded-lg p-1">
                          <div className="text-xs font-black text-[#5EEAD4]">{String(timeLeft.hours).padStart(2, '0')}</div>
                          <div className="text-[8px] uppercase text-teal-200/80">{isPt ? 'Horas' : 'Hours'}</div>
                        </div>
                        <div className="bg-[#042F2C] border border-[#0D7E73]/40 text-white rounded-lg p-1">
                          <div className="text-xs font-black text-[#5EEAD4]">{String(timeLeft.minutes).padStart(2, '0')}</div>
                          <div className="text-[8px] uppercase text-teal-200/80">Min</div>
                        </div>
                        <div className="bg-[#042F2C] border border-[#0D7E73]/40 text-white rounded-lg p-1">
                          <div className="text-xs font-black text-[#5EEAD4]">{String(timeLeft.seconds).padStart(2, '0')}</div>
                          <div className="text-[8px] uppercase text-teal-200/80">Seg</div>
                        </div>
                      </div>

                    </div>
                  </div>
                )}

                {/* Deal 2 */}
                {dealOfTheDay2 && (
                  <div className="bg-white rounded-2xl border border-slate-200/90 p-4 shadow-2xs flex flex-col sm:flex-row gap-4 hover:shadow-md transition-shadow">
                    <div 
                      onClick={() => onNavigateProductDetail(dealOfTheDay2.id)}
                      className="w-full sm:w-40 h-40 bg-slate-50 rounded-xl flex items-center justify-center shrink-0 cursor-pointer overflow-hidden"
                    >
                      <img
                        src={dealOfTheDay2.images[0]}
                        alt={dealOfTheDay2.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform"
                      />
                    </div>

                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <h4 
                          onClick={() => onNavigateProductDetail(dealOfTheDay2.id)}
                          className="text-xs sm:text-sm font-bold text-[#042F2C] line-clamp-2 hover:text-[#0D7E73] cursor-pointer mb-1"
                        >
                          {dealOfTheDay2.name}
                        </h4>
                        
                        <div className="flex items-center gap-1 text-amber-400 mb-1.5">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                          ))}
                        </div>

                        <div className="flex items-baseline gap-2 mb-3">
                          <span className="text-base font-black text-[#0D7E73]">
                            €{dealOfTheDay2.price?.toFixed(2)}
                          </span>
                        </div>
                      </div>

                      {/* Countdown Timer Boxes */}
                      <div className="grid grid-cols-4 gap-1.5 text-center font-mono">
                        <div className="bg-[#042F2C] border border-[#0D7E73]/40 text-white rounded-lg p-1">
                          <div className="text-xs font-black text-[#5EEAD4]">{String(timeLeft.days).padStart(2, '0')}</div>
                          <div className="text-[8px] uppercase text-teal-200/80">{isPt ? 'Dias' : 'Days'}</div>
                        </div>
                        <div className="bg-[#042F2C] border border-[#0D7E73]/40 text-white rounded-lg p-1">
                          <div className="text-xs font-black text-[#5EEAD4]">{String(timeLeft.hours).padStart(2, '0')}</div>
                          <div className="text-[8px] uppercase text-teal-200/80">{isPt ? 'Horas' : 'Hours'}</div>
                        </div>
                        <div className="bg-[#042F2C] border border-[#0D7E73]/40 text-white rounded-lg p-1">
                          <div className="text-xs font-black text-[#5EEAD4]">{String(timeLeft.minutes).padStart(2, '0')}</div>
                          <div className="text-[8px] uppercase text-teal-200/80">Min</div>
                        </div>
                        <div className="bg-[#042F2C] border border-[#0D7E73]/40 text-white rounded-lg p-1">
                          <div className="text-xs font-black text-[#5EEAD4]">{String(timeLeft.seconds).padStart(2, '0')}</div>
                          <div className="text-[8px] uppercase text-teal-200/80">Seg</div>
                        </div>
                      </div>

                    </div>
                  </div>
                )}

              </div>
            </div>

            {/* 📰 "FROM THE BLOG / ARTIGOS TÉCNICOS" SECTION */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base font-black text-[#042F2C]">
                  {isPt ? 'Artigos & Guias do Laboratório' : 'From The Blog'}
                </h3>
                <span className="text-xs text-slate-500">
                  {isPt ? 'Notícias & Insights Técnicos' : 'Technical Insights'}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {blogArticles.map((art) => (
                  <div 
                    key={art.id}
                    className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-2xs hover:shadow-md transition-all group flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-full h-36 bg-slate-100 overflow-hidden">
                        <img
                          src={art.image}
                          alt={art.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-4">
                        <div className="flex items-center gap-1 text-[11px] font-bold text-[#0D7E73] mb-1.5">
                          <Calendar className="w-3 h-3" />
                          <span>{art.date}</span>
                        </div>
                        <h4 className="text-xs sm:text-sm font-bold text-[#042F2C] group-hover:text-[#0D7E73] transition-colors line-clamp-2 mb-2 leading-snug">
                          {art.title}
                        </h4>
                        <p className="text-xs text-[#64748B] line-clamp-2 leading-relaxed">
                          {art.excerpt}
                        </p>
                      </div>
                    </div>

                    <div className="p-4 pt-0">
                      <ActionPrimaryButton
                        type="button"
                        onClick={() => onRequestQuote()}
                        size="sm"
                      >
                        {isPt ? 'Saber Mais' : 'Read More'}
                      </ActionPrimaryButton>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </main>

        </div>

      </div>
    </div>
  );
};

