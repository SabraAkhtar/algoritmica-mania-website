import React from 'react';

interface GeometricMotifProps {
  className?: string;
  variant?: 'squares-and-dots' | 'squares-only' | 'dots-only';
  size?: 'sm' | 'md' | 'lg';
}

export const GeometricMotif: React.FC<GeometricMotifProps> = ({
  className = '',
  variant = 'squares-and-dots',
  size = 'md'
}) => {
  const squareSize = size === 'sm' ? 'w-2 h-2' : size === 'lg' ? 'w-3 h-3' : 'w-2.5 h-2.5';
  const dotSize = size === 'sm' ? 'w-1 h-1' : size === 'lg' ? 'w-2 h-2' : 'w-1.5 h-1.5';
  const gap = size === 'sm' ? 'gap-1' : 'gap-1.5';

  return (
    <div className={`pointer-events-none select-none flex items-center gap-3 ${className}`}>
      {/* 4-Square Motif (2x2 Grid) */}
      {(variant === 'squares-and-dots' || variant === 'squares-only') && (
        <div className={`grid grid-cols-2 ${gap}`}>
          <div className={`${squareSize} rounded-[2px] bg-[#0D7E73]`} />
          <div className={`${squareSize} rounded-[2px] bg-[#99F6E4]`} />
          <div className={`${squareSize} rounded-[2px] bg-[#14B8A6]`} />
          <div className={`${squareSize} rounded-[2px] bg-[#042F2C]`} />
        </div>
      )}

      {/* Dotted Geometric Matrix (3x3) */}
      {(variant === 'squares-and-dots' || variant === 'dots-only') && (
        <div className={`grid grid-cols-3 ${gap} opacity-40`}>
          {[...Array(9)].map((_, i) => (
            <div key={i} className={`${dotSize} rounded-full bg-[#0D7E73]`} />
          ))}
        </div>
      )}
    </div>
  );
};

export default GeometricMotif;
