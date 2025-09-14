// import Footer from '@/components/common/footer';
import FixedNavBar from '@/components/common/fixednav';
import { Providers } from '@/modules/providers';
import WelcomeScreen from '@/components/loading';
import { Footer } from '@/components/footer';
import { routes } from '@/config/data/25/navbar';

import dynamic from 'next/dynamic';
const ScrollIcon = dynamic(() => import('@/components/common/scrollicon'), {
  ssr: false,
});

interface SiteLayoutProps {
  children: React.ReactNode;
}

export default async function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <div className='flex min-h-screen flex-col'>
      <FixedNavBar routes={routes} />
      <main className='flex-1'>
        <Providers>
          {children} <ScrollIcon />
        </Providers>
      </main>
      <Footer />
      <WelcomeScreen />
    </div>
  );
}
