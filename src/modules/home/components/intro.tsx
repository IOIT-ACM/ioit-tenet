/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import { useIsMobile } from '@/hooks/useismobile';

gsap.registerPlugin(ScrollTrigger);

export const Intro: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const ismobile = useIsMobile();

  const splitInstancesRef = useRef<SplitType[]>([]);

  useLayoutEffect(() => {
    if (!containerRef.current) return;

    splitInstancesRef.current = [];

    const splitTypes = containerRef.current.querySelectorAll('.reveal-type');

    splitTypes.forEach((char) => {
      const text = new SplitType(char as HTMLElement, {
        types: 'lines,words',
      });

      splitInstancesRef.current.push(text);

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
          end: 'top 50%',
          scrub: 1.5,
          toggleActions: 'play none none reverse',
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

      splitInstancesRef.current.forEach((splitInstance) => {
        if (splitInstance) {
          splitInstance.revert();
        }
      });

      splitInstancesRef.current = [];
    };
  }, []);

  return (
    <div
      id='intro'
      ref={containerRef}
      className='overflow-hidden p-10 text-center text-slate-100 transition-colors duration-1000 md:min-h-[70vh] md:p-20 md:pb-[200px]'
    >
      <h1 className='reveal-type text-3xl font-extrabold md:text-[80px]'>
        What is TENET?
      </h1>
      <br />
      {!ismobile && (
        <>
          <br />
          <br />
          <br />
        </>
      )}
      <div className='reveal-type text-md md:text-[35px]'>
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
