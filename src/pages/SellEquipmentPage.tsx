import React from 'react';
import { useApp } from '../context/AppContext';
import { SellEquipmentView } from '../views/SellEquipmentView';

export const SellEquipmentPage: React.FC = () => {
  const { lang } = useApp();

  return (
    <SellEquipmentView
      lang={lang}
    />
  );
};

export default SellEquipmentPage;
