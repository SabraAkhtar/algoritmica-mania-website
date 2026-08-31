import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { ProductsView } from '../views/ProductsView';
import { ProductCategory, Product } from '../types';

export const ProductsPage: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { lang, openQuoteDrawer, addToRfq, rfqProducts } = useApp();

  const categoryParam = searchParams.get('category') as ProductCategory | null;
  const queryParam = searchParams.get('q') || '';

  const handleNavigateProductDetail = (productId: string) => {
    navigate(`/products/${productId}`);
  };

  const handleRequestQuote = (product?: Product) => {
    openQuoteDrawer(product);
  };

  const handleAddToRfq = (product: Product) => {
    addToRfq(product);
  };

  return (
    <ProductsView
      key={`products-${categoryParam || 'all'}-${queryParam}`}
      lang={lang}
      initialCategory={categoryParam || undefined}
      initialQuery={queryParam}
      onNavigateProductDetail={handleNavigateProductDetail}
      onRequestQuote={handleRequestQuote}
      onAddToRfq={handleAddToRfq}
      rfqProductIds={rfqProducts.map(p => p.id)}
    />
  );
};

export default ProductsPage;
