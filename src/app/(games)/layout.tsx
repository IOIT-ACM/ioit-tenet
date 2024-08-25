import DesktopOnly from '@/components/viewonmobile';
import { Providers } from '@/modules/providers';

interface SiteLayoutProps {
  children: React.ReactNode;
}

export default async function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <Providers>
      {children}
      <DesktopOnly />
    </Providers>
  );
}
