import React from 'react';
import { lowStockAlerts } from '../../data/adminData';
import { useAdmin } from '../../context/AdminAuthContext';

export const LowStockAlertCard: React.FC = () => {
  const { openDrawer } = useAdmin();

  return (
    <div className="bg-white rounded-2xl p-5 border border-[#EAECF0] shadow-2xs flex flex-col justify-between h-full">
      
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-2">
        <h3 className="text-sm font-bold text-[#0F172A]">
          Low Stock Alert
        </h3>
        <button
          onClick={() => openDrawer('stock')}
          className="text-xs font-semibold text-[#0D7E73] hover:text-[#042F2C] hover:underline cursor-pointer"
        >
          View All
        </button>
      </div>

      {/* Table Headers */}
      <div className="grid grid-cols-12 text-[11px] font-bold text-[#94A3B8] px-2 py-1 uppercase tracking-wider">
        <div className="col-span-7">Product</div>
        <div className="col-span-3 text-center">Stock</div>
        <div className="col-span-2 text-right">Status</div>
      </div>

      {/* Product Rows List */}
      <div className="space-y-1.5 flex-1">
        {lowStockAlerts.map((item) => (
          <div 
            key={item.id}
            onClick={() => openDrawer('stock')}
            className="grid grid-cols-12 items-center p-2 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer group"
          >
            {/* Product Column */}
            <div className="col-span-7 flex items-center gap-2.5 min-w-0">
              <div className="w-8 h-8 rounded-lg bg-slate-100 border border-slate-200 overflow-hidden shrink-0 flex items-center justify-center p-0.5">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
              <span className="text-xs font-bold text-[#0F172A] truncate group-hover:text-[#0D7E73] transition-colors">
                {item.name}
              </span>
            </div>

            {/* Stock Count Column */}
            <div className="col-span-3 text-center text-xs font-semibold text-[#475569]">
              Stock: {item.stock}
            </div>

            {/* Status Badge Column */}
            <div className="col-span-2 text-right">
              <span className="inline-block px-2 py-0.5 rounded-md bg-[#FEF2F2] border border-[#FECACA] text-[10px] font-black text-[#EF4444]">
                {item.status}
              </span>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
