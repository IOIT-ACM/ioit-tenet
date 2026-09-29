'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  ArrowExternalIcon,
  ArrowUpRightIcon,
  BatIcon,
  ChevronDownArrowIcon,
  JackOLanternIcon,
  PlusIcon,
  QrPlaceholderIcon,
  TenetMarkIcon,
} from './icons';
import {
  useBatSwarm,
  useCountdown,
  useCustomCursor,
  useHeroLight,
  useMagnet,
  useReveal,
  useTilt,
} from './use-halloween-effects';

const ACCENT = '#f07a1a';
const CONTACT_EMAIL = 'ioit.tenet@aissmsioit.org';
const INSTAGRAM_URL = 'https://www.instagram.com/ioit_tenet/';
const REGISTER_URL = 'https://halloween.ioittenet.com';
const DISCORD_URL = 'https://discord.gg/ZK6b2NkqSB';

const NAV_LINKS = [
  { href: '#night', label: 'The night' },
  { href: '#passes', label: 'Passes' },
  { href: '#ritual', label: 'Ritual' },
  { href: '#faq', label: 'FAQ' },
];

const FACT_ROWS = [
  { n: '01', label: 'Date', value: 'Saturday, 24 October 2026' },
  { n: '02', label: 'Doors', value: '6:00 PM onwards' },
  { n: '03', label: 'Venue', value: 'MPH, AISSMS IOIT, Pune' },
  { n: '04', label: 'Entry', value: 'Unique QR pass only' },
];

const RITUAL_STEPS = [
  { n: 1, title: 'Register and pay', body: 'Grab your solo pass, fill in your details and pay online.' },
  { n: 2, title: 'Get your QR pass', body: 'A unique QR code is generated for you the moment payment goes through.' },
  { n: 3, title: 'Show it at the MPH', body: "Scan in at the door on 24 October from 6 PM. Then you're ours." },
];

const FAQS = [
  {
    q: 'How do I get in on the night?',
    a: 'Show the unique QR pass you receive after registering. It gets scanned at the MPH entrance. Keep it on your phone or bring a screenshot.',
  },
  {
    q: 'Is there a dress code?',
    a: "Costumes are strongly encouraged — come as your favorite icon of horror. It's not compulsory, but you'll fit right in.",
  },
  {
    q: 'Can students from other colleges come?',
    a: 'This one is open to AISSMS IOIT students — carry your college ID for verification at the door.',
  },
  {
    q: 'Can I pay at the door, or get a refund?',
    a: 'Passes are sold online only through this page, not at the door. All sales are final once your QR pass is issued.',
  },
];

const MARQUEE_WORDS = 'Costumes ✦ Chaos ✦ Screams ✦ Candy ✦ ';
const TICKER_WORDS = 'Halloween Party ✦ 24.10.26 ✦ MPH ✦ AISSMS IOIT ✦ ₹150 Per Person ✦ ';

function TicketCard() {
  const tiltRef = useTilt<HTMLDivElement>();

  return (
    <div ref={tiltRef} className="hw-tk hw-tk1 hw-rv mx-auto w-full max-w-[560px] md:max-w-[820px]" style={{ perspective: 1400 }}>
      <article
        className="flex flex-col overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.5)] md:h-[420px] md:flex-row"
        style={{ background: '#efe6d2', color: '#140a04' }}
      >
        <div
          className="flex flex-1 flex-col justify-between gap-4 border-b-2 p-6 md:border-b-0 md:border-r-2 md:p-11 md:gap-6"
          style={{ borderColor: 'rgba(20,10,4,.35)', borderStyle: 'dashed' }}
        >
          <div className="hw-mono flex justify-between text-xs md:text-sm">
            <span>TENET ✦ Halloween</span>
            <span>Solo pass</span>
          </div>
          <div className="flex flex-col">
            <span className="hw-zf whitespace-nowrap text-[clamp(40px,7vw,88px)] leading-[1.05] pt-[0.28em]">
              Admit one
            </span>
            <span className="hw-serif text-xl italic md:text-[28px]" style={{ color: '#5a4a36' }}>
              The Lone Soul
            </span>
          </div>
          <div className="grid grid-cols-3 gap-3 border-t pt-3 md:gap-5 md:pt-5" style={{ borderColor: 'rgba(20,10,4,.2)' }}>
            {[
              ['Date', '24.10.26'],
              ['Doors', '18:00'],
              ['Venue', 'MPH'],
            ].map(([k, v]) => (
              <div key={k} className="flex flex-col gap-0.5 md:gap-1.5">
                <span className="hw-mono text-[11px] md:text-[13px]" style={{ color: '#6b5c47' }}>
                  {k}
                </span>
                <span className="hw-mono text-[13px] font-medium md:text-base">{v}</span>
              </div>
            ))}
          </div>
        </div>
        <a
          href={REGISTER_URL}
          className="hw-stub flex flex-col items-center justify-between gap-4 p-6 md:w-[220px] md:gap-6 md:p-8"
          style={{ color: '#140a04' }}
        >
          <div className="flex flex-col items-center">
            <span className="text-4xl font-extrabold leading-none md:text-[64px]">₹150</span>
            <span className="hw-mono mt-1.5 text-xs md:text-sm">Per person</span>
          </div>
          <QrPlaceholderIcon width={84} height={84} className="opacity-90 md:h-[104px] md:w-[104px]" />
          <span className="hw-mono flex items-center gap-2 text-sm font-bold">
            Register
            <ArrowUpRightIcon className="hw-go" width={16} height={16} />
          </span>
        </a>
      </article>
    </div>
  );
}

export function HalloweenExperience() {
  const revealRootRef = useReveal<HTMLDivElement>();
  const heroRef = useHeroLight<HTMLDivElement>();
  const cursorRef = useCustomCursor<HTMLDivElement>();
  const heroMagnetRef = useMagnet<HTMLAnchorElement>();
  const finalMagnetRef = useMagnet<HTMLAnchorElement>();
  const bats = useBatSwarm(24);
  const cd = useCountdown();

  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div ref={revealRootRef} className="hw-scope relative flex w-full flex-col overflow-x-clip" style={{ background: '#0b0c0a' }}>
      <div ref={cursorRef} className="hw-cur" aria-hidden="true" />

      {/* grain */}
      <svg className="pointer-events-none absolute inset-0 z-40 h-full w-full opacity-10 mix-blend-overlay" aria-hidden="true">
        <filter id="hwgrain">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves={3} stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#hwgrain)" />
      </svg>

      {/* ============ NAV ============ */}
      <header className="sticky top-0 z-30 flex h-16 flex-shrink-0 items-center justify-between border-b border-[rgba(239,230,210,0.08)] bg-[rgba(11,12,10,0.6)] px-5 backdrop-blur-md md:h-[84px] md:px-[60px]">
        <a href="#top" className="flex items-center gap-2.5 no-underline md:gap-3" aria-label="TENET, back to top" style={{ color: ACCENT }}>
          <TenetMarkIcon width={22} height={25} className="md:h-[30px] md:w-[26px]" />
          <span className="text-[15px] font-extrabold tracking-[0.24em]" style={{ color: '#efe6d2' }}>
            TENET
          </span>
        </a>

        <nav className="hidden gap-9 md:flex" aria-label="Sections">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="hw-ul hw-mono text-[15px]" style={{ color: '#cfc6b2' }}>
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={REGISTER_URL}
          className="hw-pill hidden h-[46px] items-center gap-2.5 rounded-full border px-5 pr-4 text-[15px] font-bold no-underline md:flex"
          style={{ borderColor: 'rgba(239,230,210,0.35)', color: '#efe6d2' }}
        >
          Get your pass
          <ArrowUpRightIcon width={16} height={16} />
        </a>

        <div className="flex items-center gap-2 md:hidden">
          <a
            href={REGISTER_URL}
            className="flex h-10 items-center px-3.5 text-sm font-extrabold no-underline"
            style={{ background: ACCENT, color: '#140a04' }}
          >
            Get pass
          </a>
          <button
            type="button"
            className="hw-burger flex h-11 w-11 flex-col items-center justify-center gap-1.5 border-0 bg-transparent"
            aria-expanded={menuOpen}
            aria-label="Menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span style={{ transform: menuOpen ? 'translateY(4px) rotate(45deg)' : undefined }} />
            <span style={{ transform: menuOpen ? 'translateY(-4px) rotate(-45deg)' : undefined }} />
          </button>
        </div>
      </header>

      {menuOpen && (
        <div className="hw-menu fixed inset-x-0 top-16 bottom-0 z-[29] flex flex-col justify-between bg-[#0b0c0a] p-5 md:hidden">
          <nav className="flex flex-col" aria-label="Sections">
            {NAV_LINKS.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="hw-zf hw-menu-item border-b border-[#2c2d25] pt-2.5 text-[15vw] leading-[1.25] no-underline"
                style={{ color: '#efe6d2', animationDelay: `${0.15 + i * 0.07}s` }}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <span className="hw-mono text-xs leading-[1.8]" style={{ color: '#9d957f' }}>
            24.10.2026 · 18:00 IST
            <br />
            MPH · AISSMS IOIT, Pune
          </span>
        </div>
      )}

      {/* ============ HERO ============ */}
      <section
        id="top"
        ref={heroRef}
        className="relative -mt-16 h-[780px] flex-shrink-0 overflow-hidden md:-mt-[84px] md:h-[1000px]"
        style={{
          background: 'radial-gradient(ellipse 380px 380px at 75% 28%, #222a1c 0%, #121610 50%, #0b0c0a 85%)',
        }}
      >
        {/* moon */}
        <div
          className="absolute left-[46%] top-[12%] aspect-square w-[26%] max-w-[380px] rounded-full"
          style={{
            background: 'radial-gradient(circle at 38% 36%, #f8f0da 0%, #e6d6ae 55%, #bfa877 100%)',
            boxShadow: '0 0 90px 24px rgba(240,190,110,0.16), 0 0 240px 70px rgba(240,122,26,0.09)',
          }}
          aria-hidden="true"
        >
          <div className="absolute left-[21%] top-[26%] aspect-square w-[17%] rounded-full" style={{ background: 'rgba(150,125,80,0.28)' }} />
          <div className="absolute left-[59%] top-[18%] aspect-square w-[10%] rounded-full" style={{ background: 'rgba(150,125,80,0.22)' }} />
          <div className="absolute left-[52%] top-[55%] aspect-square w-[27%] rounded-full" style={{ background: 'rgba(150,125,80,0.2)' }} />
        </div>

        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          {bats.map((bat) => (
            <BatIcon key={bat.key} style={bat.style} fill={bat.fill} />
          ))}
        </div>

        <svg className="absolute bottom-0 left-0 h-[130px] w-full md:h-[220px]" viewBox="0 0 1440 220" preserveAspectRatio="none" aria-hidden="true">
          <path
            d="M0 150C200 112 360 132 520 148C700 170 860 118 1040 114C1200 110 1320 136 1440 124L1440 220L0 220Z"
            fill="#070806"
          />
          <path
            d="M150 152v-48a22 22 0 0 1 44 0v48zM234 156v-32a15 15 0 0 1 30 0v32zM612 160v-38h8v38zM598 134h36v8h-36zM1180 116v-54h9v54zM1164 80h41v9h-41zM1260 120v-36a17 17 0 0 1 34 0v36z"
            fill="#070806"
          />
        </svg>

        {/* hidden layer, lit by the flashlight */}
        <div className="hw-hidden pointer-events-none absolute inset-0" aria-hidden="true">
          <span className="hw-zf absolute left-[18%] top-[85%] text-[9vw] leading-[1.2] md:top-[72%] md:text-[64px]" style={{ color: '#a3301a', transform: 'rotate(-7deg)', opacity: 0.9 }}>
            Enter if you dare
          </span>
          <span
            className="hw-serif absolute left-[50%] top-[46%] italic md:top-[56%]"
            style={{ color: '#b9ad90', transform: 'rotate(5deg)', fontSize: 'clamp(18px,3vw,30px)' }}
          >
            they&apos;re already inside
          </span>
          <div className="hw-eye" style={{ left: '84%', top: '82%' }}><span /><span /></div>
          <div className="hw-eye" style={{ left: '10%', top: '15%' }}><span /><span /></div>
          <div className="hw-eye" style={{ left: '88%', top: '10%' }}><span /><span /></div>
          <div className="hw-eye" style={{ left: '15%', top: '88%' }}><span /><span /></div>
          <div className="hw-eye" style={{ left: '55%', top: '48%' }}><span /><span /></div>
        </div>
        <div className="hw-dark pointer-events-none absolute inset-0" aria-hidden="true" />

        <div className="absolute left-5 right-5 top-[84px] flex items-center justify-between md:left-[60px] md:right-[60px] md:top-[124px]">
          <span className="hw-mono text-[13px] md:text-[15px]" style={{ color: '#9d957f' }}>
            (TENET presents)
          </span>
          <span className="hw-mono flex items-center gap-2 text-[13px] md:gap-2.5 md:text-[15px]" style={{ color: '#9d957f' }}>
            <span className="h-[7px] w-[7px] rounded-full" style={{ background: ACCENT, animation: 'hw-pulse 1.6s infinite' }} />
            24.10.2026 — 18:00 IST
          </span>
        </div>

        <h1 className="absolute left-5 right-5 top-[112px] m-0 flex flex-col md:left-[60px] md:right-[60px] md:top-[150px]">
          <span
            className="hw-zf block whitespace-nowrap pt-[0.3em] leading-none"
            style={{ color: ACCENT, textShadow: '0 0 50px rgba(240,122,26,0.3)', fontSize: 'clamp(48px,15vw,226px)' }}
          >
            {'HALLOWEEN'.split('').map((ch, i) => (
              <span key={`h-${ch}-${i}`} className="hw-ltr" style={{ animationDelay: `${0.15 + i * 0.05}s` }}>
                {ch}
              </span>
            ))}
          </span>
          <span
            className="hw-zf block whitespace-nowrap self-end pt-[0.3em] leading-none md:mt-[44px]"
            style={{ color: ACCENT, textShadow: '0 0 50px rgba(240,122,26,0.3)', fontSize: 'clamp(64px,21vw,226px)' }}
          >
            {'PARTY'.split('').map((ch, i) => (
              <span key={`p-${ch}-${i}`} className="hw-ltr" style={{ animationDelay: `${0.65 + i * 0.05}s` }}>
                {ch}
              </span>
            ))}
          </span>
        </h1>

        <div className="absolute left-5 top-[400px] flex max-w-[300px] flex-col gap-6 md:left-[60px] md:top-[600px] md:max-w-[440px] md:gap-8">
          <p className="hw-serif m-0 text-[21px] italic leading-[1.4] md:text-[25px]" style={{ color: '#d8cfbb' }}>
            One night in the MPH at AISSMS IOIT. Costumes, chaos, and whatever crawls out after dark.
          </p>
          <div className="flex flex-col gap-2.5 md:flex-row md:items-center md:gap-7">
            <a
              ref={heroMagnetRef}
              href={REGISTER_URL}
              className="hw-cta flex h-[60px] items-center justify-between gap-4 pl-[22px] pr-3 text-lg font-extrabold no-underline md:inline-flex md:h-[68px] md:justify-start md:pl-[34px] md:pr-[30px] md:text-[19px]"
              style={{ background: ACCENT, color: '#140a04' }}
            >
              <span>Get your pass</span>
              <span className="hw-cta-ar grid h-[38px] w-[38px] place-items-center md:h-9 md:w-9" style={{ background: '#140a04', color: ACCENT }}>
                <ArrowUpRightIcon width={18} height={18} />
              </span>
            </a>
            <div className="flex flex-col gap-1">
              <span className="hw-mono text-[13px] md:text-sm" style={{ color: '#9d957f' }}>
                Passes from
              </span>
              <span className="text-[30px] font-extrabold" style={{ color: '#efe6d2' }}>
                ₹150
              </span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between md:bottom-9 md:left-[60px] md:right-[60px]">
          <span className="hw-mono flex items-center gap-1.5 text-xs md:gap-2.5 md:text-sm" style={{ color: '#9d957f' }}>
            <ChevronDownArrowIcon width={12} height={12} style={{ animation: 'hw-float 2.4s ease-in-out infinite' }} />
            <span className="hidden md:inline">Scroll to descend</span>
            <span className="md:hidden">Scroll</span>
          </span>
          <span className="hw-mono hidden text-sm md:inline" style={{ color: '#9d957f' }}>
            Move your light. Something is watching.
          </span>
          <span className="hw-mono text-xs md:text-sm" style={{ color: '#9d957f' }}>
            MPH · AISSMS IOIT
          </span>
        </div>
      </section>

      {/* ============ MARQUEE ============ */}
      <section className="relative flex h-[170px] flex-shrink-0 items-center justify-center overflow-hidden md:h-[280px]" style={{ background: '#0b0c0a' }} aria-label="Event summary">
        <div
          className="hw-band absolute left-[-30px] right-[-30px] top-[62px] overflow-hidden border-y py-2.5 md:left-[-40px] md:right-[-40px] md:top-[104px] md:py-4.5"
          style={{ background: '#1a1b16', borderColor: '#2c2d25', transform: 'rotate(4deg)' }}
        >
          <div className="hw-mq hw-rev">
            <span className="hw-serif whitespace-nowrap pr-6 italic leading-[1.3] text-[30px] md:pr-10 md:text-[50px]" style={{ color: '#9d957f' }}>
              {MARQUEE_WORDS.repeat(6)}
            </span>
          </div>
        </div>
        <div
          className="hw-band absolute left-[-30px] right-[-30px] top-[54px] overflow-hidden py-2 shadow-[0_14px_40px_rgba(0,0,0,0.5)] md:left-[-40px] md:right-[-40px] md:top-[92px] md:py-3.5"
          style={{ background: ACCENT, transform: 'rotate(-4deg)' }}
        >
          <div className="hw-mq">
            <span className="hw-display whitespace-nowrap pr-6 text-[40px] font-black uppercase leading-[1.2] tracking-[0.02em] md:pr-10 md:text-[66px]" style={{ color: '#140a04' }}>
              {TICKER_WORDS.repeat(6)}
            </span>
          </div>
        </div>
      </section>

      {/* ============ THE NIGHT ============ */}
      <section id="night" className="flex flex-shrink-0 flex-col gap-10 px-5 py-20 md:grid md:grid-cols-12 md:gap-6 md:px-[60px] md:py-[150px]" style={{ background: '#0b0c0a' }}>
        <div className="flex flex-col gap-1 md:col-span-5">
          <span className="hw-rv hw-mono text-[13px] md:text-[15px]" style={{ color: ACCENT }}>
            (01) — The night
          </span>
          <div className="hw-rv hw-clip flex flex-row items-end gap-4 md:flex-col md:items-start md:gap-0" style={{ transitionDelay: '.1s' }}>
            <span className="hw-zf text-[clamp(64px,26vw,300px)] leading-[0.95] pt-[0.3em]" style={{ color: '#efe6d2' }}>
              24
            </span>
            <span className="hw-zf pb-3 text-[clamp(40px,12vw,300px)] leading-[0.95] md:pt-[0.12em] md:pb-0" style={{ color: ACCENT }}>
              Oct
            </span>
          </div>
          <span className="hw-rv hw-mono text-[13px] md:text-[15px]" style={{ color: '#9d957f', transitionDelay: '.2s' }}>
            Saturday · 2026
          </span>
        </div>

        <div className="flex flex-col gap-10 md:col-span-6 md:col-start-7 md:gap-14 md:pt-10">
          <p className="hw-rv hw-serif m-0 text-[26px] leading-[1.25] md:text-[40px]" style={{ color: '#efe6d2' }}>
            One night. One hall.{' '}
            <span className="italic" style={{ color: ACCENT }}>
              Every horror you half-believed in
            </span>
            , under one roof at AISSMS IOIT.
          </p>
          <div className="hw-rv flex flex-col border-t" style={{ borderColor: '#2c2d25', transitionDelay: '.15s' }}>
            {FACT_ROWS.map((row) => (
              <div
                key={row.n}
                className="hw-row grid min-h-[80px] grid-cols-[40px_88px_minmax(0,1fr)_24px] items-center border-b md:min-h-[96px] md:grid-cols-[56px_110px_minmax(0,1fr)_30px]"
                style={{ borderColor: '#2c2d25' }}
              >
                <span className="hw-rl hw-mono text-xs md:text-sm" style={{ color: '#9d957f' }}>
                  {row.n}
                </span>
                <span className="hw-rl hw-mono text-xs md:text-sm" style={{ color: '#9d957f' }}>
                  {row.label}
                </span>
                <span className="text-lg font-bold md:text-[26px]">{row.value}</span>
                <ArrowUpRightIcon className="hw-ra" width={20} height={20} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ COUNTDOWN ============ */}
      <section
        className="flex flex-shrink-0 flex-col gap-5 overflow-hidden px-5 py-16 md:gap-6 md:px-[60px] md:py-[115px]"
        style={{ background: ACCENT, color: '#140a04' }}
        aria-label="Countdown to the party"
      >
        <div className="flex items-center justify-between">
          <span className="hw-mono text-[13px] md:text-[15px]">(02) — The veil lifts in</span>
          <span className="hw-mono text-[13px] md:text-[15px]">Sat 24.10 · 18:00 IST</span>
        </div>
        <div className="hw-rv grid grid-cols-2 gap-2 border-t-2 pt-3 md:grid-cols-4 md:gap-6" style={{ borderColor: '#140a04' }}>
          {[
            ['Days', cd.d],
            ['Hours', cd.h],
            ['Minutes', cd.m],
            ['Seconds', cd.s],
          ].map(([label, value]) => (
            <div key={label} className="flex flex-col gap-1">
              <span className="hw-zf text-[clamp(72px,18vw,200px)] leading-none pt-[0.28em]" style={{ color: '#140a04' }}>
                {value}
              </span>
              <span className="hw-mono text-[13px] md:text-[15px]">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ============ PASSES ============ */}
      <section
        id="passes"
        className="flex flex-shrink-0 flex-col gap-14 px-5 py-20 md:gap-[90px] md:px-[60px] md:py-[150px]"
        style={{ background: 'radial-gradient(ellipse 900px 460px at 50% 95%, rgba(138,47,16,0.3), transparent 70%), #0b0c0a' }}
      >
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between md:gap-10">
          <div className="flex flex-col gap-2">
            <span className="hw-rv hw-mono text-[13px] md:text-[15px]" style={{ color: ACCENT }}>
              (03) — Passes
            </span>
            <h2 className="hw-rv hw-clip hw-zf m-0 text-[clamp(44px,10vw,136px)] leading-none pt-[0.3em]" style={{ color: '#efe6d2', transitionDelay: '.1s' }}>
              Pick your
              <br />
              poison
            </h2>
          </div>
          <p className="hw-rv m-0 max-w-[340px] text-[15px] leading-[1.55] md:mb-5 md:text-[17px]" style={{ color: '#9d957f', transitionDelay: '.2s' }}>
            Current rates. Prices may rise closer to the night. Every pass comes with its own QR code, generated the moment you pay.
          </p>
        </div>

        <p className="hw-rv hw-mono -mt-6 text-xs md:-mt-14" style={{ color: ACCENT }}>
          Registration is open —{' '}
          <a href={REGISTER_URL} className="hw-ul">
            tap the ticket below
          </a>{' '}
          to grab your pass.
        </p>

        <TicketCard />
      </section>

      {/* ============ RITUAL ============ */}
      <section
        id="ritual"
        className="flex flex-shrink-0 flex-col gap-11 border-y px-5 py-20 md:gap-20 md:px-[60px] md:py-[140px]"
        style={{ background: '#070806', borderColor: '#1f201a' }}
      >
        <div className="flex flex-col gap-2">
          <span className="hw-rv hw-mono text-[13px] md:text-[15px]" style={{ color: ACCENT }}>
            (04) — The ritual
          </span>
          <h2 className="hw-rv hw-clip hw-zf m-0 text-[clamp(36px,7vw,104px)] leading-none pt-[0.3em]" style={{ color: '#efe6d2', transitionDelay: '.1s' }}>
            From sign-up to scare
          </h2>
        </div>
        <ol className="m-0 grid list-none grid-cols-1 gap-11 p-0 md:grid-cols-3 md:gap-12">
          {RITUAL_STEPS.map((step, i) => (
            <li key={step.n} className="hw-rv flex flex-col gap-5" style={{ transitionDelay: `${i * 0.15}s` }}>
              <span
                className="hw-zf grid h-[90px] w-[90px] place-items-center rounded-full border pt-3.5 text-4xl leading-none md:h-[120px] md:w-[120px] md:text-[54px]"
                style={{ background: '#0b0c0a', borderColor: ACCENT, color: ACCENT, boxSizing: 'border-box' }}
              >
                {step.n}
              </span>
              <span className="text-2xl font-extrabold md:text-[30px]" style={{ color: '#efe6d2' }}>
                {step.title}
              </span>
              <span className="max-w-[340px] text-base leading-[1.55] md:text-lg" style={{ color: '#9d957f' }}>
                {step.body}
              </span>
            </li>
          ))}
        </ol>
      </section>

      {/* ============ FAQ ============ */}
      <section id="faq" className="flex flex-shrink-0 flex-col gap-9 px-5 py-20 md:grid md:grid-cols-12 md:gap-6 md:px-[60px] md:py-[150px]" style={{ background: '#0b0c0a' }}>
        <div className="flex flex-col gap-5 md:sticky md:top-[120px] md:col-span-4 md:h-fit">
          <span className="hw-rv hw-mono text-[13px] md:text-[15px]" style={{ color: ACCENT }}>
            (05) — Whispers
          </span>
          <h2 className="hw-rv hw-clip hw-zf m-0 text-[clamp(48px,7vw,92px)] leading-[1.15] pt-[0.28em]" style={{ color: '#efe6d2', transitionDelay: '.1s' }}>
            Before
            <br />
            you ask
          </h2>
          <p className="hw-rv m-0 text-[15px] leading-[1.55] md:text-[17px]" style={{ color: '#9d957f', transitionDelay: '.2s' }}>
            Still unsure? Reach the TENET team at{' '}
            <a href={`mailto:${CONTACT_EMAIL}`} className="hw-ul">
              {CONTACT_EMAIL}
            </a>
            .
          </p>
        </div>

        <div className="hw-rv flex flex-col border-t md:col-span-7 md:col-start-6" style={{ borderColor: '#2c2d25' }}>
          {FAQS.map((item, i) => {
            const open = openFaq === i;
            return (
              <div key={item.q} className="border-b" style={{ borderColor: '#2c2d25' }}>
                <button
                  type="button"
                  className="hw-fq flex w-full min-h-[84px] items-center justify-between gap-4 border-0 bg-transparent py-4 text-left font-inherit md:grid md:min-h-[104px] md:grid-cols-[80px_minmax(0,1fr)_48px] md:py-0"
                  aria-expanded={open}
                  onClick={() => setOpenFaq(open ? null : i)}
                  style={{ color: '#efe6d2', cursor: 'pointer' }}
                >
                  <span className="hw-mono hidden text-sm md:inline" style={{ color: '#9d957f' }}>
                    Q.0{i + 1}
                  </span>
                  <span className="hw-qt flex-1 text-lg font-bold md:text-[26px]">{item.q}</span>
                  <span
                    className="hw-ic grid h-10 w-10 flex-shrink-0 place-items-center rounded-full border md:h-12 md:w-12"
                    style={{
                      borderColor: open ? ACCENT : '#3b3a2f',
                      background: open ? ACCENT : 'transparent',
                      color: open ? '#140a04' : '#efe6d2',
                      transform: open ? 'rotate(45deg)' : undefined,
                      boxSizing: 'border-box',
                    }}
                  >
                    <PlusIcon width={16} height={16} />
                  </span>
                </button>
                <div className="hw-fa" style={{ gridTemplateRows: open ? '1fr' : '0fr' }}>
                  <div>
                    <p className="m-0 pb-6 pr-0 text-[15px] leading-[1.6] md:pb-8 md:pr-[60px] md:pl-20 md:text-lg" style={{ color: '#9d957f' }}>
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ============ FINAL ============ */}
      <section
        className="relative flex flex-shrink-0 flex-col gap-8 overflow-hidden border-t px-5 py-20 md:grid md:grid-cols-12 md:items-center md:gap-6 md:px-[60px] md:py-[150px]"
        style={{
          background: 'radial-gradient(ellipse 560px 420px at 76% 55%, rgba(240,122,26,0.2), transparent 70%), #070806',
          borderColor: '#1f201a',
        }}
      >
        <div className="flex flex-col gap-7 md:col-span-7 md:gap-10">
          <span className="hw-rv hw-mono text-[13px] md:text-[15px]" style={{ color: ACCENT }}>
            (06) — Last call
          </span>
          <h2 className="hw-rv hw-clip hw-zf m-0 text-[clamp(48px,13vw,170px)] leading-none pt-[0.3em]" style={{ color: '#efe6d2', transitionDelay: '.1s' }}>
            The dead
            <br />
            <span style={{ color: ACCENT }}>don&apos;t wait</span>
          </h2>
          <div className="hw-rv flex flex-col gap-6 md:flex-row md:items-center md:gap-8" style={{ transitionDelay: '.2s' }}>
            <a
              ref={finalMagnetRef}
              href={REGISTER_URL}
              className="hw-cta flex h-[60px] items-center justify-between gap-4 pl-[22px] pr-3 text-lg font-extrabold no-underline md:inline-flex md:h-[68px] md:justify-start md:pl-[34px] md:pr-[30px] md:text-[19px]"
              style={{ background: ACCENT, color: '#140a04' }}
            >
              <span>Get your pass</span>
              <span className="hw-cta-ar grid h-[38px] w-[38px] place-items-center md:h-9 md:w-9" style={{ background: '#140a04', color: ACCENT }}>
                <ArrowUpRightIcon width={18} height={18} />
              </span>
            </a>
            <span className="hw-mono text-[15px] leading-[1.8]" style={{ color: '#9d957f' }}>
              24.10.2026 · 18:00 IST
              <br />
              MPH · AISSMS IOIT, Pune
              <br />
              ₹150 per person
            </span>
          </div>
        </div>
        <div className="hw-rv flex justify-center md:col-span-5 md:col-start-8" style={{ transitionDelay: '.15s' }}>
          <JackOLanternIcon width={220} height={185} className="hw-pk h-[185px] w-[220px] md:h-[370px] md:w-[440px]" />
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="relative flex flex-shrink-0 flex-grow flex-col overflow-hidden border-t" style={{ background: '#0b0c0a', borderColor: '#1f201a' }}>
        <div className="grid grid-cols-1 gap-12 px-5 py-16 md:grid-cols-12 md:gap-6 md:px-[60px] md:py-[110px]">
          <div className="hw-rv flex flex-col gap-8 md:col-span-6">
            <span className="hw-mono text-[15px]" style={{ color: ACCENT }}>
              (07) — Until then
            </span>
            <p className="hw-serif m-0 text-[clamp(32px,7vw,64px)] leading-[1.05]" style={{ color: '#efe6d2' }}>
              See you on the
              <br />
              <span className="italic" style={{ color: ACCENT }}>
                other side.
              </span>
            </p>
            <a
              href={REGISTER_URL}
              className="hw-cta flex h-16 w-fit items-center gap-4 pl-6 pr-3 text-lg font-extrabold no-underline"
              style={{ background: ACCENT, color: '#140a04' }}
            >
              <span>Get your pass</span>
              <span className="hw-cta-ar grid h-[38px] w-[38px] place-items-center" style={{ background: '#140a04', color: ACCENT }}>
                <ArrowUpRightIcon width={18} height={18} />
              </span>
            </a>
          </div>
          <div className="hw-rv flex flex-col gap-4 md:col-span-2 md:col-start-8" style={{ transitionDelay: '.1s' }}>
            <span className="hw-mono text-sm" style={{ color: '#9d957f' }}>
              The night
            </span>
            <div className="flex flex-col gap-2 text-lg leading-[1.4]" style={{ color: '#efe6d2' }}>
              <span>Sat, 24 Oct 2026</span>
              <span>6:00 PM IST</span>
              <span>MPH, AISSMS IOIT</span>
              <span style={{ color: '#9d957f' }}>Pune</span>
            </div>
          </div>
          <div className="hw-rv flex flex-col gap-2.5 md:col-span-3 md:col-start-10" style={{ transitionDelay: '.2s' }}>
            <span className="hw-mono text-sm" style={{ color: '#9d957f' }}>
              Stay in touch
            </span>
            <div className="flex flex-col border-t" style={{ borderColor: '#2c2d25' }}>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="hw-fl text-[17px] font-semibold">
                Instagram · @ioit_tenet
                <ArrowExternalIcon />
              </a>
              <a href={DISCORD_URL} target="_blank" rel="noopener noreferrer" className="hw-fl text-[17px] font-semibold">
                Discord · Join server
                <ArrowExternalIcon />
              </a>
              <a href={`mailto:${CONTACT_EMAIL}`} className="hw-fl text-[17px] font-semibold">
                {CONTACT_EMAIL}
                <ArrowExternalIcon />
              </a>
            </div>
          </div>
        </div>

        <div
          aria-label="TENET"
          className="hw-display flex justify-between whitespace-nowrap px-4 text-[22vw] font-black leading-[0.8] md:px-11 md:text-[460px]"
        >
          {'TENET'.split('').map((ch, i) => (
            <span key={`t-${ch}-${i}`} className="hw-wl">
              {ch}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-col items-center gap-3 border-t px-5 py-6 md:mt-9 md:flex-row md:justify-between md:px-[60px] md:py-6" style={{ borderColor: '#1f201a' }}>
          <span className="hw-mono text-xs md:text-sm" style={{ color: '#9d957f' }}>
            © 2026 TENET · AISSMS IOIT, Pune
          </span>
          <span className="hw-mono hidden text-sm md:inline" style={{ color: '#9d957f' }}>
            Made for the unafraid
          </span>
          <Link href="/register" className="hw-ul hw-mono flex items-center gap-2 text-xs md:text-sm" style={{ color: '#cfc6b2' }}>
            All TENET events ↗
          </Link>
          <a href="#top" className="hw-ul hw-mono flex items-center gap-2 text-xs md:text-sm" style={{ color: '#cfc6b2' }}>
            Back to top ↑
          </a>
        </div>
      </footer>
    </div>
  );
}
