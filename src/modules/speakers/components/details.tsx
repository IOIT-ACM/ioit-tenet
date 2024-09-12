'use client';

import type { Speaker } from '@/types';
import Image from 'next/image';
import Link from 'next/link';

export const SpeakerDetails = ({ speaker }: { speaker: Speaker }) => {
  return (
    <div className='flex w-full flex-col items-center justify-start gap-10 pt-5 text-white md:pt-10'>
      <div className='w-full overflow-hidden'>
        <div className='w-full md:flex'>
          <div className='sticky top-0 h-64 w-full overflow-hidden rounded-lg border md:h-[500px] md:w-1/2'>
            <Image
              src={speaker.image}
              alt={speaker.name}
              layout='fill'
              objectFit='cover'
              className='h-full w-full object-center transition-all duration-1000 hover:scale-105'
            />
          </div>
          <div className='pt-3 md:w-1/2 md:p-8 md:pt-0'>
            <h1 className='text-3xl font-bold md:text-4xl'>{speaker.name}</h1>
            <p className='flex items-center text-xl'>{speaker.title}</p>
            {speaker.bio && (
              <div>
                <h2 className='mb-4 mt-10 text-xl font-semibold'>About</h2>
                <p className='text-lg text-slate-400'>{speaker.bio}</p>
              </div>
            )}
            <Link
              href={speaker.url}
              target='_blank'
              className='mt-5 inline-flex items-center bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none'
            >
              View Linkedin
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
