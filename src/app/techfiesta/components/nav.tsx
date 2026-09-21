import Image from 'next/image';
import Link from 'next/link';
import { data } from '@/config/data/26/techfiesta';
import { ChevronDownIcon } from './icons';

export default function TechfiestaNav() {
  return (
    <nav className="sticky top-0 z-50 flex h-20 w-full items-center justify-between border-b-[3px] border-[#050530] bg-white px-5 md:px-[120px]">
      <Link href="/techfiesta" aria-label="TechFiesta home" className="group flex items-center gap-3 md:gap-3.5">
        <Image
          src="/26/techfiesta/logo/techfiesta-mark.png"
          alt=""
          width={40}
          height={45}
          className="h-9 w-8 transition-transform duration-150 ease-out group-hover:-rotate-6 md:h-[45px] md:w-10"
        />
        <span className="flex flex-col gap-0.5 md:gap-[3px]">
          <span
            className="text-xl font-bold leading-none tracking-[0.04em] text-[#050530] md:text-[28px]"
            style={{ fontFamily: 'var(--font-pixelify)' }}
          >
            TECHFIESTA
          </span>
          <span className="hidden text-xs font-bold tracking-[0.16em] text-[#0000c8] md:block">
            TENET &rsquo;26 · IOIT ACM
          </span>
        </span>
      </Link>

      <div className="flex items-center gap-3 md:gap-10">
        <div className="tf-dd relative hidden md:block">
          <Link
            href="/techfiesta#events"
            className="tf-nav-a flex h-20 items-center gap-2.5 text-lg font-medium text-[#050530]"
          >
            Events <ChevronDownIcon className="transition-transform duration-150 [.tf-dd:hover_&]:rotate-180 [.tf-dd:focus-within_&]:rotate-180" />
          </Link>
          <div className="tf-dd-menu">
            {data.map((event) => (
              <Link
                key={event.slug}
                href={`/techfiesta/${event.slug}`}
                className="tf-dd-item flex items-baseline justify-between gap-6 px-3.5 py-3 text-[17px] font-medium text-[#050530]"
              >
                <span>{event.title}</span>
                <span
                  className="flex-none text-[15px] font-bold tabular-nums text-[#0000c8]"
                  style={{ fontFamily: 'var(--font-space-grotesk)' }}
                >
                  {event.day} Oct
                </span>
              </Link>
            ))}
          </div>
        </div>
        <Link
          href="/techfiesta#schedule"
          className="tf-nav-a hidden h-20 items-center text-lg font-medium text-[#050530] md:flex"
        >
          Schedule
        </Link>
        <Link
          href="#register"
          className="tf-btn-k flex h-11 items-center px-5 text-base font-semibold md:h-12 md:px-[26px] md:text-lg"
        >
          Register
        </Link>
      </div>
    </nav>
  );
}
