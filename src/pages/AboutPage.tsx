import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { AboutView } from '../views/AboutView';

export const AboutPage: React.FC = () => {
  const navigate = useNavigate();
  const { lang, openQuoteDrawer } = useApp();

  const handleRequestQuote = () => {
    openQuoteDrawer();
  };

  const handleNavigateContact = () => {
    navigate('/contact');
  };

  const handleNavigateServices = (slug?: string) => {
    if (slug) {
      navigate(`/services/${slug}`);
    } else {
      navigate('/services');
    }
  };

  const handleNavigateSolutions = () => {
    navigate('/solutions');
  };

  return (
    <AboutView
      lang={lang}
      onRequestQuote={handleRequestQuote}
      onNavigateContact={handleNavigateContact}
      onNavigateServices={handleNavigateServices}
      onNavigateSolutions={handleNavigateSolutions}
    />
  );
};

export default AboutPage;
