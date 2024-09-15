'use client';

import React, { type ReactNode, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { EventLinksStructure } from './eventlinks';
import { KONFHUB_PAGE } from '@/config';
import { HiExternalLink } from 'react-icons/hi';
import { Button } from '@/components/ui/RoundedButton';

export const EventsList = () => {
  return (
    <div className='min-h-screen p-0'>
      {data.map((item, index) => (
        <TextParallaxContent
          key={index}
          imgUrl={item.imgUrl}
          subheading={item.subheading}
          heading={item.heading}
          url={item.url}
        >
          <EventLinksStructure day={index + 1} />
        </TextParallaxContent>
      ))}
    </div>
  );
};

const IMG_PADDING = 12;

const TextParallaxContent = ({
  imgUrl,
  subheading,
  heading,
  children,
  url,
}: {
  imgUrl: string;
  url: string;
  subheading: string;
  heading: string;
  children: ReactNode;
}) => {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
    >
      <div className='relative h-[150vh]'>
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} url={url} />
      </div>
      {children}
    </div>
  );
};

const StickyImage = ({ imgUrl }: { imgUrl: string }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['end end', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className='sticky z-0 overflow-hidden rounded-3xl'
    >
      <motion.div
        className='absolute inset-0 bg-neutral-950/70'
        style={{
          opacity,
        }}
      />
    </motion.div>
  );
};

const OverlayCopy = ({
  subheading,
  heading,
  url,
}: {
  subheading: string;
  heading: string;
  url: string;
}) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className='absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white'
    >
      <p className='mb-2 text-center text-xl md:mb-4 md:text-3xl'>
        {subheading}
      </p>
      <Link
        href={url}
        className='max-w-screen-lg text-center text-4xl font-bold md:text-7xl'
      >
        {heading}
      </Link>

      <Button newpage link={KONFHUB_PAGE} className='mt-10'>
        Get tickits
        <HiExternalLink className='ml-2 h-5 w-5' />
      </Button>
    </motion.div>
  );
};

const data = [
  {
    imgUrl:
      'https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/ui/events/tech.jpeg',
    subheading: 'Day 1',
    heading: 'Tech Fiesta',
    url: '/techfiesta',
  },
  {
    imgUrl:
      'https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/ui/events/building.jpeg',
    subheading: 'Day 2',
    heading: 'E-Summit & MUN',
    url: '/esummit',
  },
  {
    imgUrl:
      'https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/ui/events/mun.jpeg',
    subheading: 'Day 3',
    heading: 'Creators Conclave, E-Sports, MUN Day-2',
    url: '/mun',
  },
];
