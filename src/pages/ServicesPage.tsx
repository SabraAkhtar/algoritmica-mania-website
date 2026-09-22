import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { ServicesView } from '../views/ServicesView';

export const ServicesPage: React.FC = () => {
  const navigate = useNavigate();
  const { lang, openQuoteDrawer } = useApp();

  const handleNavigateServiceDetail = (slug?: string) => {
    if (slug) {
      navigate(`/services/${slug}`);
    } else {
      navigate('/services');
    }
  };

  const handleRequestQuote = () => {
    openQuoteDrawer();
  };

  return (
    <ServicesView
      lang={lang}
      onNavigateServiceDetail={handleNavigateServiceDetail}
      onRequestQuote={handleRequestQuote}
    />
  );
};

export default ServicesPage;
