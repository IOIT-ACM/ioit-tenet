/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
'use client';

import { useEffect, useRef, useState, useMemo } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import Link from 'next/link';
import { type EventType } from '@/types';
import { getEventsByYear } from '@/lib/getEvents';

gsap.registerPlugin(ScrollTrigger);

const munItem1: EventType = {
  title: 'MUN Committee Session 1',
  id: 'unsc-session',
  domain: 'home',
  color: 'bg-blue-500',
  date: 'Oct 5th, 2024',
  location: 'AISSMS IOIT',
  start: new Date('2024-10-05T11:00:00'),
  imp: false,
  time: '11:00 AM - 2:00 PM',
  description:
    'The UNSC addresses global peace and security issues, focusing on conflict resolution, sanctions, and peacekeeping efforts to maintain international stability. Agenda: Assessing global export controls and technology transfer under the Wassenaar Arrangement.',
  image: 'https://ioit.acm.org/tenet/mun/UNSC.png',
};

const munItem2: EventType = {
  title: 'MUN Committee Session 2',
  id: 'unsc-session',
  domain: 'home',
  color: 'bg-blue-500',
  date: 'Oct 6th, 2024',
  location: 'AISSMS IOIT',
  start: new Date('2024-10-05T15:00:00'),
  imp: false,
  time: '3:00 PM - 5:00 PM',
  description:
    'The UNSC addresses global peace and security issues, focusing on conflict resolution, sanctions, and peacekeeping efforts to maintain international stability. Agenda: Assessing global export controls and technology transfer under the Wassenaar Arrangement.',
  image: 'https://ioit.acm.org/tenet/mun/UNSC.png',
};

const munItem3: EventType = {
  title: 'MUN Committee Session 1',
  id: 'unsc-session',
  domain: 'home',
  color: 'bg-blue-500',
  date: 'Oct 5th, 2024',
  location: 'AISSMS IOIT',
  start: new Date('2024-10-06T11:00:00'),
  imp: false,
  time: '11:00 AM - 2:00 PM',
  description:
    'The UNSC addresses global peace and security issues, focusing on conflict resolution, sanctions, and peacekeeping efforts to maintain international stability. Agenda: Assessing global export controls and technology transfer under the Wassenaar Arrangement.',
  image: 'https://ioit.acm.org/tenet/mun/UNSC.png',
};

const munItem4: EventType = {
  title: 'MUN Committee Session 2',
  id: 'unsc-session-day2',
  domain: 'home',
  color: 'bg-blue-500',
  date: 'Oct 6th, 2024',
  location: 'AISSMS IOIT',
  start: new Date('2024-10-06T15:00:00'),
  imp: false,
  time: '3:00 PM - 5:00 PM',
  description:
    'The UNSC addresses global peace and security issues, focusing on conflict resolution, sanctions, and peacekeeping efforts to maintain international stability. Agenda: Assessing global export controls and technology transfer under the Wassenaar Arrangement.',
  image: 'https://ioit.acm.org/tenet/mun/UNSC.png',
};

const munEvents = [munItem1, munItem2, munItem3, munItem4];

export const Timeline: React.FC<{ domain: string; year: string}> = ({ domain, year }) => {
  const allEvents: EventType[] = useMemo(() => getEventsByYear(year), [year]);
  const esummit_events = useMemo(() => {
    const filteredEvents = allEvents.filter((event) => event.domain === domain);

    return domain === 'mun'
      ? [...filteredEvents, ...munEvents]
          .filter((event) => !event.imp)
          .sort((a, b) => a.start.getTime() - b.start.getTime())
      : filteredEvents.sort((a, b) => a.start.getTime() - b.start.getTime());
  }, [allEvents, domain]);
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeEventIndex, setActiveEventIndex] = useState<number>(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const timelineItems =
        containerRef.current?.querySelectorAll('.timeline-item');

      if (timelineItems && timelineItems.length > 0) {
        gsap.to('#tracing-beam', {
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: 'bottom bottom',
            scrub: true,
            onUpdate: (self) => {
              const progress = self.progress;
              const totalHeight = containerRef.current?.offsetHeight ?? 0;
              const beamHeight = progress * totalHeight;
              gsap.set('#tracing-beam', { height: `${beamHeight}px` });
            },
          },
        });

        timelineItems.forEach((item, index) => {
          gsap.fromTo(
            item,
            {
              opacity: 0,
              y: 50,
            },
            {
              opacity: 1,
              y: 0,
              scrollTrigger: {
                trigger: item,
                start: 'top 80%',
                end: 'bottom 15%',
                toggleActions: 'play none none reverse',
                onEnter: () => setActiveEventIndex(index),
                onEnterBack: () => setActiveEventIndex(index),
              },
            },
          );
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, [esummit_events]);

  return (
    <main
      id='timeline'
      className='mt-10 flex flex-col items-center overflow-hidden bg-neutral-950 p-4 text-white'
    >
      <h1 className='my-12 bg-gradient-to-r from-indigo-300 to-indigo-600 bg-clip-text text-center text-4xl font-bold text-transparent md:my-24 md:text-6xl'>
        {domain.toLocaleUpperCase()} Events Timeline
      </h1>
      <div
        ref={containerRef}
        className='relative flex w-full max-w-6xl flex-col items-start md:items-center'
      >
        <div className='absolute left-4 h-full w-0.5 transform bg-slate-700 md:left-1/2 md:-translate-x-1/2' />

        {/* Timeline beam */}
        <div
          id='tracing-beam'
          className='absolute left-4 h-0 w-1 transform bg-gradient-to-b from-indigo-300 via-indigo-500 to-indigo-700 md:left-1/2 md:-translate-x-1/2'
        />

        <div className='flex w-full flex-col pl-8 md:pl-0'>
          {esummit_events.map((event: EventType, index: number) => (
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
  event: EventType;
  index: number;
  activeEventIndex: number;
  isLast: boolean;
}> = ({ event, index, activeEventIndex, isLast }) => {
  const isActive = activeEventIndex >= index;

  return (
    <div
      className={`timeline-item relative mb-16 flex flex-col items-start md:mb-24 md:flex-row ${
        index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
      } ${isLast ? 'mb-0' : ''}`}
    >
      <TimeMarker time={event.time} isActive={isActive} />
      <EventContent event={event} index={index} isActive={isActive} />
    </div>
  );
};

const TimeMarker: React.FC<{ time: string; isActive: boolean }> = ({
  time,
  isActive,
}) => (
  <div
    className={`event-time absolute left-0 z-10 hidden -translate-x-full transform rounded-full border-2 bg-black p-2 md:left-1/2 md:block md:-translate-x-1/2 ${
      isActive
        ? 'border-indigo-500 text-indigo-500'
        : 'border-slate-400 text-slate-400'
    }`}
  >
    <p className='text-sm md:text-base'>{time}</p>
  </div>
);

const EventContent: React.FC<{
  event: EventType;
  index: number;
  isActive: boolean;
}> = ({ event, index }) => (
  <div
    className={`w-full md:w-1/2 ${
      index % 2 === 0
        ? 'md:pr-6 lg:pr-12'
        : 'md:ml-auto md:pl-6 md:text-right lg:pl-12'
    }`}
  >
    <Link href={`/24/events/${event.id}`} passHref>
      <div className='group rounded-lg p-2 transition-all duration-300 ease-in-out hover:bg-slate-800 md:p-4'>
        <h3 className='md:text-md mb-2 text-sm text-indigo-500'>
          {event.date}
        </h3>
        <h2 className='mb-3 text-xl font-bold transition-colors duration-300 group-hover:text-indigo-400 md:mb-4 md:text-2xl'>
          {event.title}
        </h2>
        <p className='mb-4 line-clamp-2 text-sm text-slate-400 md:mb-6 md:text-base'>
          {event.description}
        </p>

        <div className='relative mb-4 h-44 w-full overflow-hidden rounded-lg border transition-all duration-300 group-hover:shadow-lg group-hover:shadow-indigo-500/20 md:mb-6 md:h-52'>
          <Image
            src={event.image}
            alt={event.title}
            fill
            style={{ objectFit: 'cover' }}
            className='transform rounded-lg transition-transform duration-300 group-hover:scale-105'
          />
        </div>

        <div className='text mb-2 md:mb-6'>
          <p className='text-sm text-indigo-500 md:text-base'>
            Location: {event.location}
          </p>
        </div>
      </div>
    </Link>
  </div>
);
