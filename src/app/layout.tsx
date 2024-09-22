import '@/styles/global.scss';
import '@/styles/scrollbar.css';

import { GeistSans } from 'geist/font/sans';
import { type Metadata } from 'next';
import { Toaster } from 'sonner';
import { siteConfig } from '@/config';
import { MusicPlayer } from '@/components/common/musicplayer';
import { TenetCommandDialog } from '@/components/command';
import Script from 'next/script';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'TENET',
    'AISSMS',
    'IOIT',
    'ACM',
    'Techfiesta',
    'E-Sports',
    'Entrepreneurship',
    'Negotiations',
    'Engineering',
    'Trending',
  ],
  authors: [
    {
      name: 'Aditya Godse',
      url: 'https://adimail.github.io',
    },
    {
      name: 'Swaroop Patil',
    },
  ],
  creator: 'IOIT ACM',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='en' className={`${GeistSans.variable}`}>
      <Script
        strategy='afterInteractive'
        async
        src='https://www.googletagmanager.com/gtag/js?id=G-0V093EZ0CW'
      />
      <Script id='google-analytics' strategy='afterInteractive'>
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-0V093EZ0CW');
          `}
      </Script>
      <body style={{ fontFamily: 'exo2' }} className='bg-neutral-950'>
        {children}
        <MusicPlayer />
        <TenetCommandDialog />
        <Toaster richColors position='top-center' />
      </body>
    </html>
  );
}
