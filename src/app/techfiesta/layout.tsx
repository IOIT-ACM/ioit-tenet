import { data } from '@/config/data/25/techfiesta';
import Image from 'next/image';
import Link from 'next/link';
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

      backgroundImage: "url('/25/techfiesta/logo/bg.png')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      minHeight: '75vh',
      width: '100vw',
    }} className='min-h-screen w-screen overflow-hidden'>
      {/* Logos */}
      <div className="flex absolute top-0 left-0 gap-2 md:gap-3 m-5 md:m-8">
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
      {children}
    </main>
  );
}
