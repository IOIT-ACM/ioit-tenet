import { NextResponse } from 'next/server';
import { speakers } from '@/config/speakers';
import { events } from '@/config/search-events';
import type { Speaker } from '@/types';

interface Item {
  id: string;
  name: string;
  icon: React.ReactNode;
  type?: string;
}

type SearchItem = Item | Speaker;

const allItems: SearchItem[] = [
  ...speakers.map((speaker) => ({ ...speaker, type: 'speaker' as const })),
  ...events.map((event) => ({ ...event, type: 'event' as const })),
];

export async function GET() {
  return NextResponse.json(allItems.sort(() => Math.random() - 0.5));
}
