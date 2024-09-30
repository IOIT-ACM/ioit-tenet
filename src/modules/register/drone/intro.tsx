import Link from 'next/link';

const DroneWorkshopInfo = () => {
  return (
    <div className='h-fit w-full space-y-8 p-6 pb-20 text-white shadow-lg md:sticky md:top-0'>
      <h1 className='text-2xl font-bold'>
        Be a part of <strong>TENET Tech-Fiesta</strong>
      </h1>
      <p>
        Join us at our immersive <strong>Drone Workshop</strong>.
      </p>

      <p>
        Master the essentials of drone technology at our hands-on drone
        workshop. Get crucial training in
        <strong> drone assembly</strong>, <strong>drone programming</strong>,
        and practice <strong>flight training</strong>.
      </p>

      <p>
        Register at the price of just <strong>₹400/-</strong>
      </p>

      <p>
        Check out the{' '}
        <Link
          href='https://drive.google.com/file/d/1zNICMs-7iVWbwdtVfgk_jiMJ4IrBj__V/view?usp=sharing'
          target='_blank'
          rel='noopener noreferrer'
          className='text-blue-300 hover:underline'
        >
          workshop deliverables
        </Link>{' '}
        for more details.
      </p>

      <div className='space-y-2'>
        <p>
          <strong>📍 Venue:</strong> AISSMS IOIT, Pune
        </p>
        <p>
          <strong>📅 Dates:</strong> 4th October, 2024
        </p>
      </div>

      <Link
        href='/events/drone-workshop'
        className='mt-1 flex w-fit text-gray-200 underline'
      >
        View event details
      </Link>

      <div className='space-y-2'>
        <p>
          <strong>For any queries, contact:</strong>
        </p>
        <Link href='tel:8669033795' className='text-blue-300 hover:underline'>
          Shreya Kulkarni: 8669033795
        </Link>
      </div>
    </div>
  );
};

export default DroneWorkshopInfo;
