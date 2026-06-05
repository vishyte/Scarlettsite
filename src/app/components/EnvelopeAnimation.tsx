import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface EnvelopeAnimationProps {
  onComplete: () => void;
}

export function EnvelopeAnimation({ onComplete }: EnvelopeAnimationProps) {
  const [step, setStep] = useState<'closed' | 'opening' | 'revealing' | 'complete'>('closed');

  useEffect(() => {
    if (step === 'opening') {
      const timer = setTimeout(() => {
        setStep('revealing');
      }, 1500);
      return () => clearTimeout(timer);
    }
    if (step === 'revealing') {
      const timer = setTimeout(() => {
        setStep('complete');
        onComplete();
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [step, onComplete]);

  const handleClick = () => {
    if (step === 'closed') {
      setStep('opening');
    }
  };

  return (
    <AnimatePresence>
      {step !== 'complete' && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div
            className="relative w-full max-w-md mx-4 cursor-pointer"
            onClick={handleClick}
          >
            {/* Envelope Body */}
            <motion.div
              className="relative"
              animate={{
                scale: step === 'revealing' ? 1.1 : 1,
              }}
              whileHover={step === 'closed' ? { scale: 1.05 } : {}}
              transition={{ duration: 0.5 }}
            >
              {/* Envelope Back */}
              <div className="relative bg-white rounded-lg shadow-2xl p-8 aspect-[3/2]">
                {/* Decorative Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <svg viewBox="0 0 100 100" className="w-full h-full" fill="currentColor">
                    <circle cx="20" cy="20" r="2" className="text-purple-400" />
                    <circle cx="40" cy="30" r="2" className="text-pink-400" />
                    <circle cx="60" cy="25" r="2" className="text-blue-400" />
                    <circle cx="80" cy="35" r="2" className="text-purple-400" />
                    <circle cx="30" cy="50" r="2" className="text-pink-400" />
                    <circle cx="70" cy="55" r="2" className="text-blue-400" />
                    <circle cx="25" cy="75" r="2" className="text-purple-400" />
                    <circle cx="50" cy="70" r="2" className="text-pink-400" />
                    <circle cx="75" cy="80" r="2" className="text-blue-400" />
                  </svg>
                </div>

                {/* Invitation Card Preview (shows when revealing) */}
                <AnimatePresence>
                  {step === 'revealing' && (
                    <motion.div
                      className="absolute inset-4 bg-gradient-to-br from-pink-50 to-purple-50 rounded-lg shadow-lg flex flex-col items-center justify-center p-6"
                      initial={{ y: 20, opacity: 0, scale: 0.8 }}
                      animate={{ y: -60, opacity: 1, scale: 1 }}
                      transition={{ duration: 1, ease: 'easeOut' }}
                    >
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                      >
                        <svg className="w-16 h-16 text-pink-300 mb-4 mx-auto" viewBox="0 0 100 100" fill="currentColor">
                          <ellipse cx="35" cy="45" rx="20" ry="30" transform="rotate(-20 35 45)" opacity="0.9" />
                          <ellipse cx="30" cy="50" rx="12" ry="18" transform="rotate(-20 30 50)" opacity="0.7" />
                          <ellipse cx="65" cy="45" rx="20" ry="30" transform="rotate(20 65 45)" opacity="0.9" />
                          <ellipse cx="70" cy="50" rx="12" ry="18" transform="rotate(20 70 50)" opacity="0.7" />
                          <ellipse cx="50" cy="50" rx="4" ry="15" fill="currentColor" opacity="1" />
                        </svg>
                        <p className="text-center text-purple-800 text-xl mb-2" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                          Scarlett Ember
                        </p>
                        <p className="text-center text-gray-600 text-sm" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                          Baptism Invitation
                        </p>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Envelope Flap */}
              <motion.div
                className="absolute top-0 left-0 right-0 origin-top"
                style={{
                  transformStyle: 'preserve-3d',
                }}
                animate={{
                  rotateX: step === 'closed' ? 0 : -180,
                }}
                transition={{
                  duration: 1.5,
                  ease: 'easeInOut',
                }}
              >
                <svg viewBox="0 0 400 200" className="w-full drop-shadow-lg">
                  {/* Flap Triangle */}
                  <defs>
                    <linearGradient id="flapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#f0abfc" />
                      <stop offset="50%" stopColor="#c4b5fd" />
                      <stop offset="100%" stopColor="#bfdbfe" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M 0 0 L 200 120 L 400 0 Z"
                    fill="url(#flapGradient)"
                    stroke="#d8b4fe"
                    strokeWidth="2"
                  />
                  {/* Decorative Seal */}
                  <circle cx="200" cy="60" r="20" fill="#f0abfc" opacity="0.8" />
                  <circle cx="200" cy="60" r="15" fill="#fdf4ff" opacity="0.9" />
                  <text
                    x="200"
                    y="67"
                    textAnchor="middle"
                    fill="#c084fc"
                    fontSize="14"
                    fontFamily="'Playfair Display', Georgia, serif"
                    fontWeight="600"
                  >
                    SE
                  </text>
                </svg>
              </motion.div>

              {/* Click instruction */}
              {step === 'closed' && (
                <motion.div
                  className="absolute -bottom-16 left-0 right-0 text-center"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <p
                    className="text-purple-700 text-lg mb-2"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    Click to Open
                  </p>
                  <motion.div
                    className="text-purple-400 text-2xl"
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    ↓
                  </motion.div>
                </motion.div>
              )}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
