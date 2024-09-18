/* eslint-disable @typescript-eslint/no-floating-promises */

'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
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
          intensity={0.9}
        />
        <OrbitControls enableZoom={false} />
        <Environment preset='studio' background blur={100} />
        <AnimatedLogo />
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
      <TITLETEXT />
    </div>
  );
};
