import React, { useState } from 'react';
import { Search, X, Package, FileText, ArrowRight } from 'lucide-react';
import { useAdmin } from '../../context/AdminAuthContext';
import { productsData } from '../../data/products';

export const AdminSearchModal: React.FC = () => {
  const { isSearchOpen, closeSearch, sellRequests, openDrawer } = useAdmin();
  const [searchTerm, setSearchTerm] = useState('');

  if (!isSearchOpen) return null;

  const filteredRequests = sellRequests.filter(r => 
    r.companyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    r.equipment.toLowerCase().includes(searchTerm.toLowerCase()) ||
    r.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredProducts = productsData.filter(p =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.category.toLowerCase().includes(searchTerm.toLowerCase())
  ).slice(0, 5);

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-slate-900/40 backdrop-blur-xs animate-fadeIn">
      <div 
        className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Bar Input */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-slate-100 bg-slate-50/50">
          <Search className="w-5 h-5 text-[#0D7E73]" />
          <input
            type="text"
            autoFocus
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Type to search requests, products, clients..."
            className="flex-1 bg-transparent text-sm text-slate-800 placeholder-slate-400 focus:outline-hidden"
          />
          <button 
            onClick={closeSearch}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200/50 cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results Body */}
        <div className="max-h-96 overflow-y-auto p-4 space-y-4 custom-scrollbar">
          
          {/* Sell Requests Matches */}
          <div>
            <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
              <span>Sell Requests ({filteredRequests.length})</span>
              <button 
                onClick={() => {
                  closeSearch();
                  openDrawer('requests');
                }}
                className="text-[#0D7E73] hover:underline normal-case text-xs font-semibold cursor-pointer"
              >
                View table
              </button>
            </div>

            <div className="space-y-1.5">
              {filteredRequests.slice(0, 3).map((req) => (
                <div
                  key={req.id}
                  onClick={() => {
                    closeSearch();
                    openDrawer('requests');
                  }}
                  className="flex items-center justify-between p-2 rounded-xl hover:bg-[#F0FDFA] transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-2.5">
                    <FileText className="w-4 h-4 text-[#0D7E73]" />
                    <span className="text-xs font-bold text-slate-800">{req.companyName}</span>
                    <span className="text-xs text-slate-500">• {req.equipment}</span>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                    {req.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Product Inventory Matches */}
          <div>
            <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
              <span>Products in Inventory</span>
            </div>

            <div className="space-y-1.5">
              {filteredProducts.map((prod) => (
                <div
                  key={prod.id}
                  onClick={() => {
                    closeSearch();
                    openDrawer('stock');
                  }}
                  className="flex items-center justify-between p-2 rounded-xl hover:bg-[#F0FDFA] transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <Package className="w-4 h-4 text-purple-600 shrink-0" />
                    <span className="text-xs font-bold text-slate-800 truncate">{prod.name}</span>
                    <span className="text-xs text-slate-400 shrink-0">€{prod.price}</span>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 shrink-0">
                    {prod.availability}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="px-4 py-2.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
          <span>Navigate with mouse or keyboard</span>
          <span>Press ESC to close</span>
        </div>
      </div>
    </div>
  );
};
