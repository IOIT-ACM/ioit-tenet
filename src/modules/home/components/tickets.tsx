/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaArrowRightLong } from 'react-icons/fa6';
import Image from 'next/image';
import { Button } from '@/components/ui/RoundedButton';
import { useIsMobile } from '@/hooks/useismobile';

gsap.registerPlugin(ScrollTrigger);

const images = [
  {
    url: 'https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/techfiesta.jpeg',
    alt: 'Tech Fiesta',
    style: 'left-[5%] top-[5%] h-[30vh] md:h-[20vh] w-[30vw] md:w-[10vw]',
  },
  {
    url: 'https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/esummit.jpeg',
    alt: 'E-Summit',
    style: 'right-[10%] top-[5%] h-[25vh] md:h-[15vh] w-[40vw] md:w-[20vw]',
  },
  {
    url: 'https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/creators.jpeg',
    alt: 'Creators',
    style: 'bottom-0 left-[10%] h-[30vh] md:h-[20vh] w-[40vw] md:w-[20vw]',
  },
  {
    url: 'https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/events/esports.jpg',
    alt: 'Esports',
    style: 'bottom-[5%] right-[15%] h-[30vh] md:h-[20vh] w-[55vw] md:w-[10vw]',
  },
  {
    url: 'https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/mun.jpeg',
    alt: 'MUN',
    style: 'left-[20%] top-[10%] h-[30vh] md:h-[20vh] w-[45vw] md:w-[25vw]',
  },
];

export function Tickets() {
  const refs = useRef<(HTMLImageElement | null)[]>([]);
  const headerRef = useRef(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const ismobile = useIsMobile();

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      const movementFactors = [45, 50, 45, 50, 40];

      refs.current.forEach((ref, index) => {
        if (ref) {
          gsap.to(ref, {
            // @ts-ignore
            x: (clientX / window.innerWidth - 0.7) * movementFactors[index],
            // @ts-ignore
            y: (clientY / window.innerHeight - 0.7) * movementFactors[index],
            duration: 0.7,
            ease: 'power3.out',
          });
        }

        gsap.to(headerRef.current, {
          x: (clientX / window.innerWidth - 0.7) * 10,
          y: (clientY / window.innerHeight - 0.7) * 10,
          duration: 0.7,
          ease: 'power3.out',
        });
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      refs.current.forEach((ref) => {
        if (ref) {
          gsap.set(ref, {
            opacity: 0.3,
            scale: 0.2,
          });

          // Create animation for each image using ScrollTrigger
          gsap.to(ref, {
            opacity: 1,
            scale: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1,
            },
          });
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      className='grid min-h-[60vh] w-full items-center justify-center overflow-hidden px-10 py-10 text-white md:my-10 md:grid-cols-2 md:px-20'
      ref={containerRef}
    >
      {!ismobile && (
        <div
          className='mb-10 w-full text-center md:w-5/6 md:text-left'
          ref={headerRef}
        >
          <h1 className='text-4xl font-bold sm:text-6xl'>
            Grab your Tickets Now
          </h1>
          <p className='mt-4 text-lg sm:text-xl'>
            Don&lsquo;t miss out on IOIT TENET 2024! Secure your VIP pass now
            and gain exclusive access to all events, premium seating, special
            goodies, and unparalleled networking opportunities. Experience the
            excitement of cutting-edge tech, inspiring talks, intense
            competitions, and cultural showcases—all in one pass.
          </p>
        </div>
      )}

      <div className='relative mt-10 flex h-full w-screen items-center justify-center md:w-full'>
        {images.map((image, index) => (
          <Image
            ref={(el) => {
              refs.current[index] = el;
            }}
            key={index}
            src={image.url}
            alt={image.alt}
            className={`absolute border ${image.style}`}
            width={300}
            height={200}
            style={{ objectFit: 'cover' }}
          />
        ))}

        {/* Button in the center */}
        <Button
          link='register'
          className='absolute left-[50%] top-[50%] z-50 translate-x-[-50%] translate-y-[-50%] scale-125 items-center justify-center'
        >
          Get Tickets
          <FaArrowRightLong className='ml-2 h-4 w-4' />
        </Button>
      </div>
    </div>
  );
}
