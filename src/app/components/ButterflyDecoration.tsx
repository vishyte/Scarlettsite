import { motion } from 'motion/react';

interface ButterflyDecorationProps {
  className?: string;
  delay?: number;
}

export function ButterflyDecoration({ className = '', delay = 0 }: ButterflyDecorationProps) {
  return (
    <motion.svg
      className={className}
      viewBox="0 0 100 100"
      fill="currentColor"
      animate={{
        y: [0, -10, 0],
        x: [0, 5, 0],
        rotate: [0, 5, 0],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay,
      }}
    >
      {/* Left Wing */}
      <ellipse cx="35" cy="45" rx="20" ry="30" transform="rotate(-20 35 45)" opacity="0.9" />
      <ellipse cx="30" cy="50" rx="12" ry="18" transform="rotate(-20 30 50)" opacity="0.7" />

      {/* Right Wing */}
      <ellipse cx="65" cy="45" rx="20" ry="30" transform="rotate(20 65 45)" opacity="0.9" />
      <ellipse cx="70" cy="50" rx="12" ry="18" transform="rotate(20 70 50)" opacity="0.7" />

      {/* Body */}
      <ellipse cx="50" cy="50" rx="4" ry="15" fill="currentColor" opacity="1" />

      {/* Antennae */}
      <path
        d="M 48 38 Q 45 32 44 28"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M 52 38 Q 55 32 56 28"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />
      <circle cx="44" cy="28" r="2" fill="currentColor" />
      <circle cx="56" cy="28" r="2" fill="currentColor" />
    </motion.svg>
  );
}
