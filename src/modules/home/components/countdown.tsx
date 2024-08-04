'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const COUNTDOWN_FROM = '2024-10-04';

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

type Unit = 'Day' | 'Hour' | 'Minute' | 'Second';

const ShiftingCountdown: React.FC = () => (
  <div className='bg-gradient-to-br from-violet-600 to-blue-600 p-4 py-14'>
    <h1 className='mb-10 animate-bounce text-center text-4xl text-white md:text-6xl'>
      TENET BEGINS IN
    </h1>
    <div className='mx-auto flex w-full max-w-5xl items-center bg-white'>
      <CountdownItem unit='Day' text='days' />
      <CountdownItem unit='Hour' text='hours' />
      <CountdownItem unit='Minute' text='minutes' />
      <CountdownItem unit='Second' text='seconds' />
    </div>
  </div>
);

const CountdownItem: React.FC<{ unit: Unit; text: string }> = ({
  unit,
  text,
}) => {
  const { time } = useTimer(unit);

  return (
    <div className='flex h-24 w-1/4 flex-col items-center justify-center gap-1 border-r-[6px] border-slate-200 font-mono md:h-36 md:gap-2'>
      <AnimatePresence mode='popLayout'>
        <motion.span
          key={time}
          initial={{ y: '50%', opacity: 0 }}
          animate={{ y: '0%', opacity: 1 }}
          exit={{ y: '-50%', opacity: 0 }}
          transition={{ duration: 0.35 }}
          className='block text-2xl font-medium text-black md:text-4xl lg:text-6xl xl:text-7xl'
        >
          {time}
        </motion.span>
      </AnimatePresence>
      <span className='text-xs font-light text-slate-500 md:text-sm lg:text-base'>
        {text}
      </span>
    </div>
  );
};

const useTimer = (unit: Unit) => {
  const [time, setTime] = useState(0);
  const endDateRef = useRef(new Date(COUNTDOWN_FROM));

  const calculateTime = useCallback(() => {
    const now = new Date();
    const distance = endDateRef.current.getTime() - now.getTime();

    switch (unit) {
      case 'Day':
        return Math.floor(distance / DAY);
      case 'Hour':
        return Math.floor((distance % DAY) / HOUR);
      case 'Minute':
        return Math.floor((distance % HOUR) / MINUTE);
      case 'Second':
        return Math.floor((distance % MINUTE) / SECOND);
    }
  }, [unit]);

  useEffect(() => {
    const updateTime = () => {
      const newTime = calculateTime();
      if (newTime !== time) {
        setTime(newTime);
      }
    };

    updateTime();
    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, [calculateTime, time]);

  return { time };
};

export default ShiftingCountdown;
