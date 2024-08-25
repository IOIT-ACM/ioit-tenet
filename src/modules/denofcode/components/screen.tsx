'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { WebMasterScreen } from './webmaster';
import { CatchTheBugScreen } from './catchthebug';
import { useStore, type Game } from '@/store';

interface GameInfo {
  title: string;
  description: string;
  image: string;
}

const gameInfo: Record<Exclude<Game, null>, GameInfo> = {
  webmasterwars: {
    title: 'WebMaster Wars',
    description:
      'Battle against other web developers in a race to create the most impressive website. Test your HTML, CSS, and JavaScript skills in real-time challenges!',
    image:
      'https://images.unsplash.com/photo-1576633587382-13ddf37b1fc1?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  catchthebug: {
    title: 'Catch The Bug',
    description:
      'Hunt down elusive bugs in a virtual codebase. Sharpen your debugging skills as you navigate through increasingly complex code structures.',
    image:
      'https://images.unsplash.com/photo-1576633587382-13ddf37b1fc1?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
};

export const GameScreen = () => {
  const playerState = useStore.use.playerState();
  const setPlayerState = useStore.use.setPlayerState();
  const [nameInput, setNameInput] = useState<string>('');

  const handleNameSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (nameInput.trim()) {
      setPlayerState({
        ...playerState,
        name: nameInput.trim(),
      });
    }
  };

  const handleGameSelection = (game: Game) => {
    setPlayerState({
      ...playerState,
      selectedGame: game,
    });
  };

  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className='flex min-h-screen flex-col items-center justify-center bg-gray-900 p-4 text-white'>
      {!playerState.name ? (
        <motion.form
          initial='hidden'
          animate='visible'
          variants={containerVariants}
          onSubmit={handleNameSubmit}
          className='flex flex-col items-center gap-3'
        >
          <h1 className='mb-4 text-6xl font-bold'>Welcome to Den of Code</h1>
          <p className='mb-4 text-2xl'>Please enter your name to start:</p>
          <input
            type='text'
            className='mb-4 w-64 rounded p-2 text-white'
            value={nameInput}
            onChange={(e) => setNameInput(e.target.value)}
            required
            placeholder='Your name'
          />
          <button
            type='submit'
            className='rounded bg-blue-500 px-4 py-2 transition-colors hover:bg-blue-600'
          >
            Continue
          </button>
        </motion.form>
      ) : !playerState.selectedGame ? (
        <motion.div
          initial='hidden'
          animate='visible'
          variants={containerVariants}
          className='flex flex-col items-center'
        >
          <h2 className='mb-6 text-2xl font-bold'>
            Hello <span className='text-green-500'>{playerState.name}</span>,
            choose your game:
          </h2>
          <div className='grid w-2/3 grid-cols-2 gap-4'>
            {(Object.keys(gameInfo) as Array<keyof typeof gameInfo>).map(
              (game) => (
                <motion.div
                  key={game}
                  variants={itemVariants}
                  className='overflow-hidden rounded-lg bg-gray-800 shadow-lg transition-shadow hover:shadow-xl'
                >
                  <Image
                    src={gameInfo[game].image}
                    alt={gameInfo[game].title}
                    width={400}
                    height={200}
                    className='h-48 w-full object-cover'
                  />
                  <div className='p-4'>
                    <h3 className='mb-2 text-xl font-semibold'>
                      {gameInfo[game].title}
                    </h3>
                    <p className='mb-4 text-gray-300'>
                      {gameInfo[game].description}
                    </p>
                    <button
                      className='w-full rounded bg-blue-500 px-4 py-2 transition-colors hover:bg-blue-600'
                      onClick={() => handleGameSelection(game)}
                    >
                      Play {gameInfo[game].title}
                    </button>
                  </div>
                </motion.div>
              ),
            )}
          </div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {playerState.selectedGame === 'webmasterwars' && <WebMasterScreen />}
          {playerState.selectedGame === 'catchthebug' && <CatchTheBugScreen />}
        </motion.div>
      )}
    </div>
  );
};
