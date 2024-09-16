/* eslint-disable @next/next/no-img-element */
'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

gsap.registerPlugin(MotionPathPlugin);

const LaptopAnimation: React.FC = () => {
  const masterDivRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (masterDivRef.current) {
      const tl = gsap.timeline({ repeat: -1 });

      tl.to('.gsap-screen-1', {
        x: -10,
        y: 50,
        duration: 0.7,
        ease: 'power1.out',
        stagger: 0.1,
      })
        .to('.gsap-background-screen', { opacity: 1, duration: 0.5 })
        .to(
          '.gsap-screen-1',
          { x: -15, y: 60, duration: 2, ease: 'power1.out', stagger: 0.1 },
          '=-0.7',
        )
        .to('.gsap-screen-3', { x: 37, y: 35, scale: 1.5, ease: 'bounce' }, '<')
        .to(
          '.gsap-screen-3',
          { x: 44, y: 42, scale: 1.6, duration: 2.5, ease: 'bounce' },
          '<0.5',
        )
        .to(
          '.gsap-screen-2',
          { x: 65, y: -5, scale: 1.7, ease: 'bounce', duration: 0.5 },
          '<',
        )
        .to(
          '.gsap-screen-2',
          { x: 75, y: -5, scale: 1.7, ease: 'bounce', duration: 2.5 },
          '<0.5',
        )
        .to(
          '.gsap-button-top, .gsap-button-bottom',
          { x: 90, y: 70, opacity: 1, duration: 0.7, ease: 'bounce' },
          '<',
        )
        .to(
          '.gsap-button-top.one',
          {
            motionPath: {
              path: [{ y: 75 }, { y: 70 }],
              curviness: 1,
            },
            duration: 0.3,
          },
          '<0.7',
        )
        .to(
          '.gsap-screen-1',
          {
            x: 0,
            y: 0,
            duration: 0.4,
            ease: 'power2',
          },
          '<0.3',
        )
        .to(
          '.gsap-button-top.two',
          {
            motionPath: {
              path: [{ y: 75 }, { y: 70 }],
              curviness: 1,
            },
            duration: 0.3,
          },
          '<0.4',
        )
        .to(
          '.gsap-screen-3',
          {
            x: 0,
            y: 0,
            scale: 1,
            duration: 0.3,
            ease: 'power2',
          },
          '<0.3',
        )
        .to(
          '.gsap-button-top.three',
          {
            motionPath: {
              path: [{ y: 75 }, { y: 70 }],
              curviness: 1,
            },
            duration: 0.3,
          },
          '<0.3',
        )
        .to(
          '.gsap-screen-2',
          {
            x: 0,
            y: 0,
            scale: 1,
            duration: 0.3,
            ease: 'power2',
          },
          '<0.3',
        )
        .to('.gsap-background-screen', { opacity: 0 }, '<0.3')
        .to('.gsap-button-top, .gsap-button-bottom', { opacity: 0 }, '<0.3');
    }
  }, []);

  return (
    <div
      ref={masterDivRef}
      className='relative h-[362px] w-[416px]'
      id='gsap-master-div'
    >
      <div className='gsap-grid grid h-full w-full grid-cols-1 grid-rows-1'>
        <img
          className='gsap-inbound-laptop z-[3] col-start-1 row-start-1 h-[82.9%]'
          src='https://fs.hubspotusercontent00.net/hubfs/2504008/Laptop%20Body.svg'
          alt='Laptop Body'
        />

        <img
          className='gsap-background-screen z-[4] col-start-1 row-start-1 -mt-[1.7%] ml-[2.9%] h-[68.3%] w-[44.3%] opacity-0'
          src='https://fs.hubspotusercontent00.net/hubfs/2504008/background%20screen%20-%20blue.svg'
          alt='Background Screen'
        />

        <img
          className='gsap-screen-1 z-[4] col-start-1 row-start-1 ml-[4.5%] mt-[9.3%] h-[48.8%]'
          src='https://fs.hubspotusercontent00.net/hubfs/2504008/Screen%201.svg'
          alt='Screen 1'
        />

        <img
          className='gsap-screen-2 z-[4] col-start-1 row-start-1 ml-[33.7%] mt-[4.3%] h-[11.5%]'
          src='https://fs.hubspotusercontent00.net/hubfs/2504008/Screen%202.svg'
          alt='Screen 2'
        />

        <img
          className='gsap-screen-3 z-[5] col-start-1 row-start-1 ml-[34.8%] mt-[11.4%] h-[27%]'
          src='https://fs.hubspotusercontent00.net/hubfs/2504008/Screen%203.svg'
          alt='Screen 3'
        />

        <img
          className='gsap-button-top one -left-1/4 -top-[16%] z-[2] col-start-1 row-start-1 ml-[49%] mt-[71.8%] h-[8.9%] translate-x-[120px] translate-y-1/2 opacity-0'
          src='https://fs.hubspotusercontent00.net/hubfs/2504008/button%20top%201.svg'
          alt='Button Top 1'
        />

        <img
          className='gsap-button-top two -left-1/4 -top-[16%] z-[2] col-start-1 row-start-1 ml-[64.9%] mt-[62.5%] h-[8.9%] translate-x-[120px] translate-y-1/2 opacity-0'
          src='https://fs.hubspotusercontent00.net/hubfs/2504008/button%20top%202.svg'
          alt='Button Top 2'
        />

        <img
          className='gsap-button-top three -left-1/4 -top-[16%] z-[2] col-start-1 row-start-1 ml-[80.5%] mt-[53.5%] h-[8.9%] translate-x-[120px] translate-y-1/2 opacity-0'
          src='https://fs.hubspotusercontent00.net/hubfs/2504008/button%20top%203.svg'
          alt='Button Top 3'
        />

        <img
          className='gsap-button-bottom one -left-1/4 -top-[16%] z-[1] col-start-1 row-start-1 ml-[49%] mt-[73.2%] h-[8.9%] translate-x-[120px] translate-y-1/2 opacity-0'
          src='https://fs.hubspotusercontent00.net/hubfs/2504008/button%20bottom%201.svg'
          alt='Button Bottom 1'
        />

        <img
          className='gsap-button-bottom two -left-1/4 -top-[16%] z-[1] col-start-1 row-start-1 ml-[64.9%] mt-[63.8%] h-[8.9%] translate-x-[120px] translate-y-1/2 opacity-0'
          src='https://fs.hubspotusercontent00.net/hubfs/2504008/button%20bottom%202.svg'
          alt='Button Bottom 2'
        />

        <img
          className='gsap-button-bottom three -left-1/4 -top-[16%] z-[1] col-start-1 row-start-1 ml-[80.5%] mt-[54.9%] h-[8.9%] translate-x-[120px] translate-y-1/2 opacity-0'
          src='https://fs.hubspotusercontent00.net/hubfs/2504008/button%20bottom%203.svg'
          alt='Button Bottom 3'
        />
      </div>
    </div>
  );
};

export default LaptopAnimation;
