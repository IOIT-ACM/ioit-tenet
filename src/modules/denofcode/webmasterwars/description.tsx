/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import { GameDuration } from '@/config';
import React, { useEffect, useState, useRef } from 'react';
import { useStore } from '@/store';

const GameOverModal = () => {
  const htmlcode = useStore((state) => state.htmlcode);
  const csscode = useStore((state) => state.csscode);
  const previewRef = useRef<HTMLIFrameElement>(null);
  const webmasterPS = useStore((state) => state.webmasterPS);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    updatePreview();
  }, [htmlcode, csscode]);

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
      <div
        className='flex rounded bg-white shadow-lg'
        style={{ width: '80%', height: '80%' }}
      >
        <div className='flex w-1/2 flex-col p-4'>
          <h2 className='text-2xl font-bold text-red-600'>Game Over</h2>
          <p className='mt-2 text-gray-800'>Time is up!</p>
          <div className='h-full w-full overflow-hidden border border-gray-300'>
            <iframe
              ref={previewRef}
              title='Preview'
              className='h-full w-full border-none'
              sandbox='allow-scripts'
              style={{
                transform: `scale(${scale})`,
                transformOrigin: '0 0',
                width: '100%',
                height: '100%',
              }}
            />
          </div>
          <div className='mt-4 flex justify-center'>
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

        <div className='flex w-1/2 flex-col items-center justify-center border-l border-gray-300 p-4'>
          <h3 className='text-xl font-semibold'>Target Image</h3>
          <canvas
            className='mt-4 border border-gray-300'
            id='targetCanvas'
            width={400}
            height={400}
          />
          <img
            src={webmasterPS?.imageURL}
            alt='Target'
            className='hidden'
            onLoad={(e) => {
              const canvas = document.getElementById(
                'targetCanvas',
              ) as HTMLCanvasElement;
              const ctx = canvas.getContext('2d');
              const img = e.currentTarget;

              if (ctx) {
                ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
              }
            }}
          />
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
