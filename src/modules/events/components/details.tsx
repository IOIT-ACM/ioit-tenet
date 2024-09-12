/* eslint-disable @next/next/no-img-element */
'use client';

import type { ScheduleItemType, Speaker } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import {
  HiCalendar,
  HiClock,
  HiLocationMarker,
  HiUser,
  HiExternalLink,
} from 'react-icons/hi';
import { handleShare } from '@/utils/share';

export const Details = ({ event }: { event: ScheduleItemType }) => {
  const msg = `
  
${event.title} at AISSMS IOIT TENET 2024
  
`;

  return (
    <div className='flex w-full flex-col items-center justify-start gap-10 pt-5 text-white md:pt-10'>
      <div className='w-full overflow-hidden'>
        <div className='w-full md:flex'>
          <div className='sticky top-0 h-64 w-full overflow-hidden rounded-lg border bg-gray-200 md:h-[500px] md:w-1/2'>
            <img
              src={event.image}
              alt={event.title}
              // layout='fill'
              // objectFit='cover'
              className='h-full w-full object-cover object-center transition-all duration-1000 hover:scale-105'
            />
          </div>
          <div className='space-y-6 pt-3 md:w-1/2 md:p-8 md:pt-0'>
            <h1 className='text-3xl font-bold md:text-4xl'>{event.title}</h1>
            <div className='flex flex-col space-y-4'>
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
            <p className='text-lg text-slate-400'>{event.description}</p>

            {event.speakers && event.speakers.length > 0 && (
              <div>
                <h2 className='mb-4 text-xl font-semibold'>Speakers</h2>
                <div className='space-y-4'>
                  {event.speakers.map((speaker, index) => (
                    <SpeakerCard key={index} speaker={speaker} />
                  ))}
                </div>
              </div>
            )}

            {event.organizers && event.organizers.length > 0 && (
              <div>
                <h2 className='mb-4 text-xl font-semibold'>Event head</h2>
                <ul className='space-y-2'>
                  {event.organizers.map((organizer, index) => (
                    <li
                      key={index}
                      className='flex items-center text-slate-400'
                    >
                      <HiUser className='mr-2 h-5 w-5' />
                      <div className='hover:underline'>{organizer.name}</div>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className='flex gap-3'>
              {event.registration && (
                <Link
                  href={event.registration}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none'
                >
                  Register for Event
                  <HiExternalLink className='ml-2 h-5 w-5' />
                </Link>
              )}

              <button
                type='button'
                onClick={() => handleShare({ msg, url: `/events/${event.id}` })}
                className='inline-flex items-center bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none'
              >
                Share
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SpeakerCard = ({ speaker }: { speaker: Speaker }) => {
  return (
    <Link
      href={`/speakers/${speaker.id}`}
      className='flex w-fit items-center space-x-3 p-3 transition-all duration-150 hover:rounded-xl hover:bg-slate-500'
    >
      <div className='relative h-20 w-20'>
        <Image
          src={speaker.image}
          alt={speaker.name}
          layout='fill'
          objectFit='cover'
          className='rounded-full'
        />
      </div>
      <div>
        <p className='text-lg'>{speaker.name}</p>
        <p className='text-xs'>{speaker.title}</p>
      </div>
    </Link>
  );
};
