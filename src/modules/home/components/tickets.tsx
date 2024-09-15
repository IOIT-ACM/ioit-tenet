/* eslint-disable @typescript-eslint/no-floating-promises */
'use client';

import { FaArrowRightLong } from 'react-icons/fa6';
import { Button } from '@/components/ui/RoundedButton';

export function Tickets() {
  return (
    <div className='flex w-full flex-col items-center justify-between bg-gradient-to-b from-blue-800 to-neutral-950 p-6 px-10 pb-10 sm:flex-row md:bg-gradient-to-r md:pb-6'>
      <div className='text-center sm:text-left'>
        <h1 className='text-4xl font-bold text-indigo-400 sm:text-6xl'>
          Grab your tickets now!
        </h1>
        <p className='mt-4 text-lg text-white sm:text-xl'>
          IOIT ACM STUDENT CHAPTERS FIRST EDITION OF TENET
        </p>
      </div>
      <Button link='register'>
        Get tickits
        <FaArrowRightLong className='ml-2 h-4 w-4' />
      </Button>
    </div>
  );
}
