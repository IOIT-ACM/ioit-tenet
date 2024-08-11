'use client';

import type { ScheduleItemType } from '@/types';
import Image from 'next/image';
import {
  HiCalendar,
  HiClock,
  HiLocationMarker,
  HiUser,
  HiPhone,
} from 'react-icons/hi';

export const Details = ({ event }: { event: ScheduleItemType }) => {
  return (
    <div className='flex min-h-screen w-screen items-center justify-center bg-gradient-to-br from-slate-900 to-zinc-500 px-4 py-12 sm:px-6 lg:px-8'>
      <div className='w-full overflow-hidden rounded-xl border bg-white bg-opacity-10 shadow-2xl backdrop-blur-lg backdrop-filter'>
        <div className='md:flex'>
          <div className='relative h-64 w-full overflow-hidden md:h-auto md:w-1/2 md:flex-shrink-0'>
            <Image
              src={event.image}
              alt={event.title}
              layout='fill'
              objectFit='cover'
              className='h-full w-full cursor-pointer object-center transition-all duration-1000 hover:scale-110'
            />
          </div>
          <div className='space-y-6 p-8 md:w-1/2 md:p-12 lg:p-16'>
            <h1 className='text-3xl font-extrabold leading-tight text-white md:text-4xl lg:text-5xl'>
              {event.title}
            </h1>
            <div className='flex flex-col space-y-4 text-gray-300'>
              <p className='flex items-center'>
                <HiCalendar className='mr-2 h-5 w-5' />
                {event.date}
              </p>
              <p className='flex items-center'>
                <HiClock className='mr-2 h-5 w-5' />
                {event.time}
              </p>
              <p className='flex items-center'>
                <HiLocationMarker className='mr-2 h-5 w-5' />
                {event.location}
              </p>
            </div>
            <p className='text-lg leading-relaxed text-gray-300'>
              {event.description}
            </p>
            <div>
              <h2 className='mb-4 text-xl font-semibold text-white'>
                Organizers
              </h2>
              <ul className='space-y-2'>
                {event.organizers.map((organizer, index) => (
                  <li key={index} className='flex items-center text-gray-300'>
                    <HiUser className='mr-2 h-5 w-5' />
                    <span>{organizer.name}</span>
                    <span className='mx-2'>•</span>
                    <HiPhone className='mr-1 h-4 w-4' />
                    <span>{organizer.phone}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
