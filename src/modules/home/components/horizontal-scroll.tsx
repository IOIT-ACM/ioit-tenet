'use client';

import { motion, useTransform, useScroll } from 'framer-motion';
import Link from 'next/Link';
import { useRef } from 'react';
import type { Speaker } from '@/types';
import { speakers } from '@/config/speakers';

export const TenetSpeakers = () => {
  return (
    <div className='bg-neutral-950'>
      <h1 className='text-center text-4xl text-white md:text-8xl'>Speakers</h1>
      <TenetSpeakersCarousel />
    </div>
  );
};

const TenetSpeakersCarousel = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ['2%', '-80%']);

  return (
    <section ref={targetRef} className='relative h-[300vh]'>
      <div className='sticky top-0 flex h-screen items-center overflow-hidden'>
        <motion.div style={{ x }} className='flex gap-14'>
          {speakers.map((speaker) => {
            return <SpeakerCard speaker={speaker} key={speaker.name} />;
          })}

          <Link
            href={'/speakers'}
            className='group relative h-[450px] w-[250px] cursor-pointer overflow-hidden rounded-full border-2 border-white bg-neutral-200 md:w-[450px]'
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
        </motion.div>
      </div>
    </section>
  );
};

const SpeakerCard = ({ speaker }: { speaker: Speaker }) => {
  return (
    <div
      key={speaker.name}
      className='group relative h-[450px] w-[450px] cursor-pointer overflow-hidden rounded-xl border-2 border-white bg-neutral-200'
    >
      <div
        style={{
          backgroundImage: `url(${speaker.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className='absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110'
      ></div>
      <div className='absolute inset-0 z-10 flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent p-6'>
        <h2 className='mb-2 text-3xl font-bold text-white'>{speaker.name}</h2>
        <p className='mb-4 text-lg text-white'>{speaker.title}</p>
        <p className='mb-4 line-clamp-3 text-sm text-white'>{speaker.bio}</p>
        <Link href={speaker.url} className='text-blue-400 hover:underline'>
          Learn More
        </Link>
      </div>
    </div>
  );
};
