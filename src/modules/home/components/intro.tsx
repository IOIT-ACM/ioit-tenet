/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

export const Intro: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const splitTypes = containerRef.current.querySelectorAll('.reveal-type');

      splitTypes.forEach((char) => {
        const text = new SplitType(char as HTMLElement, {
          types: 'lines,words',
        });

        gsap.set(text.words, {
          opacity: 0,
          y: 20,
        });

        gsap.to(text.words, {
          opacity: 1,
          y: 0,
          duration: 1.5,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: char,
            start: 'top 80%',
            end: 'top 20%',
            scrub: 1.5,
            markers: false,
            toggleActions: 'play none none reverse',
          },
        });
      });
    }
  }, []);

  return (
    <div
      id='intro'
      ref={containerRef}
      className='mt-36 overflow-hidden p-10 text-slate-100 transition-colors duration-1000 md:min-h-[100vh] md:p-20 md:pb-[200px]'
    >
      <h1 className='reveal-type text-3xl font-extrabold md:text-[150px]'>
        What is TENET?
      </h1>
      <br />
      <br />
      <br />
      <br />
      <div className='reveal-type text-md md:text-[45px]'>
        TENET 2024 is organized by the IOIT ACM Student Chapter of AISSMS
        Institute of Information Technology. Our team is focused on bringing
        together innovation, creativity, and excellence to create an
        unforgettable experience for all participants. TENET is a space where
        people can learn, network, and celebrate, and it&apos;s driven by a
        passion for technology, entrepreneurship, and culture. We can&apos;t
        wait for you to join us on this amazing journey!
      </div>
    </div>
  );
};
