'use client';

import * as THREE from 'three';
import React, { Suspense, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';

const MUNtitle: React.FC = () => {
  return (
    <div className='flex h-screen items-center justify-center'>
      <Canvas
        gl={{ alpha: false }}
        camera={{ position: [0, 3, 100], fov: 15 }}
        eventPrefix='client'
      >
        <color attach='background' args={['#0a0a0a']} />
        <fog attach='fog' args={['black', 15, 20]} />
        <Suspense fallback={null}>
          <group position={[0, 0, 0]}>
            <VideoText position={[0, 0, 0]} />
          </group>
          <ambientLight intensity={0.5} />
          <spotLight position={[0, 10, 0]} intensity={0.3} />
          <directionalLight position={[-50, 0, -40]} intensity={0.7} />
          <Intro />
        </Suspense>
      </Canvas>
    </div>
  );
};

const VideoText: React.FC<{ position: [number, number, number] }> = (props) => {
  const [video] = useState(() =>
    Object.assign(document.createElement('video'), {
      src: 'https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/ui/mun-clip.mp4',
      crossOrigin: 'Anonymous',
      loop: true,
      muted: true,
    }),
  );
  useEffect(() => void video.play(), [video]);
  return (
    <Text
      font='/fonts/Inter-Bold.woff'
      fontSize={2}
      letterSpacing={-0.06}
      {...props}
      maxWidth={200}
      anchorX='center'
      anchorY='middle'
    >
      MUN
      <meshBasicMaterial toneMapped={false}>
        <videoTexture attach='map' args={[video]} />
      </meshBasicMaterial>
    </Text>
  );
};

const Intro: React.FC = () => {
  const [vec] = useState(() => new THREE.Vector3());
  return useFrame((state) => {
    state.camera.position.lerp(
      vec.set(state.mouse.x * 5, 3 + state.mouse.y * 2, 14),
      0.05,
    );
    state.camera.lookAt(0, 0, 0);
  });
};

export default MUNtitle;
