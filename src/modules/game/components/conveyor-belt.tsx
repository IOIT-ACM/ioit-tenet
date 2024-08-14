/* eslint-disable @typescript-eslint/no-floating-promises */
'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { gameWords } from '@/config/gamewords';

const getRandomWord = (): string => {
  if (gameWords.length === 0) {
    return 'Default Word';
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

const Word: React.FC<WordProps> = ({ word, delay, onComplete, topPos }) => {
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
      className='absolute whitespace-nowrap text-xl font-bold text-white'
      style={{ top: topPos }}
      initial={{ x: '100vw' }}
      animate={controls}
    >
      {word}
    </motion.div>
  );
};

interface ActiveWord {
  id: number;
  word: string;
  topPos: string;
}

export const ConveyorBelt: React.FC = () => {
  const [activeWords, setActiveWords] = useState<ActiveWord[]>([]);
  const nextIdRef = useRef(0);

  const addNewWord = () => {
    const newWord = getRandomWord();
    const topPos = `${Math.random() * 80}%`;
    const id = nextIdRef.current++;
    setActiveWords((prevWords) => [
      ...prevWords,
      { id, word: newWord, topPos },
    ]);
  };

  useEffect(() => {
    const intervalId = setInterval(addNewWord, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const handleWordComplete = (id: number) => {
    setActiveWords((prevWords) => prevWords.filter((word) => word.id !== id));
  };

  return (
    <div className='fixed h-screen w-screen select-none overflow-hidden'>
      {activeWords.map(({ id, word, topPos }) => (
        <Word
          key={id}
          word={word}
          delay={0} // No delay, start moving immediately
          onComplete={() => handleWordComplete(id)}
          topPos={topPos}
        />
      ))}

      <p className='fixed bottom-0 text-white'>
        Active words: {activeWords.length}
      </p>
    </div>
  );
};
