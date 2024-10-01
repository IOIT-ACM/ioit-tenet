/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { ParticleSphere } from './sphere';
import { OrbitControls } from '@react-three/drei';
import { CursorArrow } from './cursor';
import { Carousal } from './carousal';

export function ScrollableEvents() {
  const [isCursorInsideCanvas, setCursorInsideCanvas] = useState(false);

  const handleMouseEnter = () => setCursorInsideCanvas(true);
  const handleMouseLeave = () => setCursorInsideCanvas(false);

  return (
    <div
      className='relative mb-32 h-screen overflow-hidden'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Canvas style={{ width: '100%', height: '100vh' }}>
        <ParticleSphere />
        <OrbitControls
          enableZoom={false}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
          minAzimuthAngle={-Infinity}
          maxAzimuthAngle={Infinity}
        />
      </Canvas>

      <Carousal />

      <CursorArrow visible={isCursorInsideCanvas} />

      <div className='pointer-events-none absolute bottom-0 left-0 right-0 h-[20vh] bg-gradient-to-t from-neutral-950 to-transparent' />
    </div>
  );
}
