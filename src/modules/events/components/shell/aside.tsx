'use client';

import { day1, day2, day3 } from '@/config/events';
import { FollowCursor } from '@/modules/home/components/schedule/cursor';
import { FiMapPin, FiPhone } from 'react-icons/fi';
import Link from 'next/link';
import type { ScheduleItemType } from '@/types';

export const SidePanel = () => {
  const days = [day1, day2, day3];

  return (
    <div className='z-50 bg-gray-900 p-4 shadow-xl'>
      {days.map((day, dayIndex) => (
        <div key={dayIndex} className='mb-6 last:mb-0'>
          <h2 className='mb-4 text-xl font-semibold text-white'>
            Day {dayIndex + 1}
          </h2>
          {day.map((item, index) => (
            <FollowCursor key={index} data={item}>
              <ScheduleItem data={item} />
            </FollowCursor>
          ))}
        </div>
      ))}
    </div>
  );
};

export const ScheduleItem = ({ data }: { data: ScheduleItemType }) => {
  return (
    <div>
      <Link
        href={`/events/${data.id}`}
        className='mb-5 flex cursor-cell flex-col gap-3 border-b pb-2 pt-3 text-gray-500 transition-all hover:text-white md:mb-0 md:border-none'
      >
        <span>
          <p className='mb-2 line-clamp-2 text-lg'>
            {data.title} <span className='hidden md:flex'>{data.time}</span>
          </p>
          <span className='flex items-start justify-between md:hidden'>
            <span className='flex flex-col gap-2 text-sm uppercase md:flex-row'>
              <span className='flex items-center gap-1.5'>
                <FiMapPin />
                <p>{data.location}</p>
              </span>
              <p className='hidden md:block'>{data.date}</p>
            </span>
            <span className='flex flex-col items-end gap-2 md:flex-row'>
              {data.organizers?.slice(0, 1).map((organizer, index) => (
                <span
                  key={index}
                  className='flex items-center gap-1.5 text-sm uppercase'
                >
                  <FiPhone />
                  <span>{organizer.name}</span>
                </span>
              ))}
            </span>
          </span>
        </span>
      </Link>
    </div>
  );
};
