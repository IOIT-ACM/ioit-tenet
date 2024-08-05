import {
  Hero,
  Events,
  SearchEvents,
  Gallery,
  HorizontalScroll,
  MUN,
  ShiftingCountdown,
  Agenda,
} from '@/modules/home';

export default async function HomePage() {
  return (
    <main className=''>
      <Agenda />
      <Hero />
      <Events />
      <ShiftingCountdown />
      <SearchEvents />
      <Gallery />
      <HorizontalScroll />
      <MUN />
    </main>
  );
}
