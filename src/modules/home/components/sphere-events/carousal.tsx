/* eslint-disable react-hooks/exhaustive-deps */

import Link from 'next/link';
import { day1, day2, day3 } from '@/config/events';
import { useEffect, useState } from 'react';
import { HiCalendar } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { useIsMobile } from '@/hooks/useismobile';

export function Carousal() {
  const mobile = useIsMobile();
  const allEvents = [...day1, ...day2, ...day3]
    .filter((event) => event.imp)
    .filter((event) => event.domain !== 'mun');

  const [yTranslations, setYTranslations] = useState<number[]>([]);

  useEffect(() => {
    const translations = allEvents.map(
      () => Math.floor(Math.random() * 40) - 40,
    );
    setYTranslations(translations);
  }, []);

  return (
    <div className='absolute bottom-0 left-0 right-0 z-10 flex select-none items-center bg-opacity-50 pb-[5vh] md:px-20 md:pb-[15vh]'>
      <div className='no-scroll-bar flex h-fit gap-16 overflow-x-auto overflow-y-visible px-2 py-[80px] md:px-10'>
        {allEvents.map((event, index) => (
          <motion.div
            key={index}
            initial={{ scale: mobile ? 0.9 : 0.6 }}
            whileInView={{ scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 25,
              mass: 0.5,
              velocity: 2,
            }}
            viewport={{ amount: 0.3, once: false }}
            className='relative h-[200px] w-auto min-w-[200px] max-w-[250px] flex-shrink-0 md:h-[250px] md:max-w-[300px]'
          >
            <div
              className='h-full w-full'
              style={{
                transform: `translateY(${yTranslations[index]}px)`,
              }}
            >
              <Link href={'/events/' + event.id}>
                <div
                  className='relative h-full w-full rounded-lg border-2 border-dotted bg-contain bg-center bg-no-repeat shadow-lg'
                  style={{
                    backgroundImage: `url(${event.image})`,
                    backgroundSize: 'cover',
                  }}
                />
                <div className='mt-2 text-center'>
                  <h1 className='px-2 py-1 text-base font-bold text-white drop-shadow-md md:text-lg'>
                    {event.title}
                  </h1>
                  <p className='flex w-full items-center justify-center px-2 py-1 text-xs font-bold text-white drop-shadow-md'>
                    <HiCalendar className='mr-2 h-5 w-5' />
                    {event.date}
                  </p>
                </div>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
