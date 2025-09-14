/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { useState, useEffect, useRef } from 'react';
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
import Link from 'next/link';
import { MusicBtn } from './musicplayer';
import { usePathname } from 'next/navigation';
import { gsap } from 'gsap';
import { type navbarType } from '@/types';

const AnimatedNavLink = ({
  href,
  active,
  children,
}: {
  href: string;
  active?: boolean;
  children: React.ReactNode;
}) => {
  return (
    <Link
      href={href}
      className={cn(
        'group relative inline-block overflow-hidden h-6 flex items-center text-sm px-3 transition-colors duration-200 text-center',
        active
          ? 'text-white font-semibold'
          : 'text-gray-300 hover:text-white font-normal',
      )}
    >
      <span
        className={cn(
          'block w-full transition-transform duration-300 ease-out group-hover:-translate-y-6',
          active ? 'font-semibold' : 'font-normal',
        )}
      >
        {children}
      </span>
      <span
        className={cn(
          'block absolute left-0 top-0 w-full transition-transform duration-300 ease-out translate-y-6 group-hover:translate-y-0 pointer-events-none text-white',
          active ? 'font-semibold' : 'font-normal',
        )}
      >
        {children}
      </span>
    </Link>
  );
};

export default function FixedNavBar({
  className,
  routes,
}: {
  className?: string;
  routes?: navbarType[];
}) {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('up');
  const [atTop, setAtTop] = useState(true);
  const pathname = usePathname();

  const navbarRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const registerBtnRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop =
        window.scrollY || document.documentElement.scrollTop;

      if (currentScrollTop > lastScrollTop) {
        setScrollDirection('down');
      } else {
        setScrollDirection('up');
      }

      setIsVisible(scrollDirection === 'up');
      setAtTop(currentScrollTop <= 10);
      setLastScrollTop(currentScrollTop);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollTop, scrollDirection]);

  useEffect(() => {
    if (navbarRef.current && window.innerWidth >= 1000) {
      gsap.to(navbarRef.current, {
        y: scrollDirection === 'down' && !atTop ? -100 : 0,
        opacity: scrollDirection === 'down' && !atTop ? 0 : 1,
        duration: 0.3,
        ease: 'power2.out',
      });
    }

    if (logoRef.current) {
      gsap.to(logoRef.current, {
        y: atTop ? 0 : -100,
        opacity: atTop ? 1 : 0,
        duration: 0.5,
        ease: 'power2.out',
      });
    }

    if (registerBtnRef.current) {
      gsap.to(registerBtnRef.current, {
        y: atTop ? 0 : -100,
        opacity: atTop ? 1 : 0,
        duration: 0.5,
        ease: 'power2.out',
      });
    }
  }, [isVisible, atTop, scrollDirection]);

  return (
    <div
      ref={navbarRef}
      className="fixed top-5 z-50 flex w-screen select-none items-center justify-between px-3 md:px-10"
    >
      {/* Logo Section */}
      <div
        ref={logoRef}
        className="flex w-fit items-center justify-center gap-1 md:gap-3"
      >
        <Link href={'/'} className="h-10 w-10 md:h-14 md:w-14">
          <Image
            className="h-full w-full rounded-lg transition-transform hover:scale-105"
            src={'/tenet-white-logo.png'}
            alt="Tenet Logo"
            height={70}
            width={70}
          />
        </Link>
        <Link
          href={'https://ioit.acm.org'}
          className="h-10 w-10 md:h-14 md:w-14"
        >
          <Image
            className="h-full w-full rounded-lg transition-transform hover:scale-105"
            src={'/acm.png'}
            alt="ACM Logo"
            height={70}
            width={70}
          />
        </Link>
      </div>

      <div
        className={cn(
          'hidden min-[1000px]:flex items-center gap-1 rounded-full border border-white/10 bg-gradient-to-br from-white/5 via-indigo-200/5 to-black/30 backdrop-blur-2xl px-4 py-3 shadow-lg shadow-[0_0_24px_4px_rgba(99,102,241,0.25)]',
          className,
        )}
      >
        {routes?.map((route) => (
          <AnimatedNavLink
            key={route.path}
            href={route.path}
            active={pathname === route.path}
          >
            <span className="text-lg md:text-xl font-semibold drop-shadow-[0_1px_2px_rgba(0,0,0,0.15)]">
              {route.name}
            </span>
          </AnimatedNavLink>
        ))}
      </div>

      <div ref={registerBtnRef} className="hidden min-[1000px]:flex">
        <RegisterButton />
      </div>

      <div className="max-[999px]:flex min-[1000px]:hidden">
        <Sheet>
          <SheetTrigger>
            <TfiMenu color="gray" size={32} />
          </SheetTrigger>
          <SheetContent className="z-[999999999999999] flex h-full w-screen items-center justify-center border-none bg-black/75">
            <div className="relative flex h-full w-full items-center justify-center">
              <motion.svg
                width="189"
                height="227"
                viewBox="0 0 189 227"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 h-full w-full opacity-20"
              >
                <motion.path
                  d="M167.5 55H124L81.5 188H19L3 225.5H176.5L186 188H125.5L167.5 55Z"
                  stroke="#D3D3D3"
                  strokeWidth="3"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 3.3 }}
                />
                <motion.path
                  d="M3.5 39.5L13.5 2H186.5L169.5 39.5H107.5L64.5 172.5H21.5L64.5 39.5H3.5Z"
                  stroke="#D3D3D3"
                  strokeWidth="3"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 3.3 }}
                />
              </motion.svg>
              <nav className="relative z-10 flex flex-col items-center gap-12 text-center text-2xl text-white">
                {routes?.map((route) => (
                  <SheetClose key={route.path} asChild>
                    <Link
                      className="transform font-semibold transition-transform duration-200"
                      href={route.path}
                    >
                      {route.name}
                    </Link>
                  </SheetClose>
                ))}
              </nav>
              <div className="absolute bottom-0 flex flex-col items-center justify-center gap-5 text-white">
                <div className="flex flex-col gap-5 text-center">
                  <div className="flex gap-5">
                    <Link
                      className="transform font-semibold transition-transform duration-200"
                      href="/24/events"
                    >
                      TENET&apos;24
                    </Link>
                    <Link
                      className="transform font-semibold transition-transform duration-200"
                      href="mailto:ioit.tenet@aissmsioit.org"
                    >
                      Contact
                    </Link>
                  </div>
                </div>
              </div>
              <MusicBtn className="absolute bottom-0 left-0" />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
