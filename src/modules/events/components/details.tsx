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

export const Details = ({ event }: { event: ScheduleItemType }) => {
  return (
    <div className='flex w-full flex-col items-center justify-start gap-5'>
      <div className='w-full overflow-hidden rounded-xl border bg-white bg-opacity-10 shadow-2xl backdrop-blur-lg'>
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
            {event.description && (
              <p className='text-lg leading-relaxed text-gray-300'>
                {event.description}
              </p>
            )}

            {event.speakers && event.speakers.length > 0 && (
              <div>
                <h2 className='mb-4 text-xl font-semibold text-white'>
                  Speakers
                </h2>
                <div className='flex flex-wrap gap-4'>
                  {event.speakers.map((speaker, index) => (
                    <SpeakerCard key={index} speaker={speaker} />
                  ))}
                </div>
              </div>
            )}

            {event.organizers && event.organizers.length > 0 && (
              <div>
                <h2 className='mb-4 text-xl font-semibold text-white'>
                  Organizers
                </h2>
                <ul className='space-y-2'>
                  {event.organizers.map((organizer, index) => (
                    <li key={index} className='flex items-center text-gray-300'>
                      <HiUser className='mr-2 h-5 w-5' />
                      <Link href={`tel:${organizer.phone}`}>
                        {organizer.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {event.registration && (
              <div className='mt-6'>
                <Link
                  href={event.registration}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none'
                >
                  Register for Event
                  <HiExternalLink className='ml-2 h-5 w-5' />
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
      <Link className='w-full text-white' href={'/events'}>
        View full agenda
      </Link>
    </div>
  );
};

const SpeakerCard = ({ speaker }: { speaker: Speaker }) => {
  return (
    <Link
      href={speaker.url}
      target='_blank'
      rel='noopener noreferrer'
      className='flex items-center space-x-3 rounded-lg bg-white bg-opacity-20 p-3 transition-all hover:bg-opacity-30'
    >
      <Image
        src={speaker.image}
        alt={speaker.name}
        width={50}
        height={50}
        className='rounded-full'
      />
      <span className='text-white'>{speaker.name}</span>
    </Link>
  );
};
