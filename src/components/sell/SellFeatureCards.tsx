import React from 'react';
import { Language } from '../../types';
import { Truck, ShieldCheck, CreditCard, Sparkles } from 'lucide-react';

interface SellFeatureCardsProps {
  lang: Language;
}

export const SellFeatureCards: React.FC<SellFeatureCardsProps> = ({ lang }) => {
  const isPt = lang === 'pt';

  const features = [
    {
      icon: Truck,
      title: isPt ? 'Recolha Gratuita' : 'Free Pickup',
      description: isPt ? 'Agendamos a recolha diretamente nas suas instalações' : 'We arrange pickup from your location',
    },
    {
      icon: ShieldCheck,
      title: isPt ? 'Eliminação Segura NIST' : 'Certified Data Erasure',
      description: isPt ? 'Sanitização certificada em conformidade NIST 800-88' : 'NIST 800-88 compliant data sanitization',
    },
    {
      icon: CreditCard,
      title: isPt ? 'Pagamento Rápido' : 'Instant Payment',
      description: isPt ? 'Pagamento ágil e direto via transferência bancária' : 'Get paid quickly via bank transfer',
    },
    {
      icon: Sparkles,
      title: isPt ? 'Melhor Valor de Mercado' : 'Best Market Value',
      description: isPt ? 'Apresentamos propostas altamente competitivas' : 'We offer the most competitive prices',
    },
  ];

  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-md shadow-teal-950/5">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
        {features.map((feature, idx) => {
          const Icon = feature.icon;
          return (
            <div 
              key={idx}
              className={`flex items-center gap-4 ${idx > 0 ? 'pt-4 sm:pt-0 sm:pl-6' : ''}`}
            >
              <div className="w-12 h-12 rounded-2xl bg-[#F0FDFA] border border-[#CCFBF1] text-[#0D7E73] flex items-center justify-center shrink-0 shadow-2xs">
                <Icon className="w-6 h-6 stroke-[1.8]" />
              </div>
              <div>
                <h4 className="text-sm font-black text-[#042F2C] leading-tight mb-0.5">
                  {feature.title}
                </h4>
                <p className="text-xs text-[#64748B] leading-snug font-medium">
                  {feature.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
