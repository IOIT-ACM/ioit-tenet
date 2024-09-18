/* eslint-disable react-hooks/exhaustive-deps */

import { useFrame } from '@react-three/fiber';
import React, { useRef, useEffect } from 'react';
import type * as THREE from 'three';
import { TTLogo } from '@/lib/ttlogo';
import gsap from 'gsap';

export const AnimatedLogo: React.FC = () => {
  const TTref = useRef<THREE.Group>(null);

  useEffect(() => {
    if (TTref.current) {
      // Initial animation when the logo first appears
      gsap.fromTo(
        TTref.current.position,
        { y: 3 },
        {
          y: 0,
          duration: 1.9,
          ease: 'power1.out',
        },
      );
      gsap.fromTo(
        TTref.current.scale,
        { x: 0, y: 0, z: 0 },
        {
          x: 1.2,
          y: 1.2,
          z: 1.2,
          duration: 1.9,
          ease: 'power1.out',
        },
      );
    }
  }, []);

  // Continuous rotation of the logo
  useFrame((state, delta) => {
    if (TTref.current) {
      TTref.current.rotation.y += delta;
    }
  });

  return <TTLogo ref={TTref} />;
};
