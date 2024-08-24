'use client';

import type { Speaker } from '@/types';
import Image from 'next/image';
import { HiUser, HiBriefcase } from 'react-icons/hi';

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
          <div className='space-y-6 pt-3 md:w-1/2 md:p-8 md:pt-0'>
            <h1 className='text-3xl font-bold md:text-4xl'>{speaker.name}</h1>
            <div className='flex flex-col space-y-4'>
              <p className='flex items-center'>
                <HiUser className='mr-2 h-5 w-5' />
                {speaker.name}
              </p>
              <p className='flex items-center'>
                <HiBriefcase className='mr-2 h-5 w-5' />
                {speaker.title}
              </p>
            </div>
            {speaker.bio && (
              <div>
                <h2 className='mb-4 text-xl font-semibold'>Biography</h2>
                <p className='text-lg text-slate-400'>{speaker.bio}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
