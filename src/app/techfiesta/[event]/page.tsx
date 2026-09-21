import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { data } from '@/config/data/26/techfiesta';
import EventDetails from './event-details';

interface TechfiestaEventPageProps {
  params: { event: string };
}

export function generateMetadata({ params }: TechfiestaEventPageProps): Metadata {
  const event = data.find((d) => d.slug === params.event);
  if (!event) return {};
  return {
    title: `${event.title} | TechFiesta – TENET ’26 at AISSMS IOIT`,
    description: event.cardDescription,
  };
}

export default function TechfiestaEventPage({ params }: TechfiestaEventPageProps) {
  const event = data.find((d) => d.slug === params.event);
  if (!event) {
    return notFound();
  }

  return <EventDetails event={event} />;
}
