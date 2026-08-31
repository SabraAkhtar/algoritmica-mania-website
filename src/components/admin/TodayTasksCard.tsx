import React from 'react';
import { 
  FileCheck2, 
  Calendar, 
  PackageCheck, 
  Clock 
} from 'lucide-react';
import { useAdmin } from '../../context/AdminAuthContext';
import { AdminTaskItem } from '../../data/adminData';

export const TodayTasksCard: React.FC = () => {
  const { tasks, openDrawer } = useAdmin();

  const getTaskIcon = (type: AdminTaskItem['type']) => {
    switch (type) {
      case 'quotes':
        return <FileCheck2 className="w-4 h-4 text-[#0D7E73]" />;
      case 'pickups':
        return <Calendar className="w-4 h-4 text-[#2563EB]" />;
      case 'orders':
        return <PackageCheck className="w-4 h-4 text-[#0D7E73]" />;
      case 'meetings':
        return <Clock className="w-4 h-4 text-[#EA580C]" />;
      default:
        return <FileCheck2 className="w-4 h-4 text-[#0D7E73]" />;
    }
  };

  return (
    <div className="bg-white rounded-2xl p-5 border border-[#EAECF0] shadow-2xs flex flex-col justify-between h-full">
      
      {/* Header */}
      <div className="pb-3 border-b border-slate-100 mb-2">
        <h3 className="text-sm font-bold text-[#0F172A]">
          Today's Tasks
        </h3>
      </div>

      {/* Task Items List */}
      <div className="space-y-3 flex-1 mb-3">
        {tasks.map((task) => (
          <div 
            key={task.id}
            onClick={() => openDrawer('tasks')}
            className="flex items-center gap-3 p-2 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer group"
          >
            {/* Task Icon in Round Badge */}
            <div className={`w-8 h-8 rounded-xl ${task.color} flex items-center justify-center shrink-0 shadow-2xs`}>
              {getTaskIcon(task.type)}
            </div>

            {/* Task Title & Subtitle */}
            <div className="flex flex-col min-w-0">
              <span className="text-xs font-bold text-[#0F172A] leading-tight group-hover:text-[#0D7E73] transition-colors">
                {task.title}
              </span>
              <span className="text-[11px] text-[#64748B] leading-tight mt-0.5">
                {task.subtitle}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Button: View All */}
      <button
        onClick={() => openDrawer('tasks')}
        className="w-full py-2 rounded-xl bg-white border border-[#E2E8F0] text-xs font-bold text-[#334155] hover:bg-[#F8FAFC] hover:text-[#0D7E73] hover:border-[#CBD5E1] transition-all shadow-2xs cursor-pointer text-center"
      >
        View All
      </button>

    </div>
  );
};
