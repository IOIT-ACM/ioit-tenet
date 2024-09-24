/* eslint-disable @typescript-eslint/no-misused-promises */
'use client';

import { useRef, useEffect, useState, Suspense } from 'react';
import { type Mesh, VideoTexture } from 'three';
import { Text3D, OrbitControls, Center, Float } from '@react-three/drei';
import { Canvas, useThree } from '@react-three/fiber';

function Hero() {
  const ref = useRef<Mesh>(null);

  const { viewport } = useThree();
  const { width: w } = viewport;

  const [video] = useState(() => {
    const vid = document.createElement('video');
    vid.src =
      'https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/ui/mun-clip.mp4';
    vid.crossOrigin = 'Anonymous';
    vid.loop = true;
    vid.muted = true;
    return vid;
  });

  useEffect(() => {
    if (video) {
      const playVideo = () => video.play();
      video.addEventListener('canplaythrough', playVideo);
      return () => video.removeEventListener('canplaythrough', playVideo);
    }
  }, [video]);

  const videoTexture = new VideoTexture(video);

  return (
    <Center scale={[0.9, 1, 1]}>
      <Float speed={1}>
        <Text3D
          position={[0, 0, -10]}
          scale={[-1, 1, 1]}
          ref={ref}
          size={w / 9}
          font={'/fonts/optimer_bold.typeface.json'}
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
          <meshBasicMaterial toneMapped={false} map={videoTexture} />
        </Text3D>
      </Float>
    </Center>
  );
}

export default function TEXT3d() {
  return (
    <div className='h-screen'>
      <Canvas camera={{ position: [0, 0, -10], fov: 60 }} eventPrefix='client'>
        <OrbitControls enableZoom={false} />
        <Suspense fallback={'Loading'}>
          <Hero />
        </Suspense>
      </Canvas>
    </div>
  );
}
