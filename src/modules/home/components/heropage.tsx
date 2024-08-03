'use client';

import React from 'react';
import { Video } from '@/components/ui/Video';

export const Hero = () => {
  return (
    <div>
      <h1 className='text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]'>
        IOIT <span className='text-[hsl(280,100%,70%)]'>TENET</span>
      </h1>
      <Video src='hero-logo.webm' controls />
    </div>
  );
};
