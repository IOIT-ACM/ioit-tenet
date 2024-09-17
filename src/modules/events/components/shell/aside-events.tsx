'use client';

import { day1, day2, day3 } from '@/config/events';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import type { ScheduleItemType } from '@/types';
import { usePathname } from 'next/navigation';
import { Clock } from '../clock';

export const EventsSidePannel = () => {
  const days = [day1, day2, day3];

  const sortedDays = days.map((day) =>
    day.sort((a, b) => a.start.getTime() - b.start.getTime()),
  );

  return (
    <div className='z-50 p-2 pb-36 shadow-xl'>
      {sortedDays.map((day, dayIndex) => (
        <div key={dayIndex} className='mb-16 last:mb-0'>
          <h2 className='mb-4 px-4 text-xl font-semibold text-white'>
            Day {dayIndex + 1}
          </h2>
          {day.map((item, index) => (
            <ScheduleItem key={`Day ${dayIndex} - ${index}`} data={item} />
          ))}
        </div>
      ))}
      <Clock />
    </div>
  );
};

export const ScheduleItem = ({ data }: { data: ScheduleItemType }) => {
  const pathname = usePathname();
  const isActive = pathname.split('/').pop() === data.id;
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isActive && itemRef.current) {
      itemRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [isActive]);

  return (
    <div ref={itemRef}>
      <Link
        href={`/events/${data.id}`}
        className={`mb-5 flex flex-col p-4 transition-all hover:text-slate-300 md:mb-0 md:border-none ${
          isActive
            ? 'rounded-xl border-opacity-25 bg-white/10 text-white'
            : 'text-slate-500'
        }`}
      >
        <div className='mb-2 text-lg'>
          <span className={`line-clamp-2 ${isActive && 'mb-4 text-lg'}`}>
            {data.title}
          </span>
          <div className='flex w-full justify-between'>
            <p className='hidden md:flex'>{data.time}</p>
            {isActive && <p className='hidden md:flex'>{data.location}</p>}
          </div>
        </div>
      </Link>
    </div>
  );
};
