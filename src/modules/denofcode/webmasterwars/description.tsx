import { GameDuration } from '@/config';
import React, { useEffect, useState } from 'react';
import { useStore } from '@/store';


export const Description = () => {
    const playerState = useStore.use.playerState();
    const [timeLeft, setTimeLeft] = useState(GameDuration);
  
    useEffect(() => {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
      }, 1000);
  
      return () => clearInterval(timer);
    }, []);
  
    const formatTime = (seconds: number) => {
      const minutes = Math.floor(seconds / 60);
      const remainingSeconds = seconds % 60;
      return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    };
  
    return (
      <div className='bg-white p-4 text-black shadow'>
          <h3 className='text-2xl font-semibold'>Player Info</h3>
          <p className='text-gray-800'>
            <span className='font-medium'>Name:</span>{' '}
            {playerState.name ?? 'Unknown'}
          </p>
          <p className='text-gray-800'>
            <span className='font-medium'>Booking ID:</span> {playerState.id}
          </p>
          <p className='text-gray-800'>
            <span className='font-medium'>Selected Game:</span>{' '}
            {playerState.selectedGame === 'catchthebug'
              ? 'Catch the bug'
              : 'Web Master Wars'}
          </p>
          <p className='pt-3 font-bold text-gray-900'>
            <span>Time Left:</span> {formatTime(timeLeft)}
          </p>
          {timeLeft === 0 && (
            <>
              <p className='text-sm text-orange-700'>
                Time limit is over, but you can still continue making the component!
              </p>
              <p className='text-sm text-orange-700'>
                In order to win the goodies, you must complete the component in less than{' '}
                {GameDuration} seconds
              </p>
            </>
          )}
      </div>
    );
  };