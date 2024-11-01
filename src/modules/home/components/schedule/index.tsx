'use client';

import { ScheduleItem } from './scheduleitem';
import { day1, day2, day3 } from '@/config/data/24/events';
import { Separator } from '@/components/ui/separator';
import { FollowCursor } from './cursor';
import React, { useMemo, useState, useRef } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import Link from 'next/link';
import type { EventType } from '@/types';

const munItem1: EventType = {
  title: 'MUN Committee Session',
  icon: 'FcGlobe',
  id: 'unsc-session',
  domain: 'home',
  registration: 'MUNLINK',
  color: 'bg-blue-500',
  date: 'Oct 5th, 2024',
  location: 'AISSMS IOIT',
  start: new Date('2024-10-05T09:00:00'),
  imp: true,
  time: 'morning to evening',
  description:
    'The UNSC addresses global peace and security issues, focusing on conflict resolution, sanctions, and peacekeeping efforts to maintain international stability. Agenda: Assessing global export controls and technology transfer under the Wassenaar Arrangement.',
  image: 'https://ioit.acm.org/tenet/mun/mun/unsc.webp',
  organizers: [{ name: 'Gargi Bharshankar' }, { name: 'Aditya Sarade' }],
};

const munItem2: EventType = {
  title: 'MUN Committee Session',
  icon: 'FcGlobe',
  id: 'unsc-session-day2',
  domain: 'home',
  registration: 'MUNLINK',
  color: 'bg-blue-500',
  date: 'Oct 6th, 2024',
  location: 'AISSMS IOIT',
  start: new Date('2024-10-06T09:00:00'),
  imp: true,
  time: 'morning to evening',
  description:
    'The UNSC addresses global peace and security issues, focusing on conflict resolution, sanctions, and peacekeeping efforts to maintain international stability. Agenda: Assessing global export controls and technology transfer under the Wassenaar Arrangement.',
  image: 'https://ioit.acm.org/tenet/mun/mun/unsc.webp',
  organizers: [{ name: 'Gargi Bharshankar' }, { name: 'Aditya Sarade' }],
};

export const Schedule = () => {
  const [expanded, setExpanded] = useState<number | null>(null);
  const boundaryRef = useRef(null);

  const d1 = useMemo(() => {
    const filteredDay1 = day1.filter((item) => item.domain !== 'mun');
    const sortedDay1 = filteredDay1.sort(
      (a, b) => a.start.getTime() - b.start.getTime(),
    );
    const importantItems = sortedDay1.filter((item) => item.imp);
    if (expanded === 1) {
      return sortedDay1;
    }
    return importantItems.slice(0, 4);
  }, [expanded]);

  const d2 = useMemo(() => {
    const filteredDay2 = [...day2, munItem1].filter(
      (item) => item.domain !== 'mun',
    );
    const sortedDay2 = filteredDay2.sort(
      (a, b) => a.start.getTime() - b.start.getTime(),
    );
    const importantItems = sortedDay2.filter((item) => item.imp);
    if (expanded === 2) {
      return sortedDay2;
    }
    return importantItems.slice(0, 4);
  }, [expanded]);

  const d3 = useMemo(() => {
    const filteredDay3 = [...day3, munItem2].filter(
      (item) => item.domain !== 'mun',
    );
    const sortedDay3 = filteredDay3.sort(
      (a, b) => a.start.getTime() - b.start.getTime(),
    );
    const importantItems = sortedDay3.filter((item) => item.imp);
    if (expanded === 3) {
      return sortedDay3;
    }
    return importantItems.slice(0, 4);
  }, [expanded]);

  return (
    <section
      id='schedule'
      className='relative mx-5 mb-20 mt-0 grid grid-cols-1 justify-center text-white transition-all md:mx-32 md:grid-cols-7'
    >
      <div className='sticky top-0 z-40 self-start bg-neutral-950 md:top-10 md:col-span-2'>
        <h1 className='mb-3 mt-5 w-full text-4xl font-black uppercase text-zinc-50 md:mb-20 md:mt-0 md:text-5xl'>
          Schedule
        </h1>

        <div className='gap- hidden pb-2 text-slate-300 md:grid'>
          <Link
            className='w-fit transition-all hover:underline'
            href={'/register'}
          >
            Registrations
          </Link>
          <Link
            className='w-fit transition-all hover:underline'
            href={'/events'}
          >
            View full Agenda
          </Link>
          <Link
            className='w-fit transition-all hover:underline'
            href={'/speakers'}
          >
            View Speakers Lineup
          </Link>
        </div>
      </div>
      <div ref={boundaryRef} className='w-full md:col-span-5'>
        <div id='day1events' className='mb-8 mt-20 md:mt-0'>
          <div className='mb-4 flex w-full items-center justify-between text-3xl font-bold text-slate-300'>
            <span>Day 1 Events</span>
            <span>
              {expanded === 1 ? (
                <IoIosArrowUp
                  onClick={() => setExpanded(null)}
                  className='cursor-pointer transition-all hover:scale-125'
                />
              ) : (
                <IoIosArrowDown
                  onClick={() => setExpanded(1)}
                  className='cursor-pointer transition-all hover:scale-125'
                />
              )}
            </span>
          </div>
          <Separator className='my-4 max-w-full bg-slate-300 md:max-w-36' />
          {d1.map((item, index) => (
            <React.Fragment key={`Day1-${index}`}>
              <FollowCursor data={item} classname='scale-90'>
                <ScheduleItem data={item} />
              </FollowCursor>
            </React.Fragment>
          ))}
        </div>

        <div id='day2events' className='mb-8'>
          <div className='mb-4 flex w-full items-center justify-between text-3xl font-bold text-slate-300'>
            <span>Day 2 Events</span>
            <span>
              {expanded === 2 ? (
                <IoIosArrowUp
                  onClick={() => setExpanded(null)}
                  className='cursor-pointer transition-all hover:scale-125'
                />
              ) : (
                <IoIosArrowDown
                  onClick={() => setExpanded(2)}
                  className='cursor-pointer transition-all hover:scale-125'
                />
              )}
            </span>
          </div>
          <Separator className='my-4 max-w-full bg-slate-300 md:max-w-36' />
          {d2.map((item, index) => (
            <React.Fragment key={`Day2-${index}`}>
              <FollowCursor data={item} classname='scale-90'>
                <ScheduleItem data={item} />
              </FollowCursor>
            </React.Fragment>
          ))}
        </div>

        <div id='day3events'>
          <div className='mb-4 flex w-full items-center justify-between text-3xl font-bold text-slate-300'>
            <span>Day 3 Events</span>
            <span>
              {expanded === 3 ? (
                <IoIosArrowUp
                  onClick={() => setExpanded(null)}
                  className='cursor-pointer transition-all hover:scale-125'
                />
              ) : (
                <IoIosArrowDown
                  onClick={() => setExpanded(3)}
                  className='cursor-pointer transition-all hover:scale-125'
                />
              )}
            </span>
          </div>
          <Separator className='my-4 max-w-full bg-slate-300 md:max-w-36' />
          {d3.map((item, index) => (
            <React.Fragment key={`Day3-${index}`}>
              <FollowCursor data={item} classname='scale-90'>
                <ScheduleItem data={item} />
              </FollowCursor>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};
