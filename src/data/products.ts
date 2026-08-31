import { Product } from '../types';

export const productsData: Product[] = [
  // 1. Used & Refurbished IT
  {
    id: 'prod-lenovo-t14s-gen2',
    slug: 'lenovo-thinkpad-t14s-gen2',
    name: 'Lenovo ThinkPad T14s Gen 2',
    brand: 'Lenovo',
    category: 'used-refurbished',
    subCategory: 'Laptops',
    condition: 'Refurbished - Grade A+',
    keySpecs: 'Intel Core i7-1165G7 • 16GB LPDDR4x • 512GB NVMe SSD • 14" FHD IPS',
    description: 'Fast, lightweight business laptop built for work and travel. Fully tested with verified 90%+ battery health, fast SSD storage, and fresh Windows 11 Pro.',
    price: 549,
    currency: 'EUR',
    availability: 'In Stock',
    images: [
      'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=1200&q=80'
    ],
    features: [
      'Fully tested and cleaned in our Trofa workshop',
      'Comfortable backlit keyboard and sharp Full HD screen',
      'Fast fingerprint reader and face login for easy security',
      'Durable, lightweight design made to last for years'
    ],
    fullSpecs: [
      { label: 'Processor', value: 'Intel Core i7-1165G7 (4 Cores, 8 Threads, up to 4.70 GHz)' },
      { label: 'Memory', value: '16GB LPDDR4x 4266MHz' },
      { label: 'Storage', value: '512GB PCIe NVMe SSD' },
      { label: 'Display', value: '14.0" Full HD (1920x1080) IPS, Anti-Glare' },
      { label: 'Graphics', value: 'Intel Iris Xe Graphics' },
      { label: 'Battery Health', value: 'Tested 92%+ Original Capacity' },
      { label: 'Operating System', value: 'Windows 11 Pro (Genuine License)' },
      { label: 'Weight', value: '1.28 kg' }
    ],
    portsAndConnectivity: [
      '2x Thunderbolt 4 / USB-C ports',
      '2x USB 3.2 ports',
      '1x HDMI 2.0 port',
      '1x Headphone / Microphone combo jack',
      'Wi-Fi 6 + Bluetooth 5.2'
    ],
    warrantyMonths: 12,
    featured: true
  },
  {
    id: 'prod-dell-latitude-5420',
    slug: 'dell-latitude-5420',
    name: 'Dell Latitude 5420 Business Laptop',
    brand: 'Dell',
    category: 'used-refurbished',
    subCategory: 'Laptops',
    condition: 'Refurbished - Grade A',
    keySpecs: 'Intel Core i5-1145G7 • 16GB DDR4 • 256GB NVMe SSD • 14" FHD IPS',
    description: 'Reliable everyday work laptop with fast multitasking, clear screen, and long battery life. Great for office work, accounting, and remote jobs.',
    price: 439,
    currency: 'EUR',
    availability: 'In Stock',
    images: [
      'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=1200&q=80'
    ],
    features: [
      'Smooth performance for office apps, browsing, and video calls',
      'Fast charging battery (charges up to 80% in about an hour)',
      'Clear microphone and speakers for online meetings',
      'Freshly serviced with clean Windows 11 Pro installed'
    ],
    fullSpecs: [
      { label: 'Processor', value: 'Intel Core i5-1145G7 (4 Cores, 8 Threads, up to 4.40 GHz)' },
      { label: 'Memory', value: '16GB DDR4 (Expandable to 64GB)' },
      { label: 'Storage', value: '256GB PCIe NVMe SSD' },
      { label: 'Display', value: '14.0" Full HD (1920x1080) Anti-Glare' },
      { label: 'Network', value: 'Wi-Fi 6 + Gigabit Ethernet port' },
      { label: 'Operating System', value: 'Windows 11 Pro' }
    ],
    portsAndConnectivity: [
      '2x Thunderbolt 4 / USB-C ports',
      '2x USB 3.2 ports',
      '1x HDMI 2.0 port',
      '1x Gigabit Ethernet port',
      '1x MicroSD card reader'
    ],
    warrantyMonths: 12,
    featured: true
  },
  {
    id: 'prod-hp-elitebook-840-g8',
    slug: 'hp-elitebook-840-g8',
    name: 'HP EliteBook 840 G8 Aluminium Laptop',
    brand: 'HP',
    category: 'used-refurbished',
    subCategory: 'Laptops',
    condition: 'Refurbished - Grade A+',
    keySpecs: 'Intel Core i7-1185G7 • 32GB DDR4 • 1TB NVMe SSD • Bang & Olufsen Audio',
    description: 'Premium metal business laptop with extra-large 32GB memory and 1TB storage. Perfect for demanding tasks, large spreadsheets, and heavy multitasking.',
    price: 689,
    currency: 'EUR',
    availability: 'In Stock',
    images: [
      'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1200&q=80'
    ],
    features: [
      'Sleek and sturdy all-aluminum body',
      'High-quality Bang & Olufsen sound and clear microphones',
      'Generous 32GB memory and 1TB SSD for fast file handling'
    ],
    fullSpecs: [
      { label: 'Processor', value: 'Intel Core i7-1185G7 (up to 4.80 GHz)' },
      { label: 'Memory', value: '32GB DDR4' },
      { label: 'Storage', value: '1TB PCIe NVMe SSD' },
      { label: 'Display', value: '14.0" Full HD IPS Anti-Glare' },
      { label: 'Audio', value: 'Bang & Olufsen Stereo Speakers' }
    ],
    portsAndConnectivity: [
      '2x Thunderbolt 4 USB-C ports',
      '2x USB 3.0 ports',
      '1x HDMI 2.0 port',
      'Wi-Fi 6 + Bluetooth 5.0'
    ],
    warrantyMonths: 12,
    featured: false
  },
  {
    id: 'prod-dell-precision-5820',
    slug: 'dell-precision-5820-workstation',
    name: 'Dell Precision 5820 Tower Workstation',
    brand: 'Dell',
    category: 'used-refurbished',
    subCategory: 'Workstations',
    condition: 'Refurbished - Grade A',
    keySpecs: 'Intel Xeon W-2145 • 64GB RAM • 1TB NVMe + 4TB HDD • NVIDIA Quadro RTX 4000',
    description: 'High-power desktop computer for 3D modeling, video editing, CAD design, and engineering software. Built for non-stop, heavy-duty workloads.',
    price: 1190,
    currency: 'EUR',
    availability: 'In Stock',
    images: [
      'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=1200&q=80'
    ],
    features: [
      'Certified for AutoCAD, SolidWorks, Revit, and Adobe Premiere',
      'Dedicated NVIDIA graphics card for fast 3D rendering',
      'Large 5TB total storage space for big project files'
    ],
    fullSpecs: [
      { label: 'Processor', value: 'Intel Xeon W-2145 (8 Cores, 16 Threads, up to 4.50 GHz)' },
      { label: 'Memory', value: '64GB DDR4 Memory' },
      { label: 'Graphics', value: 'NVIDIA Quadro RTX 4000 (8GB)' },
      { label: 'Primary SSD', value: '1TB Fast NVMe SSD' },
      { label: 'Secondary HDD', value: '4TB Storage Hard Drive' },
      { label: 'Power Supply', value: '950W High-Efficiency Power Supply' }
    ],
    portsAndConnectivity: [
      'Front: 2x USB 3.0, 2x USB-C, Audio jack, SD card slot',
      'Rear: 6x USB 3.0, Gigabit Ethernet port, Audio in/out',
      'Display: 3x DisplayPort 1.4 (supports 4K & 8K screens)'
    ],
    warrantyMonths: 12,
    featured: true
  },
  {
    id: 'prod-dell-ultrasharp-u2722d',
    slug: 'dell-ultrasharp-u2722d-monitor',
    name: 'Dell UltraSharp U2722D 27" 2K QHD Monitor',
    brand: 'Dell',
    category: 'monitors',
    subCategory: 'Monitors',
    condition: 'Refurbished - Grade A+',
    keySpecs: '27" IPS • 2560 x 1440 (2K QHD) • Accurate Colors • Fully Adjustable Stand',
    description: 'Crisp 27-inch 2K monitor with ultra-thin borders and true-to-life colors. Easy on the eyes for long work hours, with height, tilt, and swivel adjustments.',
    price: 249,
    currency: 'EUR',
    availability: 'In Stock',
    images: [
      'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=1200&q=80'
    ],
    features: [
      'Sharp 2K resolution (2560 x 1440) for clear text and photos',
      'Low blue-light filter to reduce eye strain during work',
      'Easily adjust height, tilt, and rotate 90 degrees'
    ],
    fullSpecs: [
      { label: 'Screen Size', value: '27.0 Inch (68.5 cm)' },
      { label: 'Resolution', value: '2560 x 1440 (QHD 2K) at 60 Hz' },
      { label: 'Panel Type', value: 'IPS with Anti-Glare finish' },
      { label: 'Color Accuracy', value: '100% sRGB for realistic colors' },
      { label: 'Contrast', value: '1000:1' }
    ],
    portsAndConnectivity: [
      '1x HDMI port',
      '1x DisplayPort in & 1x DisplayPort out',
      '1x USB-C port',
      '3x High-speed USB ports'
    ],
    warrantyMonths: 12,
    featured: false
  },

  // 2. Apple
  {
    id: 'prod-macbook-pro-14-m1pro',
    slug: 'apple-macbook-pro-14-m1-pro',
    name: 'Apple MacBook Pro 14" (M1 Pro Chip)',
    brand: 'Apple',
    category: 'apple',
    subCategory: 'MacBook Pro',
    condition: 'Refurbished - Grade A+',
    keySpecs: 'Apple M1 Pro chip • 16GB Memory • 512GB Fast SSD • Liquid Retina XDR 120Hz Screen',
    description: 'Super fast Apple laptop for video editing, software development, and design. Beautiful bright Liquid Retina screen and all-day battery life.',
    price: 1290,
    currency: 'EUR',
    availability: 'In Stock',
    images: [
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=1200&q=80'
    ],
    features: [
      'Brilliant Liquid Retina XDR screen with deep blacks and vivid colors',
      '1080p HD camera for crisp video calls',
      '6-speaker sound system with clear bass',
      'Long-lasting battery tested at 94%+ original health'
    ],
    fullSpecs: [
      { label: 'Processor', value: 'Apple M1 Pro (8-Core CPU / 14-Core GPU)' },
      { label: 'Memory', value: '16GB Unified Memory' },
      { label: 'Storage', value: '512GB High-Speed SSD' },
      { label: 'Display', value: '14.2" Liquid Retina XDR (3024x1964), 120Hz' },
      { label: 'Battery Health', value: 'Tested 94% original health' },
      { label: 'Operating System', value: 'macOS (Fresh factory setup)' }
    ],
    portsAndConnectivity: [
      '3x Thunderbolt 4 (USB-C) ports',
      '1x HDMI port',
      '1x SD Card slot',
      '1x MagSafe 3 charging port',
      '1x Headphone jack'
    ],
    warrantyMonths: 12,
    featured: true
  },
  {
    id: 'prod-macbook-air-m2',
    slug: 'apple-macbook-air-13-m2',
    name: 'Apple MacBook Air 13.6" (M2 Chip)',
    brand: 'Apple',
    category: 'apple',
    subCategory: 'MacBook Air',
    condition: 'Open Box / Like New',
    keySpecs: 'Apple M2 Chip • 16GB Memory • 256GB SSD • Midnight Finish',
    description: 'Thin, silent, and fast Apple laptop with up to 18 hours of battery. Great for everyday work, studying, writing, and browsing.',
    price: 980,
    currency: 'EUR',
    availability: 'In Stock',
    images: [
      'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=1200&q=80'
    ],
    features: [
      'Completely silent fanless design with zero noise',
      'Upgraded 16GB memory for smooth multitasking',
      'Easy magnetic MagSafe charging cable'
    ],
    fullSpecs: [
      { label: 'Processor', value: 'Apple M2 (8-Core CPU / 8-Core GPU)' },
      { label: 'Memory', value: '16GB Unified Memory' },
      { label: 'Storage', value: '256GB Fast SSD' },
      { label: 'Display', value: '13.6" Liquid Retina screen (2560x1664)' },
      { label: 'Battery Life', value: 'Up to 18 hours of typical use' }
    ],
    portsAndConnectivity: [
      '2x Thunderbolt / USB 4 ports',
      '1x MagSafe 3 charging port',
      '1x Headphone jack',
      'Wi-Fi 6 + Bluetooth 5.3'
    ],
    warrantyMonths: 12,
    featured: false
  },
  {
    id: 'prod-mac-mini-m2',
    slug: 'apple-mac-mini-m2',
    name: 'Apple Mac mini (M2 Chip)',
    brand: 'Apple',
    category: 'apple',
    subCategory: 'Mac mini',
    condition: 'Refurbished - Grade A+',
    keySpecs: 'Apple M2 Chip • 16GB Memory • 512GB SSD • Gigabit Ethernet',
    description: 'Compact desktop Mac that packs huge speed into a small box. Just plug in your monitor, keyboard, and mouse and you are ready to work.',
    price: 720,
    currency: 'EUR',
    availability: 'In Stock',
    images: [
      'https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?auto=format&fit=crop&w=1200&q=80'
    ],
    features: [
      'Connect up to two external monitors at once',
      'Quiet and energy-efficient in a small desktop size'
    ],
    fullSpecs: [
      { label: 'Processor', value: 'Apple M2 8-Core CPU' },
      { label: 'Graphics', value: '10-Core GPU' },
      { label: 'Memory', value: '16GB Unified Memory' },
      { label: 'Storage', value: '512GB Fast SSD' },
      { label: 'Audio', value: 'Built-in speaker & headphone jack' }
    ],
    portsAndConnectivity: [
      '2x Thunderbolt 4 / USB-C ports',
      '2x Standard USB-A ports',
      '1x HDMI port',
      '1x Gigabit Ethernet port',
      '1x Headphone jack'
    ],
    warrantyMonths: 12,
    featured: false
  },

  // 3. Servers & Storage
  {
    id: 'prod-dell-poweredge-r640',
    slug: 'dell-poweredge-r640-1u-server',
    name: 'Dell PowerEdge R640 1U Rack Server',
    brand: 'Dell EMC',
    category: 'servers-storage',
    subCategory: 'Servers',
    condition: 'Tested & Certified',
    keySpecs: '2x Intel Xeon Silver 4214 (24 Cores) • 128GB ECC RAM • 8x 2.5" Bays • Dual Power Supplies',
    description: 'Dependable 1U rack server for business databases, virtualization, and file sharing. Fully tested with dual power supplies for non-stop reliability.',
    price: 1850,
    currency: 'EUR',
    availability: 'In Stock',
    images: [
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80'
    ],
    features: [
      'Two backup power supplies so the server never shuts down',
      'Dell iDRAC9 remote management for easy remote control',
      '72-Hour continuous stress test passed before dispatch'
    ],
    fullSpecs: [
      { label: 'Processors', value: '2x Intel Xeon Silver 4214 (Total 24 Cores / 48 Threads)' },
      { label: 'Memory', value: '128GB ECC Server Memory' },
      { label: 'Drive Bays', value: '8x 2.5" Hot-Plug Bays (Caddies included)' },
      { label: 'RAID Controller', value: 'Dell PERC H730P with 2GB Cache' },
      { label: 'Network', value: '2x 10GbE + 2x 1GbE Ethernet ports' },
      { label: 'Power', value: 'Dual 750W Redundant Power Supplies' },
      { label: 'Form Factor', value: '1U Rackmount (Includes slide rails)' }
    ],
    portsAndConnectivity: [
      'Front: USB, VGA, iDRAC direct port',
      'Rear: 2x 10GbE ports, 2x 1GbE ports, dedicated remote management port, USB ports',
      'Expansion: 3x PCIe slots'
    ],
    warrantyMonths: 12,
    featured: true
  },
  {
    id: 'prod-hpe-proliant-dl380-gen10',
    slug: 'hpe-proliant-dl380-gen10-2u-server',
    name: 'HPE ProLiant DL380 Gen10 2U Server',
    brand: 'HPE',
    category: 'servers-storage',
    subCategory: 'Servers',
    condition: 'Tested & Certified',
    keySpecs: '2x Intel Xeon Gold 5218 (32 Cores) • 256GB RAM • 8x 2.5" Bays • HPE iLO 5',
    description: 'High-capacity 2U business server configured with 32 processor cores and 256GB memory. Great for running multiple virtual machines and large databases.',
    price: 2790,
    currency: 'EUR',
    availability: 'In Stock',
    images: [
      'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80'
    ],
    features: [
      'Built-in hardware security to protect server firmware',
      'HPE iLO 5 Advanced remote management included',
      'Dual backup power supplies for 24/7 reliability'
    ],
    fullSpecs: [
      { label: 'Processors', value: '2x Intel Xeon Gold 5218 (Total 32 Cores / 64 Threads)' },
      { label: 'Memory', value: '256GB ECC DDR4 Memory' },
      { label: 'Storage Controller', value: 'HPE Smart Array P408i-a with 2GB Cache' },
      { label: 'Network', value: '4x 1GbE Ethernet ports + 2x 10G SFP+ ports' },
      { label: 'Remote Access', value: 'HPE iLO 5 Advanced' },
      { label: 'Form Factor', value: '2U Rackmount (Includes slide rails)' }
    ],
    portsAndConnectivity: [
      '4x 1GbE ports + 2x 10G ports',
      'Dedicated remote management port',
      'USB 3.0 ports & display connections'
    ],
    warrantyMonths: 12,
    featured: true
  },
  {
    id: 'prod-synology-ds923plus',
    slug: 'synology-diskstation-ds923plus-nas',
    name: 'Synology DiskStation DS923+ 4-Bay Storage (NAS)',
    brand: 'Synology',
    category: 'servers-storage',
    subCategory: 'NAS',
    condition: 'Open Box / Like New',
    keySpecs: 'AMD Ryzen Dual-Core • 16GB RAM • 4x Drive Bays • 2x M.2 NVMe Cache Slots',
    description: 'Easy-to-use central storage system for office file sharing, automatic computer backups, and security camera recording.',
    price: 610,
    currency: 'EUR',
    availability: 'In Stock',
    images: [
      'https://images.unsplash.com/photo-1597852074816-d933c7d2b988?auto=format&fit=crop&w=1200&q=80'
    ],
    features: [
      'Simple web interface to share files across Windows, Mac, and mobile',
      'Automatic daily backups for all office computers',
      'Can hold up to 4 hard drives and be expanded later'
    ],
    fullSpecs: [
      { label: 'Processor', value: 'AMD Ryzen R1600 Dual-Core' },
      { label: 'Memory', value: '16GB DDR4 RAM' },
      { label: 'Drive Bays', value: '4x 3.5" or 2.5" SATA hard drive bays' },
      { label: 'Cache Slots', value: '2x M.2 NVMe slots for extra speed' }
    ],
    portsAndConnectivity: [
      '2x 1GbE Gigabit Network ports',
      '2x USB 3.2 ports',
      '1x eSATA expansion port'
    ],
    warrantyMonths: 12,
    featured: false
  },

  // 4. Networking Equipment
  {
    id: 'prod-cisco-catalyst-2960x',
    slug: 'cisco-catalyst-2960x-48fps-l',
    name: 'Cisco Catalyst 2960X 48-Port PoE+ Gigabit Switch',
    brand: 'Cisco',
    category: 'networking',
    subCategory: 'Managed Switches',
    condition: 'Refurbished - Grade A+',
    keySpecs: '48x Gigabit Ethernet Ports • 740W PoE+ Power • 4x 1G SFP Uplinks • Cisco IOS',
    description: 'Reliable 48-port Cisco network switch that sends power and high-speed internet through the same cable to IP phones, Wi-Fi access points, and security cameras.',
    price: 380,
    currency: 'EUR',
    availability: 'In Stock',
    images: [
      'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80'
    ],
    features: [
      'Powers up to 48 devices over the network cable (PoE+)',
      'Enterprise-grade reliability tested in our workshop',
      'Includes rackmount brackets and power cord'
    ],
    fullSpecs: [
      { label: 'Ports', value: '48x Gigabit Ethernet ports + 4x 1G SFP optical slots' },
      { label: 'PoE Power Budget', value: '740W total power for connected devices' },
      { label: 'Switching Capacity', value: '216 Gbps' }
    ],
    portsAndConnectivity: [
      '48x Gigabit RJ45 PoE+ ports',
      '4x 1G SFP optical ports',
      'Console management ports'
    ],
    warrantyMonths: 12,
    featured: true
  },
  {
    id: 'prod-ubiquiti-udm-pro',
    slug: 'ubiquiti-unifi-dream-machine-pro',
    name: 'Ubiquiti UniFi Dream Machine Pro (UDM-Pro)',
    brand: 'Ubiquiti',
    category: 'networking',
    subCategory: 'Routers',
    condition: 'Open Box / Like New',
    keySpecs: 'High-Speed Security Router • 8-Port Switch • Built-in Firewall • UniFi App Control',
    description: 'All-in-one internet router, firewall, and camera recorder for offices and smart homes. Control your entire network easily from a clean web app or your phone.',
    price: 420,
    currency: 'EUR',
    availability: 'In Stock',
    images: [
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80'
    ],
    features: [
      'Built-in firewall to protect your office internet from hackers',
      'Connect two internet providers for automatic backup if one goes down',
      'Hard drive slot for security camera recording'
    ],
    fullSpecs: [
      { label: 'Processor', value: 'Quad-Core 1.7 GHz Processor' },
      { label: 'Memory', value: '4GB RAM' },
      { label: 'Security Throughput', value: '3.5 Gbps fast threat filtering' },
      { label: 'Hard Drive Bay', value: '1x 3.5" or 2.5" SATA hard drive slot' }
    ],
    portsAndConnectivity: [
      '2x 10G SFP+ fiber ports (WAN/LAN)',
      '8x Gigabit Ethernet LAN ports',
      '1x Gigabit WAN port'
    ],
    warrantyMonths: 12,
    featured: true
  },
  {
    id: 'prod-ubiquiti-u6-pro',
    slug: 'ubiquiti-unifi-6-pro-access-point',
    name: 'Ubiquiti UniFi 6 Pro Fast Wi-Fi Access Point',
    brand: 'Ubiquiti',
    category: 'networking',
    subCategory: 'Wi-Fi Access Points',
    condition: 'Open Box / Like New',
    keySpecs: 'Wi-Fi 6 • Up to 5.3 Gbps Total Speed • Handles 300+ Devices • Ceiling / Wall Mount',
    description: 'Fast, ceiling-mounted Wi-Fi 6 access point. Delivers strong, reliable wireless internet across busy offices, meeting rooms, and stores without slow-downs.',
    price: 165,
    currency: 'EUR',
    availability: 'In Stock',
    images: [
      'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80'
    ],
    features: [
      'Fast Wi-Fi 6 speeds for seamless video calls and file downloads',
      'Supports 300+ connected phones, laptops, and tablets smoothly',
      'Powered through the network cable (PoE)'
    ],
    fullSpecs: [
      { label: 'Wi-Fi Standard', value: 'Wi-Fi 6 (802.11ax)' },
      { label: 'Speed', value: 'Up to 4.8 Gbps on 5GHz + 573 Mbps on 2.4GHz' },
      { label: 'Power', value: 'Powered via network cable (PoE+)' }
    ],
    portsAndConnectivity: [
      '1x Gigabit Ethernet port (PoE in)'
    ],
    warrantyMonths: 12,
    featured: false
  },
  {
    id: 'prod-mikrotik-crs328',
    slug: 'mikrotik-crs328-24p-4s-plus-rm',
    name: 'MikroTik 24-Port Gigabit PoE+ Switch',
    brand: 'MikroTik',
    category: 'networking',
    subCategory: 'Managed Switches',
    condition: 'Refurbished - Grade A+',
    keySpecs: '24x Gigabit PoE Ports • 4x 10G SFP+ Ports • 500W Power Supply',
    description: 'Versatile 24-port network switch that powers Wi-Fi access points, cameras, and phones, with four fast 10G fiber ports for quick server connections.',
    price: 395,
    currency: 'EUR',
    availability: 'In Stock',
    images: [
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80'
    ],
    features: [
      'Powers up to 24 connected devices over ethernet cables',
      'Four ultra-fast 10G fiber connections'
    ],
    fullSpecs: [
      { label: 'Ports', value: '24x Gigabit Ethernet + 4x 10G SFP+ fiber ports' },
      { label: 'PoE Output', value: '450W total power for connected devices' },
      { label: 'Switching Capacity', value: '128 Gbps' }
    ],
    portsAndConnectivity: [
      '24x Gigabit Ethernet PoE ports',
      '4x 10G SFP+ fiber ports',
      '1x Serial console port'
    ],
    warrantyMonths: 12,
    featured: false
  },

  // 5. Cybersecurity Hardware
  {
    id: 'prod-fortinet-fortigate-60f',
    slug: 'fortinet-fortigate-60f-firewall',
    name: 'Fortinet FortiGate 60F Business Firewall',
    brand: 'Fortinet',
    category: 'cybersecurity',
    subCategory: 'Firewall Appliances',
    condition: 'Tested & Certified',
    keySpecs: 'Fast Firewall • Built-in Threat Protection • Secure Remote VPN • Compact Desktop Box',
    description: 'Top-rated hardware firewall that blocks online threats, filters risky websites, and lets staff connect securely to the office from home.',
    price: 490,
    currency: 'EUR',
    availability: 'In Stock',
    images: [
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80'
    ],
    features: [
      'Stops viruses and hackers before they reach your office computers',
      'Fast encrypted VPN for work-from-home team members',
      'Quiet and compact metal box suitable for any office desk or shelf'
    ],
    fullSpecs: [
      { label: 'Firewall Speed', value: 'Up to 10 Gbps fast throughput' },
      { label: 'Threat Protection', value: '700 Mbps real-time protection' },
      { label: 'VPN Capacity', value: 'Connects up to 500 remote users securely' }
    ],
    portsAndConnectivity: [
      '2x Internet (WAN) ports',
      '1x DMZ port',
      '5x Internal Network ports',
      'Console & USB ports'
    ],
    warrantyMonths: 12,
    featured: true
  },
  {
    id: 'prod-sophos-xgs-116',
    slug: 'sophos-xgs-116-security-gateway',
    name: 'Sophos XGS 116 Business Security Firewall',
    brand: 'Sophos',
    category: 'cybersecurity',
    subCategory: 'Security Gateways',
    condition: 'Tested & Certified',
    keySpecs: 'Dual-Processor Security • 7.7 Gbps Firewall • Safe Web Filtering • 8x Gigabit Ports',
    description: 'Easy-to-manage security firewall that scans web traffic, stops malware, and keeps your office internet running fast and protected.',
    price: 580,
    currency: 'EUR',
    availability: 'Limited Stock',
    images: [
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80'
    ],
    features: [
      'Fast dual-processor design keeps internet speeds high while scanning for threats',
      'Simple web control panel to manage office internet access',
      'Includes power adapter and warranty'
    ],
    fullSpecs: [
      { label: 'Firewall Speed', value: '7,700 Mbps' },
      { label: 'Threat Protection', value: '685 Mbps' },
      { label: 'Memory & Storage', value: '4GB RAM / 64GB SSD Storage' }
    ],
    portsAndConnectivity: [
      '8x Gigabit Ethernet ports',
      '1x SFP fiber port',
      'Console & USB ports'
    ],
    warrantyMonths: 12,
    featured: true
  },
  {
    id: 'prod-netgate-6100-pfsense',
    slug: 'netgate-6100-pfsense-plus-security-gateway',
    name: 'Netgate 6100 Security Gateway (pfSense+)',
    brand: 'Netgate',
    category: 'cybersecurity',
    subCategory: 'Secure Gateways',
    condition: 'Open Box / Like New',
    keySpecs: 'Quad-Core Processor • 8GB RAM • 2x 10G SFP+ Ports • No Monthly User Fees',
    description: 'Powerful firewall and VPN gateway with zero monthly license fees. Gives you complete control over your office network and remote work connections.',
    price: 790,
    currency: 'EUR',
    availability: 'In Stock',
    images: [
      'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80'
    ],
    features: [
      'No monthly or yearly per-user license fees for VPN connections',
      'Super fast 10G and 2.5G fiber and ethernet connections',
      'Pre-configured and tested for reliable business security'
    ],
    fullSpecs: [
      { label: 'Processor', value: 'Intel Atom Quad-Core 2.2 GHz' },
      { label: 'Memory', value: '8GB DDR4 RAM' },
      { label: 'Storage', value: '16GB Flash + NVMe expansion slot' },
      { label: 'Routing Speed', value: 'Up to 18.6 Gbps' }
    ],
    portsAndConnectivity: [
      '2x 10G SFP+ fiber ports',
      '2x 2.5G SFP combo ports',
      '4x 2.5GbE network ports',
      'USB & Console ports'
    ],
    warrantyMonths: 12,
    featured: false
  },

  // 6. Monitors
  {
    id: 'prod-hp-e24-g4-fhd',
    slug: 'hp-e24-g4-fhd-business-monitor',
    name: 'HP E24 G4 24" FHD Ergonomic Business Monitor',
    brand: 'HP',
    category: 'monitors',
    subCategory: 'Business Monitors',
    condition: 'Refurbished - Grade A+',
    keySpecs: '23.8" IPS • 1920x1080 (Full HD) • HP Eye Ease Low Blue Light • 4-Way Ergonomic Stand',
    description: 'Comfortable 24-inch Full HD monitor built for business productivity with continuous low blue-light hardware filtering and complete height, tilt, and swivel ergonomics.',
    price: 135,
    currency: 'EUR',
    availability: 'In Stock',
    images: [
      'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=1200&q=80'
    ],
    features: [
      'Hardware-integrated low-blue-light filter for all-day eye comfort',
      '3-sided micro-edge bezel perfect for multi-screen setups',
      'Full 4-way ergonomic adjustability (height, pivot, swivel, tilt)'
    ],
    fullSpecs: [
      { label: 'Screen Size', value: '23.8 Inch (60.45 cm)' },
      { label: 'Resolution', value: '1920 x 1080 (FHD) at 60 Hz' },
      { label: 'Panel Type', value: 'IPS with Anti-Glare 3H Coating' },
      { label: 'Brightness', value: '250 cd/m²' },
      { label: 'Response Time', value: '5ms GtG' }
    ],
    portsAndConnectivity: [
      '1x HDMI 1.4 port',
      '1x DisplayPort 1.2',
      '1x VGA port',
      '4x USB 3.2 Gen 1 downstream ports'
    ],
    warrantyMonths: 12,
    featured: false
  },
  {
    id: 'prod-lg-34wn80c-ultrawide',
    slug: 'lg-34wn80c-b-34-ultrawide-monitor',
    name: 'LG 34WN80C-B 34" UltraWide QHD Curved USB-C Monitor',
    brand: 'LG',
    category: 'monitors',
    subCategory: 'Professional Monitors',
    condition: 'Refurbished - Grade A',
    keySpecs: '34" 21:9 Curved IPS • 3440 x 1440 WQHD • HDR10 • 60W USB-C Single-Cable Hub',
    description: 'Expansive 34-inch curved ultrawide display replacing dual monitors with a single seamless workspace. Powers your laptop and outputs display over a single USB-C cable.',
    price: 440,
    currency: 'EUR',
    availability: 'In Stock',
    images: [
      'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=1200&q=80'
    ],
    features: [
      '21:9 UltraWide WQHD panorama eliminates bezel gaps between screens',
      'Single USB-C cable charges laptop (60W) and transfers data/video',
      'sRGB 99% color gamut with HDR10 support for design and spreadsheets'
    ],
    fullSpecs: [
      { label: 'Screen Size', value: '34.0 Inch Curved (21:9 Aspect Ratio)' },
      { label: 'Resolution', value: '3440 x 1440 (UltraWide QHD)' },
      { label: 'Panel Type', value: 'IPS Curved Display' },
      { label: 'Color Gamut', value: 'sRGB 99% (CIE1931)' }
    ],
    portsAndConnectivity: [
      '1x USB-C (DisplayPort Alt Mode, 60W Power Delivery)',
      '2x HDMI 2.0 ports',
      '1x DisplayPort 1.4',
      '2x USB 3.0 downstream ports',
      '1x Headphone Out'
    ],
    warrantyMonths: 12,
    featured: false
  },

  // 7. IT Accessories
  {
    id: 'prod-dell-wd19tbs-dock',
    slug: 'dell-wd19tbs-thunderbolt-dock',
    name: 'Dell WD19TBS Thunderbolt 3 130W Enterprise Docking Station',
    brand: 'Dell',
    category: 'it-accessories',
    subCategory: 'Docking Stations',
    condition: 'Refurbished - Grade A+',
    keySpecs: 'Thunderbolt 3 • 130W Power Delivery • Supports 3x 4K Monitors • Gigabit Ethernet',
    description: 'Enterprise Thunderbolt docking station providing instant dual or triple monitor connections, high-speed peripherals, gigabit network, and 130W laptop charging via one cable.',
    price: 145,
    currency: 'EUR',
    availability: 'In Stock',
    images: [
      'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80'
    ],
    features: [
      '130W Power Delivery charges Dell and non-Dell Thunderbolt laptops reliably',
      'Connect up to three 4K displays or one 5K display simultaneously',
      'Modular design with enterprise IT manageability support (MAC Pass-through)'
    ],
    fullSpecs: [
      { label: 'Host Interface', value: 'Thunderbolt 3 (USB-C cable attached)' },
      { label: 'Power Output', value: '130W to Dell systems / 90W to standard USB-C' },
      { label: 'Max Displays', value: 'Up to 3x 4K displays at 60Hz' },
      { label: 'Power Adapter', value: 'Includes 180W original AC adapter' }
    ],
    portsAndConnectivity: [
      '1x Thunderbolt 3 downstream port',
      '2x DisplayPort 1.4',
      '1x HDMI 2.0b',
      '1x USB-C Multifunction DisplayPort',
      '3x USB 3.1 Gen 1 ports',
      '1x Gigabit Ethernet RJ-45'
    ],
    warrantyMonths: 12,
    featured: false
  },
  {
    id: 'prod-logitech-mx-master-3s',
    slug: 'logitech-mx-master-3s-business',
    name: 'Logitech MX Master 3S for Business Performance Mouse',
    brand: 'Logitech',
    category: 'it-accessories',
    subCategory: 'Keyboards & Mice',
    condition: 'Open Box / Like New',
    keySpecs: '8000 DPI Darkfield Tracking • Quiet Clicks • MagSpeed Electromagnetic Scroll • USB-C Quick Charge',
    description: 'The industry-standard precision mouse for developers, analysts, and designers. Tracks smoothly on any surface including glass with virtually silent clicks and ultra-fast scrolling.',
    price: 79,
    currency: 'EUR',
    availability: 'In Stock',
    images: [
      'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=1200&q=80'
    ],
    features: [
      'MagSpeed wheel scrolls 1,000 lines per second with pixel precision',
      'Connects to up to 3 computers via Bluetooth or Logi Bolt Secure USB',
      '70 days battery life on a full charge; 3 hours from a 1-minute quick charge'
    ],
    fullSpecs: [
      { label: 'Sensor', value: '8000 DPI Darkfield High Precision (works on glass)' },
      { label: 'Connectivity', value: 'Logi Bolt USB Receiver + Bluetooth Low Energy' },
      { label: 'Battery', value: 'Rechargeable Li-Po (500 mAh) via USB-C' },
      { label: 'Compatibility', value: 'Windows, macOS, Linux, ChromeOS' }
    ],
    portsAndConnectivity: [
      '1x USB-C Charging Port',
      'Logi Bolt Secure Wireless Dongle included'
    ],
    warrantyMonths: 12,
    featured: false
  },
  {
    id: 'prod-lenovo-thinkpad-usbc-dock',
    slug: 'lenovo-thinkpad-universal-usb-c-dock',
    name: 'Lenovo ThinkPad Universal USB-C Dock 90W',
    brand: 'Lenovo',
    category: 'it-accessories',
    subCategory: 'Docking Stations',
    condition: 'Refurbished - Grade A+',
    keySpecs: 'Universal USB-C • 65W Power Delivery • Dual DisplayPort 1.4 + HDMI • 4x USB 3.2 Ports',
    description: 'Universal USB-C dock for modern business laptops. Supports dual external monitors, wired network connection, and clean cable management for hybrid workstations.',
    price: 110,
    currency: 'EUR',
    availability: 'In Stock',
    images: [
      'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80'
    ],
    features: [
      'Works with Lenovo ThinkPad, Dell Latitude, HP EliteBook, and MacBooks',
      'Plug-and-play setup with PXE boot and Wake-on-LAN corporate support',
      'Includes original Lenovo 90W Slim-Tip power supply and USB-C cable'
    ],
    fullSpecs: [
      { label: 'Docking Interface', value: 'USB-C (Detachable cable)' },
      { label: 'Video Ports', value: '2x DisplayPort 1.4, 1x HDMI 2.0' },
      { label: 'Power Output', value: '65W Power Delivery to connected laptop' },
      { label: 'Max External Screens', value: 'Up to 2x 4K @ 60Hz or 3x 1080p' }
    ],
    portsAndConnectivity: [
      '2x DisplayPort 1.4',
      '1x HDMI 2.0',
      '3x USB 3.2 Gen 2 (10 Gbps)',
      '2x USB 2.0',
      '1x USB-C (Data)',
      '1x Gigabit Ethernet RJ45',
      '1x Audio Combo Jack'
    ],
    warrantyMonths: 12,
    featured: false
  }
];
