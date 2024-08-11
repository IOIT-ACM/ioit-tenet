/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { SidePanel } from './aside';
import * as React from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import Image from 'next/image';

interface ShellProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function Shell({ children }: ShellProps) {
  return (
    <div className={cn('flex h-screen flex-col')}>
      <header className='sticky top-0 z-10 flex items-center justify-between bg-slate-800 p-4 text-white'>
        <div className='flex items-center space-x-4'>
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
                src={'/tenet-fill.png'}
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
        <aside className='sticky top-0 z-50 hidden h-[calc(100vh-72px)] w-1/4 overflow-y-auto overflow-x-hidden bg-slate-700 sm:block'>
          <SidePanel />
        </aside>

        <main className='flex-1 overflow-y-auto px-10 pt-0'>{children}</main>
      </div>

      <footer className='sticky bottom-0 block bg-pink-200 p-4 sm:hidden'></footer>
    </div>
  );
}
