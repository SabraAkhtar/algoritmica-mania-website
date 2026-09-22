import React, { useState } from 'react';
import { Product, Language } from '../../types';
import { translations } from '../../data/translations';
import { companyData } from '../../data/company';
import { ActionPrimaryButton } from './AnimatedButtons';
import { 
  CheckCircle2, 
  AlertCircle, 
  Phone, 
  Mail, 
  MapPin, 
  ArrowRight,
  Sparkles,
  ChevronDown
} from 'lucide-react';
import { GeometricMotif } from './GeometricMotif';

interface QuoteFormProps {
  lang: Language;
  preselectedProduct?: Product;
  onSuccess?: () => void;
  className?: string;
}

export const QuoteForm: React.FC<QuoteFormProps> = ({
  lang,
  preselectedProduct,
  onSuccess,
  className = ''
}) => {
  const isPt = lang === 'pt';
  const t = translations[lang].quoteForm;

  const [formData, setFormData] = useState<{
    name: string;
    email: string;
    interest: string;
    message: string;
  }>({
    name: '',
    email: '',
    interest: preselectedProduct ? `${preselectedProduct.brand} - ${preselectedProduct.name}` : (isPt ? 'Portáteis & Workstations Empresariais' : 'Enterprise Laptops & Workstations'),
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage(
        isPt 
          ? 'Por favor preencha todos os campos obrigatórios (*).' 
          : 'Please complete all required fields (*).'
      );
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      if (onSuccess) {
        onSuccess();
      }
    }, 700);
  };

  if (isSubmitted) {
    return (
      <div className={`bg-white rounded-3xl border border-[#CCFBF1] p-8 sm:p-12 text-center shadow-lg max-w-2xl mx-auto ${className}`}>
        <div className="w-16 h-16 rounded-full bg-[#F0FDFA] text-[#0D7E73] flex items-center justify-center mx-auto mb-5 border border-[#CCFBF1]">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-black uppercase tracking-wide text-[#042F2C] mb-3">
          {t.successTitle}
        </h3>
        <p className="text-sm sm:text-base text-[#64748B] max-w-md mx-auto leading-relaxed mb-6">
          {t.successMsg}
        </p>

        <div className="p-4 bg-[#F0FDFA] rounded-xl border border-[#CCFBF1] max-w-sm mx-auto text-left text-xs space-y-2 mb-6">
          <div className="flex justify-between">
            <span className="text-[#64748B]">{isPt ? 'Nome:' : 'Name:'}</span>
            <span className="font-semibold text-[#042F2C]">{formData.name}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#64748B]">{isPt ? 'Email:' : 'Email:'}</span>
            <span className="font-semibold text-[#042F2C]">{formData.email}</span>
          </div>
          {formData.interest && (
            <div className="flex justify-between">
              <span className="text-[#64748B]">{isPt ? 'Interesse:' : 'Interest:'}</span>
              <span className="font-semibold text-[#042F2C] line-clamp-1">{formData.interest}</span>
            </div>
          )}
        </div>

        <button
          type="button"
          onClick={() => {
            setIsSubmitted(false);
            setFormData({
              name: '',
              email: '',
              interest: isPt ? 'Portáteis & Workstations Empresariais' : 'Enterprise Laptops & Workstations',
              message: ''
            });
          }}
          className="inline-flex items-center justify-center px-6 py-2.5 rounded-xl text-xs font-bold text-[#042F2C] bg-[#F0FDFA] hover:bg-[#CCFBF1] border border-[#CCFBF1] transition-colors cursor-pointer"
        >
          {isPt ? 'Submeter Nova Mensagem' : 'Submit Another Request'}
        </button>
      </div>
    );
  }

  return (
    <div className={`w-full ${className}`}>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
        
        {/* ========================================================
            LEFT COLUMN: "WE'RE HERE TO HELP YOU" + CONTACT DETAILS
           ======================================================== */}
        <div className="lg:col-span-5 flex flex-col items-start text-left">
          
          {/* Eyebrow */}
          <div className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#0D7E73] mb-2.5">
            {isPt ? 'ESTAMOS AQUI PARA AJUDAR' : "WE'RE HERE TO HELP YOU"}
          </div>

          {/* Large Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#042F2C] mb-4 leading-[1.15]">
            {isPt ? 'Diga-nos o que a sua Empresa Precisa' : 'Discuss Your IT Solution Needs'}
          </h2>

          {/* Subtitle description */}
          <p className="text-sm sm:text-base text-[#64748B] leading-relaxed mb-8 max-w-md font-medium">
            {isPt
              ? 'Procura portáteis de topo empresarial, servidores dedicados, equipamentos de rede ou assistência técnica? A nossa equipa na Trofa responde no próprio dia.'
              : 'Are you looking for enterprise-grade hardware, custom fleet quotes, or technical support? Reach out to our technical team for a direct response.'}
          </p>

          {/* 3 Contact Info Blocks with Rounded Square Teal Icons */}
          <div className="space-y-5 w-full max-w-md">
            
            {/* Block 1: Email */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#0D7E73] text-white flex items-center justify-center shrink-0 shadow-sm">
                <Mail className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-[#64748B] font-semibold">
                  {isPt ? 'E-mail' : 'E-mail'}
                </span>
                <a 
                  href={`mailto:${companyData.email}`} 
                  className="text-sm sm:text-base font-bold text-[#042F2C] hover:text-[#0D7E73] transition-colors"
                >
                  {companyData.email}
                </a>
              </div>
            </div>

            {/* Block 2: Phone */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#0D7E73] text-white flex items-center justify-center shrink-0 shadow-sm">
                <Phone className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-[#64748B] font-semibold">
                  {isPt ? 'Telefone / WhatsApp' : 'Phone number'}
                </span>
                <a 
                  href={`tel:${companyData.phone.replace(/\s+/g, '')}`} 
                  className="text-sm sm:text-base font-bold text-[#042F2C] hover:text-[#0D7E73] transition-colors"
                >
                  {companyData.phone}
                </a>
              </div>
            </div>

            {/* Block 3: Location */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#0D7E73] text-white flex items-center justify-center shrink-0 shadow-sm">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-[#64748B] font-semibold">
                  {isPt ? 'Hub Técnico & Instalações' : 'Technical Hub'}
                </span>
                <span className="text-sm sm:text-base font-bold text-[#042F2C]">
                  {companyData.location}
                </span>
              </div>
            </div>

          </div>

        </div>

        {/* ========================================================
            RIGHT COLUMN: FLOATING CONTACT FORM CARD
           ======================================================== */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-slate-200/90 shadow-[0_16px_45px_-10px_rgba(4,47,44,0.09)] relative">
          {/* Subtle Geometric Motif in top-right */}
          <div className="absolute top-4 right-5 hidden sm:block pointer-events-none">
            <GeometricMotif variant="squares-and-dots" size="sm" />
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
            
            {preselectedProduct && (
              <div className="p-3.5 rounded-2xl bg-[#F0FDFA] border border-[#CCFBF1] flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <Sparkles className="w-4 h-4 text-[#0D7E73]" />
                  <div>
                    <span className="text-[10px] font-bold text-[#0D7E73] uppercase tracking-wider">
                      {isPt ? 'Equipamento Selecionado' : 'Hardware Selected'}
                    </span>
                    <div className="text-xs font-bold text-[#042F2C]">
                      {preselectedProduct.name}
                    </div>
                  </div>
                </div>
                {preselectedProduct.price && (
                  <span className="text-xs font-black text-[#0D7E73]">
                    €{preselectedProduct.price.toLocaleString()}
                  </span>
                )}
              </div>
            )}

            {errorMessage && (
              <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* Field 1: Name */}
            <div>
              <label className="block text-xs sm:text-[13px] font-bold text-[#042F2C] mb-1.5">
                {isPt ? 'Nome' : 'Name'}
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder={isPt ? 'O seu nome...' : 'Jane Smith'}
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-[#042F2C] placeholder:text-slate-400 focus:bg-white focus:outline-hidden focus:border-[#0D7E73] focus:ring-2 focus:ring-[#CCFBF1] transition-all"
              />
            </div>

            {/* Field 2: Email */}
            <div>
              <label className="block text-xs sm:text-[13px] font-bold text-[#042F2C] mb-1.5">
                {isPt ? 'Email' : 'Email'}
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder={isPt ? 'empresa@exemplo.com' : 'jane@company.com'}
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-[#042F2C] placeholder:text-slate-400 focus:bg-white focus:outline-hidden focus:border-[#0D7E73] focus:ring-2 focus:ring-[#CCFBF1] transition-all"
              />
            </div>

            {/* Field 3: Interest Dropdown */}
            <div>
              <label className="block text-xs sm:text-[13px] font-bold text-[#042F2C] mb-1.5">
                {isPt ? 'O que procura?' : 'What are you looking for?'}
              </label>
              <div className="relative">
                <select
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  className="w-full appearance-none px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-[#042F2C] focus:bg-white focus:outline-hidden focus:border-[#0D7E73] focus:ring-2 focus:ring-[#CCFBF1] transition-all pr-10 cursor-pointer"
                >
                  <option value={isPt ? 'Portáteis & Workstations Empresariais' : 'Enterprise Laptops & Workstations'}>
                    {isPt ? 'Portáteis & Workstations Empresariais' : 'Enterprise Laptops & Workstations'}
                  </option>
                  <option value={isPt ? 'Servidores & Datacenter' : 'Servers & Datacenter'}>
                    {isPt ? 'Servidores & Datacenter' : 'Servers & Datacenter'}
                  </option>
                  <option value={isPt ? 'Equipamento de Rede & Wi-Fi' : 'Networking & Wi-Fi'}>
                    {isPt ? 'Equipamento de Rede, Wi-Fi & Firewalls' : 'Networking, Wi-Fi & Firewalls'}
                  </option>
                  <option value={isPt ? 'Hardware Apple Recondicionado' : 'Refurbished Apple Hardware'}>
                    {isPt ? 'Hardware Apple Recondicionado' : 'Refurbished Apple Hardware'}
                  </option>
                  <option value={isPt ? 'Retoma & ITAD (Vender Equipamento)' : 'IT Asset Recovery & Buyback'}>
                    {isPt ? 'Retoma & ITAD (Vender Equipamento Usado)' : 'IT Asset Recovery & Buyback'}
                  </option>
                  <option value={isPt ? 'Apoio Técnico & Manutenção' : 'Technical Support & Maintenance'}>
                    {isPt ? 'Apoio Técnico, Manutenção & Redes' : 'Technical IT Support & Maintenance'}
                  </option>
                  <option value={isPt ? 'Outra Consulta de TI' : 'Other IT Consultation'}>
                    {isPt ? 'Outra Consulta de TI / Cotação Personalizada' : 'Other IT Consultation'}
                  </option>
                </select>
                <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* Field 4: Message */}
            <div>
              <label className="block text-xs sm:text-[13px] font-bold text-[#042F2C] mb-1.5">
                {isPt ? 'Mensagem' : 'Message'}
              </label>
              <textarea
                name="message"
                required
                rows={3}
                value={formData.message}
                onChange={handleChange}
                placeholder={isPt ? 'Descreva os equipamentos pretendidos ou a sua dúvida técnica...' : 'Type your message...'}
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-[#042F2C] placeholder:text-slate-400 focus:bg-white focus:outline-hidden focus:border-[#0D7E73] focus:ring-2 focus:ring-[#CCFBF1] transition-all resize-none min-h-[90px]"
              />
            </div>

            {/* Submit Button: Pill with White Arrow Circle */}
            <div className="pt-2">
              <ActionPrimaryButton
                type="submit"
                disabled={isSubmitting}
                size="md"
              >
                <span>
                  {isSubmitting 
                    ? t.submitting 
                    : (isPt ? 'Pedir Cotação' : 'Get a Solution')}
                </span>
              </ActionPrimaryButton>
            </div>

          </form>

        </div>

      </div>
    </div>
  );
};

export default QuoteForm;
