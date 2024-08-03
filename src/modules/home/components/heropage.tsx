'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Video } from '@/components/ui/Video';
import { useStore } from '@/store';

export const Hero = () => {
  const [isSkipVisible, setIsSkipVisible] = useState(false);
  const videoPlayed = useStore((state) => state.videoPlayed);
  const setVideoPlayed = useStore((state) => state.setVideoPlayed);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSkipVisible(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  const handleVideoEnded = () => {
    setVideoPlayed(true);
  };

  const handleSkip = () => {
    setVideoPlayed(true);
  };

  return (
    <div className='relative'>
      {!videoPlayed ? (
        <>
          <div>
            <Video
              src='hero-logo.webm'
              autoPlay
              preload='auto'
              onEnded={handleVideoEnded}
              muted
              style={{ width: '100vw', height: '100vh', objectFit: 'cover' }}
            />
          </div>
          {isSkipVisible && (
            <motion.button
              onClick={handleSkip}
              className='absolute bottom-4 right-4 rounded-xl bg-black px-4 py-2 text-white shadow-lg'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Skip
            </motion.button>
          )}
        </>
      ) : (
        <div>
          <motion.h1
            className='text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]'
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            IOIT <span className='text-[hsl(280,100%,70%)]'>TENET</span>
          </motion.h1>
          {/* Add other content here */}
        </div>
      )}
    </div>
  );
};
