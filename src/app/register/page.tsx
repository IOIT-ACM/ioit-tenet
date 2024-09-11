import { RegisterLinks, KonfHub } from '@/modules/register';
import { type Metadata } from 'next';
import { env } from '@/env';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
  title: 'Register',
  description: 'Register for events at IOIT TENET 2024',
};

const Register = () => {
  return (
    <section className='min-h-screen bg-gradient-to-br from-neutral-950 to-neutral-900 p-6 md:p-12'>
      <div className='mx-auto max-w-6xl'>
        <h1 className='mb-4 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-5xl font-bold text-transparent md:text-7xl'>
          Registration for TENET 2024
        </h1>
        <Link
          href='/'
          className='inline-block text-neutral-400 transition-colors duration-300 hover:text-white'
        >
          Home
        </Link>
        <Separator className='my-8 h-0.5 bg-gradient-to-r from-purple-400 to-pink-600' />
        <KonfHub />
        <Separator className='my-8 h-0.5 bg-gradient-to-r from-purple-400 to-pink-600' />

        <RegisterLinks />
      </div>
    </section>
  );
};

export default Register;
