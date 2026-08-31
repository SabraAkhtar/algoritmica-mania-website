import React, { useState } from 'react';
import { 
  Euro, 
  Target, 
  Truck, 
  Star, 
  ArrowUpRight, 
  ChevronDown 
} from 'lucide-react';

export const PerformanceOverviewCard: React.FC = () => {
  const [period, setPeriod] = useState<'This Month' | 'Last Month'>('This Month');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="bg-white rounded-2xl p-5 border border-[#EAECF0] shadow-2xs flex flex-col justify-between h-full relative">
      
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
        <h3 className="text-sm font-bold text-[#0F172A]">
          Performance Overview
        </h3>

        {/* Dropdown */}
        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(prev => !prev)}
            className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
          >
            <span>{period}</span>
            <ChevronDown className="w-3.5 h-3.5 text-slate-500" />
          </button>

          {isDropdownOpen && (
            <div className="absolute right-0 mt-1 w-32 bg-white rounded-xl shadow-lg border border-slate-100 p-1 z-20 animate-fadeIn">
              {(['This Month', 'Last Month'] as const).map((p) => (
                <button
                  key={p}
                  onClick={() => {
                    setPeriod(p);
                    setIsDropdownOpen(false);
                  }}
                  className="w-full text-left px-2.5 py-1.5 rounded-lg text-xs font-medium text-slate-700 hover:bg-slate-50 cursor-pointer"
                >
                  {p}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* 4 Metric Columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-center flex-1">
        
        {/* Metric 1: Revenue Target */}
        <div className="p-2.5 rounded-xl hover:bg-slate-50 transition-colors">
          <div className="flex items-center gap-2 mb-1.5">
            <div className="w-6 h-6 rounded-lg bg-[#ECFDF5] text-[#0D7E73] flex items-center justify-center">
              <Euro className="w-3.5 h-3.5" />
            </div>
            <span className="text-xs font-semibold text-[#64748B]">Revenue Target</span>
          </div>
          <div className="flex items-baseline justify-between gap-1 mb-1.5">
            <span className="text-xs font-bold text-[#0F172A]">€48,690 / €60,000</span>
            <span className="text-xs font-black text-[#0D7E73]">81%</span>
          </div>
          <div className="w-full h-1.5 rounded-full bg-slate-100 overflow-hidden">
            <div className="h-full rounded-full bg-[#10B981]" style={{ width: '81%' }} />
          </div>
        </div>

        {/* Metric 2: Quote Conversion Rate */}
        <div className="p-2.5 rounded-xl hover:bg-slate-50 transition-colors">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-6 h-6 rounded-lg bg-[#F0FDFA] text-[#0D7E73] flex items-center justify-center">
              <Target className="w-3.5 h-3.5" />
            </div>
            <span className="text-xs font-semibold text-[#64748B]">Quote Conversion Rate</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-lg font-black text-[#0F172A]">68%</span>
            <div className="flex items-center text-xs font-bold text-[#10B981]">
              <ArrowUpRight className="w-3 h-3 stroke-[2.5]" />
              <span>8%</span>
            </div>
          </div>
        </div>

        {/* Metric 3: Pickup Success Rate */}
        <div className="p-2.5 rounded-xl hover:bg-slate-50 transition-colors">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-6 h-6 rounded-lg bg-[#ECFDF5] text-[#10B981] flex items-center justify-center">
              <Truck className="w-3.5 h-3.5" />
            </div>
            <span className="text-xs font-semibold text-[#64748B]">Pickup Success Rate</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-lg font-black text-[#0F172A]">96%</span>
            <div className="flex items-center text-xs font-bold text-[#10B981]">
              <ArrowUpRight className="w-3 h-3 stroke-[2.5]" />
              <span>4%</span>
            </div>
          </div>
        </div>

        {/* Metric 4: Customer Satisfaction */}
        <div className="p-2.5 rounded-xl hover:bg-slate-50 transition-colors">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-6 h-6 rounded-lg bg-[#FFFBEB] text-[#D97706] flex items-center justify-center">
              <Star className="w-3.5 h-3.5 fill-current" />
            </div>
            <span className="text-xs font-semibold text-[#64748B]">Customer Satisfaction</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-lg font-black text-[#0F172A]">4.9 / 5</span>
            <div className="flex items-center text-xs font-bold text-[#10B981]">
              <ArrowUpRight className="w-3 h-3 stroke-[2.5]" />
              <span>2%</span>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};
