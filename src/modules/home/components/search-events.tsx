'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, type AnimationControls } from 'framer-motion';
import { useQuery } from '@tanstack/react-query';

interface Item {
  id: number;
  name: string;
}

const items: Item[] = [
  { id: 1, name: 'Tech-Fiesta' },
  { id: 2, name: 'Product Management Conference' },
  { id: 3, name: 'Data in Business Intelligence' },
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
  { id: 34, name: 'Prize Distribution' },
  { id: 35, name: 'Main Stage Event' },
  { id: 36, name: 'E-Sports' },
  { id: 37, name: 'LAN Tournaments' },
  { id: 38, name: 'Competitions' },
  { id: 39, name: 'Experience Arenas' },
  { id: 43, name: 'High tea and Closing Ceremony' },
];

const fetchItems = async (): Promise<Item[]> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(items), 1000);
  });
};

export const SearchEvents: React.FC = () => {
  const { data, isLoading } = useQuery<Item[]>({
    queryKey: ['items'],
    queryFn: fetchItems,
  });

  const controls: AnimationControls = useAnimation();
  const listRef = useRef<HTMLDivElement>(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const startAnimation = async () => {
      await controls.start({
        y: [0, -100 * items.length],
        transition: {
          duration: 60,
          ease: 'linear',
          repeat: Infinity,
        },
      });
    };

    startAnimation().catch((error) => {
      console.error('Animation error:', error);
    });
  }, [controls]);

  const handleSearch = () => {
    const item = items.find((i) =>
      i.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );
    if (item && listRef.current) {
      const itemElement = document.getElementById(`item-${item.id}`);
      if (itemElement) {
        listRef.current.scrollTo({
          top: itemElement.offsetTop,
          behavior: 'smooth',
        });
        controls.stop();
      }
    }
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className='flex min-h-screen flex-col items-center justify-center bg-gray-100'>
      <div className='mb-4 text-4xl font-bold'>1,800+ chains. One wallet.</div>
      <div className='mb-8 text-lg'>
        Ctrl Wallet supports millions of assets and NFTs on 1,800+ blockchains.
      </div>
      <input
        type='text'
        className='mb-4 rounded border border-gray-400 p-2'
        placeholder='Search'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button
        className='rounded bg-blue-500 p-2 text-white'
        onClick={handleSearch}
      >
        Search
      </button>
      <div
        className='relative mt-8 h-96 w-full max-w-sm overflow-hidden'
        ref={listRef}
      >
        <motion.div
          className='absolute w-full'
          animate={controls}
          initial={{ y: 0 }}
        >
          {data?.concat(data).map((item, index) => (
            <div
              key={index}
              id={`item-${item.id}`}
              className='border-b border-gray-200 bg-white p-4'
            >
              {item.name}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
