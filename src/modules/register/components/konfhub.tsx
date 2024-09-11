import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export function KonfHub() {
  return (
    <section className='flex h-auto w-full flex-col rounded-3xl bg-gradient-to-br from-blue-100 to-purple-100 p-8 shadow-lg md:h-[400px] md:flex-row'>
      <div className='mb-6 flex w-full items-center justify-center md:mb-0 md:w-1/2'>
        <div className='relative aspect-square h-full w-full overflow-hidden rounded-2xl shadow-xl md:h-[350px] md:w-[350px]'>
          <Image
            src='/imgs/events/2.jpeg'
            alt='Day Pass'
            layout='fill'
            objectFit='cover'
            className='rounded-2xl transition-transform duration-300 hover:scale-110'
          />
        </div>
      </div>

      <div className='flex w-full flex-col justify-center md:w-1/2 md:pl-8'>
        <h2 className='mb-4 text-4xl font-extrabold text-gray-800'>
          Get Your Day Pass
        </h2>
        <p className='mb-6 text-xl text-gray-600'>
          Unlock full access to all events and activities with our exclusive day
          pass. Don&lsquo;t miss out on this incredible opportunity!
        </p>

        <div>
          <Link
            href='/get-pass'
            className='inline-block rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 text-lg font-semibold text-white transition duration-300 hover:from-blue-600 hover:to-purple-700 hover:shadow-lg'
          >
            Get Your Pass Now
          </Link>
        </div>
      </div>
    </section>
  );
}
