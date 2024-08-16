"use client";
import React from 'react';
import Image from 'next/image';
import { sponsor } from '@/config/sponsors';


export const Sponsors = () => {
  return (
    <section className="py-12 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-8">Our Sponsors</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {sponsor.map((sponsor, index) => (
            <a
              key={index}
              href={sponsor.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-4 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <div className="w-32 h-32 flex items-center justify-center rounded-full overflow-hidden bg-white p-2">
                <Image
                  src={sponsor.logoUrl}
                  alt={sponsor.name}
                  width={128}
                  height={128}
                  objectFit="contain"
                  className="rounded-full"
                />
              </div>
              <p className="text-center text-white mt-4">{sponsor.name}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
