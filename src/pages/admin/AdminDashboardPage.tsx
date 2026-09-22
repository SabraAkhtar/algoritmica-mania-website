import React from 'react';
import { useAdmin } from '../../context/AdminAuthContext';
import { AdminLoginPage } from './AdminLoginPage';
import { KpiCardsSection } from '../../components/admin/KpiCardsSection';
import { SellWorkflowCard } from '../../components/admin/SellWorkflowCard';
import { NewSellRequestsCard } from '../../components/admin/NewSellRequestsCard';
import { RevenueOverviewCard } from '../../components/admin/RevenueOverviewCard';
import { RecentActivityCard } from '../../components/admin/RecentActivityCard';
import { QuotePipelineCard } from '../../components/admin/QuotePipelineCard';
import { TodayTasksCard } from '../../components/admin/TodayTasksCard';
import { LowStockAlertCard } from '../../components/admin/LowStockAlertCard';
import { InventoryHealthCard } from '../../components/admin/InventoryHealthCard';
import { PerformanceOverviewCard } from '../../components/admin/PerformanceOverviewCard';
import { ProductManagementSection } from '../../components/admin/ProductManagementSection';
import { 
  LayoutDashboard, 
  Package, 
  Sparkles, 
  Plus, 
  Truck, 
  BarChart3, 
  SlidersHorizontal,
  Eye,
  EyeOff
} from 'lucide-react';

export const AdminDashboardPage: React.FC = () => {
  const { 
    isAuthenticated, 
    activeAdminTab, 
    setActiveAdminTab, 
    openAddProductModal 
  } = useAdmin();

  // If not authenticated, render the dedicated corporate Admin Login gate
  if (!isAuthenticated) {
    return <AdminLoginPage />;
  }

  const isProductsView = activeAdminTab === 'all-products' || activeAdminTab === 'products' || activeAdminTab === 'inventory';

  return (
    <div className="space-y-6">
      
      {/* TOP VIEW NAVIGATION BAR (Executive Dashboard vs Product Manager) */}
      <div className="bg-white rounded-2xl border border-[#EAECF0] p-2 sm:p-2.5 shadow-2xs flex flex-wrap items-center justify-between gap-2.5">
        
        {/* Navigation Switcher Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto custom-scrollbar py-0.5">
          <button
            onClick={() => setActiveAdminTab('dashboard')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeAdminTab === 'dashboard'
                ? 'bg-[#042F2C] text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <LayoutDashboard className="w-4 h-4" />
            <span>Executive Dashboard</span>
          </button>

          <button
            onClick={() => setActiveAdminTab('all-products')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              isProductsView
                ? 'bg-[#0D7E73] text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <Package className="w-4 h-4" />
            <span>Products & Store Visibility (Hide/Show)</span>
            <span className={`px-1.5 py-0.2 rounded-full text-[10px] font-bold ${
              isProductsView ? 'bg-white/20 text-white' : 'bg-teal-100 text-teal-800'
            }`}>
              Live Sync
            </span>
          </button>
        </div>

        {/* Quick Add Product Button */}
        <button
          onClick={() => openAddProductModal()}
          className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#0D7E73] hover:bg-[#042F2C] text-white text-xs font-bold transition-all cursor-pointer shadow-xs active:scale-95"
        >
          <Plus className="w-4 h-4" />
          <span>Add New Product</span>
        </button>

      </div>

      {/* RENDER PRODUCTS MANAGEMENT VIEW WHEN SELECTED */}
      {isProductsView ? (
        <ProductManagementSection />
      ) : (
        /* RENDER FULL EXECUTIVE DASHBOARD OVERVIEW */
        <div className="space-y-6 animate-fadeIn">
          
          {/* 1. HIGH PRIORITY: 6 Main KPI Cards */}
          <KpiCardsSection />

          {/* 2. PROMINENT PRODUCT MANAGEMENT SECTION EMBEDDED DIRECTLY IN DASHBOARD */}
          <ProductManagementSection />

          {/* 3. CORE WORKFLOW: Sell To Us Workflow (Most Important Widget) */}
          <SellWorkflowCard />

          {/* 4. PRIMARY CONTENT ROW 1: New Sell Requests | Revenue Overview | Recent Activity */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
            
            {/* Left: New Sell Requests (4 cols) */}
            <div className="lg:col-span-4">
              <NewSellRequestsCard />
            </div>

            {/* Center: Revenue Overview with Area Chart (5 cols) */}
            <div className="lg:col-span-5">
              <RevenueOverviewCard />
            </div>

            {/* Right: Recent Activity Timeline (3 cols) */}
            <div className="lg:col-span-3">
              <RecentActivityCard />
            </div>

          </div>

          {/* 5. PRIMARY CONTENT ROW 2: Quote Pipeline | Today's Tasks | Low Stock Alert */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
            
            {/* Left: Quote Pipeline (4 cols) */}
            <div className="lg:col-span-4">
              <QuotePipelineCard />
            </div>

            {/* Center: Today's Tasks (3 cols) */}
            <div className="lg:col-span-3">
              <TodayTasksCard />
            </div>

            {/* Right: Low Stock Alert (5 cols) */}
            <div className="lg:col-span-5">
              <LowStockAlertCard />
            </div>

          </div>

          {/* 6. LOWER PRIORITY ROW 3: Inventory Health | Performance Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
            
            {/* Left: Inventory Health 5 Cards (5 cols) */}
            <div className="lg:col-span-5">
              <InventoryHealthCard />
            </div>

            {/* Right: Performance Overview (7 cols) */}
            <div className="lg:col-span-7">
              <PerformanceOverviewCard />
            </div>

          </div>

        </div>
      )}

    </div>
  );
};

export default AdminDashboardPage;

