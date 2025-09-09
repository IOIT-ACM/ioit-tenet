"use client";

import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import Image from "next/image";
import { FaXTwitter } from "react-icons/fa6";

export default function TenetPage() {
    const events = [
        { name: "Model United Nations", href: "https://forms.gle/2eQvXreJDHapQRgQ6", disabled: false },
        { name: "Hackathon", href: "#", disabled: true },
        { name: "Capture the Flag", href: "#", disabled: true },
        { name: "Drone Workshop", href: "#", disabled: true },
        { name: "Robo War", href: "#", disabled: true },
    ];

    return (
        <main className="flex flex-col items-center justify-center min-h-screen bg-gray-950 text-white px-4">
            <div className="text-center">
                <Image
                    src="/tenet-logo.png"
                    alt="TENET Logo"
                    width={1620}
                    height={1620}
                    className="w-28 h-28 mx-auto mb-4"
                />
                <p className="text-gray-400 mt-1">
                    Tech • Robotics • Diplomacy • Hackathon
                </p>
            </div>

            <div className="mt-8 w-full max-w-md flex flex-col gap-4">
                {events.map((event) => {
                    const buttonClasses = `relative w-full py-3 px-4 rounded-xl border shadow-md transition font-semibold flex justify-center items-center
                        ${event.disabled
                            ? "bg-gray-800 border-gray-700 text-gray-500 cursor-not-allowed opacity-70"
                            : "bg-gray-900 border-gray-800 hover:bg-gray-800 hover:border-gray-700"
                        }`;

                    return event.disabled ? (
                        <div
                            key={event.name}
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
                        <a key={event.name} href={event.href} className={buttonClasses}>
                            {event.name}
                        </a>
                    );
                })}
            </div>

            <div className="mt-10 flex gap-6 text-2xl text-gray-400">
                <a
                    href="https://www.instagram.com/ioit_tenet/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-pink-500 transition"
                >
                    <FaInstagram />
                </a>
                <a
                    href="https://chat.whatsapp.com/HUYXxh75M618GNCExQ3NPZ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-green-500 transition"
                >
                    <FaWhatsapp />
                </a>
                <a
                    href="https://www.linkedin.com/company/ioit-tenet/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-500 transition"
                >
                    <FaLinkedin />
                </a>
                <a
                    href="https://x.com/ioit_acm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-sky-400 transition"
                >
                    <FaXTwitter />
                </a>
                <a
                    href="https://github.com/ioit-acm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-300 transition"
                >
                    <FaGithub />
                </a>
                <a
                    href="mailto:ioit.tenet@aissmsioit.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-red-400 transition"
                >
                    <FaEnvelope />
                </a>
            </div>

            {/* Footer */}
            <footer className="mt-10 text-sm text-gray-500">
                © {new Date().getFullYear()} TENET • AISSMS IOIT ACM Student Chapter
            </footer>
        </main>
    );
}
