'use client';

import React, { useState, useEffect, useCallback } from 'react';
import GameRegisterBtn from '@/components/ui/GameRegisterBtn';

interface GameSlide {
  id: number;
  image: string;
  title: string;
  link: string;
}

const gameSlides: GameSlide[] = [
  {
    id: 1,
    image:
      'https://cdn1.epicgames.com/spt-assets/53ec4985296b4facbe3a8d8d019afba9/pubg-battlegrounds-1e9a7.jpg',
    title: 'PUBG',
    link: 'pubg',
  },
  {
    id: 2,
    image:
      'https://wallpaper.forfun.com/fetch/34/34fcf4edbca5e75d4d31967a6b49373e.jpeg',
    title: 'Valorant',
    link: 'valorant',
  },
  {
    id: 3,
    image:
      'https://wallpaper.forfun.com/fetch/9d/9d1691af8963874c7639242e720ada05.jpeg',
    title: 'Apex Legends',
    link: 'apexlegends',
  },
];

const GameSlider: React.FC = () => {
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
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          ></div>
        ))}
      </div>
      <div className='absolute left-0 top-0 flex h-full w-full items-center justify-between px-4'>
        <button
          onClick={handlePrev}
          className='rounded-full bg-gray-800 p-2 text-white hover:bg-gray-700'
        >
          ❮
        </button>
        <button
          onClick={handleNext}
          className='rounded-full bg-gray-800 p-2 text-white hover:bg-gray-700'
        >
          ❯
        </button>
        <GameRegisterBtn link={gameSlides[currentIndex]?.link ?? ''} />
      </div>
    </div>
  );
};

export default GameSlider;
