import Footer from '@/components/common/footer';
// import NavigationBar from '@/components/common/nav/navbar';

interface SiteLayoutProps {
  children: React.ReactNode;
}

export default async function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <div className='flex min-h-screen flex-col'>
      {/* <NavigationBar /> */}
      <main className='flex-1'>{children}</main>
      <Footer />
    </div>
  );
}
