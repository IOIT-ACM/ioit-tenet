/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import useSWR from 'swr';
import type { Speaker } from '@/types';

export interface Event {
  id: string;
  name: string;
  icon: string;
  type: 'event';
}

export type SearchItem = Speaker | Event;

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function useSearch() {
  const { data, error, isLoading } = useSWR<SearchItem[]>(
    '/api/events',
    fetcher,
  );

  return {
    allItems: data ?? [],
    isLoading,
    error,
  };
}
