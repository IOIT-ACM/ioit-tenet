/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { CiMenuFries } from 'react-icons/ci';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';
import { MusicBtn } from '@/components/common/musicplayer';

const routes = [
  { path: '/', name: 'Home' },
  { path: '/events', name: 'Agenda' },
  { path: '/speakers', name: 'Speakers & Guests' },
  { path: '/register', name: 'Regestrations' },
];

export const Nav = () => {
  return (
    <header className='sticky top-0 z-10 flex select-none items-center justify-between bg-slate-800 p-4 text-white'>
      <div className='flex w-full items-center justify-between space-x-4'>
        <div className='flex space-x-2'>
          <Link href={'/'}>
            <Image
              className='h-10 w-10 cursor-pointer transition-all hover:scale-105'
              src={'/tenet-fill.png'}
              alt='Tenet Logo'
              height={70}
              width={70}
            />
          </Link>
          <Link href={'/'}>
            <Image
              className='h-10 w-10 cursor-pointer transition-all hover:scale-105'
              src={'/acm.png'}
              alt='Tenet Logo'
              height={70}
              width={70}
            />
          </Link>
        </div>
        <nav className='hidden space-x-4 sm:flex'>
          <Link className='transition-all hover:underline' href='/'>
            Home
          </Link>
          <Link className='transition-all hover:underline' href='/events'>
            Agenda
          </Link>
          <Link className='transition-all hover:underline' href='/speakers'>
            Speakers
          </Link>
          <Link className='transition-all hover:underline' href='/events'>
            Events
          </Link>
          {/* <Link className='transition-all hover:underline' href='/team'>
              Team
            </Link> */}
          <Link className='transition-all hover:underline' href='/register'>
            Registrations
          </Link>
        </nav>
      </div>
      <div className='sm:hidden'>
        <Sheet>
          <SheetTrigger>
            <CiMenuFries size={29} />
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
              <MusicBtn className='absolute bottom-0 right-0' />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};
