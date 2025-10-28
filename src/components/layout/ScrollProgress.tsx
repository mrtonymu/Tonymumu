'use client';

import { useState, useEffect } from 'react';

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollTop / docHeight;
      setScrollProgress(progress);
    };

    // Throttle scroll events for better performance
    let ticking = false;
    const throttledUpdateScrollProgress = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateScrollProgress();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledUpdateScrollProgress, { passive: true });
    return () => window.removeEventListener('scroll', throttledUpdateScrollProgress);
  }, []);

  return (
    <div 
            className="fixed top-0 left-0 right-0 h-1 bg-blue-400 origin-left z-60 transition-transform duration-200 ease-out"
      style={{ 
        transform: `scaleX(${scrollProgress})`,
        transformOrigin: 'left'
      }}
    />
  );
}
