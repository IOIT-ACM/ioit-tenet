import React from 'react';
import Link from 'next/link';
import { Ticket, Calendar, Star } from 'lucide-react';

export function KonfHub() {
  const passes = [
    {
      name: 'Day 1 Pass',
      icon: <Calendar className='h-6 w-6' />,
      color: 'from-blue-500 to-blue-600',
    },
    {
      name: 'Day 2 Pass',
      icon: <Calendar className='h-6 w-6' />,
      color: 'from-purple-500 to-purple-600',
    },
    {
      name: 'Day 3 Pass',
      icon: <Calendar className='h-6 w-6' />,
      color: 'from-pink-500 to-pink-600',
    },
  ];

  return (
    <section className='flex h-auto w-full flex-col rounded-3xl bg-gradient-to-br from-blue-50 to-purple-50 p-4 shadow-lg sm:p-8'>
      <div className='flex w-full flex-col items-center justify-center'>
        <h2 className='mb-2 text-3xl font-bold text-gray-800'>TENET Passes</h2>
        <p className='mb-8 max-w-2xl text-center text-lg text-gray-600'>
          Unlock access to events and activities. Choose your perfect pass and
          dive into an world of innovation and networking!
        </p>

        <div className='grid w-full max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          {passes.map((pass, index) => (
            <div
              key={index}
              className='flex transform flex-col items-center overflow-hidden rounded-xl bg-white shadow-md'
            >
              <div
                className={`w-full bg-gradient-to-r p-4 ${pass.color} flex items-center justify-center`}
              >
                {pass.icon}
              </div>
              <div className='flex flex-col items-center p-6'>
                <h3 className='mb-2 text-xl font-semibold text-gray-800'>
                  {pass.name}
                </h3>
                <Link
                  href='#'
                  className='inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-2 text-center text-sm font-semibold text-white transition duration-300 hover:from-blue-600 hover:to-purple-700 hover:shadow-lg'
                >
                  <Ticket className='mr-2 h-4 w-4' />
                  Coming Soon
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className='w-4xl mt-14 flex transform flex-col items-center overflow-hidden rounded-xl bg-white shadow-md'>
          <div
            className={`flex w-full items-center justify-center bg-gradient-to-r from-yellow-500 to-yellow-600 p-4`}
          >
            <Star className='h-6 w-6' />
          </div>
          <div className='flex flex-col items-center p-6'>
            <h3 className='mb-4 text-xl font-semibold text-gray-800'>
              All day pass
            </h3>
            <Link
              href='#'
              className='inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-2 text-center text-sm font-semibold text-white transition duration-300 hover:from-blue-600 hover:to-purple-700 hover:shadow-lg'
            >
              <Ticket className='mr-2 h-4 w-4' />
              Coming Soon
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
