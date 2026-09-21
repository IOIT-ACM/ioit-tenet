import Image from 'next/image';
import Link from 'next/link';
import { type TechfiestaEvent } from '@/config/data/26/techfiesta';
import { ArrowDiagIcon, CtfFlagIcon } from './icons';

interface EventCardProps {
  event: TechfiestaEvent;
  featured?: boolean;
}

export default function EventCard({ event, featured }: EventCardProps) {
  if (featured) {
    return (
      <div className="tf-card-dark group/card flex h-full flex-col border-[3px] border-[#050530] bg-[#050530] p-7 text-white">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row">
          <div className="tf-art flex h-[160px] w-full items-center justify-center border-[3px] border-white p-3 transition-transform duration-150 ease-out group-hover/card:scale-[1.03] sm:h-[220px] sm:w-auto sm:flex-grow">
            <EventLogo event={event} />
          </div>
          <div className="flex flex-none gap-7">
            <DateBlock day="23" dark />
            <DateBlock day="24" dark />
          </div>
        </div>
        <div
          className="mt-6 text-base font-medium tracking-[0.16em] text-[#8c96ff]"
          style={{ fontFamily: 'var(--font-pixelify)' }}
        >
          TWO-DAY WORKSHOP
        </div>
        <h3 className="mt-2 text-2xl font-semibold leading-none sm:text-[40px]" style={{ fontFamily: 'var(--font-pixelify)' }}>
          {event.title}
        </h3>
        <p className="mt-3 max-w-[640px] text-base leading-[1.55] text-[#dfe3ff] sm:text-[17px]">{event.cardDescription}</p>
        <Link
          href={`/techfiesta/${event.slug}`}
          className="tf-btn-w mt-auto flex h-12 w-fit items-center gap-3 px-5 text-base font-semibold sm:h-[52px] sm:text-lg"
        >
          View more <ArrowDiagIcon className="tf-arrow-nudge" />
        </Link>
      </div>
    );
  }

  return (
    <div className="tf-card group/card flex h-full flex-col border-[3px] border-[#050530] bg-white p-7 text-[#050530]">
      <div className="flex items-start justify-between gap-4">
        <div className="tf-art flex h-[160px] flex-grow items-center justify-center border-[3px] border-[#050530] p-3 transition-transform duration-150 ease-out group-hover/card:scale-[1.03]">
          <EventLogo event={event} />
        </div>
        <DateBlock day={event.day} />
      </div>
      <h3 className="mt-6 min-h-[70px] text-2xl font-semibold leading-[1.08] sm:text-[32px]" style={{ fontFamily: 'var(--font-pixelify)' }}>
        {event.title}
      </h3>
      <p className="mt-3.5 text-base leading-[1.55] text-[#2b2d5c] sm:text-[17px]">{event.cardDescription}</p>
      <Link
        href={`/techfiesta/${event.slug}`}
        className="tf-btn-k mt-auto flex h-12 w-fit items-center gap-3 self-start px-5 text-base font-semibold sm:h-[52px] sm:text-lg"
      >
        View more <ArrowDiagIcon className="tf-arrow-nudge" />
      </Link>
    </div>
  );
}

function EventLogo({ event }: { event: TechfiestaEvent }) {
  if (event.logo === '#') {
    return <CtfFlagIcon className="h-full w-auto" />;
  }
  return <Image src={event.logo} alt={`${event.title} logo`} width={300} height={300} className="block h-full w-full object-contain" />;
}

function DateBlock({ day, dark }: { day: string; dark?: boolean }) {
  return (
    <div className={`flex flex-none flex-col items-end gap-1.5 leading-none tabular-nums ${dark ? 'items-start' : ''}`} style={{ fontFamily: 'var(--font-space-grotesk)' }}>
      <div className={`text-4xl font-bold sm:text-[56px] ${dark ? 'text-[#8c96ff]' : 'text-[#0000c8]'}`}>{day}</div>
      <div className="text-sm font-semibold tracking-[0.1em] sm:text-lg">OCT 2026</div>
    </div>
  );
}
