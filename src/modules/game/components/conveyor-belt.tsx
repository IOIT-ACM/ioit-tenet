/* eslint-disable @typescript-eslint/no-floating-promises */
'use client';

import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { gameWords } from '@/config/gamewords';

const getRandomWord = (): string => {
  if (gameWords.length === 0) {
    return 'Default Word';
  }
  const randomIndex = Math.floor(Math.random() * gameWords.length);
  return gameWords[randomIndex]!;
};

const getRandomTopPosition = (): string => {
  return `${Math.random() * 80}%`;
};

const Word: React.FC<{
  word: string;
  delay: number;
  onComplete: () => void;
}> = ({ word, delay, onComplete }) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      x: '-100%',
      transition: { duration: 15, delay, ease: 'linear' },
    });
  }, [controls, delay]);

  return (
    <motion.div
      className='absolute whitespace-nowrap text-xl font-bold text-white'
      style={{ top: getRandomTopPosition() }}
      initial={{ x: '100vw' }}
      animate={controls}
      onAnimationComplete={onComplete}
    >
      {word}
    </motion.div>
  );
};

export const ConveyorBelt: React.FC = () => {
  const [activeWords, setActiveWords] = useState<
    { word: string; key: number }[]
  >([]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newWord = getRandomWord();
      setActiveWords((prevWords) => [
        ...prevWords,
        { word: newWord, key: Date.now() },
      ]);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const handleWordComplete = (key: number) => {
    setActiveWords((prevWords) => prevWords.filter((word) => word.key !== key));
  };

  return (
    <div className='fixed h-screen w-screen select-none overflow-hidden'>
      {activeWords.map(({ word, key }, index) => (
        <Word
          key={key}
          word={word}
          delay={index * 3}
          onComplete={() => handleWordComplete(key)}
        />
      ))}
    </div>
  );
};
