import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  ChevronDown, 
  Inbox, 
  Search, 
  Scale, 
  Calendar, 
  CheckCircle2, 
  Package, 
  Layers, 
  AlertTriangle, 
  XCircle, 
  PlusCircle, 
  ShoppingBag, 
  FileText, 
  CreditCard, 
  Users, 
  Briefcase, 
  ShieldCheck, 
  BookOpen, 
  Image as ImageIcon, 
  BarChart3, 
  TrendingUp, 
  HardDrive, 
  Download, 
  Settings as SettingsIcon, 
  Shield, 
  Key, 
  Sliders,
  LogOut,
  Sparkles
} from 'lucide-react';
import { useAdmin } from '../../context/AdminAuthContext';

interface AdminSidebarProps {
  currentTab: string;
  onSelectTab: (tab: string) => void;
  isMobileOpen?: boolean;
  onCloseMobile?: () => void;
}

export const AdminSidebar: React.FC<AdminSidebarProps> = ({
  currentTab,
  onSelectTab,
  isMobileOpen,
  onCloseMobile
}) => {
  const { adminUser, logout } = useAdmin();
  
  // By default, only 'sell-to-us' is expanded to avoid vertical bloat
  const [expandedSection, setExpandedSection] = useState<string | null>('sell-to-us');
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  const toggleSection = (sectionId: string) => {
    setExpandedSection(prev => prev === sectionId ? null : sectionId);
  };

  const handleItemClick = (tabId: string) => {
    onSelectTab(tabId);
    if (onCloseMobile) onCloseMobile();
  };

  return (
    <aside 
      className={`fixed top-0 left-0 bottom-0 z-50 w-64 bg-white border-r border-[#EAECF0] flex flex-col transition-transform duration-200 ease-in-out lg:translate-x-0 ${
        isMobileOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full'
      }`}
    >
      {/* 1. BRAND LOGO AREA */}
      <div className="h-18 px-5 flex items-center gap-3 border-b border-[#EAECF0] shrink-0 bg-white">
        {/* Geometric Green Pentagon/Triangle Logo Mark */}
        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#0D7E73] to-[#042F2C] flex items-center justify-center text-white shadow-xs shrink-0 relative overflow-hidden">
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current text-[#2DD4BF]" xmlns="http://www.w3.org/2000/svg">
            <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
            <circle cx="12" cy="12" r="3.5" fill="#5EEAD4" />
          </svg>
          <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-[#5EEAD4] rounded-full blur-[2px] opacity-75" />
        </div>

        <div className="flex flex-col min-w-0">
          <div className="flex items-center gap-1 leading-none">
            <span className="font-black text-sm tracking-tight text-[#0F172A]">ALGORITMICA</span>
            <span className="font-black text-sm tracking-tight text-[#0F172A]">MANIA</span>
          </div>
          <span className="text-[6.5px] font-extrabold uppercase tracking-wider text-[#0D7E73] mt-1 truncate">
            USED IT EQUIPMENT • NETWORKING • CYBERSECURITY
          </span>
        </div>
      </div>

      {/* 2. SCROLLABLE NAVIGATION LIST */}
      <div className="flex-1 overflow-y-auto px-3.5 py-4 space-y-4 custom-scrollbar">
        
        {/* Primary Dashboard Pill (Active State) */}
        <div>
          <button
            onClick={() => handleItemClick('dashboard')}
            className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-150 cursor-pointer ${
              currentTab === 'dashboard'
                ? 'bg-[#042F2C] text-white shadow-[0_2px_8px_rgba(4,47,44,0.25)]'
                : 'text-[#334155] hover:bg-[#F8FAFC] hover:text-[#042F2C]'
            }`}
          >
            <div className={`w-5 h-5 flex items-center justify-center ${currentTab === 'dashboard' ? 'text-white' : 'text-[#64748B]'}`}>
              <LayoutDashboard className="w-4 h-4" />
            </div>
            <span>Dashboard</span>
          </button>
        </div>

        {/* SECTION: SELL TO US */}
        <div className="space-y-1">
          <button
            onClick={() => toggleSection('sell-to-us')}
            className="w-full flex items-center justify-between px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-[#475569] hover:text-[#0F172A] cursor-pointer"
          >
            <span className="text-[11px]">SELL TO US</span>
            <ChevronDown className={`w-3.5 h-3.5 text-[#94A3B8] transition-transform duration-200 ${expandedSection === 'sell-to-us' ? 'rotate-0' : '-rotate-90'}`} />
          </button>

          {expandedSection === 'sell-to-us' && (
            <div className="space-y-0.5 pt-0.5 animate-fadeIn">
              <button
                onClick={() => handleItemClick('requests-new')}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                  currentTab === 'requests-new' ? 'bg-[#F0FDFA] text-[#0D7E73] font-bold' : 'text-[#475569] hover:bg-[#F8FAFC] hover:text-[#0F172A]'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Inbox className="w-3.5 h-3.5 text-[#64748B]" />
                  <span>New Requests</span>
                </div>
                <span className="px-1.5 py-0.5 text-[10px] font-bold rounded-md bg-[#042F2C] text-white">42</span>
              </button>

              <button
                onClick={() => handleItemClick('requests-review')}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                  currentTab === 'requests-review' ? 'bg-[#F0FDFA] text-[#0D7E73] font-bold' : 'text-[#475569] hover:bg-[#F8FAFC] hover:text-[#0F172A]'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Search className="w-3.5 h-3.5 text-[#64748B]" />
                  <span>Under Review</span>
                </div>
                <span className="px-1.5 py-0.5 text-[10px] font-bold rounded-md bg-[#042F2C] text-white">18</span>
              </button>

              <button
                onClick={() => handleItemClick('requests-valuations')}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                  currentTab === 'requests-valuations' ? 'bg-[#F0FDFA] text-[#0D7E73] font-bold' : 'text-[#475569] hover:bg-[#F8FAFC] hover:text-[#0F172A]'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Scale className="w-3.5 h-3.5 text-[#64748B]" />
                  <span>Valuations</span>
                </div>
                <span className="px-1.5 py-0.5 text-[10px] font-bold rounded-md bg-[#042F2C] text-white">12</span>
              </button>

              <button
                onClick={() => handleItemClick('requests-pickups')}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                  currentTab === 'requests-pickups' ? 'bg-[#F0FDFA] text-[#0D7E73] font-bold' : 'text-[#475569] hover:bg-[#F8FAFC] hover:text-[#0F172A]'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Calendar className="w-3.5 h-3.5 text-[#64748B]" />
                  <span>Pickup Schedule</span>
                </div>
                <span className="px-1.5 py-0.5 text-[10px] font-bold rounded-md bg-[#042F2C] text-white">10</span>
              </button>

              <button
                onClick={() => handleItemClick('requests-completed')}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                  currentTab === 'requests-completed' ? 'bg-[#F0FDFA] text-[#0D7E73] font-bold' : 'text-[#475569] hover:bg-[#F8FAFC] hover:text-[#0F172A]'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#64748B]" />
                  <span>Completed</span>
                </div>
                <span className="px-1.5 py-0.5 text-[10px] font-bold rounded-md bg-[#042F2C] text-white">76</span>
              </button>
            </div>
          )}
        </div>

        {/* SECTION: INVENTORY */}
        <div className="space-y-1">
          <button
            onClick={() => toggleSection('inventory')}
            className="w-full flex items-center justify-between px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-[#475569] hover:text-[#0F172A] cursor-pointer"
          >
            <div className="flex items-center gap-2">
              <Package className="w-3.5 h-3.5 text-[#64748B]" />
              <span className="text-[11px]">INVENTORY</span>
            </div>
            <ChevronDown className={`w-3.5 h-3.5 text-[#94A3B8] transition-transform duration-200 ${expandedSection === 'inventory' ? 'rotate-0' : '-rotate-90'}`} />
          </button>

          {expandedSection === 'inventory' && (
            <div className="space-y-0.5 pt-0.5 animate-fadeIn">
              <button
                onClick={() => handleItemClick('all-products')}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium cursor-pointer transition-colors ${
                  currentTab === 'all-products' ? 'bg-[#F0FDFA] text-[#0D7E73] font-bold' : 'text-[#475569] hover:bg-[#F8FAFC] hover:text-[#0F172A]'
                }`}
              >
                <span>All Equipment & Store</span>
                <span className="px-1.5 py-0.5 text-[10px] font-semibold rounded bg-[#CCFBF1] text-[#0D7E73]">Live</span>
              </button>
              <button
                onClick={() => handleItemClick('add-product')}
                className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium text-[#0D7E73] bg-[#F0FDFA]/60 hover:bg-[#F0FDFA] font-bold cursor-pointer"
              >
                <div className="flex items-center gap-1.5">
                  <PlusCircle className="w-3.5 h-3.5" />
                  <span>Add New Product</span>
                </div>
                <span className="text-[10px]">➕</span>
              </button>
              <button
                onClick={() => handleItemClick('inventory-low')}
                className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium text-[#475569] hover:bg-[#F8FAFC] hover:text-[#0F172A] cursor-pointer"
              >
                <span>Low Stock Alerts</span>
                <span className="px-1.5 py-0.5 text-[10px] font-semibold rounded bg-red-50 text-red-700">16</span>
              </button>
            </div>
          )}
        </div>

        {/* SECTION: SALES */}
        <div className="space-y-1">
          <button
            onClick={() => toggleSection('sales')}
            className="w-full flex items-center justify-between px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-[#475569] hover:text-[#0F172A] cursor-pointer"
          >
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-3.5 h-3.5 text-[#64748B]" />
              <span className="text-[11px]">SALES</span>
            </div>
            <ChevronDown className={`w-3.5 h-3.5 text-[#94A3B8] transition-transform duration-200 ${expandedSection === 'sales' ? 'rotate-0' : '-rotate-90'}`} />
          </button>

          {expandedSection === 'sales' && (
            <div className="space-y-0.5 pt-0.5 animate-fadeIn">
              <button
                onClick={() => handleItemClick('sales-orders')}
                className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium text-[#475569] hover:bg-[#F8FAFC] hover:text-[#0F172A] cursor-pointer"
              >
                <span>Orders</span>
                <span className="px-1.5 py-0.5 text-[10px] font-semibold rounded bg-emerald-50 text-emerald-700">27</span>
              </button>
              <button
                onClick={() => handleItemClick('sales-quotes')}
                className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium text-[#475569] hover:bg-[#F8FAFC] hover:text-[#0F172A] cursor-pointer"
              >
                <span>RFQ Quotes</span>
                <span className="px-1.5 py-0.5 text-[10px] font-semibold rounded bg-teal-50 text-teal-700">35</span>
              </button>
              <button
                onClick={() => handleItemClick('sales-customers')}
                className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium text-[#475569] hover:bg-[#F8FAFC] hover:text-[#0F172A] cursor-pointer"
              >
                <span>Customers</span>
              </button>
            </div>
          )}
        </div>

        {/* SECTION: CONTENT */}
        <div className="space-y-1">
          <button
            onClick={() => toggleSection('content')}
            className="w-full flex items-center justify-between px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-[#475569] hover:text-[#0F172A] cursor-pointer"
          >
            <div className="flex items-center gap-2">
              <BookOpen className="w-3.5 h-3.5 text-[#64748B]" />
              <span className="text-[11px]">CONTENT</span>
            </div>
            <ChevronDown className={`w-3.5 h-3.5 text-[#94A3B8] transition-transform duration-200 ${expandedSection === 'content' ? 'rotate-0' : '-rotate-90'}`} />
          </button>

          {expandedSection === 'content' && (
            <div className="space-y-0.5 pt-0.5 animate-fadeIn">
              <button
                onClick={() => handleItemClick('content-services')}
                className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium text-[#475569] hover:bg-[#F8FAFC] hover:text-[#0F172A] cursor-pointer"
              >
                <span>Services Catalogue</span>
              </button>
              <button
                onClick={() => handleItemClick('content-solutions')}
                className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium text-[#475569] hover:bg-[#F8FAFC] hover:text-[#0F172A] cursor-pointer"
              >
                <span>Solutions Matrix</span>
              </button>
            </div>
          )}
        </div>

        {/* SECTION: ANALYTICS */}
        <div className="space-y-1">
          <button
            onClick={() => toggleSection('analytics')}
            className="w-full flex items-center justify-between px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-[#475569] hover:text-[#0F172A] cursor-pointer"
          >
            <div className="flex items-center gap-2">
              <BarChart3 className="w-3.5 h-3.5 text-[#64748B]" />
              <span className="text-[11px]">ANALYTICS</span>
            </div>
            <ChevronDown className={`w-3.5 h-3.5 text-[#94A3B8] transition-transform duration-200 ${expandedSection === 'analytics' ? 'rotate-0' : '-rotate-90'}`} />
          </button>

          {expandedSection === 'analytics' && (
            <div className="space-y-0.5 pt-0.5 animate-fadeIn">
              <button
                onClick={() => handleItemClick('analytics-revenue')}
                className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium text-[#475569] hover:bg-[#F8FAFC] hover:text-[#0F172A] cursor-pointer"
              >
                <span>Revenue Performance</span>
              </button>
              <button
                onClick={() => handleItemClick('analytics-itad')}
                className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium text-[#475569] hover:bg-[#F8FAFC] hover:text-[#0F172A] cursor-pointer"
              >
                <span>ITAD Sustainability</span>
              </button>
            </div>
          )}
        </div>

        {/* SECTION: SETTINGS */}
        <div className="space-y-1">
          <button
            onClick={() => toggleSection('settings')}
            className="w-full flex items-center justify-between px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-[#475569] hover:text-[#0F172A] cursor-pointer"
          >
            <div className="flex items-center gap-2">
              <SettingsIcon className="w-3.5 h-3.5 text-[#64748B]" />
              <span className="text-[11px]">SETTINGS</span>
            </div>
            <ChevronDown className={`w-3.5 h-3.5 text-[#94A3B8] transition-transform duration-200 ${expandedSection === 'settings' ? 'rotate-0' : '-rotate-90'}`} />
          </button>

          {expandedSection === 'settings' && (
            <div className="space-y-0.5 pt-0.5 animate-fadeIn">
              <button
                onClick={() => handleItemClick('settings-general')}
                className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium text-[#475569] hover:bg-[#F8FAFC] hover:text-[#0F172A] cursor-pointer"
              >
                <span>System Parameters</span>
              </button>
              <button
                onClick={() => handleItemClick('settings-nist')}
                className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium text-[#475569] hover:bg-[#F8FAFC] hover:text-[#0F172A] cursor-pointer"
              >
                <span>NIST 800-88 Audit Log</span>
              </button>
            </div>
          )}
        </div>

      </div>

      {/* 3. BOTTOM ADMIN PROFILE CARD (AS SHOWN IN REFERENCE) */}
      <div className="p-3 border-t border-[#EAECF0] bg-white relative">
        <button
          onClick={() => setIsProfileMenuOpen(prev => !prev)}
          className="w-full flex items-center justify-between p-2 rounded-xl hover:bg-[#F8FAFC] transition-colors text-left cursor-pointer group"
        >
          <div className="flex items-center gap-3 min-w-0">
            <div className="relative shrink-0">
              <img
                src={adminUser.avatarUrl}
                alt={adminUser.name}
                className="w-9 h-9 rounded-full object-cover ring-2 ring-emerald-500/30"
              />
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-white" />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-xs font-bold text-[#0F172A] truncate group-hover:text-[#0D7E73] transition-colors">
                {adminUser.name}
              </span>
              <span className="text-[10px] text-[#64748B] truncate">
                {adminUser.role}
              </span>
            </div>
          </div>
          <ChevronDown className={`w-3.5 h-3.5 text-[#94A3B8] transition-transform ${isProfileMenuOpen ? 'rotate-180' : ''}`} />
        </button>

        {/* Profile Dropdown */}
        {isProfileMenuOpen && (
          <div className="absolute bottom-16 left-3 right-3 bg-white rounded-xl shadow-xl border border-[#EAECF0] p-1.5 space-y-1 z-50 animate-fadeIn">
            <div className="px-2.5 py-1.5 border-b border-slate-100">
              <p className="text-xs font-semibold text-slate-800">{adminUser.name}</p>
              <p className="text-[10px] text-slate-500">{adminUser.email}</p>
            </div>
            <button
              onClick={() => {
                setIsProfileMenuOpen(false);
                logout();
              }}
              className="w-full flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-xs font-medium text-red-600 hover:bg-red-50 transition-colors cursor-pointer"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Sign Out</span>
            </button>
          </div>
        )}
      </div>

    </aside>
  );
};
