import { HeroImage, Timeline } from '@/components/common';
import type { Metadata } from 'next';
import { env } from '@/env';
import { GCCarousel } from '@/modules/events/esports';

export async function generateMetadata({
  params,
}: {
  params: { year: string };
}): Promise<Metadata> {
  const { year } = params;

  const title = `E-Sports at AISSMS IOIT TENET'${year}`;
  const description = `Explore the events happening at E-Sports in IOIT TENET'${year}`;
  const image = `/${year}/events/esports-main-day2.jpg`;

  return {
    metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
          width: 800,
          height: 600,
          alt: 'E-Sports Event Image',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  };
}

export default async function Page({ params }: { params: { year: string } }) {
  const { year } = params;
  return (
    <main className=''>
      <HeroImage
        backgroundImage={`/${year}/events/esports-main-day2.jpg`}
        title='E-Sports'
        subtitle='Join Elite Gamers, Influencers, and Innovators at the Ultimate Esports Arena'
        ctaText='Learn More'
        ctaLink='#timeline'
      />
      <GCCarousel />
      <Timeline domain='esports' year={year} />
    </main>
  );
}