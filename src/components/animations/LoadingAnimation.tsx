'use client';

import { motion } from 'framer-motion';

interface LoadingAnimationProps {
  isVisible: boolean;
}

export default function LoadingAnimation({ isVisible }: LoadingAnimationProps) {
  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 flex items-center justify-center"
    >
      <div className="bg-white rounded-2xl p-8 shadow-2xl">
        <div className="flex flex-col items-center space-y-4">
          {/* Spinning Code Icon */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center"
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="text-blue-600 text-xl"
            >
              💻
            </motion.div>
          </motion.div>

          {/* Loading Text */}
          <div className="text-center space-y-2">
            <motion.p
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-gray-700 font-medium"
            >
              Loading project details...
            </motion.p>
            <motion.p
              animate={{ opacity: [0.3, 0.7, 0.3] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
              className="text-xs text-gray-500"
            >
              Decrypting client secrets 🔐
            </motion.p>
          </div>

          {/* Progress Dots */}
          <div className="flex space-x-2">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                animate={{ scale: [1, 1.5, 1] }}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
                className="w-2 h-2 bg-blue-500 rounded-full"
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
