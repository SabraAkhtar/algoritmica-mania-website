import React from 'react';
import { Product, Language, RfqItem } from '../../types';
import { CartRfqDrawer } from './CartRfqDrawer';

interface RfqDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  rfqItems: RfqItem[];
  mode?: 'cart' | 'rfq-form';
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearRfq: () => void;
  onNavigateProducts: () => void;
}

export const RfqDrawer: React.FC<RfqDrawerProps> = (props) => {
  return <CartRfqDrawer {...props} />;
};
