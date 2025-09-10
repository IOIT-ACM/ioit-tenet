import type { Metadata } from 'next';
import { env } from '@/env';
import { Details } from '@/modules/events';
import { getEventsByYear } from '@/lib/getEvents';

export async function generateMetadata({
  params,
}: {
  params: { year: string; id: string };
}): Promise<Metadata> {
  const allEvents = getEventsByYear(params.year);
  const foundEvent = allEvents.find((event) => event.id === params.id);

  if (!foundEvent) {
    return {
      metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
      title: 'Explore events at IOIT TENET',
      description: 'Browse through our collection of events at AISSMS IOIT TENET',
    };
  }

  return {
    metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
    title: foundEvent.title,
    description: `Learn more about ${foundEvent.title} at AISSMS IOIT TENET ${params.year}`,
    openGraph: {
      images: [
        {
          url: foundEvent.image,
          width: 800,
          height: 600,
          alt: `${foundEvent.title} image`,
        },
      ],
    },
  };
}

export default function Page({ params }: { params: { year: string; id: string } }) {
  const allEvents = getEventsByYear(params.year);
  const event = allEvents.find((event) => event.id === params.id);

  if (!event) {
    return (
      <div className='flex h-screen items-center justify-center'>
        <div className='text-center'>
          <h1 className='text-6xl font-extrabold text-white'>Event Not Found</h1>
          <p className='mt-4 text-xl text-gray-300'>
            Sorry, the event you are looking for does not exist.
          </p>
          <p className='mt-2 text-lg text-gray-400'>
            Please check the event ID or browse through our event listings.
          </p>
        </div>
      </div>
    );
  }

  return <Details event={event} />;
}
