import { ServiceItem, RefurbishmentStep, ServiceCategoryKey } from '../types';

export interface ServiceCategoryMeta {
  id: ServiceCategoryKey;
  index: string;
  title: { en: string; pt: string };
  shortDescription: { en: string; pt: string };
  iconName: string;
  badge: { en: string; pt: string };
}

export const serviceCategoriesList: ServiceCategoryMeta[] = [
  {
    id: 'it-support',
    index: '01',
    title: {
      en: 'IT Support & Technical Services',
      pt: 'Suporte Informático & Assistência Técnica'
    },
    shortDescription: {
      en: 'Reliable technical support to keep your computers and everyday IT systems working smoothly.',
      pt: 'Assistência técnica fiável para manter os computadores e sistemas informáticos diários a funcionar sem falhas.'
    },
    iconName: 'Wrench',
    badge: { en: 'Desktops, Laptops & Helpdesk', pt: 'Desktops, Portáteis & Suporte' }
  },
  {
    id: 'networking-infrastructure',
    index: '02',
    title: {
      en: 'Network & Infrastructure Services',
      pt: 'Serviços de Rede & Infraestrutura'
    },
    shortDescription: {
      en: 'Professional network setup, configuration and support for offices and business environments.',
      pt: 'Instalação, configuração e suporte profissional de redes para escritórios e empresas.'
    },
    iconName: 'Network',
    badge: { en: 'Wi-Fi, Switching & Routing', pt: 'Wi-Fi, Switches & Routers' }
  },
  {
    id: 'cybersecurity',
    index: '03',
    title: {
      en: 'Cybersecurity Services',
      pt: 'Serviços de Cibersegurança'
    },
    shortDescription: {
      en: 'Security services designed to help protect your systems, network and business data.',
      pt: 'Serviços de segurança desenhados para proteger os seus sistemas, rede e dados empresariais.'
    },
    iconName: 'ShieldCheck',
    badge: { en: 'Threat Defense & Audits', pt: 'Proteção contra Ameaças & Auditorias' }
  },
  {
    id: 'servers-storage',
    index: '04',
    title: {
      en: 'Server & Storage Services',
      pt: 'Servidores, Armazenamento & Backup'
    },
    shortDescription: {
      en: 'Setup, configuration and maintenance services for business servers, storage and backup systems.',
      pt: 'Instalação, configuração e manutenção para servidores empresariais, storage e backups.'
    },
    iconName: 'Server',
    badge: { en: 'Rack, NAS & Virtualization', pt: 'Servidores Rack, NAS & Virtualização' }
  },
  {
    id: 'asset-recovery',
    index: '05',
    title: {
      en: 'IT Asset Recovery & Buyback',
      pt: 'Retoma de Equipamento & Eliminação de Dados'
    },
    shortDescription: {
      en: 'A simple and responsible way to recover value from your old or unused IT equipment.',
      pt: 'Uma forma simples e responsável de rentabilizar e valorizar o seu equipamento informático em desuso.'
    },
    iconName: 'RefreshCw',
    badge: { en: 'Fleet Buyback & NIST Wipe', pt: 'Retoma de Frotas & Limpeza NIST' }
  }
];

export const allServicesData: ServiceItem[] = [
  // ==========================================
  // 01. Flagship Mega Menu Services
  // ==========================================
  {
    id: 'srv-hardware-diagnostics-repair',
    slug: 'hardware-diagnostics-repair',
    title: 'Hardware Diagnostics & Repair',
    titlePt: 'Diagnóstico e Reparação de Hardware',
    category: 'it-support',
    categoryKey: 'it-support',
    categoryIndex: '01',
    categoryLabel: { en: 'IT Support & Technical', pt: 'Suporte Informático & Técnico' },
    shortDescription: 'Comprehensive hardware diagnostic bench tests and motherboard level repairs for desktops, laptops, and workstations.',
    shortDescriptionPt: 'Diagnóstico rigoroso em bancada técnica e reparação de componentes/motherboards para portáteis, desktops e workstations.',
    fullDescription: 'Our certified laboratory engineers perform deep electrical and thermal stress testing to identify hardware failures, corrupted memory, faulty power rails, and broken components with guaranteed genuine replacement parts.',
    iconName: 'Wrench',
    deliveryModes: ['Workshop Lab', 'On-Site'],
    turnaroundTime: { en: 'Same-day / 24h', pt: 'Mesmo dia / 24h' },
    deliverables: {
      en: ['Full component bench audit', 'Motherboard & GPU micro-soldering / repair', 'Thermal & power stress validation report'],
      pt: ['Auditoria completa de componentes em bancada', 'Reparação e micro-soldadura em motherboard/GPU', 'Relatório de validação de stress térmico e elétrico']
    },
    capabilities: [
      'Memory (RAM) error testing and bit-flip parity checking',
      'NVMe/SSD sector verification and SMART health monitoring',
      'Power delivery circuit, DC jack, and capacitor inspection',
      'Display panel, hinge, keyboard, and thermal heatsink restoration'
    ],
    processSteps: [
      { title: 'Intake & Visual Inspection', description: 'Checking physical condition, ports, and power rails.' },
      { title: 'Hardware Stress Benchmark', description: 'Testing CPU, RAM, and GPU under synthetic loads.' },
      { title: 'Targeted Component Repair', description: 'Replacing or repairing damaged parts with genuine components.' },
      { title: 'Burn-In Quality Sign-off', description: 'Passing a 12-hour continuous stability stress test.' }
    ],
    businessValue: [
      'Fix the exact cause of computer failures instead of replacing the entire machine',
      'Save up to 70% compared to purchasing new corporate computers',
      'Fast turnaround to minimize downtime for office staff'
    ],
    slaNote: 'Urgent diagnostic available in under 4 hours for priority business accounts.',
    featured: true
  },
  {
    id: 'srv-preventive-maintenance-thermal',
    slug: 'preventive-maintenance-thermal',
    title: 'Preventive Maintenance & Thermal Paste',
    titlePt: 'Manutenção Preventiva e Limpeza Térmica',
    category: 'it-support',
    categoryKey: 'it-support',
    categoryIndex: '01',
    categoryLabel: { en: 'IT Support & Technical', pt: 'Suporte Informático & Técnico' },
    shortDescription: 'Deep internal dust removal, fan ultrasonic cleaning, and premium non-conductive thermal paste replacement.',
    shortDescriptionPt: 'Limpeza interna profunda, desobstrução de ventoinhas e aplicação de massa térmica de alto rendimento.',
    fullDescription: 'Over time, dust build-up and dried-out factory thermal paste cause CPUs and GPUs to overheat, throttle clock speeds, and crash. We completely clean internal cooling channels and apply premium thermal compound for silent, cool operation.',
    iconName: 'Sparkles',
    deliveryModes: ['Workshop Lab', 'On-Site'],
    turnaroundTime: { en: 'Same-day Available', pt: 'Disponível no Próprio Dia' },
    deliverables: {
      en: ['Internal dust & lint extraction', 'Premium thermal paste re-application (Arctic/Noctua)', 'Temperature drop verification benchmark'],
      pt: ['Remoção completa de pó e sujidade interna', 'Aplicação de pasta térmica premium (Arctic/Noctua)', 'Teste de redução de temperatura em carga']
    },
    capabilities: [
      'Disassembly and ultrasonic cleaning of cooling fans and heatsink fins',
      'Application of high-performance non-conductive thermal interface material',
      'Thermal pad replacement on GPU memory modules and VRMs',
      'Chassis air filter maintenance and port contact oxidation cleaning'
    ],
    processSteps: [
      { title: 'Baseline Thermal Audit', description: 'Measuring baseline temperatures under standard workloads.' },
      { title: 'Cooler Teardown & Cleansing', description: 'Removing dried paste and cleaning heatsink fins.' },
      { title: 'Thermal Compound Application', description: 'Applying fresh high-density thermal paste evenly.' },
      { title: 'Post-service Stress Test', description: 'Confirming a 15°C–25°C temperature drop under load.' }
    ],
    businessValue: [
      'Prevent costly processor and graphics card burnouts',
      'Eliminate loud fan noise and annoying thermal throttling slowdowns',
      'Extend the active lifespan of business laptops and desktop towers'
    ],
    featured: true
  },
  {
    id: 'srv-remote-helpdesk-troubleshooting',
    slug: 'remote-helpdesk-troubleshooting',
    title: 'Remote Helpdesk & Troubleshooting',
    titlePt: 'Suporte Remoto e Assistência Técnica Rápida',
    category: 'it-support',
    categoryKey: 'it-support',
    categoryIndex: '01',
    categoryLabel: { en: 'IT Support & Technical', pt: 'Suporte Informático & Técnico' },
    shortDescription: 'Instant encrypted remote desktop assistance for business software, network connections, printers, and email issues.',
    shortDescriptionPt: 'Assistência técnica remota imediata e segura para problemas de software, impressoras, email e rede.',
    fullDescription: 'Our certified engineers connect securely to your employee screens in seconds without travel delays to resolve software glitches, email synchronization problems, VPN errors, and system slowdowns.',
    iconName: 'Headphones',
    deliveryModes: ['Remote'],
    turnaroundTime: { en: '15–30 Minutes', pt: '15–30 Minutos' },
    deliverables: {
      en: ['Encrypted 256-bit remote session', 'Immediate problem resolution', 'Zero travel or dispatch fees'],
      pt: ['Sessão remota encriptada a 256 bits', 'Resolução imediata do problema', 'Sem custos de deslocação']
    },
    capabilities: [
      'Instant screen sharing via secure enterprise tools (RustDesk, AnyDesk, TeamViewer)',
      'Microsoft 365, Outlook, Google Workspace, and email configuration fixes',
      'Shared office printer, scanner, and network drive reconnection',
      'Malware/adware removal and browser security cleanup'
    ],
    processSteps: [
      { title: 'One-click Connection', description: 'User clicks our secure support link to generate session code.' },
      { title: 'Live Remote Fix', description: 'Technician diagnoses and resolves the issue in real time.' },
      { title: 'Safe Disconnection', description: 'Session terminates completely with no lingering background access.' }
    ],
    businessValue: [
      'Unblock employees in minutes rather than waiting hours or days',
      'Ideal for remote workers, hybrid teams, and branch offices anywhere'
    ],
    featured: true
  },
  {
    id: 'srv-data-recovery-drives',
    slug: 'data-recovery-drives',
    title: 'Data Recovery from Corrupted Drives',
    titlePt: 'Recuperação de Dados em Discos e SSDs',
    category: 'it-support',
    categoryKey: 'it-support',
    categoryIndex: '01',
    categoryLabel: { en: 'IT Support & Technical', pt: 'Suporte Informático & Técnico' },
    shortDescription: 'Clean lab data recovery from failing hard drives, unreadable NVMe/SSDs, corrupted partitions, and deleted files.',
    shortDescriptionPt: 'Recuperação especializada de dados em discos mecânicos danificados, SSDs ilegíveis, partições corrompidas e ficheiros apagados.',
    fullDescription: 'When a hard drive starts clicking, an SSD fails to mount, or accidental formatting occurs, our data recovery lab uses specialized hardware imagers to safely extract critical accounting databases and confidential files.',
    iconName: 'HardDrive',
    deliveryModes: ['Workshop Lab'],
    turnaroundTime: { en: '24–48 Hours', pt: '24–48 Horas' },
    deliverables: {
      en: ['Sector-by-sector drive clone', 'Recovered file structure directory', 'Encrypted transfer onto new backup drive'],
      pt: ['Clonagem setor a setor em bancada', 'Diretório completo de ficheiros recuperados', 'Transferência encriptada para novo disco']
    },
    capabilities: [
      'Hardware-level sector imaging bypassing bad blocks on mechanical HDDs',
      'Controller firmware reconstruction for failed NVMe and SATA SSDs',
      'Raw recovery for formatted NTFS, exFAT, APFS, and EXT4 file systems',
      'Strict non-disclosure agreement (NDA) for corporate and legal privacy'
    ],
    processSteps: [
      { title: 'Non-destructive Diagnosis', description: 'Assessing platter and controller health without stressing the media.' },
      { title: 'Hardware Deep Clone', description: 'Extracting readable sectors onto a donor recovery drive.' },
      { title: 'Data Reconstruction & Delivery', description: 'Rebuilding folder hierarchies and verifying file integrity.' }
    ],
    businessValue: [
      'Restore irreplaceable financial records, customer databases, and documents',
      'Prevent disastrous business interruptions after unexpected hardware failures'
    ],
    featured: true
  },
  {
    id: 'srv-os-setup-driver-optimization',
    slug: 'os-setup-driver-optimization',
    title: 'OS Setup, Driver Config & Performance Tuning',
    titlePt: 'Instalação de Sistemas e Otimização',
    category: 'it-support',
    categoryKey: 'it-support',
    categoryIndex: '01',
    categoryLabel: { en: 'IT Support & Technical', pt: 'Suporte Informático & Técnico' },
    shortDescription: 'Clean licensed OS installation (Windows 11 Pro / macOS / Linux), official drivers, and performance debloating.',
    shortDescriptionPt: 'Instalação limpa e licenciada de sistemas operativos (Windows 11 Pro / macOS / Linux), drivers oficiais e otimização.',
    fullDescription: 'We install fresh, official operating systems with genuine digital licenses, update manufacturer chipset and GPU drivers, disable telemetry bloatware, and tune boot parameters for maximum responsiveness.',
    iconName: 'Cpu',
    deliveryModes: ['Workshop Lab', 'Remote'],
    turnaroundTime: { en: '24h Turnaround', pt: 'Prazo 24h' },
    deliverables: {
      en: ['Genuine digital license activation', 'Latest WHQL drivers & firmware updates', 'Clean debloated OS image'],
      pt: ['Ativação de licença digital genuína', 'Últimos drivers WHQL e atualizações de firmware', 'Sistema limpo e otimizado']
    },
    capabilities: [
      'Windows 10/11 Pro & Enterprise with BitLocker drive encryption setup',
      'macOS clean setup, Apple Silicon tuning, and Time Machine configuration',
      'Ubuntu LTS, Debian, and Rocky Linux enterprise workstation deployment',
      'Removal of pre-installed background bloatware and unnecessary startup apps'
    ],
    processSteps: [
      { title: 'Storage Partitioning', description: 'Configuring GPT/UEFI secure boot tables.' },
      { title: 'Clean OS Deployment', description: 'Installing official, untampered operating system images.' },
      { title: 'Driver & Performance Hardening', description: 'Applying manufacturer drivers and optimizing background services.' }
    ],
    businessValue: [
      'Eliminate software crashes and junk files from old installations',
      'Ensure 100% compliance with business software licensing regulations',
      'Drastically improve daily application startup speeds'
    ],
    featured: true
  },
  // ==========================================
  // 01. IT Support & Technical Services (Legacy & Full catalog)
  // ==========================================
  {
    id: 'srv-computer-diagnostics',
    slug: 'computer-diagnostics',
    title: 'Computer Diagnostics',
    titlePt: 'Diagnóstico Informático',
    category: 'it-support',
    categoryKey: 'it-support',
    categoryIndex: '01',
    categoryLabel: { en: 'IT Support & Technical', pt: 'Suporte Informático & Técnico' },
    shortDescription: 'Comprehensive hardware and operating system fault diagnostics to quickly identify causes of crashes, freezing, or slowdowns.',
    shortDescriptionPt: 'Diagnóstico rigoroso de avarias de hardware e sistema operativo para identificar bloqueios, lentidão ou erros.',
    fullDescription: 'Our certified engineers use professional hardware diagnostic suites and bench stress tests to pinpoint exactly why a laptop, desktop, or workstation is malfunctioning.',
    iconName: 'Search',
    deliveryModes: ['Workshop Lab', 'On-Site'],
    turnaroundTime: { en: 'Same-day / 24h', pt: 'Mesmo dia / 24h' },
    deliverables: {
      en: ['Component health audit', 'Thermal & power stress tests', 'Detailed repair quotation'],
      pt: ['Auditoria de componentes', 'Testes de stress térmico e elétrico', 'Orçamento detalhado']
    },
    capabilities: [
      'Memory (RAM) error testing and bit-flip detection',
      'NVMe/SSD sector verification and SMART health monitoring',
      'Processor thermal throttling analysis',
      'Motherboard voltage rails and capacitor inspection'
    ],
    processSteps: [
      { title: 'Intake & Visual Inspection', description: 'Checking physical condition, ports, and power rails.' },
      { title: 'Hardware Stress Benchmark', description: 'Testing CPU, RAM, and GPU under synthetic loads.' },
      { title: 'Diagnostic Report', description: 'Providing clear explanation and repair options without jargon.' }
    ],
    businessValue: [
      'Stop guessing and fix the exact cause of computer failures',
      'Avoid unnecessary replacement costs with targeted component fixes',
      'Fast turnaround to minimize downtime for office staff'
    ],
    slaNote: 'Urgent diagnostic available in under 4 hours for priority business accounts.',
    featured: true
  },
  {
    id: 'srv-hardware-installation',
    slug: 'hardware-installation',
    title: 'Hardware Installation',
    titlePt: 'Instalação de Hardware',
    category: 'it-support',
    categoryKey: 'it-support',
    categoryIndex: '01',
    categoryLabel: { en: 'IT Support & Technical', pt: 'Suporte Informático & Técnico' },
    shortDescription: 'Professional fitting and setup of computer parts, graphics cards, power supplies, and workstation components.',
    shortDescriptionPt: 'Montagem e instalação profissional de componentes, placas gráficas, fontes de alimentação e periféricos.',
    fullDescription: 'We safely install internal computer components with anti-static protection, proper cable routing, and correct BIOS/UEFI configuration.',
    iconName: 'Cpu',
    deliveryModes: ['Workshop Lab', 'On-Site'],
    turnaroundTime: { en: '1–2 Business Days', pt: '1–2 Dias Úteis' },
    deliverables: {
      en: ['Anti-static safe installation', 'BIOS/Firmware updates', 'Hardware burn-in test'],
      pt: ['Instalação anti-estática', 'Atualização BIOS/Firmware', 'Teste de carga burn-in']
    },
    capabilities: [
      'Graphics cards, workstation video accelerators, and capture cards',
      'Modular enterprise power supplies and cooling systems',
      'Multi-monitor workstation display adapters and docking mounts',
      'Expansion PCIe cards for 10GbE network and NVMe arrays'
    ],
    processSteps: [
      { title: 'Compatibility Check', description: 'Verifying PSU wattage and motherboard socket compatibility.' },
      { title: 'Clean Assembly', description: 'Precision mounting with clean cable management.' },
      { title: 'Driver Initialization', description: 'Installing vendor-certified WHQL drivers.' }
    ],
    businessValue: [
      'Ensure 100% stable hardware compatibility without system conflicts',
      'Protect delicate electronics with electrostatic discharge (ESD) safe protocols'
    ]
  },
  {
    id: 'srv-hardware-upgrades',
    slug: 'hardware-upgrades',
    title: 'Hardware Upgrades',
    titlePt: 'Upgrades de Hardware',
    category: 'it-support',
    categoryKey: 'it-support',
    categoryIndex: '01',
    categoryLabel: { en: 'IT Support & Technical', pt: 'Suporte Informático & Técnico' },
    shortDescription: 'Speed up existing business laptops and desktops with high-speed NVMe SSDs and expanded RAM memory.',
    shortDescriptionPt: 'Acelere portáteis e desktops existentes com SSDs NVMe de alta velocidade e expansão de memória RAM.',
    fullDescription: 'Give older corporate computers a huge speed boost. Upgrading from mechanical drives or low RAM to high-speed solid-state drives makes office computers run like new for a fraction of the cost.',
    iconName: 'Zap',
    deliveryModes: ['Workshop Lab', 'On-Site'],
    turnaroundTime: { en: 'Same-day Available', pt: 'Disponível no Mesmo Dia' },
    deliverables: {
      en: ['Seamless data cloning', 'RAM expansion up to 64GB+', 'Thermal paste replacement'],
      pt: ['Clonagem integral de dados', 'Expansão RAM até 64GB+', 'Substituição de massa térmica']
    },
    capabilities: [
      '1-to-1 data cloning so all your apps and files remain exactly in place',
      'High-speed PCIe Gen4 NVMe and SATA SSD upgrades',
      'Dual-channel DDR4 and DDR5 memory expansions',
      'Thermal heatsink cleaning and premium thermal compound application'
    ],
    processSteps: [
      { title: 'Drive Cloning', description: 'Bit-level duplication of your existing system.' },
      { title: 'Component Upgrade', description: 'Installing certified enterprise-grade memory and SSDs.' },
      { title: 'Performance Validation', description: 'Benchmarking read/write speeds and system responsiveness.' }
    ],
    businessValue: [
      'Extend computer lifespan by 3 to 5 additional years',
      'Save up to 70% compared to purchasing brand new machines',
      'Instant productivity boost for everyday office multitasking'
    ],
    featured: true
  },
  {
    id: 'srv-os-installation',
    slug: 'os-installation',
    title: 'Operating System Installation',
    titlePt: 'Instalação de Sistemas Operativos',
    category: 'it-support',
    categoryKey: 'it-support',
    categoryIndex: '01',
    categoryLabel: { en: 'IT Support & Technical', pt: 'Suporte Informático & Técnico' },
    shortDescription: 'Clean, licensed installation and optimization of Windows 11 Pro, macOS, and enterprise Linux distributions.',
    shortDescriptionPt: 'Instalação limpa, licenciamento e otimização de Windows 11 Pro, macOS e distribuições Linux.',
    fullDescription: 'We install fresh, debloated operating systems with official licensing, the latest security patches, and manufacturer chipset drivers for rock-solid stability.',
    iconName: 'Laptop',
    deliveryModes: ['Workshop Lab', 'Remote'],
    turnaroundTime: { en: '24h Turnaround', pt: 'Prazo 24h' },
    deliverables: {
      en: ['Official digital license activation', 'Latest security patches', 'Driver & firmware tuning'],
      pt: ['Ativação de licença digital oficial', 'Últimas atualizações de segurança', 'Ajuste de drivers e firmware']
    },
    capabilities: [
      'Windows 10/11 Pro & Enterprise with BitLocker encryption',
      'macOS clean setup and Apple Silicon optimization',
      'Ubuntu LTS, Debian, and RedHat Enterprise Linux',
      'Removal of pre-installed bloatware and unnecessary background tasks'
    ],
    processSteps: [
      { title: 'Disk Partitioning', description: 'Configuring GPT/UEFI secure boot partitions.' },
      { title: 'OS Deployment', description: 'Installing clean, official OS images.' },
      { title: 'Post-Install Hardening', description: 'Applying telemetry and security policies.' }
    ],
    businessValue: [
      'Eliminate software crashes and junk files from old installations',
      'Ensure full compliance with business software licensing'
    ]
  },
  {
    id: 'srv-computer-configuration',
    slug: 'computer-configuration',
    title: 'Computer Configuration',
    titlePt: 'Configuração de Computadores',
    category: 'it-support',
    categoryKey: 'it-support',
    categoryIndex: '01',
    categoryLabel: { en: 'IT Support & Technical', pt: 'Suporte Informático & Técnico' },
    shortDescription: 'Tailored setup of business software, corporate email, network drives, and multi-display workstations.',
    shortDescriptionPt: 'Configuração personalizada de software de gestão, email corporativo, pastas de rede e múltiplos monitores.',
    fullDescription: 'We configure new or repurposed employee workstations so team members can start working immediately on their first day with zero friction.',
    iconName: 'Wrench',
    deliveryModes: ['On-Site', 'Remote', 'Workshop Lab'],
    turnaroundTime: { en: '1 Business Day', pt: '1 Dia Útil' },
    deliverables: {
      en: ['Microsoft 365 / Google Workspace setup', 'Shared printer & NAS mapping', 'Standard corporate image'],
      pt: ['Configuração Microsoft 365 / Google Workspace', 'Mapeamento de impressoras e NAS', 'Imagem corporativa standard']
    },
    capabilities: [
      'Corporate email, OneDrive/Google Drive sync, and Microsoft Teams configuration',
      'Network printer, scanner, and multifunction device installation',
      'Accounting and ERP client software installation (Primavera, PHC, Moloni, Sage)',
      'Dual and triple monitor calibration and Thunderbolt dock setup'
    ],
    processSteps: [
      { title: 'User Profile Setup', description: 'Configuring user credentials and permissions.' },
      { title: 'Application Deployment', description: 'Installing business toolsets and security clients.' },
      { title: 'User Handover', description: 'Quick verification test with the team member.' }
    ],
    businessValue: [
      'Reduce employee onboarding time from days to minutes',
      'Standardize workplace tools across your whole company'
    ]
  },
  {
    id: 'srv-hardware-troubleshooting',
    slug: 'hardware-troubleshooting',
    title: 'Hardware Troubleshooting',
    titlePt: 'Resolução de Problemas de Hardware',
    category: 'it-support',
    categoryKey: 'it-support',
    categoryIndex: '01',
    categoryLabel: { en: 'IT Support & Technical', pt: 'Suporte Informático & Técnico' },
    shortDescription: 'Expert resolution of random restarts, blue screens (BSOD), overheating, loud fans, and charging issues.',
    shortDescriptionPt: 'Resolução especializada de reinícios aleatórios, ecrãs azuis, sobreaquecimento e falhas de alimentação.',
    fullDescription: 'When hardware starts behaving erratically, our team tests motherboards, power delivery, memory controllers, and cooling systems to fix the root cause.',
    iconName: 'Activity',
    deliveryModes: ['Workshop Lab', 'On-Site'],
    turnaroundTime: { en: '24–48h', pt: '24–48h' },
    deliverables: {
      en: ['Crash dump log analysis', 'Thermal fan restoration', 'Stability stress report'],
      pt: ['Análise de ficheiros crash dump', 'Limpeza e reparação de ventoinhas', 'Relatório de estabilidade']
    },
    capabilities: [
      'Windows Memory Dump & Kernel Crash Analysis',
      'Laptop DC jack, USB-C Power Delivery, and charging IC diagnosis',
      'Liquid spill ultrasonic cleaning and corrosion treatment',
      'Screen backlight and display flex cable repair'
    ],
    processSteps: [
      { title: 'Crash Reproduction', description: 'Simulating the crash condition under monitored logs.' },
      { title: 'Component Fix/Replacement', description: 'Soldering, part swap, or thermal overhaul.' },
      { title: 'Multi-hour Loop Test', description: 'Confirming zero restarts over 12 hours.' }
    ],
    businessValue: [
      'Eliminate frustrating random work interruptions',
      'Save money by fixing faulty components instead of buying new computers'
    ]
  },
  {
    id: 'srv-general-it-support',
    slug: 'general-it-support',
    title: 'General IT Support',
    titlePt: 'Suporte Informático Geral',
    category: 'it-support',
    categoryKey: 'it-support',
    categoryIndex: '01',
    categoryLabel: { en: 'IT Support & Technical', pt: 'Suporte Informático & Técnico' },
    shortDescription: 'Flexible day-to-day helpdesk support for office employees, resolving software glitches, updates, and user requests.',
    shortDescriptionPt: 'Apoio contínuo e helpdesk para os colaboradores da sua empresa, resolvendo dúvidas, bloqueios e atualizações.',
    fullDescription: 'Our team acts as your external IT department. Whenever someone in your office has an issue, they can reach out to our technicians directly for friendly, fast assistance.',
    iconName: 'Headphones',
    deliveryModes: ['Remote', 'On-Site'],
    turnaroundTime: { en: 'Under 1 Hour', pt: 'Menos de 1 Hora' },
    deliverables: {
      en: ['Direct telephone & ticket helpdesk', 'Monthly activity summaries', 'Proactive patch management'],
      pt: ['Helpdesk direto por telefone e tickets', 'Relatórios mensais de intervenções', 'Gestão proativa de patches']
    },
    capabilities: [
      'Password resets, user access management, and login troubleshooting',
      'Software updates, PDF reader issues, browser certificate fixes',
      'File recovery and accidentally deleted folder restoration',
      'Periodic system health checks and cleanup routines'
    ],
    processSteps: [
      { title: 'Ticket Intake', description: 'Employee contacts our support via phone or email.' },
      { title: 'Immediate Resolution', description: 'Technician connects remotely to fix the problem.' },
      { title: 'Ticket Closure', description: 'Confirmation that the employee is unblocked.' }
    ],
    businessValue: [
      'No need to hire an expensive full-time in-house IT employee',
      'Keep your team focused on their core job while we handle tech issues'
    ],
    featured: true
  },
  {
    id: 'srv-remote-it-support',
    slug: 'remote-it-support',
    title: 'Remote IT Support',
    titlePt: 'Suporte Informático Remoto',
    category: 'it-support',
    categoryKey: 'it-support',
    categoryIndex: '01',
    categoryLabel: { en: 'IT Support & Technical', pt: 'Suporte Informático & Técnico' },
    shortDescription: 'Instant, secure remote desktop troubleshooting to fix software, printer, email, and connection problems immediately.',
    shortDescriptionPt: 'Assistência remota imediata e segura para resolver problemas de software, impressoras e conectividade.',
    fullDescription: 'Using encrypted remote connection tools, our engineers can see your screen and fix issues on the spot without waiting for a technician to drive to your office.',
    iconName: 'Monitor',
    deliveryModes: ['Remote'],
    turnaroundTime: { en: '15–30 Minutes', pt: '15–30 Minutos' },
    deliverables: {
      en: ['Encrypted 256-bit connection', 'Instant session link', 'Zero travel costs'],
      pt: ['Ligação cifrada a 256 bits', 'Acesso imediato via link', 'Zero custos de deslocação']
    },
    capabilities: [
      'One-click secure connection via RustDesk, AnyDesk, or TeamViewer',
      'Printer spooler and network scanner reconnection',
      'Email client synchronization and Outlook profile rebuilding',
      'Malware and adware quick scan and removal'
    ],
    processSteps: [
      { title: 'Quick Link', description: 'User clicks our secure remote support link.' },
      { title: 'Screen Sharing', description: 'Technician diagnoses and resolves the issue in real time.' },
      { title: 'Safe Disconnect', description: 'Session terminates completely with no lingering access.' }
    ],
    businessValue: [
      'Fix urgent issues in minutes rather than hours',
      'Ideal for remote employees and hybrid teams working from anywhere'
    ]
  },
  {
    id: 'srv-onsite-it-support',
    slug: 'onsite-it-support',
    title: 'On-site IT Support',
    titlePt: 'Assistência Técnica no Local',
    category: 'it-support',
    categoryKey: 'it-support',
    categoryIndex: '01',
    categoryLabel: { en: 'IT Support & Technical', pt: 'Suporte Informático & Técnico' },
    shortDescription: 'Hands-on technical assistance at your business premises in Trofa, Santo Tirso, Vila do Conde, and Greater Porto.',
    shortDescriptionPt: 'Assistência técnica presencial nas instalações da sua empresa na Trofa, Santo Tirso, Vila do Conde e Grande Porto.',
    fullDescription: 'For physical hardware issues, cabling, new workstation rollouts, or printer setup that cannot be fixed remotely, our technicians come directly to your office.',
    iconName: 'MapPin',
    deliveryModes: ['On-Site', 'Emergency SLA'],
    turnaroundTime: { en: 'Same-day Dispatch', pt: 'Deslocação no Próprio Dia' },
    deliverables: {
      en: ['Physical on-site technician', 'Full tool & spare parts kit', 'Signed work completion sheet'],
      pt: ['Técnico especializado no local', 'Kit completo de ferramentas e peças', 'Folha de serviço assinada']
    },
    capabilities: [
      'Direct workstation and printer physical replacement',
      'Office desk move and IT infrastructure relocation',
      'Server room inspection and UPS battery testing',
      'Local network socket and patch cord replacements'
    ],
    processSteps: [
      { title: 'Visit Scheduling', description: 'Coordinating arrival time to minimize office disruption.' },
      { title: 'On-site Intervention', description: 'Hands-on diagnostics, cable repair, and parts replacement.' },
      { title: 'Final Testing & Sign-off', description: 'Confirming full functionality with office manager.' }
    ],
    businessValue: [
      'Personal, accountable local support from technicians who know your company',
      'Rapid emergency response when internet or critical servers go down'
    ],
    featured: true
  },

  // ==========================================
  // 02. Network & Infrastructure Services (12 Services)
  // ==========================================
  {
    id: 'srv-network-installation',
    slug: 'network-installation',
    title: 'Network Installation',
    titlePt: 'Instalação de Redes',
    category: 'networking',
    categoryKey: 'networking-infrastructure',
    categoryIndex: '02',
    categoryLabel: { en: 'Network & Infrastructure', pt: 'Rede & Infraestrutura' },
    shortDescription: 'Complete planning, structured deployment, and commissioning of business local area networks (LAN) and Wi-Fi.',
    shortDescriptionPt: 'Planeamento integral, instalação de cablagem e colocação em funcionamento de redes empresariais (LAN e Wi-Fi).',
    fullDescription: 'From small offices to multi-floor buildings and industrial warehouses, we design and install high-performance networking infrastructures built for zero bottlenecks.',
    iconName: 'Network',
    deliveryModes: ['On-Site'],
    turnaroundTime: { en: 'Custom Project Timeline', pt: 'Cronograma por Projeto' },
    deliverables: {
      en: ['Network architecture blueprint', 'Certified cabling infrastructure', 'Full commissioning report'],
      pt: ['Esquema de arquitetura de rede', 'Cablagem estruturada certificada', 'Relatório de entrada em serviço']
    },
    capabilities: [
      'Turnkey office LAN and WLAN deployment',
      'PoE+ infrastructure for VoIP phones, access points, and security cameras',
      'Integration of fiber optic uplinks between server rooms and sub-racks',
      'Comprehensive Fluke network certification and socket labeling'
    ],
    processSteps: [
      { title: 'Site Survey', description: 'Assessing building layout, cable pathways, and device density.' },
      { title: 'Installation & Terminations', description: 'Pulling Cat6A cables, rack mounting, and punchdown.' },
      { title: 'Speed Certification', description: 'Testing gigabit throughput and packet integrity across all ports.' }
    ],
    businessValue: [
      'Eliminate dropped connections and slow file transfers across departments',
      'Future-proof cabling infrastructure ready for 10Gbps expansion'
    ],
    featured: true
  },
  {
    id: 'srv-network-configuration',
    slug: 'network-configuration',
    title: 'Network Configuration',
    titlePt: 'Configuração de Redes',
    category: 'networking',
    categoryKey: 'networking-infrastructure',
    categoryIndex: '02',
    categoryLabel: { en: 'Network & Infrastructure', pt: 'Rede & Infraestrutura' },
    shortDescription: 'Configure your business network for reliable, segmented, and secure day-to-day operation.',
    shortDescriptionPt: 'Configuração da rede da sua empresa para um funcionamento diário seguro, estável e segmentado.',
    fullDescription: 'We configure IP subnets, DHCP servers, VLAN traffic isolation, and DNS filtering so your office network runs smoothly and securely.',
    iconName: 'Sliders',
    deliveryModes: ['On-Site', 'Remote'],
    turnaroundTime: { en: '1–2 Business Days', pt: '1–2 Dias Úteis' },
    deliverables: {
      en: ['VLAN segmentation mapping', 'DHCP scope configuration', 'QoS traffic prioritization'],
      pt: ['Mapeamento de VLANs', 'Configuração de DHCP e sub-redes', 'Priorização de tráfego QoS']
    },
    capabilities: [
      'VLAN isolation for guests, office computers, VoIP phones, and IoT cameras',
      'Quality of Service (QoS) to prioritize video meetings and ERP database traffic',
      'Static IP assignments for servers, NAS units, and network printers',
      'DNS filtering to block malicious domains and malware communications'
    ],
    processSteps: [
      { title: 'Topology Review', description: 'Auditing existing subnets and connected device lists.' },
      { title: 'Rule Configuration', description: 'Applying VLAN tags, routing rules, and DHCP scopes.' },
      { title: 'Traffic Verification', description: 'Verifying isolation between guest Wi-Fi and company servers.' }
    ],
    businessValue: [
      'Keep guest devices completely separated from internal company accounting data',
      'Prevent video call freezing during large background file downloads'
    ]
  },
  {
    id: 'srv-wifi-setup',
    slug: 'wifi-setup',
    title: 'Wi-Fi Setup & Optimization',
    titlePt: 'Instalação e Otimização de Wi-Fi',
    category: 'networking',
    categoryKey: 'networking-infrastructure',
    categoryIndex: '02',
    categoryLabel: { en: 'Network & Infrastructure', pt: 'Rede & Infraestrutura' },
    shortDescription: 'Fast, stable business Wi-Fi 6 setup ensuring zero dead zones and seamless roaming across offices and warehouses.',
    shortDescriptionPt: 'Redes Wi-Fi 6 empresariais rápidas e estáveis, garantindo cobertura total sem zonas mortas nem quebras.',
    fullDescription: 'We install professional ceiling-mounted access points (Ubiquiti UniFi, Cisco, Aruba) configured for automatic channel switching and seamless roaming as you walk around the building.',
    iconName: 'Wifi',
    deliveryModes: ['On-Site'],
    turnaroundTime: { en: '1–2 Business Days', pt: '1–2 Dias Úteis' },
    deliverables: {
      en: ['RF heat map survey', 'Seamless roaming configuration', 'Isolated guest portal with QR code'],
      pt: ['Levantamento de cobertura RF', 'Configuração de roaming contínuo', 'Portal de convidados isolado com QR']
    },
    capabilities: [
      'Enterprise Wi-Fi 6 (802.11ax) multi-gigabit access points',
      'Zero-handoff roaming so calls never drop when moving between rooms',
      'Separate secure Employee Wi-Fi with WPA3-Enterprise authentication',
      'Branded Guest Wi-Fi portal with bandwidth speed limits'
    ],
    processSteps: [
      { title: 'Signal Mapping', description: 'Measuring wall attenuation and optimal AP locations.' },
      { title: 'Access Point Mounting', description: 'Ceiling mount installation with clean PoE cabling.' },
      { title: 'Roaming Tuning', description: 'Adjusting transmission power and minimum RSSI thresholds.' }
    ],
    businessValue: [
      'Zero complaints about unstable Wi-Fi during important client video meetings',
      'Guests can connect easily without ever touching internal company files'
    ],
    featured: true
  },
  {
    id: 'srv-router-configuration',
    slug: 'router-configuration',
    title: 'Router Configuration',
    titlePt: 'Configuração de Routers',
    category: 'networking',
    categoryKey: 'networking-infrastructure',
    categoryIndex: '02',
    categoryLabel: { en: 'Network & Infrastructure', pt: 'Rede & Infraestrutura' },
    shortDescription: 'Multi-WAN router setup, load balancing, DNS filtering, and automatic internet backup failover.',
    shortDescriptionPt: 'Configuração de routers multi-WAN, balanceamento de carga e redundância automática de internet.',
    fullDescription: 'We configure enterprise routers (MikroTik, Cisco, Ubiquiti, pfSense) to ensure that if your primary internet provider fails, the router automatically switches to a backup connection within seconds.',
    iconName: 'Server',
    deliveryModes: ['On-Site', 'Remote'],
    turnaroundTime: { en: '1 Business Day', pt: '1 Dia Útil' },
    deliverables: {
      en: ['Dual-WAN failover script', 'Port forwarding & NAT security', 'Dynamic DNS setup'],
      pt: ['Script de failover Dual-WAN', 'Segurança de portas e NAT', 'Configuração de DNS dinâmico']
    },
    capabilities: [
      'Dual-WAN automatic failover (Fiber + 5G backup link)',
      'Policy-based routing and WAN bandwidth aggregation',
      'Secure NAT, PAT, and port forwarding rules',
      'BGP/OSPF dynamic routing for multi-office networks'
    ],
    processSteps: [
      { title: 'Interface Assignment', description: 'Binding primary and secondary internet WAN ports.' },
      { title: 'Failover Testing', description: 'Physically pulling primary cable to verify seamless switchover.' },
      { title: 'Firewall Policy Hardening', description: 'Closing unnecessary open ports and disabling remote admin.' }
    ],
    businessValue: [
      'Never lose a sale or halt office work when one internet provider has an outage',
      'Optimize internet speeds by balancing web traffic across two lines'
    ]
  },
  {
    id: 'srv-switch-configuration',
    slug: 'switch-configuration',
    title: 'Switch Configuration',
    titlePt: 'Configuração de Switches',
    category: 'networking',
    categoryKey: 'networking-infrastructure',
    categoryIndex: '02',
    categoryLabel: { en: 'Network & Infrastructure', pt: 'Rede & Infraestrutura' },
    shortDescription: 'Managed Layer 2/3 switch configuration, VLAN tagging, port aggregation, and PoE+ power allocation.',
    shortDescriptionPt: 'Configuração de switches geridos Layer 2/3, VLANs, agregação de portas (LACP) e gestão de energia PoE+.',
    fullDescription: 'We configure managed enterprise switches (Cisco Catalyst, HP Aruba, Ubiquiti) to optimize data throughput, prevent network broadcast loops, and securely power VoIP phones and access points.',
    iconName: 'Layers',
    deliveryModes: ['On-Site', 'Remote'],
    turnaroundTime: { en: '1 Business Day', pt: '1 Dia Útil' },
    deliverables: {
      en: ['VLAN trunking setup', 'Spanning Tree (RSTP) loop protection', 'Port security & speed tuning'],
      pt: ['Configuração de trunks VLAN', 'Proteção de loops Spanning Tree', 'Segurança de portas e velocidade']
    },
    capabilities: [
      '802.1Q VLAN tagging and trunk port configuration',
      'LACP / Link Aggregation to double bandwidth between switches',
      'Spanning Tree Protocol (RSTP/MSTP) to prevent network storms',
      'PoE power budgeting and scheduled power cycling for APs'
    ],
    processSteps: [
      { title: 'Port Mapping', description: 'Labeling switch ports to match office desk sockets.' },
      { title: 'VLAN & LACP Provisioning', description: 'Applying switch configuration profiles.' },
      { title: 'Loop Defense Verification', description: 'Testing redundant switch links.' }
    ],
    businessValue: [
      'Prevent network crashes caused by accidental cable loops',
      'Ensure maximum transfer speeds between employee PCs and company servers'
    ]
  },
  {
    id: 'srv-firewall-configuration',
    slug: 'firewall-configuration',
    title: 'Firewall Configuration',
    titlePt: 'Configuração de Firewalls',
    category: 'networking',
    categoryKey: 'networking-infrastructure',
    categoryIndex: '02',
    categoryLabel: { en: 'Network & Infrastructure', pt: 'Rede & Infraestrutura' },
    shortDescription: 'Next-generation firewall rule creation, traffic inspection, port protection, and intrusion prevention.',
    shortDescriptionPt: 'Criação de regras de firewall de nova geração, inspeção de tráfego, proteção de portas e prevenção de intrusões.',
    fullDescription: 'We set up and fine-tune hardware firewalls (Fortinet FortiGate, Sophos XGS, pfSense) to inspect incoming and outgoing traffic, block unauthorized access, and protect your internal servers.',
    iconName: 'Shield',
    deliveryModes: ['On-Site', 'Remote'],
    turnaroundTime: { en: '1–2 Business Days', pt: '1–2 Dias Úteis' },
    deliverables: {
      en: ['Zero-Trust firewall policy', 'Intrusion Prevention (IPS) rules', 'Application control filtering'],
      pt: ['Política de firewall Zero-Trust', 'Regras de Prevenção de Intrusões (IPS)', 'Filtro de controlo de aplicações']
    },
    capabilities: [
      'Inbound and outbound stateful inspection and Deep Packet Inspection (DPI)',
      'Intrusion Prevention System (IPS) and geo-blocking suspicious IP countries',
      'Application control (blocking risky P2P torrents or unapproved software)',
      'SSL/TLS inspection for detecting encrypted malware payloads'
    ],
    processSteps: [
      { title: 'Policy Audit', description: 'Determining necessary inbound services and allowed outbound traffic.' },
      { title: 'Rule Hardening', description: 'Configuring strict default-deny firewall policies.' },
      { title: 'Penetration Verification', description: 'Scanning external IPs to verify all non-essential ports are closed.' }
    ],
    businessValue: [
      'Shield company servers and databases from automated hacker botnets',
      'Comply with corporate insurance and industry cybersecurity requirements'
    ],
    featured: true
  },
  {
    id: 'srv-vpn-setup',
    slug: 'vpn-setup-configuration',
    title: 'VPN Setup & Configuration',
    titlePt: 'Configuração de VPN Segura',
    category: 'networking',
    categoryKey: 'networking-infrastructure',
    categoryIndex: '02',
    categoryLabel: { en: 'Network & Infrastructure', pt: 'Rede & Infraestrutura' },
    shortDescription: 'Secure encrypted Site-to-Site and remote-worker IPSec/WireGuard/OpenVPN tunnels for hybrid teams.',
    shortDescriptionPt: 'Túneis VPN encriptados Site-to-Site e para colaboradores remotos (IPSec, WireGuard, OpenVPN).',
    fullDescription: 'Allow employees working from home or on the road to securely connect to office files, ERP systems, and internal servers over military-grade encrypted tunnels.',
    iconName: 'Lock',
    deliveryModes: ['Remote', 'On-Site'],
    turnaroundTime: { en: 'Same-day / 24h', pt: 'Mesmo dia / 24h' },
    deliverables: {
      en: ['WireGuard / IPSec encryption', 'Multi-factor authentication (MFA)', 'Client setup guide for Windows/Mac'],
      pt: ['Encriptação WireGuard / IPSec', 'Autenticação de dois fatores (MFA)', 'Guia de ligação para Windows/Mac']
    },
    capabilities: [
      'Ultra-fast WireGuard and OpenVPN client tunnels for remote workers',
      'Permanent IPSec Site-to-Site tunnels connecting multiple branch offices',
      'MFA / 2-Factor Authentication verification before granting VPN access',
      'Split-tunneling to avoid slowing down personal internet traffic'
    ],
    processSteps: [
      { title: 'VPN Gateway Provisioning', description: 'Configuring cryptographic keys and certificates.' },
      { title: 'User Profile Setup', description: 'Creating individual secure user credentials.' },
      { title: 'Remote Connection Test', description: 'Verifying end-to-end access to office servers and file shares.' }
    ],
    businessValue: [
      'Enable hybrid and remote work without opening risky open ports to the internet',
      'Connect branch offices seamlessly as if they were in the same building'
    ]
  },
  {
    id: 'srv-network-troubleshooting',
    slug: 'network-troubleshooting',
    title: 'Network Troubleshooting',
    titlePt: 'Diagnóstico e Resolução de Falhas de Rede',
    category: 'networking',
    categoryKey: 'networking-infrastructure',
    categoryIndex: '02',
    categoryLabel: { en: 'Network & Infrastructure', pt: 'Rede & Infraestrutura' },
    shortDescription: 'Rapid diagnosis and resolution of high latency, packet loss, IP conflicts, and intermittent network outages.',
    shortDescriptionPt: 'Diagnóstico e resolução rápida de lentidão, perda de pacotes, conflitos de IP e quebras intermitentes.',
    fullDescription: 'When network connections drop unexpectedly or database queries slow to a crawl, our engineers use packet analyzers and cable testers to locate and resolve the issue quickly.',
    iconName: 'Activity',
    deliveryModes: ['On-Site', 'Remote', 'Emergency SLA'],
    turnaroundTime: { en: '2–4 Hours', pt: '2–4 Horas' },
    deliverables: {
      en: ['Wireshark packet capture analysis', 'Physical cable continuity test', 'Root cause correction report'],
      pt: ['Análise de tráfego com Wireshark', 'Teste físico de continuidade de cabos', 'Relatório de correção da causa raiz']
    },
    capabilities: [
      'Wireshark packet tracing to find network broadcast loops and rogue DHCP servers',
      'Resolving duplicate IP address collisions and DNS resolution failures',
      'Locating damaged ethernet cables, bent pins, and loose keystone jacks',
      'Diagnosing MTU size mismatches causing VPN stalls and dropped packets'
    ],
    processSteps: [
      { title: 'Symptom Isolation', description: 'Testing from edge switch to core gateway.' },
      { title: 'Root Cause Fix', description: 'Replacing bad cables, isolating rogue devices, or fixing configs.' },
      { title: 'Ping & Jitter Validation', description: 'Confirming zero packet loss across all devices.' }
    ],
    businessValue: [
      'Get your office back online quickly during critical outages',
      'Permanent fixes that prevent the same network problem from happening again'
    ]
  },
  {
    id: 'srv-network-monitoring',
    slug: 'network-monitoring',
    title: 'Network Monitoring',
    titlePt: 'Monitorização Contínua de Rede',
    category: 'networking',
    categoryKey: 'networking-infrastructure',
    categoryIndex: '02',
    categoryLabel: { en: 'Network & Infrastructure', pt: 'Rede & Infraestrutura' },
    shortDescription: '24/7 proactive monitoring of network bandwidth, switch health, internet links, and automated uptime alerts.',
    shortDescriptionPt: 'Monitorização 24/7 de largura de banda, estado dos switches, ligações à internet e alertas automáticos.',
    fullDescription: 'We install lightweight monitoring probes (Zabbix, SNMP, PRTG) that alert our technicians immediately if an access point goes offline, a switch overheats, or internet bandwidth saturates.',
    iconName: 'LineChart',
    deliveryModes: ['Remote'],
    turnaroundTime: { en: 'Continuous 24/7', pt: 'Contínuo 24/7' },
    deliverables: {
      en: ['Automated email & SMS alerts', 'Monthly uptime & bandwidth reports', 'Capacity planning insights'],
      pt: ['Alertas automáticos por email e SMS', 'Relatórios mensais de uptime e tráfego', 'Previsão de capacidade']
    },
    capabilities: [
      'SNMP v3 telemetry on switches, routers, and access points',
      'Continuous ping latency and internet jitter tracking',
      'Port utilization alerts to identify bandwidth-hogging computers',
      'UPS battery runtime and ambient server room temperature alerts'
    ],
    processSteps: [
      { title: 'Probe Installation', description: 'Setting up monitoring agent in your local network.' },
      { title: 'Threshold Customization', description: 'Configuring custom alert levels for critical hardware.' },
      { title: 'Dashboard Access', description: 'Providing management visibility on network health.' }
    ],
    businessValue: [
      'Spot and fix hardware issues before employees even notice a problem',
      'Know exactly when your business needs to upgrade internet bandwidth'
    ]
  },
  {
    id: 'srv-network-cabling',
    slug: 'network-cabling',
    title: 'Network Cabling',
    titlePt: 'Cablagem Estruturada de Rede',
    category: 'networking',
    categoryKey: 'networking-infrastructure',
    categoryIndex: '02',
    categoryLabel: { en: 'Network & Infrastructure', pt: 'Rede & Infraestrutura' },
    shortDescription: 'Certified Cat6 / Cat6A structured ethernet cabling, conduit runs, and clean floor-to-desk installations.',
    shortDescriptionPt: 'Instalação de cablagem estruturada Cat6 / Cat6A certificada, calhas técnicas e tomadas de secretária.',
    fullDescription: 'Neat, certified cabling makes your office look professional and ensures zero interference. We install high-grade copper ethernet cabling with proper conduit, wall faceplates, and labeled sockets.',
    iconName: 'Layers',
    deliveryModes: ['On-Site'],
    turnaroundTime: { en: 'Project Dependent', pt: 'Conforme Projeto' },
    deliverables: {
      en: ['Cat6/Cat6A LSZH cabling', 'Fluke continuity certification', 'Numbered desk faceplates'],
      pt: ['Cabo Cat6/Cat6A LSZH livre de halogéneos', 'Certificação Fluke de continuidade', 'Tomadas numeradas e identificadas']
    },
    capabilities: [
      'Category 6 and 6A 10-Gigabit certified copper cabling',
      'Low Smoke Zero Halogen (LSZH) fire-safety compliant cable runs',
      'Perimeter cable trunking, underfloor pathways, and ceiling drops',
      'Professional dual-socket RJ45 wall boxes and floor grommets'
    ],
    processSteps: [
      { title: 'Pathway Planning', description: 'Calculating cable lengths and non-obtrusive routes.' },
      { title: 'Pulling & Termination', description: 'Clean pulling and keystone jack crimping.' },
      { title: 'Fluke Pass Certification', description: 'Generating PDF certification for every cable line.' }
    ],
    businessValue: [
      'Eliminate untidy, tangled floor wires that create tripping hazards',
      'Guaranteed 1 Gbps / 10 Gbps speeds with zero electromagnetic crosstalk'
    ]
  },
  {
    id: 'srv-rack-installation',
    slug: 'rack-installation',
    title: 'Rack Installation',
    titlePt: 'Montagem e Organização de Bastidores',
    category: 'networking',
    categoryKey: 'networking-infrastructure',
    categoryIndex: '02',
    categoryLabel: { en: 'Network & Infrastructure', pt: 'Rede & Infraestrutura' },
    shortDescription: 'Assembly, mounting, and cable-managed organization of 19-inch enterprise server and networking cabinets.',
    shortDescriptionPt: 'Montagem, fixação e organização cablada de bastidores de 19 polegadas para servidores e rede.',
    fullDescription: 'We assemble wall-mounted and floor-standing 19" rack cabinets (6U up to 42U), installing brush panels, cable management guides, rack PDUs, and UPS units with pristine visual organization.',
    iconName: 'Server',
    deliveryModes: ['On-Site'],
    turnaroundTime: { en: '1–2 Business Days', pt: '1–2 Dias Úteis' },
    deliverables: {
      en: ['19" cabinet assembly & leveling', 'Vertical & horizontal cable organizers', 'Rack PDU power distribution'],
      pt: ['Montagem e nivelamento de bastidor 19"', 'Guias horizontais e verticais de cabos', 'Régua PDU de alimentação com proteção']
    },
    capabilities: [
      'Wall-mount cabinets (6U, 9U, 12U) and standalone server racks (24U, 42U)',
      'Color-coded slim patch cords for switches, servers, and PoE devices',
      'Uninterruptible Power Supply (UPS) rack rails and battery testing',
      'Ventilation fan unit installation and temperature monitoring'
    ],
    processSteps: [
      { title: 'Cabinet Mounting', description: 'Secure wall anchoring or floor leveling.' },
      { title: 'Equipment Placement', description: 'Optimizing weight distribution from bottom to top.' },
      { title: 'Cable Dressing', description: 'Velcro binding and labeling every single connection.' }
    ],
    businessValue: [
      'Turn messy "spaghetti wire" server closets into clean, professional showcases',
      'Make future troubleshooting and equipment upgrades fast and simple'
    ]
  },
  {
    id: 'srv-patch-panel-installation',
    slug: 'patch-panel-installation',
    title: 'Patch Panel Installation',
    titlePt: 'Instalação de Painéis Patch',
    category: 'networking',
    categoryKey: 'networking-infrastructure',
    categoryIndex: '02',
    categoryLabel: { en: 'Network & Infrastructure', pt: 'Rede & Infraestrutura' },
    shortDescription: 'Precision punchdown, socket labeling, and testing of keystones and patch panels in server rooms.',
    shortDescriptionPt: 'Cravação de precisão, etiquetagem e certificação de painéis patch e módulos keystone no bastidor.',
    fullDescription: 'We terminate structured cabling into 24-port and 48-port patch panels with clear alphanumeric labeling matching desk sockets across the building.',
    iconName: 'Cpu',
    deliveryModes: ['On-Site'],
    turnaroundTime: { en: '1 Business Day', pt: '1 Dia Útil' },
    deliverables: {
      en: ['24/48-port modular patch panel', 'Laser-printed port labels', 'Patch schedule documentation'],
      pt: ['Painel patch modular 24/48 portas', 'Etiquetagem impressa a laser', 'Folha de mapa de portas e tomadas']
    },
    capabilities: [
      'Cat6 and Cat6A 110/Krone punchdown and toolless keystone modules',
      'Clean rear cable bars with individual cable strain relief',
      'Shielded (FTP/STP) grounding for industrial environments',
      'Direct mapping documentation delivered in PDF and printed in the rack'
    ],
    processSteps: [
      { title: 'Cable Sorting', description: 'Grouping and color sequencing cables by rack elevation.' },
      { title: 'Punchdown Termination', description: 'Precision termination to T568B standard.' },
      { title: 'Verification Scan', description: 'Continuity, wire-map, and split-pair validation.' }
    ],
    businessValue: [
      'Instant clarity: know exactly which desk connects to which switch port',
      'Eliminate broken connectors caused by loose cables'
    ]
  },

  // ==========================================
  // 03. Cybersecurity Services (11 Services)
  // ==========================================
  {
    id: 'srv-network-security',
    slug: 'network-security',
    title: 'Network Security',
    titlePt: 'Segurança de Rede',
    category: 'cybersecurity',
    categoryKey: 'cybersecurity',
    categoryIndex: '03',
    categoryLabel: { en: 'Cybersecurity Services', pt: 'Serviços de Cibersegurança' },
    shortDescription: 'Multi-layered perimeter defense, firewall policies, and real-time deep packet threat scanning.',
    shortDescriptionPt: 'Defesa perimetral multi-camada, políticas de firewall e inspeção profunda de tráfego em tempo real.',
    fullDescription: 'We build strong defenses around your office network, preventing unauthorized external access, scanning for hidden malicious traffic, and locking down all network ingress points.',
    iconName: 'ShieldCheck',
    deliveryModes: ['Remote', 'On-Site'],
    turnaroundTime: { en: '1–2 Business Days', pt: '1–2 Dias Úteis' },
    deliverables: {
      en: ['Perimeter security matrix', 'Rogue device isolation policy', 'Security baseline audit'],
      pt: ['Matriz de segurança perimetral', 'Política de isolamento de dispositivos', 'Auditoria de conformidade base']
    },
    capabilities: [
      'Intrusion Prevention System (IPS) tuning and zero-day threat blocking',
      'Network segmentation preventing malware from spreading between departments',
      'Automated blocking of known malicious command-and-control IP ranges',
      'Secure Wi-Fi encryption with 802.1X enterprise certificate authentication'
    ],
    processSteps: [
      { title: 'Security Scan', description: 'Mapping all connected devices and exposed services.' },
      { title: 'Perimeter Hardening', description: 'Closing vulnerabilities and configuring IDS/IPS.' },
      { title: 'Threat Simulation', description: 'Verifying automated defense responses.' }
    ],
    businessValue: [
      'Keep hackers out of your internal company networks',
      'Prevent a single infected laptop from spreading viruses to all office computers'
    ],
    featured: true
  },
  {
    id: 'srv-endpoint-protection',
    slug: 'endpoint-protection',
    title: 'Endpoint Protection',
    titlePt: 'Proteção de Endpoints (Antivírus / EDR)',
    category: 'cybersecurity',
    categoryKey: 'cybersecurity',
    categoryIndex: '03',
    categoryLabel: { en: 'Cybersecurity Services', pt: 'Serviços de Cibersegurança' },
    shortDescription: 'Centrally managed Next-Gen Antivirus (NGAV) and EDR across employee laptops, desktops, and servers.',
    shortDescriptionPt: 'Antivírus de nova geração (NGAV) e EDR com gestão centralizada para computadores e servidores.',
    fullDescription: 'Protect every company computer from viruses, zero-day malware, and ransomware with lightweight, cloud-managed endpoint protection that does not slow down daily work.',
    iconName: 'Shield',
    deliveryModes: ['Remote'],
    turnaroundTime: { en: 'Same-day Setup', pt: 'Ativação no Próprio Dia' },
    deliverables: {
      en: ['Cloud management dashboard', 'Automated threat remediation', 'Daily silent definition updates'],
      pt: ['Consola de gestão na cloud', 'Remoção automática de ameaças', 'Atualizações silenciosas de definições']
    },
    capabilities: [
      'AI-based behavioral analysis that spots new malware before signatures exist',
      'Automated isolation of compromised computers from the network in seconds',
      'USB drive scanning and mass storage read-only policy enforcement',
      'Central web dashboard giving managers instant visibility on all devices'
    ],
    processSteps: [
      { title: 'Agent Deployment', description: 'Silent installation via central script across all company PCs.' },
      { title: 'Policy Tuning', description: 'Configuring safe exclusions for business accounting software.' },
      { title: 'Live Telemetry', description: 'Monitoring endpoints for suspicious file executions.' }
    ],
    businessValue: [
      'Complete protection even when employees work outside the office or on public Wi-Fi',
      'Zero user interruptions with silent background updates and scanning'
    ]
  },
  {
    id: 'srv-vulnerability-assessments',
    slug: 'vulnerability-assessments',
    title: 'Vulnerability Assessments',
    titlePt: 'Avaliação de Vulnerabilidades',
    category: 'cybersecurity',
    categoryKey: 'cybersecurity',
    categoryIndex: '03',
    categoryLabel: { en: 'Cybersecurity Services', pt: 'Serviços de Cibersegurança' },
    shortDescription: 'Comprehensive security scans to identify outdated software, open ports, and system misconfigurations.',
    shortDescriptionPt: 'Varredura exaustiva de segurança para detetar software desatualizado, portas abertas e falhas de configuração.',
    fullDescription: 'We perform in-depth automated and manual vulnerability scans against your internal network and external IP addresses, highlighting weak spots before attackers find them.',
    iconName: 'Search',
    deliveryModes: ['Remote'],
    turnaroundTime: { en: '2–3 Business Days', pt: '2–3 Dias Úteis' },
    deliverables: {
      en: ['Executive vulnerability report', 'CVSS severity score ranking', 'Step-by-step remediation guide'],
      pt: ['Relatório executivo de vulnerabilidades', 'Classificação de risco CVSS', 'Guia passo a passo de correção']
    },
    capabilities: [
      'Port scanning and service banner analysis across all public IP addresses',
      'Internal subnet vulnerability assessment for unpatched Windows and Linux servers',
      'SSL/TLS certificate cipher and protocol weakness auditing',
      'Prioritized remediation roadmap with practical, easy-to-follow fixes'
    ],
    processSteps: [
      { title: 'Discovery Scan', description: 'Mapping IP addresses, services, and OS versions.' },
      { title: 'Vulnerability Analysis', description: 'Correlating findings with CVE security databases.' },
      { title: 'Debriefing Meeting', description: 'Explaining results clearly to management.' }
    ],
    businessValue: [
      'Fix security holes before they can be exploited by ransomware gangs',
      'Gain clear, prioritized steps instead of guessing what needs fixing'
    ]
  },
  {
    id: 'srv-security-audits',
    slug: 'security-audits',
    title: 'Security Audits',
    titlePt: 'Auditorias de Segurança Informática',
    category: 'cybersecurity',
    categoryKey: 'cybersecurity',
    categoryIndex: '03',
    categoryLabel: { en: 'Cybersecurity Services', pt: 'Serviços de Cibersegurança' },
    shortDescription: 'In-depth review of IT security posture, access controls, password policies, and data handling workflows.',
    shortDescriptionPt: 'Revisão profunda da postura de segurança, controlo de acessos, políticas de passwords e proteção de dados.',
    fullDescription: 'A complete evaluation of how your company handles passwords, employee access permissions, backups, cloud tools, and physical security, aligned with industry best practices.',
    iconName: 'FileCheck',
    deliveryModes: ['On-Site', 'Remote'],
    turnaroundTime: { en: '3–5 Business Days', pt: '3–5 Dias Úteis' },
    deliverables: {
      en: ['Comprehensive audit report', 'Risk assessment matrix', 'Actionable compliance roadmap'],
      pt: ['Relatório de auditoria completo', 'Matriz de avaliação de risco', 'Plano de ação para conformidade']
    },
    capabilities: [
      'Active Directory / Microsoft 365 user permission and admin privilege review',
      'Backup reliability and disaster recovery test verification',
      'Physical security review of server rooms and network cabinets',
      'Compliance check for GDPR / RGPD technical data protection safeguards'
    ],
    processSteps: [
      { title: 'Information Gathering', description: 'Reviewing systems, user lists, and IT policies.' },
      { title: 'Technical Inspection', description: 'Auditing system configurations and access logs.' },
      { title: 'Report Delivery', description: 'Delivering findings and practical roadmap.' }
    ],
    businessValue: [
      'Understand your true cybersecurity risks with an objective, expert assessment',
      'Satisfy compliance requirements for corporate clients, tenders, and insurers'
    ],
    featured: true
  },
  {
    id: 'srv-security-monitoring',
    slug: 'security-monitoring',
    title: 'Security Monitoring (SOC / SIEM)',
    titlePt: 'Monitorização Contínua de Segurança',
    category: 'cybersecurity',
    categoryKey: 'cybersecurity',
    categoryIndex: '03',
    categoryLabel: { en: 'Cybersecurity Services', pt: 'Serviços de Cibersegurança' },
    shortDescription: 'Continuous threat detection and log analysis to identify suspicious behavior before breaches occur.',
    shortDescriptionPt: 'Deteção contínua de ameaças e análise de logs para identificar comportamentos suspeitos antes de intrusões.',
    fullDescription: 'We aggregate and analyze security logs from your firewalls, servers, and computers to detect abnormal login attempts, brute-force attacks, and unauthorized data access in real time.',
    iconName: 'Activity',
    deliveryModes: ['Remote'],
    turnaroundTime: { en: 'Continuous 24/7', pt: 'Contínuo 24/7' },
    deliverables: {
      en: ['Real-time suspicious login alerts', 'Automated IP blacklisting', 'Monthly security digest'],
      pt: ['Alertas em tempo real de acessos suspeitos', 'Bloqueio automático de IPs maliciosos', 'Resumo mensal de segurança']
    },
    capabilities: [
      'Centralized event log correlation and brute-force detection',
      'Abnormal off-hours login alerts and impossible travel alerts',
      'Automated quarantine of compromised user accounts',
      'Direct integration with firewall rules for immediate IP bans'
    ],
    processSteps: [
      { title: 'Log Ingestion Setup', description: 'Routing audit logs from servers and firewalls.' },
      { title: 'Correlation Rules', description: 'Setting alert triggers for high-risk activity.' },
      { title: 'Active Watch', description: 'Reviewing flagged alerts and taking immediate containment actions.' }
    ],
    businessValue: [
      'Catch intrusions within minutes instead of months after data is stolen',
      'Peace of mind knowing security logs are monitored by professionals'
    ]
  },
  {
    id: 'srv-ransomware-protection',
    slug: 'ransomware-protection',
    title: 'Ransomware Protection',
    titlePt: 'Proteção contra Ransomware',
    category: 'cybersecurity',
    categoryKey: 'cybersecurity',
    categoryIndex: '03',
    categoryLabel: { en: 'Cybersecurity Services', pt: 'Serviços de Cibersegurança' },
    shortDescription: 'Immutable backup safeguards, behavioral encryption blocking, and rapid containment protocols.',
    shortDescriptionPt: 'Cópias de segurança imutáveis, bloqueio comportamental de encriptação e isolamento rápido contra ransomware.',
    fullDescription: 'We protect your business from catastrophic extortion malware with multi-layered defenses: behavioral blocking on PCs, write-protected immutable backups, and instant machine isolation.',
    iconName: 'Lock',
    deliveryModes: ['Remote', 'On-Site'],
    turnaroundTime: { en: '1–2 Business Days', pt: '1–2 Dias Úteis' },
    deliverables: {
      en: ['Immutable air-gapped backup setup', 'Ransomware behavioral blocker', 'Emergency recovery playbook'],
      pt: ['Backups imutáveis à prova de apagamento', 'Bloqueador comportamental de ransomware', 'Manual de recuperação de emergência']
    },
    capabilities: [
      'Write Once Read Many (WORM) immutable backups that hackers cannot delete or encrypt',
      'Real-time honeypot canary files that trigger instant process killing if tampered with',
      'Shadow copy protection and volume recovery script automation',
      'Server-side volume lock to prevent infected client PCs from corrupting file shares'
    ],
    processSteps: [
      { title: 'Risk Assessment', description: 'Identifying shared drives and critical company databases.' },
      { title: 'Immutable Backup Setup', description: 'Configuring encrypted offline/cloud snapshot replication.' },
      { title: 'Recovery Simulation', description: 'Testing a full restore from immutable backup to confirm zero loss.' }
    ],
    businessValue: [
      'Guaranteed ability to restore your files without ever paying a ransom',
      'Protect your business reputation from disastrous operational shutdowns'
    ],
    featured: true
  },
  {
    id: 'srv-email-security',
    slug: 'email-security',
    title: 'Email Security & Anti-Phishing',
    titlePt: 'Segurança de Email & Anti-Phishing',
    category: 'cybersecurity',
    categoryKey: 'cybersecurity',
    categoryIndex: '03',
    categoryLabel: { en: 'Cybersecurity Services', pt: 'Serviços de Cibersegurança' },
    shortDescription: 'Spam filtering, SPF / DKIM / DMARC authentication, and malicious attachment sandboxing.',
    shortDescriptionPt: 'Filtro anti-spam, autenticação SPF / DKIM / DMARC e proteção contra anexos e links maliciosos.',
    fullDescription: 'Over 90% of cyber attacks start with email. We configure advanced filtering and email authentication protocols for Microsoft 365 and Google Workspace to block fake invoices and phishing links.',
    iconName: 'Mail',
    deliveryModes: ['Remote'],
    turnaroundTime: { en: 'Same-day Setup', pt: 'Ativação no Próprio Dia' },
    deliverables: {
      en: ['DMARC / SPF / DKIM DNS configuration', 'Inbound malicious link re-writing', 'Spoofing defense policy'],
      pt: ['Configuração DNS de SPF, DKIM e DMARC', 'Proteção de links em tempo real', 'Bloqueio de falsificação de identidade']
    },
    capabilities: [
      'Full DMARC "reject" policy implementation to prevent criminals from spoofing your domain name',
      'Zero-hour attachment sandboxing (opening attachments in safe cloud containers before delivery)',
      'Display name spoofing protection to block fake "CEO / CFO" wire transfer requests',
      'Automatic warning banners on external emails with lookalike domains'
    ],
    processSteps: [
      { title: 'Domain DNS Audit', description: 'Checking existing MX, SPF, and DKIM records.' },
      { title: 'Security Policy Tuning', description: 'Applying strict anti-phishing and spam rules.' },
      { title: 'DMARC Monitoring', description: 'Reviewing DMARC aggregate reports to confirm 100% legitimate deliverability.' }
    ],
    businessValue: [
      'Prevent your company and suppliers from falling victim to fake invoice scams',
      'Improve deliverability so your emails never land in client spam folders'
    ]
  },
  {
    id: 'srv-phishing-awareness',
    slug: 'phishing-awareness',
    title: 'Phishing Awareness Training',
    titlePt: 'Formação e Sensibilização Anti-Phishing',
    category: 'cybersecurity',
    categoryKey: 'cybersecurity',
    categoryIndex: '03',
    categoryLabel: { en: 'Cybersecurity Services', pt: 'Serviços de Cibersegurança' },
    shortDescription: 'Simulated phishing tests and short interactive training to turn your employees into an alert human firewall.',
    shortDescriptionPt: 'Testes simulados de phishing e formação prática para transformar os seus colaboradores numa defesa ativa.',
    fullDescription: 'We send realistic simulated phishing emails to your team to measure susceptibility, followed by short, friendly micro-training modules that teach staff how to spot fake emails safely.',
    iconName: 'Users',
    deliveryModes: ['Remote'],
    turnaroundTime: { en: 'Monthly Campaigns', pt: 'Campanhas Mensais' },
    deliverables: {
      en: ['Controlled simulation campaign', 'Company risk score dashboard', 'Interactive training modules in Portuguese/English'],
      pt: ['Campanha de simulação controlada', 'Painel de avaliação de risco', 'Módulos interativos em Português e Inglês']
    },
    capabilities: [
      'Safe simulated phishing scenarios tailored to Portuguese business contexts',
      'Instant "teachable moment" feedback when an employee clicks a test link',
      'Executive reporting on department click rates and training completion',
      'One-click "Report Phishing" button integration in Outlook'
    ],
    processSteps: [
      { title: 'Campaign Design', description: 'Selecting realistic phishing templates.' },
      { title: 'Safe Simulation', description: 'Sending test emails over a 2-week window.' },
      { title: 'Results & Coaching', description: 'Reviewing metrics and providing bite-sized coaching.' }
    ],
    businessValue: [
      'Drastically reduce the likelihood of employees clicking dangerous links',
      'Create a security-conscious workplace culture without punishing staff'
    ]
  },
  {
    id: 'srv-security-hardening',
    slug: 'security-hardening',
    title: 'Security Hardening',
    titlePt: 'Endurecimento de Segurança (Hardening)',
    category: 'cybersecurity',
    categoryKey: 'cybersecurity',
    categoryIndex: '03',
    categoryLabel: { en: 'Cybersecurity Services', pt: 'Serviços de Cibersegurança' },
    shortDescription: 'Locking down operating systems, disabling risky protocols, enforcing Multi-Factor Authentication (MFA).',
    shortDescriptionPt: 'Desativação de protocolos vulneráveis, aplicação de MFA e reforço de segurança em servidores e PCs.',
    fullDescription: 'We systematically apply CIS Benchmark hardening standards to Windows, macOS, and Linux servers: disabling legacy protocols, enforcing disk encryption, and configuring strict user permissions.',
    iconName: 'CheckCircle2',
    deliveryModes: ['Remote', 'On-Site'],
    turnaroundTime: { en: '1–2 Business Days', pt: '1–2 Dias Úteis' },
    deliverables: {
      en: ['BitLocker / FileVault full disk encryption', 'Enforced MFA across all logins', 'Hardened Group Policy (GPO) template'],
      pt: ['Encriptação total de disco com BitLocker', 'MFA obrigatório em todos os acessos', 'Modelo de políticas de grupo (GPO) seguras']
    },
    capabilities: [
      'Enforcing Multi-Factor Authentication (MFA) on Microsoft 365, Google Workspace, and VPNs',
      'BitLocker full-disk encryption with centralized TPM recovery key backup',
      'Disabling legacy SMBv1, NTLMv1, and unencrypted Telnet/HTTP protocols',
      'Least-privilege permission structure removing admin rights from everyday user accounts'
    ],
    processSteps: [
      { title: 'Baseline Audit', description: 'Reviewing existing account privileges and encryption status.' },
      { title: 'Policy Application', description: 'Pushing security hardening templates via Group Policy / Intune.' },
      { title: 'Verification', description: 'Confirming smooth application operation under hardened policies.' }
    ],
    businessValue: [
      'Lost or stolen employee laptops cannot be accessed or read by thieves',
      'Block 99% of automated credential stuffing attacks with mandatory MFA'
    ]
  },
  {
    id: 'srv-incident-response',
    slug: 'incident-response',
    title: 'Incident Response & Recovery',
    titlePt: 'Resposta a Incidentes de Segurança',
    category: 'cybersecurity',
    categoryKey: 'cybersecurity',
    categoryIndex: '03',
    categoryLabel: { en: 'Cybersecurity Services', pt: 'Serviços de Cibersegurança' },
    shortDescription: 'Emergency containment, forensic investigation, and rapid system recovery in the event of a security incident.',
    shortDescriptionPt: 'Contenção de emergência, investigação forense e recuperação rápida de sistemas após um ataque informático.',
    fullDescription: 'If you suspect a virus outbreak, unauthorized access, or account takeover, our emergency response team takes immediate action to isolate the threat, stop data leaks, and restore operations safely.',
    iconName: 'AlertTriangle',
    deliveryModes: ['Emergency SLA', 'On-Site', 'Remote'],
    turnaroundTime: { en: 'Emergency 1–2h Response', pt: 'Resposta Urgente 1–2h' },
    deliverables: {
      en: ['Immediate threat containment', 'Root-cause forensic analysis', 'Safe clean recovery from backup'],
      pt: ['Contenção imediata da ameaça', 'Análise forense da causa raiz', 'Recuperação limpa a partir de backup']
    },
    capabilities: [
      'Emergency network disconnection and infected host isolation',
      'Memory artifact extraction and malicious persistence removal',
      'Safe recovery of database servers and file shares from clean backups',
      'Formal incident documentation for management, legal, and GDPR notification obligations'
    ],
    processSteps: [
      { title: 'Triage & Isolation', description: 'Severing attacker communication channels.' },
      { title: 'Eradication', description: 'Removing backdoors and compromised credentials.' },
      { title: 'Restoration & Lessons Learned', description: 'Restoring clean data and sealing entry vectors.' }
    ],
    businessValue: [
      'Minimize financial damage and downtime during a crisis',
      'Ensure the attacker is completely removed before resuming operations'
    ]
  },
  {
    id: 'srv-it-security-consulting',
    slug: 'it-security-consulting',
    title: 'IT Security Consulting',
    titlePt: 'Consultoria Estratégica de Cibersegurança',
    category: 'cybersecurity',
    categoryKey: 'cybersecurity',
    categoryIndex: '03',
    categoryLabel: { en: 'Cybersecurity Services', pt: 'Serviços de Cibersegurança' },
    shortDescription: 'Strategic advisory for SME business owners on cybersecurity architecture, risk management, and IT roadmap.',
    shortDescriptionPt: 'Aconselhamento estratégico para gestores sobre arquitetura de segurança, gestão de risco e plano de TI.',
    fullDescription: 'We translate complex cybersecurity concepts into clear, actionable business decisions. We help you invest in the right protections, budget sensibly, and build a dependable IT roadmap.',
    iconName: 'Compass',
    deliveryModes: ['Remote', 'On-Site'],
    turnaroundTime: { en: 'Scheduled Consultation', pt: 'Reunião Agendada' },
    deliverables: {
      en: ['1-on-1 executive advisory', 'IT security budget roadmap', 'Vendor & software assessment'],
      pt: ['Aconselhamento executivo direto', 'Plano de investimento em cibersegurança', 'Avaliação de fornecedores e software']
    },
    capabilities: [
      'Virtual CISO (vCISO) advisory for small and medium-sized businesses',
      'Third-party software and cloud vendor risk evaluation',
      'Business continuity planning and Disaster Recovery (DR) design',
      'Cyber insurance policy review and technical compliance alignment'
    ],
    processSteps: [
      { title: 'Discovery Session', description: 'Discussing business goals, budget, and risk tolerance.' },
      { title: 'Strategy Blueprint', description: 'Drafting clear, cost-effective security recommendations.' },
      { title: 'Quarterly Reviews', description: 'Tracking progress and adjusting priorities as the business grows.' }
    ],
    businessValue: [
      'Make confident IT investment decisions without overspending on unnecessary tools',
      'Access senior security expertise without paying a six-figure executive salary'
    ]
  },

  // ==========================================
  // 04. Server & Storage Services (10 Services)
  // ==========================================
  {
    id: 'srv-server-installation',
    slug: 'server-installation',
    title: 'Server Installation',
    titlePt: 'Instalação Física de Servidores',
    category: 'servers-storage',
    categoryKey: 'servers-storage',
    categoryIndex: '04',
    categoryLabel: { en: 'Server & Storage Services', pt: 'Servidores & Armazenamento' },
    shortDescription: 'Physical rack mounting, redundant power wiring, and initial hardware initialization of enterprise servers.',
    shortDescriptionPt: 'Montagem em bastidor, ligação elétrica redundante e inicialização física de servidores empresariais.',
    fullDescription: 'We install 1U/2U rack servers (Dell PowerEdge, HPE ProLiant) and pedestal tower servers with certified sliding rail kits, dual power supply cabling, and organized cable management arms.',
    iconName: 'Server',
    deliveryModes: ['On-Site'],
    turnaroundTime: { en: '1–2 Business Days', pt: '1–2 Dias Úteis' },
    deliverables: {
      en: ['Sliding rail installation', 'Dual PDU power redundancy setup', 'Hardware burn-in test pass'],
      pt: ['Instalação de calhas deslizantes', 'Ligação a PDUs redundantes', 'Teste de carga de hardware aprovado']
    },
    capabilities: [
      'Rack mounting Dell PowerEdge R640/R740 and HPE ProLiant DL360/DL380 servers',
      'Redundant power supply cabling connected to isolated UPS power circuits',
      'Thermal airflow optimization and clean rear cable arm dressing',
      'Out-of-band management configuration (Dell iDRAC, HPE iLO)'
    ],
    processSteps: [
      { title: 'Rack Preparation', description: 'Allocating RU space and installing heavy-duty rails.' },
      { title: 'Server Seating', description: 'Mounting chassis and connecting redundant power cords.' },
      { title: 'POST Verification', description: 'Checking hardware sensor readouts and cooling fans.' }
    ],
    businessValue: [
      'Ensure physical stability and proper server room cooling for 24/7 continuous operation',
      'Zero downtime from power fluctuations with dual redundant PSU wiring'
    ],
    featured: true
  },
  {
    id: 'srv-server-configuration',
    slug: 'server-configuration',
    title: 'Server Configuration',
    titlePt: 'Configuração de Servidores & RAID',
    category: 'servers-storage',
    categoryKey: 'servers-storage',
    categoryIndex: '04',
    categoryLabel: { en: 'Server & Storage Services', pt: 'Servidores & Armazenamento' },
    shortDescription: 'BIOS/iDRAC/iLO tuning, hardware RAID array provisioning, network bonding, and hypervisor setup.',
    shortDescriptionPt: 'Ajuste de BIOS/iDRAC/iLO, criação de arrays RAID, agregação de rede e instalação de sistema.',
    fullDescription: 'We configure low-level hardware RAID controllers (RAID 1, 5, 6, 10), allocate Hot Spare drives, update controller firmware, and configure out-of-band management for remote server control.',
    iconName: 'Sliders',
    deliveryModes: ['On-Site', 'Remote'],
    turnaroundTime: { en: '1 Business Day', pt: '1 Dia Útil' },
    deliverables: {
      en: ['Hardware RAID array initialization', 'iDRAC/iLO remote console setup', 'Memory & disk health telemetry'],
      pt: ['Inicialização de array RAID', 'Configuração de consola remota iDRAC/iLO', 'Telemetria de saúde de discos e RAM']
    },
    capabilities: [
      'Hardware RAID 1/5/6/10 creation with automatic Hot Spare failover',
      'Dedicated iDRAC / iLO remote management setup with SSL certificates',
      'Network card link aggregation (LACP) for multi-gigabit throughput',
      'Firmware updating for BIOS, RAID controller, and drive microcode'
    ],
    processSteps: [
      { title: 'RAID Array Creation', description: 'Formatting drives into redundant disk virtual pools.' },
      { title: 'Out-of-band Config', description: 'Setting static IP and credentials for remote management.' },
      { title: 'Stress Benchmark', description: 'Validating disk I/O throughput and cache performance.' }
    ],
    businessValue: [
      'Protect all company files from drive failures with hardware RAID mirroring',
      'Access and reboot the server remotely even if the operating system crashes'
    ]
  },
  {
    id: 'srv-server-deployment',
    slug: 'server-deployment',
    title: 'Server Deployment (Windows & Linux)',
    titlePt: 'Implementação de Servidores (Windows & Linux)',
    category: 'servers-storage',
    categoryKey: 'servers-storage',
    categoryIndex: '04',
    categoryLabel: { en: 'Server & Storage Services', pt: 'Servidores & Armazenamento' },
    shortDescription: 'Windows Server & Linux deployment: Active Directory, Domain Controller, file sharing, and ERP databases.',
    shortDescriptionPt: 'Instalação de Windows Server e Linux: Active Directory, controlador de domínio, partilha de ficheiros e ERPs.',
    fullDescription: 'We deploy Windows Server 2022/2025 and Ubuntu/Debian/Rocky Linux servers, setting up Active Directory Domain Services, user permissions, DNS/DHCP, and business database environments.',
    iconName: 'Server',
    deliveryModes: ['On-Site', 'Remote'],
    turnaroundTime: { en: '2–3 Business Days', pt: '2–3 Dias Úteis' },
    deliverables: {
      en: ['Active Directory Domain Controller', 'Centralized file share permissions', 'SQL Server / PostgreSQL backend setup'],
      pt: ['Controlador de Domínio Active Directory', 'Permissões de partilhas de rede centralizadas', 'Base de dados SQL Server / PostgreSQL']
    },
    capabilities: [
      'Active Directory Domain Services (AD DS) and Group Policy (GPO) deployment',
      'Centralized file sharing with granular NTFS department permissions',
      'SQL Server, MySQL, and PostgreSQL database installation and tuning for ERPs',
      'Remote Desktop Services (RDS / Terminal Server) for multi-user application hosting'
    ],
    processSteps: [
      { title: 'OS Installation', description: 'Installing licensed Windows Server or Enterprise Linux.' },
      { title: 'Role Configuration', description: 'Configuring Domain Controller, DNS, and file services.' },
      { title: 'User & Permission Migration', description: 'Setting up user accounts and department folders.' }
    ],
    businessValue: [
      'One central login for all office computers and files',
      'Restrict sensitive financial and HR folders so only authorized staff can access them'
    ],
    featured: true
  },
  {
    id: 'srv-nas-setup',
    slug: 'nas-setup',
    title: 'NAS Setup & Storage Solutions',
    titlePt: 'Instalação e Configuração de Storage NAS',
    category: 'servers-storage',
    categoryKey: 'servers-storage',
    categoryIndex: '04',
    categoryLabel: { en: 'Server & Storage Services', pt: 'Servidores & Armazenamento' },
    shortDescription: 'Synology, QNAP, and TrueNAS deployment for fast, centralized, multi-user office file access and sharing.',
    shortDescriptionPt: 'Instalação de NAS Synology, QNAP e TrueNAS para partilha centralizada e rápida de ficheiros no escritório.',
    fullDescription: 'We install multi-bay NAS storage units with high-end enterprise drives, configuring automatic snapshots, user permissions, and remote access so your team can share files effortlessly.',
    iconName: 'HardDrive',
    deliveryModes: ['On-Site', 'Remote'],
    turnaroundTime: { en: '1–2 Business Days', pt: '1–2 Dias Úteis' },
    deliverables: {
      en: ['Synology / TrueNAS RAID pool', 'Department shared folders & quotas', 'Automatic hourly snapshots'],
      pt: ['Pool RAID em Synology / TrueNAS', 'Pastas partilhadas por departamento e quotas', 'Snapshots horários automáticos']
    },
    capabilities: [
      'Synology DSM and TrueNAS CORE/SCALE deployment',
      'Btrfs / ZFS file system with automatic silent data corruption self-healing',
      'Synology Drive private cloud for secure remote file access without subscription fees',
      'Direct mapping of network drives (Z: drive) to all office computers'
    ],
    processSteps: [
      { title: 'Drive Array Setup', description: 'Installing enterprise NAS drives in SHR / RAID 5 configuration.' },
      { title: 'Shared Folder Setup', description: 'Creating folders for Sales, Accounting, Production, and Management.' },
      { title: 'PC Integration', description: 'Automapping drives on employee computers via login script.' }
    ],
    businessValue: [
      'Stop paying expensive monthly cloud subscription fees for simple office file sharing',
      'Lightning-fast access to large files, CAD drawings, and spreadsheets over the local network'
    ],
    featured: true
  },
  {
    id: 'srv-storage-configuration',
    slug: 'storage-configuration',
    title: 'Storage Configuration & Expansion',
    titlePt: 'Configuração e Expansão de Armazenamento',
    category: 'servers-storage',
    categoryKey: 'servers-storage',
    categoryIndex: '04',
    categoryLabel: { en: 'Server & Storage Services', pt: 'Servidores & Armazenamento' },
    shortDescription: 'RAID 1/5/6/10 expansion, NVMe caching pools, storage tiering, and snapshot schedules.',
    shortDescriptionPt: 'Expansão de arrays RAID, aceleração por cache NVMe, tiering de dados e políticas de snapshots.',
    fullDescription: 'Running out of server space? We add expansion drives, configure high-speed NVMe SSD read/write caches, and migrate storage pools with zero downtime.',
    iconName: 'Database',
    deliveryModes: ['On-Site', 'Remote'],
    turnaroundTime: { en: '1–2 Business Days', pt: '1–2 Dias Úteis' },
    deliverables: {
      en: ['Non-destructive storage expansion', 'NVMe SSD cache configuration', 'I/O throughput benchmark'],
      pt: ['Expansão de storage sem perda de dados', 'Configuração de cache SSD NVMe', 'Benchmark de velocidade de leitura/escrita']
    },
    capabilities: [
      'Expanding existing RAID 5 / RAID 6 arrays with additional drives without formatting',
      'NVMe read-write SSD cache pools to accelerate database query speeds',
      'iSCSI LUN provisioning for virtual machine datastores',
      'Data deduplication and filesystem compression to save storage space'
    ],
    processSteps: [
      { title: 'Pre-expansion Backup', description: 'Taking a full snapshot before touching disk pools.' },
      { title: 'Drive Insertion & Rebuild', description: 'Adding drives and expanding logical volume.' },
      { title: 'Filesystem Extension', description: 'Extending partition size in Windows/Linux live.' }
    ],
    businessValue: [
      'Seamlessly grow your storage as your business accumulates more data',
      'Boost database and ERP response times with fast NVMe caching'
    ]
  },
  {
    id: 'srv-backup-setup',
    slug: 'backup-setup',
    title: 'Backup Setup (3-2-1 Strategy)',
    titlePt: 'Implementação de Backups (Estratégia 3-2-1)',
    category: 'servers-storage',
    categoryKey: 'servers-storage',
    categoryIndex: '04',
    categoryLabel: { en: 'Server & Storage Services', pt: 'Servidores & Armazenamento' },
    shortDescription: '3-2-1 backup architecture implementation: 3 copies of data, 2 different media, 1 secure off-site copy.',
    shortDescriptionPt: 'Implementação da estratégia de backup 3-2-1: 3 cópias, 2 suportes distintos e 1 cópia externa segura.',
    fullDescription: 'We implement an industry-standard 3-2-1 backup solution using Veeam, Synology Active Backup, or Proxmox Backup Server, ensuring your company can recover from hardware failure, fire, or ransomware.',
    iconName: 'ShieldCheck',
    deliveryModes: ['On-Site', 'Remote'],
    turnaroundTime: { en: '1–2 Business Days', pt: '1–2 Dias Úteis' },
    deliverables: {
      en: ['Local high-speed repository', 'Encrypted off-site cloud replication', 'Automated daily backup schedule'],
      pt: ['Repositório local de alta velocidade', 'Replicação segura na cloud fora do escritório', 'Agendamento automático diário']
    },
    capabilities: [
      'Image-level bare-metal server backups and virtual machine snapshots',
      '3-2-1 rule implementation with immutable cloud storage (Wasabi / AWS S3 Object Lock)',
      'Deduplication and compression to minimize storage requirements',
      'Veeam Backup & Replication and Synology Active Backup for Business'
    ],
    processSteps: [
      { title: 'Data Inventory', description: 'Identifying all critical servers, databases, and user folders.' },
      { title: 'Repository Setup', description: 'Connecting local backup appliance and off-site cloud bucket.' },
      { title: 'Initial Full Backup', description: 'Seeding the first baseline backup image.' }
    ],
    businessValue: [
      'The ultimate insurance policy for your business data',
      'Recover full servers in under 30 minutes in case of hardware disaster'
    ],
    featured: true
  },
  {
    id: 'srv-backup-configuration',
    slug: 'backup-configuration',
    title: 'Backup Configuration & Automation',
    titlePt: 'Configuração e Automação de Cópias de Segurança',
    category: 'servers-storage',
    categoryKey: 'servers-storage',
    categoryIndex: '04',
    categoryLabel: { en: 'Server & Storage Services', pt: 'Servidores & Armazenamento' },
    shortDescription: 'Automated incremental backups, database dumps, retention policies, and daily success verification emails.',
    shortDescriptionPt: 'Backups incrementais automáticos, exportação de bases de dados, retenção e relatórios diários de sucesso.',
    fullDescription: 'We set up automated incremental backup schedules that run silently after business hours, with email notifications sent to our engineers every morning to verify that every backup succeeded.',
    iconName: 'RefreshCw',
    deliveryModes: ['Remote'],
    turnaroundTime: { en: '1 Business Day', pt: '1 Dia Útil' },
    deliverables: {
      en: ['Automated night schedules', 'Grandfather-Father-Son (GFS) retention rules', 'Daily email verification reports'],
      pt: ['Agendamento noturno automático', 'Políticas de retenção GFS (diária/mensal/anual)', 'Relatórios diários por email']
    },
    capabilities: [
      'Granular retention policies: 30 daily, 12 monthly, and 7 yearly restore points',
      'Application-aware SQL Server and PostgreSQL database transactional dumps',
      'Microsoft 365 cloud-to-cloud backup for Outlook emails, SharePoint, and OneDrive',
      'Automated health check verification script alerting technicians if a backup is missed'
    ],
    processSteps: [
      { title: 'Schedule Definition', description: 'Setting off-peak backup windows.' },
      { title: 'Retention Configuration', description: 'Configuring automated deletion of aged backup archives.' },
      { title: 'Notification Testing', description: 'Confirming email alert delivery on success and warning.' }
    ],
    businessValue: [
      'Zero manual effort required by your office staff: backups run 100% automatically',
      'Protect historical financial records for 7+ years to comply with tax audit regulations'
    ]
  },
  {
    id: 'srv-server-maintenance',
    slug: 'server-maintenance',
    title: 'Server Maintenance & Patching',
    titlePt: 'Manutenção e Atualização de Servidores',
    category: 'servers-storage',
    categoryKey: 'servers-storage',
    categoryIndex: '04',
    categoryLabel: { en: 'Server & Storage Services', pt: 'Servidores & Armazenamento' },
    shortDescription: 'Scheduled firmware patching, OS security updates, hardware cleaning, and proactive drive health tests.',
    shortDescriptionPt: 'Manutenção periódica de firmware, atualizações de segurança do SO, limpeza física e testes de saúde.',
    fullDescription: 'Regular maintenance keeps your servers reliable and secure. We install operating system patches, update RAID firmware, vacuum internal dust filters, and test UPS battery runtime during planned off-hours maintenance windows.',
    iconName: 'Wrench',
    deliveryModes: ['On-Site', 'Remote'],
    turnaroundTime: { en: 'Scheduled Monthly/Quarterly', pt: 'Agendamento Mensal/Trimestral' },
    deliverables: {
      en: ['OS & hypervisor patch deployment', 'Hardware sensor & fan audit', 'SMART drive wear analysis'],
      pt: ['Instalação de patches de segurança', 'Auditoria de sensores e ventoinhas', 'Análise de desgaste SMART de discos']
    },
    capabilities: [
      'Planned off-hours patching with zero impact on working hours',
      'Firmware updating for Dell Lifecycle Controller, HPE Service Pack for ProLiant (SPP)',
      'Predictive drive failure detection: replacing degraded disks before they drop offline',
      'UPS battery load testing to ensure backup batteries hold sufficient runtime'
    ],
    processSteps: [
      { title: 'Pre-patch Snapshot', description: 'Taking full restore points before updating.' },
      { title: 'Update Execution', description: 'Installing security patches and BIOS/firmware updates.' },
      { title: 'Post-boot Service Verification', description: 'Testing database connections and ERP availability.' }
    ],
    businessValue: [
      'Prevent unexpected server breakdowns during busy work weeks',
      'Keep servers protected against newly discovered operating system vulnerabilities'
    ]
  },
  {
    id: 'srv-server-troubleshooting',
    slug: 'server-troubleshooting',
    title: 'Server Troubleshooting & Recovery',
    titlePt: 'Diagnóstico e Recuperação de Servidores',
    category: 'servers-storage',
    categoryKey: 'servers-storage',
    categoryIndex: '04',
    categoryLabel: { en: 'Server & Storage Services', pt: 'Servidores & Armazenamento' },
    shortDescription: 'Emergency diagnostics and rapid recovery for degraded RAID arrays, boot errors, and server interruptions.',
    shortDescriptionPt: 'Diagnóstico de emergência e recuperação rápida para arrays RAID degradados, erros de arranque e falhas.',
    fullDescription: 'When a critical server fails to boot, a RAID controller reports degraded status, or a virtual machine crashes, our senior server engineers respond immediately to restore your data and services.',
    iconName: 'AlertTriangle',
    deliveryModes: ['Emergency SLA', 'On-Site', 'Remote'],
    turnaroundTime: { en: 'Priority 1–2h Response', pt: 'Resposta Prioritária 1–2h' },
    deliverables: {
      en: ['Emergency on-site technician dispatch', 'Degraded RAID hot-rebuild', 'Data integrity verification'],
      pt: ['Deslocação de emergência de técnico', 'Reconstrução de array RAID degradado', 'Verificação de integridade de dados']
    },
    capabilities: [
      'RAID array rebuild and replacement of degraded SAS/SATA/NVMe drives',
      'Corrupted Windows Server BCD bootloader and Linux GRUB recovery',
      'Virtual machine disk (.vmdk / .qcow2) filesystem repair',
      'Emergency migration of virtual machines to standby hardware'
    ],
    processSteps: [
      { title: 'Emergency Intake', description: 'Immediate remote diagnostic or on-site dispatch.' },
      { title: 'Safe Recovery Action', description: 'Replacing failed drives and triggering RAID rebuild.' },
      { title: 'Data Consistency Check', description: 'Confirming database integrity and resuming business operations.' }
    ],
    businessValue: [
      'Fastest possible recovery when your primary business server stops working',
      'Direct access to senior server specialists who understand enterprise storage'
    ]
  },
  {
    id: 'srv-virtualization-setup',
    slug: 'virtualization-setup',
    title: 'Virtualization Setup (Proxmox / VMware / Hyper-V)',
    titlePt: 'Virtualização de Servidores (Proxmox / VMware / Hyper-V)',
    category: 'servers-storage',
    categoryKey: 'servers-storage',
    categoryIndex: '04',
    categoryLabel: { en: 'Server & Storage Services', pt: 'Servidores & Armazenamento' },
    shortDescription: 'Consolidate multiple physical servers into virtual machines with Proxmox VE, VMware ESXi, or Microsoft Hyper-V.',
    shortDescriptionPt: 'Consolidação de múltiplos servidores físicos em máquinas virtuais com Proxmox VE, VMware ou Hyper-V.',
    fullDescription: 'Instead of buying separate physical servers for accounting, files, and web apps, virtualization lets you run multiple independent servers on a single powerful hardware machine, saving energy and hardware costs.',
    iconName: 'Layers',
    deliveryModes: ['On-Site', 'Remote'],
    turnaroundTime: { en: '2–3 Business Days', pt: '2–3 Dias Úteis' },
    deliverables: {
      en: ['Enterprise hypervisor installation', 'Physical-to-Virtual (P2V) migration', 'Virtual networking & snapshots setup'],
      pt: ['Instalação de hypervisor empresarial', 'Migração físico-para-virtual (P2V)', 'Configuração de switches virtuais e snapshots']
    },
    capabilities: [
      'Proxmox VE, VMware ESXi, and Microsoft Hyper-V hypervisor installation',
      'Physical to Virtual (P2V) seamless migration of existing aging physical servers',
      'Instant VM snapshots before major software upgrades (one-click rollback)',
      'High-availability clustering and shared storage integration'
    ],
    processSteps: [
      { title: 'Workload Sizing', description: 'Calculating CPU cores, RAM, and SSD storage requirements.' },
      { title: 'Hypervisor Deployment', description: 'Installing Proxmox / ESXi with ZFS / RAID datastores.' },
      { title: 'VM Migration', description: 'Migrating physical workloads into clean virtual machines.' }
    ],
    businessValue: [
      'Cut server hardware costs and electricity bills by up to 60%',
      'Take instant snapshots before updating software so you can roll back with one click if anything breaks'
    ]
  },

  // ==========================================
  // 05. IT Asset Recovery & Buyback (7 Services)
  // ==========================================
  {
    id: 'srv-it-equipment-buyback',
    slug: 'it-equipment-buyback',
    title: 'IT Equipment Buyback',
    titlePt: 'Compra e Retoma de Equipamento Informático',
    category: 'asset-recovery',
    categoryKey: 'asset-recovery',
    categoryIndex: '05',
    categoryLabel: { en: 'IT Asset Recovery & Buyback', pt: 'Retoma de Equipamento & Dados' },
    shortDescription: 'Fair-market valuation and fast payment for surplus business laptops, desktops, and servers.',
    shortDescriptionPt: 'Avaliação justa de mercado e pagamento rápido por portáteis, desktops e servidores empresariais em desuso.',
    fullDescription: 'Turn your company unused or decommissioned computers into working capital. We purchase used business-grade laptops, desktops, and servers from top brands (Dell, HP, Lenovo, Apple).',
    iconName: 'Coins',
    deliveryModes: ['On-Site', 'Workshop Lab'],
    turnaroundTime: { en: 'Fast 48h Valuation', pt: 'Avaliação em 48h' },
    deliverables: {
      en: ['Itemized equipment valuation', 'Fast commercial payment', 'Official purchase agreement & invoice'],
      pt: ['Avaliação discriminada por equipamento', 'Pagamento comercial rápido', 'Contrato oficial de compra e fatura']
    },
    capabilities: [
      'Purchasing business laptops (Dell Latitude, Lenovo ThinkPad, HP EliteBook, Apple MacBook)',
      'Purchasing desktop towers, mini PCs, and workstations',
      'Purchasing 1U/2U rack servers, storage NAS, and networking switches',
      'Clear, transparent pricing based on real secondary market values'
    ],
    processSteps: [
      { title: 'Inventory Submission', description: 'Send us your list of equipment models and quantities.' },
      { title: 'Valuation Offer', description: 'We provide a clear, competitive financial buyback offer.' },
      { title: 'Collection & Payment', description: 'We collect the hardware and process prompt payment.' }
    ],
    businessValue: [
      'Recover budget from retired IT assets to fund new technology upgrades',
      'Free up valuable office storage space currently taken up by old equipment'
    ],
    featured: true
  },
  {
    id: 'srv-equipment-assessment',
    slug: 'equipment-assessment',
    title: 'Equipment Assessment & Grading',
    titlePt: 'Auditoria e Avaliação de Equipamentos',
    category: 'asset-recovery',
    categoryKey: 'asset-recovery',
    categoryIndex: '05',
    categoryLabel: { en: 'IT Asset Recovery & Buyback', pt: 'Retoma de Equipamento & Dados' },
    shortDescription: 'On-site or remote inventory grading, hardware specs auditing, and commercial value estimation.',
    shortDescriptionPt: 'Avaliação presencial ou remota do estado estético, especificações técnicas e valor comercial da sua frota.',
    fullDescription: 'Our technicians inspect your fleet of computers, testing components, checking battery health, and recording serial numbers to provide an accurate valuation report.',
    iconName: 'CheckCircle2',
    deliveryModes: ['On-Site', 'Workshop Lab'],
    turnaroundTime: { en: '24–48 Hours', pt: '24–48 Horas' },
    deliverables: {
      en: ['Comprehensive hardware manifest (Excel/PDF)', 'Grade A/B cosmetic classification', 'Component functionality scorecard'],
      pt: ['Inventário detalhado em Excel/PDF', 'Classificação estética Grade A/B', 'Ficha de funcionalidade por componente']
    },
    capabilities: [
      'Automated USB audit tool to extract CPU, RAM, SSD size, and battery cycles in 60 seconds',
      'Detailed cosmetic grading (Grade A+, Grade A, Grade B)',
      'Screen pixel check, keyboard testing, and chassis condition logging',
      'Serial number and asset tag reconciliation for company asset registers'
    ],
    processSteps: [
      { title: 'On-site Audit', description: 'Technician plugs audit drive into each device.' },
      { title: 'Data Compilation', description: 'Consolidating specs and serial numbers into a single register.' },
      { title: 'Report Delivery', description: 'Delivering the full audit sheet with market value per unit.' }
    ],
    businessValue: [
      'Know the exact technical condition and real value of your company fleet',
      'Simplify accounting asset registers with certified serial number logs'
    ]
  },
  {
    id: 'srv-bulk-it-equipment-buyback',
    slug: 'bulk-it-equipment-buyback',
    title: 'Bulk IT Equipment Buyback',
    titlePt: 'Retoma de Grandes Frotas Informáticas',
    category: 'asset-recovery',
    categoryKey: 'asset-recovery',
    categoryIndex: '05',
    categoryLabel: { en: 'IT Asset Recovery & Buyback', pt: 'Retoma de Equipamento & Dados' },
    shortDescription: 'Streamlined corporate decommissioning programs for enterprise fleets of 10 to 500+ machines.',
    shortDescriptionPt: 'Programa estruturado de desmantelamento e retoma para frotas empresariais de 10 a 500+ equipamentos.',
    fullDescription: 'When renewing your entire corporate computer fleet, we handle the entire decommissioning logistics: secure bulk packaging, insured pallet transport, data wiping, and bulk payment.',
    iconName: 'Building',
    deliveryModes: ['On-Site'],
    turnaroundTime: { en: 'Tailored Enterprise Timeline', pt: 'Cronograma Empresarial à Medida' },
    deliverables: {
      en: ['Fleet decommissioning plan', 'Insured logistics & transport', 'Consolidated financial settlement'],
      pt: ['Plano de desmantelamento de frota', 'Transporte e logística com seguro', 'Liquidação financeira consolidada']
    },
    capabilities: [
      'Purchasing bulk fleets of 10, 50, 100, or 500+ laptops and desktops',
      'Customized rollout coordination: we pick up old machines as you deploy new ones',
      'Complete packaging supply: heavy-duty anti-static boxes, pallet wrapping, and strapping',
      'Dedicated corporate account manager overseeing the entire project'
    ],
    processSteps: [
      { title: 'Project Scoping', description: 'Reviewing fleet size, locations, and handover schedule.' },
      { title: 'Batch Pickup', description: 'Coordinated on-site collection with our transport team.' },
      { title: 'Settlement & Certification', description: 'Processing bulk payment and issuing data wipe certificates.' }
    ],
    businessValue: [
      'One reliable partner handles all logistics, wiping, and financial recovery',
      'Eliminate logistics headaches for your internal IT and facilities team'
    ],
    featured: true
  },
  {
    id: 'srv-asset-collection',
    slug: 'asset-collection',
    title: 'Secure Asset Collection & Logistics',
    titlePt: 'Recolha Segura e Transporte de Equipamentos',
    category: 'asset-recovery',
    categoryKey: 'asset-recovery',
    categoryIndex: '05',
    categoryLabel: { en: 'IT Asset Recovery & Buyback', pt: 'Retoma de Equipamento & Dados' },
    shortDescription: 'Secure door-to-door collection, specialized palletizing, and insured transport from your premises.',
    shortDescriptionPt: 'Recolha porta-a-porta, acondicionamento especializado em paletes e transporte seguro com seguro incluído.',
    fullDescription: 'You do not have to worry about packaging or moving heavy equipment. Our logistics team comes directly to your office, securely packages all computers, and transports them to our technical lab.',
    iconName: 'Truck',
    deliveryModes: ['On-Site'],
    turnaroundTime: { en: 'Scheduled Pickup', pt: 'Recolha Agendada' },
    deliverables: {
      en: ['Door-to-door collection', 'Tamper-evident security seals', 'Fully insured freight transport'],
      pt: ['Recolha porta-a-porta nas instalações', 'Selos de segurança anti-violação', 'Transporte totalmente segurado']
    },
    capabilities: [
      'Collection across Portugal Mainland (North, Center, South, and Greater Porto/Lisbon)',
      'Anti-static foam padding, protective flight cases, and custom laptop totes',
      'Chain-of-custody documentation signed at the point of handover',
      'Heavy server cabinet de-racking and pallet transport'
    ],
    processSteps: [
      { title: 'Collection Scheduling', description: 'Agreeing on a pickup date and time with your team.' },
      { title: 'On-site Packing & Sealing', description: 'Loading items into secure containers with custody logs.' },
      { title: 'Lab Delivery', description: 'Safe arrival and intake scan at our technical facility.' }
    ],
    businessValue: [
      'Save your team from packing heavy boxes and hauling equipment',
      'Complete chain of custody ensuring no equipment is lost or stolen in transit'
    ]
  },
  {
    id: 'srv-secure-data-wiping',
    slug: 'secure-data-wiping',
    title: 'Secure Data Wiping (NIST SP 800-88)',
    titlePt: 'Eliminação Certificada de Dados (NIST SP 800-88)',
    category: 'asset-recovery',
    categoryKey: 'asset-recovery',
    categoryIndex: '05',
    categoryLabel: { en: 'IT Asset Recovery & Buyback', pt: 'Retoma de Equipamento & Dados' },
    shortDescription: 'NIST SP 800-88 compliant cryptographic sanitization with verifiable certificate of data destruction for every drive.',
    shortDescriptionPt: 'Sanitização criptográfica em conformidade com NIST SP 800-88 e certificado individual de destruição de dados.',
    fullDescription: 'Simply formatting a drive is not enough to protect confidential files. We use certified erasure software to overwrite every sector with randomized data, providing a legally binding Certificate of Data Destruction for each storage drive.',
    iconName: 'FileCheck',
    deliveryModes: ['Workshop Lab', 'On-Site'],
    turnaroundTime: { en: '24–48 Hours', pt: '24–48 Horas' },
    deliverables: {
      en: ['NIST SP 800-88 Clear & Purge erasure', 'Tamper-proof digital certificate per drive serial', 'Full GDPR compliance audit trail'],
      pt: ['Eliminação conforme norma NIST SP 800-88', 'Certificado digital com número de série por disco', 'Conformidade legal e jurídica com RGPD']
    },
    capabilities: [
      'Compliant with NIST Special Publication 800-88 Rev. 1 Guidelines for Media Sanitization',
      'Certified erasure for NVMe SSDs, SATA SSDs, Apple Flash storage, and traditional HDDs',
      'Cryptographic erase and ATA Secure Erase firmware command execution',
      'Individual signed PDF Certificate of Data Destruction listing drive brand, model, and serial number'
    ],
    processSteps: [
      { title: 'Drive Serial Logging', description: 'Scanning drive serial number into certified wiping software.' },
      { title: 'Multi-pass Wiping', description: 'Overwriting all sectors and verifying 100% data destruction.' },
      { title: 'Certificate Generation', description: 'Generating signed certificate for your compliance records.' }
    ],
    businessValue: [
      '100% legal protection against costly GDPR data breach fines',
      'Total confidence that confidential client records and financial data can never be recovered'
    ],
    featured: true
  },
  {
    id: 'srv-it-asset-recovery',
    slug: 'it-asset-recovery',
    title: 'IT Asset Recovery & Remarketing',
    titlePt: 'Valorização e Recuperação de Ativos IT',
    category: 'asset-recovery',
    categoryKey: 'asset-recovery',
    categoryIndex: '05',
    categoryLabel: { en: 'IT Asset Recovery & Buyback', pt: 'Retoma de Equipamento & Dados' },
    shortDescription: 'Maximizing residual capital return through component harvesting, refurbishment, and secondary market deployment.',
    shortDescriptionPt: 'Maximização do retorno financeiro através de recondicionamento, reaproveitamento de componentes e mercado secundário.',
    fullDescription: 'We help companies extract the maximum possible value from aging hardware by testing, repairing, upgrading, and remarketing computers into secondary business channels.',
    iconName: 'TrendingUp',
    deliveryModes: ['Workshop Lab'],
    turnaroundTime: { en: 'Project Dependent', pt: 'Conforme Projeto' },
    deliverables: {
      en: ['Value recovery report', 'Component harvesting credit', 'Circular economy metrics (CO2 saved)'],
      pt: ['Relatório de valorização financeira', 'Crédito por aproveitamento de peças', 'Métricas de economia circular (CO2 evitado)']
    },
    capabilities: [
      'Component harvesting (reusing working RAM, SSDs, screens, and power supplies)',
      'Professional cleaning, thermal repasting, and cosmetic refinishing',
      'Remarketing to business clients with full 12-month warranties',
      'Environmental impact report detailing e-waste diverted from landfills and carbon savings'
    ],
    processSteps: [
      { title: 'Intake & Grading', description: 'Separating units into direct resale, refurbishment, or parts recovery.' },
      { title: 'Refurbishment Processing', description: 'Cleaning, repairing, and certifying functional hardware.' },
      { title: 'Capital Settlement', description: 'Crediting financial value back to your business.' }
    ],
    businessValue: [
      'Transform retired computers from an IT liability into a revenue-generating asset',
      'Demonstrate corporate sustainability and circular economy leadership'
    ]
  },
  {
    id: 'srv-responsible-recycling',
    slug: 'responsible-recycling',
    title: 'Responsible Recycling (WEEE / REEE)',
    titlePt: 'Reciclagem Ecológica e Certificada (REEE)',
    category: 'asset-recovery',
    categoryKey: 'asset-recovery',
    categoryIndex: '05',
    categoryLabel: { en: 'IT Asset Recovery & Buyback', pt: 'Retoma de Equipamento & Dados' },
    shortDescription: 'Zero-landfill eco-friendly disposal and WEEE-certified recycling for non-functional electronic waste.',
    shortDescriptionPt: 'Descarte ecológico certificado (REEE) com taxa zero de aterro para resíduos eletrónicos não funcionais.',
    fullDescription: 'For completely non-functional or obsolete equipment that cannot be refurbished, we provide certified WEEE (Waste Electrical and Electronic Equipment) recycling with zero-landfill protocols.',
    iconName: 'Recycle',
    deliveryModes: ['Workshop Lab', 'On-Site'],
    turnaroundTime: { en: 'Eco-certified', pt: 'Certificação Ecológica' },
    deliverables: {
      en: ['Official WEEE / REEE recycling certificate', 'Safe hazardous material disposal (batteries/mercury)', 'Environmental sustainability report'],
      pt: ['Guia oficial de acompanhamento de resíduos (GAR)', 'Tratamento seguro de baterias de lítio', 'Certificado ambiental de reciclagem']
    },
    capabilities: [
      'Full compliance with European Union WEEE Directive 2012/19/EU and Portuguese APA regulations',
      'Safe extraction and recycling of lithium-ion batteries and capacitor metals',
      'Certified material separation: precious metals (gold, copper), plastics, and circuit boards',
      'Official Waste Transfer Notes (GAR) provided for your corporate environmental compliance'
    ],
    processSteps: [
      { title: 'Sorting & De-manufacturing', description: 'Disassembling units into raw recyclable material streams.' },
      { title: 'Hazardous Waste Isolation', description: 'Safely separating swollen batteries and power transformers.' },
      { title: 'Certificate Issuance', description: 'Providing the official recycling certificate for government filing.' }
    ],
    businessValue: [
      'Fulfill all European environmental regulations and avoid heavy illegal dumping penalties',
      'Strengthen your company ESG (Environmental, Social, and Governance) profile'
    ],
    featured: true
  }
];

// Preserving legacy alias for existing subpages
export const servicesData: ServiceItem[] = allServicesData;

export const refurbishmentSteps: RefurbishmentStep[] = [
  {
    step: '01',
    number: '01',
    title: 'Visual Inspection',
    description: 'We check the body, screen, keyboard, hinges, and all ports to make sure there is no physical damage.',
    iconName: 'Search',
    details: [
      'Cosmetic condition grading (Grade A / A+)',
      'Inspection of USB, HDMI, and power ports',
      'Screen brightness and pixel check',
      'Keyboard and trackpad response test'
    ]
  },
  {
    step: '02',
    number: '02',
    title: 'Hardware Testing',
    description: 'We test every internal part under working loads to ensure fast and reliable performance.',
    iconName: 'Cpu',
    details: [
      'Processor (CPU) and graphics testing',
      'Memory (RAM) reliability tests',
      'SSD storage speed and health check',
      'Battery health and charge test (minimum 85%+)'
    ]
  },
  {
    step: '03',
    number: '03',
    title: 'Cleaning & Servicing',
    description: 'We open the computer, remove all dust, clean the fans, and apply fresh cooling paste.',
    iconName: 'Sparkles',
    details: [
      'Complete internal dust removal',
      'High-grade thermal cooling paste application',
      'Keyboard and casing sanitization',
      'Port and connector contact cleaning'
    ]
  },
  {
    step: '04',
    number: '04',
    title: 'Certified Data Wipe',
    description: 'All previous data is permanently erased using certified software to protect privacy.',
    iconName: 'FileCheck',
    details: [
      'NIST SP 800-88 compliant data overwrite',
      'Verification of zero recoverable sectors',
      'Factory reset of all firmware settings',
      'Certificate of data erasure generated'
    ]
  },
  {
    step: '05',
    number: '05',
    title: 'Fresh Software Setup',
    description: 'We install a clean operating system, update all drivers, and test all functions.',
    iconName: 'Laptop',
    details: [
      'Clean install of Windows 11 Pro or macOS',
      'Latest hardware drivers and BIOS updates',
      'Essential software configuration',
      'Removal of pre-installed bloatware'
    ]
  },
  {
    step: '06',
    number: '06',
    title: 'Final Quality Check',
    description: 'A senior technician reviews the full checklist before carefully packaging the device.',
    iconName: 'CheckCircle2',
    details: [
      'Final 20-point quality assurance check',
      '12-Month hardware warranty certificate attached',
      'Original or certified power adapter included',
      'Safe, protective packaging for transport'
    ]
  }
];
