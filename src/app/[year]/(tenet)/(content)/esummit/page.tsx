import { HeroImage, Timeline } from '@/components/common';
import type { Metadata } from 'next';
import { env } from '@/env';

export async function generateMetadata({
  params,
}: {
  params: { year: string };
}): Promise<Metadata> {
  const { year } = params;

  const title = `E-Summit at AISSMS IOIT TENET'${year}`;
  const description = `Explore the events happening at eSummit in IOIT TENET'${year}`;
  // TODO: no local E-Summit image exists under public/{year}/ yet — using site logo as fallback
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
          alt: 'E-Summit Event Image',
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
        backgroundImage='https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        title='E-Summit'
        subtitle={`Learn from Startup Gurus, Business Titans, and Innovators at Esummit'${year}`}
        ctaText='Learn More'
        ctaLink='#timeline'
      />
      <Timeline domain='esummit' year={year} />
      {/* <Speakers /> */}
    </main>
  );
}