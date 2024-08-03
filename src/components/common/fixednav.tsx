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
  { path: '/techfiesta', name: 'Techfiesta' },
  { path: '/esports', name: 'E-Sports' },
  { path: '/entrepreneurship', name: 'Entrepreneurship' },
  { path: '/esummit', name: 'ESummit' },
  { path: '/creators', name: 'Creators Conclave' },
];

export default function FixedNavBar({ className }: { className?: string }) {
  const videoPlayed = useStore((state) => state.videoPlayed);
  const [isVisible, setIsVisible] = useState(true);
  const [hovering, setHovering] = useState<null | string>(null);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('up');

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop =
        window.scrollY || document.documentElement.scrollTop;

      if (currentScrollTop > lastScrollTop) {
        setScrollDirection('down');
      } else {
        setScrollDirection('up');
      }

      setLastScrollTop(currentScrollTop);
      setIsVisible(currentScrollTop < 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollTop]);

  return (
    <motion.div
      initial={{ y: -100, opacity: !videoPlayed ? 0 : 1 }}
      animate={{
        y: scrollDirection === 'down' && !isVisible ? -100 : 0,
        opacity: !videoPlayed ? 0 : 1,
      }}
      transition={{ duration: 0.3 }}
      className='fixed top-5 z-30 flex w-screen items-center justify-between px-3 md:px-20'
    >
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: isVisible ? 0 : -100, opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.8 }}
      >
        <Image
          className='h-10 w-10 cursor-cell transition-all hover:scale-105 md:h-20 md:w-20'
          src={'/tenet.png'}
          alt='Tenet Logo'
          height={70}
          width={70}
        />
      </motion.div>
      <div
        className={cn(
          'inset-x-0 z-50 mx-auto hidden max-w-fit sm:fixed md:block',
          className,
        )}
      >
        <div className='relative flex gap-0 rounded-xl border border-black bg-gray-200 px-6 py-3 text-black'>
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
