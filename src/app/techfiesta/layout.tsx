import { data } from '@/config/data/25/techfiesta';
import Image from 'next/image';
import Link from 'next/link';
import { Footer } from '@/modules/events';

interface SiteLayoutProps {
  children: React.ReactNode;
  params: { event: string }
}

export async function generateStaticParams() {
  return data.map(e => { return { event: e.slug } })
}
export const dynamicParams = false;

export default async function SiteLayout({ children }: SiteLayoutProps) {

  return (
    <main style={{
      backgroundColor: '#0B0D22',
      minHeight: '100vh',
      width: '100vw',
    }} className='min-h-screen w-screen overflow-x-hidden'>
      <header className="absolute top-0 left-0 right-0 z-10 p-5 md:p-8">
        <div className="flex justify-between items-center w-full">
          <Link href="/" className="h-10 w-10 md:h-14 md:w-14">
            <Image
              className="h-full w-full rounded-lg transition-transform hover:scale-105"
              src="/tenet-white-logo.png"
              alt="Tenet Logo"
              height={70}
              width={70}
            />
          </Link>
          <Link href="https://ioit.acm.org" className="h-10 w-10 md:h-14 md:w-14">
            <Image
              className="h-full w-full rounded-lg transition-transform hover:scale-105"
              src="/acm.png"
              alt="ACM Logo"
              height={70}
              width={70}
            />
          </Link>
        </div>
      </header>
      {children}
      <Footer />
    </main>
  );
}