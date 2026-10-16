import { HeroImage, Timeline } from '@/components/common';
import type { Metadata } from 'next';
import { env } from '@/env';

export async function generateMetadata({
  params,
}: {
  params: { year: string };
}): Promise<Metadata> {
  const { year } = params;

  const title = `Techfiesta at AISSMS IOIT TENET'${year}`;
  const description = `Explore the events happening at Techfiesta in IOIT TENET'${year}`;
  const image = `/${year}/techfiesta/graphics/banner.png`;

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
          alt: 'Techfiesta Event Banner',
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
    <main>
      <HeroImage
        backgroundImage={`/${year}/techfiesta/graphics/banner.png`}
        title='TechFiesta'
        subtitle='Gain insights from renowned community leads, CTOs, and industry pioneers'
        ctaText='Learn More'
        ctaLink='#timeline'
      />
      <Timeline domain='techfiesta' year={year} />
    </main>
  );
}