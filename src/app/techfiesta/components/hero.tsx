import Image from 'next/image';
import Link from 'next/link';
import { festivalDates } from '@/config/data/26/techfiesta';
import Reveal from './reveal';

export default function Hero() {
  return (
    <section id="top" className="relative w-full bg-white">
      <div className="relative h-[680px] w-full overflow-hidden sm:h-[780px] md:h-[920px]">
        <Image
          src="/26/techfiesta/graphics/hero-bg.png"
          alt=""
          fill
          priority
          className="object-cover object-top"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center px-5 pb-[clamp(96px,27vw,100px)] sm:px-10 md:px-10">
          <Reveal className="flex w-full max-w-[380px] flex-col items-start gap-6 sm:max-w-[560px] sm:gap-8 md:max-w-[760px] lg:max-w-[940px]">
            <div className="flex items-center -mb-7  lg:-mb-10">
              <Image src="/26/techfiesta/logo/ti.png" alt="AISSMS IOIT" width={90} height={90} className="h-24 w-24 sm:h-[100px] sm:w-[100px] z-10 -mb-2" />
              <Image src="/26/techfiesta/logo/acm.png" alt="ACM" width={90} height={90} className="h-24 w-24 sm:h-[100px] sm:w-[100px] -ml-4 mr-4 -mb-2" />
              <div className="flex flex-col ">
                <span
                  className="text-sm font-semibold tracking-[0.14em] text-[#cfd5ff] sm:text-lg"
                  style={{ fontFamily: 'var(--font-pixelify)', textShadow: '2px 2px 0 #050530' }}
                >
                  TENET &rsquo;26 PRESENTS
                </span>
                <span
                  className="text-lg font-bold tracking-[-0.05em] tabular-nums text-white sm:text-2xl"
                  style={{ fontFamily: 'var(--font-space-grotesk)', textShadow: '3px 3px 0 #050530' }}
                >
                  {festivalDates.toUpperCase()}
                </span>
              </div>
            </div>

            <Image
              src="/26/techfiesta/graphics/techfiesta-wordmark.png"
              alt="TechFiesta"
              width={988}
              height={188}
              priority
              className="h-auto w-full z-20"
            />

            <div className="flex flex-wrap gap-2.5">
              <Link
                href="#events"
                className="tf-btn-k flex h-14 w-36 items-center justify-center text-lg font-medium sm:h-[72px] sm:w-[220px] sm:text-2xl md:h-[84px] md:w-[280px] md:text-[28px]"
              >
                View events
              </Link>
              <Link
                href="#register"
                className="tf-btn-w flex h-14 w-36 items-center justify-center text-lg font-medium sm:h-[72px] sm:w-[220px] sm:text-2xl md:h-[84px] md:w-[280px] md:text-[28px]"
              >
                Register
              </Link>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Zero-height seam sitting exactly on the boundary between the photo above and the
          white section below, spanning the full viewport width. The image is centered on it
          via -translate-y-1/2, so its own flip point (vertical center) lands precisely on
          that dividing line. */}
      <div className="relative">
        <Image
          src="/26/techfiesta/graphics/dot-overlay.png"
          alt=""
          width={1440}
          height={744}
          className="pointer-events-none absolute inset-x-0 top-0 h-auto w-full -translate-y-1/2 select-none"
        />
      </div>
    </section>
  );
}
