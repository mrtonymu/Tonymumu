'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import dynamic from 'next/dynamic';

// 动态导入 VoxelDog 组件，带错误边界
const VoxelDog = dynamic(() => import('./VoxelDog/voxel-dog'), {
  loading: () => (
    <div className="flex items-center justify-center h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
    </div>
  ),
  ssr: false
});

interface PreloaderProps {
  onComplete?: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [canSkip, setCanSkip] = useState(false);
  const [loadingComplete, setLoadingComplete] = useState(false);

  const skipLoading = () => {
    setIsLoading(false);
    setTimeout(() => {
      setShowContent(true);
      onComplete?.();
    }, 200);
  };

  const enterPortfolio = () => {
    setIsLoading(false);
    setTimeout(() => {
      setShowContent(true);
      onComplete?.();
    }, 200);
  };

  useEffect(() => {
    // 键盘事件监听
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.code === 'Space' && (canSkip || loadingComplete)) {
        event.preventDefault();
        if (loadingComplete) {
          enterPortfolio();
        } else {
          skipLoading();
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [canSkip, loadingComplete, skipLoading, enterPortfolio]);

  useEffect(() => {
    // 2秒后允许跳过
    const skipTimer = setTimeout(() => {
      setCanSkip(true);
    }, 2000);

    // 模拟加载进度
    const progressInterval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 90) return prev;
        return prev + Math.random() * 15;
      });
    }, 200);

    // 模拟加载时间，但添加错误检测
    const timer = setTimeout(() => {
      clearInterval(progressInterval);
      clearTimeout(skipTimer);
      setLoadingProgress(100);
      
      // 检查 WebGL 支持
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      
      if (!gl) {
        setHasError(true);
        console.warn('WebGL not supported, using fallback');
      }
      
      // 加载完成，但不自动进入主页面
      setLoadingComplete(true);
    }, 3000);

    return () => {
      clearTimeout(timer);
      clearTimeout(skipTimer);
      clearInterval(progressInterval);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-100 flex items-center justify-center"
        >
          <div className="text-center">
            {!hasError ? (
              <VoxelDog />
            ) : (
              // 降级方案：简单的动画狗
              <div className="flex items-center justify-center h-64 w-64 mx-auto">
                <motion.div
                  animate={{ 
                    rotate: 360,
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    rotate: { duration: 2, repeat: Infinity, ease: "linear" },
                    scale: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
                  }}
                  className="text-6xl"
                >
                  🐕
                </motion.div>
              </div>
            )}
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-8"
            >
              <h2 className="text-2xl font-bold text-gray-700 mb-2">
                Tony Mumu
              </h2>
              <p className="text-gray-600 mb-4">
                Full-Stack Developer & Tech Consultant
              </p>
              <div className="mt-4">
                <div className="w-64 bg-gray-200 rounded-full h-2 mx-auto">
                  <motion.div
                    className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${loadingProgress}%` }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  {Math.round(loadingProgress)}% loaded
                </p>
                
                {/* 跳过按钮 */}
                {canSkip && !loadingComplete && (
                  <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 }}
                    onClick={skipLoading}
                    className="mt-4 px-4 py-2 text-sm text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-all duration-200"
                  >
                    Skip (Press Space)
                  </motion.button>
                )}

                {/* 进入主页按钮 */}
                {loadingComplete && (
                  <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                    onClick={enterPortfolio}
                    className="mt-6 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
                  >
                    Enter Portfolio
                  </motion.button>
                )}
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
