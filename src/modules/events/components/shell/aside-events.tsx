'use client';

import { day1, day2, day3 } from '@/config/events';
import { FollowCursor } from '@/modules/home/components/schedule/cursor';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { Switch } from '@/components/ui/switch';
import type { ScheduleItemType } from '@/types';
import { usePathname } from 'next/navigation';
import { Clock } from '../clock';

export const EventsSidePannel = () => {
  const days = [day1, day2, day3];
  const [cards, setCards] = useState(true);

  const sortedDays = days.map((day) =>
    day.sort((a, b) => a.start.getTime() - b.start.getTime()),
  );

  return (
    <div className='z-50 p-4 pb-36 shadow-xl'>
      <div className='mb-14 flex items-center space-x-2'>
        <Switch id='toggle-cards' checked={cards} onCheckedChange={setCards} />
        <label htmlFor='toggle-cards' className='text-white'>
          Show preview
        </label>
      </div>
      {sortedDays.map((day, dayIndex) => (
        <div key={dayIndex} className='mb-16 last:mb-0'>
          <h2 className='mb-4 text-xl font-semibold text-white'>
            Day {dayIndex + 1}
          </h2>
          {day.map((item, index) => (
            <>
              {cards ? (
                <FollowCursor
                  key={`Day ${dayIndex} - ${index}`}
                  data={item}
                  classname='scale-90'
                >
                  <ScheduleItem data={item} />
                </FollowCursor>
              ) : (
                <ScheduleItem key={`Day ${dayIndex} - ${index}`} data={item} />
              )}
            </>
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
        className={`mb-5 flex cursor-cell flex-col gap-3 border-b pb-2 pt-3 transition-all hover:text-gray-300 md:mb-0 md:border-none ${
          isActive ? 'text-white' : 'text-gray-500'
        }`}
      >
        <span>
          <p className='mb-2 text-lg'>
            <span className='line-clamp-2'>{data.title}</span>
            <span className='hidden md:flex'>{data.time}</span>
          </p>
        </span>
      </Link>
    </div>
  );
};
