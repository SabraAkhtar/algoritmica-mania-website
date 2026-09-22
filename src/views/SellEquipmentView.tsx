import React, { useState } from 'react';
import { Language } from '../types';
import { SellEquipmentHero } from '../components/sell/SellEquipmentHero';
import { SellStepTimeline } from '../components/sell/SellStepTimeline';
import { SellEquipmentInteractiveForm } from '../components/sell/SellEquipmentInteractiveForm';
import { SellEquipmentSidebar } from '../components/sell/SellEquipmentSidebar';
import { SellFeatureCards } from '../components/sell/SellFeatureCards';
import { 
  HelpCircle, 
  ChevronDown 
} from 'lucide-react';

interface SellEquipmentViewProps {
  lang: Language;
}

export const SellEquipmentView: React.FC<SellEquipmentViewProps> = ({ lang }) => {
  const isPt = lang === 'pt';
  
  // Step state
  const [currentStep, setCurrentStep] = useState<number>(1);

  // Live summary state for sidebar
  const [summaryData, setSummaryData] = useState<{
    categoryName: string;
    brand: string;
    model: string;
    quantity: number;
    condition: string;
  }>({
    categoryName: isPt ? 'Portátil' : 'Laptop',
    brand: 'Lenovo',
    model: '',
    quantity: 1,
    condition: 'Grade A (Minor cosmetic wear)',
  });

  // FAQ open state
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // EXACT Existing FAQs preserved without any alterations
  const faqs = [
    {
      q: isPt ? 'Compram frotas de qualquer dimensão?' : 'Do you buy corporate fleets of any size?',
      a: isPt 
        ? 'Sim. Avaliamos lotes empresariais a partir de 5 unidades até frotas completas e equipamentos de datacenter em todo o território nacional.' 
        : 'Yes. We evaluate corporate batches from 5 units up to complete enterprise fleets and datacenter infrastructure nationwide.'
    },
    {
      q: isPt ? 'Como é realizada a eliminação segura de dados?' : 'How is secure data sanitization handled?',
      a: isPt 
        ? 'A sanitização de dados é realizada no nosso centro técnico na Trofa em conformidade com as diretrizes do padrão NIST SP 800-88 Rev. 2. Emitimos certificado de eliminação de dados para registo de auditoria e conformidade RGPD.' 
        : 'Data sanitization is performed in our Trofa technical facility following NIST SP 800-88 Rev. 2 guidelines. We provide a certificate of data erasure for your audit and GDPR records.'
    },
    {
      q: isPt ? 'Como funciona a avaliação e o pagamento?' : 'How does valuation and payment work?',
      a: isPt 
        ? 'Após receção dos detalhes ou ficheiro de inventário, a nossa equipa analisa as especificações e envia uma proposta de avaliação. O pagamento é processado de acordo com os termos acordados na transação.' 
        : 'Upon receiving your inventory details, our team reviews the specifications and provides a formal valuation. Payment is processed in accordance with agreed transaction terms.'
    },
    {
      q: isPt ? 'Como funciona a recolha dos equipamentos?' : 'How is equipment pickup coordinated?',
      a: isPt 
        ? 'Coordenamos o transporte logístico seguro a partir das instalações da sua empresa com rastreio e conferência do lote.' 
        : 'We coordinate secure logistics pickup from your company premises with batch verification and tracking.'
    }
  ];

  const handleScrollToForm = () => {
    const formEl = document.getElementById('sell-interactive-form-section');
    if (formEl) {
      formEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full bg-[#F8FAFC] min-h-screen text-[#1F2933]">
      
      {/* 🌟 1. HERO SECTION */}
      <SellEquipmentHero lang={lang} />

      {/* 🌟 2. STEP PROGRESS TIMELINE (5 STEPS) */}
      <div className="border-b border-slate-100 bg-white/70 backdrop-blur-xs">
        <SellStepTimeline 
          lang={lang} 
          currentStep={currentStep} 
          onStepClick={(step) => setCurrentStep(step)} 
        />
      </div>

      {/* 🌟 3. MAIN WORKSPACE: TWO-COLUMN LAYOUT (FORM + FLOATING SIDEBAR) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* 👈 LEFT COLUMN: INTERACTIVE ENTERPRISE FORM (70% on large screens) */}
          <div id="sell-interactive-form-section" className="lg:col-span-8 scroll-mt-8">
            <SellEquipmentInteractiveForm
              lang={lang}
              currentStep={currentStep}
              onStepChange={(step) => setCurrentStep(step)}
              onUpdateSummary={(data) => setSummaryData(data)}
            />
          </div>

          {/* 👉 RIGHT COLUMN: FLOATING SIDEBAR CARDS (30% on large screens) */}
          <div className="lg:col-span-4 lg:sticky lg:top-24">
            <SellEquipmentSidebar
              lang={lang}
              selectedCategoryName={summaryData.categoryName}
              selectedBrand={summaryData.brand}
              selectedModel={summaryData.model}
              selectedQuantity={summaryData.quantity}
              selectedCondition={summaryData.condition}
              onGetValuationClick={handleScrollToForm}
              onBulkFileUpload={(file) => {
                // File uploaded feedback
                console.log('Bulk file uploaded:', file.name);
              }}
            />
          </div>

        </div>

        {/* 🌟 4. BOTTOM FEATURE SECTION (4 Horizontal Cards) */}
        <div className="mt-14">
          <SellFeatureCards lang={lang} />
        </div>

        {/* 🌟 5. FAQ SECTION (EXACT STRUCTURE & CONTENT PRESERVED) */}
        <div className="mt-14 bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-9 shadow-md shadow-teal-950/5">
          <div className="text-left mb-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#CCFBF1] text-[#0D7E73] text-[11px] font-bold uppercase tracking-wider mb-2">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>{isPt ? 'Dúvidas Frequentes' : 'FAQ'}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-[#042F2C]">
              {isPt ? (
                <>
                  Perguntas <span className="text-[#0D7E73]">Frequentes</span>
                </>
              ) : (
                <>
                  Frequently Asked <span className="text-[#0D7E73]">Questions</span>
                </>
              )}
            </h3>
          </div>

          <div className="space-y-3.5">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div 
                  key={idx}
                  className="rounded-2xl border border-slate-200 overflow-hidden transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between p-4 sm:p-5 text-left bg-slate-50/60 hover:bg-[#F0FDFA] transition-colors cursor-pointer"
                  >
                    <span className="text-xs sm:text-sm font-bold text-[#042F2C] pr-4">
                      {faq.q}
                    </span>
                    <ChevronDown className={`w-4 h-4 text-[#0D7E73] shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {isOpen && (
                    <div className="p-4 sm:p-5 pt-2 bg-white text-xs sm:text-sm text-[#475569] leading-relaxed border-t border-slate-100 font-medium">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>

    </div>
  );
};
