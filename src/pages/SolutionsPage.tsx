import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { SolutionsView } from '../views/SolutionsView';

export const SolutionsPage: React.FC = () => {
  const navigate = useNavigate();
  const { lang, openQuoteDrawer } = useApp();

  const handleRequestQuote = () => {
    openQuoteDrawer();
  };

  const handleNavigateSellEquipment = () => {
    navigate('/sell-equipment');
  };

  return (
    <SolutionsView
      lang={lang}
      onRequestQuote={handleRequestQuote}
      onNavigateSellEquipment={handleNavigateSellEquipment}
    />
  );
};

export default SolutionsPage;
