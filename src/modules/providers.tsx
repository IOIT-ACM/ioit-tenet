'use client';

import { ParallaxProvider } from 'react-scroll-parallax';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { PythonProvider } from 'react-py';

const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ParallaxProvider>
      <PythonProvider>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </PythonProvider>
    </ParallaxProvider>
  );
}
