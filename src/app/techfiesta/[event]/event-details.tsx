import Image from 'next/image';
import Link from 'next/link';
import { type TechfiestaEvent } from '@/config/data/26/techfiesta';
import { ArrowDiagIcon, PdfIcon } from '../components/icons';
import Reveal from '../components/reveal';
import DecryptText from '../components/decrypt-text';

interface EventDetailsProps {
  event: TechfiestaEvent;
}

export default function EventDetails({ event }: EventDetailsProps) {
  const detail = event.detail;
  if (!detail) {
    return <ComingSoon event={event} />;
  }

  return (
    <div className="flex w-full flex-col">
      <section className="relative w-full bg-white">
        <div className="relative h-[460px] w-full overflow-hidden sm:h-[560px] md:h-[680px]">
          <Image src="/26/techfiesta/graphics/hero-bg.png" alt="" fill className="object-cover object-bottom" />
          <div className="absolute inset-0 bg-[#050530]/50" />
          <div className="absolute inset-0 flex flex-col items-start justify-center gap-6 px-5 pb-[clamp(56px,13vw,140px)] sm:px-10 md:flex-row md:items-center md:gap-11 md:px-[120px] md:pb-0">
            <div className="tf-art flex h-[140px] w-[180px] flex-none items-center justify-center border-4 border-white p-3.5 sm:h-[200px] sm:w-[260px]">
              {event.logo === '#' ? (
                <span className="text-2xl font-bold text-[#050530]">CTF</span>
              ) : (
                <Image src={event.logo} alt={`${event.title} logo`} width={260} height={200} className="block h-full w-full object-contain" />
              )}
            </div>
            <Reveal className="flex flex-col gap-4">
              <h1
                className="text-5xl font-bold leading-[0.95] text-white sm:text-7xl md:text-[112px]"
                style={{ fontFamily: 'var(--font-pixelify)', textShadow: '6px 6px 0 #050530' }}
              >
                <DecryptText text={event.title} />
              </h1>
              <div className="text-xl font-medium leading-tight text-white sm:text-2xl" style={{ textShadow: '3px 3px 0 #050530' }}>
                {event.tagline}
              </div>
              <div className="flex flex-wrap gap-3">
                <div
                  className="flex h-11 items-center bg-white px-4 text-lg font-bold tracking-[0.06em] tabular-nums text-[#050530]"
                  style={{ fontFamily: 'var(--font-space-grotesk)' }}
                >
                  {event.dateLabel.toUpperCase()}
                </div>
                <div
                  className="flex h-11 items-center bg-[#0000c8] px-4 text-lg font-semibold tracking-[0.08em] text-white"
                  style={{ fontFamily: 'var(--font-pixelify)' }}
                >
                  TENET &rsquo;26 · TECHFIESTA
                </div>
                {detail.rulebook && (
                  <a
                    href={detail.rulebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tf-btn-k flex h-11 items-center gap-2.5 px-4 text-base font-semibold"
                  >
                    <PdfIcon className="tf-arrow-nudge" /> Rulebook (PDF)
                  </a>
                )}
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

      <section className="grid w-full grid-cols-1 gap-16 bg-white px-5 pb-14 pt-[clamp(100px,27vw,450px)] sm:px-10 md:grid-cols-[minmax(0,1fr)_420px] md:gap-20 md:px-[120px] md:pb-16">
        <div className="flex flex-col gap-16">
          <Reveal className="flex flex-col gap-4">
            <SectionHeading>About the event</SectionHeading>
            {detail.about.map((paragraph) => (
              <p key={paragraph} className="text-lg leading-[1.6] text-[#2b2d5c] sm:text-xl">
                {paragraph}
              </p>
            ))}
          </Reveal>

          <Reveal className="flex flex-col">
            <SectionHeading className="mb-3">How it works</SectionHeading>
            {detail.howItWorks.map((step, index) => (
              <div key={step.title} className="flex items-start gap-5 border-t-[3px] border-[#050530] py-6 sm:gap-7">
                <div
                  className="w-12 flex-none text-2xl font-bold leading-none text-[#0000c8] sm:w-16 sm:text-4xl"
                  style={{ fontFamily: 'var(--font-space-grotesk)' }}
                >
                  {String(index + 1).padStart(2, '0')}
                </div>
                <div className="flex flex-col gap-2">
                  <div className="text-xl font-semibold leading-[1.15] sm:text-[26px]" style={{ fontFamily: 'var(--font-pixelify)' }}>
                    {step.title}
                  </div>
                  <div className="text-base leading-[1.5] text-[#2b2d5c] sm:text-lg">{step.description}</div>
                </div>
              </div>
            ))}
            <div className="border-t-[3px] border-[#050530]" />
          </Reveal>

          <Reveal className="flex flex-col">
            <SectionHeading className="mb-3">Registration</SectionHeading>
            {detail.registration.map((tier) => (
              <div key={tier.label} className="flex items-center justify-between gap-6 border-t-2 border-[#050530] py-4">
                <div className="flex flex-col gap-1">
                  <span className="text-lg font-semibold sm:text-xl" style={{ fontFamily: 'var(--font-pixelify)' }}>
                    {tier.label}
                  </span>
                  <span className="text-sm text-[#2b2d5c] sm:text-base">{tier.meta}</span>
                </div>
                <span
                  className="flex-none text-xl font-bold text-[#0000c8] sm:text-2xl"
                  style={{ fontFamily: 'var(--font-space-grotesk)' }}
                >
                  {tier.price}
                </span>
              </div>
            ))}
            <div className="border-t-2 border-[#050530]" />
          </Reveal>

          <Reveal className="flex flex-col gap-4">
            <SectionHeading className="mb-1">Key rules</SectionHeading>
            {detail.keyRules.map((rule) => (
              <div key={rule} className="flex items-start gap-4">
                <div className="mt-2 h-3.5 w-3.5 flex-none bg-[#0000c8]" />
                <div className="text-base leading-[1.55] text-[#2b2d5c] sm:text-lg">{rule}</div>
              </div>
            ))}
          </Reveal>

          <Reveal className="flex flex-col gap-5">
            <SectionHeading>{detail.prizePool ? 'Winners and prizes' : 'Certification'}</SectionHeading>
            {detail.prizePool && (
              <div className="flex items-baseline gap-4">
                <span
                  className="text-base font-semibold tracking-[0.16em] text-[#2b2d5c]"
                  style={{ fontFamily: 'var(--font-pixelify)' }}
                >
                  TOTAL PRIZE POOL
                </span>
                <span className="text-3xl font-bold tabular-nums sm:text-4xl" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                  {detail.prizePool}
                </span>
              </div>
            )}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {detail.prizes.map((prize) => (
                <div key={prize.label} className="flex flex-col gap-3 border-[3px] border-[#050530] bg-[#eef0ff] p-6">
                  <div
                    className="text-base font-semibold uppercase tracking-[0.16em] text-[#0000c8]"
                    style={{ fontFamily: 'var(--font-pixelify)' }}
                  >
                    {prize.label}
                  </div>
                  <div className="text-base leading-[1.5]">{prize.description}</div>
                </div>
              ))}
            </div>
            {detail.certificateNote && <p className="text-base leading-[1.5] text-[#2b2d5c]">{detail.certificateNote}</p>}
          </Reveal>
        </div>

        <Reveal delay={100} className="flex flex-col gap-10">
          <div id="register" className="tf-card flex flex-col border-[3px] border-[#050530] bg-white p-7">
            <div
              className="mb-2 text-lg font-semibold tracking-[0.14em] text-[#0000c8]"
              style={{ fontFamily: 'var(--font-pixelify)' }}
            >
              QUICK FACTS
            </div>
            <div className="flex flex-col">
              {detail.quickFacts.map((fact) => (
                <div key={fact.label} className="flex items-baseline justify-between gap-4 border-b-2 border-[#050530] py-4">
                  <span className="text-sm font-medium uppercase tracking-[0.1em] text-[#2b2d5c]">{fact.label}</span>
                  <span
                    className="text-right text-lg font-semibold tabular-nums"
                    style={{ fontFamily: 'var(--font-space-grotesk)' }}
                  >
                    {fact.value}
                  </span>
                </div>
              ))}
            </div>
            <Link
              href={event.registerLink ?? '/register?d=techfiesta'}
              target={event.registerLink?.startsWith('http') ? '_blank' : undefined}
              rel={event.registerLink?.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="tf-btn-b mt-7 flex h-16 items-center justify-center gap-3.5 text-xl font-semibold"
            >
              Register for {event.title} <ArrowDiagIcon className="tf-arrow-nudge" />
            </Link>
            {detail.contacts.length > 0 && (
              <div className="mt-6 flex flex-col gap-1.5">
                <div className="mb-0.5 text-sm font-medium uppercase tracking-[0.1em] text-[#2b2d5c]">Questions? Contact</div>
                {detail.contacts.map((contact) => (
                  <a
                    key={contact.name}
                    href={`tel:${contact.mobile.replace(/\s+/g, '')}`}
                    className="flex justify-between gap-3 text-base leading-[1.4]"
                  >
                    <span className="font-semibold">{contact.name}</span>
                    <span className="tabular-nums text-[#2b2d5c]" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                      {contact.mobile}
                    </span>
                  </a>
                ))}
              </div>
            )}
          </div>

          {detail.rulebook && (
            <div className="flex flex-col gap-3.5 border-[3px] border-[#050530] bg-[#050530] p-7 text-white">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 flex-none items-center justify-center bg-[#cfd5ff] text-[#050530]">
                  <PdfIcon />
                </div>
                <div className="flex flex-col gap-1">
                  <div className="text-sm font-semibold tracking-[0.16em] text-[#8c96ff]" style={{ fontFamily: 'var(--font-pixelify)' }}>
                    RULEBOOK
                  </div>
                  <div className="text-sm text-[#dfe3ff]" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                    PDF
                  </div>
                </div>
              </div>
              <div className="text-2xl font-semibold leading-[1.1]" style={{ fontFamily: 'var(--font-pixelify)' }}>
                Read the full rules
              </div>
              <div className="text-base leading-[1.5] text-[#dfe3ff]">Rules, scoring, robot specifications and penalties.</div>
              <a
                href={detail.rulebook}
                target="_blank"
                rel="noopener noreferrer"
                className="tf-btn-w mt-1.5 flex h-14 items-center justify-center gap-3 text-lg font-semibold"
              >
                <PdfIcon className="tf-arrow-nudge" /> Download rulebook
              </a>
            </div>
          )}
        </Reveal>
      </section>
    </div>
  );
}

function SectionHeading({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <h2 className={`text-3xl font-bold leading-none sm:text-[48px] ${className}`} style={{ fontFamily: 'var(--font-pixelify)' }}>
      {children}
    </h2>
  );
}

function ComingSoon({ event }: { event: TechfiestaEvent }) {
  return (
    <div className="flex min-h-[60vh] w-full flex-col items-center justify-center gap-6 px-5 py-24 text-center">
      <h1 className="text-4xl font-bold sm:text-6xl" style={{ fontFamily: 'var(--font-pixelify)' }}>
        {event.title}
      </h1>
      <p className="max-w-xl text-lg text-[#2b2d5c]">
        Full details for this event are on the way. In the meantime, {event.cardDescription.toLowerCase()}
      </p>
      <Link href="/techfiesta" className="tf-btn-k flex h-12 items-center px-6 text-lg font-semibold">
        Back to all events
      </Link>
    </div>
  );
}
