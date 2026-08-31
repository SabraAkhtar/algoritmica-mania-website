import React from 'react';
import { motion } from 'motion/react';

interface AnimatedArrowRightProps {
  className?: string;
  size?: number;
  isHovered?: boolean;
  animateLoop?: boolean;
}

export const AnimatedArrowRight: React.FC<AnimatedArrowRightProps> = ({
  className = "w-4 h-4",
  size = 16,
  isHovered = false,
  animateLoop = false
}) => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`inline-block shrink-0 ${className}`}
      initial={false}
      animate={
        animateLoop
          ? { x: [0, 4, 0] }
          : isHovered
          ? { x: 3 }
          : { x: 0 }
      }
      transition={
        animateLoop
          ? { repeat: Infinity, duration: 1.5, ease: "easeInOut" }
          : { type: "spring", stiffness: 400, damping: 25 }
      }
    >
      {/* Horizontal Stem of Arrow with Animated Length */}
      <motion.path
        d="M5 12h14"
        initial={{ pathLength: 1 }}
        animate={
          isHovered
            ? { pathLength: [0.8, 1], opacity: 1 }
            : { pathLength: 1, opacity: 0.95 }
        }
        transition={{ duration: 0.3 }}
      />
      {/* Arrow Head / Chevron */}
      <motion.path
        d="M12 5l7 7-7 7"
        initial={{ x: 0 }}
        animate={
          isHovered
            ? { x: [0, 2, 0] }
            : { x: 0 }
        }
        transition={{ duration: 0.35, ease: "easeOut" }}
      />
    </motion.svg>
  );
};
