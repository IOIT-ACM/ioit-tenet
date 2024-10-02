/* eslint-disable @typescript-eslint/no-floating-promises */

'use client';

import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sparkles, Stars, Float } from '@react-three/drei';
import { Suspense } from 'react';
import { useStore } from '@/store';
import { AnimatedLogo } from '@/lib/AnimatedLogo';
import { TENET } from './tenet';
import Machinegun from './machinegun-text';
import { Links } from './links';
import { TITLETEXT } from './title';

export const TenetHero: React.FC = () => {
  const sceneLoading = useStore((state) => state.sceneLoading);

  return (
    <div className='relative h-screen w-screen overflow-hidden bg-neutral-950 drop-shadow-md'>
      <Canvas eventPrefix='client'>
        <ambientLight intensity={1} />
        <directionalLight
          position={[1, 2, 5]}
          color='lightblue'
          intensity={0.6}
        />
        <OrbitControls enableZoom={false} />
        {/* <Environment
          preset='studio'
          background
          blur={100}
          environmentIntensity={0.5}
          backgroundIntensity={0.9}
        /> */}

        <Suspense fallback={'Loading'}>
          <Stars
            radius={100}
            depth={100}
            count={4000}
            factor={4}
            saturation={0}
            fade
            speed={0.2}
          />
          <Sparkles
            count={300}
            size={3}
            speed={0.02}
            opacity={1}
            scale={10}
            color='#fff3b0'
          />
          <Float speed={1}>
            <AnimatedLogo />
          </Float>
        </Suspense>
        <spotLight
          angle={0.5}
          penumbra={0.5}
          castShadow
          intensity={40}
          shadow-mapSize={1024}
          shadow-bias={-0.001}
        >
          <orthographicCamera
            attach='shadow-camera'
            args={[-10, 10, -10, 10, 0.1, 50]}
          />
        </spotLight>
      </Canvas>
      {!sceneLoading && (
        <>
          <Links />
          <TENET />
          <Machinegun />
          <TITLETEXT />
        </>
      )}
    </div>
  );
};
