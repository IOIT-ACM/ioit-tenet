/* eslint-disable react-hooks/exhaustive-deps */
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
  const characters = useStore.use.characters();
  const setCharacters = useStore.use.setCharacters();
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [isGameOver, setIsGameOver] = useState(false);

  const nextIdRef = useRef(0);
  const [showText, setShowText] = useState(false);
  let timeoutId: string | number | NodeJS.Timeout | undefined;

  useEffect(() => {
    if (!isGameOver) {
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
    }
  }, [isGameOver]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key.toLowerCase() === 'r' && event.shiftKey) {
        restart();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  useEffect(() => {
    const joined = characters.join('');
    setActiveWords((prevWords) => {
      const newWords = prevWords.filter((word) => {
        if (joined.includes(word.word.toLowerCase())) {
          setScore((prevScore) => prevScore + word.word.length);
          setCharacters([]);
          return false;
        }
        return true;
      });
      return newWords;
    });
  }, [characters, setCharacters]);

  const handleMouseLeave = () => {
    setShowText(true);
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => setShowText(false), 2000);
  };

  const handleMouseOut = () => {
    clearTimeout(timeoutId);
  };

  const addNewWord = () => {
    if (!isGameOver) {
      const newWord = getRandomWord();
      const topPos = `${Math.random() * 80}%`;
      const id = nextIdRef.current++;
      setActiveWords((prevWords) => [
        ...prevWords,
        { id, word: newWord, topPos },
      ]);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(addNewWord, 2790);

    return () => clearInterval(intervalId);
  }, [isGameOver]);

  const handleWordComplete = (id: number) => {
    setActiveWords((prevWords) => prevWords.filter((word) => word.id !== id));
  };

  const restart = () => {
    setActiveWords([]);
    setScore(0);
    setTimeLeft(30);
    setIsGameOver(false);
    setCharacters([]);
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
      <div className='fixed left-5 top-5 text-xl text-white'>
        Score: {score}
      </div>
      <div className='fixed right-5 top-5 text-xl text-white'>
        Time: {timeLeft}s
      </div>
      {isGameOver && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
          <div className='rounded-lg bg-white p-8 text-center'>
            <h2 className='mb-4 text-2xl font-bold'>Game Over!</h2>
            <p className='mb-4 text-xl'>Your score: {score}</p>
            <p className='text-lg'>Press Shift + R to play again</p>
          </div>
        </div>
      )}
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
        {showText && <p className='text-xs'>shift + r</p>}
      </div>
    </div>
  );
};
