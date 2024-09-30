/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { FaArrowRightLong } from 'react-icons/fa6';
import Image from 'next/image';
import { Button } from '@/components/ui/RoundedButton';

const images = [
  {
    url: 'https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/techfiesta.jpeg',
    alt: 'Tech Fiesta',
    style: 'left-[5%] top-[5%] h-[20vh] w-[10vw]',
  },
  {
    url: 'https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/mun.jpeg',
    alt: 'MUN',
    style: 'right-[10%] top-[5%] h-[15vh] w-[20vw]',
  },
  {
    url: 'https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/creators.jpeg',
    alt: 'Creators',
    style: 'bottom-0 left-[10%] h-[20vh] w-[20vw]',
  },
  {
    url: 'https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/events/esports.jpg',
    alt: 'Esports',
    style: 'bottom-[5%] right-[15%] h-[20vh] w-[10vw]',
  },
  {
    url: 'https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/esummit.jpeg',
    alt: 'E-Summit',
    style: 'left-[20%] top-[10%] h-[20vh] w-[25vw]',
  },
];

export function Tickets() {
  const refs = useRef<(HTMLImageElement | null)[]>([]);
  const headerRef = useRef(null);

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

  return (
    <div className='grid h-[60vh] w-full grid-cols-2 items-center justify-center px-10 py-10 text-white md:my-10 md:px-20'>
      <div className='mb-10 w-5/6' ref={headerRef}>
        <h1 className='text-4xl font-bold sm:text-6xl'>
          Grab your Tickets Now
        </h1>
        <p className='mt-4 text-lg sm:text-xl'>
          Don&lsquo;t miss out on IOIT TENET 2024! Secure your VIP pass now and
          gain exclusive access to all events, premium seating, special goodies,
          and unparalleled networking opportunities. Experience the excitement
          of cutting-edge tech, inspiring talks, intense competitions, and
          cultural showcases—all in one pass.
        </p>
      </div>

      <div className='relative mt-10 flex h-full w-full items-center justify-center'>
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
          className='absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] scale-125 items-center justify-center'
        >
          Get Tickets
          <FaArrowRightLong className='ml-2 h-4 w-4' />
        </Button>
      </div>
    </div>
  );
}
