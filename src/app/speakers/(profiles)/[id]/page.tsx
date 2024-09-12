import type { Metadata } from 'next';
import { env } from '@/env';
import { speakers } from '@/config/speakers';
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
      title: 'Explore speakers at IOIT TENET 2024',
      description: 'Browse through our lineup of speakers at AISSMS IOIT TENET',
    };
  }

  return {
    metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
    title: `${foundSpeaker.name} is comming at AISSMS IOIT TENET`,
    description: `${foundSpeaker.name}, ${foundSpeaker.title} is comming at AISSMS IOIT TENET 2024`,
    openGraph: {
      images: [
        {
          url: foundSpeaker.image,
          width: 800,
          height: 600,
          alt: `${foundSpeaker.name} Image`,
        },
      ],
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
