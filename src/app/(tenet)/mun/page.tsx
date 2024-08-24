import {
  HeroImage,
} from '@/modules/events/mun';

export default function Page() {
  return (
    <main>
      <HeroImage
        backgroundImage='https://images.unsplash.com/photo-1590274853856-f22d5ee3d228?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        title='Welcome to MUN'
        subtitle='Join us for an exciting event'
        ctaText='Visit Website'
        ctaLink='https://www.ioitmun.com/'
        overlayImage='/mun_logo.png'
      />
    </main>
  );
}
