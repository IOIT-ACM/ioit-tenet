/* eslint-disable @typescript-eslint/no-unsafe-assignment */
'use client';

import { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useIsMobile } from '@/hooks/useismobile';

export const Navigation = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const componentRef = useRef<HTMLDivElement>(null);
  const scrollAnimationRef = useRef<number | null>(null);
  const isMobile = useIsMobile();

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!componentRef.current) return;

    const rect = componentRef.current.getBoundingClientRect();
    const y = event.clientY - rect.top;
    const index = Math.floor((y / rect.height) * 49);
    setHoveredIndex(index);

    const normalizedY = y / rect.height;
    const scrollSpeed = (0.5 - normalizedY) * 60;

    if (scrollAnimationRef.current) {
      cancelAnimationFrame(scrollAnimationRef.current);
    }

    const smoothScroll = () => {
      window.scrollBy(0, scrollSpeed);
      scrollAnimationRef.current = requestAnimationFrame(smoothScroll);
    };

    scrollAnimationRef.current = requestAnimationFrame(smoothScroll);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
    if (scrollAnimationRef.current) {
      cancelAnimationFrame(scrollAnimationRef.current);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop =
        window.scrollY || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      const isWithinTopBoundary = currentScrollTop > 2000;
      const isWithinBottomBoundary =
        currentScrollTop < documentHeight - windowHeight - 4000;

      setIsVisible(isWithinTopBoundary && isWithinBottomBoundary);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollAnimationRef.current) {
        cancelAnimationFrame(scrollAnimationRef.current);
      }
    };
  }, []);

  if (!isMobile) {
    return (
      <>
        <motion.div className='fixed right-0 top-0 z-50 hidden h-screen md:flex'>
          <AnimatePresence>
            <motion.div
              ref={componentRef}
              className='fixed right-0 top-0 z-[9999999999] hidden h-screen flex-col items-end justify-center py-4 md:flex'
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              initial={{ width: '0px' }}
              animate={{ width: isVisible ? '88px' : '0px' }}
              exit={{ width: '0px' }}
              transition={{
                type: 'spring',
                stiffness: 300,
                damping: 30,
                duration: 1.5,
              }}
            >
              <div className='flex h-full w-1/3 flex-col items-end justify-between'>
                {[...Array(49)].map((_, index) => {
                  const distance =
                    hoveredIndex !== null
                      ? Math.abs(index - hoveredIndex)
                      : Infinity;
                  const isAffected = distance <= 5;
                  const widthScale = isAffected ? 2 - distance * 0.2 : 1;

                  return (
                    <motion.div
                      key={index}
                      className={`h-0.5 bg-gray-400 ${index % 8 === 0 ? 'w-full' : 'ml-auto w-1/2'}`}
                      animate={{
                        scaleX: widthScale,
                        backgroundColor: isAffected ? '#3B82F6' : '#9CA3AF',
                      }}
                      transition={{ duration: 0.3 }}
                      style={{ originX: 1 }}
                    />
                  );
                })}
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </>
    );
  }
};
