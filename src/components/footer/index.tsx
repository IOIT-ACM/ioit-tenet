/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
'use client';

import Image from 'next/image';
import * as Scrollytelling from '@/lib/scrollytelling-client';
import QRImg from '../../../public/tenet/qr.jpeg';
import confetti from 'canvas-confetti';
import teamImage from '../../../public/tenet/team.png';
import s from './footer.module.scss';
import Link from 'next/link';
import { useMedia } from '@/hooks/use-media';
import { toVw } from '@/lib/utils';
import { cn } from '@/lib/utils';
import { Socials } from '../ui/socials';

import React, { useRef, useCallback } from 'react';

const ghHref = 'https://adimail.github.io';

export const Footer = () => {
  const isDesktopSm = useMedia('(min-width: 1024px)');

  return (
    <div className='md:pb-20'>
      <Socials />
      <Scrollytelling.Root start='top 80%'>
        <footer className={cn(s.footer, 'md:pb-20')}>
          <PreFooter />
          <div className={s['imgs-container']}>
            <Image className={s['team-img']} src={teamImage} alt='Tenet Team' />
            <div className={s['QR-container']}>
              <Scrollytelling.Animation
                tween={{
                  start: 60,
                  end: 100,
                  from: {
                    y: '-120%',
                    position: 'absolute',
                    x: isDesktopSm ? '-8vw' : toVw(-20),
                    scale: 0.6,
                  },
                }}
              >
                <Link href={ghHref} target='_blank' rel='noreferrer'>
                  <Image className={s.QR} src={QRImg} alt='QR' />
                </Link>
              </Scrollytelling.Animation>
            </div>
          </div>
          <div className={s.links}>
            <div>
              <span>get in touch</span>
              <Link
                className='link'
                href='mailto:aissms.ioit.acm@chatpter.acm.org'
                target='_blank'
                rel='noreferrer'
              >
                aissms.ioit.acm@chatpter.acm.org
              </Link>
            </div>
            <div className='text-center'>
              <Link
                className='link'
                href='mailto:adimail2404@gmail.com'
                target='_blank'
                rel='noreferrer'
              >
                Contact developers
              </Link>
            </div>
            <div>
              <span>&copy; {new Date().getFullYear()} ACM IOIT</span>
              <span>All rights reserved.</span>
            </div>
          </div>
        </footer>
      </Scrollytelling.Root>
    </div>
  );
};

const PreFooter = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const triggerConfetti = useCallback(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    confetti.create(canvas, {
      resize: true,
      useWorker: true,
    })({
      startVelocity: 20,
      particleCount: 140,
      spread: 2000,
      gravity: 0.6,
      origin: { y: 0.425 },
      colors: [
        '#ff4d00',
        '#ff5e00',
        '#ff8000',
        '#ffa200',
        '#b23500',
        '#d84000',
      ],
    });
  }, []);

  return (
    <div className={s['pre-footer']}>
      <canvas ref={canvasRef} className={s.confetti} />
      <Scrollytelling.Waypoint at={50} onCall={triggerConfetti} />
      <Scrollytelling.Waypoint
        at={75}
        tween={{
          target: ['body'],
          to: { background: 'black', color: 'white' },
          duration: 0.35,
        }}
      />
      <div className={s['left-content']}>
        <p>
          IOIT ACM STUDENT CHAPTER WELCOMES YOU TO THE FIRST EDITION OF TENET
        </p>
        <Link
          className={s['mobile-qr-link']}
          href={ghHref}
          target='_blank'
          rel='noreferrer'
        >
          <Image className={s['QR-mobile']} src={QRImg} alt='QR' />
        </Link>
      </div>
    </div>
  );
};
