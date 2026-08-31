import React from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { companyData } from '../data/company';
import { QuoteForm } from '../components/ui/QuoteForm';
import { GeometricMotif } from '../components/ui/GeometricMotif';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Globe, 
  ExternalLink,
  MessageSquare,
  Sparkles,
  ShieldCheck,
  Building2,
  Clock,
  CheckCircle2,
  Calendar,
  Navigation
} from 'lucide-react';

interface ContactViewProps {
  lang: Language;
  onNavigateHome?: () => void;
  onNavigateProducts?: () => void;
  onNavigateServices?: () => void;
  onNavigateWhyChooseUs?: () => void;
}

export const ContactView: React.FC<ContactViewProps> = ({ 
  lang,
  onNavigateHome,
  onNavigateProducts,
  onNavigateServices,
  onNavigateWhyChooseUs
}) => {
  const isPt = lang === 'pt';

  const whatsappInquiryUrl = `https://wa.me/${companyData.whatsappNumber}?text=${encodeURIComponent(
    'Olá equipa Algorítmica Mania, pretendo mais informações sobre equipamentos e serviços.'
  )}`;

  return (
    <div className="w-full min-h-screen bg-[#F8FAFC] relative overflow-hidden">
      
      {/* Background Soft Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-[#CCFBF1]/30 rounded-full blur-[140px] pointer-events-none" />

      {/* Main Container */}
      <div className="relative pt-8 sm:pt-12 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full z-10">
        
        {/* Page Top Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-white text-[#0D7E73] border border-[#CCFBF1] mb-3.5 shadow-2xs">
            <Building2 className="w-3.5 h-3.5 text-[#0D7E73]" />
            <span>{isPt ? 'ATENDIMENTO EMPRESARIAL & LABORATÓRIO NA TROFA' : 'ENTERPRISE SUPPORT & TROFA LABORATORY'}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#042F2C] tracking-tight mb-4">
            {isPt ? (
              <>
                Fale Diretamente com a <span className="text-[#0D7E73]">Nossa Equipa</span>
              </>
            ) : (
              <>
                Get in Touch with <span className="text-[#0D7E73]">Our Technical Team</span>
              </>
            )}
          </h1>
          
          <p className="text-sm sm:text-base text-[#64748B] leading-relaxed max-w-2xl mx-auto">
            {isPt 
              ? 'Tem dúvidas sobre cotações de frotas B2B, servidores ou pretende agendar uma visita ao nosso laboratório técnico na Trofa? Estamos aqui para responder.'
              : 'Have questions regarding fleet quotes, server configurations, or wish to schedule a visit to our Trofa laboratory? We are here to help.'}
          </p>
        </div>

        {/* 3 HIGH-IMPACT DIRECT CONTACT CHANNELS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mb-12 sm:mb-16">
          
          {/* Card 1: WhatsApp Instant Dispatch */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 hover:border-[#0D7E73] shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#0D7E73] text-white flex items-center justify-center mb-5 shadow-xs group-hover:scale-105 transition-transform">
                <MessageSquare className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#0D7E73] block mb-1">
                {isPt ? 'Resposta Imediata' : 'Instant Chat'}
              </span>
              <h3 className="text-lg font-black text-[#042F2C] mb-2">
                WhatsApp Business
              </h3>
              <p className="text-xs text-[#64748B] leading-relaxed mb-4">
                {isPt 
                  ? 'Contacto direto com os nossos técnicos de bancada para esclarecimento de stock e configurações.'
                  : 'Direct line to our lab engineers for immediate stock availability and technical specs.'}
              </p>
            </div>
            <a
              href={whatsappInquiryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl text-xs font-bold text-[#0D7E73] bg-[#F0FDFA] hover:bg-[#CCFBF1] border border-[#CCFBF1] transition-all cursor-pointer"
            >
              <span>{companyData.whatsappDisplay}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Card 2: Phone & Email Direct Lines */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 hover:border-[#0D7E73] shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#042F2C] text-[#2DD4BF] flex items-center justify-center mb-5 shadow-xs group-hover:scale-105 transition-transform">
                <Phone className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#0D7E73] block mb-1">
                {isPt ? 'Linha Direta B2B' : 'Direct B2B Line'}
              </span>
              <h3 className="text-lg font-black text-[#042F2C] mb-2">
                {isPt ? 'Chamada & Email' : 'Phone & Email'}
              </h3>
              <p className="text-xs text-[#64748B] leading-relaxed mb-4">
                {isPt 
                  ? 'Segunda a Sexta das 09h00 às 18h30. Propostas formais em menos de 4 horas úteis.'
                  : 'Monday to Friday, 09:00 to 18:30 GMT. Formal quotes delivered within 4 business hours.'}
              </p>
            </div>
            <div className="space-y-2">
              <a
                href={`tel:${companyData.phone.replace(/\s+/g, '')}`}
                className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl text-xs font-bold text-[#042F2C] bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-all cursor-pointer"
              >
                <Phone className="w-3.5 h-3.5 text-[#0D7E73]" />
                <span>{companyData.phone}</span>
              </a>
              <a
                href={`mailto:${companyData.email}`}
                className="inline-flex items-center justify-center gap-2 w-full py-2 px-4 rounded-xl text-xs font-bold text-[#64748B] hover:text-[#0D7E73] transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#0D7E73]" />
                <span className="truncate">{companyData.email}</span>
              </a>
            </div>
          </div>

          {/* Card 3: Trofa Lab Location & Hours */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 hover:border-[#0D7E73] shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#0D7E73] text-white flex items-center justify-center mb-5 shadow-xs group-hover:scale-105 transition-transform">
                <MapPin className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#0D7E73] block mb-1">
                {isPt ? 'Instalações na Trofa' : 'Trofa Technical Facility'}
              </span>
              <h3 className="text-lg font-black text-[#042F2C] mb-2">
                {isPt ? 'Hub & Centro Técnico' : 'Lab & Operations'}
              </h3>
              <p className="text-xs text-[#64748B] leading-relaxed mb-4">
                {companyData.location}
              </p>
            </div>
            <div className="p-3 bg-[#F0FDFA] rounded-xl border border-[#CCFBF1] text-left">
              <div className="flex items-center gap-2 text-[11px] font-bold text-[#042F2C] mb-1">
                <Clock className="w-3.5 h-3.5 text-[#0D7E73]" />
                <span>{isPt ? 'Horário de Funcionamento' : 'Operating Hours'}</span>
              </div>
              <span className="text-[11px] text-[#64748B] block">
                {isPt ? 'Seg - Sex: 09:00 - 18:30' : 'Mon - Fri: 09:00 - 18:30'}
              </span>
            </div>
          </div>

        </div>

        {/* 🌟 DIRECT QUOTE & CONSULTATION FORM */}
        <div className="relative z-10 mb-12">
          <QuoteForm lang={lang} className="w-full" />
        </div>

        {/* TRUST COMMITMENT BAR */}
        <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-xs">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left">
            <div className="flex items-center gap-3 justify-center sm:justify-start">
              <div className="w-10 h-10 rounded-xl bg-[#F0FDFA] text-[#0D7E73] flex items-center justify-center shrink-0 border border-[#CCFBF1]">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#042F2C] block">
                  {isPt ? 'Resposta no Mesmo Dia' : 'Same-Day Response'}
                </span>
                <span className="text-[11px] text-[#64748B]">
                  {isPt ? 'Propostas rápidas e sem compromisso' : 'No-obligation transparent proposals'}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3 justify-center sm:justify-start">
              <div className="w-10 h-10 rounded-xl bg-[#F0FDFA] text-[#0D7E73] flex items-center justify-center shrink-0 border border-[#CCFBF1]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#042F2C] block">
                  {isPt ? 'Garantia Direta de Hardware' : 'Direct Hardware Warranty'}
                </span>
                <span className="text-[11px] text-[#64748B]">
                  {isPt ? 'Até 36 meses com substituição imediata' : 'Up to 36 months direct parts swap'}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3 justify-center sm:justify-start">
              <div className="w-10 h-10 rounded-xl bg-[#F0FDFA] text-[#0D7E73] flex items-center justify-center shrink-0 border border-[#CCFBF1]">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#042F2C] block">
                  {isPt ? 'Faturação & Conformidade RGPD' : 'Full Invoicing & GDPR'}
                </span>
                <span className="text-[11px] text-[#64748B]">
                  {isPt ? 'Destruição de dados NIST SP 800-88' : 'Certified NIST SP 800-88 erasure'}
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};

export default ContactView;

