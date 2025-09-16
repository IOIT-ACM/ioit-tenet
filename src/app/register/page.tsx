"use client";

import { FaDiscord, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
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
        { id: "tech", name: "Techfiesta", href: "?d=techfiesta", disabled: false },
        { id: "ctf", name: "Capture the Flag", href: "https://unstop.com/p/tenet-ctf-tenet-aissms-institute-of-information-technology-pune-maharashtra-1557733", disabled: false },
        { id: "drone", name: "Drone Workshop", href: "/techfiesta/drone_workshop", disabled: false },
        { id: "robo-workshop", name: "Robotics Workshop", href: "/techfiesta/robotics_workshop", disabled: false },
        { id: "race", name: "Robo Race", href: "/techfiesta/robo_race", disabled: false },
        { id: "soccer", name: "Robo Soccer", href: "/techfiesta/robo_soccer", disabled: false },
        { id: "bnb", name: "Bluff & Bargain", href: "/techfiesta/bluff_n_bargain", disabled: false },
    ];

    const techFiestaEventIds = ["ctf", "drone", "race", "soccer", "robo-workshop", "bnb"];
    const mainEventIds = ["mun", "hack", "tech", "ctf"];

    let events: EventType[];

    if (isTechFiesta) {
        events = allEvents.filter(event => techFiestaEventIds.includes(event.id));
    } else {
        events = allEvents.filter(event => mainEventIds.includes(event.id));
    }

    if (f && events.some(e => e.id === f)) {
        events = [
            ...events.filter(e => e.id === f),
            ...events.filter(e => e.id !== f)
        ];
    }

    return (
        <main className={`flex py-20 flex-col items-center justify-center min-h-screen px-4 ${isTechFiesta ? 'text-white bg-gradient-to-b from-[#0B0D22] via-[#1A103F] to-[#120C2B]' : 'bg-gray-950 text-white'}`}>
            <div className="text-center my-4">
                <Link href="/" aria-label="Go to homepage">
                    <Image
                        src="/tenet-logo.png"
                        alt="TENET Logo"
                        width={1620}
                        height={1620}
                        className="w-28 h-28 mx-auto mb-4"
                    />
                </Link>
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

            <div className="mt-10 flex gap-6 text-2xl text-gray-400">
                <a href="https://www.instagram.com/ioit_tenet/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition">
                    <FaInstagram />
                </a>
                <a href="https://discord.gg/ZK6b2NkqSB" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500 transition">
                    <FaDiscord />
                </a>
                <a href="https://www.linkedin.com/company/ioit-tenet/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition">
                    <FaLinkedin />
                </a>
                <a href="https://x.com/ioit_acm" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition">
                    <FaXTwitter />
                </a>
                <a href="https://github.com/ioit-acm" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition">
                    <FaGithub />
                </a>
            </div>

            <footer className="mt-10 mb-4 text-sm text-gray-400">
                © {new Date().getFullYear()} IOIT ACM
            </footer>
        </main>
    );
}