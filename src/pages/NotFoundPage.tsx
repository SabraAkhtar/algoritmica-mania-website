import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { ArrowLeft, Home, Search, Laptop, ShieldCheck } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();
  const { lang, openSearchModal } = useApp();
  const isPt = lang === 'pt';

  return (
    <div className="w-full bg-[#F8FAFC] min-h-[75vh] flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl w-full text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F0FDFA] border border-[#CCFBF1] text-[#0D7E73] text-xs font-bold uppercase tracking-wider mb-6">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Error 404 • Page Not Found</span>
        </div>

        {/* 404 Number */}
        <h1 className="text-7xl sm:text-9xl font-black text-[#042F2C] tracking-tight mb-4">
          4<span className="text-[#0D7E73]">0</span>4
        </h1>

        {/* Heading */}
        <h2 className="text-xl sm:text-2xl font-extrabold text-[#0F172A] tracking-tight mb-3">
          {isPt ? 'Página Não Encontrada' : 'Page Not Found'}
        </h2>

        {/* Message */}
        <p className="text-sm sm:text-base text-slate-600 mb-8 max-w-md mx-auto leading-relaxed">
          {isPt 
            ? 'O link que tentou aceder pode ter sido alterado, movido ou já não está disponível no nosso catálogo.' 
            : 'The link you are trying to access might have been renamed, moved, or is temporarily unavailable.'}
        </p>

        {/* Actions Grid */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={() => navigate('/')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl text-xs sm:text-sm font-bold text-white bg-[#0D7E73] hover:bg-[#0F766E] transition-all cursor-pointer shadow-md hover:shadow-lg active:scale-95"
          >
            <Home className="w-4 h-4" />
            <span>{isPt ? 'Voltar à Página Inicial' : 'Back to Home'}</span>
          </button>

          <button
            onClick={() => navigate('/products')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl text-xs sm:text-sm font-bold text-[#042F2C] bg-white hover:bg-slate-50 border border-slate-200 hover:border-[#0D7E73] transition-all cursor-pointer shadow-xs"
          >
            <Laptop className="w-4 h-4 text-[#0D7E73]" />
            <span>{isPt ? 'Explorar Catálogo' : 'Explore Catalog'}</span>
          </button>

          <button
            onClick={openSearchModal}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-2xl text-xs sm:text-sm font-medium text-slate-600 bg-white hover:bg-slate-50 border border-slate-200 hover:border-slate-300 transition-all cursor-pointer shadow-xs"
          >
            <Search className="w-4 h-4 text-[#0D7E73]" />
            <span>{isPt ? 'Pesquisar' : 'Search'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
