'use client';

import React, { useState } from 'react';
import { Video } from '@/components/ui/Video';

export const Hero = () => {
  const [videoEnded, setVideoEnded] = useState(false);

  const handleVideoEnded = () => {
    setVideoEnded(true);
  };

  const handleSkip = () => {
    setVideoEnded(true);
  };

  return (
    <div className='relative'>
      {!videoEnded ? (
        <>
          <Video
            src='hero-logo.webm'
            autoPlay
            preload='auto'
            muted
            onEnded={handleVideoEnded}
            style={{ width: '100vw', height: '100vh', objectFit: 'cover' }}
          />
          <button
            onClick={handleSkip}
            className='absolute bottom-4 right-4 rounded-md bg-black px-4 py-2 text-white shadow-lg'
          >
            Skip
          </button>
        </>
      ) : (
        <div>
          <h1 className='text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]'>
            IOIT <span className='text-[hsl(280,100%,70%)]'>TENET</span>
          </h1>
          {/* Add other content here */}
        </div>
      )}
    </div>
  );
};
