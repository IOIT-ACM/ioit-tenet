import {
  Hero,
  // Events,
  SearchEvents,
  Gallery,
  HorizontalScroll,
  MUN,
  ShiftingCountdown,
  // Agenda,
  Navigation,
  Intro,
  // HorizontalMarquee,
  LastParallax,
  FallingCaps,
  TenetHero,
  Schedule,
} from '@/modules/home';

export default async function HomePage() {
  return (
    <main className=''>
      {/* <Agenda /> */}
      <Navigation />
      <Hero />
      <TenetHero />
      <ShiftingCountdown />
      <Schedule />
      {/* <Events /> */}
      <Intro />
      {/* <HorizontalMarquee /> */}
      <SearchEvents />
      <Gallery />
      <MUN />
      <HorizontalScroll />
      <FallingCaps />
      <LastParallax />
    </main>
  );
}
