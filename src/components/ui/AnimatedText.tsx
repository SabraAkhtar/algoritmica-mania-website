import React from 'react';
import { motion } from 'motion/react';

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  highlightWord?: string;
  highlightClass?: string;
}

export const AnimatedHeadingText: React.FC<AnimatedTextProps> = ({
  text,
  className = '',
  delay = 0,
  highlightWord,
  highlightClass = 'text-[#0D7E73]'
}) => {
  const words = text.split(' ');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
        delayChildren: delay,
      }
    }
  };

  const wordVariants = {
    hidden: { 
      opacity: 0, 
      y: 18,
      filter: 'blur(4px)',
      rotateX: 20
    },
    visible: { 
      opacity: 1, 
      y: 0,
      filter: 'blur(0px)',
      rotateX: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <motion.span
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      className={`inline-flex flex-wrap items-baseline gap-x-[0.3em] ${className}`}
    >
      {words.map((word, index) => {
        const isHighlight = highlightWord && word.toLowerCase().includes(highlightWord.toLowerCase());
        return (
          <motion.span
            key={`${word}-${index}`}
            variants={wordVariants}
            className={`inline-block will-change-transform ${isHighlight ? highlightClass : ''}`}
          >
            {word}
          </motion.span>
        );
      })}
    </motion.span>
  );
};
