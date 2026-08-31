import React, { useState } from 'react';
import { Language, ContactMessageData } from '../../types';
import { companyData } from '../../data/company';
import { 
  MapPin, 
  Mail, 
  Phone, 
  Globe, 
  Send, 
  CheckCircle2, 
  AlertCircle,
  MessageSquare,
  Clock
} from 'lucide-react';
import { motion } from 'motion/react';

interface ContactFormProps {
  lang: Language;
  onSuccess?: () => void;
  className?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({
  lang,
  onSuccess,
  className = ''
}) => {
  const isPt = lang === 'pt';

  const [formData, setFormData] = useState<ContactMessageData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage(
        isPt 
          ? 'Por favor preencha os campos obrigatórios (*).' 
          : 'Please fill in all required fields (*).'
      );
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      if (onSuccess) onSuccess();
    }, 600);
  };

  return (
    <div className={`relative max-w-4xl mx-auto w-full ${className}`}>
      
      {/* 🌟 MAIN CONTAINER WRAPPER */}
      <div className="relative pt-6 sm:pt-8 md:pt-10 lg:pl-16">
        
        {/* ========================================================
            RIGHT/MAIN CONTAINER: CRISP WHITE "GET IN TOUCH" CARD
           ======================================================== */}
        <div className="bg-white rounded-3xl sm:rounded-[32px] border border-slate-200/90 shadow-[0_20px_60px_-15px_rgba(4,47,44,0.12)] p-6 sm:p-8 md:p-12 md:pl-72 lg:pl-80 relative z-10 transition-all">
          
          {isSubmitted ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-10 text-center flex flex-col items-center justify-center"
            >
              <div className="w-16 h-16 rounded-full bg-[#F0FDFA] text-[#0D7E73] flex items-center justify-center mb-4 border border-[#CCFBF1] shadow-inner">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl sm:text-2xl font-black text-[#042F2C] tracking-tight mb-2">
                {isPt ? 'Mensagem Enviada com Sucesso!' : 'Message Received!'}
              </h4>
              <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed mb-6 max-w-sm">
                {isPt 
                  ? 'Agradecemos o seu contacto. A nossa equipa responderá em menos de 24 horas úteis.' 
                  : 'Thank you for reaching out. Our team will review your inquiry and respond within 24 business hours.'}
              </p>
              <button
                type="button"
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
                }}
                className="inline-flex items-center justify-center px-8 py-3 rounded-full text-xs font-bold text-white bg-[#0D7E73] hover:bg-[#0B6A61] transition-all shadow-sm cursor-pointer uppercase tracking-wider"
              >
                {isPt ? 'Nova Mensagem' : 'Send Another'}
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Card Header: Get in Touch (Matching Reference Image) */}
              <div className="mb-6">
                <h3 className="text-2xl sm:text-3xl font-black text-[#042F2C] tracking-tight mb-1">
                  {isPt ? 'Entre em Contacto' : 'Get in Touch'}
                </h3>
                <p className="text-xs sm:text-sm text-[#64748B] font-medium">
                  {isPt ? 'Deixe-nos uma mensagem abaixo e responderemos com brevidade!' : 'Feel free to drop us a line below!'}
                </p>
              </div>

              {errorMessage && (
                <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Input: Your Name */}
              <div>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={isPt ? 'O seu Nome...' : 'Your Name'}
                  className="w-full px-4 sm:px-5 py-3.5 rounded-xl border border-slate-200/80 bg-[#F8FAFC] text-sm text-[#042F2C] placeholder:text-slate-400 focus:bg-white focus:outline-hidden focus:border-[#0D7E73] focus:ring-2 focus:ring-[#CCFBF1] transition-all"
                />
              </div>

              {/* Input: Your Email */}
              <div>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={isPt ? 'O seu Email corporativo...' : 'Your Email'}
                  className="w-full px-4 sm:px-5 py-3.5 rounded-xl border border-slate-200/80 bg-[#F8FAFC] text-sm text-[#042F2C] placeholder:text-slate-400 focus:bg-white focus:outline-hidden focus:border-[#0D7E73] focus:ring-2 focus:ring-[#CCFBF1] transition-all"
                />
              </div>

              {/* Textarea: Typing your Message here... */}
              <div>
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={isPt ? 'Escreva a sua mensagem aqui...' : 'Typing your Message here...'}
                  className="w-full px-4 sm:px-5 py-3.5 rounded-xl border border-slate-200/80 bg-[#F8FAFC] text-sm text-[#042F2C] placeholder:text-slate-400 focus:bg-white focus:outline-hidden focus:border-[#0D7E73] focus:ring-2 focus:ring-[#CCFBF1] transition-all resize-y"
                />
              </div>

              {/* Action: Send Pill Button (Matching Reference Image) */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center gap-2 px-10 py-3.5 rounded-full text-xs sm:text-sm font-extrabold uppercase tracking-widest text-white bg-gradient-to-r from-[#0D7E73] to-[#0F9488] hover:from-[#0B6A61] hover:to-[#0A5C54] active:scale-95 disabled:opacity-70 transition-all duration-200 shadow-md hover:shadow-lg hover:shadow-[#0D7E73]/20 cursor-pointer"
                >
                  {isSubmitting ? (
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <span>{isPt ? 'ENVIAR' : 'SEND'}</span>
                  )}
                </button>
              </div>

            </form>
          )}

        </div>

        {/* ========================================================
            LEFT OVERLAPPING CARD: BRAND TEAL "CONTACT US" CARD
            (Hangs to the left and overlaps the main white card)
           ======================================================== */}
        <div className="md:absolute md:left-0 md:top-0 md:bottom-0 md:w-68 lg:w-76 z-20 mt-6 md:mt-0 flex flex-col justify-between bg-gradient-to-b from-[#0D7E73] via-[#0B6A61] to-[#042F2C] rounded-2xl sm:rounded-3xl p-6 sm:p-7 text-white shadow-[0_16px_36px_-6px_rgba(13,126,115,0.35)] border border-[#14B8A6]/40">
          
          <div>
            {/* Title */}
            <h4 className="text-xl sm:text-2xl font-black tracking-tight text-white mb-6">
              {isPt ? 'Contacte-nos' : 'Contact Us'}
            </h4>

            {/* Information Items with Outline Icons (Exact Reference Style) */}
            <div className="space-y-5">
              
              {/* Address / Location */}
              <div className="flex items-start gap-3 text-xs leading-relaxed text-teal-50">
                <div className="w-5 h-5 mt-0.5 shrink-0 text-[#99F6E4] flex items-center justify-center">
                  <MapPin className="w-4 h-4" />
                </div>
                <span>
                  {companyData.fullAddress}
                </span>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3 text-xs text-teal-50">
                <div className="w-5 h-5 shrink-0 text-[#99F6E4] flex items-center justify-center">
                  <Mail className="w-4 h-4" />
                </div>
                <a 
                  href={`mailto:${companyData.email}`}
                  className="hover:text-white transition-colors truncate font-medium"
                >
                  {companyData.email}
                </a>
              </div>

              {/* Phone 1 */}
              <div className="flex items-center gap-3 text-xs text-teal-50">
                <div className="w-5 h-5 shrink-0 text-[#99F6E4] flex items-center justify-center">
                  <Phone className="w-4 h-4" />
                </div>
                <a 
                  href={`tel:${companyData.phone.replace(/\s+/g, '')}`}
                  className="hover:text-white transition-colors font-medium"
                >
                  {companyData.phone}
                </a>
              </div>

              {/* Phone 2 / WhatsApp Direct */}
              <div className="flex items-center gap-3 text-xs text-teal-50">
                <div className="w-5 h-5 shrink-0 text-[#99F6E4] flex items-center justify-center">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <a 
                  href={`https://wa.me/${companyData.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors font-medium"
                >
                  {companyData.whatsappDisplay}
                </a>
              </div>

            </div>
          </div>

          {/* Bottom Hours & Guarantee Note */}
          <div className="pt-6 mt-6 border-t border-white/15 text-[11px] text-teal-200/80 flex items-center gap-2">
            <Clock className="w-3.5 h-3.5 text-[#5EEAD4] shrink-0" />
            <span>Seg - Sex: 09:00 - 18:30 (Trofa)</span>
          </div>

        </div>

      </div>

    </div>
  );
};

export default ContactForm;
