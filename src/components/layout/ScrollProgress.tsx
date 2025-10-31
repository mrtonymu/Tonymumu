'use client';

import { useState, useEffect } from 'react';

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(1, Math.max(0, scrollTop / docHeight));
      setScrollProgress(progress);
    };

    // Optimized scroll handling with requestAnimationFrame
    let rafId: number | null = null;
    const handleScroll = () => {
      if (rafId === null) {
        rafId = requestAnimationFrame(() => {
          updateScrollProgress();
          rafId = null;
        });
      }
    };

    // Initial calculation
    updateScrollProgress();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
    };
  }, []);

  // Don't render if at top of page
  if (scrollProgress === 0) return null;

  return (
    <div className="fixed top-0 left-0 right-0 h-1 z-50 overflow-hidden">
      {/* Background track */}
      <div className="absolute inset-0 bg-gray-200/30" />
      
      {/* Progress bar with gradient */}
      <div
        className="h-full origin-left transition-transform duration-150 ease-out"
        style={{
          transform: `scaleX(${scrollProgress})`,
          transformOrigin: 'left',
          willChange: 'transform',
        }}
      >
        <div className="h-full w-full bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 relative">
          {/* Subtle glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400/50 to-purple-400/50 blur-sm" />
          {/* Shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
        </div>
      </div>
    </div>
  );
}
