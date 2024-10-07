/* eslint-disable @next/next/no-img-element */

import React, { useState, useEffect } from 'react';
import { Users, Calendar as EventIcon, Award } from 'lucide-react';
import { GALLERY_PAGE } from '@/config';
import { Button } from '@/components/ui/RoundedButton';
import NumberTicker from '@/components/ui/ticker';

const TenetLive: React.FC = () => {
  const [timeSinceEvent, setTimeSinceEvent] = useState('');
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    const updateTimeSinceEvent = () => {
      const eventDate = new Date('2024-10-04T09:00:00');
      const now = new Date();
      const diffTime = Math.abs(now.getTime() - eventDate.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      const diffMonths = Math.floor(diffDays / 30);
      const diffYears = Math.floor(diffDays / 365);

      if (diffYears >= 1) {
        setTimeSinceEvent(
          `${diffYears} year${diffYears > 1 ? 's' : ''} since TENET 2024`,
        );
      } else if (diffMonths >= 1) {
        setTimeSinceEvent(
          `${diffMonths} month${diffMonths > 1 ? 's' : ''} since TENET 2024`,
        );
      } else {
        setTimeSinceEvent(
          `${diffDays} day${diffDays !== 1 ? 's' : ''} since TENET 2024`,
        );
      }

      // Check if current date is 4, 5, or 6 October
      const currentMonth = now.getMonth();
      const currentDate = now.getDate();
      setIsLive(currentMonth === 9 && currentDate >= 4 && currentDate <= 6);
    };

    updateTimeSinceEvent();
    const intervalId = setInterval(updateTimeSinceEvent, 1000 * 60 * 60);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className='text-white'>
      <div className='mx-auto px-10 py-12'>
        <h1 className='mb-8 text-center text-6xl font-extrabold md:text-7xl'>
          {isLive ? (
            'TENET IS LIVE'
          ) : (
            <>
              <span className='text-3xl md:text-5xl'>{timeSinceEvent}</span>
            </>
          )}
        </h1>

        <div className='mb-5 grid items-center gap-12 md:grid-cols-2'>
          <div className='space-y-8'>
            <p className='text-xl leading-relaxed md:text-2xl'>
              Experience the future of technology at TENET 2024. Immerse
              yourself in cutting-edge innovations and groundbreaking ideas that
              will shape our world.
            </p>

            {!isLive && (
              <div className='grid grid-cols-1 gap-6 sm:grid-cols-3'>
                <div className='flex flex-col items-center rounded-lg bg-white bg-opacity-10 p-4 backdrop-blur-lg'>
                  <EventIcon className='mb-2 h-8 w-8 text-blue-400' />
                  <NumberTicker
                    value={50}
                    direction='up'
                    className='text-4xl font-bold text-blue-400'
                  />
                  <span className='text-lg'>Events</span>
                </div>
                <div className='flex flex-col items-center rounded-lg bg-white bg-opacity-10 p-4 backdrop-blur-lg'>
                  <Users className='mb-2 h-8 w-8 text-green-400' />
                  <NumberTicker
                    value={520}
                    direction='up'
                    className='text-4xl font-bold text-green-400'
                  />
                  <span className='text-lg'>Participants</span>
                </div>
                <div className='flex flex-col items-center rounded-lg bg-white bg-opacity-10 p-4 backdrop-blur-lg'>
                  <Award className='mb-2 h-8 w-8 text-yellow-400' />
                  <NumberTicker
                    value={20}
                    direction='up'
                    className='text-4xl font-bold text-yellow-400'
                  />
                  <span className='text-lg'>Sponsors</span>
                </div>
              </div>
            )}

            <div className='flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-6 sm:space-y-0'>
              <Button link={GALLERY_PAGE}>View gallery</Button>
            </div>
          </div>
          <div className='relative hidden md:block'>
            <img
              src='https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/events/investingarena.jpeg'
              alt='TENET 2024 Event'
              className='h-[500px] w-full rounded-lg object-cover shadow-2xl'
            />
            <div className='absolute inset-0 rounded-lg bg-black opacity-20'></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TenetLive;
