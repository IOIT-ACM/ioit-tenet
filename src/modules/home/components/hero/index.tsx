import * as Scrollytelling from '@/lib/scrollytelling-client';
import s from './intro.module.scss';
import { Video } from '@/components/ui/Video';

export const Hero = () => {
  return (
    <div className=''>
      <Scrollytelling.Root>
        <div className={s.container}>
          <div>
            <Video
              src='hero-logo.webm'
              autoPlay
              preload='auto'
              muted
              style={{ width: '100vw', height: '100vh', objectFit: 'cover' }}
            />
          </div>
        </div>
      </Scrollytelling.Root>
    </div>
  );
};
