import type { Metadata } from 'next';
import { HeroImage } from '@/components/common';
import { env } from '@/env';
import { MUNLINK } from '@/config';
import { Timeline } from '@/components/common';

import { GCCarousel } from '@/modules/events/mun';

export async function generateMetadata({
  params,
}: {
  params: { year: string };
}): Promise<Metadata> {
  const { year } = params;

  const title = `Model United Nations at AISSMS IOIT TENET'${year}`;
  const description = `Explore the events happening at MUN in IOIT TENET'${year}`;
  const image = `/${year}/events/mun-day1.jpg`;

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
          alt: 'MUN Event Image',
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

export default function Page({ params }: { params: { year: string } }) {
  const { year } = params;
  return (
    <main>
      <HeroImage
        backgroundImage={`/${year}/events/mun-day1.jpg`}
        title={`IOIT MUN'${year}`}
        subtitle={`Unity through diplomacy. Engage with Global Diplomats, Policy Makers, and Visionaries at MUN'${year}`}
        ctaText='Learn More'
        ctaLink='https://mun.ioittenet.com/'
        ctaText2='Register now'
        ctaLink2={MUNLINK}
        ctalink1color='#739e9e'
      />
      <GCCarousel />
      <Timeline domain='mun' year={year} />
    </main>
  );
}