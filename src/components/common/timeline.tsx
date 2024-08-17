/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
'use client';

import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef, useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { day1, day2, day3 } from '@/config/events';
import { type ScheduleItemType } from '@/types';

const allEvents: ScheduleItemType[] = [...day1, ...day2, ...day3];

export const Timeline: React.FC<{ domain: string }> = ({ domain }) => {
  const esummit_events = useMemo(
    () => allEvents.filter((event) => event.domain === domain),
    [domain],
  );
  const containerRef = useRef<HTMLDivElement>(null);
  const beamControls = useAnimation();
  const [activeEventIndex, setActiveEventIndex] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const {
        top: containerTop,
        height: containerHeight,
        bottom: containerBottom,
      } = containerRect;
      const viewportHeight = window.innerHeight;

      const maxBeamHeight = containerHeight;
      let scrollPercentage = Math.max(
        0,
        Math.min(
          1,
          (viewportHeight - containerTop) / (viewportHeight + containerHeight),
        ),
      );

      if (containerBottom <= viewportHeight) {
        scrollPercentage = 1;
      }

      const newHeight = scrollPercentage * maxBeamHeight;

      beamControls.set({ height: `${newHeight}px` });

      const itemElements =
        containerRef.current.querySelectorAll<HTMLDivElement>('.timeline-item');
      let newActiveIndex = activeEventIndex;

      itemElements.forEach((item, index) => {
        const timeElement = item.querySelector<HTMLDivElement>('.event-time');
        if (timeElement) {
          const { top: timeTop } = timeElement.getBoundingClientRect();
          const beamTop = containerTop + newHeight;

          if (beamTop >= timeTop) {
            newActiveIndex = index;
          }
        }
      });

      // If we're at the bottom, set all events as active
      if (containerBottom <= viewportHeight) {
        newActiveIndex = itemElements.length - 1;
      }

      setActiveEventIndex(newActiveIndex);
    };

    const debouncedHandleScroll = debounce(handleScroll, 10);

    debouncedHandleScroll();
    window.addEventListener('scroll', debouncedHandleScroll);
    window.addEventListener('resize', debouncedHandleScroll);

    return () => {
      window.removeEventListener('scroll', debouncedHandleScroll);
      window.removeEventListener('resize', debouncedHandleScroll);
    };
  }, [beamControls, activeEventIndex]);

  return (
    <main
      id='timeline'
      className='flex min-h-screen flex-col items-center bg-black p-4 text-white'
    >
      <h1 className='my-24 bg-gradient-to-r from-green-300 to-green-600 bg-clip-text text-6xl font-bold text-transparent'>
        Events Timeline
      </h1>
      <div
        ref={containerRef}
        className='relative flex w-full max-w-6xl flex-col items-center'
      >
        <div className='absolute left-1/2 h-full w-0.5 -translate-x-1/2 transform bg-gray-700' />

        <motion.div
          id='tracing-beam'
          className='absolute left-1/2 h-0 w-1 -translate-x-1/2 transform bg-gradient-to-b from-green-300 via-green-500 to-green-700'
          animate={beamControls}
        />

        <div className='flex w-full flex-col'>
          {esummit_events.map((event: ScheduleItemType, index: number) => (
            <TimelineItem
              key={event.id}
              event={event}
              index={index}
              activeEventIndex={activeEventIndex}
              isLast={index === esummit_events.length - 1}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

const TimelineItem: React.FC<{
  event: ScheduleItemType;
  index: number;
  activeEventIndex: number;
  isLast: boolean;
}> = ({ event, index, activeEventIndex, isLast }) => {
  const isActive = activeEventIndex >= index;

  return (
    <motion.div
      className={`timeline-item relative mb-24 flex items-start ${
        index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
      } ${isLast ? 'mb-0' : ''}`}
      initial={{ opacity: 0, y: 50, scale: 0.8 }}
      animate={{
        opacity: isActive ? 1 : 0.2,
        y: 0,
        scale: isActive ? 1.05 : 1,
      }}
      transition={{
        opacity: { duration: 0.4 },
        scale: { duration: 0.4, ease: 'easeOut' },
        y: { duration: 0.4, ease: 'easeOut' },
      }}
    >
      <TimeMarker time={event.time} isActive={isActive} />
      <EventContent event={event} index={index} isActive={isActive} />
    </motion.div>
  );
};

const TimeMarker: React.FC<{ time: string; isActive: boolean }> = ({
  time,
  isActive,
}) => (
  <div
    className={`event-time absolute left-1/2 z-10 -translate-x-1/2 transform rounded-full border-2 bg-black p-2 ${isActive ? 'border-green-500 text-green-500' : 'border-gray-400 text-gray-400'}`}
  >
    <p>{time}</p>
  </div>
);

const EventContent: React.FC<{
  event: ScheduleItemType;
  index: number;
  isActive: boolean;
}> = ({ event, index }) => (
  <div
    className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:ml-auto md:pl-12 md:text-right'}`}
  >
    <Link href={`/events/${event.id}`} passHref>
      <div className='group rounded-lg p-6 transition-all duration-300 ease-in-out hover:bg-gray-800'>
        <h3 className='text-md mb-2 text-green-500'>{event.date}</h3>
        <h2 className='mb-4 text-4xl font-bold transition-colors duration-300 group-hover:text-green-400'>
          {event.title}
        </h2>
        <p className='mb-6 text-gray-400'>{event.description}</p>

        <div className='relative mb-6 h-64 w-full overflow-hidden rounded-lg transition-all duration-300 group-hover:shadow-lg group-hover:shadow-green-500/20'>
          <Image
            src={event.image}
            alt={event.title}
            fill
            style={{ objectFit: 'cover' }}
            className='transform rounded-lg transition-transform duration-300 group-hover:scale-105'
          />
        </div>

        <div className='text mb-6'>
          <p className='text-green-500'>Location: {event.location}</p>
        </div>
      </div>
    </Link>
  </div>
);

function debounce(func: Function, wait: number) {
  let timeout: NodeJS.Timeout;
  return function executedFunction(...args: any[]) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}
