/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-floating-promises */
'use client';

import React, { useEffect, useState, useRef } from 'react';
import { VscDebugRestart } from 'react-icons/vsc';
import { useStore } from '@/store';
import { getRandomWord } from './word';
import { Word } from './word';
import { FaPlay, FaStop } from 'react-icons/fa';

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
  const [timeLeft, setTimeLeft] = useState(60);
  const [isGameOver, setIsGameOver] = useState(false);
  const [nickname, setNickname] = useState('');
  const [hasNicknameSet, setHasNicknameSet] = useState<boolean>(() => {
    try {
      return !!window.localStorage.getItem('nickname');
    } catch {
      return false;
    }
  });

  const nextIdRef = useRef(0);
  const [playing, setPlaying] = useState<'playing' | 'pause' | 'zen'>('pause');

  useEffect(() => {
    if (playing === 'playing' && !isGameOver) {
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
    if (playing === 'pause') {
      setTimeLeft(60);
      setActiveWords([]);
    }
    if (isGameOver) {
      setPlaying('pause');
    }
  }, [isGameOver, playing]);

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

  const addNewWord = () => {
    if (!isGameOver) {
      const newWord = getRandomWord();
      const topPos = `${20 + Math.random() * 60}%`;
      const id = nextIdRef.current++;
      setActiveWords((prevWords) => [
        ...prevWords,
        { id, word: newWord, topPos },
      ]);
    }
  };

  useEffect(() => {
    if (playing === 'playing' && !isGameOver) {
      const intervalId = setInterval(addNewWord, 2790);

      return () => clearInterval(intervalId);
    }
  }, [isGameOver, playing]);

  const handleWordComplete = (id: number) => {
    setActiveWords((prevWords) => prevWords.filter((word) => word.id !== id));
  };

  const restart = () => {
    setPlaying('playing');
    setActiveWords([]);
    setScore(0);
    setTimeLeft(60);
    setIsGameOver(false);
    setCharacters([]);
  };

  const setNickName = (nickname: string) => {
    window.localStorage.setItem('nickname', nickname);
    setHasNicknameSet(true);
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
        <div>Score: {score}</div>
        {hasNicknameSet ? (
          <div>
            nickname: {window.localStorage.getItem('nickname') ?? 'Anonymous'}
          </div>
        ) : (
          <div>
            <input
              type='text'
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              placeholder='Enter nickname'
              className='rounded px-2 py-1 text-black'
            />
            <button onClick={() => setNickName(nickname)}>Save</button>
          </div>
        )}
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
      <div className='fixed bottom-10 right-10 flex h-10 w-20 select-none flex-col items-center justify-center gap-2 text-center text-lg text-white transition-all'>
        {playing === 'playing' && (
          <div className='flex gap-3'>
            <VscDebugRestart
              onClick={() => restart()}
              className='cursor-pointer'
            />
            <FaStop
              onClick={() => setPlaying('pause')}
              className='cursor-pointer'
            />
          </div>
        )}
        {playing === 'zen' && (
          <FaStop
            onClick={() => setPlaying('pause')}
            className='cursor-pointer'
          />
        )}
        {playing === 'pause' && (
          <FaPlay
            onClick={() => {
              setPlaying('playing');
              restart();
            }}
            className='cursor-pointer'
          />
        )}
      </div>
    </div>
  );
};
