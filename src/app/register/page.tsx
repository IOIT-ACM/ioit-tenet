import { RegisterLinks } from '@/modules/register';
import { type Metadata } from 'next';
import { env } from '@/env';

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
  title: 'Register',
  description: 'Register for events at IOIT TENET 2024',
};

const Register = () => {
  return (
    <div>
      <RegisterLinks />
    </div>
  );
};

export default Register;
