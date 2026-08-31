import React, { useState } from 'react';
import { 
  Inbox, 
  Search, 
  Send, 
  MessageCircle, 
  CheckCircle2, 
  CheckCheck,
  ChevronDown 
} from 'lucide-react';
import { quotePipelineStages } from '../../data/adminData';
import { useAdmin } from '../../context/AdminAuthContext';

export const QuotePipelineCard: React.FC = () => {
  const { openDrawer } = useAdmin();
  const [selectedPeriod, setSelectedPeriod] = useState<'This Month' | 'Last Month'>('This Month');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const getStageIcon = (id: string) => {
    switch (id) {
      case 'new':
        return <Inbox className="w-3.5 h-3.5 text-[#0D7E73]" />;
      case 'review':
        return <Search className="w-3.5 h-3.5 text-[#EA580C]" />;
      case 'offer':
        return <Send className="w-3.5 h-3.5 text-[#2563EB]" />;
      case 'negotiation':
        return <MessageCircle className="w-3.5 h-3.5 text-[#10B981]" />;
      case 'accepted':
        return <CheckCircle2 className="w-3.5 h-3.5 text-[#059669]" />;
      case 'completed':
        return <CheckCheck className="w-3.5 h-3.5 text-[#042F2C]" />;
      default:
        return <Inbox className="w-3.5 h-3.5 text-[#0D7E73]" />;
    }
  };

  return (
    <div className="bg-white rounded-2xl p-5 border border-[#EAECF0] shadow-2xs flex flex-col justify-between h-full relative">
      
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-2">
        <h3 className="text-sm font-bold text-[#0F172A]">
          Quote Pipeline
        </h3>

        {/* Dropdown */}
        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(prev => !prev)}
            className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
          >
            <span>{selectedPeriod}</span>
            <ChevronDown className="w-3.5 h-3.5 text-slate-500" />
          </button>

          {isDropdownOpen && (
            <div className="absolute right-0 mt-1 w-32 bg-white rounded-xl shadow-lg border border-slate-100 p-1 z-20 animate-fadeIn">
              {(['This Month', 'Last Month'] as const).map((period) => (
                <button
                  key={period}
                  onClick={() => {
                    setSelectedPeriod(period);
                    setIsDropdownOpen(false);
                  }}
                  className="w-full text-left px-2.5 py-1.5 rounded-lg text-xs font-medium text-slate-700 hover:bg-slate-50 cursor-pointer"
                >
                  {period}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Pipeline Stage List with Progress Bars */}
      <div className="space-y-3.5 flex-1">
        {quotePipelineStages.map((stage) => (
          <div 
            key={stage.id} 
            onClick={() => openDrawer('pipeline')}
            className="flex items-center justify-between gap-3 text-xs group cursor-pointer hover:bg-slate-50/70 p-1 rounded-lg transition-colors"
          >
            {/* Stage Name & Icon */}
            <div className="flex items-center gap-2.5 w-28 shrink-0">
              <div className="w-5 h-5 rounded-md bg-slate-50 flex items-center justify-center shrink-0 border border-slate-100">
                {getStageIcon(stage.id)}
              </div>
              <span className="font-semibold text-[#334155] truncate group-hover:text-[#0F172A]">
                {stage.label}
              </span>
            </div>

            {/* Horizontal Progress Bar */}
            <div className="flex-1 h-2 rounded-full bg-slate-100 overflow-hidden mx-1">
              <div 
                className="h-full rounded-full transition-all duration-500"
                style={{ 
                  width: `${stage.percentage}%`,
                  backgroundColor: stage.color 
                }}
              />
            </div>

            {/* Count Badge */}
            <div className="w-6 text-right font-black text-xs text-[#0F172A] shrink-0">
              {stage.count}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
