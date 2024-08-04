'use client';

import { motion, useTransform, useScroll } from 'framer-motion';
import { useRef } from 'react';

export const HorizontalScroll = () => {
  return (
    <div className='bg-neutral-800'>
      <div className='flex h-56 items-center justify-center'>
        <span className='text-5xl font-semibold uppercase text-neutral-500'>
          Explore events at TENET 2024
        </span>
      </div>
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ['1%', '-73%']);

  return (
    <section ref={targetRef} className='relative h-[300vh] bg-neutral-900'>
      <div className='sticky top-0 flex h-screen items-center overflow-hidden'>
        <motion.div style={{ x }} className='flex gap-14'>
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }: { card: CardType }) => {
  return (
    <div
      key={card.id}
      className='group relative h-[450px] w-[450px] cursor-pointer overflow-hidden rounded-xl border-2 border-white bg-neutral-200'
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className='absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110'
      ></div>
      <div className='absolute inset-0 z-10 grid place-content-center overflow-hidden rounded-full'>
        <p className='rounded-full bg-gradient-to-br from-white/20 to-white/0 p-8 text-3xl uppercase text-white backdrop-blur-xl'>
          {card.title}
        </p>
      </div>
    </div>
  );
};

type CardType = {
  url: string;
  title: string;
  id: number;
};

const cards: CardType[] = [
  {
    url: '/imgs/events/1.jpeg',
    title: 'Tech-Fiesta',
    id: 1,
  },
  {
    url: '/imgs/events/2.jpeg',
    title: 'WEB 3',
    id: 2,
  },
  {
    url: '/imgs/events/3.jpeg',
    title: 'Drone/Robotics',
    id: 3,
  },
  {
    url: '/imgs/events/4.jpeg',
    title: 'E-Summit',
    id: 4,
  },
  {
    url: '/imgs/events/5.jpeg',
    title: 'Stand UP',
    id: 5,
  },
  {
    url: '/imgs/events/6.jpeg',
    title: 'Creators Conclave',
    id: 6,
  },
  {
    url: '/imgs/events/7.jpeg',
    title: 'Theater act',
    id: 7,
  },
  {
    url: '/imgs/events/8.jpeg',
    title: 'LAN Tournaments',
    id: 8,
  },
  {
    url: '/imgs/events/9.jpeg',
    title: 'E-Sports',
    id: 9,
  },
  {
    url: '/imgs/events/10.jpeg',
    title: 'Coding Games',
    id: 10,
  },
];
