import Image from 'next/image';
import Link from 'next/link';

interface HeroImageProps {
  backgroundImage: string;
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaText2?: string;
  ctaLink?: string;
  ctaLink2?: string;
}

export const HeroImage: React.FC<HeroImageProps> = ({
  backgroundImage,
  title,
  subtitle,
  ctaText,
  ctaText2,
  ctaLink,
  ctaLink2,
}) => {
  return (
    <div className='hero relative flex h-screen flex-col items-center justify-center px-4 sm:px-6 lg:px-8'>
      <Image
        src={backgroundImage}
        alt={title}
        fill
        style={{ objectFit: 'cover' }}
        quality={100}
        className='z-0 select-none opacity-60'
      />
      <div className='relative z-10 rounded-lg bg-opacity-50 p-6 text-center sm:p-8'>
        <h1 className='mb-4 text-4xl font-bold text-white sm:text-5xl'>
          {title}
        </h1>
        {subtitle && (
          <p className='mb-8 text-base text-white sm:text-lg'>{subtitle}</p>
        )}
        <div className='flex w-full flex-col items-center justify-center gap-3 md:flex-row md:gap-5'>
          {ctaText && ctaLink && (
            <Link
              href={ctaLink}
              className='rounded-md bg-blue-500 px-5 py-2 text-sm text-white transition-colors hover:bg-blue-600 sm:px-6 sm:py-3 sm:text-lg'
            >
              {ctaText}
            </Link>
          )}
          {ctaText2 && ctaLink2 && (
            <Link
              href={ctaLink2}
              className='rounded-md bg-blue-500 px-5 py-2 text-sm text-white transition-colors hover:bg-blue-600 sm:px-6 sm:py-3 sm:text-lg'
            >
              {ctaText2}
            </Link>
          )}
        </div>
      </div>
      <div className='absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-zinc-950/0 to-black sm:h-96' />
    </div>
  );
};
