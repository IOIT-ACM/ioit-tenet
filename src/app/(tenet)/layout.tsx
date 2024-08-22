import FixedNavBar from '@/components/common/fixednav';
import { Providers } from '@/modules/providers';
import { Footer } from '@/modules/events';

interface SiteLayoutProps {
  children: React.ReactNode;
}

export default async function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <div className='min-h-screen w-screen flex-grow'>
      <FixedNavBar />
      <Providers>{children}</Providers>
      <Footer />
    </div>
  );
}
