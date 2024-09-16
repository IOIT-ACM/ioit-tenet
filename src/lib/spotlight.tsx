/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import { SpotLight } from '@react-three/drei';
import { Vector3 } from 'three';

export const MovingSpot: React.FC<{
  color: string;
  position: [number, number, number];
}> = ({ color, position }) => {
  const light = useRef<any>(null);
  const viewport = useThree((state) => state.viewport);
  const vec = new Vector3();

  useFrame((state) => {
    if (light.current) {
      light.current.target.position.lerp(
        vec.set(
          (state.mouse.x * viewport.width) / 2,
          (state.mouse.y * viewport.height) / 2,
          0,
        ),
        0.1,
      );
      light.current.target.updateMatrixWorld();
    }
  });

  return (
    <SpotLight
      ref={light}
      color={color}
      castShadow
      penumbra={1}
      distance={6}
      angle={0.35}
      attenuation={5}
      anglePower={4}
      intensity={2}
      position={position}
    />
  );
};
