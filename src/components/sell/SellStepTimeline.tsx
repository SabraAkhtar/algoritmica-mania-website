import React from 'react';
import { Language } from '../../types';
import { Check } from 'lucide-react';

interface SellStepTimelineProps {
  lang: Language;
  currentStep: number;
  onStepClick?: (step: number) => void;
}

export const SellStepTimeline: React.FC<SellStepTimelineProps> = ({
  lang,
  currentStep,
  onStepClick,
}) => {
  const isPt = lang === 'pt';

  const steps = [
    {
      number: 1,
      title: isPt ? 'Selecionar Equipamento' : 'Select Equipment',
    },
    {
      number: 2,
      title: isPt ? 'Indicar Detalhes' : 'Provide Details',
    },
    {
      number: 3,
      title: isPt ? 'Estado & Quantidade' : 'Condition & Quantity',
    },
    {
      number: 4,
      title: isPt ? 'Informações de Contacto' : 'Contact Information',
    },
    {
      number: 5,
      title: isPt ? 'Rever & Submeter' : 'Review & Submit',
    },
  ];

  return (
    <div className="w-full py-8 max-w-5xl mx-auto px-4">
      <div className="relative flex items-center justify-between">
        
        {/* Continuous background connector track */}
        <div className="absolute top-1/2 left-6 right-6 -translate-y-1/2 h-[2px] bg-slate-200 -z-0" />
        
        {/* Dynamic active progress line fill */}
        <div 
          className="absolute top-1/2 left-6 -translate-y-1/2 h-[2px] bg-[#0D7E73] transition-all duration-500 ease-out -z-0"
          style={{
            width: `calc(${((Math.min(currentStep, 5) - 1) / 4) * 100}% - 12px)`
          }}
        />

        {steps.map((step) => {
          const isCompleted = step.number < currentStep;
          const isActive = step.number === currentStep;
          const isFuture = step.number > currentStep;

          return (
            <div 
              key={step.number}
              onClick={() => onStepClick && onStepClick(step.number)}
              className={`flex flex-col items-center group relative z-10 cursor-pointer select-none`}
            >
              {/* Step Circle Indicator */}
              <div 
                className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-bold text-xs sm:text-sm transition-all duration-300 ${
                  isActive 
                    ? 'bg-[#0D7E73] text-white ring-4 ring-[#CCFBF1] shadow-md scale-110' 
                    : isCompleted
                    ? 'bg-[#0D7E73] text-white hover:bg-[#0B6A61]'
                    : 'bg-white border-2 border-slate-300 text-slate-400 hover:border-[#0D7E73]/50 hover:text-slate-600'
                }`}
              >
                {isCompleted ? (
                  <Check className="w-4 h-4 text-white stroke-[2.5]" />
                ) : (
                  <span>{step.number}</span>
                )}
              </div>

              {/* Step Label */}
              <span 
                className={`mt-2.5 text-[11px] sm:text-xs font-bold text-center transition-colors max-w-[90px] sm:max-w-[120px] leading-tight ${
                  isActive
                    ? 'text-[#042F2C] font-black'
                    : isCompleted
                    ? 'text-[#0D7E73]'
                    : 'text-slate-400 group-hover:text-slate-600'
                }`}
              >
                {step.title}
              </span>
            </div>
          );
        })}

      </div>
    </div>
  );
};
