'use client';

import { day1, day2, day3 } from '@/config/events';
import { FollowCursor } from '@/modules/home/components/schedule/cursor';
import Link from 'next/link';
import { useRef } from 'react';
import type { ScheduleItemType } from '@/types';

export const SidePanel = () => {
  const boundaryRef = useRef(null);
  const days = [day1, day2, day3];

  return (
    <div ref={boundaryRef} className='z-50 p-4 pb-36 shadow-xl'>
      {days.map((day, dayIndex) => (
        <div key={dayIndex} className='mb-16 last:mb-0'>
          <h2 className='mb-4 text-xl font-semibold text-white'>
            Day {dayIndex + 1}
          </h2>
          {day.map((item, index) => (
            <FollowCursor key={index} data={item} classname='scale-90'>
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
        </span>
      </Link>
    </div>
  );
};
