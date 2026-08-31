import React, { useRef, useEffect } from 'react';
import { motion, useAnimationControls } from 'motion/react';
import './AnimatedLogo.css';

export interface AnimatedLogoProps {
  variant?: 'header' | 'footer' | 'drawer' | 'default';
  trigger?: 'hover' | 'click' | 'view' | 'load' | 'manual';
  href?: string;
  className?: string;
  onClick?: () => void;
  showSubtitle?: boolean;
  isDark?: boolean;
}

// Exact letters of the official Algoritmica brand wordmark
const BRAND_LETTERS = ['A', 'l', 'g', 'o', 'r', 'i', 't', 'm', 'i', 'c', 'a', '.'];

export const AnimatedLogo: React.FC<AnimatedLogoProps> = ({
  variant = 'header',
  trigger = 'hover',
  href = '/',
  className = '',
  onClick,
  showSubtitle = true,
  isDark = false,
}) => {
  const isFooter = variant === 'footer' || isDark;
  const isDrawer = variant === 'drawer';

  // Animation controls for individual letters and emblem
  const letterControls = useAnimationControls();
  const iconControls = useAnimationControls();
  const isAnimating = useRef(false);

  /**
   * Precision Brand Motion System:
   * 1. 90ms initial pause upon hover.
   * 2. A subtle 2.5% optical wave flows across the letters from left to right.
   * 3. Zero rotation, zero skew, zero distortion, zero wobble, 100% crystal-clear readability.
   * 4. Perfectly returns to resting state and stops (no continuous loop).
   */
  const playAnimation = async () => {
    if (isAnimating.current) return;
    isAnimating.current = true;

    try {
      await Promise.all([
        letterControls.start('wave'),
        iconControls.start('pulse'),
      ]);
      await Promise.all([
        letterControls.start('rest'),
        iconControls.start('rest'),
      ]);
    } catch {
      // Ignore if unmounted during playback
    } finally {
      isAnimating.current = false;
    }
  };

  useEffect(() => {
    if (trigger === 'load') {
      const timeout = setTimeout(() => {
        playAnimation();
      }, 400);
      return () => clearTimeout(timeout);
    }
  }, [trigger]);

  const handleInteraction = (e?: React.MouseEvent) => {
    if (trigger === 'click' && e) {
      if (onClick) {
        e.preventDefault();
        onClick();
      }
      playAnimation();
      return;
    }

    if (trigger === 'hover' || trigger === 'manual') {
      playAnimation();
    }

    if (onClick && e) {
      onClick();
    }
  };

  const handleTouchStart = () => {
    playAnimation();
  };

  // Dimensions & typography strictly matching the official brand identity
  const iconSize = isFooter 
    ? 'w-10 h-10' 
    : isDrawer 
    ? 'w-8.5 h-8.5' 
    : 'w-9 h-9 sm:w-10 sm:h-10';

  const titleSize = isFooter
    ? 'text-base font-black tracking-tight text-white'
    : isDrawer
    ? 'text-sm font-black tracking-tight text-[#042F2C]'
    : 'text-base sm:text-lg lg:text-xl font-black tracking-tight text-[#042F2C]';

  const subtitleSize = isFooter
    ? 'text-[10px] font-bold text-[#5EEAD4] tracking-wider uppercase'
    : isDrawer
    ? 'text-[8.5px] font-bold text-[#0D7E73] uppercase tracking-wider'
    : 'text-[8px] sm:text-[9.5px] tracking-widest uppercase font-semibold text-[#64748B] hidden xs:block sm:block';

  return (
    <div
      className={`animated-logo-root animated-logo--${variant} ${className} cursor-pointer group select-none`}
      onMouseEnter={trigger === 'hover' ? () => handleInteraction() : undefined}
      onClick={handleInteraction}
      onTouchStart={handleTouchStart}
      role="banner"
      aria-label="Algoritmica"
      id={`algoritmica-animated-logo-${variant}`}
    >
      <div className="animated-logo-container">
        {/* Brand Icon Emblem */}
        <motion.div
          className={`rounded-xl shrink-0 flex items-center justify-center shadow-xs transition-colors duration-300 logo-icon-emblem ${iconSize} ${
            isFooter
              ? 'bg-gradient-to-br from-[#0D7E73] to-[#14B8A6] text-white border border-[#5EEAD4]/40 shadow-md'
              : 'bg-[#0D7E73] group-hover:bg-[#0B6A61] text-white'
          }`}
          variants={{
            rest: {
              scale: 1,
              transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
            },
            pulse: {
              scale: [1, 1.022, 1],
              transition: {
                duration: 0.55,
                delay: 0.08,
                ease: [0.16, 1, 0.3, 1],
              },
            },
          }}
          initial="rest"
          animate={iconControls}
        >
          <div className="flex flex-col items-center justify-center leading-none">
            <span className={`font-mono font-black tracking-tighter ${isDrawer ? 'text-xs' : 'text-xs sm:text-sm'}`}>
              AL
            </span>
            <span className={`font-mono font-bold ${
              isFooter ? 'text-[#5EEAD4] text-[8px]' : isDrawer ? 'text-[#2DD4BF] text-[7.5px]' : 'text-[#2DD4BF] text-[8px] sm:text-[9px]'
            }`}>
              IT
            </span>
          </div>
        </motion.div>

        {/* Brand Typography & Subtitle */}
        <div className="flex flex-col min-w-0">
          <div className={`leading-tight flex items-baseline truncate ${titleSize}`}>
            {BRAND_LETTERS.map((char, idx) => {
              const isPeriod = char === '.';
              // Wave delay: 90ms initial rest, followed by 32ms stagger per letter
              const letterDelay = 0.09 + idx * 0.032;

              return (
                <motion.span
                  key={idx}
                  className={`logo-precision-letter inline-block ${
                    isPeriod
                      ? isFooter
                        ? 'text-[#5EEAD4]'
                        : 'text-[#0D7E73]'
                      : isFooter
                      ? 'text-white group-hover:text-[#5EEAD4] transition-colors duration-200'
                      : 'text-[#042F2C] group-hover:text-[#0D7E73] transition-colors duration-200'
                  }`}
                  variants={{
                    rest: {
                      scale: 1,
                      y: 0,
                      opacity: 1,
                      transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] },
                    },
                    wave: {
                      scale: isPeriod ? [1, 1.06, 1] : [1, 1.026, 1],
                      y: [0, -0.4, 0],
                      transition: {
                        duration: 0.5,
                        ease: [0.16, 1, 0.3, 1],
                        delay: letterDelay,
                      },
                    },
                  }}
                  initial="rest"
                  animate={letterControls}
                >
                  {char}
                </motion.span>
              );
            })}
          </div>

          {showSubtitle && (
            <span className={`truncate ${subtitleSize}`}>
              ENTERPRISE HARDWARE & IT
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default AnimatedLogo;
