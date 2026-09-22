import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { LegalView } from '../views/LegalView';

export const PrivacyPolicyPage: React.FC = () => {
  const navigate = useNavigate();
  const { lang } = useApp();

  return (
    <LegalView
      initialSection="privacy"
      lang={lang}
      onBack={() => navigate('/')}
    />
  );
};

export default PrivacyPolicyPage;
