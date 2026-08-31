import React from 'react';
import { Product, Language } from '../../types';
import { useApp } from '../../context/AppContext';
import { CartRfqDrawer } from './CartRfqDrawer';

interface QuoteDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  preselectedProduct?: Product;
}

export const QuoteDrawer: React.FC<QuoteDrawerProps> = ({
  isOpen,
  onClose,
  lang,
}) => {
  const {
    rfqItems,
    cartDrawerMode,
    updateRfqQuantity,
    removeFromRfq,
    clearRfq,
  } = useApp();

  return (
    <CartRfqDrawer
      isOpen={isOpen}
      onClose={onClose}
      lang={lang}
      rfqItems={rfqItems}
      mode={cartDrawerMode}
      onUpdateQuantity={updateRfqQuantity}
      onRemoveItem={removeFromRfq}
      onClearRfq={clearRfq}
      onNavigateProducts={() => {
        window.location.href = '/products';
      }}
    />
  );
};
