export interface MegaMenuServiceCard {
  id: string;
  slug: string;
  titleEn: string;
  titlePt: string;
  descEn: string;
  descPt: string;
  iconName: string;
  image: string;
  turnaroundEn?: string;
  turnaroundPt?: string;
  badgeIndex?: string;
}

export interface MegaMenuServiceSpotlight {
  badgeEn: string;
  badgePt: string;
  titleEn: string;
  titlePt: string;
  paragraphEn: string;
  paragraphPt: string;
  image: string;
  imageAlt: string;
  imageBadgeEn?: string;
  imageBadgePt?: string;
  featuresEn: string[];
  featuresPt: string[];
  ctaTextEn: string;
  ctaTextPt: string;
}

export interface MegaMenuPageData {
  slug: string;
  categoryBadgeEn: string;
  categoryBadgePt: string;
  headerTitleEn: string;
  headerTitlePt: string;
  headerDescEn: string;
  headerDescPt: string;
  cardsCountTextEn: string;
  cardsCountTextPt: string;
  cards: MegaMenuServiceCard[];
  spotlight: MegaMenuServiceSpotlight;
}

export const megaMenuServicesPagesData: Record<string, MegaMenuPageData> = {
  // 1. HARDWARE DIAGNOSTICS & REPAIR
  'hardware-diagnostics-repair': {
    slug: 'hardware-diagnostics-repair',
    categoryBadgeEn: 'IT SUPPORT & TECHNICAL SERVICES',
    categoryBadgePt: 'SUPORTE INFORMÁTICO & ASSISTÊNCIA TÉCNICA',
    headerTitleEn: 'We Provide Complete Hardware Diagnostics & Repair Services',
    headerTitlePt: 'Serviços Especializados de Diagnóstico e Reparação de Hardware',
    headerDescEn: 'From advanced electrical bench tests to component-level BGA and screen replacements, our certified technicians handle all computer repairs with laboratory precision.',
    headerDescPt: 'Desde testes elétricos avançados em bancada até substituição de chips BGA e ecrãs, os nossos técnicos certificados tratam de todas as reparações com precisão laboratorial.',
    cardsCountTextEn: '6 Specialized Diagnostics & Repair Services',
    cardsCountTextPt: '6 Serviços Especializados de Diagnóstico & Reparação',
    cards: [
      {
        id: 'diag-1',
        slug: 'hardware-diagnostics-repair',
        titleEn: 'Component Bench Diagnostics',
        titlePt: 'Diagnóstico de Componentes em Bancada',
        descEn: 'Precision oscilloscope and multimeter analysis to isolate short circuits, corrupted memory, and blown power rails.',
        descPt: 'Análise de precisão com osciloscópio e multímetro para isolar curto-circuitos, memória corrompida e falhas de tensão.',
        iconName: 'Search',
        image: 'https://images.unsplash.com/photo-1597733336794-12d05021d510?auto=format&fit=crop&w=600&q=80',
        turnaroundEn: 'Same-day / 24h',
        turnaroundPt: 'Mesmo dia / 24h',
        badgeIndex: '01'
      },
      {
        id: 'diag-2',
        slug: 'hardware-diagnostics-repair',
        titleEn: 'Motherboard & BGA Micro-soldering',
        titlePt: 'Micro-soldadura em Motherboard & BGA',
        descEn: 'Microscopic soldering repair for power management ICs, MOSFETs, and damaged motherboard tracks.',
        descPt: 'Reparação de alta precisão ao microscópio para circuitos integrados de alimentação, MOSFETs e pistas danificadas.',
        iconName: 'Wrench',
        image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80',
        turnaroundEn: '24–48 Hours',
        turnaroundPt: '24–48 Horas',
        badgeIndex: '02'
      },
      {
        id: 'diag-3',
        slug: 'hardware-diagnostics-repair',
        titleEn: 'Memory RAM & NVMe Sector Audit',
        titlePt: 'Auditoria de Memória RAM & Setores NVMe',
        descEn: 'Deep bit-flip parity testing and SMART sector integrity tests for freeze-free multitasking stability.',
        descPt: 'Testes profundos de paridade bit-flip e integridade SMART de setores para estabilidade total sem bloqueios.',
        iconName: 'Cpu',
        image: 'https://images.unsplash.com/photo-1562976540-1502c2145186?auto=format&fit=crop&w=600&q=80',
        turnaroundEn: 'Same-day',
        turnaroundPt: 'Mesmo dia',
        badgeIndex: '03'
      },
      {
        id: 'diag-4',
        slug: 'hardware-diagnostics-repair',
        titleEn: 'GPU & Power Rails Circuit Fix',
        titlePt: 'Reparação de GPU & Circuitos de Alimentação',
        descEn: 'Restoration of dedicated graphics cards, DC power jacks, capacitors, and charging rail circuits.',
        descPt: 'Recuperação de placas gráficas dedicadas, fichas DC Jack, condensadores e circuitos de carregamento.',
        iconName: 'Zap',
        image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=600&q=80',
        turnaroundEn: '1–2 Days',
        turnaroundPt: '1–2 Dias',
        badgeIndex: '04'
      },
      {
        id: 'diag-5',
        slug: 'hardware-diagnostics-repair',
        titleEn: 'Screen & Hinge Mechanical Repair',
        titlePt: 'Substituição de Ecrãs & Dobradiças',
        descEn: 'Original OEM IPS/OLED screen replacements, hinge anchoring repair, and chassis structural re-alignment.',
        descPt: 'Substituição de painéis IPS/OLED originais OEM, reconstrução de fixações de dobradiças e alinhamento de chassis.',
        iconName: 'Laptop',
        image: 'https://images.unsplash.com/photo-1588702547919-26089e690ecc?auto=format&fit=crop&w=600&q=80',
        turnaroundEn: '24h Turnaround',
        turnaroundPt: 'Prazo 24h',
        badgeIndex: '05'
      },
      {
        id: 'diag-6',
        slug: 'hardware-diagnostics-repair',
        titleEn: 'On-Site Hardware Intervention',
        titlePt: 'Assistência Técnica de Hardware Presencial',
        descEn: 'Fast technician dispatch to your corporate office or workshop for urgent hardware troubleshooting and parts swap.',
        descPt: 'Deslocação rápida de técnico às instalações da sua empresa para resolução urgente de avarias e troca de peças.',
        iconName: 'Layers',
        image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80',
        turnaroundEn: 'Urgent Dispatch',
        turnaroundPt: 'Despacho Urgente',
        badgeIndex: '06'
      }
    ],
    spotlight: {
      badgeEn: 'CERTIFIED LAB & WORKSHOP IN TROFA',
      badgePt: 'LABORATÓRIO TÉCNICO ALGORITMICA MANIA NA TROFA',
      titleEn: 'Precision Electronic Diagnostics & Component-Level Repair',
      titlePt: 'Diagnóstico Eletrónico Avançado & Reparação Cirúrgica de Componentes',
      paragraphEn: 'At our certified tech lab in Trofa, we use advanced SMD/BGA rework stations, digital oscilloscopes, and thermal infrared cameras to diagnose and repair damaged motherboards, power delivery circuits, and GPUs without requiring costly whole-unit replacements.',
      paragraphPt: 'No nosso laboratório próprio na Trofa, dispomos de estações de soldadura SMD/BGA, osciloscópios digitais e câmaras térmicas infravermelhas para diagnosticar e reparar com exatidão placas-mãe, circuitos de alimentação e GPUs danificados sem necessidade de substituição integral dispendiosa.',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
      imageAlt: 'Electronic motherboard micro-soldering and bench repair',
      imageBadgeEn: 'ISO Bench Standard • Direct Lab Warranty',
      imageBadgePt: 'Normas de Bancada ISO • Garantia Direta de Laboratório',
      featuresEn: [
        'Complete power rail isolation & short-circuit root cause audit',
        'Micro-soldering replacement of MOSFETs, controllers, and DC jacks',
        '100% Genuine OEM replacement parts with direct warranty',
        'Emergency 4-hour diagnostic option for corporate accounts'
      ],
      featuresPt: [
        'Auditoria completa de linhas de tensão e identificação de curto-circuitos',
        'Micro-soldadura de MOSFETs, controladores de energia e fichas DC jack',
        'Peças de substituição 100% genuínas OEM com garantia direta',
        'Opção de diagnóstico de emergência em 4 horas para contas empresariais'
      ],
      ctaTextEn: 'Request Diagnostics Quote',
      ctaTextPt: 'Pedir Proposta de Diagnóstico'
    }
  },

  // 2. PREVENTIVE MAINTENANCE & THERMAL PASTE
  'preventive-maintenance-thermal': {
    slug: 'preventive-maintenance-thermal',
    categoryBadgeEn: 'PREVENTIVE MAINTENANCE & THERMAL CARE',
    categoryBadgePt: 'MANUTENÇÃO PREVENTIVA & CUIDADOS TÉRMICOS',
    headerTitleEn: 'We Provide Complete Preventive Maintenance & Thermal Care',
    headerTitlePt: 'Serviços de Manutenção Preventiva e Limpeza Térmica Profissional',
    headerDescEn: 'Protect your business laptops, workstations, and servers from dangerous overheating, loud fan noise, and performance throttling with our ultrasonic cleaning and premium thermal compound.',
    headerDescPt: 'Proteja os seus computadores, workstations e servidores contra sobreaquecimento, ruído excessivo de ventoinhas e perdas de desempenho com a nossa limpeza ultrassónica e massa térmica de alto rendimento.',
    cardsCountTextEn: '6 Specialized Preventive & Thermal Services',
    cardsCountTextPt: '6 Serviços Especializados de Manutenção Térmica',
    cards: [
      {
        id: 'therm-1',
        slug: 'preventive-maintenance-thermal',
        titleEn: 'Ultrasonic Fan & Heatpipe Cleansing',
        titlePt: 'Limpeza Ultrassónica de Ventoinhas & Dissipadores',
        descEn: 'Complete extraction of clogged dust, lint, and particles from internal radiators and fan blades.',
        descPt: 'Remoção integral de pó compactado, sujidade e fibras dos radiadores internos e pás das ventoinhas.',
        iconName: 'Sparkles',
        image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=600&q=80',
        turnaroundEn: 'Same-day',
        turnaroundPt: 'Mesmo dia',
        badgeIndex: '01'
      },
      {
        id: 'therm-2',
        slug: 'preventive-maintenance-thermal',
        titleEn: 'Arctic / Noctua High-Density Thermal Paste',
        titlePt: 'Aplicação de Pasta Térmica Arctic / Noctua',
        descEn: 'Replacement of dried factory paste with non-conductive, ultra-high thermal conductivity compound.',
        descPt: 'Substituição da massa seca de fábrica por composto de alta condutividade térmica e não-condutor.',
        iconName: 'Cpu',
        image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80',
        turnaroundEn: 'Same-day',
        turnaroundPt: 'Mesmo dia',
        badgeIndex: '02'
      },
      {
        id: 'therm-3',
        slug: 'preventive-maintenance-thermal',
        titleEn: 'GPU & VRM Thermal Pad Refresh',
        titlePt: 'Substituição de Thermal Pads em GPU & VRMs',
        descEn: 'Precision thickness thermal pad replacement on graphics memory chips and voltage regulators.',
        descPt: 'Substituição calibrada de almofadas térmicas nos módulos de memória gráfica e reguladores de voltagem.',
        iconName: 'Zap',
        image: 'https://images.unsplash.com/photo-1562976540-1502c2145186?auto=format&fit=crop&w=600&q=80',
        turnaroundEn: '24 Hours',
        turnaroundPt: '24 Horas',
        badgeIndex: '03'
      },
      {
        id: 'therm-4',
        slug: 'preventive-maintenance-thermal',
        titleEn: 'Thermal Throttling Benchmark Audit',
        titlePt: 'Auditoria de Temperatura & Teste de Carga',
        descEn: 'Stress benchmark verifying a 15°C to 25°C temperature drop and sustained maximum boost clocks.',
        descPt: 'Teste de stress confirmando uma descida de 15°C a 25°C e estabilidade das frequências máximas de clock.',
        iconName: 'Activity',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80',
        turnaroundEn: 'Included',
        turnaroundPt: 'Incluído',
        badgeIndex: '04'
      },
      {
        id: 'therm-5',
        slug: 'preventive-maintenance-thermal',
        titleEn: 'Port De-oxidation & Contact Cleansing',
        titlePt: 'Desoxidação de Portas & Limpeza de Contactos',
        descEn: 'Dielectric cleaning of USB-C, HDMI, power jacks, and RAM slots to prevent intermittent electrical contact.',
        descPt: 'Limpeza dielétrica de portas USB-C, HDMI, conectores de corrente e slots de RAM para contacto perfeito.',
        iconName: 'Wrench',
        image: 'https://images.unsplash.com/photo-1588702547919-26089e690ecc?auto=format&fit=crop&w=600&q=80',
        turnaroundEn: 'Same-day',
        turnaroundPt: 'Mesmo dia',
        badgeIndex: '05'
      },
      {
        id: 'therm-6',
        slug: 'preventive-maintenance-thermal',
        titleEn: 'Fleet Scheduled Preventive Maintenance',
        titlePt: 'Plano de Manutenção Preventiva para Frotas',
        descEn: 'Periodic scheduled maintenance plans for office computers to prevent hardware failures before they occur.',
        descPt: 'Planos periódicos programados para parques informáticos empresariais evitando paragens imprevistas.',
        iconName: 'ShieldCheck',
        image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80',
        turnaroundEn: 'Scheduled SLA',
        turnaroundPt: 'SLA Programado',
        badgeIndex: '06'
      }
    ],
    spotlight: {
      badgeEn: 'PREVENTIVE THERMAL LAB',
      badgePt: 'LABORATÓRIO DE REFRIGERAÇÃO & MANUTENÇÃO TÉRMICA',
      titleEn: 'Extend Hardware Lifespan with Deep Thermal Restoration',
      titlePt: 'Aumente a Vida Útil do seu Hardware com Limpeza e Otimização Térmica',
      paragraphEn: 'Over time, dried factory thermal paste and accumulated lint insulate heatsinks, forcing fans to spin at loud maximum speeds while processor clock speeds severely throttle. Our laboratory maintenance restores silent, cool, and efficient operation.',
      paragraphPt: 'Com o tempo, a massa térmica seca e as partículas acumuladas bloqueiam a ventilação, forçando os processadores a reduzir a velocidade e aumentando o ruído. O nosso serviço de manutenção profunda restabelece a refrigeração silenciosa e eficiente.',
      image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=1200&q=80',
      imageAlt: 'Thermal heatsink paste re-application and fan cleaning',
      imageBadgeEn: 'Avg -20°C Temperature Drop Guaranteed',
      imageBadgePt: 'Redução Média de -20°C Garantida',
      featuresEn: [
        'Complete disassembly and deep ultrasonic dust removal',
        'Application of premium Arctic MX-6 / Noctua NT-H2 paste',
        'Thermal pad replacement on GPU memory and VRM circuitry',
        'Pre and post service benchmark temperature report'
      ],
      featuresPt: [
        'Desmontagem completa e desobstrução profunda de ventilação',
        'Aplicação de pasta de topo Arctic MX-6 / Noctua NT-H2',
        'Substituição de pads térmicos em memórias e VRMs',
        'Relatório comparativo de temperaturas antes e após intervenção'
      ],
      ctaTextEn: 'Request Maintenance Quote',
      ctaTextPt: 'Pedir Orçamento de Manutenção'
    }
  },

  // 3. REMOTE HELPDESK & TROUBLESHOOTING
  'remote-helpdesk-troubleshooting': {
    slug: 'remote-helpdesk-troubleshooting',
    categoryBadgeEn: 'INSTANT REMOTE SUPPORT & HELPDESK',
    categoryBadgePt: 'SUPORTE TÉCNICO REMOTO IMEDIATO & HELPDESK',
    headerTitleEn: 'We Provide Instant Remote IT Support & Troubleshooting',
    headerTitlePt: 'Assistência Técnica Remota Imediata e Resolução de Problemas',
    headerDescEn: 'Get instant, secure remote IT help for software crashes, email synchronization, printer errors, VPNs, and network drives without waiting for technician travel.',
    headerDescPt: 'Obtenha apoio técnico imediato e seguro para falhas de software, sincronização de email, impressoras, VPNs e discos de rede sem tempos de espera por deslocações.',
    cardsCountTextEn: '6 Specialized Remote Helpdesk Services',
    cardsCountTextPt: '6 Serviços Especializados de Suporte Remoto',
    cards: [
      {
        id: 'rem-1',
        slug: 'remote-helpdesk-troubleshooting',
        titleEn: 'Encrypted 256-Bit Screen Assistance',
        titlePt: 'Sessão Remota Segura Encriptada 256-Bit',
        descEn: 'One-click instant connection using enterprise support software with zero permanent background access.',
        descPt: 'Ligação imediata num clique através de software empresarial seguro sem acessos residuais após fecho.',
        iconName: 'Headphones',
        image: 'https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&w=600&q=80',
        turnaroundEn: '15 Minutes',
        turnaroundPt: '15 Minutos',
        badgeIndex: '01'
      },
      {
        id: 'rem-2',
        slug: 'remote-helpdesk-troubleshooting',
        titleEn: 'Microsoft 365, Outlook & Email Setup',
        titlePt: 'Configuração de Microsoft 365, Outlook & Email',
        descEn: 'Fixing mailbox synchronization glitches, PST archives, calendar sharing, and authentication errors.',
        descPt: 'Resolução de falhas de sincronização de caixas de correio, ficheiros PST, calendários e credenciais.',
        iconName: 'Laptop',
        image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80',
        turnaroundEn: 'Immediate',
        turnaroundPt: 'Imediato',
        badgeIndex: '02'
      },
      {
        id: 'rem-3',
        slug: 'remote-helpdesk-troubleshooting',
        titleEn: 'Network Printer & NAS Drive Mapping',
        titlePt: 'Mapeamento de Impressoras de Rede & NAS',
        descEn: 'Reconnecting shared office printers, scanners, SMB network folders, and cloud backups.',
        descPt: 'Reconexão de impressoras partilhadas de escritório, scanners, pastas de rede SMB e backups.',
        iconName: 'Network',
        image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=600&q=80',
        turnaroundEn: 'Same-day',
        turnaroundPt: 'Mesmo dia',
        badgeIndex: '03'
      },
      {
        id: 'rem-4',
        slug: 'remote-helpdesk-troubleshooting',
        titleEn: 'Malware, Spyware & Adware Removal',
        titlePt: 'Remoção de Malware, Spyware & Adware',
        descEn: 'Deep disinfection of malicious browser hijackers, suspicious background scripts, and rogue software.',
        descPt: 'Desinfeção profunda de extensões maliciosas, scripts suspeitos em segundo plano e programas intrusivos.',
        iconName: 'ShieldCheck',
        image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80',
        turnaroundEn: '1–2 Hours',
        turnaroundPt: '1–2 Horas',
        badgeIndex: '04'
      },
      {
        id: 'rem-5',
        slug: 'remote-helpdesk-troubleshooting',
        titleEn: 'ERP & Billing Software Client Fixes',
        titlePt: 'Suporte a Software de Faturação & ERP',
        descEn: 'Troubleshooting client connections for Primavera, PHC, Moloni, Sage, and SQL database links.',
        descPt: 'Resolução de bloqueios em postos de trabalho para Primavera, PHC, Moloni, Sage e bases de dados SQL.',
        iconName: 'Cpu',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80',
        turnaroundEn: 'Priority SLA',
        turnaroundPt: 'SLA Prioritário',
        badgeIndex: '05'
      },
      {
        id: 'rem-6',
        slug: 'remote-helpdesk-troubleshooting',
        titleEn: 'On-Demand Helpdesk Tickets for Teams',
        titlePt: 'Helpdesk Dedicado para Equipas & PMEs',
        descEn: 'Flexible monthly or on-demand support ticket packages for remote workers and branch offices.',
        descPt: 'Pacotes flexíveis de tickets de suporte mensal ou à hora para colaboradores remotos e escritórios.',
        iconName: 'Activity',
        image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80',
        turnaroundEn: 'Flexible Pack',
        turnaroundPt: 'Pacote Flexível',
        badgeIndex: '06'
      }
    ],
    spotlight: {
      badgeEn: 'INSTANT REMOTE SUPPORT DESK',
      badgePt: 'CENTRAL DE SUPORTE REMOTO ALGORITMICA MANIA',
      titleEn: 'Immediate Technical Assistance for your Entire Workforce',
      titlePt: 'Assistência Técnica Imediata para Toda a sua Equipa',
      paragraphEn: 'Eliminate hours of frustrating employee downtime. Our certified IT helpdesk engineers connect securely in seconds to diagnose and fix software bugs, system freezes, printer errors, and network issues directly on your team screen.',
      paragraphPt: 'Elimine horas de paragens improdutivas na sua empresa. Os nossos técnicos certificados ligam-se com total segurança em poucos segundos para resolver erros de software, bloqueios de sistema, impressoras e falhas de rede diretamente no ecrã dos seus colaboradores.',
      image: 'https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&w=1200&q=80',
      imageAlt: 'Remote IT helpdesk specialist solving technical issue',
      imageBadgeEn: 'Avg Response Time: 15 Minutes',
      imageBadgePt: 'Tempo Médio de Resposta: 15 Minutos',
      featuresEn: [
        'Secure 256-bit encrypted connection with zero installation required',
        'Immediate resolution for Microsoft 365, printers, VPN, and billing apps',
        'Support for Windows 10/11, macOS, and Linux workstations',
        'Transparent hourly billing or cost-effective monthly packs'
      ],
      featuresPt: [
        'Ligação encriptada a 256 bits sem necessidade de instalações complexas',
        'Resolução rápida de problemas em Microsoft 365, impressoras, VPN e faturação',
        'Suporte completo para computadores Windows 10/11, macOS e Linux',
        'Faturação transparente à intervenção ou através de planos mensais vantajosos'
      ],
      ctaTextEn: 'Start Remote Support Session',
      ctaTextPt: 'Iniciar Sessão de Suporte Remoto'
    }
  },

  // 4. DATA RECOVERY FROM CORRUPTED DRIVES
  'data-recovery-drives': {
    slug: 'data-recovery-drives',
    categoryBadgeEn: 'CLEANROOM LAB DATA RECOVERY',
    categoryBadgePt: 'LABORATÓRIO DE RECUPERAÇÃO DE DADOS',
    headerTitleEn: 'We Provide Laboratory Data Recovery from Corrupted Drives',
    headerTitlePt: 'Recuperação Especializada de Dados em Discos Danificados e SSDs',
    headerDescEn: 'When hard drives start clicking, SSDs fail to detect, or files are accidentally deleted, our data recovery laboratory extracts your irreplaceable accounting databases and business records.',
    headerDescPt: 'Quando discos mecânicos fazem ruídos, SSDs deixam de ser reconhecidos ou ficheiros são eliminados por engano, o nosso laboratório recupera as suas bases de dados e documentos críticos.',
    cardsCountTextEn: '6 Specialized Data Recovery Services',
    cardsCountTextPt: '6 Serviços Especializados de Recuperação de Dados',
    cards: [
      {
        id: 'rec-1',
        slug: 'data-recovery-drives',
        titleEn: 'Mechanical HDD Platter & Head Recovery',
        titlePt: 'Recuperação Mecânica de Discos HDD & Cabeças',
        descEn: 'Hardware imaging bypassing damaged sectors and mechanical head failures on desktop & laptop drives.',
        descPt: 'Clonagem física por hardware contornando setores danificados e avarias de cabeças de leitura.',
        iconName: 'HardDrive',
        image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=600&q=80',
        turnaroundEn: '24–48 Hours',
        turnaroundPt: '24–48 Horas',
        badgeIndex: '01'
      },
      {
        id: 'rec-2',
        slug: 'data-recovery-drives',
        titleEn: 'NVMe / SSD Controller Firmware Fix',
        titlePt: 'Recuperação de SSDs NVMe & Firmware de Controlador',
        descEn: 'Specialized low-level NAND chip extraction and translation table reconstruction for dead solid-state drives.',
        descPt: 'Extração de chips NAND em baixo nível e reconstrução de tabelas de tradução para SSDs que não ligam.',
        iconName: 'Zap',
        image: 'https://images.unsplash.com/photo-1562976540-1502c2145186?auto=format&fit=crop&w=600&q=80',
        turnaroundEn: '24–72 Hours',
        turnaroundPt: '24–72 Horas',
        badgeIndex: '02'
      },
      {
        id: 'rec-3',
        slug: 'data-recovery-drives',
        titleEn: 'Formatted Partition & RAW File Extraction',
        titlePt: 'Extração de Partições Formatadas & RAW',
        descEn: 'Deep carving reconstruction for NTFS, exFAT, APFS, and EXT4 file tables after accidental formatting.',
        descPt: 'Reconstrução estrutural profunda para sistemas de ficheiros NTFS, exFAT, APFS e EXT4 formatados.',
        iconName: 'Search',
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80',
        turnaroundEn: '24 Hours',
        turnaroundPt: '24 Horas',
        badgeIndex: '03'
      },
      {
        id: 'rec-4',
        slug: 'data-recovery-drives',
        titleEn: 'RAID Array & NAS Storage Rebuilding',
        titlePt: 'Reconstrução de Volumes RAID & Armazenamento NAS',
        descEn: 'Reassembling degraded RAID 0, 1, 5, 6, and Synology/QNAP NAS arrays with multiple drive dropouts.',
        descPt: 'Remontagem virtual de arrays RAID 0, 1, 5, 6 e servidores NAS Synology/QNAP com múltiplos discos em falha.',
        iconName: 'Server',
        image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=600&q=80',
        turnaroundEn: '24–48 Hours',
        turnaroundPt: '24–48 Horas',
        badgeIndex: '04'
      },
      {
        id: 'rec-5',
        slug: 'data-recovery-drives',
        titleEn: 'NIST 800-88 Certified Drive Sanitization',
        titlePt: 'Destruição Certificada de Dados NIST 800-88',
        descEn: 'Guaranteed cryptographic erasure for retired corporate drives with official compliance certificate.',
        descPt: 'Eliminação criptográfica irreversível de dados em suportes em fim de vida com certificado de conformidade.',
        iconName: 'ShieldCheck',
        image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80',
        turnaroundEn: 'Certified',
        turnaroundPt: 'Certificado',
        badgeIndex: '05'
      },
      {
        id: 'rec-6',
        slug: 'data-recovery-drives',
        titleEn: 'Emergency Lab Extraction with Strict NDA',
        titlePt: 'Recuperação de Emergência sob Acordo de Confidencialidade',
        descEn: 'Priority laboratory processing with strict non-disclosure agreement for legal, medical, and executive data.',
        descPt: 'Processamento prioritário em laboratório com garantia contratual de sigilo absoluto para dados sensíveis.',
        iconName: 'Clock',
        image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80',
        turnaroundEn: 'Priority SLA',
        turnaroundPt: 'SLA Prioritário',
        badgeIndex: '06'
      }
    ],
    spotlight: {
      badgeEn: 'DATA RECOVERY LAB IN TROFA',
      badgePt: 'LABORATÓRIO DE RECUPERAÇÃO DE DADOS ALGORITMICA MANIA',
      titleEn: 'Advanced Hardware Diagnostics & Data Extraction Technology',
      titlePt: 'Tecnologia Avançada de Diagnóstico e Extração Segura de Dados',
      paragraphEn: 'When storage media suffers catastrophic failure, traditional software tools can destroy remaining data. Our lab uses specialized hardware imagers and write-blockers to extract raw sectors safely, reconstructing your complete folder hierarchy onto a secure encrypted destination drive.',
      paragraphPt: 'Quando um disco ou SSD sofre uma falha grave, programas normais podem corromper definitivamente os dados. O nosso laboratório utiliza clonadores de hardware dedicados e bloqueadores de escrita para extrair setores em segurança e reconstruir a estrutura original de ficheiros.',
      image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=1200&q=80',
      imageAlt: 'Cleanroom hard drive platter recovery and sector cloning',
      imageBadgeEn: 'Strict NDA • No Data, No Lab Fee Policy',
      imageBadgePt: 'Garantia de Sigilo NDA • Sem Dados Não Paga',
      featuresEn: [
        'Hardware-level sector duplication bypassing bad blocks without stress',
        'Support for HDDs, NVMe SSDs, USB flash drives, and SD cards',
        'Data delivered on a new encrypted external drive with folder structure',
        'Strict GDPR and business confidentiality agreements guarantee'
      ],
      featuresPt: [
        'Duplicação de setores por hardware sem sobrecarregar discos instáveis',
        'Suporte completo para HDDs, SSDs NVMe, pens USB e cartões de memória',
        'Entrega de dados em suporte encriptado com estrutura de pastas intacta',
        'Conformidade total com RGPD e acordos contratuais de confidencialidade'
      ],
      ctaTextEn: 'Request Data Recovery Evaluation',
      ctaTextPt: 'Pedir Avaliação de Recuperação de Dados'
    }
  },

  // 5. OS SETUP, DRIVER CONFIG & TUNING
  'os-setup-driver-optimization': {
    slug: 'os-setup-driver-optimization',
    categoryBadgeEn: 'OS DEPLOYMENT & PERFORMANCE TUNING',
    categoryBadgePt: 'INSTALAÇÃO DE SISTEMAS & OTIMIZAÇÃO',
    headerTitleEn: 'We Provide Complete Operating System Setup & Optimization',
    headerTitlePt: 'Instalação Limpa de Sistemas Operativos e Otimização de Performance',
    headerDescEn: 'Enjoy ultra-fast startup speeds, genuine digital licenses, official WHQL manufacturer drivers, and zero background bloatware with our professional workstation deployment.',
    headerDescPt: 'Desfrute de arranques ultrarrápidos, licenciamento digital genuíno, drivers oficiais WHQL e zero programas desnecessários em segundo plano com a nossa instalação profissional.',
    cardsCountTextEn: '6 Specialized OS & Tuning Services',
    cardsCountTextPt: '6 Serviços Especializados de Sistemas & Otimização',
    cards: [
      {
        id: 'os-1',
        slug: 'os-setup-driver-optimization',
        titleEn: 'Windows 11 Pro Clean & Debloated Setup',
        titlePt: 'Instalação Limpa de Windows 11 Pro sem Bloatware',
        descEn: 'Fresh official installation with genuine digital licensing, telemetry cleanup, and fast boot optimization.',
        descPt: 'Instalação oficial limpa com ativação digital genuína, remoção de lixo de fábrica e arranque acelerado.',
        iconName: 'Laptop',
        image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80',
        turnaroundEn: '24 Hours',
        turnaroundPt: '24 Horas',
        badgeIndex: '01'
      },
      {
        id: 'os-2',
        slug: 'os-setup-driver-optimization',
        titleEn: 'macOS & Apple Silicon Ecosystem Tuning',
        titlePt: 'Configuração de macOS & Apple Silicon',
        descEn: 'Clean macOS installation, Apple Silicon architecture tuning, FileVault encryption, and Time Machine setup.',
        descPt: 'Instalação limpa de macOS, otimização para processadores Apple Silicon, FileVault e Time Machine.',
        iconName: 'Cpu',
        image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80',
        turnaroundEn: 'Same-day',
        turnaroundPt: 'Mesmo dia',
        badgeIndex: '02'
      },
      {
        id: 'os-3',
        slug: 'os-setup-driver-optimization',
        titleEn: 'Enterprise Linux Workstation Deployment',
        titlePt: 'Instalação de Linux Empresarial (Ubuntu/Debian)',
        descEn: 'Tailored Linux distributions for developers, engineers, and servers with verified GPU & kernel drivers.',
        descPt: 'Distribuições Linux configuradas para desenvolvimento e servidores com drivers de GPU e kernel estáveis.',
        iconName: 'Server',
        image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80',
        turnaroundEn: '24–48 Hours',
        turnaroundPt: '24–48 Horas',
        badgeIndex: '03'
      },
      {
        id: 'os-4',
        slug: 'os-setup-driver-optimization',
        titleEn: 'WHQL Chipset, BIOS & GPU Driver Updates',
        titlePt: 'Atualização de BIOS, Chipset & Drivers WHQL',
        descEn: 'Flashing latest secure motherboard firmware, Intel/AMD chipset drivers, and Nvidia/Radeon graphics drivers.',
        descPt: 'Atualização de firmware UEFI da motherboard, drivers de chipset Intel/AMD e placas gráficas Nvidia/AMD.',
        iconName: 'Zap',
        image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=600&q=80',
        turnaroundEn: 'Same-day',
        turnaroundPt: 'Mesmo dia',
        badgeIndex: '04'
      },
      {
        id: 'os-5',
        slug: 'os-setup-driver-optimization',
        titleEn: 'BitLocker Encryption & Security Policies',
        titlePt: 'Encriptação BitLocker & Políticas de Segurança',
        descEn: 'Hardware TPM 2.0 full-disk encryption setup to safeguard sensitive business files against laptop theft.',
        descPt: 'Ativação de encriptação total de disco por hardware TPM 2.0 para proteger dados em caso de furto.',
        iconName: 'ShieldCheck',
        image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80',
        turnaroundEn: 'Same-day',
        turnaroundPt: 'Mesmo dia',
        badgeIndex: '05'
      },
      {
        id: 'os-6',
        slug: 'os-setup-driver-optimization',
        titleEn: 'Rapid Automated Fleet Image Deployment',
        titlePt: 'Clonagem & Preparação Rápida de Frotas de PCs',
        descEn: 'Creating standard corporate gold master images to deploy 10, 50, or 100+ office laptops in record time.',
        descPt: 'Criação de imagens corporativas standard para configurar dezenas de computadores com máxima rapidez.',
        iconName: 'Layers',
        image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80',
        turnaroundEn: 'Fleet SLA',
        turnaroundPt: 'SLA Frotas',
        badgeIndex: '06'
      }
    ],
    spotlight: {
      badgeEn: 'CERTIFIED SOFTWARE & SYSTEMS LAB',
      badgePt: 'LABORATÓRIO DE SISTEMAS & OTIMIZAÇÃO ALGORITMICA MANIA',
      titleEn: 'Maximum Responsiveness with Clean Operating System Builds',
      titlePt: 'Máxima Velocidade e Estabilidade com Sistemas Limpos e Otimizados',
      paragraphEn: 'Over years of use, old registries, junk temporary files, and background bloatware severely degrade computer performance. We deploy clean, official, licensed operating system installations tuned specifically for your hardware components to make your computer run as fast as day one.',
      paragraphPt: 'Ao longo do tempo, registos corrompidos, ficheiros residuais e aplicações desnecessárias tornam os computadores lentos e instáveis. Realizamos instalações limpas, oficiais e afinadas à medida do seu hardware para que a máquina funcione com a máxima rapidez desde o primeiro segundo.',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80',
      imageAlt: 'Operating system setup and terminal tuning',
      imageBadgeEn: '100% Genuine Digital Licenses • WHQL Certified',
      imageBadgePt: 'Licenças 100% Genuínas • Drivers WHQL Certificados',
      featuresEn: [
        'Clean official installation of Windows 11 Pro, macOS, or Enterprise Linux',
        'Removal of all pre-installed adware, bloatware, and diagnostic telemetry',
        'Latest UEFI BIOS firmware updates and manufacturer certified drivers',
        'Enterprise BitLocker/FileVault encryption setup for data security'
      ],
      featuresPt: [
        'Instalação limpa e oficial de Windows 11 Pro, macOS ou distribuições Linux',
        'Remoção de todo o bloatware, publicidade e serviços desnecessários',
        'Atualização de firmware BIOS/UEFI e instalação de drivers certificados',
        'Ativação de encriptação BitLocker/FileVault para proteção de dados'
      ],
      ctaTextEn: 'Request OS Setup Quote',
      ctaTextPt: 'Pedir Proposta de Instalação'
    }
  }
};
