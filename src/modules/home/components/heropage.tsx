'use client';

import React, { useState } from 'react';
import { Video } from '@/components/ui/Video';

export const Hero = () => {
  const [videoEnded, setVideoEnded] = useState(false);

  const handleVideoEnded = () => {
    setVideoEnded(true);
  };

  return (
    <div>
      {!videoEnded ? (
        <Video
          src='hero-logo.webm'
          autoPlay
          preload='auto'
          muted
          onEnded={handleVideoEnded}
          style={{ width: '100vw', height: '100vh', objectFit: 'cover' }}
        />
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
