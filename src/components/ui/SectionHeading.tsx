import React from 'react';
import { motion } from 'motion/react';
import { AnimatedHeadingText } from './AnimatedText';

interface SectionHeadingProps {
  id?: string;
  badge?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  id,
  badge,
  title,
  subtitle,
  align = 'center',
  className = ''
}) => {
  const isCenter = align === 'center';

  return (
    <motion.div 
      id={id}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`mb-6 sm:mb-8 ${isCenter ? 'text-center mx-auto max-w-3xl' : 'max-w-3xl'} ${className}`}
    >
      {badge && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className={`inline-flex items-center gap-2 px-3.5 py-1.5 mb-3 rounded-full text-xs font-bold tracking-wide bg-[#CCFBF1]/60 text-[#0D7E73] border border-[#99F6E4] shadow-2xs ${isCenter ? 'mx-auto' : ''}`}
        >
          <span className="w-2 h-2 rounded-full bg-[#0D7E73] animate-ping" />
          <span>{badge}</span>
        </motion.div>
      )}
      
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#042F2C] leading-[1.25] text-balance">
        <AnimatedHeadingText text={title} delay={0.1} />
      </h2>

      {subtitle && (
        <motion.p 
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-2.5 text-sm sm:text-base text-[#334155] leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
};
