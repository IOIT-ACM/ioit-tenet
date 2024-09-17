/* eslint-disable @typescript-eslint/no-floating-promises */

'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { AnimatedLogo } from '@/lib/AnimatedLogo';
// import { MovingSpot } from '@/lib/spotlight';
import { TENET } from './tenet';
import Machinegun from './machinegun';
import { Links } from './links';
import { useState, useEffect } from 'react';

export const TenetHero: React.FC = () => {
  const [loading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='relative h-screen w-screen overflow-hidden bg-neutral-950 pb-[20vh] md:pb-0'>
      <Canvas>
        <ambientLight intensity={1} />
        <directionalLight
          position={[1, 2, 5]}
          color='lightblue'
          intensity={0.9}
        />
        <OrbitControls enableZoom={false} />
        {!loading && <AnimatedLogo />}
        <spotLight
          angle={0.5}
          penumbra={0.5}
          castShadow
          intensity={10}
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
    </div>
  );
};
