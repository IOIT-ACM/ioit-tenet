/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import '@/styles/search.css';
import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useSearch } from '@/hooks/use-search';
import * as FaIcons from 'react-icons/fa';
import * as IoIcons from 'react-icons/io5';
import * as BsIcons from 'react-icons/bs';
import * as GiIcons from 'react-icons/gi';
import * as Fcicon from 'react-icons/fc';
import { GiGameConsole } from 'react-icons/gi';

type IconMap = Record<string, React.ElementType>;

const iconMap: IconMap = {
  FaCalendar: FaIcons.FaCalendar,
  FaRobot: FaIcons.FaRobot,
  FaCamera: FaIcons.FaCamera,
  FaStar: FaIcons.FaStar,
  FaVideo: FaIcons.FaVideo,
  FaTheaterMasks: FaIcons.FaTheaterMasks,
  FaMicrophone: FaIcons.FaMicrophone,
  IoRocket: IoIcons.IoRocketSharp,
  IoMusicalNotes: IoIcons.IoMusicalNotesSharp,
  BsShieldLock: BsIcons.BsShieldLock,
  GiArtificialIntelligence: GiIcons.GiArtificialIntelligence,
  FcGlobe: Fcicon.FcGlobe,
  IoGameController: GiGameConsole,
};

export const SearchEvents: React.FC = () => {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [isScrolling, setIsScrolling] = useState(true);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState<
    number | null
  >(null);
  const [scrollHeight, setScrollHeight] = useState(0);
  const { allItems } = useSearch();

  useEffect(() => {
    if (scrollerRef.current) {
      const height = scrollerRef.current.scrollHeight;
      setScrollHeight(height);
    }
  }, [allItems]);

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

  useEffect(() => {
    if (suggestions.length > 0 && activeSuggestionIndex === null) {
      setActiveSuggestionIndex(0);
    }
  }, [suggestions]);

  return (
    <div id='search' className='h-[100vh] bg-neutral-950'>
      <div className='sticky top-0 grid h-[90vh] grid-cols-1 justify-center gap-3 overflow-hidden bg-neutral-950 px-10 text-slate-300 md:h-screen md:grid-cols-2 md:items-center md:px-20'>
        <div className='grid gap-5 md:-translate-y-[20%] md:px-10'>
          <div className='text-4xl font-bold md:text-6xl'>Search TENET</div>

          <div className='grid grid-cols-2 gap-3'>
            <button
              onClick={() =>
                setTimeout(() => {
                  router.push('/events');
                }, 500)
              }
              className='rounded-2xl border-2 border-dashed border-black bg-slate-200 py-2 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_slate] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none md:px-6 md:py-3'
            >
              <span>All Events</span>
            </button>
            <button
              onClick={() =>
                setTimeout(() => {
                  router.push('/speakers');
                }, 500)
              }
              className='rounded-2xl border-2 border-dashed border-black bg-slate-200 py-2 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_slate] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none md:px-6 md:py-3'
            >
              <span>Speakers</span>
            </button>
          </div>
          <div className='relative w-full'>
            <input
              type='text'
              className='text-md mb-2 h-[50px] w-full rounded-full border-2 p-3 px-5 text-slate-200 md:h-[60px] md:px-8 md:text-xl'
              placeholder='Search events and speakers'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm &&
              allItems.find(
                (item) => item.name.toLowerCase() === searchTerm.toLowerCase(),
              ) && (
                <Link
                  className='absolute -bottom-5 left-0 text-blue-400'
                  href={
                    allItems.find(
                      (item) =>
                        item.name.toLowerCase() === searchTerm.toLowerCase(),
                    )?.type === 'speaker'
                      ? `/speakers/${
                          allItems.find(
                            (item) =>
                              item.name.toLowerCase() ===
                              searchTerm.toLowerCase(),
                          )?.id
                        }`
                      : `/events/${
                          allItems.find(
                            (item) =>
                              item.name.toLowerCase() ===
                              searchTerm.toLowerCase(),
                          )?.id
                        }`
                  }
                >
                  View details
                </Link>
              )}
            <AnimatePresence>
              {searchTerm.length > 0 &&
                suggestions.length > 0 &&
                suggestions[0]?.name.toLowerCase() !==
                  searchTerm.toLowerCase() && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className='absolute z-50 mt-1 w-full overflow-y-auto rounded-xl border border-slate-400 bg-white text-slate-400 md:max-h-[250px] md:rounded-3xl'
                  >
                    {suggestions.slice(0, 7).map((item, index) => (
                      <div
                        key={item.id}
                        className={cn(
                          'grid cursor-pointer items-center px-5 py-2 text-sm hover:text-slate-700 md:px-8 md:py-3 md:text-xl',
                          activeSuggestionIndex === index && 'bg-slate-200',
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
              'flex w-max min-w-full shrink-0 flex-col flex-nowrap py-2 md:gap-2',
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
                className='scroll-item z-[9999999] flex cursor-pointer items-center p-2 text-sm sm:text-lg md:p-4 md:text-xl'
              >
                {item.type === 'speaker' ? (
                  <Image
                    src={item.icon}
                    alt={`Profile image of ${item.name}`}
                    width={48}
                    height={48}
                    className='mr-4 h-[35px] w-[35px] rounded-full object-cover md:h-[55px] md:w-[55px]'
                  />
                ) : (
                  <div className='mr-4 flex h-[35px] w-[35px] items-center justify-center rounded-full border-2 bg-white text-2xl text-black md:h-[55px] md:w-[55px] md:text-3xl'>
                    {renderIcon(item.icon)}
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

function renderIcon(iconName: string) {
  const IconComponent = iconMap[iconName];
  return IconComponent ? <IconComponent /> : null;
}
