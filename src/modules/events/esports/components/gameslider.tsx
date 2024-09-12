'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import GameRegisterBtn from '@/modules/events/esports/components/GameRegisterBtn';

interface GameSlide {
  id: number;
  image: string;
  title: string;
  link: string;
}

const gameSlides: GameSlide[] = [
  {
    id: 1,
    image: '/imgs/esports/peakpx.jpg',
    title: 'BGMI',
    link: 'https://forms.gle/kaE3hKPiuJ7M44qw9',
  },
  {
    id: 2,
    image:
      'https://wallpaper.forfun.com/fetch/34/34fcf4edbca5e75d4d31967a6b49373e.jpeg',
    title: 'Valorant',
    link: 'https://forms.gle/UgM7pZ5yCEys9aq69',
  },
  {
    id: 3,
    image: '/imgs/esports/fifa.jpg',
    title: 'FIFA',
    link: 'https://forms.gle/dqRBt7KwQF284b2z7',
  },
];

export const GameSlider = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % gameSlides.length);
  }, []);

  const handlePrev = useCallback(() => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + gameSlides.length) % gameSlides.length,
    );
  }, []);

  useEffect(() => {
    const interval = setInterval(handleNext, 5000);
    return () => clearInterval(interval);
  }, [handleNext]);

  return (
    <div className='relative h-screen overflow-hidden'>
      <div
        className='flex transition-transform duration-700 ease-in-out'
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {gameSlides.map((slide) => (
          <div
            key={slide.id}
            className='relative h-screen min-w-full flex-shrink-0'
          >
            <Image
              src={slide.image}
              alt={`Slide ${slide.id}`}
              fill
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              priority
            />
          </div>
        ))}
      </div>
      <div className='absolute left-0 top-0 flex h-full w-full items-center justify-between px-4'>
        <button
          onClick={handlePrev}
          className='rounded-full bg-slate-800 p-2 text-white hover:bg-slate-700'
        >
          ❮
        </button>
        <button
          onClick={handleNext}
          className='rounded-full bg-slate-800 p-2 text-white hover:bg-slate-700'
        >
          ❯
        </button>
        <GameRegisterBtn link={gameSlides[currentIndex]?.link ?? ''} />
      </div>
    </div>
  );
};
