import Image from 'next/image';
import Link from 'next/link';
import { InstagramIcon, LinkedinIcon, XIcon } from './icons';

const exploreLinks = [
  { label: 'Home', href: '/techfiesta' },
  { label: 'Events', href: '/techfiesta#events' },
  { label: 'Schedule', href: '/techfiesta#schedule' },
];

const involvedLinks = [
  { label: 'Register', href: '#register' },
  { label: 'Sponsorship', href: 'mailto:ioit.tenet@aissmsioit.org' },
];

const resourceLinks = [{ label: 'Contact', href: 'mailto:ioit.tenet@aissmsioit.org' }];

export default function TechfiestaFooter() {
  return (
    <footer className="w-full bg-black px-5 pt-14 text-white md:px-[120px] md:pt-14">
      <div className="grid grid-cols-1 gap-10 pb-10 md:grid-cols-[1.6fr_1fr_1fr_1fr] md:gap-12">
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-4">
            <Image src="/26/techfiesta/logo/tenet.png" alt="TENET" width={44} height={49} />
            <div className="h-10 w-0.5 bg-[#2a2a40]" />
            <Image src="/26/techfiesta/graphics/techfiesta-wordmark.png" alt="TechFiesta" width={210} height={40} />
          </div>
          <p className="max-w-[400px] text-base leading-[1.55] text-[#b4b6d6] md:text-[17px]">
            TechFiesta is part of TENET &rsquo;26, the flagship event of the AISSMS IOIT ACM Student Chapter. 23 and 24
            October 2026.
          </p>
          <div className="flex gap-3">
            <a
              href="https://www.instagram.com/ioit_tenet/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="tf-f-soc flex h-11 w-11 items-center justify-center border-2 border-[#2a2a40] text-white"
            >
              <InstagramIcon />
            </a>
            <a
              href="https://www.linkedin.com/company/ioit-tenet/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Linkedin"
              className="tf-f-soc flex h-11 w-11 items-center justify-center border-2 border-[#2a2a40] text-white"
            >
              <LinkedinIcon />
            </a>
            <a
              href="https://x.com/ioit_acm"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
              className="tf-f-soc flex h-11 w-11 items-center justify-center border-2 border-[#2a2a40] text-white"
            >
              <XIcon />
            </a>
          </div>
        </div>

        <FooterColumn title="Explore" links={exploreLinks} />
        <FooterColumn title="Get Involved" links={involvedLinks} />
        <FooterColumn title="Resources" links={resourceLinks} />
      </div>

      <div className="h-px bg-[#2a2a40]" />

      <div className="flex flex-col items-center justify-between gap-4 py-6 md:h-[92px] md:flex-row md:py-0">
        <div className="text-sm text-[#9a9cc0]">&copy; 2026 TENET · AISSMS IOIT ACM Student Chapter</div>
        <div className="flex gap-2">
          <Image src="/26/techfiesta/logo/ti.png" alt="AISSMS IOIT" width={44} height={44} />
          <Image src="/26/techfiesta/logo/acm.png" alt="ACM" width={44} height={44} />
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div className="flex flex-col gap-4">
      <div className="text-xl font-semibold text-white md:text-2xl" style={{ fontFamily: 'var(--font-pixelify)' }}>
        {title}
      </div>
      <div className="flex flex-col gap-3.5">
        {links.map((link) => (
          <Link key={link.label} href={link.href} className="tf-f-a text-base leading-tight text-[#b4b6d6] md:text-[17px]">
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
