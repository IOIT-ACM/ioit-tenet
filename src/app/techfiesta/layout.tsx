import { Pixelify_Sans, Space_Grotesk } from 'next/font/google';
import { data } from '@/config/data/26/techfiesta';
import TechfiestaNav from './components/nav';
import TechfiestaFooter from './components/footer';
import './techfiesta.css';

interface SiteLayoutProps {
  children: React.ReactNode;
  params: { event: string };
}

const pixelifySans = Pixelify_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-pixelify',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-space-grotesk',
});

export async function generateStaticParams() {
  return data.map((e) => ({ event: e.slug }));
}
export const dynamicParams = false;

export default async function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <main
      className={`tf-scope min-h-screen w-full bg-white text-[#050530] antialiased ${pixelifySans.variable} ${spaceGrotesk.variable}`}
      style={{ fontFamily: 'var(--font-space-grotesk), system-ui, sans-serif' }}
    >
      <TechfiestaNav />
      {children}
      <TechfiestaFooter />
    </main>
  );
}
