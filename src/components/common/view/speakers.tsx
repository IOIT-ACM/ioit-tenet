'use client';

import Image from 'next/image';
import type { Speaker } from '@/types';
import { speakers } from '@/config/speakers';
import '@/styles/speakers.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Speakers = () => {
  const pathname = usePathname();

  const filteredSpeakers = speakers.filter(
    (speaker) => speaker.domain === pathname.replace('/', ''),
  );

  return (
    <section className='bg-black py-12'>
      <div className='mx-auto px-4'>
        <h2 className='mb-8 text-center text-4xl font-bold text-white'>
          Meet Our Speakers
        </h2>
        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          {filteredSpeakers.map((speaker: Speaker) => (
            <div key={speaker.id} className='perspective group'>
              <div className='preserve-3d group-hover:rotate-y-180 relative h-64 w-full duration-700'>
                {/* Front Side */}
                <div className='backface-hidden absolute flex h-full w-full flex-col items-center justify-center rounded-lg bg-slate-900 p-4 text-center shadow-lg'>
                  <div className='relative mb-4 h-24 w-24'>
                    <Image
                      src={speaker.image}
                      alt={speaker.name}
                      fill
                      style={{ objectFit: 'cover' }}
                      className='rounded-full'
                    />
                  </div>
                  <h3 className='text-lg font-semibold text-white'>
                    {speaker.name}
                  </h3>
                  <p className='text-sm text-slate-400'>{speaker.title}</p>
                </div>
                {/* Back Side */}
                <div className='rotate-y-180 backface-hidden absolute flex h-full w-full flex-col items-center justify-center rounded-lg bg-slate-900 p-4 text-center shadow-lg'>
                  <h3 className='mb-4 text-lg font-semibold text-white'>
                    {speaker.name}
                  </h3>
                  <p className='mb-4 text-sm text-slate-400'>{speaker.bio}</p>
                  <Link
                    href={speaker.url}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex items-center justify-center text-white'
                  >
                    <svg
                      className='h-8 w-8 bg-white p-1'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 448 512'
                    >
                      <path d='M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z' />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
