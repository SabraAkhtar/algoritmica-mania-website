import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { LegalView } from '../views/LegalView';

export const CookiesPolicyPage: React.FC = () => {
  const navigate = useNavigate();
  const { lang } = useApp();

  return (
    <LegalView
      initialSection="cookies"
      lang={lang}
      onBack={() => navigate('/')}
    />
  );
};

export default CookiesPolicyPage;
