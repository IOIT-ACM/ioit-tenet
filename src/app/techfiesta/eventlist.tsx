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
        <div ref={containerRef} className="flex flex-col gap-32 mt-20 px-4 md:px-20 py-5">
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
                    <div className="flex flex-col gap-4 max-w-lg">
                        <h3 className="text-2xl font-semibold">{event.title}</h3>
                        <p className="text-lg md:text-xl line-clamp-5 md:line-clamp-none">{event.description}</p>

                        <div className="flex gap-4">
                            {event.slug && (
                                <Link
                                    href={`/techfiesta/${event.slug}`}
                                    className="inline-block"
                                >
                                    <Image
                                        src="/25/techfiesta/graphics/learn-more.png"
                                        alt="Learn More"
                                        width={100}
                                        height={33}
                                        className="w-24 h-10 transition transform hover:scale-105"
                                    />
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            ))}
            {/* Footer */}
            <footer className="mt-12 border w-full text-center  border-gray-700  px-20 py-10">
                <div className={"flex flex-col md:flex-row gap-10  justify-around"}>
                    {events[0]?.contacts?.map(contact => <div key={contact.name} className="flex flex-col gap-2">
                        <p className="text-xl" style={{ fontFamily: 'BrickSans' }}>{contact.name}</p>
                        <Link href={`tel:${contact.mobile.split(" ").join("")}`} className="text-xl">{contact.mobile}</Link>
                    </div>)}
                </div>
            </footer>
        </div>
    );
};

export default EventList;
