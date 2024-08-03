'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useStore } from '@/store';

const transition = {
  type: 'spring',
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

const routes = [
  { path: '/', name: 'Home' },
  { path: '/events/techfiesta', name: 'Techfiesta' },
  { path: '/events/esports', name: 'E-Sports' },
  { path: '/events/entrepreneurship', name: 'Entrepreneurship' },
];

export default function FixedNavBar({ className }: { className?: string }) {
  const videoPlayed = useStore((state) => state.videoPlayed);
  const [isVisible, setIsVisible] = useState(true);
  const [hovering, setHovering] = useState<null | string>(null);

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
      initial={{ y: -100, opacity: !videoPlayed ? 0 : 1 }}
      animate={{ y: videoPlayed ? 0 : -100, opacity: !videoPlayed ? 0 : 1 }}
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
        <div className='relative flex gap-0 rounded-xl bg-gray-200 px-6 py-3 text-black'>
          {routes.map((route) => (
            <motion.div
              key={route.path}
              className='relative cursor-pointer rounded-xl px-4 py-2'
              onMouseEnter={() => {
                setHovering(route.path);
              }}
              onMouseLeave={() => {
                setHovering(null);
              }}
              transition={transition}
            >
              <Link href={route.path}>
                {route.path === hovering && (
                  <motion.div
                    key='hoveredBackground'
                    layoutId='hoveredBackground'
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{
                      opacity: 0,
                      scale: 0,
                    }}
                    transition={{ type: 'spring', bounce: 0.3, duration: 0.6 }}
                    className='absolute inset-0 rounded-full bg-gray-300'
                  />
                )}
                <span className={`relative block text-black`}>
                  {route.name}
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
      <motion.button
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: isVisible ? 0 : -100, opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.8 }}
      >
        <Link
          className='rounded-full bg-blue-950 px-5 py-3 text-white transition-all hover:bg-blue-700'
          href={'/register'}
        >
          Register
        </Link>
      </motion.button>
    </motion.div>
  );
}
