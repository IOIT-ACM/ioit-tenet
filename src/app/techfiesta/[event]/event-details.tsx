"use client";

import type { TechfiestaData } from "@/config/data/25/techfiesta";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ArrowLeft, ChevronDown, User, Phone, BookOpen, DollarSign, Calendar, Clock, MapPin, HelpCircle, ChevronsRight, Shield } from "lucide-react";
import { cn } from "@/lib/utils";

interface EventDetailsProps {
  event: TechfiestaData;
}

interface AccordionItemProps {
  title: string;
  sectionId: string;
  isOpen: boolean;
  setOpen: (id: string | null) => void;
  children: React.ReactNode;
  icon: React.ReactNode;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, sectionId, isOpen, setOpen, children, icon }) => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      gsap.to(contentRef.current, { height: "auto", duration: 0.5, ease: "power3.inOut" });
    } else {
      gsap.to(contentRef.current, { height: 0, duration: 0.5, ease: "power3.inOut" });
    }
  }, [isOpen]);

  return (
    <div className="w-full rounded-lg border border-cyan-400/30 bg-black/30 shadow-[0_0_10px_rgba(0,240,255,0.1)] backdrop-blur-sm">
      <button
        onClick={() => setOpen(isOpen ? null : sectionId)}
        className="flex w-full items-center justify-between p-4 text-left"
      >
        <div className="flex items-center gap-3">
          <span className="text-cyan-400">{icon}</span>
          <h3 className="text-xl font-semibold text-white" style={{ fontFamily: "BrickSans" }}>
            {title}
          </h3>
        </div>
        <ChevronDown
          className={cn("h-6 w-6 text-cyan-400 transition-transform duration-500", isOpen && "rotate-180")}
        />
      </button>
      <div ref={contentRef} className="overflow-hidden" style={{ height: 0 }}>
        <div className="p-4 pt-0 text-gray-300">{children}</div>
      </div>
    </div>
  );
};

export default function EventDetails({ event }: EventDetailsProps) {
  const [openSection, setOpenSection] = useState<string | null>("overview");
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements = containerRef.current?.children;
    if (elements) {
      gsap.fromTo(
        elements,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
        }
      );
    }
  }, []);

  return (
    <div ref={containerRef} className="flex w-full flex-col items-center gap-8">
      <div className="flex w-full items-center justify-between mt-10">
        <Link
          href="/techfiesta"
          className="flex z-[99999] items-center gap-2 rounded-md border border-pink-500/50 bg-black/30 px-4 py-2 text-pink-400 shadow-[0_0_8px_theme(colors.pink.500)] transition-all hover:scale-105 hover:shadow-[0_0_15px_theme(colors.pink.500)]"
        >
          <ArrowLeft className="h-5 w-5" />
          Back
        </Link>
      </div>
        <h1 className="text-3xl font-bold text-cyan-400 sm:text-4xl" style={{ fontFamily: "BrickSans", textShadow: '0 0 5px #00F0FF' }}>
          TechFiesta
        </h1>

      <h2 className="text-center text-4xl font-bold text-white sm:text-5xl" style={{ fontFamily: "BrickSans" }}>
        {event.title}
      </h2>

      <div className="w-full max-w-4xl space-y-4">
      <p className="mb-6 text-base leading-relaxed sm:text-lg">{event.description}</p>
        <AccordionItem title="Overview" sectionId="overview" isOpen={openSection === "overview"} setOpen={setOpenSection} icon={<BookOpen />}>
          <ul className="space-y-3">
            <li className="flex items-center gap-3"><Calendar className="h-5 w-5 text-pink-400" /><span className="font-semibold">Date:</span> {event.date}</li>
            <li className="flex items-center gap-3"><Clock className="h-5 w-5 text-pink-400" /><span className="font-semibold">Time:</span> {event.time}</li>
            <li className="flex items-center gap-3"><MapPin className="h-5 w-5 text-pink-400" /><span className="font-semibold">Venue:</span> {event.venue}</li>
            <li className="flex items-center gap-3"><DollarSign className="h-5 w-5 text-pink-400" /><span className="font-semibold">Registration Fee:</span> {event.registration_fees}</li>
          </ul>
        </AccordionItem>

        <AccordionItem title="Structure" sectionId="structure" isOpen={openSection === "structure"} setOpen={setOpenSection} icon={<ChevronsRight />}>
          <ul className="list-disc space-y-2 pl-5">
            {event.structure.map((point, index) => <li key={index}>{point}</li>)}
          </ul>
        </AccordionItem>

        <AccordionItem title="FAQs" sectionId="faqs" isOpen={openSection === "faqs"} setOpen={setOpenSection} icon={<HelpCircle />}>
          <div className="space-y-4">
            {event.faqs.map((faq, index) => (
              <div key={index}>
                <p className="font-semibold text-cyan-400">{faq.question}</p>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </AccordionItem>

        <AccordionItem title="Rules" sectionId="rules" isOpen={openSection === "rules"} setOpen={setOpenSection} icon={<Shield />}>
          <ul className="list-decimal space-y-2 pl-5">
            {event.rules.map((rule, index) => <li key={index}>{rule}</li>)}
          </ul>
        </AccordionItem>

        <AccordionItem title="Contact" sectionId="contact" isOpen={openSection === "contact"} setOpen={setOpenSection} icon={<User />}>
          <div className="space-y-3">
            {event.contacts.map((contact, index) => (
              <div key={index} className="flex flex-col sm:flex-row sm:items-center sm:gap-4">
                <p className="flex items-center gap-2 font-semibold"><User className="h-5 w-5 text-pink-400" />{contact.name}</p>
                <a href={`tel:${contact.mobile}`} className="flex items-center gap-2 transition-colors hover:text-cyan-400"><Phone className="h-5 w-5 text-pink-400" />{contact.mobile}</a>
              </div>
            ))}
          </div>
        </AccordionItem>
      </div>

      <div className="mt-6 flex flex-wrap justify-center gap-4">
        {event.manual && (
          <Link target="_blank" href={event.manual} className="rounded-md border border-purple-500 bg-black/30 px-5 py-2 text-purple-400 shadow-[0_0_8px_theme(colors.purple.500)] transition-shadow hover:shadow-[0_0_15px_theme(colors.purple.500)]">
            Rulebook
          </Link>
        )}
        <Link target="_blank" href={event.link ?? "/register?d=techfiesta"} className="rounded-md border border-pink-500 bg-black/30 px-5 py-2 text-pink-400 shadow-[0_0_8px_theme(colors.pink.500)] transition-shadow hover:shadow-[0_0_15px_theme(colors.pink.500)]">
          Register
        </Link>
        <Link href="/techfiesta" className="rounded-md border border-cyan-400 bg-black/30 px-5 py-2 text-cyan-400 shadow-[0_0_8px_theme(colors.cyan.400)] transition-shadow hover:shadow-[0_0_15px_theme(colors.cyan.400)]">
          All Events
        </Link>
      </div>
    </div>
  );
}
