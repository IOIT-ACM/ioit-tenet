'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { GiTimeTrap } from 'react-icons/gi';
import { useIsMobile } from '@/hooks/useismobile';

export const Landing = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='flex min-h-screen flex-col items-center justify-center gap-4'>
      <motion.span
        className='text-6xl font-bold md:text-9xl'
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        IOIT <span className='text-[hsl(280,100%,70%)]'>TENET</span> 2024
      </motion.span>
      <motion.span
        className={`fixed flex cursor-pointer items-center justify-center gap-4 rounded-full bg-gray-500 px-8 py-4 text-xl font-bold text-white transition-all duration-500 md:text-3xl`}
        initial={{ opacity: 0, bottom: 300 }}
        animate={{
          opacity: 1,
          bottom: isScrolled ? (isMobile ? 10 : 20) : isMobile ? 200 : 300,
        }}
        transition={{ duration: 0.5 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <GiTimeTrap />
        {(!isScrolled || isHovered) && (
          <span className={`transition-opacity duration-500`}>Agenda</span>
        )}
      </motion.span>
    </div>
  );
};
