'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { RegisterButton } from '../ui/registerbtn';
import { TfiMenu } from 'react-icons/tfi';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';
import { useIsMobile } from '@/hooks/useismobile';
import Link from 'next/link';
import { MusicBtn } from './musicplayer';
import { usePathname } from 'next/navigation';

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
  { path: '/mun', name: 'MUN' },
  { path: '/esummit', name: 'E-Summit' },
  { path: '/creators', name: 'Creators Conclave' },
];

export default function FixedNavBar({ className }: { className?: string }) {
  const [isVisible, setIsVisible] = useState(true);
  const [hovering, setHovering] = useState<null | string>(null);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('up');
  const isMobile = useIsMobile();
  const pathname = usePathname();

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
        y: isMobile ? 0 : scrollDirection === 'down' && !isVisible ? -100 : 0,
        opacity: 1,
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
          className='h-16 w-16 cursor-pointer transition-all hover:scale-105 md:h-20 md:w-20'
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
        <div className='relative flex gap-0 rounded-full border-2 border-slate-600 bg-slate-300 p-2 text-black'>
          {routes.map((route) => (
            <motion.div
              key={route.path}
              className='relative cursor-pointer rounded-xl'
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
                    className='absolute inset-0 rounded-full bg-slate-100'
                  />
                )}
                {pathname === route.path && (
                  <motion.div
                    initial={{ scale: 0.7 }}
                    key='activepathname'
                    layoutId='activepathname'
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{
                      opacity: 0,
                      scale: 0.1,
                    }}
                    transition={{ type: 'spring', bounce: 0.2, duration: 1 }}
                    className='animate-gradient-x absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-400'
                  />
                )}
                <span className={`relative block px-4 py-2 text-black`}>
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
        animate={{
          y: isMobile ? 0 : scrollDirection === 'down' && !isVisible ? -100 : 0,
          opacity: isMobile ? 1 : isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.8 }}
      >
        <RegisterButton />

        <div className='sm:hidden'>
          <Sheet>
            <SheetTrigger>
              <TfiMenu color='gray' size={32} />
            </SheetTrigger>
            <SheetContent className='z-[999999999999999] flex h-full w-screen items-center justify-center border-none bg-black/75'>
              <div className='relative flex h-full w-full items-center justify-center'>
                <motion.svg
                  width='189'
                  height='227'
                  viewBox='0 0 189 227'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  className='absolute inset-0 h-full w-full opacity-20'
                >
                  <motion.path
                    d='M167.5 55H124L81.5 188H19L3 225.5H176.5L186 188H125.5L167.5 55Z'
                    stroke='#D3D3D3'
                    strokeWidth='3'
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 3.3 }}
                  />
                  <motion.path
                    d='M3.5 39.5L13.5 2H186.5L169.5 39.5H107.5L64.5 172.5H21.5L64.5 39.5H3.5Z'
                    stroke='#D3D3D3'
                    strokeWidth='3'
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 3.3 }}
                  />
                </motion.svg>
                <nav className='relative z-10 flex flex-col items-center gap-12 text-center text-2xl text-white'>
                  {routes.map((route) => (
                    <SheetClose key={route.path} asChild>
                      <Link
                        className='transform font-semibold transition-transform duration-200'
                        href={route.path}
                      >
                        {route.name}
                      </Link>
                    </SheetClose>
                  ))}
                </nav>
                <div className='absolute bottom-0 flex flex-col items-center justify-center gap-5 text-white'>
                  <div className='flex flex-col gap-5 text-center'>
                    <Link
                      className='transform font-semibold transition-transform duration-200'
                      href='/register'
                    >
                      Register
                    </Link>
                    <div className='flex gap-5'>
                      <Link
                        className='transform font-semibold transition-transform duration-200'
                        href='/events'
                      >
                        Events
                      </Link>
                      <Link
                        className='transform font-semibold transition-transform duration-200'
                        href='/speakers'
                      >
                        Speakers
                      </Link>
                    </div>
                  </div>
                </div>
                <MusicBtn className='absolute bottom-0 left-0' />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </motion.div>
    </motion.div>
  );
}
