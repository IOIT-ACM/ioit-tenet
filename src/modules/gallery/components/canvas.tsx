/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { Gallery, Item } from 'react-photoswipe-gallery';
import 'photoswipe/dist/photoswipe.css';

import { Separator } from '@/components/ui/separator';
import { type GalleryImageGroup } from '../types';
import { FixedNav } from './nav';
import Image from 'next/image';
import { useState, useEffect } from 'react';

// Helper to load image dimensions
const preloadImageDimensions = (
  url: string,
): Promise<{ width: number; height: number }> => {
  return new Promise((resolve, reject) => {
    const img = new window.Image();
    img.src = url;
    img.onload = () =>
      resolve({ width: img.naturalWidth, height: img.naturalHeight });
    img.onerror = reject;
  });
};

export function Canvas({ data }: { data: GalleryImageGroup[] }) {
  const [allImages, setAllImages] = useState<
    {
      groupLabel: string;
      groupIndex: number;
      imageIndex: number;
      id: number;
      url: string;
      width: number;
      height: number;
    }[]
  >([]);
  const [loading, setLoading] = useState(true); // Track loading state

  useEffect(() => {
    const loadImages = async () => {
      const loadedImages: any[] = []; // Array to store successfully loaded images
      const imagePromises = data.flatMap((group, groupIndex) =>
        group.imagedata.map(async (image, imageIndex) => {
          try {
            // Try to preload the image dimensions
            const dimensions = await preloadImageDimensions(image.url);
            loadedImages.push({
              ...image,
              groupLabel: group.label,
              groupIndex,
              imageIndex,
              ...dimensions,
            });
          } catch (error) {
            console.error(`Error loading image ${image.url}:`, error);
          }
        }),
      );

      // Wait for all images to start loading (don't wait for all to finish)
      await Promise.all(imagePromises);

      // Update the state once all images are loaded
      setAllImages(loadedImages);
      setLoading(false);
    };

    loadImages().catch((error) => {
      console.error('Error loading images:', error);
      setLoading(false); // Set loading to false in case of error
    });
  }, [data]);

  if (loading) {
    return (
      <div className='flex min-h-screen items-center justify-center bg-neutral-950'>
        <FixedNav data={data} />
        <p className='text-2xl text-white'>Loading gallery...</p>
      </div>
    );
  }

  return (
    <div className='min-h-screen bg-neutral-950 p-4'>
      <FixedNav data={data} />
      <h1 className='mt-32 text-center text-xl text-white md:text-5xl'>
        Glimpses from TENET 2024
      </h1>
      <Separator className='mx-auto my-10 w-[100px]' />
      <Gallery withCaption>
        <div className='mx-auto mt-20 grid max-w-5xl grid-cols-2 gap-10 md:grid-cols-3 md:gap-20'>
          {allImages.map((image) => (
            <Item
              key={`${image.groupIndex}-${image.imageIndex}`}
              original={image.url}
              thumbnail={image.url}
              width={image.width - 100}
              height={image.height - 100}
              caption={`${image.groupLabel} Image ${image.imageIndex + 1}`}
            >
              {({ ref, open }) => (
                <div
                  ref={ref as unknown as React.RefObject<HTMLDivElement>}
                  onClick={open}
                  id={image.groupLabel}
                  className='cursor-pointer overflow-hidden rounded-xl border-2 border-white bg-[#5a5753]'
                >
                  <Image
                    src={image.url}
                    alt={`${image.groupLabel} Image ${image.imageIndex + 1}`}
                    className='h-full w-auto object-cover transition-all hover:scale-100'
                    width={300}
                    height={300}
                  />
                </div>
              )}
            </Item>
          ))}
        </div>
      </Gallery>
    </div>
  );
}
