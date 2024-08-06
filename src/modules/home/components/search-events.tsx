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
import { motion, AnimatePresence } from 'framer-motion';

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
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [isScrolling, setIsScrolling] = useState(true);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState<
    number | null
  >(null);
  const [scrollHeight, setScrollHeight] = useState(0);

  useEffect(() => {
    if (scrollerRef.current) {
      const height = scrollerRef.current.scrollHeight;
      setScrollHeight(height);

      const clonedItems = Array.from(scrollerRef.current.children).map(
        (child) => child.cloneNode(true),
      );
      clonedItems.forEach((item) => scrollerRef.current?.appendChild(item));
    }
  }, [items]);

  useEffect(() => {
    if (containerRef.current && scrollHeight > 0) {
      containerRef.current.style.setProperty(
        '--scroll-duration',
        `${scrollHeight / 100}s`,
      );
    }
  }, [scrollHeight]);

  useEffect(() => {
    addAnimation();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop =
        window.scrollY || document.documentElement.scrollTop;

      setLastScrollTop(currentScrollTop);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollTop]);

  useEffect(() => {
    if (searchTerm) {
      const matchedItem = items.find(
        (item) => item.name.toLowerCase() === searchTerm.toLowerCase(),
      );
      if (matchedItem && scrollerRef.current) {
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

  const getSuggestions = (searchTerm: string) => {
    if (!searchTerm) return [];
    const term = searchTerm.toLowerCase();
    return items
      .filter((item) => item.name.toLowerCase().includes(term))
      .sort(
        (a, b) =>
          a.name.toLowerCase().indexOf(term) -
          b.name.toLowerCase().indexOf(term),
      );
  };

  const suggestions = getSuggestions(searchTerm);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (suggestions.length > 0) {
        if (e.key === 'ArrowDown') {
          setActiveSuggestionIndex((prev) =>
            prev === null || prev === suggestions.length - 1 ? 0 : prev + 1,
          );
        } else if (e.key === 'ArrowUp') {
          setActiveSuggestionIndex((prev) =>
            prev === null || prev === 0 ? suggestions.length - 1 : prev - 1,
          );
        } else if (e.key === 'Enter' && activeSuggestionIndex !== null) {
          setSearchTerm(suggestions[activeSuggestionIndex]?.name ?? '');
          setActiveSuggestionIndex(null);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [suggestions, activeSuggestionIndex]);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getSpeed();
    }
  }

  const getSpeed = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty('--animation-duration', '150s');
    }
  };

  useEffect(() => {
    if (suggestions.length > 0) {
      if (!activeSuggestionIndex) {
        setActiveSuggestionIndex(0);
      }
    } else {
      setActiveSuggestionIndex(0);
    }
  }, [suggestions, searchTerm]);

  return (
    <div id='search' className='h-[200vh]'>
      <div className='sticky top-0 grid h-screen grid-cols-1 items-center justify-center gap-3 overflow-hidden bg-neutral-800 px-10 text-gray-300 md:grid-cols-2 md:px-20'>
        <div className='grid gap-5 md:-translate-y-[20%] md:px-10'>
          <div className='text-4xl font-bold md:text-6xl'>
            Search through all events from <br /> TENET 2024
          </div>

          <button
            onClick={() => router.push('/events')}
            className='rounded-2xl border-2 border-dashed border-black bg-gray-200 py-2 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none md:px-6 md:py-3'
          >
            <span>View all events</span>
          </button>
          <div className='relative w-full'>
            <input
              type='text'
              className='text-md mb-2 h-[50px] w-full rounded-full border-2 p-3 px-5 text-gray-700 md:h-[60px] md:px-8 md:text-xl'
              placeholder='Search events'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <AnimatePresence>
              {searchTerm.length > 0 &&
                suggestions.length > 0 &&
                suggestions[0]?.name.toLowerCase() !==
                  searchTerm.toLowerCase() && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className='absolute z-50 mt-1 w-full overflow-y-auto rounded-3xl border border-gray-400 bg-white text-gray-400 md:max-h-[250px]'
                  >
                    {suggestions.map((item, index) => (
                      <div
                        key={item.id}
                        className={cn(
                          'grid cursor-pointer items-center px-5 py-5 text-xl hover:text-gray-700 md:px-8',
                          activeSuggestionIndex === index && 'bg-gray-200',
                        )}
                        onClick={() => setSearchTerm(item.name)}
                      >
                        {item.name}
                      </div>
                    ))}
                  </motion.div>
                )}
            </AnimatePresence>
          </div>
        </div>
        <div
          ref={containerRef}
          className='scroller z-20 mt-8 h-5/6 w-full overflow-hidden md:h-2/3'
        >
          <ul
            ref={scrollerRef}
            className={cn(
              'flex w-max min-w-full shrink-0 flex-col flex-nowrap py-4 md:gap-3',
              isScrolling && 'animate-scroll',
            )}
            style={{ height: `${scrollHeight}px` }}
          >
            {items.map((item) => (
              <div
                key={item.id}
                className='scroll-item flex cursor-pointer items-center p-2 text-lg sm:text-2xl md:p-4 md:text-3xl'
                onClick={() => setSearchTerm(item.name)}
              >
                <div className='text-md mr-4 rounded-full border-2 bg-white p-3 text-black'>
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
