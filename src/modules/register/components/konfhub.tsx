/* eslint-disable @next/next/no-img-element */

import React from 'react';
import { Ticket } from 'lucide-react';
import { KONFHUB_PAGE } from '@/config';
import { Button } from '@/components/ui/RoundedButton';

export function KonfHub() {
  return (
    <section className='px-4 sm:px-6 lg:px-8'>
      <div className='overflow-hidden rounded-2xl bg-white py-5 shadow-xl md:py-0 lg:grid lg:grid-cols-2 lg:gap-4'>
        <div className='px-6 pb-12 sm:px-16 lg:py-16 lg:pr-0 xl:px-20 xl:py-20'>
          <div className='lg:self-center'>
            <h3 className='text-3xl font-extrabold text-gray-900 sm:text-4xl'>
              <span className='block'>Experience TENET 2024</span>
            </h3>
            <p className='mt-4 text-lg text-gray-600'>
              Join us for an unforgettable journey of learning, creativity, and
              tech exploration. Our passionate team has curated an exceptional
              program to ignite your imagination and fuel your ambitions.
            </p>
          </div>
        </div>
        <div className='flex flex-col items-center justify-center text-center'>
          <Button
            newpage
            link={KONFHUB_PAGE}
            className='inline-flex transform cursor-pointer items-center justify-center rounded-md border border-transparent px-8 py-3 text-base font-medium text-white transition duration-150 ease-in-out hover:-translate-y-1 hover:scale-105 md:px-10 md:py-4 md:text-lg'
          >
            <Ticket className='mr-2 h-5 w-5' />
            Get Early Bird Pass Now
          </Button>
          <p className='mt-4 text-lg text-gray-600'>
            Limited passes available. Grab your early bird passes now
          </p>
        </div>
      </div>
    </section>
  );
}
