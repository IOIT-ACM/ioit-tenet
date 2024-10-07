/* eslint-disable @next/next/no-img-element */
'use client';

import { type ImageItem } from '../types';

export function Canvas({
  imageData,
  ready,
}: {
  imageData: ImageItem[];
  ready?: boolean;
}) {
  return (
    <div className=''>
      <div className='no-scroll-bar m-0 max-h-[200vh] columns-3 overflow-auto bg-[#e7ddd2] p-0'>
        {imageData.map((item, index) => (
          <div key={index} className='bg-[#e5dfd9]'>
            <img
              src={item.url}
              alt={`Gallery Image ${index}`}
              className='h-full w-full object-cover'
            />
          </div>
        ))}
      </div>

      {!ready && (
        <div className='fixed inset-0 flex items-center justify-center bg-white/50 text-center backdrop-blur-md'>
          <div className='animate-fade-in max-w-lg'>
            <div className='flex items-center justify-center text-4xl'>
              <div className='font-semibold'>Processing Event Photos</div>
            </div>
            <div className='mt-2 text-xl'>
              Our media team is currently curating and processing the
              photographs from the event. The complete gallery will be available
              for viewing shortly.
            </div>
            <div className='mt-4 flex items-center justify-center gap-2'>
              <span className='text-xl'>Please check back soon</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
