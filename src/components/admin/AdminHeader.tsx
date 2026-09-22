import React, { useState, useRef, useEffect } from 'react';
import { 
  Menu, 
  Search, 
  Plus, 
  ChevronDown, 
  Bell, 
  MessageSquare, 
  LogOut, 
  Check, 
  ExternalLink,
  Shield,
  FileSpreadsheet,
  Truck,
  PlusCircle,
  Package,
  Layers,
  Sparkles,
  RefreshCw
} from 'lucide-react';
import { useAdmin } from '../../context/AdminAuthContext';
import { useNavigate } from 'react-router-dom';

interface AdminHeaderProps {
  onToggleSidebar?: () => void;
}

export const AdminHeader: React.FC<AdminHeaderProps> = ({ onToggleSidebar }) => {
  const { 
    adminUser, 
    logout, 
    isQuickActionsOpen, 
    openQuickActions, 
    closeQuickActions,
    isNotificationsOpen,
    toggleNotifications,
    closeNotifications,
    isMessagesOpen,
    toggleMessages,
    closeMessages,
    openSearch,
    openAddProductModal
  } = useAdmin();

  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);
  const notifRef = useRef<HTMLDivElement>(null);
  const msgRef = useRef<HTMLDivElement>(null);
  const quickRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (profileRef.current && !profileRef.current.contains(e.target as Node)) {
        setIsProfileOpen(false);
      }
      if (notifRef.current && !notifRef.current.contains(e.target as Node)) {
        closeNotifications();
      }
      if (msgRef.current && !msgRef.current.contains(e.target as Node)) {
        closeMessages();
      }
      if (quickRef.current && !quickRef.current.contains(e.target as Node)) {
        closeQuickActions();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [closeNotifications, closeMessages, closeQuickActions]);

  return (
    <header className="sticky top-0 z-30 h-16 bg-white border-b border-[#EAECF0] px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
      
      {/* LEFT SIDE: TOGGLE & GLOBAL SEARCH */}
      <div className="flex items-center gap-3.5 flex-1 max-w-2xl">
        {/* Mobile / Desktop Sidebar Toggle Button */}
        <button
          onClick={onToggleSidebar}
          aria-label="Toggle navigation"
          className="p-2 rounded-xl text-[#475569] hover:text-[#0F172A] hover:bg-[#F8FAFC] transition-colors cursor-pointer"
        >
          <Menu className="w-5 h-5" />
        </button>

        {/* Global Search Bar */}
        <div 
          onClick={openSearch}
          className="flex-1 flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#CBD5E1] transition-all cursor-pointer group"
        >
          <Search className="w-4 h-4 text-[#94A3B8] group-hover:text-[#0D7E73] transition-colors shrink-0" />
          <span className="text-xs sm:text-sm text-[#94A3B8] truncate select-none flex-1">
            Search products, orders, customers, requests...
          </span>
          <div className="hidden sm:flex items-center gap-1 px-1.5 py-0.5 rounded-md bg-white border border-[#E2E8F0] text-[10px] font-mono font-medium text-[#64748B] shadow-2xs">
            <span>Ctrl</span>
            <span>+</span>
            <span>K</span>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE: ACTIONS, NOTIFICATIONS, MESSAGES & PROFILE */}
      <div className="flex items-center gap-2 sm:gap-3.5 shrink-0">
        
        {/* Quick Actions Button */}
        <div className="relative" ref={quickRef}>
          <button
            onClick={() => {
              if (isQuickActionsOpen) closeQuickActions();
              else openQuickActions();
            }}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#042F2C] hover:bg-[#064E3B] text-white text-xs sm:text-sm font-semibold transition-all shadow-xs cursor-pointer active:scale-95"
          >
            <Plus className="w-4 h-4" />
            <span className="hidden md:inline">Quick Actions</span>
            <ChevronDown className={`w-3.5 h-3.5 text-teal-200 transition-transform ${isQuickActionsOpen ? 'rotate-180' : ''}`} />
          </button>

          {/* Quick Actions Dropdown */}
          {isQuickActionsOpen && (
            <div className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-[#EAECF0] p-2 z-50 animate-fadeIn space-y-1">
              <div className="px-3 py-1.5 text-[10px] font-black uppercase tracking-wider text-slate-400">
                Primary Actions
              </div>
              <button
                onClick={() => {
                  closeQuickActions();
                  openSearch();
                }}
                className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 hover:bg-[#F0FDFA] hover:text-[#0D7E73] transition-colors cursor-pointer text-left"
              >
                <PlusCircle className="w-4 h-4 text-[#0D7E73]" />
                <span>New Sell Request</span>
              </button>
              <button
                onClick={() => {
                  closeQuickActions();
                  openSearch();
                }}
                className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 hover:bg-[#F0FDFA] hover:text-[#0D7E73] transition-colors cursor-pointer text-left"
              >
                <Truck className="w-4 h-4 text-blue-600" />
                <span>Schedule Pickup</span>
              </button>
              <button
                onClick={() => {
                  closeQuickActions();
                  openAddProductModal();
                }}
                className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 hover:bg-[#F0FDFA] hover:text-[#0D7E73] transition-colors cursor-pointer text-left"
              >
                <Package className="w-4 h-4 text-purple-600" />
                <span>Add New Product</span>
              </button>
              <button
                onClick={() => {
                  closeQuickActions();
                  openSearch();
                }}
                className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 hover:bg-[#F0FDFA] hover:text-[#0D7E73] transition-colors cursor-pointer text-left"
              >
                <FileSpreadsheet className="w-4 h-4 text-amber-600" />
                <span>Generate RFQ Valuation</span>
              </button>
            </div>
          )}
        </div>

        {/* Notification Bell Icon */}
        <div className="relative" ref={notifRef}>
          <button
            onClick={toggleNotifications}
            aria-label="Notifications"
            className="relative p-2 rounded-xl text-[#475569] hover:text-[#0F172A] hover:bg-[#F8FAFC] transition-colors cursor-pointer"
          >
            <Bell className="w-5 h-5" />
            <span className="absolute 1 top-1 right-1 w-4.5 h-4.5 rounded-full bg-[#0D7E73] text-white text-[9.5px] font-black flex items-center justify-center ring-2 ring-white">
              {adminUser.unreadNotificationsCount}
            </span>
          </button>

          {/* Notifications Dropdown */}
          {isNotificationsOpen && (
            <div className="absolute right-0 mt-2 w-80 sm:w-96 bg-white rounded-2xl shadow-xl border border-[#EAECF0] p-3.5 z-50 animate-fadeIn">
              <div className="flex items-center justify-between pb-2.5 border-b border-slate-100 mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-slate-900">System Notifications</span>
                  <span className="px-2 py-0.5 rounded-full bg-teal-50 text-[#0D7E73] text-[10px] font-bold">8 New</span>
                </div>
                <button className="text-[11px] font-semibold text-[#0D7E73] hover:underline cursor-pointer">
                  Mark all read
                </button>
              </div>
              <div className="space-y-2 max-h-72 overflow-y-auto pr-1 custom-scrollbar">
                <div className="p-2.5 rounded-xl bg-[#F0FDFA] border border-[#CCFBF1] flex gap-3 items-start">
                  <span className="w-2 h-2 rounded-full bg-[#0D7E73] mt-1.5 shrink-0" />
                  <div className="text-xs">
                    <p className="font-semibold text-slate-900">High-value ITAD Batch Submitted</p>
                    <p className="text-slate-500 text-[11px]">Tech Solutions Ltd. submitted 12x Dell Latitude 7440 for valuation.</p>
                    <span className="text-[10px] text-slate-400 mt-1 block">2 minutes ago</span>
                  </div>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex gap-3 items-start">
                  <span className="w-2 h-2 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                  <div className="text-xs">
                    <p className="font-semibold text-slate-900">Low Stock Alert: Fortinet 60E</p>
                    <p className="text-slate-500 text-[11px]">Only 1 unit left in Trofa warehouse inventory.</p>
                    <span className="text-[10px] text-slate-400 mt-1 block">1 hour ago</span>
                  </div>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex gap-3 items-start">
                  <span className="w-2 h-2 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                  <div className="text-xs">
                    <p className="font-semibold text-slate-900">Pickup Logistics Scheduled</p>
                    <p className="text-slate-500 text-[11px]">Van route assigned for Global Systems in Porto.</p>
                    <span className="text-[10px] text-slate-400 mt-1 block">2 hours ago</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Messages / Inquiries Icon */}
        <div className="relative" ref={msgRef}>
          <button
            onClick={toggleMessages}
            aria-label="Inquiries and Messages"
            className="relative p-2 rounded-xl text-[#475569] hover:text-[#0F172A] hover:bg-[#F8FAFC] transition-colors cursor-pointer"
          >
            <MessageSquare className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-4.5 h-4.5 rounded-full bg-[#0D7E73] text-white text-[9.5px] font-black flex items-center justify-center ring-2 ring-white">
              {adminUser.unreadMessagesCount}
            </span>
          </button>

          {/* Messages Dropdown */}
          {isMessagesOpen && (
            <div className="absolute right-0 mt-2 w-80 sm:w-88 bg-white rounded-2xl shadow-xl border border-[#EAECF0] p-3.5 z-50 animate-fadeIn">
              <div className="flex items-center justify-between pb-2.5 border-b border-slate-100 mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-slate-900">Recent Customer Inquiries</span>
                  <span className="px-2 py-0.5 rounded-full bg-teal-50 text-[#0D7E73] text-[10px] font-bold">5 Open</span>
                </div>
              </div>
              <div className="space-y-2 max-h-72 overflow-y-auto pr-1 custom-scrollbar">
                <div className="p-2.5 rounded-xl hover:bg-[#F8FAFC] border border-slate-100 transition-colors cursor-pointer text-xs">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-bold text-slate-800">NetSecure Inc. (Rui)</span>
                    <span className="text-[10px] text-slate-400">25m ago</span>
                  </div>
                  <p className="text-slate-600 text-[11px] line-clamp-2">"Can we add 2x extra Cisco SFP+ fiber modules to our pending order?"</p>
                </div>
                <div className="p-2.5 rounded-xl hover:bg-[#F8FAFC] border border-slate-100 transition-colors cursor-pointer text-xs">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-bold text-slate-800">Global Systems (Mariana)</span>
                    <span className="text-[10px] text-slate-400">1h ago</span>
                  </div>
                  <p className="text-slate-600 text-[11px] line-clamp-2">"Confirmed pickup time window between 14:00 and 16:00 tomorrow."</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Divider */}
        <div className="w-[1px] h-6 bg-[#E2E8F0] hidden sm:block" />

        {/* Admin Profile Details */}
        <div className="relative" ref={profileRef}>
          <button
            onClick={() => setIsProfileOpen(prev => !prev)}
            className="flex items-center gap-2.5 p-1 sm:px-2 sm:py-1 rounded-xl hover:bg-[#F8FAFC] transition-colors cursor-pointer text-left group"
          >
            <img
              src={adminUser.avatarUrl}
              alt={adminUser.name}
              className="w-8 h-8 rounded-full object-cover ring-2 ring-[#0D7E73]/20"
            />
            <div className="hidden lg:flex flex-col min-w-0">
              <span className="text-xs font-bold text-[#0F172A] leading-tight group-hover:text-[#0D7E73] transition-colors">
                {adminUser.name}
              </span>
              <span className="text-[10px] text-[#64748B] leading-tight truncate">
                {adminUser.email}
              </span>
            </div>
            <ChevronDown className={`w-3.5 h-3.5 text-[#94A3B8] transition-transform ${isProfileOpen ? 'rotate-180' : ''}`} />
          </button>

          {/* User Profile Dropdown Menu */}
          {isProfileOpen && (
            <div className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-[#EAECF0] p-2 z-50 animate-fadeIn space-y-1">
              <div className="px-3 py-2 border-b border-slate-100">
                <p className="text-xs font-bold text-slate-900">{adminUser.name}</p>
                <p className="text-[10px] text-slate-500 truncate">{adminUser.email}</p>
                <div className="mt-1.5 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>{adminUser.role}</span>
                </div>
              </div>

              <button
                onClick={() => {
                  setIsProfileOpen(false);
                  navigate('/');
                }}
                className="w-full flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 hover:bg-[#F0FDFA] hover:text-[#0D7E73] transition-colors cursor-pointer text-left"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>View Public Website</span>
              </button>

              <button
                onClick={() => {
                  setIsProfileOpen(false);
                  logout();
                }}
                className="w-full flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold text-red-600 hover:bg-red-50 transition-colors cursor-pointer text-left"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>Sign Out</span>
              </button>
            </div>
          )}
        </div>

      </div>

    </header>
  );
};
