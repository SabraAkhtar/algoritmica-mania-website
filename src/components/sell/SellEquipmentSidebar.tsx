import React, { useRef, useState } from 'react';
import { Language } from '../../types';
import { 
  FileText, 
  MessageCircle, 
  Phone, 
  Mail, 
  Upload, 
  CheckCircle2, 
  X,
  FileSpreadsheet,
  ArrowRight
} from 'lucide-react';
import { companyData } from '../../data/company';
import { ActionSecondaryButton } from '../ui/AnimatedButtons';

interface SellEquipmentSidebarProps {
  lang: Language;
  selectedCategoryName: string;
  selectedBrand?: string;
  selectedModel?: string;
  selectedQuantity?: number;
  selectedCondition?: string;
  onGetValuationClick?: () => void;
  onBulkFileUpload?: (file: File) => void;
}

export const SellEquipmentSidebar: React.FC<SellEquipmentSidebarProps> = ({
  lang,
  selectedCategoryName,
  selectedBrand,
  selectedModel,
  selectedQuantity = 1,
  selectedCondition,
  onGetValuationClick,
  onBulkFileUpload,
}) => {
  const isPt = lang === 'pt';
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploadedBulkFile, setUploadedBulkFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setUploadedBulkFile(file);
      if (onBulkFileUpload) onBulkFileUpload(file);
    }
  };

  const hasItemDetails = Boolean(selectedBrand || selectedModel);

  return (
    <div className="space-y-6">
      
      {/* 🌟 1. YOUR VALUATION SUMMARY CARD */}
      <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-7 shadow-lg shadow-teal-950/5 relative overflow-hidden">
        <h3 className="text-base sm:text-lg font-black text-[#042F2C] mb-4">
          {isPt ? 'Resumo da Sua Avaliação' : 'Your Valuation Summary'}
        </h3>

        {/* Big Green Document Icon in Circle */}
        <div className="flex justify-center mb-5">
          <div className="w-16 h-16 rounded-full bg-[#CCFBF1] flex items-center justify-center text-[#0D7E73] shadow-inner">
            <FileText className="w-8 h-8 stroke-[1.8]" />
          </div>
        </div>

        {/* Informative Text */}
        <p className="text-xs sm:text-[13px] text-[#475569] text-center leading-relaxed mb-6 font-medium">
          {isPt
            ? 'Assim que submeter os detalhes, a nossa equipa irá analisar e enviar-lhe a melhor oferta possível.'
            : 'Once you submit the details, our team will review and send you the best possible offer.'}
        </p>

        {/* Live specs breakdown or skeleton placeholder */}
        {hasItemDetails ? (
          <div className="bg-[#F8FAFC] rounded-2xl p-4 border border-slate-100 mb-6 space-y-2 text-xs">
            <div className="flex justify-between items-center text-[#64748B]">
              <span>{isPt ? 'Equipamento:' : 'Equipment:'}</span>
              <span className="font-bold text-[#042F2C]">{selectedCategoryName}</span>
            </div>
            {selectedBrand && (
              <div className="flex justify-between items-center text-[#64748B]">
                <span>{isPt ? 'Marca / Modelo:' : 'Brand / Model:'}</span>
                <span className="font-bold text-[#042F2C] truncate max-w-[150px]">
                  {selectedBrand} {selectedModel}
                </span>
              </div>
            )}
            <div className="flex justify-between items-center text-[#64748B]">
              <span>{isPt ? 'Quantidade:' : 'Quantity:'}</span>
              <span className="font-bold text-[#0D7E73]">{selectedQuantity} un.</span>
            </div>
            {selectedCondition && (
              <div className="flex justify-between items-center text-[#64748B]">
                <span>{isPt ? 'Condição:' : 'Condition:'}</span>
                <span className="font-bold text-[#042F2C]">{selectedCondition}</span>
              </div>
            )}
          </div>
        ) : (
          <div className="space-y-2 mb-6 opacity-60">
            <div className="h-2.5 bg-slate-200 rounded-full w-full" />
            <div className="h-2.5 bg-slate-200 rounded-full w-4/5 mx-auto" />
            <div className="h-2.5 bg-slate-200 rounded-full w-3/5 mx-auto" />
          </div>
        )}

        {/* Get Valuation CTA Button */}
        <ActionSecondaryButton
          type="button"
          onClick={onGetValuationClick}
          size="md"
          className="w-full bg-[#F0FDFA] hover:bg-[#CCFBF1] border border-[#CCFBF1]"
        >
          {isPt ? 'Obter Avaliação' : 'Get Valuation'}
        </ActionSecondaryButton>
      </div>

      {/* 🌟 2. NEED HELP? CARD */}
      <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-7 shadow-lg shadow-teal-950/5">
        <h3 className="text-base sm:text-lg font-black text-[#042F2C] mb-1">
          {isPt ? 'Precisa de Ajuda?' : 'Need Help?'}
        </h3>
        <p className="text-xs sm:text-[13px] text-[#64748B] mb-5 font-medium">
          {isPt ? 'A nossa equipa está aqui para o apoiar.' : 'Our team is here to assist you.'}
        </p>

        <div className="space-y-3">
          {/* Chat on WhatsApp */}
          <a
            href="https://wa.me/351910000000?text=Ol%C3%A1,%20gostaria%20de%20pedir%20uma%20avalia%C3%A7%C3%A3o%20de%20equipamentos%20inform%C3%A1ticos."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3 rounded-2xl bg-[#F0FDFA] hover:bg-[#CCFBF1] border border-[#CCFBF1] transition-colors group cursor-pointer"
          >
            <div className="w-9 h-9 rounded-xl bg-white text-[#10B981] flex items-center justify-center shadow-2xs shrink-0">
              <MessageCircle className="w-5 h-5 fill-[#10B981] text-white" />
            </div>
            <div>
              <span className="text-xs sm:text-sm font-bold text-[#042F2C] group-hover:text-[#0D7E73] block">
                {isPt ? 'Conversar no WhatsApp' : 'Chat on WhatsApp'}
              </span>
              <span className="text-[10px] text-[#0D7E73] font-semibold">
                {isPt ? 'Resposta imediata' : 'Instant live support'}
              </span>
            </div>
          </a>

          {/* Call Us */}
          <a
            href={`tel:${companyData.phone.replace(/\s+/g, '')}`}
            className="flex items-center gap-3 p-3 rounded-2xl hover:bg-slate-50 border border-slate-100 transition-colors group cursor-pointer"
          >
            <div className="w-9 h-9 rounded-xl bg-[#F8FAFC] text-[#0D7E73] flex items-center justify-center border border-slate-200 shrink-0">
              <Phone className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-bold text-[#042F2C] block">
                {isPt ? 'Ligue-nos' : 'Call Us'}
              </span>
              <span className="text-xs text-[#64748B] font-mono">
                {companyData.phone}
              </span>
            </div>
          </a>

          {/* Email Us */}
          <a
            href={`mailto:${companyData.email}`}
            className="flex items-center gap-3 p-3 rounded-2xl hover:bg-slate-50 border border-slate-100 transition-colors group cursor-pointer"
          >
            <div className="w-9 h-9 rounded-xl bg-[#F8FAFC] text-[#0D7E73] flex items-center justify-center border border-slate-200 shrink-0">
              <Mail className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-bold text-[#042F2C] block">
                {isPt ? 'Envie-nos Email' : 'Email Us'}
              </span>
              <span className="text-xs text-[#64748B]">
                {companyData.email}
              </span>
            </div>
          </a>
        </div>
      </div>

      {/* 🌟 3. BULK INVENTORY? UPLOAD CARD */}
      <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-7 shadow-lg shadow-teal-950/5">
        <h3 className="text-base sm:text-lg font-black text-[#042F2C] mb-1">
          {isPt ? 'Inventário em Lote?' : 'Bulk Inventory?'}
        </h3>
        <p className="text-xs sm:text-[13px] text-[#64748B] mb-5 font-medium leading-relaxed">
          {isPt
            ? 'Carregue a sua lista de inventário (Excel/CSV) para uma avaliação mais rápida.'
            : 'Upload your inventory list (Excel/CSV) for faster valuation.'}
        </p>

        <input
          ref={fileInputRef}
          type="file"
          accept=".xlsx,.xls,.csv"
          onChange={handleFileChange}
          className="hidden"
        />

        {uploadedBulkFile ? (
          <div className="p-3.5 rounded-2xl bg-[#F0FDFA] border border-[#CCFBF1] flex items-center justify-between gap-2 mb-3">
            <div className="flex items-center gap-2.5 min-w-0">
              <FileSpreadsheet className="w-5 h-5 text-[#0D7E73] shrink-0" />
              <div className="min-w-0">
                <span className="text-xs font-bold text-[#042F2C] truncate block">
                  {uploadedBulkFile.name}
                </span>
                <span className="text-[10px] text-[#0D7E73] font-medium">
                  {(uploadedBulkFile.size / 1024).toFixed(1)} KB • Pronto para avaliação
                </span>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setUploadedBulkFile(null)}
              className="p-1 rounded-lg hover:bg-slate-200/60 text-slate-500 hover:text-red-500 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="w-full py-3.5 px-4 rounded-2xl border-2 border-dashed border-[#0D7E73]/40 hover:border-[#0D7E73] bg-[#F0FDFA]/60 hover:bg-[#F0FDFA] text-[#0D7E73] text-sm font-bold transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-2xs group"
          >
            <Upload className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
            <span>{isPt ? 'Carregar Ficheiro' : 'Upload File'}</span>
          </button>
        )}
      </div>

    </div>
  );
};
