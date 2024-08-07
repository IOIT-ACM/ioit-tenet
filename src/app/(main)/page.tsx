import {
  Hero,
  Events,
  SearchEvents,
  Gallery,
  HorizontalScroll,
  MUN,
  ShiftingCountdown,
  // Agenda,
  Navigation,
  Intro,
  HorizontalMarquee,
  LastParallax,
  FallingCaps,
} from '@/modules/home';

export default async function HomePage() {
  return (
    <main className=''>
      {/* <Agenda /> */}
      <Navigation />
      <Hero />
      <Events />
      <Intro />
      <HorizontalMarquee />
      <ShiftingCountdown />
      <SearchEvents />
      <Gallery />
      <MUN />
      <HorizontalScroll />
      <FallingCaps />
      <LastParallax />
    </main>
  );
}
