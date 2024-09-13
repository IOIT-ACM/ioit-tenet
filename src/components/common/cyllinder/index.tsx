'use client';
import { gsap } from 'gsap';
import * as Scrollytelling from '@bsmnt/scrollytelling';
import Image from 'next/image';

import s from './cyllinder.module.scss';
import clsx from 'clsx';
import { useMapToCylinder } from './helpers';
import type { ScheduleItemType } from '@/types';
import Link from 'next/link';
import { useViewportSize } from '@/hooks/use-viewport';

const progress = { value: 0 };

type CyllinderProps = {
  events: ScheduleItemType[];
};

const itemHeight = '7vh';
const itemsInViewAtOnce = 7;
const itemsPadding = 4;

export const Cyllinder: React.FC<CyllinderProps> = ({ events }) => {
  const { height } = useViewportSize();
  const pinSpacerHeight = `calc(3 * ${itemHeight} * ${
    Math.max(itemsInViewAtOnce, events.length) + itemsPadding
  })`;

  const update = useMapToCylinder({
    target: '[data-event]',
    onUpdate: (element, { y, z, rotationX, opacity, data }) => {
      gsap.set(element, {
        rotateX: rotationX,
        opacity: data.progress === 0 ? opacity : 1,
        y: y,
        z: z,
        attr: { ['data-state']: data.progress != 0 ? 'active' : 'disabled' },
      });
    },
    config: {
      cylinderRadius: height / 3.6,
      availableRadians: (Math.PI / 7) * events.length,
    },
  });

  return (
    <Scrollytelling.Root
      scrub={0.75}
      callbacks={{
        onRefresh: () => update(progress.value),
      }}
    >
      <div
        className={s.section}
        style={{
          height: pinSpacerHeight,
        }}
      >
        <div className={s.pin}>
          <div className={s.cyllinder}>
            <Scrollytelling.Animation
              tween={{
                start: 0,
                end: 100,
                target: progress,
                to: {
                  value: 1,
                  onUpdate: () => update(progress.value),
                },
              }}
            />

            {events.map((event, i) => {
              return (
                <div className={s.item} data-event={i} key={i}>
                  <h2 className={s.title}>{event.title}</h2>
                  <div className={s.info}>
                    <Link
                      className={s.link}
                      href={'/events/' + event.id}
                      rel='noopener'
                    >
                      <Image
                        draggable={false}
                        className={clsx('image', s.image)}
                        src={event.image}
                        width={760}
                        height={496}
                        quality={100}
                        alt={'dummy image'}
                      />
                    </Link>

                    {event.organizers && (
                      <p className={s.credits}>
                        <span>Host {event.organizers[0]?.name}</span>
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Scrollytelling.Root>
  );
};
