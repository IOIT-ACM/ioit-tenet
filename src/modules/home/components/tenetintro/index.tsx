/* eslint-disable @typescript-eslint/no-floating-promises */

'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { AnimatedLogo } from '@/lib/AnimatedLogo';
// import { MovingSpot } from '@/lib/spotlight';

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
    </div>
  );
};
