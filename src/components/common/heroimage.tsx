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
    <div className='hero relative flex h-screen flex-col items-center justify-center'>
      <Image
        src={backgroundImage}
        alt={title}
        fill
        style={{ objectFit: 'cover' }}
        quality={100}
        className='z-0 opacity-60'
      />
      <div className='relative z-10 rounded-lg bg-opacity-50 p-8 text-center'>
        <h1 className='mb-4 text-5xl font-bold text-white'>{title}</h1>
        {subtitle && <p className='mb-8 text-lg text-white'>{subtitle}</p>}
        {ctaText && ctaLink && (
          <a
            href={ctaLink}
            className='rounded-md bg-blue-500 px-6 py-3 text-lg text-white transition-colors hover:bg-blue-600'
          >
            {ctaText}
          </a>
        )}
      </div>

      <div className='absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-zinc-950/0 to-black' />
    </div>
  );
};
