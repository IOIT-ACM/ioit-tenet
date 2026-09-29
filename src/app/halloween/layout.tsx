import type { Metadata } from 'next';
import { Bricolage_Grotesque, IM_Fell_English, DM_Mono, Big_Shoulders_Display } from 'next/font/google';
import { env } from '@/env';
import './halloween.css';

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ['400', '500', '700', '800'],
  variable: '--font-bricolage',
});

const imFell = IM_Fell_English({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-im-fell',
});

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-dm-mono',
});

const bigShoulders = Big_Shoulders_Display({
  subsets: ['latin'],
  weight: ['800', '900'],
  variable: '--font-big-shoulders',
});

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
  title: 'Halloween Party | TENET 2026 at AISSMS IOIT',
  description: 'One night in the MPH at AISSMS IOIT. Costumes, chaos, and whatever crawls out after dark — TENET Halloween Party, 24 October 2026.',
};

export default function HalloweenLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${bricolage.variable} ${imFell.variable} ${dmMono.variable} ${bigShoulders.variable}`} style={{ fontFamily: 'var(--font-bricolage), ui-sans-serif, system-ui, sans-serif' }}>
      {children}
    </div>
  );
}
