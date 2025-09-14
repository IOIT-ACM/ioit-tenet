"use client";

import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

interface EventType {
    id: string;
    name: string;
    href: string;
    disabled: boolean;
}

export default function Linktree() {
    const searchParams = useSearchParams();
    const f = searchParams.get("f");
    const d = searchParams.get("d");
    const isTechFiesta = d === "techfiesta";

    const allEvents: EventType[] = [
        { id: "mun", name: "Model United Nations", href: "https://forms.gle/2eQvXreJDHapQRgQ6", disabled: false },
        { id: "hack", name: "Hackathon", href: "https://unstop.com/hackathons/tenet-hack-25-tenet-aissms-institute-of-information-technology-pune-maharashtra-1551923", disabled: false },
        { id: "race", name: "Robo Race", href: "/techfiesta/robo_race", disabled: false },
        { id: "soccer", name: "Robo Soccer", href: "/techfiesta/robo_soccer", disabled: false },
        { id: "robo-workshop", name: "Robotics Workshops", href: "/techfiesta/robotics_workshop", disabled: false },
        { id: "ctf", name: "Capture the Flag", href: "/techfiesta/capture_the_flag", disabled: true },
        { id: "drone", name: "Drone Workshop", href: "/techfiesta/drone_workshop", disabled: true },
        { id: "bnb", name: "Bluff & Bargain", href: "/techfiesta/bluff_n_bargain", disabled: true },
    ];

    const techFiestaEventIds = ["ctf", "drone", "race", "soccer", "robo-workshop", "bnb"];

    let baseEvents: EventType[];
    let otherEvents: EventType[] = [];

    if (isTechFiesta) {
        baseEvents = allEvents.filter(event => techFiestaEventIds.includes(event.id));
        otherEvents = allEvents.filter(event => !techFiestaEventIds.includes(event.id));
    } else {
        baseEvents = allEvents;
    }

    let events = baseEvents;
    if (f && baseEvents.some(e => e.id === f)) {
        events = [
            ...baseEvents.filter(e => e.id === f),
            ...baseEvents.filter(e => e.id !== f)
        ];
    }

    return (
        <main className={`flex py-20 flex-col items-center justify-center min-h-screen px-4 ${isTechFiesta ? 'text-white bg-gradient-to-b from-[#0B0D22] via-[#1A103F] to-[#120C2B]' : 'bg-gray-950 text-white'}`}>
            <div className="text-center my-4">
                <Image
                    src="/tenet-logo.png"
                    alt="TENET Logo"
                    width={1620}
                    height={1620}
                    className="w-28 h-28 mx-auto mb-4"
                />
                {isTechFiesta ? (
                    <>
                        <Link href="/techfiesta" className="text-5xl font-bold text-[#00F0FF] uppercase tracking-widest" style={{ textShadow: '0 0 10px #00F0FF, 0 0 15px #00F0FF' }}>
                            TechFiesta
                        </Link>
                        <h2 className="text-xl font-bold text-white mt-2">
                            TENET 25&apos;
                        </h2>
                    </>
                ) : (
                    <p className="text-gray-400 mt-1">
                        Tech • Robotics • Diplomacy • Hackathon
                    </p>
                )}
            </div>

            <div className="mt-8 w-full max-w-md flex flex-col gap-4">
                {events.map((event) => {
                    const techFiestaButtonClasses = `relative w-full py-3 px-4 rounded-lg border-2 transition font-semibold flex justify-center items-center bg-black/30 border-[#3B82F6] text-white shadow-[0_0_10px_rgba(59,130,246,0.5)] hover:border-[#FF4DBB] hover:shadow-[0_0_15px_rgba(255,77,187,0.7)]`;
                    const defaultButtonClasses = `relative w-full py-3 px-4 rounded-xl border shadow-md transition font-semibold flex justify-center items-center`;

                    let buttonClasses = isTechFiesta ? techFiestaButtonClasses : defaultButtonClasses;

                    if (event.disabled) {
                        buttonClasses += isTechFiesta
                            ? " cursor-not-allowed"
                            : " bg-gray-800 border-gray-700 text-gray-500 cursor-not-allowed opacity-70";
                    } else if (!isTechFiesta) {
                        buttonClasses += " bg-gray-900 border-gray-800 hover:bg-gray-800 hover:border-gray-700";
                    }

                    return event.disabled ? (
                        <div
                            key={event.id}
                            className={buttonClasses + " relative overflow-hidden"}
                        >
                            {event.name}
                            <span
                                className="absolute top-2 -right-8 w-32 text-center bg-yellow-400 text-black text-[9px] font-bold py-2 shadow-md rotate-45"
                            >
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

            {isTechFiesta && otherEvents.length > 0 && (
                <div className="mt-8 w-full max-w-md">
                    <div className="relative flex py-5 items-center">
                        <div className="flex-grow border-t border-gray-600"></div>
                        <span className="flex-shrink mx-4 text-gray-400 font-semibold">Other TENET Events</span>
                        <div className="flex-grow border-t border-gray-600"></div>
                    </div>
                    <div className="flex flex-col gap-4">
                        {otherEvents.map((event) => (
                            <a
                                key={event.id}
                                href={event.href}
                                className="relative w-full py-3 px-4 rounded-xl border shadow-md transition font-semibold flex justify-center items-center bg-gray-900 border-gray-800 hover:bg-gray-800 hover:border-gray-700"
                            >
                                {event.name}
                            </a>
                        ))}
                    </div>
                </div>
            )}

            <div className="mt-10 flex gap-6 text-2xl text-gray-400">
                <a href="https://www.instagram.com/ioit_tenet/" target="_blank" rel="noopener noreferrer" className={isTechFiesta ? "hover:text-[#FF4DBB] transition" : "hover:text-pink-500 transition"}>
                    <FaInstagram />
                </a>
                <a href="https://www.linkedin.com/company/ioit-tenet/" target="_blank" rel="noopener noreferrer" className={isTechFiesta ? "hover:text-[#00F0FF] transition" : "hover:text-blue-500 transition"}>
                    <FaLinkedin />
                </a>
                <a href="https://x.com/ioit_acm" target="_blank" rel="noopener noreferrer" className={isTechFiesta ? "hover:text-[#C77DFF] transition" : "hover:text-sky-400 transition"}>
                    <FaXTwitter />
                </a>
                <a href="https://github.com/ioit-acm" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition">
                    <FaGithub />
                </a>
            </div>

            <footer className={`mt-10 mb-4 text-sm ${isTechFiesta ? 'text-gray-400' : 'text-gray-500'}`}>
                © {new Date().getFullYear()} IOIT ACM
            </footer>
        </main>
    );
}