import { EventsList } from '@/modules/events';
import { type Metadata } from 'next';
import { env } from '@/env';
import FixedNavBar from '@/components/common/fixednav';
import { routes as routes24 } from '@/config/data/24/navbar';
import { routes as routes25 } from '@/config/data/25/navbar';
import { Footer } from '@/modules/events';

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
  title: 'Events at TENET',
  description:
    'Join us for engaging workshops, competitions, and networking opportunities that celebrate innovation, creativity, and collaboration! IOIT TENET features an exciting lineup of events, including TechFiesta for tech enthusiasts, an E-Summit for aspiring entrepreneurs, and a Model United Nations for future diplomats. ',
  openGraph: {
    title: 'Events at TENET',
    description:
      'Join us for engaging workshops, competitions, and networking opportunities that celebrate innovation, creativity, and collaboration!',
    images: [
      {
        url: '/tenet-logo.png',
        width: 800,
        height: 600,
        alt: 'Events in TENET',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Events at TENET',
    images: ['/tenet-logo.png'],
  },
};

const Page = ({ params }: { params: { year: string } }) => {
  const year = params.year;
  const routes = year === '24' ? routes24 : routes25;
  return (
    <div className='bg-slate-200'>
      <EventsList year={year} />
      <FixedNavBar routes={routes} />
      <Footer />
    </div>
  );
};

export default Page;