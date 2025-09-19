"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { type TechfiestaData } from "@/config/data/25/techfiesta";
import { ChevronDown } from "lucide-react";

interface TechfiestaHeroProps {
  event?: TechfiestaData;
}

const TechfiestaHero = ({ event }: TechfiestaHeroProps) => {
  const leftPlanetRef = useRef<HTMLImageElement | null>(null);
  const rightPlanetRef = useRef<HTMLImageElement | null>(null);
  const headerRef = useRef<HTMLHeadingElement | null>(null);
  const subHeaderRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;

      const movementFactors = {
        left: 40,
        right: 60,
        header: 20,
        sub: 35,
      };

      const nx = clientX / window.innerWidth - 0.5;
      const ny = clientY / window.innerHeight - 0.5;

      if (leftPlanetRef.current) {
        gsap.to(leftPlanetRef.current, {
          x: nx * movementFactors.left,
          y: ny * movementFactors.left,
          duration: 0.7,
          ease: "power3.out",
        });
      }

      if (rightPlanetRef.current) {
        gsap.to(rightPlanetRef.current, {
          x: nx * movementFactors.right,
          y: ny * movementFactors.right,
          duration: 0.7,
          ease: "power3.out",
        });
      }

      if (headerRef.current) {
        gsap.to(headerRef.current, {
          x: nx * movementFactors.header,
          y: ny * movementFactors.header,
          duration: 0.6,
          ease: "power3.out",
        });
      }

      if (subHeaderRef.current) {
        gsap.to(subHeaderRef.current, {
          x: nx * movementFactors.sub,
          y: ny * movementFactors.sub,
          duration: 0.9,
          ease: "power3.out",
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="flex items-center justify-center py-40 md:py-60 relative">
      <div className="relative">
        <Image
          src="/25/techfiesta/graphics/t-blue-border.png"
          alt="TechFiesta Frame"
          width={400}
          height={400}
          className="mx-auto md:w-[700px] md:h-[400px] w-[300px] h-[200px]"
          style={{ filter: 'drop-shadow(0 0 15px #00F0FF)' }}
          priority
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center">
            <h1
            ref={headerRef}
            className={`font-bold text-center select-none text-[#00F0FF] ${
              typeof window !== "undefined" && window.location.pathname === "/techfiesta"
              ? "text-4xl md:text-9xl"
              : "text-3xl md:text-5xl"
            }`}
            style={{ fontFamily: "BrickSans", textShadow: '0 0 3px #00F0FF, 0 0 5px #00F0FF, 0 0 5px #00F0FF' }}
            >
            {event?.title ?? "TECHFIESTA"}
            </h1>
          <p
            ref={subHeaderRef}
            className="mt-2 md:text-3xl text-lg text-white font-bold select-none"
          >
            Building Cool
          </p>
        </div>

        <Image
          ref={leftPlanetRef}
          src={event?.logo_img ?? "/25/techfiesta/logo/planet2.png"}
          alt="Planet Left"
          width={180}
          height={180}
          className="absolute -bottom-16 -left-16 md:w-auto md:h-[250px] w-auto h-[150px] md:-bottom-28 md:-left-32 select-none"
        />

        <Image
          ref={rightPlanetRef}
          src="/25/techfiesta/logo/planet1.png"
          alt="Planet Right"
          width={200}
          height={200}
          className="absolute -top-20 -right-20 md:w-[350px] md:h-[350px] w-[200px] h-[200px] md:-top-40 md:-right-32 select-none"
        />
      </div>

      <div className="absolute bottom-2 md:bottom-8 w-full flex flex-col items-center animate-bounce">
        <span className="text-sm text-gray-300 mb-1">Scroll Down</span>
        <ChevronDown className="h-5 w-5 md:h-6 md:w-6 text-white opacity-80" />
      </div>
    </section>
  );
};

export default TechfiestaHero;