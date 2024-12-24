import { Footer } from '@/components/footer';

interface SiteLayoutProps {
  children: React.ReactNode;
}

export default async function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <div className='flex min-h-screen flex-col'>
      {children}
      <Footer />
    </div>
  );
}
