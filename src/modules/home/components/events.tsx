'use client';

import React, { useEffect, useState, useCallback, useRef } from 'react';
import { useIsMobile } from '@/hooks/useismobile';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import { ArrowRight } from 'lucide-react';

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
    description: 'E-Sports',
    color: 'bg-pink-600/90',
  },
  { title: 'T', description: 'Trends', color: 'bg-orange-600/90' },
];

const descriptionData = [
  {
    title: 'Technology',
    description:
      'Join TechFiesta to explore technology and innovation. Engage in conferences on product management, Web 3.0, and AI, plus workshops on drones and generative AI. Compete in Capture the Flag, connect with industry leaders, and expand your tech horizons.',
  },
  {
    title: 'Entrepreneurship',
    description:
      'E-Summit offers a journey into innovation, business, and marketing. Learn to transform ideas into businesses, hear success stories, and master marketing strategies. Network with industry leaders and attend workshops on business creation and securing sponsorships.',
  },
  {
    title: 'Negotiations',
    description:
      'Join IOIT MUN 2024 for a dynamic simulation of the UN. Represent countries, debate global issues, and enhance your public speaking and negotiation skills. Connect with like-minded individuals and participate in impactful resolutions and networking opportunities.',
  },
  {
    title: 'E-Sports',
    description:
      'Experience the thrill of eSports with our LAN tournaments. Step into an arena filled with energy and witness top-tier skill, strategy, and teamwork. Our event turns gaming into a spectacle, offering intense competition and excitement for players and spectators.',
  },
  {
    title: 'Trends',
    description:
      'Creators Conclave is a full-day creativity explosion. Enjoy open mic, stand-up battles, and theatre showcases. Participate in workshops, network with other creatives, and immerse yourself in a funfair atmosphere. Showcase your talent and connect with the creative community.',
  },
];

export const Events: React.FC = () => {
  const isMobile = useIsMobile();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAtTop, setIsAtTop] = useState(false);
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

      setIsAtTop(stackArea.getBoundingClientRect().top <= 0);
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
    <div
      id='events'
      className={`stack-area ${isAtTop ? 'rounded-none' : 'rounded-t-full'} relative mx-auto grid h-[1000vh] w-screen grid-cols-1 justify-center gap-8 bg-gray-700 pt-20 transition-all delay-0 duration-700 md:grid-cols-3`}
    >
      <div className='sticky top-0 flex h-screen flex-col items-center justify-center gap-3 sm:top-14 md:top-40 md:justify-start'>
        <AnimatePresence>
          {cardData.map((card, index) => (
            <motion.div
              key={card.description}
              className={`card relative flex h-[110px] w-[250px] cursor-pointer flex-col items-start justify-end rounded-xl hover:scale-105 ${card.color} p-3`}
              initial={{
                y: isMobile ? '100vh' : '160vh',
                opacity: 0,
                scale: 1,
              }}
              animate={{
                y: activeIndex >= index + 1 ? 0 : isMobile ? '100vh' : '160vh',
                opacity: activeIndex >= index + 1 ? 1 : 0,
                scale: activeIndex == index + 1 ? 1.1 : 1,
              }}
              exit={{ y: isMobile ? '100vh' : '100vh', opacity: 0, scale: 1 }}
              transition={{
                y: { type: 'spring', stiffness: 50, damping: 20 },
                opacity: { duration: 0.3 },
              }}
            >
              <div
                className={`${activeIndex == index + 1 ? 'text-3xl' : 'text-2xl'} absolute right-3 top-3 font-bold`}
              >
                {card.title}
              </div>
              <div className='h-fit w-fit rounded-full bg-white/30 px-3 py-1 text-lg'>
                {card.description}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className='sticky top-40 hidden h-screen items-start text-center md:flex'>
        {/* Debuggind activeindex!!!!!! */}
        {/* {activeIndex} */}
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

      <div className='sticky top-0 hidden h-screen items-center text-center md:flex'>
        <div className='relative h-[300px] w-[400px]'>
          <AnimatePresence initial={false}>
            {activeIndex <= 5 &&
              descriptionData.map(
                (item, index) =>
                  activeIndex === index + 1 && (
                    <motion.div
                      key={item.title}
                      initial={{
                        y: scrollDirection === 'down' ? 300 : -300,
                        opacity: 0,
                        scale: 0.7,
                      }}
                      animate={{ y: 0, opacity: 1, scale: 1 }}
                      exit={{
                        y: scrollDirection === 'down' ? -300 : 300,
                        opacity: 0,
                        scale: 0.7,
                      }}
                      transition={{ duration: 0.5 }}
                      className='absolute inset-0 overflow-hidden rounded-lg bg-gray-200 p-6 shadow-lg'
                    >
                      <h2 className='text-2xl font-bold md:text-3xl'>
                        {item.title}
                      </h2>
                      <Separator className='my-5 bg-black' />
                      <p>{item.description}</p>
                    </motion.div>
                  ),
              )}

            {activeIndex == 6 && (
              <motion.div
                key='browse-events'
                initial={{
                  y: scrollDirection === 'down' ? 300 : -300,
                  opacity: 0,
                  scale: 0.7,
                }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                exit={{
                  y: scrollDirection === 'down' ? -300 : 300,
                  opacity: 0,
                  scale: 0.7,
                }}
                transition={{ duration: 0.5 }}
                className='absolute inset-0 flex items-center justify-center overflow-hidden rounded-lg bg-gray-200 p-6 shadow-lg'
              >
                <Link
                  href={'/events'}
                  className='text-end text-2xl font-semibold md:text-4xl'
                >
                  Browse All Events <ArrowRight />
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
