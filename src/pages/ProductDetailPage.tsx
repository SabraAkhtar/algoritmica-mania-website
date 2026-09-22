import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { ProductDetailView } from '../views/ProductDetailView';
import { ProductCategory, Product } from '../types';
import { productsData } from '../data/products';

export const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { lang, openQuoteDrawer, addToRfq, rfqProducts } = useApp();

  const productId = id || productsData[0]?.id || '';

  const handleBack = () => {
    navigate(-1);
  };

  const handleNavigateHome = () => {
    navigate('/');
  };

  const handleNavigateProducts = (category?: ProductCategory) => {
    if (category) {
      navigate(`/products?category=${category}`);
    } else {
      navigate('/products');
    }
  };

  const handleNavigateProductDetail = (newProductId: string) => {
    navigate(`/products/${newProductId}`);
  };

  const handleRequestQuote = (product?: Product) => {
    openQuoteDrawer(product);
  };

  const handleAddToRfq = (product: Product, quantity?: number) => {
    addToRfq(product, quantity || 1);
  };


  return (
    <ProductDetailView
      productId={productId}
      lang={lang}
      onBack={handleBack}
      onNavigateHome={handleNavigateHome}
      onNavigateProducts={handleNavigateProducts}
      onNavigateProductDetail={handleNavigateProductDetail}
      onRequestQuote={handleRequestQuote}
      onAddToRfq={handleAddToRfq}
      rfqProductIds={rfqProducts.map(p => p.id)}
    />
  );
};

export default ProductDetailPage;
