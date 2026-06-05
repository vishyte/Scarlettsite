import { motion } from 'motion/react';

interface RunningKidReverseProps {
  delay?: number;
}

export function RunningKidReverse({ delay = 0 }: RunningKidReverseProps) {
  return (
    <motion.div
      className="absolute top-1/3 w-full"
      initial={{ x: 'calc(100% + 100px)' }}
      animate={{
        x: ['calc(100% + 100px)', 'calc(80% + 50px)', 'calc(50%)', 'calc(20% - 50px)', 'calc(0% - 100px)'],
        opacity: [1, 1, 0, 1, 1],
        scale: [1, 1, 0.8, 1, 1],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: 'linear',
        repeatDelay: 4,
        delay: delay,
        times: [0, 0.25, 0.5, 0.75, 1],
      }}
    >
      <svg
        width="80"
        height="80"
        viewBox="0 0 100 100"
        fill="none"
        className="drop-shadow-lg"
        style={{ transform: 'scaleX(-1)' }}
      >
        {/* Running Kid (mirrored) */}
        <motion.g
          animate={{
            y: [0, -3, 0, -3, 0],
          }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          {/* Head */}
          <circle cx="50" cy="30" r="12" fill="#f3c6a5" />

          {/* Hair */}
          <ellipse cx="50" cy="22" rx="13" ry="8" fill="#8B4513" />

          {/* Body */}
          <ellipse cx="50" cy="50" rx="10" ry="15" fill="#f0abfc" />

          {/* Left Arm */}
          <motion.line
            x1="50"
            y1="42"
            x2="38"
            y2="48"
            stroke="#f3c6a5"
            strokeWidth="4"
            strokeLinecap="round"
            animate={{
              rotate: [0, 30, 0, -30, 0],
            }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{ originX: '50px', originY: '42px' }}
          />

          {/* Right Arm */}
          <motion.line
            x1="50"
            y1="42"
            x2="62"
            y2="48"
            stroke="#f3c6a5"
            strokeWidth="4"
            strokeLinecap="round"
            animate={{
              rotate: [0, -30, 0, 30, 0],
            }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{ originX: '50px', originY: '42px' }}
          />

          {/* Left Leg */}
          <motion.g
            animate={{
              rotate: [0, 40, 0, -20, 0],
            }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{ originX: '50px', originY: '62px' }}
          >
            <line
              x1="50"
              y1="62"
              x2="45"
              y2="78"
              stroke="#f3c6a5"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <circle cx="45" cy="80" r="4" fill="#8B4513" />
          </motion.g>

          {/* Right Leg */}
          <motion.g
            animate={{
              rotate: [0, -20, 0, 40, 0],
            }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{ originX: '50px', originY: '62px' }}
          >
            <line
              x1="50"
              y1="62"
              x2="55"
              y2="78"
              stroke="#f3c6a5"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <circle cx="55" cy="80" r="4" fill="#8B4513" />
          </motion.g>

          {/* Eyes */}
          <circle cx="46" cy="28" r="1.5" fill="#000" />
          <circle cx="54" cy="28" r="1.5" fill="#000" />

          {/* Smile */}
          <path
            d="M 46 34 Q 50 36 54 34"
            stroke="#000"
            strokeWidth="1"
            fill="none"
            strokeLinecap="round"
          />
        </motion.g>

        {/* Motion Lines (mirrored direction) */}
        <motion.g
          opacity={0.3}
          animate={{
            x: [5, 10, 5],
          }}
          transition={{
            duration: 0.3,
            repeat: Infinity,
          }}
        >
          <line x1="65" y1="40" x2="75" y2="40" stroke="#9333ea" strokeWidth="2" strokeLinecap="round" />
          <line x1="70" y1="50" x2="80" y2="50" stroke="#ec4899" strokeWidth="2" strokeLinecap="round" />
          <line x1="65" y1="60" x2="75" y2="60" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" />
        </motion.g>
      </svg>
    </motion.div>
  );
}
