/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @next/next/no-img-element */
'use client';

import React, { useState, useEffect } from 'react';
import { useStore } from '@/store';
import { HTMLEditor } from './web';
import { Description } from './description';
import { SwitchTabs } from './tabs';
import { type ImageObject } from '../types';

const CPANEL_BASE = 'https://ioit.acm.org/tenet/denofcode/';

const IMAGE_COUNT = 12;

const generateImageArray = (): ImageObject[] => {
  return Array.from({ length: IMAGE_COUNT }, (_, index) => ({
    id: index + 1,
    imageURL: `${CPANEL_BASE}${String(index + 1).padStart(2, '0')}.jpeg`,
  }));
};

export const WebMasterScreen = () => {
  const webmasterPS = useStore((state) => state.webmasterPS);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const setWebmasterPS = useStore((state) => state.setWebmasterPS);
  const [loading, setLoading] = useState(false);
  const images = generateImageArray();

  useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [loading]);

  const handleImageSelect = (image: ImageObject) => {
    setWebmasterPS({
      id: image.id,
      imageURL: image.imageURL,
    });
    setLoading(true);
  };

  if (loading) {
    return (
      <div className='flex h-screen flex-col items-center justify-center'>
        <img
          src={webmasterPS?.imageURL}
          alt={`Selected image ${webmasterPS?.id}`}
          className='max-h-md mb-4 max-w-md object-contain'
        />
        <p className='text-xl'>Loading...</p>
      </div>
    );
  }

  if (!webmasterPS) {
    return (
      <div className='flex h-screen flex-col items-center justify-center p-8'>
        <h1 className='mb-8 text-3xl font-bold'>Choose an image from below</h1>
        <div className='grid grid-cols-4 gap-6'>
          {images.map((image) => (
            <button
              key={image.id}
              className='flex aspect-square h-32 w-32 items-center justify-center rounded-lg border-4 border-gray-300 bg-pink-200 text-2xl font-bold shadow-md transition-all duration-200 hover:border-blue-500 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-500'
              onClick={() => handleImageSelect(image)}
            >
              {image.id}
            </button>
          ))}
        </div>
      </div>
    );
  }

  if (webmasterPS && !loading)
    return (
      <div className='flex h-screen w-screen gap-4 p-4'>
        <div className='w-1/2'>
          <HTMLEditor />
        </div>
        <div className='flex w-1/3 flex-grow flex-col gap-5'>
          <SwitchTabs />
          <Description />
        </div>
      </div>
    );
};
