/* eslint-disable @next/next/no-img-element */
import React, { type MutableRefObject, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface Props {
  containerRef: MutableRefObject<HTMLDivElement | null>;
  src: string;
  alt: string;
  top: string;
  left: string;
  rotate: string;
  className?: string;
  index: number;
  isInView: boolean;
}

const GalleryCard: React.FC<Props> = ({
  containerRef,
  src,
  alt,
  top,
  left,
  rotate,
  className,
  // index,
  // isInView,
}) => {
  const [zIndex, setZIndex] = useState(0);

  const updateZIndex = () => {
    const els = document.querySelectorAll('.drag-elements');
    const maxZIndex = Math.max(
      ...Array.from(els).map(
        (el) => parseInt(window.getComputedStyle(el).zIndex) || 0,
      ),
    );
    setZIndex(maxZIndex + 1);
  };

  return (
    <motion.div
      // initial={{ opacity: 0, scale: 0.8 }}
      // animate={isInView ? { opacity: 1, scale: 1 } : {}}
      // transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{
        top,
        left,
        rotate,
        zIndex,
      }}
      className={cn(
        'drag-elements absolute overflow-hidden rounded-lg shadow-lg',
        'bg-gradient-to-br from-neutral-900 to-neutral-800',
        'border border-neutral-700 p-1',
        className,
      )}
      onMouseDown={updateZIndex}
      drag
      dragConstraints={containerRef}
      dragMomentum={false}
    >
      <div className='relative h-full w-full overflow-hidden rounded-lg'>
        <img
          src={src}
          alt={alt}
          className='h-full w-full object-cover transition-transform duration-300 hover:scale-110'
          loading='lazy'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent' />
        <div className='absolute bottom-0 left-0 p-3 text-white'>
          <h3 className='text-lg font-semibold'>{alt}</h3>
        </div>
      </div>
    </motion.div>
  );
};

export default GalleryCard;
