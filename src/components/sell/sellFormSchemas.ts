import { EquipmentCategoryKey } from './SellEquipmentInteractiveForm';

export interface DynamicDeviceState {
  // Common
  brand: string;
  model: string;
  functionalCondition: string;
  quantity: number;
  notes: string;

  // Laptop specific
  processor?: string;
  ram?: string;
  storage?: string;
  storageType?: string;
  screenSize?: string;
  gpu?: string;
  batteryHealth?: string;
  operatingSystem?: string;
  chargerIncluded?: string;

  // Desktop specific
  powerCableIncluded?: string;
  monitorIncluded?: string;

  // Mobile specific
  color?: string;
  networkStatus?: string;
  simType?: string;
  ptaApproved?: string;
  biometricsWorking?: string;
  screenCondition?: string;
  cameraCondition?: string;
  chargingPortWorking?: string;
  accessoriesIncluded?: string;

  // Tablet specific
  connectivity?: string;
  stylusIncluded?: string;

  // Server specific
  cpuType?: string;
  processorCount?: string;
  raidConfig?: string;
  rackFormFactor?: string;
  powerSupplyCount?: string;

  // Network specific
  networkEquipType?: string;
  portCount?: string;
  managedType?: string;
  poeSupport?: string;
  wirelessSupport?: string;
  firmwareVersion?: string;

  // Storage specific
  storageDeviceType?: string;
  storageInterface?: string;
  readSpeed?: string;
  writeSpeed?: string;
  healthStatus?: string;
  encryption?: string;
}

export const DEFAULT_DEVICE_STATES: Record<EquipmentCategoryKey, DynamicDeviceState> = {
  laptop: {
    brand: 'Lenovo',
    model: '',
    processor: 'Intel Core i7',
    ram: '16 GB',
    storage: '512 GB',
    storageType: 'NVMe SSD',
    screenSize: '14.0"',
    gpu: 'Intel Iris Xe Graphics',
    batteryHealth: '85%+ (Excellent)',
    operatingSystem: 'Windows 11 Pro',
    chargerIncluded: 'Yes (Original OEM)',
    functionalCondition: 'Grade A (Minor cosmetic wear)',
    quantity: 1,
    notes: ''
  },
  desktop: {
    brand: 'Dell',
    model: '',
    processor: 'Intel Core i7',
    ram: '16 GB',
    storage: '512 GB',
    storageType: 'NVMe SSD',
    gpu: 'Dedicated GPU (NVIDIA / AMD)',
    operatingSystem: 'Windows 11 Pro',
    powerCableIncluded: 'Yes',
    monitorIncluded: 'No (Desktop Unit Only)',
    functionalCondition: 'Grade A (Minor cosmetic wear)',
    quantity: 1,
    notes: ''
  },
  mobile: {
    brand: 'Apple',
    model: '',
    storage: '256 GB',
    ram: '8 GB',
    color: 'Space Black / Midnight',
    screenSize: '6.1"',
    networkStatus: 'Unlocked (All Carriers)',
    simType: 'Physical SIM + eSIM',
    ptaApproved: 'Yes / Global Compliant',
    batteryHealth: '85%+ (Good)',
    biometricsWorking: 'Yes (Face ID / Touch ID 100% OK)',
    screenCondition: 'Flawless (No scratches)',
    cameraCondition: '100% Functional (Lenses clear)',
    chargingPortWorking: 'Yes (100% Functional)',
    accessoriesIncluded: 'Box + Cable',
    functionalCondition: 'Grade A (Minor cosmetic wear)',
    quantity: 1,
    notes: ''
  },
  tablet: {
    brand: 'Apple',
    model: '',
    storage: '256 GB',
    ram: '8 GB',
    screenSize: '11.0"',
    connectivity: 'Wi-Fi + 5G Cellular',
    stylusIncluded: 'Yes (Apple Pencil / Stylus)',
    batteryHealth: '85%+ (Good)',
    operatingSystem: 'iPadOS / Android',
    functionalCondition: 'Grade A (Minor cosmetic wear)',
    quantity: 1,
    notes: ''
  },
  server: {
    brand: 'Dell PowerEdge',
    model: '',
    cpuType: 'Dual Intel Xeon Gold',
    processorCount: '2 Processors',
    ram: '128 GB ECC Registered',
    storage: '4x 1.92TB Enterprise NVMe',
    storageType: 'Enterprise SAS / NVMe',
    raidConfig: 'PERC H740P (RAID 0,1,5,10)',
    rackFormFactor: '2U Rackmount',
    powerSupplyCount: '2x Redundant PSU (Hot-plug)',
    operatingSystem: 'VMware ESXi / Windows Server',
    functionalCondition: 'Grade A (Minor cosmetic wear)',
    quantity: 1,
    notes: ''
  },
  network: {
    brand: 'Cisco',
    model: '',
    networkEquipType: 'Managed Switch (Layer 3)',
    portCount: '48 Ports Gigabit + 4x 10G SFP+',
    managedType: 'Fully Managed (CLI + Web)',
    poeSupport: 'PoE+ (740W Total Budget)',
    wirelessSupport: 'Wi-Fi 6 / 6E Enterprise',
    firmwareVersion: 'Latest Stable OEM',
    powerCableIncluded: 'Yes (Dual Internal / Adapter)',
    functionalCondition: 'Grade A (Minor cosmetic wear)',
    quantity: 1,
    notes: ''
  },
  storage: {
    brand: 'Synology / SAN',
    model: '',
    storageDeviceType: 'NAS / SAN Storage Array',
    storage: '16 TB RAW (4x 4TB)',
    storageInterface: '10GbE SFP+ / SAS 12G',
    readSpeed: 'Up to 3,500 MB/s',
    writeSpeed: 'Up to 3,000 MB/s',
    healthStatus: '100% Health (0 Bad Sectors)',
    encryption: 'Hardware AES-256 NI',
    powerCableIncluded: 'Yes',
    functionalCondition: 'Grade A (Minor cosmetic wear)',
    quantity: 1,
    notes: ''
  },
  other: {
    brand: 'Other',
    model: '',
    functionalCondition: 'Grade A (Minor cosmetic wear)',
    quantity: 1,
    notes: ''
  }
};
