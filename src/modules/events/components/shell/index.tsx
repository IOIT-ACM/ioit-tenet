/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { SidePanel } from './aside';
import { Separator } from '@/components/ui/separator';
import * as React from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import Image from 'next/image';
import MonileFooter from './mobile-footer';

interface ShellProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function Shell({ children }: ShellProps) {
  return (
    <div className={cn('flex h-screen flex-col')}>
      <header className='sticky top-0 z-10 flex items-center justify-between bg-slate-800 p-4 text-white'>
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
            <Link href='/'>Home</Link>
            <Link href='/agenda'>Agenda</Link>
            <Link href='/team'>Team</Link>
            <Link href='/register'>Registrations</Link>
          </nav>
        </div>
        <div className='sm:hidden'>
          <button className='flex items-center rounded border border-white px-3 py-2 text-white'>
            <svg className='h-3 w-3' viewBox='0 0 20 20' fill='currentColor'>
              <path d='M3 6h14M3 10h14M3 14h14' />
            </svg>
          </button>
        </div>
      </header>

      <div className='flex flex-1 overflow-hidden'>
        <aside className='scrollbar-custom sticky top-0 z-50 hidden h-[calc(100vh-72px)] w-1/4 overflow-y-auto overflow-x-hidden bg-gray-900 sm:block'>
          <h2 className='p-4 text-3xl font-bold text-white'>Agenda Outline</h2>
          <Separator className='mb-5 mt-2 bg-slate-400' />
          <SidePanel />
        </aside>

        <main className='flex-1 overflow-y-auto px-10 pb-20 pt-0 md:pb-10'>
          {children}
        </main>
      </div>

      <footer className='sticky bottom-0 block rounded-t-xl bg-slate-200 p-2 sm:hidden'>
        <MonileFooter />
      </footer>
    </div>
  );
}
