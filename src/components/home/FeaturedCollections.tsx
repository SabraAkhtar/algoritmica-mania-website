import React from 'react';
import { Language } from '../../types';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { AnimatedArrowRight } from '../ui/AnimatedArrow';

interface FeaturedCollectionsProps {
  lang: Language;
  onNavigateProducts: (category?: any) => void;
}

export const FeaturedCollections: React.FC<FeaturedCollectionsProps> = ({
  lang,
  onNavigateProducts
}) => {
  return (
    <div className="w-full my-12 sm:my-16">
      {/* Header matching reference image */}
      <motion.div 
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="flex items-center justify-between mb-6"
      >
        <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#042F2C]">
          {lang === 'pt' ? (
            <>
              Coleções em <span className="text-[#0D7E73]">Destaque</span>
            </>
          ) : (
            <>
              Featured <span className="text-[#0D7E73]">Collections</span>
            </>
          )}
        </h2>
        <button
          onClick={() => onNavigateProducts()}
          className="group inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#0D7E73] hover:text-[#0B6A61] transition-colors cursor-pointer"
        >
          <span>{lang === 'pt' ? 'Ver Todas as Coleções' : 'View All Collections'}</span>
          <AnimatedArrowRight className="w-4 h-4 text-[#0D7E73]" animateLoop={true} />
        </button>
      </motion.div>

      {/* 2-Column Duo Banner Cards matching reference image */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Banner 1: Tech Essentials */}
        <div 
          onClick={() => onNavigateProducts('used-refurbished')}
          className="relative rounded-2xl bg-[#F0FDFA] border border-[#CCFBF1] p-6 sm:p-8 flex items-center justify-between overflow-hidden group cursor-pointer hover:shadow-md transition-all duration-300"
        >
          <div className="max-w-[55%] z-10">
            <h3 className="text-lg sm:text-xl font-extrabold text-[#042F2C] mb-1 group-hover:text-[#0D7E73] transition-colors">
              {lang === 'pt' ? 'Essenciais de Tecnologia' : 'Tech Essentials'}
            </h3>
            <p className="text-xs text-[#64748B] mb-5">
              {lang === 'pt' ? 'Hardware inteligente para o posto de trabalho moderno' : 'Smart tech for modern workplace & mobility'}
            </p>
            <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#14B8A6] to-[#0D9488] group-hover:from-[#0B4A42] group-hover:to-[#0B4A42] group-hover:bg-[#0B4A42] shadow-2xs transition-all duration-300">
              <span>{lang === 'pt' ? 'Explorar Coleção' : 'Shop Collection'}</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </span>
          </div>

          <div className="w-36 sm:w-44 h-32 sm:h-36 shrink-0 relative flex items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=400&q=80"
              alt="Tech Essentials"
              className="w-full h-full object-cover rounded-xl shadow-xs group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Banner 2: Executive Mobility / Travel Collection */}
        <div 
          onClick={() => onNavigateProducts('apple')}
          className="relative rounded-2xl bg-[#F0FDFA] border border-[#CCFBF1] p-6 sm:p-8 flex items-center justify-between overflow-hidden group cursor-pointer hover:shadow-md transition-all duration-300"
        >
          <div className="max-w-[55%] z-10">
            <h3 className="text-lg sm:text-xl font-extrabold text-[#042F2C] mb-1 group-hover:text-[#0D7E73] transition-colors">
              {lang === 'pt' ? 'Mobilidade Executiva' : 'Executive Mobility'}
            </h3>
            <p className="text-xs text-[#64748B] mb-5">
              {lang === 'pt' ? 'Criado para alta produtividade em qualquer lugar' : 'Built for high performance anywhere you work'}
            </p>
            <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#14B8A6] to-[#0D9488] group-hover:from-[#0B4A42] group-hover:to-[#0B4A42] group-hover:bg-[#0B4A42] shadow-2xs transition-all duration-300">
              <span>{lang === 'pt' ? 'Explorar Coleção' : 'Shop Collection'}</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </span>
          </div>

          <div className="w-36 sm:w-44 h-32 sm:h-36 shrink-0 relative flex items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80"
              alt="Executive Mobility"
              className="w-full h-full object-cover rounded-xl shadow-xs group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
