/* eslint-disable react-hooks/exhaustive-deps */

import { useFrame } from '@react-three/fiber';
import React, { useRef, useEffect } from 'react';
import type * as THREE from 'three';
import { TTLogo } from '@/lib/ttlogo';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useIsMobile } from '@/hooks/useismobile';

gsap.registerPlugin(ScrollTrigger);

export const AnimatedLogo: React.FC = () => {
  const TTref = useRef<THREE.Group>(null);
  const ismobile = useIsMobile();

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
          x: 1,
          y: 1,
          z: 1,
          duration: 1.9,
          ease: 'power1.out',
        },
      );

      // GSAP scroll-triggered animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: document.body,
          start: 'top top',
          end: '+=800',
          scrub: true,
        },
      });

      tl.to(TTref.current.scale, {
        x: ismobile ? 1.4 : 1.6, // Scale up to 1.6x on scroll
        y: ismobile ? 1.4 : 1.6,
        z: ismobile ? 1.4 : 1.6,
        duration: 1,
        ease: 'power1.out',
      });

      tl.to(TTref.current.position, {
        y: 1.6,
        duration: 1,
        ease: 'power1.out',
      });
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
