import type { Metadata } from 'next';
import { env } from '@/env';

import { Speakers, Nav } from '@/modules/speakers';
import { Footer } from '@/modules/events';

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
  title: 'Speakers at IOIT TENET 2024',
  description: 'Browse through our lineup of speakers at AISSMS IOIT TENET',
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
