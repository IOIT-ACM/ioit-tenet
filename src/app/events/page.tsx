import { EventsList } from '@/modules/events';
import { type Metadata } from 'next';
import { env } from '@/env';

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
  title: 'Events at TENET',
  description: 'Explore the events happening at IOIT TENET 2024',
};

const Register = () => {
  return (
    <div>
      <EventsList />
    </div>
  );
};

export default Register;
