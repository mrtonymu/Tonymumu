'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Code, Clock, ArrowRight } from 'lucide-react';

interface EasterEggModalProps {
  isOpen: boolean;
  onClose: () => void;
  projectTitle: string;
}

export default function EasterEggModal({ isOpen, onClose, projectTitle }: EasterEggModalProps) {
  const scrollToWorkProcess = () => {
    const element = document.querySelector('#work-process');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    onClose();
  };

  const scrollToStartProject = () => {
    const element = document.querySelector('#start-project');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-4 h-4 text-gray-600" />
            </button>

            {/* Content */}
            <div className="text-center space-y-6">
              {/* Emoji and Title */}
              <div className="space-y-2">
                <div className="text-4xl">😅</div>
                <h3 className="text-xl font-bold text-gray-900">Oops — this project is private.</h3>
              </div>

              {/* Main Message */}
              <div className="space-y-3 text-gray-600">
                <p className="text-sm leading-relaxed">
                  Some of my best work happens quietly behind NDAs and client walls.
                </p>
                <p className="text-sm leading-relaxed">
                  But I can tell you how I built it — the stack, the workflow, the lessons.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button
                  onClick={scrollToStartProject}
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                >
                  <Code className="w-4 h-4" />
                  Start Your Project Here
                </button>
                
                <button
                  onClick={scrollToWorkProcess}
                  className="w-full bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
                >
                  <ArrowRight className="w-4 h-4" />
                  See My Work Process
                </button>
              </div>

              {/* Fun Note */}
              <div className="pt-4 border-t border-gray-200">
                <p className="text-xs text-gray-500 flex items-center justify-center gap-1">
                  <Clock className="w-3 h-3" />
                  3 AM debugging included, free of charge 😆
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
