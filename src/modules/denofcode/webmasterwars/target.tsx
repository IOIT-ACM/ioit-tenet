import Image from 'next/image';

export const Target = ({ imgSrc }: { imgSrc: string }) => {
  return (
    <div className='flex h-full w-full items-center justify-center border border-gray-300 bg-white p-8'>
      <Image
        src={imgSrc}
        alt='target'
        layout='responsive'
        objectFit='contain'
        width={300}
        height={400}
        style={{ maxHeight: '600px' }}
      />
    </div>
  );
};
