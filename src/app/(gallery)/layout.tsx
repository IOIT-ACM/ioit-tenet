interface SiteLayoutProps {
  children: React.ReactNode;
}

export default async function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <div className='min-h-screen w-screen flex-grow bg-[#e7ddd2]'>
      {children}
    </div>
  );
}
