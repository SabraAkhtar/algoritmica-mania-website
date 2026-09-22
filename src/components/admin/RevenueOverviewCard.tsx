import React, { useState } from 'react';
import { ChevronDown, ArrowUpRight } from 'lucide-react';
import { useAdmin } from '../../context/AdminAuthContext';

interface RevenueDataPoint {
  date: string;
  amount: number;
  label: string;
  x: number;
  y: number;
}

export const RevenueOverviewCard: React.FC = () => {
  const { selectedPeriod, setSelectedPeriod } = useAdmin();
  const [isPeriodMenuOpen, setIsPeriodMenuOpen] = useState(false);
  const [hoveredPoint, setHoveredPoint] = useState<RevenueDataPoint | null>(null);

  // SVG viewBox coordinate mapping: Width 500, Height 160
  // Values: Max €60,000 (y=20), Min €0 (y=140)
  // Formula: y = 140 - (amount / 60000) * 120
  const points: RevenueDataPoint[] = [
    { date: '1 May', amount: 27000, label: '1 May', x: 50, y: 140 - (27000 / 60000) * 120 },   // y = 86
    { date: '8 May', amount: 45000, label: '8 May', x: 140, y: 140 - (45000 / 60000) * 120 },  // y = 50
    { date: '15 May', amount: 21000, label: '15 May', x: 230, y: 140 - (21000 / 60000) * 120 },// y = 98
    { date: '22 May', amount: 42000, label: '22 May', x: 320, y: 140 - (42000 / 60000) * 120 },// y = 56
    { date: '29 May', amount: 54000, label: '29 May', x: 410, y: 140 - (54000 / 60000) * 120 },// y = 32
    { date: 'Today', amount: 48690, label: 'Today', x: 470, y: 140 - (48690 / 60000) * 120 }   // y = 42.6
  ];

  // Generate SVG curve path
  const pathD = `M ${points[0].x},${points[0].y} ` +
    `C ${points[0].x + 40},${points[0].y - 20} ${points[1].x - 40},${points[1].y} ${points[1].x},${points[1].y} ` +
    `C ${points[1].x + 40},${points[1].y} ${points[2].x - 40},${points[2].y + 10} ${points[2].x},${points[2].y} ` +
    `C ${points[2].x + 40},${points[2].y - 20} ${points[3].x - 40},${points[3].y} ${points[3].x},${points[3].y} ` +
    `C ${points[3].x + 40},${points[3].y} ${points[4].x - 40},${points[4].y} ${points[4].x},${points[4].y} ` +
    `C ${points[4].x + 30},${points[4].y} ${points[5].x - 20},${points[5].y} ${points[5].x},${points[5].y}`;

  const areaD = `${pathD} L ${points[points.length - 1].x},140 L ${points[0].x},140 Z`;

  const yLabels = [
    { label: '€60K', y: 20 },
    { label: '€45K', y: 50 },
    { label: '€30K', y: 80 },
    { label: '€15K', y: 110 },
    { label: '€0', y: 140 }
  ];

  return (
    <div className="bg-white rounded-2xl p-5 border border-[#EAECF0] shadow-2xs flex flex-col justify-between h-full relative">
      
      {/* Header with Title & Period Selector */}
      <div className="flex items-center justify-between pb-2 border-b border-slate-100 mb-2">
        <h3 className="text-sm font-bold text-[#0F172A]">
          Revenue Overview
        </h3>

        {/* Period Selector Dropdown */}
        <div className="relative">
          <button
            onClick={() => setIsPeriodMenuOpen(prev => !prev)}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
          >
            <span>{selectedPeriod}</span>
            <ChevronDown className={`w-3.5 h-3.5 text-slate-500 transition-transform ${isPeriodMenuOpen ? 'rotate-180' : ''}`} />
          </button>

          {isPeriodMenuOpen && (
            <div className="absolute right-0 mt-1 w-36 bg-white rounded-xl shadow-lg border border-slate-100 p-1 z-30 space-y-0.5 animate-fadeIn">
              {(['This Month', 'Last Month', 'Last 90 Days', 'This Year'] as const).map((period) => (
                <button
                  key={period}
                  onClick={() => {
                    setSelectedPeriod(period);
                    setIsPeriodMenuOpen(false);
                  }}
                  className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                    selectedPeriod === period ? 'bg-[#F0FDFA] text-[#0D7E73] font-bold' : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {period}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Main Revenue Metric */}
      <div className="mb-2">
        <div className="text-2xl font-black text-[#0F172A] tracking-tight">
          €48,690
        </div>
        <div className="flex items-center gap-1.5 text-xs font-semibold text-[#10B981] mt-0.5">
          <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
          <span>22.5%</span>
          <span className="text-[#64748B] font-normal">vs last month (€39,800)</span>
        </div>
      </div>

      {/* Area & Line Chart SVG */}
      <div className="relative w-full h-44 sm:h-48 mt-2 select-none">
        <svg viewBox="0 0 500 160" className="w-full h-full overflow-visible">
          <defs>
            {/* Green Gradient Fill */}
            <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#10B981" stopOpacity="0.25" />
              <stop offset="90%" stopColor="#10B981" stopOpacity="0.0" />
            </linearGradient>
          </defs>

          {/* Horizontal Gridlines & Y-Axis Labels */}
          {yLabels.map((grid) => (
            <g key={grid.label}>
              <line
                x1="45"
                y1={grid.y}
                x2="480"
                y2={grid.y}
                stroke="#F1F5F9"
                strokeWidth="1"
                strokeDasharray="2 2"
              />
              <text
                x="40"
                y={grid.y + 3.5}
                textAnchor="end"
                className="text-[10px] font-mono fill-[#94A3B8]"
              >
                {grid.label}
              </text>
            </g>
          ))}

          {/* Area under curve */}
          <path
            d={areaD}
            fill="url(#revenueGradient)"
          />

          {/* Main Curve Line */}
          <path
            d={pathD}
            fill="none"
            stroke="#10B981"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Circular Data Points */}
          {points.slice(0, 5).map((pt) => (
            <g 
              key={pt.date}
              className="cursor-pointer group"
              onMouseEnter={() => setHoveredPoint(pt)}
              onMouseLeave={() => setHoveredPoint(null)}
            >
              <circle
                cx={pt.x}
                cy={pt.y}
                r="4.5"
                fill="#FFFFFF"
                stroke="#10B981"
                strokeWidth="2.5"
                className="transition-transform group-hover:scale-125"
              />
            </g>
          ))}

          {/* X-Axis Date Labels */}
          {points.slice(0, 5).map((pt) => (
            <text
              key={pt.date}
              x={pt.x}
              y="156"
              textAnchor="middle"
              className="text-[10px] font-medium fill-[#94A3B8]"
            >
              {pt.label}
            </text>
          ))}
        </svg>

        {/* Hover Tooltip */}
        {hoveredPoint && (
          <div 
            className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#042F2C] text-white text-[11px] font-bold px-2.5 py-1 rounded-lg shadow-lg pointer-events-none z-20 flex items-center gap-1.5"
          >
            <span>{hoveredPoint.label}:</span>
            <span className="text-[#5EEAD4]">€{hoveredPoint.amount.toLocaleString()}</span>
          </div>
        )}
      </div>

    </div>
  );
};
