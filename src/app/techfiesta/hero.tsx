"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";

const LandingHero: React.FC = () => {
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
        text: 15,
      };

      if (leftPlanetRef.current) {
        gsap.to(leftPlanetRef.current, {
          x: (clientX / window.innerWidth - 0.5) * movementFactors.left,
          y: (clientY / window.innerHeight - 0.5) * movementFactors.left,
          duration: 0.7,
          ease: "power3.out",
        });
      }

      if (rightPlanetRef.current) {
        gsap.to(rightPlanetRef.current, {
          x: (clientX / window.innerWidth - 0.5) * movementFactors.right,
          y: (clientY / window.innerHeight - 0.5) * movementFactors.right,
          duration: 0.7,
          ease: "power3.out",
        });
      }

      if (headerRef.current ?? subHeaderRef.current) {
        gsap.to([headerRef.current, subHeaderRef.current], {
          x: (clientX / window.innerWidth - 0.5) * movementFactors.text,
          y: (clientY / window.innerHeight - 0.5) * movementFactors.text,
          duration: 0.7,
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
      style={{ fontFamily: "BrickSans" }}
      className="relative flex items-center justify-center py-10"
    >
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
          >
            TECHFIESTA
          </h1>
          <p
            ref={subHeaderRef}
            className="mt-2 text-lg text-gray-300 select-none"
          >
            building cool
          </p>
        </div>

        <Image
          ref={leftPlanetRef}
          src="/25/techfiesta/graphics/t-planet-2.png"
          alt="Planet Left"
          width={300}
          height={300}
          className="absolute -bottom-28 -left-32 select-none"
        />

        <Image
          ref={rightPlanetRef}
          src="/25/techfiesta/graphics/t-planet.png"
          alt="Planet Right"
          width={350}
          height={350}
          className="absolute -top-40 -right-32 select-none"
        />
      </div>
    </section>
  );
};

export default LandingHero;
