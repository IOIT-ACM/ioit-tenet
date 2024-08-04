/* eslint-disable react-hooks/exhaustive-deps */
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
  { id: 17, name: 'Pitching Competition Finals', icon: <FaMicrophone /> },
  { id: 19, name: 'MUN', icon: <FaMapMarkerAlt /> },
  { id: 21, name: 'Opening Ceremony', icon: <FaVideo /> },
  { id: 22, name: 'Committee session', icon: <FaCalendar /> },
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
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('up');
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [isScrolling, setIsScrolling] = useState(true);

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

  useEffect(() => {
    if (searchTerm) {
      console.log('Search Item');
      const matchedItem = items.find(
        (item) => item.name.toLowerCase() === searchTerm.toLowerCase(),
      );
      if (matchedItem && scrollerRef.current) {
        console.log('Item found');
        setIsScrolling(false);
        const matchedElement = scrollerRef.current.children[
          items.indexOf(matchedItem)
        ] as HTMLElement;
        if (matchedElement && containerRef.current) {
          const containerHeight = containerRef.current.clientHeight;
          const elementOffsetTop = matchedElement.offsetTop;
          const elementHeight = matchedElement.clientHeight;
          const scrollTop =
            elementOffsetTop - containerHeight / 2 + elementHeight / 2;
          containerRef.current.scrollTo({
            top: scrollTop,
            behavior: 'smooth',
          });
        }
      } else {
        setIsScrolling(true);
      }
    } else {
      setIsScrolling(true);
    }
  }, [searchTerm]);

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
      containerRef.current.style.setProperty('--animation-duration', '150s');
    }
  };

  const getSuggestions = (searchTerm: string) => {
    if (!searchTerm) return [];
    const term = searchTerm.toLowerCase();
    return items
      .filter((item) => item.name.toLowerCase().includes(term))
      .sort(
        (a, b) =>
          a.name.toLowerCase().indexOf(term) -
          b.name.toLowerCase().indexOf(term),
      )
      .slice(0, 6);
  };

  const suggestions = getSuggestions(searchTerm);

  return (
    <div className='h-[200vh]'>
      <div className='sticky top-0 grid h-screen grid-cols-1 items-center justify-center gap-3 overflow-hidden bg-gray-100 px-10 text-gray-800 md:grid-cols-2 md:px-20'>
        <div className='grid gap-5'>
          <div className='font-bold md:text-6xl'>
            Search through all events from <br /> TENET 2024
          </div>

          <button
            onClick={() => router.push('/events')}
            className='rounded-2xl border-2 border-dashed border-black bg-white px-6 py-3 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none'
          >
            <span>View all events</span>
          </button>
          <div className='w-full'>
            <input
              type='text'
              className='mb-2 h-[60px] w-full rounded-full border border-gray-400 p-3 px-8 text-xl'
              placeholder='Search events'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm.length > 0 && (
              <div className='grid gap-4 rounded-3xl border border-gray-400 bg-white px-8 py-5 text-gray-400'>
                {suggestions.slice(0, 6).map((item) => (
                  <div
                    key={item.id}
                    className='grid cursor-pointer items-center text-xl hover:text-gray-700'
                    onClick={() => setSearchTerm(item.name)}
                  >
                    {item.name}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div
          ref={containerRef}
          className='scroller z-20 mt-8 h-2/3 w-full overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,white_20%,white_80%,transparent)]'
        >
          <ul
            ref={scrollerRef}
            className={cn(
              'flex w-max min-w-full shrink-0 flex-col flex-nowrap gap-3 py-4',
              start && isScrolling && 'animate-scroll',
            )}
          >
            {items.map((item) => (
              <div
                key={item.id}
                className='scroll-item flex items-center p-4 text-xl lg:text-4xl'
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
    </div>
  );
};
