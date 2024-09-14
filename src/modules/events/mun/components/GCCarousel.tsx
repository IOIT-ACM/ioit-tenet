/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import React, { useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Observer } from 'gsap/Observer';
import Link from 'next/link';
import { useIsMobile } from '@/hooks/useismobile';

gsap.registerPlugin(Observer);

// Define the type for each image object in the array
interface ImageData {
  title: string;
  url: string;
  id: string;
}

// Image data array with type applied
const imageData: ImageData[] = [
  {
    title: 'UNSC',
    id: 'unsc',
    url: 'https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/mun/mun/unsc.webp',
  },
  {
    title: 'UNHRC',
    id: 'unhrc',
    url: 'https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/mun/mun/unhcr.webp',
  },
  {
    title: 'AIPPM',
    id: 'aippm',
    url: 'https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/mun/mun/aippm.jpg',
  },
  {
    title: 'UNCSW',
    id: 'uncsw',
    url: 'https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/mun/mun/uncsw.webp',
  },
  {
    title: 'UNODC',
    id: 'unodc',
    url: 'https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/mun/mun/unodc.jpg',
  },
  // {
  //   title: 'IP',
  //   id: 'IP',
  //   url: 'https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/mun/mun/ip.jpg',
  // },
];

export const GCCarousel: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  // const [progress, setProgress] = useState<Progress>({ value: 0 });
  const progress = { value: 0 };
  const [radius, setRadius] = useState(window.innerWidth);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null,
  );
  const mobile = useIsMobile();

  useLayoutEffect(() => {
    const handleResize = () => {
      setRadius(window.innerWidth / (mobile ? 3 : 4));
    };

    // Set initial radius
    setRadius(window.innerWidth / (mobile ? 3 : 4));

    // Add resize event listener
    window.addEventListener('resize', handleResize);

    const images = document.querySelectorAll<HTMLDivElement>('.carousel-image');

    const handleChange = (self: any) => {
      gsap.killTweensOf(progress);
      const delta =
        self.event.type === 'wheel'
          ? self.deltaY * -0.0005
          : self.deltaX * 0.05;

      gsap.to(progress, {
        duration: 2,
        ease: 'power4.out',
        value: `+=${delta}`,
      });
    };

    // Observer setup with type assertion
    Observer.create({
      target: carouselRef.current!,
      type: 'wheel,pointer',
      onPress: () => (carouselRef.current!.style.cursor = 'grabbing'),
      onRelease: () => (carouselRef.current!.style.cursor = 'grab'),
      onChange: handleChange,
    });

    const animate = () => {
      images.forEach((image, index) => {
        const theta = index / images.length - progress.value;
        const x = -Math.sin(theta * Math.PI * 2) * radius;
        const y = Math.cos(theta * Math.PI * 2) * radius;

        image.style.transform = `translate3d(${x}px, 0px, ${y}px) rotateY(${360 * -theta}deg)`;
      });
    };

    gsap.ticker.add(animate);

    return () => {
      gsap.ticker.remove(animate);
      window.removeEventListener('resize', handleResize);
    };
  }, [progress, radius, mobile]);

  const handleImageClick = (index: number) => {
    const newValue = index / imageData.length;
    gsap.to(progress, {
      duration: 1,
      ease: 'power4.out',
      value: newValue,
    });
    setSelectedImageIndex(index);
  };

  return (
    <div
      ref={carouselRef}
      className='carousel flex min-h-screen w-full cursor-grab select-none items-center justify-center'
      style={{
        transform: 'rotateX(-20deg) translateY(-70px)',
        transformStyle: 'preserve-3d',
        perspective: '800px',
      }}
    >
      {imageData.map((image, index) => (
        <div
          key={index}
          className={`carousel-image absolute flex h-[100px] w-[100px] items-center justify-center text-white md:h-[200px] md:w-[300px] ${
            index === selectedImageIndex ? 'z-10' : ''
          }`}
          style={{
            backgroundImage: `url(${image.url})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            transform: 'translate3d(0, 0, -300px)',
            margin: '0',
          }}
          onClick={() => handleImageClick(index)}
        >
          <Link
            href={'https://www.ioitmun.com/' + image.id}
            className='text-xl font-bold text-gray-300 drop-shadow-md'
          >
            {image.title}
          </Link>
        </div>
      ))}
    </div>
  );
};
