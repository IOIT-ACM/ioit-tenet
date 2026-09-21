'use client';

import { type ReactNode, type RefObject } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ParallaxLayerProps {
  children: ReactNode;
  className?: string;
  /** The scrolling section this layer's motion is measured against. */
  containerRef: RefObject<HTMLElement>;
  /** Pixel range this layer travels across the section's scroll-through, e.g. [0, 80].
   *  Layers meant to feel closer to the viewer should get a bigger range. */
  range?: [number, number];
  /** Optional opacity range over the same scroll progress, e.g. [1, 0] to fade out. */
  opacityRange?: [number, number];
}

/**
 * Ties a layer's vertical position (and optionally opacity) to how far the
 * given section has scrolled through the viewport, from the moment its top
 * edge reaches the top of the screen to the moment its bottom edge does.
 * Layers with a bigger `range` shift more and read as closer to the camera.
 */
export default function ParallaxLayer({ children, className, containerRef, range = [0, 0], opacityRange }: ParallaxLayerProps) {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], range);
  const opacity = useTransform(scrollYProgress, [0, 1], opacityRange ?? [1, 1]);

  return (
    <motion.div style={{ y, opacity: opacityRange ? opacity : undefined }} className={className}>
      {children}
    </motion.div>
  );
}
