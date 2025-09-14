import { data } from '@/config/data/25/techfiesta';
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
    }} className='min-h-screen w-screen '>

      {children}

    </main>
  );
}
