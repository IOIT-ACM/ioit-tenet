/* eslint-disable @typescript-eslint/no-misused-promises */
'use client';

import * as THREE from 'three';
import React, { Suspense, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';

const MUNtitle: React.FC = () => {
  return (
    <div className='hidden h-screen items-center justify-center md:flex'>
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
  const [video] = useState<HTMLVideoElement | null>(() => {
    const videoElement = document.createElement('video');
    videoElement.src =
      'https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/ui/mun-clip.mp4';
    videoElement.crossOrigin = 'Anonymous';
    videoElement.loop = true;
    videoElement.muted = true;
    return videoElement;
  });

  useEffect(() => {
    if (video) {
      const handleLoaded = () => video.play();
      video.addEventListener('canplaythrough', handleLoaded);
      return () => video.removeEventListener('canplaythrough', handleLoaded);
    }
  }, [video]);

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
        {video && <videoTexture attach='map' args={[video]} />}
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
