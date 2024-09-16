/* eslint-disable @typescript-eslint/no-floating-promises */

'use client';

import { Canvas } from '@react-three/fiber';
import React from 'react';
import { OrbitControls, Environment } from '@react-three/drei';
import { AnimatedLogo } from '@/lib/AnimatedLogo';

export const TenetHero: React.FC = () => {
  return (
    <div className='h-screen w-screen'>
      <Canvas>
        <Environment preset='studio' />
        <OrbitControls enableZoom={false} />
        <AnimatedLogo />
      </Canvas>
    </div>
  );
};
