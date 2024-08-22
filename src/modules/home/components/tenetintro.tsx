'use client';

import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Video } from '@/components/ui/Video';

const SECTION_HEIGHT = 1500;

export const TenetHero = () => {
  return (
    <div
      style={{ height: `calc(${SECTION_HEIGHT}px + 130vh)` }}
      className='relative w-full bg-black'
    >
      <CenterImage />

      <ParallaxImages />
    </div>
  );
};

const CenterImage = () => {
  const [loading, setLoading] = useState(true);
  const ref = useRef(null);

  useEffect(() => {
    setLoading(false);
  }, []);

  const { scrollY } = useScroll();

  const scale = useTransform(scrollY, [0, 1500], [1, 1.4]);

  const opacity = useTransform(
    scrollY,
    [SECTION_HEIGHT, SECTION_HEIGHT + 500],
    [1, 0],
  );

  return (
    <motion.div
      ref={ref}
      className='sticky top-0 h-screen w-screen overflow-hidden'
    >
      <div className='relative'>
        <div className='absolute bottom-0 left-0 right-0 h-96 overflow-hidden bg-gradient-to-b from-zinc-950/0 to-zinc-950' />

        {!loading && (
          <motion.div
            style={{
              scale,
              opacity,
            }}
          >
            <Video src='hero-logo.webm' autoPlay preload='auto' muted />
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

const ParallaxImages = () => {
  return (
    <div className='mx-auto max-w-5xl px-4 pt-[200px]'>
      <ParallaxImg
        src='https://images.unsplash.com/photo-1484600899469-230e8d1d59c0?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        alt='And example of a space launch'
        start={-200}
        end={200}
        className='w-1/3'
      />
      <ParallaxImg
        src='https://images.unsplash.com/photo-1446776709462-d6b525c57bd3?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        alt='An example of a space launch'
        start={200}
        end={-250}
        className='mx-auto w-2/3'
      />
      <ParallaxImg
        src='https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        alt='Orbiting satellite'
        start={-200}
        end={200}
        className='ml-auto w-1/3'
      />
      <ParallaxImg
        src='https://images.unsplash.com/photo-1494022299300-899b96e49893?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        alt='Orbiting satellite'
        start={0}
        end={-500}
        className='ml-24 w-5/12'
      />
    </div>
  );
};

const ParallaxImg = ({
  className,
  alt,
  src,
  start,
  end,
}: {
  className?: string;
  alt: string;
  src: string;
  start: number;
  end: number;
}) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`${start}px end`, `end ${end * -1}px`],
  });

  const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);

  const y = useTransform(scrollYProgress, [0, 1], [start, end]);
  const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;

  return (
    <motion.img
      src={src}
      alt={alt}
      className={className}
      ref={ref}
      style={{ transform, opacity }}
    />
  );
};
