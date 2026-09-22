import { productsData } from './products';

export interface AdminSellRequest {
  id: string;
  companyName: string;
  avatarInitials: string;
  avatarColor: string;
  equipment: string;
  status: 'Under Review' | 'Quote Sent' | 'Accepted' | 'Pickup Scheduled' | 'Refurbishing' | 'Completed';
  statusType: 'amber' | 'blue' | 'green' | 'purple' | 'indigo' | 'emerald';
  timeAgo: string;
  offeredPrice?: number;
  pickupDate?: string;
  assignedTo?: string;
  contactEmail?: string;
  contactPhone?: string;
  quantity?: number;
}

export interface AdminActivityItem {
  id: string;
  iconType: 'request' | 'valuation' | 'pickup' | 'product' | 'order' | 'customer';
  iconColor: string;
  text: string;
  timeAgo: string;
  timestamp: string;
}

export interface AdminTaskItem {
  id: string;
  title: string;
  subtitle: string;
  type: 'quotes' | 'pickups' | 'orders' | 'meetings';
  color: string;
  time?: string;
}

export interface LowStockItem {
  id: string;
  name: string;
  category: string;
  stock: number;
  status: 'Low' | 'Critical';
  image: string;
}

export const initialSellRequests: AdminSellRequest[] = [
  {
    id: 'req-001',
    companyName: 'Tech Solutions Ltd.',
    avatarInitials: 'DA',
    avatarColor: 'bg-[#E0F2FE] text-[#0369A1]',
    equipment: 'Dell Latitude 7440',
    status: 'Under Review',
    statusType: 'amber',
    timeAgo: '2 min ago',
    offeredPrice: 4200,
    pickupDate: '2026-09-02',
    assignedTo: 'Carlos Mendes',
    contactEmail: 'it-procurement@techsolutions.pt',
    contactPhone: '+351 914 882 101',
    quantity: 12
  },
  {
    id: 'req-002',
    companyName: 'Global Systems',
    avatarInitials: 'DA',
    avatarColor: 'bg-[#EFF6FF] text-[#1D4ED8]',
    equipment: 'HP EliteBook 840 G7',
    status: 'Quote Sent',
    statusType: 'blue',
    timeAgo: '10 min ago',
    offeredPrice: 8500,
    pickupDate: '2026-09-04',
    assignedTo: 'Mariana Silva',
    contactEmail: 'contact@globalsystems.com',
    contactPhone: '+351 922 411 900',
    quantity: 25
  },
  {
    id: 'req-003',
    companyName: 'NetSecure Inc.',
    avatarInitials: 'BN',
    avatarColor: 'bg-[#ECFDF5] text-[#047857]',
    equipment: 'Cisco SG350X Switch',
    status: 'Accepted',
    statusType: 'green',
    timeAgo: '25 min ago',
    offeredPrice: 3100,
    pickupDate: '2026-08-31',
    assignedTo: 'Rui Santos',
    contactEmail: 'noc@netsecure.io',
    contactPhone: '+351 961 300 220',
    quantity: 8
  },
  {
    id: 'req-004',
    companyName: 'Alpha Networks',
    avatarInitials: 'AN',
    avatarColor: 'bg-[#F3E8FF] text-[#7E22CE]',
    equipment: 'Dell PowerEdge R740',
    status: 'Pickup Scheduled',
    statusType: 'purple',
    timeAgo: '1 hour ago',
    offeredPrice: 14500,
    pickupDate: '2026-08-30',
    assignedTo: 'Carlos Mendes',
    contactEmail: 'infrastructure@alphanets.pt',
    contactPhone: '+351 933 119 504',
    quantity: 6
  },
  {
    id: 'req-005',
    companyName: 'Bright Technologies',
    avatarInitials: 'AN',
    avatarColor: 'bg-[#EDE9FE] text-[#6D28D9]',
    equipment: 'MacBook Pro 2020',
    status: 'Refurbishing',
    statusType: 'indigo',
    timeAgo: '2 hours ago',
    offeredPrice: 6200,
    pickupDate: '2026-08-28',
    assignedTo: 'Mariana Silva',
    contactEmail: 'hardware@brighttech.co',
    contactPhone: '+351 919 770 331',
    quantity: 10
  }
];

export const initialActivities: AdminActivityItem[] = [
  {
    id: 'act-1',
    iconType: 'request',
    iconColor: 'bg-[#ECFDF5] text-[#0D7E73]',
    text: 'New sell request from Tech Solutions Ltd.',
    timeAgo: '2 min ago',
    timestamp: '10:30 AM'
  },
  {
    id: 'act-2',
    iconType: 'valuation',
    iconColor: 'bg-[#FFF7ED] text-[#EA580C]',
    text: 'Valuation created for Dell Latitude 7440',
    timeAgo: '10 min ago',
    timestamp: '10:22 AM'
  },
  {
    id: 'act-3',
    iconType: 'pickup',
    iconColor: 'bg-[#F0FDF4] text-[#16A34A]',
    text: 'Pickup scheduled for Global Systems',
    timeAgo: '25 min ago',
    timestamp: '10:07 AM'
  },
  {
    id: 'act-4',
    iconType: 'product',
    iconColor: 'bg-[#F0FDFA] text-[#0D7E73]',
    text: 'New product Dell Latitude 5420 added',
    timeAgo: '1 hour ago',
    timestamp: '09:30 AM'
  },
  {
    id: 'act-5',
    iconType: 'order',
    iconColor: 'bg-[#F1F5F9] text-[#334155]',
    text: 'Order #INV-2024-125 completed',
    timeAgo: '2 hours ago',
    timestamp: '08:30 AM'
  },
  {
    id: 'act-6',
    iconType: 'customer',
    iconColor: 'bg-[#EFF6FF] text-[#2563EB]',
    text: 'New customer ABC Corp registered',
    timeAgo: '3 hours ago',
    timestamp: '07:30 AM'
  }
];

export const initialTasks: AdminTaskItem[] = [
  {
    id: 'task-1',
    title: '3 New Quotes',
    subtitle: 'To Review',
    type: 'quotes',
    color: 'bg-[#ECFDF5] text-[#0D7E73]'
  },
  {
    id: 'task-2',
    title: '2 Pickups',
    subtitle: 'Scheduled Today',
    type: 'pickups',
    color: 'bg-[#EFF6FF] text-[#2563EB]'
  },
  {
    id: 'task-3',
    title: '5 Orders',
    subtitle: 'To Process',
    type: 'orders',
    color: 'bg-[#F0FDFA] text-[#0D7E73]'
  },
  {
    id: 'task-4',
    title: '1 Meeting',
    subtitle: 'At 3:00 PM',
    type: 'meetings',
    color: 'bg-[#FFF7ED] text-[#EA580C]',
    time: '15:00'
  }
];

export const lowStockAlerts: LowStockItem[] = [
  {
    id: 'ls-1',
    name: 'Cisco SG350X Switch',
    category: 'Networking',
    stock: 2,
    status: 'Low',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 'ls-2',
    name: 'Dell PowerEdge R740',
    category: 'Servers',
    stock: 3,
    status: 'Low',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 'ls-3',
    name: 'HP ProBook 450 G7',
    category: 'Laptops',
    stock: 4,
    status: 'Low',
    image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 'ls-4',
    name: 'Synology DS920+ NAS',
    category: 'Storage',
    stock: 2,
    status: 'Low',
    image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 'ls-5',
    name: 'Fortinet FortiGate 60E',
    category: 'Security',
    stock: 1,
    status: 'Low',
    image: 'https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=300&q=80'
  }
];

export const revenueChartPoints = [
  { date: '1 May', label: '1 May', revenue: 27000, formatted: '€27,000' },
  { date: '8 May', label: '8 May', revenue: 45000, formatted: '€45,000' },
  { date: '15 May', label: '15 May', revenue: 21000, formatted: '€21,000' },
  { date: '22 May', label: '22 May', revenue: 42000, formatted: '€42,000' },
  { date: '29 May', label: '29 May', revenue: 54000, formatted: '€54,000' },
  { date: 'Today', label: 'Today', revenue: 48690, formatted: '€48,690' }
];

export const quotePipelineStages = [
  { id: 'new', label: 'New', count: 23, total: 30, color: '#0D7E73', percentage: 76 },
  { id: 'review', label: 'Under Review', count: 15, total: 30, color: '#F97316', percentage: 50 },
  { id: 'offer', label: 'Offer Sent', count: 12, total: 30, color: '#3B82F6', percentage: 40 },
  { id: 'negotiation', label: 'Negotiation', count: 8, total: 30, color: '#10B981', percentage: 26 },
  { id: 'accepted', label: 'Accepted', count: 6, total: 30, color: '#059669', percentage: 20 },
  { id: 'completed', label: 'Completed', count: 10, total: 30, color: '#042F2C', percentage: 33 }
];
