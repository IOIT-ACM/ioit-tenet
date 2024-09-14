'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { day1, day2, day3 } from '@/config/events';
import type { ScheduleItemType } from '@/types';
import Image from 'next/image';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

export const EventLinksStructure: React.FC<{ day: number }> = ({ day }) => {
  const events = getEventsForDay(day);
  const eventRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (eventRefs.current.length > 0) {
      gsap.fromTo(
        eventRefs.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          ease: 'power2.out',
          duration: 1,
          scrollTrigger: {
            trigger: eventRefs.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        },
      );
    }
  }, []);

  return (
    <div className='my-10 grid grid-cols-2 gap-8 md:grid-cols-3 md:gap-12 md:px-10'>
      {events.map((event, index) => (
        <Link href={`/events/${event.id}`} key={event.id} className='group'>
          <div
            ref={(el) => {
              if (el) eventRefs.current[index] = el;
            }}
            className='h-full overflow-hidden rounded-xl border border-gray-500 bg-white shadow-md transition-all duration-300 hover:shadow-xl'
          >
            <div className='relative h-32 w-full overflow-hidden md:h-56'>
              <Image
                src={event.image}
                alt={event.title}
                layout='fill'
                objectFit='cover'
                className='bg-gray-500 transition-transform duration-300 group-hover:scale-110'
              />
            </div>
            <div className='p-2 md:p-5'>
              <h3 className='mb-2 line-clamp-2 text-base font-bold text-gray-800 transition-colors duration-300 group-hover:text-blue-600 md:text-xl'>
                {event.title}
              </h3>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

const getEventsForDay = (day: number): ScheduleItemType[] => {
  switch (day) {
    case 1:
      return day1.filter((item) => item.imp);
    case 2:
      return day2.filter((item) => item.imp);
    case 3:
      return day3.filter((item) => item.imp);
    default:
      return [];
  }
};
