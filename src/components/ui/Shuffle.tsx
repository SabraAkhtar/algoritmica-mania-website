import React, { useState, useEffect, useRef, useCallback } from 'react';

interface ShuffleProps {
  text: string;
  className?: string;
  speed?: number;          // ms per frame (default: 32ms)
  duration?: number;       // total animation duration in ms (default: 650ms)
  loopInterval?: number;   // repeat interval in ms (default: 4000ms = 4s)
  triggerOnHover?: boolean;
  autoLoop?: boolean;
}

// Character set closely matching the video's aesthetic
const UPPER_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const LOWER_CHARS = 'abcdefghijklmnopqrstuvwxyz';
const GLYPH_CHARS = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

export const Shuffle: React.FC<ShuffleProps> = ({
  text,
  className = '',
  speed = 32,
  duration = 650,
  loopInterval = 4000,
  triggerOnHover = true,
  autoLoop = true
}) => {
  const [displayText, setDisplayText] = useState(text);
  const isAnimatingRef = useRef(false);
  const timerRef = useRef<number | null>(null);
  const loopTimerRef = useRef<number | null>(null);
  const animationFrameRef = useRef<number | null>(null);

  // Core scramble algorithm reproducing the exact video glitch / matrix-decoding effect
  const scramble = useCallback(() => {
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;

    const originalChars = text.split('');
    const length = originalChars.length;
    const startTime = performance.now();

    const updateFrame = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Number of characters resolved to their final state based on linear-ease progress
      const resolvedCount = Math.floor(progress * length);

      const scrambled = originalChars.map((char, idx) => {
        // Preserve spaces and trailing punctuation like periods
        if (char === ' ' || char === '.' || char === '!' || char === '-' || char === '&' || char === '/') {
          return char;
        }

        // Once the resolver passes this character index, show the final correct letter
        if (idx < resolvedCount) {
          return originalChars[idx];
        }

        // Random character swap with probability biasing toward same casing
        if (char >= 'A' && char <= 'Z') {
          return UPPER_CHARS[Math.floor(Math.random() * UPPER_CHARS.length)];
        }
        if (char >= 'a' && char <= 'z') {
          // 85% lowercase, 15% uppercase for lively glitch like the video
          return Math.random() > 0.15 
            ? LOWER_CHARS[Math.floor(Math.random() * LOWER_CHARS.length)]
            : UPPER_CHARS[Math.floor(Math.random() * UPPER_CHARS.length)];
        }
        return GLYPH_CHARS[Math.floor(Math.random() * GLYPH_CHARS.length)];
      });

      setDisplayText(scrambled.join(''));

      if (progress < 1) {
        // Control framerate using speed delay
        timerRef.current = window.setTimeout(() => {
          animationFrameRef.current = requestAnimationFrame(updateFrame);
        }, speed);
      } else {
        // Complete - lock precisely to target text
        setDisplayText(text);
        isAnimatingRef.current = false;
      }
    };

    animationFrameRef.current = requestAnimationFrame(updateFrame);
  }, [text, speed, duration]);

  // Initial mount trigger & recurring periodic loop matching the video
  useEffect(() => {
    setDisplayText(text);

    // Initial play shortly after mount (300ms)
    const initialTimer = window.setTimeout(() => {
      scramble();
    }, 350);

    // Periodic auto-loop repeating every loopInterval (e.g. 4 seconds)
    let loopId: number | null = null;
    if (autoLoop && loopInterval > 0) {
      loopId = window.setInterval(() => {
        if (!isAnimatingRef.current && document.visibilityState === 'visible') {
          scramble();
        }
      }, loopInterval);
    }

    return () => {
      clearTimeout(initialTimer);
      if (loopId) clearInterval(loopId);
      if (timerRef.current) clearTimeout(timerRef.current);
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
      isAnimatingRef.current = false;
    };
  }, [text, scramble, autoLoop, loopInterval]);

  return (
    <span
      className={`inline-block select-none font-sans font-black tracking-tight text-[#042F2C] group-hover:text-[#0D7E73] transition-colors duration-200 ${className}`}
      style={{ fontVariantNumeric: 'tabular-nums' }}
      onMouseEnter={() => {
        if (triggerOnHover) scramble();
      }}
      onClick={() => {
        scramble();
      }}
    >
      {displayText}
    </span>
  );
};

export default Shuffle;
