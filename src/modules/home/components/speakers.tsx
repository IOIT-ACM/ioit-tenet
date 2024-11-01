'use client';

import EmblaCarousel from '@/components/embla-carousel/embla-carousel';
import { type EmblaOptionsType } from 'embla-carousel';
import SpeakerCard from './ui/speakercard';
import { speakers } from '@/config/data/24/speakers';
import '@/styles/embla.css';
import Link from 'next/link';

const OPTIONS: EmblaOptionsType = { dragFree: true };

export const TenetSpeakers = () => {
  return (
    <div
      id='speakers'
      className='flex h-[100vh] flex-col justify-around bg-neutral-950'
    >
      <Link
        href={'/speakers'}
        className='text-center text-4xl text-white md:text-8xl'
      >
        Speakers
      </Link>
      <TenetSpeakersCarousel />
    </div>
  );
};

const TenetSpeakersCarousel = () => {
  return (
    <EmblaCarousel options={OPTIONS}>
      {speakers.map((speaker) => (
        <div
          key={speaker.id}
          className='h-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4'
        >
          <SpeakerCard speaker={speaker} key={speaker.name} />
        </div>
      ))}
    </EmblaCarousel>
  );
};
