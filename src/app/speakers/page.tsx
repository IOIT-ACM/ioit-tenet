import type { Metadata } from 'next';
import { env } from '@/env';

import { Speakers } from '@/modules/speakers';

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
  title: 'Speakers at IOIT TENET 2024',
  description: 'Browse through our lineup of speakers at AISSMS IOIT TENET',
};

export default async function Page() {
  return (
    <div className='p-5'>
      <Speakers />;
    </div>
  );
}
