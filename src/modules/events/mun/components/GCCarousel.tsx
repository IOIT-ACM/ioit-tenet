/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import React, { useLayoutEffect, useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { Observer } from 'gsap/Observer';
import Link from 'next/link';
import { useIsMobile } from '@/hooks/useismobile';

gsap.registerPlugin(Observer);

interface ImageData {
  title: string;
  url: string;
  id: string;
}

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
];

export const GCCarousel: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [radius, setRadius] = useState<number | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null,
  );
  const mobile = useIsMobile();
  const progress = { value: 0 };

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleResize = () => {
      setRadius(window.innerWidth / (mobile ? 3 : 4));
    };

    handleResize(); // Initial radius setup

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [mobile]);

  useLayoutEffect(() => {
    if (radius === null || !carouselRef.current) return;

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

    const carouselElement = carouselRef.current;

    Observer.create({
      target: carouselElement,
      type: 'wheel,pointer',
      onPress: () => {
        if (carouselElement) {
          carouselElement.style.cursor = 'grabbing';
        }
      },
      onRelease: () => {
        if (carouselElement) {
          carouselElement.style.cursor = 'grab';
        }
      },
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
    };
  }, [progress, radius]);

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
      id='timeline'
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
