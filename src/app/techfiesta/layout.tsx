interface SiteLayoutProps {
  children: React.ReactNode;
}

export default async function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <main className='min-h-screen w-screen flex-grow'>
        {children}
    </main>
  );
}
