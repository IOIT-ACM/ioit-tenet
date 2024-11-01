'use client';

import { type GalleryImageGroup } from '../types';
import { Image } from 'antd';
import { FixedNav } from './nav';

export function Canvas({ data }: { data: GalleryImageGroup[] }) {
  const allImages = data.flatMap((group, groupIndex) =>
    group.imagedata.map((image, imageIndex) => ({
      ...image,
      groupLabel: group.label,
      groupIndex,
      imageIndex,
    })),
  );

  return (
    <div className=''>
      <FixedNav data={data} />
      <style jsx global>{`
        .ant-image-preview-root .ant-image-preview-mask {
          background-color: rgba(0, 0, 0, 0.85) !important;
        }
        .ant-image-preview-root .ant-image-preview-wrap {
          background-color: transparent !important;
        }
      `}</style>
      <div className='no-scroll-bar m-0 grid min-h-screen grid-cols-2 gap-4 overflow-auto bg-[#e7ddd2] p-4 md:grid-cols-3'>
        <Image.PreviewGroup
          preview={{
            icons: {},
          }}
        >
          {allImages.map((image) => (
            <div
              key={`${image.groupIndex}-${image.imageIndex}`}
              className='bg-[#5a5753]'
              id={image.groupLabel}
            >
              <Image
                src={image.url}
                height='100%'
                alt={`${image.groupLabel} Image ${image.imageIndex + 1} ${image.url}`}
                className='h-full w-full border-2 border-white object-cover'
              />
            </div>
          ))}
        </Image.PreviewGroup>
      </div>
    </div>
  );
}
