'use client';

import { Pixelify_Sans, Space_Grotesk } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { FaDiscord, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { data as techfiestaEvents, type TechfiestaEvent } from '@/config/data/26/techfiesta';
import { InstagramIcon, LinkedinIcon, ArrowDiagIcon } from '../techfiesta/components/icons';
import '../techfiesta/techfiesta.css';

const pixelifySans = Pixelify_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-pixelify',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-space-grotesk',
});

export default function RegisterPage() {
  const searchParams = useSearchParams();
  const isTechFiesta = searchParams.get('d') === 'techfiesta';
  const highlight = searchParams.get('f');

  return isTechFiesta ? <TechfiestaRegister highlight={highlight} /> : <MainRegister />;
}

// ---------------------------------------------------------------------------
// Main (non-TechFiesta) branch — unchanged, original TENET linktree look.
// ---------------------------------------------------------------------------

interface EventType {
  id: string;
  name: string;
  href: string;
  disabled: boolean;
}

const mainAllEvents: EventType[] = [
  { id: 'mun', name: 'Model United Nations', href: 'https://unstop.com/conferences/ioit-mun-2026-tenet-aissms-institute-of-information-technology-pune-maharashtra-1699491', disabled: false },
  { id: 'tech', name: 'Techfiesta', href: '?d=techfiesta', disabled: false },
];

function MainRegister() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-950 px-4 py-20 text-white">
      <div className="my-4 text-center">
        <Link href="/" aria-label="Go to homepage">
          <Image
            src="/tenet-logo.png"
            alt="TENET Logo"
            width={1620}
            height={1620}
            className="mx-auto mb-4 h-28 w-28"
          />
        </Link>
        <p className="mt-1 text-gray-400">Tech • Robotics • Diplomacy • Hackathon • Cybersecurity</p>
      </div>

      <div className="mt-8 flex w-full max-w-md flex-col gap-4">
        {mainAllEvents.map((event) => {
          let buttonClasses = 'relative flex w-full items-center justify-center rounded-xl border py-3 px-4 font-semibold shadow-md transition';

          if (event.disabled) {
            buttonClasses += ' bg-gray-800 border-gray-700 text-gray-500 cursor-not-allowed opacity-70';
          } else {
            buttonClasses += ' bg-gray-900 border-gray-800 hover:bg-gray-800 hover:border-gray-700';
          }

          return event.disabled ? (
            <div key={event.id} className={`${buttonClasses} relative overflow-hidden`}>
              {event.name}
              <span className="absolute -right-8 top-2 w-32 rotate-45 bg-yellow-400 py-2 text-center text-[9px] font-bold text-black shadow-md">
                Coming Soon
              </span>
            </div>
          ) : (
            <a key={event.id} href={event.href} className={buttonClasses}>
              {event.name}
            </a>
          );
        })}
      </div>

      <div className="mt-10 flex gap-6 text-2xl text-gray-400">
        <a href="https://www.instagram.com/ioit_tenet/" target="_blank" rel="noopener noreferrer" className="transition hover:text-pink-500">
          <FaInstagram />
        </a>
        <a href="https://discord.gg/ZK6b2NkqSB" target="_blank" rel="noopener noreferrer" className="transition hover:text-indigo-500">
          <FaDiscord />
        </a>
        <a href="https://www.linkedin.com/company/ioit-tenet/" target="_blank" rel="noopener noreferrer" className="transition hover:text-blue-500">
          <FaLinkedin />
        </a>
        <a href="https://x.com/ioit_acm" target="_blank" rel="noopener noreferrer" className="transition hover:text-sky-400">
          <FaXTwitter />
        </a>
        <a href="https://github.com/ioit-acm" target="_blank" rel="noopener noreferrer" className="transition hover:text-gray-300">
          <FaGithub />
        </a>
      </div>

      <footer className="mb-4 mt-10 text-sm text-gray-400">&copy; {new Date().getFullYear()} IOIT ACM</footer>
    </main>
  );
}

// ---------------------------------------------------------------------------
// TechFiesta branch — new neo-brutalist theme, live/coming-soon event split.
// ---------------------------------------------------------------------------

function PageHeader({ eyebrow, title, backHref, backLabel }: { eyebrow: string; title: string; backHref: string; backLabel: string }) {
  return (
    <header className="flex flex-col items-center gap-6 px-5 pb-10 pt-16 text-center sm:pt-24">
      <Link href="/" aria-label="TENET home">
        <Image src="/26/techfiesta/logo/ti.png" alt="TENET" width={88} height={88} className="h-16 w-16 sm:h-20 sm:w-20" />
      </Link>
      <div className="flex flex-col gap-3">
        <div
          className="text-sm font-medium tracking-[0.16em] text-[#0000c8] sm:text-base"
          style={{ fontFamily: 'var(--font-pixelify)' }}
        >
          {eyebrow}
        </div>
        <h1 className="text-4xl font-bold leading-none sm:text-6xl" style={{ fontFamily: 'var(--font-pixelify)' }}>
          {title}
        </h1>
      </div>
      <Link href={backHref} className="tf-nav-a text-sm font-medium text-[#2b2d5c] underline underline-offset-4">
        {backLabel}
      </Link>
    </header>
  );
}

function TechfiestaRegister({ highlight }: { highlight: string | null }) {
  const liveEvents = orderByHighlight(
    techfiestaEvents.filter((event) => event.registerLink?.startsWith('http')),
    highlight,
  );
  const pendingEvents = techfiestaEvents.filter((event) => !event.registerLink?.startsWith('http'));

  return (
    <main
      className={`tf-scope min-h-screen w-full bg-white text-[#050530] antialiased ${pixelifySans.variable} ${spaceGrotesk.variable}`}
      style={{ fontFamily: 'var(--font-space-grotesk), system-ui, sans-serif' }}
    >
      <div className="flex flex-col items-center">
        <PageHeader eyebrow="TENET '26 · TECHFIESTA" title="Register" backHref="/techfiesta" backLabel="Back to TechFiesta" />

        <div className="w-full max-w-2xl px-5">
          <div className="mb-6 flex flex-col gap-1">
            <div className="text-sm font-medium tracking-[0.16em] text-[#0000c8]" style={{ fontFamily: 'var(--font-pixelify)' }}>
              OPEN NOW
            </div>
            <p className="text-base text-[#2b2d5c]">Registrations are live for these {liveEvents.length} events.</p>
          </div>
          <div className="mb-14 flex flex-col gap-4">
            {liveEvents.map((event) => (
              <a
                key={event.slug}
                href={event.registerLink}
                target="_blank"
                rel="noopener noreferrer"
                className="tf-card group/reg flex h-20 items-center justify-between gap-4 border-[3px] border-[#050530] bg-white px-6"
              >
                <div className="flex items-center gap-4">
                  <EventThumb event={event} />
                  <div className="flex flex-col">
                    <span className="text-xl font-semibold" style={{ fontFamily: 'var(--font-pixelify)' }}>
                      {event.title}
                    </span>
                    <span className="text-sm text-[#2b2d5c]">{event.dateLabel}</span>
                  </div>
                </div>
                <span className="tf-btn-k flex h-11 flex-none items-center gap-2 px-4 text-sm font-semibold">
                  Register{' '}
                  <ArrowDiagIcon className="transition-transform duration-150 ease-out group-hover/reg:translate-x-1 group-hover/reg:-translate-y-1" />
                </span>
              </a>
            ))}
          </div>

          <div className="mb-6 flex flex-col gap-1">
            <div className="text-sm font-medium tracking-[0.16em] text-[#8c96ff]" style={{ fontFamily: 'var(--font-pixelify)' }}>
              COMING SOON
            </div>
            <p className="text-base text-[#2b2d5c]">Registration for these events opens shortly. Tap through for details.</p>
          </div>
          <div className="mb-16 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {pendingEvents.map((event) => (
              <Link
                key={event.slug}
                href={`/techfiesta/${event.slug}`}
                className="flex items-center justify-between gap-4 border-[3px] border-dashed border-[#8c96ff] bg-[#eef0ff]/40 px-5 py-4"
              >
                <div className="flex items-center gap-3">
                  <EventThumb event={event} small />
                  <span className="text-lg font-semibold" style={{ fontFamily: 'var(--font-pixelify)' }}>
                    {event.title}
                  </span>
                </div>
                <span
                  className="flex-none text-xs font-semibold uppercase tracking-[0.1em] text-[#0000c8]"
                  style={{ fontFamily: 'var(--font-pixelify)' }}
                >
                  Soon
                </span>
              </Link>
            ))}
          </div>
        </div>

        <TechfiestaSocialRow />
      </div>
    </main>
  );
}

function EventThumb({ event, small }: { event: TechfiestaEvent; small?: boolean }) {
  const size = small ? 40 : 56;
  return (
    <div
      className="tf-art flex flex-none items-center justify-center border-2 border-[#050530]"
      style={{ width: size, height: size }}
    >
      {event.logo === '#' ? (
        <span className="text-[10px] font-bold text-[#050530]">CTF</span>
      ) : (
        <Image src={event.logo} alt="" width={size} height={size} className="block h-full w-full object-contain p-1" />
      )}
    </div>
  );
}

function TechfiestaSocialRow() {
  return (
    <div className="flex flex-col items-center gap-6 pb-14">
      <div className="flex gap-3">
        <a
          href="https://www.instagram.com/ioit_tenet/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="tf-f-soc flex h-11 w-11 items-center justify-center border-2 border-[#050530] text-[#050530]"
        >
          <InstagramIcon />
        </a>
        <a
          href="https://discord.gg/ZK6b2NkqSB"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Discord"
          className="tf-f-soc flex h-11 w-11 items-center justify-center border-2 border-[#050530] text-[#050530]"
        >
          <FaDiscord size={18} />
        </a>
        <a
          href="https://www.linkedin.com/company/ioit-tenet/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="tf-f-soc flex h-11 w-11 items-center justify-center border-2 border-[#050530] text-[#050530]"
        >
          <LinkedinIcon />
        </a>
        <a
          href="https://x.com/ioit_acm"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="X"
          className="tf-f-soc flex h-11 w-11 items-center justify-center border-2 border-[#050530] text-[#050530]"
        >
          <FaXTwitter size={16} />
        </a>
        <a
          href="https://github.com/ioit-acm"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="tf-f-soc flex h-11 w-11 items-center justify-center border-2 border-[#050530] text-[#050530]"
        >
          <FaGithub size={18} />
        </a>
      </div>
      <div className="text-sm text-[#2b2d5c]">&copy; {new Date().getFullYear()} IOIT ACM</div>
    </div>
  );
}

function orderByHighlight(events: TechfiestaEvent[], highlight: string | null): TechfiestaEvent[] {
  if (!highlight) return events;
  const match = events.find((event) => event.slug === highlight || event.slug.includes(highlight));
  if (!match) return events;
  return [match, ...events.filter((event) => event.slug !== match.slug)];
}
