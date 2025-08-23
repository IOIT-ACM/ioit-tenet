/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { EventsSidePannel } from './aside-events';
import { SpeakersSidePanel } from './aside-speakers';
import * as React from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import Image from 'next/image';
import MonileFooter from './mobile-footer';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';
import { MusicBtn } from '@/components/common/musicplayer';
import { FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { routes } from '@/config/data/24/navbar';

import { CiMenuFries } from 'react-icons/ci';

interface ShellProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function Shell({ children }: ShellProps) {
  const pathname = usePathname();

  const isEventsPath = pathname.startsWith('/24/events');

  return (
    <div className={cn('flex h-screen flex-col')}>
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
            <Link href={'https://ioit.acm.org'}>
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
            <Link className='transition-all hover:underline' href='/24/events'>
              Events
            </Link>
            <Link
              className='transition-all hover:underline'
              href='/24/speakers'
            >
              Speakers
            </Link>
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
                <div className='absolute bottom-0 flex flex-col items-center justify-center text-white'>
                  <div className='flex space-x-8'>
                    <Link
                      href='https://chat.whatsapp.com/HUYXxh75M618GNCExQ3NPZ'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-slate-400 transition-colors hover:text-blue-500'
                    >
                      <FaWhatsapp size={24} />
                    </Link>
                    <Link
                      href='https://www.instagram.com/ioit_tenet/'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-slate-400 transition-colors hover:text-pink-500'
                    >
                      <FaInstagram size={24} />
                    </Link>
                    <Link
                      href='https://www.linkedin.com/company/ioit-tenet/'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-slate-400 transition-colors hover:text-blue-700'
                    >
                      <FaLinkedin size={24} />
                    </Link>
                  </div>
                  <Link
                    className='mt-5 transform font-semibold transition-transform duration-200'
                    href='mailto:ioit.tenet@aissmsioit.org'
                  >
                    Contact
                  </Link>
                </div>
                <MusicBtn className='absolute bottom-0 right-0' />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <div className='flex flex-1 overflow-hidden'>
        <aside className='scrollbar-custom relative top-0 z-50 m-0 hidden w-1/4 select-none overflow-y-auto overflow-x-hidden bg-slate-800 sm:block'>
          {isEventsPath ? (
            <>
              <h2 className='sticky top-0 z-50 border-b bg-slate-700 p-4 text-2xl font-bold text-white'>
                <p>Agenda Outline</p>
              </h2>
              <EventsSidePannel />
            </>
          ) : (
            <>
              <h2 className='sticky top-0 z-50 border-b bg-slate-700 p-4 text-2xl font-bold text-white'>
                Speakers
              </h2>
              <SpeakersSidePanel />
            </>
          )}
        </aside>

        <main className='scrollbar-custom flex-1 overflow-y-auto px-5 pb-20 pt-0 md:px-5 md:pb-10'>
          {children}
        </main>
      </div>

      <footer className='sticky bottom-0 block rounded-t-xl bg-slate-200 p-2 sm:hidden'>
        <MonileFooter />
      </footer>
    </div>
  );
}
