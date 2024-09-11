'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TenetLive from './live';

export const ShiftingCountdown = () => {
  const [isCountdownEnded, setIsCountdownEnded] = useState(false);

  return (
    <section id='timeline' className='flex items-center justify-center'>
      <div>
        {isCountdownEnded ? (
          <TenetLive />
        ) : (
          <>
            <p className='text-center text-4xl font-extrabold text-white md:text-9xl'>
              TENET BEGINS IN
            </p>
            <div className='z-50 p-4 py-8 md:py-14'>
              <div className='mx-auto flex w-full max-w-5xl flex-col items-center gap-4 bg-none md:flex-row'>
                <CountdownItem
                  unit='Day'
                  text='days'
                  setIsCountdownEnded={setIsCountdownEnded}
                />
                <CountdownItem
                  unit='Hour'
                  text='hours'
                  setIsCountdownEnded={setIsCountdownEnded}
                />
                <CountdownItem
                  unit='Minute'
                  text='minutes'
                  setIsCountdownEnded={setIsCountdownEnded}
                />
                <CountdownItem
                  unit='Second'
                  text='seconds'
                  setIsCountdownEnded={setIsCountdownEnded}
                />
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

const COUNTDOWN_TO = '2024-10-04T09:00:00';

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

type Unit = 'Day' | 'Hour' | 'Minute' | 'Second';

const CountdownItem: React.FC<{
  unit: Unit;
  text: string;
  setIsCountdownEnded: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ unit, text, setIsCountdownEnded }) => {
  const { time } = useTimer(unit, setIsCountdownEnded);

  return (
    <div className='flex h-24 w-1/4 min-w-28 flex-col items-center justify-center gap-1 rounded-xl bg-white font-mono md:h-36 md:gap-2'>
      <AnimatePresence mode='popLayout'>
        <motion.span
          key={time}
          initial={{ y: '50%', opacity: 0 }}
          animate={{ y: '0%', opacity: 1 }}
          exit={{ y: '-50%', opacity: 0 }}
          transition={{ duration: 0.35 }}
          className='block text-3xl font-medium text-black md:text-4xl lg:text-6xl xl:text-7xl'
        >
          {time}
        </motion.span>
      </AnimatePresence>
      <span className='text-xs font-light text-slate-500 md:text-lg lg:text-base'>
        {text}
      </span>
    </div>
  );
};

const useTimer = (
  unit: Unit,
  setIsCountdownEnded: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  const [time, setTime] = useState(0);
  const endDateRef = useRef(new Date(COUNTDOWN_TO));

  const calculateTime = useCallback(() => {
    const now = new Date();
    const distance = endDateRef.current.getTime() - now.getTime();

    if (distance <= 0) {
      setIsCountdownEnded(true);
      return 0;
    }

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
  }, [unit, setIsCountdownEnded]);

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
