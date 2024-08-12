import { Shell } from '@/modules/events';

interface SiteLayoutProps {
  children: React.ReactNode;
}

export default async function SiteLayout({ children }: SiteLayoutProps) {
  return <Shell>{children};</Shell>;
}
