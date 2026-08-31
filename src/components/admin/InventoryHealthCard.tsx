import React from 'react';
import { 
  AlertTriangle, 
  XCircle, 
  ArrowDownToLine, 
  Wrench, 
  ShieldCheck 
} from 'lucide-react';
import { useAdmin } from '../../context/AdminAuthContext';

export const InventoryHealthCard: React.FC = () => {
  const { openDrawer } = useAdmin();

  const healthMetrics = [
    {
      id: 'low-stock',
      label: 'Low Stock',
      value: 16,
      icon: <AlertTriangle className="w-4 h-4 text-[#D97706]" />,
      cardBg: 'bg-[#FFFBEB]',
      cardBorder: 'border-[#FDE68A]',
      textColor: 'text-[#92400E]',
      badgeColor: 'text-[#B45309]'
    },
    {
      id: 'out-of-stock',
      label: 'Out of Stock',
      value: 7,
      icon: <XCircle className="w-4 h-4 text-[#DC2626]" />,
      cardBg: 'bg-[#FEF2F2]',
      cardBorder: 'border-[#FECACA]',
      textColor: 'text-[#991B1B]',
      badgeColor: 'text-[#DC2626]'
    },
    {
      id: 'incoming-stock',
      label: 'Incoming Stock',
      value: 23,
      icon: <ArrowDownToLine className="w-4 h-4 text-[#2563EB]" />,
      cardBg: 'bg-[#EFF6FF]',
      cardBorder: 'border-[#BFDBFE]',
      textColor: 'text-[#1E40AF]',
      badgeColor: 'text-[#2563EB]'
    },
    {
      id: 'damaged-items',
      label: 'Damaged Items',
      value: 5,
      icon: <Wrench className="w-4 h-4 text-[#EA580C]" />,
      cardBg: 'bg-[#FFF7ED]',
      cardBorder: 'border-[#FFEDD5]',
      textColor: 'text-[#9A3412]',
      badgeColor: 'text-[#EA580C]'
    },
    {
      id: 'ready-for-sale',
      label: 'Ready For Sale',
      value: 96,
      icon: <ShieldCheck className="w-4 h-4 text-[#16A34A]" />,
      cardBg: 'bg-[#F0FDF4]',
      cardBorder: 'border-[#BBF7D0]',
      textColor: 'text-[#166534]',
      badgeColor: 'text-[#16A34A]'
    }
  ];

  return (
    <div className="bg-white rounded-2xl p-5 border border-[#EAECF0] shadow-2xs flex flex-col justify-between h-full">
      
      {/* Header */}
      <div className="pb-3 border-b border-slate-100 mb-3">
        <h3 className="text-sm font-bold text-[#0F172A]">
          Inventory Health
        </h3>
      </div>

      {/* 5 Color-Coded Metric Cards Grid */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-2.5 flex-1 items-center">
        {healthMetrics.map((m, idx) => (
          <div
            key={m.id}
            onClick={() => openDrawer('stock')}
            className={`p-3 rounded-xl border ${m.cardBg} ${m.cardBorder} flex flex-col justify-between h-22 sm:h-24 hover:scale-[1.02] transition-transform cursor-pointer shadow-2xs ${
              idx === 4 ? 'col-span-2 md:col-span-1' : 'col-span-1'
            }`}
          >
            <div className="flex items-center gap-1.5">
              <span className="p-1 rounded-md bg-white/80 shadow-2xs shrink-0">{m.icon}</span>
              <span className={`text-[10.5px] font-bold ${m.textColor} truncate leading-tight`}>
                {m.label}
              </span>
            </div>
            
            <div className="text-xl font-black text-[#0F172A] tracking-tight">
              {m.value}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
