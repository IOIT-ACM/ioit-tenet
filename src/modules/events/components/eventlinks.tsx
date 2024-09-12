import React from 'react';
import { day1, day2, day3 } from '@/config/events';
import type { ScheduleItemType } from '@/types';
import Image from 'next/image';
import Link from 'next/link';

export const EventLinksStructure: React.FC<{ day: number }> = ({ day }) => {
  const events = getEventsForDay(day);

  return (
    <div className='my-10 grid grid-cols-2 gap-8 md:grid-cols-3 md:gap-12 md:px-10'>
      {events.map((event) => (
        <Link href={`/events/${event.id}`} key={event.id} className='group'>
          <div className='h-full overflow-hidden rounded-xl border border-gray-500 bg-white shadow-md transition-all duration-300 hover:shadow-xl'>
            <div className='relative h-32 w-full overflow-hidden md:h-56'>
              <Image
                src={event.image}
                alt={event.title}
                layout='fill'
                objectFit='cover'
                className='transition-transform duration-300 group-hover:scale-110'
              />
            </div>
            <div className='p-2 md:p-5'>
              <h3 className='mb-2 line-clamp-2 text-base font-bold text-gray-800 transition-colors duration-300 group-hover:text-blue-600 md:text-xl'>
                {event.title}
              </h3>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

const getEventsForDay = (day: number): ScheduleItemType[] => {
  switch (day) {
    case 1:
      return day1.filter((item) => item.imp);
    case 2:
      return day2.filter((item) => item.imp);
    case 3:
      return day3.filter((item) => item.imp);
    default:
      return [];
  }
};
