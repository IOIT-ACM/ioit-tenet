'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useStore } from '@/store';
import { RegisterButton } from '../ui/registerbtn';

const transition = {
  type: 'spring',
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

const routes = [
  { path: '/events/techfiesta', name: 'Techfiesta' },
  { path: '/events/esports', name: 'E-Sports' },
  { path: '/events/mun', name: 'MUN' },
  { path: '/events/esummit', name: 'E-Summit' },
  { path: '/events/creators', name: 'Creators Conclave' },
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
      setIsVisible(currentScrollTop < 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollTop]);

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{
        y: scrollDirection === 'down' && !isVisible && videoPlayed ? -100 : 0,
        opacity: !videoPlayed ? 0 : 1,
      }}
      transition={{ duration: 0.3 }}
      className='fixed top-5 z-50 flex w-screen select-none items-center justify-between px-3 md:px-20'
    >
      {/* Logo link */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: isVisible ? 0 : -100, opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.8 }}
      >
        <Link
          className='h-10 w-10 cursor-pointer transition-all hover:scale-105 md:h-20 md:w-20'
          href={'/'}
        >
          <Image
            className='h-10 w-10 cursor-pointer transition-all hover:scale-105 md:h-20 md:w-20'
            src={'/tenet-fill.png'}
            alt='Tenet Logo'
            height={70}
            width={70}
          />
        </Link>
      </motion.div>

      {/* Menu */}
      <div
        className={cn(
          'inset-x-0 z-50 mx-auto hidden max-w-fit sm:fixed md:block',
          className,
        )}
      >
        <div className='relative flex gap-0 rounded-full border-2 border-gray-600 bg-gray-300 px-4 py-2 text-black'>
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
                    initial={{ scale: 0.7 }}
                    key='hoveredBackground'
                    layoutId='hoveredBackground'
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{
                      opacity: 0,
                      scale: 0.1,
                    }}
                    transition={{ type: 'spring', bounce: 0.3, duration: 0.6 }}
                    className='absolute inset-0 rounded-full bg-gray-100'
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

      {/* Register button */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: isVisible ? 0 : -100, opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.8 }}
      >
        <RegisterButton />
      </motion.div>
    </motion.div>
  );
}
