/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-floating-promises */
'use client';

import React, { useEffect, useState, useRef } from 'react';
import { VscDebugRestart } from 'react-icons/vsc';
import { useStore } from '@/store';
import { getRandomWord } from './word';
import { Word } from './word';
import { FaPlay, FaStop } from 'react-icons/fa';
import { VanishInput } from '@/components/ui/vanish-input';
import { IoClose } from 'react-icons/io5';
import Link from 'next/link';
import { useAudio } from '@/hooks/use-audio';

interface ActiveWord {
  id: number;
  word: string;
  topPos: string;
}

const nicknames = [
  'Tyler Durden',
  'Perry the platypus',
  'Hanumankind',
  'Candace',
  'Doraemon',
];

export const ConveyorBelt: React.FC = () => {
  const [activeWords, setActiveWords] = useState<ActiveWord[]>([]);
  const characters = useStore.use.characters();
  const setCharacters = useStore.use.setCharacters();
  const [score, setScore] = useState(0);
  const [showrule, setShowRules] = useState(false);
  const [showLeaderboard, setShowLeaderboard] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);
  const [isGameOver, setIsGameOver] = useState(false);
  const [nickname, setNickname] = useState<string>(() => {
    try {
      const nickname = window.localStorage.getItem('nickname') ?? 'Anonymous';
      return nickname;
    } catch {
      return 'Anonymous';
    }
  });

  const [hasNicknameSet, setHasNicknameSet] = useState<boolean>(() => {
    try {
      return !!window.localStorage.getItem('nickname');
    } catch {
      return false;
    }
  });

  const [highscore, setHighscore] = useState<number>(() => {
    try {
      const storedScore = window.localStorage.getItem('tenet-game-highscore');
      return storedScore ? parseInt(storedScore, 10) : 0;
    } catch {
      return 0;
    }
  });
  const [loading, setIsLoading] = useState(true);

  const correctWordSound = useAudio('/music/correct-word.mp3');
  const gameStartSound = useAudio('/music/game-start.mp3');
  const gameOverSound = useAudio('/music/game-over.mp3');

  useEffect(() => {
    setIsLoading(false);
  }, []);

  const nextIdRef = useRef(0);
  const [playing, setPlaying] = useState<'playing' | 'pause' | 'zen'>('pause');

  useEffect(() => {
    if (playing === 'playing' && !isGameOver) {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(timer);
            setIsGameOver(true);
            updateHighscore(score);
            gameOverSound.play();
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
  }, [isGameOver, playing, score]);

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
          if (playing === 'playing') {
            setScore((prevScore) => prevScore + word.word.length);
            correctWordSound.play();
          }
          setCharacters([]);
          return false;
        }
        return true;
      });
      return newWords;
    });

    if (playing === 'pause' && characters.join('') === 'play') {
      setActiveWords([]);
      setScore(0);
      restart();
      gameStartSound.play();
    }
  }, [characters, setCharacters]);

  const updateHighscore = (newScore: number) => {
    if (newScore > highscore) {
      setHighscore(newScore);
      window.localStorage.setItem('tenet-game-highscore', newScore.toString());
    }
  };

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
    if ((playing === 'playing' || playing === 'zen') && !isGameOver) {
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

  if (!hasNicknameSet && !loading) {
    return (
      <div className='fixed inset-x-0 top-20 flex h-fit items-start justify-center bg-black bg-opacity-50'>
        <div className='grid w-fit max-w-[600px] rounded-3xl bg-white p-8 text-center'>
          <h2 className='mb-4 text-2xl font-bold'>
            Welcome to TENET typing game
          </h2>
          <p className='mb-5'>
            Showcase your keyboard skills, climb the leaderboard, and become the
            Fastest Writer at TENET 2024. Start with your nickname, how should
            people address you?
          </p>
          <VanishInput
            placeholders={nicknames}
            onChange={(e) => setNickname(e.target.value)}
            onSubmit={(e) => {
              e.preventDefault();
              setTimeout(() => {
                setNickName(nickname);
              }, 2500);
            }}
          />
        </div>
      </div>
    );
  }

  if (showrule) {
    return (
      <div
        onClick={() => setShowRules(false)}
        className='fixed inset-x-0 top-20 flex h-screen items-start justify-center bg-black bg-opacity-50'
      >
        <div className='no-scroll-bar relative grid w-fit rounded-3xl bg-white p-8 text-center'>
          <h2 className='mb-6 text-3xl font-bold text-blue-600'>
            Rules (and tips for the game)
          </h2>
          <button
            className='absolute right-4 top-4 text-2xl text-slate-500 hover:text-slate-700'
            onClick={() => setShowRules(false)}
          >
            <IoClose />
          </button>
          <div className='no-scroll-bar max-h-[60vh] max-w-[900px] overflow-hidden overflow-y-auto'>
            <div className='space-y-6 text-left text-lg'>
              <section>
                <h3 className='mb-2 text-xl font-semibold'>Objective</h3>
                <p>
                  Words will slide from the right side of the screen towards the
                  left. Your goal is to type each word as fast as possible
                  before it reaches the left edge. The faster and more
                  accurately you type, the higher your score.
                </p>
              </section>

              <section>
                <h3 className='mb-2 text-xl font-semibold'>Typing</h3>
                <ul className='list-inside list-disc space-y-2'>
                  <li>
                    As you type, the characters will appear at the bottom of the
                    screen.
                  </li>
                  <li>
                    If you make a mistake or wish to clear your current input,
                    press <code> &quot;Enter&quot;</code> to reset the
                    characters.
                  </li>
                  <li>
                    Only complete words typed correctly will be counted towards
                    your score.
                  </li>
                </ul>
              </section>

              <section>
                <h3 className='mb-2 text-xl font-semibold'>Shortcuts</h3>
                <ul className='list-inside list-disc space-y-2'>
                  <li>
                    <code> Shift + R </code> to restart the game at any time.
                  </li>
                  <li>
                    <code> Shift + S </code> to toggle sound effects.
                  </li>
                  <li>
                    <code> Enter </code> to reset the typed characters
                  </li>
                </ul>
              </section>

              <section>
                <h3 className='mb-2 text-xl font-semibold'>Game Duration</h3>
                <ul className='list-inside list-disc space-y-2'>
                  <li>
                    You have 60 seconds to type as many words as you can. Make
                    each second count!
                  </li>
                  <li>
                    The game automatically ends when the 60 seconds run out, so
                    keep an eye on the clock.
                  </li>
                  <li>
                    Your final score will be the sum of all characters typed
                    correctly during the game.
                  </li>
                </ul>
              </section>

              <section>
                <h3 className='mb-2 text-xl font-semibold'>Scoreboard</h3>
                <ul className='list-inside list-disc space-y-2'>
                  <li>
                    Your current score, high score, and username are displayed
                    in the top left corner of the screen.
                  </li>
                  <li>
                    The high score reflects your best performance across all
                    sessions.
                  </li>
                  <li>
                    Strive to beat your own high score and set new records!
                  </li>
                </ul>
              </section>

              <section>
                <h3 className='mb-2 text-xl font-semibold'>Public Dashboard</h3>
                <ul className='list-inside list-disc space-y-2'>
                  <li>
                    Your username and high score will be published on a public
                    leaderboard.
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (showLeaderboard) {
    return (
      <div
        onClick={() => setShowLeaderboard(false)}
        className='fixed inset-x-0 top-20 flex h-screen items-start justify-center bg-black bg-opacity-50'
      >
        <div className='no-scroll-bar relative grid w-fit rounded-3xl bg-white p-8 text-center'>
          <h2 className='mb-6 text-3xl font-bold text-blue-600'>Leaderboard</h2>
          <button
            className='absolute right-4 top-4 text-2xl text-slate-500 hover:text-slate-700'
            onClick={() => setShowRules(false)}
          >
            <IoClose />
          </button>
          <div className='max-h-[60vh] max-w-[900px] overflow-hidden overflow-y-auto'>
            <div className='space-y-6 text-left text-lg'></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className='fixed hidden h-screen w-screen overflow-hidden md:block'>
      {activeWords.map(({ id, word, topPos }) => (
        <Word
          key={id}
          word={word}
          delay={0}
          onComplete={() => handleWordComplete(id)}
          topPos={topPos}
        />
      ))}
      {playing === 'pause' && (
        <div className='fixed top-14 w-screen select-none p-4 text-center text-xl text-white'>
          Type &apos;play&apos; to begin game
        </div>
      )}
      {playing !== 'zen' && (
        <>
          <div className='fixed left-5 top-5 text-xl text-white'>
            {!loading ? (
              <div>
                <div>Score: {score}</div>
                <div>Hign Score: {highscore}</div>
                <div>{nickname}</div>
              </div>
            ) : (
              <p>Loading...</p>
            )}
          </div>
          <div className='fixed right-5 top-5 text-xl text-white'>
            Time: {timeLeft}s
          </div>
        </>
      )}
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
          <div className='flex w-fit items-center gap-4'>
            <FaPlay
              onClick={() => {
                setPlaying('playing');
                restart();
              }}
              className='cursor-pointer'
            />
            <div
              className='cursor-pointer truncate'
              onClick={() => {
                setPlaying('zen');
                setIsGameOver(false);
                setActiveWords([]);
                setCharacters([]);
              }}
            >
              Zen mode
            </div>
          </div>
        )}
      </div>

      {playing === 'pause' && (
        <div className='fixed bottom-10 left-10 flex h-10 w-20 select-none gap-5 text-center text-lg text-white transition-all'>
          <Link href={'/'}>Home</Link>
          <div
            className='cursor-pointer'
            onClick={() => setShowLeaderboard(true)}
          >
            Leaderboard
          </div>
          <div className='cursor-pointer' onClick={() => setShowRules(true)}>
            Rules
          </div>
        </div>
      )}
    </div>
  );
};
