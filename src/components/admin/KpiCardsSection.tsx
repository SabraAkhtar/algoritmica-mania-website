import React from 'react';
import { 
  Inbox, 
  Scale, 
  Truck, 
  Package, 
  ShoppingBag, 
  Euro, 
  ArrowUpRight 
} from 'lucide-react';

interface KpiItem {
  id: string;
  label: string;
  value: string;
  change: string;
  icon: React.ReactNode;
  iconBg: string;
  iconColor: string;
  sparklinePath: string;
}

const sparklines = {
  up1: "M 0,24 Q 15,18 30,22 T 60,10 T 90,14 T 120,4",
  up2: "M 0,22 Q 20,25 40,16 T 80,12 T 120,5",
  up3: "M 0,20 Q 25,18 50,22 T 85,8 T 120,3",
  up4: "M 0,24 Q 30,12 60,18 T 95,8 T 120,2",
  up5: "M 0,22 Q 20,20 45,12 T 85,15 T 120,4",
  up6: "M 0,25 Q 25,15 50,18 T 90,6 T 120,2"
};

export const KpiCardsSection: React.FC = () => {
  const kpis: KpiItem[] = [
    {
      id: 'sell-requests',
      label: 'New Sell Requests',
      value: '42',
      change: '12.5% from last 7 days',
      icon: <Inbox className="w-5 h-5" />,
      iconBg: 'bg-[#ECFDF5]',
      iconColor: 'text-[#0D7E73]',
      sparklinePath: sparklines.up1
    },
    {
      id: 'pending-valuations',
      label: 'Pending Valuations',
      value: '18',
      change: '8.4% from last 7 days',
      icon: <Scale className="w-5 h-5" />,
      iconBg: 'bg-[#FFF7ED]',
      iconColor: 'text-[#EA580C]',
      sparklinePath: sparklines.up2
    },
    {
      id: 'todays-pickups',
      label: "Today's Pickups",
      value: '6',
      change: '20% from yesterday',
      icon: <Truck className="w-5 h-5" />,
      iconBg: 'bg-[#F0FDFA]',
      iconColor: 'text-[#0D7E73]',
      sparklinePath: sparklines.up3
    },
    {
      id: 'products-stock',
      label: 'Products In Stock',
      value: '1,248',
      change: '15.3% from last month',
      icon: <Package className="w-5 h-5" />,
      iconBg: 'bg-[#ECFDF5]',
      iconColor: 'text-[#0D7E73]',
      sparklinePath: sparklines.up4
    },
    {
      id: 'orders-today',
      label: 'Orders Today',
      value: '27',
      change: '10.2% from yesterday',
      icon: <ShoppingBag className="w-5 h-5" />,
      iconBg: 'bg-[#ECFDF5]',
      iconColor: 'text-[#0D7E73]',
      sparklinePath: sparklines.up5
    },
    {
      id: 'monthly-revenue',
      label: 'Monthly Revenue',
      value: '€48,690',
      change: '22.5% from last month',
      icon: <Euro className="w-5 h-5" />,
      iconBg: 'bg-[#ECFDF5]',
      iconColor: 'text-[#0D7E73]',
      sparklinePath: sparklines.up6
    }
  ];

  return (
    <section className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-2.5 sm:gap-3.5">
      {kpis.map((kpi) => (
        <div 
          key={kpi.id}
          className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-[#EAECF0] shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between"
        >
          {/* Top Row: Icon & Label */}
          <div>
            <div className="flex items-center gap-2 sm:gap-2.5 mb-1.5 sm:mb-2.5">
              <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl ${kpi.iconBg} ${kpi.iconColor} flex items-center justify-center shrink-0`}>
                {kpi.icon}
              </div>
              <span className="text-[11px] sm:text-xs font-semibold text-[#64748B] leading-tight line-clamp-1">
                {kpi.label}
              </span>
            </div>

            {/* Large Number Value */}
            <div className="text-lg sm:text-2xl font-black text-[#0F172A] tracking-tight mb-1 sm:mb-2">
              {kpi.value}
            </div>
          </div>

          {/* Bottom Row: Percentage & Mini Sparkline Graph */}
          <div className="flex items-end justify-between pt-1 border-t border-slate-50 gap-1">
            <div className="flex items-center gap-0.5 sm:gap-1 text-[10px] sm:text-[11px] font-semibold text-[#10B981] truncate">
              <ArrowUpRight className="w-3 h-3 stroke-[2.5] shrink-0" />
              <span className="truncate">{kpi.change}</span>
            </div>

            {/* Subtle Green Sparkline SVG */}
            <div className="w-10 sm:w-14 h-5 sm:h-6 shrink-0">
              <svg viewBox="0 0 120 28" className="w-full h-full overflow-visible">
                <path
                  d={kpi.sparklinePath}
                  fill="none"
                  stroke="#10B981"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};
