import type { Metadata } from 'next';
import { env } from '@/env';

export async function generateMetadata({
  params,
}: {
  params: { year: string };
}): Promise<Metadata> {
  const { year } = params;

  const title = `Gallery at AISSMS IOIT TENET'${year}`;
  const description = `Explore moments captured at IOIT TENET'${year}`;
  const image = '/tenet-logo.png'; // TODO: replace with a proper gallery cover image once available

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
          alt: 'TENET Gallery',
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

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}