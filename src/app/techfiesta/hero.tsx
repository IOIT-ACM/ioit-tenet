"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import Link from "next/link";
import { type TechfiestaData } from "@/config/data/25/techfiesta";
import { ChevronDown } from "lucide-react";

interface TechfiestaHeroProps {

  event?: TechfiestaData
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
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section

      className="flex items-center justify-center py-80"
    >
      <div
        className="flex fixed top-0 left-0 w-fit items-center justify-center gap-1 md:gap-3 md:m-8 m-5"
      >
        <Link href={'/'} className="h-10 w-10 md:h-14 md:w-14">
          <Image
            className="h-full w-full rounded-lg transition-transform hover:scale-105"
            src={'/tenet-white-logo.png'}
            alt="Tenet Logo"
            height={70}
            width={70}
          />
        </Link>
        <Link
          href={'https://ioit.acm.org'}
          className="h-10 w-10 md:h-14 md:w-14"
        >
          <Image
            className="h-full w-full rounded-lg transition-transform hover:scale-105"
            src={'/acm.png'}
            alt="ACM Logo"
            height={70}
            width={70}
          />
        </Link>
      </div>
      <div className="relative">
        <Image
          src="/25/techfiesta/graphics/t-blue-border.png"
          alt="TechFiesta Frame"
          width={600}
          height={600}
          className="mx-auto"
          priority
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1
            ref={headerRef}
            className="text-5xl font-bold text-white select-none"
            style={{
              fontFamily: "BrickSans"
            }}
          >
            {event?.title ?? "TECHFIESTA"}
          </h1>
          <p
            ref={subHeaderRef}
            className="mt-2 text-lg text-gray-300 select-none"
          >
            Building Cool
          </p>
        </div>

        <Image
          ref={leftPlanetRef}
          src={event?.logo_img ?? "/25/techfiesta/logo/planet2.png"}
          alt="Planet Left"
          width={300}
          height={300}
          className="absolute -bottom-28 -left-32 select-none"
        />

        <Image
          ref={rightPlanetRef}
          src="/25/techfiesta/logo/planet1.png"
          alt="Planet Right"
          width={350}
          height={350}
          className="absolute -top-40 -right-32 select-none"
        />
      </div>
      <div className="absolute bottom-6 animate-bounce">
        <ChevronDown size={32} className="text-white opacity-70" />
      </div>
    </section>
  );
};

export default TechfiestaHero;
