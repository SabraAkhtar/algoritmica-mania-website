import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { ContactView } from '../views/ContactView';
import { ProductCategory } from '../types';

export const ContactPage: React.FC = () => {
  const navigate = useNavigate();
  const { lang } = useApp();

  const handleNavigateHome = () => navigate('/');
  const handleNavigateProducts = (category?: ProductCategory) => {
    if (category) navigate(`/products?category=${category}`);
    else navigate('/products');
  };
  const handleNavigateServices = (slug?: string) => {
    if (slug) navigate(`/services/${slug}`);
    else navigate('/services');
  };
  const handleNavigateWhyChooseUs = () => navigate('/about');

  return (
    <ContactView
      lang={lang}
      onNavigateHome={handleNavigateHome}
      onNavigateProducts={handleNavigateProducts}
      onNavigateServices={handleNavigateServices}
      onNavigateWhyChooseUs={handleNavigateWhyChooseUs}
    />
  );
};

export default ContactPage;
