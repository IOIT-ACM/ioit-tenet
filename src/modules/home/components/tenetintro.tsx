/* eslint-disable @typescript-eslint/no-floating-promises */

'use client';

import { Canvas } from '@react-three/fiber';
import React from 'react';
import { OrbitControls } from '@react-three/drei';
import { AnimatedLogo } from '@/lib/AnimatedLogo';

export const TenetHero: React.FC = () => {
  return (
    <div className='h-screen w-screen'>
      <Canvas>
        <ambientLight intensity={1} />
        <directionalLight
          position={[1, 2, 5]}
          color='lightblue'
          intensity={0.9}
        />
        <OrbitControls enableZoom={false} />
        <AnimatedLogo />
      </Canvas>
    </div>
  );
};
