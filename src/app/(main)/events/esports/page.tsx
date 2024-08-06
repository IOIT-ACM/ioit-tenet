"use client"

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
    image: "https://cdn1.epicgames.com/spt-assets/53ec4985296b4facbe3a8d8d019afba9/pubg-battlegrounds-1e9a7.jpg",
    title: "PUBG",
    link: "pubg",
  },
  {
    id: 2,
    image: "https://wallpaper.forfun.com/fetch/34/34fcf4edbca5e75d4d31967a6b49373e.jpeg",
    title: "Valorant",
    link: "valorant",
  },
  {
    id: 3,
    image: "https://wallpaper.forfun.com/fetch/9d/9d1691af8963874c7639242e720ada05.jpeg",
    title: "Apex Legends",
    link: "apexlegends",
  },
];

const GameSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // Use useCallback to memoize handleNext
  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % gameSlides.length);
  }, []);

  // Use useCallback to memoize handlePrev
  const handlePrev = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + gameSlides.length) % gameSlides.length);
  }, []);

  // Automatically switch slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(handleNext, 5000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [handleNext]);

  return (
    <div className="relative overflow-hidden h-screen">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {gameSlides.map((slide) => (
          <div
            key={slide.id}
            className="min-w-full flex-shrink-0 h-screen relative"
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
          </div>
        ))}
      </div>
      <div className="absolute top-0 left-0 w-full h-full flex justify-between items-center px-4">
        <button
          onClick={handlePrev}
          className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700"
        >
          ❮
        </button>
        <button
          onClick={handleNext}
          className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700"
        >
          ❯
        </button>
        <GameRegisterBtn link={gameSlides[currentIndex]?.link} />
      </div>
    </div>
  );
};

export default GameSlider;
