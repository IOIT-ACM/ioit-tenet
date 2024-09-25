'use client';

import Link from 'next/link';

import type { Speaker } from '@/types';
import { speakers } from '@/config/speakers';

export const TenetSpeakers = () => {
  return (
    <div
      id='speakers'
      className='flex h-[70vh] flex-col justify-around bg-neutral-950 md:h-screen'
    >
      <h1 className='text-center text-4xl text-white md:text-8xl'>Speakers</h1>
      <TenetSpeakersCarousel />
    </div>
  );
};

const TenetSpeakersCarousel = () => {
  return (
    <section className='relative py-8 md:py-20'>
      <div className='no-scroll-bar sticky top-0 flex items-center overflow-hidden overflow-x-auto px-20 py-10'>
        <div className='flex gap-14'>
          {speakers.slice(0, 6).map((speaker) => {
            return <SpeakerCard speaker={speaker} key={speaker.name} />;
          })}

          <Link
            href={'/speakers'}
            className='group relative h-[350px] max-h-[450px] w-[250px] cursor-pointer overflow-hidden rounded-full border-2 border-white bg-neutral-200 md:h-[450px] md:w-[450px]'
          >
            <div
              style={{
                backgroundImage: `url(/tenet.png)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              className='absolute inset-0 z-0 transition-transform duration-300'
            ></div>
            <div className='absolute inset-0 z-10 grid place-content-center overflow-hidden rounded-full'>
              <p className='rounded-full border-2 border-black bg-gradient-to-br from-white/20 to-white/0 p-8 text-3xl uppercase text-white ring-1 ring-white backdrop-blur-xl'>
                View All Speakers
              </p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

const SpeakerCard = ({ speaker }: { speaker: Speaker }) => {
  return (
    <Link
      key={speaker.name}
      href={`/speakers/${speaker.id}`}
      className='group relative h-auto max-h-[450px] w-[75vw] cursor-pointer overflow-hidden rounded-2xl border border-white bg-neutral-200 md:h-[450px] md:w-[420px]'
      style={{
        backgroundImage: `url(${speaker.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className='absolute inset-0 z-10 flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent p-6'>
        <h2 className='mb-2 text-3xl font-bold text-white'>{speaker.name}</h2>
        <p className='mb-4 text-lg text-white'>{speaker.title}</p>
      </div>
    </Link>
  );
};
