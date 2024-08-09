/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-floating-promises */
'use client';

import { useAnimate } from 'framer-motion';
import React, { type MouseEventHandler, useRef } from 'react';
import { FlipLink } from './fliplink';

const images = [
  '/imgs/socials/instagram.png',
  '/imgs/socials/facebook.png',
  '/imgs/socials/linkedin.png',
  '/imgs/socials/x.png',
  '/imgs/socials/twitter.png',
];

export const Socials = ({ rotationRange }: { rotationRange: number }) => {
  const [scope, animate] = useAnimate();

  const lastRenderPosition = useRef({ x: 0, y: 0 });
  const imageRenderCount = useRef(0);
  const linkContainerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove: MouseEventHandler<HTMLDivElement> = (e) => {
    const { clientX, clientY } = e;

    if (linkContainerRef.current) {
      const { left, top, right, bottom } =
        linkContainerRef.current.getBoundingClientRect();

      if (
        clientX >= left &&
        clientX <= right &&
        clientY >= top &&
        clientY <= bottom
      ) {
        return;
      }
    }

    const distance = calculateDistance(
      clientX,
      clientY,
      lastRenderPosition.current.x,
      lastRenderPosition.current.y,
    );

    if (distance >= 200) {
      lastRenderPosition.current.x = clientX;
      lastRenderPosition.current.y = clientY;

      renderNextImage();
    }
  };

  const calculateDistance = (
    x1: number,
    y1: number,
    x2: number,
    y2: number,
  ) => {
    const deltaX = x2 - x1;
    const deltaY = y2 - y1;
    return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
  };

  const renderNextImage = () => {
    const imageIndex = imageRenderCount.current % images.length;
    const selector = `[data-mouse-move-index="${imageIndex}"]`;

    const el = document.querySelector(selector) as HTMLImageElement | null;

    if (el) {
      el.style.top = `${lastRenderPosition.current.y}px`;
      el.style.left = `${lastRenderPosition.current.x}px`;
      el.style.zIndex = imageRenderCount.current.toString();

      const rotation = Math.random() * rotationRange;

      animate(
        selector,
        {
          opacity: [0, 1],
          transform: [
            `translate(-50%, -25%) scale(0.5) ${
              imageIndex % 2
                ? `rotate(${rotation}deg)`
                : `rotate(-${rotation}deg)`
            }`,
            `translate(-50%, -50%) scale(1) ${
              imageIndex % 2
                ? `rotate(-${rotation}deg)`
                : `rotate(${rotation}deg)`
            }`,
          ],
        },
        { type: 'spring', damping: 15, stiffness: 200 },
      );

      animate(
        selector,
        {
          opacity: [1, 0],
        },
        { ease: 'linear', duration: 0.5, delay: 0.2 },
      );

      imageRenderCount.current = imageRenderCount.current + 1;
    }
  };

  return (
    <div
      id='socials'
      ref={scope}
      className='relative grid h-[100vh] place-content-center gap-2 overflow-hidden px-8 py-24 text-gray-400'
      onMouseMove={handleMouseMove}
    >
      <div ref={linkContainerRef}>
        <FlipLink href='#'>Twitter</FlipLink>
        <FlipLink href='#'>Linkedin</FlipLink>
        <FlipLink href='#'>Facebook</FlipLink>
        <FlipLink href='#'>Instagram</FlipLink>
      </div>

      {images.map((img, index) => (
        <img
          className='pointer-events-none absolute left-0 top-0 z-20 h-36 w-auto object-cover opacity-0'
          src={img}
          key={index}
          data-mouse-move-index={index}
        />
      ))}
    </div>
  );
};
