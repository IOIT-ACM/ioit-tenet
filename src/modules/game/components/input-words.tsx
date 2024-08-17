'use client';

import { useEffect, useState, type FC } from 'react';
import { HiMiniSpeakerWave, HiMiniSpeakerXMark } from 'react-icons/hi2';
import { useAudio } from '@/hooks/use-audio';

import { useStore } from '@/store';

export const InputWords: FC = () => {
  const characters = useStore.use.characters();
  const setCharacters = useStore.use.setCharacters();
  const [isMuted, setIsMuted] = useState(false);
  const keySound = useAudio('/music/key-press.mp3');

  const toggleMute = () => {
    setIsMuted((prev) => !prev);
  };

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      const key = event.key.toLowerCase();

      if (event.shiftKey && key === 's') {
        event.preventDefault();
        toggleMute();
        return;
      }

      keySound.play();

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
  }, [characters, setCharacters, isMuted, keySound]);

  return (
    <>
      <div className='fixed bottom-14 w-screen select-none p-4 text-center text-2xl text-white'>
        {characters.length === 0 && (
          <p className='text-sm text-gray-600'>Start typing...</p>
        )}
        {characters.join('')}
      </div>
      <div
        onClick={toggleMute}
        className='fixed bottom-4 z-50 rounded-full bg-gray-800 p-2 text-white'
      >
        {isMuted ? (
          <HiMiniSpeakerXMark size={20} />
        ) : (
          <HiMiniSpeakerWave size={20} />
        )}
      </div>
    </>
  );
};
