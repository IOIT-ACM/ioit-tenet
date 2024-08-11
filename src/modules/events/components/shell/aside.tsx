'use client';

import { day1, day2, day3 } from '@/config/events';
import { FollowCursor } from '@/modules/home/components/schedule/cursor';
import { FiMapPin, FiPhone } from 'react-icons/fi';
import Link from 'next/link';
import type { ScheduleItemType } from '@/types';

export const SidePanel = () => {
  return (
    <div className='z-50 p-2'>
      <div>
        {day1.map((item, index) => (
          <FollowCursor key={index} data={item}>
            <ScheduleItem data={item} />
          </FollowCursor>
        ))}
      </div>
      <div>
        {day2.map((item, index) => (
          <FollowCursor key={index} data={item}>
            <ScheduleItem data={item} />
          </FollowCursor>
        ))}
      </div>
      <div>
        {day3.map((item, index) => (
          <FollowCursor key={index} data={item}>
            <ScheduleItem data={item} />
          </FollowCursor>
        ))}
      </div>
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
