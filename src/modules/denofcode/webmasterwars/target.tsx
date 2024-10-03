import Image from 'next/image';

export const Target = ({ imgSrc }: { imgSrc: string }) => {
  return (
<div className='flex h-full w-full items-center justify-center border border-gray-300 p-8 bg-white'>
  <Image
    src={imgSrc}
    alt='target'
    layout='responsive'
    objectFit='contain'
    width={300}
    height={400}
    style={{maxHeight: "600px"}}
  />
</div>
  );
};
