import {
  Hero,
  Events,
  SearchEvents,
  Gallery,
  HorizontalScroll,
  MUN,
  ShiftingCountdown,
  Agenda,
  Navigation,
} from '@/modules/home';

export default async function HomePage() {
  return (
    <main className=''>
      <Agenda />
      <Navigation />
      <Hero />
      <Events />
      <ShiftingCountdown />
      <SearchEvents />
      <Gallery />
      <MUN />
      <HorizontalScroll />
    </main>
  );
}
