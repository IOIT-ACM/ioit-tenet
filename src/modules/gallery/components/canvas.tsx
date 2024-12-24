/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { Gallery, Item } from 'react-photoswipe-gallery';
import 'photoswipe/dist/photoswipe.css';

import { Separator } from '@/components/ui/separator';
import { type GalleryImageGroup } from '../types';
import { FixedNav } from './nav';
import Image from 'next/image';
import { useState, useEffect } from 'react';

// Define a type for the image object
interface GalleryImage {
  groupLabel: string;
  groupIndex: number;
  imageIndex: number;
  id: number;
  url: string;
  width: number;
  height: number;
}

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
  const [allImages, setAllImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadImages = async () => {
      const loadedImages: GalleryImage[] = [];
      const imagePromises = data.flatMap((group, groupIndex) =>
        group.imagedata.map(async (image, imageIndex) => {
          try {
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

      await Promise.all(imagePromises);

      setAllImages(loadedImages);
      setLoading(false);
    };

    loadImages().catch((error) => {
      console.error('Error loading images:', error);
      setLoading(false);
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

  const groupedImages = allImages.reduce(
    (groups, image) => {
      const label = image.groupLabel ?? 'uncategorized';
      if (!groups[label]) {
        groups[label] = [];
      }
      groups[label].push(image);
      return groups;
    },
    {} as Record<string, GalleryImage[]>,
  );

  return (
    <div className='min-h-screen bg-neutral-950 p-4'>
      <FixedNav data={data} />
      <h1 className='mt-32 text-center text-xl text-white md:text-5xl'>
        Glimpses from TENET 2024
      </h1>
      <Separator className='mx-auto mt-10 w-[100px]' />

      <div className='mt-20'>
        {Object.entries(groupedImages).map(([groupLabel, images]) => (
          <div key={groupLabel} className='mx-auto mb-16 max-w-5xl'>
            <h2 id={groupLabel} className='pt-20 text-2xl text-white'>
              {groupLabel}
            </h2>
            <Separator className='my-4 w-[100px]' />
            <Gallery withCaption>
              <div className='mt-10 grid grid-cols-2 gap-10 md:grid-cols-3 md:gap-20'>
                {images.map((image) => (
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
        ))}
      </div>
    </div>
  );
}
