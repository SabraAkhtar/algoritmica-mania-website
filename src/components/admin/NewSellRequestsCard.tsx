import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useAdmin } from '../../context/AdminAuthContext';
import { AdminSellRequest } from '../../data/adminData';

export const NewSellRequestsCard: React.FC = () => {
  const { sellRequests, openDrawer } = useAdmin();

  // Desktop shows top 5, mobile shows top 3
  const desktopRequests = sellRequests.slice(0, 5);
  const mobileRequests = sellRequests.slice(0, 3);

  const getStatusBadge = (status: AdminSellRequest['status'], type: AdminSellRequest['statusType']) => {
    switch (type) {
      case 'amber':
        return 'bg-[#FFFBEB] text-[#D97706] border-[#FDE68A]';
      case 'blue':
        return 'bg-[#EFF6FF] text-[#2563EB] border-[#BFDBFE]';
      case 'green':
        return 'bg-[#ECFDF5] text-[#059669] border-[#A7F3D0]';
      case 'purple':
        return 'bg-[#FAF5FF] text-[#9333EA] border-[#E9D5FF]';
      case 'indigo':
        return 'bg-[#EEF2FF] text-[#4F46E5] border-[#C7D2FE]';
      case 'emerald':
        return 'bg-[#F0FDF4] text-[#16A34A] border-[#BBF7D0]';
      default:
        return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  return (
    <div className="bg-white rounded-2xl p-4 sm:p-5 border border-[#EAECF0] shadow-2xs flex flex-col justify-between h-full">
      
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-2">
        <h3 className="text-sm font-bold text-[#0F172A]">
          New Sell Requests
        </h3>
        <button
          onClick={() => openDrawer('requests')}
          className="text-xs font-semibold text-[#0D7E73] hover:text-[#042F2C] hover:underline cursor-pointer"
        >
          View All
        </button>
      </div>

      {/* MOBILE CARD VIEW (< 768px): 3 Purpose-Built Mobile Request Cards */}
      <div className="block md:hidden space-y-2.5 flex-1 mb-3">
        {mobileRequests.map((req) => (
          <div
            key={req.id}
            onClick={() => openDrawer('requests')}
            className="p-3 rounded-xl border border-slate-200/80 bg-slate-50/50 hover:bg-slate-100/70 transition-all cursor-pointer group space-y-2"
          >
            {/* Top row: Company & Status */}
            <div className="flex items-start justify-between gap-2">
              <div className="flex items-center gap-2 min-w-0">
                <div className={`w-7 h-7 rounded-full ${req.avatarColor} font-bold text-[11px] flex items-center justify-center shrink-0`}>
                  {req.avatarInitials}
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-bold text-[#0F172A] truncate group-hover:text-[#0D7E73]">
                    {req.companyName}
                  </div>
                  <div className="text-[11px] text-[#64748B] truncate">
                    {req.equipment}
                  </div>
                </div>
              </div>

              <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold border shrink-0 ${getStatusBadge(req.status, req.statusType)}`}>
                {req.status}
              </span>
            </div>

            {/* Bottom info row: Time & Action Link */}
            <div className="flex items-center justify-between pt-1 border-t border-slate-200/50 text-[11px]">
              <span className="text-slate-400 font-medium">{req.timeAgo}</span>
              <span className="text-[#0D7E73] font-bold flex items-center gap-0.5 group-hover:underline">
                View <ArrowRight className="w-3 h-3" />
              </span>
            </div>
          </div>
        ))}

        <button
          onClick={() => openDrawer('requests')}
          className="w-full py-2 rounded-xl bg-white border border-[#E2E8F0] text-xs font-bold text-[#0D7E73] hover:bg-[#F0FDFA] hover:border-[#99F6E4] transition-all cursor-pointer text-center mt-1"
        >
          View All Requests ({sellRequests.length})
        </button>
      </div>

      {/* DESKTOP / TABLET LIST VIEW (>= 768px) */}
      <div className="hidden md:block space-y-3.5 divide-y divide-slate-50 flex-1">
        {desktopRequests.map((req) => (
          <div 
            key={req.id}
            onClick={() => openDrawer('requests')}
            className="pt-2 first:pt-0 flex items-center justify-between gap-3 group hover:bg-slate-50/80 p-1.5 rounded-xl transition-colors cursor-pointer"
          >
            {/* Left: Avatar & Info */}
            <div className="flex items-center gap-3 min-w-0">
              <div className={`w-8 h-8 rounded-full ${req.avatarColor} font-bold text-xs flex items-center justify-center shrink-0`}>
                {req.avatarInitials}
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-xs font-bold text-[#0F172A] truncate group-hover:text-[#0D7E73] transition-colors">
                  {req.companyName}
                </span>
                <span className="text-[11px] text-[#64748B] truncate">
                  {req.equipment}
                </span>
              </div>
            </div>

            {/* Right: Status Badge & Time */}
            <div className="flex flex-col items-end shrink-0 gap-1">
              <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold border ${getStatusBadge(req.status, req.statusType)}`}>
                {req.status}
              </span>
              <span className="text-[10px] text-[#94A3B8]">
                {req.timeAgo}
              </span>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
