"use client";

import React from "react";
import Image from "next/image";

const LandingHero: React.FC = () => {
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

        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white">TECHFIESTA</h1>
        </div>

        <Image
          src="/25/techfiesta/graphics/t-planet-2.png"
          alt="Planet Left"
          width={300}
          height={300}
          className="absolute -bottom-28 -left-32"
        />

        <Image
          src="/25/techfiesta/graphics/t-planet.png"
          alt="Planet Right"
          width={350}
          height={350}
          className="absolute -top-40 -right-32"
        />
      </div>
    </section>
  );
};

export default LandingHero;
