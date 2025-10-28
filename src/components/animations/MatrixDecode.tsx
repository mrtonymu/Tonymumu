'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface MatrixDecodeProps {
  isActive: boolean;
  onComplete: () => void;
  clickCount: number;
}

const matrixChars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
const typingMessages = [
  'scanning user activity...',
  'decryption in progress...',
  'system breach detected.'
];

const punchlines = [
  'Decrypting identity…\n99% match found: certified handsome developer 😏',
  'System log: curiosity detected.\nDon\'t worry — happens a lot. 😌',
  'Alright, you got me. Let\'s talk project instead. 😅'
];

export default function MatrixDecode({ isActive, onComplete, clickCount }: MatrixDecodeProps) {
  const [currentMessage, setCurrentMessage] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [showPunchline, setShowPunchline] = useState(false);
  const [matrixRain, setMatrixRain] = useState<string[]>([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);

  // Matrix rain effect
  useEffect(() => {
    if (!isActive) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const columns = Math.floor(canvas.width / 20);
    const drops: number[] = new Array(columns).fill(1);

    const drawMatrix = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#0F4';
      ctx.font = '15px monospace';

      for (let i = 0; i < drops.length; i++) {
        const text = matrixChars[Math.floor(Math.random() * matrixChars.length)];
        ctx.fillText(text, i * 20, drops[i] * 20);

        if (drops[i] * 20 > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const animate = () => {
      drawMatrix();
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isActive]);

  // Typing animation
  useEffect(() => {
    if (!isActive || showPunchline) return;

    const message = typingMessages[currentMessage];
    let index = 0;
    setCurrentText('');

    const typeInterval = setInterval(() => {
      if (index < message.length) {
        setCurrentText(message.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          if (currentMessage < typingMessages.length - 1) {
            setCurrentMessage(prev => prev + 1);
          } else {
            setShowPunchline(true);
          }
        }, 500);
      }
    }, 80);

    return () => clearInterval(typeInterval);
  }, [isActive, currentMessage, showPunchline]);

  // Auto complete after punchline
  useEffect(() => {
    if (showPunchline) {
      const timer = setTimeout(() => {
        onComplete();
      }, clickCount === 3 ? 3000 : 2500);
      return () => clearTimeout(timer);
    }
  }, [showPunchline, onComplete, clickCount]);

  if (!isActive) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
      >
        {/* Matrix Rain Canvas */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
          style={{ imageRendering: 'pixelated' }}
        />

        {/* Content Overlay */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center space-y-8 max-w-2xl mx-auto px-4">
            {/* Typing Messages */}
            {!showPunchline && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-4"
              >
                <div className="text-green-400 font-mono text-lg">
                  <span className="text-green-300">&gt;</span> {currentText}
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity }}
                    className="ml-1"
                  >
                    |
                  </motion.span>
                </div>
              </motion.div>
            )}

            {/* Punchline */}
            {showPunchline && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-black/60 backdrop-blur-sm rounded-lg p-8 border border-green-400/30"
              >
                <div className="text-white font-mono text-lg leading-relaxed">
                  {punchlines[Math.min(clickCount - 1, punchlines.length - 1)].split('\n').map((line, index) => (
                    <div key={index} className="mb-2">
                      {line}
                    </div>
                  ))}
                </div>
                
                {/* CTA for 3rd click */}
                {clickCount >= 3 && (
                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    onClick={() => {
                      const element = document.querySelector('#start-project');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                      onComplete();
                    }}
                    className="mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                  >
                    Start Your Project →
                  </motion.button>
                )}
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
