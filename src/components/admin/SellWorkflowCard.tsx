import React from 'react';
import { 
  FileText, 
  Search, 
  CheckCircle2, 
  Truck, 
  Cpu, 
  ShoppingBag, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { useAdmin } from '../../context/AdminAuthContext';

interface WorkflowStep {
  id: string;
  count: number;
  label: string;
  icon: React.ReactNode;
  circleBg: string;
  circleBorder: string;
  iconColor: string;
  numberColor: string;
}

export const SellWorkflowCard: React.FC = () => {
  const { openDrawer } = useAdmin();

  const steps: WorkflowStep[] = [
    {
      id: 'step-requests',
      count: 42,
      label: 'Sell Requests',
      icon: <FileText className="w-5 h-5" />,
      circleBg: 'bg-[#F0FDFA]',
      circleBorder: 'border-[#99F6E4]',
      iconColor: 'text-[#0D7E73]',
      numberColor: 'text-[#0F172A]'
    },
    {
      id: 'step-valuation',
      count: 18,
      label: 'Valuation',
      icon: <Search className="w-5 h-5" />,
      circleBg: 'bg-[#FFF7ED]',
      circleBorder: 'border-[#FED7AA]',
      iconColor: 'text-[#EA580C]',
      numberColor: 'text-[#0F172A]'
    },
    {
      id: 'step-accepted',
      count: 12,
      label: 'Accepted',
      icon: <CheckCircle2 className="w-5 h-5" />,
      circleBg: 'bg-[#ECFDF5]',
      circleBorder: 'border-[#A7F3D0]',
      iconColor: 'text-[#10B981]',
      numberColor: 'text-[#0F172A]'
    },
    {
      id: 'step-pickup',
      count: 10,
      label: 'Pickup Scheduled',
      icon: <Truck className="w-5 h-5" />,
      circleBg: 'bg-[#EFF6FF]',
      circleBorder: 'border-[#BFDBFE]',
      iconColor: 'text-[#2563EB]',
      numberColor: 'text-[#0F172A]'
    },
    {
      id: 'step-refurbishing',
      count: 8,
      label: 'Refurbishing',
      icon: <Cpu className="w-5 h-5" />,
      circleBg: 'bg-[#FAF5FF]',
      circleBorder: 'border-[#E9D5FF]',
      iconColor: 'text-[#9333EA]',
      numberColor: 'text-[#0F172A]'
    },
    {
      id: 'step-ready',
      count: 6,
      label: 'Ready For Sale',
      icon: <ShoppingBag className="w-5 h-5" />,
      circleBg: 'bg-[#F0FDF4]',
      circleBorder: 'border-[#BBF7D0]',
      iconColor: 'text-[#16A34A]',
      numberColor: 'text-[#0F172A]'
    }
  ];

  return (
    <section className="bg-white rounded-2xl p-4 sm:p-6 border border-[#EAECF0] shadow-2xs">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <div>
          <h2 className="text-base sm:text-lg font-bold text-[#0F172A] tracking-tight">
            Sell To Us Workflow
          </h2>
          <p className="text-xs text-[#64748B] mt-0.5">
            Track and manage the complete process from request to ready for sale.
          </p>
        </div>
        <span className="hidden sm:inline-block text-[11px] font-bold text-[#0D7E73] bg-[#F0FDFA] px-2.5 py-1 rounded-full border border-[#CCFBF1]">
          6 Active Stages
        </span>
      </div>

      {/* MOBILE VIEW (< 768px): Horizontal Swipeable Cards (~2 per view) */}
      <div className="block md:hidden">
        <div className="flex gap-2.5 overflow-x-auto pb-2 snap-x snap-mandatory custom-scrollbar -mx-1 px-1">
          {steps.map((step, idx) => (
            <div
              key={step.id}
              onClick={() => openDrawer('requests')}
              className="min-w-[150px] flex-1 snap-start bg-slate-50/70 border border-slate-200/80 rounded-xl p-3 flex flex-col justify-between hover:bg-slate-100/70 transition-all cursor-pointer group shrink-0 active:scale-95"
            >
              <div className="flex items-center justify-between mb-2">
                <div className={`w-9 h-9 rounded-full ${step.circleBg} border ${step.circleBorder} flex items-center justify-center ${step.iconColor} shrink-0`}>
                  {step.icon}
                </div>
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-white text-slate-500 border border-slate-200">
                  #{idx + 1}
                </span>
              </div>

              <div>
                <div className={`text-xl font-black ${step.numberColor} leading-none mb-1`}>
                  {step.count}
                </div>
                <div className="text-xs font-semibold text-[#475569] leading-tight line-clamp-1 group-hover:text-[#0D7E73]">
                  {step.label}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center gap-1.5 pt-2">
          <span className="text-[10px] text-slate-400 font-medium flex items-center gap-1">
            Swipe to see all 6 stages →
          </span>
        </div>
      </div>

      {/* DESKTOP & TABLET VIEW (>= 768px): Horizontal Workflow Progression */}
      <div className="hidden md:block overflow-x-auto pb-2 custom-scrollbar">
        <div className="min-w-[700px] flex items-center justify-between gap-2">
          {steps.map((step, idx) => (
            <React.Fragment key={step.id}>
              
              {/* Single Stage Node */}
              <div 
                onClick={() => openDrawer('requests')}
                className="flex items-center gap-3.5 p-2 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer group shrink-0"
              >
                {/* Colored Circular Icon */}
                <div className={`w-11 h-11 rounded-full ${step.circleBg} border ${step.circleBorder} flex items-center justify-center ${step.iconColor} group-hover:scale-105 transition-transform shrink-0 shadow-2xs`}>
                  {step.icon}
                </div>

                {/* Stage Count & Label */}
                <div className="flex flex-col">
                  <span className={`text-lg font-black ${step.numberColor} leading-none`}>
                    {step.count}
                  </span>
                  <span className="text-xs font-semibold text-[#475569] mt-1 whitespace-nowrap group-hover:text-[#0D7E73] transition-colors">
                    {step.label}
                  </span>
                </div>
              </div>

              {/* Dotted Arrow Connector between nodes */}
              {idx < steps.length - 1 && (
                <div className="flex-1 flex items-center justify-center px-1 text-slate-300">
                  <div className="w-full border-t border-dashed border-slate-300 relative flex items-center justify-end">
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 absolute -right-1 -top-[7px]" />
                  </div>
                </div>
              )}

            </React.Fragment>
          ))}
        </div>
      </div>

    </section>
  );
};
