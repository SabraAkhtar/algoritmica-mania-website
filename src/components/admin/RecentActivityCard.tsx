import React from 'react';
import { 
  FileText, 
  Scale, 
  Truck, 
  Package, 
  ShoppingBag, 
  UserPlus 
} from 'lucide-react';
import { useAdmin } from '../../context/AdminAuthContext';
import { AdminActivityItem } from '../../data/adminData';

export const RecentActivityCard: React.FC = () => {
  const { activities, openDrawer } = useAdmin();

  const getActivityIcon = (type: AdminActivityItem['iconType']) => {
    switch (type) {
      case 'request':
        return <FileText className="w-3.5 h-3.5" />;
      case 'valuation':
        return <Scale className="w-3.5 h-3.5" />;
      case 'pickup':
        return <Truck className="w-3.5 h-3.5" />;
      case 'product':
        return <Package className="w-3.5 h-3.5" />;
      case 'order':
        return <ShoppingBag className="w-3.5 h-3.5" />;
      case 'customer':
        return <UserPlus className="w-3.5 h-3.5" />;
      default:
        return <FileText className="w-3.5 h-3.5" />;
    }
  };

  return (
    <div className="bg-white rounded-2xl p-5 border border-[#EAECF0] shadow-2xs flex flex-col justify-between h-full">
      
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-2">
        <h3 className="text-sm font-bold text-[#0F172A]">
          Recent Activity
        </h3>
        <button
          onClick={() => openDrawer('activity')}
          className="text-xs font-semibold text-[#0D7E73] hover:text-[#042F2C] hover:underline cursor-pointer"
        >
          View All
        </button>
      </div>

      {/* Activity Timeline List */}
      <div className="space-y-3 flex-1">
        {activities.slice(0, 6).map((item) => (
          <div 
            key={item.id}
            onClick={() => openDrawer('activity')}
            className="flex items-center justify-between gap-3 text-xs hover:bg-slate-50/80 p-1.5 rounded-xl transition-colors cursor-pointer group"
          >
            <div className="flex items-center gap-2.5 min-w-0">
              <div className={`w-7 h-7 rounded-full ${item.iconColor} flex items-center justify-center shrink-0 shadow-2xs`}>
                {getActivityIcon(item.iconType)}
              </div>
              <span className="font-medium text-[#334155] truncate group-hover:text-[#0F172A] transition-colors">
                {item.text}
              </span>
            </div>

            <span className="text-[10px] text-[#94A3B8] whitespace-nowrap shrink-0">
              {item.timeAgo}
            </span>
          </div>
        ))}
      </div>

    </div>
  );
};
