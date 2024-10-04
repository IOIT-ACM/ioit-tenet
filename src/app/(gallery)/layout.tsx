import { FixedNav } from '@/modules/gallery';

interface SiteLayoutProps {
  children: React.ReactNode;
}

export default async function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <div className='min-h-screen w-screen flex-grow'>
      <FixedNav />
      {children}
    </div>
  );
}
