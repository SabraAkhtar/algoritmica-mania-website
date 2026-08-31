import React, { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { MainLayout } from '../layouts/MainLayout';
import { AdminLayout } from '../layouts/AdminLayout';

// Lazy-loaded Page views for code splitting
const HomePage = lazy(() => import('../pages/HomePage'));
const ProductsPage = lazy(() => import('../pages/ProductsPage'));
const ProductDetailPage = lazy(() => import('../pages/ProductDetailPage'));
const ServicesPage = lazy(() => import('../pages/ServicesPage'));
const ServiceDetailPage = lazy(() => import('../pages/ServiceDetailPage'));
const SolutionsPage = lazy(() => import('../pages/SolutionsPage'));
const SellEquipmentPage = lazy(() => import('../pages/SellEquipmentPage'));
const AboutPage = lazy(() => import('../pages/AboutPage'));
const WhyChooseUsPage = lazy(() => import('../pages/WhyChooseUsPage'));
const OurApproachPage = lazy(() => import('../pages/OurApproachPage'));
const ContactPage = lazy(() => import('../pages/ContactPage'));
const LegalPage = lazy(() => import('../pages/LegalPage'));
const PrivacyPolicyPage = lazy(() => import('../pages/PrivacyPolicyPage'));
const TermsPage = lazy(() => import('../pages/TermsPage'));
const CookiesPolicyPage = lazy(() => import('../pages/CookiesPolicyPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));

// Admin pages
const AdminDashboardPage = lazy(() => import('../pages/admin/AdminDashboardPage'));
const AdminLoginPage = lazy(() => import('../pages/admin/AdminLoginPage'));

// Clean Loading Fallback Skeleton
const PageLoadingFallback: React.FC = () => (
  <div className="w-full min-h-[60vh] flex flex-col items-center justify-center bg-[#F8FAFC]">
    <div className="w-12 h-12 rounded-2xl border-4 border-[#CCFBF1] border-t-[#0D7E73] animate-spin mb-4" />
    <span className="text-xs font-bold text-[#0D7E73] tracking-wider uppercase">Loading Algorítmica Mania...</span>
  </div>
);

export const AppRoutes: React.FC = () => {
  return (
    <Suspense fallback={<PageLoadingFallback />}>
      <Routes>
        {/* Admin Routes with dedicated Enterprise Admin Layout */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Navigate to="/admin/dashboard" replace />} />
          <Route path="dashboard" element={<AdminDashboardPage />} />
        </Route>
        <Route path="/admin/login" element={<AdminLoginPage />} />

        {/* Public Website Routes */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="products/:id" element={<ProductDetailPage />} />
          <Route path="product/:id" element={<ProductDetailPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="services/:slug" element={<ServiceDetailPage />} />
          <Route path="solutions" element={<SolutionsPage />} />
          <Route path="sell-equipment" element={<SellEquipmentPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="why-choose-us" element={<WhyChooseUsPage />} />
          <Route path="our-approach" element={<OurApproachPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="legal" element={<LegalPage />} />
          <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="terms-and-conditions" element={<TermsPage />} />
          <Route path="cookies-policy" element={<CookiesPolicyPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

