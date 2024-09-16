import { useFrame } from '@react-three/fiber';
import React, { useRef } from 'react';
import type * as THREE from 'three';
import { TTLogo } from '@/lib/ttlogo';

export const AnimatedLogo: React.FC = () => {
  const TTref = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (TTref.current) {
      TTref.current.rotation.y += delta;
    }
  });

  return <TTLogo ref={TTref} />;
};
