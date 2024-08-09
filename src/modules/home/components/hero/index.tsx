import { Video } from '@/components/ui/Video';

export const Hero = () => {
  return (
    <div className=''>
      <Video
        src='hero-logo.webm'
        autoPlay
        preload='auto'
        muted
        style={{ width: '100vw', height: '100vh', objectFit: 'cover' }}
      />
    </div>
  );
};
