import Image from 'next/image';

export const Target = ({ imgSrc }: { imgSrc: string }) => {
  return (
    <div className="flex justify-center items-center w-full h-full border border-gray-300">
      <Image 
        src={imgSrc} 
        alt="target" 
        layout="responsive"
        objectFit="cover"
        width={400} 
        height={400}
      />
    </div>
  );
};

