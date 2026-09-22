import React, { useState, useEffect } from 'react';
import { Product, Language, RfqItem, RfqSubmissionData } from '../../types';
import { 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  Building2, 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  FileText, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  ShoppingBag, 
  ShieldCheck, 
  ArrowRight,
  ArrowLeft,
  MessageSquare,
  Package,
  Calendar,
  Sparkles
} from 'lucide-react';
import { companyData } from '../../data/company';

interface CartRfqDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  rfqItems: RfqItem[];
  mode?: 'cart' | 'rfq-form';
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearRfq: () => void;
  onNavigateProducts: () => void;
}

export const CartRfqDrawer: React.FC<CartRfqDrawerProps> = ({
  isOpen,
  onClose,
  lang,
  rfqItems,
  mode = 'cart',
  onUpdateQuantity,
  onRemoveItem,
  onClearRfq,
  onNavigateProducts
}) => {
  const isPt = lang === 'pt';
  const [currentView, setCurrentView] = useState<'cart' | 'rfq-form'>(mode);

  // Sync mode changes from props when drawer opens or mode changes
  useEffect(() => {
    if (isOpen) {
      setCurrentView(mode);
    }
  }, [isOpen, mode]);

  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    businessEmail: '',
    phone: '',
    country: 'Portugal',
    vatNif: '',
    deliveryLocation: '',
    targetDeliveryDate: '',
    additionalRequirements: '',
    gdprConsent: true
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedRfq, setSubmittedRfq] = useState<RfqSubmissionData | null>(null);
  const [errorMessage, setErrorMessage] = useState('');

  if (!isOpen) return null;

  const totalItemCount = rfqItems.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = rfqItems.reduce((acc, item) => acc + (item.product.price || 0) * item.quantity, 0);
  const hasPricedItems = rfqItems.some(item => item.product.price !== undefined);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.companyName.trim() || !formData.contactName.trim() || !formData.businessEmail.trim() || !formData.phone.trim()) {
      setErrorMessage(
        isPt 
          ? 'Por favor preencha os campos obrigatórios (*) da sua empresa.' 
          : 'Please complete all required fields (*) for your company.'
      );
      return;
    }

    if (!formData.gdprConsent) {
      setErrorMessage(
        isPt 
          ? 'É necessário aceitar os termos de tratamento de dados comerciais para prosseguir.' 
          : 'Please accept the commercial data processing terms to proceed.'
      );
      return;
    }

    setIsSubmitting(true);

    const randomRefNum = Math.floor(1000 + Math.random() * 9000);
    const referenceId = `RFQ-2026-${randomRefNum}`;

    const submissionPayload: RfqSubmissionData = {
      companyName: formData.companyName,
      contactName: formData.contactName,
      businessEmail: formData.businessEmail,
      phone: formData.phone,
      country: formData.country,
      vatNif: formData.vatNif,
      deliveryLocation: formData.deliveryLocation,
      targetDeliveryDate: formData.targetDeliveryDate,
      additionalRequirements: formData.additionalRequirements,
      items: rfqItems.map(item => ({
        productId: item.product.id,
        productName: item.product.name,
        brand: item.product.brand,
        quantity: item.quantity,
        specs: item.product.keySpecs
      })),
      referenceId,
      submittedAt: new Date().toISOString()
    };

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedRfq(submissionPayload);
      onClearRfq();
    }, 850);
  };

  const whatsappInquiryUrl = submittedRfq ? `https://wa.me/${companyData.whatsappNumber}?text=${encodeURIComponent(
    `Olá Algorítmica Mania! Submeti o pedido de cotação B2B [Ref: ${submittedRfq.referenceId}] para a empresa ${submittedRfq.companyName}. Aguardo contacto da vossa equipa técnica.`
  )}` : '';

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cart-rfq-title"
    >
      {/* Dark Transparent Overlay Backdrop */}
      <div 
        className="fixed inset-0 bg-[#042F2C]/65 backdrop-blur-xs transition-opacity duration-300 animate-fade-in cursor-pointer"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Centered Modal Container */}
      <div className="relative w-full max-w-lg md:max-w-xl bg-white max-h-[90vh] rounded-3xl shadow-[0_20px_50px_rgba(4,47,44,0.25)] flex flex-col z-10 overflow-hidden border border-[#CCFBF1] animate-scale-in my-auto">
        
        {/* =========================================================================
            1. DRAWER HEADER (Adaptive between Cart & RFQ Form)
           ========================================================================= */}
        <div className="flex items-center justify-between px-5 py-4 sm:px-6 border-b border-[#CCFBF1] bg-white/95 backdrop-blur-md sticky top-0 z-20">
          <div className="flex items-center gap-2.5 min-w-0">
            {currentView === 'rfq-form' && !submittedRfq && (
              <button
                type="button"
                onClick={() => setCurrentView('cart')}
                className="p-1.5 -ml-1.5 rounded-lg text-[#042F2C] hover:bg-[#F0FDFA] hover:text-[#0D7E73] transition-colors cursor-pointer mr-1"
                aria-label={isPt ? 'Voltar ao Cesto' : 'Back to Cart'}
                title={isPt ? 'Voltar ao Cesto' : 'Back to Cart'}
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
            )}

            <div className="w-9 h-9 rounded-xl bg-[#F0FDFA] text-[#0D7E73] border border-[#CCFBF1] flex items-center justify-center shrink-0 shadow-2xs">
              {currentView === 'cart' ? (
                <ShoppingBag className="w-4.5 h-4.5 text-[#0D7E73]" />
              ) : (
                <FileText className="w-4.5 h-4.5 text-[#0D7E73]" />
              )}
            </div>

            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <h2 id="cart-rfq-title" className="text-base font-bold text-[#042F2C] truncate">
                  {submittedRfq 
                    ? (isPt ? 'Cotação Confirmada' : 'Quote Confirmed')
                    : currentView === 'cart' 
                      ? (isPt ? 'O Seu Orçamento' : 'Your Quote')
                      : (isPt ? 'Pedido de Cotação B2B' : 'Request a Quote')}
                </h2>
                {currentView === 'cart' && totalItemCount > 0 && (
                  <span className="px-2 py-0.5 rounded-full text-[11px] font-bold bg-[#0D7E73] text-white shrink-0">
                    {totalItemCount} {isPt ? (totalItemCount === 1 ? 'item' : 'itens') : (totalItemCount === 1 ? 'item' : 'items')}
                  </span>
                )}
              </div>
              <p className="text-[11px] text-[#64748B] truncate">
                {isPt ? 'ALGoritmica MANIA • Trofa, Portugal' : 'ALGoritmica MANIA • Trofa, Portugal'}
              </p>
            </div>
          </div>

          {/* Close Action */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close drawer"
            className="p-2 rounded-xl text-[#64748B] hover:bg-[#F0FDFA] hover:text-[#042F2C] transition-colors cursor-pointer shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* =========================================================================
            2. DRAWER BODY
           ========================================================================= */}
        <div className="flex-1 overflow-y-auto px-5 py-4 sm:px-6">
          
          {submittedRfq ? (
            /* -----------------------------------------------------------------------
               VIEW: SUCCESS STATE AFTER FORM SUBMISSION
               ----------------------------------------------------------------------- */
            <div className="py-6 text-center space-y-5">
              <div className="w-16 h-16 rounded-full bg-[#F0FDFA] text-[#0D7E73] flex items-center justify-center mx-auto border-2 border-[#99F6E4] shadow-sm">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#F0FDFA] text-[#0D7E73] border border-[#CCFBF1] mb-2">
                  REF: {submittedRfq.referenceId}
                </span>

                <h3 className="text-lg sm:text-xl font-bold text-[#042F2C]">
                  {isPt ? 'Pedido de Cotação Submetido!' : 'Quote Request Submitted!'}
                </h3>
                <p className="text-xs text-[#64748B] max-w-sm mx-auto mt-1 leading-relaxed">
                  {isPt 
                    ? 'A nossa equipa técnica em Trofa irá analisar os equipamentos selecionados e emitir a proposta comercial com preços para frotas B2B.' 
                    : 'Our engineering team in Trofa will review the requested items and generate a formal proposal with B2B fleet discounts.'}
                </p>
              </div>

              {/* Submitted Details Box */}
              <div className="p-4 bg-[#F8FAFC] rounded-2xl border border-slate-200 text-left text-xs space-y-2">
                <div className="flex justify-between">
                  <span className="text-[#64748B]">{isPt ? 'Empresa:' : 'Company:'}</span>
                  <span className="font-bold text-[#042F2C]">{submittedRfq.companyName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#64748B]">{isPt ? 'Contacto:' : 'Contact:'}</span>
                  <span className="font-medium text-[#042F2C]">{submittedRfq.contactName} ({submittedRfq.businessEmail})</span>
                </div>
                {submittedRfq.vatNif && (
                  <div className="flex justify-between">
                    <span className="text-[#64748B]">NIF / VAT:</span>
                    <span className="font-mono text-[#042F2C]">{submittedRfq.vatNif}</span>
                  </div>
                )}
                <div className="pt-2 border-t border-slate-200">
                  <span className="font-semibold text-[#042F2C] block mb-1">
                    {isPt ? 'Equipamentos Cotados:' : 'Quoted Items:'}
                  </span>
                  <ul className="space-y-1">
                    {submittedRfq.items.map((item, idx) => (
                      <li key={idx} className="flex justify-between text-[11px] text-[#475569]">
                        <span className="truncate pr-2">• {item.brand} {item.productName}</span>
                        <span className="font-mono font-bold text-[#0D7E73] shrink-0">{item.quantity}x</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="space-y-2 pt-2">
                <a
                  href={whatsappInquiryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl text-xs font-bold text-white bg-[#0D7E73] hover:bg-[#0B6A61] transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>{isPt ? 'Acompanhar via WhatsApp' : 'Follow up via WhatsApp'}</span>
                </a>

                <button
                  type="button"
                  onClick={() => {
                    setSubmittedRfq(null);
                    onClose();
                  }}
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-[#042F2C] bg-[#F0FDFA] hover:bg-[#CCFBF1] border border-[#CCFBF1] transition-colors cursor-pointer"
                >
                  {isPt ? 'Fechar Janela' : 'Close Window'}
                </button>
              </div>
            </div>
          ) : currentView === 'cart' ? (
            /* -----------------------------------------------------------------------
               VIEW 1: MODERN B2B SHOPPING CART / RFQ SUMMARY VIEW
               ----------------------------------------------------------------------- */
            <div>
              {rfqItems.length === 0 ? (
                /* Empty Cart State */
                <div className="py-12 px-4 text-center space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-[#F0FDFA] border border-[#CCFBF1] text-[#0D7E73] flex items-center justify-center mx-auto shadow-2xs">
                    <ShoppingBag className="w-8 h-8 stroke-[1.75]" />
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-[#042F2C] mb-1">
                      {isPt ? 'O seu cesto de cotação está vazio' : 'Your quote is empty'}
                    </h3>
                    <p className="text-xs text-[#64748B] max-w-xs mx-auto leading-relaxed">
                      {isPt 
                        ? 'Adicione equipamentos ao seu cesto para solicitar uma cotação comercial B2B à nossa equipa.' 
                        : 'Add products to your quote to request a business quotation from our engineering team.'}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      onNavigateProducts();
                      onClose();
                    }}
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#0D7E73] hover:bg-[#0B6A61] text-white text-xs font-bold transition-all shadow-xs cursor-pointer"
                  >
                    <span>{isPt ? 'Explorar Catálogo de Hardware' : 'Browse Products'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              ) : (
                /* Product Items List */
                <div className="space-y-3 pb-2">
                  <div className="flex items-center justify-between pb-1">
                    <span className="text-[11px] font-semibold text-[#64748B] uppercase tracking-wider">
                      {isPt ? 'Itens Selecionados' : 'Selected Products'} ({totalItemCount})
                    </span>
                    <button
                      type="button"
                      onClick={onClearRfq}
                      className="text-[11px] text-slate-500 hover:text-rose-600 font-medium hover:underline cursor-pointer transition-colors"
                    >
                      {isPt ? 'Limpar cesto' : 'Clear all'}
                    </button>
                  </div>

                  {rfqItems.map((item) => {
                    const linePrice = item.product.price ? item.product.price * item.quantity : null;
                    return (
                      <div 
                        key={item.product.id}
                        className="group flex gap-3 p-3 rounded-2xl bg-white border border-slate-200/90 hover:border-[#0D7E73] transition-all shadow-2xs"
                      >
                        {/* Thumbnail */}
                        <div className="w-16 h-16 rounded-xl bg-slate-100 shrink-0 overflow-hidden border border-slate-100 flex items-center justify-center">
                          <img 
                            src={item.product.images[0]} 
                            alt={item.product.name} 
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            referrerPolicy="no-referrer"
                            loading="lazy"
                          />
                        </div>

                        {/* Details */}
                        <div className="flex-1 min-w-0 flex flex-col justify-between">
                          <div>
                            <div className="flex items-center justify-between gap-1">
                              <span className="text-[10px] font-mono font-bold text-[#0D7E73] uppercase tracking-wider">
                                {item.product.brand}
                              </span>
                              <button
                                type="button"
                                onClick={() => onRemoveItem(item.product.id)}
                                aria-label={isPt ? `Remover ${item.product.name}` : `Remove ${item.product.name}`}
                                className="text-slate-400 hover:text-rose-600 transition-colors p-1 -mr-1 rounded-md hover:bg-rose-50 cursor-pointer"
                                title={isPt ? 'Remover do cesto' : 'Remove item'}
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>

                            <h4 
                              className="text-xs font-bold text-[#042F2C] leading-snug line-clamp-1 mb-1"
                              title={item.product.name}
                            >
                              {item.product.name}
                            </h4>

                            {/* Price */}
                            <div className="text-xs font-bold text-[#042F2C]">
                              {item.product.price ? (
                                <span>
                                  €{item.product.price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                  <span className="text-[10px] text-slate-400 font-normal ml-1">(+IVA)</span>
                                </span>
                              ) : (
                                <span className="text-[11px] text-[#0D7E73] font-semibold">
                                  {isPt ? 'Cotação Sob Consulta' : 'Quote on Request'}
                                </span>
                              )}
                            </div>
                          </div>

                          {/* Quantity Controls & Remove */}
                          <div className="flex items-center justify-between pt-2 mt-1 border-t border-slate-100">
                            {/* Quantity Stepper */}
                            <div className="flex items-center gap-1 bg-[#F0FDFA] p-0.5 rounded-lg border border-[#CCFBF1]">
                              <button
                                type="button"
                                onClick={() => onUpdateQuantity(item.product.id, Math.max(1, item.quantity - 1))}
                                disabled={item.quantity <= 1}
                                className="w-5.5 h-5.5 rounded flex items-center justify-center bg-white hover:bg-[#CCFBF1] text-[#042F2C] text-xs font-bold transition-colors cursor-pointer shadow-2xs disabled:opacity-40 disabled:cursor-not-allowed"
                                aria-label={isPt ? 'Diminuir quantidade' : 'Decrease quantity'}
                              >
                                <Minus className="w-3 h-3" />
                              </button>

                              <span className="w-6 text-center font-mono font-bold text-xs text-[#042F2C]">
                                {item.quantity}
                              </span>

                              <button
                                type="button"
                                onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                                className="w-5.5 h-5.5 rounded flex items-center justify-center bg-white hover:bg-[#CCFBF1] text-[#042F2C] text-xs font-bold transition-colors cursor-pointer shadow-2xs"
                                aria-label={isPt ? 'Aumentar quantidade' : 'Increase quantity'}
                              >
                                <Plus className="w-3 h-3" />
                              </button>
                            </div>

                            {/* Line Subtotal */}
                            {linePrice !== null ? (
                              <span className="text-xs font-bold font-mono text-[#0D7E73]">
                                €{linePrice.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                              </span>
                            ) : (
                              <span className="text-[10px] text-slate-400">
                                {isPt ? 'Qtd: ' : 'Qty: '}{item.quantity}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}

                  {/* Add more hardware link */}
                  <div className="pt-2 text-center">
                    <button
                      type="button"
                      onClick={() => {
                        onNavigateProducts();
                        onClose();
                      }}
                      className="text-xs font-bold text-[#0D7E73] hover:text-[#0B6A61] hover:underline inline-flex items-center gap-1 cursor-pointer"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>{isPt ? '+ Adicionar mais modelos ao cesto' : '+ Add more products'}</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            /* -----------------------------------------------------------------------
               VIEW 2: DETAILED B2B RFQ PROCUREMENT FORM
               ----------------------------------------------------------------------- */
            <div className="space-y-4">
              {/* Header Description */}
              <div>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  {isPt 
                    ? 'Indique os dados da sua empresa e requisitos específicos. O nosso gabinete de engenharia irá emitir a cotação formal com condições para frotas.' 
                    : 'Tell us about your business and requirements. Our team will prepare a formal business quotation for you.'}
                </p>
              </div>

              {/* Compact Selected Hardware Summary Badge */}
              <div className="p-3 bg-[#F0FDFA] rounded-xl border border-[#CCFBF1] flex items-center justify-between">
                <div className="flex items-center gap-2 min-w-0">
                  <Package className="w-4 h-4 text-[#0D7E73] shrink-0" />
                  <div className="min-w-0">
                    <span className="text-xs font-bold text-[#042F2C] block truncate">
                      {totalItemCount} {isPt ? (totalItemCount === 1 ? 'equipamento selecionado' : 'equipamentos selecionados') : (totalItemCount === 1 ? 'item selected' : 'items selected')}
                    </span>
                    {hasPricedItems && (
                      <span className="text-[11px] text-[#0D7E73] font-mono font-semibold">
                        {isPt ? 'Subtotal estim.: ' : 'Est. Subtotal: '}
                        €{subtotal.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} (+IVA)
                      </span>
                    )}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setCurrentView('cart')}
                  className="text-xs font-bold text-[#0D7E73] hover:underline shrink-0 cursor-pointer"
                >
                  {isPt ? 'Ver itens' : 'View items'}
                </button>
              </div>

              {/* The Form */}
              <form onSubmit={handleSubmit} className="space-y-3.5">
                {errorMessage && (
                  <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Form Fields: 2 columns on desktop/tablet, 1 column on mobile */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* Company Name */}
                  <div>
                    <label className="block text-[11px] font-bold text-[#042F2C] mb-1">
                      {isPt ? 'Nome da Empresa *' : 'Company Name *'}
                    </label>
                    <div className="relative">
                      <Building2 className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
                      <input
                        type="text"
                        name="companyName"
                        required
                        value={formData.companyName}
                        onChange={handleChange}
                        placeholder={isPt ? 'Ex.: Tech Solutions Lda' : 'e.g. Acme Corp Ltd'}
                        className="w-full pl-9 pr-3 py-2 bg-[#F8FAFC] border border-slate-200 rounded-xl text-xs text-[#042F2C] focus:bg-white focus:border-[#0D7E73] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Contact Person */}
                  <div>
                    <label className="block text-[11px] font-bold text-[#042F2C] mb-1">
                      {isPt ? 'Pessoa de Contacto *' : 'Contact Person *'}
                    </label>
                    <div className="relative">
                      <User className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
                      <input
                        type="text"
                        name="contactName"
                        required
                        value={formData.contactName}
                        onChange={handleChange}
                        placeholder={isPt ? 'Ex.: Manuel Silva' : 'e.g. Sarah Jenkins'}
                        className="w-full pl-9 pr-3 py-2 bg-[#F8FAFC] border border-slate-200 rounded-xl text-xs text-[#042F2C] focus:bg-white focus:border-[#0D7E73] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Business Email */}
                  <div>
                    <label className="block text-[11px] font-bold text-[#042F2C] mb-1">
                      {isPt ? 'Email Profissional *' : 'Business Email *'}
                    </label>
                    <div className="relative">
                      <Mail className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
                      <input
                        type="email"
                        name="businessEmail"
                        required
                        value={formData.businessEmail}
                        onChange={handleChange}
                        placeholder="compras@empresa.com"
                        className="w-full pl-9 pr-3 py-2 bg-[#F8FAFC] border border-slate-200 rounded-xl text-xs text-[#042F2C] focus:bg-white focus:border-[#0D7E73] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-[11px] font-bold text-[#042F2C] mb-1">
                      {isPt ? 'Telefone / WhatsApp *' : 'Phone / WhatsApp *'}
                    </label>
                    <div className="relative">
                      <Phone className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+351 912 345 678"
                        className="w-full pl-9 pr-3 py-2 bg-[#F8FAFC] border border-slate-200 rounded-xl text-xs text-[#042F2C] focus:bg-white focus:border-[#0D7E73] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* VAT / NIF */}
                  <div>
                    <label className="block text-[11px] font-bold text-[#042F2C] mb-1">
                      {isPt ? 'NIF / VAT da Empresa' : 'Company VAT / Tax ID'}
                    </label>
                    <input
                      type="text"
                      name="vatNif"
                      value={formData.vatNif}
                      onChange={handleChange}
                      placeholder={isPt ? 'Ex.: PT512345678' : 'e.g. GB123456789'}
                      className="w-full px-3 py-2 bg-[#F8FAFC] border border-slate-200 rounded-xl text-xs text-[#042F2C] focus:bg-white focus:border-[#0D7E73] focus:outline-none transition-colors font-mono"
                    />
                  </div>

                  {/* Location */}
                  <div>
                    <label className="block text-[11px] font-bold text-[#042F2C] mb-1">
                      {isPt ? 'Localidade de Entrega' : 'Delivery City / Location'}
                    </label>
                    <div className="relative">
                      <MapPin className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
                      <input
                        type="text"
                        name="deliveryLocation"
                        value={formData.deliveryLocation}
                        onChange={handleChange}
                        placeholder={isPt ? 'Ex.: Porto, Lisboa, Braga...' : 'e.g. London, Madrid, Paris...'}
                        className="w-full pl-9 pr-3 py-2 bg-[#F8FAFC] border border-slate-200 rounded-xl text-xs text-[#042F2C] focus:bg-white focus:border-[#0D7E73] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>
                </div>

                {/* Additional Requirements / Upgrades */}
                <div>
                  <label className="block text-[11px] font-bold text-[#042F2C] mb-1">
                    {isPt ? 'Requisitos Adicionais & Configurações' : 'Additional Requirements & Setup'}
                  </label>
                  <textarea
                    name="additionalRequirements"
                    rows={2}
                    value={formData.additionalRequirements}
                    onChange={handleChange}
                    placeholder={isPt ? 'Ex.: Upgrade para 32GB RAM, Windows 11 Pro, faturação a 30 dias...' : 'e.g. Need RAM upgrade to 32GB, custom OS imaging, fast dispatch...'}
                    className="w-full px-3 py-2 bg-[#F8FAFC] border border-slate-200 rounded-xl text-xs text-[#042F2C] focus:bg-white focus:border-[#0D7E73] focus:outline-none transition-colors resize-none"
                  />
                </div>

                {/* GDPR Consent */}
                <div className="flex items-start gap-2 pt-1">
                  <input
                    type="checkbox"
                    id="rfq-gdpr-consent"
                    name="gdprConsent"
                    checked={formData.gdprConsent}
                    onChange={handleChange}
                    className="mt-0.5 rounded border-slate-300 text-[#0D7E73] focus:ring-[#0D7E73] cursor-pointer"
                  />
                  <label htmlFor="rfq-gdpr-consent" className="text-[11px] text-[#64748B] leading-tight cursor-pointer">
                    {isPt 
                      ? 'Concordo com o tratamento dos dados comerciais para efeitos de elaboração de cotação B2B (RGPD).' 
                      : 'I agree to the processing of this business data solely for quotation purposes (GDPR).'}
                  </label>
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  disabled={isSubmitting || rfqItems.length === 0}
                  className="w-full py-3 px-5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#14B8A6] to-[#0D9488] hover:from-[#0B4A42] hover:to-[#0B4A42] hover:bg-[#0B4A42] transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>{isPt ? 'A Gerar Cotação Formal...' : 'Generating Formal Quote...'}</span>
                    </span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>{isPt ? 'Submeter Pedido de Cotação B2B' : 'Submit Request for Quote (RFQ)'}</span>
                    </>
                  )}
                </button>

                <div className="flex items-center justify-center gap-1.5 text-[10px] text-[#64748B]">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#0D7E73]" />
                  <span>{isPt ? 'Engenharia dedicada em Trofa • Sem compromisso de compra' : 'Engineering review in Trofa • Zero purchase obligation'}</span>
                </div>
              </form>
            </div>
          )}
        </div>

        {/* =========================================================================
            3. DRAWER FOOTER (Active in Cart Mode when items exist)
           ========================================================================= */}
        {currentView === 'cart' && !submittedRfq && rfqItems.length > 0 && (
          <div className="border-t border-[#CCFBF1] p-4 sm:p-5 bg-slate-50/95 backdrop-blur-sm sticky bottom-0 z-20 space-y-3">
            {/* Subtotal Row */}
            <div className="flex items-baseline justify-between">
              <span className="text-xs font-semibold text-[#64748B]">
                {isPt ? 'Subtotal Estimado:' : 'Subtotal:'}
              </span>
              <div className="text-right">
                {hasPricedItems ? (
                  <div className="flex items-baseline gap-1">
                    <span className="text-base sm:text-lg font-black text-[#042F2C]">
                      €{subtotal.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </span>
                    <span className="text-[11px] text-slate-400 font-medium">(+IVA)</span>
                  </div>
                ) : (
                  <span className="text-xs font-bold text-[#0D7E73]">
                    {isPt ? 'Cotação Sob Consulta' : 'Quote on Request'}
                  </span>
                )}
              </div>
            </div>

            {/* Actions: Primary CTA (Request a Quote) & Secondary CTA (Continue Shopping) */}
            <div className="space-y-2">
              <button
                type="button"
                id="btn-drawer-request-quote"
                onClick={() => setCurrentView('rfq-form')}
                className="w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#14B8A6] to-[#0D9488] hover:from-[#0B4A42] hover:to-[#0B4A42] hover:bg-[#0B4A42] transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>{isPt ? 'Pedir Cotação Formal' : 'Request a Quote'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                id="btn-drawer-continue-shopping"
                onClick={onClose}
                className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-[#042F2C] hover:bg-slate-200/70 border border-slate-200 transition-colors flex items-center justify-center cursor-pointer"
              >
                {isPt ? 'Continuar a Explorar' : 'Continue Shopping'}
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
