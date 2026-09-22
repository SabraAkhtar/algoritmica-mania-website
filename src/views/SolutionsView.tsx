import React from 'react';
import { Language } from '../types';
import { businessSolutionStages } from '../data/solutions';
import { translations } from '../data/translations';
import { SectionHeading } from '../components/ui/SectionHeading';
import { BusinessEcosystem } from '../components/ui/BusinessEcosystem';
import { ActionPrimaryButton } from '../components/ui/AnimatedButtons';
import { 
  Layers, 
  ArrowRight, 
  FileText, 
  ShieldCheck, 
  Server, 
  Laptop, 
  Network, 
  Lock, 
  HardDrive, 
  Headphones, 
  Briefcase, 
  Coins, 
  Cpu 
} from 'lucide-react';

interface SolutionsViewProps {
  lang: Language;
  onRequestQuote: () => void;
  onNavigateSellEquipment?: () => void;
}

export const SolutionsView: React.FC<SolutionsViewProps> = ({
  lang,
  onRequestQuote,
  onNavigateSellEquipment
}) => {
  const t = translations[lang];

  const getStageIcon = (iconName: string) => {
    switch (iconName) {
      case 'Laptop': return <Laptop className="w-4 h-4 text-[#0D7E73]" />;
      case 'Network': return <Network className="w-4 h-4 text-[#0D7E73]" />;
      case 'Server': return <Server className="w-4 h-4 text-[#0D7E73]" />;
      case 'ShieldCheck': return <Lock className="w-4 h-4 text-[#0D7E73]" />;
      case 'HardDrive': return <HardDrive className="w-4 h-4 text-[#0D7E73]" />;
      case 'Headphones': return <Headphones className="w-4 h-4 text-[#0D7E73]" />;
      default: return <Cpu className="w-4 h-4 text-[#0D7E73]" />;
    }
  };

  return (
    <div className="w-full bg-[#F0FDFA]/30 min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 rounded-full text-xs font-semibold bg-[#F0FDFA] text-[#042F2C] border border-[#CCFBF1]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0D7E73]"></span>
            <span>{lang === 'pt' ? 'Arquitetura IT Empresarial' : 'Integrated Business IT Ecosystem'}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#042F2C] mb-4">
            {lang === 'pt' ? (
              <>
                Soluções de TI Completas para o <span className="text-[#0D7E73]">Seu Negócio</span>
              </>
            ) : (
              <>
                Complete IT Solutions for <span className="text-[#0D7E73]">Your Business</span>
              </>
            )}
          </h1>
          <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">
            {t.businessSolutions.sub}
          </p>
        </div>

        {/* Interactive Connected Ecosystem */}
        <div className="mb-16">
          <BusinessEcosystem
            lang={lang}
            onExploreSolutions={onRequestQuote}
          />
        </div>

        {/* 6 Signature Pillar Cards: Crisp White Inside + Solid Dark Green Outside Backplate */}
        <div className="space-y-6 mb-20">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#042F2C] tracking-tight">
              {lang === 'pt' ? (
                <>
                  Os 6 Pilares da <span className="text-[#0D7E73]">Infraestrutura TI</span>
                </>
              ) : (
                <>
                  The 6 Pillars of <span className="text-[#0D7E73]">IT Infrastructure</span>
                </>
              )}
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] mt-1">
              {lang === 'pt' 
                ? 'Arquitetura modular desenhada, implementada e suportada pelo nosso laboratório na Trofa.'
                : 'Modular enterprise architecture engineered, deployed, and supported by our laboratory in Trofa.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 mb-10">
            {businessSolutionStages.map((stage) => {
              const brand = lang === 'pt' && stage.techBrandPt ? stage.techBrandPt : stage.techBrand;
              const underlay = lang === 'pt' && stage.underlayLabelPt ? stage.underlayLabelPt : stage.underlayLabel;
              const badge = lang === 'pt' && stage.badgePt ? stage.badgePt : stage.badge;
              const title = lang === 'pt' && stage.titlePt ? stage.titlePt : stage.title;
              const subtitle = lang === 'pt' && stage.subtitlePt ? stage.subtitlePt : stage.subtitle;
              const desc = lang === 'pt' && stage.descriptionPt ? stage.descriptionPt : stage.description;
              const tags = lang === 'pt' && stage.tagsPt ? stage.tagsPt : stage.tags;

              return (
                <div 
                  key={stage.id}
                  className="relative group h-full flex flex-col justify-end pt-2 pb-5"
                >
                  {/* Outer Backplate Underlay Slip in Solid Dark Green (#0D7E73) */}
                  <div className="absolute inset-x-2 bottom-0 h-16 bg-[#0D7E73] rounded-2xl transition-all duration-300 group-hover:inset-x-0 group-hover:h-24 group-hover:bottom-[-5px] shadow-sm flex items-end justify-center pb-2 overflow-hidden">
                    <span className="text-[10px] sm:text-[11px] font-extrabold tracking-widest text-[#CCFBF1] uppercase opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out select-none">
                      {underlay}
                    </span>
                  </div>

                  {/* Crisp White Foreground Card Body */}
                  <div className="relative bg-white rounded-2xl border border-[#CCFBF1] p-4 sm:p-5 shadow-xs hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2 z-10 flex flex-col justify-between h-full min-h-[200px] sm:min-h-[210px]">
                    
                    {/* Card Top: Logo/Brand & Spec Badge */}
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded-lg bg-[#F0FDFA] border border-[#CCFBF1] flex items-center justify-center shrink-0">
                            {getStageIcon(stage.iconName)}
                          </div>
                          <span className="text-xs font-bold text-[#042F2C]">
                            {brand}
                          </span>
                        </div>

                        <span className="text-[10px] font-bold text-[#0D7E73] bg-[#F0FDFA] px-2.5 py-0.5 rounded-full border border-[#CCFBF1]">
                          {badge}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-sm sm:text-base font-bold text-[#042F2C] group-hover:text-[#0D7E73] transition-colors leading-snug">
                        {title}
                      </h3>

                      {/* Spec Subtitle */}
                      <div className="text-[11px] font-semibold text-[#0D7E73] mt-0.5 mb-1.5">
                        {subtitle}
                      </div>

                      {/* Description */}
                      <p className="text-xs text-[#64748B] leading-relaxed">
                        {desc}
                      </p>
                    </div>

                    {/* Card Bottom: Rounded Uniform Tag Pills */}
                    <div className="mt-3.5 pt-2.5 border-t border-[#CCFBF1]/70 flex flex-wrap gap-1.5 items-center">
                      {tags.map((tag, tagIdx) => (
                        <span 
                          key={tagIdx}
                          className="px-2 py-0.5 rounded-md text-[9px] font-bold tracking-wide uppercase bg-[#F0FDFA] text-[#0D7E73] border border-[#CCFBF1]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Corporate Buyback & Asset Recovery Section */}
        {onNavigateSellEquipment && (
          <div className="bg-gradient-to-br from-[#F0FDFA] to-white rounded-2xl p-6 sm:p-8 border border-[#0D7E73]/20 shadow-xs mb-16 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="p-3.5 rounded-xl bg-[#0D7E73] text-white shrink-0 shadow-xs">
                <Briefcase className="w-6 h-6" />
              </div>
              <div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-[#CCFBF1] text-[#0D7E73] text-[11px] font-bold uppercase tracking-wider mb-2">
                  <Coins className="w-3 h-3" />
                  <span>{lang === 'pt' ? 'Valorização de Ativos' : 'Asset Recovery'}</span>
                </div>
                <h3 className="text-xl font-bold text-[#042F2C] mb-1">
                  {lang === 'pt' ? 'Tem Equipamento Antigo ou Frotas Para Retoma?' : 'Have Surplus Hardware or Fleets to Sell?'}
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] max-w-xl leading-relaxed">
                  {lang === 'pt'
                    ? 'Compramos frotas de computadores empresariais, servidores rack e equipamentos de rede com destruição certificada de dados NIST 800-88 e pagamento célere.'
                    : 'We purchase business laptops, enterprise servers, and networking gear with certified NIST 800-88 data sanitization and fast payment.'}
                </p>
              </div>
            </div>

            <ActionPrimaryButton
              type="button"
              onClick={onNavigateSellEquipment}
              size="md"
              className="shrink-0"
            >
              <span>{lang === 'pt' ? 'Vender Equipamento' : 'Sell Your Equipment'}</span>
            </ActionPrimaryButton>
          </div>
        )}

        {/* Request Architecture Scoping CTA */}
        <div className="bg-white text-[#042F2C] rounded-2xl p-8 sm:p-12 shadow-xs text-center max-w-4xl mx-auto border border-[#CCFBF1]">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">
            {lang === 'pt' ? (
              <>
                Planeie a Renovação da Sua <span className="text-[#0D7E73]">Infraestrutura</span>
              </>
            ) : (
              <>
                Plan Your Infrastructure <span className="text-[#0D7E73]">Upgrade</span>
              </>
            )}
          </h2>
          <p className="text-xs sm:text-sm text-[#64748B] max-w-xl mx-auto mb-8 leading-relaxed">
            {lang === 'pt'
              ? 'A nossa equipa técnica sediada na Trofa realiza um levantamento das necessidades da sua empresa e apresenta uma proposta chave-na-mão com equipamentos certificados e suporte dedicado.'
              : 'Our engineering team in Trofa audits your IT requirements and builds a complete turnkey solution with verified business hardware and dedicated support.'}
          </p>
          <ActionPrimaryButton
            onClick={onRequestQuote}
            size="lg"
          >
            <span>{t.nav.requestQuote}</span>
          </ActionPrimaryButton>
        </div>
      </div>
    </div>
  );
};
