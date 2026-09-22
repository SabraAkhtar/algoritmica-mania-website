import React, { useState, useRef, useEffect } from 'react';
import { Language } from '../../types';
import { ActionPrimaryButton } from '../ui/AnimatedButtons';
import { 
  Laptop, 
  Monitor, 
  Smartphone, 
  Tablet, 
  Server, 
  Network, 
  HardDrive, 
  Package, 
  ShieldCheck, 
  Upload, 
  CheckCircle2, 
  ChevronDown, 
  Plus, 
  Minus, 
  X, 
  AlertCircle,
  ArrowRight,
  Check,
  Building,
  User,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { DynamicDeviceFields } from './DynamicDeviceFields';
import { DEFAULT_DEVICE_STATES, DynamicDeviceState } from './sellFormSchemas';

export type EquipmentCategoryKey = 
  | 'laptop'
  | 'desktop'
  | 'mobile'
  | 'tablet'
  | 'server'
  | 'network'
  | 'storage'
  | 'other';

interface CategoryOption {
  id: EquipmentCategoryKey;
  label: { en: string; pt: string };
  icon: React.ComponentType<{ className?: string }>;
}

export const CATEGORY_OPTIONS: CategoryOption[] = [
  { id: 'laptop', label: { en: 'Laptop', pt: 'Portátil' }, icon: Laptop },
  { id: 'desktop', label: { en: 'Desktop', pt: 'Desktop' }, icon: Monitor },
  { id: 'mobile', label: { en: 'Mobile Phone', pt: 'Telemóvel' }, icon: Smartphone },
  { id: 'tablet', label: { en: 'Tablet', pt: 'Tablet' }, icon: Tablet },
  { id: 'server', label: { en: 'Server', pt: 'Servidor' }, icon: Server },
  { id: 'network', label: { en: 'Network Equipment', pt: 'Equipamento de Rede' }, icon: Network },
  { id: 'storage', label: { en: 'Storage Device', pt: 'Dispositivo de Armazenamento' }, icon: HardDrive },
  { id: 'other', label: { en: 'Other', pt: 'Outro' }, icon: Package },
];

interface SellEquipmentInteractiveFormProps {
  lang: Language;
  onUpdateSummary?: (data: {
    categoryName: string;
    brand: string;
    model: string;
    quantity: number;
    condition: string;
  }) => void;
  onStepChange?: (step: number) => void;
  currentStep?: number;
}

export const SellEquipmentInteractiveForm: React.FC<SellEquipmentInteractiveFormProps> = ({
  lang,
  onUpdateSummary,
  onStepChange,
  currentStep = 1,
}) => {
  const isPt = lang === 'pt';

  // 1. Equipment Selection
  const [selectedType, setSelectedType] = useState<EquipmentCategoryKey>('laptop');
  const [isTypeDropdownOpen, setIsTypeDropdownOpen] = useState(false);
  const typeDropdownRef = useRef<HTMLDivElement>(null);

  // 2. Hardware Specifications Form State (Per Category Dynamic State Map)
  const [deviceStates, setDeviceStates] = useState<Record<EquipmentCategoryKey, DynamicDeviceState>>({
    laptop: { ...DEFAULT_DEVICE_STATES.laptop },
    desktop: { ...DEFAULT_DEVICE_STATES.desktop },
    mobile: { ...DEFAULT_DEVICE_STATES.mobile },
    tablet: { ...DEFAULT_DEVICE_STATES.tablet },
    server: { ...DEFAULT_DEVICE_STATES.server },
    network: { ...DEFAULT_DEVICE_STATES.network },
    storage: { ...DEFAULT_DEVICE_STATES.storage },
    other: { ...DEFAULT_DEVICE_STATES.other },
  });

  const currentDeviceState = deviceStates[selectedType];

  const handleDeviceFieldChange = (field: keyof DynamicDeviceState, value: any) => {
    setDeviceStates((prev) => ({
      ...prev,
      [selectedType]: {
        ...prev[selectedType],
        [field]: value,
      },
    }));
  };

  // 3. Image Uploads
  const [uploadedImages, setUploadedImages] = useState<Array<{ file: File; preview: string }>>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // 4. Contact Details
  const [fullName, setFullName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');

  // Step and Submission State
  const [formStep, setFormStep] = useState<number>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionId, setSubmissionId] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Sync with outer step
  useEffect(() => {
    if (currentStep && currentStep !== formStep) {
      setFormStep(currentStep);
    }
  }, [currentStep]);

  const changeStep = (step: number) => {
    setFormStep(step);
    if (onStepChange) onStepChange(step);
  };

  // Close type dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (typeDropdownRef.current && !typeDropdownRef.current.contains(e.target as Node)) {
        setIsTypeDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Update live summary
  const currentCategory = CATEGORY_OPTIONS.find((c) => c.id === selectedType) || CATEGORY_OPTIONS[0];
  const currentCategoryName = isPt ? currentCategory.label.pt : currentCategory.label.en;

  useEffect(() => {
    if (onUpdateSummary) {
      onUpdateSummary({
        categoryName: currentCategoryName,
        brand: currentDeviceState.brand,
        model: currentDeviceState.model,
        quantity: currentDeviceState.quantity,
        condition: currentDeviceState.functionalCondition,
      });
    }
  }, [selectedType, currentDeviceState, isPt, currentCategoryName, onUpdateSummary]);

  // Image Upload Handlers
  const handleImageUpload = (files: FileList | null) => {
    if (!files) return;
    const remainingSlots = 10 - uploadedImages.length;
    if (remainingSlots <= 0) return;

    const newFiles = Array.from(files).slice(0, remainingSlots);
    const mapped = newFiles.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));

    setUploadedImages((prev) => [...prev, ...mapped]);
  };

  const handleRemoveImage = (index: number) => {
    setUploadedImages((prev) => {
      const updated = [...prev];
      URL.revokeObjectURL(updated[index].preview);
      updated.splice(index, 1);
      return updated;
    });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (formStep < 4) {
      changeStep(4);
      return;
    }

    if (!fullName || !email || !phone) {
      setErrorMessage(
        isPt
          ? 'Por favor preencha o Nome, Email e Telefone de contacto.'
          : 'Please provide your Full Name, Corporate Email, and Phone number.'
      );
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      const generatedId = `ITAD-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
      setSubmissionId(generatedId);
      if (onStepChange) onStepChange(5);
    }, 750);
  };

  const handleReset = () => {
    setDeviceStates((prev) => ({
      ...prev,
      [selectedType]: {
        ...DEFAULT_DEVICE_STATES[selectedType],
        model: '',
        notes: '',
        quantity: 1
      }
    }));
    setUploadedImages([]);
    setErrorMessage('');
    changeStep(1);
  };

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-3xl border border-[#CCFBF1] p-8 sm:p-12 text-center shadow-xl">
        <div className="w-20 h-20 rounded-full bg-[#CCFBF1] text-[#0D7E73] flex items-center justify-center mx-auto mb-6 shadow-inner">
          <CheckCircle2 className="w-10 h-10 stroke-[2.2]" />
        </div>

        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#CCFBF1] text-[#0D7E73] text-xs font-bold font-mono mb-3">
          <span>{isPt ? 'REFERÊNCIA ITAD:' : 'ITAD REFERENCE ID:'} {submissionId}</span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-black text-[#042F2C] mb-3">
          {isPt ? 'Pedido de Avaliação Submetido' : 'Valuation Request Submitted'}
        </h3>
        <p className="text-sm sm:text-base text-[#475569] max-w-xl mx-auto leading-relaxed mb-8">
          {isPt
            ? `Recebemos os detalhes do seu equipamento (${currentCategoryName} ${currentDeviceState.brand} ${currentDeviceState.model}). A nossa equipa irá analisar as especificações e contactá-lo com a melhor oferta.`
            : `We have received your hardware details (${currentCategoryName} ${currentDeviceState.brand} ${currentDeviceState.model}). Our engineering team will review the specs and send you our best offer.`}
        </p>

        {/* Next Steps Checklist */}
        <div className="bg-[#F0FDFA] rounded-2xl p-5 border border-[#CCFBF1] max-w-lg mx-auto text-left mb-8 space-y-2.5">
          <div className="text-xs font-bold text-[#0D7E73] uppercase tracking-wider mb-2">
            {isPt ? 'Próximos Passos:' : 'Next Steps:'}
          </div>
          <div className="flex items-center gap-2.5 text-xs text-[#042F2C] font-semibold">
            <Check className="w-4 h-4 text-[#0D7E73] shrink-0" />
            <span>{isPt ? 'Análise técnica em 24-48h por engenheiros certificados' : 'Technical spec review in 24-48h by certified engineers'}</span>
          </div>
          <div className="flex items-center gap-2.5 text-xs text-[#042F2C] font-semibold">
            <Check className="w-4 h-4 text-[#0D7E73] shrink-0" />
            <span>{isPt ? 'Envio de proposta formal de valorização por email' : 'Formal valuation proposal sent to your email'}</span>
          </div>
          <div className="flex items-center gap-2.5 text-xs text-[#042F2C] font-semibold">
            <Check className="w-4 h-4 text-[#0D7E73] shrink-0" />
            <span>{isPt ? 'Recolha gratuita e sanitização NIST 800-88' : 'Free nationwide pickup and NIST 800-88 data erasure'}</span>
          </div>
        </div>

        <button
          type="button"
          onClick={() => {
            setIsSubmitted(false);
            handleReset();
          }}
          className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-[#0D7E73] hover:bg-[#0B6A61] transition-all shadow-md cursor-pointer"
        >
          {isPt ? 'Submeter Outro Equipamento' : 'Submit Another Equipment'}
        </button>
      </div>
    );
  }

  const CurrentCategoryIcon = currentCategory.icon;

  return (
    <form 
      onSubmit={handleFormSubmit}
      className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-9 shadow-lg shadow-teal-950/5 relative overflow-hidden"
    >
      {errorMessage && (
        <div className="mb-6 p-4 rounded-2xl bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm flex items-center gap-3">
          <AlertCircle className="w-5 h-5 shrink-0 text-red-600" />
          <span className="font-semibold">{errorMessage}</span>
        </div>
      )}

      {/* =========================================================================
          STEP 1: SELECT EQUIPMENT
         ========================================================================= */}
      <div className="mb-10">
        <h2 className="text-xl sm:text-2xl font-black text-[#042F2C] mb-1">
          1. {isPt ? 'Selecionar Equipamento' : 'Select Equipment'}
        </h2>
        <p className="text-xs sm:text-sm text-[#64748B] mb-6 font-medium">
          {isPt ? 'Escolha o tipo de equipamento que pretende vender.' : 'Choose the type of equipment you want to sell.'}
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Dropdown for Equipment Type */}
          <div className="lg:col-span-7" ref={typeDropdownRef}>
            <label className="block text-xs sm:text-sm font-bold text-[#042F2C] mb-2">
              {isPt ? 'O que pretende vender?' : 'What do you want to sell?'} <span className="text-red-500">*</span>
            </label>

            <div className="relative">
              <button
                type="button"
                onClick={() => setIsTypeDropdownOpen((prev) => !prev)}
                className={`w-full flex items-center justify-between p-3.5 sm:p-4 rounded-2xl border text-left transition-all duration-200 cursor-pointer ${
                  isTypeDropdownOpen 
                    ? 'border-[#0D7E73] ring-2 ring-[#CCFBF1] bg-white shadow-sm' 
                    : 'border-slate-300 hover:border-[#0D7E73] bg-white shadow-2xs'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#F0FDFA] border border-[#CCFBF1] text-[#0D7E73] flex items-center justify-center shrink-0">
                    <CurrentCategoryIcon className="w-4 h-4" />
                  </div>
                  <span className="text-sm sm:text-base font-bold text-[#042F2C]">
                    {currentCategoryName}
                  </span>
                </div>
                <ChevronDown className={`w-5 h-5 text-[#64748B] transition-transform duration-200 ${isTypeDropdownOpen ? 'rotate-180 text-[#0D7E73]' : ''}`} />
              </button>

              {/* Custom Dropdown Menu matching screenshot */}
              <AnimatePresence>
                {isTypeDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.15 }}
                    className="absolute left-0 right-0 top-full mt-2 bg-white rounded-2xl border border-slate-200 shadow-2xl z-40 overflow-hidden py-1.5 max-h-80 overflow-y-auto"
                  >
                    {CATEGORY_OPTIONS.map((option) => {
                      const Icon = option.icon;
                      const isSelected = option.id === selectedType;
                      const label = isPt ? option.label.pt : option.label.en;
                      return (
                        <button
                          key={option.id}
                          type="button"
                          onClick={() => {
                            setSelectedType(option.id);
                            setIsTypeDropdownOpen(false);
                          }}
                          className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors cursor-pointer ${
                            isSelected 
                              ? 'bg-[#F0FDFA] text-[#0D7E73] font-bold' 
                              : 'hover:bg-slate-50 text-[#042F2C]'
                          }`}
                        >
                          <Icon className={`w-4 h-4 ${isSelected ? 'text-[#0D7E73]' : 'text-slate-400'}`} />
                          <span className="text-sm font-medium">{label}</span>
                          {isSelected && <Check className="w-4 h-4 text-[#0D7E73] ml-auto" />}
                        </button>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* "Your Data is Safe" Info Card matching screenshot */}
          <div className="lg:col-span-5 bg-[#F0FDFA] rounded-2xl p-4 sm:p-5 border border-[#CCFBF1] flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-white border border-[#99F6E4] text-[#0D7E73] flex items-center justify-center shrink-0 shadow-2xs">
              <ShieldCheck className="w-5 h-5 stroke-[2]" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-black text-[#042F2C] mb-1">
                {isPt ? 'Os Seus Dados Estão Seguros' : 'Your Data is Safe'}
              </h4>
              <p className="text-xs text-[#475569] leading-relaxed font-medium">
                {isPt
                  ? 'Todos os dados são eliminados de forma segura segundo as normas NIST 800-88 antes de qualquer processamento posterior.'
                  : 'All data is securely erased as per NIST 800-88 standards before any further processing.'}
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* =========================================================================
          STEP 2: PROVIDE DETAILS – [DYNAMIC EQUIPMENT TYPE]
         ========================================================================= */}
      <div className="mb-10 pt-8 border-t border-slate-100">
        <h2 className="text-xl sm:text-2xl font-black text-[#042F2C] mb-6">
          2. {isPt ? 'Indicar Detalhes' : 'Provide Details'} – <span className="text-[#0D7E73]">{currentCategoryName}</span>
        </h2>

        {/* Dynamic Category Specific Form Fields */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedType}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.18 }}
          >
            <DynamicDeviceFields
              category={selectedType}
              state={currentDeviceState}
              onChange={handleDeviceFieldChange}
              lang={lang}
            />
          </motion.div>
        </AnimatePresence>

        {/* Row for Quantity and Notes */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
          
          {/* Quantity Selector */}
          <div className="lg:col-span-4">
            <label className="block text-xs font-bold text-[#042F2C] mb-1.5">
              {isPt ? 'Quantidade' : 'Quantity'} <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center rounded-2xl border border-slate-300 bg-white p-1.5 shadow-2xs">
              <button
                type="button"
                onClick={() => handleDeviceFieldChange('quantity', Math.max(1, currentDeviceState.quantity - 1))}
                className="w-10 h-10 rounded-xl hover:bg-slate-100 flex items-center justify-center text-slate-600 transition-colors cursor-pointer"
              >
                <Minus className="w-4 h-4" />
              </button>
              <input
                type="number"
                min="1"
                value={currentDeviceState.quantity}
                onChange={(e) => handleDeviceFieldChange('quantity', Math.max(1, parseInt(e.target.value) || 1))}
                className="w-full text-center font-bold text-sm text-[#042F2C] outline-hidden"
              />
              <button
                type="button"
                onClick={() => handleDeviceFieldChange('quantity', currentDeviceState.quantity + 1)}
                className="w-10 h-10 rounded-xl hover:bg-slate-100 flex items-center justify-center text-[#0D7E73] transition-colors cursor-pointer"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Additional Notes Textarea with 0/300 Counter */}
          <div className="lg:col-span-8">
            <div className="flex justify-between items-center mb-1.5">
              <label className="block text-xs font-bold text-[#042F2C]">
                {isPt ? 'Notas Adicionais (Opcional)' : 'Additional Notes (Optional)'}
              </label>
              <span className="text-[11px] text-slate-400 font-mono">
                {currentDeviceState.notes.length}/300
              </span>
            </div>
            <textarea
              maxLength={300}
              rows={2}
              value={currentDeviceState.notes}
              onChange={(e) => handleDeviceFieldChange('notes', e.target.value)}
              placeholder={isPt ? 'Detalhes sobre números de série, garantia restante, acessórios ou localização...' : 'Any additional details about the device, serial numbers, accessories...'}
              className="w-full p-3.5 rounded-2xl border border-slate-300 bg-white text-xs sm:text-sm text-[#042F2C] placeholder-slate-400 focus:border-[#0D7E73] focus:ring-2 focus:ring-[#CCFBF1] outline-hidden transition-all resize-none shadow-2xs"
            />
          </div>

        </div>
      </div>

      {/* =========================================================================
          STEP 3: UPLOAD IMAGES (OPTIONAL)
         ========================================================================= */}
      <div className="mb-10 pt-8 border-t border-slate-100">
        <div className="flex justify-between items-baseline mb-1">
          <h2 className="text-xl sm:text-2xl font-black text-[#042F2C]">
            3. {isPt ? 'Carregar Fotografias (Opcional)' : 'Upload Images (Optional)'}
          </h2>
          <span className="text-xs font-bold font-mono text-[#0D7E73]">
            {uploadedImages.length} / 10
          </span>
        </div>
        <p className="text-xs sm:text-sm text-[#64748B] mb-5 font-medium">
          {isPt ? 'Adicione imagens nítidas do seu equipamento. Pode carregar até 10 imagens.' : 'Add clear images of your equipment. You can upload up to 10 images.'}
        </p>

        {/* Drag & Drop Zone */}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/jpeg,image/png,image/webp"
          multiple
          onChange={(e) => handleImageUpload(e.target.files)}
          className="hidden"
        />

        <div
          onClick={() => fileInputRef.current?.click()}
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => {
            e.preventDefault();
            handleImageUpload(e.dataTransfer.files);
          }}
          className="border-2 border-dashed border-slate-300 hover:border-[#0D7E73] bg-[#F8FAFC] hover:bg-[#F0FDFA] rounded-2xl p-6 sm:p-8 text-center transition-all cursor-pointer group mb-4"
        >
          <div className="w-12 h-12 rounded-full bg-white border border-slate-200 group-hover:border-[#CCFBF1] text-[#0D7E73] flex items-center justify-center mx-auto mb-3 shadow-2xs group-hover:scale-105 transition-transform">
            <Upload className="w-5 h-5" />
          </div>
          <p className="text-xs sm:text-sm text-[#475569] font-medium">
            {isPt ? 'Arraste e largue as imagens aqui ou ' : 'Drag & drop images here or '}
            <span className="text-[#0D7E73] font-bold underline underline-offset-2">
              {isPt ? 'procure ficheiros' : 'browse files'}
            </span>
          </p>
          <span className="text-[11px] text-slate-400 mt-1 block">
            JPG, PNG up to 10MB each
          </span>
        </div>

        {/* Image Thumbnail Preview Grid */}
        {uploadedImages.length > 0 && (
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
            {uploadedImages.map((img, idx) => (
              <div key={idx} className="relative rounded-xl overflow-hidden border border-slate-200 aspect-square group shadow-2xs">
                <img src={img.preview} alt="Upload preview" className="w-full h-full object-cover" />
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleRemoveImage(idx);
                  }}
                  className="absolute top-1 right-1 w-6 h-6 rounded-full bg-black/70 text-white flex items-center justify-center hover:bg-red-600 transition-colors"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* =========================================================================
          STEP 4: CONTACT INFORMATION (WHEN PROCEEDING)
         ========================================================================= */}
      {formStep >= 4 && (
        <div className="mb-10 pt-8 border-t border-slate-100 animate-fadeIn">
          <h2 className="text-xl sm:text-2xl font-black text-[#042F2C] mb-1">
            4. {isPt ? 'Informações de Contacto' : 'Contact Information'}
          </h2>
          <p className="text-xs sm:text-sm text-[#64748B] mb-5 font-medium">
            {isPt ? 'Indique os dados da sua empresa para envio da proposta formal de valorização.' : 'Provide your business details to receive the official commercial valuation.'}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <div>
              <label className="block text-xs font-bold text-[#042F2C] mb-1.5">
                {isPt ? 'Nome Completo' : 'Full Name'} <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder={isPt ? 'ex: Tiago Santos' : 'e.g. John Doe'}
                  className="w-full pl-10 p-3.5 rounded-2xl border border-slate-300 bg-white text-xs sm:text-sm text-[#042F2C] placeholder-slate-400 focus:border-[#0D7E73] focus:ring-2 focus:ring-[#CCFBF1] outline-hidden transition-all shadow-2xs"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#042F2C] mb-1.5">
                {isPt ? 'Email Corporativo' : 'Corporate Email'} <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="empresa@dominio.pt"
                  className="w-full pl-10 p-3.5 rounded-2xl border border-slate-300 bg-white text-xs sm:text-sm text-[#042F2C] placeholder-slate-400 focus:border-[#0D7E73] focus:ring-2 focus:ring-[#CCFBF1] outline-hidden transition-all shadow-2xs"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#042F2C] mb-1.5">
                {isPt ? 'Telefone de Contacto' : 'Phone Number'} <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+351 910 000 000"
                  className="w-full pl-10 p-3.5 rounded-2xl border border-slate-300 bg-white text-xs sm:text-sm text-[#042F2C] placeholder-slate-400 focus:border-[#0D7E73] focus:ring-2 focus:ring-[#CCFBF1] outline-hidden transition-all shadow-2xs"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#042F2C] mb-1.5">
                {isPt ? 'Nome da Empresa' : 'Company Name'}
              </label>
              <div className="relative">
                <Building className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  placeholder="Empresa Lda / S.A."
                  className="w-full pl-10 p-3.5 rounded-2xl border border-slate-300 bg-white text-xs sm:text-sm text-[#042F2C] placeholder-slate-400 focus:border-[#0D7E73] focus:ring-2 focus:ring-[#CCFBF1] outline-hidden transition-all shadow-2xs"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#042F2C] mb-1.5">
                {isPt ? 'Cidade / Localização para Recolha' : 'City / Pickup Location'}
              </label>
              <div className="relative">
                <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="Porto / Lisboa / Braga / Trofa"
                  className="w-full pl-10 p-3.5 rounded-2xl border border-slate-300 bg-white text-xs sm:text-sm text-[#042F2C] placeholder-slate-400 focus:border-[#0D7E73] focus:ring-2 focus:ring-[#CCFBF1] outline-hidden transition-all shadow-2xs"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          BOTTOM FORM ACTIONS MATCHING SCREENSHOT
         ========================================================================= */}
      <div className="flex items-center justify-end gap-3 pt-6 border-t border-slate-100">
        <button
          type="button"
          onClick={handleReset}
          className="px-5 py-3 rounded-xl text-xs sm:text-sm font-bold text-slate-500 hover:text-[#042F2C] hover:bg-slate-100 transition-colors cursor-pointer"
        >
          {isPt ? 'Cancelar' : 'Cancel'}
        </button>

        <ActionPrimaryButton
          type="submit"
          disabled={isSubmitting}
          size="md"
          icon={isSubmitting ? undefined : formStep >= 4 ? <Check className="w-4 h-4 stroke-[2.5]" /> : undefined}
        >
          {isSubmitting
            ? (isPt ? 'A Processar...' : 'Processing...')
            : formStep < 4
            ? (isPt ? 'Guardar & Continuar' : 'Save & Continue')
            : (isPt ? 'Submeter Pedido de Avaliação' : 'Submit Valuation Request')}
        </ActionPrimaryButton>
      </div>

    </form>
  );
};
