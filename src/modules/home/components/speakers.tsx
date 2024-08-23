'use client';

import { motion, useTransform, useScroll } from 'framer-motion';
import Link from 'next/link';
import { useRef } from 'react';
import type { Speaker } from '@/types';
import { speakers } from '@/config/speakers';
import { useIsMobile } from '@/hooks/useismobile';

import dynamic from 'next/dynamic';

const ScrollIcon = dynamic(() => import('@/components/common/scrollicon'), {
  ssr: false,
});

export const TenetSpeakers = () => {
  return (
    <div id='speakers' className='bg-neutral-950'>
      <h1 className='text-center text-4xl text-white md:text-8xl'>Speakers</h1>
      <h3 className='text-center text-lg text-gray-400 md:text-xl'>
        Scroll down to scroll right
      </h3>
      <TenetSpeakersCarousel />
      <ScrollIcon />
    </div>
  );
};

const TenetSpeakersCarousel = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const ismobile = useIsMobile();
  const scrollEnd = ismobile ? '-90%' : '-70%';
  const x = useTransform(scrollYProgress, [0, 1], ['2%', scrollEnd]);

  return (
    <section ref={targetRef} className='relative h-[300vh]'>
      <div className='sticky top-0 flex h-screen items-center overflow-hidden'>
        <motion.div style={{ x }} className='flex gap-14'>
          {speakers.slice(0, 6).map((speaker) => {
            return <SpeakerCard speaker={speaker} key={speaker.name} />;
          })}

          <Link
            href={'/speakers'}
            className='group relative h-[450px] max-h-[450px] w-[250px] cursor-pointer overflow-hidden rounded-full border-2 border-white bg-neutral-200 md:w-[450px]'
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
