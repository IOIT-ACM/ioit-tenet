/* eslint-disable react-hooks/exhaustive-deps */
import React, { type ReactNode, useLayoutEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import { useIsMobile } from '@/hooks/useismobile';

const section1 = [
  'Top industry leaders',
  '50+ expert speakers',
  '3000+ attendees',
];

const section2 = ['Exclusive merch', 'Welcome kits', 'Certifications'];

const section3 = [
  'Job & internship fair',
  'Career opportunities',
  'Meet top recruiters',
];

export default function Description() {
  return (
    <div className='font-roboto relative mx-[5vw] mb-20 mt-[10vw] overflow-hidden text-xl text-white/80 md:mb-48 md:text-6xl'>
      <div className='mt-[5vw] text-left'>
        {section1.map((phrase, index) => (
          <AnimatedTextLeft key={index}>{phrase}</AnimatedTextLeft>
        ))}
      </div>
      <div className='mt-[5vw] text-right'>
        {section2.map((phrase, index) => (
          <AnimatedTextRight key={index}>{phrase}</AnimatedTextRight>
        ))}
      </div>
      <div className='mt-[5vw] text-left'>
        {section3.map((phrase, index) => (
          <AnimatedTextLeft key={index}>{phrase}</AnimatedTextLeft>
        ))}
      </div>
    </div>
  );
}

const AnimatedTextLeft = ({ children }: { children: ReactNode }) => {
  const text = useRef(null);
  const mobile = useIsMobile();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);
      gsap.from(text.current, {
        scrollTrigger: {
          trigger: text.current,
          scrub: true,
          start: '0px bottom',
          end: `bottom+=${mobile ? 100 : 200}px bottom`,
        },
        opacity: 0,
        left: '-200px',
        ease: 'power3.Out',
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <p ref={text} className='relative m-0'>
      {children}
    </p>
  );
};

const AnimatedTextRight = ({ children }: { children: ReactNode }) => {
  const text = useRef(null);
  const mobile = useIsMobile();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);
      gsap.from(text.current, {
        scrollTrigger: {
          trigger: text.current,
          scrub: true,
          start: '0px bottom',
          end: `bottom+=${mobile ? 100 : 200}px bottom`,
        },
        opacity: 0,
        right: '-200px',
        ease: 'power3.Out',
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <p ref={text} className='relative m-0'>
      {children}
    </p>
  );
};
