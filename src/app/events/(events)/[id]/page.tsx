import type { Metadata } from 'next';
import { env } from '@/env';
import { day1, day2, day3 } from '@/config/events';
import { Details } from '@/modules/events';

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const allEvents = [...day1, ...day2, ...day3];
  const foundEvent = allEvents.find((event) => event.id === params.id);

  if (foundEvent === undefined) {
    return {
      metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
      title: 'Explore events at IOIT TENET 2024',
      description:
        'Browse through a collection of more than 20+ events at AISSMS IOIT TENET',
      openGraph: {
        images: [
          {
            url: 'https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/events/investingarena.jpeg',
            width: 800,
            height: 600,
            alt: `Event Image`,
          },
        ],
      },
    };
  }

  return {
    metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
    title: `${foundEvent.title}`,
    description: `Learn more about ${foundEvent.title} at AISSMS IOIT TENET 2024`,
    openGraph: {
      images: [
        {
          url: foundEvent.image,
          width: 800,
          height: 600,
          alt: `${foundEvent.title} Image`,
        },
      ],
    },
  };
}

export default function Page({ params }: { params: { id: string } }) {
  const allEvents = [...day1, ...day2, ...day3];
  const event = allEvents.find((event) => event.id === params.id);

  if (!event) {
    return (
      <div className='flex h-screen items-center justify-center'>
        <div className='text-center'>
          <h1 className='text-6xl font-extrabold text-white'>
            Event Not Found
          </h1>
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
