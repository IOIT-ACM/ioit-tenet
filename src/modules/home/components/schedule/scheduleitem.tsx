'use client';

import { FiMapPin, FiPhone } from 'react-icons/fi';
import Link from 'next/link';
import type { ScheduleItemType } from '@/types';
import { useIsMobile } from '@/hooks/useismobile';

export const ScheduleItem = ({ data }: { data: ScheduleItemType }) => {
  const isMobile = useIsMobile();

  return (
    <div>
      <Link
        href={`/events/${data.id}`}
        className='mb-5 flex cursor-cell flex-col gap-3 pb-2 pt-3 text-slate-400 transition-all hover:text-white md:mb-0 md:text-slate-600'
      >
        <span>
          <p className='mb-2 line-clamp-2 text-lg md:line-clamp-1 md:overflow-hidden md:truncate md:text-xl'>
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
            {!isMobile && (
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
            )}
          </span>
        </span>
      </Link>
    </div>
  );
};
