import React from 'react';
import Link from 'next/link';
// import Image from 'next/image';

export function KonfHub() {
  const passes = [
    { name: 'Day 1 Pass', price: '₹50' },
    { name: 'Day 2 Pass', price: '₹50' },
    { name: 'Day 3 Pass', price: '₹50' },
    { name: 'All days pass', price: '₹120' },
  ];

  return (
    <section className='flex h-auto w-full flex-col rounded-3xl bg-gradient-to-br from-blue-100 to-purple-100 p-8 shadow-lg'>
      {/* <div className='mb-6 flex w-full items-center justify-center'>
        <div className='relative aspect-square h-64 w-64 overflow-hidden rounded-2xl shadow-xl'>
          <Image
            src='https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/events/default.jpg'
            alt='KonfHub Passes'
            layout='fill'
            objectFit='cover'
            className='rounded-2xl transition-transform duration-300 hover:scale-110'
          />
        </div>
      </div> */}

      <div className='flex w-full flex-col items-center justify-center'>
        <p className='mb-6 text-center text-xl text-gray-600'>
          Choose from our range of passes to unlock access to KonfHub events and
          activities. Don&apos;t miss out on this incredible opportunity!
        </p>

        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4'>
          {passes.map((pass, index) => (
            <div key={index} className='flex flex-col items-center'>
              <h3 className='mb-2 text-lg font-semibold'>{pass.name}</h3>
              <p className='mb-4 text-gray-600'>{pass.price}</p>
              <Link
                href='#'
                className='inline-block rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-2 text-center text-sm font-semibold text-white transition duration-300 hover:from-blue-600 hover:to-purple-700 hover:shadow-lg'
              >
                Get Pass
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
