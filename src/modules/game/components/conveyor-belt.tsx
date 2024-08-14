/* eslint-disable @typescript-eslint/no-floating-promises */
'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { gameWords } from '@/config/gamewords';
import { VscDebugRestart } from 'react-icons/vsc';
import { useStore } from '@/store';

const getRandomWord = (): string => {
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
      className='absolute whitespace-nowrap text-2xl font-bold text-white'
      style={{ top: topPos, fontFamily: 'comfortaa' }}
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
  // const characters = useStore.use.characters();
  const setCharacters = useStore.use.setCharacters();

  const nextIdRef = useRef(0);
  const [showText, setShowText] = useState(false);
  let timeoutId: string | number | NodeJS.Timeout | undefined;

  const handleMouseLeave = () => {
    setShowText(true);
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => setShowText(false), 2000);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key.toLowerCase() === 'r' && event.shiftKey) {
        setCharacters([]);
        restart();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [setCharacters]);

  const handleMouseOut = () => {
    clearTimeout(timeoutId);
  };

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
    const intervalId = setInterval(addNewWord, 2790);

    return () => clearInterval(intervalId);
  }, []);

  const handleWordComplete = (id: number) => {
    setActiveWords((prevWords) => prevWords.filter((word) => word.id !== id));
  };

  const restart = () => {
    setActiveWords([]);
  };

  return (
    <div className='fixed h-screen w-screen overflow-hidden'>
      {activeWords.map(({ id, word, topPos }) => (
        <Word
          key={id}
          word={word}
          delay={0}
          onComplete={() => handleWordComplete(id)}
          topPos={topPos}
        />
      ))}
      <div
        onClick={() => restart()}
        onMouseEnter={() => setShowText(true)}
        onMouseLeave={handleMouseLeave}
        onMouseOut={handleMouseOut}
        className='fixed bottom-10 right-10 flex h-10 w-20 cursor-pointer select-none flex-col items-center justify-center gap-2 text-center text-white transition-all'
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <VscDebugRestart className='text-lg' />
        </motion.div>
        {showText && <p className='text-xs'>tab + enter</p>}
      </div>
    </div>
  );
};
