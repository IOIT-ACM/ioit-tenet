import Footer from '@/components/common/footer';
import FixedNavBar from '@/components/common/fixednav';

interface SiteLayoutProps {
  children: React.ReactNode;
}

export default async function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <div className='flex min-h-screen flex-col'>
      <FixedNavBar />
      <main className='flex-1'>{children}</main>
      <Footer />
    </div>
  );
}
