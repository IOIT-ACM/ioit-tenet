/* eslint-disable @typescript-eslint/no-unsafe-assignment */
'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const Clock: React.FC = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const hours = ((time.getHours() % 12) + time.getMinutes() / 60) * 30;
  const minutes = time.getMinutes() * 6;
  const seconds = time.getSeconds() * 6;

  return (
    <div className='flex w-full items-center justify-center'>
      <div className='flex items-center justify-center'>
        <div className='relative my-32'>
          <div className='relative h-full w-full'>
            {[...Array(60)].map((_, i) => (
              <span
                key={i}
                className={`absolute left-1/2 top-1/2 block ${
                  i % 5 === 0
                    ? 'h-[14px] w-[1px] -translate-x-[0.2mm] -translate-y-[7px] border-[0.3mm] border-white border-opacity-80 bg-white'
                    : 'h-[12px] w-[1px] -translate-x-[0.3mm] -translate-y-[6px] border-[0.2mm] border-white border-opacity-10 bg-white bg-opacity-70'
                } rounded-[0.8mm]`}
                style={{ transform: `rotate(${i * 6}deg) translateY(-150px)` }}
              >
                {i % 5 === 0 && (
                  <span
                    className='font-inter absolute left-1/2 top-full h-[40px] w-[40px] -translate-x-1/2 overflow-hidden text-center text-[30px] font-semibold leading-[40px] text-white'
                    style={{
                      transform: `rotate(${-i * 6}deg) translateY(2px)`,
                    }}
                  >
                    {i === 0 ? 12 : i / 5}
                  </span>
                )}
              </span>
            ))}
          </div>
          <motion.div
            className='absolute left-1/2 top-1/2 h-[110px] w-[2px] origin-[1px_0] rounded-[0.6mm] bg-white'
            style={{ rotate: hours - 180 }}
            transition={{ type: 'tween', duration: 0.25 }}
          >
            <span className='absolute bottom-[-3px] left-1/2 h-[calc(100%-22px)] w-[12px] -translate-x-1/2 rounded-[2mm] bg-white' />
          </motion.div>
          <motion.div
            className='absolute left-1/2 top-1/2 h-[155px] w-[2px] origin-[1px_0] rounded-[0.6mm] bg-white'
            style={{ rotate: minutes - 180 }}
            transition={{ type: 'tween', duration: 0.25 }}
          >
            <span className='absolute bottom-[-3px] left-1/2 h-[calc(100%-22px)] w-[12px] -translate-x-1/2 rounded-[2mm] bg-white' />
          </motion.div>
          <motion.div
            className='absolute left-1/2 top-[calc(50%-26px)] h-[182px] w-[2px] origin-[1px_26px] rounded-[0.6mm] bg-orange-500'
            style={{ rotate: seconds - 180 }}
            transition={{ type: 'tween', duration: 0.25 }}
          />
          <div className='border-3 absolute left-1/2 top-1/2 h-[10px] w-[10px] -translate-x-1/2 -translate-y-1/2 rounded-full border-white bg-black'>
            <div className='border-3 absolute left-1/2 top-1/2 h-[5px] w-[5px] -translate-x-1/2 -translate-y-1/2 rounded-full border-orange-500' />
          </div>
        </div>
      </div>
    </div>
  );
};
