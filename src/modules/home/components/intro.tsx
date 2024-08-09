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
      ref={containerRef}
      className='min-h-[100vh] overflow-hidden p-10 pb-[200px] text-slate-100 transition-colors duration-1000 md:p-20'
    >
      <h1 className='reveal-type text-3xl font-extrabold md:text-[150px]'>
        What is TENET?
      </h1>
      <br />
      <br />
      <br />
      <br />
      <div className='reveal-type text-md md:text-[45px]'>
        T.E.N.E.T goes beyond just an abbreviation of 5 niches. This event in
        its inception is an amalgamation of ideas where professionalism meets
        the academia. This is an event where students learn, connect, grow and
        most importantly have an experience worth remembering. From E-summit to
        eSports and from Techfiesta to IOIT MUN&apos;24 and Creator&apos;s
        Conclave, TENET, an event organised by the IOIT ACM Student Chapter has
        something for everyone.
      </div>
    </div>
  );
};
