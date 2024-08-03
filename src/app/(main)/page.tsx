import {
  Hero,
  Events,
  SearchEvents,
  Gallery,
  HorizontalScroll,
  MUN,
} from '@/modules/home';

export default function HomePage() {
  return (
    <main className=''>
      <Hero />
      <Events />
      <SearchEvents />
      <Gallery />
      <HorizontalScroll />
      <MUN />
    </main>
  );
}
