import Link from 'next/link';
import { type Metadata } from 'next';
import { env } from '@/env';
import RegisterForm from '@/modules/register/drone';
import { Separator } from '@/components/ui/separator';

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
  title: 'Drone workshop',
  description: 'Register for CTF at IOIT TENET 2024',
  openGraph: {
    images: [
      {
        url: 'https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/events/drone-og.jpeg',
        width: 800,
        height: 600,
        alt: `CTF Image`,
      },
    ],
  },
};

const Register = () => {
  return (
    <section className='min-h-screen bg-gradient-to-br from-neutral-950 to-neutral-900 p-6 md:p-12'>
      <div className='mx-auto max-w-6xl'>
        <div>
          <h1 className='mb-4 bg-gradient-to-r from-green-400 to-orange-600 bg-clip-text text-5xl font-bold text-transparent md:text-7xl'>
            DRONE WORKSHOP
          </h1>
          <div className='flex gap-3'>
            <Link
              href='/'
              className='inline-block text-neutral-400 transition-colors duration-300 hover:text-white'
            >
              Home
            </Link>
            <Link
              href='/register'
              className='inline-block text-neutral-400 transition-colors duration-300 hover:text-white'
            >
              Registrations page
            </Link>
          </div>
        </div>
        <Separator className='my-8 h-0.5 bg-gradient-to-r from-green-400 to-orange-600' />
        <RegisterForm />
      </div>
    </section>
  );
};

export default Register;
