'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const AnimatedEye: React.FC = () => {
  const maskRef = useRef<SVGPathElement>(null);
  const pupilRef = useRef<SVGCircleElement>(null);

  useEffect(() => {
    gsap.set(maskRef.current, { transformOrigin: 'center center' });

    gsap
      .timeline({
        repeat: -1,
        repeatDelay: 1,
      })
      .to(maskRef.current, {
        duration: 0.2,
        scaleY: 0,
        ease: 'power1.inOut',
      })
      .to(maskRef.current, {
        duration: 0.3,
        scaleY: 1,
        ease: 'power1.inOut',
      });

    const pupilMoveY = gsap.quickTo(pupilRef.current, 'yPercent', {
      ease: 'power3',
    });
    const pupilMoveX = gsap.quickTo(pupilRef.current, 'xPercent', {
      ease: 'power3',
    });

    const handlePointerMove = (e: PointerEvent) => {
      pupilMoveY(gsap.utils.interpolate(-25, 25, e.y / window.innerHeight));
      pupilMoveX(gsap.utils.interpolate(-25, 25, e.x / window.innerWidth));
    };

    document.body.addEventListener('pointermove', handlePointerMove);

    return () => {
      document.body.removeEventListener('pointermove', handlePointerMove);
    };
  }, []);

  return (
    <div className='hidden min-h-20 -translate-x-[20vw] items-center justify-center md:flex'>
      <svg
        width='180'
        height='103'
        viewBox='0 0 180 103'
        fill='none'
        className='border-2 border-dashed border-white'
      >
        <mask id='myMask'>
          <path
            ref={maskRef}
            id='mask-anim'
            d='M180 51.5C180 51.5 148.541 103 90 103C31.459 103 0 51.5 0 51.5C0 51.5 31.459 0 90 0C148.541 0 180 51.5 180 51.5Z'
            fill='white'
          />
        </mask>
        <g mask='url(#myMask)'>
          <path
            d='M180 51.5C180 51.5 148.541 103 90 103C31.459 103 0 51.5 0 51.5C0 51.5 31.459 0 90 0C148.541 0 180 51.5 180 51.5Z'
            fill='white'
          />
          <circle
            ref={pupilRef}
            id='pupil'
            cx='90'
            cy='50'
            r='40'
            fill='black'
          />
        </g>
      </svg>
    </div>
  );
};

export default AnimatedEye;
