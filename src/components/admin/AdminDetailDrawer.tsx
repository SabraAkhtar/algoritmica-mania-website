import React, { useState } from 'react';
import { 
  X, 
  Search, 
  Filter, 
  FileText, 
  CheckCircle, 
  Trash2, 
  ExternalLink,
  Plus,
  RefreshCw,
  Clock,
  Phone,
  Mail,
  Calendar,
  Package
} from 'lucide-react';
import { useAdmin } from '../../context/AdminAuthContext';
import { lowStockAlerts } from '../../data/adminData';
import { productsData } from '../../data/products';

export const AdminDetailDrawer: React.FC = () => {
  const { activeDrawer, closeDrawer, sellRequests, updateSellRequestStatus, activities, tasks } = useAdmin();
  const [requestFilter, setRequestFilter] = useState<string>('all');
  const [selectedRequestId, setSelectedRequestId] = useState<string | null>(null);

  if (!activeDrawer) return null;

  const selectedRequest = sellRequests.find(r => r.id === selectedRequestId) || sellRequests[0];

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-900/40 backdrop-blur-xs flex justify-end animate-fadeIn">
      <div 
        className="w-full max-w-3xl bg-white h-full shadow-2xl flex flex-col border-l border-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between bg-white shrink-0">
          <div>
            <h2 className="text-base font-bold text-slate-900">
              {activeDrawer === 'requests' && 'All Sell To Us ITAD Requests'}
              {activeDrawer === 'activity' && 'Real-Time System Activity Log'}
              {activeDrawer === 'tasks' && 'Daily Administrative Tasks'}
              {activeDrawer === 'stock' && 'Inventory Status & Stock Alerts'}
              {activeDrawer === 'pipeline' && 'RFQ Quote Pipeline Breakdown'}
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Live enterprise management view for Algorítmica Mania administrators.
            </p>
          </div>
          <button
            onClick={closeDrawer}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Content Body */}
        <div className="flex-1 overflow-y-auto p-6 custom-scrollbar bg-slate-50/50">
          
          {/* VIEW: SELL REQUESTS */}
          {activeDrawer === 'requests' && (
            <div className="space-y-4">
              {/* Filter tabs */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
                {['all', 'Under Review', 'Quote Sent', 'Accepted', 'Pickup Scheduled', 'Refurbishing', 'Completed'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setRequestFilter(tab)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                      requestFilter === tab
                        ? 'bg-[#042F2C] text-white'
                        : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    {tab === 'all' ? 'All Requests' : tab}
                  </button>
                ))}
              </div>

              {/* Requests Table */}
              <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-2xs">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                      <th className="py-3 px-4">Client / Company</th>
                      <th className="py-3 px-4">Equipment</th>
                      <th className="py-3 px-4">Estimated Value</th>
                      <th className="py-3 px-4">Status</th>
                      <th className="py-3 px-4 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-xs">
                    {sellRequests
                      .filter(r => requestFilter === 'all' || r.status === requestFilter)
                      .map((req) => (
                        <tr key={req.id} className="hover:bg-slate-50/80 transition-colors">
                          <td className="py-3 px-4 font-bold text-slate-900">
                            <div>{req.companyName}</div>
                            <span className="text-[10px] text-slate-400 font-normal">{req.timeAgo}</span>
                          </td>
                          <td className="py-3 px-4 text-slate-600">
                            {req.equipment}
                            <span className="block text-[10px] text-slate-400">Qty: {req.quantity || 10} units</span>
                          </td>
                          <td className="py-3 px-4 font-bold text-slate-900">
                            €{req.offeredPrice?.toLocaleString()}
                          </td>
                          <td className="py-3 px-4">
                            <select
                              value={req.status}
                              onChange={(e) => updateSellRequestStatus(req.id, e.target.value as any)}
                              className="px-2 py-1 rounded-md text-[11px] font-bold bg-slate-50 border border-slate-200 text-slate-800 cursor-pointer"
                            >
                              <option value="Under Review">Under Review</option>
                              <option value="Quote Sent">Quote Sent</option>
                              <option value="Accepted">Accepted</option>
                              <option value="Pickup Scheduled">Pickup Scheduled</option>
                              <option value="Refurbishing">Refurbishing</option>
                              <option value="Completed">Completed</option>
                            </select>
                          </td>
                          <td className="py-3 px-4 text-right">
                            <span className="text-[11px] text-[#0D7E73] font-semibold">
                              {req.assignedTo}
                            </span>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* VIEW: RECENT ACTIVITY */}
          {activeDrawer === 'activity' && (
            <div className="bg-white rounded-2xl border border-slate-200 p-4 divide-y divide-slate-100 space-y-3">
              {activities.map((act) => (
                <div key={act.id} className="pt-3 first:pt-0 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full ${act.iconColor} flex items-center justify-center font-bold`}>
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">{act.text}</p>
                      <span className="text-[10px] text-slate-400">{act.timestamp}</span>
                    </div>
                  </div>
                  <span className="text-[11px] font-medium text-slate-500">{act.timeAgo}</span>
                </div>
              ))}
            </div>
          )}

          {/* VIEW: TASKS */}
          {activeDrawer === 'tasks' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {tasks.map((task) => (
                <div key={task.id} className="bg-white rounded-2xl border border-slate-200 p-4 shadow-2xs">
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`w-9 h-9 rounded-xl ${task.color} flex items-center justify-center font-bold`}>
                      <CheckCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">{task.title}</h4>
                      <p className="text-[11px] text-slate-500">{task.subtitle}</p>
                    </div>
                  </div>
                  <button className="w-full mt-2 py-1.5 rounded-lg bg-[#042F2C] text-white text-xs font-bold hover:bg-[#064E3B] transition-colors cursor-pointer">
                    Complete Task
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* VIEW: STOCK */}
          {activeDrawer === 'stock' && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {lowStockAlerts.map((item) => (
                  <div key={item.id} className="bg-white rounded-2xl border border-slate-200 p-4 flex items-center gap-3 shadow-2xs">
                    <img src={item.image} alt={item.name} className="w-12 h-12 rounded-xl object-cover" />
                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs font-bold text-slate-900 truncate">{item.name}</h4>
                      <p className="text-[11px] text-slate-500">{item.category} • Current stock: {item.stock}</p>
                      <span className="inline-block mt-1 px-2 py-0.5 rounded-md bg-red-50 text-red-700 text-[10px] font-bold">
                        Requires Replenishment
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Drawer Footer */}
        <div className="p-4 border-t border-slate-200 bg-white flex justify-end gap-2 shrink-0">
          <button
            onClick={closeDrawer}
            className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs font-bold text-slate-700 transition-colors cursor-pointer"
          >
            Close Drawer
          </button>
        </div>
      </div>
    </div>
  );
};
