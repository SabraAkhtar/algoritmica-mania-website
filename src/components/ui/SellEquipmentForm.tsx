import React, { useState, useEffect, useRef } from 'react';
import { Language } from '../../types';
import { 
  CheckCircle2, 
  Send, 
  ShieldCheck, 
  AlertCircle, 
  Upload, 
  Check, 
  Laptop, 
  Server, 
  Network, 
  Apple, 
  Monitor,
  Smartphone,
  Layers, 
  Cpu,
  HardDrive,
  Building,
  User,
  Mail,
  Phone,
  Hash,
  Search,
  ChevronDown,
  FileSpreadsheet,
  X,
  Sparkles,
  Info,
  Sliders,
  FileCheck2,
  Trash2
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export type EquipmentCategoryKey = 
  | 'laptop'
  | 'mobile'
  | 'desktop'
  | 'server'
  | 'networking'
  | 'monitors'
  | 'apple'
  | 'bulk-fleet';

interface EquipmentOption {
  id: EquipmentCategoryKey;
  label: { en: string; pt: string };
  description: { en: string; pt: string };
  icon: React.ComponentType<{ className?: string }>;
  badge?: { en: string; pt: string };
}

const EQUIPMENT_OPTIONS: EquipmentOption[] = [
  {
    id: 'laptop',
    label: { en: 'Laptop / Notebook', pt: 'Portátil / Notebook' },
    description: { en: 'Business laptops, ultrabooks & workstations', pt: 'Portáteis empresariais, ultrabooks e workstations' },
    icon: Laptop,
    badge: { en: 'High Demand', pt: 'Procura Elevada' }
  },
  {
    id: 'mobile',
    label: { en: 'Mobile / Smartphone', pt: 'Telemóvel / Smartphone' },
    description: { en: 'Corporate smartphones & tablets (iOS & Android)', pt: 'Smartphones e tablets empresariais (iOS e Android)' },
    icon: Smartphone
  },
  {
    id: 'desktop',
    label: { en: 'Desktop / All-in-One / Workstation', pt: 'Computador Desktop / All-in-One' },
    description: { en: 'Towers, SFF, Micro PCs and All-in-One systems', pt: 'Torres, SFF, Micro PCs e sistemas All-in-One' },
    icon: Cpu
  },
  {
    id: 'server',
    label: { en: 'Server & Storage Infrastructure', pt: 'Servidores Rack & Armazenamento NAS' },
    description: { en: 'Rack/Tower servers, RAID arrays, SAN & NAS storage', pt: 'Servidores rack/torre, matrizes RAID, SAN e NAS' },
    icon: Server,
    badge: { en: 'Datacenter', pt: 'Datacenter' }
  },
  {
    id: 'networking',
    label: { en: 'Networking Equipment & Switches', pt: 'Equipamento de Rede & Switches' },
    description: { en: 'Managed switches, routers, firewalls & APs', pt: 'Switches geridos, routers, firewalls e APs Wi-Fi' },
    icon: Network
  },
  {
    id: 'monitors',
    label: { en: 'Monitors & Professional Displays', pt: 'Monitores & Ecrãs Profissionais' },
    description: { en: '24"-49" FHD, QHD, 4K UHD and Ultrawide monitors', pt: 'Monitores 24"-49" FHD, QHD, 4K UHD e Ultrawide' },
    icon: Monitor
  },
  {
    id: 'apple',
    label: { en: 'Apple Hardware (MacBook, iMac, Mac Studio)', pt: 'Hardware Apple (MacBook, iMac, Mac Studio)' },
    description: { en: 'MacBook Pro/Air M-series, Mac Studio, Mac mini', pt: 'MacBook Pro/Air Apple Silicon M1-M4, Mac Studio' },
    icon: Apple,
    badge: { en: 'Premium', pt: 'Premium' }
  },
  {
    id: 'bulk-fleet',
    label: { en: 'Bulk IT Fleet / Mixed Equipment Batch', pt: 'Lote Misto Empresarial / Frota Completa' },
    description: { en: 'Large decommissioned corporate fleets with inventory list', pt: 'Grandes frotas empresariais com lista de inventário' },
    icon: Layers,
    badge: { en: 'Fleet ITAD', pt: 'ITAD Frota' }
  }
];

interface SellEquipmentFormProps {
  lang: Language;
  defaultEquipmentType?: string;
  onSuccess?: () => void;
  className?: string;
}

export const SellEquipmentForm: React.FC<SellEquipmentFormProps> = ({
  lang,
  defaultEquipmentType,
  onSuccess,
  className = ''
}) => {
  const isPt = lang === 'pt';

  // State: Category dropdown
  const [selectedType, setSelectedType] = useState<EquipmentCategoryKey>('laptop');
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [dropdownSearch, setDropdownSearch] = useState<string>('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Common fields
  const [contactName, setContactName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [cityLocation, setCityLocation] = useState('');

  // Dynamic Specs per category
  // 1. Laptop
  const [laptopBrand, setLaptopBrand] = useState('Lenovo');
  const [laptopModel, setLaptopModel] = useState('');
  const [laptopCpu, setLaptopCpu] = useState('Intel Core i7 11th Gen');
  const [laptopRam, setLaptopRam] = useState('16GB');
  const [laptopStorage, setLaptopStorage] = useState('512GB NVMe SSD');
  const [laptopScreenSize, setLaptopScreenSize] = useState('14.0"');
  const [laptopCondition, setLaptopCondition] = useState('Like New / Excellent');
  const [laptopQuantity, setLaptopQuantity] = useState<number>(5);
  const [laptopHasCharger, setLaptopHasCharger] = useState(true);
  const [laptopNotes, setLaptopNotes] = useState('');

  // 2. Mobile
  const [mobileBrand, setMobileBrand] = useState('Apple');
  const [mobileModel, setMobileModel] = useState('');
  const [mobileStorage, setMobileStorage] = useState('128GB');
  const [mobileBatteryHealth, setMobileBatteryHealth] = useState('85%+');
  const [mobileCondition, setMobileCondition] = useState('Flawless / Pristine');
  const [mobileQuantity, setMobileQuantity] = useState<number>(5);
  const [mobileHasAccessories, setMobileHasAccessories] = useState(true);
  const [mobileNotes, setMobileNotes] = useState('');

  // 3. Desktop
  const [desktopBrand, setDesktopBrand] = useState('Dell');
  const [desktopFormFactor, setDesktopFormFactor] = useState('SFF (Small Form Factor)');
  const [desktopModel, setDesktopModel] = useState('');
  const [desktopCpu, setDesktopCpu] = useState('Intel Core i7');
  const [desktopRam, setDesktopRam] = useState('16GB');
  const [desktopStorage, setDesktopStorage] = useState('512GB SSD');
  const [desktopGpu, setDesktopGpu] = useState('');
  const [desktopCondition, setDesktopCondition] = useState('Good / Functional');
  const [desktopQuantity, setDesktopQuantity] = useState<number>(5);
  const [desktopHasCables, setDesktopHasCables] = useState(true);

  // 4. Server & Storage
  const [serverBrand, setServerBrand] = useState('Dell PowerEdge');
  const [serverFormFactor, setServerFormFactor] = useState('2U Rack');
  const [serverModel, setServerModel] = useState('');
  const [serverCpuConfig, setServerCpuConfig] = useState('Dual Intel Xeon Silver / Gold');
  const [serverRam, setServerRam] = useState('64GB ECC Registered');
  const [serverDrives, setServerDrives] = useState('8x 2.5" SAS / SATA Bays');
  const [serverDualPsu, setServerDualPsu] = useState(true);
  const [serverHasRails, setServerHasRails] = useState(true);
  const [serverQuantity, setServerQuantity] = useState<number>(2);
  const [serverCondition, setServerCondition] = useState('Fully Operational');

  // 5. Networking
  const [netBrand, setNetBrand] = useState('Cisco');
  const [netDeviceType, setNetDeviceType] = useState('Managed L2/L3 Switch');
  const [netModel, setNetModel] = useState('');
  const [netPortDensity, setNetPortDensity] = useState('48-Port Gigabit PoE+ (370W)');
  const [netHasRackEars, setNetHasRackEars] = useState(true);
  const [netCondition, setNetCondition] = useState('Fully Operational');
  const [netQuantity, setNetQuantity] = useState<number>(2);

  // 6. Monitors
  const [monBrand, setMonBrand] = useState('Dell');
  const [monScreenSize, setMonScreenSize] = useState('27"');
  const [monResolution, setMonResolution] = useState('1440p QHD / 4K UHD');
  const [monModel, setMonModel] = useState('');
  const [monCondition, setMonCondition] = useState('Flawless (Zero dead pixels)');
  const [monHasStandAndCables, setMonHasStandAndCables] = useState(true);
  const [monQuantity, setMonQuantity] = useState<number>(10);

  // 7. Apple Hardware
  const [appleDeviceType, setAppleDeviceType] = useState('MacBook Pro');
  const [appleChip, setAppleChip] = useState('Apple Silicon M2 / M3 Pro');
  const [appleMemory, setAppleMemory] = useState('16GB / 18GB Unified Memory');
  const [appleStorage, setAppleStorage] = useState('512GB SSD');
  const [appleCondition, setAppleCondition] = useState('Excellent Condition');
  const [appleQuantity, setAppleQuantity] = useState<number>(3);
  const [appleHasCharger, setAppleHasCharger] = useState(true);

  // 8. Bulk IT Fleet
  const [fleetBreakdown, setFleetBreakdown] = useState('');
  const [fleetEstimatedUnits, setFleetEstimatedUnits] = useState<number>(50);
  const [fleetPrimaryBrands, setFleetPrimaryBrands] = useState('');
  const [fleetNeedSanitizationCert, setFleetNeedSanitizationCert] = useState(true);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  // Submission state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [submissionId, setSubmissionId] = useState('');

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Map defaultEquipmentType string to category key if provided
  useEffect(() => {
    if (!defaultEquipmentType) return;
    const lower = defaultEquipmentType.toLowerCase();
    if (lower.includes('laptop') || lower.includes('thinkpad')) {
      setSelectedType('laptop');
    } else if (lower.includes('mobile') || lower.includes('phone') || lower.includes('smartphone')) {
      setSelectedType('mobile');
    } else if (lower.includes('server') || lower.includes('storage') || lower.includes('poweredge')) {
      setSelectedType('server');
    } else if (lower.includes('network') || lower.includes('switch') || lower.includes('cisco')) {
      setSelectedType('networking');
    } else if (lower.includes('apple') || lower.includes('macbook')) {
      setSelectedType('apple');
    } else if (lower.includes('monitor') || lower.includes('display')) {
      setSelectedType('monitors');
    } else if (lower.includes('desktop') || lower.includes('all-in-one')) {
      setSelectedType('desktop');
    } else if (lower.includes('fleet') || lower.includes('bulk') || lower.includes('mixed')) {
      setSelectedType('bulk-fleet');
    }
  }, [defaultEquipmentType]);

  const filteredOptions = EQUIPMENT_OPTIONS.filter(opt => {
    const q = dropdownSearch.toLowerCase().trim();
    if (!q) return true;
    return (
      opt.label.en.toLowerCase().includes(q) ||
      opt.label.pt.toLowerCase().includes(q) ||
      opt.description.en.toLowerCase().includes(q) ||
      opt.description.pt.toLowerCase().includes(q)
    );
  });

  const currentOption = EQUIPMENT_OPTIONS.find(o => o.id === selectedType) || EQUIPMENT_OPTIONS[0];
  const CurrentIcon = currentOption.icon;

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedFile(e.target.files[0]);
    }
  };

  const handleFileDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setUploadedFile(e.dataTransfer.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!contactName.trim() || !email.trim() || !phone.trim()) {
      setErrorMessage(
        isPt 
          ? 'Por favor preencha os dados de contacto obrigatórios (Nome, Email, Telefone).' 
          : 'Please complete all required contact fields (Name, Corporate Email, Phone).'
      );
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      const generatedId = `ITAD-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
      setSubmissionId(generatedId);
      if (onSuccess) onSuccess();
    }, 750);
  };

  if (isSubmitted) {
    return (
      <div className={`bg-white rounded-3xl border border-[#CCFBF1] p-8 sm:p-12 text-center shadow-xl ${className}`}>
        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#0D7E73] to-[#115E59] text-white flex items-center justify-center mx-auto mb-6 shadow-lg shadow-teal-950/20">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#CCFBF1] text-[#0D7E73] text-xs font-bold font-mono mb-3">
          <span>{isPt ? 'REFERÊNCIA ITAD:' : 'ITAD REFERENCE ID:'} {submissionId}</span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-black text-[#042F2C] mb-3">
          {isPt ? 'Pedido de Avaliação Submetido com Sucesso' : 'Valuation Request Received'}
        </h3>
        <p className="text-sm sm:text-base text-[#475569] max-w-xl mx-auto leading-relaxed mb-8">
          {isPt
            ? `Recebemos os detalhes do seu equipamento (${currentOption.label.pt}). A nossa equipa de engenharia irá rever as especificações e contactá-lo com uma proposta formal de valorização.`
            : `We have received your hardware details (${currentOption.label.en}). Our engineering team will review your specifications and contact you with a formal valuation proposal.`}
        </p>

        {/* Next Steps Checklist */}
        <div className="bg-[#F0FDFA] rounded-2xl p-5 border border-[#CCFBF1] max-w-lg mx-auto text-left mb-8 space-y-2.5">
          <div className="text-xs font-bold text-[#0D7E73] uppercase tracking-wider mb-2">
            {isPt ? 'Próximos Passos:' : 'Next Steps:'}
          </div>
          <div className="flex items-center gap-2.5 text-xs text-[#042F2C] font-semibold">
            <Check className="w-4 h-4 text-[#0D7E73] shrink-0" />
            <span>{isPt ? 'Análise das especificações técnicas pela equipa de retoma' : 'Technical specification audit by recovery engineering team'}</span>
          </div>
          <div className="flex items-center gap-2.5 text-xs text-[#042F2C] font-semibold">
            <Check className="w-4 h-4 text-[#0D7E73] shrink-0" />
            <span>{isPt ? 'Envio da proposta detalhada de valorização comercial por email' : 'Detailed commercial valuation sent to your corporate email'}</span>
          </div>
          <div className="flex items-center gap-2.5 text-xs text-[#042F2C] font-semibold">
            <Check className="w-4 h-4 text-[#0D7E73] shrink-0" />
            <span>{isPt ? 'Coordenação logística e emissão de certificados NIST SP 800-88' : 'Pickup logistics arrangement & NIST SP 800-88 compliance certificates'}</span>
          </div>
        </div>

        <button
          type="button"
          onClick={() => {
            setIsSubmitted(false);
            setUploadedFile(null);
          }}
          className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#0D7E73] hover:bg-[#0B6A61] transition-all shadow-xs cursor-pointer"
        >
          {isPt ? 'Submeter Outro Equipamento' : 'Submit Another Equipment Batch'}
        </button>
      </div>
    );
  }

  return (
    <form 
      onSubmit={handleSubmit}
      className={`bg-white rounded-3xl border border-slate-200 p-6 sm:p-9 shadow-xl relative overflow-hidden ${className}`}
    >
      {/* Decorative Brand Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#0D7E73] via-[#14B8A6] to-[#0D7E73]" />

      {errorMessage && (
        <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm flex items-center gap-3 animate-fadeIn">
          <AlertCircle className="w-5 h-5 shrink-0 text-red-600" />
          <span className="font-semibold">{errorMessage}</span>
        </div>
      )}

      {/* 🌟 STEP 1: ONE CLEAN SEARCHABLE DROPDOWN ("What do you want to sell?") */}
      <div className="mb-8" ref={dropdownRef}>
        <div className="flex items-center justify-between mb-2">
          <label className="block text-xs font-bold uppercase tracking-wider text-[#0D7E73]">
            1. {isPt ? 'O que pretende vender?' : 'What do you want to sell?'} *
          </label>
          <span className="text-[11px] font-semibold text-slate-400">
            {isPt ? 'Selecione o tipo de hardware' : 'Select hardware category'}
          </span>
        </div>

        {/* Dropdown Trigger Button */}
        <div className="relative">
          <button
            type="button"
            onClick={() => {
              setIsDropdownOpen(prev => !prev);
              setDropdownSearch('');
            }}
            className={`w-full flex items-center justify-between p-3.5 sm:p-4 rounded-2xl border text-left transition-all duration-200 cursor-pointer ${
              isDropdownOpen 
                ? 'border-[#0D7E73] ring-2 ring-[#0D7E73]/20 bg-white shadow-md' 
                : 'border-slate-300 hover:border-[#0D7E73] bg-slate-50/70 hover:bg-white shadow-2xs'
            }`}
            aria-expanded={isDropdownOpen}
          >
            <div className="flex items-center gap-3.5 min-w-0">
              <div className="w-10 h-10 rounded-xl bg-[#F0FDFA] border border-[#CCFBF1] text-[#0D7E73] flex items-center justify-center shrink-0">
                <CurrentIcon className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-sm sm:text-base font-bold text-[#042F2C] truncate">
                    {isPt ? currentOption.label.pt : currentOption.label.en}
                  </span>
                  {currentOption.badge && (
                    <span className="px-2 py-0.5 rounded-full bg-[#CCFBF1] text-[#0D7E73] text-[10px] font-black uppercase tracking-wider shrink-0">
                      {isPt ? currentOption.badge.pt : currentOption.badge.en}
                    </span>
                  )}
                </div>
                <p className="text-xs text-slate-500 truncate mt-0.5">
                  {isPt ? currentOption.description.pt : currentOption.description.en}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0 ml-3">
              <span className="text-xs font-semibold text-[#0D7E73] hidden sm:inline">
                {isPt ? 'Alterar' : 'Change'}
              </span>
              <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180 text-[#0D7E73]' : ''}`} />
            </div>
          </button>

          {/* Searchable Dropdown Popup Menu */}
          <AnimatePresence>
            {isDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: -6, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -6, scale: 0.98 }}
                transition={{ duration: 0.18, ease: 'easeOut' }}
                className="absolute left-0 right-0 top-full mt-2 bg-white rounded-2xl border border-slate-200 shadow-2xl z-40 overflow-hidden"
              >
                {/* Search Input Filter */}
                <div className="p-3 border-b border-slate-100 bg-slate-50/80">
                  <div className="relative">
                    <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={dropdownSearch}
                      onChange={(e) => setDropdownSearch(e.target.value)}
                      placeholder={isPt ? 'Pesquisar equipamento (ex: Portátil, Servidor, Apple, Switch)...' : 'Search equipment type (e.g. Laptop, Server, Apple, Switch)...'}
                      autoFocus
                      className="w-full pl-9 pr-8 py-2 rounded-xl border border-slate-200 bg-white text-xs sm:text-sm text-[#042F2C] placeholder-slate-400 focus:outline-hidden focus:border-[#0D7E73] focus:ring-2 focus:ring-[#0D7E73]/20"
                    />
                    {dropdownSearch && (
                      <button
                        type="button"
                        onClick={() => setDropdownSearch('')}
                        className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </div>

                {/* Options List */}
                <div className="max-h-72 overflow-y-auto p-2 space-y-1">
                  {filteredOptions.length === 0 ? (
                    <div className="py-6 text-center text-xs text-slate-400">
                      {isPt ? 'Nenhuma categoria correspondente encontrada.' : 'No matching equipment categories found.'}
                    </div>
                  ) : (
                    filteredOptions.map((opt) => {
                      const Icon = opt.icon;
                      const isSelected = opt.id === selectedType;
                      return (
                        <button
                          key={opt.id}
                          type="button"
                          onClick={() => {
                            setSelectedType(opt.id);
                            setIsDropdownOpen(false);
                            setDropdownSearch('');
                          }}
                          className={`w-full flex items-center justify-between p-3 rounded-xl text-left transition-colors cursor-pointer ${
                            isSelected 
                              ? 'bg-[#F0FDFA] border border-[#CCFBF1] text-[#0D7E73]' 
                              : 'hover:bg-slate-50 text-slate-700 border border-transparent'
                          }`}
                        >
                          <div className="flex items-center gap-3 min-w-0">
                            <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                              isSelected ? 'bg-[#0D7E73] text-white' : 'bg-slate-100 text-slate-600'
                            }`}>
                              <Icon className="w-4 h-4" />
                            </div>
                            <div className="min-w-0">
                              <div className="flex items-center gap-2">
                                <span className={`text-xs sm:text-sm truncate ${isSelected ? 'font-black text-[#042F2C]' : 'font-semibold'}`}>
                                  {isPt ? opt.label.pt : opt.label.en}
                                </span>
                                {opt.badge && (
                                  <span className="px-1.5 py-0.2 rounded bg-teal-100/70 text-[#0D7E73] text-[9px] font-bold uppercase">
                                    {isPt ? opt.badge.pt : opt.badge.en}
                                  </span>
                                )}
                              </div>
                              <p className="text-[11px] text-slate-400 truncate">
                                {isPt ? opt.description.pt : opt.description.en}
                              </p>
                            </div>
                          </div>

                          {isSelected && (
                            <Check className="w-4 h-4 text-[#0D7E73] stroke-[2.5] shrink-0 ml-2" />
                          )}
                        </button>
                      );
                    })
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* ⚙️ STEP 2: DYNAMICALLY RENDERED SPECIFICATION FIELDS (Customized strictly per equipment type) */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#0D7E73]" />
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#042F2C]">
              2. {isPt ? `Especificações: ${currentOption.label.pt}` : `Hardware Specifications: ${currentOption.label.en}`}
            </h4>
          </div>
          <span className="text-[11px] font-medium text-slate-400">
            {isPt ? 'Campos personalizados' : 'Tailored parameters'}
          </span>
        </div>

        <AnimatePresence mode="wait">
          {/* ========================================================= */}
          {/* 1. LAPTOP DYNAMIC FIELDS */}
          {/* ========================================================= */}
          {selectedType === 'laptop' && (
            <motion.div
              key="laptop-fields"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2 }}
              className="space-y-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#042F2C] mb-1.5">
                    {isPt ? 'Marca / Fabricante' : 'Brand / Manufacturer'} *
                  </label>
                  <select
                    value={laptopBrand}
                    onChange={(e) => setLaptopBrand(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-[#042F2C] bg-slate-50/50 hover:bg-white focus:outline-hidden focus:border-[#0D7E73] focus:ring-2 focus:ring-[#0D7E73]/20"
                  >
                    <option value="Lenovo">Lenovo (ThinkPad / ThinkBook)</option>
                    <option value="Dell">Dell (Latitude / Precision / XPS)</option>
                    <option value="HP">HP (EliteBook / ProBook / ZBook)</option>
                    <option value="Apple">Apple (MacBook Pro / Air)</option>
                    <option value="Asus">Asus (ExpertBook / ZenBook)</option>
                    <option value="Microsoft">Microsoft (Surface Laptop)</option>
                    <option value="Other">{isPt ? 'Outra Marca' : 'Other Brand'}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#042F2C] mb-1.5">
                    {isPt ? 'Modelo / Série' : 'Model / Series'} *
                  </label>
                  <input
                    type="text"
                    required
                    value={laptopModel}
                    onChange={(e) => setLaptopModel(e.target.value)}
                    placeholder="ex: ThinkPad T14s Gen 2 / Latitude 5420"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-[#042F2C] bg-slate-50/50 hover:bg-white focus:outline-hidden focus:border-[#0D7E73] focus:ring-2 focus:ring-[#0D7E73]/20"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#042F2C] mb-1.5">
                    {isPt ? 'Processador / CPU' : 'Processor / CPU'}
                  </label>
                  <input
                    type="text"
                    value={laptopCpu}
                    onChange={(e) => setLaptopCpu(e.target.value)}
                    placeholder="ex: Intel Core i7-1185G7 / AMD Ryzen 7"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-[#042F2C] bg-slate-50/50 hover:bg-white focus:outline-hidden focus:border-[#0D7E73] focus:ring-2 focus:ring-[#0D7E73]/20"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#042F2C] mb-1.5">
                    {isPt ? 'Memória RAM' : 'RAM Memory'}
                  </label>
                  <select
                    value={laptopRam}
                    onChange={(e) => setLaptopRam(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-[#042F2C] bg-white"
                  >
                    <option value="8GB">8 GB</option>
                    <option value="16GB">16 GB (Recomendado)</option>
                    <option value="32GB">32 GB</option>
                    <option value="64GB">64 GB+</option>
                    <option value="Mixed">{isPt ? 'Variada / Mista' : 'Mixed / Various'}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#042F2C] mb-1.5">
                    {isPt ? 'Armazenamento SSD' : 'SSD Storage'}
                  </label>
                  <select
                    value={laptopStorage}
                    onChange={(e) => setLaptopStorage(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-[#042F2C] bg-white"
                  >
                    <option value="256GB NVMe SSD">256 GB SSD</option>
                    <option value="512GB NVMe SSD">512 GB SSD</option>
                    <option value="1TB NVMe SSD">1 TB SSD</option>
                    <option value="2TB+ NVMe SSD">2 TB+ SSD</option>
                    <option value="No Storage">{isPt ? 'Sem Discos (Sanitizado)' : 'No Disks (De-wiped)'}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#042F2C] mb-1.5">
                    {isPt ? 'Dimensão do Ecrã' : 'Screen Size'}
                  </label>
                  <select
                    value={laptopScreenSize}
                    onChange={(e) => setLaptopScreenSize(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-[#042F2C] bg-white"
                  >
                    <option value="13.3&quot;">13.3" / 13.5"</option>
                    <option value="14.0&quot;">14.0" (Standard Enterprise)</option>
                    <option value="15.6&quot;">15.6" (Full Keyboard)</option>
                    <option value="16.0&quot;+">16.0" / 17.3"</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#042F2C] mb-1.5">
                    {isPt ? 'Estado Cosmético & Bateria' : 'Condition & Battery'}
                  </label>
                  <select
                    value={laptopCondition}
                    onChange={(e) => setLaptopCondition(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-[#042F2C] bg-white"
                  >
                    <option value="Like New / Excellent">{isPt ? 'Excelente / Como Novo (Grau A+)' : 'Like New / Grade A+'}</option>
                    <option value="Good Functional">{isPt ? 'Bom Estado / Ligeiro Uso (Grau A)' : 'Good Condition / Grade A'}</option>
                    <option value="Visible Scratches">{isPt ? 'Com Marcas Visíveis de Uso (Grau B)' : 'Signs of Wear / Grade B'}</option>
                    <option value="For Parts">{isPt ? 'Para Peças / Danificado' : 'For Parts / Defective'}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#042F2C] mb-1.5">
                    {isPt ? 'Quantidade de Unidades' : 'Unit Quantity'} *
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="2000"
                    value={laptopQuantity}
                    onChange={(e) => setLaptopQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-[#042F2C] font-mono font-bold bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#042F2C] mb-1.5">
                    {isPt ? 'Carregadores Originais' : 'Chargers Included?'}
                  </label>
                  <div className="h-[42px] flex items-center gap-3 px-3 bg-slate-50 rounded-xl border border-slate-200">
                    <input
                      type="checkbox"
                      id="laptopChargerCheck"
                      checked={laptopHasCharger}
                      onChange={(e) => setLaptopHasCharger(e.target.checked)}
                      className="w-4 h-4 text-[#0D7E73] rounded border-slate-300 focus:ring-[#0D7E73] cursor-pointer"
                    />
                    <label htmlFor="laptopChargerCheck" className="text-xs text-[#042F2C] font-medium cursor-pointer">
                      {isPt ? 'Sim, com carregadores' : 'Yes, original chargers'}
                    </label>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* ========================================================= */}
          {/* 2. MOBILE / SMARTPHONE DYNAMIC FIELDS */}
          {/* ========================================================= */}
          {selectedType === 'mobile' && (
            <motion.div
              key="mobile-fields"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2 }}
              className="space-y-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#042F2C] mb-1.5">
                    {isPt ? 'Marca' : 'Brand'} *
                  </label>
                  <select
                    value={mobileBrand}
                    onChange={(e) => setMobileBrand(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-[#042F2C] bg-white"
                  >
                    <option value="Apple">Apple (iPhone / iPad)</option>
                    <option value="Samsung">Samsung (Galaxy S / Z Fold / Note)</option>
                    <option value="Google">Google (Pixel Series)</option>
                    <option value="Xiaomi">Xiaomi / Redmi</option>
                    <option value="Other">{isPt ? 'Outra Marca' : 'Other'}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#042F2C] mb-1.5">
                    {isPt ? 'Modelo Exato' : 'Exact Model'} *
                  </label>
                  <input
                    type="text"
                    required
                    value={mobileModel}
                    onChange={(e) => setMobileModel(e.target.value)}
                    placeholder="ex: iPhone 14 Pro 128GB / Galaxy S23"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-[#042F2C] bg-slate-50/50 hover:bg-white focus:outline-hidden focus:border-[#0D7E73] focus:ring-2 focus:ring-[#0D7E73]/20"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#042F2C] mb-1.5">
                    {isPt ? 'Capacidade de Armazenamento' : 'Storage Capacity'}
                  </label>
                  <select
                    value={mobileStorage}
                    onChange={(e) => setMobileStorage(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-[#042F2C] bg-white"
                  >
                    <option value="64GB">64 GB</option>
                    <option value="128GB">128 GB</option>
                    <option value="256GB">256 GB</option>
                    <option value="512GB">512 GB</option>
                    <option value="1TB">1 TB</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#042F2C] mb-1.5">
                    {isPt ? 'Saúde da Bateria (%)' : 'Battery Health (%)'}
                  </label>
                  <select
                    value={mobileBatteryHealth}
                    onChange={(e) => setMobileBatteryHealth(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-[#042F2C] bg-white"
                  >
                    <option value="90%+">90%+ ({isPt ? 'Excelente' : 'Excellent'})</option>
                    <option value="85%+">85% - 89% ({isPt ? 'Bom' : 'Good'})</option>
                    <option value="80%-84%">80% - 84%</option>
                    <option value="Below 80%">&lt; 80% ({isPt ? 'Substituição recomendada' : 'Service needed'})</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#042F2C] mb-1.5">
                    {isPt ? 'Estado do Ecrã & Chassi' : 'Screen & Body Condition'}
                  </label>
                  <select
                    value={mobileCondition}
                    onChange={(e) => setMobileCondition(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-[#042F2C] bg-white"
                  >
                    <option value="Flawless / Pristine">{isPt ? 'Impecável sem marcas (Grau A+)' : 'Flawless / Pristine (Grade A+)'}</option>
                    <option value="Light Micro-scratches">{isPt ? 'Microrriscos superficiais (Grau A)' : 'Light micro-scratches (Grade A)'}</option>
                    <option value="Visible Scratches">{isPt ? 'Marcas visíveis / Desgaste (Grau B)' : 'Visible scratches (Grade B)'}</option>
                    <option value="Cracked Screen / Broken">{isPt ? 'Vidro partido / Avariado' : 'Cracked glass / Defective'}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#042F2C] mb-1.5">
                    {isPt ? 'Quantidade de Equipamentos' : 'Quantity of Units'} *
                  </label>
                  <input
                    type="number"
                    min="1"
                    value={mobileQuantity}
                    onChange={(e) => setMobileQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-[#042F2C] font-mono font-bold bg-white"
                  />
                </div>
              </div>
            </motion.div>
          )}

          {/* ========================================================= */}
          {/* 3. DESKTOP / WORKSTATION DYNAMIC FIELDS */}
          {/* ========================================================= */}
          {selectedType === 'desktop' && (
            <motion.div
              key="desktop-fields"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2 }}
              className="space-y-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#042F2C] mb-1.5">
                    {isPt ? 'Fabricante / Linha' : 'Manufacturer / Line'} *
                  </label>
                  <select
                    value={desktopBrand}
                    onChange={(e) => setDesktopBrand(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-[#042F2C] bg-white"
                  >
                    <option value="Dell">Dell (OptiPlex / Precision)</option>
                    <option value="HP">HP (EliteDesk / ProDesk / Z-Series)</option>
                    <option value="Lenovo">Lenovo (ThinkCentre / ThinkStation)</option>
                    <option value="Apple">Apple (iMac / Mac mini)</option>
                    <option value="Custom">{isPt ? 'Custom / Montado' : 'Custom Build'}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#042F2C] mb-1.5">
                    {isPt ? 'Formato / Form Factor' : 'Form Factor'}
                  </label>
                  <select
                    value={desktopFormFactor}
                    onChange={(e) => setDesktopFormFactor(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-[#042F2C] bg-white"
                  >
                    <option value="Micro / Tiny / Mini PC">Micro / Tiny / Mini PC (Ultra-compact)</option>
                    <option value="SFF (Small Form Factor)">SFF (Small Form Factor Desktop)</option>
                    <option value="Tower / Workstation">Tower / Mid-Tower Workstation</option>
                    <option value="All-in-One (AIO)">All-in-One (Ecrã Integrado)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#042F2C] mb-1.5">
                    {isPt ? 'Modelo' : 'Model Series'} *
                  </label>
                  <input
                    type="text"
                    required
                    value={desktopModel}
                    onChange={(e) => setDesktopModel(e.target.value)}
                    placeholder="ex: OptiPlex 7090 SFF / ThinkCentre M920q"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-[#042F2C] bg-slate-50/50 hover:bg-white focus:outline-hidden focus:border-[#0D7E73] focus:ring-2 focus:ring-[#0D7E73]/20"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#042F2C] mb-1.5">
                    {isPt ? 'Processador' : 'Processor'}
                  </label>
                  <input
                    type="text"
                    value={desktopCpu}
                    onChange={(e) => setDesktopCpu(e.target.value)}
                    placeholder="Intel Core i7-10700"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-[#042F2C] bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#042F2C] mb-1.5">
                    {isPt ? 'RAM' : 'RAM'}
                  </label>
                  <select
                    value={desktopRam}
                    onChange={(e) => setDesktopRam(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-[#042F2C] bg-white"
                  >
                    <option value="8GB">8 GB</option>
                    <option value="16GB">16 GB</option>
                    <option value="32GB">32 GB</option>
                    <option value="64GB+">64 GB+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#042F2C] mb-1.5">
                    {isPt ? 'Armazenamento' : 'Storage'}
                  </label>
                  <input
                    type="text"
                    value={desktopStorage}
                    onChange={(e) => setDesktopStorage(e.target.value)}
                    placeholder="512GB SSD NVMe"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-[#042F2C] bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#042F2C] mb-1.5">
                    {isPt ? 'Quantidade' : 'Quantity'} *
                  </label>
                  <input
                    type="number"
                    min="1"
                    value={desktopQuantity}
                    onChange={(e) => setDesktopQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-[#042F2C] font-mono font-bold bg-white"
                  />
                </div>
              </div>
            </motion.div>
          )}

          {/* ========================================================= */}
          {/* 4. SERVER & STORAGE DYNAMIC FIELDS */}
          {/* ========================================================= */}
          {selectedType === 'server' && (
            <motion.div
              key="server-fields"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2 }}
              className="space-y-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#042F2C] mb-1.5">
                    {isPt ? 'Plataforma / Marca' : 'Server Platform / Brand'} *
                  </label>
                  <select
                    value={serverBrand}
                    onChange={(e) => setServerBrand(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-[#042F2C] bg-white"
                  >
                    <option value="Dell PowerEdge">Dell PowerEdge (R640, R740, R750...)</option>
                    <option value="HPE ProLiant">HPE ProLiant (DL360, DL380 Gen10...)</option>
                    <option value="Cisco UCS">Cisco UCS / Lenovo ThinkSystem</option>
                    <option value="Synology / QNAP NAS">Synology / QNAP Enterprise NAS</option>
                    <option value="Supermicro">Supermicro Rack Server</option>
                    <option value="Other">{isPt ? 'Outro Servidor' : 'Other'}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#042F2C] mb-1.5">
                    {isPt ? 'Chassi / Form Factor' : 'Form Factor / Chassis'}
                  </label>
                  <select
                    value={serverFormFactor}
                    onChange={(e) => setServerFormFactor(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-[#042F2C] bg-white"
                  >
                    <option value="1U Rack">1U Rack Server</option>
                    <option value="2U Rack">2U Rack Server (Mais comum)</option>
                    <option value="4U / Blade">4U Rack / Blade Enclosure</option>
                    <option value="Tower Server">Tower Server</option>
                    <option value="Storage SAN / NAS">SAN Array / Storage Enclosure</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#042F2C] mb-1.5">
                    {isPt ? 'Modelo do Servidor' : 'Exact Server Model'} *
                  </label>
                  <input
                    type="text"
                    required
                    value={serverModel}
                    onChange={(e) => setServerModel(e.target.value)}
                    placeholder="ex: Dell PowerEdge R640 8-Bay SFF"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-[#042F2C] bg-slate-50/50 hover:bg-white focus:outline-hidden focus:border-[#0D7E73] focus:ring-2 focus:ring-[#0D7E73]/20"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#042F2C] mb-1.5">
                    {isPt ? 'Processadores (CPUs)' : 'Processors (CPUs)'}
                  </label>
                  <input
                    type="text"
                    value={serverCpuConfig}
                    onChange={(e) => setServerCpuConfig(e.target.value)}
                    placeholder="ex: 2x Intel Xeon Gold 6130 (16-Core)"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-[#042F2C] bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#042F2C] mb-1.5">
                    {isPt ? 'Memória RAM ECC' : 'ECC RAM Installed'}
                  </label>
                  <select
                    value={serverRam}
                    onChange={(e) => setServerRam(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-[#042F2C] bg-white"
                  >
                    <option value="32GB ECC">32 GB ECC</option>
                    <option value="64GB ECC Registered">64 GB ECC Registered</option>
                    <option value="128GB ECC Registered">128 GB ECC Registered</option>
                    <option value="256GB ECC Registered">256 GB ECC Registered</option>
                    <option value="512GB+ ECC">512 GB+ ECC Registered</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#042F2C] mb-1.5">
                    {isPt ? 'Discos / Baias de Armazenamento' : 'Drive Bays / Installed Disks'}
                  </label>
                  <input
                    type="text"
                    value={serverDrives}
                    onChange={(e) => setServerDrives(e.target.value)}
                    placeholder="ex: 8x 2.5&quot; SAS 1.2TB 10k / Caddies incluidos"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-[#042F2C] bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#042F2C] mb-1.5">
                    {isPt ? 'Acessórios do Rack' : 'Rack Rails & Bezel'}
                  </label>
                  <div className="h-[42px] flex items-center gap-3 px-3 bg-slate-50 rounded-xl border border-slate-200">
                    <input
                      type="checkbox"
                      id="serverRailsCheck"
                      checked={serverHasRails}
                      onChange={(e) => setServerHasRails(e.target.checked)}
                      className="w-4 h-4 text-[#0D7E73] rounded border-slate-300 focus:ring-[#0D7E73] cursor-pointer"
                    />
                    <label htmlFor="serverRailsCheck" className="text-xs text-[#042F2C] font-medium cursor-pointer">
                      {isPt ? 'Calhas de montagem incluídas' : 'ReadyRails included'}
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#042F2C] mb-1.5">
                    {isPt ? 'Fontes Redundantes (Dual PSU)' : 'Dual Redundant PSU'}
                  </label>
                  <div className="h-[42px] flex items-center gap-3 px-3 bg-slate-50 rounded-xl border border-slate-200">
                    <input
                      type="checkbox"
                      id="serverPsuCheck"
                      checked={serverDualPsu}
                      onChange={(e) => setServerDualPsu(e.target.checked)}
                      className="w-4 h-4 text-[#0D7E73] rounded border-slate-300 focus:ring-[#0D7E73] cursor-pointer"
                    />
                    <label htmlFor="serverPsuCheck" className="text-xs text-[#042F2C] font-medium cursor-pointer">
                      {isPt ? 'Sim, 2x fontes redundantes' : 'Yes, dual redundant PSUs'}
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#042F2C] mb-1.5">
                    {isPt ? 'Quantidade de Servidores' : 'Server Quantity'} *
                  </label>
                  <input
                    type="number"
                    min="1"
                    value={serverQuantity}
                    onChange={(e) => setServerQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-[#042F2C] font-mono font-bold bg-white"
                  />
                </div>
              </div>
            </motion.div>
          )}

          {/* ========================================================= */}
          {/* 5. NETWORKING EQUIPMENT DYNAMIC FIELDS */}
          {/* ========================================================= */}
          {selectedType === 'networking' && (
            <motion.div
              key="networking-fields"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2 }}
              className="space-y-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#042F2C] mb-1.5">
                    {isPt ? 'Marca do Equipamento' : 'Networking Brand'} *
                  </label>
                  <select
                    value={netBrand}
                    onChange={(e) => setNetBrand(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-[#042F2C] bg-white"
                  >
                    <option value="Cisco">Cisco (Catalyst / Nexus / Meraki)</option>
                    <option value="Fortinet">Fortinet (FortiGate Firewalls)</option>
                    <option value="Aruba / HPE">Aruba / HPE ProCurve</option>
                    <option value="Ubiquiti UniFi">Ubiquiti UniFi Enterprise</option>
                    <option value="Juniper">Juniper Networks (EX Series)</option>
                    <option value="Sophos">Sophos (XGS Firewalls)</option>
                    <option value="MikroTik">MikroTik</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#042F2C] mb-1.5">
                    {isPt ? 'Tipo de Dispositivo' : 'Device Category'}
                  </label>
                  <select
                    value={netDeviceType}
                    onChange={(e) => setNetDeviceType(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-[#042F2C] bg-white"
                  >
                    <option value="Managed L2/L3 Switch">Managed L2/L3 Access Switch</option>
                    <option value="Core 10G/40G Switch">Core / Distribution 10G/40G Switch</option>
                    <option value="UTM Firewall / Security Gateway">UTM Firewall / Security Gateway</option>
                    <option value="Enterprise Wi-Fi APs">Enterprise Wi-Fi 6 Access Points</option>
                    <option value="Enterprise Router">Enterprise Router</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#042F2C] mb-1.5">
                    {isPt ? 'Modelo do Equipamento' : 'Model Number'} *
                  </label>
                  <input
                    type="text"
                    required
                    value={netModel}
                    onChange={(e) => setNetModel(e.target.value)}
                    placeholder="ex: Catalyst WS-C2960X-48FPS-L / FortiGate 100F"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-[#042F2C] bg-slate-50/50 hover:bg-white focus:outline-hidden focus:border-[#0D7E73] focus:ring-2 focus:ring-[#0D7E73]/20"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#042F2C] mb-1.5">
                    {isPt ? 'Portas & Uplinks' : 'Port Density & Uplinks'}
                  </label>
                  <select
                    value={netPortDensity}
                    onChange={(e) => setNetPortDensity(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-[#042F2C] bg-white"
                  >
                    <option value="24-Port Gigabit (PoE / Non-PoE)">24-Port 1GbE (PoE / Non-PoE)</option>
                    <option value="48-Port Gigabit PoE+ (370W)">48-Port 1GbE PoE+ (370W / 740W)</option>
                    <option value="24/48-Port 10GbE SFP+">24/48-Port 10GbE SFP+</option>
                    <option value="Security Appliance (Dual WAN)">Security Appliance (Dual WAN)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#042F2C] mb-1.5">
                    {isPt ? 'Orelhas de Rack & Cabos' : 'Rack Ears & Power Cables'}
                  </label>
                  <div className="h-[42px] flex items-center gap-3 px-3 bg-slate-50 rounded-xl border border-slate-200">
                    <input
                      type="checkbox"
                      id="netRackEarsCheck"
                      checked={netHasRackEars}
                      onChange={(e) => setNetHasRackEars(e.target.checked)}
                      className="w-4 h-4 text-[#0D7E73] rounded border-slate-300 focus:ring-[#0D7E73] cursor-pointer"
                    />
                    <label htmlFor="netRackEarsCheck" className="text-xs text-[#042F2C] font-medium cursor-pointer">
                      {isPt ? 'Inclui abas de fixação 19"' : 'Includes 19" rack ears'}
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#042F2C] mb-1.5">
                    {isPt ? 'Quantidade de Unidades' : 'Unit Quantity'} *
                  </label>
                  <input
                    type="number"
                    min="1"
                    value={netQuantity}
                    onChange={(e) => setNetQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-[#042F2C] font-mono font-bold bg-white"
                  />
                </div>
              </div>
            </motion.div>
          )}

          {/* ========================================================= */}
          {/* 6. MONITORS & DISPLAYS DYNAMIC FIELDS */}
          {/* ========================================================= */}
          {selectedType === 'monitors' && (
            <motion.div
              key="monitors-fields"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2 }}
              className="space-y-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#042F2C] mb-1.5">
                    {isPt ? 'Marca do Monitor' : 'Monitor Brand'} *
                  </label>
                  <select
                    value={monBrand}
                    onChange={(e) => setMonBrand(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-[#042F2C] bg-white"
                  >
                    <option value="Dell">Dell (UltraSharp / P-Series)</option>
                    <option value="LG">LG (UltraFine / Ergo)</option>
                    <option value="Samsung">Samsung (ViewFinity / Odyssey)</option>
                    <option value="HP">HP (Z-Display / EliteDisplay)</option>
                    <option value="Apple">Apple (Studio Display / Pro Display)</option>
                    <option value="Philips">Philips / BenQ</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#042F2C] mb-1.5">
                    {isPt ? 'Tamanho da Diagonal' : 'Screen Diagonal'}
                  </label>
                  <select
                    value={monScreenSize}
                    onChange={(e) => setMonScreenSize(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-[#042F2C] bg-white"
                  >
                    <option value="24&quot;">24" / 23.8" Full HD</option>
                    <option value="27&quot;">27" QHD / 4K (Standard Pro)</option>
                    <option value="32&quot;">32" 4K UHD</option>
                    <option value="34&quot;+ Ultrawide">34"+ Curved Ultrawide</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#042F2C] mb-1.5">
                    {isPt ? 'Modelo' : 'Model Series'}
                  </label>
                  <input
                    type="text"
                    value={monModel}
                    onChange={(e) => setMonModel(e.target.value)}
                    placeholder="ex: Dell U2720Q / LG 27UK850"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-[#042F2C] bg-slate-50/50 hover:bg-white focus:outline-hidden focus:border-[#0D7E73] focus:ring-2 focus:ring-[#0D7E73]/20"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#042F2C] mb-1.5">
                    {isPt ? 'Estado do Painel / Ecrã' : 'Screen Panel Condition'}
                  </label>
                  <select
                    value={monCondition}
                    onChange={(e) => setMonCondition(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-[#042F2C] bg-white"
                  >
                    <option value="Flawless (Zero dead pixels)">{isPt ? 'Painel Impecável (Sem píxeis mortos)' : 'Flawless (Zero dead pixels)'}</option>
                    <option value="Minor Surface Wear">{isPt ? 'Marcas ligeiras de suporte' : 'Minor cosmetic stand wear'}</option>
                    <option value="Defective Panel">{isPt ? 'Painel com linhas / Avariado' : 'Panel line / Defective'}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#042F2C] mb-1.5">
                    {isPt ? 'Base & Cabos Incluídos?' : 'Original Stand & Power?'}
                  </label>
                  <div className="h-[42px] flex items-center gap-3 px-3 bg-slate-50 rounded-xl border border-slate-200">
                    <input
                      type="checkbox"
                      id="monStandCheck"
                      checked={monHasStandAndCables}
                      onChange={(e) => setMonHasStandAndCables(e.target.checked)}
                      className="w-4 h-4 text-[#0D7E73] rounded border-slate-300 focus:ring-[#0D7E73] cursor-pointer"
                    />
                    <label htmlFor="monStandCheck" className="text-xs text-[#042F2C] font-medium cursor-pointer">
                      {isPt ? 'Sim, base original e cabos' : 'Yes, stand and cables'}
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#042F2C] mb-1.5">
                    {isPt ? 'Quantidade de Monitores' : 'Monitor Quantity'} *
                  </label>
                  <input
                    type="number"
                    min="1"
                    value={monQuantity}
                    onChange={(e) => setMonQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-[#042F2C] font-mono font-bold bg-white"
                  />
                </div>
              </div>
            </motion.div>
          )}

          {/* ========================================================= */}
          {/* 7. APPLE HARDWARE DYNAMIC FIELDS */}
          {/* ========================================================= */}
          {selectedType === 'apple' && (
            <motion.div
              key="apple-fields"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2 }}
              className="space-y-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#042F2C] mb-1.5">
                    {isPt ? 'Dispositivo Apple' : 'Apple Device'} *
                  </label>
                  <select
                    value={appleDeviceType}
                    onChange={(e) => setAppleDeviceType(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-[#042F2C] bg-white"
                  >
                    <option value="MacBook Pro 14&quot; / 16&quot;">MacBook Pro 14" / 16"</option>
                    <option value="MacBook Air 13&quot; / 15&quot;">MacBook Air 13" / 15"</option>
                    <option value="Mac Studio / Mac mini">Mac Studio / Mac mini</option>
                    <option value="iMac 24&quot;">iMac 24" 4.5K Retina</option>
                    <option value="iPad Pro / Air">iPad Pro / iPad Air</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#042F2C] mb-1.5">
                    {isPt ? 'Processador Apple Silicon' : 'Chip Generation'}
                  </label>
                  <select
                    value={appleChip}
                    onChange={(e) => setAppleChip(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-[#042F2C] bg-white"
                  >
                    <option value="Apple M1 / M1 Pro / M1 Max">Apple M1 / M1 Pro / M1 Max</option>
                    <option value="Apple M2 / M2 Pro / M2 Max">Apple M2 / M2 Pro / M2 Max</option>
                    <option value="Apple M3 / M3 Pro / M3 Max">Apple M3 / M3 Pro / M3 Max</option>
                    <option value="Apple M4 / M4 Pro">Apple M4 / M4 Pro</option>
                    <option value="Intel Core (Legacy)">Intel Core (Modelos anteriores)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#042F2C] mb-1.5">
                    {isPt ? 'Memória Unificada (RAM)' : 'Unified Memory (RAM)'}
                  </label>
                  <select
                    value={appleMemory}
                    onChange={(e) => setAppleMemory(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-[#042F2C] bg-white"
                  >
                    <option value="8GB Unified Memory">8 GB</option>
                    <option value="16GB / 18GB Unified Memory">16 GB / 18 GB</option>
                    <option value="32GB / 36GB Unified Memory">32 GB / 36 GB</option>
                    <option value="64GB+ Unified Memory">64 GB+ Unified Memory</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#042F2C] mb-1.5">
                    {isPt ? 'Armazenamento SSD' : 'SSD Storage'}
                  </label>
                  <select
                    value={appleStorage}
                    onChange={(e) => setAppleStorage(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-[#042F2C] bg-white"
                  >
                    <option value="256GB SSD">256 GB SSD</option>
                    <option value="512GB SSD">512 GB SSD</option>
                    <option value="1TB SSD">1 TB SSD</option>
                    <option value="2TB+ SSD">2 TB+ SSD</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#042F2C] mb-1.5">
                    {isPt ? 'Estado Cosmético / iCloud Limpo' : 'Condition / iCloud Disconnected'}
                  </label>
                  <select
                    value={appleCondition}
                    onChange={(e) => setAppleCondition(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-[#042F2C] bg-white"
                  >
                    <option value="Excellent Condition">{isPt ? 'Excelente (Sem marcas / iCloud desativado)' : 'Excellent (No marks / iCloud logged out)'}</option>
                    <option value="Minor Cosmetic Wear">{isPt ? 'Bom com ligeiro uso diário' : 'Good with light daily wear'}</option>
                    <option value="Service Recommended">{isPt ? 'Bateria necessita assistência' : 'Battery service recommended'}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#042F2C] mb-1.5">
                    {isPt ? 'Quantidade de MacBooks' : 'Quantity'} *
                  </label>
                  <input
                    type="number"
                    min="1"
                    value={appleQuantity}
                    onChange={(e) => setAppleQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-[#042F2C] font-mono font-bold bg-white"
                  />
                </div>
              </div>
            </motion.div>
          )}

          {/* ========================================================= */}
          {/* 8. BULK IT FLEET / MIXED BATCH DYNAMIC FIELDS */}
          {/* ========================================================= */}
          {selectedType === 'bulk-fleet' && (
            <motion.div
              key="bulk-fields"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2 }}
              className="space-y-4"
            >
              <div>
                <label className="block text-xs font-bold text-[#042F2C] mb-1.5">
                  {isPt ? 'Resumo da Frota a Descomissionar' : 'Fleet Decommissioning Summary & Equipment Mix'} *
                </label>
                <textarea
                  rows={2}
                  required
                  value={fleetBreakdown}
                  onChange={(e) => setFleetBreakdown(e.target.value)}
                  placeholder={isPt ? 'Ex: 40 Portáteis Lenovo T14, 15 Desktops Dell OptiPlex, 2 Servidores PowerEdge e 30 Monitores 24"...' : 'e.g. 40 Lenovo T14 laptops, 15 Dell OptiPlex desktops, 2 PowerEdge servers and 30x 24" monitors...'}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-[#042F2C] bg-slate-50/50 hover:bg-white focus:outline-hidden focus:border-[#0D7E73] focus:ring-2 focus:ring-[#0D7E73]/20"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#042F2C] mb-1.5">
                    {isPt ? 'Total Estimado de Unidades' : 'Estimated Total Unit Count'} *
                  </label>
                  <input
                    type="number"
                    min="5"
                    max="10000"
                    value={fleetEstimatedUnits}
                    onChange={(e) => setFleetEstimatedUnits(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-[#042F2C] font-mono font-bold bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#042F2C] mb-1.5">
                    {isPt ? 'Certificado de Eliminação NIST 800-88' : 'NIST 800-88 Destruction Certificate'}
                  </label>
                  <div className="h-[42px] flex items-center gap-3 px-3 bg-slate-50 rounded-xl border border-slate-200">
                    <input
                      type="checkbox"
                      id="fleetNistCheck"
                      checked={fleetNeedSanitizationCert}
                      onChange={(e) => setFleetNeedSanitizationCert(e.target.checked)}
                      className="w-4 h-4 text-[#0D7E73] rounded border-slate-300 focus:ring-[#0D7E73] cursor-pointer"
                    />
                    <label htmlFor="fleetNistCheck" className="text-xs text-[#042F2C] font-medium cursor-pointer">
                      {isPt ? 'Sim, requerer certificados para RGPD' : 'Yes, require certified audit reports'}
                    </label>
                  </div>
                </div>
              </div>

              {/* Excel / CSV Inventory File Upload Box */}
              <div>
                <label className="block text-xs font-bold text-[#042F2C] mb-1.5">
                  {isPt ? 'Anexar Lista de Inventário (Excel / CSV / PDF - Opcional)' : 'Attach Fleet Inventory (Excel / CSV / PDF - Optional)'}
                </label>
                <div 
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={handleFileDrop}
                  className="border-2 border-dashed border-slate-300 hover:border-[#0D7E73] rounded-2xl p-5 text-center bg-slate-50/60 hover:bg-[#F0FDFA] transition-colors cursor-pointer relative"
                >
                  <input
                    type="file"
                    accept=".xlsx,.xls,.csv,.pdf,.txt"
                    onChange={handleFileUpload}
                    className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                  />
                  {uploadedFile ? (
                    <div className="flex items-center justify-center gap-3 text-xs font-bold text-[#0D7E73]">
                      <FileSpreadsheet className="w-5 h-5" />
                      <span>{uploadedFile.name} ({(uploadedFile.size / 1024).toFixed(1)} KB)</span>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setUploadedFile(null);
                        }}
                        className="text-red-500 hover:text-red-700 p-1"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-1">
                      <Upload className="w-6 h-6 text-[#0D7E73] mx-auto mb-1" />
                      <div className="text-xs font-bold text-[#042F2C]">
                        {isPt ? 'Arraste ou clique para carregar a lista de inventário' : 'Drag & drop or click to upload inventory spreadsheet'}
                      </div>
                      <div className="text-[11px] text-slate-400">
                        {isPt ? 'Formatos suportados: .XLSX, .CSV, .PDF até 10MB' : 'Supported formats: .XLSX, .CSV, .PDF up to 10MB'}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* 🏢 STEP 3: COMPANY & CONTACT INFORMATION */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#0D7E73]" />
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#042F2C]">
              3. {isPt ? 'Dados da Empresa & Contacto para Proposta' : 'Company & Contact Details'}
            </h4>
          </div>
          <span className="text-[11px] font-medium text-slate-400">
            {isPt ? 'Campos com (*) obrigatórios' : 'Required fields (*)'}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-[#042F2C] mb-1.5 flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-[#0D7E73]" />
              <span>{isPt ? 'Nome do Responsável' : 'Contact Person'} *</span>
            </label>
            <input
              type="text"
              required
              value={contactName}
              onChange={(e) => setContactName(e.target.value)}
              placeholder={isPt ? 'ex: Carlos Oliveira' : 'e.g. Marcus Vance'}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-[#042F2C] bg-slate-50/50 hover:bg-white focus:outline-hidden focus:border-[#0D7E73] focus:ring-2 focus:ring-[#0D7E73]/20"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-[#042F2C] mb-1.5 flex items-center gap-1.5">
              <Building className="w-3.5 h-3.5 text-[#0D7E73]" />
              <span>{isPt ? 'Empresa / Organização' : 'Company / Entity'}</span>
            </label>
            <input
              type="text"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              placeholder={isPt ? 'ex: Soluções Digitais Lda' : 'e.g. Enterprise Global Corp'}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-[#042F2C] bg-slate-50/50 hover:bg-white focus:outline-hidden focus:border-[#0D7E73] focus:ring-2 focus:ring-[#0D7E73]/20"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-[#042F2C] mb-1.5 flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-[#0D7E73]" />
              <span>{isPt ? 'Email Profissional' : 'Corporate Email'} *</span>
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="compras@empresa.pt"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-[#042F2C] bg-slate-50/50 hover:bg-white focus:outline-hidden focus:border-[#0D7E73] focus:ring-2 focus:ring-[#0D7E73]/20"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-[#042F2C] mb-1.5 flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-[#0D7E73]" />
              <span>{isPt ? 'Telefone de Contacto' : 'Phone Number'} *</span>
            </label>
            <input
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+351 912 345 678"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-[#042F2C] bg-slate-50/50 hover:bg-white focus:outline-hidden focus:border-[#0D7E73] focus:ring-2 focus:ring-[#0D7E73]/20"
            />
          </div>
        </div>

        <div className="mt-4">
          <label className="block text-xs font-bold text-[#042F2C] mb-1.5">
            {isPt ? 'Localização / Cidade para Recolha Logística' : 'Pickup Location / City for Logistics Fleet Transport'}
          </label>
          <input
            type="text"
            value={cityLocation}
            onChange={(e) => setCityLocation(e.target.value)}
            placeholder={isPt ? 'ex: Porto / Lisboa / Braga / Trofa' : 'e.g. Porto, Lisbon, Madrid, Paris'}
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-[#042F2C] bg-slate-50/50 hover:bg-white focus:outline-hidden focus:border-[#0D7E73] focus:ring-2 focus:ring-[#0D7E73]/20"
          />
        </div>
      </div>

      {/* 🛡️ SECURITY & NIST 800-88 GUARANTEE */}
      <div className="flex items-start gap-3 p-4 bg-[#F0FDFA] rounded-2xl border border-[#CCFBF1] mb-8">
        <ShieldCheck className="w-5 h-5 text-[#0D7E73] shrink-0 mt-0.5" />
        <div className="text-xs text-[#042F2C] leading-relaxed">
          <span className="font-bold text-[#0D7E73] block mb-0.5">
            {isPt ? 'Sanitização NIST SP 800-88 Rev. 2 & Conformidade RGPD:' : 'NIST SP 800-88 Rev. 2 Sanitization & GDPR Compliance:'}
          </span>
          {isPt 
            ? 'Todos os suportes de armazenamento passam por sanitização criptográfica segura no nosso centro técnico na Trofa, com emissão de certificados oficiais de destruição de dados.' 
            : 'All storage media undergo cryptographically secure media sanitization at our Trofa technical facility, with tamper-proof erasure certificates provided.'}
        </div>
      </div>

      {/* 🚀 PRIMARY CTA SUBMIT BUTTON */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl text-sm sm:text-base font-bold text-white bg-gradient-to-r from-[#0D7E73] to-[#0F9488] hover:from-[#0B6A61] hover:to-[#0B6A61] disabled:opacity-70 transition-all duration-300 shadow-lg shadow-teal-900/15 hover:shadow-xl hover:-translate-y-0.5 cursor-pointer"
      >
        {isSubmitting ? (
          <>
            <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            <span>{isPt ? 'A processar pedido de avaliação...' : 'Processing valuation request...'}</span>
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            <span>{isPt ? 'Solicitar Proposta de Valorização' : 'Request Valuation Proposal'}</span>
          </>
        )}
      </button>
    </form>
  );
};
