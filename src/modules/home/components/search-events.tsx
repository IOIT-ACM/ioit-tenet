/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import '@/styles/search.css';
import React, { useEffect, useRef, useState } from 'react';
import {
  FaCalendar,
  FaRobot,
  FaCamera,
  FaStar,
  FaVideo,
  FaTheaterMasks,
  FaMicrophone,
} from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { speakers } from '@/config/speakers';
import type { Speaker } from '@/types';
import Image from 'next/image';

interface Item {
  id: string;
  name: string;
  icon: React.ReactNode;
  type?: string;
}

type SearchItem = Item | Speaker;

const items: Item[] = [
  {
    id: 'techfiesta-pmconference',
    name: 'Product Management/Consulting Conference',
    icon: <FaCalendar />,
  },
  {
    id: 'techfiesta-dataconference',
    name: 'How Data is used in Business Intelligence Conference',
    icon: <FaCalendar />,
  },
  { id: 'techfiesta-ctf', name: 'Capture the Flag', icon: <FaStar /> },
  {
    id: 'techfiesta-fungames',
    name: 'Fun games (AR/VR, coding games)',
    icon: <FaCamera />,
  },
  { id: 'techfiesta-web3', name: 'Web - 3 Conference', icon: <FaCalendar /> },
  {
    id: 'techfiesta-llmconference',
    name: "LLM's Application in Industry Conference",
    icon: <FaRobot />,
  },
  {
    id: 'techfiesta-droneworkshop',
    name: 'Drone & Robotics Workshop',
    icon: <FaRobot />,
  },
  {
    id: 'techfiesta-genaiworkshop',
    name: 'Gen AI (LLM) Development Workshop',
    icon: <FaCalendar />,
  },
  {
    id: 'techfiesta-dronedisplay',
    name: 'Drone & Robotics Display',
    icon: <FaRobot />,
  },
  {
    id: 'esummit-breakfast',
    name: 'Breakfast and Reporting',
    icon: <FaCalendar />,
  },
  { id: 'mun-opening', name: 'Opening Ceremony', icon: <FaVideo /> },
  {
    id: 'esummit-speaker1',
    name: 'Tier 3 Speaker Sessions x 3',
    icon: <FaMicrophone />,
  },
  {
    id: 'esummit-speaker2',
    name: 'Tier 2 Speaker Session',
    icon: <FaMicrophone />,
  },
  {
    id: 'esummit-speaker3',
    name: 'Tier 3 Speaker Sessions x 2',
    icon: <FaMicrophone />,
  },
  { id: 'esummit-lunch', name: 'Lunch Break', icon: <FaCalendar /> },
  {
    id: 'esummit-speaker4',
    name: 'Tier 2 Speaker Sessions x 2',
    icon: <FaMicrophone />,
  },
  { id: 'esummit-investors', name: 'Investors Meeting', icon: <FaCalendar /> },
  {
    id: 'esummit-closing',
    name: 'Closing Ceremony and Dinner',
    icon: <FaVideo />,
  },
  {
    id: 'creatorsconclave-openmic1',
    name: 'PUNE OPEN MIC (Session 1)',
    icon: <FaMicrophone />,
  },
  {
    id: 'creatorsconclave-standup1',
    name: 'Stand UP 1',
    icon: <FaMicrophone />,
  },
  {
    id: 'creatorsconclave-theater',
    name: 'Theater Act',
    icon: <FaTheaterMasks />,
  },
  {
    id: 'creatorsconclave-openmic2',
    name: 'PUNE OPEN MIC (Session 2)',
    icon: <FaMicrophone />,
  },
  {
    id: 'creatorsconclave-comedians',
    name: 'Battle of Comedians',
    icon: <FaStar />,
  },
  {
    id: 'creatorsconclave-prize',
    name: 'Prize Distribution',
    icon: <FaStar />,
  },
  {
    id: 'creatorsconclave-mainstage',
    name: 'Main Stage Event',
    icon: <FaCalendar />,
  },
  { id: 'esports-lantournaments', name: 'LAN Tournaments', icon: <FaCamera /> },
  { id: 'esports-competitions', name: 'Competitions', icon: <FaStar /> },
  { id: 'esports-experience', name: 'Experience Arenas', icon: <FaCalendar /> },
  {
    id: 'mun-breakfast',
    name: 'Breakfast and Reporting',
    icon: <FaCalendar />,
  },
  {
    id: 'mun-committeesession3',
    name: 'Committee Session 3',
    icon: <FaCalendar />,
  },
  { id: 'mun-lunch', name: 'Lunch', icon: <FaCalendar /> },
  {
    id: 'mun-committeesession4',
    name: 'Committee Session 4',
    icon: <FaCalendar />,
  },
  {
    id: 'mun-closing',
    name: 'High Tea and Closing Ceremony',
    icon: <FaCalendar />,
  },
];

const allItems: SearchItem[] = [
  ...speakers.map((speaker) => ({ ...speaker, type: 'speaker' as const })),
  ...items.map((event) => ({ ...event, type: 'event' as const })),
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
  }, []);

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
      const matchedItem = allItems.find(
        (item) => item.name.toLowerCase() === searchTerm.toLowerCase(),
      );
      if (matchedItem && scrollerRef.current) {
        setIsScrolling(false);
        const matchedElement = scrollerRef.current.children[
          allItems.indexOf(matchedItem)
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
    return allItems
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
    <div id='search' className='h-[100vh] bg-neutral-950'>
      <div className='sticky top-0 grid h-screen grid-cols-1 items-center justify-center gap-3 overflow-hidden bg-neutral-950 px-10 text-gray-300 md:grid-cols-2 md:px-20'>
        <div className='grid gap-5 md:-translate-y-[20%] md:px-10'>
          <div className='text-center text-4xl font-bold md:text-6xl'>
            Search TENET
          </div>

          <div className='grid grid-cols-2 gap-3'>
            <button
              onClick={() =>
                setTimeout(() => {
                  router.push('/events');
                }, 500)
              }
              className='rounded-2xl border-2 border-dashed border-black bg-gray-200 py-2 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_gray] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none md:px-6 md:py-3'
            >
              <span>View all events</span>
            </button>
            <button
              onClick={() =>
                setTimeout(() => {
                  router.push('/events');
                }, 500)
              }
              className='rounded-2xl border-2 border-dashed border-black bg-gray-200 py-2 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_gray] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none md:px-6 md:py-3'
            >
              <span>View Speakers</span>
            </button>
          </div>
          <div className='relative w-full'>
            <input
              type='text'
              className='text-md mb-2 h-[50px] w-full rounded-full border-2 p-3 px-5 text-gray-200 md:h-[60px] md:px-8 md:text-xl'
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
                          'grid cursor-pointer items-center px-5 py-3 text-xl hover:text-gray-700 md:px-8',
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
            {allItems.map((item) => (
              <Link
                key={item.id}
                href={
                  item.type === 'speaker'
                    ? `/speakers/${item.id}`
                    : `/events/${item.id}`
                }
                className='scroll-item z-[9999999] flex cursor-pointer items-center p-2 text-lg sm:text-2xl md:p-4 md:text-3xl'
                onClick={() => setSearchTerm(item.name)}
              >
                {item.type === 'speaker' ? (
                  <Image
                    src={(item as Speaker).image}
                    alt={item.name}
                    width={48}
                    height={48}
                    className='mr-4 h-[65px] w-[65px] rounded-full object-cover'
                  />
                ) : (
                  <div className='text-md mr-4 flex h-[65px] w-[65px] items-center justify-center rounded-full border-2 bg-white text-black'>
                    {(item as Item).icon}
                  </div>
                )}
                {item.name}
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
