'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { GiTimeTrap } from 'react-icons/gi';

export const Landing = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
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
        className={`fixed flex items-center justify-center gap-4 rounded-full bg-gray-500 px-8 py-4 text-3xl font-bold text-white transition-all duration-500`}
        initial={{ opacity: 0, y: 50, bottom: 300 }}
        animate={{ opacity: 1, y: 0, bottom: isScrolled ? 20 : 300 }}
        transition={{ duration: 0.5 }}
      >
        <GiTimeTrap />
        Agenda
      </motion.span>
    </div>
  );
};
