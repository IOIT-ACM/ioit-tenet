import * as React from 'react';
import { cn } from '@/lib/utils';

interface ShellProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function Shell({ children }: ShellProps) {
  return (
    <div className={cn('flex h-screen flex-col')}>
      <header className='sticky top-0 z-10 flex items-center justify-between bg-slate-800 p-4 text-white'>
        <div className='flex space-x-4'>
          <div className='flex space-x-2'>
            <div className='h-8 w-8 rounded-full bg-blue-300'></div>
            <div className='h-8 w-8 rounded-full bg-blue-300'></div>
          </div>
          <nav className='hidden space-x-4 sm:flex'>
            <a href='/'>Home</a>
            <a href='/agenda'>Agenda</a>
            <a href='/team'>Team</a>
            <a href='/register'>Registrations</a>
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
        <aside className='sticky top-0 hidden h-[calc(100vh-72px)] w-1/4 bg-slate-700 sm:block'></aside>

        <main className='flex-1 overflow-y-auto p-5 md:p-10'>{children}</main>
      </div>

      <footer className='sticky bottom-0 block bg-pink-200 p-4 sm:hidden'></footer>
    </div>
  );
}
