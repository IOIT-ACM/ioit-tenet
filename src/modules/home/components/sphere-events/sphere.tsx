/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import type * as THREE from 'three';

export function ParticleSphere() {
  const pointsRef = useRef<THREE.Points>(null);
  const [pointerPosition, setPointerPosition] = useState({ x: 0, y: 0 });
  const [direction, setDirection] = useState(1);

  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.2 * direction;
    }
  });

  const onPointerDown = (event: any) => {
    setPointerPosition({ x: event.clientX, y: event.clientY });
  };

  const onPointerMove = (event: any) => {
    if (event.isPrimary) {
      const deltaX = event.clientX - pointerPosition.x;

      if (deltaX > 0) {
        setDirection(1);
      } else if (deltaX < 0) {
        setDirection(-1);
      }

      setPointerPosition({ x: event.clientX, y: event.clientY });
    }
  };

  const vertices = React.useMemo(() => {
    const positions = [];
    const radius = 2.7;
    const count = 500;

    for (let i = 0; i < count; i++) {
      const phi = Math.acos(2 * Math.random() - 1);
      const theta = 2 * Math.PI * Math.random();

      positions.push(
        radius * Math.sin(phi) * Math.cos(theta),
        radius * Math.sin(phi) * Math.sin(theta),
        radius * Math.cos(phi),
      );
    }

    return new Float32Array(positions);
  }, []);

  useFrame(() => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += 0.005 * direction;
    }
  });

  return (
    <Points
      ref={pointsRef}
      positions={vertices}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
    >
      <PointMaterial
        color='white'
        size={0.02}
        sizeAttenuation
        transparent
        depthWrite={false}
      />
    </Points>
  );
}
