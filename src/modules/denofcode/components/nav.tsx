/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const Nav = () => {
  return (
    <header className='fixed top-0 z-[99999999] flex h-[80px] w-screen select-none items-center justify-between bg-slate-800 p-4 text-white'>
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
          <Link className='transition-all hover:underline' href='/24/speakers'>
            Speakers
          </Link>
          <Link className='transition-all hover:underline' href='/24/events'>
            Events
          </Link>
          <Link className='transition-all hover:underline' href='/24/register'>
            Registrations
          </Link>
        </nav>
      </div>
    </header>
  );
};
