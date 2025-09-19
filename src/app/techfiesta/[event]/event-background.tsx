'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';

interface EventBackgroundProps {
  imageUrl: string;
}

export default function EventBackground({ imageUrl }: EventBackgroundProps) {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (!bgRef.current) return;

      const { clientX, clientY } = event;
      const movementFactor = 25;

      const nx = clientX / window.innerWidth - 0.5;
      const ny = clientY / window.innerHeight - 0.5;

      gsap.to(bgRef.current, {
        x: nx * movementFactor,
        y: ny * movementFactor,
        duration: 0.8,
        ease: 'power2.out',
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div ref={bgRef} className='absolute inset-0 z-0 scale-110'>
      <Image
        src={imageUrl}
        alt='Event background'
        fill
        objectFit='cover'
        className='opacity-10 blur-sm'
        priority
      />
      <div className='absolute inset-0 bg-black/50' />
    </div>
  );
}
