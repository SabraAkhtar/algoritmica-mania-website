import React, { useState, useMemo } from 'react';
import { 
  Package, 
  Plus, 
  Search, 
  Filter, 
  Eye, 
  EyeOff, 
  Edit3, 
  Trash2, 
  ExternalLink, 
  Check, 
  AlertTriangle, 
  RotateCcw, 
  Layers, 
  SlidersHorizontal,
  Sparkles,
  ArrowUpRight,
  TrendingUp,
  Tag
} from 'lucide-react';
import { useAdmin } from '../../context/AdminAuthContext';
import { useApp } from '../../context/AppContext';
import { Product, ProductCategory } from '../../types';
import { useNavigate } from 'react-router-dom';

export const ProductManagementSection: React.FC = () => {
  const { openAddProductModal } = useAdmin();
  const { 
    products, 
    toggleProductVisibility, 
    deleteProduct, 
    updateProductStock,
    resetProductsToDefault 
  } = useApp();
  const navigate = useNavigate();

  // Search & Filter States
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'visible' | 'hidden' | 'low-stock'>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [productToDelete, setProductToDelete] = useState<Product | null>(null);
  const [actionFeedback, setActionFeedback] = useState<string | null>(null);

  // Trigger brief feedback notification
  const triggerToast = (msg: string) => {
    setActionFeedback(msg);
    setTimeout(() => setActionFeedback(null), 2500);
  };

  // Metrics summary
  const totalCount = products.length;
  const visibleCount = products.filter(p => !p.isHidden).length;
  const hiddenCount = products.filter(p => !!p.isHidden).length;
  const lowStockCount = products.filter(p => (p.stock ?? 0) <= 3).length;

  // Filter products list
  const filteredProducts = useMemo(() => {
    return products.filter(p => {
      // Status filter
      if (statusFilter === 'visible' && p.isHidden) return false;
      if (statusFilter === 'hidden' && !p.isHidden) return false;
      if (statusFilter === 'low-stock' && (p.stock ?? 0) > 3) return false;

      // Category filter
      if (selectedCategory !== 'all') {
        if (selectedCategory === 'computers-laptops' && p.category !== 'computers-laptops' && p.category !== 'used-refurbished') {
          return false;
        } else if (p.category !== selectedCategory) {
          return false;
        }
      }

      // Search Query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchName = p.name.toLowerCase().includes(q);
        const matchBrand = p.brand.toLowerCase().includes(q);
        const matchSpecs = (p.keySpecs || '').toLowerCase().includes(q);
        const matchCategory = p.category.toLowerCase().includes(q);
        const matchId = p.id.toLowerCase().includes(q);
        if (!matchName && !matchBrand && !matchSpecs && !matchCategory && !matchId) {
          return false;
        }
      }

      return true;
    });
  }, [products, statusFilter, selectedCategory, searchQuery]);

  const handleToggleVisibility = (id: string, currentHidden: boolean, name: string) => {
    toggleProductVisibility(id);
    triggerToast(currentHidden ? `"${name}" is now VISIBLE on store.` : `"${name}" is now HIDDEN from store.`);
  };

  const handleConfirmDelete = () => {
    if (productToDelete) {
      deleteProduct(productToDelete.id);
      triggerToast(`Product "${productToDelete.name}" deleted.`);
      setProductToDelete(null);
    }
  };

  return (
    <div className="space-y-5">
      
      {/* Action Feedback Toast */}
      {actionFeedback && (
        <div className="fixed top-6 right-6 z-50 bg-[#042F2C] text-white px-5 py-3 rounded-2xl shadow-xl flex items-center gap-3 border border-[#2DD4BF] animate-fadeIn">
          <Check className="w-5 h-5 text-[#5EEAD4]" />
          <span className="text-xs sm:text-sm font-semibold">{actionFeedback}</span>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {productToDelete && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white rounded-3xl p-6 max-w-md w-full shadow-2xl border border-slate-200 text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center mx-auto">
              <Trash2 className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-slate-900">Delete Product from Inventory?</h4>
              <p className="text-xs text-slate-500 mt-1">
                Are you sure you want to delete <strong className="text-slate-800">"{productToDelete.name}"</strong>? This will remove it from the catalog.
              </p>
            </div>
            <div className="flex items-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => setProductToDelete(null)}
                className="flex-1 py-2.5 rounded-xl border border-slate-300 hover:bg-slate-50 text-xs font-bold text-slate-700 transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleConfirmDelete}
                className="flex-1 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-xs font-bold text-white transition-colors cursor-pointer shadow-sm"
              >
                Yes, Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* TOP HEADER & ACTION BANNER */}
      <div className="bg-white rounded-2xl sm:rounded-3xl border border-[#EAECF0] p-5 sm:p-6 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2.5 py-0.5 rounded-full bg-[#CCFBF1] text-[#0D7E73] text-[11px] font-extrabold uppercase tracking-wider">
              Store & Catalog Management
            </span>
            <span className="text-xs text-slate-400 font-semibold">• Real-Time Sync</span>
          </div>
          <h2 className="text-lg sm:text-2xl font-black text-[#0F172A] tracking-tight">
            Product Inventory & Visibility Manager
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Add new enterprise IT equipment, toggle instant 1-click Show / Hide on the public store, edit specs, and adjust stock quantities.
          </p>
        </div>

        {/* Primary Add Button */}
        <div className="flex items-center gap-2.5 shrink-0">
          <button
            onClick={() => resetProductsToDefault()}
            title="Reset catalog to original stock"
            className="p-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-500 hover:text-slate-700 text-xs font-bold transition-colors cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
          </button>

          <button
            onClick={() => openAddProductModal()}
            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-[#0D7E73] to-[#042F2C] hover:from-[#0f8e83] hover:to-[#064e3b] text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all cursor-pointer active:scale-95"
          >
            <Plus className="w-4 h-4" />
            <span>Add New Product</span>
          </button>
        </div>
      </div>

      {/* 4 STATS SUMMARY PILLS */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
        
        {/* Total Products */}
        <div 
          onClick={() => setStatusFilter('all')}
          className={`p-4 rounded-2xl border transition-all cursor-pointer ${
            statusFilter === 'all' 
              ? 'bg-slate-900 text-white border-slate-900 shadow-sm' 
              : 'bg-white text-slate-900 border-[#EAECF0] hover:border-slate-300'
          }`}
        >
          <div className="flex items-center justify-between text-xs font-medium mb-1">
            <span className={statusFilter === 'all' ? 'text-slate-300' : 'text-slate-500'}>Total In Catalog</span>
            <Package className="w-4 h-4 text-[#2DD4BF]" />
          </div>
          <p className="text-2xl font-black">{totalCount}</p>
          <p className={`text-[11px] mt-0.5 ${statusFilter === 'all' ? 'text-slate-300' : 'text-slate-400'}`}>All hardware units</p>
        </div>

        {/* Visible on Store */}
        <div 
          onClick={() => setStatusFilter('visible')}
          className={`p-4 rounded-2xl border transition-all cursor-pointer ${
            statusFilter === 'visible' 
              ? 'bg-[#0D7E73] text-white border-[#0D7E73] shadow-sm' 
              : 'bg-white text-slate-900 border-[#EAECF0] hover:border-emerald-300'
          }`}
        >
          <div className="flex items-center justify-between text-xs font-medium mb-1">
            <span className={statusFilter === 'visible' ? 'text-teal-100' : 'text-emerald-700 font-bold'}>Live On Store</span>
            <Eye className="w-4 h-4 text-[#5EEAD4]" />
          </div>
          <p className="text-2xl font-black">{visibleCount}</p>
          <p className={`text-[11px] mt-0.5 ${statusFilter === 'visible' ? 'text-teal-100' : 'text-emerald-600'}`}>Visible to customers</p>
        </div>

        {/* Hidden from Store */}
        <div 
          onClick={() => setStatusFilter('hidden')}
          className={`p-4 rounded-2xl border transition-all cursor-pointer ${
            statusFilter === 'hidden' 
              ? 'bg-amber-600 text-white border-amber-600 shadow-sm' 
              : 'bg-white text-slate-900 border-[#EAECF0] hover:border-amber-300'
          }`}
        >
          <div className="flex items-center justify-between text-xs font-medium mb-1">
            <span className={statusFilter === 'hidden' ? 'text-amber-100' : 'text-amber-700 font-bold'}>Hidden / Inactive</span>
            <EyeOff className="w-4 h-4 text-amber-300" />
          </div>
          <p className="text-2xl font-black">{hiddenCount}</p>
          <p className={`text-[11px] mt-0.5 ${statusFilter === 'hidden' ? 'text-amber-100' : 'text-amber-600'}`}>Not shown to buyers</p>
        </div>

        {/* Low Stock */}
        <div 
          onClick={() => setStatusFilter('low-stock')}
          className={`p-4 rounded-2xl border transition-all cursor-pointer ${
            statusFilter === 'low-stock' 
              ? 'bg-rose-600 text-white border-rose-600 shadow-sm' 
              : 'bg-white text-slate-900 border-[#EAECF0] hover:border-rose-300'
          }`}
        >
          <div className="flex items-center justify-between text-xs font-medium mb-1">
            <span className={statusFilter === 'low-stock' ? 'text-rose-100' : 'text-rose-700 font-bold'}>Low Stock Alert</span>
            <AlertTriangle className="w-4 h-4 text-rose-400" />
          </div>
          <p className="text-2xl font-black">{lowStockCount}</p>
          <p className={`text-[11px] mt-0.5 ${statusFilter === 'low-stock' ? 'text-rose-100' : 'text-rose-600'}`}>&le; 3 units left in warehouse</p>
        </div>

      </div>

      {/* SEARCH & FILTERS BAR */}
      <div className="bg-white rounded-2xl border border-[#EAECF0] p-4 shadow-xs flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
        
        {/* Search Input */}
        <div className="flex-1 flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] focus-within:border-[#0D7E73] focus-within:bg-white transition-all">
          <Search className="w-4 h-4 text-slate-400 shrink-0" />
          <input
            type="text"
            placeholder="Search by equipment name, brand, processor, SKU, category..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="w-full bg-transparent text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none"
          />
          {searchQuery && (
            <button onClick={() => setSearchQuery('')} className="text-slate-400 hover:text-slate-600 text-xs font-bold">
              Clear
            </button>
          )}
        </div>

        {/* Category Dropdown */}
        <div className="flex items-center gap-2">
          <select
            value={selectedCategory}
            onChange={e => setSelectedCategory(e.target.value)}
            className="px-3.5 py-2.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-xs font-semibold text-slate-700 focus:outline-none focus:border-[#0D7E73] cursor-pointer"
          >
            <option value="all">All Categories</option>
            <option value="computers-laptops">Computers & Laptops</option>
            <option value="apple">Apple Products</option>
            <option value="servers-storage">Servers & Storage</option>
            <option value="networking">Networking Equipment</option>
            <option value="cybersecurity">Cybersecurity Hardware</option>
            <option value="monitors">Monitors & Displays</option>
            <option value="it-accessories">IT Accessories</option>
          </select>
        </div>

      </div>

      {/* MAIN PRODUCTS TABLE */}
      <div className="bg-white rounded-2xl sm:rounded-3xl border border-[#EAECF0] shadow-xs overflow-hidden">
        
        <div className="px-5 py-4 border-b border-[#EAECF0] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h3 className="text-sm font-bold text-slate-900">
              Inventory Catalog ({filteredProducts.length} items)
            </h3>
            {statusFilter !== 'all' && (
              <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 text-[10px] font-bold uppercase">
                Filtered: {statusFilter}
              </span>
            )}
          </div>
          <span className="text-xs text-slate-400">
            Click the <strong className="text-slate-700">Show / Hide</strong> toggle to change public visibility in 1 second.
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#F8FAFC] border-b border-[#EAECF0] text-[11px] font-black uppercase tracking-wider text-slate-500">
                <th className="py-3.5 px-4">Equipment Details</th>
                <th className="py-3.5 px-4">Category & Brand</th>
                <th className="py-3.5 px-4">Price</th>
                <th className="py-3.5 px-4 text-center">Warehouse Stock</th>
                <th className="py-3.5 px-4 text-center">Store Visibility (Hide/Show)</th>
                <th className="py-3.5 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#EAECF0] text-xs">
              {filteredProducts.length === 0 ? (
                <tr>
                  <td colSpan={6} className="py-12 text-center text-slate-400">
                    <Package className="w-10 h-10 mx-auto mb-2 text-slate-300" />
                    <p className="font-bold text-sm text-slate-600">No products match your search or filter</p>
                    <p className="text-xs mt-1">Try resetting the filters or add a new product to the catalog.</p>
                  </td>
                </tr>
              ) : (
                filteredProducts.map(product => {
                  const isHidden = !!product.isHidden;
                  const stock = product.stock ?? 0;

                  return (
                    <tr 
                      key={product.id} 
                      className={`hover:bg-[#F0FDFA]/40 transition-colors ${
                        isHidden ? 'bg-slate-50/70 opacity-85' : 'bg-white'
                      }`}
                    >
                      {/* Column 1: Image & Name */}
                      <td className="py-3.5 px-4">
                        <div className="flex items-center gap-3.5 min-w-[240px]">
                          <img
                            src={product.images?.[0] || 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=200&q=80'}
                            alt={product.name}
                            className="w-13 h-13 rounded-xl object-cover border border-slate-200 shrink-0 bg-white"
                          />
                          <div className="min-w-0">
                            <div className="flex items-center gap-1.5">
                              <p className="font-bold text-slate-900 truncate max-w-[220px] text-xs sm:text-sm">
                                {product.name}
                              </p>
                              {product.featured && (
                                <span className="px-1.5 py-0.2 rounded bg-amber-100 text-amber-800 text-[9px] font-bold">
                                  Featured
                                </span>
                              )}
                            </div>
                            <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5 font-mono">
                              {product.keySpecs || 'Certified Hardware'}
                            </p>
                            <span className="text-[10px] text-slate-400">ID: {product.id}</span>
                          </div>
                        </div>
                      </td>

                      {/* Column 2: Category & Brand */}
                      <td className="py-3.5 px-4">
                        <div className="space-y-1">
                          <span className="inline-block px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 text-[10px] font-bold">
                            {product.brand}
                          </span>
                          <p className="text-[11px] text-slate-500 capitalize">
                            {product.category.replace('-', ' ')}
                          </p>
                          <span className="text-[10px] font-semibold text-[#0D7E73] block">
                            {product.condition}
                          </span>
                        </div>
                      </td>

                      {/* Column 3: Price */}
                      <td className="py-3.5 px-4">
                        {product.price !== undefined ? (
                          <span className="font-black text-sm text-[#0F172A]">
                            €{product.price.toLocaleString()}
                          </span>
                        ) : (
                          <span className="px-2 py-0.5 rounded-md bg-teal-50 text-[#0D7E73] text-[10px] font-bold">
                            Request Quote
                          </span>
                        )}
                      </td>

                      {/* Column 4: Warehouse Stock Stepper */}
                      <td className="py-3.5 px-4 text-center">
                        <div className="inline-flex items-center gap-1.5 p-1 rounded-xl bg-slate-100 border border-slate-200">
                          <button
                            type="button"
                            onClick={() => updateProductStock(product.id, Math.max(0, stock - 1))}
                            className="w-6 h-6 rounded-lg bg-white hover:bg-slate-200 text-slate-700 font-bold flex items-center justify-center transition-colors cursor-pointer text-xs"
                            title="Decrease stock"
                          >
                            -
                          </button>
                          <span className={`w-8 text-center font-bold text-xs ${
                            stock === 0 ? 'text-rose-600' : stock <= 3 ? 'text-amber-600' : 'text-slate-900'
                          }`}>
                            {stock}
                          </span>
                          <button
                            type="button"
                            onClick={() => updateProductStock(product.id, stock + 1)}
                            className="w-6 h-6 rounded-lg bg-white hover:bg-slate-200 text-slate-700 font-bold flex items-center justify-center transition-colors cursor-pointer text-xs"
                            title="Increase stock"
                          >
                            +
                          </button>
                        </div>
                        <span className={`block text-[10px] mt-1 font-semibold ${
                          stock === 0 ? 'text-rose-600' : stock <= 3 ? 'text-amber-600' : 'text-emerald-600'
                        }`}>
                          {stock === 0 ? 'Out of Stock' : stock <= 3 ? 'Low Stock' : 'In Stock'}
                        </span>
                      </td>

                      {/* Column 5: Instant Toggle Show / Hide Switch */}
                      <td className="py-3.5 px-4 text-center">
                        <div className="flex flex-col items-center gap-1">
                          
                          {/* Modern Interactive Switch Button */}
                          <button
                            type="button"
                            onClick={() => handleToggleVisibility(product.id, isHidden, product.name)}
                            className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all shadow-xs flex items-center gap-2 cursor-pointer active:scale-95 ${
                              isHidden 
                                ? 'bg-slate-200 text-slate-700 hover:bg-slate-300' 
                                : 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white hover:from-emerald-700 hover:to-teal-700 ring-2 ring-emerald-500/30'
                            }`}
                            title={isHidden ? 'Click to show on store' : 'Click to hide from store'}
                          >
                            {isHidden ? (
                              <>
                                <EyeOff className="w-3.5 h-3.5 text-slate-500" />
                                <span>Hidden (Draft)</span>
                              </>
                            ) : (
                              <>
                                <Eye className="w-3.5 h-3.5 text-white" />
                                <span>Live on Store</span>
                              </>
                            )}
                          </button>

                          <span className="text-[9.5px] text-slate-400">
                            {isHidden ? 'Not shown to customers' : 'Visible on public website'}
                          </span>
                        </div>
                      </td>

                      {/* Column 6: Action Buttons */}
                      <td className="py-3.5 px-4 text-right">
                        <div className="flex items-center justify-end gap-1.5">
                          
                          {/* View on Public Store */}
                          <button
                            type="button"
                            onClick={() => navigate(`/products/${product.id}`)}
                            title="View product on public store"
                            className="p-2 rounded-xl text-slate-500 hover:text-[#0D7E73] hover:bg-[#F0FDFA] transition-colors cursor-pointer"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </button>

                          {/* Edit Product */}
                          <button
                            type="button"
                            onClick={() => openAddProductModal(product)}
                            title="Edit product details"
                            className="p-2 rounded-xl text-slate-500 hover:text-blue-600 hover:bg-blue-50 transition-colors cursor-pointer"
                          >
                            <Edit3 className="w-4 h-4" />
                          </button>

                          {/* Delete Product */}
                          <button
                            type="button"
                            onClick={() => setProductToDelete(product)}
                            title="Delete product"
                            className="p-2 rounded-xl text-slate-500 hover:text-rose-600 hover:bg-rose-50 transition-colors cursor-pointer"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>

                        </div>
                      </td>

                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>

      </div>

    </div>
  );
};
