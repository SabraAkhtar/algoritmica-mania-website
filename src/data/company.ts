import { TrustPillar } from '../types';

export const companyData = {
  name: "ALGoritmica MANIA",
  location: "Trofa, Portugal",
  fullAddress: "Zona Industrial da Trofa, 4785 Trofa, Porto Metropolitan Area, Portugal",
  phone: "+351 912 345 678", // Official technical line format
  whatsappNumber: "+351912345678",
  whatsappDisplay: "+351 912 345 678",
  email: "info@algoritmicamania.pt",
  technicalDeskEmail: "suporte@algoritmicamania.pt",
  hoursWeekday: "Monday – Friday: 09:00 – 18:30 (WET)",
  hoursWeekend: "Saturday – Sunday: Closed (Emergency SLA On-Call)",
  positioning: "Used & Refurbished IT Equipment | Networking | Cybersecurity | IT Support | Business IT Solutions",
  aboutSummary: "ALGoritmica MANIA is an enterprise technology provider based in Trofa, Portugal. We specialize in the acquisition, diagnostic testing, precision refurbishment, and deployment of business-grade IT equipment, high-performance networking infrastructure, and perimeter cybersecurity hardware.",
  hardwareLabDesc: "At our dedicated technical facility in Trofa, every piece of hardware is subject to component-level examination, ultrasonic cleaning, rigorous thermal burn-in benchmarks, and data sanitization aligned with NIST SP 800-88 Rev. 2 guidelines. We bridge the gap between capital efficiency and enterprise reliability."
};

export const trustPillars: TrustPillar[] = [
  {
    id: 'pillar-tested',
    title: 'Tested Equipment',
    description: 'Every computer, server, switch, and firewall undergoes component-level diagnostics and 72-hour stress testing before entering our inventory.',
    iconName: 'Cpu',
    highlights: [
      'Multi-pass MemTest86+ memory validation',
      'NVMe & SSD SMART health verification',
      'Thermal chamber load testing'
    ]
  },
  {
    id: 'pillar-pricing',
    title: 'Competitive Prices',
    description: 'Acquire premium enterprise-grade hardware at transparent B2B prices, direct from our Trofa technical facility.',
    iconName: 'Coins',
    highlights: [
      'Direct B2B value with transparent quotes',
      'Cost-effective fleet renewal options',
      'Volume discounts for business orders'
    ]
  },
  {
    id: 'pillar-expertise',
    title: 'IT & Networking Expertise',
    description: 'Our technical team possesses hands-on expertise in VLAN network segmentation, fiber uplinks, server virtualization, and storage pools.',
    iconName: 'Network',
    highlights: [
      'Layer 2 / Layer 3 enterprise switching',
      'Dual-WAN failover router setups',
      'Structured rack cabling & patch termination'
    ]
  },
  {
    id: 'pillar-security',
    title: 'Cybersecurity Focus',
    description: 'We embed enterprise perimeter security into every deployment, from hardware firewall appliances to encrypted site-to-site VPNs.',
    iconName: 'ShieldCheck',
    highlights: [
      'Hardware Next-Gen Firewalls (Fortinet, Sophos, pfSense)',
      'Zero-Trust Network Access & VPN tunneling',
      'Data sanitization aligned with NIST SP 800-88 Rev. 2'
    ]
  },
  {
    id: 'pillar-support',
    title: 'Technical Support',
    description: 'Direct communication with seasoned hardware engineers who diagnose and service equipment in our local Trofa laboratory.',
    iconName: 'Headphones',
    highlights: [
      'Local Portuguese technical engineering desk',
      'Rapid turnaround on diagnostics & upgrades',
      'Dedicated business SLA maintenance agreements'
    ]
  },
  {
    id: 'pillar-solutions',
    title: 'Business Solutions',
    description: 'End-to-end technology lifecycle management: procurement, configuration, deployment, maintenance, and safe decommissioning.',
    iconName: 'Briefcase',
    highlights: [
      'Turnkey office IT infrastructure rollouts',
      'Server & storage consolidation',
      'Old IT equipment trade-in & buyback'
    ]
  }
];

export const approachStages = [
  {
    number: '01',
    title: 'Understand',
    subtitle: 'Requirements Discovery',
    description: 'We evaluate your team’s computational workflows, network bandwidth demands, security compliance mandates, and budget parameters to establish accurate technical specifications.'
  },
  {
    number: '02',
    title: 'Recommend',
    subtitle: 'Architectural Proposal',
    description: 'We present tailored hardware configurations—balancing certified refurbished enterprise equipment, server density, and networking topology—maximizing value without performance compromises.'
  },
  {
    number: '03',
    title: 'Configure',
    subtitle: 'Lab Staging & Pre-Deployment',
    description: 'In our Trofa facility, we perform BIOS flashing, component upgrades, OS provisioning, VLAN configuration, and 48-hour burn-in stress testing before dispatch.'
  },
  {
    number: '04',
    title: 'Secure',
    subtitle: 'Perimeter & Data Hardening',
    description: 'We secure the environment with hardware firewalls, encrypted VPN access, automated immutable backups, and media sanitization aligned with NIST SP 800-88 Rev. 2.'
  },
  {
    number: '05',
    title: 'Support',
    subtitle: 'Lifecycle Maintenance',
    description: 'We back all deployed hardware with our 12-month warranty, scheduled health checks, rapid replacement spares, and direct engineering assistance.'
  }
];
