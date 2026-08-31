import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

export interface PrimaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  icon?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  glow?: boolean;
}

/**
 * Premium Global Primary Button with Continuous Smooth Glide & Staggered Final Color Transition
 * - 100% Zero-CLS: Rigid width calculation with zero compression or resizing before/during/after hover
 * - Continuous Arrow Glide: Single element travels smoothly across the button to the extreme right edge (400ms)
 * - Exact Right Alignment: Arrow reaches the exact right position matching the left inset padding
 * - Final State Transition: Only AFTER the arrow finishes moving to the right does the button background turn White (#FFFFFF), text turn Dark Green, and arrow seamlessly align
 * - Reversible Choreography: On hover out, background returns to Dark Green, text returns to White, and arrow glides smoothly back to the left
 * - 60 FPS GPU Acceleration: pure translate3d / opacity
 */
export const ActionPrimaryButton: React.FC<PrimaryButtonProps> = ({
  children,
  icon,
  size = 'md',
  className = '',
  glow = true,
  disabled = false,
  onMouseEnter,
  onMouseLeave,
  onTouchStart,
  onTouchEnd,
  onFocus,
  onBlur,
  ...props
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);
  const [travelDistance, setTravelDistance] = useState(0);

  // Geometric specifications per size for mathematical perfection
  const config = {
    sm: {
      btnClasses: 'min-h-[36px] text-xs py-1.5',
      paddingLeft: 34,  // inset(5px) + circle(22px) + gap(7px)
      paddingRight: 34,
      circleSize: 22,
      inset: 5,
      iconClass: 'w-3 h-3',
      textOffset: 2,
    },
    md: {
      btnClasses: 'min-h-[42px] sm:min-h-[44px] text-xs sm:text-sm py-2 sm:py-2.5',
      paddingLeft: 42,  // inset(6px) + circle(28px) + gap(8px)
      paddingRight: 42,
      circleSize: 28,
      inset: 6,
      iconClass: 'w-3.5 h-3.5 sm:w-4 sm:h-4',
      textOffset: 3,
    },
    lg: {
      btnClasses: 'min-h-[48px] sm:min-h-[52px] text-sm sm:text-base py-2.5 sm:py-3',
      paddingLeft: 50,  // inset(7px) + circle(34px) + gap(9px)
      paddingRight: 50,
      circleSize: 34,
      inset: 7,
      iconClass: 'w-4 h-4 sm:w-4.5 sm:h-4.5',
      textOffset: 4,
    },
  }[size];

  // Mathematically calculate the exact glide distance to the right edge
  const updateDistance = useCallback(() => {
    if (btnRef.current) {
      const btnWidth = btnRef.current.offsetWidth;
      // Exact travel distance = Total button width - Circle diameter - (2 * edge inset)
      const dist = btnWidth - config.circleSize - (2 * config.inset);
      setTravelDistance(Math.max(0, dist));
    }
  }, [config.circleSize, config.inset]);

  useEffect(() => {
    updateDistance();

    if (typeof ResizeObserver !== 'undefined' && btnRef.current) {
      const observer = new ResizeObserver(() => {
        updateDistance();
      });
      observer.observe(btnRef.current);
      return () => observer.disconnect();
    }
  }, [updateDistance, children]);

  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!disabled) {
      updateDistance();
      setIsHovered(true);
    }
    if (onMouseEnter) onMouseEnter(e);
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!disabled) {
      setIsHovered(false);
    }
    if (onMouseLeave) onMouseLeave(e);
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLButtonElement>) => {
    if (!disabled) {
      updateDistance();
      setIsHovered(true);
    }
    if (onTouchStart) onTouchStart(e);
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLButtonElement>) => {
    if (!disabled) {
      setIsHovered(false);
    }
    if (onTouchEnd) onTouchEnd(e);
  };

  const handleFocus = (e: React.FocusEvent<HTMLButtonElement>) => {
    if (!disabled) {
      updateDistance();
      setIsHovered(true);
    }
    if (onFocus) onFocus(e);
  };

  const handleBlur = (e: React.FocusEvent<HTMLButtonElement>) => {
    if (!disabled) {
      setIsHovered(false);
    }
    if (onBlur) onBlur(e);
  };

  const glowShadow = glow
    ? isHovered
      ? 'shadow-[0_6px_24px_rgba(13,126,115,0.32)]'
      : 'shadow-[0_4px_14px_rgba(13,126,115,0.22)]'
    : 'shadow-xs hover:shadow-md';

  return (
    <button
      ref={btnRef}
      disabled={disabled}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onFocus={handleFocus}
      onBlur={handleBlur}
      style={{
        paddingLeft: `${config.paddingLeft}px`,
        paddingRight: `${config.paddingRight}px`,
        ...props.style,
      }}
      className={`relative inline-flex items-center justify-center rounded-full bg-[#0D7E73] text-white border-2 border-[#0D7E73] ${glowShadow} font-bold cursor-pointer group select-none active:scale-[0.98] overflow-hidden box-border whitespace-nowrap ${config.btnClasses} ${disabled ? 'opacity-60 cursor-not-allowed' : ''} ${className}`}
      {...props}
    >
      {/* 
        1. FINAL HOVER WHITE BACKGROUND OVERLAY (#FFFFFF)
        Crucial: Only fades in AFTER the arrow finishes its 400ms journey to the right edge!
        On hover out: Fades out in 180ms so the dark green returns before/as arrow returns.
      */}
      <span
        style={{
          opacity: isHovered ? 1 : 0,
          transition: isHovered
            ? 'opacity 250ms ease-out 380ms'
            : 'opacity 180ms ease-in 0ms',
        }}
        className="absolute inset-0 bg-white z-0 pointer-events-none rounded-full"
        aria-hidden="true"
      />

      {/* 
        2. THE GLIDING WHITE CIRCLE WITH DARK GREEN ARROW
        - Glides continuously from left to right across the button (400ms cubic-bezier).
        - On arrival at extreme right, blends seamlessly with the white background while keeping the dark green arrow crisp.
        - On hover out: After 100ms color reversal, glides smoothly back to the left (380ms).
      */}
      <span
        style={{
          width: `${config.circleSize}px`,
          height: `${config.circleSize}px`,
          left: `${config.inset}px`,
          top: '50%',
          transform: isHovered && travelDistance > 0
            ? `translate3d(${travelDistance}px, -50%, 0)`
            : 'translate3d(0, -50%, 0)',
          transition: isHovered
            ? 'transform 400ms cubic-bezier(0.22, 1, 0.36, 1) 0ms'
            : 'transform 380ms cubic-bezier(0.22, 1, 0.36, 1) 100ms',
        }}
        className="absolute z-20 rounded-full bg-white flex items-center justify-center shrink-0 shadow-xs pointer-events-none will-change-transform"
        aria-hidden="true"
      >
        <span 
          style={{
            transform: isHovered ? 'translateX(1px)' : 'translateX(0)',
            transition: 'transform 300ms ease-out',
          }}
          className="flex items-center justify-center text-[#0D7E73]"
        >
          {icon || <ArrowRight className={`${config.iconClass} stroke-[2.5] text-[#0D7E73]`} />}
        </span>
      </span>

      {/* 
        3. NATURAL SIZING WRAPPER (Invisible Anchor)
        Guarantees the button maintains 100% FIXED width with ZERO resize/shift
      */}
      <span className="invisible pointer-events-none font-bold whitespace-nowrap select-none">
        {children}
      </span>

      {/* 
        4. INITIAL UNHOVERED TEXT (White Text on Dark Green Background)
        Visible initially next to left circle. Fades out smoothly when hover starts.
      */}
      <span
        style={{
          opacity: isHovered ? 0 : 1,
          transform: isHovered ? 'translate3d(4px, -50%, 0)' : 'translate3d(0, -50%, 0)',
          transition: isHovered
            ? 'opacity 130ms ease-in, transform 130ms ease-in'
            : 'opacity 200ms ease-out 250ms, transform 200ms ease-out 250ms',
        }}
        className="absolute top-1/2 left-0 right-0 flex items-center justify-center pointer-events-none font-bold text-white whitespace-nowrap will-change-transform px-4 z-10"
        aria-hidden={isHovered ? 'true' : 'false'}
      >
        {children}
      </span>

      {/* 
        5. FINAL HOVERED TEXT (Brand Dark Green Text on White Background)
        Only reveals / fades in AFTER the arrow finishes its glide to the right!
        Text color is brand dark green (#042F2C / #0D7E73).
      */}
      <span
        style={{
          opacity: isHovered ? 1 : 0,
          transform: isHovered ? 'translate3d(0, -50%, 0)' : 'translate3d(-4px, -50%, 0)',
          transition: isHovered
            ? 'opacity 240ms ease-out 380ms, transform 240ms ease-out 380ms'
            : 'opacity 120ms ease-in 0ms, transform 120ms ease-in 0ms',
        }}
        className="absolute top-1/2 left-0 right-0 flex items-center justify-center pointer-events-none font-black text-[#042F2C] whitespace-nowrap will-change-transform px-4 z-10"
        aria-hidden={!isHovered ? 'true' : 'false'}
      >
        {children}
      </span>
    </button>
  );
};

export interface SecondaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  showArrow?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  isLightBg?: boolean;
}

/**
 * Standard Global Secondary Button:
 * - Transparent background
 * - Dark text / clean border / refined underline style
 * - On hover: Subtle text slide / underline animation
 */
export const ActionSecondaryButton: React.FC<SecondaryButtonProps> = ({
  children,
  showArrow = true,
  size = 'md',
  className = '',
  isLightBg = true,
  ...props
}) => {
  const sizeClasses = {
    sm: 'text-xs py-1.5 px-3 rounded-lg',
    md: 'text-xs sm:text-sm py-2.5 px-4 rounded-xl',
    lg: 'text-sm sm:text-base py-3 px-5 rounded-xl'
  };

  return (
    <button
      {...props}
      className={`relative inline-flex items-center justify-center gap-2 font-bold transition-all duration-300 cursor-pointer group select-none border border-transparent hover:border-[#CCFBF1] hover:bg-[#F0FDFA]/70 ${
        isLightBg
          ? 'text-[#042F2C] hover:text-[#0D7E73]'
          : 'text-slate-200 hover:text-white'
      } ${sizeClasses[size]} ${className}`}
    >
      {/* Label Text with Subtle Slide Animation on Hover */}
      <span className="relative z-10 whitespace-nowrap transition-transform duration-300 ease-out group-hover:translate-x-0.5">
        {children}
      </span>

      {/* Rotating / Sliding Arrow */}
      {showArrow && (
        <span className="relative z-10 flex items-center justify-center transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:-translate-y-0.5 shrink-0 text-[#0D7E73]">
          <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
        </span>
      )}

      {/* Animated Clean Underline */}
      <span
        className={`absolute bottom-1 left-3 right-3 h-[1.5px] rounded-full transition-all duration-300 ease-out origin-left scale-x-0 group-hover:scale-x-100 ${
          isLightBg
            ? 'bg-[#0D7E73]'
            : 'bg-[#5EEAD4]'
        }`}
      />
    </button>
  );
};

export default ActionPrimaryButton;
