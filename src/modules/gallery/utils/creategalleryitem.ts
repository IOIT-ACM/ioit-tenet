import { type GalleryImageGroup } from '../types';

export function createGalleryImageGroup(
  label: string,
  totalImages: number,
  baseUrl: string,
  start = 1,
  fileExtension = 'jpeg',
): GalleryImageGroup {
  return {
    label,
    imagedata: Array.from(
      { length: start === 1 ? totalImages : totalImages - start },
      (_, i) => ({
        id: start + i,
        url: `${baseUrl}/${start + i}.${fileExtension}`,
      }),
    ),
  };
}
