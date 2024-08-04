/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-floating-promises */
'use client';

import '@/styles/search.css';
import React, { useEffect, useRef, useState } from 'react';
import {
  FaCalendar,
  FaMapMarkerAlt,
  FaRobot,
  FaCamera,
  FaStar,
  FaVideo,
  FaMicrophone,
} from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';

interface Item {
  id: number;
  name: string;
  icon: React.ReactNode;
}

const items: Item[] = [
  { id: 1, name: 'Tech-Fiesta', icon: <FaCalendar /> },
  { id: 2, name: 'Product Management Conference', icon: <FaCalendar /> },
  { id: 3, name: 'Business Intelligence Conference', icon: <FaCalendar /> },
  { id: 4, name: 'Capture the Flag', icon: <FaStar /> },
  { id: 5, name: 'Fun games (AR/VR, coding games)', icon: <FaCamera /> },
  { id: 6, name: 'Web - 3 Conference', icon: <FaCalendar /> },
  { id: 7, name: "LLM's Industrial Applications", icon: <FaRobot /> },
  { id: 8, name: 'Drone/Robotics Workshop', icon: <FaRobot /> },
  { id: 9, name: 'Gen Ai Workshop', icon: <FaCalendar /> },
  { id: 10, name: 'Drone/Robotics Display', icon: <FaRobot /> },
  { id: 11, name: 'E-Summit', icon: <FaCalendar /> },
  { id: 15, name: 'Break', icon: <FaStar /> },
  { id: 17, name: 'Pitching Competition Finals', icon: <FaMicrophone /> },
  { id: 19, name: 'MUN', icon: <FaMapMarkerAlt /> },
  { id: 21, name: 'Opening Ceremony', icon: <FaVideo /> },
  { id: 22, name: 'Committee session', icon: <FaCalendar /> },
  { id: 23, name: 'Lunch', icon: <FaCalendar /> },
  { id: 25, name: 'High tea', icon: <FaCalendar /> },
  { id: 26, name: "Creator's Conclave", icon: <FaStar /> },
  { id: 29, name: 'Stand UP', icon: <FaMicrophone /> },
  { id: 31, name: 'Theater act', icon: <FaVideo /> },
  { id: 32, name: 'PUNE OPEN MIC', icon: <FaMicrophone /> },
  { id: 33, name: 'Battle of comedians', icon: <FaStar /> },
  { id: 35, name: 'Main Stage Event', icon: <FaCalendar /> },
  { id: 36, name: 'E-Sports', icon: <FaCamera /> },
  { id: 37, name: 'LAN Tournaments', icon: <FaCamera /> },
  { id: 39, name: 'Experience Arenas', icon: <FaCalendar /> },
];

export const SearchEvents: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('up');
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    addAnimation();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop =
        window.scrollY || document.documentElement.scrollTop;

      if (currentScrollTop > lastScrollTop) {
        setScrollDirection('down');
      } else {
        setScrollDirection('up');
      }

      setLastScrollTop(currentScrollTop);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollTop]);

  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (scrollDirection === 'up') {
        containerRef.current.style.setProperty(
          '--animation-direction',
          'forwards',
        );
      } else {
        containerRef.current.style.setProperty(
          '--animation-direction',
          'reverse',
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty('--animation-duration', '120s');
    }
  };

  return (
    <div className='grid h-screen grid-cols-1 items-center justify-center gap-3 overflow-hidden bg-gray-100 px-10 md:grid-cols-2 md:px-20'>
      <div className='grid gap-5'>
        <div className='text-4xl font-bold'>
          Search through all events from TENET 2024
        </div>

        <DrawOutlineButton />
        
  <div className='mb-4 rounded-full border border-gray-400'>
  <ReactSearchAutocomplete
  placeholder='Search events'
  items={items}
  />
  </div>
      </div>
      <div
        ref={containerRef}
        className='scroller z-20 mt-8 h-2/3 w-full overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,white_20%,white_80%,transparent)]'
      >
        <ul
          ref={scrollerRef}
          className={cn(
            'flex w-max min-w-full shrink-0 flex-col flex-nowrap gap-4 py-4',
            start && 'animate-scroll',
          )}
        >
          {items.map((item) => (
            <div
              key={item.id}
              className='scroll-item flex items-center p-4 text-2xl'
            >
              <div className='mr-4 rounded-full border-4 bg-white p-4 text-black'>
                {item.icon}
              </div>
              {item.name}
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

const DrawOutlineButton = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push('/events')}
      className='group relative w-fit px-4 py-2 font-medium text-black transition-colors hover:text-gray-500'
    >
      <span>View all events</span>

      {/* TOP */}
      <span className='absolute left-0 top-0 h-[2px] w-0 bg-indigo-300 transition-all duration-100 group-hover:w-full' />

      {/* RIGHT */}
      <span className='absolute right-0 top-0 h-0 w-[2px] bg-indigo-300 transition-all delay-100 duration-100 group-hover:h-full' />

      {/* BOTTOM */}
      <span className='absolute bottom-0 right-0 h-[2px] w-0 bg-indigo-300 transition-all delay-200 duration-100 group-hover:w-full' />

      {/* LEFT */}
      <span className='absolute bottom-0 left-0 h-0 w-[2px] bg-indigo-300 transition-all delay-300 duration-100 group-hover:h-full' />
    </button>
  );
};
