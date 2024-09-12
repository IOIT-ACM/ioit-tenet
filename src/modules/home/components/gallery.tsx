'use client';

import React, { useRef } from 'react';
import { useInView } from 'framer-motion';
import { useIsMobile } from '@/hooks/useismobile';
import GalleryCard from './ui/gallerycard';

export const Gallery = () => {
  return (
    <section
      id='gallery'
      className='h-screen w-screen select-none bg-neutral-950'
    >
      <div className='sticky top-0 flex h-screen items-center overflow-hidden'>
        <div>
          <h2
            // initial={{ opacity: 0, scale: 0.2 }}
            // whileInView={{ opacity: 1, scale: 1 }}
            // transition={{ duration: 6, type: 'spring', stiffness: 50 }}
            className='z-0 text-[20vw] font-black text-neutral-800 md:text-[200px]'
          >
            GALLERY
            <span className='text-indigo-500'>.</span>
          </h2>
          <Cards />
        </div>
      </div>
    </section>
  );
};

const cardData = [
  {
    src: 'https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/ui/homegallery/1.png',
    alt: 'Event image',
    rotate: '6deg',
    top: '25%',
    left: '75%',
    className: 'w-36 cursor-grab md:w-56',
  },
  {
    src: 'https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/ui/homegallery/2.png',
    alt: 'Event image',
    rotate: '12deg',
    top: '55%',
    left: '62%',
    className: 'w-24 cursor-grab md:w-48',
  },
  {
    src: 'https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/ui/homegallery/3.png',
    alt: 'Event image',
    rotate: '-6deg',
    top: '10%',
    left: '38%',
    className: 'w-52 cursor-grab md:w-80',
  },
  {
    src: 'https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/ui/homegallery/4.png',
    alt: 'Event image',
    rotate: '8deg',
    top: '80%',
    left: '30%',
    className: 'w-48 cursor-grab md:w-72',
  },
  {
    src: 'https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/ui/homegallery/5.png',
    alt: 'Event image',
    rotate: '18deg',
    top: '70%',
    left: '45%',
    className: 'w-40 cursor-grab md:w-64',
  },
  {
    src: 'https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/ui/homegallery/6.png',
    alt: 'Event image',
    rotate: '-3deg',
    top: '25%',
    left: '75%',
    className: 'w-24 cursor-grab md:w-48',
  },
  {
    src: 'https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/ui/homegallery/7.png',
    alt: 'Event image',
    rotate: '6deg',
    top: '20%',
    left: '25%',
    className: 'w-36 cursor-grab md:w-56',
  },
];

const Cards = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isMobile = useIsMobile();
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  const data = isMobile ? cardData.slice(0, 8) : cardData;

  return (
    <div className='absolute inset-0 z-10' ref={containerRef}>
      {data.map((card, index) => (
        <GalleryCard
          key={index}
          containerRef={containerRef}
          {...card}
          index={index}
          isInView={isInView}
        />
      ))}
    </div>
  );
};
