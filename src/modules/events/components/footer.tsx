import React from "react";
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const sections = [
  {
    title: "Explore",
    links: [
      { name: "Home", href: "/" },
      { name: "Events", href: "/24/events" },
      { name: "Speakers", href: "/24/speakers" },
      { name: "Game", href: "/game" },
    ],
  },
  {
    title: "Get Involved",
    links: [
      { name: "Register", href: "/register" },
      { name: "Den of Code", href: "/denofcode" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Contact", href: "mailto:ioit.tenet@aissmsioit.org" },
    ],
  },
];

const socialLinks = [
  { icon: <FaInstagram className="size-5" />, href: "https://www.instagram.com/ioit_tenet/", label: "Instagram" },
  { icon: <FaLinkedin className="size-5" />, href: "https://www.linkedin.com/company/ioit-tenet/", label: "LinkedIn" },
  { icon: <FaWhatsapp className="size-5" />, href: "https://chat.whatsapp.com/HUYXxh75M618GNCExQ3NPZ", label: "WhatsApp" },
  { icon: <FaXTwitter className="size-5" />, href: "https://x.com/ioit-acm", label: "Twitter" },
];

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-12 text-white">
      <div className="container mx-auto">
        {/* ---- Desktop Footer ---- */}
        <div className="hidden lg:flex w-full flex-col justify-between gap-12 lg:flex-row lg:items-start">
          <div className="flex w-full flex-col gap-6 lg:w-1/3">
            <h2 className="text-2xl font-bold">TENET 2025</h2>
            <p className="max-w-md text-sm text-gray-400">
              AISSMS IOIT’s annual tech fest — where innovation meets ambition.
              Explore events, connect with leaders, and shape the future of
              technology.
            </p>
            <ul className="flex items-center space-x-6 text-gray-400">
              {socialLinks.map((social, idx) => (
                <li key={idx} className="hover:text-white">
                  <a href={social.href} aria-label={social.label}>
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Sections */}
          <div className="grid w-full gap-10 md:grid-cols-3 lg:w-2/3 lg:gap-20">
            {sections.map((section, idx) => (
              <div key={idx}>
                <h3 className="mb-4 text-lg font-semibold">{section.title}</h3>
                <ul className="space-y-3 text-sm text-gray-400">
                  {section.links.map((link, linkIdx) => (
                    <li key={linkIdx} className="hover:text-white">
                      <a href={link.href}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* ---- Mobile Footer ---- */}
        <div className="lg:hidden text-center">
          <h2 className="text-xl font-bold">TENET 2025</h2>
          <div className="my-6 flex flex-wrap justify-center gap-4 text-sm">
            {sections.flatMap((section) => section.links).map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className="text-gray-400 hover:text-white transition"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Socials */}
          <div className="mb-6 flex justify-center gap-6">
            {socialLinks.map((social, i) => (
              <a
                key={i}
                href={social.href}
                aria-label={social.label}
                className="text-gray-400 hover:text-white transition"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 text-xs text-gray-400 md:flex-row">
          <p> © {new Date().getFullYear()} IOIT ACM</p>
        </div>
      </div>
    </footer>
  );
};
