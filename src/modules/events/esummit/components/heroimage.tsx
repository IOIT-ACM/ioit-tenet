"use client";
import React from 'react';
import Image from 'next/image';

interface HeroImageProps {
  backgroundImage: string;
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
}

export const HeroImage: React.FC<HeroImageProps> = ({
  backgroundImage,
  title,
  subtitle,
  ctaText,
  ctaLink,
}) => {
  return (
    <div className="relative hero h-screen flex flex-col justify-center items-center">
      <Image
        src={backgroundImage}
        alt={title}
        layout="fill"
        objectFit="cover"
        quality={100}
        className="z-0 opacity-60"
      />
      <div className="relative z-10 bg-opacity-50 p-8 rounded-lg text-center">
        <h1 className="text-white text-5xl font-bold mb-4">{title}</h1>
        {subtitle && <p className="text-white text-lg mb-8">{subtitle}</p>}
        {ctaText && ctaLink && (
          <a
            href={ctaLink}
            className="text-white bg-blue-500 px-6 py-3 rounded-md text-lg hover:bg-blue-600 transition-colors"
          >
            {ctaText}
          </a>
        )}
      </div>
      
    </div>
    
  );
};
