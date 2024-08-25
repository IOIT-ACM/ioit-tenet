import DesktopOnly from '@/components/viewonmobile';

interface SiteLayoutProps {
  children: React.ReactNode;
}

export default async function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <div>
      {children}
      <DesktopOnly />
    </div>
  );
}
