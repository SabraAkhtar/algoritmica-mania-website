import React, { useState } from 'react';
import { Language } from '../types';
import { companyData } from '../data/company';
import { ArrowLeft, ShieldCheck, Lock, FileText, CheckCircle2 } from 'lucide-react';

interface LegalViewProps {
  initialSection?: 'privacy' | 'cookies' | 'terms';
  lang: Language;
  onBack: () => void;
}

export const LegalView: React.FC<LegalViewProps> = ({
  initialSection = 'privacy',
  lang,
  onBack
}) => {
  const [activeTab, setActiveTab] = useState<'privacy' | 'cookies' | 'terms'>(initialSection);

  return (
    <div className="w-full bg-[#F5F8FA] min-h-screen py-10 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-xs font-bold text-[#183B56] hover:text-[#2A9D8F] mb-8 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{lang === 'pt' ? 'Voltar à Página Principal' : 'Back to Home'}</span>
        </button>

        {/* Tab Navigation */}
        <div className="flex gap-2 p-1.5 bg-white rounded-xl border border-[#DDE5EA] mb-8 shadow-xs">
          <button
            onClick={() => setActiveTab('privacy')}
            className={`flex-1 py-2.5 px-4 rounded-lg text-xs font-bold transition-all ${
              activeTab === 'privacy' ? 'bg-[#183B56] text-white shadow-xs' : 'text-[#667085] hover:text-[#183B56]'
            }`}
          >
            {lang === 'pt' ? 'Política de Privacidade (RGPD)' : 'Privacy Policy (GDPR)'}
          </button>
          <button
            onClick={() => setActiveTab('cookies')}
            className={`flex-1 py-2.5 px-4 rounded-lg text-xs font-bold transition-all ${
              activeTab === 'cookies' ? 'bg-[#183B56] text-white shadow-xs' : 'text-[#667085] hover:text-[#183B56]'
            }`}
          >
            {lang === 'pt' ? 'Política de Cookies' : 'Cookie Policy'}
          </button>
          <button
            onClick={() => setActiveTab('terms')}
            className={`flex-1 py-2.5 px-4 rounded-lg text-xs font-bold transition-all ${
              activeTab === 'terms' ? 'bg-[#183B56] text-white shadow-xs' : 'text-[#667085] hover:text-[#183B56]'
            }`}
          >
            {lang === 'pt' ? 'Termos e Condições de Garantia' : 'Terms & Warranty Conditions'}
          </button>
        </div>

        {/* Content Box */}
        <div className="bg-white rounded-2xl border border-[#DDE5EA] p-6 sm:p-10 shadow-xs text-xs sm:text-sm text-[#1F2933] space-y-6 leading-relaxed">
          {activeTab === 'privacy' && (
            <>
              <h1 className="text-xl sm:text-2xl font-extrabold text-[#183B56]">
                {lang === 'pt' ? 'Política de Privacidade e Proteção de Dados' : 'Privacy & Data Protection Policy'}
              </h1>
              <p className="text-[#667085]">
                {lang === 'pt'
                  ? 'A ALGoritmica MANIA, com sede em Rua da Indústria 142, Trofa, Portugal, compromete-se a proteger a privacidade dos utilizadores em total conformidade com o Regulamento Geral sobre a Proteção de Dados (RGPD) da União Europeia.'
                  : 'ALGoritmica MANIA, based at Rua da Indústria 142, Trofa, Portugal, is committed to safeguarding user data in strict compliance with the EU General Data Protection Regulation (GDPR).'}
              </p>

              <h3 className="text-base font-bold text-[#183B56] pt-2">
                {lang === 'pt' ? '1. Dados Recolhidos e Finalidade' : '1. Collected Data & Purpose'}
              </h3>
              <p>
                {lang === 'pt'
                  ? 'Os dados pessoais recolhidos através dos formulários de cotação e contacto (nome, email, telefone, nome da empresa) destinam-se exclusivamente à resposta a pedidos comerciais, propostas técnicas de equipamento e faturação.'
                  : 'Personal data submitted via quote and inquiry forms (name, email, phone, company name) is solely used to process equipment purchase orders, technical proposals, and billing.'}
              </p>

              <h3 className="text-base font-bold text-[#183B56] pt-2">
                {lang === 'pt' ? '2. Eliminação Segura de Dados (NIST SP 800-88)' : '2. Secure Data Eradication (NIST SP 800-88)'}
              </h3>
              <p>
                {lang === 'pt'
                  ? 'No âmbito do serviço de retoma e recondicionamento de hardware, a ALGoritmica MANIA executa sanitização criptográfica obrigatória de todos os suportes de armazenamento de acordo com as normas NIST SP 800-88, emitindo certificados formais de destruição de dados.'
                  : 'In our asset recovery and refurbishment programs, ALGoritmica MANIA executes mandatory cryptographic sanitization of all storage drives conforming to NIST SP 800-88, generating formal proof of erasure certificates.'}
              </p>

              <h3 className="text-base font-bold text-[#183B56] pt-2">
                {lang === 'pt' ? '3. Direitos do Titular dos Dados' : '3. Data Subject Rights'}
              </h3>
              <p>
                {lang === 'pt'
                  ? 'O titular dos dados tem o direito de aceder, retificar, limitar ou solicitar o apagamento dos seus dados pessoais a qualquer momento, mediante contacto para info@algoritmica-mania.pt.'
                  : 'You retain the right to access, rectify, restrict, or request the deletion of your personal data at any time by contacting info@algoritmica-mania.pt.'}
              </p>
            </>
          )}

          {activeTab === 'cookies' && (
            <>
              <h1 className="text-xl sm:text-2xl font-extrabold text-[#183B56]">
                {lang === 'pt' ? 'Política de Cookies' : 'Cookie Policy'}
              </h1>
              <p className="text-[#667085]">
                {lang === 'pt'
                  ? 'Este website utiliza apenas cookies técnicos estritamente necessários para o correto funcionamento da plataforma (gestão de sessão, seleção de idioma e preferências de navegação).'
                  : 'This website utilizes only strictly necessary technical cookies to enable platform operation, language persistence, and essential session states.'}
              </p>

              <h3 className="text-base font-bold text-[#183B56] pt-2">
                {lang === 'pt' ? 'Cookies Utilizados' : 'Utilized Cookies'}
              </h3>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>lang_pref:</strong> {lang === 'pt' ? 'Guarda o idioma selecionado (EN / PT).' : 'Stores selected interface language (EN / PT).'}</li>
                <li><strong>session_token:</strong> {lang === 'pt' ? 'Garante a segurança e integridade do formulário de cotação.' : 'Secures quote form submissions.'}</li>
              </ul>
            </>
          )}

          {activeTab === 'terms' && (
            <>
              <h1 className="text-xl sm:text-2xl font-extrabold text-[#183B56]">
                {lang === 'pt' ? 'Termos de Venda e Condições de Garantia de 12 Meses' : 'Terms of Sale & 12-Month Hardware Warranty'}
              </h1>
              <p className="text-[#667085]">
                {lang === 'pt'
                  ? 'Todos os equipamentos informáticos comercializados pela ALGoritmica MANIA são rigorosamente testados em laboratório na Trofa e cobertos por garantia técnica direta.'
                  : 'All IT hardware distributed by ALGoritmica MANIA undergoes multi-stage laboratory testing in Trofa and is covered by our certified technical warranty.'}
              </p>

              <h3 className="text-base font-bold text-[#183B56] pt-2">
                {lang === 'pt' ? '1. Extensão da Garantia de 12 Meses' : '1. Scope of 12-Month Warranty'}
              </h3>
              <p>
                {lang === 'pt'
                  ? 'A garantia cobre quaisquer anomalias funcionais de hardware (placa-mãe, CPU, memória RAM, fontes de alimentação, unidades de armazenamento, portas de rede e ecrãs). Excluem-se danos por mau uso, quebras físicas por impacto ou intervenções de terceiros não autorizadas.'
                  : 'The warranty covers all functional hardware defects (motherboards, CPUs, RAM, power supplies, storage drives, network interfaces, and displays). Damage caused by liquid ingress, physical drops, or unauthorized third-party tampering is excluded.'}
              </p>

              <h3 className="text-base font-bold text-[#183B56] pt-2">
                {lang === 'pt' ? '2. Procedimento de Substituição / Reparação Rápida' : '2. Rapid Repair or Replacement SLA'}
              </h3>
              <p>
                {lang === 'pt'
                  ? 'Em caso de anomalia, o equipamento é reparado no nosso laboratório na Trofa ou substituído por unidade equivalente em prazo prioritário para minimizar a inatividade da sua empresa.'
                  : 'In the event of hardware failure, the unit is serviced at our Trofa facility or swapped with an equivalent verified unit under priority SLA to minimize enterprise downtime.'}
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
