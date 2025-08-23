import React from 'react';
import { day1, day2, day3 } from '@/config/data/24/events';
import { FaArrowRightLong, FaArrowLeftLong } from 'react-icons/fa6';
import Link from 'next/link';

export default function EventNavigation({ eventid }: { eventid: string }) {
  const days = [day1, day2, day3];

  const sortedDays = days
    .flat()
    .sort((a, b) => a.start.getTime() - b.start.getTime());

  const currentIndex = sortedDays.findIndex((event) => event.id === eventid);

  const previousEvent = currentIndex > 0 ? sortedDays[currentIndex - 1] : null;
  const nextEvent =
    currentIndex < sortedDays.length - 1 ? sortedDays[currentIndex + 1] : null;

  return (
    <div className='mt-14 grid w-full grid-cols-2 items-center justify-between gap-3 md:hidden'>
      {previousEvent ? (
        <Link
          href={'/24/events/' + previousEvent.id}
          className='flex h-full flex-col items-center justify-between gap-2 rounded-xl bg-slate-500 p-1'
        >
          <span className='line-clamp-2 text-center text-sm font-medium'>
            {previousEvent.title}
          </span>
          <FaArrowLeftLong className='h-4 w-4' />
        </Link>
      ) : (
        <div className='w-1/3' />
      )}

      {nextEvent ? (
        <Link
          href={'/24/events/' + nextEvent.id}
          className='flex h-full flex-col items-center justify-between gap-2 rounded-xl bg-slate-500 p-1'
        >
          <span className='line-clamp-2 text-center text-sm font-medium'>
            {nextEvent.title}
          </span>
          <FaArrowRightLong className='h-4 w-4' />
        </Link>
      ) : (
        <div className='w-1/3' />
      )}
    </div>
  );
}
