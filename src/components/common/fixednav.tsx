'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function FixedNavBar({ className }: { className?: string }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      setIsVisible(scrollTop < 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='fixed top-5 z-30 hidden w-screen items-center justify-between px-20 md:flex'
    >
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: isVisible ? 0 : -100, opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.8 }}
      >
        <Image src={'/tenet.png'} alt='Tenet Logo' height={70} width={70} />
      </motion.div>
      <div className={cn('fixed inset-x-0 z-50 mx-auto max-w-fit', className)}>
        <div className='flex gap-6 rounded-xl bg-gray-200 px-6 py-4 text-black'>
          <Link href={'/'}>Home</Link>
          <span>|</span>
          <Link href={'/events/techfiesta'}>Techfiesta</Link>
          <span>|</span>
          <Link href={'/events/esports'}>E-Sports</Link>
          <span>|</span>
          <Link href={'/events/entrepreneurship'}>Entrepreneurship</Link>
        </div>
      </div>
      <motion.button
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: isVisible ? 0 : -100, opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.8 }}
        className='rounded-full bg-blue-950 px-5 py-2 text-white'
      >
        Register
      </motion.button>
    </motion.div>
  );
}
