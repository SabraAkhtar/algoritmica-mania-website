import React, { useEffect } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { FloatingWhatsApp } from '../components/layout/FloatingWhatsApp';
import { Chatbot } from '../components/layout/Chatbot';
import { CartRfqDrawer } from '../components/layout/CartRfqDrawer';
import { SearchModal } from '../components/layout/SearchModal';
import { MobileDrawer } from '../components/layout/MobileDrawer';
import { ScrollToTop } from '../components/common/ScrollToTop';
import { ProductCategory } from '../types';

export const MainLayout: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    lang,
    setLanguage,
    isCartDrawerOpen,
    cartDrawerMode,
    openCartDrawer,
    closeCartDrawer,
    rfqItems,
    totalRfqCount,
    updateRfqQuantity,
    removeFromRfq,
    clearRfq,
    isSearchModalOpen,
    openSearchModal,
    closeSearchModal,
    isMobileDrawerOpen,
    openMobileDrawer,
    closeMobileDrawer
  } = useApp();

  const handleNavigateHome = () => navigate('/');
  
  const handleNavigateProducts = (category?: ProductCategory, query?: string) => {
    const params = new URLSearchParams();
    if (category && category !== 'used-refurbished') {
      params.set('category', category);
    } else if (category === 'used-refurbished') {
      params.set('category', 'used-refurbished');
    }
    if (query) {
      params.set('q', query);
    }
    const queryString = params.toString();
    navigate(`/products${queryString ? `?${queryString}` : ''}`);
  };

  const handleNavigateServices = (slug?: string) => {
    if (slug) {
      const knownCategories = [
        'it-support',
        'networking-and-configuration',
        'networking-infrastructure',
        'cybersecurity',
        'secure-data-removal',
        'asset-recovery',
        'servers-storage',
        'enterprise-solutions'
      ];
      if (knownCategories.includes(slug)) {
        navigate(`/services?category=${slug}`);
      } else {
        navigate(`/services/${slug}`);
      }
    } else {
      navigate('/services');
    }
  };

  const handleNavigateSolutions = () => navigate('/solutions');
  const handleNavigateSellEquipment = () => navigate('/sell-equipment');
  const handleNavigateAbout = () => navigate('/about');
  const handleNavigateWhyChooseUs = () => navigate('/why-choose-us');
  const handleNavigateOurApproach = () => navigate('/our-approach');
  const handleNavigateContact = () => navigate('/contact');
  
  const handleNavigateLegal = (section: 'privacy' | 'cookies' | 'terms') => {
    if (section === 'privacy') navigate('/privacy-policy');
    else if (section === 'cookies') navigate('/cookies-policy');
    else if (section === 'terms') navigate('/terms-and-conditions');
    else navigate('/legal');
  };

  const handleSelectProduct = (productId: string) => {
    navigate(`/products/${productId}`);
  };

  // Scroll to Homepage Quote Form Section
  const handleScrollToHomepageQuote = () => {
    const isHomePage = location.pathname === '/' || location.pathname === '';
    if (isHomePage) {
      const el = document.getElementById('section-final-quote');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setTimeout(() => {
          const input = el.querySelector('input');
          if (input) input.focus();
        }, 500);
        return;
      }
    }
    navigate('/?scrollToQuote=true');
  };

  // Listen for scrollToQuote query parameter
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    if (searchParams.get('scrollToQuote') === 'true') {
      setTimeout(() => {
        const el = document.getElementById('section-final-quote');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          const input = el.querySelector('input');
          if (input) input.focus();
        }
      }, 250);
    }
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col bg-white font-sans text-[#1F2933] antialiased selection:bg-[#EAF3F8] selection:text-[#183B56]">
      <ScrollToTop />

      {/* Top Navbar */}
      <Navbar
        lang={lang}
        rfqCount={totalRfqCount}
        onLanguageChange={setLanguage}
        onNavigateHome={handleNavigateHome}
        onNavigateProducts={handleNavigateProducts}
        onNavigateServices={handleNavigateServices}
        onNavigateSolutions={handleNavigateSolutions}
        onNavigateSellEquipment={handleNavigateSellEquipment}
        onNavigateAbout={handleNavigateAbout}
        onNavigateWhyChooseUs={handleNavigateWhyChooseUs}
        onNavigateOurApproach={handleNavigateOurApproach}
        onNavigateContact={handleNavigateContact}
        onRequestQuote={handleScrollToHomepageQuote}
        onOpenCartDrawer={() => openCartDrawer('cart')}
        onOpenSearch={openSearchModal}
        onOpenMobileMenu={openMobileDrawer}
      />

      {/* Main Content Rendered by Nested Route */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer
        lang={lang}
        onNavigateHome={handleNavigateHome}
        onNavigateProducts={handleNavigateProducts}
        onNavigateServices={handleNavigateServices}
        onNavigateSolutions={handleNavigateSolutions}
        onNavigateSellEquipment={handleNavigateSellEquipment}
        onNavigateAbout={handleNavigateAbout}
        onNavigateWhyChooseUs={handleNavigateWhyChooseUs}
        onNavigateOurApproach={handleNavigateOurApproach}
        onNavigateContact={handleNavigateContact}
        onNavigateLegal={handleNavigateLegal}
        onRequestQuote={handleScrollToHomepageQuote}
      />

      {/* Floating WhatsApp Action */}
      <FloatingWhatsApp lang={lang} />
      
      {/* AI Chatbot */}
      <Chatbot lang={lang} />

      {/* Slide-over Cart & RFQ Drawer */}
      <CartRfqDrawer
        isOpen={isCartDrawerOpen}
        onClose={closeCartDrawer}
        lang={lang}
        rfqItems={rfqItems}
        mode={cartDrawerMode}
        onUpdateQuantity={updateRfqQuantity}
        onRemoveItem={removeFromRfq}
        onClearRfq={clearRfq}
        onNavigateProducts={() => handleNavigateProducts()}
      />

      {/* Global Search Modal */}
      <SearchModal
        isOpen={isSearchModalOpen}
        onClose={closeSearchModal}
        lang={lang}
        onSelectProduct={handleSelectProduct}
        onSelectService={handleNavigateServices}
      />

      {/* Mobile Navigation Drawer */}
      <MobileDrawer
        isOpen={isMobileDrawerOpen}
        onClose={closeMobileDrawer}
        lang={lang}
        rfqCount={totalRfqCount}
        onLanguageChange={setLanguage}
        onNavigateHome={handleNavigateHome}
        onNavigateProducts={handleNavigateProducts}
        onNavigateServices={handleNavigateServices}
        onNavigateSolutions={handleNavigateSolutions}
        onNavigateSellEquipment={handleNavigateSellEquipment}
        onNavigateAbout={handleNavigateAbout}
        onNavigateWhyChooseUs={handleNavigateWhyChooseUs}
        onNavigateOurApproach={handleNavigateOurApproach}
        onNavigateContact={handleNavigateContact}
        onRequestQuote={handleScrollToHomepageQuote}
        onOpenCartDrawer={() => {
          closeMobileDrawer();
          openCartDrawer('cart');
        }}
        onOpenSearch={openSearchModal}
      />
    </div>
  );
};

