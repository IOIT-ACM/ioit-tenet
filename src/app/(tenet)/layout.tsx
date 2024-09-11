import FixedNavBar from '@/components/common/fixednav';
import { Providers } from '@/modules/providers';
import { Footer } from '@/modules/events';
import { MusicBtn } from '@/components/common/musicplayer';

interface SiteLayoutProps {
  children: React.ReactNode;
}

export default async function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <div className='min-h-screen w-screen flex-grow'>
      <FixedNavBar />
      <Providers>{children}</Providers>
      <Footer />
      <MusicBtn
        className='fixed bottom-5 left-5 w-fit md:bottom-10 md:left-10'
        nohide
      />
    </div>
  );
}
