import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';

const MotionBox = motion.div;

export const DogSpinner = () => (
  <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
    <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600"></div>
  </div>
);

interface DogContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export const DogContainer = forwardRef<HTMLDivElement, DogContainerProps>(
  ({ children, className = '', ...props }, ref) => (
    <div
      ref={ref}
      className={`voxel-dog mx-auto mt-[-10px] sm:mt-[-40px] md:mt-[-80px] lg:mt-[-120px] mb-[-20px] sm:mb-[-80px] md:mb-[-120px] lg:mb-[-200px] w-[200px] sm:w-[280px] md:w-[480px] lg:w-[640px] h-[200px] sm:h-[280px] md:h-[480px] lg:h-[640px] max-w-[90vw] max-h-[50vh] relative transition-all duration-300 ease-in-out ${className}`}
      {...props}
    >
      {children}
    </div>
  )
);

export const DogSkeleton = () => {
  return (
    <DogContainer>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 flex flex-col items-center justify-center gap-2">
        {/* Main body skeleton */}
        <MotionBox
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.6, 0.8, 0.6],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <div className="h-[120px] w-[100px] bg-gray-200 rounded-[20px] animate-pulse"></div>
        </MotionBox>

        {/* Head skeleton */}
        <MotionBox
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.7, 0.9, 0.7],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0.2,
          }}
          className="mt-[-20px]"
        >
          <div className="h-[60px] w-[60px] bg-gray-200 rounded-full animate-pulse"></div>
        </MotionBox>

        {/* Legs skeleton */}
        <div className="flex gap-2 mt-[-10px]">
          {[...Array(4)].map((_, i) => (
            <MotionBox
              key={i}
              animate={{
                scaleY: [1, 0.8, 1],
                opacity: [0.5, 0.7, 0.5],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.1,
              }}
            >
              <div className="h-[30px] w-[12px] bg-gray-200 rounded-[6px] animate-pulse"></div>
            </MotionBox>
          ))}
        </div>
      </div>
    </DogContainer>
  );
};

const Loader = () => {
  return (
    <DogContainer>
      <DogSpinner />
    </DogContainer>
  );
};

export default Loader;