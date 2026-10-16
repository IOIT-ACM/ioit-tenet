import { HeroImage } from '@/components/common';
import type { Metadata } from 'next';
import { env } from '@/env';

export async function generateMetadata({
  params,
}: {
  params: { year: string };
}): Promise<Metadata> {
  const { year } = params;

  const title = `Cultural Night at AISSMS IOIT TENET'${year}`;
  const description = `Explore the events happening at Cultural Night in IOIT TENET'${year}`;
  // TODO: no local Cultural Night image confirmed under public/{year}/ — using site logo as fallback
  const image = '/tenet-logo.png';

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
          alt: 'Cultural Night Event Image',
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

export default function Page() {
  return (
    <main>
      <HeroImage
        backgroundImage='https://ioit.acm.org/tenet/ui/creators.jpeg'
        title='Cultural Night'
        subtitle='Experience Vibrant Performances and Rich Traditions at the Cultural Night Extravaganza'
      // ctaText='Learn More'
      // ctaLink='#timeline'
      />
    </main>
  );
}