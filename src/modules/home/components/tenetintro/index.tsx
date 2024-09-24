/* eslint-disable @typescript-eslint/no-floating-promises */

'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sparkles, Stars, Float } from '@react-three/drei';
import { Suspense } from 'react';
import { AnimatedLogo } from '@/lib/AnimatedLogo';
// import { MovingSpot } from '@/lib/spotlight';
import { TENET } from './tenet';
import Machinegun from './machinegun';
import { Links } from './links';
import { TITLETEXT } from './title';

export const TenetHero: React.FC = () => {
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
        {/* <MovingSpot color='#0c8cbf' position={[0, 3, 2]} />
        <MovingSpot color='#b00c3f' position={[1, 3, 0]} /> */}
      </Canvas>
      <Links />
      <TENET />
      <Machinegun />
      <TITLETEXT />
      {/* <div className='absolute bottom-0 left-0 right-0 z-0 h-56 bg-gradient-to-b from-zinc-950/0 to-neutral-950 sm:h-96' /> */}
    </div>
  );
};
