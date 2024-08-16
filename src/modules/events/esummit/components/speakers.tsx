"use client";
import React from 'react';
import Image from 'next/image';
import type { Speaker } from '@/types'
import { speakers } from '@/config/speakers';

export const Speakers = () => {
  return (
    <section className="py-12 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-8">Meet Our Speakers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {speakers.map((speaker: Speaker) => (
            <div key={speaker.id} className="group perspective">
              <div className="relative w-full h-64 preserve-3d group-hover:rotate-y-180 duration-700">
                {/* Front Side */}
                <div className="absolute w-full h-full backface-hidden bg-gray-900 rounded-lg shadow-lg p-4 text-center flex flex-col justify-center items-center">
                  <div className="w-24 h-24 relative mb-4">
                    <Image
                      src={speaker.image}
                      alt={speaker.name}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-full"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{speaker.name}</h3>
                  <p className="text-gray-400 text-sm">{speaker.title}</p>
                </div>
                {/* Back Side */}
                <div className="absolute w-full h-full rotate-y-180 backface-hidden bg-gray-900 rounded-lg shadow-lg p-4 text-center flex flex-col justify-center items-center">
                  <h3 className="text-lg font-semibold text-white mb-4">{speaker.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">{speaker.bio}</p>
                  <a href={speaker.url} target="_blank" rel="noopener noreferrer" className="text-white flex items-center justify-center">
                  <svg className="w-8 h-8 p-1 bg-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"/></svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
