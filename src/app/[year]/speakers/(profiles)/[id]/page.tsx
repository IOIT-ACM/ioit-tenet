import type { Metadata } from 'next';
import { env } from '@/env';
import { speakers } from '@/config/data/24/speakers';
import { SpeakerDetails } from '@/modules/speakers';

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const foundSpeaker = speakers.find((speaker) => speaker.id === params.id);

  if (foundSpeaker === undefined) {
    return {
      metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
      title: 'Explore speakers at IOIT TENET',
      description: 'Browse through our lineup of speakers at AISSMS IOIT TENET',
    };
  }

  return {
    metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
    title: `${foundSpeaker.name} is coming to AISSMS IOIT TENET`,
    description: `${foundSpeaker.name}, ${foundSpeaker.title}, is coming to AISSMS IOIT TENET`,
    openGraph: {
      title: `${foundSpeaker.name} is coming to AISSMS IOIT TENET`,
      images: [
        {
          url: foundSpeaker.image,
          width: 800,
          height: 600,
          alt: `${foundSpeaker.name} Image`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${foundSpeaker.name} is coming to AISSMS IOIT TENET`,
      images: [foundSpeaker.image],
    },
  };
}

export default function Page({ params }: { params: { id: string } }) {
  const speaker = speakers.find((speaker) => speaker.id === params.id);

  if (!speaker) {
    return (
      <div className='flex h-screen items-center justify-center'>
        <div className='text-center'>
          <h1 className='text-6xl font-extrabold text-white'>
            Speaker Not Found
          </h1>
          <p className='mt-4 text-xl text-slate-300'>
            Sorry, the speaker you are looking for does not exist.
          </p>
          <p className='mt-2 text-lg text-slate-400'>
            Please check the speaker ID or browse through our speaker listings.
          </p>
        </div>
      </div>
    );
  }

  return <SpeakerDetails speaker={speaker} />;
}
