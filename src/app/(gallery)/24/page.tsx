import { env } from '@/env';
import type { Metadata } from 'next';
import { galleryImageData } from './data';
import { Canvas } from '@/modules/gallery';

export const metadata: Metadata = {
  title: 'Gallery TENET2024',
  description: 'Glimpses from the First edition of tenet',
  openGraph: {
    title: 'Gallery TENET2024',
    description: 'Glimpses from the First edition of tenet',
    type: 'website',
    url: env.NEXT_PUBLIC_APP_URL,
    images: [
      {
        url: `https://ioit.acm.org/tenet/gallery/24/mun-closing/16.jpeg`,
        width: 1200,
        height: 630,
        alt: 'Gallery TENET2024',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gallery TENET2024',
    description: 'Glimpses from the First edition of tenet',
    images: [`https://ioit.acm.org/tenet/gallery/24/mun-closing/16.jpeg`],
  },
};

export default function Page() {
  return <Canvas data={galleryImageData} />;
}
