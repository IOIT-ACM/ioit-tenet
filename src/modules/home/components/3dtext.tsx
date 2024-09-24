'use client';

import { useRef, Suspense } from 'react';
import { type Mesh } from 'three';
import {
  Text3D,
  OrbitControls,
  Center,
  Stars,
  Float,
  Sparkles,
  useMatcapTexture,
} from '@react-three/drei';
import { Canvas, useThree } from '@react-three/fiber';

function Hero() {
  const [matcapTexture] = useMatcapTexture('CB4E88_F99AD6_F384C3_ED75B9');
  const ref = useRef<Mesh>(null);

  const { viewport } = useThree();
  const { width: w } = viewport;

  return (
    <Center scale={[0.9, 1, 1]}>
      <Float speed={1}>
        <Text3D
          position={[0, 0, -10]}
          scale={[-1, 1, 1]}
          ref={ref}
          size={w / 9}
          font={'/gt.json'}
          curveSegments={24}
          bevelSegments={1}
          bevelEnabled
          bevelSize={0.08}
          bevelThickness={0.03}
          height={1}
          lineHeight={0.9}
          letterSpacing={0.3}
        >
          MUN
          <meshMatcapMaterial color='white' matcap={matcapTexture} />
        </Text3D>
      </Float>
    </Center>
  );
}

export default function TEXT3d() {
  return (
    <div className='h-screen'>
      <Canvas camera={{ position: [0, 0, -10], fov: 60 }}>
        <OrbitControls enableZoom={false} />

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
          <Hero />
        </Suspense>
        <ambientLight intensity={0.6} color={'#dee2ff'} />
      </Canvas>
    </div>
  );
}
