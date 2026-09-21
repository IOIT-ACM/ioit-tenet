import Image from 'next/image';
import Link from 'next/link';
import Reveal from './reveal';

export default function RegisterCta() {
  return (
    <section id="register" className="relative w-full bg-white">
      {/* Zero-height seam sitting exactly on the boundary between the white section above and
          the photo below, spanning the full viewport width. The image is centered on it via
          translate-y-1/2, so its own flip point (vertical center) lands precisely on that
          dividing line. */}
      <div className="relative">
        <Image
          src="/26/techfiesta/graphics/dot-overlay.png"
          alt=""
          width={1440}
          height={744}
          className="pointer-events-none absolute inset-x-0 bottom-0 h-auto w-full translate-y-1/2 rotate-180 select-none"
        />
      </div>

      <div className="relative h-[560px] w-full overflow-hidden sm:h-[660px] md:h-[780px]">
        <Image
          src="/26/techfiesta/graphics/hero-bg.png"
          alt=""
          fill
          className="object-cover object-bottom"
        />

        <div className="absolute inset-0 flex flex-col justify-center px-5 pt-[clamp(72px,27vw,240px)] sm:px-10 md:px-[120px]">
        <Reveal className="flex flex-col gap-6">
          <h2
            className="text-5xl font-bold leading-none text-white sm:text-7xl md:text-[88px]"
            style={{ fontFamily: 'var(--font-pixelify)', textShadow: '6px 6px 0 #050530' }}
          >
            See you on
            <br />
            <span style={{ fontFamily: 'var(--font-space-grotesk)' }}>23</span> October.
          </h2>
          <p
            className="max-w-[520px] text-lg leading-[1.45] text-white sm:text-xl md:text-[22px]"
            style={{ textShadow: '2px 2px 0 #050530' }}
          >
            Eight events across two days. Register now and lock in your spot.
          </p>
          <div className="mt-2 flex flex-wrap items-center gap-6 sm:gap-8">
            <Link
              href="https://unstop.com/college-fests/tenet-aissms-institute-of-information-technology-pune-maharashtra-476371"
              target="_blank"
              rel="noopener noreferrer"
              className="tf-btn-w flex h-14 w-36 items-center justify-center text-lg font-medium sm:h-[72px] sm:w-[220px] sm:text-2xl md:h-[84px] md:w-[280px] md:text-[28px]"
            >
              Register
            </Link>
            <div className="flex gap-2">
              <Image src="/26/techfiesta/logo/ti.png" alt="AISSMS IOIT" width={72} height={72} className="h-12 w-12 sm:h-[72px] sm:w-[72px]" />
              <Image src="/26/techfiesta/logo/acm.png" alt="ACM" width={72} height={72} className="h-12 w-12 sm:h-[72px] sm:w-[72px]" />
            </div>
          </div>
        </Reveal>
        </div>
      </div>
    </section>
  );
}
