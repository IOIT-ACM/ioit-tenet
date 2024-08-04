'use client';

import { ParallaxProvider } from 'react-scroll-parallax';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ParallaxProvider>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </ParallaxProvider>
  );
}
