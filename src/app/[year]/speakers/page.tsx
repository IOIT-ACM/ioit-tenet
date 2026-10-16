import type { Metadata } from 'next';
import { env } from '@/env';

import { Nav, Speakers } from '@/modules/speakers';
import { Footer } from '@/modules/events';

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
  title: 'Speakers at IOIT TENET',
  description: 'Browse through our lineup of speakers at AISSMS IOIT TENET',
  openGraph: {
    title: 'Speakers at IOIT TENET',
    description: 'Browse through our lineup of speakers at AISSMS IOIT TENET',
    images: [
      {
        url: '/tenet-logo.png',
        width: 800,
        height: 600,
        alt: 'Speakers at TENET',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Speakers at IOIT TENET',
    images: ['/tenet-logo.png'],
  },
};

export default async function Page() {
  return (
    <div className='m-0 p-0'>
      <Nav />
      <Speakers />
      <Footer />
    </div>
  );
}
