import Image from 'next/image';

export const Target = ({ imgSrc }: { imgSrc: string }) => {
  return (
    <div className='flex h-full w-full items-center justify-center border border-gray-300 p-10'>
      <Image
        src={imgSrc}
        alt='target'
        layout='responsive'
        objectFit='cover'
        width={400}
        height={400}
      />
    </div>
  );
};
