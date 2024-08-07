/* eslint-disable react/display-name */
import * as Scrollytelling from '@/lib/scrollytelling-client';
import s from './horizontal-marquee.module.scss';
import { cn } from '@/lib/utils';

const phrase = 'FROM IOIT ACM';
const splitted = phrase.split('');
const charsLength = splitted.length;

export const HorizontalMarquee = () => {
  return (
    <Scrollytelling.Root start='top top+=300px'>
      <section className={s.section}>
        <div className={s.pinned}>
          <Scrollytelling.Animation
            tween={{
              start: 0,
              end: 90,
              from: { xPercent: 98, ease: 'linear' },
            }}
          >
            <div className={cn(s.animated, 'text-white')}>
              <Scrollytelling.Animation
                tween={{
                  start: 90,
                  end: 100,
                  to: { x: '-=50vw', ease: 'linear' },
                }}
              >
                <p>
                  {splitted.map((s, i) => {
                    const charDuration = 90 / charsLength;
                    const charStart = charDuration * i;
                    const charEnd = charStart + charDuration;

                    return (
                      <Scrollytelling.Animation
                        key={i}
                        tween={{
                          start: charStart * 0.7, // make it start a bit sooner, actually
                          end: charEnd,
                          fromTo: [
                            {
                              yPercent: 40,
                              scale: 0.5,
                              autoAlpha: 0,
                              transformOrigin: 'center right',
                            },
                            {
                              keyframes: {
                                '0%': { autoAlpha: 0, scale: 0.5 },
                                '50%': { autoAlpha: 1, scale: 1 },
                                '100%': { yPercent: 0 },
                                easeEach: 'linear',
                              },
                              ease: 'linear',
                            },
                          ],
                        }}
                      >
                        <span
                          data-character
                          style={{
                            display: 'inline-block',
                          }}
                        >
                          {s === ' ' ? <>&nbsp;</> : s}
                        </span>
                      </Scrollytelling.Animation>
                    );
                  })}
                </p>
              </Scrollytelling.Animation>
            </div>
          </Scrollytelling.Animation>
        </div>
      </section>
    </Scrollytelling.Root>
  );
};
