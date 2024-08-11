import { Providers } from '@/modules/providers';

interface SiteLayoutProps {
  children: React.ReactNode;
}

export default async function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <div className='flex min-h-screen flex-col'>
      <main className='flex-1'>
        <Providers>{children}</Providers>
      </main>
    </div>
  );
}
