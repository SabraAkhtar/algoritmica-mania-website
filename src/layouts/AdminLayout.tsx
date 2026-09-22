import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { AdminSidebar } from '../components/admin/AdminSidebar';
import { AdminHeader } from '../components/admin/AdminHeader';
import { AdminSearchModal } from '../components/admin/AdminSearchModal';
import { AdminDetailDrawer } from '../components/admin/AdminDetailDrawer';
import { AddProductModal } from '../components/admin/AddProductModal';
import { useAdmin } from '../context/AdminAuthContext';

export const AdminLayout: React.FC = () => {
  const { isAuthenticated, activeAdminTab, setActiveAdminTab, openAddProductModal } = useAdmin();
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const navigate = useNavigate();

  // If not authenticated, the dashboard will render the login screen
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] font-sans antialiased flex flex-col">
      
      {/* 1. Left Sidebar Navigation */}
      <AdminSidebar
        currentTab={activeAdminTab}
        onSelectTab={(tab) => {
          if (tab === 'add-product') {
            openAddProductModal();
          } else {
            setActiveAdminTab(tab);
            navigate('/admin/dashboard');
          }
        }}
        isMobileOpen={isMobileSidebarOpen}
        onCloseMobile={() => setIsMobileSidebarOpen(false)}
      />

      {/* Backdrop for mobile drawer */}
      {isMobileSidebarOpen && (
        <div 
          onClick={() => setIsMobileSidebarOpen(false)}
          className="fixed inset-0 z-40 bg-slate-900/50 backdrop-blur-xs lg:hidden"
        />
      )}

      {/* 2. Main Right Container */}
      <div className="lg:pl-64 flex flex-col min-h-screen">
        
        {/* Top Header */}
        <AdminHeader
          onToggleSidebar={() => setIsMobileSidebarOpen(prev => !prev)}
        />

        {/* Dynamic Page Content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-7 max-w-[1680px] w-full mx-auto">
          <Outlet />
        </main>

      </div>

      {/* Global Modals & Drawers */}
      <AdminSearchModal />
      <AdminDetailDrawer />
      <AddProductModal />

    </div>
  );
};

