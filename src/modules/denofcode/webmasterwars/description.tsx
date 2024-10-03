import { GameDuration } from '@/config';
import React, { useEffect, useState, useRef } from 'react';
import { useStore } from '@/store';
import Image from 'next/image';

const GameOverModal = () => {
    const htmlcode = useStore((state) => state.htmlcode);
  const csscode = useStore((state) => state.csscode);
  const previewRef = useRef<HTMLIFrameElement>(null);
  const webmasterPS = useStore((state) => state.webmasterPS);
  const [scale, setScale] = useState(1);

const setHTML = useStore((state) => state.setHTML);
const setCSS = useStore((state) => state.setCSS);
const setPlayerState = useStore((state) => state.setPlayerState);

  useEffect(() => {
    updatePreview();
  });

  const handleRefresh = () => {
    setHTML('');
    setCSS('');
    setPlayerState({
      name: '',
      id: '',
      selectedGame: null,
      language: undefined,
      code: undefined,
      bug: undefined
    });
  }

  const updatePreview = () => {
    if (previewRef.current) {
      const combinedCode = `
        <style>${csscode}</style>
        ${htmlcode}
      `;
      previewRef.current.srcdoc = combinedCode;
    }
  };

  const handleZoomIn = () => {
    setScale((prev) => prev * 1.1);
  };

  const handleZoomOut = () => {
    setScale((prev) => prev / 1.1);
  };

  return (
<div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'>
  <div className='flex flex-col rounded-lg bg-white shadow-lg  w-4/5 h-[90vh] border-2 border-gray-800'>

    <div className='flex flex-col w-full justify-center items-center m-2'>
      <h2 className='text-5xl font-bold text-red-600'>Game Over</h2>
      <p className='mt-2 text-gray-800 text-lg'>Time is up!</p>
    </div>


    <div className='flex flex-grow p-4 gap-3'>
      
      <div className='flex flex-col flex-grow p-4 w-full border border-gray-400 bg-[#f0f0f0] overflow-hidden'>
        <iframe
          ref={previewRef}
          title='Preview'
          className='h-full w-full border-none'
          sandbox='allow-scripts'
          style={{
            transform: `scale(${scale})`,
            transformOrigin: '0 0',
          }}
        />
        <div className='mt-4 flex justify-end'>
          <button
            className='mx-2 rounded bg-blue-500 px-3 py-1 text-white'
            onClick={handleZoomIn}
          >
            Zoom In
          </button>
          <button
            className='mx-2 rounded bg-blue-500 px-3 py-1 text-white'
            onClick={handleZoomOut}
          >
            Zoom Out
          </button>
        </div>
      </div>

      <div className='flex flex-col flex-grow p-4 w-full h-full border border-gray-400'>
        <h3 className='text-xl font-semibold text-center'>Target Image</h3>
        <div className='flex-grow'>
          <Image
            src={webmasterPS?.imageURL ?? ''}
            alt='Target'
            layout='responsive'
            objectFit='contain'
            width={300}
            height={400}
          />
        </div>
      </div>

    </div>

    <div className='flex justify-center items-center py-4'>
      <button className='mx-2 rounded bg-green-500 px-3 py-1 text-white text-xl' onClick={()=> handleRefresh()}>New Game</button>
    </div>
  </div>
</div>

  );
};

export const Description = () => {
  const playerState = useStore.use.playerState();
  const [timeLeft, setTimeLeft] = useState(GameDuration);
  const [isGameOver, setIsGameOver] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          setIsGameOver(true);
          return 0;
        }
        return prevTime - 1;
      });
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

      {isGameOver && <GameOverModal />}
    </div>
  );
};
