import { EventsList } from '@/modules/events';
import { type Metadata } from 'next';
import { env } from '@/env';

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
  title: 'Explore events are IOIT TENET 2024',
  description:
    'T.E.N.E.T goes beyond just an abbreviation of 5 niches. This event in its inception is an amalgamation of ideas where professionalism meets the academia. This is an event where students learn, connect, grow and most importantly have an experience worth remembering. From E-summit to eSports and from Techfiesta to IOIT MUN24 and Creators Conclave, TENET, an event organised by the IOIT ACM Student Chapter has something for everyone.',
};

const Page = () => {
  return (
    <div>
      <EventsList />
    </div>
  );
};

export default Page;
