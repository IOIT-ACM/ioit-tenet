'use client';

import React, { useEffect, useState } from 'react';
import { useIsMobile } from '@/hooks/useismobile';
import Image from 'next/image';
import { motion } from 'framer-motion';

const cardData = [
  {
    title: 'T',
    description: 'Technology',
    color: 'bg-blue-600/90',
    zIndex: 50,
  },
  {
    title: 'E',
    description: 'Entrepreneurship',
    color: 'bg-red-600/90',
    zIndex: 40,
  },
  {
    title: 'N',
    description: 'Negotiations',
    color: 'bg-purple-600/90',
    zIndex: 30,
  },
  {
    title: 'E',
    description: 'Entrepreneurship',
    color: 'bg-pink-600/90',
    zIndex: 20,
  },
  {
    title: 'T',
    description: 'Trends',
    color: 'bg-orange-600/90',
    zIndex: 10,
  },
];

const images = ['/T.jpg', 'En.avif', 'N.jpg', 'Es.webp', 'T.webp'];

const StackedCards: React.FC = () => {
  const isMobile = useIsMobile();
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    const handleScroll = () => {
      const stackArea = document.querySelector<HTMLDivElement>('.stack-area');
      if (stackArea) {
        const proportion =
          stackArea.getBoundingClientRect().top / window.innerHeight;
        if (proportion <= 0) {
          const n = cardData.length;
          let index = Math.ceil((proportion * n) / 2);
          index = Math.abs(index) - 1;
          setActiveIndex(index);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const adjust = () => {
      const windowWidth = window.innerWidth;
      const left = document.querySelector<HTMLDivElement>('.left');
      if (left) {
        const stackArea = document.querySelector<HTMLDivElement>('.stack-area');
        if (windowWidth < 800) {
          stackArea?.insertAdjacentElement('beforebegin', left);
        } else {
          stackArea?.insertAdjacentElement('afterbegin', left);
        }
      }
    };

    adjust();
    window.addEventListener('resize', adjust);
    return () => {
      window.removeEventListener('resize', adjust);
    };
  }, []);

  return (
    <div className='min-w-screen min-h-screen'>
      <div className='stack-area relative flex h-[400vh] w-full justify-center'>
        <div className='sticky top-0 flex h-screen items-center justify-center'>
          <div className='cards grid h-fit w-full gap-3'>
            {cardData.map((card, index) => (
              <motion.div
                key={index}
                className={`card relative flex h-[100px] w-[250px] flex-col items-end justify-between rounded-xl ${card.color} grid p-3`}
                // style={{
                //   zIndex: card.zIndex,
                // }}
                initial={{
                  y: isMobile ? '100vh' : '160vh',
                }}
                animate={{
                  y: activeIndex >= index ? 0 : isMobile ? '100vh' : '160vh',
                }}
                // transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className='absolute right-2 top-2 text-4xl font-bold'>
                  {card.title}
                </div>
                <div className='h-fit w-fit rounded-full bg-white/30 px-3 py-1 text-xl'>
                  {card.description}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div className='sticky top-0 hidden h-screen items-center justify-center text-center md:flex'>
          <Image
            src={`/tenet/${images[activeIndex < 4 || activeIndex > 1 ? activeIndex + 1 : 0]}`}
            alt={`Tenet image ${activeIndex}`}
            height={200}
            width={200}
          />
        </div>
      </div>
    </div>
  );
};

export default StackedCards;
