/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import useSWR from 'swr';
import type { Speaker } from '@/types';

export interface Event {
  id: string;
  name: string;
  icon: string;
  type: 'event' | 'speaker';
}

export type SearchItem = Event;

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function useSearch() {
  const { data, error, isLoading } = useSWR<SearchItem[]>(
    '/api/search',
    fetcher,
  );

  return {
    allItems: data ?? [],
    isLoading,
    error,
  };
}
