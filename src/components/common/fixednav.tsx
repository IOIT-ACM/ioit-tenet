'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function FixedNavBar({ className }: { className?: string }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      setIsVisible(scrollTop < 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      className='fixed top-5 z-30 hidden w-screen items-center justify-between px-20 md:flex'
    >
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: isVisible ? 0 : -100, opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <Image src={'/tenet.png'} alt='Tenet Logo' height={80} width={80} />
      </motion.div>
      <div className={cn('fixed inset-x-0 z-50 mx-auto max-w-fit', className)}>
        <div className='flex gap-6 rounded-xl bg-gray-200 p-4 px-6 text-black'>
          <h1>Home</h1>
          <span>|</span>
          <h1>Techfiesta</h1>
          <span>|</span>
          <h1>E-Sports</h1>
          <span>|</span>
          <h1>Entrepreneurship</h1>
        </div>
      </div>
      <motion.button
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: isVisible ? 0 : -100, opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className='rounded-full bg-blue-950 px-5 py-2 text-white'
      >
        Register
      </motion.button>
    </motion.div>
  );
}
