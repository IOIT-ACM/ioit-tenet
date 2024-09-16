'use client';

import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

gsap.registerPlugin(MotionPathPlugin);

interface Image {
  title: string;
  url: string;
}

const images: Image[] = [
  {
    title: 'Mini canine',
    url: 'https://images.unsplash.com/photo-1583551536442-0fc55ac443f6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=600&h=600&fit=min&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
  },
  {
    title: 'Wheely tent',
    url: 'https://images.unsplash.com/photo-1583797227225-4233106c5a2a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=600&h=600&fit=min&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
  },
  {
    title: 'Red food things',
    url: 'https://images.unsplash.com/photo-1561626450-730502dba332?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=600&h=600&fit=min&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
  },
  {
    title: 'Sand boat',
    url: 'https://images.unsplash.com/photo-1585221454166-ce690e60465f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=600&h=600&fit=min&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
  },
  {
    title: 'Screen thing',
    url: 'https://images.unsplash.com/photo-1585427795543-33cf23ea2853?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=600&h=600&fit=min&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
  },
  {
    title: 'Horse tornado',
    url: 'https://images.unsplash.com/photo-1507160874687-6fe86a78b22e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=600&h=600&fit=min&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
  },
];

const ImageCarousel: React.FC = () => {
  const [opened, setOpened] = useState(0);
  const [inPlace, setInPlace] = useState(0);
  const [disabled, setDisabled] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const clipRefs = useRef<(SVGCircleElement | null)[]>([]);

  const width = 400;
  const height = 400;
  const circle = 7;
  const gap = 10;
  const duration = 0.4;
  const scale = 700;

  const getPosSmall = (id: number) => ({
    x:
      width / 2 -
      (images.length * (circle * 2 + gap) - gap) / 2 +
      id * (circle * 2 + gap),
    y: height - 30,
    scale: 1,
  });

  const getPosCenter = () => ({ x: width / 2, y: height / 2, scale: 7 });
  const getPosEnd = () => ({
    x: width / 2 - circle * scale + 0,
    y: height / 2,
    scale: scale,
  });
  const getPosStart = () => ({
    x: width / 2 + circle * scale - 0,
    y: height / 2,
    scale: scale,
  });

  const animateImage = (index: number, open: boolean) => {
    const clip = clipRefs.current[index];
    if (!clip) return;

    const tl = gsap.timeline();

    if (open) {
      tl.set(clip, { ...getPosSmall(index) })
        .to(clip, { ...getPosCenter(), duration: 0.2, ease: 'power3.inOut' })
        .to(clip, {
          ...getPosEnd(),
          duration,
          ease: 'power4.in',
          onComplete: () => setInPlace(index),
        });
    } else {
      tl.set(clip, { ...getPosStart() })
        .to(clip, { ...getPosCenter(), duration, ease: 'power4.out' })
        .to(clip, {
          motionPath: [getPosSmall(index)],
          duration: 1,
          ease: 'bounce.out',
        });
    }
  };

  const handleImageClick = (index: number) => {
    if (!disabled) {
      setOpened(index);
      animateImage(index, true);
    }
  };

  const handleNextClick = () => {
    const nextIndex = (opened + 1) % images.length;
    handleImageClick(nextIndex);
  };

  useEffect(() => {
    setDisabled(true);
    const timer = setTimeout(() => setDisabled(false), duration * 1000);
    return () => clearTimeout(timer);
  }, [opened]);

  return (
    <div
      className='relative h-4/5 max-h-[600px] w-4/5 max-w-[600px] overflow-hidden rounded-3xl shadow-lg'
      ref={containerRef}
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio='xMidYMid slice'
        className='h-full w-full'
      >
        <defs>
          {images.map((_, i) => (
            <clipPath id={`clip-${i}`} key={`clip-${i}`}>
              <circle
                cx='0'
                cy='0'
                r={circle}
                ref={(el) => {
                  clipRefs.current[i] = el;
                }}
              />
            </clipPath>
          ))}
        </defs>
        {images.map((image, i) => (
          <g
            key={image.url}
            clipPath={`url(#clip-${i})`}
            style={{ zIndex: inPlace === i ? i : images.length + 1 }}
          >
            <image width={width} height={height} xlinkHref={image.url} />
          </g>
        ))}
        {images.map((_, i) => (
          <circle
            key={`tab-${i}`}
            className='cursor-pointer fill-transparent stroke-white stroke-2 opacity-70 transition-opacity duration-200 hover:opacity-100'
            cx={getPosSmall(i).x}
            cy={getPosSmall(i).y}
            r={circle + 2}
            onClick={() => handleImageClick(i)}
          />
        ))}
      </svg>
      <button
        className='w-15 h-15 absolute right-0 top-1/2 flex -translate-y-1/2 translate-x-1/2 transform cursor-pointer items-center justify-center rounded-full bg-white shadow-md transition-transform duration-200 ease-in-out hover:-translate-y-[48%] hover:translate-x-[52%]'
        onClick={handleNextClick}
      >
        <svg className='h-6 w-6 text-gray-800' viewBox='0 0 24 24'>
          <path
            fill='currentColor'
            d='M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z'
          />
        </svg>
      </button>
    </div>
  );
};

export default ImageCarousel;
