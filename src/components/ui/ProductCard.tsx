import React, { useState } from 'react';
import { Product, Language } from '../../types';
import { Heart, Eye, ShoppingCart, Check } from 'lucide-react';
import { ActionPrimaryButton } from './AnimatedButtons';

interface ProductCardProps {
  product: Product;
  lang: Language;
  onViewDetails: (productId: string) => void;
  onRequestQuote: (product: Product) => void;
  onAddToRfq?: (product: Product) => void;
  isInRfq?: boolean;
  isNew?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  lang,
  onViewDetails,
  onRequestQuote,
  onAddToRfq,
  isInRfq = false,
}) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [justAdded, setJustAdded] = useState(false);
  const isPt = lang === 'pt';

  const currentPrice = product.price;

  const handleCardClick = () => {
    onViewDetails(product.id);
  };

  const handleAddToCartClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onAddToRfq) {
      onAddToRfq(product);
    } else {
      onRequestQuote(product);
    }
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1500);
  };

  const handleWishlistClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsWishlisted(prev => !prev);
  };

  const handleQuickViewClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onViewDetails(product.id);
  };

  return (
    <div 
      id={`product-card-${product.id}`}
      onClick={handleCardClick}
      className="group relative flex flex-col bg-white rounded-2xl border border-slate-200/90 hover:border-[#0D7E73] shadow-2xs hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer h-full"
    >
      {/* 1. PRODUCT IMAGE (Completely clean - No badges) */}
      <div className="relative w-full h-48 sm:h-52 bg-slate-100 flex items-center justify-center overflow-hidden border-b border-slate-100 shrink-0">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
          referrerPolicy="no-referrer"
        />

        {/* 2. HOVER-ONLY ACTION ICONS (Heart + Eye) */}
        <div className="absolute top-2.5 right-2.5 z-10 flex flex-col gap-1.5 opacity-0 translate-x-1 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 group-hover:pointer-events-auto transition-all duration-200 ease-out">
          <button
            type="button"
            onClick={handleWishlistClick}
            className={`w-8 h-8 rounded-full flex items-center justify-center bg-white/95 backdrop-blur-xs border border-slate-200 shadow-md transition-all cursor-pointer ${
              isWishlisted 
                ? 'text-rose-500 scale-105' 
                : 'text-slate-400 hover:text-rose-500 hover:scale-110'
            }`}
            aria-label="Add to wishlist"
            title={isPt ? 'Adicionar aos Favoritos' : 'Add to Wishlist'}
          >
            <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-rose-500 text-rose-500' : ''}`} />
          </button>

          <button
            type="button"
            onClick={handleQuickViewClick}
            className="w-8 h-8 rounded-full flex items-center justify-center bg-white/95 backdrop-blur-xs border border-slate-200 text-slate-500 hover:text-[#0D7E73] hover:scale-110 shadow-md transition-all cursor-pointer"
            aria-label="Quick View / Specs"
            title={isPt ? 'Ver Detalhes' : 'Quick View'}
          >
            <Eye className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* 3. PRODUCT INFORMATION BODY */}
      <div className="flex-1 flex flex-col p-4 justify-between">
        <div>
          {/* Brand */}
          <div className="text-xs font-mono font-bold text-[#0D7E73] uppercase tracking-wider mb-1">
            {product.brand}
          </div>

          {/* Product Title (Truncated with ...) */}
          <h3 
            className="text-sm font-bold text-[#042F2C] group-hover:text-[#0D7E73] transition-colors line-clamp-2 mb-2 leading-snug min-h-[2.5rem]"
            title={product.name}
          >
            {product.name}
          </h3>

          {/* Price */}
          <div className="mb-4 pt-2 border-t border-slate-100">
            {currentPrice ? (
              <div className="flex items-baseline gap-1.5">
                <span className="text-base sm:text-lg font-black text-[#042F2C]">
                  €{currentPrice.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </span>
                <span className="text-[11px] text-slate-400 font-medium">(+IVA)</span>
              </div>
            ) : (
              <span className="text-xs sm:text-sm font-bold text-[#0D7E73]">
                {isPt ? 'Cotação Sob Consulta' : 'Quote on Request'}
              </span>
            )}
          </div>
        </div>

        {/* 4. SINGLE "ADD TO CART" PRIMARY BUTTON */}
        <div className="pt-1">
          <ActionPrimaryButton
            type="button"
            id={`btn-cart-${product.id}`}
            onClick={handleAddToCartClick}
            size="sm"
            className="w-full"
            icon={justAdded || isInRfq ? <Check className="w-3.5 h-3.5 stroke-[2.5]" /> : <ShoppingCart className="w-3.5 h-3.5" />}
          >
            {justAdded || isInRfq ? (isPt ? 'No Carrinho ✓' : 'Added to Cart ✓') : (isPt ? 'Adicionar ao Carrinho' : 'Add to Cart')}
          </ActionPrimaryButton>
        </div>
      </div>
    </div>
  );
};
