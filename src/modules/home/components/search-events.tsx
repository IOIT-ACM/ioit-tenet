'use client';

import '@/styles/search.css';
import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, type AnimationControls } from 'framer-motion';
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
  { id: 24, name: 'Committee session', icon: <FaCalendar /> },
  { id: 25, name: 'High tea', icon: <FaCalendar /> },
  { id: 26, name: "Creator's Conclave", icon: <FaStar /> },
  { id: 29, name: 'Stand UP', icon: <FaMicrophone /> },
  { id: 31, name: 'Theater act', icon: <FaVideo /> },
  { id: 32, name: 'PUNE OPEN MIC', icon: <FaMicrophone /> },
  { id: 33, name: 'Battle of comedians', icon: <FaStar /> },
  { id: 35, name: 'Main Stage Event', icon: <FaCalendar /> },
  { id: 36, name: 'E-Sports', icon: <FaCamera /> },
  { id: 37, name: 'LAN Tournaments', icon: <FaCamera /> },
  { id: 38, name: 'Competitions', icon: <FaCalendar /> },
  { id: 39, name: 'Experience Arenas', icon: <FaCalendar /> },
];

export const SearchEvents: React.FC = () => {
  const controls: AnimationControls = useAnimation();
  const listRef = useRef<HTMLDivElement>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down');
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [scrollSpeed, setScrollSpeed] = useState(2000);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop =
        window.scrollY || document.documentElement.scrollTop;

      if (currentScrollTop > lastScrollTop) {
        setScrollDirection('down');
      } else {
        setScrollDirection('down');
      }

      setLastScrollTop(currentScrollTop);
      setScrollSpeed((prevSpeed) => Math.max(2000, prevSpeed - 10));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollTop]);

  useEffect(() => {
    const startAnimation = async () => {
      if (listRef.current) {
        const listHeight = listRef.current.scrollHeight;
        await controls.start({
          y: scrollDirection === 'down' ? `-${listHeight}px` : '0',
          transition: {
            duration: scrollSpeed / 50,
            ease: 'linear',
            repeat: Infinity,
          },
        });
      }
    };

    startAnimation().catch((error) => {
      console.error('Animation error:', error);
    });
  }, [controls, scrollDirection, scrollSpeed]);

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className='grid min-h-screen grid-cols-1 items-center justify-center gap-3 bg-gray-100 px-10 md:grid-cols-2 md:px-20'>
      <div className='grid gap-5'>
        <div className='text-4xl font-bold'>
          Search through all events from TENET 2024
        </div>
        <div className='text-lg'>
          Tenet is an anagram of Technology, Entrepreneurship, Negotiations,
          E-Sports, Trends
        </div>

        <DrawOutlineButton />
        <input
          type='text'
          className='mb-4 rounded-full border border-gray-400 p-3'
          placeholder='Search events'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div
        className='scroll-container relative mt-8 h-2/3 w-full max-w-sm overflow-hidden'
        ref={listRef}
      >
        <motion.div
          className='scroll-content absolute w-full'
          animate={controls}
          initial={{ y: 0 }}
        >
          {filteredItems.map((item) => (
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
        </motion.div>
      </div>
    </div>
  );
};

const DrawOutlineButton = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push('/events')}
      className='group relative px-4 py-2 font-medium text-black transition-colors hover:text-gray-500'
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
