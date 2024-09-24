'use client';

'use client';

import styles from './ZoomParallax.module.scss';
import Image from 'next/image';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

export const ZoomParallax = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

  const grayscale = useTransform(
    scrollYProgress,
    [0, 0.3],
    ['grayscale(70%)', 'grayscale(0%)'],
  );

  const pictures = [
    {
      src: 'https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/mun.jpeg',
      scale: scale4,
    },
    {
      src: 'https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/esports/esports/bgmi.avif',
      scale: scale5,
    },
    {
      src: 'https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/creators.jpeg',
      scale: scale6,
    },
    {
      src: 'https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/events/d2d.jpeg',
      scale: scale5,
    },
    {
      src: 'https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/events/ctf.jpg',
      scale: scale6,
    },
    {
      src: 'https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/events/drone.jpg',
      scale: scale8,
    },
    {
      src: 'https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/events/web3.jpg',
      scale: scale9,
    },
  ];

  return (
    <div>
      <h1 className='mt-20 text-center text-4xl text-white md:mb-10 md:text-9xl'>
        Highlights
      </h1>
      <div ref={container} className={styles.container}>
        <div className={styles.sticky}>
          {pictures.map(({ src, scale }, index) => (
            <motion.div key={index} style={{ scale }} className={styles.el}>
              <motion.div
                className={styles.imageContainer}
                style={{ filter: grayscale }} // Apply grayscale transition here
              >
                <Image src={src} fill alt='image' />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
