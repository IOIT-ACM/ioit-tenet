import { data } from '@/config/data/26/techfiesta';
import EventCard from './event-card';
import Reveal from './reveal';
import SplitText from './split-text';

export default function EventGrid() {
  return (
    <section id="events" className="w-full bg-white px-5 pt-[clamp(100px,27vw,360px)] sm:px-10 md:px-[120px]">
      <Reveal className="mb-10 flex flex-col items-start justify-between gap-8 md:mb-14 md:flex-row md:items-end">
        <div className="flex flex-col gap-4 md:gap-5">
          <div
            className="text-base font-medium tracking-[0.16em] text-[#0000c8] sm:text-lg md:text-[22px]"
            style={{ fontFamily: 'var(--font-pixelify)' }}
          >
            TENET &rsquo;26 · EIGHT EVENTS · TWO DAYS
          </div>
          <h2
            className="text-5xl font-bold leading-[0.95] sm:text-7xl md:text-[104px]"
            style={{ fontFamily: 'var(--font-pixelify)' }}
          >
            <SplitText text="Choose your" />
            <br />
            <SplitText text="challenge." delay={0.25} />
          </h2>
        </div>
        <p className="max-w-[340px] text-lg leading-[1.5] text-[#2b2d5c] sm:text-xl">
          Every event has its own page with the rules, timings and how to register. Pick one, or take on a few.
        </p>
      </Reveal>

      <div className="grid grid-cols-1 gap-6 pb-16 sm:grid-cols-2 md:gap-10 md:pb-20 lg:grid-cols-3">
        {data.map((event, index) => {
          const featured = event.slug === 'robotics_workshop';
          return (
            <Reveal key={event.slug} delay={(index % 3) * 80} className={featured ? 'sm:col-span-2' : undefined}>
              <EventCard event={event} featured={featured} />
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
