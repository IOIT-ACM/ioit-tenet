import '@/styles/globals.css';

import { GeistSans } from 'geist/font/sans';
import { type Metadata } from 'next';
import { Toaster } from 'sonner';
import { siteConfig } from '@/config';

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
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/opengraph-image.png`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='en' className={`${GeistSans.variable}`}>
      <body style={{ fontFamily: 'exo2' }} className='bg-neutral-950'>
        {children}
      </body>
      <Toaster richColors />
    </html>
  );
}
