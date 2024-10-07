import { type ImageItem } from '@/modules/gallery';

const TOTAL_IMAGES = 51;

export const imageData: ImageItem[] = Array.from(
  { length: TOTAL_IMAGES },
  (_, i) => ({
    id: i,
    url: `https://ioit.acm.org/tenet/gallery/24/${(i + 1).toString().padStart(2, '0')}.jpeg`,
    title: 'TENET 2024',
  }),
);
