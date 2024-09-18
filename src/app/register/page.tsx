import { RegisterLinks, KonfHub, Title } from '@/modules/register';
import { type Metadata } from 'next';
import { env } from '@/env';
import { Separator } from '@/components/ui/separator';

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
  title: 'Register',
  description: 'Register for events at IOIT TENET 2024',
};

const Register = () => {
  return (
    <section className='min-h-screen bg-gradient-to-br from-neutral-950 to-neutral-900 p-6 md:p-12'>
      <div className='mx-auto max-w-6xl'>
        <Title />
        <Separator className='my-8 h-0.5 bg-gradient-to-r from-purple-400 to-pink-600' />
        <KonfHub />
        <Separator className='my-16 h-0.5 bg-gradient-to-r from-slate-400 to-gray-600' />
        <RegisterLinks />
      </div>
    </section>
  );
};

export default Register;
