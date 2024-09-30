/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { ParticleSphere } from './sphere';
import { CursorArrow } from './cursor';

export function ScrollableEvents() {
  const [isCursorInsideCanvas, setCursorInsideCanvas] = useState(false);

  const handleMouseEnter = () => setCursorInsideCanvas(true);
  const handleMouseLeave = () => setCursorInsideCanvas(false);

  return (
    <div className='relative mb-32 h-screen overflow-hidden'>
      <Canvas
        style={{ width: '100%', height: '100vh' }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <OrbitControls
          enableZoom={false}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
          minAzimuthAngle={-Infinity}
          maxAzimuthAngle={Infinity}
        />

        <ParticleSphere />
      </Canvas>

      <CursorArrow visible={isCursorInsideCanvas} />
    </div>
  );
}
