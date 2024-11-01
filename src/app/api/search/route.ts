import { NextResponse } from 'next/server';
import { speakers } from '@/config/data/24/speakers';
import type { Speaker } from '@/types';
import { day1, day2, day3 } from '@/config/data/24/events';

interface Item {
  id: string;
  name: string;
  icon: React.ReactNode;
  type: string;
}

type SearchItem = Item | Speaker;

const allItems: SearchItem[] = [
  ...speakers.map((speaker) => ({
    id: speaker.id,
    name: speaker.name,
    icon: speaker.image,
    type: 'speaker' as const,
  })),
  ...day1.map((event) => ({
    id: event.id,
    name: event.title,
    icon: event.icon,
    type: 'event' as const,
  })),
  ...day2.map((event) => ({
    id: event.id,
    name: event.title,
    icon: event.icon,
    type: 'event' as const,
  })),
  ...day3.map((event) => ({
    id: event.id,
    name: event.title,
    icon: event.icon,
    type: 'event' as const,
  })),
];

export async function GET() {
  return NextResponse.json(allItems.sort(() => Math.random() - 0.5));
}
