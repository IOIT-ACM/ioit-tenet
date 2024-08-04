import {
  Hero,
  Events,
  SearchEvents,
  Gallery,
  HorizontalScroll,
  MUN,
} from '@/modules/home';

import ShiftingCountdown from '@/modules/home/components/countdown';

export default function HomePage() {
  return (
    <main className=''>
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
