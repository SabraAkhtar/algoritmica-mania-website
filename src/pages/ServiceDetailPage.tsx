import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { ServiceDetailView } from '../views/ServiceDetailView';
import { servicesData } from '../data/services';

export const ServiceDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { lang, openQuoteDrawer } = useApp();

  const currentSlug = slug || servicesData[0]?.slug || 'it-support';

  const handleBack = () => {
    navigate('/services');
  };

  const handleRequestQuote = () => {
    openQuoteDrawer();
  };

  const handleNavigateDetail = (newSlug: string) => {
    navigate(`/services/${newSlug}`);
  };

  return (
    <ServiceDetailView
      slug={currentSlug}
      lang={lang}
      onBack={handleBack}
      onRequestQuote={handleRequestQuote}
      onNavigateServiceDetail={handleNavigateDetail}
    />
  );
};

export default ServiceDetailPage;
