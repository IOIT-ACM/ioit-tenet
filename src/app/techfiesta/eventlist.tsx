"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { data as events } from "@/config/data/25/techfiesta";
import { type TechfiestaData } from "@/config/data/25/techfiesta";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

const EventList: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const items = containerRef.current?.querySelectorAll(".event-item");

        items?.forEach((item, index) => {
            gsap.fromTo(
                item,
                { x: index % 2 === 0 ? -300 : 300, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 1.2,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: item,
                        start: "top 80%",
                        end: "bottom 60%",
                        toggleActions: "play none none reverse",
                    },
                }
            );
        });
    }, []);

    return (
        <div ref={containerRef} className="flex flex-col gap-32 mt-20 px-4 md:px-20 py-5 w-full max-w-7xl">
            {events.map((event: TechfiestaData, index) => (
                <div
                    key={event.slug}
                    className={cn("event-item flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16", index % 2 == 0 ? "md:flex-row" : "md:flex-row-reverse")}
                >
                    <div className="flex items-center justify-center w-64 h-64 md:w-[400px] md:h-[280px] rounded-lg overflow-hidden">
                        <Image
                            src={event.logo_img !== "#" ? event.logo_img : "/25/techfiesta/graphics/placeholder.png"}
                            alt={event.title}
                            width={400}
                            height={400}
                            className="w-full h-full object-contain"
                            priority={index === 0}
                        />
                    </div>
                    <div className="flex flex-col gap-4 max-w-lg text-center md:text-left">
                        <h3 className="text-3xl font-bold text-white" style={{ fontFamily: 'BrickSans', textShadow: '0 0 5px #FFFFFF' }}>{event.title}</h3>
                        <p className="text-lg md:text-xl line-clamp-5 md:line-clamp-none text-gray-100">{event.description}</p>

                        <div className="flex gap-4 justify-center md:justify-start">
                            {event.slug && (
                                <Link
                                    href={`/techfiesta/${event.slug}`}
                                    className="inline-block transition-transform hover:scale-105"
                                >
                                    <Image
                                        src="/25/techfiesta/graphics/learn-more.png"
                                        alt="Learn More"
                                        width={100}
                                        height={33}
                                        className="w-24 h-10"
                                        style={{ filter: 'drop-shadow(0 0 8px #FF4DBB)' }}
                                    />
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            ))}
            <footer className="mt-20 w-full text-center p-8 md:p-10 bg-white/5 backdrop-blur-lg rounded-lg border border-[#00F0FF]/50 shadow-[0_0_15px_rgba(0,240,255,0.3)]">
                <div className="flex flex-col md:flex-row gap-6 sm:gap-10 justify-around items-center">
                    <div className="flex flex-col gap-1 sm:gap-2">
                        <p className="text-base sm:text-lg font-bold text-white" style={{ fontFamily: 'BrickSans' }}>Krushi Soni</p>
                        <Link href="tel:+917249453073" className="text-sm sm:text-base text-gray-300 hover:text-cyan-400 transition-colors">
                            +91 72494 53073
                        </Link>
                    </div>
                    <div className="flex flex-col gap-1 sm:gap-2">
                        <p className="text-base sm:text-lg font-bold text-white" style={{ fontFamily: 'BrickSans' }}>Nilay Bhandari</p>
                        <Link href="tel:+919876543210" className="text-sm sm:text-base text-gray-300 hover:text-cyan-400 transition-colors">
                            +91 98765 43210
                        </Link>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default EventList;