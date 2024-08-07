'use client';

import { motion, useTransform, useScroll } from 'framer-motion';
import Link from 'next/link';
import { useRef } from 'react';

export const HorizontalScroll = () => {
  return (
    <div className='bbg-neutral-950'>
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ['2%', '-69%']);

  return (
    <section ref={targetRef} className='relative h-[300vh]'>
      <div className='sticky top-0 flex h-screen items-center overflow-hidden'>
        <motion.div style={{ x }} className='flex gap-14'>
          <motion.span
            initial={{ x: 30, scale: 0.5, opacity: 0.3 }}
            whileInView={{ x: 0, scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 60 }}
            className='w-fit text-left text-5xl font-semibold uppercase text-neutral-300'
          >
            Explore <br /> events <br /> at <br /> TENET 2024
          </motion.span>
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}

          <Link
            href={'/events'}
            className='group relative h-[450px] w-[250px] cursor-pointer overflow-hidden rounded-full border-2 border-white bg-neutral-200 md:w-[450px]'
          >
            <div
              style={{
                backgroundImage: `url(/tenet.png)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              className='absolute inset-0 z-0 transition-transform duration-300'
            ></div>
            <div className='absolute inset-0 z-10 grid place-content-center overflow-hidden rounded-full'>
              <p className='rounded-full border-2 border-black bg-gradient-to-br from-white/20 to-white/0 p-8 text-3xl uppercase text-white ring-1 ring-white backdrop-blur-xl'>
                View All Events
              </p>
            </div>
          </Link>
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
  link: string;
  id: number;
};

const cards: CardType[] = [
  {
    url: '/imgs/events/1.jpeg',
    link: '/events/techfiesta/games',
    title: 'Tech-Fiesta',
    id: 1,
  },
  {
    url: '/imgs/events/2.jpeg',
    link: '/events/techfiesta/games',
    title: 'WEB 3',
    id: 2,
  },
  {
    url: '/imgs/events/3.jpeg',
    link: '/events/techfiesta/games',
    title: 'Drone/Robotics',
    id: 3,
  },
  {
    url: '/imgs/events/4.jpeg',
    link: '/events/techfiesta/games',
    title: 'E-Summit',
    id: 4,
  },
  {
    url: '/imgs/events/5.jpeg',
    link: '/events/techfiesta/games',
    title: 'Stand UP',
    id: 5,
  },
  {
    url: '/imgs/events/6.jpeg',
    link: '/events/techfiesta/games',
    title: 'Creators Conclave',
    id: 6,
  },
];
