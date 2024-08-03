'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, type AnimationControls } from 'framer-motion';

interface Item {
  id: number;
  name: string;
}

const items: Item[] = [
  { id: 1, name: 'Tech-Fiesta' },
  { id: 2, name: 'Product Management Conference' },
  { id: 3, name: 'Business Intelligence Conference' },
  { id: 4, name: 'Capture the Flag' },
  { id: 5, name: 'Fun games (AR/VR, coding games)' },
  { id: 6, name: 'Web - 3 Conference' },
  { id: 7, name: "LLM's Application in Industry Conference" },
  { id: 8, name: 'Drone/Robotics Workshop' },
  { id: 9, name: 'Gen Ai (LLM) Development Workshop' },
  { id: 10, name: 'Drone/Robotics Display' },
  { id: 11, name: 'E-Summit' },
  { id: 15, name: 'Break' },
  { id: 17, name: 'Pitching Competition Finals' },
  { id: 19, name: 'MUN' },
  { id: 21, name: 'Opening Ceremony' },
  { id: 22, name: 'Committee session' },
  { id: 23, name: 'Lunch' },
  { id: 24, name: 'Committee session' },
  { id: 25, name: 'High tea' },
  { id: 26, name: "Creator's Conclave" },
  { id: 29, name: 'Stand UP' },
  { id: 31, name: 'Theater act' },
  { id: 32, name: 'PUNE OPEN MIC' },
  { id: 33, name: 'Battle of comedians' },
  { id: 35, name: 'Main Stage Event' },
  { id: 36, name: 'E-Sports' },
  { id: 37, name: 'LAN Tournaments' },
  { id: 38, name: 'Competitions' },
  { id: 39, name: 'Experience Arenas' },
];

export const SearchEvents: React.FC = () => {
  const controls: AnimationControls = useAnimation();
  const listRef = useRef<HTMLDivElement>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [scrollSpeed, setScrollSpeed] = useState(20);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down');
  const [lastScrollTop, setLastScrollTop] = useState(0);

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

      // setScrollSpeed((prevSpeed) => prevSpeed + 20);
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
            duration: scrollSpeed,
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
      <div>
        <div className='mb-4 text-4xl font-bold'>
          Search through all events from TENET 2024
        </div>
        <div className='mb-8 text-lg'>
          Tenet is an anagram of Technology, Entrepreneurship, Negotiations,
          E-Sports, Trends
        </div>
        <input
          type='text'
          className='mb-4 rounded-full border border-gray-400 p-3'
          placeholder='Search events'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div
        className='relative mt-8 h-96 w-full max-w-sm overflow-hidden'
        ref={listRef}
      >
        <motion.div
          className='scroll-content absolute w-full'
          animate={controls}
          initial={{ y: 0 }}
        >
          {filteredItems.map((item) => (
            <div key={item.id} className='p-4'>
              {item.name}
            </div>
          ))}
        </motion.div>
        <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateY(0);
            }
            100% {
              transform: translateY(-100%);
            }
          }

          .scroll-content {
            display: flex;
            flex-direction: column;
            height: 100%;
            animation: scroll var(--scroll-speed) linear infinite;
          }
        `}</style>
      </div>
    </div>
  );
};
