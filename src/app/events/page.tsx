import { EventsList } from '@/modules/events';
import { type Metadata } from 'next';
import { env } from '@/env';
import FixedNavBar from '@/components/common/fixednav';

import { Footer } from '@/modules/events';

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
  title: 'Events at TENET',
  description: 'Explore the events happening at IOIT TENET 2024',
};

const Register = () => {
  return (
    <div className='bg-slate-200'>
      <EventsList />
      <FixedNavBar />
      <Footer />
    </div>
  );
};

export default Register;
