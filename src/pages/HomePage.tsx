import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { HomeView } from '../views/HomeView';
import { ProductCategory, Product } from '../types';

export const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const { lang, openQuoteDrawer, addToRfq, rfqProducts } = useApp();

  const handleNavigateProducts = (category?: ProductCategory, query?: string) => {
    const params = new URLSearchParams();
    if (category) params.set('category', category);
    if (query) params.set('q', query);
    const queryString = params.toString();
    navigate(`/products${queryString ? `?${queryString}` : ''}`);
  };

  const handleNavigateProductDetail = (productId: string) => {
    navigate(`/products/${productId}`);
  };

  const handleNavigateServices = (slug?: string) => {
    if (slug) navigate(`/services/${slug}`);
    else navigate('/services');
  };

  const handleNavigateSolutions = () => navigate('/solutions');
  const handleNavigateSellEquipment = () => navigate('/sell-equipment');
  const handleNavigateWhyChooseUs = () => navigate('/about');
  const handleNavigateOurApproach = () => navigate('/about');

  const handleRequestQuote = (product?: Product) => {
    if (product) {
      openQuoteDrawer(product);
    } else {
      const elem = document.getElementById('section-final-quote');
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
        const firstInput = elem.querySelector('input') as HTMLInputElement | null;
        if (firstInput) {
          setTimeout(() => firstInput.focus(), 500);
        }
      } else {
        openQuoteDrawer();
      }
    }
  };

  const handleAddToRfq = (product: Product) => {
    addToRfq(product);
  };

  return (
    <HomeView
      lang={lang}
      onNavigateProducts={handleNavigateProducts}
      onNavigateProductDetail={handleNavigateProductDetail}
      onNavigateServices={handleNavigateServices}
      onNavigateSolutions={handleNavigateSolutions}
      onNavigateSellEquipment={handleNavigateSellEquipment}
      onNavigateWhyChooseUs={handleNavigateWhyChooseUs}
      onNavigateOurApproach={handleNavigateOurApproach}
      onRequestQuote={handleRequestQuote}
      onAddToRfq={handleAddToRfq}
      rfqProductIds={rfqProducts.map(p => p.id)}
    />
  );
};


export default HomePage;
