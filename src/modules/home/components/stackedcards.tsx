'use client';

import React, { useEffect, useState, useCallback } from 'react';
import { useIsMobile } from '@/hooks/useismobile';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const cardData = [
  {
    title: 'T',
    description: 'Technology',
    color: 'bg-blue-600/90',
  },
  {
    title: 'E',
    description: 'Entrepreneurship',
    color: 'bg-red-600/90',
  },
  {
    title: 'N',
    description: 'Negotiations',
    color: 'bg-purple-600/90',
  },
  {
    title: 'E',
    description: 'Entrepreneurship',
    color: 'bg-pink-600/90',
  },
  { title: 'T', description: 'Trends', color: 'bg-orange-600/90' },
];

const StackedCards: React.FC = () => {
  const isMobile = useIsMobile();
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = useCallback(() => {
    const stackArea = document.querySelector<HTMLDivElement>('.stack-area');
    if (stackArea) {
      const proportion =
        stackArea.getBoundingClientRect().top / window.innerHeight;
      if (proportion <= 0) {
        const n = cardData.length;
        let index = Math.ceil((proportion * n) / 2);
        index = Math.abs(index);
        setActiveIndex(index);
      }
    }
  }, []);

  const adjustLayout = useCallback(() => {
    const windowWidth = window.innerWidth;
    const left = document.querySelector<HTMLDivElement>('.left');
    const stackArea = document.querySelector<HTMLDivElement>('.stack-area');
    if (left && stackArea) {
      if (windowWidth < 800) {
        stackArea.insertAdjacentElement('beforebegin', left);
      } else {
        stackArea.insertAdjacentElement('afterbegin', left);
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', adjustLayout);
    adjustLayout();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', adjustLayout);
    };
  }, [handleScroll, adjustLayout]);

  const getImageIndex = (index: number) => {
    return index > 5 ? 0 : index;
  };

  return (
    <div className='min-w-screen stack-area relative flex h-[400vh] w-full justify-center gap-5'>
      <div className='sticky top-0 flex h-screen flex-col items-center justify-center gap-3'>
        <AnimatePresence>
          {cardData.map((card, index) => (
            <motion.div
              key={card.description}
              className={`card relative flex h-[100px] w-[250px] flex-col items-end justify-between rounded-xl ${card.color} p-3`}
              initial={{ y: isMobile ? '100vh' : '160vh' }}
              animate={{
                y: activeIndex >= index + 1 ? 0 : isMobile ? '100vh' : '160vh',
              }}
              exit={{ y: isMobile ? '100vh' : '160vh' }}
            >
              <div className='absolute right-2 top-2 text-4xl font-bold'>
                {card.title}
              </div>
              <div className='h-fit w-fit rounded-full bg-white/30 px-3 py-1 text-xl'>
                {card.description}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <div className='sticky top-0 hidden h-screen items-center justify-center text-center md:flex'>
        <div className='relative h-[600px] w-[400px] overflow-hidden'>
          <AnimatePresence initial={false}>
            <motion.div
              key={activeIndex}
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '-100%' }}
              transition={{ duration: 0.5 }}
              className='absolute inset-0'
            >
              <Image
                src={`/tenet/${getImageIndex(activeIndex)}.jpeg`}
                alt={`Tenet image ${getImageIndex(activeIndex)}`}
                layout='fill'
                objectFit='cover'
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      <div className='sticky top-0 hidden h-screen items-center justify-center text-center md:flex'>
        <div className='rounded-lg bg-gray-200 p-6 shadow-lg'>
          <h2 className='mb-4 text-2xl font-bold'>Static Text</h2>
          <p>This is a static card on the right side.</p>
        </div>
      </div>
    </div>
  );
};

export default StackedCards;
