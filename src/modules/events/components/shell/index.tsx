/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { EventsSidePannel } from './aside-events';
import { SpeakersSidePanel } from './aside-speakers';
import { Separator } from '@/components/ui/separator';
import * as React from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import Image from 'next/image';
import MonileFooter from './mobile-footer';
import { usePathname } from 'next/navigation';

import { CiMenuFries } from 'react-icons/ci';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

interface ShellProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function Shell({ children }: ShellProps) {
  const pathname = usePathname();

  const isEventsPath = pathname.startsWith('/events');

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
            <Link className='transition-all hover:underline' href='/team'>
              Team
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
            <SheetContent className='text-left'>
              <SheetHeader>
                <SheetTitle className='text-left'>
                  {/* <div className='flex space-x-2'>
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
                  </div> */}
                  <h1>Menu</h1>
                </SheetTitle>

                <nav className='flex flex-col gap-5 pt-10 text-left text-black'>
                  <Link className='transition-all hover:underline' href='/'>
                    Home
                  </Link>
                  <Link
                    className='transition-all hover:underline'
                    href='/events'
                  >
                    Agenda
                  </Link>
                  <Link
                    className='transition-all hover:underline'
                    href='/speakers'
                  >
                    Speakers
                  </Link>
                  <Link className='transition-all hover:underline' href='/team'>
                    Team
                  </Link>
                  <Link
                    className='transition-all hover:underline'
                    href='/register'
                  >
                    Registrations
                  </Link>
                </nav>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <div className='flex flex-1 overflow-hidden'>
        <aside className='scrollbar-custom sticky top-0 z-50 hidden w-1/4 select-none overflow-y-auto overflow-x-hidden bg-gray-900 sm:block'>
          {isEventsPath ? (
            <>
              <h2 className='p-4 text-3xl font-bold text-white'>
                Agenda Outline
              </h2>
              <Separator className='mb-5 mt-2 bg-slate-400' />
              <EventsSidePannel />
            </>
          ) : (
            <>
              <h2 className='p-4 text-3xl font-bold text-white'>Speakers</h2>
              <Separator className='mb-5 mt-2 bg-slate-400' />
              <SpeakersSidePanel />
            </>
          )}
        </aside>

        <main className='scrollbar-custom flex-1 overflow-y-auto px-10 pb-20 pt-0 md:pb-10'>
          {children}
        </main>
      </div>

      <footer className='sticky bottom-0 block rounded-t-xl bg-slate-200 p-2 sm:hidden'>
        <MonileFooter />
      </footer>
    </div>
  );
}
