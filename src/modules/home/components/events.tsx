'use client';

import React, { useEffect, useState, useCallback, useRef } from 'react';
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

export const Events: React.FC = () => {
  const isMobile = useIsMobile();
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down');
  const lastScrollTop = useRef(0);
  const lastActiveIndex = useRef(0);

  const handleScroll = useCallback(() => {
    const stackArea = document.querySelector<HTMLDivElement>('.stack-area');
    if (stackArea) {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const proportion =
        stackArea.getBoundingClientRect().top / window.innerHeight;
      if (proportion <= 0) {
        const n = cardData.length;
        let index = Math.ceil((proportion * n) / 6);
        index = Math.abs(index);

        // Add a threshold to prevent small scroll changes from triggering a card change
        const threshold = 0.7; // Adjust this value to fine-tune scroll card sensitivity
        if (Math.abs(index - lastActiveIndex.current) >= threshold) {
          setScrollDirection(scrollTop > lastScrollTop.current ? 'down' : 'up');
          lastScrollTop.current = scrollTop;
          setActiveIndex(index);
          lastActiveIndex.current = index;
        }
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

  const getAnimationProps = (index: number) => {
    if (index > 5) {
      return {};
    }
    return {
      initial: { y: scrollDirection === 'down' ? '100%' : '-100%' },
      animate: { y: 0 },
      exit: { y: scrollDirection === 'down' ? '-100%' : '100%' },
      transition: { duration: 0.5 },
    };
  };

  return (
    <div className='min-w-screen stack-area relative mx-auto grid h-[900vh] w-full grid-cols-1 justify-center gap-8 md:grid-cols-3'>
      <div className='sticky top-0 flex h-screen flex-col items-center justify-center gap-3 sm:top-14 md:top-40 md:justify-start'>
        <AnimatePresence>
          {cardData.map((card, index) => (
            <motion.div
              key={card.description}
              className={`card relative flex h-[110px] w-[250px] cursor-pointer flex-col items-start justify-end rounded-xl hover:scale-105 ${card.color} p-3`}
              initial={{ y: isMobile ? '100vh' : '160vh', opacity: 0 }}
              animate={{
                y: activeIndex >= index + 1 ? 0 : isMobile ? '100vh' : '160vh',
                opacity: activeIndex >= index + 1 ? 1 : 0,
              }}
              exit={{ y: isMobile ? '100vh' : '100vh', opacity: 0 }}
              transition={{
                y: { type: 'spring', stiffness: 50, damping: 20 },
                opacity: { duration: 0.3 },
              }}
            >
              <div className='absolute right-3 top-3 text-4xl font-bold'>
                {card.title}
              </div>
              <div className='h-fit w-fit rounded-full bg-white/30 px-3 py-1 text-xl'>
                {card.description}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className='sticky top-40 hidden h-screen items-start text-center md:flex'>
        <div className='relative h-[600px] w-full overflow-hidden rounded-xl border-2 border-black'>
          <AnimatePresence initial={false}>
            <motion.div
              key={activeIndex}
              {...getAnimationProps(activeIndex)}
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
