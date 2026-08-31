import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Product, Language } from '../../types';
import { productsData } from '../../data/products';
import { servicesData } from '../../data/services';
import { Search, X, Laptop, ArrowRight, ShieldCheck, Tag, Sparkles, Command } from 'lucide-react';
import { translations } from '../../data/translations';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  onSelectProduct: (productId: string) => void;
  onSelectService: (serviceSlug: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  lang,
  onSelectProduct,
  onSelectService
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto focus input when modal opens and reset search term
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
      return () => clearTimeout(timer);
    } else {
      setSearchTerm('');
      setSelectedIndex(0);
    }
  }, [isOpen]);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Filter Products
  const filteredProducts = useMemo(() => {
    if (!searchTerm.trim()) return productsData.slice(0, 5);
    const query = searchTerm.toLowerCase().trim();
    return productsData.filter(p => 
      p.name.toLowerCase().includes(query) ||
      p.brand.toLowerCase().includes(query) ||
      p.keySpecs.toLowerCase().includes(query) ||
      p.category.toLowerCase().includes(query) ||
      p.subCategory.toLowerCase().includes(query) ||
      p.description.toLowerCase().includes(query) ||
      p.features.some(f => f.toLowerCase().includes(query))
    );
  }, [searchTerm]);

  // Filter Services
  const filteredServices = useMemo(() => {
    if (!searchTerm.trim()) return servicesData.slice(0, 3);
    const query = searchTerm.toLowerCase().trim();
    return servicesData.filter(s =>
      s.title.toLowerCase().includes(query) ||
      s.shortDescription.toLowerCase().includes(query) ||
      s.fullDescription.toLowerCase().includes(query) ||
      s.capabilities.some(c => c.toLowerCase().includes(query)) ||
      s.businessValue.some(b => b.toLowerCase().includes(query))
    );
  }, [searchTerm]);

  const quickTags = [
    { label: 'ThinkPad', query: 'ThinkPad' },
    { label: 'Dell Latitude', query: 'Dell' },
    { label: 'HP EliteBook', query: 'HP' },
    { label: 'Servidores PowerEdge', query: 'Server' },
    { label: 'Fortinet Firewall', query: 'Fortinet' },
    { label: 'Cisco Switches', query: 'Cisco' }
  ];

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-start justify-center pt-12 sm:pt-20 px-3 sm:px-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="search-modal-title"
    >
      {/* Backdrop with Blur */}
      <div 
        className="fixed inset-0 bg-[#042F2C]/65 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Search Modal Window */}
      <div 
        id="search-dialog-box"
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-[#CCFBF1] overflow-hidden z-10 animate-fade-in flex flex-col max-h-[85vh]"
      >
        {/* Search Header / Input Bar */}
        <div className="flex items-center gap-3 p-3.5 sm:p-4 border-b border-[#CCFBF1] bg-[#F0FDFA]">
          <Search className="w-5 h-5 text-[#0D7E73] shrink-0 ml-1" />
          <input
            ref={inputRef}
            id="global-search-input"
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder={translations[lang].nav.searchPlaceholder}
            className="w-full bg-transparent text-sm sm:text-base text-[#042F2C] placeholder-[#64748B] focus:outline-none font-medium"
            autoComplete="off"
            spellCheck="false"
          />

          {searchTerm && (
            <button 
              type="button"
              onClick={() => {
                setSearchTerm('');
                inputRef.current?.focus();
              }}
              aria-label="Clear search"
              className="text-[#64748B] hover:text-[#042F2C] p-1 rounded-md hover:bg-white transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          )}

          <button
            type="button"
            onClick={onClose}
            aria-label="Close search (ESC)"
            className="text-[11px] font-bold text-[#0D7E73] hover:text-[#042F2C] px-2 py-1 bg-white border border-[#CCFBF1] hover:border-[#0D7E73] rounded-md shadow-2xs transition-colors cursor-pointer flex items-center gap-1"
          >
            ESC
          </button>
        </div>

        {/* Quick Tag Recommendations (When no or short query) */}
        {!searchTerm && (
          <div className="px-4 py-2.5 bg-white border-b border-[#F0FDFA] flex items-center gap-1.5 overflow-x-auto no-scrollbar text-xs">
            <span className="text-[11px] font-semibold text-[#64748B] uppercase tracking-wider shrink-0 mr-1 flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-[#0D7E73]" />
              {lang === 'pt' ? 'Sugestões:' : 'Popular:'}
            </span>
            {quickTags.map((tag) => (
              <button
                key={tag.label}
                type="button"
                onClick={() => {
                  setSearchTerm(tag.query);
                  inputRef.current?.focus();
                }}
                className="shrink-0 px-2.5 py-1 rounded-full bg-[#F0FDFA] hover:bg-[#CCFBF1] text-[#0D7E73] text-[11px] font-medium border border-[#CCFBF1] transition-colors cursor-pointer"
              >
                {tag.label}
              </button>
            ))}
          </div>
        )}

        {/* Results Scroll Area */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-6">
          {/* Products Section */}
          <div>
            <div className="flex items-center justify-between text-xs font-bold font-mono uppercase text-[#042F2C] tracking-wider mb-2.5">
              <span>{lang === 'pt' ? 'EQUIPAMENTOS & HARDWARE' : 'HARDWARE & EQUIPMENT'}</span>
              <span className="text-[#0D7E73] bg-[#F0FDFA] px-2 py-0.5 rounded-full text-[10px] font-bold border border-[#CCFBF1]">
                {filteredProducts.length} {lang === 'pt' ? 'resultados' : 'items'}
              </span>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-xs text-[#64748B] py-3 text-center bg-[#F0FDFA]/50 rounded-xl border border-dashed border-[#CCFBF1]">
                {lang === 'pt' 
                  ? 'Nenhum equipamento encontrado com estes termos. Tente pesquisar por marcas como "Lenovo", "Dell", "HP" ou categorias como "Laptops", "Servidores".' 
                  : 'No hardware matching your query. Try searching for brands like "Lenovo", "Dell", "HP" or categories like "Laptops", "Servers".'}
              </div>
            ) : (
              <div className="space-y-1.5">
                {filteredProducts.map(prod => (
                  <div
                    key={prod.id}
                    onClick={() => {
                      onSelectProduct(prod.id);
                      onClose();
                    }}
                    className="flex items-center justify-between p-2.5 sm:p-3 rounded-xl hover:bg-[#F0FDFA] border border-transparent hover:border-[#CCFBF1] transition-all cursor-pointer group"
                  >
                    <div className="flex items-center gap-3 min-w-0 flex-1">
                      <img 
                        src={prod.images[0]} 
                        alt={prod.name} 
                        className="w-11 h-11 sm:w-12 sm:h-12 rounded-lg object-cover bg-white p-1 border border-[#CCFBF1] shrink-0"
                      />
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-1.5 mb-0.5">
                          <span className="text-[10px] font-bold text-[#0D7E73] uppercase tracking-wide">{prod.brand}</span>
                          <span className="text-[10px] text-[#042F2C] bg-[#F0FDFA] border border-[#CCFBF1] px-1.5 py-0.2 rounded font-medium truncate">
                            {prod.condition}
                          </span>
                        </div>
                        <div className="text-xs sm:text-sm font-bold text-[#042F2C] group-hover:text-[#0D7E73] transition-colors truncate">
                          {prod.name}
                        </div>
                        <div className="text-[11px] text-[#64748B] truncate">
                          {prod.keySpecs}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2.5 text-right shrink-0 ml-3">
                      {prod.price ? (
                        <span className="text-xs sm:text-sm font-black text-[#042F2C]">€{prod.price}</span>
                      ) : (
                        <span className="text-[11px] font-bold text-[#0D7E73] bg-[#F0FDFA] px-2 py-0.5 rounded">Quote</span>
                      )}
                      <ArrowRight className="w-4 h-4 text-[#64748B] group-hover:text-[#0D7E73] group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Services Section */}
          <div className="pt-4 border-t border-[#CCFBF1]">
            <div className="flex items-center justify-between text-xs font-bold font-mono uppercase text-[#042F2C] tracking-wider mb-2.5">
              <span>{lang === 'pt' ? 'SERVIÇOS DE ENGENHARIA & IT' : 'ENGINEERING & IT SERVICES'}</span>
              <span className="text-[#0D7E73] bg-[#F0FDFA] px-2 py-0.5 rounded-full text-[10px] font-bold border border-[#CCFBF1]">
                {filteredServices.length}
              </span>
            </div>

            {filteredServices.length === 0 ? (
              <div className="text-xs text-[#64748B] py-2 text-center">
                {lang === 'pt' ? 'Nenhum serviço correspondente.' : 'No matching services.'}
              </div>
            ) : (
              <div className="space-y-1.5">
                {filteredServices.map(srv => (
                  <div
                    key={srv.slug}
                    onClick={() => {
                      onSelectService(srv.slug);
                      onClose();
                    }}
                    className="flex items-center justify-between p-2.5 sm:p-3 rounded-xl hover:bg-[#F0FDFA] border border-transparent hover:border-[#CCFBF1] transition-all cursor-pointer group"
                  >
                    <div className="min-w-0 flex-1">
                      <div className="text-xs sm:text-sm font-bold text-[#042F2C] group-hover:text-[#0D7E73] transition-colors">
                        {srv.title}
                      </div>
                      <div className="text-[11px] text-[#64748B] line-clamp-1 mt-0.5">
                        {srv.shortDescription}
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#64748B] group-hover:text-[#0D7E73] group-hover:translate-x-1 transition-all shrink-0 ml-3" />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Modal Footer Tip */}
        <div className="px-4 py-2.5 bg-[#F0FDFA] border-t border-[#CCFBF1] flex items-center justify-between text-[11px] text-[#64748B]">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 font-medium text-[#042F2C]">
              <kbd className="px-1.5 py-0.5 bg-white border border-[#CCFBF1] rounded text-[10px] font-bold">Ctrl</kbd> + <kbd className="px-1.5 py-0.5 bg-white border border-[#CCFBF1] rounded text-[10px] font-bold">K</kbd>
            </span>
            <span>{lang === 'pt' ? 'para abrir em qualquer página' : 'to open anywhere'}</span>
          </div>

          <span className="text-[10px] font-bold text-[#0D7E73]">ALGoritmica MANIA</span>
        </div>
      </div>
    </div>
  );
};
