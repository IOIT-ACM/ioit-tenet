'use client';

import { useEffect, type FC } from 'react';
import { useStore } from '@/store';

export const InputWords: FC = () => {
  const characters = useStore.use.characters();
  const setCharacters = useStore.use.setCharacters();

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      const key = event.key.toLowerCase();

      if (key === 'backspace') {
        setCharacters(characters.slice(0, -1));
      } else if (key === 'enter') {
        setCharacters([]);
      } else if (key.length === 1) {
        const newCharacters = [...characters, key];
        if (newCharacters.length > 20) {
          setCharacters(newCharacters.slice(-20));
        } else {
          setCharacters(newCharacters);
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [characters, setCharacters]);

  return (
    <>
      <div className='fixed bottom-10 w-screen select-none p-4 text-center text-2xl text-white'>
        {characters.length === 0 && (
          <p className='text-sm text-gray-600'>Start typing...</p>
        )}
        {characters.join('')}
      </div>
    </>
  );
};
