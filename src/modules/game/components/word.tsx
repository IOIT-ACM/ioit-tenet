/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-floating-promises */
'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { gameWords } from '@/config/gamewords';

export const getRandomWord = (): string => {
  if (gameWords.length === 0) {
    return 'TENET';
  }
  const randomIndex = Math.floor(Math.random() * gameWords.length);
  return gameWords[randomIndex]!;
};

interface WordProps {
  word: string;
  delay: number;
  onComplete: () => void;
  topPos: string;
}

export const Word: React.FC<WordProps> = ({
  word,
  delay,
  onComplete,
  topPos,
}) => {
  const controls = useAnimation();
  const wordRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    controls.start({
      x: '-100vw',
      transition: { duration: 15, delay, ease: 'linear' },
    });

    const checkPosition = () => {
      if (wordRef.current) {
        const rect = wordRef.current.getBoundingClientRect();
        if (rect.right <= 0) {
          onComplete();
        } else {
          requestAnimationFrame(checkPosition);
        }
      }
    };

    requestAnimationFrame(checkPosition);
  }, [controls, delay, onComplete]);

  return (
    <motion.div
      ref={wordRef}
      className='absolute whitespace-nowrap text-2xl font-extrabold text-gray-300'
      style={{ top: topPos, fontFamily: 'comfortaa' }}
      initial={{ x: '100vw' }}
      animate={controls}
    >
      {word}
    </motion.div>
  );
};
