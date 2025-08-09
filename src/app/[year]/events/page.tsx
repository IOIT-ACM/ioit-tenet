import { EventsList } from '@/modules/events';
import { type Metadata } from 'next';
import { env } from '@/env';
import FixedNavBar from '@/components/common/fixednav';
import { routes } from '@/config/data/24/navbar';
import { Footer } from '@/modules/events';

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
  title: 'Events at TENET',
  description:
    'Join us for engaging workshops, competitions, and networking opportunities that celebrate innovation, creativity, and collaboration! IOIT TENET 2024 features an exciting lineup of events, including TechFiesta for tech enthusiasts, an E-Summit for aspiring entrepreneurs, and a Model United Nations for future diplomats. ',
  openGraph: {
    images: [
      {
        url: 'https://ioit.acm.org/tenet/events/events-og.jpeg',
        width: 800,
        height: 600,
        alt: `Events in TENET 2024`,
      },
    ],
  },
};

const Page = () => {
  return (
    <div className='bg-slate-200'>
      <EventsList />
      <FixedNavBar routes={routes} />
      <Footer />
    </div>
  );
};

export default Page;
