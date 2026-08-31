import React from 'react';
import { ChevronDown } from 'lucide-react';
import { EquipmentCategoryKey } from './SellEquipmentInteractiveForm';
import { DynamicDeviceState } from './sellFormSchemas';
import { Language } from '../../types';

interface DynamicDeviceFieldsProps {
  category: EquipmentCategoryKey;
  state: DynamicDeviceState;
  onChange: (field: keyof DynamicDeviceState, value: any) => void;
  lang: Language;
}

export const DynamicDeviceFields: React.FC<DynamicDeviceFieldsProps> = ({
  category,
  state,
  onChange,
  lang
}) => {
  const isPt = lang === 'pt';

  const selectClasses = "w-full appearance-none p-3.5 pr-10 rounded-2xl border border-slate-300 bg-white text-xs sm:text-sm font-medium text-[#042F2C] focus:border-[#0D7E73] focus:ring-2 focus:ring-[#CCFBF1] outline-hidden transition-all cursor-pointer shadow-2xs";
  const inputClasses = "w-full p-3.5 rounded-2xl border border-slate-300 bg-white text-xs sm:text-sm font-medium text-[#042F2C] placeholder-slate-400 focus:border-[#0D7E73] focus:ring-2 focus:ring-[#CCFBF1] outline-hidden transition-all shadow-2xs";

  // Common condition options
  const renderConditionSelect = () => (
    <div>
      <label className="block text-xs font-bold text-[#042F2C] mb-1.5">
        {isPt ? 'Estado Funcional & Estético' : 'Functional Condition'} <span className="text-red-500">*</span>
      </label>
      <div className="relative">
        <select
          value={state.functionalCondition}
          onChange={(e) => onChange('functionalCondition', e.target.value)}
          className={selectClasses}
        >
          <option value="Grade A+ (Pristine / Like New)">Grade A+ ({isPt ? 'Como Novo / Impecável' : 'Pristine / Like New'})</option>
          <option value="Grade A (Minor cosmetic wear)">Grade A ({isPt ? 'Ligeiro desgaste cosmético normal' : 'Minor cosmetic wear'})</option>
          <option value="Grade B (Visible wear, 100% functional)">Grade B ({isPt ? 'Sinais de uso visíveis, 100% funcional' : 'Visible wear, 100% functional'})</option>
          <option value="Grade C (Needs repair / For parts)">Grade C ({isPt ? 'Avariado / Para Peças' : 'Needs repair / For parts'})</option>
        </select>
        <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
      </div>
    </div>
  );

  // -------------------------------------------------------------
  // 1. LAPTOP FIELDS
  // -------------------------------------------------------------
  if (category === 'laptop') {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
        {/* Brand * */}
        <div>
          <label className="block text-xs font-bold text-[#042F2C] mb-1.5">
            {isPt ? 'Marca' : 'Brand'} <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <select
              value={state.brand}
              onChange={(e) => onChange('brand', e.target.value)}
              className={selectClasses}
            >
              <option value="Lenovo">Lenovo</option>
              <option value="Dell">Dell</option>
              <option value="HP">HP Enterprise</option>
              <option value="Apple">Apple</option>
              <option value="Asus">ASUS</option>
              <option value="Acer">Acer</option>
              <option value="Microsoft">Microsoft Surface</option>
              <option value="Fujitsu">Fujitsu</option>
              <option value="Other">Outro / Other</option>
            </select>
            <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Model * */}
        <div>
          <label className="block text-xs font-bold text-[#042F2C] mb-1.5">
            {isPt ? 'Modelo' : 'Model'} <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={state.model}
            onChange={(e) => onChange('model', e.target.value)}
            placeholder={isPt ? 'ex: ThinkPad T14 / Latitude 5420' : 'Enter model (e.g. ThinkPad T14)'}
            className={inputClasses}
          />
        </div>

        {/* Processor * */}
        <div>
          <label className="block text-xs font-bold text-[#042F2C] mb-1.5">
            {isPt ? 'Processador' : 'Processor'} <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <select
              value={state.processor || 'Intel Core i7'}
              onChange={(e) => onChange('processor', e.target.value)}
              className={selectClasses}
            >
              <option value="Intel Core i5">Intel Core i5</option>
              <option value="Intel Core i7">Intel Core i7</option>
              <option value="Intel Core i9">Intel Core i9</option>
              <option value="Intel Core Ultra 7 / 9">Intel Core Ultra 7 / 9</option>
              <option value="AMD Ryzen 5 / 7 / 9">AMD Ryzen 5 / 7 / 9</option>
              <option value="Apple Silicon M1 / M2 / M3 / M4">Apple Silicon (M1-M4)</option>
              <option value="Other">Outro / Other</option>
            </select>
            <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* RAM * */}
        <div>
          <label className="block text-xs font-bold text-[#042F2C] mb-1.5">
            RAM <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <select
              value={state.ram || '16 GB'}
              onChange={(e) => onChange('ram', e.target.value)}
              className={selectClasses}
            >
              <option value="8 GB">8 GB</option>
              <option value="16 GB">16 GB</option>
              <option value="32 GB">32 GB</option>
              <option value="64 GB">64 GB</option>
              <option value="128 GB+">128 GB+</option>
            </select>
            <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Storage * */}
        <div>
          <label className="block text-xs font-bold text-[#042F2C] mb-1.5">
            {isPt ? 'Armazenamento' : 'Storage'} <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <select
              value={state.storage || '512 GB'}
              onChange={(e) => onChange('storage', e.target.value)}
              className={selectClasses}
            >
              <option value="256 GB">256 GB</option>
              <option value="512 GB">512 GB</option>
              <option value="1 TB">1 TB</option>
              <option value="2 TB">2 TB</option>
              <option value="4 TB+">4 TB+</option>
            </select>
            <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Storage Type * */}
        <div>
          <label className="block text-xs font-bold text-[#042F2C] mb-1.5">
            {isPt ? 'Tipo de Armazenamento' : 'Storage Type'} <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <select
              value={state.storageType || 'NVMe SSD'}
              onChange={(e) => onChange('storageType', e.target.value)}
              className={selectClasses}
            >
              <option value="NVMe SSD">NVMe SSD (M.2 / PCIe)</option>
              <option value="SATA SSD">SATA SSD (2.5")</option>
              <option value="HDD (Hard Disk)">HDD (Hard Disk)</option>
              <option value="Sem Disco (Drives removidos)">Sem Disco / Cleared</option>
            </select>
            <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Screen Size */}
        <div>
          <label className="block text-xs font-bold text-[#042F2C] mb-1.5">
            {isPt ? 'Tamanho do Ecrã' : 'Screen Size'}
          </label>
          <div className="relative">
            <select
              value={state.screenSize || '14.0"'}
              onChange={(e) => onChange('screenSize', e.target.value)}
              className={selectClasses}
            >
              <option value="13.3&quot;">13.3"</option>
              <option value="14.0&quot;">14.0"</option>
              <option value="15.6&quot;">15.6"</option>
              <option value="16.0&quot;">16.0"</option>
              <option value="17.3&quot;">17.3"</option>
            </select>
            <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Graphics (GPU) */}
        <div>
          <label className="block text-xs font-bold text-[#042F2C] mb-1.5">
            {isPt ? 'Placa Gráfica (GPU)' : 'Graphics (GPU)'}
          </label>
          <div className="relative">
            <select
              value={state.gpu || 'Intel Iris Xe Graphics'}
              onChange={(e) => onChange('gpu', e.target.value)}
              className={selectClasses}
            >
              <option value="Intel Iris Xe / UHD Graphics">Intel Iris Xe / UHD</option>
              <option value="NVIDIA GeForce RTX (Laptop)">NVIDIA GeForce RTX</option>
              <option value="NVIDIA RTX / Quadro Pro">NVIDIA RTX / Quadro Pro</option>
              <option value="AMD Radeon Graphics">AMD Radeon Graphics</option>
              <option value="Apple Silicon GPU">Apple Silicon GPU</option>
            </select>
            <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Battery Health */}
        <div>
          <label className="block text-xs font-bold text-[#042F2C] mb-1.5">
            {isPt ? 'Saúde da Bateria' : 'Battery Health'}
          </label>
          <div className="relative">
            <select
              value={state.batteryHealth || '85%+ (Excellent)'}
              onChange={(e) => onChange('batteryHealth', e.target.value)}
              className={selectClasses}
            >
              <option value="85%+ (Excellent)">85%+ (Excelente / Excellent)</option>
              <option value="70% - 85% (Good)">70% - 85% (Bom / Good)</option>
              <option value="<70% (Service Recommended)">&lt; 70% (Necessita Troca)</option>
            </select>
            <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Operating System */}
        <div>
          <label className="block text-xs font-bold text-[#042F2C] mb-1.5">
            {isPt ? 'Sistema Operativo' : 'Operating System'}
          </label>
          <div className="relative">
            <select
              value={state.operatingSystem || 'Windows 11 Pro'}
              onChange={(e) => onChange('operatingSystem', e.target.value)}
              className={selectClasses}
            >
              <option value="Windows 11 Pro">Windows 11 Pro</option>
              <option value="Windows 10 Pro">Windows 10 Pro</option>
              <option value="macOS">macOS</option>
              <option value="Linux / Ubuntu">Linux (Ubuntu / Debian)</option>
              <option value="Sem SO / Formatado">Sem SO / Formatado</option>
            </select>
            <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Charger Included? */}
        <div>
          <label className="block text-xs font-bold text-[#042F2C] mb-1.5">
            {isPt ? 'Carregador Incluído?' : 'Charger Included?'}
          </label>
          <div className="relative">
            <select
              value={state.chargerIncluded || 'Yes (Original OEM)'}
              onChange={(e) => onChange('chargerIncluded', e.target.value)}
              className={selectClasses}
            >
              <option value="Yes (Original OEM)">{isPt ? 'Sim (Original OEM)' : 'Yes (Original OEM)'}</option>
              <option value="Yes (Compatible)">{isPt ? 'Sim (Compatível)' : 'Yes (Compatible)'}</option>
              <option value="No Charger">{isPt ? 'Não (Apenas Portátil)' : 'No Charger'}</option>
            </select>
            <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Functional Condition * */}
        {renderConditionSelect()}
      </div>
    );
  }

  // -------------------------------------------------------------
  // 2. DESKTOP FIELDS
  // -------------------------------------------------------------
  if (category === 'desktop') {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
        {/* Brand * */}
        <div>
          <label className="block text-xs font-bold text-[#042F2C] mb-1.5">
            {isPt ? 'Marca' : 'Brand'} <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <select
              value={state.brand}
              onChange={(e) => onChange('brand', e.target.value)}
              className={selectClasses}
            >
              <option value="Dell">Dell (OptiPlex / Precision)</option>
              <option value="HP">HP (EliteDesk / ProDesk / Z-Workstation)</option>
              <option value="Lenovo">Lenovo (ThinkCentre / ThinkStation)</option>
              <option value="Apple">Apple (Mac Studio / Mac Mini / iMac)</option>
              <option value="Custom / Clone">Custom Built / Desktop PC</option>
              <option value="Other">Outro / Other</option>
            </select>
            <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Model * */}
        <div>
          <label className="block text-xs font-bold text-[#042F2C] mb-1.5">
            {isPt ? 'Modelo' : 'Model'} <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={state.model}
            onChange={(e) => onChange('model', e.target.value)}
            placeholder={isPt ? 'ex: OptiPlex 7090 / ThinkCentre M920q' : 'Enter model (e.g. OptiPlex 7090)'}
            className={inputClasses}
          />
        </div>

        {/* Processor * */}
        <div>
          <label className="block text-xs font-bold text-[#042F2C] mb-1.5">
            {isPt ? 'Processador' : 'Processor'} <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <select
              value={state.processor || 'Intel Core i7'}
              onChange={(e) => onChange('processor', e.target.value)}
              className={selectClasses}
            >
              <option value="Intel Core i5">Intel Core i5</option>
              <option value="Intel Core i7">Intel Core i7</option>
              <option value="Intel Core i9">Intel Core i9</option>
              <option value="Intel Xeon Workstation">Intel Xeon Workstation</option>
              <option value="AMD Ryzen 5 / 7 / 9">AMD Ryzen 5 / 7 / 9</option>
              <option value="AMD Threadripper">AMD Threadripper</option>
              <option value="Apple M-Series">Apple Silicon M-Series</option>
              <option value="Other">Outro / Other</option>
            </select>
            <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* RAM * */}
        <div>
          <label className="block text-xs font-bold text-[#042F2C] mb-1.5">
            RAM <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <select
              value={state.ram || '16 GB'}
              onChange={(e) => onChange('ram', e.target.value)}
              className={selectClasses}
            >
              <option value="8 GB">8 GB</option>
              <option value="16 GB">16 GB</option>
              <option value="32 GB">32 GB</option>
              <option value="64 GB">64 GB</option>
              <option value="128 GB+">128 GB+</option>
            </select>
            <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Storage * */}
        <div>
          <label className="block text-xs font-bold text-[#042F2C] mb-1.5">
            {isPt ? 'Armazenamento' : 'Storage'} <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <select
              value={state.storage || '512 GB'}
              onChange={(e) => onChange('storage', e.target.value)}
              className={selectClasses}
            >
              <option value="256 GB">256 GB</option>
              <option value="512 GB">512 GB</option>
              <option value="1 TB">1 TB</option>
              <option value="2 TB">2 TB</option>
              <option value="4 TB+">4 TB+</option>
            </select>
            <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Storage Type * */}
        <div>
          <label className="block text-xs font-bold text-[#042F2C] mb-1.5">
            {isPt ? 'Tipo de Armazenamento' : 'Storage Type'} <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <select
              value={state.storageType || 'NVMe SSD'}
              onChange={(e) => onChange('storageType', e.target.value)}
              className={selectClasses}
            >
              <option value="NVMe SSD">NVMe SSD (PCIe M.2)</option>
              <option value="SATA SSD">SATA SSD (2.5")</option>
              <option value="HDD + SSD Hybrid">HDD + SSD Hybrid</option>
              <option value="HDD (3.5&quot;)">HDD (3.5")</option>
              <option value="Sem Disco (Drives removidos)">Sem Disco / Cleared</option>
            </select>
            <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Graphics Card */}
        <div>
          <label className="block text-xs font-bold text-[#042F2C] mb-1.5">
            {isPt ? 'Placa Gráfica' : 'Graphics Card'}
          </label>
          <div className="relative">
            <select
              value={state.gpu || 'Integrated Intel / AMD'}
              onChange={(e) => onChange('gpu', e.target.value)}
              className={selectClasses}
            >
              <option value="Integrated Intel / AMD">Integrada (Intel / AMD)</option>
              <option value="NVIDIA GeForce GTX / RTX">NVIDIA GeForce RTX / GTX</option>
              <option value="NVIDIA RTX / Quadro Workstation">NVIDIA RTX / Quadro Pro</option>
              <option value="AMD Radeon Pro">AMD Radeon Pro</option>
            </select>
            <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Operating System */}
        <div>
          <label className="block text-xs font-bold text-[#042F2C] mb-1.5">
            {isPt ? 'Sistema Operativo' : 'Operating System'}
          </label>
          <div className="relative">
            <select
              value={state.operatingSystem || 'Windows 11 Pro'}
              onChange={(e) => onChange('operatingSystem', e.target.value)}
              className={selectClasses}
            >
              <option value="Windows 11 Pro">Windows 11 Pro</option>
              <option value="Windows 10 Pro">Windows 10 Pro</option>
              <option value="macOS">macOS</option>
              <option value="Linux / Ubuntu">Linux (Ubuntu / CentOS)</option>
              <option value="Sem SO">Sem SO</option>
            </select>
            <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Power Cable Included */}
        <div>
          <label className="block text-xs font-bold text-[#042F2C] mb-1.5">
            {isPt ? 'Cabo de Alimentação Incluído' : 'Power Cable Included'}
          </label>
          <div className="relative">
            <select
              value={state.powerCableIncluded || 'Yes'}
              onChange={(e) => onChange('powerCableIncluded', e.target.value)}
              className={selectClasses}
            >
              <option value="Yes">{isPt ? 'Sim' : 'Yes'}</option>
              <option value="No">{isPt ? 'Não' : 'No'}</option>
            </select>
            <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Monitor Included? */}
        <div>
          <label className="block text-xs font-bold text-[#042F2C] mb-1.5">
            {isPt ? 'Monitor / Ecrã Incluído?' : 'Monitor Included?'}
          </label>
          <div className="relative">
            <select
              value={state.monitorIncluded || 'No (Desktop Unit Only)'}
              onChange={(e) => onChange('monitorIncluded', e.target.value)}
              className={selectClasses}
            >
              <option value="No (Desktop Unit Only)">{isPt ? 'Não (Apenas Torre / Desktop)' : 'No (Desktop Unit Only)'}</option>
              <option value="Yes (Full Setup with Monitor)">{isPt ? 'Sim (Pack Completo com Monitor)' : 'Yes (Full Setup with Monitor)'}</option>
            </select>
            <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Functional Condition * */}
        {renderConditionSelect()}
      </div>
    );
  }

  // -------------------------------------------------------------
  // 3. MOBILE PHONE FIELDS
  // -------------------------------------------------------------
  if (category === 'mobile') {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
        {/* Brand * */}
        <div>
          <label className="block text-xs font-bold text-[#042F2C] mb-1.5">
            {isPt ? 'Marca' : 'Brand'} <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <select
              value={state.brand}
              onChange={(e) => onChange('brand', e.target.value)}
              className={selectClasses}
            >
              <option value="Apple">Apple (iPhone)</option>
              <option value="Samsung">Samsung (Galaxy)</option>
              <option value="Google">Google (Pixel)</option>
              <option value="Xiaomi">Xiaomi</option>
              <option value="OnePlus">OnePlus</option>
              <option value="Huawei">Huawei</option>
              <option value="Other">Outro / Other</option>
            </select>
            <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Model * */}
        <div>
          <label className="block text-xs font-bold text-[#042F2C] mb-1.5">
            {isPt ? 'Modelo' : 'Model'} <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={state.model}
            onChange={(e) => onChange('model', e.target.value)}
            placeholder={isPt ? 'ex: iPhone 15 Pro / Galaxy S24 Ultra' : 'Enter model (e.g. iPhone 15 Pro)'}
            className={inputClasses}
          />
        </div>

        {/* Storage * */}
        <div>
          <label className="block text-xs font-bold text-[#042F2C] mb-1.5">
            {isPt ? 'Armazenamento' : 'Storage'} <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <select
              value={state.storage || '256 GB'}
              onChange={(e) => onChange('storage', e.target.value)}
              className={selectClasses}
            >
              <option value="64 GB">64 GB</option>
              <option value="128 GB">128 GB</option>
              <option value="256 GB">256 GB</option>
              <option value="512 GB">512 GB</option>
              <option value="1 TB">1 TB</option>
            </select>
            <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* RAM */}
        <div>
          <label className="block text-xs font-bold text-[#042F2C] mb-1.5">
            RAM
          </label>
          <div className="relative">
            <select
              value={state.ram || '8 GB'}
              onChange={(e) => onChange('ram', e.target.value)}
              className={selectClasses}
            >
              <option value="4 GB">4 GB</option>
              <option value="6 GB">6 GB</option>
              <option value="8 GB">8 GB</option>
              <option value="12 GB">12 GB</option>
              <option value="16 GB">16 GB</option>
              <option value="Standard Apple RAM">Standard OEM</option>
            </select>
            <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Color */}
        <div>
          <label className="block text-xs font-bold text-[#042F2C] mb-1.5">
            {isPt ? 'Cor' : 'Color'}
          </label>
          <input
            type="text"
            value={state.color || ''}
            onChange={(e) => onChange('color', e.target.value)}
            placeholder={isPt ? 'ex: Preto / Titânio Natural / Azul' : 'e.g. Natural Titanium / Space Black'}
            className={inputClasses}
          />
        </div>

        {/* Screen Size */}
        <div>
          <label className="block text-xs font-bold text-[#042F2C] mb-1.5">
            {isPt ? 'Tamanho do Ecrã' : 'Screen Size'}
          </label>
          <div className="relative">
            <select
              value={state.screenSize || '6.1"'}
              onChange={(e) => onChange('screenSize', e.target.value)}
              className={selectClasses}
            >
              <option value="5.4&quot;">5.4" (Mini)</option>
              <option value="6.1&quot;">6.1" (Standard)</option>
              <option value="6.7&quot;">6.7" (Pro Max / Plus)</option>
              <option value="6.8&quot;+">6.8"+ (Ultra)</option>
              <option value="Foldable Screen">Foldable / Ecrã Dobrável</option>
            </select>
            <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Network / Carrier */}
        <div>
          <label className="block text-xs font-bold text-[#042F2C] mb-1.5">
            {isPt ? 'Rede / Operadora' : 'Network'}
          </label>
          <div className="relative">
            <select
              value={state.networkStatus || 'Unlocked (All Carriers)'}
              onChange={(e) => onChange('networkStatus', e.target.value)}
              className={selectClasses}
            >
              <option value="Unlocked (All Carriers)">{isPt ? 'Desbloqueado (Todas as Redes)' : 'Unlocked (All Carriers)'}</option>
              <option value="Locked to Carrier">{isPt ? 'Bloqueado a Operadora' : 'Locked to Carrier'}</option>
            </select>
            <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* SIM Type */}
        <div>
          <label className="block text-xs font-bold text-[#042F2C] mb-1.5">
            {isPt ? 'Tipo de SIM' : 'SIM Type'}
          </label>
          <div className="relative">
            <select
              value={state.simType || 'Physical SIM + eSIM'}
              onChange={(e) => onChange('simType', e.target.value)}
              className={selectClasses}
            >
              <option value="Physical SIM + eSIM">Physical SIM + eSIM</option>
              <option value="Dual Physical SIM">Dual Physical SIM</option>
              <option value="eSIM Only">eSIM Only</option>
              <option value="Single Nano SIM">Single Nano SIM</option>
            </select>
            <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* PTA Approved / IMEI Status */}
        <div>
          <label className="block text-xs font-bold text-[#042F2C] mb-1.5">
            {isPt ? 'Homologação / PTA Approved' : 'PTA Approved'}
          </label>
          <div className="relative">
            <select
              value={state.ptaApproved || 'Yes / Global Compliant'}
              onChange={(e) => onChange('ptaApproved', e.target.value)}
              className={selectClasses}
            >
              <option value="Yes / Global Compliant">{isPt ? 'Sim / Aprovado Oficial' : 'Yes / Official Compliant'}</option>
              <option value="No / Non-PTA">{isPt ? 'Não / Importação' : 'No / Non-Approved'}</option>
            </select>
            <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Battery Health */}
        <div>
          <label className="block text-xs font-bold text-[#042F2C] mb-1.5">
            {isPt ? 'Saúde da Bateria' : 'Battery Health'}
          </label>
          <div className="relative">
            <select
              value={state.batteryHealth || '85%+ (Good)'}
              onChange={(e) => onChange('batteryHealth', e.target.value)}
              className={selectClasses}
            >
              <option value="90%+ (Like New)">90%+ ({isPt ? 'Excelente' : 'Like New'})</option>
              <option value="85%+ (Good)">85% - 89% ({isPt ? 'Boa' : 'Good'})</option>
              <option value="80% - 84% (Fair)">80% - 84% ({isPt ? 'Normal' : 'Fair'})</option>
              <option value="<80% (Service Recommended)">&lt; 80% ({isPt ? 'Recomenda Substituição' : 'Service Needed'})</option>
            </select>
            <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Face ID / Fingerprint Working */}
        <div>
          <label className="block text-xs font-bold text-[#042F2C] mb-1.5">
            {isPt ? 'Face ID / Biometria a Funcionar' : 'Face ID / Fingerprint Working'}
          </label>
          <div className="relative">
            <select
              value={state.biometricsWorking || 'Yes'}
              onChange={(e) => onChange('biometricsWorking', e.target.value)}
              className={selectClasses}
            >
              <option value="Yes">{isPt ? 'Sim (100% Funcional)' : 'Yes (100% Working)'}</option>
              <option value="No">{isPt ? 'Não (Avariado / Indisponível)' : 'No (Broken / Not Working)'}</option>
            </select>
            <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Screen Condition */}
        <div>
          <label className="block text-xs font-bold text-[#042F2C] mb-1.5">
            {isPt ? 'Estado do Ecrã' : 'Screen Condition'}
          </label>
          <div className="relative">
            <select
              value={state.screenCondition || 'Flawless (No scratches)'}
              onChange={(e) => onChange('screenCondition', e.target.value)}
              className={selectClasses}
            >
              <option value="Flawless (No scratches)">{isPt ? 'Impecável (Sem riscos)' : 'Flawless (No scratches)'}</option>
              <option value="Minor micro-scratches">{isPt ? 'Micro-riscos ligeiros' : 'Minor micro-scratches'}</option>
              <option value="Deep scratches">{isPt ? 'Riscos profundos' : 'Deep scratches'}</option>
              <option value="Cracked / Broken glass">{isPt ? 'Vidro Rachado / Quebrado' : 'Cracked / Broken glass'}</option>
            </select>
            <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Camera Condition */}
        <div>
          <label className="block text-xs font-bold text-[#042F2C] mb-1.5">
            {isPt ? 'Estado das Câmaras' : 'Camera Condition'}
          </label>
          <div className="relative">
            <select
              value={state.cameraCondition || '100% Functional (Lenses clear)'}
              onChange={(e) => onChange('cameraCondition', e.target.value)}
              className={selectClasses}
            >
              <option value="100% Functional (Lenses clear)">{isPt ? '100% Funcional (Lentes límpidas)' : '100% Functional (Clear lenses)'}</option>
              <option value="Camera working but lens scratched">{isPt ? 'Funcional mas lente riscada' : 'Working but lens scratched'}</option>
              <option value="Camera faulty / Black screen">{isPt ? 'Câmara com defeito / não abre' : 'Faulty / Black screen'}</option>
            </select>
            <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Charging Port Working */}
        <div>
          <label className="block text-xs font-bold text-[#042F2C] mb-1.5">
            {isPt ? 'Porta de Carregamento a Funcionar' : 'Charging Port Working'}
          </label>
          <div className="relative">
            <select
              value={state.chargingPortWorking || 'Yes (100% Functional)'}
              onChange={(e) => onChange('chargingPortWorking', e.target.value)}
              className={selectClasses}
            >
              <option value="Yes (100% Functional)">{isPt ? 'Sim (100% Funcional)' : 'Yes (100% Functional)'}</option>
              <option value="Loose / Charges only at angle">{isPt ? 'Com folga / Mau contacto' : 'Loose connection'}</option>
              <option value="Faulty">{isPt ? 'Não carrega' : 'Faulty / Not charging'}</option>
            </select>
            <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Accessories Included */}
        <div>
          <label className="block text-xs font-bold text-[#042F2C] mb-1.5">
            {isPt ? 'Acessórios Incluídos' : 'Accessories Included'}
          </label>
          <div className="relative">
            <select
              value={state.accessoriesIncluded || 'Box + Cable'}
              onChange={(e) => onChange('accessoriesIncluded', e.target.value)}
              className={selectClasses}
            >
              <option value="Full Box + Cable + Charger">{isPt ? 'Caixa Original + Cabo + Carregador' : 'Full Box + Cable + Charger'}</option>
              <option value="Box + Cable">{isPt ? 'Caixa + Cabo USB' : 'Box + Cable'}</option>
              <option value="Cable Only">{isPt ? 'Apenas Cabo USB' : 'Cable Only'}</option>
              <option value="Device Only">{isPt ? 'Apenas Telemóvel' : 'Device Only'}</option>
            </select>
            <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Functional Condition * */}
        {renderConditionSelect()}
      </div>
    );
  }

  // -------------------------------------------------------------
  // 4. TABLET FIELDS
  // -------------------------------------------------------------
  if (category === 'tablet') {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
        {/* Brand * */}
        <div>
          <label className="block text-xs font-bold text-[#042F2C] mb-1.5">
            {isPt ? 'Marca' : 'Brand'} <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <select
              value={state.brand}
              onChange={(e) => onChange('brand', e.target.value)}
              className={selectClasses}
            >
              <option value="Apple">Apple (iPad / iPad Pro / Air / Mini)</option>
              <option value="Samsung">Samsung (Galaxy Tab S / A)</option>
              <option value="Microsoft">Microsoft (Surface Pro / Go)</option>
              <option value="Lenovo">Lenovo (Tab / Yoga)</option>
              <option value="Other">Outro / Other</option>
            </select>
            <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Model * */}
        <div>
          <label className="block text-xs font-bold text-[#042F2C] mb-1.5">
            {isPt ? 'Modelo' : 'Model'} <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={state.model}
            onChange={(e) => onChange('model', e.target.value)}
            placeholder={isPt ? 'ex: iPad Pro 12.9" M2 / Galaxy Tab S9' : 'Enter model (e.g. iPad Pro 11" M2)'}
            className={inputClasses}
          />
        </div>

        {/* Storage * */}
        <div>
          <label className="block text-xs font-bold text-[#042F2C] mb-1.5">
            {isPt ? 'Armazenamento' : 'Storage'} <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <select
              value={state.storage || '256 GB'}
              onChange={(e) => onChange('storage', e.target.value)}
              className={selectClasses}
            >
              <option value="64 GB">64 GB</option>
              <option value="128 GB">128 GB</option>
              <option value="256 GB">256 GB</option>
              <option value="512 GB">512 GB</option>
              <option value="1 TB">1 TB</option>
              <option value="2 TB">2 TB</option>
            </select>
            <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* RAM */}
        <div>
          <label className="block text-xs font-bold text-[#042F2C] mb-1.5">
            RAM
          </label>
          <div className="relative">
            <select
              value={state.ram || '8 GB'}
              onChange={(e) => onChange('ram', e.target.value)}
              className={selectClasses}
            >
              <option value="4 GB">4 GB</option>
              <option value="6 GB">6 GB</option>
              <option value="8 GB">8 GB</option>
              <option value="16 GB">16 GB</option>
              <option value="Standard OEM">Standard OEM</option>
            </select>
            <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Screen Size */}
        <div>
          <label className="block text-xs font-bold text-[#042F2C] mb-1.5">
            {isPt ? 'Tamanho do Ecrã' : 'Screen Size'}
          </label>
          <div className="relative">
            <select
              value={state.screenSize || '11.0"'}
              onChange={(e) => onChange('screenSize', e.target.value)}
              className={selectClasses}
            >
              <option value="8.3&quot; - 8.7&quot;">8.3" - 8.7" (Mini)</option>
              <option value="10.2&quot; - 10.9&quot;">10.2" - 10.9" (Standard)</option>
              <option value="11.0&quot;">11.0" (Pro / Air)</option>
              <option value="12.4&quot; - 13.0&quot;">12.4" - 13.0" (Large Display)</option>
              <option value="14.6&quot;">14.6" (Ultra)</option>
            </select>
            <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Cellular or WiFi */}
        <div>
          <label className="block text-xs font-bold text-[#042F2C] mb-1.5">
            {isPt ? 'Conectividade' : 'Cellular or WiFi'}
          </label>
          <div className="relative">
            <select
              value={state.connectivity || 'Wi-Fi + 5G Cellular'}
              onChange={(e) => onChange('connectivity', e.target.value)}
              className={selectClasses}
            >
              <option value="Wi-Fi Only">{isPt ? 'Apenas Wi-Fi' : 'Wi-Fi Only'}</option>
              <option value="Wi-Fi + Cellular (4G/5G)">{isPt ? 'Wi-Fi + Celular (4G / 5G)' : 'Wi-Fi + 5G Cellular'}</option>
            </select>
            <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Stylus Included */}
        <div>
          <label className="block text-xs font-bold text-[#042F2C] mb-1.5">
            {isPt ? 'Caneta / Stylus Incluída' : 'Stylus Included'}
          </label>
          <div className="relative">
            <select
              value={state.stylusIncluded || 'Yes (Apple Pencil / Stylus)'}
              onChange={(e) => onChange('stylusIncluded', e.target.value)}
              className={selectClasses}
            >
              <option value="Yes (Apple Pencil / Stylus)">{isPt ? 'Sim (Apple Pencil / S-Pen / Surface Pen)' : 'Yes (Original Stylus)'}</option>
              <option value="No Stylus">{isPt ? 'Não' : 'No Stylus'}</option>
            </select>
            <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Battery Health */}
        <div>
          <label className="block text-xs font-bold text-[#042F2C] mb-1.5">
            {isPt ? 'Saúde da Bateria' : 'Battery Health'}
          </label>
          <div className="relative">
            <select
              value={state.batteryHealth || '85%+ (Good)'}
              onChange={(e) => onChange('batteryHealth', e.target.value)}
              className={selectClasses}
            >
              <option value="85%+ (Good)">85%+ ({isPt ? 'Excelente / Boa' : 'Good'})</option>
              <option value="70% - 84% (Fair)">70% - 84% ({isPt ? 'Normal' : 'Fair'})</option>
              <option value="<70% (Service Recommended)">&lt; 70% ({isPt ? 'Degradada' : 'Service Needed'})</option>
            </select>
            <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Operating System */}
        <div>
          <label className="block text-xs font-bold text-[#042F2C] mb-1.5">
            {isPt ? 'Sistema Operativo' : 'Operating System'}
          </label>
          <div className="relative">
            <select
              value={state.operatingSystem || 'iPadOS / Android'}
              onChange={(e) => onChange('operatingSystem', e.target.value)}
              className={selectClasses}
            >
              <option value="iPadOS">iPadOS (Apple)</option>
              <option value="Android">Android</option>
              <option value="Windows 11">Windows 11 (Surface)</option>
            </select>
            <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Functional Condition * */}
        {renderConditionSelect()}
      </div>
    );
  }

  // -------------------------------------------------------------
  // 5. SERVER FIELDS
  // -------------------------------------------------------------
  if (category === 'server') {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
        {/* Brand * */}
        <div>
          <label className="block text-xs font-bold text-[#042F2C] mb-1.5">
            {isPt ? 'Marca' : 'Brand'} <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <select
              value={state.brand}
              onChange={(e) => onChange('brand', e.target.value)}
              className={selectClasses}
            >
              <option value="Dell PowerEdge">Dell PowerEdge</option>
              <option value="HPE ProLiant">HPE ProLiant</option>
              <option value="Lenovo ThinkSystem">Lenovo ThinkSystem</option>
              <option value="Cisco UCS">Cisco UCS</option>
              <option value="Supermicro">Supermicro</option>
              <option value="Fujitsu PRIMERGY">Fujitsu PRIMERGY</option>
              <option value="Other">Outro / Other</option>
            </select>
            <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Model * */}
        <div>
          <label className="block text-xs font-bold text-[#042F2C] mb-1.5">
            {isPt ? 'Modelo' : 'Model'} <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={state.model}
            onChange={(e) => onChange('model', e.target.value)}
            placeholder={isPt ? 'ex: PowerEdge R740 / ProLiant DL380 Gen10' : 'Enter model (e.g. PowerEdge R740)'}
            className={inputClasses}
          />
        </div>

        {/* CPU */}
        <div>
          <label className="block text-xs font-bold text-[#042F2C] mb-1.5">
            CPU
          </label>
          <div className="relative">
            <select
              value={state.cpuType || 'Dual Intel Xeon Gold'}
              onChange={(e) => onChange('cpuType', e.target.value)}
              className={selectClasses}
            >
              <option value="Intel Xeon Silver / Bronze">Intel Xeon Silver / Bronze</option>
              <option value="Intel Xeon Gold / Platinum">Intel Xeon Gold / Platinum</option>
              <option value="Intel Xeon E5 v3/v4">Intel Xeon E5 v3/v4</option>
              <option value="AMD EPYC 7002 / 7003 / 9004">AMD EPYC (7000/9000 Series)</option>
              <option value="Other">Outro / Other</option>
            </select>
            <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Number of Processors */}
        <div>
          <label className="block text-xs font-bold text-[#042F2C] mb-1.5">
            {isPt ? 'Número de Processadores' : 'Number of Processors'}
          </label>
          <div className="relative">
            <select
              value={state.processorCount || '2 Processors'}
              onChange={(e) => onChange('processorCount', e.target.value)}
              className={selectClasses}
            >
              <option value="1 Processor (Single Socket)">1 Processador (Single Socket)</option>
              <option value="2 Processors (Dual Socket)">2 Processadores (Dual Socket)</option>
              <option value="4 Processors (Quad Socket)">4 Processadores (Quad Socket)</option>
            </select>
            <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* RAM */}
        <div>
          <label className="block text-xs font-bold text-[#042F2C] mb-1.5">
            RAM
          </label>
          <div className="relative">
            <select
              value={state.ram || '128 GB ECC Registered'}
              onChange={(e) => onChange('ram', e.target.value)}
              className={selectClasses}
            >
              <option value="32 GB ECC">32 GB ECC</option>
              <option value="64 GB ECC">64 GB ECC</option>
              <option value="128 GB ECC">128 GB ECC</option>
              <option value="256 GB ECC">256 GB ECC</option>
              <option value="512 GB+ ECC">512 GB+ ECC</option>
              <option value="1 TB+ ECC">1 TB+ ECC</option>
            </select>
            <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Storage Capacity */}
        <div>
          <label className="block text-xs font-bold text-[#042F2C] mb-1.5">
            {isPt ? 'Capacidade de Armazenamento' : 'Storage Capacity'}
          </label>
          <input
            type="text"
            value={state.storage || ''}
            onChange={(e) => onChange('storage', e.target.value)}
            placeholder={isPt ? 'ex: 8x 1.92TB SAS SSD / 4x 8TB HDD' : 'e.g. 8x 1.92TB SAS SSD / 4x 8TB HDD'}
            className={inputClasses}
          />
        </div>

        {/* Storage Type */}
        <div>
          <label className="block text-xs font-bold text-[#042F2C] mb-1.5">
            {isPt ? 'Tipo de Armazenamento' : 'Storage Type'}
          </label>
          <div className="relative">
            <select
              value={state.storageType || 'Enterprise SAS / NVMe'}
              onChange={(e) => onChange('storageType', e.target.value)}
              className={selectClasses}
            >
              <option value="Enterprise NVMe SSD">Enterprise NVMe U.2 / U.3</option>
              <option value="Enterprise SAS SSD (12Gbps)">Enterprise SAS SSD (12G)</option>
              <option value="Enterprise SATA SSD">Enterprise SATA SSD</option>
              <option value="Enterprise SAS HDD (10K / 15K RPM)">Enterprise SAS HDD (10K/15K)</option>
              <option value="Enterprise Nearline SATA HDD">Enterprise SATA HDD (7.2K)</option>
              <option value="No Drives (Caddies only)">Sem Discos (Apenas Gavetas)</option>
            </select>
            <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* RAID Configuration */}
        <div>
          <label className="block text-xs font-bold text-[#042F2C] mb-1.5">
            {isPt ? 'Controlador / Configuração RAID' : 'RAID Configuration'}
          </label>
          <div className="relative">
            <select
              value={state.raidConfig || 'Hardware RAID with Cache + Battery'}
              onChange={(e) => onChange('raidConfig', e.target.value)}
              className={selectClasses}
            >
              <option value="Hardware RAID with Cache + Battery">Hardware RAID (com Cache/Bateria)</option>
              <option value="Software / HBA / IT-Mode (ZFS / vSAN)">HBA / IT-Mode (vSAN / ZFS / TrueNAS)</option>
              <option value="Embedded Onboard SATA RAID">Onboard SATA RAID</option>
              <option value="No Controller">Sem Controlador</option>
            </select>
            <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Rack Mount */}
        <div>
          <label className="block text-xs font-bold text-[#042F2C] mb-1.5">
            {isPt ? 'Formato / Rack Mount' : 'Rack Mount'}
          </label>
          <div className="relative">
            <select
              value={state.rackFormFactor || '2U Rackmount'}
              onChange={(e) => onChange('rackFormFactor', e.target.value)}
              className={selectClasses}
            >
              <option value="1U Rackmount">1U Rackmount</option>
              <option value="2U Rackmount">2U Rackmount</option>
              <option value="4U / Tower Server">4U / Tower Server</option>
              <option value="Blade Chassis / Modular">Blade Server / Modular</option>
            </select>
            <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Power Supply Count */}
        <div>
          <label className="block text-xs font-bold text-[#042F2C] mb-1.5">
            {isPt ? 'Fontes de Alimentação (PSU)' : 'Power Supply Count'}
          </label>
          <div className="relative">
            <select
              value={state.powerSupplyCount || '2x Redundant PSU (Hot-plug)'}
              onChange={(e) => onChange('powerSupplyCount', e.target.value)}
              className={selectClasses}
            >
              <option value="2x Redundant PSU (Hot-plug)">2x Redundant Hot-Plug (Dual PSU)</option>
              <option value="1x Single PSU">1x Single PSU</option>
              <option value="4x Redundant PSU (Chassis)">4x Redundant PSU</option>
            </select>
            <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Operating System */}
        <div>
          <label className="block text-xs font-bold text-[#042F2C] mb-1.5">
            {isPt ? 'Sistema Operativo / Hypervisor' : 'Operating System'}
          </label>
          <div className="relative">
            <select
              value={state.operatingSystem || 'VMware ESXi / Windows Server'}
              onChange={(e) => onChange('operatingSystem', e.target.value)}
              className={selectClasses}
            >
              <option value="VMware ESXi">VMware ESXi</option>
              <option value="Windows Server 2022 / 2019">Windows Server</option>
              <option value="Proxmox VE / Linux / Ubuntu">Proxmox VE / Linux</option>
              <option value="Bare Metal (Sem SO / Formatado)">Bare Metal (Sem SO / Formatado)</option>
            </select>
            <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Functional Condition * */}
        {renderConditionSelect()}
      </div>
    );
  }

  // -------------------------------------------------------------
  // 6. NETWORK EQUIPMENT FIELDS
  // -------------------------------------------------------------
  if (category === 'network') {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
        {/* Brand * */}
        <div>
          <label className="block text-xs font-bold text-[#042F2C] mb-1.5">
            {isPt ? 'Marca' : 'Brand'} <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <select
              value={state.brand}
              onChange={(e) => onChange('brand', e.target.value)}
              className={selectClasses}
            >
              <option value="Cisco">Cisco (Catalyst / Nexus)</option>
              <option value="Ubiquiti / UniFi">Ubiquiti / UniFi</option>
              <option value="Fortinet">Fortinet (FortiGate)</option>
              <option value="Aruba / HPE">Aruba / HPE Networking</option>
              <option value="Juniper">Juniper Networks</option>
              <option value="MikroTik">MikroTik</option>
              <option value="Palo Alto">Palo Alto Networks</option>
              <option value="SonicWall">SonicWall</option>
              <option value="Other">Outro / Other</option>
            </select>
            <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Model * */}
        <div>
          <label className="block text-xs font-bold text-[#042F2C] mb-1.5">
            {isPt ? 'Modelo' : 'Model'} <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={state.model}
            onChange={(e) => onChange('model', e.target.value)}
            placeholder={isPt ? 'ex: Catalyst 9200-48P / USW-Pro-48-PoE' : 'Enter model (e.g. Catalyst 9200-48P)'}
            className={inputClasses}
          />
        </div>

        {/* Equipment Type */}
        <div>
          <label className="block text-xs font-bold text-[#042F2C] mb-1.5">
            {isPt ? 'Tipo de Equipamento de Rede' : 'Equipment Type'}
          </label>
          <div className="relative">
            <select
              value={state.networkEquipType || 'Managed Switch (Layer 2 / 3)'}
              onChange={(e) => onChange('networkEquipType', e.target.value)}
              className={selectClasses}
            >
              <option value="Managed Switch (Layer 2 / 3)">Switch Gerido (Layer 2 / 3)</option>
              <option value="Core / Datacenter Switch">Core / Datacenter 10G/40G Switch</option>
              <option value="Firewall / Security Appliance">Firewall UTM / Next-Gen Gateway</option>
              <option value="Enterprise Router">Router Empresarial / WAN</option>
              <option value="Enterprise Access Point (AP)">Access Point Wi-Fi Empresarial</option>
              <option value="Patch Panel / Rack Accessory">Accessório / Outro</option>
            </select>
            <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Number of Ports */}
        <div>
          <label className="block text-xs font-bold text-[#042F2C] mb-1.5">
            {isPt ? 'Número de Portas' : 'Number of Ports'}
          </label>
          <div className="relative">
            <select
              value={state.portCount || '48 Ports'}
              onChange={(e) => onChange('portCount', e.target.value)}
              className={selectClasses}
            >
              <option value="8 Ports">8 Portas</option>
              <option value="16 / 24 Ports">16 / 24 Portas</option>
              <option value="48 Ports">48 Portas</option>
              <option value="48 Ports + 4x 10G SFP+">48 Portas + 4x SFP+ 10G</option>
              <option value="Modular Chassis">Chassis Modular</option>
              <option value="N/A (Access Point)">N/A (Access Point / Gateway)</option>
            </select>
            <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Managed / Unmanaged */}
        <div>
          <label className="block text-xs font-bold text-[#042F2C] mb-1.5">
            {isPt ? 'Gestão de Rede' : 'Managed / Unmanaged'}
          </label>
          <div className="relative">
            <select
              value={state.managedType || 'Fully Managed (Layer 3)'}
              onChange={(e) => onChange('managedType', e.target.value)}
              className={selectClasses}
            >
              <option value="Fully Managed (Layer 3)">Fully Managed (Layer 3 / CLI / SNMP)</option>
              <option value="Smart Managed (Layer 2 / Web)">Smart Managed (Web GUI)</option>
              <option value="Cloud Managed (UniFi / Meraki)">Cloud Managed (UniFi / Meraki / Nebula)</option>
              <option value="Unmanaged">Não Gerido (Plug & Play)</option>
            </select>
            <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* PoE Support */}
        <div>
          <label className="block text-xs font-bold text-[#042F2C] mb-1.5">
            {isPt ? 'Suporte PoE' : 'PoE Support'}
          </label>
          <div className="relative">
            <select
              value={state.poeSupport || 'PoE+ (802.3at)'}
              onChange={(e) => onChange('poeSupport', e.target.value)}
              className={selectClasses}
            >
              <option value="PoE+ (802.3at)">PoE+ (802.3at / 30W por porta)</option>
              <option value="PoE++ (802.3bt High Power)">PoE++ (802.3bt / 60W-90W)</option>
              <option value="Standard PoE (802.3af)">Standard PoE (802.3af / 15W)</option>
              <option value="Non-PoE">{isPt ? 'Sem PoE (Apenas Dados)' : 'Non-PoE'}</option>
            </select>
            <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Wireless Support */}
        <div>
          <label className="block text-xs font-bold text-[#042F2C] mb-1.5">
            {isPt ? 'Padrão Wi-Fi (se aplicável)' : 'Wireless Support'}
          </label>
          <div className="relative">
            <select
              value={state.wirelessSupport || 'N/A (Switch / Wired)'}
              onChange={(e) => onChange('wirelessSupport', e.target.value)}
              className={selectClasses}
            >
              <option value="N/A (Switch / Wired)">N/A (Cablado / Switch / Router)</option>
              <option value="Wi-Fi 7 (802.11be)">Wi-Fi 7 (802.11be)</option>
              <option value="Wi-Fi 6E / Wi-Fi 6 (802.11ax)">Wi-Fi 6E / Wi-Fi 6 (802.11ax)</option>
              <option value="Wi-Fi 5 (802.11ac Wave 2)">Wi-Fi 5 (802.11ac)</option>
            </select>
            <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Firmware Version */}
        <div>
          <label className="block text-xs font-bold text-[#042F2C] mb-1.5">
            {isPt ? 'Versão de Firmware / Licença' : 'Firmware Version'}
          </label>
          <input
            type="text"
            value={state.firmwareVersion || ''}
            onChange={(e) => onChange('firmwareVersion', e.target.value)}
            placeholder={isPt ? 'ex: Cisco IOS-XE 17.x / Factory Reset' : 'e.g. Cisco IOS-XE / Factory Default'}
            className={inputClasses}
          />
        </div>

        {/* Power Adapter Included */}
        <div>
          <label className="block text-xs font-bold text-[#042F2C] mb-1.5">
            {isPt ? 'Adaptador / Cabo de Alimentação Incluído' : 'Power Adapter Included'}
          </label>
          <div className="relative">
            <select
              value={state.powerCableIncluded || 'Yes (Dual Internal / Adapter)'}
              onChange={(e) => onChange('powerCableIncluded', e.target.value)}
              className={selectClasses}
            >
              <option value="Yes (Dual Internal / Adapter)">{isPt ? 'Sim (Fonte Interna / Cabo AC / PoE Injector)' : 'Yes (Internal / AC Cable)'}</option>
              <option value="No">{isPt ? 'Não' : 'No'}</option>
            </select>
            <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Functional Condition * */}
        {renderConditionSelect()}
      </div>
    );
  }

  // -------------------------------------------------------------
  // 7. STORAGE DEVICE FIELDS
  // -------------------------------------------------------------
  if (category === 'storage') {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
        {/* Brand * */}
        <div>
          <label className="block text-xs font-bold text-[#042F2C] mb-1.5">
            {isPt ? 'Marca' : 'Brand'} <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <select
              value={state.brand}
              onChange={(e) => onChange('brand', e.target.value)}
              className={selectClasses}
            >
              <option value="Synology">Synology (DiskStation / RackStation)</option>
              <option value="QNAP">QNAP</option>
              <option value="Dell EMC / NetApp">Dell EMC / NetApp / PowerVault</option>
              <option value="Samsung">Samsung (Enterprise SSD / NVMe)</option>
              <option value="Seagate">Seagate (Exos / IronWolf)</option>
              <option value="Western Digital">Western Digital (Ultrastar / Red)</option>
              <option value="Crucial / Micron">Micron / Crucial</option>
              <option value="Other">Outro / Other</option>
            </select>
            <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Model * */}
        <div>
          <label className="block text-xs font-bold text-[#042F2C] mb-1.5">
            {isPt ? 'Modelo' : 'Model'} <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={state.model}
            onChange={(e) => onChange('model', e.target.value)}
            placeholder={isPt ? 'ex: DS920+ / PM9A3 / Exos X18' : 'Enter model (e.g. DS920+ / PM9A3)'}
            className={inputClasses}
          />
        </div>

        {/* Device Type */}
        <div>
          <label className="block text-xs font-bold text-[#042F2C] mb-1.5">
            {isPt ? 'Tipo de Dispositivo' : 'Device Type'}
          </label>
          <div className="relative">
            <select
              value={state.storageDeviceType || 'NAS / SAN Storage Array'}
              onChange={(e) => onChange('storageDeviceType', e.target.value)}
              className={selectClasses}
            >
              <option value="NAS / SAN Storage Array">NAS / SAN Storage Array (Bays)</option>
              <option value="NVMe Enterprise SSD (U.2 / U.3 / M.2)">NVMe SSD (U.2 / U.3 / M.2 PCIe)</option>
              <option value="Enterprise SAS SSD">Enterprise SAS SSD (2.5")</option>
              <option value="Enterprise SAS / SATA HDD">Enterprise HDD (3.5" High Capacity)</option>
              <option value="External Direct Attached (DAS / Thunderbolt)">DAS / Thunderbolt RAID Enclosure</option>
            </select>
            <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Capacity */}
        <div>
          <label className="block text-xs font-bold text-[#042F2C] mb-1.5">
            {isPt ? 'Capacidade' : 'Capacity'}
          </label>
          <input
            type="text"
            value={state.storage || ''}
            onChange={(e) => onChange('storage', e.target.value)}
            placeholder={isPt ? 'ex: 16 TB (4x 4TB) / 3.84 TB NVMe' : 'e.g. 16 TB (4x 4TB) / 3.84 TB'}
            className={inputClasses}
          />
        </div>

        {/* Interface */}
        <div>
          <label className="block text-xs font-bold text-[#042F2C] mb-1.5">
            {isPt ? 'Interface de Conexão' : 'Interface'}
          </label>
          <div className="relative">
            <select
              value={state.storageInterface || '10GbE SFP+ / RJ45'}
              onChange={(e) => onChange('storageInterface', e.target.value)}
              className={selectClasses}
            >
              <option value="10GbE SFP+ / RJ45">10GbE / 25GbE SFP+ / RJ45</option>
              <option value="PCIe Gen 4.0 / 5.0 NVMe">PCIe 4.0 / 5.0 NVMe</option>
              <option value="SAS 12Gbps">SAS 12Gbps</option>
              <option value="SATA 6Gbps">SATA 6Gbps</option>
              <option value="Fibre Channel (FC 16G/32G)">Fibre Channel (16G / 32G)</option>
              <option value="Thunderbolt 3 / 4 / USB-C">Thunderbolt 3 / 4 / USB-C</option>
            </select>
            <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Read Speed */}
        <div>
          <label className="block text-xs font-bold text-[#042F2C] mb-1.5">
            {isPt ? 'Velocidade de Leitura' : 'Read Speed'}
          </label>
          <input
            type="text"
            value={state.readSpeed || ''}
            onChange={(e) => onChange('readSpeed', e.target.value)}
            placeholder={isPt ? 'ex: 3,500 MB/s / 7,000 MB/s' : 'e.g. 3,500 MB/s'}
            className={inputClasses}
          />
        </div>

        {/* Write Speed */}
        <div>
          <label className="block text-xs font-bold text-[#042F2C] mb-1.5">
            {isPt ? 'Velocidade de Escrita' : 'Write Speed'}
          </label>
          <input
            type="text"
            value={state.writeSpeed || ''}
            onChange={(e) => onChange('writeSpeed', e.target.value)}
            placeholder={isPt ? 'ex: 3,000 MB/s / 5,000 MB/s' : 'e.g. 3,000 MB/s'}
            className={inputClasses}
          />
        </div>

        {/* Health Status */}
        <div>
          <label className="block text-xs font-bold text-[#042F2C] mb-1.5">
            {isPt ? 'Estado de Saúde SMART' : 'Health Status'}
          </label>
          <div className="relative">
            <select
              value={state.healthStatus || '100% Health (0 Bad Sectors)'}
              onChange={(e) => onChange('healthStatus', e.target.value)}
              className={selectClasses}
            >
              <option value="100% Health (0 Bad Sectors)">100% SMART Health (0 Bad Sectors / 0 Reallocated)</option>
              <option value="90% - 99% Health (Normal Wear)">90% - 99% Health (Desgaste Normal de TBW)</option>
              <option value="Warning / Low TBW Remaining">Aviso SMART / Desgaste Elevado</option>
              <option value="Untested">{isPt ? 'Não testado' : 'Untested'}</option>
            </select>
            <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Encryption */}
        <div>
          <label className="block text-xs font-bold text-[#042F2C] mb-1.5">
            {isPt ? 'Encriptação / SED' : 'Encryption'}
          </label>
          <div className="relative">
            <select
              value={state.encryption || 'Hardware AES-256 NI'}
              onChange={(e) => onChange('encryption', e.target.value)}
              className={selectClasses}
            >
              <option value="Hardware AES-256 NI">Hardware SED AES-256 (Self-Encrypting)</option>
              <option value="TCG Opal Enterprise">TCG Opal Enterprise</option>
              <option value="None / Standard">Standard (Sem Encriptação HW)</option>
            </select>
            <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Power Cable Included */}
        <div>
          <label className="block text-xs font-bold text-[#042F2C] mb-1.5">
            {isPt ? 'Cabo de Alimentação Incluído' : 'Power Cable Included'}
          </label>
          <div className="relative">
            <select
              value={state.powerCableIncluded || 'Yes'}
              onChange={(e) => onChange('powerCableIncluded', e.target.value)}
              className={selectClasses}
            >
              <option value="Yes">{isPt ? 'Sim' : 'Yes'}</option>
              <option value="No">{isPt ? 'Não' : 'No'}</option>
            </select>
            <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Functional Condition * */}
        {renderConditionSelect()}
      </div>
    );
  }

  // -------------------------------------------------------------
  // 8. OTHER / GENERIC IT
  // -------------------------------------------------------------
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
      {/* Brand * */}
      <div>
        <label className="block text-xs font-bold text-[#042F2C] mb-1.5">
          {isPt ? 'Marca' : 'Brand'} <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          value={state.brand}
          onChange={(e) => onChange('brand', e.target.value)}
          placeholder={isPt ? 'Marca do equipamento' : 'Equipment Brand'}
          className={inputClasses}
        />
      </div>

      {/* Model * */}
      <div>
        <label className="block text-xs font-bold text-[#042F2C] mb-1.5">
          {isPt ? 'Modelo' : 'Model'} <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          value={state.model}
          onChange={(e) => onChange('model', e.target.value)}
          placeholder={isPt ? 'Modelo ou part number' : 'Model or part number'}
          className={inputClasses}
        />
      </div>

      {/* Functional Condition * */}
      {renderConditionSelect()}
    </div>
  );
};
