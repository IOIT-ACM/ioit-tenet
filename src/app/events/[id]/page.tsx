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
            url: '/imgs/events/schedule/default.jpg',
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
    return <div>Event not found</div>;
  }

  return <Details event={event} />;
}
