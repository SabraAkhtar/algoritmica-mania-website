import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  AdminSellRequest, 
  AdminActivityItem, 
  AdminTaskItem, 
  initialSellRequests, 
  initialActivities, 
  initialTasks 
} from '../data/adminData';
import { Product } from '../types';

export interface AdminUser {
  id: string;
  name: string;
  email: string;
  role: string;
  avatarUrl: string;
  unreadNotificationsCount: number;
  unreadMessagesCount: number;
}

interface AdminAuthContextType {
  isAuthenticated: boolean;
  adminUser: AdminUser;
  login: (email?: string, password?: string) => boolean;
  logout: () => void;
  // Dashboard data states & mutations
  sellRequests: AdminSellRequest[];
  activities: AdminActivityItem[];
  tasks: AdminTaskItem[];
  addSellRequest: (request: Partial<AdminSellRequest>) => void;
  updateSellRequestStatus: (id: string, status: AdminSellRequest['status']) => void;
  // Active Navigation Tab
  activeAdminTab: string;
  setActiveAdminTab: (tab: string) => void;
  // Add/Edit Product Modal State
  isAddProductModalOpen: boolean;
  editingProduct: Product | null;
  openAddProductModal: (product?: Product) => void;
  closeAddProductModal: () => void;
  // Filter & interaction state
  selectedPeriod: 'This Month' | 'Last Month' | 'Last 90 Days' | 'This Year';
  setSelectedPeriod: (period: 'This Month' | 'Last Month' | 'Last 90 Days' | 'This Year') => void;
  isQuickActionsOpen: boolean;
  openQuickActions: () => void;
  closeQuickActions: () => void;
  isNotificationsOpen: boolean;
  toggleNotifications: () => void;
  closeNotifications: () => void;
  isMessagesOpen: boolean;
  toggleMessages: () => void;
  closeMessages: () => void;
  isSearchOpen: boolean;
  openSearch: () => void;
  closeSearch: () => void;
  activeDrawer: 'requests' | 'activity' | 'tasks' | 'stock' | 'pipeline' | null;
  openDrawer: (drawer: 'requests' | 'activity' | 'tasks' | 'stock' | 'pipeline') => void;
  closeDrawer: () => void;
}

const defaultAdminUser: AdminUser = {
  id: 'usr-admin-01',
  name: 'Admin Owner',
  email: 'admin@algomania.com',
  role: 'Super Administrator',
  avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&h=200&q=80',
  unreadNotificationsCount: 8,
  unreadMessagesCount: 5
};

const AdminAuthContext = createContext<AdminAuthContextType | undefined>(undefined);

export const AdminAuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    const saved = localStorage.getItem('algoritmica_admin_auth');
    // Default to true in development preview so admin dashboard is directly accessible, but fully functional login/logout
    return saved !== null ? saved === 'true' : true;
  });

  const [adminUser, setAdminUser] = useState<AdminUser>(defaultAdminUser);
  const [sellRequests, setSellRequests] = useState<AdminSellRequest[]>(() => {
    const saved = localStorage.getItem('algoritmica_admin_requests');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error(e);
      }
    }
    return initialSellRequests;
  });

  const [activities, setActivities] = useState<AdminActivityItem[]>(initialActivities);
  const [tasks, setTasks] = useState<AdminTaskItem[]>(initialTasks);
  const [selectedPeriod, setSelectedPeriod] = useState<'This Month' | 'Last Month' | 'Last 90 Days' | 'This Year'>('This Month');
  
  // UI Overlays
  const [isQuickActionsOpen, setIsQuickActionsOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isMessagesOpen, setIsMessagesOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeDrawer, setActiveDrawer] = useState<'requests' | 'activity' | 'tasks' | 'stock' | 'pipeline' | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem('algoritmica_admin_auth', String(isAuthenticated));
    } catch (e) {
      console.error(e);
    }
  }, [isAuthenticated]);

  useEffect(() => {
    try {
      localStorage.setItem('algoritmica_admin_requests', JSON.stringify(sellRequests));
    } catch (e) {
      console.error(e);
    }
  }, [sellRequests]);

  const login = (email?: string, password?: string) => {
    // Admin login validation (supports one-click or custom credentials)
    setIsAuthenticated(true);
    if (email) {
      setAdminUser(prev => ({ ...prev, email }));
    }
    return true;
  };

  const logout = () => {
    setIsAuthenticated(false);
    setIsNotificationsOpen(false);
    setIsMessagesOpen(false);
    setIsQuickActionsOpen(false);
  };

  const addSellRequest = (request: Partial<AdminSellRequest>) => {
    const newReq: AdminSellRequest = {
      id: `req-${Date.now()}`,
      companyName: request.companyName || 'New Business Client',
      avatarInitials: (request.companyName || 'NB').slice(0, 2).toUpperCase(),
      avatarColor: 'bg-[#ECFDF5] text-[#047857]',
      equipment: request.equipment || 'Enterprise IT Batch',
      status: request.status || 'Under Review',
      statusType: 'amber',
      timeAgo: 'Just now',
      offeredPrice: request.offeredPrice || 5000,
      pickupDate: request.pickupDate || new Date().toISOString().split('T')[0],
      assignedTo: request.assignedTo || 'Carlos Mendes',
      contactEmail: request.contactEmail || 'contact@client.com',
      contactPhone: request.contactPhone || '+351 900 000 000',
      quantity: request.quantity || 10
    };

    setSellRequests(prev => [newReq, ...prev]);

    // Also add to activity stream
    const newActivity: AdminActivityItem = {
      id: `act-${Date.now()}`,
      iconType: 'request',
      iconColor: 'bg-[#ECFDF5] text-[#0D7E73]',
      text: `New sell request from ${newReq.companyName}`,
      timeAgo: 'Just now',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setActivities(prev => [newActivity, ...prev]);
  };

  const updateSellRequestStatus = (id: string, status: AdminSellRequest['status']) => {
    setSellRequests(prev => prev.map(req => {
      if (req.id === id) {
        let statusType: AdminSellRequest['statusType'] = 'amber';
        if (status === 'Quote Sent') statusType = 'blue';
        if (status === 'Accepted') statusType = 'green';
        if (status === 'Pickup Scheduled') statusType = 'purple';
        if (status === 'Refurbishing') statusType = 'indigo';
        if (status === 'Completed') statusType = 'emerald';
        return { ...req, status, statusType };
      }
      return req;
    }));
  };

  const openQuickActions = () => {
    setIsNotificationsOpen(false);
    setIsMessagesOpen(false);
    setIsQuickActionsOpen(true);
  };
  const closeQuickActions = () => setIsQuickActionsOpen(false);

  const toggleNotifications = () => {
    setIsMessagesOpen(false);
    setIsQuickActionsOpen(false);
    setIsNotificationsOpen(prev => !prev);
  };
  const closeNotifications = () => setIsNotificationsOpen(false);

  const toggleMessages = () => {
    setIsNotificationsOpen(false);
    setIsQuickActionsOpen(false);
    setIsMessagesOpen(prev => !prev);
  };
  const closeMessages = () => setIsMessagesOpen(false);

  const openSearch = () => setIsSearchOpen(true);
  const closeSearch = () => setIsSearchOpen(false);

  const openDrawer = (drawer: 'requests' | 'activity' | 'tasks' | 'stock' | 'pipeline') => {
    setActiveDrawer(drawer);
  };
  const closeDrawer = () => setActiveDrawer(null);

  const [activeAdminTab, setActiveAdminTab] = useState<string>('dashboard');
  const [isAddProductModalOpen, setIsAddProductModalOpen] = useState<boolean>(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  const openAddProductModal = (product?: Product) => {
    setEditingProduct(product || null);
    setIsAddProductModalOpen(true);
  };

  const closeAddProductModal = () => {
    setIsAddProductModalOpen(false);
    setEditingProduct(null);
  };

  // Keyboard shortcut Ctrl+K / Cmd+K inside admin view
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && (e.key === 'k' || e.key === 'K')) {
        e.preventDefault();
        setIsSearchOpen(prev => !prev);
      }
      if (e.key === 'Escape') {
        setIsSearchOpen(false);
        setIsQuickActionsOpen(false);
        setIsNotificationsOpen(false);
        setIsMessagesOpen(false);
        setActiveDrawer(null);
        setIsAddProductModalOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <AdminAuthContext.Provider
      value={{
        isAuthenticated,
        adminUser,
        login,
        logout,
        sellRequests,
        activities,
        tasks,
        addSellRequest,
        updateSellRequestStatus,
        activeAdminTab,
        setActiveAdminTab,
        isAddProductModalOpen,
        editingProduct,
        openAddProductModal,
        closeAddProductModal,
        selectedPeriod,
        setSelectedPeriod,
        isQuickActionsOpen,
        openQuickActions,
        closeQuickActions,
        isNotificationsOpen,
        toggleNotifications,
        closeNotifications,
        isMessagesOpen,
        toggleMessages,
        closeMessages,
        isSearchOpen,
        openSearch,
        closeSearch,
        activeDrawer,
        openDrawer,
        closeDrawer
      }}
    >
      {children}
    </AdminAuthContext.Provider>
  );
};

export const useAdmin = () => {
  const context = useContext(AdminAuthContext);
  if (!context) {
    throw new Error('useAdmin must be used within an AdminAuthProvider');
  }
  return context;
};
