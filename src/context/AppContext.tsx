import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, Product, ProductCategory, RfqItem } from '../types';
import { productsData } from '../data/products';

interface AppContextType {
  lang: Language;
  setLanguage: (newLang: Language) => void;
  // Dynamic Product Management State (Public & Admin)
  products: Product[];
  visibleProducts: Product[];
  addProduct: (productData: Partial<Product>) => Product;
  updateProduct: (id: string, updates: Partial<Product>) => void;
  toggleProductVisibility: (id: string) => void;
  deleteProduct: (id: string) => void;
  updateProductStock: (id: string, newStock: number) => void;
  resetProductsToDefault: () => void;
  // Cart & Quote Drawer State
  isCartDrawerOpen: boolean;
  cartDrawerMode: 'cart' | 'rfq-form';
  openCartDrawer: (mode?: 'cart' | 'rfq-form') => void;
  closeCartDrawer: () => void;
  // Quote Drawer State (legacy compatible)
  isQuoteDrawerOpen: boolean;
  quoteProduct?: Product;
  openQuoteDrawer: (product?: Product, mode?: 'cart' | 'rfq-form') => void;
  closeQuoteDrawer: () => void;
  // RFQ Basket
  rfqItems: RfqItem[];
  rfqProducts: Product[];
  totalRfqCount: number;
  subtotalRfq: number;
  addToRfq: (product: Product, quantity?: number, openDrawer?: boolean) => void;
  updateRfqQuantity: (productId: string, quantity: number) => void;
  removeFromRfq: (productId: string) => void;
  clearRfq: () => void;
  // Search Modal
  isSearchModalOpen: boolean;
  openSearchModal: () => void;
  closeSearchModal: () => void;
  // Mobile Drawer
  isMobileDrawerOpen: boolean;
  openMobileDrawer: () => void;
  closeMobileDrawer: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem('algoritmica_lang');
    return (saved === 'en' || saved === 'pt') ? saved : 'pt';
  });

  // Products state with initial values from productsData and persistence in localStorage
  const [products, setProducts] = useState<Product[]>(() => {
    try {
      const savedProducts = localStorage.getItem('algoritmica_products_v2');
      if (savedProducts) {
        const parsed = JSON.parse(savedProducts);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch (e) {
      console.error('Error loading saved products:', e);
    }
    // Initialize with default productsData with initial stock numbers
    return productsData.map(p => ({
      ...p,
      stock: p.stock ?? (p.availability === 'In Stock' ? 12 : p.availability === 'Limited Stock' ? 2 : 0),
      isHidden: p.isHidden ?? false
    }));
  });

  // Save products to localStorage on modification
  useEffect(() => {
    try {
      localStorage.setItem('algoritmica_products_v2', JSON.stringify(products));
    } catch (e) {
      console.error('Error persisting products:', e);
    }
  }, [products]);

  // Derived visible products for public storefront
  const visibleProducts = products.filter(p => !p.isHidden);

  const addProduct = (productData: Partial<Product>): Product => {
    const randomId = 'prod-' + Date.now().toString(36) + '-' + Math.random().toString(36).substring(2, 6);
    const newSlug = (productData.name || 'product')
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');

    const created: Product = {
      id: productData.id || randomId,
      slug: productData.slug || newSlug,
      name: productData.name || 'New Enterprise Equipment',
      brand: productData.brand || 'Enterprise Grade',
      category: productData.category || 'computers-laptops',
      subCategory: productData.subCategory || 'Hardware',
      condition: productData.condition || 'Refurbished - Grade A',
      keySpecs: productData.keySpecs || 'High-performance refurbished hardware',
      fullSpecs: productData.fullSpecs || [
        { label: 'Condition', value: productData.condition || 'Refurbished - Grade A' },
        { label: 'Warranty', value: '12 Months Enterprise SLA' }
      ],
      description: productData.description || 'Enterprise refurbished IT hardware tested, certified and sanitized in Trofa facility.',
      price: productData.price,
      currency: productData.currency || '€',
      availability: productData.availability || (productData.stock && productData.stock > 0 ? 'In Stock' : 'Available on Request'),
      images: productData.images && productData.images.length > 0 
        ? productData.images 
        : ['https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80'],
      features: productData.features || [
        'NIST 800-88 Data Sanitized',
        'Certified hardware diagnostics passed',
        'Includes 12-month Algorítmica Mania warranty'
      ],
      warrantyMonths: productData.warrantyMonths || 12,
      featured: productData.featured || false,
      isHidden: productData.isHidden || false,
      stock: productData.stock ?? 5
    };

    setProducts(prev => [created, ...prev]);
    return created;
  };

  const updateProduct = (id: string, updates: Partial<Product>) => {
    setProducts(prev => prev.map(p => (p.id === id ? { ...p, ...updates } : p)));
  };

  const toggleProductVisibility = (id: string) => {
    setProducts(prev => prev.map(p => {
      if (p.id === id) {
        return { ...p, isHidden: !p.isHidden };
      }
      return p;
    }));
  };

  const deleteProduct = (id: string) => {
    setProducts(prev => prev.filter(p => p.id !== id));
  };

  const updateProductStock = (id: string, newStock: number) => {
    setProducts(prev => prev.map(p => {
      if (p.id === id) {
        const sanitized = Math.max(0, newStock);
        const availability = sanitized === 0 
          ? 'Available on Request' 
          : sanitized <= 3 
            ? 'Limited Stock' 
            : 'In Stock';
        return { ...p, stock: sanitized, availability };
      }
      return p;
    }));
  };

  const resetProductsToDefault = () => {
    const defaults = productsData.map(p => ({
      ...p,
      stock: p.stock ?? (p.availability === 'In Stock' ? 12 : p.availability === 'Limited Stock' ? 2 : 0),
      isHidden: false
    }));
    setProducts(defaults);
    localStorage.removeItem('algoritmica_products_v2');
  };

  const [isCartDrawerOpen, setIsCartDrawerOpen] = useState(false);
  const [cartDrawerMode, setCartDrawerMode] = useState<'cart' | 'rfq-form'>('cart');
  const [quoteProduct, setQuoteProduct] = useState<Product | undefined>(undefined);

  const [rfqItems, setRfqItems] = useState<RfqItem[]>(() => {
    try {
      const savedItems = localStorage.getItem('algoritmica_rfq_items');
      if (savedItems) {
        const parsed = JSON.parse(savedItems);
        if (Array.isArray(parsed)) {
          return parsed.filter(item => item && item.product && typeof item.quantity === 'number');
        }
      }
      // Fallback migration for older array of products
      const legacySaved = localStorage.getItem('algoritmica_rfq');
      if (legacySaved) {
        const legacyParsed = JSON.parse(legacySaved);
        if (Array.isArray(legacyParsed)) {
          return legacyParsed.map((p: any) => ({ product: p, quantity: 1 }));
        }
      }
      return [];
    } catch {
      return [];
    }
  });

  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('algoritmica_rfq_items', JSON.stringify(rfqItems));
      localStorage.setItem('algoritmica_rfq', JSON.stringify(rfqItems.map(i => i.product)));
    } catch (e) {
      console.error(e);
    }
  }, [rfqItems]);

  const setLanguage = (newLang: Language) => {
    setLang(newLang);
    localStorage.setItem('algoritmica_lang', newLang);
  };

  const openCartDrawer = (mode: 'cart' | 'rfq-form' = 'cart') => {
    setCartDrawerMode(mode);
    setIsCartDrawerOpen(true);
  };

  const closeCartDrawer = () => {
    setIsCartDrawerOpen(false);
  };

  const openQuoteDrawer = (product?: Product, mode: 'cart' | 'rfq-form' = 'cart') => {
    if (product) {
      setQuoteProduct(product);
      addToRfq(product, 1, false);
    }
    setCartDrawerMode(mode);
    setIsCartDrawerOpen(true);
  };

  const closeQuoteDrawer = () => {
    setIsCartDrawerOpen(false);
  };

  const addToRfq = (product: Product, quantity: number = 1, openDrawer: boolean = true) => {
    setRfqItems(prev => {
      const existingIdx = prev.findIndex(item => item.product.id === product.id);
      if (existingIdx > -1) {
        const updated = [...prev];
        updated[existingIdx] = {
          ...updated[existingIdx],
          quantity: updated[existingIdx].quantity + (quantity || 1)
        };
        return updated;
      }
      return [...prev, { product, quantity: quantity || 1 }];
    });

    if (openDrawer) {
      setCartDrawerMode('cart');
      setIsCartDrawerOpen(true);
    }
  };

  const updateRfqQuantity = (productId: string, quantity: number) => {
    const sanitizedQty = Math.max(1, quantity);
    setRfqItems(prev => prev.map(item => 
      item.product.id === productId ? { ...item, quantity: sanitizedQty } : item
    ));
  };

  const removeFromRfq = (productId: string) => {
    setRfqItems(prev => prev.filter(item => item.product.id !== productId));
  };

  const clearRfq = () => {
    setRfqItems([]);
  };

  const totalRfqCount = rfqItems.reduce((acc, item) => acc + item.quantity, 0);
  const subtotalRfq = rfqItems.reduce((acc, item) => acc + (item.product.price || 0) * item.quantity, 0);
  const rfqProducts = rfqItems.map(item => item.product);

  const openSearchModal = () => setIsSearchModalOpen(true);
  const closeSearchModal = () => setIsSearchModalOpen(false);

  const openMobileDrawer = () => setIsMobileDrawerOpen(true);
  const closeMobileDrawer = () => setIsMobileDrawerOpen(false);

  // Global Keyboard Shortcut for Search (Ctrl+K and Cmd+K)
  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && (e.key === 'k' || e.key === 'K')) {
        e.preventDefault();
        e.stopPropagation();
        setIsSearchModalOpen(prev => !prev);
      }
      if (e.key === 'Escape') {
        if (isCartDrawerOpen) setIsCartDrawerOpen(false);
      }
    };

    window.addEventListener('keydown', handleGlobalKeyDown, true);
    return () => window.removeEventListener('keydown', handleGlobalKeyDown, true);
  }, [isCartDrawerOpen]);

  return (
    <AppContext.Provider
      value={{
        lang,
        setLanguage,
        products,
        visibleProducts,
        addProduct,
        updateProduct,
        toggleProductVisibility,
        deleteProduct,
        updateProductStock,
        resetProductsToDefault,
        isCartDrawerOpen,
        cartDrawerMode,
        openCartDrawer,
        closeCartDrawer,
        isQuoteDrawerOpen: isCartDrawerOpen,
        quoteProduct,
        openQuoteDrawer,
        closeQuoteDrawer,
        rfqItems,
        rfqProducts,
        totalRfqCount,
        subtotalRfq,
        addToRfq,
        updateRfqQuantity,
        removeFromRfq,
        clearRfq,
        isSearchModalOpen,
        openSearchModal,
        closeSearchModal,
        isMobileDrawerOpen,
        openMobileDrawer,
        closeMobileDrawer
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};


