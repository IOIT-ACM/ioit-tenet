'use client';

import React, { type MutableRefObject, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/useismobile';

export const Gallery = () => {
  return (
    <section className='h-[200vh] w-screen bg-neutral-950'>
      <div className='sticky top-0 flex h-screen items-center overflow-hidden'>
        <div>
          <motion.h2
            initial={{ opacity: 0, scale: 0.2 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 6, type: 'spring', stiffness: 50 }}
            className='z-0 text-[20vw] font-black text-neutral-800 md:text-[200px]'
          >
            GALLERY
            <span className='text-indigo-500'>.</span>
          </motion.h2>
          <Cards />
        </div>
      </div>
    </section>
  );
};

const cardData = [
  {
    src: 'https://images.unsplash.com/photo-1635373670332-43ea883bb081?q=80&w=2781&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Event image',
    rotate: '6deg',
    top: '25%',
    left: '75%',
    className: 'w-36 cursor-grab md:w-56',
  },
  {
    src: 'https://images.unsplash.com/photo-1576174464184-fb78fe882bfd?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Event image',
    rotate: '12deg',
    top: '55%',
    left: '62%',
    className: 'w-24 cursor-grab md:w-48',
  },
  {
    src: 'https://images.unsplash.com/photo-1503751071777-d2918b21bbd9?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Event image',
    rotate: '-6deg',
    top: '10%',
    left: '38%',
    className: 'w-52 cursor-grab md:w-80',
  },
  {
    src: 'https://images.unsplash.com/photo-1620428268482-cf1851a36764?q=80&w=2609&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Event image',
    rotate: '8deg',
    top: '80%',
    left: '30%',
    className: 'w-48 cursor-grab md:w-72',
  },
  {
    src: 'https://images.unsplash.com/photo-1602212096437-d0af1ce0553e?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Event image',
    rotate: '18deg',
    top: '70%',
    left: '45%',
    className: 'w-40 cursor-grab md:w-64',
  },
  {
    src: 'https://images.unsplash.com/photo-1622313762347-3c09fe5f2719?q=80&w=2640&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Event image',
    rotate: '-3deg',
    top: '25%',
    left: '75%',
    className: 'w-24 cursor-grab md:w-48',
  },
  {
    src: 'https://images.unsplash.com/photo-1635373670332-43ea883bb081?q=80&w=2781&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Event image',
    rotate: '6deg',
    top: '20%',
    left: '25%',
    className: 'w-36 cursor-grab md:w-56',
  },
  {
    src: 'https://images.unsplash.com/photo-1576174464184-fb78fe882bfd?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Event image',
    rotate: '12deg',
    top: '45%',
    left: '90%',
    className: 'w-24 cursor-grab md:w-48',
  },
  {
    src: 'https://images.unsplash.com/photo-1503751071777-d2918b21bbd9?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Event image',
    rotate: '-6deg',
    top: '20%',
    left: '20%',
    className: 'w-52 cursor-grab md:w-80',
  },
  {
    src: 'https://images.unsplash.com/photo-1620428268482-cf1851a36764?q=80&w=2609&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Event image',
    rotate: '8deg',
    top: '80%',
    left: '40%',
    className: 'w-48 cursor-grab md:w-72',
  },
  {
    src: 'https://images.unsplash.com/photo-1602212096437-d0af1ce0553e?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Event image',
    rotate: '18deg',
    top: '20%',
    left: '65%',
    className: 'w-40 cursor-grab md:w-64',
  },
  {
    src: 'https://images.unsplash.com/photo-1622313762347-3c09fe5f2719?q=80&w=2640&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Event image',
    rotate: '-3deg',
    top: '35%',
    left: '85%',
    className: 'w-24 cursor-grab md:w-48',
  },
  {
    src: 'https://images.unsplash.com/photo-1635373670332-43ea883bb081?q=80&w=2781&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Event image',
    rotate: '6deg',
    top: '10%',
    left: '15%',
    className: 'w-36 cursor-grab md:w-56',
  },
];

const Cards = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isMobile = useIsMobile();

  const data = isMobile ? cardData.slice(0, 8) : cardData;

  return (
    <div className='absolute inset-0 z-10' ref={containerRef}>
      {data.map((card, index) => (
        <Card key={index} containerRef={containerRef} {...card} />
      ))}
    </div>
  );
};

interface Props {
  containerRef: MutableRefObject<HTMLDivElement | null>;
  src: string;
  alt: string;
  top: string;
  left: string;
  rotate: string;
  className?: string;
}

const Card = ({
  containerRef,
  src,
  alt,
  top,
  left,
  rotate,
  className,
}: Props) => {
  const [zIndex, setZIndex] = useState(0);

  const updateZIndex = () => {
    const els = document.querySelectorAll('.drag-elements');

    let maxZIndex = -Infinity;

    els.forEach((el) => {
      const zIndex = parseInt(
        window.getComputedStyle(el).getPropertyValue('z-index'),
      );

      if (!isNaN(zIndex) && zIndex > maxZIndex) {
        maxZIndex = zIndex;
      }
    });

    setZIndex(maxZIndex + 1);
  };

  return (
    <motion.img
      onMouseDown={updateZIndex}
      style={{
        top,
        left,
        rotate,
        zIndex,
      }}
      className={cn(
        'drag-elements absolute w-48 bg-neutral-200 p-1 pb-4',
        className,
      )}
      src={src}
      alt={alt}
      drag
      dragConstraints={containerRef}
      // Uncomment below and remove dragElastic to remove movement after release
      dragMomentum={false}
      dragElastic={0.65}
    />
  );
};
