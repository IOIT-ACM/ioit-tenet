import { type Metadata } from 'next';
import { env } from '@/env';
import SpaceTunnel from '@/components/tour';

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
  title: 'Tour Guide',
  description: 'Want to have a quick look at TENET 2024?',
  openGraph: {
    images: [
      {
        url: '/tenet-fill.png',
        width: 800,
        height: 600,
        alt: `Tour Image`,
      },
    ],
  },
};

const Register = () => {
  return <SpaceTunnel />;
};

export default Register;
